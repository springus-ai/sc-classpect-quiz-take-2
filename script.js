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

const isEn = localStorage.getItem("language") === "en";

function getUIText(key, fallback) {
    if (typeof classpectDescriptions !== 'undefined' && classpectDescriptions[key]) {
        return classpectDescriptions[key];
    }
    return fallback;
}

let activeQuestion = null;
let viewerClass = "";
let viewerAspect = "";

const LIBRARY_ASPECTS = ["Time", "Space", "Void", "Light", "Mind", "Heart", "Rage", "Hope", "Doom", "Life", "Blood", "Breath"];
const LIBRARY_CLASSES = ["Prince", "Bard", "Thief", "Rogue", "Mage", "Seer", "Witch", "Heir", "Knight", "Page", "Maid", "Sylph"];

let libraryState = {
    section: 'aspects',
    search: '',
    selectedClass: 'Knight',
    selectedAspect: 'Time'
};

const ASPECT_COLORS = {
    Breath: { main: '#0086eb', accent: '#10e0ff' },
    Blood:  { main: '#ba1915', accent: '#3d1909' },
    Space:  { main: '#000000', accent: '#ffffff' },
    Time:   { main: '#b70d0e', accent: '#ff2106' },
    Light:  { main: '#f98100', accent: '#fff547' },
    Void:   { main: '#033476', accent: '#00164f' },
    Mind:   { main: '#50b250', accent: '#46fbc4' },
    Heart:  { main: '#bd1864', accent: '#6e0e2e' },
    Rage:   { main: '#391e71', accent: '#9c4dad' },
    Hope:   { main: '#d99a00', accent: '#ffe094' },
    Doom:   { main: '#20401f', accent: '#000000' },
    Life:   { main: '#5d9f3f', accent: '#77c350' }
};

function getAspectColors(aspectName) {
    return ASPECT_COLORS[aspectName] || { main: '#49a6c8', accent: '#2f7f9f' };
}

