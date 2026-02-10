let state = {
    stage: "intro",
    aspectScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    classScores: { Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Mage: 0, Seer: 0, Witch: 0, Heir: 0, Knight: 0, Page: 0, Maid: 0, Sylph: 0 },
    dominantAspect: "",
    highDestruction: false,
    skipCount: 0,
    questionCount: 0,
    currentQueue: [],
    history: []
};

let activeQuestion = null;
let viewerClass = "";
let viewerAspect = "";

function start() {
    document.body.classList.remove('red-mode');
    state.stage = "aspect_quiz";
    state.questionCount = 0;
    
    if (typeof aspectQuestions === 'undefined') {
        alert("manutenção acontecendo! espera um pouco.");
        return;
    }
    
    renderQuestion(aspectQuestions[0]);
}

function handleInput(optIndex) {
    let currentQ = activeQuestion;
    if (!currentQ) return; 

    state.history.push(JSON.parse(JSON.stringify({
        aspectScores: state.aspectScores,
        classScores: state.classScores,
        questionCount: state.questionCount,
        stage: state.stage,
        currentQueue: state.currentQueue,
        dominantAspect: state.dominantAspect
    })));

    let selectedOpt = currentQ.opts[optIndex];
    
    if (state.stage === "aspect_quiz") {
        // 1. Processar os Pesos (ISSO FICA)
        for (let [key, val] of Object.entries(selectedOpt.w)) {
            state.aspectScores[key] = (state.aspectScores[key] || 0) + val;
        } 

        state.questionCount++;
        if (state.questionCount < aspectQuestions.length) {
            renderQuestion(aspectQuestions[state.questionCount]);
        } else {
            finishAspectPhase();
        }

    } else if (state.stage === "class_quiz") {
        for (let [cls, val] of Object.entries(selectedOpt.w)) {
            state.classScores[cls] = (state.classScores[cls] || 0) + val;
        }
        state.questionCount++;
        if (state.questionCount < state.currentQueue.length) {
            renderQuestion(state.currentQueue[state.questionCount]);
        } else {
            finishClassPhase();
        }
    }
}

function finishAspectPhase() {
    
    const opposingAspects = {
        "Time": "Space", "Space": "Time",
        "Heart": "Mind", "Mind": "Heart",
        "Hope": "Rage", "Rage": "Hope",
        "Light": "Void", "Void": "Light",
        "Life": "Doom", "Doom": "Life",
        "Breath": "Blood", "Blood": "Breath"
    };

    let naturalAspect = "";
    let maxRawScore = -999;

    for (let asp in state.aspectScores) {
        if (state.aspectScores[asp] > maxRawScore) {
            maxRawScore = state.aspectScores[asp];
            naturalAspect = asp;
        }
    }

    let inverseAspect = "";
    let minRawScore = 999;

    for (let asp in state.aspectScores) {
        if (state.aspectScores[asp] < minRawScore) {
            minRawScore = state.aspectScores[asp];
            inverseAspect = asp;
        }
    }

    let aversionMagnitude = Math.abs(minRawScore);

    let isOppositePair = (opposingAspects[naturalAspect] === inverseAspect);
    
    let thresholdMultiplier = isOppositePair ? 0.85 : 1.2;

    const MINIMUM_AVERSION_LEVEL = 10; 

    let isDestructive = (aversionMagnitude >= MINIMUM_AVERSION_LEVEL) && 
                        (aversionMagnitude >= (maxRawScore * thresholdMultiplier));

    if (isDestructive) {
        console.log(`[SYSTEM] Rota de Destruição Detectada.`);
        console.log(`> Máscara: ${naturalAspect} (+${maxRawScore}) | Rejeição: ${inverseAspect} (${minRawScore})`);
        console.log(`> É par oposto? ${isOppositePair ? "SIM (Ghosting)" : "NÃO (Aversão Pura)"}`);
        state.dominantAspect = inverseAspect;
        state.highDestruction = true;
        
        state.classScores.Prince = (state.classScores.Prince || 0) + 10; 
        state.classScores.Bard = (state.classScores.Bard || 0) + 10;

    } else {
        console.log(`[SYSTEM] Rota Padrão.`);
        state.dominantAspect = naturalAspect;
        state.highDestruction = false;
    }

    showAspectResultScreen();
}

