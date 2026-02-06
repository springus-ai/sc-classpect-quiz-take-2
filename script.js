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
        // Lógica de Classe
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
    const REQUIRED_NEGATIVE_CONSISTENCY = -12; 

    for (let asp in state.aspectScores) {
        let rawScore = state.aspectScores[asp] || 0;
        let destScore = state.destructionScores[asp] || 0;

        if (rawScore >= 0) {
            finalTotals[asp] = rawScore + destScore; 
        } else {
            if (destScore >= REQUIRED_TAG_SCORE && rawScore <= REQUIRED_NEGATIVE_CONSISTENCY) {
                finalTotals[asp] = Math.abs(rawScore) + destScore; 
            } else {
                finalTotals[asp] = rawScore; 
            }
        }
    }

    let sorted = Object.entries(finalTotals).sort((a, b) => b[1] - a[1]);
    
    if (sorted[0][1] <= -5) { 
        const aspects = Object.keys(state.aspectScores);
        const rngAspect = aspects[Math.floor(Math.random() * aspects.length)];
        state.dominantAspect = rngAspect;
        state.aspectScores[rngAspect] = 1; 
        renderNullAspectEasterEgg(rngAspect); 
        return;
    }

    state.dominantAspect = sorted[0][0];
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

function renderDynamicView() {
    const key = `${viewerClass}:${viewerAspect}`;
    
    const comboText = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions[key]) 
                      ? classpectDescriptions[key] 
                      : `<p>Descrição não encontrada para a chave: <strong>${key}</strong>.</p>`;

    const title = document.getElementById('result-title');
    const combinedContainer = document.getElementById('combined-view-container');
    const comboContent = document.getElementById('combined-content');
    const comboFooter = document.getElementById('combined-footer');
    
    if (title) title.innerHTML = `${viewerClass.toUpperCase()} OF ${viewerAspect.toUpperCase()}`;

    if (combinedContainer) {
        combinedContainer.style.display = 'block';
        if (comboText) {
            comboContent.innerHTML = comboText;
            comboFooter.innerHTML = `Explorando a combinação: (${viewerAspect}) + (${viewerClass})`;
        }
    }
}

function finishClassPhase() {
    let sortedClasses = Object.entries(state.classScores).sort((a, b) => b[1] - a[1]);
    let sortedAspects = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);

    let winnerAspect = state.dominantAspect;
    let otherAspects = sortedAspects.filter(entry => entry[0] !== winnerAspect);
    let winnerEntry = sortedAspects.find(entry => entry[0] === winnerAspect);
    let top3Aspects = [winnerEntry, ...otherAspects].slice(0, 3);

    if (sortedClasses[0][1] <= 0) {
        renderNullEnding();
        return;
    }

    let topClass = sortedClasses[0][0];
    viewerClass = topClass;
    viewerAspect = winnerAspect;
    let top3Classes = sortedClasses.slice(0, 3);

    render(`
        <div class="result-box fade-in">
            <h1 id="result-title" style="font-size: 40px; text-shadow: 0 0 10px #00ff00;">...</h1>
            <p style="font-size: 18px; color: #fff; margin-bottom: 20px;">Sua análise de Classpecto foi concluída.</p>
            
            <div id="combined-view-container" style="display: none; text-align: left; margin: 20px 0; border: 1px solid #005500; padding: 20px; background: rgba(0,20,0,0.5);">
                <h3 style="color: #00ff00; font-size: 14px; margin-bottom: 15px;">ANÁLISE DE CLASSPECT:</h3>
                <div id="combined-content" class="combined-analysis"></div>
                <p id="combined-footer" style="margin-top: 25px; font-size: 0.9em; opacity: 0.8; border-top: 1px dashed #005500; padding-top: 15px;">...</p>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 25px 0;">
                <div class="top3-explorer" style="flex: 1; min-width: 250px; padding: 15px; border: 1px dashed #00ff00; background: rgba(0,40,0,0.3);">
                    <p style="color: #00ff00; font-weight: bold; margin-bottom: 10px; font-size: 14px;">EXPLORAR CLASSES:</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        ${top3Classes.map(item => `
                            <button class="top3-btn" onclick="updateClassView('${item[0]}')" style="padding: 6px 10px; font-size: 11px;">
                                ${item[0]} (${item[1]})
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="top3-explorer" style="flex: 1; min-width: 250px; padding: 15px; border: 1px dashed #00ff00; background: rgba(0,40,0,0.3);">
                    <p style="color: #00ff00; font-weight: bold; margin-bottom: 10px; font-size: 14px;">EXPLORAR ASPECTOS:</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        ${top3Aspects.map(item => `
                            <button class="top3-btn" onclick="updateAspectView('${item[0]}')" style="padding: 6px 10px; font-size: 11px;">
                                ${item[0]} (${item[1]})
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
            <button onclick="location.reload()" style="margin-top:20px;">REINICIAR SESSÃO</button>
        </div>
    `);

    renderDynamicView();
}

window.updateClassView = function(className) {
    viewerClass = className;
    renderDynamicView();
};

window.updateAspectView = function(aspectName) {
    viewerAspect = aspectName;
    renderDynamicView();
};

function renderNullEnding() {
    const nullText = (typeof classpectDescriptions !== 'undefined' && classpectDescriptions["UI_NullEnding"])
        ? classpectDescriptions["UI_NullEnding"]
        : "<h1>Erro Crítico.</h1><p>O universo colapsou.</p><button onclick='location.reload()'>Reiniciar</button>";
    render(nullText);
}

function renderNullAspectEasterEgg(aspect) {
    console.log("Easter egg negativo ativado para: " + aspect);
    renderNullEnding(); 
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

    render(introText);
};