function aspectStyleVars(aspectName) {
    const colors = getAspectColors(aspectName);
    return `--aspect-main:${colors.main}; --aspect-accent:${colors.accent};`;
}


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
        
        state.classScores.Prince = (state.classScores.Prince || 0) + 3; 
        state.classScores.Bard = (state.classScores.Bard || 0) + 3;

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
        : "";
    
    let transitionText = "";
    if (state.highDestruction) {
        transitionText = isEn
            ? `Your connection to ${state.dominantAspect} is... complicated. There seems to be an active conflict or rejection here.`
            : `Sua conexão com ${state.dominantAspect} é... complicada. Parece haver um conflito ou rejeição ativa aqui.`;
    } else {
        transitionText = isEn
            ? `We've passed the first part. Now let's see how you interact with this aspect.`
            : `Passamos da primeira parte. Agora vamos ver como você interage com esse aspecto.`;
    }

    const labelAspect = isEn ? "ASPECT" : "ASPECTO";
    const btnContinue = isEn ? "CONTINUE TO CLASSES" : "CONTINUAR PARA CLASSES";

    render(`
        <div class="fade-in">
            <h1>${labelAspect}: ${state.dominantAspect.toUpperCase()}</h1>
            <div style="text-align: justify; margin: 20px 0;">${description}</div>
            <p style="color: #00aa00; margin-top: 20px; font-weight: bold;">${transitionText}</p>
            <button onclick="startClassPhase()">${btnContinue}</button>
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
        let colorStyle = `color: #000; font-weight:${isWinner ? 'bold' : 'normal'};`;

        return `<li class="rank-item" onclick="updateResultExplorer('aspect', '${item[0]}')" style="cursor: pointer; border-bottom: 1px solid #ccc; padding: 8px; display: flex; justify-content: space-between; ${colorStyle}">
                    <span>#${index + 1} <strong>${item[0]}</strong></span>
                    <span style="font-family: monospace;">${item[1]} pts</span>
                </li>`;
    }).join('');

    let classListHTML = sortedClasses.map((item, index) => {
        let isWinner = item[0] === finalClass;
        let colorStyle = isWinner ? "color: #000; font-weight:bold;" : "color: #000;";
        return `<li class="rank-item" onclick="updateResultExplorer('class', '${item[0]}')" style="cursor: pointer; border-bottom: 1px solid #333; padding: 8px; display: flex; justify-content: space-between; ${colorStyle}">
                    <span>#${index + 1} <strong>${item[0]}</strong></span>
                    <span style="font-family: monospace;">${item[1]} pts</span>
                </li>`;
    }).join('');

    let explorationButtons = top3ForButtons.map(item => {
        let aspectName = item[0];
        let score = item[1];
        const HATE_THRESHOLD = -7;

        let actionText = isEn ? "TEST" : "TESTAR";

        if (aspectName === state.dominantAspect) {
            actionText = isEn ? "RETAKE" : "REFAZER";
        } 
        else if (score <= HATE_THRESHOLD) {
            actionText = isEn ? "CONFRONT" : "CONFRONTAR";
        }
        else if (score < 0) {
            actionText = isEn ? "EXPLORE" : "EXPLORAR";
        }

        return `<button class="possibility-button" onclick="retryClassTest('${aspectName}')">
                ${actionText} ${aspectName.toUpperCase()}
                </button>`;
    }).join('');

    const uiText = {
        definitiveTitle: isEn ? "Your definitive title is:" : "Seu título definitivo é:",
        analysisComplete: isEn ? "Your Classpect analysis is complete." : "Sua análise de Classpecto foi concluída.",
        aspectRankings: isEn ? "ASPECT RANKINGS" : "RANKING DE ASPECTOS",
        classRankings: isEn ? "CLASS RANKINGS" : "RANKING DE CLASSES",
        explorePossibilities: isEn ? "EXPLORE POSSIBILITIES?" : "EXPLORAR POSSIBILIDADES?",
        restartSession: isEn ? "RESTART SESSION" : "REINICIAR SESSÃO"
    };

    render(`
        <div class="fade-in result-box" style="max-width: 900px; margin: 0 auto; text-align: center; ${aspectStyleVars(finalAspect)}">
            <p style="font-size: 1.2em; margin-bottom: 0;">${uiText.definitiveTitle}</p>
            <h1 id="dynamicTitle" style="text-transform:uppercase; font-size: 3em; margin-top: 5px;">...</h1>
            <p class="result-subtitle" style="font-size: 18px; margin-bottom: 20px;">${uiText.analysisComplete}</p>
            <div id="dynamicDescription" style="padding: 25px; margin: 30px auto; text-align: justify; max-width: 800px; line-height: 1.6; min-height: 200px;">...</div>
            <div class="rankings-wrapper" style="display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; text-align: left;">
                <div class="ranking-column" style="flex: 1; min-width: 300px; background: rgba(0,0,0,0.3); padding: 20px; border: 1px solid #444;">
                    <h3 style="border-bottom: 2px solid var(--aspect-main); padding-bottom: 10px; margin-top: 0;">${uiText.aspectRankings}</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">${aspectListHTML}</ul>
                </div>
                <div class="ranking-column" style="flex: 1; min-width: 300px; background: rgba(0,0,0,0.3); padding: 20px; border: 1px solid #444;">
                    <h3 style="border-bottom: 2px solid var(--aspect-main); padding-bottom: 10px; margin-top: 0;">${uiText.classRankings}</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">${classListHTML}</ul>
                </div>
            </div>
            <div class="possibilities-box" style="margin-top: 40px; padding: 20px;">
                <h3 style="margin-top: 0;">${uiText.explorePossibilities}</h3>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 15px;">
                    ${explorationButtons}
                </div>
            </div>
            <button onclick="location.reload()" style="margin-top: 30px; padding: 15px 30px; font-size: 1.2em; cursor: pointer;">${uiText.restartSession}</button>
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
    const colors = getAspectColors(viewerAspect);
    titleEl.style.color = colors.main;
    titleEl.style.textShadow = `1px 1px 0 #fff, 1px 0 0 ${colors.accent}`;
    descEl.style.setProperty('--aspect-main', colors.main);
    descEl.style.setProperty('--aspect-accent', colors.accent);
    const resultBox = document.querySelector('.result-box');
    if (resultBox) {
        resultBox.style.setProperty('--aspect-main', colors.main);
        resultBox.style.setProperty('--aspect-accent', colors.accent);
    }

    const dbKey = `${viewerClass}:${viewerAspect}`;

    let content = "";
    
    if (typeof classpectDescriptions !== 'undefined') {
        if (classpectDescriptions[dbKey]) {
            content = classpectDescriptions[dbKey];
        } 
        else {
            content = isEn
                ? `<p>Combined description not found for [${dbKey}]. Check the descriptions file.</p>`
                : `<p>Descrição combinada não encontrada para [${dbKey}]. Verifique o arquivo de descrições.</p>`;
        }
    } else {
        content = isEn 
            ? "<p>Database offline.</p>" 
            : "<p>Banco de dados offline.</p>";
    }

    descEl.innerHTML = content;
}