function showAspectResultScreen() {
    document.body.classList.remove('red-mode'); 

    let description = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions[state.dominantAspect]) 
        ? classpectDescriptions[state.dominantAspect] 
        : "A influência deste aspecto sobre você é inegável.";
    
    let isForced = (state.aspectScores[state.dominantAspect] === 1 && Object.values(state.aspectScores).reduce((a,b)=>a+b,0) === 1);
    
    let transitionText;
    if (isForced) {
         transitionText = `O universo escolheu por você. Tente não desperdiçar essa segunda chance nas Classes.`;
    } else {
         transitionText = state.highDestruction
            ? `Sua conexão com ${state.dominantAspect} é... complicada. Parece haver um conflito ou rejeição ativa aqui.`
            : `Passamos da primeira parte. Agora vamos ver como você interage com esse aspecto.`;
    }

    render(`
        <div class="fade-in">
            <h1>ASPECTO: ${state.dominantAspect.toUpperCase()}</h1>
            <div style="text-align: justify; margin: 20px 0;">${description}</div>
            <p style="color: #00aa00; margin-top: 20px; font-weight: bold;">${transitionText}</p>
            <button onclick="startClassPhase()">CONTINUAR PARA CLASSES</button>
        </div>
    `);
}

function startClassPhase() {
    state.stage = "class_quiz";
    state.questionCount = 0;
    
    if (typeof questionsByAspect === 'undefined') {
        alert("Erro: Banco de perguntas de classe não encontrado.");
        return;
    }

    state.currentQueue = questionsByAspect[state.dominantAspect] || [];
    if(state.currentQueue.length > 0) {
        renderQuestion(state.currentQueue[0]);
    } else {
        finishClassPhase(); 
    }
}

