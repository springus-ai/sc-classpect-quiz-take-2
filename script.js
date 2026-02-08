let state = {
    stage: "intro",
    aspectScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    destructionScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    classScores: { Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Mage: 0, Seer: 0, Witch: 0, Heir: 0, Knight: 0, Page: 0, Maid: 0, Sylph: 0 },
    dominantAspect: "",
    highDestruction: false,
    skipCount: 0,
    questionCount: 0,
    currentQueue: [],
    history: []
};

let activeQuestion = null;

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
        destructionScores: state.destructionScores, 
        questionCount: state.questionCount,
        stage: state.stage,
        currentQueue: state.currentQueue,
        dominantAspect: state.dominantAspect
    })));

    let selectedOpt = currentQ.opts[optIndex];
    
    if (state.stage === "aspect_quiz") {
        for (let [key, val] of Object.entries(selectedOpt.w)) {
            state.aspectScores[key] = (state.aspectScores[key] || 0) + val;
        } 

        if (selectedOpt.destroys) {
            const targets = Array.isArray(selectedOpt.destroys) ? selectedOpt.destroys : [selectedOpt.destroys];
            targets.forEach(aspect => {
                if (state.destructionScores.hasOwnProperty(aspect)) {
                    let baseDestruction = 8; 
                    let currentAversion = state.aspectScores[aspect] || 0;
                    let aversionBonus = currentAversion < 0 ? Math.abs(currentAversion) * 0.5 : 0;
                    state.destructionScores[aspect] += (baseDestruction + aversionBonus);
                }
            });
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
    let finalTotals = {};
    const REQUIRED_TAG_SCORE = 24;
    const DESTRUCTION_THRESHOLD = -12; 

    for (let asp in state.aspectScores) {
        let rawScore = state.aspectScores[asp] || 0;
        let destScore = state.destructionScores[asp] || 0;

        if (destScore >= REQUIRED_TAG_SCORE && rawScore <= DESTRUCTION_THRESHOLD) {
            finalTotals[asp] = { 
                value: rawScore, 
                isDestroyed: true 
            };
        } else {
            finalTotals[asp] = { 
                value: rawScore, 
                isDestroyed: false 
            };
        }
    }

    let sorted = Object.entries(finalTotals).sort((a, b) => {
        const [nameA, dataA] = a;
        const [nameB, dataB] = b;

        if (dataA.isDestroyed && !dataB.isDestroyed) return -1;
        if (!dataA.isDestroyed && dataB.isDestroyed) return 1;

        if (dataA.isDestroyed && dataB.isDestroyed) return dataA.value - dataB.value;

        return dataB.value - dataA.value;
    });

    state.dominantAspect = sorted[0][0];
    state.highDestruction = sorted[0][1].isDestroyed;

    state.aspectScores[state.dominantAspect] = sorted[0][1].value;

    showAspectResultScreen();
}

function showAspectResultScreen() {
    document.body.classList.remove('red-mode'); 

    let score = state.aspectScores[state.dominantAspect] || 0;
    let dest = state.destructionScores[state.dominantAspect] || 0;
    
    if (dest >= 24) { 
        state.highDestruction = true;
    } else {
        state.highDestruction = false;
    }

    if (state.highDestruction) {
        state.classScores.Prince = (state.classScores.Prince || 0) + 3;
        state.classScores.Bard = (state.classScores.Bard || 0) + 3;
        state.classScores.Witch = (state.classScores.Witch || 0) + 2;
    }
    let description = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions[state.dominantAspect]) 
        ? classpectDescriptions[state.dominantAspect] 
        : "A influência deste aspecto sobre você é inegável.";
    
    let isForced = (score === 1 && Object.values(state.aspectScores).reduce((a,b)=>a+b,0) === 1);
    
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

    const finalAspect = state.dominantAspect; 
    const finalClass = sortedClasses[0][0];
    const fullTitle = `${finalClass} of ${finalAspect}`;

    let aspectListHTML = sortedAspects.map((item, index) => {
        let isWinner = item[0] === finalAspect;
        let colorStyle = isWinner ? "color: #00ff00; font-weight:bold;" : "color: #aaa;";
        return `
            <li class="rank-item" onclick="openDescription('${item[0]}')" style="cursor: pointer; border-bottom: 1px solid #333; padding: 8px; display: flex; justify-content: space-between; ${colorStyle}">
                <span>#${index + 1} <strong>${item[0]}</strong></span>
                <span style="font-family: monospace;">${item[1]} pts</span>
            </li>`;
    }).join('');

    let classListHTML = sortedClasses.map((item, index) => {
        let isWinner = item[0] === finalClass;
        let colorStyle = isWinner ? "color: #00ff00; font-weight:bold;" : "color: #aaa;";
        return `
            <li class="rank-item" onclick="openDescription('${item[0]}')" style="cursor: pointer; border-bottom: 1px solid #333; padding: 8px; display: flex; justify-content: space-between; ${colorStyle}">
                <span>#${index + 1} <strong>${item[0]}</strong></span>
                <span style="font-family: monospace;">${item[1]} pts</span>
            </li>`;
    }).join('');

    render(`
        <div class="fade-in result-box" style="max-width: 900px; margin: 0 auto;">
            <p style="font-size: 1.2em; margin-bottom: 0;">Seu título definitivo é:</p>
            <h1 style="color:#00ff00; text-transform:uppercase; font-size: 3em; margin-top: 5px; text-shadow: 0 0 15px #005500;">
                ${fullTitle}
            </h1>
            
            <p style="margin-bottom: 30px; font-size: 0.9em; opacity: 0.8;">
                Clique em qualquer nome abaixo para acessar o arquivo correspondente.
            </p>

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
            
            <button onclick="location.reload()" style="margin-top: 40px; padding: 15px 30px; font-size: 1.2em; cursor: pointer;">REINICIAR SESSÃO</button>
        </div>

        <div id="descModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; align-items:center; justify-content:center;" onclick="closeDescription()">
            <div class="modal-content" style="background:#111; border:2px solid #00ff00; padding:30px; width:90%; max-width:700px; max-height:85vh; overflow-y:auto; position:relative; box-shadow: 0 0 30px rgba(0,255,0,0.2);" onclick="event.stopPropagation()">
                <span style="position:absolute; top:10px; right:20px; cursor:pointer; color:#00ff00; font-size: 30px; font-weight: bold;" onclick="closeDescription()">&times;</span>
                <h2 id="modalTitle" style="color:#00ff00; border-bottom:1px dashed #444; padding-bottom:15px; margin-top: 0;">TITULO</h2>
                <div id="modalBody" style="text-align:justify; line-height:1.6; font-size: 1.1em; color: #ddd;">
                </div>
            </div>
        </div>
    `);
}