function getLibraryTitle(key) {
    if (key.includes(':')) {
        const [cls, asp] = key.split(':');
        return `${cls} of ${asp}`;
    }
    return key.toUpperCase();
}

function getLibrarySectionItems(section) {
    if (section === 'aspects') {
        return LIBRARY_ASPECTS.slice();
    }
    if (section === 'classes') {
        return LIBRARY_CLASSES.slice();
    }
    return LIBRARY_CLASSES.flatMap(cls => LIBRARY_ASPECTS.map(asp => `${cls}:${asp}`));
}

function getLibraryFilteredItems() {
    const term = (libraryState.search || '').trim().toLowerCase();
    const items = getLibrarySectionItems(libraryState.section);
    if (!term) return items;

    return items.filter(item => {
        if (item.toLowerCase().includes(term)) return true;
        if (item.includes(':')) {
            const [cls, asp] = item.split(':');
            const pretty = `${cls} of ${asp}`.toLowerCase();
            return pretty.includes(term);
        }
        return false;
    });
}

function openLibrary(section = 'aspects') {
    libraryState.section = section;
    libraryState.search = '';

    const titleHeader = isEn ? "SBURBIO ARCHIVES" : "ARQUIVOS DA SBURBIO";
    const introText = isEn 
        ? "Here you can consult descriptions of Aspects, Classes, and Classpect combinations without retaking the quiz."
        : "Aqui você pode consultar descrições de Aspectos, Classes e combinações de Classpects sem precisar refazer o quiz.";
    
    const tabAspects = isEn ? "Aspects" : "Aspectos";
    const tabClasses = isEn ? "Classes" : "Classes";
    const tabClasspects = isEn ? "Classpects" : "Classpects";
    
    const searchPlaceholder = isEn ? "Search by name..." : "Buscar por nome...";
    const labelClass = isEn ? "Class" : "Classe";
    const labelAspect = isEn ? "Aspect" : "Aspecto";
    const btnRead = isEn ? "Read combination" : "Read combination"; 
    
    const sidebarTitle = section === 'aspects' 
        ? (isEn ? 'Aspects List' : 'Lista de Aspectos') 
        : section === 'classes' 
            ? (isEn ? 'Classes List' : 'Lista de Classes') 
            : (isEn ? 'Classpects List' : 'Lista de Classpects');

    const emptyText = isEn 
        ? "Choose an item from the list to open the description." 
        : "Escolha um item na lista para abrir a descrição.";
        
    const btnBack = isEn ? "BACK" : "VOLTAR";

    render(`
        <div class="fade-in library-shell" style="max-width: 980px; margin: 0 auto;">
            <h1>${titleHeader}</h1>
            <p class="library-intro">${introText}</p>

            <div class="library-tabs">
                <button type="button" class="library-tab ${section === 'aspects' ? 'is-active' : ''}" onclick="switchLibrarySection('aspects')">${tabAspects}</button>
                <button type="button" class="library-tab ${section === 'classes' ? 'is-active' : ''}" onclick="switchLibrarySection('classes')">${tabClasses}</button>
                <button type="button" class="library-tab ${section === 'classpects' ? 'is-active' : ''}" onclick="switchLibrarySection('classpects')">${tabClasspects}</button>
            </div>

            <div class="library-toolbar">
                <input
                    id="librarySearch"
                    class="library-search"
                    type="text"
                    placeholder="${searchPlaceholder}"
                    value=""
                    oninput="setLibrarySearch(this.value)"
                >
            </div>

            <div id="classpectControls" class="classpect-controls" style="display:${section === 'classpects' ? 'flex' : 'none'};">
                <label>
                    ${labelClass}
                    <select id="libraryClassSelect" onchange="updateLibrarySelector('class', this.value)">
                        ${LIBRARY_CLASSES.map(cls => `<option value="${cls}" ${cls === libraryState.selectedClass ? 'selected' : ''}>${cls}</option>`).join('')}
                    </select>
                </label>
                <label>
                    ${labelAspect}
                    <select id="libraryAspectSelect" onchange="updateLibrarySelector('aspect', this.value)">
                        ${LIBRARY_ASPECTS.map(asp => `<option value="${asp}" ${asp === libraryState.selectedAspect ? 'selected' : ''}>${asp}</option>`).join('')}
                    </select>
                </label>
                <button type="button" class="library-open-button" onclick="openSelectedClasspect()">${btnRead}</button>
            </div>

            <div class="library-layout">
                <aside class="library-sidebar">
                    <h3 id="libraryListTitle">${sidebarTitle}</h3>
                    <div id="libraryListMeta" class="library-list-meta"></div>
                    <ul id="libraryList" class="library-list"></ul>
                </aside>

                <section class="library-main">
                    <div id="libraryEmptyState" class="library-empty-state">
                        <p>${emptyText}</p>
                    </div>
                    <div id="libraryDisplay" style="padding: 25px; margin: 0 auto; text-align: justify; max-width: 800px; display:none;">
                        <h2 id="libTitle" style="margin-top:0;"></h2>
                        <div id="libBody"></div>
                    </div>
                </section>
            </div>

            <button onclick="location.reload()" style="margin-top:20px; padding: 10px 20px; font-size: 1em; cursor: pointer; max-width: 220px;">${btnBack}</button>
        </div>
    `);

    renderLibraryList();
}