function finishClassPhase() {
    const sortedAspects = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);
    const sortedClasses = Object.entries(state.classScores).sort((a, b) => b[1] - a[1]);

    const finalClass = sortedClasses[0][0];
    const finalAspect = state.dominantAspect;

    if (!viewerClass) viewerClass = finalClass;
    if (!viewerAspect) viewerAspect = finalAspect;

    const otherAspects = Object.entries(state.aspectScores)
        .filter(([name]) => name !== finalAspect)
        .sort((a, b) => b[1] - a[1]);

    const top3ForButtons = [
        [finalAspect, state.aspectScores[finalAspect]],
        otherAspects[0], 
        otherAspects[1]
    ];


    let aspectListHTML = sortedAspects.map((item, index) => {
        let isWinner = item[0] === finalAspect;
        let colorStyle = isWinner ? "color: #00ff00; font-weight:bold;" : "color: #aaa;";
        if (item[1] < 0) colorStyle = "color: #ff8888;"; 
        return `<li class="rank-item" onclick="updateResultExplorer('aspect', '${item[0]}')" style="cursor: pointer; border-bottom: 1px solid #333; padding: 8px; display: flex; justify-content: space-between; ${colorStyle}">
                    <span>#${index + 1} <strong>${item[0]}</strong></span>
                    <span style="font-family: monospace;">${item[1]} pts</span>
                </li>`;
    }).join('');

    let classListHTML = sortedClasses.map((item, index) => {
        let isWinner = item[0] === finalClass;
        let colorStyle = isWinner ? "color: #00ff00; font-weight:bold;" : "color: #aaa;";
        return `<li class="rank-item" onclick="updateResultExplorer('class', '${item[0]}')" style="cursor: pointer; border-bottom: 1px solid #333; padding: 8px; display: flex; justify-content: space-between; ${colorStyle}">
                    <span>#${index + 1} <strong>${item[0]}</strong></span>
                    <span style="font-family: monospace;">${item[1]} pts</span>
                </li>`;
    }).join('');

    let explorationButtons = top3ForButtons.map(item => {
        let aspectName = item[0];
        let score = item[1];
        const HATE_THRESHOLD = -10; 

        let actionText = "TESTAR";
        let color = "#00ff00"; 
        
        if (aspectName === state.dominantAspect) {
            actionText = "REFAZER";
        } 
        else if (score <= HATE_THRESHOLD) {
            actionText = "CONFRONTAR"; 
            color = "#ff4444"; 
        }
        else if (score < 0) {
            actionText = "EXPLORAR"; 
        }

        return `<button onclick="retryClassTest('${aspectName}')" style="background: transparent; border: 1px solid ${color}; color: ${color}; padding: 10px 15px; cursor: pointer; font-size: 0.9em; transition: 0.2s; flex: 1; min-width: 120px;" onmouseover="this.style.background='rgba(${color === '#ff4444' ? '255,0,0' : '0,255,0'}, 0.2)'" onmouseout="this.style.background='transparent'">
                ${actionText} ${aspectName.toUpperCase()}
                </button>`;
    }).join('');

    render(`
        <div class="fade-in result-box" style="max-width: 900px; margin: 0 auto; text-align: center;">
            <p style="font-size: 1.2em; margin-bottom: 0;">Seu título definitivo é:</p>
            <h1 id="dynamicTitle" style="color:#00ff00; text-transform:uppercase; font-size: 3em; margin-top: 5px; text-shadow: 0 0 15px #005500;">...</h1>
            <p style="font-size: 18px; color: #fff; margin-bottom: 20px;">Sua análise de Classpecto foi concluída.</p>
            <div id="dynamicDescription" style="background: rgba(0, 20, 0, 0.6); border: 1px solid #00ff00; padding: 25px; margin: 30px auto; text-align: justify; max-width: 800px; line-height: 1.6; min-height: 200px;">...</div>
            <div class="rankings-wrapper" style="display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; text-align: left;">
                <div class="ranking-column" style="flex: 1; min-width: 300px; background: rgba(0,0,0,0.3); padding: 20px; border: 1px solid #444;">
                    <h3 style="border-bottom: 2px solid #00ff00; padding-bottom: 10px; margin-top: 0;">RANKING DE ASPECTOS</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">${aspectListHTML}</ul>
                </div>
                <div class="ranking-column" style="flex: 1; min-width: 300px; background: rgba(0,0,0,0.3); padding: 20px; border: 1px solid #444;">
                    <h3 style="border-bottom: 2px solid #00ff00; padding-bottom: 10px; margin-top: 0;">RANKING DE CLASSES</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">${classListHTML}</ul>
                </div>
            </div>
            <div style="margin-top: 40px; background: rgba(0,50,0,0.2); padding: 20px; border: 1px dashed #00ff00;">
                <h3 style="color: #00ff00; margin-top: 0;">EXPLORAR POSSIBILIDADES?</h3>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 15px;">
                    ${explorationButtons}
                </div>
            </div>
            <button onclick="location.reload()" style="margin-top: 30px; padding: 15px 30px; font-size: 1.2em; cursor: pointer;">REINICIAR SESSÃO</button>
        </div>
    `);

    renderResultContent();
}

function updateResultExplorer(type, name) {
    if (type === 'class') {
        viewerClass = name;
    } else if (type === 'aspect') {
        viewerAspect = name;
    }
    renderResultContent();
}