function renderNullEnding() {
    const nullText = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions["UI_NullEnding"])
        ? classpectDescriptions["UI_NullEnding"]
        : "<h1>Erro Crítico.</h1><p>O universo colapsou.</p><button onclick='location.reload()'>Reiniciar</button>";
    render(nullText);
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

function handleSkip() {
    state.history.push(JSON.parse(JSON.stringify({
        aspectScores: state.aspectScores,
        classScores: state.classScores,
        destructionScores: state.destructionScores,
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
    state.destructionScores = { ...lastState.destructionScores };
    state.questionCount = lastState.questionCount;
    state.stage = lastState.stage;
    state.currentQueue = [...lastState.currentQueue]; 
    state.dominantAspect = lastState.dominantAspect;
    
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

window.onload = () => {
    const introText = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions["UI_Intro"]) 
        ? classpectDescriptions["UI_Intro"] 
        : "<div class='fade-in'><h1>ERRO</h1><p>Tem algo de errado nos bastidores, mas já estou mexendo nisso.</p><button onclick='start()'>Iniciar.</button></div>";

    // Adiciona botão da biblioteca na intro
    const introWithLibrary = introText.replace(
        "</button>", 
        "</button> <button onclick='openLibrary()' style='margin-left: 10px; background: #444;'>ACESSAR ARQUIVOS</button>"
    );

    render(introWithLibrary);
};

function openDescription(key) {
    const modal = document.getElementById('descModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    let text = "<p>Dados corrompidos ou inexistentes.</p>";
    
    if (typeof classpectDescriptions !== 'undefined') {
        if (classpectDescriptions[key]) {
            text = classpectDescriptions[key];
        } 
        else {
            for (let cat in classpectDescriptions) {
                if (classpectDescriptions[cat] && classpectDescriptions[cat][key]) {
                    text = classpectDescriptions[cat][key];
                    break;
                }
            }
        }
    }

    title.innerText = key.toUpperCase();
    body.innerHTML = text; 
    modal.style.display = "flex";
}

function closeDescription() {
    const modal = document.getElementById('descModal');
    if (modal) modal.style.display = "none";
}

function openLibrary() {
    const aspects = ["Time", "Space", "Void", "Light", "Mind", "Heart", "Rage", "Hope", "Doom", "Life", "Blood", "Breath"];
    const classes = ["Prince", "Bard", "Thief", "Rogue", "Mage", "Seer", "Witch", "Heir", "Knight", "Page", "Maid", "Sylph"];

    let aspectHTML = aspects.map(a => `<li style="padding:10px; border-bottom:1px solid #333; cursor:pointer;" onclick="openDescription('${a}')">${a}</li>`).join('');
    let classHTML = classes.map(c => `<li style="padding:10px; border-bottom:1px solid #333; cursor:pointer;" onclick="openDescription('${c}')">${c}</li>`).join('');

    render(`
        <div class="fade-in">
            <h1>ARQUIVOS DO SBURL</h1>
            <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap; text-align:left;">
                <div style="flex:1;"><h3>Aspectos</h3><ul style="list-style:none; padding:0;">${aspectHTML}</ul></div>
                <div style="flex:1;"><h3>Classes</h3><ul style="list-style:none; padding:0;">${classHTML}</ul></div>
            </div>
            <button onclick="location.reload()" style="margin-top:20px;">VOLTAR</button>
        </div>
        <div id="descModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; align-items:center; justify-content:center;" onclick="closeDescription()">
            <div class="modal-content" style="background:#111; border:2px solid #00ff00; padding:30px; width:90%; max-width:700px; max-height:85vh; overflow-y:auto; position:relative;" onclick="event.stopPropagation()">
                <span style="position:absolute; top:10px; right:20px; cursor:pointer; color:#00ff00; font-size: 30px;" onclick="closeDescription()">×</span>
                <h2 id="modalTitle"></h2>
                <div id="modalBody"></div>
            </div>
        </div>
    `);
}