function switchLibrarySection(section) {
    libraryState.section = section;
    libraryState.search = '';

    const searchInput = document.getElementById('librarySearch');
    if (searchInput) searchInput.value = '';

    const controls = document.getElementById('classpectControls');
    if (controls) {
        controls.style.display = section === 'classpects' ? 'flex' : 'none';
    }

    document.querySelectorAll('.library-tab').forEach(btn => {
        const text = btn.textContent.trim().toLowerCase();
        const isTabActive = (section === 'aspects' && (text === 'aspectos' || text === 'aspects')) ||
                            (section === 'classes' && text === 'classes') ||
                            (section === 'classpects' && text === 'classpects');
        btn.classList.toggle('is-active', isTabActive);
    });

    const title = document.getElementById('libraryListTitle');
    if (title) {
        title.textContent = section === 'aspects' 
            ? (isEn ? 'Aspects List' : 'Lista de Aspectos') 
            : section === 'classes' 
                ? (isEn ? 'Classes List' : 'Lista de Classes') 
                : (isEn ? 'Classpects List' : 'Lista de Classpects');
    }

    const display = document.getElementById('libraryDisplay');
    const emptyState = document.getElementById('libraryEmptyState');
    if (display) display.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';

    renderLibraryList();
}

function setLibrarySearch(value) {
    libraryState.search = value;
    renderLibraryList();
}

function updateLibrarySelector(type, value) {
    if (type === 'class') {
        libraryState.selectedClass = value;
    } else {
        libraryState.selectedAspect = value;
    }
}

function openSelectedClasspect() {
    const key = `${libraryState.selectedClass}:${libraryState.selectedAspect}`;
    renderLibraryItem(key);
}