function renderResultContent() {
    const titleEl = document.getElementById('dynamicTitle');
    const descEl = document.getElementById('dynamicDescription');
    
    if (!titleEl || !descEl) return;

    const displayTitle = `${viewerClass} of ${viewerAspect}`;
    titleEl.innerText = displayTitle;

    const dbKey = `${viewerClass}:${viewerAspect}`;

    let content = "";
    
    if (typeof classpectDescriptions !== 'undefined') {
        if (classpectDescriptions[dbKey]) {
            content = classpectDescriptions[dbKey];
        } 
        else {
            content = `<p>Descrição combinada não encontrada para [${dbKey}]. Verifique o arquivo de descrições.</p>`;
        }
    } else {
        content = "<p>Banco de dados offline.</p>";
    }

    descEl.innerHTML = content;
}


function openLibrary() {
    
    const aspects = ["Time", "Space", "Void", "Light", "Mind", "Heart", "Rage", "Hope", "Doom", "Life", "Blood", "Breath"];
    const classes = ["Prince", "Bard", "Thief", "Rogue", "Mage", "Seer", "Witch", "Heir", "Knight", "Page", "Maid", "Sylph"];

    let aspectHTML = aspects.map(a => `<li style="padding:10px; border-bottom:1px solid #333; cursor:pointer;" onclick="renderLibraryItem('${a}')">${a}</li>`).join('');
    let classHTML = classes.map(c => `<li style="padding:10px; border-bottom:1px solid #333; cursor:pointer;" onclick="renderLibraryItem('${c}')">${c}</li>`).join('');

    render(`
        <div class="fade-in" style="text-align: center; max-width: 900px; margin: 0 auto;">
            <h1>ARQUIVOS DO SBURBIO</h1>
            
            <div id="libraryDisplay" style="background: rgba(0, 0, 0, 0.8); border: 1px solid #444; padding: 25px; margin: 20px auto; text-align: justify; max-width: 800px; display:none;">
                <h2 id="libTitle" style="color:#00ff00; margin-top:0;"></h2>
                <div id="libBody"></div>
            </div>

            <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap; text-align:left;">
                <div style="flex:1;"><h3>Aspectos</h3><ul style="list-style:none; padding:0;">${aspectHTML}</ul></div>
                <div style="flex:1;"><h3>Classes</h3><ul style="list-style:none; padding:0;">${classHTML}</ul></div>
            </div>
            <button onclick="location.reload()" style="margin-top:20px; padding: 10px 20px; font-size: 1em; cursor: pointer;">VOLTAR</button>
        </div>
    `);
}

function renderLibraryItem(key) {
    const display = document.getElementById('libraryDisplay');
    const title = document.getElementById('libTitle');
    const body = document.getElementById('libBody');
    
    if (typeof classpectDescriptions !== 'undefined' && classpectDescriptions[key]) {
        title.innerText = key.toUpperCase();
        body.innerHTML = classpectDescriptions[key];
        display.style.display = 'block';
    } else {
        alert("Descrição não encontrada para: " + key);
    }
}

function renderQuestion(q) {
    if(!q) return;
    activeQuestion = q;
    let html = `<h2>${q.t}</h2>`;
    html += `<div class="options-container" style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">`;
    q.opts.forEach((opt, index) => {
        html += `<button onclick="handleInput(${index})">${opt.txt}</button>`;
    });
    html += `</div>`;
    html += `<div class="navigation-controls" style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">`;

    if (state.questionCount > 0 || state.stage === "class_quiz") {
        html += `<button class="back-button" onclick="handleBack()" style="background: #444;">Voltar</button>`;
    }
    
    html += `<button class="skip-button" onclick="handleSkip()" style="background: #222;">Nenhuma das anteriores.</button>`;
    html += `</div>`;
    
    render(html);
}
let lastSkipTime = 0;

function handleSkip() {
    const now = Date.now();
    if (now - lastSkipTime < 300) return;
    lastSkipTime = now;

    state.history.push(JSON.parse(JSON.stringify({
        aspectScores: state.aspectScores,
        classScores: state.classScores,
        questionCount: state.questionCount,
        stage: state.stage,
        currentQueue: state.currentQueue,
        dominantAspect: state.dominantAspect,
        skipCount: state.skipCount 
    })));

    state.skipCount = (state.skipCount || 0) + 1;

    if (state.skipCount >= 10) { 
        renderNullEnding();
        return; 
    }

    state.questionCount++;
    if (state.stage === "aspect_quiz") {
        if (state.questionCount < aspectQuestions.length) {
            renderQuestion(aspectQuestions[state.questionCount]);
        } else {
            finishAspectPhase();
        }
    } else if (state.stage === "class_quiz") {
        if (state.questionCount < state.currentQueue.length) {
            renderQuestion(state.currentQueue[state.questionCount]);
        } else {
            finishClassPhase();
        }
    }
}

function handleBack() {
    if (state.history.length === 0) return;
    
    const lastState = state.history.pop();
    
    state.aspectScores = { ...lastState.aspectScores };
    state.classScores = { ...lastState.classScores };

    state.questionCount = lastState.questionCount;
    state.stage = lastState.stage;
    state.currentQueue = [...lastState.currentQueue]; 
    state.dominantAspect = lastState.dominantAspect;
    
    state.skipCount = lastState.skipCount || 0; 

    const currentList = state.stage === "aspect_quiz" ? aspectQuestions : state.currentQueue;
    
    if (currentList && currentList[state.questionCount]) {
        renderQuestion(currentList[state.questionCount]);
    } else {
    
        renderQuestion(state.currentQueue[0]); 
    }
}

function render(html) {
    const content = document.getElementById('content');
    if(content) content.innerHTML = html;
}

function renderNullEnding() {
    const html = `
        <div class="fade-in result-container" style="text-align: center; padding: 2rem;">
            
            <h1>TEM ALGO DE ERRADO AQUI.</h1>
            <p style="font-style: italic; opacity: 0.8;">NENHUM CLASSPECT ATRIBUÍDO.</p>
            
            <img src="https://i.imgur.com/zcNK5Dk.png" alt="Void Glitch" style="max-width: 250px; width: 100%; height: auto; margin: 20px auto; display: block; border: 1px solid #ff0000; box-shadow: 0 0 10px rgba(255,0,0,0.5);">

            <div class="analysis-text" style="margin-top: 2rem;">
                <p>Você me fez morder a fronha. Quer dizer que você abriu esse teste só para clicar em "Nenhuma das anteriores" tipo, 30 vezes? Poxa.</p>
                
                <p><strong>Vem, vamos de novo. Eu sei que você quer saber o seu resultado de verdade.</strong></p>
            </div>
            
            <button class="retry-button" onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px;">Tente novamente.</button>
        </div>
    `;
    render(html);
}

function retryClassTest(aspectName) {
    state.dominantAspect = aspectName;
    
    state.classScores = { Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Mage: 0, Seer: 0, Witch: 0, Heir: 0, Knight: 0, Page: 0, Maid: 0, Sylph: 0 };
    
    viewerClass = ""; 
    viewerAspect = ""; 
    
    state.stage = "class_quiz";
    state.questionCount = 0;
    
    console.log(`Iniciando teste de classe alternativo para: ${aspectName}`);
    startClassPhase();
}

window.onload = () => {
    const introText = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions["UI_Intro"]) 
        ? classpectDescriptions["UI_Intro"] 
        : "<div class='fade-in'><h1>ERRO</h1><p>Tem algo de errado nos bastidores, mas já estou mexendo nisso.</p><button onclick='start()'>Iniciar.</button></div>";

    const introWithLibrary = introText.replace(
        '<button onclick="start()">Bora ver.</button>', 
        `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 20px;">
            <button onclick="start()" style="width: 200px;">Bora ver.</button>
            <button onclick="openLibrary()" style="width: 200px;">ACESSAR ARQUIVOS</button>
        </div>
        `
    );

    render(introWithLibrary);
};