function renderLibraryList() {
    const list = document.getElementById('libraryList');
    const meta = document.getElementById('libraryListMeta');
    if (!list) return;

    const items = getLibraryFilteredItems();

    if (items.length === 0) {
        list.innerHTML = `<li class="library-no-results">${isEn ? "No items found." : "Nenhum item encontrado."}</li>`;
        return;
    }

    list.innerHTML = items.map(item => {
        let style = '';
        let label = item;

        if (item.includes(':')) {
            const [, asp] = item.split(':');
            const colors = getAspectColors(asp);
            label = item.replace(':', ' of ');
            style = `--item-color:${colors.main};`;
        } else if (ASPECT_COLORS[item]) {
            const colors = getAspectColors(item);
            style = `--item-color:${colors.main};`;
        }

        return `<li class="library-list-item" style="${style}" onclick="renderLibraryItem('${item}')">${label}</li>`;
    }).join('');
}
function renderLibraryItem(key) {
    const display = document.getElementById('libraryDisplay');
    const title = document.getElementById('libTitle');
    const body = document.getElementById('libBody');
    const emptyState = document.getElementById('libraryEmptyState');

    if (typeof classpectDescriptions !== 'undefined' && classpectDescriptions[key]) {
        const aspectName = key.includes(':') ? key.split(':')[1] : (ASPECT_COLORS[key] ? key : '');

        title.innerText = getLibraryTitle(key);
        let renderedContent = classpectDescriptions[key];

        if (key.includes(':')) {
            const [cls, asp] = key.split(':');
            renderedContent = renderedContent.replace(/<h3[^>]*>[\s\S]*?<\/h3>\s*/i, `<h3>${cls.toUpperCase()} OF ${asp.toUpperCase()}</h3>`);
        }

        body.innerHTML = renderedContent;
        display.style.display = 'block';
        if (emptyState) emptyState.style.display = 'none';

        if (aspectName && ASPECT_COLORS[aspectName]) {
            const colors = getAspectColors(aspectName);
            display.style.setProperty('--aspect-main', colors.main);
            display.style.setProperty('--aspect-accent', colors.accent);
            title.style.color = colors.main;
            title.style.textShadow = 'none';
        } else {
            display.style.removeProperty('--aspect-main');
            display.style.removeProperty('--aspect-accent');
            title.style.color = '#111';
            title.style.textShadow = 'none';
        }

        if (key.includes(':')) {
            const [cls, asp] = key.split(':');
            libraryState.selectedClass = cls;
            libraryState.selectedAspect = asp;
            const clsSelect = document.getElementById('libraryClassSelect');
            const aspSelect = document.getElementById('libraryAspectSelect');
            if (clsSelect) clsSelect.value = cls;
            if (aspSelect) aspSelect.value = asp;
        }
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

    const txtBack = isEn ? "Back" : "Voltar";
    const txtSkip = isEn ? "None of the above." : "Nenhuma das anteriores.";

    if (state.questionCount > 0 || state.stage === "class_quiz") {
        html += `<button class="back-button" onclick="handleBack()">${txtBack}</button>`;
    }
    
    html += `<button class="skip-button" onclick="handleSkip()">${txtSkip}</button>`;
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
    if (typeof classpectDescriptions !== 'undefined' && classpectDescriptions["UI_NullEnding"]) {
        render(classpectDescriptions["UI_NullEnding"]);
    } else {
        render(`
            <div class="fade-in result-container" style="text-align: center; padding: 2rem;">
                <h1>TEM ALGO DE ERRADO AQUI.</h1>
                <p style="font-style: italic; opacity: 0.8;">NENHUM CLASSPECT ATRIBUÍDO.</p>
                <div class="analysis-text" style="margin-top: 2rem;">
                    <p>Você me fez morder a fronha. Quer dizer que você abriu esse teste só para clicar em "Nenhuma das anteriores" tipo, 30 vezes? Poxa.</p>
                </div>
                <button class="retry-button" onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px;">Tente novamente.</button>
            </div>
        `);
    }
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

    render(introText);
};
