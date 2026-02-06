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
let aspectQuestions;
let questionsByAspect; 
let aspectSynopses;
let classSynopses;
let classpectDescriptions; 

let uiText = {}; 
let currentLang = "pt"; 

const DATABASE = {
    pt: {
        
        ui: {
            title: "TESTE DE CLASSPECT DA SBURBIO V1.0",
            intro1: "Oi! Que bom que encontrou esse teste. Eu sou o SC, popularmente conhecido como springus. Talvez você não me conheça, mas espero que bote fé no projeto Sburbio.",
            intro2: "Antes de tudo, vamos falar sobre essa versão 1.0 do teste. Estarei atualizando constantemente as perguntas e pontuações com as observações da comunidade. Aviso que, como é a primeira versão do teste, esperem algumas imprecisões. Por isso mesmo que precisamos rodar alguns testes para encontrar e corrigir os resultados errados.",
            intro3: "As perguntas e pontuações são baseadas no que aprendi com os textos de Dewdrop e Ouroborista, mas me baseio principalmente num coletivo de interpretações individuais e que discuti com meus amigos, GeraFTC, Star e Vozes de Anjos, que me ajudaram na confecção desse quiz. São as outras pessoas que fazem parte do projeto.",
            intro4: "Agora que tiramos isso do caminho e você confia nesse teste (eu espero), vamos cortar o papo e descobrir um pouco sobre você.",
            btnStart: "Bora ver.",

        btnNext: "Próxima",
        btnBack: "Voltar",
        btnSkip: "Nenhuma das anteriores.",

        resultTitleAspect: "ASPECTO:",
            transitionNormal: "Passamos da primeira parte. Agora vamos ver como você interage com esse aspecto.",
            transitionDestruction: "Sua conexão com este aspecto é... complicada. Parece haver um conflito ou rejeição ativa aqui.",
            transitionForced: "O universo escolheu por você. Tente não desperdiçar essa segunda chance.",
            btnContinue: "CONTINUAR PARA CLASSES.",

        finalTitle: "ANÁLISE DE CLASSPECT:",
            finalSubtitle: "Sua análise de Classpecto foi concluída.",
            labelAspect: "O ASPECTO:",
            labelClass: "A CLASSE:",
            exploreCombo: "Explorando a combinação:",
            exploreClasses: "EXPLORAR CLASSES:",
            exploreAspects: "EXPLORAR ASPECTOS:",
            footerNote1: "Lembre-se: Esse teste não será suficiente para te definir...",
            footerNote2: "Se quiser dar qualquer feedback...",
            footerNote3: "Em breve, faremos um site...",
            btnRestart: "REINICIAR SESSÃO"
    
        nullTitle: "TEM ALGO DE ERRADO AQUI.",
            nullSubtitle: "NENHUM CLASSPECT ATRIBUÍDO.",
            nullText1: "Você me fez morder a fronha. Quer dizer que você abriu esse teste só para clicar em 'Nenhuma das anteriores' tipo, 30 vezes? Poxa.",
            nullText2: "Vem, vamos de novo. Eu sei que você quer saber o seu resultado de verdade.",
            btnRetry: "Tente novamente."
            
        },

aspectSynopses = {
    Time: "<strong>Tempo:</strong> Você é orientado a objetivos e brutalmente eficiente. O relógio não lhe assusta; ele toca a sua música. Você entende que fins são necessários e que o sacrifício faz parte do progresso. Você vive em um estado de ansiedade crônica. Você corre contra o relógio não porque gosta, mas porque teme que, se parar por um segundo, tudo desmorone. Sua impaciência é o medo da mortalidade disfarçado de produtividade.",
    Space: "<strong>Espaço:</strong> Você vê o quadro geral. Onde outros veem o fim, você vê o começo de algo novo. Criativo, artístico e fundamentalmente importante, você é o palco onde o universo acontece. Você se sente isolado e desconectado. Sua tendência a esperar passivamente pelo momento certo ou a focar demais na criação física é uma forma de evitar lidar com o fato de que, muitas vezes, você se sente sozinho numa sala cheia de gente.",
    Void: "<strong>Vazio:</strong> Você é o mistério, o potencial não realizado, o segredo. Você opera nas sombras, confortável com o desconhecido e capaz de ver o que os outros ignoram. Você é a tela em branco infinita. Você se esconde porque tem medo de ser julgado ou percebido. É mais seguro ser um nada do que arriscar ser algo e falhar. Sua passividade e apatia são formas de evitar a dor da exposição.",
    Light: "<strong>Luz:</strong> Você quer a verdade, o conhecimento e a relevância. Você ilumina o caminho, manipula a sorte e garante que nada importante passe despercebido. Você joga para ganhar e geralmente ganha. Você tem pavor da irrelevância. Você precisa ser o protagonista, precisa estar certo e precisa que todos vejam isso. Sua busca por conhecimento é, muitas vezes, uma busca desesperada por validação externa e atenção.",
    Mind: "<strong>Mente:</strong> Racional, adaptável e justo. Enquanto outros se perdem tentando definir quem são, você foca obsessivamente em qual caminho tomar. Problemas existem para serem resolvidos e a sua cabeça não descansa enquanto não chegar à uma solução. Você valoriza a lógica acima do viés pessoal e a resolução acima do conforto emocional. Tome cuidado, apesar: seus sentimentos também são capazes de macular seu julgamento.",
    Heart: "<strong>Coração:</strong> Você entende as pessoas — e a si mesmo — em um nível instintivo. Autêntico e apaixonado, você é guiado por seus sentimentos e identidade, servindo como a bússola moral ou emocional do grupo. Você é obcecado pela própria identidade porque, no fundo, sente-se fragmentado. Você sente tudo com tanta intensidade que, às vezes, é difícil separar o que você sente do que é real. Sua autenticidade pode ser apenas teimosia emocional.",
    Rage: "<strong>Raiva:</strong> Você vê as mentiras que sustentam a sociedade e se recusa a aceitá-las. Sua força vem da recusa, do desafio e de uma busca agressiva pela verdade crua, custe o que custar. Você tem medo de ser enganado ou controlado, então rejeita tudo preventivamente. Sua raiva constante e seu cinismo são escudos para não se machucar. Você se fecha em uma única verdade (a sua) e chama isso de objetividade.",
    Hope: "<strong>Esperança:</strong> Você acredita. E porque você acredita, torna-se real. Seu otimismo é uma força da natureza, capaz de inspirar aliados e quebrar probabilidades impossíveis através da pura convicção. Sua fé cega é um mecanismo de negação. Você se apega ao 'como as coisas deveriam ser' para não ter que lidar com 'como as coisas são'. Você prefere viver numa fantasia bonita a enfrentar uma verdade feia.",
    Doom: "<strong>Perdição:</strong> Você entende o sacrifício e as regras inevitáveis do universo. Empático e cauteloso, você sabe que nem tudo tem um final feliz, e usa esse conhecimento para mitigar o desastre para os outros. Você é fatalista. Muitas vezes, você desiste antes mesmo de tentar porque já sabe como vai acabar. Você usa o cinismo e o pessimismo como uma armadura para não se decepcionar, sufocando sua própria esperança no berço.",
    Life: "<strong>Vida:</strong>  Você é energia pura, crescimento e cura. Você acredita que regras existem para serem quebradas em nome da sobrevivência e do luxo. Onde há deserto, você faz crescer uma floresta. Você tem um medo profundo de ser insignificante ou de perder sua autonomia. Sua necessidade de fazer acontecer e de ajudar pode virar dominância. Você atropela os desejos dos outros porque acha que sabe o que é melhor para a sobrevivência deles.",
    Blood: "<strong>Sangue:</strong> Você é a cola que mantém todos unidos. Para você, lealdade, promessas e vínculos são mais fortes que a física. Você é um líder natural ou um companheiro devoto que encontra força na união. Você define seu valor inteiramente pelo que pode fazer pelos outros ou a quem está conectado. Você morre de medo de ficar sozinho ou de ser inútil, o que pode levá-lo a relacionamentos codependentes ou a carregar o peso do mundo nas costas sem reclamar.",
    Breath: "<strong>Suspiro:</strong> Você é o vento que não pode ser contido. Desapegado, flexível e independente, você flutua acima dos problemas e traz movimento para onde há estagnação. Você é a própria definição de liberdade. Sua liberdade é, muitas vezes, apenas escapismo. Você tem pavor de amarras e responsabilidades, então se afasta (física ou emocionalmente) assim que as coisas ficam sérias ou difíceis. Você confunde indiferença com iluminação."
},

classSynopses = {
    Prince: "<strong>Príncipe/Princesa:</strong> Você é a força imparável. Você não lida com nuances, você elimina o problema pela raiz. Ao destruir seu Aspecto (ou destruir com ele), você abre caminho para o novo, agindo com uma precisão quase cirúrgica. Você frequentemente age como o oposto do seu Aspecto porque está ocupado demais tentando aniquilá-lo dentro de si mesmo. Seu perfeccionismo é destrutivo, e você corre o risco de reinar sobre um monte de cinzas se não tiver cuidado.",
    Bard: "<strong>Bardo/Barda:</strong> Ninguém sabe o que esperar de você, e talvez nem você saiba. Você permite que a destruição aconteça passivamente, até o momento em que decide virar a mesa de repente. Você oscila entre a total apatia e a catástrofe explosiva. Sua natureza imprevisível é um mecanismo de defesa para evitar responsabilidades, mas sua recusa em escolher um lado acaba sendo uma escolha por si só.",
    Thief: "<strong>Ladrão/Ladra:</strong> O que você quer, você pega. Você tem a agência e a ousadia para roubar o Aspecto para seu próprio benefício. Você é proativo, engenhoso e não pede desculpas por sobreviver. Seu egoísmo aparente esconde um medo profundo de privação. Você rouba porque, no fundo, sente que não tem nada de valor próprio. Você preenche o vazio interno com o poder que tira dos outros.",
    Rogue: "<strong>Ladino/Ladina:</strong> Você rouba, mas não para si. Você redistribui o Aspecto, tirando de onde sobra e colocando onde falta. Você é o equalizador do grupo, agindo nas sombras para ajudar os amigos. Você tem dificuldade em aceitar o crédito ou o poder para si mesmo. Você doa o Aspecto porque não se sente digno de mantê-lo ou capaz de lidar com ele. Seu altruísmo é, ironicamente, uma forma de evitar o conflito direto.",
    Knight: "<strong>Cavaleiro/Cavaleira:</strong> Você é o escudo da equipe e a arma mais eficiente do grupo. Você explora seu Aspecto com uma habilidade técnica invejável, usando-o para proteger seus aliados a qualquer custo. Toda essa competência e bravata é uma máscara — literalmente ou metaforicamente. Você morre de medo de não ser bom o suficiente, e por isso se esforça em dobro. Você luta para esconder suas próprias inseguranças.",
    Page: "<strong>Escudeiro/Escudeira:</strong> Sua jornada começa difícil. Você parece ter menos do seu Aspecto do que qualquer outra pessoa. Mas, se você sobreviver aos tropeços e à humilhação inicial, seu teto de crescimento é infinito. Você é um investimento de longo prazo. Seu desafio é superar a própria falta e o complexo de inferioridade para se tornar a potência que está destinada a ser. A paciência não é uma virtude, é sua necessidade vital.",
    Maid: "<strong>Criado/Criada:</strong> No início você serve, mas no fim, você é feita de pura ação. Você arruma o Aspecto e cria soluções onde não havia nada. Você é quem garante que o trabalho seja feito, custe o que custar. Você tende a começar a história dependente da vontade alheia. Sua jornada é parar de ser uma ferramenta nas mãos dos outros e começar a servir aos seus próprios interesses, tornando-se a mestre do seu destino.",
    Sylph: "<strong>Sílfide/Sílfido:</strong> Você restaura o que está quebrado e cura o que está ferido. Você tem uma noção inata de como as coisas (e as pessoas) deveriam ser e trabalha incansavelmente para consertá-las. Sua vontade de ajudar pode beirar a interferência. Você acha que sabe o que é melhor para todos, muitas vezes ignorando se eles querem ser curados ou não. Seu desafio é entender que nem tudo precisa do seu toque mágico.",
    Witch: "<strong>Bruxa/Bruxo:</strong> Energética, confiante e muitas vezes perigosa. Você não apenas usa o Aspecto; você o dobra, torce e manipula para servir aos seus caprichos. As leis da física e da magia são meras sugestões para você. Você exibe um controle absoluto sobre seus poderes para compensar a sensação de que não tem controle nenhum sobre sua própria vida ou destino. Sua rebeldia é um grito por autonomia.",
    Heir: "<strong>Herdeiro/Herdeira:</strong> Você é aquele que o universo parece favorecer naturalmente. Onde outros lutam para controlar o Aspecto, você simplesmente se torna ele. As soluções tendem a cair no seu colo, e o vento sopra a seu favor. Sua grande força é também sua armadilha: você costuma ser levado pela correnteza. Seu desafio é parar de ser um passageiro da própria lenda e assumir o volante, antes que sua passividade o torne irrelevante.",
    Mage: "<strong>Mago/Maga:</strong> Você entende o seu Aspecto porque viveu o pior lado dele. Ninguém precisa lhe explicar como o mundo funciona; você tem as cicatrizes para provar que já sabe. Você é o especialista solitário que viu a verdade nua e crua. Seu conhecimento vem da experiência direta, geralmente dolorosa. Você tende a se isolar porque acha que ninguém mais conseguiria compreender o peso do que você sabe. E, muitas vezes, você está certo.",
    Seer: "<strong>Vidente:</strong> Você vê o caminho dourado. Enquanto os outros tateiam no escuro, você tem o mapa, a bússola e o manual de instruções. Você não luta na linha de frente; você diz aos outros onde bater para vencer. O conhecimento é um fardo pesado. Você sofre com a responsabilidade de saber o resultado de cada má decisão que seus amigos tomam. Seu desafio é agir com as informações que tem, em vez de paralisar analisando-as."
},

classpectDescriptions = {
    // --- HOPE (ESPERANÇA) ---
    "Maid:Hope": `
        <h3>MAID OF HOPE (CRIADA/CRIADO DA ESPERANÇA)</h3>
        <p><strong>Que Cria a Esperança / Feita(o) de Esperança.</strong></p>
        <p>Você é a personificação da expressão "se eu não fizer, ninguém faz". Sua relação com a Esperança é de manutenção braçal. Você provavelmente sente que, se parar de sorrir ou de motivar as pessoas ao seu redor por um segundo sequer, todo o grupo vai colapsar em depressão.</p>
        <p>Isso não é altruísmo puro; é uma necessidade de ser necessária(o). Você "cria" otimismo e oportunidades onde não existem porque tem pavor de ficar ociosa e encarar o vazio. O perigo é você se tornar uma mártir da própria positividade, carregando o peso emocional de todos até quebrar, ou recusando-se a aceitar ajuda porque "ninguém mais sabe fazer direito".</p>
    `,
    "Knight:Hope": `
        <h3>KNIGHT OF HOPE (CAVALEIRO/CAVALEIRA DA ESPERANÇA)</h3>
        <p><strong>O que Explora a Esperança / Protege a Esperança.</strong></p>
        <p>O Cavaleiro usa uma máscara, e a sua máscara é a invencibilidade. Você projeta uma aura de confiança inabalável, um carisma magnético que convence qualquer um de que "vai dar tudo certo". Você usa a fé e a convicção como uma arma contundente para resolver problemas.</p>
        <p>Mas, psicologicamente, isso é uma compensação. Você provavelmente morre de medo de ser insuficiente ou de que as coisas *não* deem certo. Então, você performa a Esperança. Você age com tanta certeza que a realidade é obrigada a dobrar, não por magia, mas porque você se recusa a admitir a derrota na frente dos outros.</p>
    `,
    "Thief:Hope": `
        <h3>THIEF OF HOPE (LADRÃO/LADRA DA ESPERANÇA)</h3>
        <p><strong>O que Rouba a Esperança (para si).</strong></p>
        <p>O mundo é um lugar escasso e você decidiu que, se alguém vai se dar bem, será você. Você tem a tendência de monopolizar a validação e o otimismo. Quando alguém tem uma ideia ou um sonho, você instintivamente aponta as falhas ou toma a autoria para si, drenando a motivação alheia para inflar a sua.</p>
        <p>Isso soa cruel, mas é um mecanismo de sobrevivência. Você rouba a convicção dos outros porque não consegue gerá-la internamente. Você precisa que os outros estejam por baixo para que você se sinta no controle do destino. Seu desafio é aprender que a luz dos outros não apaga a sua.</p>
    `,
    "Mage:Hope": `
        <h3>MAGE OF HOPE (MAGO/MAGA DA ESPERANÇA)</h3>
        <p><strong>O que Conhece a Esperança (pelo sofrimento) / Guiado(a) pela Esperança.</strong></p>
        <p>Você não é um otimista; você é um especialista em decepção. Mages compreendem seu aspecto através da vivência dolorosa dele. Você provavelmente já acreditou em algo ou alguém com todas as suas forças e foi traído ou desapontado brutalmente.</p>
        <p>Agora, você conhece as mecânicas da fé melhor que ninguém. Você sabe diferenciar uma causa perdida de uma chance real. Você é o cínico que, no fundo, sabe exatamente onde o milagre está escondido, mas reclama o caminho todo até lá. Sua "magia" é a experiência prática de quem já quebrou a cara e sobreviveu.</p>
    `,
    "Witch:Hope": `
        <h3>WITCH OF HOPE (BRUXA/BRUXO DA ESPERANÇA)</h3>
        <p><strong>Que Manipula a Esperança.</strong></p>
        <p>Sua convicção é uma força da natureza, mas ela é totalmente volátil. Você tem a capacidade de alterar o "clima" moral de uma sala instantaneamente. Se você está feliz, todos acreditam que podem voar; se está triste, o mundo acabou.</p>
        <p>Você manipula a verdade e a crença — às vezes de forma gaslighting, às vezes de forma inspiradora — para quebrar as regras que te prendem. Você rejeita a realidade factual se ela não te agrada e impõe a sua própria narrativa com tanta intensidade que os outros acabam concordando só para não serem atropelados pela sua energia.</p>
    `,
    "Prince:Hope": `
        <h3>PRINCE OF HOPE (PRÍNCIPE/PRINCESA DA ESPERANÇA)</h3>
        <p><strong>O que Destrói a Esperança / Destrói com a Esperança.</strong></p>
        <p>Você é o cético militante. Para você, a "esperança" é sinônimo de ilusão, mentira e fraqueza. Você se orgulha de ser lógico, realista e de destruir as fantasias bobas dos seus amigos "pelo bem deles". Você corta o mal pela raiz antes que a decepção aconteça.</p>
        <p>No entanto, a ironia do Príncipe é que ele age como o fantasma do aspecto oposto (Rage). Ao destruir a fé alheia, você exibe uma teimosia e uma crença na sua própria "verdade" que é tão irracional quanto a fé que você critica. Você destrói possibilidades, fechando caminhos porque tem medo de percorrê-los.</p>
    `,
    "Sylph:Hope": `
        <h3>SYLPH OF HOPE (SÍLFIDE/SILFO DA ESPERANÇA)</h3>
        <p><strong>Que Cura a Esperança / Conserta a Esperança.</strong></p>
        <p>Você é a "intrometida" benevolente. Você não suporta ver as pessoas tristes, sem rumo ou céticas. Você sente uma compulsão quase maternal de "consertar" as crenças dos outros, oferecendo conselhos não solicitados, perspectivas positivas e soluções espirituais.</p>
        <p>O lado sombrio disso é a recusa em deixar as pessoas sentirem a dor necessária. Você tenta curar o que não está quebrado ou força uma positividade tóxica porque a desesperança alheia te incomoda pessoalmente. Você quer que todos acreditem, desde que acreditem do *seu* jeito.</p>
    `,
    "Page:Hope": `
        <h3>PAGE OF HOPE (ESCUDEIRO/ESCUDEIRA DA ESPERANÇA)</h3>
        <p><strong>O que Serve a Esperança / É servido(a) pela Esperança.</strong></p>
        <p>Sua jornada é a mais longa. Inicialmente, você parece ter um déficit de convicção. Você é influenciável, ingênuo, talvez até um pouco "bobo", buscando desesperadamente alguém ou algo em que acreditar porque não confia no seu próprio taco.</p>
        <p>Sua "Resposta" é a busca por validação externa. Mas o potencial do Page é o transbordamento: se você sobreviver à fase de ser capacho, você desenvolve uma fé tão absurda e inabalável que se torna o pilar moral do grupo. O desafio é parar de esperar que o herói apareça e perceber que a narrativa é sua.</p>
    `,
    "Rogue:Hope": `
        <h3>ROGUE OF HOPE (LADINO/LADINA DA ESPERANÇA)</h3>
        <p><strong>O que Rouba a Esperança (para redistribuir).</strong></p>
        <p>Você é o amigo que abre mão da própria felicidade para ver os outros sorrirem. Diferente do Ladrão, você pega a Esperança (o otimismo, a chance, a oportunidade) e a repassa. Você se convence de que não precisa dela, ou de que não a merece.</p>
        <p>Você "rouba" a chance de sucesso de si mesmo para dar a um aliado. É um comportamento nobre, mas autodestrutivo. Você lida com a pressão da realidade fugindo dela e focando nos problemas dos outros. No fim do dia, você é o terapeuta do grupo que chora sozinho no banho.</p>
    `,
    "Seer:Hope": `
        <h3>SEER OF HOPE (VIDENTE DA ESPERANÇA)</h3>
        <p><strong>Que Vê a Esperança / Guia pela Esperança.</strong></p>
        <p>Você não segue cegamente; você entende a mecânica da fé. Você olha para um mar de possibilidades e sabe dizer qual é a fantasia e qual é o caminho viável. Você é o estrategista do otimismo.</p>
        <p>Enquanto os outros oscilam entre euforia e desespero, você mantém a cabeça fria, analisando o que é moralmente certo e o que vale a pena perseguir. Sua falha pode ser a paralisia: ver tantas possibilidades e consequências éticas que você demora a agir, ou se frustra com a cegueira daqueles que não veem o caminho óbvio que você traçou.</p>
    `,
    "Heir:Hope": `
        <h3>HEIR OF HOPE (HERDEIRO/HERDEIRA DA ESPERANÇA)</h3>
        <p><strong>O que Herda a Esperança / Protegido(a) pela Esperança.</strong></p>
        <p>As coisas parecem simplesmente "dar certo" para você. Você tem uma flutuabilidade natural; problemas graves deslizam sobre você como água. Você tende a se deixar levar pela correnteza, confiando que o universo vai prover — e, irritantemente para os outros, ele geralmente provê.</p>
        <p>Sua passividade é sua defesa. Você se torna a própria Esperança, incorporando um otimismo que pode beirar a alienação. O perigo é você se desconectar tanto da realidade negativa que se torna incapaz de lidar com problemas reais quando a sorte finalmente acaba.</p>
    `,
    "Bard:Hope": `
        <h3>BARD OF HOPE (BARDO/BARDA DA ESPERANÇA)</h3>
        <p><strong>O que Convida a Destruição da Esperança.</strong></p>
        <p>Você vive num cabo de guerra entre o niilismo zombeteiro e o fanatismo repentino. Geralmente, você é o "estraga-prazeres" passivo, aquele que faz piada na hora séria e desmonta a moral do grupo com cinismo, evitando a responsabilidade de acreditar em algo.</p>
        <p>Mas quando encurralado, sua polaridade inverte. Você abandona a lógica e aposta tudo num milagre impossível, numa fé destrutiva que ignora fatos e consequências. Você é a prova de que a esperança cega é perigosa: ou você não tem nenhuma, ou tem tanta que ela explode na cara de todo mundo.</p>
    `,

    // --- BLOOD (SANGUE) ---
    "Maid:Blood": `
        <h3>MAID OF BLOOD (CRIADA/CRIADO DO SANGUE)</h3>
        <p><strong>Que Cria o Sangue / Feita(o) de Sangue.</strong></p>
        <p>Você é o "cimento" social, mas num nível quase patológico. Sua resposta à solidão é tornar-se indispensável. Você trabalha incansavelmente para manter o grupo unido, organizando encontros, resolvendo brigas e garantindo que ninguém seja excluído.</p>
        <p>No entanto, isso nasce de um medo profundo de abandono. Você sente que, se parar de se esforçar por um minuto, todos vão embora. Você "cria" vínculos onde eles talvez não devessem existir, forçando conexões e carregando o peso emocional de relações unilaterais, tornando-se uma mártir da própria lealdade.</p>
    `,
    "Knight:Blood": `
        <h3>KNIGHT OF BLOOD (CAVALEIRO/CAVALEIRA DO SANGUE)</h3>
        <p><strong>O que Explora o Sangue / Protege o Sangue.</strong></p>
        <p>Você performa a liderança e a camaradagem. Talvez você seja barulhento sobre lealdade, "irmandade" e união, usando essas conexões como uma armadura para esconder sua profunda insegurança social. Você teme ser indigno de amor ou de pertencer, então você compensa sendo o amigo mais leal e defensivo possível.</p>
        <p>Sua habilidade de "armar" seus amigos é literal: você sabe como motivar as pessoas e usar a dinâmica do grupo para resolver problemas externos. Mas cuidado para não usar seus laços como muleta, esquecendo-se de desenvolver sua própria identidade fora do coletivo.</p>
    `,
    "Thief:Blood": `
        <h3>THIEF OF BLOOD (LADRÃO/LADRA DO SANGUE)</h3>
        <p><strong>Que Rouba o Sangue (para si).</strong></p>
        <p>Para você, a atenção e a lealdade são recursos finitos, e você quer a maior fatia. Você tende a monopolizar amigos, criar intrigas sutis para garantir que fulano goste mais de você do que de sicrano, ou exigir provas constantes de lealdade.</p>
        <p>É um mecanismo de defesa de quem se sente vazio por dentro. Você rouba a validação alheia para preencher esse buraco. Você pode ser carismático, atraindo seguidores, mas suas relações tendem a ser parasíticas: você se alimenta da devoção dos outros sem necessariamente retribuir na mesma moeda.</p>
    `,
    "Mage:Blood": `
        <h3>MAGE OF BLOOD (MAGO/MAGA DO SANGUE)</h3>
        <p><strong>O que Conhece o Sangue (pelo sofrimento) / Guiado(a) pelo Sangue.</strong></p>
        <p>Você entende de relacionamentos porque já sofreu muito por causa deles. Você é aquele que vê as linhas invisíveis que conectam as pessoas: quem gosta de quem, quem está traindo quem, onde estão as tensões ocultas. Sua intuição social é afiada pela dor.</p>
        <p>Sua "Realidade" foi, provavelmente, a traição ou o peso de uma responsabilidade que você não pediu. Agora, você navega o mundo social com um cinismo informado. Você sabe que toda promessa tem um custo e que lealdade cega é perigosa. Você guia o grupo não pelo carisma, mas pelo aviso: "eu sei onde isso vai dar errado".</p>
    `,
    "Witch:Blood": `
        <h3>WITCH OF BLOOD (BRUXA/BRUXO DO SANGUE)</h3>
        <p><strong>Que Manipula o Sangue.</strong></p>
        <p>Você não aceita as regras sociais impostas; você as reescreve. Você tem o dom (e a audácia) de misturar grupos que não deveriam se misturar, quebrar tabus de relacionamento ou isolar alguém se achar necessário. Para você, lealdade é massinha de modelar.</p>
        <p>Sua resposta ao peso das obrigações é assumir o controle delas. Você pode ser a pessoa que une inimigos mortais ou que faz uma família inteira cortar relações, dependendo do seu humor e objetivo. O perigo é tratar pessoas como bonecos em sua casinha de bonecas, esquecendo que elas têm vontades próprias.</p>
    `,
    "Prince:Blood": `
        <h3>PRINCE OF BLOOD (PRÍNCIPE/PRINCESA DO SANGUE)</h3>
        <p><strong>O que Destrói o Sangue / Destrói com o Sangue.</strong></p>
        <p>Você é o quebrador de correntes. Você olha para tradições, obrigações familiares e lealdades cegas e vê apenas prisões. Sua tendência é se afastar, cortar laços e incentivar os outros a serem independentes (muitas vezes de forma brusca). O "fantasma" do aspecto oposto (Breath) é forte em você: você anseia por liberdade.</p>
        <p>Porém, você também pode "destruir usando o Sangue": usar a pressão dos pares, o ostracismo ou a culpa coletiva para esmagar alguém. Você é mestre em queimar pontes. O desafio é não acabar sozinho numa ilha deserta que você mesmo construiu.</p>
    `,
    "Sylph:Blood": `
        <h3>SYLPH OF BLOOD (SÍLFIDE/SILFO DO SANGUE)</h3>
        <p><strong>Que Cura o Sangue / Conserta o Sangue.</strong></p>
        <p>Você é a mediadora compulsiva. Você não suporta ver brigas, desentendimentos ou "climão". Sua missão autoimposta é garantir que todos se deem bem, muitas vezes varrendo problemas reais para debaixo do tapete em nome da harmonia.</p>
        <p>Isso pode se tornar tóxico quando você tenta "curar" relacionamentos que deveriam acabar, forçando pessoas a perdoarem abusos ou a manterem laços falidos porque "família é tudo". Você precisa aprender que nem todo vínculo merece ser salvo e que o conflito às vezes é saudável.</p>
    `,
    "Page:Blood": `
        <h3>PAGE OF BLOOD (ESCUDEIRO/ESCUDEIRA DO SANGUE)</h3>
        <p><strong>O que Serve o Sangue / É servido(a) pelo Sangue.</strong></p>
        <p>Sua jornada começa com a dificuldade de conexão. Você provavelmente se sentiu deslocado, esquisito ou solitário por muito tempo, tentando desesperadamente agradar para ser aceito. Você serve às relações, deixando que pisem em você só para não ficar sozinho.</p>
        <p>O potencial do Page, porém, é explosivo. Se você superar essa fase de capacho, você tem a capacidade de inspirar uma lealdade inabalável. Você pode unir os desajustados e criar uma "família encontrada" incrivelmente forte, não pela força, mas porque você entende o valor de ser aceito.</p>
    `,
    "Rogue:Blood": `
        <h3>ROGUE OF BLOOD (LADINO/LADINA DO SANGUE)</h3>
        <p><strong>O que Rouba o Sangue (para redistribuir).</strong></p>
        <p>Você é o mártir social. Você abre mão do seu lugar no círculo para que outra pessoa possa entrar. Você pega a conexão e o afeto que seriam direcionados a você e os desvia para outros, agindo como um cupido de amizades enquanto se mantém à margem.</p>
        <p>Sua dificuldade é aceitar que você também merece pertencer. Você lida com a complexidade das relações fugindo delas, focando nos problemas dos outros para não ter que lidar com sua própria solidão. Você conecta o mundo, mas vive desconectado.</p>
    `,
    "Seer:Blood": `
        <h3>SEER OF BLOOD (VIDENTE DO SANGUE)</h3>
        <p><strong>Que Vê o Sangue / Guia pelo Sangue.</strong></p>
        <p>Você não precisa estar no centro da festa para entender a festa. Você observa. Você entende hierarquias, dinâmicas de poder, quem gosta de quem e porquê. Você navega o mundo social com um mapa mental detalhado.</p>
        <p>Sua função é guiar os outros através dessas águas turvas: "não fale com ele hoje", "essa aliança é perigosa", "eles precisam ouvir isso". O risco é a paralisia por análise ou tornar-se um fofoqueiro glorificado que sabe tudo sobre a vida alheia, mas não vive a própria conexão emocional, mantendo uma distância segura e intelectual.</p>
    `,
    "Heir:Blood": `
        <h3>HEIR OF BLOOD (HERDEIRO/HERDEIRA DO SANGUE)</h3>
        <p><strong>O que Herda o Sangue / Protegido(a) pelo Sangue.</strong></p>
        <p>Você tem um magnetismo natural que talvez nem compreenda. As pessoas simplesmente gostam de você, te protegem e querem estar perto. Você "herda" amigos e conexões sem precisar fazer o esforço braçal da Maid.</p>
        <p>Sua resposta à realidade é deixar-se levar por essa correnteza de afeto. O perigo é a complacência: você pode se ver cercado de pessoas que decidem sua vida por você, ou tornar-se dependente dessa proteção coletiva, incapaz de ficar sozinho ou de tomar decisões impopulares.</p>
    `,
    "Bard:Blood": `
        <h3>BARD OF BLOOD (BARDO/BARDA DO SANGUE)</h3>
        <p><strong>O que Convida a Destruição do Sangue.</strong></p>
        <p>Sua relação com compromissos é... complicada. Você é o amigo que some. O que fura o rolê. O que não responde mensagens. Passivamente, sua negligência ou sua natureza "livre" faz com que os laços ao seu redor apodreçam e se desfaçam. Você convida o isolamento.</p>
        <p>Mas, no modo destrutivo ativo, um Bardo de Sangue é aterrorizante. Você pode atrair um elemento tóxico para o grupo que o destrói por dentro, ou pode gerar uma mentalidade de seita/horda tão intensa e irracional que destrói a individualidade de todos. Você oscila entre o eremita total e o líder de um motim caótico.</p>
    `,

    // --- BREATH (Suspiro) ---
    "Maid:Breath": `
        <h3>MAID OF BREATH (CRIADA/CRIADO DO SUSPIRO)</h3>
        <p><strong>Que Cria o Suspiro / Feita(o) de Suspiro.</strong></p>
        <p>Você trabalha duro para parecer despreocupada. Sua liberdade não é natural; é uma construção trabalhosa. Você provavelmente aprendeu cedo que depender dos outros é perigoso, então você "cria" sua própria independência, resolvendo tudo sozinha e recusando ajuda.</p>
        <p>Sua falha é confundir autossuficiência com isolamento. Você se torna "feita(o) de vento": inalcançável, intocável, sempre ocupada(o) demais ou distante demais para criar raízes. Você corre para não ter que parar e perceber que não tem ninguém te esperando na linha de chegada.</p>
    `,
    "Knight:Breath": `
        <h3>KNIGHT OF BREATH (CAVALEIRO/CAVALEIRA DO SUSPIRO)</h3>
        <p><strong>O que Explora o Suspiro / Protege o Suspiro.</strong></p>
        <p>Você performa o desapego. Você é o "cara legal", o "de boa", aquele que nunca deixa nada atingi-lo. Você usa essa indiferença calculada como um escudo (e uma arma) para navegar situações sociais sem se machucar. Se algo dá errado, você finge que nunca se importou mesmo.</p>
        <p>Mas essa armadura de vento é solitária. Ao se proteger contra o impacto emocional e manter todos a uma distância segura, você acaba protegendo sua liberdade ao custo de nunca ter conexões reais. Você é livre, mas sua liberdade é uma cela.</p>
    `,
    "Thief:Breath": `
        <h3>THIEF OF BREATH (LADRÃO/LADRA DO SUSPIRO)</h3>
        <p><strong>Que Rouba o Suspiro (para si).</strong></p>
        <p>Você tem uma necessidade voraz de espaço e destaque, e não se importa em pisar nos outros para conseguir isso. Em um grupo, você "rouba o ar" da sala, monopolizando a liberdade de expressão ou de decisão.</p>
        <p>Seu mecanismo de defesa é a fuga egoísta: quando as coisas ficam difíceis ou as obrigações pesam, você pega o único paraquedas e salta, deixando os outros lidarem com a queda. Você valida sua existência sendo o mais livre, o mais rápido e o mais inalcançável, drenando a autonomia de quem está ao redor para inflar a sua.</p>
    `,
    "Mage:Breath": `
        <h3>MAGE OF BREATH (MAGO/MAGA DO SUSPIRO)</h3>
        <p><strong>O que Conhece o Suspiro (pelo sofrimento) / Guiado(a) pelo Suspiro.</strong></p>
        <p>Você conhece a solidão intimamente. Você provavelmente já foi deixado à deriva ou teve que aprender a se virar sozinho muito cedo. Sua compreensão da liberdade não é romântica; você sabe que ser livre muitas vezes significa ser esquecido.</p>
        <p>Agora, você usa essa vivência para navegar a vida. Você sabe quando uma situação é uma armadilha e sabe exatamente como escapar. Você é o guia que diz "não se apegue a isso, vai te afundar". Seu desafio é parar de ver toda conexão humana como uma corrente em potencial.</p>
    `,
    "Witch:Breath": `
        <h3>WITCH OF BREATH (BRUXA/BRUXO DO SUSPIRO)</h3>
        <p><strong>Que Manipula o Suspiro.</strong></p>
        <p>Você é a rebelião encarnada. Você não apenas quebra regras; você torce a direção do vento. Se alguém diz "vá para a esquerda", você vai para a direita por puro despeito. Você manipula a liberdade, tanto a sua quanto a dos outros, frequentemente isolando pessoas ou libertando-as contra a vontade delas.</p>
        <p>Sua personalidade é volátil e impossível de prender. Você muda de ideia, de grupo e de paixão num piscar de olhos. É divertido, mas perigoso: você corre o risco de viver uma vida sem consistência, onde nada é construído porque você derruba tudo assim que se sente entediada.</p>
    `,
    "Prince:Breath": `
        <h3>PRINCE OF BREATH (PRÍNCIPE/PRINCESA DO SUSPIRO)</h3>
        <p><strong>O que Destrói o Suspiro / Destrói com o Suspiro.</strong></p>
        <p>Você é um paradoxo ambulante. Como Príncipe, você destrói seu aspecto. Isso pode se manifestar como um autoritarismo rígido: você odeia a falta de rumo, odeia a indecisão e impõe regras estritas para sufocar a "bagunça" da liberdade alheia.</p>
        <p>Ou, você destrói *com* o Suspiro: você corta laços com uma brutalidade chocante. Quando você decide que acabou, acabou. Você queima pontes e desaparece (ghosting), destruindo relacionamentos através do distanciamento absoluto. Você elimina nuances e caminhos alternativos até sobrar apenas a sua verdade inflexível.</p>
    `,
    "Sylph:Breath": `
        <h3>SYLPH OF BREATH (SÍLFIDE/SILFO DO SUSPIRO)</h3>
        <p><strong>Que Cura o Suspiro / Conserta o Suspiro.</strong></p>
        <p>Você é a pessoa que diz "calma, respira". Você não suporta ver as pessoas estressadas, presas ou sobrecarregadas. Sua função no grupo é aliviar a tensão, oferecer uma rota de fuga ou simplesmente lembrar a todos que o mundo não vai acabar se eles descansarem.</p>
        <p>O problema é que você pode se tornar uma "habilitadora" da procrastinação ou da irresponsabilidade. Ao tentar "curar" a falta de liberdade dos outros, você pode impedi-los de enfrentar as consequências necessárias de suas ações, mantendo-os numa bolha de conforto que impede o crescimento.</p>
    `,
    "Page:Breath": `
        <h3>PAGE OF BREATH (ESCUDEIRO/ESCUDEIRA DO SUSPIRO)</h3>
        <p><strong>O que Serve o Suspiro / É servido(a) pelo Suspiro.</strong></p>
        <p>Inicialmente, você parece incapaz de se defender ou de tomar decisões próprias. Você se sente preso, sufocado pelas expectativas dos outros, sonhando acordado com uma liberdade que parece impossível. Você serve a narrativa dos outros.</p>
        <p>Mas a jornada do Page é a acumulação. Se você não desistir, esse desejo reprimido explode. Você pode se tornar a personificação da liberdade ilimitada, alguém que inspira multidões a se levantarem. O segredo é parar de pedir permissão para viver a sua própria vida.</p>
    `,
    "Rogue:Breath": `
        <h3>ROGUE OF BREATH (LADINO/LADINA DO SUSPIRO)</h3>
        <p><strong>O que Rouba o Suspiro (para redistribuir).</strong></p>
        <p>Você abre mão da sua própria voz para que outros possam falar. Você assume responsabilidades chatas e pesadas para que seus amigos possam ser livres e se divertir. Você "rouba" a liberdade de si mesmo e a entrega de bandeja para o grupo.</p>
        <p>É uma atitude nobre, mas exaustiva. Você vive vicariamente através das aventuras dos outros enquanto fica preso na retaguarda segurando as pontas. Você precisa entender que o mártir raramente se diverte, e que você também tem o direito de largar tudo e ir embora às vezes.</p>
    `,
    "Seer:Breath": `
        <h3>SEER OF BREATH (VIDENTE DO SUSPIRO)</h3>
        <p><strong>Que Vê o Suspiro / Guia pelo Suspiro.</strong></p>
        <p>Você enxerga os fluxos. Você sabe para onde as coisas estão indo, quais tendências vão pegar e quais caminhos estão livres de obstáculos. Você não necessariamente se move, mas aponta a direção: "o caminho mais fácil é por ali".</p>
        <p>Sua relação com a liberdade é analítica. Você entende a motivação e a autonomia dos outros melhor do que eles mesmos. O perigo é ficar tão focado em analisar todas as rotas de fuga possíveis que você nunca escolhe uma, ficando paralisada na encruzilhada enquanto assiste os outros passarem.</p>
    `,
    "Heir:Breath": `
        <h3>HEIR OF BREATH (HERDEIRO/HERDEIRA DO SUSPIRO)</h3>
        <p><strong>O que Herda o Suspiro / Protegido(a) pelo Suspiro.</strong></p>
        <p>Você é, irritantemente, a pessoa que nunca se dá mal. Você vive com a cabeça nas nuvens e, de alguma forma, o chão sempre aparece para aparar sua queda. Você herda a liberdade; as obrigações tendem a escorregar de você.</p>
        <p>Sua resposta aos problemas é simplesmente flutuar para longe deles. Você pode parecer alheio ou desconectado da realidade, confiando que o "vento" vai te levar para onde você precisa ir. O risco é acordar um dia e perceber que você nunca tomou uma decisão consciente na vida e que o vento te levou para um abismo.</p>
    `,
    "Bard:Breath": `
        <h3>BARD OF BREATH (BARDO/BARDA DO SUSPIRO)</h3>
        <p><strong>O que Convida a Destruição do Suspiro.</strong></p>
        <p>Você é imprevisível. Às vezes, você é a pessoa mais rígida e estagnada do mundo, recusando-se a mudar (convidando a destruição *do* Suspiro/movimento). Você deixa as coisas pararem e apodrecerem por pura apatia.</p>
        <p>Outras vezes, você é o furacão. Você convida a destruição *através* do Suspiro: você causa o caos simplesmente saindo de cena no momento crucial, ou sua atitude despreocupada desmantela estruturas importantes de forma passiva. Você não quebra o vaso; você deixa a janela aberta durante a tempestade e diz "ops" quando ele cai.</p>
    `,

    // --- VOID (VAZIO) ---
    "Maid:Void": `
        <h3>MAID OF VOID (CRIADA/CRIADO DO VAZIO)</h3>
        <p><strong>Que Cria o Vazio / Feita(o) de Vazio.</strong></p>
        <p>Você é a pessoa que resolve tudo nos bastidores e morre de medo de receber crédito. Sua eficiência depende da sua invisibilidade. Você "cria" o Vazio ao limpar os rastros, esconder os erros e manter a máquina funcionando sem que ninguém perceba as engrenagens.</p>
        <p>Sua "Resposta" à pressão é desaparecer no trabalho. Você se sente segura sendo uma ferramenta sem rosto, porque se ninguém te vê, ninguém pode te julgar. O perigo é você se tornar tão eficiente em ser invisível que acaba apagando sua própria identidade, tornando-se um fantasma na própria vida.</p>
    `,
    "Knight:Void": `
        <h3>KNIGHT OF VOID (CAVALEIRO/CAVALEIRA DO VAZIO)</h3>
        <p><strong>O que Explora o Vazio / Protege o Vazio.</strong></p>
        <p>Você veste o mistério como uma armadura. Você projeta uma imagem de alguém "difícil de ler", vago ou propositalmente obscuro. Você usa a falta de informação como uma arma: se ninguém souber quem você realmente é ou o que está planejando, você está seguro.</p>
        <p>Mas essa persona de "agente secreto" ou de "lobo solitário misterioso" é uma compensação. Você teme ser banal ou vulnerável, então esconde suas verdadeiras intenções sob camadas de ironia, omissão e segredos. Você protege seu núcleo vazio com uma barreira impenetrável de "nada".</p>
    `,
    "Thief:Void": `
        <h3>THIEF OF VOID (LADRÃO/LADRA DO VAZIO)</h3>
        <p><strong>Que Rouba o Vazio (para si).</strong></p>
        <p>Você é um acumulador de segredos. Você quer saber tudo sobre todos, mas ninguém sabe nada sobre você. Você "rouba" o Vazio — a obscuridade, a privacidade — para si mesmo, tornando-se indetectável enquanto expõe os outros.</p>
        <p>Sua psicologia é baseada no controle assimétrico. Você se sente poderoso quando é a única pessoa na sala que detém as cartas ocultas. É um mecanismo de defesa paranoico: você deleta sua presença e monopoliza o desconhecido para garantir que nunca será pego de surpresa, deixando os outros vulneráveis e expostos.</p>
    `,
    "Mage:Void": `
        <h3>MAGE OF VOID (MAGO/MAGA DO VAZIO)</h3>
        <p><strong>O que Conhece o Vazio (pelo sofrimento) / Guiado(a) pelo Vazio.</strong></p>
        <p>Você conhece a dor da irrelevância. Você provavelmente já foi excluído, esquecido ou tratado como "nada" por pessoas importantes para você. Você entende o Vazio porque viveu na sombra dele.</p>
        <p>Agora, essa é sua força. Você sabe olhar para onde ninguém está olhando. Você percebe o que *não* foi dito, o que está faltando, os segredos que as pessoas tentam esconder. Enquanto todos olham para a luz, você analisa a escuridão. Você é o cético que sabe que a verdade real é aquela que ninguém quer admitir.</p>
    `,
    "Witch:Void": `
        <h3>WITCH OF VOID (BRUXA/BRUXO DO VAZIO)</h3>
        <p><strong>Que Manipula o Vazio.</strong></p>
        <p>Para você, a verdade é opcional. Você manipula a ignorância e o mistério com maestria. Você é capaz de fazer coisas (ou pessoas) desaparecerem, ou criar mentiras tão convincentes que elas preenchem o vazio da realidade.</p>
        <p>Sua "Resposta" é a reescrita seletiva. Se algo na realidade te machuca, você simplesmente finge que não existe com tanta força que, para todos os efeitos, deixa de existir. Você confunde, despista e altera o que é conhecido. O perigo é você se perder na própria teia de segredos e esquecer o que é real.</p>
    `,
    "Prince:Void": `
        <h3>PRINCE OF VOID (PRÍNCIPE/PRINCESA DO VAZIO)</h3>
        <p><strong>O que Destrói o Vazio / Destrói com o Vazio.</strong></p>
        <p>Você odeia segredos. Você é o destruidor da ambiguidade. Se algo está oculto, você arranca a tampa. Você não suporta a ideia de "não saber", então você destrói o mistério com lógica brutal ou revelações forçadas.</p>
        <p>Por outro lado, você pode agir como um niilista agressivo ("destruir com o Vazio"). Você usa a insignificância das coisas como arma para desmotivar os outros. "Por que tentar se nada importa? Por que se importar se somos poeira estelar?". Você apaga a importância das coisas, destruindo a importância dessas coisas.</p>
    `,
    "Sylph:Void": `
        <h3>SYLPH OF VOID (SÍLFIDE/SILFO DO VAZIO)</h3>
        <p><strong>Que Cura o Vazio / Conserta o Vazio.</strong></p>
        <p>Você é a confidente suprema. As pessoas te contam os segredos mais sombrios porque sentem que você vai guardá-los (curá-los/mantê-los). Você ajuda os outros a se esconderem, a desaparecerem quando precisam de um tempo, ou valida a sensação de não pertencimento deles.</p>
        <p>No entanto, você pode ser passiva demais diante da ignorância. Você prefere varrer a sujeira para debaixo do tapete para manter a paz, permitindo que segredos tóxicos apodreçam uma relação só para não ter que lidar com a exposição feia da verdade. Você oferece o conforto da negação.</p>
    `,
    "Page:Void": `
        <h3>PAGE OF VOID (ESCUDEIRO/ESCUDEIRA DO VAZIO)</h3>
        <p><strong>O que Serve o Vazio / É servido(a) pelo Vazio.</strong></p>
        <p>Sua história começa com a invisibilidade total. Você é o figurante na própria vida, aquele que ninguém lembra o nome, o que é sempre interrompido quando fala. Você "serve" à irrelevância, acreditando que não tem nada a oferecer.</p>
        <p>Mas o Vazio é potencial infinito. Se você persistir, essa obscuridade se torna sua maior vantagem. Ninguém te vê chegando. Quando você finalmente age, é com a força do desconhecido, tirando soluções e poderes "do nada". Você deixa de ser o "joão-ninguém" para ser o mistério que ninguém consegue decifrar ou conter.</p>
    `,
    "Rogue:Void": `
        <h3>ROGUE OF VOID (LADINO/LADINA DO VAZIO)</h3>
        <p><strong>O que Rouba o Vazio (para redistribuir).</strong></p>
        <p>Você rouba a obscuridade. Isso pode significar que você traz à tona coisas que estavam escondidas (rouba o Vazio de um objeto/ideia, tornando-o visível) para ajudar o grupo. Você é aquele que encontra o que estava perdido.</p>
        <p>Ou, emocionalmente, você "rouba" a invisibilidade para si. Você se apaga para que outros possam brilhar. Você assume o papel de "ninguém" ou de bode expiatório silencioso para proteger a reputação ou a visibilidade de um amigo. Você se sacrifica tornando-se esquecível.</p>
    `,
    "Seer:Void": `
        <h3>SEER OF VOID (VIDENTE DO VAZIO)</h3>
        <p><strong>Que Vê o Vazio / Guia pelo Vazio.</strong></p>
        <p>Você não precisa ver para crer. Você navega no escuro com total confiança. Enquanto os outros entram em pânico com a falta de informações ou planos claros, você se sente em casa na incerteza.</p>
        <p>Você enxerga o potencial: o que *poderia* ser, mas ainda não é. Você guia o grupo através do desconhecido, interpretando o silêncio e os segredos. O risco é você ficar tão fascinada pelo que é oculto e teórico que se desconecta da realidade tangível e óbvia que está na sua frente.</p>
    `,
    "Heir:Void": `
        <h3>HEIR OF VOID (HERDEIRO/HERDEIRA DO VAZIO)</h3>
        <p><strong>O que Herda o Vazio / Protegido(a) pelo Vazio.</strong></p>
        <p>Você tem uma habilidade irritante de não estar lá quando a culpa é distribuída. Você "herda" o esquecimento. As pessoas esquecem que você estava envolvido, esquecem suas responsabilidades, ou simplesmente não notam sua presença.</p>
        <p>Você flutua pela vida protegido pela irrelevância. É confortável, mas perigoso. Você pode acabar vivendo uma vida sem impacto, protegido de consequências negativas, mas também isolado de conexões reais, porque, no fundo, ninguém sente que te conhece de verdade. Você é um mistério até para si mesmo.</p>
    `,
    "Bard:Void": `
        <h3>BARD OF VOID (BARDO/BARDA DO VAZIO)</h3>
        <p><strong>O que Convida a Destruição do Vazio.</strong></p>
        <p>Você é o vazamento de informações ambulante. Passivamente, sua presença faz com que segredos venham à tona, planos ocultos falhem e a privacidade de todos seja violada. Você não sabe guardar segredo, ou sua negligência faz a verdade explodir.</p>
        <p>Ou, no modo oposto, você convida a destruição *através* do Vazio: você deixa a apatia, a ignorância e o "deixa pra lá" tomarem conta até que tudo desmorone. Você assiste o mundo queimar não porque quer vê-lo queimar, mas porque simplesmente não se importou o suficiente para fazer algo a respeito. O niilismo passivo é sua arma.</p>
    `,

    // --- LIGHT (LUZ) ---
    "Maid:Light": `
        <h3>MAID OF LIGHT (CRIADA/CRIADO DA LUZ)</h3>
        <p><strong>Que Cria a Luz / Feita(o) de Luz.</strong></p>
        <p>Você não espera ter sorte; você fabrica a sua própria sorte. Você é a pessoa que estuda o triplo do que todo mundo só para se sentir segura. Sua relação com a Luz é de esforço braçal: você busca informações, cursos e validações incessantemente.</p>
        <p>Psicologicamente, isso vem do medo de ser considerada uma fraude ou de ser irrelevante. Você "cria" sua importância tornando-se a pessoa que tem todas as respostas. O perigo é o burnout por tentar manter uma imagem de competência absoluta, recusando-se a admitir quando não sabe algo.</p>
    `,
    "Knight:Light": `
        <h3>KNIGHT OF LIGHT (CAVALEIRO/CAVALEIRA DA LUZ)</h3>
        <p><strong>O que Explora a Luz / Protege a Luz.</strong></p>
        <p>Você usa o intelecto e a informação como uma arma de defesa. Você é o mestre dos debates, aquele que cita dados e fatos para desarmar oponentes. Você projeta uma aura de inteligência afiada e sorte inabalável.</p>
        <p>Mas, por dentro, o Cavaleiro compensa uma insegurança. Você morre de medo de estar errado ou de ser estúpido. A máscara de "sabe-tudo" ou de "pessoa de sucesso" serve para proteger uma autoestima frágil. Você explora a verdade para vencer, não necessariamente para entender.</p>
    `,
    "Thief:Light": `
        <h3>THIEF OF LIGHT (LADRÃO/LADRA DA LUZ)</h3>
        <p><strong>Que Rouba a Luz (para si).</strong></p>
        <p>Você precisa ser o centro das atenções. Não por vaidade fútil, mas por uma necessidade existencial: se os holofotes não estiverem em você, você sente que deixa de existir. Você tende a monopolizar conversas, roubar créditos ou garantir que a sua versão da história seja a única ouvida.</p>
        <p>Sua habilidade é "roubar a sorte" e a relevância. Você sabe como se inserir em situações vantajosas e sair por cima, muitas vezes deixando os outros na sombra. É uma estratégia de sobrevivência de quem tem pavor da irrelevância. O desafio é entender que o brilho dos outros não apaga o seu.</p>
    `,
    "Mage:Light": `
        <h3>MAGE OF LIGHT (MAGO/MAGA DA LUZ)</h3>
        <p><strong>O que Conhece a Luz (pelo sofrimento) / Guiado(a) pela Luz.</strong></p>
        <p>Você viu a verdade, e ela não era bonita. Mages de Luz sofrem pelo excesso de clareza. Você é aquela pessoa que entende a realidade nua e crua, sem os filtros de otimismo que os outros usam. Você vê as falhas nos planos e as mentiras nas pessoas.</p>
        <p>Isso te torna um cínico ou um profeta do apocalipse. Você é guiado por um conhecimento que te isola, pois ninguém gosta da pessoa que aponta os problemas óbvios que todos estão tentando ignorar. Sua lição é aprender a comunicar sua visão sem parecer apenas um pessimista arrogante.</p>
    `,
    "Witch:Light": `
        <h3>WITCH OF LIGHT (BRUXA/BRUXO DA LUZ)</h3>
        <p><strong>Que Manipula a Luz.</strong></p>
        <p>Para você, a verdade é flexível. Você tem um talento assustador para o *framing* (enquadramento). Você consegue pegar um fato e apresentá-lo de uma forma que muda totalmente o significado. Você manipula o que é "importante" e o que é "irrelevante".</p>
        <p>Você edita a realidade social ao seu redor. Você pode fazer um fracasso parecer um sucesso estratégico, ou convencer um grupo de que uma ideia estúpida é genial. É um poder de persuasão imenso, mas perigoso: você corre o risco de acreditar na sua própria propaganda e perder o contato com os fatos reais.</p>
    `,
    "Prince:Light": `
        <h3>PRINCE OF LIGHT (PRÍNCIPE/PRINCESA DA LUZ)</h3>
        <p><strong>O que Destrói a Luz / Destrói com a Luz.</strong></p>
        <p>Você é o censor ou o crítico destrutivo. Como destruidor da Luz, você pode ser alguém que oculta informações, mente ou cria obscuridade para proteger seus interesses (agindo como um jogador de Void). Você apaga a verdade que não convém.</p>
        <p>Ou, você destrói *com* a Luz: usa a verdade como uma marreta. Você expõe os segredos das pessoas, aponta falhas humilhantes e usa a "honestidade brutal" para despedaçar a autoestima alheia. Você cega os outros com sua arrogância intelectual, impedindo-os de verem suas próprias qualidades.</p>
    `,
    "Sylph:Light": `
        <h3>SYLPH OF LIGHT (SÍLFIDE/SILFO DA LUZ)</h3>
        <p><strong>Que Cura a Luz / Conserta a Luz.</strong></p>
        <p>Você é a professora nata. Você tem uma compulsão por esclarecer, explicar e contextualizar. Se alguém está confuso ou ignorante, você sente que *deve* intervir e "curar" essa falta de conhecimento. Você quer que todos vejam o que você vê.</p>
        <p>Isso é nobre, mas pode ser irritante. Você pode cair na armadilha de dar aulas não solicitadas, achando que sabe o que é melhor para a jornada intelectual dos outros. Às vezes, as pessoas precisam aprender errando, mas você tem dificuldade em deixar que fiquem no escuro.</p>
    `,
    "Page:Light": `
        <h3>PAGE OF LIGHT (ESCUDEIRO/ESCUDEIRA DA LUZ)</h3>
        <p><strong>O que Serve a Luz / É servido(a) pela Luz.</strong></p>
        <p>No início, você luta para entender o que está acontecendo. Você se sente "fora do loop", confuso ou intelectualmente inferior aos seus pares. Você busca desesperadamente mentores ou informações que te deem um senso de direção.</p>
        <p>Você serve à narrativa dos outros, sendo o ajudante. Mas o potencial do Page é o acúmulo: se você não desistir, você absorve tanto conhecimento que se torna a autoridade máxima. De "bobo", você passa a ser a fonte da verdade. O segredo é ter paciência com sua própria curva de aprendizado.</p>
    `,
    "Rogue:Light": `
        <h3>ROGUE OF LIGHT (LADINO/LADINA DA LUZ)</h3>
        <p><strong>O que Rouba a Luz (para redistribuir).</strong></p>
        <p>Você foge dos holofotes. Se você faz algo genial, você diz que "foi sorte" ou dá o crédito para a equipe. Você pega a relevância e a importância que deveriam ser suas e as entrega para outra pessoa, preferindo ficar nos bastidores.</p>
        <p>Você é o "kingmaker" — aquele que faz os reis, mas não quer a coroa. O problema é a autoanulação. Você tem medo de que, se brilhar muito, atrairá inveja ou desgraça, então se esconde na sombra da modéstia excessiva, privando o mundo (e a si mesmo) do seu talento real.</p>
    `,
    "Seer:Light": `
        <h3>SEER OF LIGHT (VIDENTE DA LUZ)</h3>
        <p><strong>Que Vê a Luz / Guia pela Luz.</strong></p>
        <p>Você é o estrategista analítico. Você olha para o caos da vida e vê padrões, probabilidades e caminhos lógicos. Você não adivinha; você deduz. Sua função é guiar o grupo pelo caminho mais "afortunado" ou racional.</p>
        <p>Sua mente é um fluxograma constante de causa e efeito. O fardo disso é a paralisia analítica ou a frustração de lidar com pessoas que agem por impulso irracional. Você vê o precipício quilômetros antes de chegarem lá, e é exaustivo ter que convencer os outros a desviarem.</p>
    `,
    "Heir:Light": `
        <h3>HEIR OF LIGHT (HERDEIRO/HERDEIRA DA LUZ)</h3>
        <p><strong>O que Herda a Luz / Protegido(a) pela Luz.</strong></p>
        <p>Você tem a "sorte do protagonista". As respostas parecem cair no seu colo; você tropeça na informação certa na hora certa. Você navega a vida com uma confiança casual de que as coisas vão se esclarecer.</p>
        <p>Você é protegido pelo conhecimento ou pela fortuna, muitas vezes sem esforço consciente. O risco é a arrogância ingênua: você pode achar que é um gênio, quando na verdade é apenas um sortudo privilegiado. Se a sorte acabar, você pode não ter as ferramentas para lidar com a obscuridade.</p>
    `,
    "Bard:Light": `
        <h3>BARD OF LIGHT (BARDO/BARDA DA LUZ)</h3>
        <p><strong>O que Convida a Destruição da Luz.</strong></p>
        <p>Você é o agente do caos cognitivo. Passivamente, você permite que a desinformação se espalhe. Você vê alguém tirando uma conclusão errada e não corrige, talvez por achar engraçado ou por preguiça. Você deixa a ignorância ("destruição da Luz") fermentar.</p>
        <p>Ativamente, porém, você pode destruir *através* da Luz: você revela a verdade no pior momento possível. Aquela fofoca que destrói um casamento, aquele fato brutal que desmoraliza o time. Você ilumina as coisas não para ajudar, mas para ver o circo pegar fogo. Você joga com a sorte de forma imprudente.</p>
    `,

    // --- SPACE (ESPAÇO) ---
    "Maid:Space": `
        <h3>MAID OF SPACE (CRIADA/CRIADO DO ESPAÇO)</h3>
        <p><strong>Que Cria o Espaço / Feita(o) de Espaço.</strong></p>
        <p>Você é a personificação da produtividade ansiosa. Você não consegue ficar parada. Sua "Resposta" ao vazio existencial é preenchê-lo com *coisas*. Você está sempre começando um novo projeto, reorganizando a casa ou criando algo, não necessariamente por inspiração, mas por medo do tédio.</p>
        <p>Você "cria espaço" para os outros, sendo aquela que arruma, conserta e prepara o terreno. O perigo é você se tornar uma acumuladora de tarefas ou de objetos, tentando tapar buracos emocionais com materialidade, recusando-se a encarar o fato de que, às vezes, é preciso apenas *estar*, e não *fazer*.</p>
    `,
    "Knight:Space": `
        <h3>KNIGHT OF SPACE (CAVALEIRO/CAVALEIRA DO ESPAÇO)</h3>
        <p><strong>O que Explora o Espaço / Protege o Espaço.</strong></p>
        <p>Você usa a distância como escudo. Você projeta uma imagem de alguém "cool", artístico ou misterioso, mas isso é uma fachada para esconder o quanto você se sente deslocado. Você é mestre em manipular o ambiente social para parecer que pertence a ele, mas raramente deixa alguém entrar no seu espaço pessoal real.</p>
        <p>Você protege sua criatividade e seu mundo interno com ferocidade. Sua habilidade técnica e prática é alta — você sabe como as coisas funcionam —, mas você usa essa competência para manter as pessoas a um braço de distância. Você ajuda a todos a encontrarem seu lugar, enquanto secretamente sente que não tem um.</p>
    `,
    "Thief:Space": `
        <h3>THIEF OF SPACE (LADRÃO/LADRA DO ESPAÇO)</h3>
        <p><strong>Que Rouba o Espaço (para si).</strong></p>
        <p>Você tem uma presença que exige ser notada. Territorial e expansiva, você tende a dominar o ambiente físico e criativo. Se há um projeto em grupo, você toma as rédeas estéticas; se há uma sala, você escolhe o melhor lugar.</p>
        <p>Isso vem de uma insegurança profunda sobre ser insignificante. Você "rouba" espaço porque teme desaparecer se não estiver ocupando todo o oxigênio da sala. Você pode tomar crédito por criações alheias ou impôr seu gosto sobre os outros, validando sua existência através da sua marca no mundo físico.</p>
    `,
    "Mage:Space": `
        <h3>MAGE OF SPACE (MAGO/MAGA DO ESPAÇO)</h3>
        <p><strong>O que Conhece o Espaço (pelo sofrimento) / Guiado(a) pelo Espaço.</strong></p>
        <p>Você conhece a solidão do quarto fechado. Você entende o Espaço porque já se sentiu isolado, fisicamente desconfortável ou separado do mundo por uma barreira invisível. Você sabe o que é esperar tempo demais por algo que nunca chega.</p>
        <p>Agora, você usa essa compreensão para navegar. Você entende onde as coisas se encaixam e onde elas quebram. Você tem uma intuição espacial e sistêmica aguçada. Seu desafio é sair da teoria e da observação passiva (o isolamento do Mago) e participar fisicamente da vida que você analisa tão bem.</p>
    `,
    "Witch:Space": `
        <h3>WITCH OF SPACE (BRUXA/BRUXO DO ESPAÇO)</h3>
        <p><strong>Que Manipula o Espaço.</strong></p>
        <p>Você não aceita os limites físicos ou criativos impostos a você. Se o quarto é pequeno, você derruba a parede. Se a regra diz que não cabe, você faz caber. Você manipula o ambiente ao seu redor para refletir seu estado interno, muitas vezes de forma caótica.</p>
        <p>Sua relação com a criatividade é de posse e distorção. Você pode ser inspiradora, abrindo novos caminhos onde não havia nenhum, ou aterrorizante, isolando pessoas e alterando a dinâmica do ambiente para prender os outros na sua órbita. Você molda o mundo, mas às vezes esquece que as outras pessoas também precisam de espaço para respirar.</p>
    `,
    "Prince:Space": `
        <h3>PRINCE OF SPACE (PRÍNCIPE/PRINCESA DO ESPAÇO)</h3>
        <p><strong>O que Destrói o Espaço / Destrói com o Espaço.</strong></p>
        <p>Você é o crítico impiedoso ou o minimalista radical. Você olha para o potencial e para a criação desordenada e sente nojo; você quer cortar, limpar, simplificar. Você destrói o "lixo" criativo, muitas vezes podando árvores que ainda poderiam dar frutos.</p>
        <p>Ou você destrói *com* o Espaço: você usa a distância física ou o isolamento para acabar com problemas. Você se afasta, vai embora, coloca oceanos entre você e seus desafetos. Você resolve conflitos removendo a existência do outro da sua vista. O risco é acabar numa caixa branca vazia, perfeita e estéril.</p>
    `,
    "Sylph:Space": `
        <h3>SYLPH OF SPACE (SÍLFIDE/SILFO DO ESPAÇO)</h3>
        <p><strong>Que Cura o Espaço / Conserta o Espaço.</strong></p>
        <p>Você é a jardineira da vida alheia. Você quer que tudo cresça e floresça. Você se intromete na organização, na casa e na criatividade dos outros porque acredita genuinamente que sabe como "arrumar" a vida deles melhor que eles mesmos.</p>
        <p>Sua intenção é dar espaço para os outros serem eles mesmos, mas sua "cura" pode ser sufocante. Você tenta preencher os vazios dos outros com sua própria presença e cuidado, às vezes impedindo que eles aprendam a lidar com a própria solidão ou bagunça. Você precisa aprender a respeitar as cercas dos vizinhos.</p>
    `,
    "Page:Space": `
        <h3>PAGE OF SPACE (ESCUDEIRO/ESCUDEIRA DO ESPAÇO)</h3>
        <p><strong>O que Serve o Espaço / É servido(a) pelo Espaço.</strong></p>
        <p>Você começa se sentindo pequeno, apertado, incapaz de criar ou de mudar seu ambiente. Você parece estar sempre esperando o momento certo, paralisado pela enormidade das possibilidades ("analysis paralysis"). Você serve ao status quo físico.</p>
        <p>Mas Space é o aspecto da paciência. Se você persistir, sua capacidade de crescimento é literal e metafórica. O Page de Espaço que desperta é aquele que traz algo totalmente novo à existência, expandindo horizontes que ninguém sabia que existiam. De "ninguém", você se torna o universo inteiro.</p>
    `,
    "Rogue:Space": `
        <h3>ROGUE OF SPACE (LADINO/LADINA DO ESPAÇO)</h3>
        <p><strong>O que Rouba o Espaço (para redistribuir).</strong></p>
        <p>Você é a pessoa que se encolhe no banco do ônibus para que o outro tenha mais conforto. Você abre mão dos seus projetos, do seu tempo e do seu ambiente para acomodar as necessidades dos outros. Você "rouba" o seu próprio espaço para dá-lo a quem precisa.</p>
        <p>É um altruísmo bonito, mas perigoso. Você corre o risco de desaparecer, de não deixar marca nenhuma no mundo porque estava ocupado demais ajudando os outros a deixarem a deles. Você lida com a pressão da criação delegando-a ou facilitando-a para os outros, fugindo da sua própria autoria.</p>
    `,
    "Seer:Space": `
        <h3>SEER OF SPACE (VIDENTE DO ESPAÇO)</h3>
        <p><strong>Que Vê o Espaço / Guia pelo Espaço.</strong></p>
        <p>Você vê o quadro geral ("Big Picture"). Enquanto todos estão brigando por detalhes mesquinhos, você está olhando para o horizonte, entendendo como todas as peças se encaixam no grande esquema das coisas. Você é o estrategista visual e criativo.</p>
        <p>Sua relação com o Espaço é visual e teórica. Você sabe o que precisa ser feito, mas sua falha pode ser a inação. Ver todas as possibilidades de criação pode ser esmagador, e você pode acabar apenas observando a vida passar, desenhando mapas de lugares onde nunca pisa.</p>
    `,
    "Heir:Space": `
        <h3>HEIR OF SPACE (HERDEIRO/HERDEIRA DO ESPAÇO)</h3>
        <p><strong>O que Herda o Espaço / Protegido(a) pelo Espaço.</strong></p>
        <p>Você tem uma gravidade própria. Coisas e pessoas tendem a orbitar ao seu redor sem que você faça esforço. Você herda ambientes, legados ou responsabilidades criativas naturalmente. O mundo físico parece cooperar com você.</p>
        <p>Sua resposta é deixar-se levar por essa inércia. Você pode se sentir preso pelo seu próprio ambiente (como um sapo num poço), confortável demais para mudar. O perigo é a passividade diante do que está ao seu redor, aceitando o espaço que te deram em vez de questionar se é ali que você quer estar.</p>
    `,
    "Bard:Space": `
        <h3>BARD OF SPACE (BARDO/BARDA DO ESPAÇO)</h3>
        <p><strong>O que Convida a Destruição do Espaço.</strong></p>
        <p>Você é o agente da entropia doméstica. Passivamente, você deixa a bagunça acumular, os projetos apodrecerem pela metade e o ambiente se degradar. Você não destrói por malícia, mas por negligência ou por uma filosofia de "deixa rolar".</p>
        <p>Mas quando a crise bate, você convida a destruição *através* do Espaço: você cria algo tão massivo, tão imprudente ou tão fora de controle que destrói a estrutura existente. É a física nuclear aplicada à vida social: você divide um átomo só para ver o que acontece, e leva o quarteirão inteiro junto.</p>
    `,

    // --- TIME (TEMPO) ---
    "Maid:Time": `
        <h3>MAID OF TIME (CRIADA/CRIADO DO TEMPO)</h3>
        <p><strong>Que Cria o Tempo / Feita(o) de Tempo.</strong></p>
        <p>Você é a pessoa que nunca para. Se o dia tem 24 horas, você faz ele render 30. Você trata o tempo como algo manufaturável: se você trabalhar duro o suficiente, se sacrificar sono e saúde, você pode "criar" tempo para fazer tudo o que precisa ser feito.</p>
        <p>Sua psicologia é baseada na manutenção da existência através da ação. Você tem pavor de ficar ociosa, pois o silêncio te lembra da mortalidade. Você se torna uma escrava da própria agenda, consertando cronogramas e assumindo tarefas até se tornar uma máquina de produtividade à beira do colapso.</p>
    `,
    "Knight:Time": `
        <h3>KNIGHT OF TIME (CAVALEIRO/CAVALEIRA DO TEMPO)</h3>
        <p><strong>O que Explora o Tempo / Protege o Tempo.</strong></p>
        <p>Você é o mestre da "hustle culture". Você usa a velocidade e a eficiência como armas para mascarar suas inseguranças. Você está sempre correndo, sempre buscando o atalho mais rápido, sempre tentando estar um passo à frente do desastre.</p>
        <p>Sua "Resposta" é a aceleração. Você sente que o mundo está desmoronando (ou que você não é bom o suficiente), então você tenta ser mais rápido que os seus problemas. Você protege o fluxo das coisas agindo impulsivamente e decisivamente, mas essa pressa constante impede que você aprecie o momento. Você vive no futuro imediato, nunca no presente.</p>
    `,
    "Thief:Time": `
        <h3>THIEF OF TIME (LADRÃO/LADRA DO TEMPO)</h3>
        <p><strong>Que Rouba o Tempo (para si).</strong></p>
        <p>Você é impaciente e, francamente, um pouco egoísta com a agenda dos outros. Você odeia esperar. Você toma atalhos que custam o tempo alheio para ganhar o seu. Você é aquela pessoa que chega atrasada e espera que todos a aguardem, ou que domina a reunião fazendo todos perderem tempo ouvindo você.</p>
        <p>Isso vem de um instinto de sobrevivência: você sente que seu tempo é escasso e precioso demais para ser desperdiçado com a mediocridade alheia. Você "rouba" momentos de vida para si, priorizando sua própria longevidade e seus objetivos acima do ritmo natural do grupo.</p>
    `,
    "Mage:Time": `
        <h3>MAGE OF TIME (MAGO/MAGA DO TEMPO)</h3>
        <p><strong>O que Conhece o Tempo (pelo sofrimento) / Guiado(a) pelo Tempo.</strong></p>
        <p>Você carrega o peso do fim. Você entende, melhor que ninguém, que tudo é finito. Você provavelmente já perdeu tempo investindo em coisas que deram errado ou sofreu perdas pessoais significativas que te ensinaram a brutalidade do relógio.</p>
        <p>Agora, você é o cínico pragmático. Você sabe o que vale a pena o esforço e o que é perda de tempo. Você guia o grupo com uma urgência mórbida: "temos que fazer isso agora, antes que seja tarde". Seu desafio é não deixar que o conhecimento da inevitabilidade da morte te impeça de viver a vida.</p>
    `,
    "Witch:Time": `
        <h3>WITCH OF TIME (BRUXA/BRUXO DO TEMPO)</h3>
        <p><strong>Que Manipula o Tempo.</strong></p>
        <p>Você se recusa a seguir o ritmo imposto pela sociedade. Prazos? Horários comerciais? Isso não se aplica a você. Você manipula o tempo ao seu redor, procrastinando até o último segundo e depois resolvendo tudo numa explosão de energia maníaca, ou acelerando processos que deveriam levar anos.</p>
        <p>Sua personalidade é rebelde contra a ordem natural das coisas. Se o destino diz que algo deve acabar, você luta para estendê-lo. Se algo deve demorar, você o força a acontecer agora. Você quebra as regras da cronologia para satisfazer seus próprios desejos, criando um ritmo caótico que só você consegue dançar.</p>
    `,
    "Prince:Time": `
        <h3>PRINCE OF TIME (PRÍNCIPE/PRINCESA DO TEMPO)</h3>
        <p><strong>O que Destrói o Tempo / Destrói com o Tempo.</strong></p>
        <p>Você é o inimigo da paciência. Como destruidor do Tempo, você pode ser alguém que procrastina destrutivamente, desperdiçando dias inteiros (matando o tempo) sem produzir nada, num ato de rebeldia niilista contra a pressão de ser produtivo.</p>
        <p>Ou, você destrói *com* o Tempo: você usa a inevitabilidade como uma arma. "Isso vai acabar mal mesmo, pra que tentar?". Você acelera o fim das coisas, cortando processos e forçando conclusões prematuras. Você não tem paciência para a jornada; você quer pular direto para os créditos finais, muitas vezes arruinando a experiência no processo.</p>
    `,
    "Sylph:Time": `
        <h3>SYLPH OF TIME (SÍLFIDE/SILFO DO TEMPO)</h3>
        <p><strong>Que Cura o Tempo / Conserta o Tempo.</strong></p>
        <p>Você é a gerente de projetos emocional. Você quer que todos tenham tempo suficiente. Você é a pessoa que diz "vai com calma, não precisa correr" ou que organiza a agenda do grupo para que ninguém fique sobrecarregado.</p>
        <p>Você tenta "curar" a ansiedade temporal dos outros, assumindo a responsabilidade de garantir que os prazos sejam cumpridos de forma saudável. O problema é que você pode acabar microgerenciando a vida alheia ou permitindo que as pessoas demorem demais em nome do conforto, ignorando a necessidade real de urgência.</p>
    `,
    "Page:Time": `
        <h3>PAGE OF TIME (ESCUDEIRO/ESCUDEIRA DO TEMPO)</h3>
        <p><strong>O que Serve o Tempo / É servido(a) pelo Tempo.</strong></p>
        <p>Sua relação inicial com o Tempo é desastrosa. Você está sempre atrasado, sempre correndo atrás do prejuízo, sempre perdendo prazos. Você se sente atropelado pela vida, servindo ao relógio em vez de controlá-lo.</p>
        <p>Mas o Pagem é a classe do acúmulo. Se você sobreviver a essa fase de desorganização, você desenvolve um ritmo interno poderoso. Você aprende a usar o tempo a seu favor, tornando-se um mestre da paciência e do "timing" perfeito (seja na música, na luta ou na estratégia). Do caos nasce a precisão absoluta.</p>
    `,
    "Rogue:Time": `
        <h3>ROGUE OF TIME (LADINO/LADINA DO TEMPO)</h3>
        <p><strong>O que Rouba o Tempo (para redistribuir).</strong></p>
        <p>Você sacrifica seus momentos pelos outros. Você gasta seu tempo livre ajudando amigos, fica até tarde no trabalho para cobrir um colega, ou dedica sua juventude a cuidar de alguém. Você "rouba" tempo da sua própria vida e o dá a quem precisa.</p>
        <p>É uma generosidade exaustiva. Você lida com a pressão da mortalidade focando na dos outros, esquecendo que o seu relógio também está correndo. Você corre o risco de chegar ao fim da vida percebendo que viveu os dias de todo mundo, menos os seus.</p>
    `,
    "Seer:Time": `
        <h3>SEER OF TIME (VIDENTE DO TEMPO)</h3>
        <p><strong>Que Vê o Tempo / Guia pelo Tempo.</strong></p>
        <p>Você é a historiadora ou a futurista. Você enxerga as consequências a longo prazo. Enquanto todos reagem ao "agora", você está olhando para o efeito borboleta de dez anos à frente. Você entende os ciclos, a repetição e a causalidade.</p>
        <p>Sua função é avisar: "se fizermos isso, vamos nos arrepender amanhã". O fardo é a ansiedade da previsão. Ver o desastre se aproximando em câmera lenta e ter que convencer as pessoas a mudarem de rumo agora é frustrante. Você vive no futuro, muitas vezes esquecendo de agir no presente.</p>
    `,
    "Heir:Time": `
        <h3>HEIR OF TIME (HERDEIRO/HERDEIRA DO TEMPO)</h3>
        <p><strong>O que Herda o Tempo / Protegido(a) pelo Tempo.</strong></p>
        <p>Você tem um "timing" irritantemente bom. As coisas acontecem na hora certa para você. Você não planeja muito, apenas segue o fluxo, e o universo parece conspirar para que você chegue no momento exato em que deveria estar.</p>
        <p>Você é protegido pela inevitabilidade. Você confia instintivamente que "tudo passa". O perigo é a passividade total: você pode se tornar um passageiro na própria vida, deixando o tempo te levar sem nunca pegar no volante, ou aceitar finais ruins simplesmente porque "era pra ser assim".</p>
    `,
    "Bard:Time": `
        <h3>BARD OF TIME (BARDO/BARDA DO TEMPO)</h3>
        <p><strong>O que Convida a Destruição do Tempo.</strong></p>
        <p>Sua abordagem ao tempo é errática. Passivamente, você deixa os prazos morrerem. Você vê a urgência de uma situação e não faz nada, deixando a entropia agir ("o tempo cura tudo", ou "o tempo destrói tudo"). Sua inação convida o fim.</p>
        <p>Mas no modo ativo/crise, você é o acelerador do apocalipse. Você convida a destruição *através* do Tempo: sua impaciência ou sua má gestão temporal causa catástrofes. Você faz as coisas acontecerem rápido demais, ou no momento errado, criando uma dissonância rítmica que quebra a harmonia do grupo. É a pressa que causa o acidente fatal.</p>
    `,

    // --- HEART (CORAÇÃO) ---
    "Maid:Heart": `
        <h3>MAID OF HEART (CRIADA/CRIADO DO CORAÇÃO)</h3>
        <p><strong>Que Cria o Coração / Feita(o) de Coração.</strong></p>
        <p>Você trata sua identidade como um projeto de artesanato. Você não "descobre" quem é; você constrói quem é, tijolo por tijolo. Você é obcecada por autenticidade, mas ironicamente, sua autenticidade é fabricada com muito esforço.</p>
        <p>Você provavelmente depende muito da validação externa para sentir que existe. Se ninguém está te amando ou te odiando, você se sente um fantasma. Você "cria" emoção e drama onde não há, porque o silêncio emocional é aterrorizante. O perigo é você se tornar uma caricatura de si mesma, presa numa performance eterna.</p>
    `,
    "Knight:Heart": `
        <h3>KNIGHT OF HEART (CAVALEIRO/CAVALEIRA DO CORAÇÃO)</h3>
        <p><strong>O que Explora o Coração / Protege o Coração.</strong></p>
        <p>Você usa sua personalidade como uma armadura. Você é muito carismático, intenso ou dramático, mas isso é uma barreira. Você projeta uma versão exagerada de si mesmo (uma "persona") para que ninguém consiga machucar o seu "eu" verdadeiro e vulnerável que está escondido lá no fundo.</p>
        <p>Você luta com a sensação de não ser amável. Então, você se torna útil, desejável ou o "amigo engraçado", explorando suas próprias emoções para manipular como os outros te veem. Você protege seu coração expondo uma cópia dele.</p>
    `,
    "Thief:Heart": `
        <h3>THIEF OF HEART (LADRÃO/LADRA DO CORAÇÃO)</h3>
        <p><strong>Que Rouba o Coração (para si).</strong></p>
        <p>Você tem uma necessidade compulsiva de ser o protagonista. Você não suporta quando os sentimentos dos outros ofuscam os seus. Você "rouba" identidades: adota trejeitos, gostos e histórias dos outros e os apresenta como seus para se sentir mais completa.</p>
        <p>Em relacionamentos, você tende a ser um vampiro emocional. Você precisa que o outro te adore para que você se sinta real. Você drena a individualidade do parceiro até que ele seja apenas um espelho para o seu próprio ego. O desafio é aprender a ter um "eu" sem precisar canibalizar o "nós".</p>
    `,
    "Mage:Heart": `
        <h3>MAGE OF HEART (MAGO/MAGA DO CORAÇÃO)</h3>
        <p><strong>O que Conhece o Coração (pelo sofrimento) / Guiado(a) pelo Coração.</strong></p>
        <p>Você entende de gente porque gente já te machucou muito. Você é um especialista em motivações ocultas, desejos reprimidos e na "alma" humana, mas adquiriu isso através de experiências dolorosas de rejeição ou autodescoberta traumática.</p>
        <p>Você é guiado pelo instinto e pela paixão, mesmo quando a lógica diz o contrário. Você sabe quem as pessoas realmente são, o que te torna um detector de mentiras humano. O problema é o cinismo: você viu tanta feiura no coração humano que pode ter dificuldade em se conectar genuinamente de novo.</p>
    `,
    "Witch:Heart": `
        <h3>WITCH OF HEART (BRUXA/BRUXO DO CORAÇÃO)</h3>
        <p><strong>Que Manipula o Coração.</strong></p>
        <p>Sua identidade é fluida. Você é quem você precisa ser no momento. Você manipula as emoções e os instintos — tanto os seus quanto os dos outros. Você consegue fazer alguém se apaixonar por você (ou te odiar) com uma facilidade assustadora.</p>
        <p>Essa capacidade de "code-switching" emocional é poderosa, mas perigosa. Você pode perder a noção de quem você é de verdade no meio de tantas máscaras. Você trata sentimentos como ferramentas: úteis, moldáveis e descartáveis. O risco é tratar pessoas como bonecos em seu teatro particular.</p>
    `,
    "Prince:Heart": `
        <h3>PRINCE OF HEART (PRÍNCIPE/PRINCESA DO CORAÇÃO)</h3>
        <p><strong>O que Destrói o Coração / Destrói com o Coração.</strong></p>
        <p>Você é o arquétipo do autossabotador. Você tem uma relação conflituosa com seu próprio ser. Muitas vezes, você tenta destruir seu "Heart" (emoções, impulsos) através da lógica fria (Mind), reprimindo quem você é para ser "eficiente" ou "racional".</p>
        <p>Ou, você destrói *com* o Coração: seu ego é tão massivo que esmaga todos ao redor. Você impõe sua identidade com tanta força que não sobra espaço para ninguém mais ser quem é. Você destrói a autoestima alheia ou destrói a si mesmo por não conseguir aceitar suas próprias falhas humanas.</p>
    `,
    "Sylph:Heart": `
        <h3>SYLPH OF HEART (SÍLFIDE/SILFO DO CORAÇÃO)</h3>
        <p><strong>Que Cura o Coração / Conserta o Coração.</strong></p>
        <p>Você é a terapeuta não licenciada do grupo. Você quer "consertar" as pessoas. Você valida, escuta e tenta ajudar todos a encontrarem sua "verdadeira essência". Você não suporta ver alguém com baixa autoestima ou problemas de identidade.</p>
        <p>Sua intromissão vem de um bom lugar, mas pode ser sufocante. Você tenta curar corações que não pediram cura, ou tenta forçar uma harmonia emocional onde o conflito é necessário. Às vezes, você foca tanto na alma dos outros para não ter que olhar para os buracos na sua.</p>
    `,
    "Page:Heart": `
        <h3>PAGE OF HEART (ESCUDEIRO/ESCUDEIRA DO CORAÇÃO)</h3>
        <p><strong>O que Serve o Coração / É servido(a) pelo Coração.</strong></p>
        <p>Você começa como uma folha em branco. Você tem dificuldade em saber quem é, o que gosta ou o que quer. Você tende a mimetizar a personalidade de quem está perto (ídolos, amigos, parceiros) porque se sente oco por dentro.</p>
        <p>Sua jornada é a construção lenta da autoestima. Se você persistir, o Page de Heart se torna uma fonte inesgotável de paixão e autenticidade. Você passa de alguém que pede permissão para existir para alguém que inspira todos com sua alma vibrante e inabalável. Mas o caminho até lá é cheio de crises de identidade.</p>
    `,
    "Rogue:Heart": `
        <h3>ROGUE OF HEART (LADINO/LADINA DO CORAÇÃO)</h3>
        <p><strong>O que Rouba o Coração (para redistribuir).</strong></p>
        <p>Você é o camaleão empático. Você absorve as emoções do ambiente e deixa as suas de lado. Se o grupo está triste, você pega essa tristeza para si; se precisam de animo, você sacrifica sua energia para animá-los. Você "rouba" sua própria identidade para acomodar a dos outros.</p>
        <p>Você tem dificuldade em estabelecer limites. Você se fragmenta para caber nas expectativas alheias, tornando-se o que os outros precisam que você seja, em vez de ser quem você é. Seu desafio é parar de doar pedaços da sua alma até não sobrar nada.</p>
    `,
    "Seer:Heart": `
        <h3>SEER OF HEART (VIDENTE DO CORAÇÃO)</h3>
        <p><strong>Que Vê o Coração / Guia pelo Coração.</strong></p>
        <p>Você enxerga através das máscaras. Ninguém consegue mentir para você sobre quem é, nem mesmo você. Você entende a mecânica da identidade, do desejo e dos relacionamentos. Você é o conselheiro amoroso que entende porque fulano age assim.</p>
        <p>Sua orientação é baseada na verdade emocional. "Isso não é o que você quer de verdade", você diz. O fardo é ver as incompatibilidades e as mentiras que as pessoas contam para si mesmas e não poder forçá-las a mudar. Você vê o naufrágio emocional antes dele acontecer.</p>
    `,
    "Heir:Heart": `
        <h3>HEIR OF HEART (HERDEIRO/HERDEIRA DO CORAÇÃO)</h3>
        <p><strong>O que Herda o Coração / Protegido(a) pelo Coração.</strong></p>
        <p>Você é protegido pela sua própria essência. Você tem um carisma natural, quase inocente, que faz as pessoas gostarem de você sem esforço. Você "herda" paixões e humores; muitas vezes você age puramente por instinto, levado pelo que sente no momento.</p>
        <p>Você tende a se tornar o que os outros projetam em você, mas de uma forma que te favorece. O perigo é a falta de direção: ser levado pelos caprichos do coração (seu ou dos outros) sem nunca parar para pensar racionalmente nas consequências.</p>
    `,
    "Bard:Heart": `
        <h3>BARD OF HEART (BARDO/BARDA DO CORAÇÃO)</h3>
        <p><strong>O que Convida a Destruição do Coração.</strong></p>
        <p>Você é imprevisível emocionalmente. Passivamente, você pode ser frio, distante ou apático, deixando relacionamentos morrerem de inanição. Você convida a dissolução da identidade, talvez não sabendo quem é e não se importando.</p>
        <p>Mas no modo ativo, você é o destruidor de almas. Você seduz e descarta, ou seus surtos emocionais destroem a coesão do grupo. Você convida a irracionalidade destrutiva a entrar. Você é aquele ex que bagunçou a cabeça de alguém para sempre, ou a pessoa que ri num funeral. Você quebra a santidade do "eu".</p>
    `,

    // --- MIND (MENTE) ---
    "Maid:Mind": `
        <h3>MAID OF MIND (CRIADA/CRIADO DA MENTE)</h3>
        <p><strong>Que Cria a Mente / Feita(o) de Mente.</strong></p>
        <p>Você não deixa as coisas ao acaso. Você "cria" decisões. Se o grupo está estagnado, você força uma direção. Você estrutura sua vida com regras, planos e lógica rígida porque morre de medo do caos e da ambiguidade.</p>
        <p>Sua psicologia é a da hiper-racionalização. Você tenta resolver problemas emocionais com planilhas. Você se torna a pessoa que tem um plano para tudo, mas muitas vezes esquece que pessoas não são peças de xadrez. Você corre o risco de se tornar um robô de eficiência, recusando-se a sentir qualquer coisa que não faça sentido lógico.</p>
    `,
    "Knight:Mind": `
        <h3>KNIGHT OF MIND (CAVALEIRO/CAVALEIRA DA MENTE)</h3>
        <p><strong>O que Explora a Mente / Protege a Mente.</strong></p>
        <p>Você usa a inteligência como escudo. Você é rápido no gatilho, bom de debate e ótimo em encontrar falhas nos argumentos alheios. Você projeta a imagem do estrategista frio e calculista, ou do "cara esperto" que nunca é enganado.</p>
        <p>Mas isso é uma máscara para esconder sua insegurança sobre suas próprias escolhas. Você teme ser estúpido ou ser manipulado, então ataca primeiro com lógica afiada. Você protege seus pensamentos reais atrás de camadas de ironia e argumentos complexos, impedindo que os outros vejam suas dúvidas internas.</p>
    `,
    "Thief:Mind": `
        <h3>THIEF OF MIND (LADRÃO/LADRA DA MENTE)</h3>
        <p><strong>Que Rouba a Mente (para si).</strong></p>
        <p>Você confia no seu julgamento e *apenas* no seu julgamento. Em grupo, você tende a atropelar as opiniões alheias e tomar as decisões por todos, porque, francamente, você acha que os outros vão fazer besteira. Você rouba a agência e a escolha das pessoas "para o bem delas" (ou para o seu).</p>
        <p>Sua "Resposta" é a arrogância intelectual. Você monopoliza a estratégia. Você pode se apropriar das ideias dos outros e melhorá-las, assumindo o crédito. É um mecanismo de controle: se você detém as escolhas, ninguém pode te colocar numa situação que você não previu.</p>
    `,
    "Mage:Mind": `
        <h3>MAGE OF MIND (MAGO/MAGA DA MENTE)</h3>
        <p><strong>O que Conhece a Mente (pelo sofrimento) / Guiado(a) pela Mente.</strong></p>
        <p>Você sofre de "paralisia por análise". Você vê todas as consequências possíveis de cada ação, e isso é aterrorizante. Você entende como as escolhas moldam a realidade porque provavelmente já fez escolhas ruins que te assombram, ou foi vítima das maquinações de outros.</p>
        <p>Agora, você é o conselheiro cauteloso. Você sabe exatamente o que vai dar errado. Você é guiado por uma lógica quase pessimista. Seu fardo é ser a pessoa que vê o precipício claramente enquanto todos os outros estão correndo felizes em direção a ele, e ter que lidar com a frustração de não ser ouvido.</p>
    `,
    "Witch:Mind": `
        <h3>WITCH OF MIND (BRUXA/BRUXO DA MENTE)</h3>
        <p><strong>Que Manipula a Mente.</strong></p>
        <p>Para você, a lógica é massinha de modelar. Você é mestre em convencer as pessoas, não necessariamente com fatos, mas mudando a forma como elas pensam. Você racionaliza o irracional. Você consegue justificar qualquer ação, por mais absurda que seja, se isso servir aos seus propósitos.</p>
        <p>Sua personalidade é adaptável e perigosa. Você muda de ideia e de "máscara" conforme a situação exige. Você manipula as decisões dos outros, plantando ideias ou alterando percepções. O perigo é você se perder nas suas próprias justificativas e começar a acreditar nas suas próprias mentiras lógicas.</p>
    `,
    "Prince:Mind": `
        <h3>PRINCE OF MIND (PRÍNCIPE/PRINCESA DA MENTE)</h3>
        <p><strong>O que Destrói a Mente / Destrói com a Mente.</strong></p>
        <p>Você é, estranhamente, muito emocional. Como destruidor da Mente, você rejeita a lógica fria, as máscaras sociais e o planejamento excessivo. Você age por impulso, destruindo planos complexos com ações brutas e diretas. Você odeia a falsidade e a superintelectualização.</p>
        <p>Ou, você destrói *com* a Mente: você usa a lógica para desmontar pessoas. Você racionaliza a crueldade. Você usa argumentos irrefutáveis para destruir a esperança ou a autoestima de alguém. Você é o niilista que usa a razão para provar que nada faz sentido, deixando apenas o vazio.</p>
    `,
    "Sylph:Mind": `
        <h3>SYLPH OF MIND (SÍLFIDE/SILFO DA MENTE)</h3>
        <p><strong>Que Cura a Mente / Conserta a Mente.</strong></p>
        <p>Você é a mediadora e a esclarecedora. Você não suporta ver confusão, mal-entendidos ou decisões burras sendo tomadas. Você intervém para oferecer clareza, ajudando as pessoas a organizarem seus pensamentos e a verem as opções com lucidez.</p>
        <p>Sua intenção é "otimizar" as escolhas das pessoas. Porém, você pode ser invasiva, tentando consertar a maneira como os outros pensam ou agem, como se a mente deles fosse um quebra-cabeça que só você sabe montar. Você precisa aceitar que, às vezes, as pessoas têm o direito de serem irracionais.</p>
    `,
    "Page:Mind": `
        <h3>PAGE OF MIND (ESCUDEIRO/ESCUDEIRA DA MENTE)</h3>
        <p><strong>O que Serve a Mente / É servido(a) pela Mente.</strong></p>
        <p>Você começa duvidando da sua própria inteligência. Você tem dificuldade em tomar decisões simples, sempre perguntando "o que você acha?" para os outros. Você é facilmente influenciável e pode ser usado como peão nos jogos mentais de pessoas mais espertas.</p>
        <p>Mas o Pagem cresce. Se você aprender a confiar no seu raciocínio, você se torna um estrategista brilhante. Você deixa de servir às escolhas dos outros para ser servido pela lógica: você começa a ver o tabuleiro de xadrez da vida com uma clareza que ninguém mais tem. De indeciso, você vira o mestre do jogo.</p>
    `,
    "Rogue:Mind": `
        <h3>ROGUE OF MIND (LADINO/LADINA DA MENTE)</h3>
        <p><strong>O que Rouba a Mente (para redistribuir).</strong></p>
        <p>Você é a pessoa que diz "foi ideia dele". Você tem ótimas ideias e estratégias, mas passa a bola para outra pessoa executar ou levar o crédito. Você rouba a capacidade de decisão de si mesmo para empoderar o grupo.</p>
        <p>Você lida com a pressão da escolha delegando-a. Você prefere ser o conselheiro nos bastidores do que o líder que toma a decisão final. É seguro, mas frustrante. Você sacrifica sua agência intelectual para manter a harmonia ou para não ter que lidar com a culpa se algo der errado.</p>
    `,
    "Seer:Mind": `
        <h3>SEER OF MIND (VIDENTE DA MENTE)</h3>
        <p><strong>Que Vê a Mente / Guia pela Mente.</strong></p>
        <p>Você vê os caminhos se bifurcando. Diante de uma escolha, você consegue visualizar as consequências de cada opção. Você entende a causalidade e a psicologia humana: "se falarmos isso, ele vai reagir assim". Você é o navegador do destino.</p>
        <p>Sua função é ajudar o grupo a fazer a escolha certa. Mas o peso de ver todas as ramificações é exaustivo. Você pode ficar presa na indecisão, tentando encontrar o caminho "perfeito" que não existe, ou se frustrar profundamente quando as pessoas ignoram seus avisos lógicos e fazem besteira por pura emoção.</p>
    `,
    "Heir:Mind": `
        <h3>HEIR OF MIND (HERDEIRO/HERDEIRA DA MENTE)</h3>
        <p><strong>O que Herda a Mente / Protegido(a) pela Mente.</strong></p>
        <p>Você tem uma intuição lógica natural. Você não precisa pensar muito para fazer a escolha certa; você simplesmente faz. Você flutua pela vida protegido pela sua capacidade de se adaptar e de racionalizar o que acontece. As coisas "fazem sentido" para você.</p>
        <p>Você pode parecer um pouco desapegado ou camaleônico, mudando de opinião ou de atitude conforme o ambiente exige, sem crise de consciência. O risco é se tornar alguém sem convicções fortes, que segue a lógica do momento sem questionar os valores profundos por trás dela.</p>
    `,
    "Bard:Mind": `
        <h3>BARD OF MIND (BARDO/BARDA DA MENTE)</h3>
        <p><strong>O que Convida a Destruição da Mente.</strong></p>
        <p>Você é o agente da dúvida. Passivamente, você corrói as certezas do grupo. Você faz perguntas que desmontam planos sólidos, ou sua própria indecisão caótica faz com que o grupo perca o rumo. Você convida a confusão.</p>
        <p>No modo ativo, você destrói *através* da Mente: você usa a lógica para criar o caos. Você cria labirintos burocráticos, regras impossíveis ou jogos mentais sádicos que paralisam todos. Ou você toma uma decisão tão logicamente absurda e imprevisível que quebra o tabuleiro inteiramente. Você é o Coringa: tudo é um jogo, e as regras são piadas.</p>
    `,

    // --- RAGE (IRA) ---
    "Maid:Rage": `
        <h3>MAID OF RAGE (CRIADA/CRIADO DA IRA)</h3>
        <p><strong>Que Cria a Ira / Feita(o) de Ira.</strong></p>
        <p>Você não consegue deixar as coisas em paz. Se está tudo calmo demais, você desconfia. Você "cria" conflito ou ceticismo porque o silêncio parece falso para você. Você é a pessoa que cutuca a ferida, que aponta o problema no plano perfeito, que faz o papel de advogada do diabo compulsivamente.</p>
        <p>Sua psicologia é a da manutenção da vigilância. Você sente que se relaxar e aceitar as coisas como elas são, será enganada. Você trabalha duro para manter sua indignação ou sua desconfiança afiada, pois acredita que essa é a única maneira de se manter segura contra as mentiras do mundo.</p>
    `,
    "Knight:Rage": `
        <h3>KNIGHT OF RAGE (CAVALEIRO/CAVALEIRA DA IRA)</h3>
        <p><strong>O que Explora a Ira / Protege a Ira.</strong></p>
        <p>Você usa a intimidação ou a franqueza brutal como escudo. Você projeta uma imagem de "durão", de alguém que não leva desaforo para casa e que vê o mundo como ele realmente é. Você usa sua agressividade (verbal ou física) para resolver problemas rapidamente.</p>
        <p>Mas essa armadura de espinhos protege um medo profundo de ser vulnerável ou de ser visto como fraco. Você ataca antes de ser atacado. Você explora o medo e a dúvida dos outros para manter o controle da situação, protegendo sua própria visão de mundo cínica contra qualquer tentativa de otimismo que você considera ingênuo.</p>
    `,
    "Thief:Rage": `
        <h3>THIEF OF RAGE (LADRÃO/LADRA DA IRA)</h3>
        <p><strong>Que Rouba a Ira (para si).</strong></p>
        <p>Você precisa ser a pessoa mais revoltada da sala. Se alguém está reclamando de algo, você interrompe para dizer que o seu problema é pior. Você invalida a raiva e a frustração dos outros ("rouba" a Ira deles) para centralizar a narrativa no seu próprio sofrimento ou ódio.</p>
        <p>É uma forma de controle narcisista. Você drena a capacidade dos outros de se defenderem ou de se expressarem negativamente, tornando-se o único portador autorizado da "verdade" desagradável. Você se alimenta do conflito e murcha na harmonia.</p>
    `,
    "Mage:Rage": `
        <h3>MAGE OF RAGE (MAGO/MAGA DA IRA)</h3>
        <p><strong>O que Conhece a Ira (pelo sofrimento) / Guiado(a) pela Ira.</strong></p>
        <p>Você viu como a salsicha é feita, e perdeu o apetite para sempre. Você conhece a manipulação, a mentira e a feiura humana porque foi vítima delas. Sua sabedoria vem da desilusão. Você é aquele que diz "eu avisei" quando a promessa boa demais para ser verdade falha.</p>
        <p>Você é guiado por uma desconfiança crônica. Você entende os mecanismos de controle e as limitações da realidade. O perigo do Mago de Rage é o isolamento paranoico: você sabe tanto sobre as armadilhas do mundo que tem medo de dar um passo, vendo conspirações ou falsidade onde talvez exista apenas bondade genuína.</p>
    `,
    "Witch:Rage": `
        <h3>WITCH OF RAGE (BRUXA/BRUXO DA IRA)</h3>
        <p><strong>Que Manipula a Ira.</strong></p>
        <p>Você é uma agitadora emocional. Você sabe exatamente quais botões apertar para deixar alguém furioso ou paranoico. Você manipula a percepção da realidade negativa: pode convencer uma multidão pacífica de que estão sendo oprimidos, ou fazer uma pessoa furiosa se acalmar com uma lógica distorcida.</p>
        <p>Sua relação com a verdade é plástica. Você usa a indignação como combustível. Você molda o ambiente social através do medo e da suspeita, muitas vezes para quebrar estruturas que você considera falsas. O risco é criar um incêndio que você não consegue apagar, queimando-se junto com seus alvos.</p>
    `,
    "Prince:Rage": `
        <h3>PRINCE OF RAGE (PRÍNCIPE/PRINCESA DA IRA)</h3>
        <p><strong>O que Destrói a Ira / Destrói com a Ira.</strong></p>
        <p>Você é estranhamente pacífico, talvez até "zen" demais. Como destruidor da Ira, você reprime sentimentos negativos, recusa-se a ver o lado feio das coisas e pode impor uma positividade tóxica, destruindo a capacidade crítica e o ceticismo saudável (agindo como um falso jogador de Hope).</p>
        <p>Ou, no aspecto ativo, você destrói *com* a Ira: a fúria cega. Você entra em estado de berzerker, físico ou verbal, aniquilando tudo pela frente sem estratégia, movido apenas pela rejeição absoluta da realidade atual. Você destrói mentiras, mas também destrói as verdades que sustentam a sanidade das pessoas.</p>
    `,
    "Sylph:Rage": `
        <h3>SYLPH OF RAGE (SÍLFIDE/SILFO DA IRA)</h3>
        <p><strong>Que Cura a Ira / Conserta a Ira.</strong></p>
        <p>Você valida os demônios dos outros. Enquanto a sociedade diz "não fique bravo", você diz "você tem todo o direito de estar puto". Você ajuda as pessoas a focarem sua raiva, a entenderem suas limitações e a aceitarem as verdades difíceis que estão tentando ignorar.</p>
        <p>Sua "cura" é através da catarse ou do choque de realidade. Mas cuidado: você pode acabar "consertando" a capacidade de alguém de perdoar, transformando mágoas passageiras em rancores eternos, ou incentivando uma paranoia que você julga ser "saudável".</p>
    `,
    "Page:Rage": `
        <h3>PAGE OF RAGE (ESCUDEIRO/ESCUDEIRA DA IRA)</h3>
        <p><strong>O que Serve a Ira / É servido(a) pela Ira.</strong></p>
        <p>Você começa como o capacho. Você engole sapos, aceita desrespeito e tem medo de impor seus limites. Você serve à frustração, acumulando-a silenciosamente enquanto tenta manter um sorriso no rosto.</p>
        <p>Mas Rage é uma panela de pressão. O potencial do Pagem é a explosão inevitável. Quando você finalmente aprende a usar sua Ira, ela é avassaladora. Você se torna uma força da natureza imparável, movida por anos de "sim" que deveriam ter sido "não". De passivo, você vira a encarnação da revolta.</p>
    `,
    "Rogue:Rage": `
        <h3>ROGUE OF RAGE (LADINO/LADINA DA IRA)</h3>
        <p><strong>O que Rouba a Ira (para redistribuir).</strong></p>
        <p>Você é o para-raios. Quando o clima fica tenso, você absorve a negatividade para que o grupo não precise lidar com ela. Você se torna o bode expiatório, ou usa o humor autodepreciativo para desviar a raiva que seria direcionada a outros.</p>
        <p>Você "rouba" a frustração do ambiente. É um ato de sacrifício, mas te deixa carregada de veneno emocional que não é seu. Você lida com a realidade cruel tentando protegendo os outros dela, mas acaba ficando cínico e amargo sozinho, enquanto seus amigos permanecem inocentes.</p>
    `,
    "Seer:Rage": `
        <h3>SEER OF RAGE (VIDENTE DA IRA)</h3>
        <p><strong>Que Vê a Ira / Guia pela Ira.</strong></p>
        <p>Você vê as rachaduras na parede. Você entende a sanidade (e a falta dela). Você olha para uma ideologia, um grupo ou um plano e consegue identificar imediatamente onde está a mentira, onde está a fraqueza e quem está fingindo.</p>
        <p>Sua orientação é baseada no ceticismo. "Isso é bom demais para ser verdade", você avisa. Você guia os outros para longe de ilusões perigosas. O fardo é ser a desmancha-prazeres eterna, a pessoa que nunca consegue simplesmente aproveitar o show de mágica porque está ocupada demais olhando para a manga do mágico.</p>
    `,
    "Heir:Rage": `
        <h3>HEIR OF RAGE (HERDEIRO/HERDEIRA DA IRA)</h3>
        <p><strong>O que Herda a Ira / Protegido(a) pela Ira.</strong></p>
        <p>Você atrai conflito como ímã, muitas vezes sem fazer nada. As pessoas projetam suas frustrações em você, ou você se vê constantemente no meio de situações caóticas e hostis. Estranhamente, isso não te derruba; você prospera na discórdia.</p>
        <p>Você é "protegido" pela sua própria teimosia ou capacidade de rejeição. Você tem uma pele grossa natural. O perigo é se acostumar tanto com a hostilidade que você se torna incapaz de funcionar em tempos de paz, inconscientemente sabotando a harmonia só para se sentir "em casa" novamente.</p>
    `,
    "Bard:Rage": `
        <h3>BARD OF RAGE (BARDO/BARDA DA IRA)</h3>
        <p><strong>O que Convida a Destruição da Ira.</strong></p>
        <p>Você é o "troll" da vida real. Passivamente, você desmoraliza qualquer tentativa de seriedade ou de raiva justa com piadas niilistas ou comportamento errático. Você faz com que as preocupações dos outros pareçam ridículas, destruindo a convicção deles.</p>
        <p>Ou, você convida a destruição *através* da Ira: você provoca, cutuca e instiga até que alguém exploda e destrua tudo, enquanto você assiste comendo pipoca. Você é o agente catalisador que transforma uma discordância pequena numa guerra total, usando a imprevisibilidade emocional como arma de destruição em massa.</p>
    `,

    // --- LIFE (VIDA) ---
    "Maid:Life": `
        <h3>MAID OF LIFE (CRIADA/CRIADO DA VIDA)</h3>
        <p><strong>Que Cria a Vida / Feita(o) de Vida.</strong></p>
        <p>Você é a "consertadora" incansável. Você não aceita que as coisas quebrem, morram ou acabem. Você está sempre ocupada cuidando de alguém, financiando projetos ou injetando energia em causas perdidas.</p>
        <p>Sua "Resposta" é a hiperatividade. Você tem pavor de ser inútil ou de parecer fraca. Você "cria" vida e luxo ao seu redor, mimando os outros, mas muitas vezes esquece de cuidar de si mesma, tratando-se como uma bateria inesgotável até o momento em que você pifa.</p>
    `,
    "Knight:Life": `
        <h3>KNIGHT OF LIFE (CAVALEIRO/CAVALEIRA DA VIDA)</h3>
        <p><strong>O que Explora a Vida / Protege a Vida.</strong></p>
        <p>Você usa sua energia e presença como escudo. Você é intenso, barulhento e cheio de vitalidade. Você entra na sala e a atmosfera muda. Você usa sua capacidade de resolver problemas práticos e de "fazer acontecer" para proteger os outros da fragilidade.</p>
        <p>Mas, no fundo, você tem medo de não ser suficiente ou de perder sua força. Você performa a invencibilidade e a generosidade exagerada para esconder suas próprias necessidades. Você protege a vida dos outros lutando as batalhas deles, impedindo-os de crescerem sozinhos.</p>
    `,
    "Thief:Life": `
        <h3>THIEF OF LIFE (LADRÃO/LADRA DA VIDA)</h3>
        <p><strong>Que Rouba a Vida (para si).</strong></p>
        <p>Você quer o melhor pedaço do bolo, e não tem vergonha disso. Você entende que a vida é uma competição por recursos (dinheiro, atenção, status) e você joga para ganhar. Você pode drenar a energia da sala, exigindo foco total em seus problemas ou conquistas.</p>
        <p>Sua psicologia é baseada na escassez: "se eu não pegar, alguém vai pegar". Você rouba o protagonismo e a vitalidade para preencher um vazio interno de insegurança. Você brilha muito, mas muitas vezes à custa de deixar os outros na sombra.</p>
    `,
    "Mage:Life": `
        <h3>MAGE OF LIFE (MAGO/MAGA DA VIDA)</h3>
        <p><strong>O que Conhece a Vida (pelo sofrimento) / Guiado(a) pela Vida.</strong></p>
        <p>Você conhece o preço da vida. Talvez você tenha lidado com doenças, pobreza ou com a injustiça inerente de que a vida não é justa. Você entende os sistemas de privilégio e poder porque já se sentiu do lado errado deles.</p>
        <p>Agora, você é o pragmático que sabe exatamente onde aplicar energia para obter resultados. Você não desperdiça esforço. Você guia os outros a não gastarem tempo com causas mortas. O risco é o cinismo: ver a vida apenas como uma transação biológica ou social, sem magia.</p>
    `,
    "Witch:Life": `
        <h3>WITCH OF LIFE (BRUXA/BRUXO DA VIDA)</h3>
        <p><strong>Que Manipula a Vida.</strong></p>
        <p>Você não aceita as regras da biologia ou da sociedade. Você quebra barreiras. Você manipula a energia do grupo: consegue animar um velório ou deprimir uma festa num estalar de dedos. Você trata as regras sociais como sugestões.</p>
        <p>Sua personalidade é dominante e um pouco controladora. Você decide quem "vive" (quem recebe atenção/ajuda) e quem não. Você molda o crescimento das pessoas ao seu redor como bonsais, o que pode ser lindo ou terrivelmente restritivo.</p>
    `,
    "Prince:Life": `
        <h3>PRINCE OF LIFE (PRÍNCIPE/PRINCESA DA VIDA)</h3>
        <p><strong>O que Destrói a Vida / Destrói com a Vida.</strong></p>
        <p>Você é o minimalista ou o asceta. Como destruidor da Vida, você rejeita o luxo, o excesso e a futilidade. Você corta o que considera supérfluo, o que pode te tornar alguém muito focado, mas também alguém que suga a alegria e a cor do ambiente.</p>
        <p>Ou, você destrói *com* a Vida: você usa seu status, dinheiro ou privilégio para esmagar os outros. Você usa a força bruta da sua existência para atropelar quem está no caminho. É a arrogância de quem acha que suas regras são as únicas que importam.</p>
    `,
    "Sylph:Life": `
        <h3>SYLPH OF LIFE (SÍLFIDE/SILFO DA VIDA)</h3>
        <p><strong>Que Cura a Vida / Conserta a Vida.</strong></p>
        <p>Você é a "mãe" do grupo, independente do gênero. Você quer nutrir, alimentar e ver todos crescerem. Você não suporta ver potencial desperdiçado. Você se intromete na saúde e no bem-estar dos outros porque acha que sabe o que é melhor para eles.</p>
        <p>O problema é que você pode sufocar as pessoas com seu cuidado. Você cria dependência, fazendo tudo pelos outros e impedindo que eles desenvolvam sua própria força. Você precisa entender que deixar alguém cair faz parte do crescimento.</p>
    `,
    "Page:Life": `
        <h3>PAGE OF LIFE (ESCUDEIRO/ESCUDEIRA DA VIDA)</h3>
        <p><strong>O que Serve a Vida / É servido(a) pela Vida.</strong></p>
        <p>Você começa sentindo-se impotente. Talvez fisicamente frágil, socialmente desajeitado ou financeiramente dependente. Você olha para as pessoas cheias de vida e sucesso e se sente inferior. Você serve ao sucesso dos outros, buscando migalhas.</p>
        <p>Mas o Pagem é o crescimento explosivo. Se você persistir, você descobre uma fonte inesgotável de resiliência. Você pode se tornar a pessoa mais poderosa e influente do grupo, alguém que superou todas as probabilidades. Sua jornada é provar que você merece ocupar espaço.</p>
    `,
    "Rogue:Life": `
        <h3>ROGUE OF LIFE (LADINO/LADINA DA VIDA)</h3>
        <p><strong>O que Rouba a Vida (para redistribuir).</strong></p>
        <p>Você é o Robin Hood. Você tira de quem tem muito (inclusive de você mesma) para dar a quem tem pouco. Você sacrifica seu conforto, seu dinheiro e sua saúde para ajudar os necessitados. Você não consegue desfrutar de um luxo se souber que alguém está sofrendo.</p>
        <p>É nobre, mas autodestrutivo. Você "rouba" sua própria vitalidade para manter os outros vivos. Você evita brilhar ou ter sucesso para não fazer os outros se sentirem mal. Você precisa aprender que não precisa se apagar para que os outros existam.</p>
    `,
    "Seer:Life": `
        <h3>SEER OF LIFE (VIDENTE DA VIDA)</h3>
        <p><strong>Que Vê a Vida / Guia pela Vida.</strong></p>
        <p>Você entende de hierarquias e sistemas. Você olha para uma situação social e sabe exatamente quem tem poder, quem está fingindo e onde estão as oportunidades de crescimento. Você vê o potencial latente nas pessoas.</p>
        <p>Sua função é guiar os outros para o sucesso. "Invista nisso", "fale com fulano", "cuide da sua saúde". O fardo é ver o potencial desperdiçado em todo lugar e se frustrar com a mediocridade ou com a falta de ambição das pessoas ao seu redor.</p>
    `,
    "Heir:Life": `
        <h3>HEIR OF LIFE (HERDEIRO/HERDEIRA DA VIDA)</h3>
        <p><strong>O que Herda a Vida / Protegido(a) pela Vida.</strong></p>
        <p>Você nasceu virado para a lua. As coisas fluem para você: oportunidades, dinheiro, saúde. Você tem uma energia contagiante e despreocupada. Você navega a vida com a certeza inconsciente de que tudo vai se resolver.</p>
        <p>Você tende a ser protegido pelo seu próprio otimismo e vitalidade. O perigo é a bolha de privilégio: você pode ter dificuldade em empatizar com quem sofre ou luta, porque para você, a vida é fácil. Você corre o risco de ser superficial, flutuando sem criar raízes profundas.</p>
    `,
    "Bard:Life": `
        <h3>BARD OF LIFE (BARDO/BARDA DA VIDA)</h3>
        <p><strong>O que Convida a Destruição da Vida.</strong></p>
        <p>Sua relação com o autocuidado e o status é caótica. Passivamente, você deixa sua vida, saúde ou finanças desmoronarem por pura negligência. Você assiste oportunidades morrerem e não faz nada. Você convida a estagnação.</p>
        <p>Ativamente, você convida a destruição *através* da Vida: o excesso hedonista. Você festeja até destruir tudo, gasta o que não tem, ou usa sua influência e carisma para levar o grupo a comportamentos de risco. Você é a personificação da frase "viva rápido, morra jovem", arrastando todos consigo.</p>
    `,

    // --- DOOM (DESTINO) ---
    "Maid:Doom": `
        <h3>MAID OF DOOM (CRIADA/CRIADO DO DESTINO)</h3>
        <p><strong>Que Cria o Destino / Feita(o) de Destino.</strong></p>
        <p>Você é a pessoa que carrega o mundo nas costas. Você "cria" regras e limitações para si mesma, enchendo-se de obrigações e deveres. Você sente que deve se sacrificar ou sofrer para ter valor. Se algo dá errado, você assume a culpa e tenta consertar sozinha.</p>
        <p>Sua psicologia é a do mártir proativo. Você se antecipa ao desastre tentando controlar tudo, criando sistemas rígidos para evitar o caos. O perigo é você se tornar a arquiteta da sua própria prisão, recusando ajuda e afundando sob o peso de responsabilidades que ninguém te pediu para carregar.</p>
    `,
    "Knight:Doom": `
        <h3>KNIGHT OF DOOM (CAVALEIRO/CAVALEIRA DO DESTINO)</h3>
        <p><strong>O que Explora o Destino / Protege o Destino.</strong></p>
        <p>Você é o especialista em "pior cenário possível". Você usa o cinismo e o conhecimento das regras como uma arma. Você sabe exatamente o que pode dar errado e usa isso para proteger o grupo. Você é o pessimista tático que salva o dia porque previu a falha.</p>
        <p>Você protege os outros das consequências duras da realidade, muitas vezes se jogando na frente do trem. Mas você usa essa dureza para esconder seu próprio sofrimento. Você age como se nada te machucasse, explorando a própria dor como combustível para seguir em frente ("no pain, no gain").</p>
    `,
    "Thief:Doom": `
        <h3>THIEF OF DOOM (LADRÃO/LADRA DO DESTINO)</h3>
        <p><strong>Que Rouba o Destino (para si).</strong></p>
        <p>Você tem uma relação estranha com o sofrimento. Você tende a invalidar a dor dos outros, agindo como se só os seus problemas fossem reais ou difíceis ("gatekeeping" de sofrimento). Você rouba a narrativa de vitimização para si.</p>
        <p>Por outro lado, você pode "roubar" as restrições e regras dos outros para ganhar vantagem. Você hackeia o sistema. Você entende as limitações tão bem que sabe exatamente como quebrá-las em benefício próprio, deixando os outros presos nas regras que você acabou de burlar.</p>
    `,
    "Mage:Doom": `
        <h3>MAGE OF DOOM (MAGO/MAGA DO DESTINO)</h3>
        <p><strong>O que Conhece o Destino (pelo sofrimento) / Guiado(a) pelo Destino.</strong></p>
        <p>Você é a alma velha e cansada. Você entende o sofrimento porque vive nele. Você conhece as limitações da vida, as regras injustas e a inevitabilidade da dor. Você não tem ilusões de que "tudo vai ficar bem".</p>
        <p>Sua sabedoria é a empatia profunda. Você sabe consolar quem está sofrendo porque fala a língua da dor. Você guia os outros através dos momentos mais sombrios. O risco é a depressão crônica e a passividade: saber tanto sobre como o sistema é quebrado que você desiste de tentar consertá-lo.</p>
    `,
    "Witch:Doom": `
        <h3>WITCH OF DOOM (BRUXA/BRUXO DO DESTINO)</h3>
        <p><strong>Que Manipula o Destino.</strong></p>
        <p>Você olha para uma regra imutável e ri. Você manipula as restrições. Se dizem "é impossível", você faz. Você altera as leis da física ou da sociedade para criar brechas onde não deveriam existir.</p>
        <p>Sua resposta ao trauma é a rebelião estrutural. Você torce o destino. Você pode condenar alguém a uma maldição terrível ou libertar alguém de um destino certo. Você brinca com forças perigosas e fundamentais. O perigo é quebrar algo que sustentava a realidade, causando um colapso sistêmico.</p>
    `,
    "Prince:Doom": `
        <h3>PRINCE OF DOOM (PRÍNCIPE/PRINCESA DO DESTINO)</h3>
        <p><strong>O que Destrói o Destino / Destrói com o Destino.</strong></p>
        <p>Você é o otimista radical ou o anarquista. Como destruidor do Destino, você ignora regras, limites e consequências. Você vive como se fosse imortal, recusando-se a aceitar qualquer tipo de negatividade ou restrição. Você ajuda os outros a superarem a depressão destruindo a fonte do sofrimento.</p>
        <p>Ou, você destrói *com* o Destino: você impõe regras draconianas e punições severas para acabar com problemas. Você usa a estrutura rígida para esmagar a esperança ou a criatividade. Você é o juiz executor que aplica a lei ao pé da letra, sem misericórdia.</p>
    `,
    "Sylph:Doom": `
        <h3>SYLPH OF DOOM (SÍLFIDE/SILFO DO DESTINO)</h3>
        <p><strong>Que Cura o Destino / Conserta o Destino.</strong></p>
        <p>Você é a conselheira de luto. Você não foge da parte feia da vida. Você está lá para segurar a mão de quem está sofrendo, para ouvir os desabafos mais sombrios e para ajudar as pessoas a aceitarem suas limitações.</p>
        <p>Você tenta "curar" o sofrimento ajudando os outros a conviverem com ele. Porém, você pode acabar se tornando uma muleta, impedindo as pessoas de superarem suas dores porque você valida o sofrimento delas constantemente. Você conserta as rachaduras, mas às vezes as rachaduras precisavam quebrar para a luz entrar.</p>
    `,
    "Page:Doom": `
        <h3>PAGE OF DOOM (ESCUDEIRO/ESCUDEIRA DO DESTINO)</h3>
        <p><strong>O que Serve o Destino / É servido(a) pelo Destino.</strong></p>
        <p>Você começa se sentindo amaldiçoado. Tudo dá errado para você. Você se sente preso por regras que não entende, oprimido por autoridades ou simplesmente azarado. Você serve ao sofrimento, aceitando-o como sua realidade imutável.</p>
        <p>Mas se você aguentar, a dinâmica inverte. Você aprende as regras do jogo melhor que ninguém. Você usa as restrições a seu favor, construindo estruturas impenetráveis. O Page de Doom realizado é aquele que transforma suas cicatrizes em armadura e seu conhecimento do sistema em poder absoluto.</p>
    `,
    "Rogue:Doom": `
        <h3>ROGUE OF DOOM (LADINO/LADINA DO DESTINO)</h3>
        <p><strong>O que Rouba o Destino (para redistribuir).</strong></p>
        <p>Você tira o peso das costas dos outros. Se alguém está sofrendo, você toma essa dor para si. Se alguém quebrou uma regra, você assume a culpa. Você rouba as consequências negativas e o "azar" dos seus amigos.</p>
        <p>É o sacrifício supremo. Você lida com a realidade tornando-se a lixeira emocional do grupo. Você libera os outros para serem felizes enquanto você lida com a parte chata e triste. O risco é óbvio: você afunda na depressão e no burnout, esquecendo que não dá para salvar todo mundo.</p>
    `,
    "Seer:Doom": `
        <h3>SEER OF DOOM (VIDENTE DO DESTINO)</h3>
        <p><strong>Que Vê o Destino / Guia pelo Destino.</strong></p>
        <p>Você vê o fim da linha. Você entende a futilidade de certas ações. Enquanto todos estão empolgados com um plano estúpido, você já viu os dez motivos pelos quais ele vai falhar. Você vê as regras invisíveis que governam a sociedade.</p>
        <p>Sua orientação é baseada na cautela. "Não faça isso, vai dar errado". Você ajuda o grupo a evitar catástrofes e armadilhas. O fardo é o fatalismo: é difícil ter esperança quando você vê as limitações de tudo com tanta clareza. Você pode parecer um pessimista chato, mas geralmente está certo.</p>
    `,
    "Heir:Doom": `
        <h3>HEIR OF DOOM (HERDEIRO/HERDEIRA DO DESTINO)</h3>
        <p><strong>O que Herda o Destino / Protegido(a) pelo Destino.</strong></p>
        <p>Você tem uma relação simbiótica com o desastre. Estranhamente, as coisas ruins que acontecem ao seu redor parecem não te atingir diretamente, ou você se adapta a elas com uma facilidade assustadora. Você "herda" sistemas e estruturas; você se dá bem em ambientes rígidos e burocráticos.</p>
        <p>Você é protegido pelas regras. Você sabe navegar no caos sem se molhar. O perigo é a complacência com o sofrimento alheio, já que para você, as restrições parecem naturais e confortáveis. Você pode se tornar um burocrata da vida, seguindo regras sem questionar seu propósito humano.</p>
    `,
    "Bard:Doom": `
        <h3>BARD OF DOOM (BARDO/BARDA DO DESTINO)</h3>
        <p><strong>O que Convida a Destruição do Destino.</strong></p>
        <p>Você zomba das regras. Passivamente, você ignora a segurança, os avisos e o bom senso, convidando o desastre a entrar pela porta da frente. Você age como se fosse invencível, e sua imprudência corrói a estrutura que protege o grupo.</p>
        <p>Ou, você convida a destruição *através* do Destino: você traz a inevitabilidade para a mesa. Você é o portador das más notícias que destroem o moral de todos. Você acelera o colapso de um sistema podre, não para consertá-lo, mas para ver a poeira baixar. Você é o fatalismo transformado em arma.</p>
    `
},
// FASE 1: ASPECTO 
aspectQuestions = [
    { t: "1. Um grupo de amigos insiste em manter uma tradição anual que você acha cansativa. O que você faz?", opts: [
        { txt: "Acabo indo, mas só para cumprir o protocolo. Me incluíram, mas não significa que estou ali de corpo e alma.", w: { Doom: 3, Life: 1, Breath: 1 } },
        { txt: "Insisto para que todos compareçam. Se a gente começar a abrir exceções, o grupo acaba se perdendo com o tempo.", w: { Blood: 4, Breath: -2 }, destroys: "Breath" }, 
        { txt: "Não vou. Se não está me fazendo bem, não faz sentido me sentir preso a um compromisso só por obrigação.", w: { Breath: 3, Void: 3, Life: 1, Blood: -3 }, destroys: "Blood" },
        { txt: "Tento convencer o pessoal a mudar um pouco o plano para algo que canse menos, mas que ainda sirva para a gente se reunir.", w: { Mind: 3, Life: 2, Space: 2, Heart: -1 } },
        { txt: "Analiso o motivo do meu cansaço. Pode não ter nada a ver com a tradição em si, mas com algum outro fator na minha vida que esteja me exaurindo.", w: { Heart: 3, Time: 2 } }
    ]},
    { t: "2. Você descobre um erro grave de um colega de trabalho que é seu amigo. Isso pode prejudicá-lo no futuro. O que você faz?", opts: [
        { txt: "Digo a ele exatamente o que vi. Ele precisa ter todos os fatos em mãos para ter clareza sobre a própria situação.", w: { Light: 3, Rage: 3, Void: -3 }, destroys: "Void" }, 
        { txt: "Mantenho segredo. Trazer isso à tona agora só criaria um clima ruim e uma atenção negativa que ninguém precisa.", w: { Void: 4, Blood: 3, Light: -3 } }, 
        { txt: "Não me meto. Se o erro aconteceu, as consequências virão naturalmente e não acho que eu deva interferir no que tem que ser.", w: { Doom: 3, Time: 3, Life: -2 }, destroys: "Doom" },
        { txt: "Aviso ele e ajudo a bolar uma forma de consertar o erro antes que isso gere um efeito dominó e piore as coisas.", w: { Life: 3, Space: 1, Mind: 1 } },
        { txt: "Depende. O erro dele pode me prejudicar ou as pessoas ao meu redor.", w: { Mind: 3, Time: 2, Doom: -2 } }
    ]},
    { t: "3. Ao iniciar um novo projeto pessoal, qual é a sua maior preocupação?", opts: [
        { txt: "Se eu vou conseguir dar forma a tudo o que imaginei e fazer aquilo realmente ocupar o espaço que merece no mundo.", w: { Space: 3, Hope: 2, Time: -2 } },
        { txt: "Se terei tempo para terminar antes que o tédio destrua o plano.", w: { Time: 3, Breath: 1, Space: -2, Life: 1 }, destroys: "Space" },
        { txt: "Se esse projeto realmente diz algo verdadeiro sobre mim ou se estou apenas seguindo um impulso que não me representa.", w: { Heart: 3, Rage: 3, Mind: -3 }, destroys: "Mind" },
        { txt: "Se eu tomei as decisões certas no planejamento ou se estou ignorando alguma falha que vai arruinar o resultado depois.", w: { Mind: 3, Light: 1, Heart: -3 } },
        { txt: "Se isso que estou criando tem potencial para me levar a lugares novos e realmente mudar minha situação atual.", w: { Life: 3, Light: 2, Doom: -3 }, destroys: "Doom" } 
    ]},
    { t: "4. Como você lida com uma crítica dura sobre sua competência?", opts: [
        { txt: "Avalio se os pontos levantados fazem sentido ou se a pessoa apenas tomou uma decisão errada ao me julgar daquela forma.", w: { Heart: 3, Time: 1 } },
        { txt: "Me irrito profundamente. Minha competência não deve ser questionada pois exerço meu trabalho sempre com maestria.", w: { Heart: 3, Light: 2 }, destroys: "Void" },
        { txt: "Fico questionando a real intenção por trás da fala. As pessoas podem criticar por muitos motivos diferentes.", w: { Light: 3, Rage: 2 } },
        { txt: "Aceito o que foi dito. Se eu falhei em ser eficiente, é natural que eu tenha que lidar com as cobranças e os resultados disso.", w: { Doom: 3, Void: 1, Time: 2, Life: -2 }, destroys: "Life" },
        { txt: "Tento enxergar o que a pessoa viu. Às vezes ela percebeu algum detalhe ou uma informação importante que passou batido por mim.", w: { Blood: 3, Light: 2, Void: -2 } }
    ]},
    { t: "5. Em uma discussão acalorada, o que mais te irrita nos outros?", opts: [
        { txt: "Gente que tenta 'amaciar' a situação ou manter um otimismo forçado quando as coisas estão claramente um desastre.", w: { Rage: 3, Life: 2, Hope: -3 }, destroys: "Hope" },
        { txt: "Gente que não interfere ou que se fecha para possibilidades só porque 'as regras não permitem' ou 'é impossível'.", w: { Hope: 4, Life: 1, Rage: 1 }, destroys: "Doom" }, 
        { txt: "Gente que trata o problema de forma fria e técnica demais, ignorando completamente o que as pessoas envolvidas estão sentindo.", w: { Heart: 3, Breath: 2, Mind: -3, Time: -1 } },
        { txt: "Gente que perde o controle e começa a agir por puro impulso emocional, sem parar um segundo para pensar no que é mais sensato fazer.", w: { Mind: 3, Space: 1, Heart: -3 } },
        { txt: "Gente que fica dando voltas e focando em detalhes que não servem para nada, em vez de ir direto ao ponto que realmente importa.", w: { Light: 3, Blood: 2, Time: 2, Void: -2 } }
    ]},
    { t: "6. Você tem um final de semana livre. Como se sente parado?", opts: [
        { txt: "Inquieto. Sinto que cada hora que passo sem produzir algo concreto é um desperdício de um recurso que não volta mais.", w: { Time: 3, Life: 1, Space: -2 }, destroys: "Space" }, 
        { txt: "Meio culpado. Estar sozinho e parado me faz sentir que estou falhando com as pessoas que dependem de mim ou que estou perdendo o contato com o que importa.", w: { Blood: 3, Rage: 3, Doom: 1, Breath: -3 }, destroys: "Breath" },
        { txt: "Leve. Aproveito a tranquilidade e uso meu tempo para focar no que gosto de fazer e no que me der na telha.", w: { Breath: 3, Space: 3, Hope: 2, Time: -3 }, destroys: "Time" },
        { txt: "Reflexivo. Uso o silêncio para tentar entender se o que eu estou fazendo da vida hoje é o que eu realmente quero.", w: { Heart: 3, Life: 2, Mind: -1, Light: -1 } },
        { txt: "Entediado. Se não houver algo novo acontecendo ou algum estímulo externo, sinto como se minha energia estivesse estagnando.", w: { Life: 3, Rage: 1, Mind: 2, Doom: -2 } }
    ]},
    { t: "7. O que mais te atrai em alguém que você acabou de conhecer?", opts: [
        { txt: "A autenticidade. Sinto-me atraído por quem parece estar em paz consigo mesmo e não finge ser o que não é.", w: { Heart: 3, Blood: 2, Mind: -2 }, destroys: "Mind" },
        { txt: "A objetividade. Admiro quem consegue ser direto e coerente, sem deixar que o ego ou as emoções nublem o que é sensato.", w: { Mind: 1, Light: 3, Heart: -3 } },
        { txt: "A confiabilidade. Gosto de pessoas que transmitem segurança e que parecem levar a sério os compromissos que assumem.", w: { Blood: 3, Rage: 1, Doom: 3, Breath: -2 } },
        { txt: "O mistério. Sou cativado por quem não se expõe logo de cara e me sinto compelido a desvendar o que está por trás da máscara.", w: { Light: 2, Doom: 2, Void: -3 } },
        { txt: "A inovatividade. Me interesso por quem parece estar sempre criando ou transformando algo ao seu redor.", w: { Space: 3, Life: 2, Time: -2 } }
    ]},
    { t: "8. Você precisa demitir alguém esforçado sem resultados. Como lida?", opts: [
        { txt: "Foco no que é necessário para o sistema funcionar. Se uma peça não está cumprindo seu papel, ela precisa ser podada para servir ao todo.", w: { Mind: 3, Space: 2, Blood: 2, Life: -3 }, destroys: ["Life", "Hope"] },
        { txt: "Tento dar mais uma chance ou mudar a pessoa de função. Acredito que, com o estímulo certo, qualquer um pode florescer e dar a volta por cima.", w: { Life: 3, Hope: 3, Doom: -3 } },
        { txt: "Sinto o peso da decisão. Tento fazer o processo ser o menos doloroso possível, garantindo que a pessoa saiba que ainda tem meu apoio pessoal.", w: { Breath: 3, Doom: 2, Heart: 2, Mind: -1 } },
        { txt: "Sou direto e honesto sobre os fatos. Mentir ou dar falsas esperanças só faria a pessoa perder tempo em um lugar onde ela não terá futuro.", w: { Rage: 3, Light: 2, Hope: -3 } },
        { txt: "Analiso a situação de fora. Se o desligamento é a conclusão lógica baseada nos dados, eu executo a decisão sem deixar que o sentimentalismo interfira no veredito.", w: { Void: 3, Space: 2, Heart: -3 }, destroys: "Heart" },
    ]},
    { t: "9. Qual é a sua relação com lembranças, fotos e o passado?", opts: [
        { txt: "Guardo objetos e fotos com cuidado. Ter algo físico para tocar me ajuda a sentir que aqueles momentos e pessoas ainda ocupam um espaço real na minha vida.", w: { Time: 3, Doom: 2, Space: -2 } },
        { txt: "Olho para o passado com apreço. O futuro só existe por conta do passado, seja ele bom ou ruim.", w: { Space: 3, Hope: 3 } },
        { txt: "O passado serve como aprendizado. Guardo o que aconteceu apenas para analisar as consequências das minhas escolhas e não cometer o mesmo erro de novo.", w: { Mind: 3, Light: 1 } },
        { txt: "Minhas memórias são o que me dão força. Acredito que o que vivi é a prova de que coisas melhores ainda podem ser construídas no futuro.", w: { Hope: 3, Breath: 2, Rage: 2 } },
        { txt: "Não dou muita importância. O que passou já perdeu o brilho; prefiro focar no agora sem carregar o peso do que já foi.", w: { Void: 3, Breath: 2, Time: -2 }, destroys: "Time" }
    ]},
    { t: "10. Diante de um impasse sem solução, qual sua reação?", opts: [
        { txt: "Tento forçar uma solução. Às vezes a única saída é forçar a passagem e derrubar o que está bloqueando o caminho, custe o que custar.", w: { Doom: 3, Rage: 1, Hope: -2 } },
        { txt: "Aceito o limite. Se o caminho fechou, é porque chegamos ao fim da linha e não adianta lutar contra uma situação que já está decidida.", w: { Time: 3, Life: -3 }, destroys: "Life" },
        { txt: "Não aceito que não tenha solução. Acredito que sempre há uma saída se persistirmos e mantivermos a convicção.", w: {Hope: 3, Rage: 3, Life: 1 } },
        { txt: "Tento bolar uma ferramenta nova ou abordar o problema por um ângulo diferente para contornar o obstáculo.", w: { Space: 3, Breath: 2, Mind: 3, Time: -1 } },
        { txt: "Paro tudo e volto a investigar. Se parece sem solução, é porque ainda tem algum detalhe importante que eu não consegui enxergar.", w: { Light: 3, Time: 1, Void: -3 }, destroys: "Void" }
    ]},
    { t: "11. Um segredo perigoso chega até você. O que pensa?", opts: [
        { txt: "Se essa informação me foi confiada ou se ela pode afetar as pessoas ao meu redor, eu a guardo comigo, não importa o peso.", w: { Blood: 3, Doom: 2, Void: 2, Breath: -2 } },
        { txt: "Se esse segredo for revelado no momento certo, ele pode trazer a clareza que todos precisam para agir.", w: { Light: 3, Mind: 1, Void: -3 } },
        { txt: "Segredos geralmente são usados para esconder verdades feias ou para manipular quem não sabe de nada.", w: { Mind: 3, Rage: 2, Hope: -2 } },
        { txt: "Não quero saber. Não quero que essa informação mude minha paz ou me obrigue a tomar partido.", w: { Void: 3, Breath: 2, Light: -3 }, destroys: "Light" },
        { txt: "Um segredo é apenas mais uma variável que pode alterar o resultado das minhas escolhas futuras.", w: { Mind: 2, Time: 2, Heart: -2 } }
    ]},
    { t: "12. O grupo insiste em um plano fadado ao erro por otimismo. O que faz?", opts: [
        { txt: "Digo abertamente que vai dar errado. Prefiro ser o chato que fala a verdade do que ver todo mundo se perdendo numa mentira confortável.", w: { Rage: 3, Blood: 2, Hope: -3 }, destroys: "Hope" },
        { txt: "Mostro por que a ideia não faz sentido e apresento uma alternativa. Não vou seguir um caminho que a lógica já mostra que é um beco sem saída.", w: { Mind: 3, Light: 1, Heart: -2, Void: -3 } },
        { txt: "Me omito. Se foram eles bolaram o plano, deve ter alguma lógica - não cabe a mim interferir.", w: { Void: 3, Doom: 1, Rage: -2 } },
        { txt: "Vou com eles. Acredito que, se a gente mantiver o ânimo e a convicção, a nossa vontade pode acabar mudando o resultado final.", w: { Hope: 3, Life: 2, Rage: -2 }, destroys: "Rage" }, 
        { txt: "Observo o desenrolar das coisas. Se eles escolheram esse caminho, o fracasso é a consequência natural e eu vou usar a experiência para não repetir o erro.", w: { Space: 3, Light: 2, Time: -3 } }
    ]},
    { t: "13. Você está em um local onde ninguém te conhece. Como se sente?", opts: [
        { txt: "Livre. Sem expectativas, posso agir sem ser rotulado.", w: { Breath: 3, Space: 2, Blood: -2, Life: 1 }, destroys: "Blood" },
        { txt: "Prostrado. Preciso encontrar algo, ou alguém, que me conforte e valide a minha existência.", w: { Light: 3, Heart: 2, Void: 2, Breath: -3 }, destroys: "Breath" }, 
        { txt: "Observador. Chance perfeita para analisar a dinâmica do local, sem me envolver.", w: { Void: 2, Time: 3, Heart: -1 }, destroys: "Heart" },
        { txt: "Imaginativo. Tomo o momento para me refugiar na minha própria cabeça.", w: { Hope: 3, Blood: 1, Void: -3 } },
        { txt: "Desconectado. Sozinho, não tenho um motivo para estar aqui.", w: { Blood: 3, Doom: 2, Breath: -3 } }
    ]},
    { t: "14. Você precisa magoar alguém para um objetivo. O que dói?", opts: [
        { txt: "O fato de que estou sendo falso comigo mesmo. Odeio ter que agir contra o que eu sinto que é certo só para cumprir uma meta.", w: { Heart: 3, Blood: -2, Hope: 2 } },
        { txt: "A frustração de não ter encontrado uma solução melhor. Magoar alguém foi o sacrifício necessário.", w: { Doom: 3, Light: 3, Heart: -3 }, destroys: "Heart" },
        { txt: "A quebra da confiança. Saber que essa atitude vai manchar ou destruir o vínculo que eu tinha com aquela pessoa, talvez para sempre.", w: { Blood: 3, Time: 2, Breath: -2 } },
        { txt: "A necessidade do sacrifício. É péssimo ter que passar por cima de alguém ou de algo vivo para que o projeto continue avançando.", w: { Life: 3, Breath: 2, Hope: 1, Doom: -3 } },
        { txt: "A confirmação de que o mundo é cruel. Magoar alguém é apenas a realidade batendo à porta, mostrando que nem tudo se resolve com boas intenções.", w: { Rage: 3, Doom: 1, Hope: -3 } } 
    ]},
    { t: "15. Qual o seu maior medo em relação ao futuro?", opts: [
        { txt: "Ficar preso a uma rotina ou a um lugar de onde eu não consiga sair. A ideia de perder a minha autonomia e ser confinado me apavora.", w: { Breath: 3, Void: 2, Time: -3 } },
        { txt: "Perceber que meus ideais eram vazios e que o futuro emininente é sem sentido, onde nada do que eu acreditei pode florescer.", w: { Hope: 3, Life: 3, Time: -3 } },
        { txt: "Perceber que a minha existência não teve importância nenhuma ou que eu passarei pelo mundo sem que ninguém realmente me tenha visto.", w: { Light: 3, Heart: 3, Void: -3 } },
        { txt: "Ser exposto de uma forma que eu não consiga controlar. Tenho medo que vasculhem a minha vida e tirem de mim a paz do anonimato.", w: { Void: 3, Mind: 2, Light: -3 }, destroys: "Light" }, 
        { txt: "Não ter tempo suficiente. Sinto uma angústia constante de que o tempo está acabando e eu não vou conseguir concluir o que é necessário antes que o prazo expire.", w: { Time: 3, Doom: 3, Space: -2 } }
    ]},
    { t: "16. Você recebe uma tarefa repetitiva. Como reage?", opts: [
        { txt: "Aceito-a. Há um certo conforto na repetição; saber exatamente o que esperar e cumprir o ciclo me dá uma sensação de segurança e ordem.", w: { Doom: 3, Time: 3, Space: -2, Life: -2 }, destroys: "Space" },
        { txt: "Sinto-me sufocado. Odeio qualquer coisa que me obrigue a ficar parado ou que impeça o meu crescimento e a busca por algo mais vibrante.", w: { Life: 3, Breath: 2, Doom: -3 } }, 
        { txt: "Tento encontrar o padrão por trás daquilo. Se eu entender como o processo funciona, posso otimizá-lo e executá-lo de forma automática.", w: { Mind: 3, Space: 2, Heart: -1 } },
        { txt: "Encaro como uma oportunidade para 'desligar'. Cumpro a função mecanicamente enquanto a minha mente dissocia.", w: { Void: 3, Breath: 3, Light: -2 }, destroys: "Mind" },
        { txt: "Questiono a tarefa. Não me importo em ter que fazê-la, mas sim com o objetivo dela.", w: { Rage: 2, Light: 3 } }
    ]},
    { t: "17. Em uma competição, o que é o sucesso?", opts: [
        { txt: "A perpetuação de um ideal. O sucesso é mostrar que o que eu acredito é possível e conseguir inspirar os outros com esse resultado.", w: { Hope: 3, Breath: 1, Life: 1, Rage: -3 }, destroys: "Rage" }, 
        { txt: "A vitória. O sucesso é quando a competição revela quem realmente é competente e quem não é.", w: { Rage: 2, Light: 3, Hope: -3, Void: -3 } }, 
        { txt: "A camaradagem. O sucesso não é ganhar sozinho, mas garantir que todos saíram fortalecidos da experiência.", w: { Blood: 3, Heart: 1, Breath: -2 } },
        { txt: "A perfeição do resultado. O sucesso é quando o que foi entregue atinge um nível de excelência técnica que não pode ser contestado.", w: { Space: 3, Mind: 2, Time: -2 } },
        { txt: "A satisfação de ter dado meu melhor. Se me esforcei, independentemente do placar, estou satisfeito.", w: { Heart: 3, Void: 1, Mind: -3 } }
    ]},
    { t: "18. Se você descobrisse que toda a sua trajetória até aqui foi, na verdade, planejada ou 'escrita' por outra pessoa, qual seria seu maior incômodo?", opts: [
        { txt: "O fato de que minhas escolhas não foram realmente minhas. É irritante pensar que minha vontade foi apenas uma peça em um tabuleiro que eu não controlei.", w: { Heart: 3, Blood: 1 } },
        { txt: "A dúvida sobre o que é a verdade. Se minha história foi escrita, os eventos que presenciei não são genuínos e precisam ser reavaliados.", w: { Rage: 3, Mind: 1, Hope: -3 } },
        { txt: "Sentiria um alívio profundo, na verdade. Saber que existe um propósito maior e que nada foi por acaso me dá a paz de que minha vida tem um sentido real.", w: { Hope: 3, Doom: 1, Rage: -3 }, destroys: "Rage" },
        { txt: "A sensação de estar preso. Saber que existe um trilho me faz sentir como se eu estivesse acorrentado a um papel, quando eu só queria ser livre para ir para onde eu quisesse.", w: { Breath: 3, Space: 1 } },
        { txt: "O medo do desfecho. Se existe um roteiro, existe um fim planejado, e a ideia de que meus limites e o meu 'prazo de validade' já foram decididos é o que mais me assusta.", w: { Time: 3, Doom: 3, Life: -2 } }
    ]},
    { t: "19. Como você prefere ser lembrado?", opts: [
        { txt: "Como alguém que inspirou os outros. Quero que a minha passagem pelo mundo seja vista como um exemplo de que coisas melhores são possíveis.", w: { Hope: 3, Life: 2, Breath: 1 } },
        { txt: "Pelas coisas que criei. Quero deixar um legado físico e duradouro, algo que ocupe um espaço real mesmo quando eu não estiver aqui.", w: { Space: 3, Time: 2, Void: -1 }, destroys: "Time" }, 
        { txt: "Como alguém que foi o alicerce de quem precisava. Quero ser lembrado como a pessoa que manteve as coisas unidas quando tudo ia cair.", w: { Blood: 3, Doom: 2 } },
        { txt: "Prefiro não ser lembrado de forma pública. O meu sucesso é ter vivido a minha vida com privacidade e silêncio, sem precisar de atenção externa.", w: { Void: 3, Mind: 1, Light: -3 }, destroys: "Light" },
        { txt: "Quero que a minha história seja vista como algo importante e que trouxe significado para as pessoas que amei.", w: { Light: 3, Heart: 3, Void: -3 } }
    ]},
    { t: "20. O que é liberdade para você?", opts: [
        { txt: "Não ter de dar satisfações. Liberdade é poder ir para onde eu quiser e recomeçar sem os rótulos e as expectativas que os outros me impõem.", w: { Breath: 3, Void: 2, Blood: -3 }, destroys: "Blood" }, 
        { txt: "Ter a segurança de um lugar ao qual pertenço. A verdadeira liberdade é saber que tenho pessoas que não irão me abandonar.", w: { Blood: 3, Doom: 1, Breath: -3 } },
        { txt: "Liberdade é ter saúde, energia e recursos para ir atrás de tudo o que a vida tem para oferecer.", w: { Life: 3, Space: 2, Doom: -3 } },
        { txt: "Ser quem eu sou de verdade. Liberdade é não ter que usar máscaras ou fingir que sou outra pessoa para ser aceito pela sociedade.", w: { Heart: 3, Rage: 3, Mind: -3 } },
        { txt: "Ter o controle das minhas escolhas. Liberdade é entender os caminhos à minha frente e ser a única pessoa responsável pela direção que decido tomar", w: { Mind: 3, Time: 2 } }
    ]}
],

// FASE 2: CLASSES
questionsByAspect = {
    "Time": [
    { t: "Você tem um projeto vital com um prazo impossível que está se esgotando hoje.",  opts: [
        { txt: "Sacrifico meu sono, minha saúde e uso cada segundo para garantir que a entrega seja impecável.", w: { Knight: 3, Maid: 2, Page: 2, Prince: -2 } },
        { txt: "Eu me perco em distrações e acabo perdendo a noção das horas; se o prazo estourar, tudo bem.", w: { Bard: 3, Prince: -1, Knight: -3 } },
        { txt: "Deixo o prazo passar e lido com as consequências conforme elas vierem, sem lutar contra o inevitável.", w: { Heir: 3, Knight: -2, Maid: -2 } },
        { txt: "Sei que tudo dará certo, então acabo doando minhas horas para aliviar o peso de quem está em crise.", w: { Rogue: 3, Heir: 2, Thief: -2, Prince: -2 } },
        { txt: "Eu paro tudo para analisar onde errei no cronograma e tento prever o impacto do meu atraso.", w: { Seer: 3, Mage: 3, Witch: -1, Page: -1 } }
    ]},
    { t: "Uma oportunidade única passou e você falhou no prazo. Como você reage no dia seguinte?", opts: [
        { txt: "Eu dou de ombros; se a chance passou por desleixo meu, é sinal de que não era para ser.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Eu invalido a importância do que passou; se o tempo para aquilo acabou, não deve ocupar mais espaço.", w: { Prince: 3, Seer: 2, Sylph: -2, Maid: -2 } },
        { txt: "Eu me recuso a aceitar o 'não'. Tento convencer os responsáveis a abrirem uma nova vaga só para mim.", w: { Witch: 3, Thief: 3, Maid: 1, Seer: -2 } },
        { txt: "Ajudo amigos com os prazos deles, tentando 'consertar' o tempo alheio já que quebrei o meu.", w: { Sylph: 3, Rogue: 2, Prince: -2, Bard: -2 } },
        { txt: "Crio uma regra rígida na minha rotina para que eu nunca mais perca uma chance por desleixo.", w: { Page: 3, Knight: 2, Mage: 1, Heir: -2 } }
    ]},
    { t: "Alguém próximo a você faleceu. Como você processa essa ausência nas semanas seguintes?", opts: [
        { txt: "Deleto as memórias e me desfaço dos pertences; o passado é um peso que não consigo lidar.", w: { Prince: 3, Sylph: -3, Knight: -1 } },
        { txt: "Eu me enterro em tarefas práticas. Organizo minha rotina e fico imerso em minhas obrigações.", w: { Maid: 3, Knight: 3, Page: 1, Prince: -2 } },
        { txt: "Eu deixo as lembranças sumirem sozinhas; permito que o tempo apague a presença da pessoa da rotina.", w: { Bard: 3, Heir: 1, Sylph: -2 } },
        { txt: "Tento compensar o luto me dedicando a causas que eram da pessoa ou vivendo em função do legado dela.", w: { Sylph: 3, Rogue: 2, Bard: -2, Thief: 3 } },
        { txt: "Deixo a dor e a saudade me guiarem naturalmente, sem tentar controlar ou forçar o esquecimento.", w: { Heir: 3, Page: 2, Seer: 2, Witch: -2, Maid: -1 } }
    ]},
    { t: "Como você encara o conceito de 'Legado' e o que deixa para o futuro?", opts: [
        { txt: "É um fardo. Sinto que devo trabalhar incansavelmente para ser digno do que veio antes de mim.", w: { Page: 3, Knight: 2, Maid: 1, Bard: -2 } },
        { txt: "Não me sinto responsável por manter nada vivo; se o passado se perder por falta de cuidado, tudo bem.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "É uma ferramenta. O conhecimento do passado serve apenas para eu prever e manipular o que virá.", w: { Mage: 3, Seer: 2, Thief: 1, Rogue: -1 } },
        { txt: "Legado é o passado colonizando o futuro. Prefiro destruir tradições para dar espaço à inovação.", w: { Prince: 3, Knight: -2, Page: -3 } },
        { txt: "É algo coletivo. Eu sou apenas um elo passando o que recebi para quem precisa mais.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
    ]},
    { t: "Você está em uma fila de mercado que não anda e tem um compromisso importante logo em seguida.", opts: [
        { txt: "Tento trocar de fila ou apressar as pessoas ao redor. Não admito que atrasos mudem meus planos.", w: { Thief: 3, Witch: 2, Prince: 1, Heir: -2 } },
        { txt: "Assumo a liderança. Ajudo a organizar as compras ou oriento quem está confuso para o tempo fluir.", w: { Maid: 3, Sylph: 2, Knight: 1, Prince: -2 } },
        { txt: "Mantenho a calma. Sei que o tempo tem seu curso e que me estressar não vai fazer a fila andar.", w: { Heir: 3, Rogue: 1, Knight: -3 } },
        { txt: "Aceito o atraso sem lutar; uso a lentidão da fila como desculpa e não me estresso com o resultado.", w: { Bard: 3, Heir: 2, Knight: -3 } },
        { txt: "Calculo o tempo exato que ainda posso esperar antes de desistir, baseado na probabilidade de atraso.", w: { Seer: 3, Mage: 2, Page: 1, Witch: -1 } }
    ]},
    { t: "Se você pudesse mudar algo em um evento trágico do seu passado, como abordaria isso?", opts: [
        { txt: "Eu não mudaria nada. O trauma é uma lição necessária e o destino não deve ser alterado por caprichos.", w: { Seer: 2, Heir: 3, Witch: -3 } },
        { txt: "Deixaria como está; a desgraça serviu para quebrar quem eu era e me obrigou a seguir em frente.", w: { Bard: 3, Heir: 1, Knight: -2 } },
        { txt: "Eu destruiria a causa do evento sem hesitar. A liberdade de mudar é mais importante que o tempo.", w: { Prince: 3, Witch: 3, Knight: 2, Mage: -2 } },
        { txt: "Eu me prepararia melhor. Se soubesse o que aconteceria, teria trabalhado o dobro para proteger o que perdi.", w: { Knight: 3, Maid: 2, Page: 2, Bard: -2 } },
        { txt: "Eu tentaria tirar algo de bom da tragédia para ajudar outros, transformando a dor em recurso.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
    ]},
    { t: "Você encontra uma ferramenta ou objeto antigo e quebrado que pertenceu à sua família. O que você faz?", opts: [
        { txt: "Eu o conserto imediatamente; sinto a obrigação de restaurar a função do que o tempo tentou destruir.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -2 } },
        { txt: "Uso as peças dele para criar algo novo; o passado serve apenas como matéria-prima para o futuro.", w: { Witch: 3, Prince: 2, Mage: -2, Seer: -1 } },
        { txt: "Deixo o objeto onde está; se ele quebrou e envelheceu, não vejo sentido em tentar salvá-lo agora.", w: { Bard: 3, Mage: 1, Maid: -3 } },
        { txt: "Analiso o objeto para entender a história de quem o usou; é um registro que ensina sobre o fim.", w: { Seer: 3, Mage: 2, Thief: -2 } },
        { txt: "Dou o objeto para alguém que saiba apreciá-lo; não quero carregar o peso de algo que está morto.", w: { Rogue: 3, Heir: 2, Maid: -2, Knight: -2 } }
    ]},
    { t: "Alguém te pede um favor que vai ocupar todas as horas do seu único dia de descanso na semana.", opts: [
        { txt: "Digo não prontamente; o meu tempo livre é o limite que estabeleço para não ser consumido.", w: { Prince: 3, Knight: 2, Thief: 2, Sylph: -3 } },
        { txt: "Cedo o tempo por pressão, mas passo o dia sentindo que estou sendo drenado e perdendo minha vida.", w: { Rogue: 3, Page: 2, Maid: 1, Witch: -2 } },
        { txt: "Digo que vou ajudar, mas acabo me atrasando tanto que a pessoa desiste de me esperar.", w: { Bard: 3, Prince: 1, Maid: -3 } },
        { txt: "Ajudo da maneira mais rápida possível; uso meu conhecimento para terminar na metade do tempo previsto.", w: { Witch: 3, Maid: 2, Mage: 2, Knight: -1 } },
        { txt: "Aceito o favor como parte do dia; se o tempo deve ser gasto assim, eu me adapto e encontro satisfação.", w: { Heir: 3, Sylph: 2, Seer: 1, Prince: -3 } }
    ]},
    { t: "Você está assistindo a um filme ou lendo um livro e percebe que o final será triste e inevitável. Como você reage?", opts: [
        { txt: "Paro de ler imediatamente; recuso-me a gastar meu tempo com uma conclusão que já aceitei.", w: { Prince: 3, Witch: 2, Seer: -2, Mage: -2 } },
        { txt: "Vou até o fim, mesmo sofrendo; preciso entender como evitar algo assim na vida real.", w: { Mage: 3, Seer: 2, Knight: 1, Bard: -2 } },
        { txt: "Tento convencer outros a verem comigo; dividir a carga emocional torna o final menos pesado.", w: { Rogue: 3, Sylph: 2, Page: 1, Thief: -2 } },
        { txt: "Eu procuro spoilers; se o fim vai ser ruim, prefiro acabar logo com o suspense e não perder tempo.", w: { Bard: 3, Thief: 2, Knight: -3 } },
        { txt: "Fico obcecado com os detalhes técnicos da obra para me distanciar do caminho em direção à morte.", w: { Knight: 3, Maid: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Qual sua relação com a pontualidade alheia?", opts: [
        { txt: "Exijo precisão absoluta; o atraso dos outros é uma ofensa à ordem que tento manter.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -2 } },
        { txt: "Não me importo; o tempo é fluido e as pessoas chegam quando devem chegar.", w: { Heir: 2, Rogue: 2, Knight: -3 } },
        { txt: "Eu geralmente atraso, então não julgo; acho ótimo quando os outros atrasam também e tiram a pressão de mim.", w: { Bard: 3, Heir: 2, Maid: -3, Knight: -3 } },
        { txt: "Aproveito o atraso deles para roubar esse tempo para minhas próprias atividades.", w: { Thief: 3, Witch: 2, Prince: 1, Sylph: -2 } },
        { txt: "Fico analisando os motivos do atraso, tentando prever se isso se tornará um padrão.", w: { Seer: 3, Mage: 2, Maid: 1, Page: -1 } }
    ]}
    ],
    "Space": [
    { t: "Você divide o quarto com alguém extremamente desorganizado que está 'vazando' objetos para o seu lado da mesa.", opts: [
        { txt: "Eu limpo a bagunça dele sem perguntar. A desordem dele ofende minha necessidade de um ambiente perfeito.", w: { Maid: 3, Knight: 2, Prince: -2, Bard: -2 } },
        { txt: "Eu jogo tudo no lixo imediatamente. O acúmulo de tralhas é um desperdício e prefiro o vazio à desordem.", w: { Prince: 3, Bard: 2, Sylph: -3, Maid: -2 } },
        { txt: "Eu nem noto. Vou empurrando as coisas dele para o lado para caber o meu prato e sigo a vida no meio do caos.", w: { Bard: 3, Heir: 1, Mage: -1, Prince: -3 } },
        { txt: "Pego os objetos mais úteis dele e os incorporo ao meu lado. Se ele não cuida, eu cuidarei melhor.", w: { Thief: 3, Witch: 2, Rogue: -2, Page: -1 } },
        { txt: "Tento reorganizar as coisas dele de forma que ele aprenda a manter o espaço sozinho.", w: { Sylph: 3, Seer: 2, Prince: -3, Thief: -1 } }
    ]},
    { t: "Você está em uma festa onde não conhece ninguém e o ambiente parece vasto e impessoal.", opts: [
        { txt: "Fico num canto tentando entender a mecânica social do lugar, como se fosse um quebra-cabeça que não sei montar.", w: { Page: 3, Mage: 3, Seer: 2, Prince: -2 } },
        { txt: "Se o ambiente não me acolhe, vou embora sem me despedir ou me isolo em um canto, cortando minha conexão com o cenário.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -2 } },
        { txt: "Me sinto invisível, então tento colar em qualquer rodinha para ocupar espaço e me sentir parte do grupo.", w: { Thief: 3, Rogue: 2, Prince: -2, Seer: -1 } },
        { txt: "Eu fico lá existindo. Não tento interagir nem ir embora, só deixo o tempo passar enquanto encaro o teto, alheio ao lugar.", w: { Bard: 3, Heir: 2, Knight: -2, Maid: -2 } },
        { txt: "Vou circulando por aí sem rumo. Se eu achar algo legal, paro; se não, só deixo a música me levar.", w: { Heir: 3, Rogue: 1, Knight: -2, Maid: -1 } }
    ]},
    { t: "Um amigo próximo mudou-se para outro país. Como você lida com a distância física?", opts: [
        { txt: "Mantenho contato obsessivo. Preciso saber de cada detalhe do espaço novo dele para me sentir presente.", w: { Witch: 3, Knight: 2, Maid: 1, Prince: -3 } },
        { txt: "A distância matou a relação. Se não ocupamos o mesmo espaço, corto o vínculo para não carregar peso morto.", w: { Prince: 3, Thief: 1, Witch: -3, Sylph: -2 } },
        { txt: "Eu esqueço de mandar mensagem. A distância física acaba virando distância emocional naturalmente porque eu não corro atrás.", w: { Bard: 3, Heir: 2, Rogue: 1, Sylph: -2 } },
        { txt: "Sinto uma inveja silenciosa. Posto fotos de lugares interessantes onde estou para provar que meu espaço é relevante.", w: { Thief: 3, Page: 2, Rogue: -2, Heir: -1 } },
        { txt: "Entendo que o espaço entre nós mudou. Aceito a saudade e deixo a amizade encontrar seu novo volume.", w: { Seer: 2, Heir: 3, Thief: -2, Knight: -1 } }
    ]},
    { t: "Você decidiu começar um hobby novo, mas não tem as ferramentas certas ou um local adequado.", opts: [
        { txt: "Eu me viro com o que tenho. Improviso ferramentas; se eu me esforçar, encontro um jeito.", w: { Knight: 3, Maid: 3, Page: 1, Bard: -2 } },
        { txt: "Começo de qualquer jeito, sem medir nada. Se ficar torto ou quebrar no meio do processo, paciência.", w: { Bard: 3, Rogue: 1, Mage: -1, Seer: -2 } },
        { txt: "Passo semanas pesquisando o layout perfeito. Se o cenário não for ideal, a criação não flui.", w: { Mage: 3, Seer: 3, Heir: -1, Knight: -1 } },
        { txt: "Peço coisas emprestadas e 'esqueço' de devolver. Se não tenho, farei uso de quem tem.", w: { Thief: 3, Witch: 2, Sylph: -2, Maid: -1 } },
        { txt: "Desisto. Se o ambiente não colabora, eu elimino a ideia da minha cabeça e busco algo viável.", w: { Prince: 3, Heir: 1, Knight: -3, Maid: -2 } }
    ]},
    { t: "Alguém entra no seu quarto sem bater enquanto você está focado em algo importante.", opts: [
        { txt: "Expulso a pessoa imediatamente. Meu espaço de criação é sagrado e não tolero intrusões.", w: { Prince: 3, Knight: 2, Sylph: -3, Rogue: -2 } },
        { txt: "Escondo o que estou fazendo. Tenho pavor de que vejam meu processo criativo incompleto.", w: { Page: 3, Thief: 2, Maid: 1, Prince: -1 } },
        { txt: "Integro a pessoa ao que estou fazendo, aproveitando a interrupção para mudar o foco.", w: { Witch: 3, Sylph: 2, Heir: 2, Prince: -3 } },
        { txt: "Não faço nada. A pessoa entra, mexe nas coisas e eu continuo no meu mundo, ignorando totalmente a presença dela.", w: { Bard: 3, Mage: 1, Knight: -2 } },
        { txt: "Fico irritado em silêncio, analisando como aquela presença física estragou meu fluxo.", w: { Mage: 3, Seer: 2, Knight: -1, Witch: -1 } }
    ]},
    { t: "Você está em um elevador lotado e desconfortável. Como você se comporta?", opts: [
        { txt: "Tento ocupar o mínimo de espaço possível, quase me fundindo à parede.", w: { Rogue: 3, Page: 2, Sylph: 1, Prince: -2 } },
        { txt: "Analiso a mecânica do elevador ou a posição das pessoas para me distrair do desconforto.", w: { Seer: 3, Mage: 2, Heir: 1, Bard: -1 } },
        { txt: "Eu me distraio com qualquer coisa. Fico olhando pro nada, ignorando o aperto, fingindo que não estou ocupando espaço ali.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
        { txt: "Fico furioso com a falta de espaço e empurro se for preciso para garantir meu lugar.", w: { Prince: 3, Thief: 2, Witch: 1, Rogue: -2 } },
        { txt: "Puxo uma conversa trivial para aliviar a tensão e expandir o conforto do ambiente.", w: { Sylph: 3, Heir: 2, Prince: -3, Mage: -1 } }
    ]},
    { t: "Ao se mudar, você encontra objetos de um ex-parceiro ou de uma amizade que acabou mal.", opts: [
        { txt: "Destruo tudo. Não me faz bem guardar as lembranças do que não existe mais.", w: { Prince: 3, Witch: 2, Thief: -3, Knight: -2 } },
        { txt: "Guardo tudo em uma caixa no fundo. Tenho medo de perder partes da minha história.", w: { Thief: 3, Knight: 2, Page: 1, Prince: -3 } },
        { txt: "Dou os objetos para quem precisa. Transformo a tralha em algo útil para outra pessoa.", w: { Rogue: 3, Maid: 2, Sylph: 1, Thief: -3 } },
        { txt: "Deixo tudo num canto pegando pó. Não jogo fora nem uso, os objetos ficam lá existindo até sumirem da minha vista.", w: { Bard: 3, Heir: 1, Mage: 1, Prince: -2 } },
        { txt: "Olho para os objetos e reflito sobre o vazio que deixaram e como ele foi preenchido.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -2 } }
    ]},
    { t: "Você está esperando um resultado que depende de processos burocráticos lentos.", opts: [
        { txt: "Me ocupo pensando em novos projetos. A inércia física me desespera.", w: { Maid: 3, Knight: 2, Page: 1, Bard: -2 } },
        { txt: "Tento usar contatos ou atalhos. Não aceito que as limitações físicas do sistema me parem.", w: { Witch: 3, Thief: 3, Seer: -2, Mage: -1 } },
        { txt: "Esqueço que o processo existe. Se sair o resultado, saiu. Se não sair, eu nem vou lembrar de cobrar.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
        { txt: "Aceito a lentidão. Entendo que as coisas têm seu próprio tempo para se materializar.", w: { Heir: 3, Sylph: 1, Seer: 1, Prince: -3 } },
        { txt: "Fico ansioso. Começo a pesquisar para tentar entender os processoas da burocracia para me preparar.", w: { Mage: 3, Seer: 3, Prince: -1, Knight: -1 } }
    ]},
    { t: "Você encara um 'bloqueio criativo': a tela branca ou o espaço vazio que precisa preencher. Qual sua reação?", opts: [
        { txt: "Destruo o que comecei ou mudo o ambiente radicalmente. Não vale a pena me frustrar se não consigo trabalhar no que já foi (ou será) feito.", w: { Prince: 3, Witch: 2, Heir: -2 } },
        { txt: "O vazio confirma meu medo de que não tenho nada de original para oferecer. Copio tendências para dar vida a minha criação.", w: { Thief: 2, Rogue: 1, Page: 1 } },
        { txt: "Fico rabiscando qualquer bobagem ou deixo a tela em branco por dias, sem me estressar com a falta de produção.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Enquanto não consigo trabalhar em nada, estudo processos artísticos. Prefiro me preparar antes de tudo.", w: { Mage: 2, Seer: 2, Heir: 1 } },
        { txt: "Começo a preencher o espaço com pequenos detalhes, cuidando do ambiente até a ideia surgir. Só não quero deixar a tela em branco.", w: { Sylph: 2, Maid: 1, Knight: 1 } }
    ]},
    { t: "Você está sozinho em um quarto em silêncio absoluto. Como essa ausência de estímulo te afeta?", opts: [
        { txt: "A inércia me desespera. Começo a arrumar coisas; preciso sentir que estou modificando o ambiente.", w: { Prince: 1, Knight: 2, Maid: 1 } },
        { txt: "Sinto um vazio ruim. Preciso ver coisas, comer ou consumir conteúdo para não enlouquecer com esse silêncio.", w: { Thief: 2, Rogue: 2, Page: 1 } },
        { txt: "Sinto-me livre. Sem a pressão física de outras pessoas, minha mente expande.", w: { Heir: 2, Seer: 1, Mage: 1 } },
        { txt: "Uso o isolamento para treinar e melhorar minhas habilidades sem ninguém olhando.", w: { Page: 2, Knight: 1 } },
        { txt: "Fico deitado olhando pro teto. A falta de estímulo me faz desligar e eu só fico lá, vegetando em paz.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } }
    ]}
    ],
    "Rage": [
    { t: "Você descobre que uma regra importante da instituição beneficia apenas os veteranos.", opts: [
        { txt: "Acredito que deve haver um motivo e que a realidade é manipulável.", w: { Prince: 3, Sylph: 1, Heir: -3, Knight: -2 } },
        { txt: "Exponho a falha publicamente, destruindo a credibilidade da regra sem piedade.", w: { Heir: 3, Mage: 3, Witch: 2, Bard: -3 } },
        { txt: "Faço piada da situação. Se a regra é injusta e estúpida, o mínimo que posso fazer é ridicularizar quem a segue.", w: { Bard: 3, Thief: 1, Page: -1, Seer: -2 } },
        { txt: "Procuro entender quem se beneficia e como posso usar essa brecha para meu ganho.", w: { Thief: 3, Maid: 2, Seer: 2, Page: -1 } },
        { txt: "Tento alertar os prejudicados, servindo de suporte contra a injustiça.", w: { Rogue: 3, Sylph: 3, Page: 2, Knight: 1 } }
    ]},
    { t: "Um projeto que você valoriza é cancelado por um erro bobo de outra pessoa.", opts: [
        { txt: "Decido que o projeto não era importante. Mato meu interesse na hora para não sentir raiva.", w: { Prince: 3, Maid: -2, Page: -2, Heir: -1 } },
        { txt: "Contorno a proibição e continuo fazendo o que quero, subvertendo a autoridade.", w: { Thief: 3, Witch: 3, Heir: 2, Seer: -2 } },
        { txt: "Assumo a culpa e trabalho o dobro para salvar o que sobrou.", w: { Page: 3, Knight: 3, Maid: 2, Prince: -3 } },
        { txt: "Eu rio do desastre. Tanto esforço para nada? É tão absurdo que chega a ser engraçado. Deixo morrer.", w: { Bard: 3, Heir: 1, Mage: 1, Knight: -3 } },
        { txt: "Observo a frustração e espero para ver se a verdade aparece sozinha.", w: { Seer: 3, Heir: 2, Mage: 2, Rogue: 1, Witch: -2 } }
    ]},
    { t: "Você está em um evento social onde todos fingem estar felizes e bem-sucedidos, mas você percebe claramente as tensões e mentiras por trás das conversas. Como você se porta?", opts: [
        { txt: "Entro no personagem e sou o mais agradável possível; a harmonia é mais importante do que os meus sentimentos.", w: { Prince: 3, Knight: -3, Mage: -2 } },
        { txt: "Sinto um incômodo físico com a falsidade e fico num canto, catalogando cada hipocrisia.", w: { Seer: 3, Mage: 2, Heir: 1, Prince: -2 } },
        { txt: "Fico lá existindo, meio aéreo. A falsidade deles é problema deles, eu só deixo o clima ficar estranho sem me esforçar.", w: { Bard: 3, Rogue: 1, Maid: -2 } },
        { txt: "Tento puxar conversas reais, cutucando as feridas de forma sutil para ver quem é autêntico.", w: { Witch: 2, Thief: 3, Sylph: 1, Maid: -2 } },
        { txt: "Visto uma máscara de competência e tento ser o pilar de estabilidade para quem está sofrendo.", w: { Knight: 3, Page: 2, Rogue: 2, Maid: 1, Bard: -2 } }
    ]},
    { t: "Você descobre que uma meta que perseguiu por anos é impossível de alcançar devido a uma limitação sua ou do sistema que você não pode mudar. Qual sua reação?", opts: [
        { txt: "Decido imediatamente que a meta era estúpida. Destruo o desejo que eu tinha para me libertar da frustração.", w: { Prince: 3, Mage: -3, Page: -2 } },
        { txt: "Aceito o limite e estudo os contornos dessa 'parede' para entender o que é real.", w: { Mage: 3, Seer: 2, Heir: 1, Witch: -2 } },
        { txt: "Me recuso a aceitar. Vou trabalhar de forma punitiva até que eu quebre a regra ou a regra me quebre.", w: { Page: 3, Knight: 2, Maid: 3, Prince: -3 } },
        { txt: "Desisto e vou fazer outra coisa. Se o universo não quer, eu não vou brigar; o fracasso faz parte.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
        { txt: "Tento encontrar outras pessoas que falharam para compartilharmos a frustração.", w: { Rogue: 3, Sylph: 2, Thief: -2, Witch: -1 } }
    ]},
    { t: "Em um grupo, alguém insiste em uma ideia que você sabe que é falsa.", opts: [
        { txt: "Se a pessoa está feliz acreditando nisso, não vejo por que destruir a ilusão.", w: { Prince: 3, Sylph: 1, Heir: -3, Knight: -2 } },
        { txt: "Eu concordo com a mentira só pela zoeira. Quero ver até onde essa alucinação vai chegar antes de desmoronar.", w: { Bard: 3, Thief: 1, Witch: 1, Seer: -2 } },
        { txt: "Falo a verdade nua e crua, destruindo o argumento falso na frente de todos.", w: { Heir: 3, Mage: 3, Seer: 2, Sylph: 1, Thief: 2 } },
        { txt: "Protejo os outros da ideia ruim, servindo como uma âncora de realidade.", w: { Knight: 3, Maid: 2, Sylph: 2, Rogue: 2, Page: 1 } },
        { txt: "Explico a situação para quem está confuso, tentando curar a desinformação.", w: { Rogue: 3, Sylph: 3, Page: 2, Heir: 1 } }
    ]},
    { t: "Você percebe que está sendo passado para trás em uma conversa importante.", opts: [
        { txt: "Interrompo e mostro que sei o que estão fazendo, forçando a verdade a aparecer.", w: { Witch: 3, Prince: 3, Thief: 2, Heir: -3 } },
        { txt: "Mantenho a harmonia e finjo que não percebi. Quero ver até onde vai.", w: { Prince: 2, Knight: -2, Heir: -3, Sylph: 1 } },
        { txt: "Nem ligo. Se precisam mentir pra mim, são patéticos. Deixo que se enrolem sozinhos.", w: { Bard: 3, Rogue: 1, Mage: 1 } },
        { txt: "Fico indignado e crio uma barreira rígida para que nunca mais me enganem.", w: { Knight: 3, Page: 3, Maid: 2, Mage: 1 } },
        { txt: "Estudo o comportamento da pessoa para entender a lógica por trás da desonestidade.", w: { Mage: 3, Seer: 3, Rogue: 2, Sylph: 1 } }
    ]},
    { t: "Como você se sente quando percebe que o mundo é injusto?", opts: [
        { txt: "Isso prova que levar a vida a sério é bobagem. Rio do absurdo e deixo as coisas fluírem.", w: { Bard: 3, Heir: 2, Maid: -3, Knight: -2 } },
        { txt: "Ignoro as notícias ruins. Destruo qualquer coisa que ameace minha paz mental.", w: { Prince: 3, Seer: -3, Mage: -2 } },
        { txt: "Foco em ser impecável nas minhas obrigações. Minha disciplina é minha resposta ao caos.", w: { Maid: 3, Knight: 3, Page: 2, Bard: -3, Sylph: 1} },
        { txt: "Procuro grupos que compartilham da minha indignação para nos apoiarmos.", w: { Rogue: 3, Sylph: 2, Witch: 2, Heir: 2 } },
        { txt: "Aceito que o jogo é viciado, mas tento trapacear de volta sempre que posso.", w: { Thief: 3, Witch: 2, Page: -1, Seer: -1 } }
    ]},
    { t: "Você descobre que a pessoa que você mais admirava é, na verdade, uma farsa completa e tudo o que ela pregava era mentira.", opts: [
        { txt: "Recuso-me a acreditar. Mantenho minha fé na imagem dele apesar da realidade.", w: { Prince: 3, Sylph: 1, Page: 2, Heir: -3, Seer: -3 } },
        { txt: "Não me surpreendo. Todo mundo é meio podre mesmo. Continuo acompanhando pelo entretenimento do desastre.", w: { Bard: 3, Mage: 1, Page: -1 } },
        { txt: "Deixo de respeitar na hora. Apago qualquer rastro de admiração; ele morreu para mim.", w: { Heir: 3, Seer: 2, Knight: 2, Thief: 2 } },
        { txt: "Uso o erro como exemplo para educar os outros e evitar que caiam na mesma cilada.", w: { Witch: 3, Sylph: 3, Rogue: 2, Maid: 2 } },
        { txt: "Fico remoendo a decepção e passo a ser muito mais cético com tudo.", w: { Mage: 3, Page: 3, Heir: 1, Bard: -2 } }
    ]},
    { t: "Em um ambiente onde todos discutem de forma irracional, qual sua atitude?", opts: [
        { txt: "Faço uma piada para desviar a atenção e restaurar o clima leve.", w: { Sylph: 1, Heir: 2, Prince: -2, Rogue: 2 } },
        { txt: "Solto uma frase seca que resume o ridículo, calando a todos com a verdade bruta.", w: { Prince: 3, Seer: 3, Mage: 2, Sylph: 2, Witch: 2 } },
        { txt: "Jogo lenha na fogueira. Faço um comentário aleatório só para ver a confusão aumentar.", w: { Bard: 3, Thief: 2, Witch: 1, Knight: -2 } },
        { txt: "Aproveito que ninguém presta atenção para 'roubar' meu tempo e resolver minhas coisas.", w: { Thief: 3, Witch: 2, Page: 2, Rogue: 1 } },
        { txt: "Mantenho o controle e espero o caos passar, julgando a falta de compostura alheia.", w: { Knight: 3, Maid: 3, Page: 2, Heir: 2, Mage: 1 } }
    ]},
    { t: "Você precisa escolher entre ser honesto e perder uma chance, ou mentir e conseguir o que quer.", opts: [
        { txt: "Falo a verdade doa a quem doer. A verdade é o único caminho real.", w: { Mage: 3, Seer: 3, Heir: 3, Thief: -3 } },
        { txt: "Minto se isso mantiver a minha paz; a verdade bruta às vezes é destrutiva demais.", w: { Prince: 2, Heir: 2, Maid: -2 } },
        { txt: "Falo o que for mais conveniente ou engraçado na hora. A verdade é relativa e eu não devo nada a ninguém.", w: { Bard: 3, Thief: 2, Witch: 1, Knight: -3 } },
        { txt: "Sou honesto de forma agressiva, punindo quem me forçou a escolher.", w: { Knight: 3, Page: 3, Maid: 2, Thief: 2 } },
        { txt: "Minto se isso for ajudar mais pessoas, escondendo a verdade por um bem maior.", w: { Sylph: 3, Rogue: 3, Witch: 3, Prince: -2 } }
    ]}
    ],
    "Light": [
    { t: "Você faz parte de uma equipe que realizou um feito notável, mas apenas uma pessoa será o rosto público desse sucesso. Como você se posiciona?", opts: [
        { txt: "Certifico-me de que minha contribuição seja a mais visível; se o resultado é excelente, é justo que eu detenha o controle da narrativa.", w: { Thief: 3, Witch: 2, Maid: 2, Prince: -3 } },
        { txt: "Prefiro apagar minha participação e ficar fora dos holofotes; a atenção pública é um ruído invasivo que prefiro evitar.", w: { Prince: 3, Page: -2, Thief: -3 } },
        { txt: "Faço questão de destacar o esforço de quem menos apareceu, garantindo que o reconhecimento seja dividido.", w: { Rogue: 3, Sylph: 2, Thief: -3, Maid: -1 } },
        { txt: "Eu nem ligo se sabem que fui eu. Se esquecerem meu nome na hora dos créditos, paciência. A fama dá muito trabalho.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
        { txt: "Não forço nada. Se as pessoas notarem meu valor, ótimo; se não, sei que eventualmente minha contribuição será reconhecida.", w: { Heir: 3, Seer: 2, Knight: -2, Witch: -1 } }
    ]},
    { t: "Você descobre uma verdade comprometedora sobre alguém influente que pode alterar o rumo de uma situação. O que faz com isso?", opts: [
        { txt: "Analiso cada detalhe dessa informação e como ela se conecta ao todo, sentindo o peso de carregar uma verdade que os outros ignoram.", w: { Mage: 3, Seer: 2, Prince: -1 } },
        { txt: "Eu deixo a informação vazar 'sem querer' ou esqueço de guardar segredo. Se a verdade sair e causar o caos, aconteceu.", w: { Bard: 3, Witch: 2, Rogue: 1, Sylph: -2 } },
        { txt: "Guardo esse conhecimento como uma armadura ou ferramenta estratégica, pronto para usá-lo para proteger minha posição.", w: { Knight: 3, Thief: 2, Sylph: -2, Rogue: -2 } },
        { txt: "Finjo que nunca vi nada e destruo as evidências. Algumas verdades são inúteis e só servem para complicar o que já funciona.", w: { Prince: 3, Seer: -3, Mage: -2 } },
        { txt: "Compartilho a informação com as pessoas afetadas para restaurar a clareza e garantir que ninguém seja enganado.", w: { Sylph: 3, Rogue: 2, Thief: -3, Prince: -1 } }
    ]},
    { t: "Em uma crise onde o sucesso depende puramente de um fator que você não controla (como sorte ou uma decisão externa), qual sua postura?", opts: [
        { txt: "Confio que a sorte estará ao meu lado. Sinto que as probabilidades costumam conspirar a meu favor.", w: { Heir: 3, Knight: -3, Mage: -2 } },
        { txt: "Eu jogo a moeda e vejo no que dá. Se der errado, deu. Não tento controlar o incontrolável, só assisto o resultado.", w: { Bard: 3, Rogue: 1, Page: 1, Seer: -2 } },
        { txt: "Tento encontrar brechas ou influenciar quem decide para garantir que as chances pendam para o meu lado.", w: { Witch: 3, Thief: 2, Heir: -2, Seer: -2 } },
        { txt: "Ignoro a ideia de sorte e trabalho exaustivamente nos bastidores para compensar qualquer imprevisto.", w: { Knight: 3, Maid: 2, Page: 2, Heir: -3 } },
        { txt: "Me preocupo em calcular cada variável e sinal possível, tentando prever o desfecho para não ser pego desprevenido.", w: { Seer: 3, Mage: 3, Heir: -2, Bard: -1 } }
    ]},
    { t: "Um erro pessoal seu é exposto publicamente e você se torna o centro das atenções e julgamentos. Como reage?", opts: [
        { txt: "Decido que a opinião alheia é irrelevante. Trato a exposição como algo sem valor e sigo em frente.", w: { Prince: 3, Knight: -3, Page: -2 } },
        { txt: "Assumo a falha e começo a trabalhar de forma punitiva para corrigir os fatos e restaurar minha reputação.", w: { Maid: 3, Sylph: 2, Prince: -2 } },
        { txt: "Eu levo na esportiva. Se minha reputação foi pro lixo, pelo menos a história foi engraçada. Não vou me matar pra limpar meu nome.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -3 } },
        { txt: "Uso a vergonha da exposição como combustível para estudar onde errei e garantir que nunca mais aconteça.", w: { Page: 3, Knight: 2, Heir: -2, Bard: -1 } },
        { txt: "Tento desviar o foco do meu erro para outro assunto que seja mais relevante no momento.", w: { Thief: 3, Rogue: 2, Mage: -2, Seer: -1 } }
    ]},
    { t: "Você percebe que um projeto ao qual se dedicou muito está perdendo a relevância e o interesse das outras pessoas. O que faz?", opts: [
        { txt: "Exagero a importância do projeto ou crio um fato novo para que ele volte a ser o centro das atenções à força.", w: { Thief: 3, Witch: 2, Prince: -3, Rogue: -2 } },
        { txt: "Deixo que ele morra. Prefiro que caia no esquecimento do que vê-lo definhar sem propósito sob a luz alheia.", w: { Prince: 3, Maid: -3, Sylph: -2 } },
        { txt: "Reformulo o projeto com novas informações e clareza, tentando torná-lo útil novamente para o grupo.", w: { Sylph: 3, Maid: 3, Prince: -2, Bard: -1 } },
        { txt: "Eu perco o interesse e vou fazer outra coisa. Se o projeto morrer por falta de atenção minha, é porque já não brilhava mais.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Aceito que a relevância é cíclica. Observo o que as pessoas estão valorizando agora e deixo que meu interesse mude.", w: { Heir: 3, Seer: 3, Thief: -2, Witch: -1 } }
    ]},
    { t: "Como você lida com a necessidade de ser 'visto' ou validado pelos outros no seu cotidiano?", opts: [
        { txt: "Sinto que preciso provar meu valor constantemente; se eu não estiver sendo notado, perco minha relevância.", w: { Knight: 3, Page: 3, Maid: 2, Prince: -3 } },
        { txt: "Sinto-me agredido pela atenção constante. Prefiro o anonimato e a escuridão.", w: { Prince: 3, Thief: -3, Page: -2 } },
        { txt: "Não ligo se me veem ou não. Às vezes sou o centro das atenções, às vezes sou invisível. Deixo acontecer sem forçar.", w: { Bard: 3, Heir: 2, Rogue: 1, Mage: 1 } },
        { txt: "Prefiro que meu mérito seja redirecionado para o que eu produzo ou para o grupo; detesto ser o foco central.", w: { Rogue: 3, Sylph: 2, Thief: -2, Knight: -1 } },
        { txt: "Uso minha imagem e visibilidade apenas como uma ferramenta pontual para conseguir o que quero.", w: { Witch: 3, Thief: 3, Page: -2, Knight: -2 } }
    ]},
    { t: "Ao se deparar com várias versões conflitantes de uma mesma história, como você decide em qual acreditar?", opts: [
        { txt: "Busco a versão factual e lógica. A verdade não deve ser moldada pela conveniência.", w: { Seer: 3, Mage: 3, Witch: -3, Thief: -2 } },
        { txt: "Escolho a versão que melhor serve aos meus objetivos ou que cria a narrativa mais útil.", w: { Witch: 3, Thief: 2, Seer: -3, Mage: -2 } },
        { txt: "Eu não acredito em nenhuma. Deixo as pessoas brigarem pela 'verdade' enquanto eu assisto de longe, achando graça da confusão.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "Acredito que não existe uma verdade absoluta; deixo que cada versão flua e o tempo revele qual terá mais peso.", w: { Heir: 3, Knight: -3, Maid: -2 } },
        { txt: "Adoto a versão que exige mais responsabilidade e ação da minha parte, usando-a como um mapa.", w: { Knight: 3, Page: 2, Bard: -2, Heir: -1 } }
    ]},
     { t: "Ao observar um evento trágico ou aleatório no mundo, qual é o seu primeiro impulso mental?", opts: [
        { txt: "Procuro imediatamente uma lição ou um propósito. Recuso-me a aceitar que as coisas aconteçam sem razão.", w: { Sylph: 3, Maid: 2, Seer: 2, Prince: -3 } },
        { txt: "Fico obcecado em entender a cadeia de eventos, catalogando cada erro para que a ignorância não se repita.", w: { Mage: 3, Page: 2, Knight: 2, Heir: -2 } },
        { txt: "Aceito que o mundo é um lugar de ruído e que tentar encontrar 'sentido' em tudo é perda de tempo.", w: { Prince: 3, Maid: -3, Sylph: -2 } },
        { txt: "Não penso muito sobre isso. Coisas ruins acontecem, o mundo é aleatório. Sigo minha vida sem tentar decifrar o caos.", w: { Bard: 3, Heir: 2, Rogue: 1, Seer: -2 } },
        { txt: "Tento usar o impacto do evento para chamar atenção para causas que considero importantes.", w: { Thief: 3, Witch: 2, Rogue: -2, Seer: -1 } }
    ]},
    { t: "Você está em uma discussão acalorada onde sabe, com 100% de certeza, que a outra pessoa está errada sobre um fato técnico ou histórico. Como você age?", opts: [
        { txt: "Interrompo e apresento as provas. Não suporto ver a desinformação prosperar quando a verdade está disponível.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -3 } },
        { txt: "Deixo que ela continue falando o que quiser. A ignorância alheia é irrelevante para mim.", w: { Prince: 3, Mage: -2, Seer: -2 } },
        { txt: "Eu deixo a pessoa falar besteira. É divertido ver alguém tão confiante no erro, e não vou gastar minha energia corrigindo.", w: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
        { txt: "Uso o erro dela como vantagem estratégica, deixando que ela se exponha até eu usar a verdade para desarmá-la.", w: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
        { txt: "Tento corrigir a pessoa de forma sutil, compartilhando o conhecimento como se fosse algo que estamos descobrindo juntos.", w: { Rogue: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "Em uma situação tensa, você percebe que a transparência total está causando conflitos. Qual sua atitude?", opts: [
        { txt: "Defendo que a clareza é a única cura. Tudo deve ser exposto para resolver o problema pela raiz.", w: { Sylph: 3, Seer: 2, Prince: -3, Bard: -2 } },
        { txt: "Acredito que o segredo é uma forma de proteção; algumas coisas devem permanecer no escuro.", w: { Prince: 3, Sylph: -3, Seer: -2 } },
        { txt: "Eu solto a verdade e saio de perto. Se a clareza vai causar briga, que cause. O circo pegando fogo é mais interessante.", w: { Bard: 3, Thief: 2, Witch: 1, Seer: -1 } },
        { txt: "Organizo as informações de forma pragmática, revelando apenas o necessário para manter a ordem.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
        { txt: "Compartilho a verdade de forma diluída, tentando fazer com que o peso da informação seja dividido.", w: { Rogue: 3, Heir: 2, Thief: -2, Witch: -1 } }
        ]}
    ],
    "Void": [
    { t: "Você descobre um segredo íntimo de um conhecido que mudaria a percepção de todos sobre ele, mas ninguém mais sabe disso.", opts: [
        { txt: "Eu revelo a verdade imediatamente. Odeio segredos; eles são buracos na realidade que precisam ser preenchidos com fatos.", w: { Prince: 3, Seer: 2, Light: 1 } },
        { txt: "Guardo essa informação como um trunfo pessoal, sentindo que o conhecimento oculto me dá uma vantagem.", w: { Thief: 3, Witch: 2, Mage: 1 } },
        { txt: "Acabo soltando o segredo sem querer em uma conversa aleatória. Não sou bom em guardar coisas que não me importam muito.", w: { Bard: 3, Rogue: 1, Page: 1, Seer: -2 } },
        { txt: "Protejo essa informação com o máximo de discrição. Se o segredo existe, é porque deve permanecer no escuro.", w: { Maid: 3, Knight: 2, Page: 2 } },
        { txt: "Observo como esse 'não-dito' influencia as interações, deixando que o mistério siga seu curso natural.", w: { Mage: 3, Heir: 1, Bard: 1 } }
    ]},
    { t: "Em um ambiente social, você percebe que suas contribuições são ignoradas e você se sente um 'zero à esquerda'.", opts: [
        { txt: "Eu prefiro assim. Fico no meu canto, invisível, fazendo minhas coisas sem ninguém para me encher a paciência.", w: { Bard: 3, Heir: 2, Rogue: 2, Prince: -3 } },
        { txt: "Aceito o anonimato. Há uma liberdade imensa em não ser notado, permitindo que eu aja sem o peso da expectativa.", w: { Heir: 3, Rogue: 2, Mage: 1 } },
        { txt: "Isso me fere, então passo a agir com uma competência performática, tentando provar meu valor.", w: { Page: 3, Knight: 2, Maid: 1 } },
        { txt: "Eu forço minha presença. Não aceito ser ignorado; faço barulho ou causo uma cena para que minha relevância seja notada.", w: { Prince: 3, Thief: 2, Witch: 1, Heir: -3 } },
        { txt: "Procuro outros que também estão sendo excluídos e tento criar um espaço onde nossa 'invisibilidade' não seja um desconforto.", w: { Rogue: 3, Sylph: 3, Page: 1 } }
    ]},
    { t: "Você recebe uma tarefa importante, mas não lhe dão instruções ou qualquer pista de como começar.", opts: [
        { txt: "Começo do zero absoluto. Se não há nada construído, eu crio minhas próprias regras e preencho esse vazio.", w: { Maid: 3, Witch: 3, Page: 1 } },
        { txt: "Analiso o que 'não foi dito'. O silêncio nas instruções me revela mais sobre as intenções reais do que as palavras.", w: { Seer: 3, Mage: 3, Knight: 1 } },
        { txt: "Recuso-me a trabalhar no escuro. Exijo clareza total imediatamente; não movo um dedo sem saber exatamente o que é.", w: { Prince: 3, Thief: 2, Knight: 1 } },
        { txt: "Faço de qualquer jeito ou nem faço. Se não explicaram direito, o problema é deles quando o resultado vier em branco.", w: { Bard: 3, Heir: 1, Rogue: 1, Prince: -2 } },
        { txt: "Divido a incerteza com o grupo, buscando uma solução que não dependa de ordens claras para avançar.", w: { Rogue: 2, Heir: 2, Sylph: 3 } }
    ]},
    { t: "Um boato vago e confuso sobre você começa a circular, mas ninguém consegue confirmar se é verdade ou mentira.", opts: [
        { txt: "Uso o mistério a meu favor. Mantenho uma postura enigmática que confunde ainda mais as pessoas.", w: { Knight: 3, Page: 2, Heir: 1 } },
        { txt: "Manipulo a narrativa silenciosamente, inserindo novas dúvidas até que o boato original perca todo o sentido.", w: { Witch: 3, Thief: 3, Mage: 1 } },
        { txt: "Ignoro e foco em ajudar as pessoas afetadas pela confusão, agindo como um porto seguro de silêncio.", w: { Sylph: 3, Maid: 2, Rogue: 2 } },
        { txt: "Exponho a origem do boato e os fatos crus. Detesto que buracos na verdade sejam usados para me definir.", w: { Prince: 3, Mage: 2, Seer: 1 } },
        { txt: "Nem confirmo nem nego. Deixo o povo falar. Acho engraçado ver as teorias absurdas que criam sobre mim.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } }
    ]},
    { t: "Você conhece alguém fascinante, mas a pessoa é um mistério completo: nunca fala de si ou de suas intenções.", opts: [
        { txt: "A incerteza me atrai. Sinto que posso aprender muito sobre o mundo apenas observando o que essa pessoa esconde.", w: { Mage: 3, Seer: 3 } },
        { txt: "Tento 'quebrar' esse mistério. Faço perguntas diretas e invasivas; odeio não saber com quem estou lidando.", w: { Thief: 3, Witch: 2, Prince: 3 } },
        { txt: "Respeito o vazio. Não sinto necessidade de cavar a vida de ninguém; aceito o que a pessoa apresenta no agora.", w: { Heir: 3, Rogue: 3, Sylph: 1 } },
        { txt: "Não ligo. Se a pessoa não fala nada, a gente fica em silêncio. É menos esforço pra mim do que tentar decifrar enigma.", w: { Bard: 3, Knight: -1, Seer: -2 } },
        { txt: "Sinto desconfiança. Se não há transparência, não há base para uma relação; tento forçar uma clareza ou me afasto.", w: { Prince: 2, Knight: 2, Page: 1 } }
    ]},
    { t: "Algo essencial para o grupo desapareceu e ninguém sabe onde está ou como recuperar.", opts: [
        { txt: "Trabalho dobrado para suprir a falta do que foi perdido, garantindo que o grupo não desmorone.", w: { Maid: 3, Sylph: 3, Knight: 1 } },
        { txt: "Encorajo o grupo a desapegar. Talvez a perda seja uma oportunidade para abandonarmos o que era obsoleto.", w: { Rogue: 3, Heir: 2, Prince: 1 } },
        { txt: "Rastreio o 'nada'. Entendo que a ausência do objeto deixa pistas e uso essa falta de informação para encontrá-lo.", w: { Seer: 3, Mage: 3, Witch: 1 } },
        { txt: "Eu nem tinha percebido que sumiu. E se sumiu, deve aparecer uma hora dessas. Não me estresso procurando.", w: { Bard: 3, Heir: 2, Knight: -2, Seer: -2 } },
        { txt: "Tento criar algo novo do nada para substituir a perda, agindo para que o vácuo não nos consuma.", w: { Page: 3, Witch: 2, Maid: 1 } }
    ]},
    { t: "Você realiza um trabalho hercúleo nos bastidores, mas outra pessoa recebe todo o crédito público.", opts: [
        { txt: "Tanto faz. Se o crédito for para outro, a responsabilidade de manter o sucesso também é dele. Eu fico livre.", w: { Bard: 3, Rogue: 2, Heir: 2, Prince: -2 } },
        { txt: "Não me importo. O fato de o trabalho ter sido feito no anonimato me agrada; a relevância é um fardo.", w: { Rogue: 3, Heir: 2, Page: 1 } },
        { txt: "Isso é inaceitável. Exponho minha participação e exijo reconhecimento; não serei um figurante na minha própria obra.", w: { Prince: 3, Thief: 2, Witch: 1 } },
        { txt: "Mantenho o silêncio. Minha segurança vem da competência interna, e o anonimato me protege de interferências.", w: { Knight: 3, Maid: 3, Page: 1 } },
        { txt: "Uso meu anonimato para continuar ajudando de forma desinteressada, onde ninguém pode me vigiar.", w: { Sylph: 3, Seer: 2, Mage: 1 } }
    ]},
    { t: "Você está diante de uma decisão onde todos os caminhos levam ao desconhecido, sem garantias de segurança.", opts: [
        { txt: "Confio no fluxo do incerto. Sinto que o caminho correto se revelará enquanto eu caminho pela escuridão.", w: { Seer: 3, Heir: 3, Mage: 1 } },
        { txt: "Tento eliminar todas as variáveis desconhecidas antes de agir. Detesto operar sem o controle da informação.", w: { Prince: 3, Knight: 2, Mage: 1 } },
        { txt: "Escolho qualquer um sem pensar muito. Se é tudo desconhecido mesmo, planejar é perda de tempo.", w: { Bard: 3, Rogue: 1, Page: 1 } },
        { txt: "Escolho o caminho mais vazio. Vou moldar a realidade conforme ela surgir, criando algo onde hoje não existe nada.", w: { Witch: 3, Page: 4, Maid: 2 } },
        { txt: "Aceito a incerteza. O melhor plano é não ter plano e deixar que o vácuo nos leve a lugares novos.", w: { Heir: 3, Mage: 2, Rogue: 2 } }
    ]},
    { t: "Você encontra um objeto quebrado que todos consideram lixo, sem utilidade ou relevância.", opts: [
        { txt: "Eu o descarto. Se algo não tem utilidade clara, é apenas ruído que deve ser eliminado do meu espaço.", w: { Prince: 3, Thief: 2, Knight: 1 } },
        { txt: "Eu perco ele de novo. Provavelmente vou esquecer onde coloquei cinco minutos depois de pegar.", w: { Bard: 3, Heir: 1, Seer: -2 } },
        { txt: "Eu o guardo. Sinto uma conexão com o que foi esquecido e encontro conforto em possuir o que ninguém valoriza.", w: { Knight: 3, Page: 3, Rogue: 2 } },
        { txt: "Tento consertá-lo ou dar uma função nova. Recuso-me a aceitar que algo possa ser simplesmente inútil.", w: { Maid: 3, Witch: 3, Sylph: 2 } },
        { txt: "Deixo-o onde está. O ciclo de obsolescência é natural; não há necessidade de intervir no que volta ao nada.", w: { Heir: 3, Seer: 1, Mage: 1 } }
    ]},
    { t: "Você sente que não possui uma personalidade fixa, agindo apenas como um reflexo do que esperam de você.",  opts: [
        { txt: "Isso me desespera. Me esforço para construir uma identidade marcante para que ninguém duvide da minha existência.", w: { Prince: 3, Knight: 2, Page: 2 } },
        { txt: "Sinto-me em paz. Se sou 'nada' por dentro, posso ser 'qualquer coisa' por fora, sem ser aprisionado por rótulos.", w: { Heir: 3, Rogue: 2, Sylph: 1 } },
        { txt: "Uso essa fluidez como ferramenta. Mudo quem eu sou conforme a necessidade para obter o que desejo.", w: { Witch: 3, Thief: 3, Mage: 2 } },
        { txt: "Eu só deixo rolar. É mais fácil concordar com o que acham que eu sou do que tentar explicar algo que nem eu sei.", w: { Bard: 3, Heir: 2, Page: 1 } },
        { txt: "Observo esse vazio. Entender que o 'eu' é uma ilusão me permite ver as verdades atrás das máscaras alheias.", w: { Seer: 3, Mage: 3, Sylph: 2 } }
    ]}
    ],
    "Mind": [
    { t: "Em um projeto de grupo, a decisão coletiva é logicamente impecável, mas prejudicará injustamente um indivíduo isolado.", opts: [
        { txt: "Sigo o plano. A integridade do sistema é prioridade; sentimentos individuais não devem corromper a lógica.", w: { Maid: 3, Knight: 2, Prince: -3 } },
        { txt: "Ignoro a decisão ou apresento um contra-argumento emocional. Não tolero que uma lógica fria esmague o que sinto ser correto.", w: { Prince: 3, Witch: -2, Sylph: -1 } },
        { txt: "Finjo que não vi as consequências ruins. Deixo o grupo decidir e, se der errado pra alguém, a culpa é da maioria.", w: { Bard: 3, Heir: 1, Rogue: 1, Prince: -2 } },
        { txt: "Analiso os desdobramentos e tento encontrar uma brecha técnica que proteja o indivíduo sem invalidar o plano.", w: { Seer: 3, Mage: 2, Sylph: 3, Thief: -1 } },
        { txt: "Exponho a falha moral do plano para que o grupo lide com o peso da escolha, retirando minha responsabilidade direta.", w: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
    ]},
    { t: "Você está em um jantar formal onde todos fingem se gostar. Você percebe claramente as máscaras sociais e as intenções ocultas.", opts: [
        { txt: "Sinto um cansaço profundo. Ver a mecânica por trás das interações tira a cor da vida; sinto-me prisioneiro desse teatro.", w: { Mage: 3, Page: 3, Seer: 1, Prince: -2 } },
        { txt: "Mantenho minha própria máscara perfeitamente polida. Uso o protocolo social como armadura.", w: { Knight: 3, Maid: 2, Rogue: -2 } },
        { txt: "Eu esqueço o protocolo e falo o que penso. Se ficar um clima estranho, pelo menos quebrou a falsidade.", w: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
        { txt: "Intervenho nas conversas, mudando o rumo dos assuntos para testar até onde as pessoas sustentam seus personagens.", w: { Witch: 3, Thief: 2, Heir: -2, Sylph: -1 } },
        { txt: "Observo em silêncio, quase invisível, absorvendo as dinâmicas para entender quem realmente detém o poder.", w: { Seer: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "Um erro grave foi cometido por um colega e a culpa está recaindo sobre o grupo todo. Como você se posiciona?", opts: [
        { txt: "Utilizo a falha dele para demonstrar minha própria competência, garantindo que minha posição saia fortalecida.", w: { Thief: 3, Prince: 2, Knight: -2, Rogue: -2 } },
        { txt: "Assumo parte da culpa ou tento redistribuir a responsabilidade para que o peso não destrua a carreira dele.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -3 } },
        { txt: "Não faço nada. Deixo o erro seguir seu curso lógico. Se ele errou, a consequência é natural e eu não vou interferir.", w: { Bard: 3, Seer: 1, Mage: 1, Maid: -2 } },
        { txt: "Trabalho dobrado nos bastidores para consertar o erro logicamente, sem buscar reconhecimento.", w: { Maid: 3, Page: 2, Witch: -1, Bard: -1 } },
        { txt: "Analiso friamente como esse erro aconteceu e uso o evento como estudo para mudar padrões futuros.", w: { Mage: 3, Seer: 2, Knight: 1, Witch: 2 } }
    ]},
    { t: "Ao planejar algo importante, como uma mudança de carreira, qual é o seu processo mental predominante?", opts: [
        { txt: "Crio planos de contingência para cada falha possível. Se eu não prever o caminho, sinto que vou colapsar.", w: { Maid: 3, Mage: 1, Knight: -2, Heir: -1 } },
        { txt: "Tento não pensar demais. Confio que, se eu seguir meu instinto, a lógica das coisas se resolverá sozinha.", w: { Prince: 3, Maid: -3, Seer: -2 } },
        { txt: "Eu não planejo. Vou empurrando com a barriga até a decisão se tornar inevitável ou alguém decidir por mim.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
        { txt: "Busco o conselho de várias pessoas, tentando sintetizar a visão delas em uma estratégia justa.", w: { Sylph: 3, Page: 2, Thief: -2, Witch: -1 } },
        { txt: "Procuro atalhos ou formas de influenciar o sistema a meu favor, focando no melhor resultado com menor esforço.", w: { Thief: 3, Witch: 3, Rogue: -2, Knight: -1 } }
    ]},
    { t: "Duas pessoas que você estima estão em um conflito intelectual acirrado e pedem sua mediação. Como você age?", opts: [
        { txt: "Desmonto os argumentos de ambos, apontando onde as emoções estão cegando o raciocínio.", w: { Witch: 3, Knight: 2, Prince: 2, Sylph: -2 } },
        { txt: "Escuto ambos, tentando fazer com que cada um entenda a lógica do outro para curar a divisão.", w: { Sylph: 3, Rogue: 2, Seer: 1, Thief: -2 } },
        { txt: "Fico em silêncio. Vejo tanta validade lógica em ambos os lados que não consigo escolher.", w: { Page: 3, Mage: 1, Maid: -2 } },
        { txt: "Faço piada da briga ou dou uma resposta sem sentido para desarmar a tensão lógica com confusão.", w: { Bard: 3, Heir: 1, Rogue: 1, Seer: -2 } },
        { txt: "Uso a tensão para introduzir novas variáveis, mudando o foco da briga para algo mais produtivo.", w: { Heir: 3, Thief: 2, Page: -2, Seer: -1 } }
    ]},
    { t: "Você descobre uma informação confidencial que poderia mudar a percepção de todos sobre um líder. O que faz?", opts: [
        { txt: "Guardo a informação. O conhecimento é ferramenta de ordem; revelá-la sem plano causaria caos desnecessário.", w: { Maid: 3, Knight: 2, Seer: 1 } },
        { txt: "Compartilho a verdade com os afetados. Acredito que a transparência é necessária para decisões livres.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -2 } },
        { txt: "Uso o segredo como moeda de troca para garantir que minhas próprias ideias sejam implementadas.", w: { Thief: 3, Prince: 3, Page: -3, Rogue: -2 } },
        { txt: "Deixo escapar sem querer ou esqueço de guardar segredo. Se a liderança cair por isso, caiu.", w: { Bard: 3, Heir: 1, Mage: 1, Knight: -2 } },
        { txt: "Sinto o peso dessa informação como um fardo. O simples fato de saber me faz sentir responsável.", w: { Mage: 3, Seer: 2, Witch: 2, Knight: -1 } }
    ]},
    { t: "Você está diante de uma escolha onde todos os caminhos levam a algum tipo de perda. Como sua mente processa a paralisia?", opts: [
        { txt: "Escolho o caminho que preserva a lógica do sistema maior, mesmo que eu sofra. Sacrifício racional.", w: { Maid: 3, Knight: 2, Seer: 1, Prince: -3 } },
        { txt: "Recuso-me a escolher. Deixo que o acaso decida, pois não quero carregar o peso da consequência.", w: { Bard: 3, Heir: 3, Page: 2, Witch: -2 } },
        { txt: "Tento criar uma 'terceira via' forçada através da manipulação, recusando as opções dadas.", w: { Witch: 3, Thief: 3, Mage: -1, Seer: -1 } },
        { txt: "Analiso qual perda é mais útil a longo prazo. Se algo deve ser destruído, que seja o menos eficiente.", w: { Prince: 3, Mage: 3, Rogue: 1, Sylph: -2 } },
        { txt: "Paraliso e não faço nada. Se eu não escolher, tecnicamente a culpa do resultado não é minha.", w: { Bard: 3, Page: 2, Heir: 1, Knight: -2 } }
    ]},
    { t: "Alguém questiona quem você é de verdade por trás de todas as suas opiniões sensatas e comportamentos calculados. O que responde?", opts: [
        { txt: "Eu sou o conjunto das minhas escolhas. Não existe 'eu' místico; sou a soma lógica das minhas ações.", w: { Mage: 3, Maid: 2, Seer: 2 } },
        { txt: "Sinto um vazio. Temo que, se tirar as camadas de lógica, não sobre nada no centro.", w: { Page: 3, Knight: 3, Rogue: 2, Prince: -1 } },
        { txt: "Eu mudo conforme a necessidade. Minha 'verdade' é ser quem preciso ser para funcionar.", w: { Thief: 3, Witch: 2, Heir: 2, Sylph: -2 } },
        { txt: "Respondo qualquer coisa. Não levo minha identidade a sério o suficiente para ter uma crise existencial com isso.", w: { Bard: 3, Heir: 2, Rogue: 1, Mage: -1 } },
        { txt: "A identidade é uma ilusão que limita. Prefiro não me definir, permitindo que vejam a lógica que lhes convém.", w: { Rogue: 3, Sylph: 3, Knight: -2, Bard: 1 } }
    ]},
    { t: "Você sente que sua vida atual é uma farsa e que está apenas desempenhando um papel. Qual sua reação?", opts: [
        { txt: "Dobro a aposta no papel. Vou polir essa máscara até que ela seja indistinguível da realidade.", w: { Knight: 3, Page: 3, Maid: 1, Prince: -2 } },
        { txt: "Abandono tudo. Rompo laços e mudo de cenário; prefiro o vazio ao peso de uma lógica falsa.", w: { Prince: 3, Heir: -2, Seer: -2 } },
        { txt: "Analiso as escolhas que me trouxeram até aqui para recalcular a rota racionalmente.", w: { Mage: 3, Seer: 3, Witch: 2, Knight: -2 } },
        { txt: "Continuo atuando, mas de forma irônica. Se é tudo uma farsa, vou me divertir com o absurdo do roteiro.", w: { Bard: 3, Thief: 2, Mage: 1, Page: -1 } },
        { txt: "Deixo que o tempo decida. Sigo o fluxo, esperando que uma nova circunstância defina quem devo ser.", w: { Heir: 3, Rogue: 2, Witch: -3, Maid: -1 } }
    ]},
    { t: "Em um jogo de estratégia complexo contra um oponente inteligente, qual é a sua principal força?", opts: [
        { txt: "Minha capacidade de antecipar movimentos. Jogo contra a mente dele, prevendo decisões.", w: { Seer: 3, Mage: 1, Witch: 2, Page: -1 } },
        { txt: "Minha disciplina. Sigo as regras à risca, cansando o oponente pela ausência de erros.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -3 } },
        { txt: "Minha audácia em subverter a lógica. Faço jogadas propositalmente caóticas para quebrar o padrão dele.", w: { Prince: 2, Thief: -2, Seer: -2 } },
        { txt: "Eu jogo sem prestar muita atenção. Minha imprevisibilidade vem do fato de que nem eu sei o que estou fazendo.", w: { Bard: 3, Heir: 2, Rogue: 1, Mage: -2 } },
        { txt: "Minha habilidade em usar a própria estratégia do oponente contra ele, tomando a vantagem quando ele confia nela.", w: { Thief: 3, Rogue: 2, Heir: 2, Knight: -1 } }
    ]}
    ],
   "Heart": [
    { t: "Você percebe que está agindo de forma completamente diferente dependendo do grupo de amigos com quem está. Como isso faz você se sentir?", opts: [
        { txt: "Sinto que sou uma fraude. Tento destruir essa fachada para encontrar uma identidade única e sólida.", w: { Prince: 3, Mage: -1, Heir: -2 } },
        { txt: "Não vejo como um problema. Minha identidade é tão difusa que eu simplesmente me torno o que o ambiente pede.", w: { Bard: 3, Rogue: 2, Heir: 1, Knight: -2 } },
        { txt: "Vejo isso como uma ferramenta social. Eu manipulo intencionalmente quem eu sou para controlar a percepção deles.", w: { Witch: 3, Thief: 2, Page: 1, Seer: -2 } },
        { txt: "Sinto que estou me doando demais. Acabo absorvendo a personalidade deles e perdendo a minha para agradar.", w: { Rogue: 3, Maid: 2, Sylph: 1, Prince: -2 } },
        { txt: "É natural. Eu fluo entre essas identidades sem conflito; todas elas são partes de mim.", w: { Heir: 3, Knight: 2, Bard: 1, Mage: -1 } }
    ]},
    { t: "Em um momento de crise emocional intensa de um amigo próximo, qual é o seu primeiro instinto?", opts: [
        { txt: "Tento analisar a raiz psicológica do problema. Quero entender 'por que' ele sente isso para guiá-lo.", w: { Seer: 3, Mage: 2, Sylph: 1, Heir: -1 } },
        { txt: "Sinto um desconforto imenso. Ofereço uma solução prática para acabar logo com o drama.", w: { Prince: 3, Sylph: -3, Rogue: -2 } },
        { txt: "Eu travo. Não sei lidar com a carga emocional e acabo fazendo uma piada nervosa ou mudando de assunto.", w: { Bard: 3, Thief: 1, Page: 1, Sylph: -2 } },
        { txt: "Tomo as dores para mim. Uso meu carisma para desviar o foco da dor dele, protegendo-o da exposição.", w: { Knight: 3, Maid: 2, Page: 1, Prince: -2 } },
        { txt: "Eu intervenho ativamente para mudar o humor dele, forçando uma atividade para alterar como ele se sente.", w: { Witch: 3, Sylph: 2, Thief: 1, Bard: -2 } }
    ]},
    { t: "Você precisa tomar uma decisão importante que vai contra seus desejos pessoais, mas é a coisa 'lógica' a se fazer.", opts: [
        { txt: "Eu ignoro meus sentimentos. Se meu desejo é um obstáculo para o resultado perfeito, eu o anulo sem piedade.", w: { Prince: 3, Knight: 2, Witch: -1, Heir: -3 } },
        { txt: "Eu sigo meus desejos. A lógica não serve de nada se eu não estiver satisfeito; minha vontade é absoluta.", w: { Thief: 3, Mage: 1, Rogue: -3, Prince: -2 } },
        { txt: "Eu paraliso. Fico esperando que a vontade passe ou que a lógica mude. Se eu não decidir, o destino decide.", w: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
        { txt: "Tento encontrar um meio-termo onde eu possa servir ao propósito maior sem me sentir vazio, mas geralmente cedo ao dever.", w: { Maid: 3, Page: 2, Rogue: 1, Thief: -3 } },
        { txt: "Passo muito tempo tentando entender a origem desse desejo. Só decido depois de saber se o que sinto é genuíno.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -1 } }
    ]},
    { t: "Alguém critica algo que você ama profundamente e que considera parte fundamental de quem você é.", opts: [
        { txt: "Fico na defensiva imediatamente e ataco o gosto da pessoa. Ninguém tem o direito de questionar o que me define.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -2 } },
        { txt: "Finjo que não me importo ou concordo ironicamente com a crítica para evitar que vejam o quanto aquilo me atingiu.", w: { Knight: 3, Prince: 2, Page: 1, Maid: -1 } },
        { txt: "Eu concordo com a crítica e faço piada de mim mesmo. Se o que eu amo é ridículo, eu sou ridículo junto. Não levo a sério.", w: { Bard: 3, Heir: 1, Rogue: 1, Thief: -2 } },
        { txt: "Começo a questionar se eu deveria gostar daquilo mesmo. A opinião externa me faz reavaliar minha própria conexão.", w: { Rogue: 3, Maid: 2, Page: 2, Heir: -1 } },
        { txt: "Não me abala. Minha conexão com o que amo é interna e não requer validação externa.", w: { Heir: 3, Sylph: 2, Seer: 1, Knight: -2 } }
    ]},
    { t: "Você se sente frequentemente mal compreendido pelas pessoas ao seu redor?", opts: [
        { txt: "Sim, porque eu escondo quem sou. Crio personas eficientes, então ninguém conhece o 'eu' real, e prefiro assim.", w: { Prince: 3, Knight: 2, Witch: 1, Sylph: -2 } },
        { txt: "Sim, sinto que tenho uma essência que ainda não consegui expressar, e estou esperando o momento certo.", w: { Page: 3, Maid: 2, Heir: 1, Thief: -2 } },
        { txt: "Nem eu me entendo. Sinto que sou uma coletânea de fragmentos aleatórios, então é natural que ninguém veja um todo coerente.", w: { Bard: 3, Heir: 2, Mage: 1, Seer: -1 } },
        { txt: "Não, eu faço questão de que todos saibam exatamente quem sou. Imponho minha personalidade no ambiente.", w: { Thief: 3, Witch: 2, Mage: -1, Rogue: -3 } },
        { txt: "Às vezes, mas uso isso para observar os outros. O fato de não me verem me dá vantagem.", w: { Mage: 3, Seer: 2, Rogue: 1, Heir: -1 } }
    ]},
    { t: "Quando você olha para o seu passado, como você enxerga sua evolução pessoal?", opts: [
        { txt: "Com vergonha. Tento ativamente apagar ou esquecer quem eu fui, pois aquela versão antiga é falha.", w: { Prince: 3, Knight: 1, Sylph: -3 } },
        { txt: "Com carinho. Vejo cada fase como necessária e penso nas memórias como um lembrete de que sempre posso melhorar.", w: { Sylph: 3, Heir: 2, Mage: 1, Prince: -3 } },
        { txt: "Com indiferença. O passado parece um sonho distante de outra pessoa. Não guardo mágoa nem carinho, só esqueço.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
        { txt: "Como um recurso. As coisas que passei me deram 'armas' emocionais que uso hoje.", w: { Knight: 3, Witch: 2, Thief: 1, Page: -1 } },
        { txt: "Como um quebra-cabeça. Analiso as causas e efeitos das minhas mudanças para prever o futuro.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Você sente que sua paixão por um hobby ou projeto antigo está morrendo. O que você faz?", opts: [
        { txt: "Mato o projeto imediatamente. Se não há mais chama, não vou carregar um cadáver. Corto o vínculo e busco algo novo.", w: { Prince: 3, Thief: 2, Witch: 1, Maid: -2 } },
        { txt: "Tento reacender a chama forçadamente, mudando a forma como interajo com aquilo para ver se a emoção volta.", w: { Witch: 3, Sylph: 2, Maid: 1, Bard: -2 } },
        { txt: "Deixo acumular poeira. Não termino, não continuo. O projeto fica lá, existindo no limbo da minha apatia.", w: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
        { txt: "Continuo por teimosia ou dever. Sinto que a dedicação deve superar a falta de vontade momentânea.", w: { Maid: 3, Knight: 2, Page: 1, Prince: -2 } },
        { txt: "Analiso por que perdi o interesse. Tento entender o que mudou na minha essência para que aquilo não sirva mais.", w: { Mage: 3, Seer: 2, Heir: 1 } }
    ]},
    { t: "Alguém questiona quem você é de verdade, sugerindo que você é superficial. O que você responde?", opts: [
        { txt: "Mostro minhas ações. Minha 'alma' está no que eu faço e em como sirvo aos outros, não em discursos profundos.", w: { Maid: 3, Knight: 2, Sylph: 1 } },
        { txt: "Sinto um vazio. Tenho medo de que, se tirar as camadas, não sobre nada no centro. Talvez eu seja superficial mesmo.", w: { Page: 3, Rogue: 2, Prince: -1, Bard: 1 } },
        { txt: "Eu concordo e rio. 'Sou raso como um pires'. Não levo minha profundidade a sério o suficiente para me ofender.", w: { Bard: 3, Heir: 2, Rogue: 1, Seer: -2 } },
        { txt: "Defendo minha complexidade. Exponho meus desejos e paixões para provar que existo com intensidade.", w: { Thief: 3, Witch: 2, Mage: 1, Prince: -2 } },
        { txt: "Analiso a percepção deles. Se pareço superficial, é porque eles não têm a ferramenta certa para me ler.", w: { Seer: 3, Mage: 2, Heir: 1 } }
    ]},
    { t: "Em um relacionamento (romântico ou amizade profunda), qual é o seu maior medo?", opts: [
        { txt: "Perder minha individualidade. Tenho medo de ser absorvido pelo outro e não saber mais onde eu termino e ele começa.", w: { Thief: 3, Prince: 2, Mage: 1, Rogue: -3 } },
        { txt: "Apatia. Tenho medo de simplesmente parar de me importar do nada e deixar a relação morrer por negligência minha.", w: { Bard: 3, Heir: 1, Rogue: 1, Sylph: -2 } },
        { txt: "Não ser o suficiente. Sinto que preciso estar sempre 'servindo' para justificar minha presença na vida da pessoa.", w: { Maid: 3, Page: 2, Knight: 1, Thief: -2 } },
        { txt: "A vulnerabilidade real. Tenho pavor de baixar a guarda e deixar alguém ver minhas falhas sem nenhuma máscara.", w: { Knight: 3, Prince: 2, Witch: 1, Heir: -2 } },
        { txt: "Não conseguir ajudar. Meu medo é ver o outro sofrendo e não ter a capacidade de consertá-lo.", w: { Sylph: 3, Rogue: 2, Seer: 1, Bard: -2 } }
    ]},
    { t: "Você tem um instinto ou 'feeling' muito forte sobre algo, mas todos os dados lógicos dizem o contrário. O que você faz?", opts: [
        { txt: "Sigo os dados. O instinto é falho; confio apenas no que pode ser provado e destruo a dúvida interna.", w: { Prince: 3, Mage: 1, Seer: -1, Heir: -3 } },
        { txt: "Sigo o instinto, mas de forma errática. Uma hora confio, na outra ignoro. Deixo minha bússola interna girar loucamente.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
        { txt: "Sigo o instinto cegamente. Deixo-me levar pelo que sinto, pois minha intuição me protege.", w: { Heir: 3, Sylph: 1, Prince: -3 } },
        { txt: "Uso o instinto para manipular a situação. Se sinto que vai dar errado, altero as variáveis para garantir o resultado.", w: { Witch: 3, Thief: 2, Knight: 1, Page: -1 } },
        { txt: "Tento traduzir o instinto em lógica. Analiso o 'porquê' de eu sentir isso até encontrar a validação racional.", w: { Mage: 3, Seer: 2, Page: -1, Bard: -2 } }
    ]}
    ],
    "Hope": [
    { t: "Você descobre que uma figura de autoridade ou ídolo em quem confiava cometeu um erro moral grave. Qual sua reação imediata?", opts: [
        { txt: "Corto os laços imediatamente. Se a imagem perfeita foi manchada, a pessoa inteira é uma mentira.", w: { Prince: 3, Bard: 2, Witch: -2, Sylph: -3 } },
        { txt: "Tento justificar as ações dele para mim mesmo. Deve haver uma razão maior por trás disso.", w: { Witch: 3, Sylph: 2, Heir: 1, Prince: -3 } },
        { txt: "Sinto-me traído, mas guardo para mim. Continuo agindo como se confiasse, pois preciso dessa estrutura.", w: { Page: 3, Knight: 2, Thief: -1, Prince: -2 } },
        { txt: "Nem me abalo. Ídolos são falhos mesmo. Continuo seguindo a pessoa só para ver onde isso vai dar.", w: { Bard: 3, Mage: 1, Rogue: 1, Knight: -2 } },
        { txt: "Analiso o contexto histórico e as falhas humanas dele. Eu já esperava que isso pudesse acontecer.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Seu grupo de amigos está desanimado com um projeto que parece destinado ao fracasso. O que você faz?", opts: [
        { txt: "Assumo a liderança e exalo uma confiança exagerada, garantindo a todos que vai dar certo.", w: { Knight: 3, Page: 2, Rogue: -1, Bard: -2 } },
        { txt: "Aponto friamente todas as falhas. É melhor destruir a falsa esperança agora do que vê-los sofrer depois.", w: { Prince: 3, Thief: 1, Sylph: -3, Maid: -2 } },
        { txt: "Eu não faço nada. Se eles querem desistir, que desistam. Não sou eu quem vai carregar o moral do grupo.", w: { Bard: 3, Rogue: 1, Mage: 1, Sylph: -2 } },
        { txt: "Continuo trabalhando na minha parte alegremente. Minha fé inabalável acaba contagiando alguns.", w: { Heir: 3, Maid: 2, Seer: -2, Prince: -3 } },
        { txt: "Deixo que eles desistam se quiserem. Às vezes, o colapso é necessário para surgirem ideias novas.", w: { Mage: 2, Seer: 1, Knight: -2, Sylph: -2 } }
    ]},
    { t: "Você se depara com uma teoria ou crença que contradiz fatos lógicos, mas que faz você se sentir incrivelmente bem e seguro.", opts: [
        { txt: "Abraço a crença. Prefiro viver em uma narrativa que me dê propósito e felicidade do que na frieza dos fatos.", w: { Maid: 3, Witch: 2, Heir: 1, Prince: -3 } },
        { txt: "Rejeito a crença com desprezo. O conforto gerado pela ignorância é uma fraqueza que recuso.", w: { Prince: 3, Mage: 1, Heir: -3, Page: -2 } },
        { txt: "Acredito nela 'ironicamente'. É divertido agir como se fosse verdade, mesmo sabendo que não faz sentido.", w: { Bard: 3, Rogue: 1, Thief: 1, Seer: -2 } },
        { txt: "Estudo a estrutura dessa crença para entender por que ela é tão atraente para a mente humana.", w: { Mage: 3, Seer: 2, Bard: -1, Knight: -1 } },
        { txt: "Uso essa crença para motivar outras pessoas. É uma ferramenta útil para elevar o moral.", w: { Thief: 3, Rogue: 2, Bard: 1, Seer: -2 } }
    ]},
    { t: "Em um debate acalorado sobre ética, todos estão contra a sua opinião. Como você se posiciona?", opts: [
        { txt: "Mantenho minha posição com teimosia. O fato de serem muitos contra mim só prova que estou certo.", w: { Thief: 3, Prince: 3, Knight: 2, Maid: 1, Rogue: -3 } },
        { txt: "Cedo e concordo com o grupo para manter a harmonia, mas guardo minha convicção em segredo.", w: { Page: 3, Rogue: 2, Sylph: 1, Thief: -3 } },
        { txt: "Tento reformular a visão deles, mostrando que, no fundo, queremos a mesma coisa.", w: { Sylph: 3, Witch: 2, Seer: 1, Prince: -2 } },
        { txt: "Mudo de assunto ou faço uma piada. Não tenho energia para defender ideais se ninguém quer ouvir.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
        { txt: "Desmonto os argumentos deles um por um, focando em provar que a lógica deles é falha.", w: { Prince: 2, Mage: 2, Seer: 1, Heir: -2 } }
    ]},
    { t: "Um amigo próximo está iludido com um relacionamento tóxico, acreditando que 'o amor vai mudar tudo'.", opts: [
        { txt: "Intervenho drasticamente, listando as provas de toxicidade para quebrar essa fantasia.", w: { Prince: 3, Seer: 2, Sylph: -2, Heir: -3 } },
        { txt: "Ouço os desabafos e valido os sentimentos, esperando que ele perceba a realidade no tempo dele.", w: { Sylph: 3, Rogue: 2, Prince: -3, Thief: -2 } },
        { txt: "Não me meto. Se ele quer se iludir, é escolha dele. Eu só assisto de longe.", w: { Bard: 3, Mage: 1, Knight: -2, Maid: -2 } },
        { txt: "Sinto raiva pela ingenuidade, mas acabo comprando briga com quem o está machucando.", w: { Knight: 3, Thief: 2, Mage: -1, Bard: -1 } },
        { txt: "Afasto-me. Não tenho paciência para quem escolhe viver na mentira.", w: { Mage: 2, Seer: 1, Knight: -2, Maid: -1 } }
    ]},
    { t: "Você cometeu um erro que prejudicou alguém, mas foi sem intenção. A culpa o consome.", opts: [
        { txt: "Convenço a mim mesmo de que não foi minha culpa, reescrevendo a narrativa dos eventos.", w: { Witch: 3, Thief: 2, Prince: 1, Seer: -3 } },
        { txt: "Aceito a culpa publicamente e tento compensar exageradamente o erro com atos grandiosos.", w: { Page: 3, Maid: 2, Knight: 1, Thief: -2 } },
        { txt: "Fico paralisado, esperando que o tempo apague a gravidade do erro sem eu precisar agir.", w: { Heir: 3, Bard: 2, Knight: -2, Maid: -2 } },
        { txt: "Dou espaço para a pessoa, sacrificando minha necessidade de perdão imediato.", w: { Rogue: 3, Seer: 2, Sylph: 1, Witch: -2 } },
        { txt: "Eu esqueço. O que passou, passou. Ficar se sentindo culpado não resolve nada mesmo.", w: { Bard: 3, Prince: 1, Page: -1, Sylph: -2 } }
    ]},
    { t: "Qual é a sua relação com 'finais felizes' em filmes e livros?", opts: [
        { txt: "Acho irritantes e irreais. A vida não funciona assim.", w: { Prince: 3, Mage: 2, Heir: -2, Sylph: -2 } },
        { txt: "São essenciais. O mundo já é difícil demais; a ficção deve servir como um farol de esperança.", w: { Maid: 3, Sylph: 2, Page: 1, Prince: -3 } },
        { txt: "Gosto, mas apenas se os personagens sofreram o suficiente para merecê-lo.", w: { Knight: 3, Thief: 2, Seer: 1, Heir: -1 } },
        { txt: "Não me importo com o final. Se for feliz, ok. Se todos morrerem, ok também.", w: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
        { txt: "Foco na jornada e nas possibilidades abertas que a história sugere.", w: { Heir: 3, Rogue: 2, Seer: 1, Knight: -2 } }
    ]},
    { t: "Você precisa convencer um grupo de pessoas a seguir um caminho arriscado.", opts: [
        { txt: "Uso meu carisma e promessas grandiosas. Importa se eles acreditam, não se é verdade.", w: { Thief: 3, Knight: 2, Page: 1, Seer: -2 } },
        { txt: "Apresento o cenário de forma honesta, confiando que a verdade inspirará as pessoas certas.", w: { Seer: 3, Mage: 2, Witch: -2, Thief: -3 } },
        { txt: "Digo 'vamos nessa' sem ter plano nenhum. Minha despreocupação faz parecer que sei o que estou fazendo.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
        { txt: "Manipulo sutilmente as circunstâncias para que pareça a única opção segura.", w: { Witch: 3, Prince: 1, Sylph: 1, Knight: -1 } },
        { txt: "Vou na frente sozinho. Se der certo, eles me seguirão pelo exemplo.", w: { Rogue: 3, Maid: 2, Heir: 1, Bard: -1 } }
    ]},
    { t: "Os dados e a lógica garantem que seu objetivo atual é impossível. Qual sua reação imediata?", opts: [
        { txt: "Recuso essa 'verdade'. Se a realidade diz não, eu quebro as regras ou forço um caminho.", w: { Prince: 3, Witch: 2, Knight: 1 } },
        { txt: "Entro em pânico. Busco validação em outras pessoas para sustentar minha crença.", w: { Thief: 2, Rogue: 1, Page: 1 } },
        { txt: "Continuo tentando, mas sem esforço real. Se der errado, pelo menos eu fingi que tentei.", w: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
        { txt: "Analiso friamente. Tento entender a lógica da falha e, se for real, aceito e sigo o fluxo.", w: { Mage: 2, Seer: 2, Heir: 1 } },
        { txt: "Mantenho as aparências. Continuo agindo como se fosse dar certo para preservar a moral.", w: { Sylph: 2, Maid: 1, Knight: 1 } }
    ]},
    { t: "Você está sozinho em um quarto em silêncio absoluto. Como essa ausência de estímulo te afeta?", opts: [
        { txt: "A inércia me desespera. Começo a organizar coisas freneticamente.", w: { Prince: 1, Knight: 2, Maid: 1 } },
        { txt: "Sinto um vazio existencial. Preciso consumir conteúdo alheio para me distrair.", w: { Thief: 2, Rogue: 2, Page: 1 } },
        { txt: "Sinto-me livre. Minha mente cria cenários e histórias sozinha para preencher o silêncio.", w: { Heir: 2, Mage: 2, Seer: 1 } },
        { txt: "Fico viajando na maionese. Entro num estado de devaneio tão profundo que esqueço onde estou.", w: { Bard: 3, Heir: 1, Rogue: 1 } },
        { txt: "Uso o isolamento como ferramenta de treino e autopoliciamento.", w: { Page: 2, Knight: 1 } }
    ]}
    ],
    "Doom": [
   { t: "Você recebe o diagnóstico de uma condição vitalícia. Não é fatal, mas é uma sentença que exigirá restrições severas e uma rotina médica rígida para sempre.", opts: [
        { txt: "Dane-se o diagnóstico. Continuo vivendo como se nada tivesse mudado, recusando-me a deixar um papel ditar os limites do meu corpo.", w: { Prince: 3, Witch: 1, Heir: -1 } },
        { txt: "Eu esqueço de tomar os remédios ou sigo o tratamento pela metade. Se meu corpo aguentar, aguentou; não vou me estressar com o inevitável.", w: { Bard: 3, Rogue: 1, Heir: 1, Sylph: -2 } },
        { txt: "Mergulho na pesquisa técnica. Preciso dissecar cada mecanismo da doença para mapear exatamente onde piso neste novo campo minado.", w: { Mage: 3, Seer: 2, Knight: 1, Prince: -2 } },
        { txt: "Submeto-me à nova realidade imediatamente, criando um sistema impecável de hábitos para 'domar' a doença através da obediência.", w: { Sylph: 3, Maid: 2, Heir: 1, Bard: -2 } },
        { txt: "Uso minha condição como um escudo social, livrando-me de responsabilidades indesejadas sob a justificativa da minha saúde frágil.", w: { Thief: 3, Witch: 2, Page: 1, Knight: -1 } }
    ]},
    { t: "Você sente o momento exato em que o controle é perdido. O veículo em que você está sofre uma falha catastrófica e o impacto violento é uma certeza matemática nos próximos segundos.", opts: [
        { txt: "Aceito o fim. Relaxo cada músculo do corpo para não quebrar com a tensão, confiando que fluir com o desastre é a única chance de sobreviver.", w: { Heir: 3, Seer: 1, Sylph: 1, Prince: -3 } },
        { txt: "Começo a rir de nervoso ou simplesmente travo, olhando o cenário passar. Não tento me salvar nem salvar ninguém, só espero a batida.", w: { Bard: 3, Page: 2, Mage: -1, Knight: -2 } },
        { txt: "Tento proteger os outros passageiros com meu próprio corpo, agindo instintivamente como um escudo humano para absorver o dano.", w: { Rogue: 3, Knight: 2, Maid: 1, Thief: -3 } },
        { txt: "Grito ordens precisas em meio ao pânico. Assumo o comando do caos, ditando posições de impacto para minimizar as perdas.", w: { Seer: 2, Mage: 2, Sylph: 1, Page: -1 } },
        { txt: "Pulo fora antes do impacto final. Minha prioridade absoluta é garantir que eu não afunde junto com os destroços.", w: { Thief: 3, Prince: 2, Witch: 1, Rogue: -3 } }
    ]},
    { t: "Você descobre uma falha sistêmica nas regras de um serviço ou contrato que permite obter vantagens ilimitadas, mas que claramente viola o espírito da lei.", opts: [
        { txt: "Exploro a falha até a última gota. Se o sistema deixou uma porta aberta, a incompetência é deles e o lucro é meu.", w: { Thief: 3, Witch: 2, Prince: 1, Seer: -2 } },
        { txt: "Reporto o erro imediatamente. Regras existem para manter a estrutura funcional e um sistema quebrado prejudica o coletivo a longo prazo.", w: { Sylph: 3, Seer: 2, Heir: 1, Thief: -3 } },
        { txt: "Uso o erro de forma desleixada e excessiva até quebrar o sistema ou ser banido. Foi divertido enquanto durou a anarquia.", w: { Bard: 3, Rogue: 1, Heir: 1, Mage: -2 } },
        { txt: "Compartilho o segredo apenas com meu círculo íntimo, garantindo que 'nós' tenhamos vantagem antes que a correção chegue.", w: { Rogue: 3, Maid: 2, Page: 1, Prince: -1 } },
        { txt: "Fico paranoico de que usar isso trará uma punição cármica ou legal severa, então prefiro não tocar no erro.", w: { Mage: 3, Knight: 2, Bard: -1, Witch: -2 } }
    ]},
    { t: "Sua comunidade se reúne para um ritual ou tradição antiga que você considera opressiva e sem sentido, mas que é vista como o pilar da ordem social.", opts: [
        { txt: "Participo da tradição fingindo respeito, mas nos bastidores faço comentários ácidos que minam a autoridade do ritual.", w: { Thief: 2, Witch: 2, Mage: 1 } },
        { txt: "Eu simplesmente não apareço. Ignoro a existência dessa regra social e vou fazer algo que me interesse, indiferente às consequências.", w: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
        { txt: "Confronto a tradição abertamente e tento destruí-la. Não aceito que o sofrimento seja justificado apenas porque 'sempre foi assim'.", w: { Prince: 3, Knight: 2, Witch: 1, Heir: -2 } },
        { txt: "Mantenho a tradição com solenidade. Entendo que o ritual é a cola que impede a sociedade de se dissolver no caos absoluto.", w: { Heir: 3, Seer: 2, Mage: 1, Prince: -3 } },
        { txt: "Tento reformar a tradição por dentro, sugerindo pequenas alterações nas regras para torná-la mais suportável para todos.", w: { Sylph: 3, Witch: 2, Maid: 1, Bard: -2 } }
    ]},
    { t: "Você encontra uma criatura pequena em seus últimos momentos de vida. O sofrimento é visível e não há chance de recuperação; a morte é certa.", opts: [
        { txt: "Mato-o rapidamente. É um ato de misericórdia impor um fim imediato quando o destino já está selado dolorosamente.", w: { Knight: 3, Prince: 2, Maid: 1, Bard: -1 } },
        { txt: "Viro o rosto e vou embora. A visão da morte crua me perturba profundamente e prefiro negar essa realidade.", w: { Page: 3, Heir: 2, Prince: 1, Mage: -2 } },
        { txt: "Fico observando até o último Suspiro. Sinto uma obrigação solene de testemunhar a passagem da vida para a morte.", w: { Mage: 3, Seer: 2, Rogue: 1, Knight: -2 } },
        { txt: "Tento salvá-lo desesperadamente, mesmo sabendo que é fútil. Recuso-me a aceitar que a morte seja a única opção.", w: { Maid: 3, Witch: 2, Sylph: 1, Seer: -2 } },
        { txt: "Deixo a natureza seguir seu curso. Se tiver que morrer, vai morrer. Não intervenho nem para salvar, nem para matar.", w: { Bard: 3, Seer: 1, Mage: 1, Sylph: -2 } }
    ]},
    { t: "Você está preso em um sistema de trabalho onde as regras mudam aleatoriamente e ninguém sabe o que está fazendo, gerando um ambiente de pura entropia.", opts: [
        { txt: "Paraliso. A falta de diretrizes claras drena minha energia vital e me sinto incapaz de produzir sem um trilho seguro.", w: { Page: 3, Heir: 2, Sylph: 1, Prince: -2 } },
        { txt: "Crio minhas próprias leis e as imponho aos outros. Se o universo não me dá estrutura, eu me torno a estrutura.", w: { Witch: 3, Knight: 2, Maid: 1, Page: -2 } },
        { txt: "Eu paro de tentar entender. Faço qualquer coisa de qualquer jeito. Se o resultado for ruim, a culpa é da regra que mudou.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
        { txt: "Navego no caos. Sem regras fixas, ninguém pode provar que estou errado, então faço o mínimo possível.", w: { Thief: 3, Rogue: 2, Bard: 1, Seer: -3 } },
        { txt: "Tento decifrar o padrão oculto por trás das mudanças. Acredito que existe uma lógica subjacente nesse caos todo.", w: { Mage: 3, Seer: 2, Heir: 1, Bard: -1 } }
    ]},
    { t: "Um aliado cometeu um erro imperdoável que pode custar a carreira dele. Ele implora para que você minta e cubra o rastro dele.", opts: [
        { txt: "Minto. As regras institucionais não valem mais do que a minha lealdade pessoal a quem está comigo.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } },
        { txt: "Recuso-me a mentir. Explico que as consequências são uma força da natureza e tentar fugir só piora a catástrofe.", w: { Seer: 3, Mage: 2, Sylph: 1, Thief: -2 } },
        { txt: "Assumo a culpa no lugar dele. Uso meu próprio capital para pagar a dívida do erro dele, sacrificando-me.", w: { Rogue: 3, Page: 2, Knight: 1, Prince: -3 } },
        { txt: "Fico furioso com ele. A irresponsabilidade dele agora se tornou uma âncora no meu pescoço.", w: { Prince: 3, Knight: 2, Bard: 1, Heir: -1 } },
        { txt: "Tento mentir, mas faço de forma tão desleixada ou contraditória que a verdade acaba vazando por incompetência minha.", w: { Bard: 3, Page: 2, Heir: 1, Prince: -1 } }
    ]},
    { t: "Você enfrenta o Leviatã da burocracia: uma montanha de documentos, filas infinitas e carimbos para conseguir algo simples.", opts: [
        { txt: "Transformo isso em um desafio de eficiência. Organizo cada papel milimetricamente para vencer o sistema pelo cansaço.", w: { Knight: 3, Maid: 2, Sylph: 1, Bard: -2 } },
        { txt: "Sinto minha vitalidade sendo sugada. A ineficiência sistêmica me dá vontade de atear fogo no prédio.", w: { Prince: 3, Witch: 1, Heir: -2 } },
        { txt: "Desisto no meio do caminho. Se é difícil demais, não vale o esforço. Deixo o prazo vencer e vejo o que acontece.", w: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
        { txt: "Aceito com resignação estóica. É chato, mas é a lei do mundo. Entro em modo de espera e aguardo minha vez.", w: { Heir: 3, Page: 2, Rogue: 1, Prince: -3 } },
        { txt: "Tento usar contatos, charme ou suborno para pular as etapas. As regras se aplicam aos outros, não a mim.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } }
    ]},
    { t: "A matemática é fria e o veredito é final: o dinheiro acabou. O colapso financeiro é iminente e não há como pagar todas as dívidas.", opts: [
        { txt: "Saio cortando tudo que não é vital. Viro um asceta, vivendo com o mínimo absoluto para sobreviver ao inverno financeiro.", w: { Prince: 3, Knight: 1, Sylph: -2 } },
        { txt: "Gasto o pouco que sobrou em algo fútil para me sentir bem. Se o barco vai afundar, que eu afunde sorrindo.", w: { Bard: 3, Heir: 1, Rogue: 1, Seer: -2 } },
        { txt: "Deixo de comer para garantir que os outros dependentes (família, equipe) não sintam o impacto da crise.", w: { Rogue: 3, Maid: 2, Page: 1, Thief: -3 } },
        { txt: "Faço malabarismo financeiro. Pego empréstimo para pagar outro e empurro a condenação com a barriga.", w: { Thief: 3, Witch: 2, Mage: 1, Seer: -1 } },
        { txt: "Sento e calculo a data exata da falência. Crio um plano detalhado de sobrevivência para o cenário pós-apocalíptico.", w: { Seer: 3, Mage: 2, Heir: 1, Bard: -2 } }
    ]},
    { t: "Você é o portador do apocalipse pessoal de alguém. Cabe a você entregar uma notícia (término, demissão, morte) que destruirá o mundo dessa pessoa.", opts: [
        { txt: "Falo a verdade na lata, sem anestesia. Acredito que a clareza brutal é a única forma respeitosa de lidar com o fim.", w: { Seer: 3, Mage: 2, Knight: 1, Sylph: -2 } },
        { txt: "Tento maquiar a catástrofe, omitindo os detalhes mais cruéis na esperança de proteger a pessoa da dor total.", w: { Sylph: 3, Page: 2, Heir: 1, Prince: -1 } },
        { txt: "Enrolo tanto que a pessoa acaba descobrindo sozinha ou percebendo pelo meu comportamento esquivo.", w: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
        { txt: "Travo e sumo. Invento desculpas para não ter que olhar nos olhos da pessoa enquanto o mundo dela cai.", w: { Page: 3, Rogue: 2, Knight: -2 } },
        { txt: "Uso a situação para me mostrar indispensável. Dou a má notícia já me oferecendo como o salvador que vai recolher os cacos.", w: { Witch: 3, Thief: 2, Maid: 1, Prince: -2 } }
    ]}    
    ],
    "Life": [
    { t: "Você descobriu que só conseguiu seu emprego atual porque seu pai conhecia o chefe (nepotismo), e não por mérito próprio. Como isso faz você se sentir?", opts: [
        { txt: "Não sinto vergonha alguma. Se o mundo me ofereceu um atalho, eu pego. Prefiro estar empregado com vantagem do que ser um mártir.", w: { Thief: 3, Witch: 1, Prince: -2 } },
        { txt: "Sinto-me uma fraude completa. Trabalho o triplo do que meus colegas para provar (para eles e para mim) que eu mereço ocupar este espaço.", w: { Page: 3, Knight: 2, Maid: 1, Heir: -1 } },
        { txt: "Rejeito a vantagem. Peço demissão ou busco outro lugar onde eu possa começar do zero, destruindo esse privilégio que mancha minha autonomia.", w: { Prince: 3, Knight: 1, Thief: -3, Witch: -2 } },
        { txt: "Eu nem penso nisso. Continuo no emprego, fazendo o mínimo necessário. Se me deram a vaga, o problema é deles, não meu.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
        { txt: "Uso minha posição privilegiada para facilitar a vida dos meus colegas, advogando por aumentos ou melhorias, redistribuindo minha sorte.", w: { Rogue: 3, Sylph: 2, Seer: 1, Prince: -1 } }
    ]},
    { t: "Em um projeto de grupo, um membro é claramente incompetente e está arrastando todos para o fracasso. O prazo acaba amanhã.", opts: [
        { txt: "Eu corto a parte dele e faço tudo sozinho. Não vou deixar minha nota afundar por causa de um peso morto.", w: { Prince: 3, Thief: 2, Sylph: -2, Page: -2 } },
        { txt: "Sento com ele e faço a parte dele junto, guiando sua mão se for preciso. Não posso deixar ninguém para trás.", w: { Sylph: 3, Maid: 2, Witch: 1, Bard: -2 } },
        { txt: "Eu deixo ele afundar. Se ele não fez a parte dele, que arque com as consequências. Não vou me matar para salvar quem não se ajuda.", w: { Bard: 3, Mage: 1, Rogue: 1, Sylph: -3 } },
        { txt: "Assumo a liderança agressivamente, ditando exatamente o que cada um fará nas horas finais para garantir que o resultado seja vital.", w: { Witch: 3, Maid: 2, Heir: 1, Seer: -1 } },
        { txt: "Observo o desastre iminente. Entendo que o fracasso é parte do ciclo de aprendizado e, às vezes, a dor é a única lição que funciona.", w: { Seer: 3, Mage: 2, Knight: -2 } }
    ]},
    { t: "Em um grupo de amigos, você é geralmente aquele que:", opts: [
        { txt: "Organiza as atividades, traz os lanches, cuida de quem bebeu demais e garante que todos estejam bem, muitas vezes esquecendo de si mesmo.", w: { Maid: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
        { txt: "É o conselheiro realista que diz as verdades chatas que ninguém quer ouvir, impedindo que os outros tomem decisões impulsivas.", w: { Prince: 3, Mage: 2, Seer: 1, Witch: -2 } },
        { txt: "É o centro das atenções natural. Você define o ritmo do rolê e faz com que os planos girem em torno do que você quer fazer.", w: { Witch: 3, Knight: 2, Thief: 1, Bard: -2 } },
        { txt: "Eu sou o que vai na onda. Como o que tiver, bebo o que derem e vou onde levarem. Sou uma presença confortável que não exige muito.", w: { Bard: 3, Heir: 2, Rogue: 1, Maid: -1 } },
        { txt: "Aquele que parece atrair a sorte ou as oportunidades, sempre terminando em situações vantajosas sem parecer que fez muito esforço.", w: { Heir: 3, Page: 2, Thief: -1 } }
    ]},
    { t: "Uma tradição familiar antiga dita que você deve seguir uma carreira que você odeia. Romper com ela significa ser deserdado.", opts: [
        { txt: "Rompo com a tradição. Tenho uma vida só e não vou gastá-la seguindo regras de gente morta. Minha felicidade pessoal vale mais.", w: { Witch: 3, Thief: 2, Prince: 1, Heir: -2 } },
        { txt: "Aceito o fardo e sigo a carreira, encontrando maneiras de servir minha família e manter o legado vivo, mesmo infeliz.", w: { Maid: 3, Knight: 2, Heir: 1, Bard: -2 } },
        { txt: "Fujo silenciosamente. Deixo o espaço vago para que outro parente assuma, redistribuindo essa responsabilidade.", w: { Rogue: 3, Knight: -2, Witch: -2 } },
        { txt: "Eu enrolo a faculdade por anos, reprovo de propósito ou sou expulso. Deixo que o fracasso me tire dessa obrigação sem eu ter que dizer não.", w: { Bard: 3, Heir: 1, Page: 1, Prince: -1 } },
        { txt: "Tento reformar a tradição por dentro, conversando e mostrando que a mudança é necessária para a sobrevivência da família.", w: { Sylph: 3, Seer: 2, Mage: 1, Prince: -1 } }
    ]},
    { t: "Você vê uma criança fazendo birra em um supermercado porque quer um doce, gritando e se jogando no chão.", opts: [
        { txt: "Sinto uma irritação profunda. Essa exibição de desejo descontrolado e falta de disciplina precisa ser contida imediatamente.", w: { Prince: 3, Knight: 2, Sylph: -1, Bard: -1 } },
        { txt: "Acho graça ou ignoro. É a expressão pura de um desejo vital; crianças são assim, caóticas e cheias de querer.", w: { Heir: 3, Mage: -1, Prince: -3 } },
        { txt: "Se fosse meu filho, eu compraria o doce só para ele calar a boca e eu poder continuar minha vida em paz. Resolvo cedendo.", w: { Witch: 3, Rogue: 2, Page: -1, Knight: -2 } },
        { txt: "Eu nem olho. Crianças gritam, a vida é barulhenta. Sigo minhas compras alheio ao caos alheio.", w: { Bard: 3, Rogue: 1, Heir: 1, Prince: -1 } },
        { txt: "Analiso os pais. Julgo a falta de autoridade deles e entendo exatamente onde a criação falhou.", w: { Mage: 3, Seer: 2, Heir: -1, Sylph: -1 } }
    ]},
    { t: "Um amigo rico oferece pagar uma viagem de luxo para você, mas você sabe que ele vai jogar isso na sua cara depois.", opts: [
        { txt: "Aceito. Se ele quer pagar de superior, problema dele. Vou aproveitar o luxo e curtir a viagem sem gastar um centavo.", w: { Thief: 3, Witch: 1, Knight: -2, Prince: -2 } },
        { txt: "Recuso. Prefiro pagar minha própria viagem barata do que ficar em dívida ou sob o domínio financeiro de alguém.", w: { Knight: 3, Prince: 2, Thief: -3, Heir: -2 } },
        { txt: "Convenço-o a convidar mais pessoas, diluindo a atenção dele e transformando a viagem em um evento de grupo.", w: { Rogue: 3, Sylph: 1, Page: 1, Witch: -1 } },
        { txt: "Aceito, mas faço questão de 'pagar' de volta com favores e organização, servindo para equilibrar a balança.", w: { Maid: 3, Page: 2, Seer: 1, Thief: -2 } },
        { txt: "Aceito e nem ligo quando ele jogar na cara. Ele pagou porque quis, eu fui porque me chamaram. Não devo nada emocionalmente.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } }
    ]},
    { t: "Você está jogando um jogo competitivo e percebe que seu oponente é muito mais fraco e novato que você.", opts: [
        { txt: "Ganho rápido e sem enrolação. Não vejo graça em fingir que sou ruim. O jogo é para ganhar, e eu vou ganhar.", w: { Prince: 3, Thief: 2, Sylph: -3, Page: -2 } },
        { txt: "Pego leve, permitindo que ele jogue e se divirta, talvez até deixo ele ganhar uma rodada para encorajar.", w: { Sylph: 3, Rogue: 2, Heir: 1, Prince: -3 } },
        { txt: "Ensino as mecânicas enquanto jogamos, parando a partida para explicar o que ele fez de errado. Torno-me um tutor.", w: { Seer: 3, Mage: 2, Knight: -1, Witch: -1 } },
        { txt: "Começo a jogar de qualquer jeito, testando coisas aleatórias. Se eu perder por brincadeira, não importa, o jogo já estava chato mesmo.", w: { Bard: 3, Heir: 1, Mage: 1, Prince: -2 } },
        { txt: "Brinco com ele, criando situações absurdas no jogo apenas para ver como ele reage, testando os limites do sistema.", w: { Witch: 3, Bard: 1, Mage: 1, Knight: -2 } }
    ]},
    { t: "Você e seus amigos vão dividir uma pizza. Chega o último pedaço, o mais recheado. Todos estão olhando, ninguém pega.", opts: [
        { txt: "Eu pego e como. Se ninguém pegou até agora, é porque não queriam tanto assim. Não vou passar vontade.", w: { Thief: 3, Witch: 2, Page: -1, Rogue: -3 } },
        { txt: "Ofereço o pedaço para o amigo que comeu menos ou que parece mais faminto. Sinto prazer em ver o outro satisfeito.", w: { Rogue: 3, Sylph: 2, Maid: 1, Thief: -3 } },
        { txt: "Divido o pedaço milimetricamente em partes iguais para todos. A distribuição justa é a única forma de evitar conflito.", w: { Seer: 3, Mage: 2, Knight: 1, Bard: -2 } },
        { txt: "Deixo o pedaço esfriar e sobrar. Prefiro o desperdício a ter que lidar com a disputa social por comida.", w: { Prince: 3, Heir: -1, Witch: -2 } },
        { txt: "Eu espero alguém pegar. Se o pedaço apodrecer lá, apodreceu. Não vou ser o primeiro nem o último a tocar.", w: { Bard: 3, Heir: 2, Page: 1, Prince: -1 } }
    ]},
    { t: "Você está com uma dor de cabeça chata, mas não insuportável. Como lida com a medicação?", opts: [
        { txt: "Tomo o remédio na hora. Não tenho paciência para sentir dor se existe uma solução fácil. Quero estar 100% de novo.", w: { Witch: 3, Thief: 2, Prince: -1, Bard: -1 } },
        { txt: "Evito tomar. Acredito que o corpo deve se curar sozinho ou que o remédio é uma muleta desnecessária.", w: { Prince: 3, Seer: 2, Mage: 1, Sylph: -2 } },
        { txt: "Reclamo da dor para alguém, esperando que a pessoa cuide de mim ou me traga um copo d'água e o remédio.", w: { Page: 3, Thief: -1, Maid: -3 } },
        { txt: "Tomo qualquer coisa que tiver na gaveta sem nem ler o rótulo direito. Se passar, passou; se não, paciência.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -3 } },
        { txt: "Ignoro a dor e continuo fazendo minhas tarefas. Uso a dor como um lembrete de que estou vivo e ocupado.", w: { Knight: 3, Maid: 2, Bard: -2, Heir: -2 } }
    ]},
    { t: "Você acorda com uma energia e disposição incomuns, sentindo-se invencível. O que faz com esse dia?", opts: [
        { txt: "Inicio três projetos novos, limpo a casa e corro uma maratona. Gasto essa energia criando, pois desperdício é pecado.", w: { Maid: 3, Knight: 2, Sylph: 1, Bard: -2 } },
        { txt: "Foco em mim. Uso essa energia para resolver meus problemas pendentes e conseguir o que eu quero das pessoas.", w: { Thief: 3, Witch: 2, Prince: -1, Page: -1 } },
        { txt: "Apenas 'sou'. Deixo o dia me levar, flutuando através dos eventos com a certeza absoluta de que nada pode me atingir.", w: { Heir: 3, Mage: -1, Knight: -2 } },
        { txt: "Fico desconfiado. Esse excesso de energia não é normal; tento entender o que causou isso antes de agir impulsivamente.", w: { Mage: 3, Seer: 2, Heir: -2, Thief: -1 } },
        { txt: "Eu gasto tudo em diversão inútil. Saio, bebo, gasto dinheiro. Se a vida me deu energia extra, é para eu queimar como quiser.", w: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } }
    ]}
    ],
   "Blood": [
    { t: "Um grupo social ou comunidade que você adora está morrendo lentamente. O silêncio é constrangedor. O que você faz?", opts: [
        { txt: "Tento reviver o clima incansavelmente. Mando mensagens, puxo assuntos e marco eventos, recusando-me a deixar o vínculo morrer por inanição.", w: { Sylph: 3, Maid: 2, Heir: 1, Prince: -3 } },
        { txt: "Identifico quem ainda vale a pena e crio um grupo paralelo só com os meus favoritos. O barco está afundando, mas eu salvo a tripulação que importa.", w: { Thief: 3, Witch: 2, Mage: 1, Sylph: -2 } },
        { txt: "Chamo a responsabilidade e confronto o pessoal. Ou a gente se compromete a manter isso vivo, ou admite que acabou de uma vez.", w: { Knight: 3, Page: 1, Bard: -2 } },
        { txt: "Oficializo o fim. Saio do grupo avisando o motivo ou excluo o servidor. Prefiro dar um tiro de misericórdia e acabar com a agonia do que ver a decadência.", w: { Prince: 3, Time: 1, Doom: 1, Maid: -3 } },
        { txt: "Simplesmente paro de responder. Deixo o grupo descer no meu histórico e cair no esquecimento. Se ninguém mais fala, não serei eu a impedir o silêncio.", w: { Bard: 3, Rogue: 2, Void: 1, Knight: -2 } }
    ]},
    { t: "Você é convidado para um evento de família importante, mas está exausto e odeia o ambiente. Qual sua escolha?", opts: [
        { txt: "Vou e coloco o meu melhor sorriso. Minha presença é um dever cívico para manter a harmonia da estrutura familiar.", w: { Maid: 3, Heir: 2, Knight: 1, Prince: -3 } },
        { txt: "Recuso o convite categoricamente. Se eu não for relevante lá ou se o ambiente me faz mal, não há motivo para me desgastar.", w: { Prince: 3, Thief: 2, Witch: 1, Rogue: -1 } },
        { txt: "Digo que vou, mas 'esqueço' ou durmo na hora. Deixo a expectativa morrer sozinha sem eu ter que lidar com o confronto.", w: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
        { txt: "Vou, mas passo o tempo todo observando as tensões entre os parentes, extraindo informações úteis.", w: { Seer: 3, Mage: 1, Sylph: -2 } },
        { txt: "Vou apenas para prestar apoio a alguém específico, agindo como um amortecedor emocional para essa pessoa.", w: { Rogue: 3, Page: 2, Sylph: 1, Witch: -1 } }
    ]},
    { t: "Um amigo insubstituível faleceu. O funeral passou e agora resta apenas o silêncio. Como você lida com o buraco na sua estrutura?", opts: [
        { txt: "Me torno o 'guardião oficial' da memória dele. Corrijo quem fala errado e guardo seus pertences como sagrados.", w: { Knight: 3, Thief: 2, Maid: 2, Sylph: 1, Bard: -2 } },
        { txt: "Pego-me usando as gírias e hábitos dele. É como se eu permitisse que ele continuasse vivendo através das minhas ações.", w: { Heir: 3, Rogue: 2, Witch: 1 } },
        { txt: "Preciso bloquear as memórias e evitar lugares que me lembrem dele. O vínculo dói demais, então eu o corto.", w: { Prince: 3, Mage: 2, Seer: 1 } },
        { txt: "Deixo a memória desbotar. Não luto para lembrar nem para esquecer. Se o vínculo se desfizer com o tempo, é natural.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "Tento preencher o vazio dedicando-me a terminar o que ele começou, honrando o legado dele pelo esforço.", w: { Page: 3, Maid: 2, Seer: 1 } }
    ]},
    { t: "Você sente uma desconexão física e emocional com as pessoas. Parece que todos têm um 'manual de instruções' que você nunca recebeu.", opts: [
        { txt: "Eu estudo as interações obsessivamente. Analiso padrões sociais para entender a mecânica que parece natural para os outros.", w: { Mage: 3, Seer: 2, Thief: 2 } },
        { txt: "Eu crio uma 'persona' social para lidar com os outros. Atuo conforme parece correto para que não notem que não sei como agir.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "Eu paro de tentar. Se não me conecto, fico na minha. Deixo as relações acontecerem ou morrerem sem interferir.", w: { Bard: 3, Rogue: 2, Heir: 1, Maid: -2 } },
        { txt: "Eu aceito minha posição de 'outsider' e deixo que as pessoas venham até mim nos meus termos.", w: { Heir: 3, Rogue: 2, Mage: 1 } },
        { txt: "Eu tento me tornar indispensável através de favores práticos. Se não conecto emocionalmente, conecto pela utilidade.", w: { Maid: 3, Sylph: 2, Knight: 1 } }
    ]},
    { t: "Sua amizade mais antiga e profunda está acabando. Houve uma briga feia e o silêncio agora é ensurdecedor. Como você reage a esse rompimento?", opts: [
        { txt: "Não aceito o fim. Sinto uma mistura de fúria e pânico; essa pessoa é 'minha' e eu vou fazer o impossível para trazê-la de volta, nem que seja na marra.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "Queimo a ponte. Se acabou, que acabe de vez. Deleto tudo que diz respeito a ela e bloqueio o contato para seguir em frente.", w: { Prince: 3, Time: 2, Sylph: -3 } },
        { txt: "Entro em desespero para consertar. Peço desculpas, prometo mudar e tento 'curar' a ferida a qualquer custo. Não sei quem sou sem essa pessoa.", w: { Sylph: 3, Maid: 2, Heir: 2, Prince: -2 } },
        { txt: "Finjo que estou bem e racionalizo que 'pessoas vêm e vão', escondendo o quanto isso me afetou.", w: { Knight: 3, Page: -1 } },
        { txt: "Aceito a derrota e me isolo. Sinto que falhei com a pessoa e que ela estará melhor sem a minha bagunça, então permito que ela vá.", w: { Page: 3, Rogue: 2, Thief: -3 } }
    ]},
    { t: "Dois amigos seus terminam um namoro de forma catastrófica. Ambos exigem que você escolha um lado.", opts: [
        { txt: "Recuso-me a escolher. Tento manter a ponte entre os dois, atuando como mediador, mesmo que ambos fiquem com raiva.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
        { txt: "Escolho o lado com quem tenho mais afinidade e corto o outro sem piedade. Lealdade é sobre escolha.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -3 } },
        { txt: "Continuo falando com os dois e finjo que nada aconteceu. Ignoro o drama e deixo que lidem com minha neutralidade caótica.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "Saio de perto dos dois. A instabilidade emocional deles é contagiosa e prefiro quebrar o vínculo com ambos.", w: { Prince: 3, Mage: 1, Maid: -2 } },
        { txt: "Absorvo as reclamações de ambos, servindo de lixeira emocional para os dois lados, sem nunca dar minha opinião.", w: { Rogue: 3, Page: 2, Maid: 1, Thief: -2 } }
    ]},
    { t: "Você está sobrecarregado, mas um grupo que depende de você exige um sacrifício pessoal de tempo e saúde.", opts: [
        { txt: "Eu aceito, mas cobro caro depois. Ninguém pode questionar minha autoridade ou me negar favores após esse sacrifício.", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -3 } },
        { txt: "Digo não. Se eles não conseguem sobreviver sem me drenar, o problema é deles. Corto essa dependência.", w: { Prince: 3, Thief: 1, Maid: -3 } },
        { txt: "Digo que vou ajudar, mas procrastino ou faço de qualquer jeito. Minha inércia acaba forçando-os a se virarem.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "Eu ignoro meu cansaço e faço o que precisa ser feito. Se eu falhar, o sistema para, e isso é inadmissível.", w: { Maid: 3, Knight: 2, Sylph: 1, Prince: -3 } },
        { txt: "Eu aceito o fardo, mas tento delegar partes dele para outros, redistribuindo o peso.", w: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } }
    ]},
    { t: "Você precisa usar um uniforme ridículo para o trabalho ou escola. Todos usam, mas você se sente humilhado.", opts: [
        { txt: "Customizo o uniforme, alterando detalhes para recuperar minha identidade. Posso ser parte do grupo, mas nos meus termos.", w: { Witch: 3, Thief: 2, Knight: 1, Maid: -2 } },
        { txt: "Uso o uniforme com total dedicação. Ele é o símbolo do meu papel ali, e eu visto a camisa (literalmente).", w: { Maid: 3, Heir: 2, Page: 1, Prince: -3 } },
        { txt: "Recuso-me a usar. Prefiro ser punido ou demitido a me submeter a essa homogeneização forçada.", w: { Prince: 3, Mage: 1, Heir: -2 } },
        { txt: "Uso de qualquer jeito, todo amassado ou manchado. Deixo o símbolo da ordem se degradar no meu corpo.", w: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
        { txt: "Sinto-me apagado. O uniforme mata quem eu sou e me torna apenas mais um número na engrenagem.", w: { Rogue: 3, Mage: 2, Sylph: -1 } }
    ]},
    { t: "Você descobre que seus amigos mais próximos criaram um grupo de mensagens sem você para planejar algo.", opts: [
        { txt: "Sinto uma ansiedade paralisante. Fico obcecado em descobrir o que estão falando e como posso entrar.", w: { Page: 3, Thief: 2, Witch: 1, Rogue: -2 } },
        { txt: "Confronto o grupo com agressividade. Se a lealdade deles não é verdadeira, eu mesmo encerro esse vínculo.", w: { Prince: 3, Knight: 2, Sylph: -3, Maid: -2 } },
        { txt: "Nem ligo. Menos notificação no meu celular. Se não me chamaram, é menos obrigação social para mim.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -2 } },
        { txt: "Aceito a exclusão em silêncio, sentindo que talvez eu seja o peso morto que eles precisam deixar para trás.", w: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } },
        { txt: "Analiso friamente o comportamento deles. Se sentiram necessidade de me excluir, o grupo já falhou.", w: { Seer: 3, Mage: 2, Knight: -1 } }
    ]},
    { t: "O grupo em que você está inserido está sem rumo e prestes a se fragmentar por falta de liderança. Como você reage?", opts: [
        { txt: "Assumo o comando à força. Se ninguém lidera, eu lidero. Unifico o grupo sob minha visão para evitar o colapso.", w: { Thief: 3, Witch: 2, Prince: 1, Rogue: -3 } },
        { txt: "Eu me coloco à disposição para fazer o trabalho pesado. Quero que todos se sintam seguros através do meu serviço.", w: { Knight: 3, Page: 2, Maid: 1, Seer: -1 } },
        { txt: "Assisto de camarote. É divertido (e curioso) ver a estrutura social desmoronar sozinha quando ninguém segura as pontas.", w: { Bard: 3, Mage: 1, Rogue: 1, Sylph: -2 } },
        { txt: "Tento redistribuir as tarefas. Movo responsabilidades para quem está ocioso, buscando equilíbrio sem ser o 'chefe'.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -3 } },
        { txt: "Deixo que se fragmente. Se o grupo não consegue se manter unido, ele é fraco e eu corto meu vínculo com o fracasso.", w: { Prince: 3, Seer: 1, Maid: -3 } }
    ]}
    ],
    "Breath": [
   { t: "Sua rotina tornou-se extremamente repetitiva. Nada de novo acontece há meses e os dias parecem cópias uns dos outros. Como você reage?", opts: [
        { txt: "Quebro o padrão intencionalmente. Crio um problema ou mudo algo drástico só para ver as coisas acontecerem.", w: { Maid: 3, Witch: 3, Thief: 1, Page: -1 } },
        { txt: "Continuo cumprindo minhas obrigações, mas finjo estar bem enquanto o tédio me consome por dentro.", w: { Knight: 3, Prince: 2, Mage: 1, Heir: -2 } },
        { txt: "Não me importo. Simplesmente existo e deixo que o acaso decida quando a próxima mudança virá.", w: { Heir: 3, Rogue: 2, Sylph: 1, Knight: -2 } },
        { txt: "Começo a me afastar das pessoas e dos compromissos gradualmente, até me tornar inacessível.", w: { Bard: 3, Rogue: 1, Page: 1, Seer: -1 } },
        { txt: "Uso o tempo livre para traçar planos detalhados de como será minha vida quando eu finalmente decidir mudar.", w: { Seer: 3, Mage: 2, Sylph: 1, Bard: -2 } }
 ]},
 { t: "Uma instituição ou pessoa exige que você assine um termo de compromisso de 5 anos, com regras rígidas de conduta.", opts: [
        { txt: "Recuso imediatamente. A ideia de ter meu futuro pré-definido por terceiros é inaceitável para mim.", w: { Prince: 3, Thief: 2, Knight: 1, Sylph: -2 } },
        { txt: "Assino, mas ignoro as regras que não me convêm. Encontro maneiras de fazer o que quero sem ser pego.", w: { Witch: 3, Thief: 2, Mage: 1, Page: -1 } },
        { txt: "Evito dar uma resposta definitiva. Sumo ou mudo de assunto para não ter que lidar com o confronto ou com a obrigação.", w: { Rogue: 3, Bard: 2, Page: 1, Knight: -2 } },
        { txt: "Aceito, confiando que serei capaz de lidar com isso, mas acabo me arrependendo quando as restrições começam a pesar.", w: { Page: 3, Heir: 2, Sylph: 1, Seer: -3 } },
        { txt: "Aceito, mas reestruturo o acordo. Se vou ficar, farei com que as regras funcionem a meu favor e não contra mim.", w: { Maid: 3, Sylph: 2, Witch: 1, Bard: -2 } }
 ]},
 { t: "Você descobre um segredo sobre um amigo que muda a forma como ele é visto, mas não afeta a vida dele diretamente.", opts: [
        { txt: "Sigo em frente como se não soubesse. A vida é dele e não cabe a mim interferir nas escolhas alheias.", w: { Heir: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
        { txt: "Uso isso como justificativa para me afastar. Já não estava muito a fim de manter a proximidade mesmo.", w: { Bard: 3, Prince: 2, Thief: 1, Maid: -2 } },
        { txt: "Decido que a verdade deve ser dita. Exponho o fato para garantir que não existam segredos entre o grupo.", w: { Seer: 3, Mage: 2, Knight: 1, Rogue: -2 } },
        { txt: "Aproveito a informação para influenciar as decisões dele sutilmente, guiando-o para onde acho melhor.", w: { Witch: 3, Thief: 2, Maid: 1, Page: -1 } },
        { txt: "Fico ansioso com a informação, sem saber se devo contar ou não, paralisado pela indecisão.", w: { Page: 3, Knight: 2, Bard: -1, Heir: -3 } }
 ]},
 { t: "Você adota um novo hobby ou estilo visual e, pouco tempo depois, várias pessoas começam a copiar você.", opts: [
    { txt: "Odeio. Abandono o estilo imediatamente ou critico quem me copiou. Quero ser único, não um modelo.", w: { Prince: 3, Knight: 2, Mage: 1, Heir: -2 } },
    { txt: "Gosto da influência. Começo a ditar o que é 'legal' ou não, assumindo o controle da tendência.", w: { Thief: 3, Maid: 2, Witch: 1, Page: -2 } },
    { txt: "Tanto faz. Eu faço por mim; se eles querem fazer igual, isso não muda minha experiência.", w: { Heir: 3, Rogue: 2, Bard: 1, Knight: -2 } },
    { txt: "Sinto que devo dar o exemplo. Tento garantir que eles entendam a essência do que estão copiando.", w: { Seer: 3, Sylph: 2, Page: 1, Thief: -2 } },
    { txt: "Aproveito que agora sou 'comum' para me misturar e perder a atenção excessiva que tinha antes.", w: { Rogue: 3, Mage: 2, Bard: 1, Prince: -1 } }
 ]},
 { t: "Seu grupo precisa tomar uma decisão urgente, mas ninguém chega a um consenso e o tempo está acabando.", opts: [
    { txt: "Resolvo sozinho e faço do meu jeito. Melhor feito por mim do que estagnado por eles.", w: { Thief: 3, Mage: 2, Knight: 1, Sylph: -2 } },
    { txt: "Tomo a frente e aponto uma direção qualquer. O importante agora é sair do lugar, não importa para onde.", w: { Maid: 3, Witch: 2, Seer: 1, Bard: -2 } },
    { txt: "Largo mão. Se eles não se decidem, vou cuidar das minhas coisas e deixo o problema para lá.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
    { txt: "Tento facilitar a conversa para que cada um ceda um pouco e o bloqueio se desfaça naturalmente.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
    { txt: "Espero que alguém decida por mim. Sinto que minha opinião não vai mudar o impasse.", w: { Page: 3, Knight: 2, Bard: -1, Witch: -1 } }
 ]},
 { t: "Você está em um local desconhecido, sem GPS e sem referências claras de onde está a saída.", opts: [
    { txt: "Acho ótimo. Adoro a sensação de não saber o que vem a seguir e exploro sem pressa de chegar.", w: { Heir: 3, Seer: 1, Sylph: 1, Knight: -3 } },
    { txt: "Fico nervoso, mas mantenho uma postura confiante. Ando como se soubesse o caminho para ninguém perceber meu erro.", w: { Knight: 3, Page: 2, Prince: 1, Heir: -2 } },
    { txt: "Começo a interagir com o ambiente e as pessoas, usando qualquer recurso disponível para descobrir a rota.", w: { Witch: 3, Thief: 2, Mage: 1, Bard: -1 } },
    { txt: "Sento e aguardo. Eventualmente a situação vai se resolver ou alguém vai aparecer.", w: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } },
    { txt: "Observo padrões no trânsito e na arquitetura para deduzir logicamente onde a saída deve estar.", w: { Mage: 3, Seer: 2, Thief: 1, Heir: -1 } }
 ]},
 { t: "Surge uma oportunidade repentina de mudar de vida, mas ela não oferece nenhuma garantia de segurança ou estabilidade.", opts: [
    { txt: "Vou na hora. A empolgação da novidade vale mais que qualquer segurança.", w: { Page: 3, Heir: 3, Sylph: 1, Seer: -2 } },
    { txt: "Só aceito se eu puder ver exatamente quais são as consequências e para onde isso vai me levar.", w: { Seer: 3, Mage: 2, Knight: 1, Bard: -2 } },
    { txt: "Rejeito. Parece uma armadilha ou uma ilusão, e prefiro não arriscar o que já tenho.", w: { Prince: 3, Thief: 2, Witch: 1, Page: -2 } },
    { txt: "Aceito, planejado assumir o controle da situação assim que eu estiver lá dentro.", w: { Thief: 3, Witch: 2, Maid: 1, Heir: -1 } },
    { txt: "Hesito tanto pensando nos riscos que a oportunidade acaba passando.", w: { Knight: 3, Page: 2, Bard: 1, Maid: -1 } }
 ]},
 { t: "Você precisa se mudar para um lugar menor e é obrigado a se desfazer de grande parte dos seus pertences.", opts: [
    { txt: "Sinto alívio. Jogo tudo fora ou doo sem pensar duas vezes. Menos coisas, menos peso.", w: { Prince: 3, Bard: 2, Heir: 1, Maid: -2 } },
    { txt: "Passo meus itens para amigos próximos. Prefiro que fiquem com eles do que ter que carregar tudo comigo.", w: { Rogue: 3, Sylph: 2, Seer: 1, Thief: -2 } },
    { txt: "Tento dar um jeito de levar tudo, nem que fique entulhado. Minhas coisas são minha identidade.", w: { Maid: 3, Witch: 2, Knight: 1, Prince: -2 } },
    { txt: "Fico apenas com o estritamente funcional. Se não tem utilidade prática imediata, descarto.", w: { Mage: 3, Seer: 2, Thief: 1, Page: -1 } },
    { txt: "Sofro com o processo. Sinto como se estivesse perdendo partes de mim mesmo ao deixar cada objeto.", w: { Page: 3, Knight: 2, Heir: -1, Prince: -3 } }
 ]},
 { t: "O ambiente de trabalho ou estudo está com um clima hostil, cheio de conflitos passivo-agressivos.", opts: [
    { txt: "Vou embora. Invento uma desculpa ou simplesmente saio. Não sou obrigado a ficar ali.", w: { Rogue: 3, Bard: 2, Heir: 1, Knight: -2 } },
    { txt: "Tento quebrar o gelo com humor ou conversas leves, tentando restaurar a normalidade.", w: { Sylph: 3, Heir: 2, Page: 1, Prince: -1 } },
    { txt: "Confronto o problema diretamente para acabar com a tensão de uma vez por todas.", w: { Prince: 3, Knight: 2, Thief: 1, Sylph: -2 } },
    { txt: "Fico quieto e desconfortável, absorvendo a negatividade sem conseguir reagir.", w: { Page: 3, Knight: 2, Mage: 1, Witch: -1 } },
    { txt: "Manipulo a situação para desviar o foco dos conflitos para algo irrelevante, limpando meu caminho.", w: { Witch: 3, Thief: 2, Mage: 1, Seer: -1 } }
 ]},
 { t: "Você se encontra em uma situação onde não tem obrigações, ninguém te conhece e você não deve nada a ninguém.", opts: [
    { txt: "Sinto um vazio assustador. Sem uma função ou alguém para responder, não sei quem sou.", w: { Knight: 3, Page: 2, Mage: 1, Heir: -2 } },
    { txt: "Sinto paz. Aproveito o momento para viver sem roteiro, apenas experimentando o que vier.", w: { Heir: 3, Rogue: 2, Sylph: 1, Knight: -3 } },
    { txt: "Começo a construir algo novo. Já que não há regras, crio as minhas próprias do zero.", w: { Maid: 3, Witch: 2, Thief: 1, Bard: -2 } },
    { txt: "Fico entediado. Provavelmente vou causar alguma confusão só para ter com o que interagir.", w: { Bard: 3, Thief: 2, Prince: 1, Seer: -2 } },
    { txt: "Uso a distância para observar e compreender como o mundo funciona sem a minha interferência.", w: { Seer: 3, Mage: 2, Sylph: 1, Prince: -1 } }
]}
],
},

en: {
        
        ui: {
            title: "SBURBIO CLASSPECT TEST V1.0",
            intro1: "Hi! Glad you found this test. I'm streetCrush, popularly known as springus. You might not know me, but I hope you put some faith in the Sburbio project.",
            intro2: "First of all, let's talk about version 1.0 of this test. I will be constantly updating the questions and scoring based on community observations. Be warned that, since this is the first version of this test, you should expect some inaccuracies. We need to run some tests to find and correct wrong results.",
            intro3: "The questions and scoring are based on what I learned from texts by Dewdrop and Ouroborista, but I rely mainly on a collective of individual interpretations that I discussed with my friends, GeraFTC, Star, and Vozes de Anjos, who helped me craft this quiz. They are the other people who are part of the SBURBIO project.",
            intro4: "Now that we got that out of the way and you trust this test (well, i hope so), let's cut the chatter and find out a little about you.",
            btnStart: "Let's see.",
            
            btnNext: "Next",
            btnBack: "Back",
            btnSkip: "None of the above.",
            
            resultTitleAspect: "ASPECT:",
            transitionNormal: "Phase one complete. Now let's see how you interact with this aspect.",
            transitionDestruction: "Your connection with this aspect is... complicated. There seems to be conflict or active rejection here.",
            transitionForced: "The universe chose for you. Try not to waste this second chance.",
            btnContinue: "CONTINUE TO CLASSES.",
            
            finalTitle: "CLASSPECT ANALYSIS:",
            finalSubtitle: "Your Classpect analysis is complete.",
            labelAspect: "THE ASPECT:",
            labelClass: "THE CLASS:",
            exploreCombo: "Exploring combination:",
            exploreClasses: "EXPLORE CLASSES:",
            exploreAspects: "EXPLORE ASPECTS:",
            footerNote1: "Remember: This test won't be enough to define you. You have a direction now; I recommend reading up and drawing your own conclusions.",
            footerNote2: "Coming soon, we'll make a really cool classpect analysis site. Keep an eye out, yours might be one of the first to be released!",
            btnRestart: "RESTART SESSION."

            nullTitle: "SOMETHING IS WRONG HERE.",
            nullSubtitle: "NO CLASSPECT ASSIGNED.",
            nullText1: "You broke me. You mean you opened this test just to click 'None of the above' like, 30 times? C'mon.",
            nullText2: "Come on, let's try again. I know you want to know your real result.",
            btnRetry: "Try again."
        },

        aspectSynopses: {
        Time: "<strong>Time:</strong> You are goal-oriented and brutally efficient. The clock doesn't scare you; it plays your song. You understand that endings are necessary and that sacrifice is part of progress. You live in a state of chronic anxiety. You race against the clock not because you like it, but because you fear that if you stop for a second, everything will fall apart. Your impatience is the fear of mortality disguised as productivity.",
        Space: "<strong>Space:</strong> You see the big picture. Where others see the end, you see the beginning of something new. Creative, artistic, and fundamentally important, you are the stage where the universe happens. You feel isolated and disconnected. Your tendency to passively wait for the right moment or focus too much on physical creation is a way to avoid dealing with the fact that, often, you feel alone in a room full of people.",
        Void: "<strong>Void:</strong> You are the mystery, the unrealized potential, the secret. You operate in the shadows, comfortable with the unknown and capable of seeing what others ignore. You are the infinite blank canvas. You hide because you are afraid of being judged or perceived. It is safer to be nothing than to risk being something and failing. Your passivity and apathy are ways to avoid the pain of exposure.",
        Light: "<strong>Light:</strong> You want the truth, knowledge, and relevance. You illuminate the path, manipulate luck, and ensure nothing important goes unnoticed. You play to win, and usually do. You are terrified of irrelevance. You need to be the protagonist, you need to be right, and you need everyone to see it. Your quest for knowledge is often a desperate search for external validation and attention.",
        Mind: "<strong>Mind:</strong> Rational, adaptable, and fair. While others get lost trying to define who they are, you focus obsessively on which path to take. Problems exist to be solved, and your head doesn't rest until you reach a solution. You value logic over personal bias and resolution over emotional comfort. Be careful, though: your feelings are also capable of clouding your judgment.",
        Heart: "<strong>Heart:</strong> You understand people — and yourself — on an instinctive level. Authentic and passionate, you are guided by your feelings and identity, serving as the group's moral or emotional compass. You are obsessed with your own identity because, deep down, you feel fragmented. You feel everything with such intensity that sometimes it's hard to separate what you feel from what is real. Your authenticity might just be emotional stubbornness.",
        Rage: "<strong>Rage:</strong> You see the lies that sustain society and refuse to accept them. Your strength comes from refusal, defiance, and an aggressive pursuit of the raw truth, whatever the cost. You fear being deceived or controlled, so you preemptively reject everything. Your constant anger and cynicism are shields to keep from getting hurt. You close yourself off in a single truth (yours) and call it objectivity.",
        Hope: "<strong>Hope:</strong> You believe. And because you believe, it becomes real. Your optimism is a force of nature, capable of inspiring allies and shattering impossible odds through pure conviction. Your blind faith is a denial mechanism. You cling to 'how things should be' so you don't have to deal with 'how things are.' You prefer living in a beautiful fantasy to facing an ugly truth.",
        Doom: "<strong>Doom:</strong> You understand sacrifice and the inevitable rules of the universe. Empathetic and cautious, you know not everything has a happy ending, and you use this knowledge to mitigate disaster for others. You are fatalistic. Often, you give up before even trying because you already know how it will end. You use cynicism and pessimism as armor to avoid disappointment, suffocating your own hope in the crib.",
        Life: "<strong>Life:</strong> You are pure energy, growth, and healing. You believe rules exist to be broken in the name of survival and luxury. Where there is a desert, you grow a forest. You have a deep fear of being insignificant or losing your autonomy. Your need to make things happen and to help can turn into dominance. You trample over others' desires because you think you know what is best for their survival.",
        Blood: "<strong>Blood:</strong> You are the glue that holds everyone together. To you, loyalty, promises, and bonds are stronger than physics. You are a natural leader or a devoted companion who finds strength in unity. You define your worth entirely by what you can do for others or who you are connected to. You are terrified of being alone or useless, which can lead you into codependent relationships or to carry the weight of the world on your back without complaining.",
        Breath: "<strong>Breath:</strong> You are the wind that cannot be contained. Detached, flexible, and independent, you float above problems and bring movement where there is stagnation. You are the very definition of freedom. Your freedom is, often, just escapism. You are terrified of tethers and responsibilities, so you drift away (physically or emotionally) as soon as things get serious or hard. You confuse indifference with enlightenment."
        },
        classSynopses: {
        Prince: "<strong>Prince:</strong> You are the unstoppable force. You don't deal in nuances; you eliminate the problem at the root. By destroying your Aspect (or destroying with it), you clear the way for the new, acting with almost surgical precision. You often act as the opposite of your Aspect because you are too busy trying to annihilate it within yourself. Your perfectionism is destructive, and you run the risk of reigning over a pile of ashes if you aren't careful.",
        Bard: "<strong>Bard:</strong> No one knows what to expect from you, and maybe neither do you. You allow destruction to happen passively, until the moment you decide to suddenly flip the table. You oscillate between total apathy and explosive catastrophe. Your unpredictable nature is a defense mechanism to avoid responsibilities, but your refusal to pick a side ends up being a choice in itself.",
        Thief: "<strong>Thief:</strong> What you want, you take. You have the agency and audacity to steal the Aspect for your own benefit. You are proactive, resourceful, and unapologetic about surviving. Your apparent selfishness hides a deep fear of deprivation. You steal because, deep down, you feel you have nothing of value of your own. You fill the internal void with the power you take from others.",
        Rogue: "<strong>Rogue:</strong> You steal, but not for yourself. You redistribute the Aspect, taking from where there is too much and putting it where there is too little. You are the group's equalizer, acting in the shadows to help friends. You struggle to accept credit or power for yourself. You give away the Aspect because you don't feel worthy of keeping it or capable of handling it. Your altruism is, ironically, a way to avoid direct conflict.",
        Knight: "<strong>Knight:</strong> You are the team's shield and the group's most efficient weapon. You exploit your Aspect with enviable technical skill, using it to protect your allies at any cost. All this competence and bravado is a mask — literally or metaphorically. You are terrified of not being good enough, so you work twice as hard. You fight to hide your own insecurities.",
        Page: "<strong>Page:</strong> Your journey starts rough. You seem to have less of your Aspect than anyone else. But if you survive the stumbles and the initial humiliation, your growth ceiling is infinite. You are a long-term investment. Your challenge is to overcome your own lack and inferiority complex to become the powerhouse you are destined to be. Patience isn't a virtue; it's your vital necessity.",
        Maid: "<strong>Maid:</strong> At first you serve, but in the end, you are made of pure action. You tidy up the Aspect and create solutions where there was nothing. You are the one who ensures the job gets done, whatever the cost. You tend to start the story dependent on others' will. Your journey is to stop being a tool in others' hands and start serving your own interests, becoming the master of your destiny.",
        Sylph: "<strong>Sylph:</strong> You restore what is broken and heal what is wounded. You have an innate sense of how things (and people) should be and work tirelessly to fix them. Your willingness to help can border on interference. You think you know what is best for everyone, often ignoring whether they want to be healed or not. Your challenge is understanding that not everything needs your magic touch.",
        Witch: "<strong>Witch:</strong> Energetic, confident, and often dangerous. You don't just use the Aspect; you bend, twist, and manipulate it to serve your whims. The laws of physics and magic are mere suggestions to you. You display absolute control over your powers to compensate for the feeling that you have no control over your own life or destiny. Your rebellion is a cry for autonomy.",
        Heir: "<strong>Heir:</strong> You are the one the universe seems to naturally favor. Where others fight to control the Aspect, you simply become it. Solutions tend to fall into your lap, and the wind blows in your favor. Your great strength is also your trap: you tend to be carried by the current. Your challenge is to stop being a passenger in your own legend and take the wheel, before your passivity makes you irrelevant.",
        Mage: "<strong>Mage:</strong> You understand your Aspect because you lived the worst side of it. No one needs to explain to you how the world works; you have the scars to prove you already know. You are the solitary expert who has seen the naked, raw truth. Your knowledge comes from direct, usually painful, experience. You tend to isolate yourself because you think no one else could understand the weight of what you know. And often, you are right.",
        Seer: "<strong>Seer:</strong> You see the golden path. While others fumble in the dark, you have the map, the compass, and the instruction manual. You don't fight on the front lines; you tell others where to strike to win. Knowledge is a heavy burden. You suffer the responsibility of knowing the outcome of every bad decision your friends make. Your challenge is to act on the information you have, rather than paralyzing yourself analyzing it."
        },
        classpectDescriptions: {
       "Maid:Hope": `
        <h3>MAID OF HOPE</h3>
        <p><strong>One Who Creates Hope / Made of Hope.</strong></p>
        <p>You are the embodiment of the phrase "if I don't do it, nobody will." Your relationship with Hope is one of manual maintenance. You probably feel that if you stop smiling or motivating the people around you for even a second, the whole group will collapse into depression.</p>
        <p>This isn't pure altruism; it's a need to be needed. You "create" optimism and opportunities where none exist because you are terrified of being idle and facing the void. The danger is becoming a martyr to your own positivity, carrying everyone's emotional weight until you break, or refusing to accept help because "no one else knows how to do it right."</p>
    `,
    "Knight:Hope": `
        <h3>KNIGHT OF HOPE</h3>
        <p><strong>One Who Exploits Hope / Protects Hope.</strong></p>
        <p>The Knight wears a mask, and your mask is invincibility. You project an aura of unshakable confidence, a magnetic charisma that convinces anyone that "everything will be alright." You use faith and conviction as a blunt weapon to solve problems.</p>
        <p>But psychologically, this is compensation. You are likely terrified of being insufficient or that things *won't* work out. So, you perform Hope. You act with such certainty that reality is forced to bend, not by magic, but because you refuse to admit defeat in front of others.</p>
    `,
    "Thief:Hope": `
        <h3>THIEF OF HOPE</h3>
        <p><strong>One Who Steals Hope (for themselves).</strong></p>
        <p>The world is a scarce place and you decided that if anyone is going to succeed, it will be you. You tend to monopolize validation and optimism. When someone has an idea or a dream, you instinctively point out the flaws or take credit for it, draining others' motivation to inflate your own.</p>
        <p>This sounds cruel, but it's a survival mechanism. You steal others' conviction because you can't generate it internally. You need others to be down so you can feel in control of destiny. Your challenge is learning that others' light doesn't dim yours.</p>
    `,
    "Mage:Hope": `
        <h3>MAGE OF HOPE</h3>
        <p><strong>One Who Knows Hope (through suffering) / Guided by Hope.</strong></p>
        <p>You are not an optimist; you are an expert in disappointment. Mages understand their aspect through painful experience. You probably believed in something or someone with all your might and were brutally betrayed or disappointed.</p>
        <p>Now, you know the mechanics of faith better than anyone. You can tell a lost cause from a real chance. You are the cynic who, deep down, knows exactly where the miracle is hiding but complains the whole way there. Your "magic" is the practical experience of someone who has face-planted and survived.</p>
    `,
    "Witch:Hope": `
        <h3>WITCH OF HOPE</h3>
        <p><strong>One Who Manipulates Hope.</strong></p>
        <p>Your conviction is a force of nature, but it is completely volatile. You have the ability to change the moral "weather" of a room instantly. If you are happy, everyone believes they can fly; if you are sad, the world has ended.</p>
        <p>You manipulate truth and belief — sometimes gaslighting, sometimes inspiring — to break the rules that bind you. You reject factual reality if it doesn't please you and impose your own narrative with such intensity that others end up agreeing just to avoid being bulldozed by your energy.</p>
    `,
    "Prince:Hope": `
        <h3>PRINCE OF HOPE</h3>
        <p><strong>One Who Destroys Hope / Destroys with Hope.</strong></p>
        <p>You are the militant skeptic. To you, "hope" is synonymous with illusion, lies, and weakness. You pride yourself on being logical, realistic, and destroying your friends' silly fantasies "for their own good." You nip the problem in the bud before disappointment happens.</p>
        <p>However, the Prince's irony is that they act like the ghost of the opposite aspect (Rage). By destroying others' faith, you display a stubbornness and belief in your own "truth" that is as irrational as the faith you criticize. You destroy possibilities, closing paths because you are afraid to walk them.</p>
    `,
    "Sylph:Hope": `
        <h3>SYLPH OF HOPE</h3>
        <p><strong>One Who Heals Hope / Fixes Hope.</strong></p>
        <p>You are the benevolent "meddler." You can't stand seeing people sad, aimless, or skeptical. You feel an almost maternal compulsion to "fix" others' beliefs, offering unsolicited advice, positive perspectives, and spiritual solutions.</p>
        <p>The dark side of this is the refusal to let people feel necessary pain. You try to heal what isn't broken or force toxic positivity because others' hopelessness bothers you personally. You want everyone to believe, as long as they believe in *your* way.</p>
    `,
    "Page:Hope": `
        <h3>PAGE OF HOPE</h3>
        <p><strong>One Who Serves Hope / Is Served by Hope.</strong></p>
        <p>Your journey is the longest. Initially, you seem to have a deficit of conviction. You are impressionable, naive, maybe even a bit "silly," desperately seeking someone or something to believe in because you don't trust yourself.</p>
        <p>Your "Response" is the search for external validation. But the Page's potential is overflow: if you survive the phase of being a doormat, you develop a faith so absurd and unshakable that you become the group's moral pillar. The challenge is to stop waiting for the hero to appear and realize the narrative is yours.</p>
    `,
    "Rogue:Hope": `
        <h3>ROGUE OF HOPE</h3>
        <p><strong>One Who Steals Hope (to redistribute).</strong></p>
        <p>You are the friend who gives up their own happiness to see others smile. Unlike the Thief, you take Hope (optimism, chance, opportunity) and pass it on. You convince yourself that you don't need it, or that you don't deserve it.</p>
        <p>You "steal" the chance of success from yourself to give to an ally. It is noble behavior, but self-destructive. You deal with the pressure of reality by fleeing it and focusing on others' problems. At the end of the day, you are the group therapist who cries alone in the shower.</p>
    `,
    "Seer:Hope": `
        <h3>SEER OF HOPE</h3>
        <p><strong>One Who Sees Hope / Guides by Hope.</strong></p>
        <p>You don't follow blindly; you understand the mechanics of faith. You look at a sea of possibilities and can tell which is a fantasy and which is a viable path. You are the strategist of optimism.</p>
        <p>While others oscillate between euphoria and despair, you keep a cool head, analyzing what is morally right and what is worth pursuing. Your flaw can be paralysis: seeing so many possibilities and ethical consequences that you delay acting, or get frustrated with the blindness of those who don't see the obvious path you've charted.</p>
    `,
    "Heir:Hope": `
        <h3>HEIR OF HOPE</h3>
        <p><strong>One Who Inherits Hope / Protected by Hope.</strong></p>
        <p>Things just seem to "work out" for you. You have a natural buoyancy; serious problems slide off you like water. You tend to let yourself be carried by the current, trusting the universe will provide — and, annoyingly for others, it usually does.</p>
        <p>Your passivity is your defense. You become Hope itself, embodying an optimism that can border on alienation. The danger is disconnecting so much from negative reality that you become incapable of dealing with real problems when luck finally runs out.</p>
    `,
    "Bard:Hope": `
        <h3>BARD OF HOPE</h3>
        <p><strong>One Who Invites Destruction of Hope.</strong></p>
        <p>You live in a tug-of-war between mocking nihilism and sudden fanaticism. Generally, you are the passive "buzzkill," the one who cracks a joke at a serious moment and dismantles group morale with cynicism, avoiding the responsibility of believing in something.</p>
        <p>But when cornered, your polarity flips. You abandon logic and bet everything on an impossible miracle, on a destructive faith that ignores facts and consequences. You are proof that blind hope is dangerous: either you have none, or you have so much it blows up in everyone's face.</p>
    `,

    // --- BLOOD ---
    "Maid:Blood": `
        <h3>MAID OF BLOOD</h3>
        <p><strong>One Who Creates Blood / Made of Blood.</strong></p>
        <p>You are the social "cement," but on an almost pathological level. Your response to loneliness is to become indispensable. You work tirelessly to keep the group together, organizing meetings, resolving fights, and ensuring no one is excluded.</p>
        <p>However, this stems from a deep fear of abandonment. You feel that if you stop trying for a minute, everyone will leave. You "create" bonds where they perhaps shouldn't exist, forcing connections and carrying the emotional weight of one-sided relationships, becoming a martyr to your own loyalty.</p>
    `,
    "Knight:Blood": `
        <h3>KNIGHT OF BLOOD</h3>
        <p><strong>One Who Exploits Blood / Protects Blood.</strong></p>
        <p>You perform leadership and camaraderie. Perhaps you are loud about loyalty, "brotherhood," and unity, using these connections as armor to hide your deep social insecurity. You fear being unworthy of love or belonging, so you compensate by being the most loyal and defensive friend possible.</p>
        <p>Your ability to "weaponize" your friends is literal: you know how to motivate people and use group dynamics to solve external problems. But be careful not to use your bonds as a crutch, forgetting to develop your own identity outside the collective.</p>
    `,
    "Thief:Blood": `
        <h3>THIEF OF BLOOD</h3>
        <p><strong>One Who Steals Blood (for themselves).</strong></p>
        <p>To you, attention and loyalty are finite resources, and you want the biggest slice. You tend to monopolize friends, create subtle intrigues to ensure so-and-so likes you more than what's-his-name, or demand constant proofs of loyalty.</p>
        <p>It is a defense mechanism of someone who feels empty inside. You steal others' validation to fill this hole. You can be charismatic, attracting followers, but your relationships tend to be parasitic: you feed on others' devotion without necessarily reciprocating in kind.</p>
    `,
    "Mage:Blood": `
        <h3>MAGE OF BLOOD</h3>
        <p><strong>One Who Knows Blood (through suffering) / Guided by Blood.</strong></p>
        <p>You understand relationships because you have suffered a lot because of them. You are the one who sees the invisible lines connecting people: who likes whom, who is cheating on whom, where the hidden tensions are. Your social intuition is sharpened by pain.</p>
        <p>Your "Reality" was likely betrayal or the weight of a responsibility you didn't ask for. Now, you navigate the social world with informed cynicism. You know every promise has a cost and blind loyalty is dangerous. You guide the group not by charisma, but by warning: "I know where this goes wrong."</p>
    `,
    "Witch:Blood": `
        <h3>WITCH OF BLOOD</h3>
        <p><strong>One Who Manipulates Blood.</strong></p>
        <p>You don't accept imposed social rules; you rewrite them. You have the gift (and the audacity) to mix groups that shouldn't mix, break relationship taboos, or isolate someone if you deem it necessary. To you, loyalty is modeling clay.</p>
        <p>Your response to the weight of obligations is to take control of them. You can be the person who unites mortal enemies or makes an entire family cut ties, depending on your mood and goal. The danger is treating people like dolls in your dollhouse, forgetting they have wills of their own.</p>
    `,
    "Prince:Blood": `
        <h3>PRINCE OF BLOOD</h3>
        <p><strong>One Who Destroys Blood / Destroys with Blood.</strong></p>
        <p>You are the breaker of chains. You look at traditions, family obligations, and blind loyalties and see only prisons. Your tendency is to distance yourself, cut ties, and encourage others to be independent (often bluntly). The "ghost" of the opposite aspect (Breath) is strong in you: you yearn for freedom.</p>
        <p>However, you can also "destroy using Blood": use peer pressure, ostracism, or collective guilt to crush someone. You are a master of burning bridges. The challenge is not ending up alone on a deserted island you built yourself.</p>
    `,
    "Sylph:Blood": `
        <h3>SYLPH OF BLOOD</h3>
        <p><strong>One Who Heals Blood / Fixes Blood.</strong></p>
        <p>You are the compulsive mediator. You can't stand seeing fights, misunderstandings, or "bad vibes." Your self-imposed mission is to ensure everyone gets along, often sweeping real problems under the rug in the name of harmony.</p>
        <p>This can become toxic when you try to "heal" relationships that should end, forcing people to forgive abuse or maintain failed bonds because "family is everything." You need to learn that not every bond deserves saving and conflict is sometimes healthy.</p>
    `,
    "Page:Blood": `
        <h3>PAGE OF BLOOD</h3>
        <p><strong>One Who Serves Blood / Is Served by Blood.</strong></p>
        <p>Your journey begins with difficulty connecting. You probably felt out of place, weird, or lonely for a long time, trying desperately to please to be accepted. You serve relationships, letting people walk over you just to not be alone.</p>
        <p>The Page's potential, however, is explosive. If you overcome this doormat phase, you have the capacity to inspire unshakable loyalty. You can unite the misfits and create an incredibly strong "found family," not by force, but because you understand the value of being accepted.</p>
    `,
    "Rogue:Blood": `
        <h3>ROGUE OF BLOOD</h3>
        <p><strong>One Who Steals Blood (to redistribute).</strong></p>
        <p>You are the social martyr. You give up your spot in the circle so someone else can enter. You take the connection and affection that would be directed at you and divert them to others, acting as a friendship cupid while keeping yourself on the sidelines.</p>
        <p>Your difficulty is accepting that you also deserve to belong. You deal with the complexity of relationships by fleeing them, focusing on others' problems so you don't have to deal with your own loneliness. You connect the world, but live disconnected.</p>
    `,
    "Seer:Blood": `
        <h3>SEER OF BLOOD</h3>
        <p><strong>One Who Sees Blood / Guides by Blood.</strong></p>
        <p>You don't need to be at the center of the party to understand the party. You observe. You understand hierarchies, power dynamics, who likes whom and why. You navigate the social world with a detailed mental map.</p>
        <p>Your function is to guide others through these murky waters: "don't talk to him today," "this alliance is dangerous," "they need to hear this." The risk is analysis paralysis or becoming a glorified gossip who knows everything about others' lives but doesn't live their own emotional connection, keeping a safe and intellectual distance.</p>
    `,
    "Heir:Blood": `
        <h3>HEIR OF BLOOD</h3>
        <p><strong>One Who Inherits Blood / Protected by Blood.</strong></p>
        <p>You have a natural magnetism you might not even understand. People just like you, protect you, and want to be close. You "inherit" friends and connections without needing to put in the manual effort of the Maid.</p>
        <p>Your response to reality is letting yourself be carried by this current of affection. The danger is complacency: you might find yourself surrounded by people who decide your life for you, or become dependent on this collective protection, incapable of being alone or making unpopular decisions.</p>
    `,
    "Bard:Blood": `
        <h3>BARD OF BLOOD</h3>
        <p><strong>One Who Invites Destruction of Blood.</strong></p>
        <p>Your relationship with commitments is... complicated. You are the friend who disappears. Who bails on plans. Who doesn't answer texts. Passively, your negligence or "free" nature causes the bonds around you to rot and unravel. You invite isolation.</p>
        <p>But in active destructive mode, a Bard of Blood is terrifying. You can attract a toxic element to the group that destroys it from within, or generate a cult/mob mentality so intense and irrational that it destroys everyone's individuality. You oscillate between total hermit and leader of a chaotic riot.</p>
    `,

    // --- BREATH ---
    "Maid:Breath": `
        <h3>MAID OF BREATH</h3>
        <p><strong>One Who Creates Breath / Made of Breath.</strong></p>
        <p>You work hard to appear carefree. Your freedom isn't natural; it's a laborious construct. You likely learned early on that depending on others is dangerous, so you "create" your own independence, solving everything alone and refusing help.</p>
        <p>Your flaw is confusing self-sufficiency with isolation. You become "made of wind": unreachable, untouchable, always too busy or too distant to set roots. You run so you don't have to stop and realize there is no one waiting for you at the finish line.</p>
    `,
    "Knight:Breath": `
        <h3>KNIGHT OF BREATH</h3>
        <p><strong>One Who Exploits Breath / Protects Breath.</strong></p>
        <p>You perform detachment. You are the "cool guy," the "chill one," the person who never lets anything get to them. You use this calculated indifference as a shield (and a weapon) to navigate social situations without getting hurt. If something goes wrong, you pretend you never cared anyway.</p>
        <p>But this wind armor is lonely. By protecting yourself against emotional impact and keeping everyone at a safe distance, you end up protecting your freedom at the cost of never having real connections. You are free, but your freedom is a cell.</p>
    `,
    "Thief:Breath": `
        <h3>THIEF OF BREATH</h3>
        <p><strong>One Who Steals Breath (for themselves).</strong></p>
        <p>You have a voracious need for space and spotlight, and you don't mind stepping on others to get it. In a group, you "suck the air" out of the room, monopolizing freedom of expression or decision-making.</p>
        <p>Your defense mechanism is selfish flight: when things get tough or obligations weigh down, you grab the only parachute and jump, leaving others to deal with the fall. You validate your existence by being the freest, the fastest, and the most unreachable, draining the autonomy of those around you to inflate yours.</p>
    `,
    "Mage:Breath": `
        <h3>MAGE OF BREATH</h3>
        <p><strong>One Who Knows Breath (through suffering) / Guided by Breath.</strong></p>
        <p>You know loneliness intimately. You were likely cast adrift or had to learn to fend for yourself very early. Your understanding of freedom isn't romantic; you know being free often means being forgotten.</p>
        <p>Now, you use this experience to navigate life. You know when a situation is a trap and exactly how to escape. You are the guide who says "don't get attached to this, it will drag you down." Your challenge is to stop seeing every human connection as a potential chain.</p>
    `,
    "Witch:Breath": `
        <h3>WITCH OF BREATH</h3>
        <p><strong>One Who Manipulates Breath.</strong></p>
        <p>You are rebellion incarnate. You don't just break rules; you twist the wind's direction. If someone says "go left," you go right out of pure spite. You manipulate freedom, both yours and others', often isolating people or freeing them against their will.</p>
        <p>Your personality is volatile and impossible to pin down. You change your mind, your group, and your passion in the blink of an eye. It's fun, but dangerous: you run the risk of living a life without consistency, where nothing is built because you knock it all down as soon as you get bored.</p>
    `,
    "Prince:Breath": `
        <h3>PRINCE OF BREATH</h3>
        <p><strong>One Who Destroys Breath / Destroys with Breath.</strong></p>
        <p>You are a walking paradox. As a Prince, you destroy your aspect. This can manifest as rigid authoritarianism: you hate aimlessness, hate indecision, and impose strict rules to suffocate the "mess" of others' freedom.</p>
        <p>Or, you destroy *with* Breath: you cut ties with shocking brutality. When you decide it's over, it's over. You burn bridges and disappear (ghosting), destroying relationships through absolute distancing. You eliminate nuances and alternative paths until only your inflexible truth remains.</p>
    `,
    "Sylph:Breath": `
        <h3>SYLPH OF BREATH</h3>
        <p><strong>One Who Heals Breath / Fixes Breath.</strong></p>
        <p>You are the person who says "calm down, breathe." You can't stand seeing people stressed, trapped, or overwhelmed. Your function in the group is to relieve tension, offer an escape route, or simply remind everyone the world won't end if they rest.</p>
        <p>The problem is you can become an enabler of procrastination or irresponsibility. By trying to "heal" others' lack of freedom, you might prevent them from facing the necessary consequences of their actions, keeping them in a bubble of comfort that hinders growth.</p>
    `,
    "Page:Breath": `
        <h3>PAGE OF BREATH</h3>
        <p><strong>One Who Serves Breath / Is Served by Breath.</strong></p>
        <p>Initially, you seem incapable of defending yourself or making your own decisions. You feel trapped, suffocated by others' expectations, daydreaming about a freedom that seems impossible. You serve others' narratives.</p>
        <p>But the Page's journey is accumulation. If you don't give up, this repressed desire explodes. You can become the embodiment of limitless freedom, someone who inspires crowds to rise up. The secret is to stop asking for permission to live your own life.</p>
    `,
    "Rogue:Breath": `
        <h3>ROGUE OF BREATH</h3>
        <p><strong>One Who Steals Breath (to redistribute).</strong></p>
        <p>You give up your own voice so others can speak. You take on boring and heavy responsibilities so your friends can be free and have fun. You "steal" freedom from yourself and hand it to the group on a silver platter.</p>
        <p>It's a noble attitude, but exhausting. You live vicariously through others' adventures while stuck in the rear holding down the fort. You need to understand that the martyr rarely has fun, and that you also have the right to drop everything and leave sometimes.</p>
    `,
    "Seer:Breath": `
        <h3>SEER OF BREATH</h3>
        <p><strong>One Who Sees Breath / Guides by Breath.</strong></p>
        <p>You see the flows. You know where things are going, which trends will catch on, and which paths are obstacle-free. You don't necessarily move, but you point the way: "the easiest path is that way."</p>
        <p>Your relationship with freedom is analytical. You understand others' motivation and autonomy better than they do themselves. The danger is focusing so much on analyzing every possible escape route that you never choose one, staying frozen at the crossroads while watching others pass by.</p>
    `,
    "Heir:Breath": `
        <h3>HEIR OF BREATH</h3>
        <p><strong>One Who Inherits Breath / Protected by Breath.</strong></p>
        <p>You are, annoyingly, the person who never gets in trouble. You live with your head in the clouds and, somehow, the ground always rises to catch your fall. You inherit freedom; obligations tend to slip off you.</p>
        <p>Your response to problems is simply floating away from them. You can seem oblivious or disconnected from reality, trusting the "wind" will take you where you need to go. The risk is waking up one day and realizing you never made a conscious decision in your life and the wind carried you into an abyss.</p>
    `,
    "Bard:Breath": `
        <h3>BARD OF BREATH</h3>
        <p><strong>One Who Invites Destruction of Breath.</strong></p>
        <p>You are unpredictable. Sometimes, you are the most rigid and stagnant person in the world, refusing to change (inviting the destruction *of* Breath/movement). You let things stop and rot out of pure apathy.</p>
        <p>Other times, you are the hurricane. You invite destruction *through* Breath: you cause chaos simply by leaving the scene at the crucial moment, or your carefree attitude passively dismantles important structures. You don't break the vase; you leave the window open during the storm and say "oops" when it falls.</p>
    `,
    // --- VOID ---
    "Maid:Void": `
        <h3>MAID OF VOID</h3>
        <p><strong>One Who Creates Void / Made of Void.</strong></p>
        <p>You are the person who fixes everything behind the scenes and is terrified of taking credit. Your efficiency depends on your invisibility. You "create" Void by cleaning up tracks, hiding mistakes, and keeping the machine running without anyone noticing the gears.</p>
        <p>Your "Response" to pressure is disappearing into work. You feel safe being a faceless tool, because if no one sees you, no one can judge you. The danger is becoming so efficient at being invisible that you end up erasing your own identity, becoming a ghost in your own life.</p>
    `,
    "Knight:Void": `
        <h3>KNIGHT OF VOID</h3>
        <p><strong>One Who Exploits Void / Protects Void.</strong></p>
        <p>You wear mystery like armor. You project an image of someone "hard to read," vague, or purposefully obscure. You use lack of information as a weapon: if no one knows who you really are or what you're planning, you are safe.</p>
        <p>But this "secret agent" or "mysterious lone wolf" persona is compensation. You fear being banal or vulnerable, so you hide your true intentions under layers of irony, omission, and secrets. You protect your empty core with an impenetrable barrier of "nothing."</p>
    `,
    "Thief:Void": `
        <h3>THIEF OF VOID</h3>
        <p><strong>One Who Steals Void (for themselves).</strong></p>
        <p>You are a hoarder of secrets. You want to know everything about everyone, but no one knows anything about you. You "steal" Void — obscurity, privacy — for yourself, becoming undetectable while exposing others.</p>
        <p>Your psychology is based on asymmetric control. You feel powerful when you are the only person in the room holding hidden cards. It is a paranoid defense mechanism: you delete your presence and monopolize the unknown to ensure you are never caught by surprise, leaving others vulnerable and exposed.</p>
    `,
    "Mage:Void": `
        <h3>MAGE OF VOID</h3>
        <p><strong>One Who Knows Void (through suffering) / Guided by Void.</strong></p>
        <p>You know the pain of irrelevance. You were likely excluded, forgotten, or treated like "nothing" by people important to you. You understand Void because you lived in its shadow.</p>
        <p>Now, this is your strength. You know how to look where no one is looking. You notice what was *not* said, what is missing, the secrets people try to hide. While everyone looks at the light, you analyze the darkness. You are the skeptic who knows the real truth is the one no one wants to admit.</p>
    `,
    "Witch:Void": `
        <h3>WITCH OF VOID</h3>
        <p><strong>One Who Manipulates Void.</strong></p>
        <p>To you, truth is optional. You manipulate ignorance and mystery masterfully. You are capable of making things (or people) disappear, or creating lies so convincing they fill the void of reality.</p>
        <p>Your "Response" is selective rewriting. If something in reality hurts you, you simply pretend it doesn't exist so hard that, for all intents and purposes, it ceases to exist. You confuse, mislead, and alter what is known. The danger is getting lost in your own web of secrets and forgetting what is real.</p>
    `,
    "Prince:Void": `
        <h3>PRINCE OF VOID</h3>
        <p><strong>One Who Destroys Void / Destroys with Void.</strong></p>
        <p>You hate secrets. You are the destroyer of ambiguity. If something is hidden, you rip the lid off. You can't stand the idea of "not knowing," so you destroy mystery with brutal logic or forced revelations.</p>
        <p>On the other hand, you can act as an aggressive nihilist ("destroy with Void"). You use the insignificance of things as a weapon to demotivate others. "Why try if nothing matters? Why care if we are stardust?" You erase the importance of things, destroying the importance of those things.</p>
    `,
    "Sylph:Void": `
        <h3>SYLPH OF VOID</h3>
        <p><strong>One Who Heals Void / Fixes Void.</strong></p>
        <p>You are the supreme confidant. People tell you their darkest secrets because they feel you will keep them (heal/maintain them). You help others hide, disappear when they need time, or validate their feeling of not belonging.</p>
        <p>However, you can be too passive in the face of ignorance. You prefer sweeping dirt under the rug to keep the peace, allowing toxic secrets to rot a relationship just so you don't have to deal with the ugly exposure of truth. You offer the comfort of denial.</p>
    `,
    "Page:Void": `
        <h3>PAGE OF VOID</h3>
        <p><strong>One Who Serves Void / Is Served by Void.</strong></p>
        <p>Your story begins with total invisibility. You are the extra in your own life, the one whose name no one remembers, who is always interrupted when speaking. You "serve" irrelevance, believing you have nothing to offer.</p>
        <p>But Void is infinite potential. If you persist, this obscurity becomes your greatest advantage. No one sees you coming. When you finally act, it is with the force of the unknown, pulling solutions and powers "out of nowhere." You stop being "nobody" to become the mystery no one can decipher or contain.</p>
    `,
    "Rogue:Void": `
        <h3>ROGUE OF VOID</h3>
        <p><strong>One Who Steals Void (to redistribute).</strong></p>
        <p>You steal obscurity. This can mean you bring hidden things to light (steal Void from an object/idea, making it visible) to help the group. You are the one who finds what was lost.</p>
        <p>Or, emotionally, you "steal" invisibility for yourself. You erase yourself so others can shine. You take on the role of "nobody" or silent scapegoat to protect a friend's reputation or visibility. You sacrifice yourself by becoming forgettable.</p>
    `,
    "Seer:Void": `
        <h3>SEER OF VOID</h3>
        <p><strong>One Who Sees Void / Guides by Void.</strong></p>
        <p>You don't need to see to believe. You navigate the dark with total confidence. While others panic at the lack of information or clear plans, you feel at home in uncertainty.</p>
        <p>You see potential: what *could* be, but isn't yet. You guide the group through the unknown, interpreting silence and secrets. The risk is becoming so fascinated by what is hidden and theoretical that you disconnect from the tangible and obvious reality right in front of you.</p>
    `,
    "Heir:Void": `
        <h3>HEIR OF VOID</h3>
        <p><strong>One Who Inherits Void / Protected by Void.</strong></p>
        <p>You have an annoying ability to not be there when blame is distributed. You "inherit" forgetfulness. People forget you were involved, forget your responsibilities, or simply don't notice your presence.</p>
        <p>You float through life protected by irrelevance. It is comfortable, but dangerous. You might end up living a life without impact, shielded from negative consequences, but also isolated from real connections because, deep down, no one feels they truly know you. You are a mystery even to yourself.</p>
    `,
    "Bard:Void": `
        <h3>BARD OF VOID</h3>
        <p><strong>One Who Invites Destruction of Void.</strong></p>
        <p>You are a walking information leak. Passively, your presence causes secrets to surface, hidden plans to fail, and everyone's privacy to be violated. You can't keep a secret, or your negligence makes the truth explode.</p>
        <p>Or, in the opposite mode, you invite destruction *through* Void: you let apathy, ignorance, and "whatever" take over until everything collapses. You watch the world burn not because you want to see it burn, but because you simply didn't care enough to do something about it. Passive nihilism is your weapon.</p>
    `,

    // --- LIGHT ---
    "Maid:Light": `
        <h3>MAID OF LIGHT</h3>
        <p><strong>One Who Creates Light / Made of Light.</strong></p>
        <p>You don't wait for luck; you manufacture your own. You are the person who studies three times harder than everyone else just to feel safe. Your relationship with Light is one of manual labor: you seek information, courses, and validation incessantly.</p>
        <p>Psychologically, this comes from a fear of being considered a fraud or irrelevant. You "create" your importance by becoming the person who has all the answers. The danger is burnout from trying to maintain an image of absolute competence, refusing to admit when you don't know something.</p>
    `,
    "Knight:Light": `
        <h3>KNIGHT OF LIGHT</h3>
        <p><strong>One Who Exploits Light / Protects Light.</strong></p>
        <p>You use intellect and information as a defensive weapon. You are the master of debates, the one who cites data and facts to disarm opponents. You project an aura of sharp intelligence and unshakable luck.</p>
        <p>But inside, the Knight compensates for an insecurity. You are terrified of being wrong or stupid. The "know-it-all" or "successful person" mask serves to protect a fragile self-esteem. You exploit the truth to win, not necessarily to understand.</p>
    `,
    "Thief:Light": `
        <h3>THIEF OF LIGHT</h3>
        <p><strong>One Who Steals Light (for themselves).</strong></p>
        <p>You need to be the center of attention. Not out of futile vanity, but existential necessity: if the spotlight isn't on you, you feel you cease to exist. You tend to monopolize conversations, steal credit, or ensure your version of the story is the only one heard.</p>
        <p>Your skill is "stealing luck" and relevance. You know how to insert yourself into advantageous situations and come out on top, often leaving others in the shadow. It is a survival strategy for someone terrified of irrelevance. The challenge is understanding that others' shine doesn't extinguish yours.</p>
    `,
    "Mage:Light": `
        <h3>MAGE OF LIGHT</h3>
        <p><strong>One Who Knows Light (through suffering) / Guided by Light.</strong></p>
        <p>You saw the truth, and it wasn't pretty. Mages of Light suffer from an excess of clarity. You are the person who understands raw reality, without the optimism filters others use. You see the flaws in plans and the lies in people.</p>
        <p>This makes you a cynic or a prophet of doom. You are guided by knowledge that isolates you, because no one likes the person who points out the obvious problems everyone is trying to ignore. Your lesson is learning to communicate your vision without seeming like just an arrogant pessimist.</p>
    `,
    "Witch:Light": `
        <h3>WITCH OF LIGHT</h3>
        <p><strong>One Who Manipulates Light.</strong></p>
        <p>To you, truth is flexible. You have a scary talent for *framing*. You can take a fact and present it in a way that completely changes its meaning. You manipulate what is "important" and what is "irrelevant."</p>
        <p>You edit the social reality around you. You can make a failure look like a strategic success, or convince a group that a stupid idea is genius. It is immense persuasive power, but dangerous: you run the risk of believing your own propaganda and losing touch with actual facts.</p>
    `,
    "Prince:Light": `
        <h3>PRINCE OF LIGHT</h3>
        <p><strong>One Who Destroys Light / Destroys with Light.</strong></p>
        <p>You are the censor or the destructive critic. As a destroyer of Light, you might be someone who hides information, lies, or creates obscurity to protect your interests (acting like a Void player). You erase the truth that is inconvenient.</p>
        <p>Or, you destroy *with* Light: you use truth as a sledgehammer. You expose people's secrets, point out humiliating flaws, and use "brutal honesty" to shatter others' self-esteem. You blind others with your intellectual arrogance, preventing them from seeing their own qualities.</p>
    `,
    "Sylph:Light": `
        <h3>SYLPH OF LIGHT</h3>
        <p><strong>One Who Heals Light / Fixes Light.</strong></p>
        <p>You are the natural teacher. You have a compulsion to clarify, explain, and contextualize. If someone is confused or ignorant, you feel you *must* intervene and "heal" this lack of knowledge. You want everyone to see what you see.</p>
        <p>This is noble, but can be annoying. You can fall into the trap of giving unsolicited lectures, thinking you know what is best for others' intellectual journey. Sometimes, people need to learn by making mistakes, but you struggle to let them stay in the dark.</p>
    `,
    "Page:Light": `
        <h3>PAGE OF LIGHT</h3>
        <p><strong>One Who Serves Light / Is Served by Light.</strong></p>
        <p>At first, you struggle to understand what is happening. You feel "out of the loop," confused, or intellectually inferior to your peers. You desperately seek mentors or information to give you a sense of direction.</p>
        <p>You serve others' narratives, being the sidekick. But the Page's potential is accumulation: if you don't give up, you absorb so much knowledge that you become the ultimate authority. From "fool," you become the source of truth. The secret is having patience with your own learning curve.</p>
    `,
    "Rogue:Light": `
        <h3>ROGUE OF LIGHT</h3>
        <p><strong>One Who Steals Light (to redistribute).</strong></p>
        <p>You flee the spotlight. If you do something brilliant, you say "it was luck" or give credit to the team. You take the relevance and importance that should be yours and hand them to someone else, preferring to stay backstage.</p>
        <p>You are the "kingmaker" — the one who makes kings but doesn't want the crown. The problem is self-erasure. You fear that if you shine too bright, you will attract envy or misfortune, so you hide in the shadow of excessive modesty, depriving the world (and yourself) of your real talent.</p>
    `,
    "Seer:Light": `
        <h3>SEER OF LIGHT</h3>
        <p><strong>One Who Sees Light / Guides by Light.</strong></p>
        <p>You are the analytical strategist. You look at life's chaos and see patterns, probabilities, and logical paths. You don't guess; you deduce. Your function is to guide the group down the most "fortunate" or rational path.</p>
        <p>Your mind is a constant flowchart of cause and effect. The burden is analysis paralysis or the frustration of dealing with people who act on irrational impulse. You see the cliff miles before they get there, and it is exhausting having to convince others to steer away.</p>
    `,
    "Heir:Light": `
        <h3>HEIR OF LIGHT</h3>
        <p><strong>One Who Inherits Light / Protected by Light.</strong></p>
        <p>You have "protagonist luck." Answers seem to fall into your lap; you stumble upon the right information at the right time. You navigate life with a casual confidence that things will clear up.</p>
        <p>You are protected by knowledge or fortune, often without conscious effort. The risk is naive arrogance: you might think you are a genius when you are just a privileged lucky one. If luck runs out, you might not have the tools to deal with obscurity.</p>
    `,
    "Bard:Light": `
        <h3>BARD OF LIGHT</h3>
        <p><strong>One Who Invites Destruction of Light.</strong></p>
        <p>You are the agent of cognitive chaos. Passively, you allow misinformation to spread. You see someone drawing a wrong conclusion and don't correct them, maybe because you find it funny or out of laziness. You let ignorance ("destruction of Light") ferment.</p>
        <p>Actively, however, you can destroy *through* Light: you reveal the truth at the worst possible moment. That gossip that destroys a marriage, that brutal fact that demoralizes the team. You illuminate things not to help, but to watch the world burn. You gamble with luck recklessly.</p>
    `,

    // --- SPACE ---
    "Maid:Space": `
        <h3>MAID OF SPACE</h3>
        <p><strong>One Who Creates Space / Made of Space.</strong></p>
        <p>You are the embodiment of anxious productivity. You cannot stay still. Your "Response" to the existential void is to fill it with *things*. You are always starting a new project, reorganizing the house, or creating something, not necessarily out of inspiration, but out of fear of boredom.</p>
        <p>You "create space" for others, being the one who tidies up, fixes, and prepares the ground. The danger is becoming a hoarder of tasks or objects, trying to plug emotional holes with materiality, refusing to face the fact that sometimes one needs to just *be*, and not *do*.</p>
    `,
    "Knight:Space": `
        <h3>KNIGHT OF SPACE</h3>
        <p><strong>One Who Exploits Space / Protects Space.</strong></p>
        <p>You use distance as a shield. You project an image of someone "cool," artistic, or mysterious, but that is a façade to hide how out of place you feel. You are a master at manipulating the social environment to look like you belong, but rarely let anyone into your real personal space.</p>
        <p>You protect your creativity and inner world fiercely. Your technical and practical skill is high — you know how things work — but you use this competence to keep people at arm's length. You help everyone find their place, while secretly feeling you don't have one.</p>
    `,
    "Thief:Space": `
        <h3>THIEF OF SPACE</h3>
        <p><strong>One Who Steals Space (for themselves).</strong></p>
        <p>You have a presence that demands to be noticed. Territorial and expansive, you tend to dominate the physical and creative environment. If there is a group project, you take the aesthetic reins; if there is a room, you choose the best seat.</p>
        <p>This comes from a deep insecurity about being insignificant. You "steal" space because you fear disappearing if you aren't occupying all the oxygen in the room. You might take credit for others' creations or impose your taste on others, validating your existence through your mark on the physical world.</p>
    `,
    "Mage:Space": `
        <h3>MAGE OF SPACE</h3>
        <p><strong>One Who Knows Space (through suffering) / Guided by Space.</strong></p>
        <p>You know the loneliness of the closed room. You understand Space because you have felt isolated, physically uncomfortable, or separated from the world by an invisible barrier. You know what it is to wait too long for something that never comes.</p>
        <p>Now, you use this understanding to navigate. You understand where things fit and where they break. You have sharp spatial and systemic intuition. Your challenge is getting out of theory and passive observation (the Mage's isolation) and physically participating in the life you analyze so well.</p>
    `,
    "Witch:Space": `
        <h3>WITCH OF SPACE</h3>
        <p><strong>One Who Manipulates Space.</strong></p>
        <p>You don't accept physical or creative limits imposed on you. If the room is small, you tear down the wall. If the rule says it doesn't fit, you make it fit. You manipulate the environment around you to reflect your internal state, often chaotically.</p>
        <p>Your relationship with creativity is one of possession and distortion. You can be inspiring, opening new paths where there were none, or terrifying, isolating people and altering the environment's dynamics to trap others in your orbit. You mold the world, but sometimes forget other people also need space to breathe.</p>
    `,
    "Prince:Space": `
        <h3>PRINCE OF SPACE</h3>
        <p><strong>One Who Destroys Space / Destroys with Space.</strong></p>
        <p>You are the ruthless critic or radical minimalist. You look at potential and messy creation and feel disgust; you want to cut, clean, simplify. You destroy creative "junk," often pruning trees that could still bear fruit.</p>
        <p>Or you destroy *with* Space: you use physical distance or isolation to end problems. You move away, leave, put oceans between you and your enemies. You resolve conflicts by removing the other's existence from your sight. The risk is ending up in an empty, perfect, sterile white box.</p>
    `,
    "Sylph:Space": `
        <h3>SYLPH OF SPACE</h3>
        <p><strong>One Who Heals Space / Fixes Space.</strong></p>
        <p>You are the gardener of others' lives. You want everything to grow and bloom. You meddle in others' organization, house, and creativity because you genuinely believe you know how to "fix" their lives better than they do.</p>
        <p>Your intention is to give space for others to be themselves, but your "healing" can be suffocating. You try to fill others' voids with your own presence and care, sometimes preventing them from learning to deal with their own loneliness or mess. You need to learn to respect the neighbors' fences.</p>
    `,
    "Page:Space": `
        <h3>PAGE OF SPACE</h3>
        <p><strong>One Who Serves Space / Is Served by Space.</strong></p>
        <p>You start feeling small, cramped, unable to create or change your environment. You seem to always be waiting for the right moment, paralyzed by the enormity of possibilities ("analysis paralysis"). You serve the physical status quo.</p>
        <p>But Space is the aspect of patience. If you persist, your capacity for growth is literal and metaphorical. The Page of Space who awakens is the one who brings something entirely new into existence, expanding horizons no one knew existed. From "nobody," you become the entire universe.</p>
    `,
    "Rogue:Space": `
        <h3>ROGUE OF SPACE</h3>
        <p><strong>One Who Steals Space (to redistribute).</strong></p>
        <p>You are the person who shrinks on the bus seat so the other has more comfort. You give up your projects, your time, and your environment to accommodate others' needs. You "steal" your own space to give it to those in need.</p>
        <p>It is beautiful altruism, but dangerous. You run the risk of disappearing, of leaving no mark on the world because you were too busy helping others leave theirs. You deal with the pressure of creation by delegating or facilitating it for others, fleeing your own authorship.</p>
    `,
    "Seer:Space": `
        <h3>SEER OF SPACE</h3>
        <p><strong>One Who Sees Space / Guides by Space.</strong></p>
        <p>You see the "Big Picture." While everyone is fighting over petty details, you are looking at the horizon, understanding how all the pieces fit into the grand scheme of things. You are the visual and creative strategist.</p>
        <p>Your relationship with Space is visual and theoretical. You know what needs to be done, but your flaw can be inaction. Seeing all creative possibilities can be overwhelming, and you might end up just watching life go by, drawing maps of places you never step foot in.</p>
    `,
    "Heir:Space": `
        <h3>HEIR OF SPACE</h3>
        <p><strong>One Who Inherits Space / Protected by Space.</strong></p>
        <p>You have a gravity of your own. Things and people tend to orbit around you without you making an effort. You inherit environments, legacies, or creative responsibilities naturally. The physical world seems to cooperate with you.</p>
        <p>Your response is to let yourself be carried by this inertia. You can feel trapped by your own environment (like a frog in a well), too comfortable to change. The danger is passivity towards what is around you, accepting the space given to you instead of questioning if that's where you want to be.</p>
    `,
    "Bard:Space": `
        <h3>BARD OF SPACE</h3>
        <p><strong>One Who Invites Destruction of Space.</strong></p>
        <p>You are the agent of domestic entropy. Passively, you let the mess pile up, projects rot halfway through, and the environment degrade. You don't destroy out of malice, but out of negligence or a "let it roll" philosophy.</p>
        <p>But when the crisis hits, you invite destruction *through* Space: you create something so massive, so reckless, or so out of control that it destroys the existing structure. It is nuclear physics applied to social life: you split an atom just to see what happens, and take the whole block with it.</p>
    `,

    // --- TIME ---
    "Maid:Time": `
        <h3>MAID OF TIME</h3>
        <p><strong>One Who Creates Time / Made of Time.</strong></p>
        <p>You are the person who never stops. If the day has 24 hours, you make it yield 30. You treat time as something manufacturable: if you work hard enough, if you sacrifice sleep and health, you can "create" time to do everything that needs to be done.</p>
        <p>Your psychology is based on maintaining existence through action. You are terrified of being idle because silence reminds you of mortality. You become a slave to your own schedule, fixing timelines and taking on tasks until you become a productivity machine on the verge of collapse.</p>
    `,
    "Knight:Time": `
        <h3>KNIGHT OF TIME</h3>
        <p><strong>One Who Exploits Time / Protects Time.</strong></p>
        <p>You are the master of "hustle culture." You use speed and efficiency as weapons to mask your insecurities. You are always running, always looking for the fastest shortcut, always trying to be one step ahead of disaster.</p>
        <p>Your "Response" is acceleration. You feel the world is crumbling (or that you aren't good enough), so you try to be faster than your problems. You protect the flow of things by acting impulsively and decisively, but this constant haste prevents you from appreciating the moment. You live in the immediate future, never in the present.</p>
    `,
    "Thief:Time": `
        <h3>THIEF OF TIME</h3>
        <p><strong>One Who Steals Time (for themselves).</strong></p>
        <p>You are impatient and, frankly, a bit selfish with others' schedules. You hate waiting. You take shortcuts that cost others time to gain your own. You are the person who arrives late and expects everyone to wait, or dominates the meeting making everyone waste time listening to you.</p>
        <p>This comes from a survival instinct: you feel your time is too scarce and precious to be wasted on others' mediocrity. You "steal" moments of life for yourself, prioritizing your own longevity and goals above the group's natural rhythm.</p>
    `,
    "Mage:Time": `
        <h3>MAGE OF TIME</h3>
        <p><strong>One Who Knows Time (through suffering) / Guided by Time.</strong></p>
        <p>You carry the weight of the end. You understand, better than anyone, that everything is finite. You likely wasted time investing in things that went wrong or suffered significant personal losses that taught you the brutality of the clock.</p>
        <p>Now, you are the pragmatic cynic. You know what is worth the effort and what is a waste of time. You guide the group with a morbid urgency: "we have to do this now, before it's too late." Your challenge is not letting the knowledge of inevitable death stop you from living life.</p>
    `,
    "Witch:Time": `
        <h3>WITCH OF TIME</h3>
        <p><strong>One Who Manipulates Time.</strong></p>
        <p>You refuse to follow the rhythm imposed by society. Deadlines? Business hours? That doesn't apply to you. You manipulate time around you, procrastinating until the last second and then solving everything in a burst of manic energy, or accelerating processes that should take years.</p>
        <p>Your personality is rebellious against the natural order of things. If fate says something must end, you fight to extend it. If something should take long, you force it to happen now. You break the rules of chronology to satisfy your own desires, creating a chaotic rhythm only you can dance to.</p>
    `,
    "Prince:Time": `
        <h3>PRINCE OF TIME</h3>
        <p><strong>One Who Destroys Time / Destroys with Time.</strong></p>
        <p>You are the enemy of patience. As a destroyer of Time, you can be someone who procrastinates destructively, wasting entire days (killing time) without producing anything, in an act of nihilistic rebellion against the pressure to be productive.</p>
        <p>Or, you destroy *with* Time: you use inevitability as a weapon. "This will end badly anyway, why try?" You accelerate the end of things, cutting processes and forcing premature conclusions. You have no patience for the journey; you want to skip straight to the end credits, often ruining the experience in the process.</p>
    `,
    "Sylph:Time": `
        <h3>SYLPH OF TIME</h3>
        <p><strong>One Who Heals Time / Fixes Time.</strong></p>
        <p>You are the emotional project manager. You want everyone to have enough time. You are the person who says "take it easy, no need to rush" or organizes the group's schedule so no one gets overwhelmed.</p>
        <p>You try to "heal" others' temporal anxiety, taking responsibility for ensuring deadlines are met in a healthy way. The problem is you might end up micromanaging others' lives or allowing people to take too long in the name of comfort, ignoring the real need for urgency.</p>
    `,
    "Page:Time": `
        <h3>PAGE OF TIME</h3>
        <p><strong>One Who Serves Time / Is Served by Time.</strong></p>
        <p>Your initial relationship with Time is disastrous. You are always late, always playing catch-up, always missing deadlines. You feel run over by life, serving the clock instead of controlling it.</p>
        <p>But the Page is the class of accumulation. If you survive this phase of disorganization, you develop a powerful internal rhythm. You learn to use time to your advantage, becoming a master of patience and perfect timing (whether in music, fighting, or strategy). From chaos comes absolute precision.</p>
    `,
    "Rogue:Time": `
        <h3>ROGUE OF TIME</h3>
        <p><strong>One Who Steals Time (to redistribute).</strong></p>
        <p>You sacrifice your moments for others. You spend your free time helping friends, stay late at work to cover for a colleague, or dedicate your youth to caring for someone. You "steal" time from your own life and give it to those in need.</p>
        <p>It is exhausting generosity. You deal with the pressure of mortality by focusing on others', forgetting that your clock is ticking too. You run the risk of reaching the end of your life realizing you lived everyone's days but your own.</p>
    `,
    "Seer:Time": `
        <h3>SEER OF TIME</h3>
        <p><strong>One Who Sees Time / Guides by Time.</strong></p>
        <p>You are the historian or the futurist. You see long-term consequences. While everyone reacts to the "now," you are looking at the butterfly effect ten years down the line. You understand cycles, repetition, and causality.</p>
        <p>Your function is to warn: "if we do this, we will regret it tomorrow." The burden is the anxiety of foresight. Watching disaster approach in slow motion and having to convince people to change course now is frustrating. You live in the future, often forgetting to act in the present.</p>
    `,
    "Heir:Time": `
        <h3>HEIR OF TIME</h3>
        <p><strong>One Who Inherits Time / Protected by Time.</strong></p>
        <p>You have annoyingly good timing. Things happen at the right time for you. You don't plan much, just go with the flow, and the universe seems to conspire for you to arrive at the exact moment you were supposed to be there.</p>
        <p>You are protected by inevitability. You instinctively trust that "this too shall pass." The danger is total passivity: you can become a passenger in your own life, letting time take you without ever taking the wheel, or accepting bad endings simply because "it was meant to be."</p>
    `,
    "Bard:Time": `
        <h3>BARD OF TIME</h3>
        <p><strong>One Who Invites Destruction of Time.</strong></p>
        <p>Your approach to time is erratic. Passively, you let deadlines die. You see the urgency of a situation and do nothing, letting entropy act ("time heals all," or "time destroys all"). Your inaction invites the end.</p>
        <p>But in active/crisis mode, you are the apocalypse accelerator. You invite destruction *through* Time: your impatience or poor time management causes catastrophes. You make things happen too fast, or at the wrong moment, creating a rhythmic dissonance that breaks the group's harmony. It is haste that causes the fatal accident.</p>
    `,

    // --- HEART ---
    "Maid:Heart": `
        <h3>MAID OF HEART</h3>
        <p><strong>One Who Creates Heart / Made of Heart.</strong></p>
        <p>You treat your identity like a craft project. You don't "discover" who you are; you build who you are, brick by brick. You are obsessed with authenticity, but ironically, your authenticity is manufactured with much effort.</p>
        <p>You likely depend heavily on external validation to feel like you exist. If no one is loving or hating you, you feel like a ghost. You "create" emotion and drama where there is none because emotional silence is terrifying. The danger is becoming a caricature of yourself, trapped in an eternal performance.</p>
    `,
    "Knight:Heart": `
        <h3>KNIGHT OF HEART</h3>
        <p><strong>One Who Exploits Heart / Protects Heart.</strong></p>
        <p>You use your personality as armor. You are very charismatic, intense, or dramatic, but that is a barrier. You project an exaggerated version of yourself (a "persona") so no one can hurt the true, vulnerable "you" hidden deep inside.</p>
        <p>You struggle with the feeling of being unlovable. So, you become useful, desirable, or the "funny friend," exploiting your own emotions to manipulate how others see you. You protect your heart by exposing a copy of it.</p>
    `,
    "Thief:Heart": `
        <h3>THIEF OF HEART</h3>
        <p><strong>One Who Steals Heart (for themselves).</strong></p>
        <p>You have a compulsive need to be the protagonist. You can't stand when others' feelings overshadow yours. You "steal" identities: adopting others' mannerisms, tastes, and stories and presenting them as your own to feel more complete.</p>
        <p>In relationships, you tend to be an emotional vampire. You need the other to adore you for you to feel real. You drain the partner's individuality until they are just a mirror for your own ego. The challenge is learning to have an "I" without needing to cannibalize the "we."</p>
    `,
    "Mage:Heart": `
        <h3>MAGE OF HEART</h3>
        <p><strong>One Who Knows Heart (through suffering) / Guided by Heart.</strong></p>
        <p>You understand people because people have hurt you a lot. You are an expert in hidden motivations, repressed desires, and the human "soul," but acquired this through painful experiences of rejection or traumatic self-discovery.</p>
        <p>You are guided by instinct and passion, even when logic says otherwise. You know who people really are, which makes you a human lie detector. The problem is cynicism: you have seen so much ugliness in the human heart that you might struggle to connect genuinely again.</p>
    `,
    "Witch:Heart": `
        <h3>WITCH OF HEART</h3>
        <p><strong>One Who Manipulates Heart.</strong></p>
        <p>Your identity is fluid. You are whoever you need to be in the moment. You manipulate emotions and instincts — both yours and others'. You can make someone fall in love with you (or hate you) with frightening ease.</p>
        <p>This emotional "code-switching" ability is powerful but dangerous. You might lose track of who you really are amidst so many masks. You treat feelings as tools: useful, moldable, and disposable. The risk is treating people like dolls in your private theater.</p>
    `,
    "Prince:Heart": `
        <h3>PRINCE OF HEART</h3>
        <p><strong>One Who Destroys Heart / Destroys with Heart.</strong></p>
        <p>You are the archetype of the self-saboteur. You have a conflicted relationship with your own being. Often, you try to destroy your "Heart" (emotions, impulses) through cold logic (Mind), repressing who you are to be "efficient" or "rational."</p>
        <p>Or, you destroy *with* Heart: your ego is so massive it crushes everyone around. You impose your identity with such force that there is no room left for anyone else to be who they are. You destroy others' self-esteem or destroy yourself by failing to accept your own human flaws.</p>
    `,
    "Sylph:Heart": `
        <h3>SYLPH OF HEART</h3>
        <p><strong>One Who Heals Heart / Fixes Heart.</strong></p>
        <p>You are the group's unlicensed therapist. You want to "fix" people. You validate, listen, and try to help everyone find their "true essence." You can't stand seeing someone with low self-esteem or identity issues.</p>
        <p>Your meddling comes from a good place but can be suffocating. You try to heal hearts that didn't ask for healing, or try to force emotional harmony where conflict is necessary. Sometimes, you focus so much on others' souls so you don't have to look at the holes in your own.</p>
    `,
    "Page:Heart": `
        <h3>PAGE OF HEART</h3>
        <p><strong>One Who Serves Heart / Is Served by Heart.</strong></p>
        <p>You start as a blank sheet. You struggle to know who you are, what you like, or what you want. You tend to mimic the personality of those close to you (idols, friends, partners) because you feel hollow inside.</p>
        <p>Your journey is the slow construction of self-esteem. If you persist, the Page of Heart becomes an inexhaustible source of passion and authenticity. You go from someone asking permission to exist to someone who inspires everyone with their vibrant, unshakable soul. But the road there is full of identity crises.</p>
    `,
    "Rogue:Heart": `
        <h3>ROGUE OF HEART</h3>
        <p><strong>One Who Steals Heart (to redistribute).</strong></p>
        <p>You are the empathetic chameleon. You absorb the environment's emotions and put yours aside. If the group is sad, you take that sadness on yourself; if they need cheering up, you sacrifice your energy to lift them. You "steal" your own identity to accommodate others'.</p>
        <p>You struggle to set boundaries. You fragment yourself to fit others' expectations, becoming what others need you to be, instead of being who you are. Your challenge is to stop giving away pieces of your soul until nothing is left.</p>
    `,
    "Seer:Heart": `
        <h3>SEER OF HEART</h3>
        <p><strong>One Who Sees Heart / Guides by Heart.</strong></p>
        <p>You see through masks. No one can lie to you about who they are, not even yourself. You understand the mechanics of identity, desire, and relationships. You are the love counselor who understands why so-and-so acts like that.</p>
        <p>Your guidance is based on emotional truth. "This isn't what you really want," you say. The burden is seeing incompatibilities and the lies people tell themselves and not being able to force them to change. You see the emotional shipwreck before it happens.</p>
    `,
    "Heir:Heart": `
        <h3>HEIR OF HEART</h3>
        <p><strong>One Who Inherits Heart / Protected by Heart.</strong></p>
        <p>You are protected by your own essence. You have a natural, almost innocent charisma that makes people like you effortlessly. You "inherit" passions and moods; often you act purely on instinct, driven by what you feel in the moment.</p>
        <p>You tend to become what others project onto you, but in a way that favors you. The danger is lack of direction: being carried by the whims of the heart (yours or others') without ever stopping to think rationally about the consequences.</p>
    `,
    "Bard:Heart": `
        <h3>BARD OF HEART</h3>
        <p><strong>One Who Invites Destruction of Heart.</strong></p>
        <p>You are emotionally unpredictable. Passively, you can be cold, distant, or apathetic, letting relationships die of starvation. You invite the dissolution of identity, perhaps not knowing who you are and not caring.</p>
        <p>But in active mode, you are the destroyer of souls. You seduce and discard, or your emotional outbursts destroy group cohesion. You invite destructive irrationality in. You are that ex who messed with someone's head forever, or the person laughing at a funeral. You break the sanctity of the "self."</p>
    `,

    // --- MIND ---
    "Maid:Mind": `
        <h3>MAID OF MIND</h3>
        <p><strong>One Who Creates Mind / Made of Mind.</strong></p>
        <p>You don't leave things to chance. You "create" decisions. If the group is stagnant, you force a direction. You structure your life with rules, plans, and rigid logic because you are terrified of chaos and ambiguity.</p>
        <p>Your psychology is one of hyper-rationalization. You try to solve emotional problems with spreadsheets. You become the person who has a plan for everything, but often forget that people aren't chess pieces. You run the risk of becoming an efficiency robot, refusing to feel anything that doesn't make logical sense.</p>
    `,
    "Knight:Mind": `
        <h3>KNIGHT OF MIND</h3>
        <p><strong>One Who Exploits Mind / Protects Mind.</strong></p>
        <p>You use intelligence as a shield. You are quick-witted, great at debating, and excellent at finding flaws in others' arguments. You project the image of the cold, calculating strategist, or the "smart guy" who never gets fooled.</p>
        <p>But this is a mask to hide your insecurity about your own choices. You fear being stupid or manipulated, so you strike first with sharp logic. You protect your real thoughts behind layers of irony and complex arguments, preventing others from seeing your internal doubts.</p>
    `,
    "Thief:Mind": `
        <h3>THIEF OF MIND</h3>
        <p><strong>One Who Steals Mind (for themselves).</strong></p>
        <p>You trust your judgment and *only* your judgment. In a group, you tend to bulldoze others' opinions and make decisions for everyone because, frankly, you think others will mess it up. You steal people's agency and choice "for their own good" (or yours).</p>
        <p>Your "Response" is intellectual arrogance. You monopolize strategy. You might appropriate others' ideas and improve them, taking credit. It is a control mechanism: if you hold the choices, no one can put you in a situation you didn't foresee.</p>
    `,
    "Mage:Mind": `
        <h3>MAGE OF MIND</h3>
        <p><strong>One Who Knows Mind (through suffering) / Guided by Mind.</strong></p>
        <p>You suffer from "analysis paralysis." You see all possible consequences of every action, and it is terrifying. You understand how choices shape reality because you likely made bad choices that haunt you, or were a victim of others' machinations.</p>
        <p>Now, you are the cautious advisor. You know exactly what will go wrong. You are guided by an almost pessimistic logic. Your burden is being the person who sees the cliff clearly while everyone else is happily running towards it, and having to deal with the frustration of not being listened to.</p>
    `,
    "Witch:Mind": `
        <h3>WITCH OF MIND</h3>
        <p><strong>One Who Manipulates Mind.</strong></p>
        <p>To you, logic is modeling clay. You are a master at convincing people, not necessarily with facts, but by changing how they think. You rationalize the irrational. You can justify any action, no matter how absurd, if it serves your purposes.</p>
        <p>Your personality is adaptable and dangerous. You change your mind and your "mask" as the situation demands. You manipulate others' decisions, planting ideas or altering perceptions. The danger is getting lost in your own justifications and starting to believe your own logical lies.</p>
    `,
    "Prince:Mind": `
        <h3>PRINCE OF MIND</h3>
        <p><strong>One Who Destroys Mind / Destroys with Mind.</strong></p>
        <p>You are, strangely, very emotional. As a destroyer of Mind, you reject cold logic, social masks, and excessive planning. You act on impulse, destroying complex plans with brutal, direct actions. You hate falseness and over-intellectualization.</p>
        <p>Or, you destroy *with* Mind: you use logic to dismantle people. You rationalize cruelty. You use irrefutable arguments to destroy someone's hope or self-esteem. You are the nihilist who uses reason to prove nothing makes sense, leaving only the void.</p>
    `,
    "Sylph:Mind": `
        <h3>SYLPH OF MIND</h3>
        <p><strong>One Who Heals Mind / Fixes Mind.</strong></p>
        <p>You are the mediator and the clarifier. You can't stand seeing confusion, misunderstandings, or stupid decisions being made. You intervene to offer clarity, helping people organize their thoughts and see options lucidly.</p>
        <p>Your intention is to "optimize" people's choices. However, you can be invasive, trying to fix how others think or act, as if their mind were a puzzle only you know how to solve. You need to accept that, sometimes, people have the right to be irrational.</p>
    `,
    "Page:Mind": `
        <h3>PAGE OF MIND</h3>
        <p><strong>One Who Serves Mind / Is Served by Mind.</strong></p>
        <p>You start doubting your own intelligence. You struggle to make simple decisions, always asking "what do you think?" to others. You are easily influenced and can be used as a pawn in smarter people's mind games.</p>
        <p>But the Page grows. If you learn to trust your reasoning, you become a brilliant strategist. You stop serving others' choices to be served by logic: you start seeing life's chessboard with a clarity no one else has. From indecisive, you become the master of the game.</p>
    `,
    "Rogue:Mind": `
        <h3>ROGUE OF MIND</h3>
        <p><strong>One Who Steals Mind (to redistribute).</strong></p>
        <p>You are the person who says "it was his idea." You have great ideas and strategies, but you pass the ball for someone else to execute or take credit. You steal decision-making capacity from yourself to empower the group.</p>
        <p>You deal with the pressure of choice by delegating it. You prefer being the advisor behind the scenes than the leader making the final call. It is safe, but frustrating. You sacrifice your intellectual agency to maintain harmony or to avoid dealing with the guilt if something goes wrong.</p>
    `,
    "Seer:Mind": `
        <h3>SEER OF MIND</h3>
        <p><strong>One Who Sees Mind / Guides by Mind.</strong></p>
        <p>You see paths forking. Faced with a choice, you can visualize the consequences of each option. You understand causality and human psychology: "if we say this, he will react like that." You are fate's navigator.</p>
        <p>Your function is to help the group make the right choice. But the weight of seeing all ramifications is exhausting. You might get stuck in indecision, trying to find the "perfect" path that doesn't exist, or get deeply frustrated when people ignore your logical warnings and screw up out of pure emotion.</p>
    `,
    "Heir:Mind": `
        <h3>HEIR OF MIND</h3>
        <p><strong>One Who Inherits Mind / Protected by Mind.</strong></p>
        <p>You have a natural logical intuition. You don't need to think much to make the right choice; you just do it. You float through life protected by your ability to adapt and rationalize what happens. Things "make sense" to you.</p>
        <p>You might seem a bit detached or chameleon-like, changing opinions or attitudes as the environment demands, without a crisis of conscience. The risk is becoming someone without strong convictions, who follows the logic of the moment without questioning the deep values behind it.</p>
    `,
    "Bard:Mind": `
        <h3>BARD OF MIND</h3>
        <p><strong>One Who Invites Destruction of Mind.</strong></p>
        <p>You are the agent of doubt. Passively, you erode the group's certainties. You ask questions that dismantle solid plans, or your own chaotic indecision causes the group to lose its way. You invite confusion.</p>
        <p>In active mode, you destroy *through* Mind: you use logic to create chaos. You create bureaucratic mazes, impossible rules, or sadistic mind games that paralyze everyone. Or you make a decision so logically absurd and unpredictable that it breaks the board entirely. You are the Joker: everything is a game, and rules are jokes.</p>
    `,

    // --- RAGE ---
    "Maid:Rage": `
        <h3>MAID OF RAGE</h3>
        <p><strong>One Who Creates Rage / Made of Rage.</strong></p>
        <p>You can't let things be. If it's too calm, you get suspicious. You "create" conflict or skepticism because silence feels fake to you. You are the person who pokes the wound, points out the flaw in the perfect plan, and compulsively plays devil's advocate.</p>
        <p>Your psychology is one of vigilance maintenance. You feel that if you relax and accept things as they are, you will be deceived. You work hard to keep your indignation or distrust sharp, believing it is the only way to stay safe against the world's lies.</p>
    `,
    "Knight:Rage": `
        <h3>KNIGHT OF RAGE</h3>
        <p><strong>One Who Exploits Rage / Protects Rage.</strong></p>
        <p>You use intimidation or brutal honesty as a shield. You project a "tough guy" image, someone who takes no nonsense and sees the world as it really is. You use your aggression (verbal or physical) to solve problems quickly.</p>
        <p>But this thorny armor protects a deep fear of being vulnerable or seen as weak. You attack before being attacked. You exploit others' fear and doubt to maintain control of the situation, protecting your own cynical worldview against any attempt at optimism you consider naive.</p>
    `,
    "Thief:Rage": `
        <h3>THIEF OF RAGE</h3>
        <p><strong>One Who Steals Rage (for themselves).</strong></p>
        <p>You need to be the angriest person in the room. If someone is complaining about something, you interrupt to say your problem is worse. You invalidate others' anger and frustration ("steal" their Rage) to center the narrative on your own suffering or hatred.</p>
        <p>It is a form of narcissistic control. You drain others' ability to defend themselves or express negativity, becoming the only authorized bearer of the unpleasant "truth." You feed on conflict and wither in harmony.</p>
    `,
    "Mage:Rage": `
        <h3>MAGE OF RAGE</h3>
        <p><strong>One Who Knows Rage (through suffering) / Guided by Rage.</strong></p>
        <p>You saw how the sausage is made, and lost your appetite forever. You know manipulation, lies, and human ugliness because you were a victim of them. Your wisdom comes from disillusionment. You are the one who says "I told you so" when the too-good-to-be-true promise fails.</p>
        <p>You are guided by chronic distrust. You understand mechanisms of control and the limitations of reality. The danger of the Mage of Rage is paranoid isolation: you know so much about the world's traps that you are afraid to take a step, seeing conspiracies or falseness where perhaps only genuine kindness exists.</p>
    `,
    "Witch:Rage": `
        <h3>WITCH OF RAGE</h3>
        <p><strong>One Who Manipulates Rage.</strong></p>
        <p>You are an emotional agitator. You know exactly which buttons to push to make someone furious or paranoid. You manipulate the perception of negative reality: you can convince a peaceful crowd they are being oppressed, or make a furious person calm down with twisted logic.</p>
        <p>Your relationship with truth is plastic. You use indignation as fuel. You shape the social environment through fear and suspicion, often to break structures you deem false. The risk is starting a fire you can't put out, burning yourself along with your targets.</p>
    `,
    "Prince:Rage": `
        <h3>PRINCE OF RAGE</h3>
        <p><strong>One Who Destroys Rage / Destroys with Rage.</strong></p>
        <p>You are strangely peaceful, maybe even too "zen." As a destroyer of Rage, you repress negative feelings, refuse to see the ugly side of things, and may impose toxic positivity, destroying critical capacity and healthy skepticism (acting like a fake Hope player).</p>
        <p>Or, in the active aspect, you destroy *with* Rage: blind fury. You enter a berserker state, physical or verbal, annihilating everything in front of you without strategy, driven only by absolute rejection of current reality. You destroy lies, but also destroy the truths that sustain people's sanity.</p>
    `,
    "Sylph:Rage": `
        <h3>SYLPH OF RAGE</h3>
        <p><strong>One Who Heals Rage / Fixes Rage.</strong></p>
        <p>You validate others' demons. While society says "don't get mad," you say "you have every right to be pissed." You help people focus their anger, understand their limitations, and accept the hard truths they are trying to ignore.</p>
        <p>Your "healing" is through catharsis or reality checks. But be careful: you might end up "fixing" someone's ability to forgive, turning passing hurts into eternal grudges, or encouraging a paranoia you deem "healthy."</p>
    `,
    "Page:Rage": `
        <h3>PAGE OF RAGE</h3>
        <p><strong>One Who Serves Rage / Is Served by Rage.</strong></p>
        <p>You start as the doormat. You swallow pride, accept disrespect, and fear imposing your limits. You serve frustration, accumulating it silently while trying to keep a smile on your face.</p>
        <p>But Rage is a pressure cooker. The Page's potential is inevitable explosion. When you finally learn to use your Rage, it is overwhelming. You become an unstoppable force of nature, driven by years of "yes" that should have been "no." From passive, you become the incarnation of revolt.</p>
    `,
    "Rogue:Rage": `
        <h3>ROGUE OF RAGE</h3>
        <p><strong>One Who Steals Rage (to redistribute).</strong></p>
        <p>You are the lightning rod. When the mood gets tense, you absorb the negativity so the group doesn't have to deal with it. You become the scapegoat, or use self-deprecating humor to deflect anger that would be directed at others.</p>
        <p>You "steal" frustration from the environment. It is an act of sacrifice, but it leaves you loaded with emotional poison that isn't yours. You deal with cruel reality by trying to protect others from it, but end up cynical and bitter alone, while your friends remain innocent.</p>
    `,
    "Seer:Rage": `
        <h3>SEER OF RAGE</h3>
        <p><strong>One Who Sees Rage / Guides by Rage.</strong></p>
        <p>You see the cracks in the wall. You understand sanity (and the lack thereof). You look at an ideology, a group, or a plan and can immediately identify where the lie is, where the weakness is, and who is faking it.</p>
        <p>Your guidance is based on skepticism. "This is too good to be true," you warn. You guide others away from dangerous illusions. The burden is being the eternal killjoy, the person who can never just enjoy the magic show because you are too busy looking at the magician's sleeve.</p>
    `,
    "Heir:Rage": `
        <h3>HEIR OF RAGE</h3>
        <p><strong>One Who Inherits Rage / Protected by Rage.</strong></p>
        <p>You attract conflict like a magnet, often doing nothing. People project their frustrations onto you, or you constantly find yourself in the middle of chaotic and hostile situations. Strangely, this doesn't knock you down; you thrive in discord.</p>
        <p>You are "protected" by your own stubbornness or capacity for rejection. You have a naturally thick skin. The danger is getting so used to hostility that you become incapable of functioning in peacetime, unconsciously sabotaging harmony just to feel "at home" again.</p>
    `,
    "Bard:Rage": `
        <h3>BARD OF RAGE</h3>
        <p><strong>One Who Invites Destruction of Rage.</strong></p>
        <p>You are the real-life "troll." Passively, you demoralize any attempt at seriousness or righteous anger with nihilistic jokes or erratic behavior. You make others' concerns seem ridiculous, destroying their conviction.</p>
        <p>Or, you invite destruction *through* Rage: you provoke, poke, and instigate until someone explodes and destroys everything, while you watch eating popcorn. You are the catalyst agent who turns a small disagreement into total war, using emotional unpredictability as a weapon of mass destruction.</p>
    `,

    // --- LIFE ---
    "Maid:Life": `
        <h3>MAID OF LIFE</h3>
        <p><strong>One Who Creates Life / Made of Life.</strong></p>
        <p>You are the tireless "fixer." You don't accept that things break, die, or end. You are always busy taking care of someone, funding projects, or injecting energy into lost causes.</p>
        <p>Your "Response" is hyperactivity. You are terrified of being useless or looking weak. You "create" life and luxury around you, pampering others, but often forget to take care of yourself, treating yourself like an inexhaustible battery until the moment you short circuit.</p>
    `,
    "Knight:Life": `
        <h3>KNIGHT OF LIFE</h3>
        <p><strong>One Who Exploits Life / Protects Life.</strong></p>
        <p>You use your energy and presence as a shield. You are intense, loud, and full of vitality. You walk into a room and the atmosphere changes. You use your ability to solve practical problems and "make things happen" to protect others from fragility.</p>
        <p>But deep down, you fear not being enough or losing your strength. You perform invincibility and exaggerated generosity to hide your own needs. You protect others' lives by fighting their battles, preventing them from growing on their own.</p>
    `,
    "Thief:Life": `
        <h3>THIEF OF LIFE</h3>
        <p><strong>One Who Steals Life (for themselves).</strong></p>
        <p>You want the biggest piece of the cake, and you have no shame about it. You understand that life is a competition for resources (money, attention, status) and you play to win. You can drain the energy from the room, demanding total focus on your problems or achievements.</p>
        <p>Your psychology is based on scarcity: "if I don't take it, someone else will." You steal the spotlight and vitality to fill an internal void of insecurity. You shine bright, but often at the cost of leaving others in the shadows.</p>
    `,
    "Mage:Life": `
        <h3>MAGE OF LIFE</h3>
        <p><strong>One Who Knows Life (through suffering) / Guided by Life.</strong></p>
        <p>You know the price of life. Maybe you dealt with illness, poverty, or the inherent injustice that life isn't fair. You understand systems of privilege and power because you've felt what it's like to be on the wrong side of them.</p>
        <p>Now, you are the pragmatist who knows exactly where to apply energy to get results. You don't waste effort. You guide others not to waste time on dead causes. The risk is cynicism: seeing life only as a biological or social transaction, without magic.</p>
    `,
    "Witch:Life": `
        <h3>WITCH OF LIFE</h3>
        <p><strong>One Who Manipulates Life.</strong></p>
        <p>You don't accept the rules of biology or society. You break barriers. You manipulate the group's energy: you can liven up a funeral or depress a party with a snap of your fingers. You treat social rules as suggestions.</p>
        <p>Your personality is dominant and a bit controlling. You decide who "lives" (who receives attention/help) and who doesn't. You shape the growth of people around you like bonsai trees, which can be beautiful or terribly restrictive.</p>
    `,
    "Prince:Life": `
        <h3>PRINCE OF LIFE</h3>
        <p><strong>One Who Destroys Life / Destroys with Life.</strong></p>
        <p>You are the minimalist or the ascetic. As a destroyer of Life, you reject luxury, excess, and futility. You cut out what you consider superfluous, which can make you very focused, but also someone who sucks the joy and color out of the room.</p>
        <p>Or, you destroy *with* Life: you use your status, money, or privilege to crush others. You use the brute force of your existence to run over whoever is in the way. It is the arrogance of someone who thinks their rules are the only ones that matter.</p>
    `,
    "Sylph:Life": `
        <h3>SYLPH OF LIFE</h3>
        <p><strong>One Who Heals Life / Fixes Life.</strong></p>
        <p>You are the "mother" of the group, regardless of gender. You want to nurture, feed, and watch everyone grow. You can't stand seeing wasted potential. You meddle in others' health and well-being because you think you know what is best for them.</p>
        <p>The problem is you can suffocate people with your care. You create dependency, doing everything for others and preventing them from developing their own strength. You need to understand that letting someone fall is part of growth.</p>
    `,
    "Page:Life": `
        <h3>PAGE OF LIFE</h3>
        <p><strong>One Who Serves Life / Is Served by Life.</strong></p>
        <p>You start feeling powerless. Maybe physically fragile, socially awkward, or financially dependent. You look at people full of life and success and feel inferior. You serve others' success, looking for crumbs.</p>
        <p>But the Page is explosive growth. If you persist, you discover an inexhaustible source of resilience. You can become the most powerful and influential person in the group, someone who beat all odds. Your journey is proving you deserve to take up space.</p>
    `,
    "Rogue:Life": `
        <h3>ROGUE OF LIFE</h3>
        <p><strong>One Who Steals Life (to redistribute).</strong></p>
        <p>You are Robin Hood. You take from those who have much (including yourself) to give to those who have little. You sacrifice your comfort, your money, and your health to help the needy. You can't enjoy a luxury if you know someone is suffering.</p>
        <p>It is noble, but self-destructive. You "steal" your own vitality to keep others alive. You avoid shining or succeeding so as not to make others feel bad. You need to learn that you don't need to extinguish yourself for others to exist.</p>
    `,
    "Seer:Life": `
        <h3>SEER OF LIFE</h3>
        <p><strong>One Who Sees Life / Guides by Life.</strong></p>
        <p>You understand hierarchies and systems. You look at a social situation and know exactly who has power, who is faking it, and where the growth opportunities are. You see latent potential in people.</p>
        <p>Your function is to guide others to success. "Invest in this," "talk to so-and-so," "take care of your health." The burden is seeing wasted potential everywhere and getting frustrated with mediocrity or the lack of ambition in people around you.</p>
    `,
    "Heir:Life": `
        <h3>HEIR OF LIFE</h3>
        <p><strong>One Who Inherits Life / Protected by Life.</strong></p>
        <p>You were born under a lucky star. Things flow to you: opportunities, money, health. You have contagious, carefree energy. You navigate life with the unconscious certainty that everything will work out.</p>
        <p>You tend to be protected by your own optimism and vitality. The danger is the privilege bubble: you might struggle to empathize with those who suffer or struggle, because for you, life is easy. You run the risk of being superficial, floating without growing deep roots.</p>
    `,
    "Bard:Life": `
        <h3>BARD OF LIFE</h3>
        <p><strong>One Who Invites Destruction of Life.</strong></p>
        <p>Your relationship with self-care and status is chaotic. Passively, you let your life, health, or finances fall apart out of sheer negligence. You watch opportunities die and do nothing. You invite stagnation.</p>
        <p>Actively, you invite destruction *through* Life: hedonistic excess. You party until you destroy everything, spend what you don't have, or use your influence and charisma to lead the group into risky behaviors. You are the embodiment of "live fast, die young," dragging everyone with you.</p>
    `,

    // --- DOOM ---
    "Maid:Doom": `
        <h3>MAID OF DOOM</h3>
        <p><strong>One Who Creates Doom / Made of Doom.</strong></p>
        <p>You are the person who carries the world on their back. You "create" rules and limitations for yourself, filling your life with obligations and duties. You feel you must sacrifice or suffer to have value. If something goes wrong, you take the blame and try to fix it alone.</p>
        <p>Your psychology is that of the proactive martyr. You anticipate disaster by trying to control everything, creating rigid systems to avoid chaos. The danger is becoming the architect of your own prison, refusing help and sinking under the weight of responsibilities no one asked you to carry.</p>
    `,
    "Knight:Doom": `
        <h3>KNIGHT OF DOOM</h3>
        <p><strong>One Who Exploits Doom / Protects Doom.</strong></p>
        <p>You are the expert on the "worst-case scenario." You use cynicism and knowledge of the rules as a weapon. You know exactly what can go wrong and use that to protect the group. You are the tactical pessimist who saves the day because you foresaw the failure.</p>
        <p>You protect others from the harsh consequences of reality, often throwing yourself in front of the train. But you use this toughness to hide your own suffering. You act as if nothing hurts you, exploiting your own pain as fuel to keep going ("no pain, no gain").</p>
    `,
    "Thief:Doom": `
        <h3>THIEF OF DOOM</h3>
        <p><strong>One Who Steals Doom (for themselves).</strong></p>
        <p>You have a strange relationship with suffering. You tend to invalidate others' pain, acting as if only your problems are real or difficult ("gatekeeping" suffering). You steal the victimization narrative for yourself.</p>
        <p>On the other hand, you can "steal" the restrictions and rules of others to gain an advantage. You hack the system. You understand limitations so well that you know exactly how to break them for your own benefit, leaving others trapped in the rules you just bypassed.</p>
    `,
    "Mage:Doom": `
        <h3>MAGE OF DOOM</h3>
        <p><strong>One Who Knows Doom (through suffering) / Guided by Doom.</strong></p>
        <p>You are the old, weary soul. You understand suffering because you live in it. You know the limitations of life, the unfair rules, and the inevitability of pain. You have no illusions that "everything will be fine."</p>
        <p>Your wisdom is deep empathy. You know how to comfort those who suffer because you speak the language of pain. You guide others through the darkest moments. The risk is chronic depression and passivity: knowing so much about how broken the system is that you give up on trying to fix it.</p>
    `,
    "Witch:Doom": `
        <h3>WITCH OF DOOM</h3>
        <p><strong>One Who Manipulates Doom.</strong></p>
        <p>You look at an immutable rule and laugh. You manipulate restrictions. If they say "it's impossible," you do it anyway. You alter the laws of physics or society to create loopholes where none should exist.</p>
        <p>Your response to trauma is structural rebellion. You twist fate. You can condemn someone to a terrible curse or free someone from a certain doom. You play with dangerous and fundamental forces. The danger is breaking something that sustained reality, causing a systemic collapse.</p>
    `,
    "Prince:Doom": `
        <h3>PRINCE OF DOOM</h3>
        <p><strong>One Who Destroys Doom / Destroys with Doom.</strong></p>
        <p>You are the radical optimist or the anarchist. As a destroyer of Doom, you ignore rules, limits, and consequences. You live as if you were immortal, refusing to accept any kind of negativity or restriction. You help others overcome depression by destroying the source of suffering.</p>
        <p>Or, you destroy *with* Doom: you impose draconian rules and severe punishments to end problems. You use rigid structure to crush hope or creativity. You are the executioner judge who applies the law to the letter, without mercy.</p>
    `,
    "Sylph:Doom": `
        <h3>SYLPH OF DOOM</h3>
        <p><strong>One Who Heals Doom / Fixes Doom.</strong></p>
        <p>You are the grief counselor. You don't run from the ugly part of life. You are there to hold the hand of those who are suffering, to listen to the darkest vents, and to help people accept their limitations.</p>
        <p>You try to "heal" suffering by helping others live with it. However, you might end up becoming a crutch, preventing people from overcoming their pain because you constantly validate their suffering. You fix the cracks, but sometimes the cracks needed to break for the light to get in.</p>
    `,
    "Page:Doom": `
        <h3>PAGE OF DOOM</h3>
        <p><strong>One Who Serves Doom / Is Served by Doom.</strong></p>
        <p>You start out feeling cursed. Everything goes wrong for you. You feel trapped by rules you don't understand, oppressed by authorities, or simply unlucky. You serve suffering, accepting it as your immutable reality.</p>
        <p>But if you endure, the dynamic flips. You learn the rules of the game better than anyone. You use restrictions to your advantage, building impenetrable structures. The realized Page of Doom is the one who turns their scars into armor and their knowledge of the system into absolute power.</p>
    `,
    "Rogue:Doom": `
        <h3>ROGUE OF DOOM</h3>
        <p><strong>One Who Steals Doom (to redistribute).</strong></p>
        <p>You take the weight off others' backs. If someone is suffering, you take that pain for yourself. If someone broke a rule, you take the blame. You steal negative consequences and "bad luck" from your friends.</p>
        <p>It is the ultimate sacrifice. You deal with reality by becoming the group's emotional trash can. You free others to be happy while you deal with the boring and sad parts. The risk is obvious: you sink into depression and burnout, forgetting that you can't save everyone.</p>
    `,
    "Seer:Doom": `
        <h3>SEER OF DOOM</h3>
        <p><strong>One Who Sees Doom / Guides by Doom.</strong></p>
        <p>You see the end of the line. You understand the futility of certain actions. While everyone is excited about a stupid plan, you've already seen the ten reasons why it will fail. You see the invisible rules that govern society.</p>
        <p>Your guidance is based on caution. "Don't do that, it will go wrong." You help the group avoid catastrophes and traps. The burden is fatalism: it's hard to have hope when you see the limitations of everything so clearly. You might seem like a boring pessimist, but you are usually right.</p>
    `,
    "Heir:Doom": `
        <h3>HEIR OF DOOM</h3>
        <p><strong>One Who Inherits Doom / Protected by Doom.</strong></p>
        <p>You have a symbiotic relationship with disaster. Strangely, the bad things that happen around you don't seem to hit you directly, or you adapt to them with frightening ease. You "inherit" systems and structures; you thrive in rigid and bureaucratic environments.</p>
        <p>You are protected by the rules. You know how to navigate chaos without getting wet. The danger is complacency toward others' suffering, since to you, restrictions seem natural and comfortable. You can become a bureaucrat of life, following rules without questioning their human purpose.</p>
    `,
    "Bard:Doom": `
        <h3>BARD OF DOOM</h3>
        <p><strong>One Who Invites Destruction of Doom.</strong></p>
        <p>You mock the rules. Passively, you ignore safety, warnings, and common sense, inviting disaster through the front door. You act as if you were invincible, and your recklessness erodes the structure protecting the group.</p>
        <p>Or, you invite destruction *through* Doom: you bring inevitability to the table. You are the bearer of bad news that destroys everyone's morale. You accelerate the collapse of a rotten system, not to fix it, but to watch the dust settle. You are fatalism turned into a weapon.</p>
        },
        aspectQuestions: [
            { t: "1. A group of friends insists on keeping an annual tradition that you find exhausting. What do you do?", opts: [
        { txt: "I end up going, but only to follow protocol. They included me, but it doesn't mean I'm there body and soul.", w: { Doom: 3, Life: 1, Breath: 1 } },
        { txt: "I insist that everyone attends. If we start making exceptions, the group will end up losing its way over time.", w: { Blood: 4, Breath: -2 }, destroys: "Breath" }, 
        { txt: "I don't go. If it's not doing me good, it makes no sense to feel trapped in a commitment just out of obligation.", w: { Breath: 3, Void: 3, Life: 1, Blood: -3 }, destroys: "Blood" },
        { txt: "I try to convince the guys to change the plan a bit to something less tiring, but that still serves for us to get together.", w: { Mind: 3, Life: 2, Space: 2, Heart: -1 } },
        { txt: "I analyze the reason for my exhaustion. It might have nothing to do with the tradition itself, but with some other factor in my life that is draining me.", w: { Heart: 3, Time: 2 } }
    ]},
    { t: "2. You discover a grave mistake by a coworker who is your friend. This could harm them in the future. What do you do?", opts: [
        { txt: "I tell them exactly what I saw. They need to have all the facts at hand to have clarity about their own situation.", w: { Light: 3, Rage: 3, Void: -3 }, destroys: "Void" }, 
        { txt: "I keep it a secret. Bringing this up now would only create a bad vibe and negative attention that no one needs.", w: { Void: 4, Blood: 3, Light: -3 } }, 
        { txt: "I don't get involved. If the mistake happened, consequences will come naturally and I don't think I should interfere with what has to be.", w: { Doom: 3, Time: 3, Life: -2 }, destroys: "Doom" },
        { txt: "I warn them and help figure out a way to fix the mistake before it triggers a domino effect and makes things worse.", w: { Life: 3, Space: 1, Mind: 1 } },
        { txt: "It depends. Could their mistake harm me or the people around me?", w: { Mind: 3, Time: 2, Doom: -2 } }
    ]},
    { t: "3. When starting a new personal project, what is your biggest concern?", opts: [
        { txt: "If I will manage to give form to everything I imagined and make it truly occupy the space it deserves in the world.", w: { Space: 3, Hope: 2, Time: -2 } },
        { txt: "If I will have time to finish before boredom destroys the plan.", w: { Time: 3, Breath: 1, Space: -2, Life: 1 }, destroys: "Space" },
        { txt: "If this project actually says something true about me or if I'm just following an impulse that doesn't represent me.", w: { Heart: 3, Rage: 3, Mind: -3 }, destroys: "Mind" },
        { txt: "If I made the right decisions in planning or if I'm ignoring some flaw that will ruin the result later.", w: { Mind: 3, Light: 1, Heart: -3 } },
        { txt: "If what I'm creating has the potential to take me to new places and actually change my current situation.", w: { Life: 3, Light: 2, Doom: -3 }, destroys: "Doom" } 
    ]},
    { t: "4. How do you handle harsh criticism regarding your competence?", opts: [
        { txt: "I evaluate if the points raised make sense or if the person just made a wrong decision by judging me that way.", w: { Heart: 3, Time: 1 } },
        { txt: "I get deeply irritated. My competence should not be questioned as I always perform my work with mastery.", w: { Heart: 3, Light: 2 }, destroys: "Void" },
        { txt: "I question the real intention behind the comment. People can criticize for many different reasons.", w: { Light: 3, Rage: 2 } },
        { txt: "I accept what was said. If I failed to be efficient, it's natural that I have to deal with the demands and results of that.", w: { Doom: 3, Void: 1, Time: 2, Life: -2 }, destroys: "Life" },
        { txt: "I try to see what the person saw. Sometimes they noticed a detail or important information that slipped by me.", w: { Blood: 3, Light: 2, Void: -2 } }
    ]},
    { t: "5. In a heated argument, what irritates you the most in others?", opts: [
        { txt: "People who try to 'soften' the situation or maintain forced optimism when things are clearly a disaster.", w: { Rage: 3, Life: 2, Hope: -3 }, destroys: "Hope" },
        { txt: "People who don't interfere or close themselves off to possibilities just because 'the rules don't allow it' or 'it's impossible'.", w: { Hope: 4, Life: 1, Rage: 1 }, destroys: "Doom" }, 
        { txt: "People who treat the problem in a way that is too cold and technical, completely ignoring what the people involved are feeling.", w: { Heart: 3, Breath: 2, Mind: -3, Time: -1 } },
        { txt: "People who lose control and start acting on pure emotional impulse, without stopping for a second to think about the sensible thing to do.", w: { Mind: 3, Space: 1, Heart: -3 } },
        { txt: "People who beat around the bush and focus on details that serve no purpose, instead of going straight to the point that actually matters.", w: { Light: 3, Blood: 2, Time: 2, Void: -2 } }
    ]},
    { t: "6. You have a free weekend. How do you feel standing still?", opts: [
        { txt: "Restless. I feel like every hour I spend without producing something concrete is a waste of a resource that won't come back.", w: { Time: 3, Life: 1, Space: -2 }, destroys: "Space" }, 
        { txt: "Kind of guilty. Being alone and idle makes me feel like I'm failing the people who depend on me or that I'm losing touch with what matters.", w: { Blood: 3, Rage: 3, Doom: 1, Breath: -3 }, destroys: "Breath" },
        { txt: "Light. I enjoy the tranquility and use my time to focus on what I like doing and whatever strikes my fancy.", w: { Breath: 3, Space: 3, Hope: 2, Time: -3 }, destroys: "Time" },
        { txt: "Reflective. I use the silence to try and understand if what I'm doing with life today is what I really want.", w: { Heart: 3, Life: 2, Mind: -1, Light: -1 } },
        { txt: "Bored. If there isn't something new happening or some external stimulus, I feel as if my energy is stagnating.", w: { Life: 3, Rage: 1, Mind: 2, Doom: -2 } }
    ]},
    { t: "7. What attracts you most in someone you just met?", opts: [
        { txt: "Authenticity. I feel attracted to those who seem at peace with themselves and don't pretend to be what they are not.", w: { Heart: 3, Blood: 2, Mind: -2 }, destroys: "Mind" },
        { txt: "Objectivity. I admire those who manage to be direct and coherent, without letting ego or emotions cloud what is sensible.", w: { Mind: 1, Light: 3, Heart: -3 } },
        { txt: "Reliability. I like people who convey security and seem to take the commitments they make seriously.", w: { Blood: 3, Rage: 1, Doom: 3, Breath: -2 } },
        { txt: "Mystery. I am captivated by those who don't expose themselves right away, and I feel compelled to unravel what lies behind the mask.", w: { Light: 2, Doom: 2, Void: -3 } },
        { txt: "Innovativeness. I am interested in those who seem to be always creating or transforming something around them.", w: { Space: 3, Life: 2, Time: -2 } }
    ]},
    { t: "8. You need to fire a hardworking person who has no results. How do you handle it?", opts: [
        { txt: "I focus on what is necessary for the system to function. If a piece isn't fulfilling its role, it needs to be pruned to serve the whole.", w: { Mind: 3, Space: 2, Blood: 2, Life: -3 }, destroys: ["Life", "Hope"] },
        { txt: "I try to give them one more chance or move them to a different role. I believe that, with the right stimulus, anyone can flourish and bounce back.", w: { Life: 3, Hope: 3, Doom: -3 } },
        { txt: "I feel the weight of the decision. I try to make the process as painless as possible, ensuring the person knows they still have my personal support.", w: { Breath: 3, Doom: 2, Heart: 2, Mind: -1 } },
        { txt: "I am direct and honest about the facts. Lying or giving false hope would only make the person waste time in a place where they have no future.", w: { Rage: 3, Light: 2, Hope: -3 } },
        { txt: "I analyze the situation from the outside. If the dismissal is the logical conclusion based on data, I execute the decision without letting sentimentality interfere with the verdict.", w: { Void: 3, Space: 2, Heart: -3 }, destroys: "Heart" },
    ]},
    { t: "9. What is your relationship with memories, photos, and the past?", opts: [
        { txt: "I keep objects and photos with care. Having something physical to touch helps me feel that those moments and people still occupy a real space in my life.", w: { Time: 3, Doom: 2, Space: -2 } },
        { txt: "I look at the past with appreciation. The future only exists because of the past, be it good or bad.", w: { Space: 3, Hope: 3 } },
        { txt: "The past serves as a lesson. I keep what happened only to analyze the consequences of my choices and not commit the same mistake again.", w: { Mind: 3, Light: 1 } },
        { txt: "My memories are what give me strength. I believe that what I lived through is proof that better things can still be built in the future.", w: { Hope: 3, Breath: 2, Rage: 2 } },
        { txt: "I don't give it much importance. What has passed has already lost its shine; I prefer to focus on the now without carrying the weight of what has already been.", w: { Void: 3, Breath: 2, Time: -2 }, destroys: "Time" }
    ]},
    { t: "10. Facing an impasse with no solution, what is your reaction?", opts: [
        { txt: "I try to force a solution. Sometimes the only way out is to force passage and knock down what is blocking the path, at any cost.", w: { Doom: 3, Rage: 1, Hope: -2 } },
        { txt: "I accept the limit. If the path closed, it is because we reached the end of the line and it's no use fighting against a situation that is already decided.", w: { Time: 3, Life: -3 }, destroys: "Life" },
        { txt: "I don't accept that there is no solution. I believe there is always a way out if we persist and maintain our conviction.", w: {Hope: 3, Rage: 3, Life: 1 } },
        { txt: "I try to come up with a new tool or approach the problem from a different angle to get around the obstacle.", w: { Space: 3, Breath: 2, Mind: 3, Time: -1 } },
        { txt: "I stop everything and go back to investigating. If it seems unsolvable, it's because there is still some important detail I failed to see.", w: { Light: 3, Time: 1, Void: -3 }, destroys: "Void" }
    ]},
    { t: "11. A dangerous secret reaches you. What do you think?", opts: [
        { txt: "If this information was entrusted to me or if it can affect the people around me, I keep it with me, no matter the weight.", w: { Blood: 3, Doom: 2, Void: 2, Breath: -2 } },
        { txt: "If this secret is revealed at the right moment, it can bring the clarity everyone needs to act.", w: { Light: 3, Mind: 1, Void: -3 } },
        { txt: "Secrets are usually used to hide ugly truths or to manipulate those who know nothing.", w: { Mind: 3, Rage: 2, Hope: -2 } },
        { txt: "I don't want to know. I don't want this information to change my peace or force me to pick a side.", w: { Void: 3, Breath: 2, Light: -3 }, destroys: "Light" },
        { txt: "A secret is just another variable that can alter the result of my future choices.", w: { Mind: 2, Time: 2, Heart: -2 } }
    ]},
    { t: "12. The group insists on a plan doomed to fail out of optimism. What do you do?", opts: [
        { txt: "I openly say it will go wrong. I prefer to be the annoying one who speaks the truth than to see everyone getting lost in a comfortable lie.", w: { Rage: 3, Blood: 2, Hope: -3 }, destroys: "Hope" },
        { txt: "I show why the idea makes no sense and present an alternative. I won't follow a path that logic already shows is a dead end.", w: { Mind: 3, Light: 1, Heart: -2, Void: -3 } },
        { txt: "I stay out of it. If they came up with the plan, there must be some logic—it's not my place to interfere.", w: { Void: 3, Doom: 1, Rage: -2 } },
        { txt: "I go with them. I believe that if we keep our spirits up and our conviction strong, our will might end up changing the final result.", w: { Hope: 3, Life: 2, Rage: -2 }, destroys: "Rage" }, 
        { txt: "I observe how things unfold. If they chose this path, failure is the natural consequence and I will use the experience to not repeat the mistake.", w: { Space: 3, Light: 2, Time: -3 } }
    ]},
    { t: "13. You are in a place where no one knows you. How do you feel?", opts: [
        { txt: "Free. Without expectations, I can act without being labeled.", w: { Breath: 3, Space: 2, Blood: -2, Life: 1 }, destroys: "Blood" },
        { txt: "Empty. I need to find something, or someone, that comforts me and validates my existence.", w: { Light: 3, Heart: 2, Void: 2, Breath: -3 }, destroys: "Breath" }, 
        { txt: "Observant. A perfect chance to analyze the dynamics of the place, without getting involved.", w: { Void: 2, Time: 3, Heart: -1 }, destroys: "Heart" },
        { txt: "Imaginative. I take the moment to take refuge inside my own head.", w: { Hope: 3, Blood: 1, Void: -3 } },
        { txt: "Disconnected. Alone, I don't have a reason to be here.", w: { Blood: 3, Doom: 2, Breath: -3 } }
    ]},
    { t: "14. You need to hurt someone for a goal. What hurts you?", opts: [
        { txt: "The fact that I'm being false to myself. I hate having to act against what I feel is right just to meet a goal.", w: { Heart: 3, Blood: -2, Hope: 2 } },
        { txt: "The frustration of not having found a better solution. Hurting someone was the necessary sacrifice.", w: { Doom: 3, Light: 3, Heart: -3 }, destroys: "Heart" },
        { txt: "The breach of trust. Knowing that this action will stain or destroy the bond I had with that person, perhaps forever.", w: { Blood: 3, Time: 2, Breath: -2 } },
        { txt: "The necessity of sacrifice. It feels awful to have to step over someone or something alive so the project keeps moving forward.", w: { Life: 3, Breath: 2, Hope: 1, Doom: -3 } },
        { txt: "The confirmation that the world is cruel. Hurting someone is just reality knocking at the door, showing that not everything is solved with good intentions.", w: { Rage: 3, Doom: 1, Hope: -3 } } 
    ]},
    { t: "15. What is your biggest fear regarding the future?", opts: [
        { txt: "Being stuck in a routine or a place I can't leave. The idea of losing my autonomy and being confined terrifies me.", w: { Breath: 3, Void: 2, Time: -3 } },
        { txt: "Realizing that my ideals were empty and that the imminent future is meaningless, where nothing I believed in can flourish.", w: { Hope: 3, Life: 3, Time: -3 } },
        { txt: "Realizing that my existence had no importance or that I will pass through the world without anyone really having seen me.", w: { Light: 3, Heart: 3, Void: -3 } },
        { txt: "Being exposed in a way I cannot control. I fear them digging through my life and taking away the peace of my anonymity.", w: { Void: 3, Mind: 2, Light: -3 }, destroys: "Light" }, 
        { txt: "Not having enough time. I feel a constant anguish that time is running out and I won't manage to conclude what is necessary before the deadline expires.", w: { Time: 3, Doom: 3, Space: -2 } }
    ]},
    { t: "16. You receive a repetitive task. How do you react?", opts: [
        { txt: "I accept it. There is a certain comfort in repetition; knowing exactly what to expect and fulfilling the cycle gives me a sense of security and order.", w: { Doom: 3, Time: 3, Space: -2, Life: -2 }, destroys: "Space" },
        { txt: "I feel suffocated. I hate anything that forces me to stay still or that prevents my growth and the search for something more vibrant.", w: { Life: 3, Breath: 2, Doom: -3 } }, 
        { txt: "I try to find the pattern behind it. If I understand how the process works, I can optimize it and execute it automatically.", w: { Mind: 3, Space: 2, Heart: -1 } },
        { txt: "I see it as an opportunity to 'switch off'. I fulfill the function mechanically while my mind dissociates.", w: { Void: 3, Breath: 3, Light: -2 }, destroys: "Mind" },
        { txt: "I question the task. I don't mind having to do it, but I mind the objective of it.", w: { Rage: 2, Light: 3 } }
    ]},
    { t: "17. In a competition, what is success?", opts: [
        { txt: "The perpetuation of an ideal. Success is showing that what I believe in is possible and managing to inspire others with that result.", w: { Hope: 3, Breath: 1, Life: 1, Rage: -3 }, destroys: "Rage" }, 
        { txt: "Victory. Success is when the competition reveals who is truly competent and who isn't.", w: { Rage: 2, Light: 3, Hope: -3, Void: -3 } }, 
        { txt: "Camaraderie. Success isn't winning alone, but ensuring everyone came out of the experience stronger.", w: { Blood: 3, Heart: 1, Breath: -2 } },
        { txt: "The perfection of the result. Success is when what was delivered reaches a level of technical excellence that cannot be contested.", w: { Space: 3, Mind: 2, Time: -2 } },
        { txt: "The satisfaction of having done my best. If I exerted myself, regardless of the scoreboard, I am satisfied.", w: { Heart: 3, Void: 1, Mind: -3 } }
    ]},
    { t: "18. If you discovered that your entire trajectory up to here was, in fact, planned or 'written' by someone else, what would bother you most?", opts: [
        { txt: "The fact that my choices weren't really mine. It's annoying to think my will was just a piece on a board I didn't control.", w: { Heart: 3, Blood: 1 } },
        { txt: "The doubt about what is the truth. If my story was written, the events I witnessed aren't genuine and need to be re-evaluated.", w: { Rage: 3, Mind: 1, Hope: -3 } },
        { txt: "I would feel a deep relief, actually. Knowing there is a greater purpose and that nothing was by chance gives me the peace that my life has real meaning.", w: { Hope: 3, Doom: 1, Rage: -3 }, destroys: "Rage" },
        { txt: "The feeling of being trapped. Knowing there is a track makes me feel like I was chained to a role, when I just wanted to be free to go wherever I wanted.", w: { Breath: 3, Space: 1 } },
        { txt: "The fear of the ending. If there is a script, there is a planned end, and the idea that my limits and my 'expiration date' have already been decided is what scares me most.", w: { Time: 3, Doom: 3, Life: -2 } }
    ]},
    { t: "19. How do you prefer to be remembered?", opts: [
        { txt: "As someone who inspired others. I want my passage through the world to be seen as an example that better things are possible.", w: { Hope: 3, Life: 2, Breath: 1 } },
        { txt: "By the things I created. I want to leave a physical and lasting legacy, something that occupies real space even when I'm not here.", w: { Space: 3, Time: 2, Void: -1 }, destroys: "Time" }, 
        { txt: "As someone who was the foundation for those who needed it. I want to be remembered as the person who held things together when everything was about to fall.", w: { Blood: 3, Doom: 2 } },
        { txt: "I prefer not to be remembered publicly. My success is having lived my life with privacy and silence, without needing external attention.", w: { Void: 3, Mind: 1, Light: -3 }, destroys: "Light" },
        { txt: "I want my story to be seen as something important and that brought meaning to the people I loved.", w: { Light: 3, Heart: 3, Void: -3 } }
    ]},
    { t: "20. What is freedom to you?", opts: [
        { txt: "Not having to answer to anyone. Freedom is being able to go where I want and restart without the labels and expectations others impose on me.", w: { Breath: 3, Void: 2, Blood: -3 }, destroys: "Blood" }, 
        { txt: "Having the security of a place I belong to. True freedom is knowing I have people who won't abandon me.", w: { Blood: 3, Doom: 1, Breath: -3 } },
        { txt: "Freedom is having health, energy, and resources to go after everything life has to offer.", w: { Life: 3, Space: 2, Doom: -3 } },
        { txt: "Being who I truly am. Freedom is not having to wear masks or pretend I'm someone else to be accepted by society.", w: { Heart: 3, Rage: 3, Mind: -3 } },
        { txt: "Having control of my choices. Freedom is understanding the paths ahead of me and being the only person responsible for the direction I decide to take.", w: { Mind: 3, Time: 2 } }
    ]}
        ],
        "Time": [
    { t: "You have a vital project with an impossible deadline that runs out today.",  opts: [
        { txt: "I sacrifice my sleep, my health, and use every second to ensure the delivery is flawless.", w: { Knight: 3, Maid: 2, Page: 2, Prince: -2 } },
        { txt: "I get lost in distractions and lose track of the hours; if the deadline passes, so be it.", w: { Bard: 3, Prince: -1, Knight: -3 } },
        { txt: "I let the deadline pass and deal with the consequences as they come, without fighting the inevitable.", w: { Heir: 3, Knight: -2, Maid: -2 } },
        { txt: "I know everything will work out, so I end up donating my hours to alleviate the burden of those in crisis.", w: { Rogue: 3, Heir: 2, Thief: -2, Prince: -2 } },
        { txt: "I stop everything to analyze where I went wrong in the schedule and try to predict the impact of my delay.", w: { Seer: 3, Mage: 3, Witch: -1, Page: -1 } }
    ]},
    { t: "A unique opportunity has passed and you missed the deadline. How do you react the next day?", opts: [
        { txt: "I shrug; if the chance passed due to my carelessness, it's a sign it wasn't meant to be.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I invalidate the importance of what passed; if the time for that is over, it shouldn't take up any more space.", w: { Prince: 3, Seer: 2, Sylph: -2, Maid: -2 } },
        { txt: "I refuse to accept 'no'. I try to convince those in charge to open a new spot just for me.", w: { Witch: 3, Thief: 3, Maid: 1, Seer: -2 } },
        { txt: "I help friends with their deadlines, trying to 'fix' other people's time since I broke mine.", w: { Sylph: 3, Rogue: 2, Prince: -2, Bard: -2 } },
        { txt: "I create a rigid rule in my routine so that I never lose a chance through carelessness again.", w: { Page: 3, Knight: 2, Mage: 1, Heir: -2 } }
    ]},
    { t: "Someone close to you passed away. How do you process this absence in the following weeks?", opts: [
        { txt: "I delete memories and get rid of belongings; the past is a weight I cannot handle.", w: { Prince: 3, Sylph: -3, Knight: -1 } },
        { txt: "I bury myself in practical tasks. I organize my routine and stay immersed in my obligations.", w: { Maid: 3, Knight: 3, Page: 1, Prince: -2 } },
        { txt: "I let the memories fade on their own; I allow time to erase the person's presence from the routine.", w: { Bard: 3, Heir: 1, Sylph: -2 } },
        { txt: "I try to compensate for the grief by dedicating myself to causes that were theirs or living for the sake of their legacy.", w: { Sylph: 3, Rogue: 2, Bard: -2, Thief: 3 } },
        { txt: "I let the pain and longing guide me naturally, without trying to control or force forgetfulness.", w: { Heir: 3, Page: 2, Seer: 2, Witch: -2, Maid: -1 } }
    ]},
    { t: "How do you view the concept of 'Legacy' and what you leave for the future?", opts: [
        { txt: "It is a burden. I feel I must work tirelessly to be worthy of what came before me.", w: { Page: 3, Knight: 2, Maid: 1, Bard: -2 } },
        { txt: "I don't feel responsible for keeping anything alive; if the past is lost due to lack of care, that's fine.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "It is a tool. Knowledge of the past serves only for me to predict and manipulate what is to come.", w: { Mage: 3, Seer: 2, Thief: 1, Rogue: -1 } },
        { txt: "Legacy is the past colonizing the future. I prefer to destroy traditions to make room for innovation.", w: { Prince: 3, Knight: -2, Page: -3 } },
        { txt: "It is something collective. I am just a link passing what I received to those who need it more.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
    ]},
    { t: "You are in a checkout line that isn't moving and you have an important commitment right after.", opts: [
        { txt: "I try to switch lines or rush the people around me. I don't admit delays changing my plans.", w: { Thief: 3, Witch: 2, Prince: 1, Heir: -2 } },
        { txt: "I take the lead. I help organize the groceries or guide those who are confused so time flows.", w: { Maid: 3, Sylph: 2, Knight: 1, Prince: -2 } },
        { txt: "I stay calm. I know time has its course and stressing out won't make the line move.", w: { Heir: 3, Rogue: 1, Knight: -3 } },
        { txt: "I accept the delay without fighting; I use the slowness of the line as an excuse and don't stress about the result.", w: { Bard: 3, Heir: 2, Knight: -3 } },
        { txt: "I calculate the exact time I can still wait before giving up, based on the probability of delay.", w: { Seer: 3, Mage: 2, Page: 1, Witch: -1 } }
    ]},
    { t: "If you could change something about a tragic event in your past, how would you approach it?", opts: [
        { txt: "I wouldn't change anything. Trauma is a necessary lesson and fate shouldn't be altered by whims.", w: { Seer: 2, Heir: 3, Witch: -3 } },
        { txt: "I'd leave it as is; the misfortune served to break who I was and forced me to move on.", w: { Bard: 3, Heir: 1, Knight: -2 } },
        { txt: "I would destroy the cause of the event without hesitation. The freedom to change is more important than time.", w: { Prince: 3, Witch: 3, Knight: 2, Mage: -2 } },
        { txt: "I would prepare better. If I knew what would happen, I would have worked twice as hard to protect what I lost.", w: { Knight: 3, Maid: 2, Page: 2, Bard: -2 } },
        { txt: "I would try to take something good from the tragedy to help others, transforming pain into a resource.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
    ]},
    { t: "You find an old, broken tool or object that belonged to your family. What do you do?", opts: [
        { txt: "I fix it immediately; I feel an obligation to restore the function of what time tried to destroy.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -2 } },
        { txt: "I use its parts to create something new; the past serves only as raw material for the future.", w: { Witch: 3, Prince: 2, Mage: -2, Seer: -1 } },
        { txt: "I leave the object where it is; if it broke and aged, I see no point in trying to save it now.", w: { Bard: 3, Mage: 1, Maid: -3 } },
        { txt: "I analyze the object to understand the story of who used it; it is a record that teaches about the end.", w: { Seer: 3, Mage: 2, Thief: -2 } },
        { txt: "I give the object to someone who knows how to appreciate it; I don't want to carry the weight of something that is dead.", w: { Rogue: 3, Heir: 2, Maid: -2, Knight: -2 } }
    ]},
    { t: "Someone asks you for a favor that will take up all the hours of your only day off this week.", opts: [
        { txt: "I say no promptly; my free time is the limit I establish to not be consumed.", w: { Prince: 3, Knight: 2, Thief: 2, Sylph: -3 } },
        { txt: "I yield to pressure, but spend the day feeling like I'm being drained and wasting my life.", w: { Rogue: 3, Page: 2, Maid: 1, Witch: -2 } },
        { txt: "I say I'll help, but I end up delaying so much that the person gives up waiting for me.", w: { Bard: 3, Prince: 1, Maid: -3 } },
        { txt: "I help as quickly as possible; I use my knowledge to finish in half the expected time.", w: { Witch: 3, Maid: 2, Mage: 2, Knight: -1 } },
        { txt: "I accept the favor as part of the day; if time must be spent this way, I adapt and find satisfaction.", w: { Heir: 3, Sylph: 2, Seer: 1, Prince: -3 } }
    ]},
    { t: "You are watching a movie or reading a book and realize the ending will be sad and inevitable. How do you react?", opts: [
        { txt: "I stop reading immediately; I refuse to waste my time with a conclusion I've already accepted.", w: { Prince: 3, Witch: 2, Seer: -2, Mage: -2 } },
        { txt: "I go to the end, even while suffering; I need to understand how to avoid something like that in real life.", w: { Mage: 3, Seer: 2, Knight: 1, Bard: -2 } },
        { txt: "I try to convince others to watch with me; sharing the emotional load makes the ending less heavy.", w: { Rogue: 3, Sylph: 2, Page: 1, Thief: -2 } },
        { txt: "I look for spoilers; if the end is going to be bad, I prefer to end the suspense right away and not waste time.", w: { Bard: 3, Thief: 2, Knight: -3 } },
        { txt: "I become obsessed with the technical details of the work to distance myself from the path towards death.", w: { Knight: 3, Maid: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "What is your relationship with other people's punctuality?", opts: [
        { txt: "I demand absolute precision; others' lateness is an offense to the order I try to maintain.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -2 } },
        { txt: "I don't mind; time is fluid and people arrive when they are supposed to arrive.", w: { Heir: 2, Rogue: 2, Knight: -3 } },
        { txt: "I usually run late, so I don't judge; I think it's great when others are late too and take the pressure off me.", w: { Bard: 3, Heir: 2, Maid: -3, Knight: -3 } },
        { txt: "I take advantage of their delay to steal this time for my own activities.", w: { Thief: 3, Witch: 2, Prince: 1, Sylph: -2 } },
        { txt: "I keep analyzing the reasons for the delay, trying to predict if this will become a pattern.", w: { Seer: 3, Mage: 2, Maid: 1, Page: -1 } }
    ]}
    ],
    "Space": [
    { t: "You share a room with someone extremely disorganized who is 'leaking' objects onto your side of the desk.", opts: [
        { txt: "I clean up their mess without asking. Their disorder offends my need for a perfect environment.", w: { Maid: 3, Knight: 2, Prince: -2, Bard: -2 } },
        { txt: "I throw everything in the trash immediately. Accumulating junk is wasteful and I prefer emptiness to disorder.", w: { Prince: 3, Bard: 2, Sylph: -3, Maid: -2 } },
        { txt: "I don't even notice. I just push their stuff aside to fit my plate and carry on amidst the chaos.", w: { Bard: 3, Heir: 1, Mage: -1, Prince: -3 } },
        { txt: "I take their most useful items and incorporate them into my side. If they don't take care of it, I'll take better care.", w: { Thief: 3, Witch: 2, Rogue: -2, Page: -1 } },
        { txt: "I try to reorganize their things so they learn to maintain the space themselves.", w: { Sylph: 3, Seer: 2, Prince: -3, Thief: -1 } }
    ]},
    { t: "You are at a party where you don't know anyone and the environment feels vast and impersonal.", opts: [
        { txt: "I stay in a corner trying to understand the social mechanics of the place, as if it were a puzzle I don't know how to solve.", w: { Page: 3, Mage: 3, Seer: 2, Prince: -2 } },
        { txt: "If the environment doesn't welcome me, I leave without saying goodbye or isolate myself in a corner, cutting my connection to the setting.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -2 } },
        { txt: "I feel invisible, so I try to stick to any group to occupy space and feel part of the crowd.", w: { Thief: 3, Rogue: 2, Prince: -2, Seer: -1 } },
        { txt: "I just exist there. I don't try to interact or leave, I just let time pass while staring at the ceiling, oblivious to the place.", w: { Bard: 3, Heir: 2, Knight: -2, Maid: -2 } },
        { txt: "I wander around aimlessly. If I find something cool, I stop; if not, I just let the music carry me.", w: { Heir: 3, Rogue: 1, Knight: -2, Maid: -1 } }
    ]},
    { t: "A close friend moved to another country. How do you handle the physical distance?", opts: [
        { txt: "I maintain obsessive contact. I need to know every detail of their new space to feel present.", w: { Witch: 3, Knight: 2, Maid: 1, Prince: -3 } },
        { txt: "Distance killed the relationship. If we don't occupy the same space, I cut the bond so as not to carry dead weight.", w: { Prince: 3, Thief: 1, Witch: -3, Sylph: -2 } },
        { txt: "I forget to message. Physical distance ends up naturally turning into emotional distance because I don't chase after them.", w: { Bard: 3, Heir: 2, Rogue: 1, Sylph: -2 } },
        { txt: "I feel a silent envy. I post photos of interesting places where I am to prove my space is relevant.", w: { Thief: 3, Page: 2, Rogue: -2, Heir: -1 } },
        { txt: "I understand the space between us has changed. I accept the longing and let the friendship find its new volume.", w: { Seer: 2, Heir: 3, Thief: -2, Knight: -1 } }
    ]},
    { t: "You decided to start a new hobby, but you don't have the right tools or a suitable place.", opts: [
        { txt: "I make do with what I have. I improvise tools; if I put in the effort, I find a way.", w: { Knight: 3, Maid: 3, Page: 1, Bard: -2 } },
        { txt: "I start anyway, without measuring anything. If it ends up crooked or breaks in the process, so be it.", w: { Bard: 3, Rogue: 1, Mage: -1, Seer: -2 } },
        { txt: "I spend weeks researching the perfect layout. If the setting isn't ideal, creation doesn't flow.", w: { Mage: 3, Seer: 3, Heir: -1, Knight: -1 } },
        { txt: "I borrow things and 'forget' to return them. If I don't have it, I'll make use of someone who does.", w: { Thief: 3, Witch: 2, Sylph: -2, Maid: -1 } },
        { txt: "I give up. If the environment doesn't cooperate, I eliminate the idea from my head and look for something viable.", w: { Prince: 3, Heir: 1, Knight: -3, Maid: -2 } }
    ]},
    { t: "Someone enters your room without knocking while you are focused on something important.", opts: [
        { txt: "I kick the person out immediately. My creative space is sacred and I don't tolerate intrusions.", w: { Prince: 3, Knight: 2, Sylph: -3, Rogue: -2 } },
        { txt: "I hide what I'm doing. I'm terrified of having my incomplete creative process seen.", w: { Page: 3, Thief: 2, Maid: 1, Prince: -1 } },
        { txt: "I integrate the person into what I'm doing, taking advantage of the interruption to shift focus.", w: { Witch: 3, Sylph: 2, Heir: 2, Prince: -3 } },
        { txt: "I do nothing. The person enters, touches things, and I continue in my world, totally ignoring their presence.", w: { Bard: 3, Mage: 1, Knight: -2 } },
        { txt: "I get annoyed in silence, analyzing how that physical presence ruined my flow.", w: { Mage: 3, Seer: 2, Knight: -1, Witch: -1 } }
    ]},
    { t: "You are in a crowded and uncomfortable elevator. How do you behave?", opts: [
        { txt: "I try to occupy the minimum space possible, almost merging into the wall.", w: { Rogue: 3, Page: 2, Sylph: 1, Prince: -2 } },
        { txt: "I analyze the elevator mechanics or people's positions to distract myself from the discomfort.", w: { Seer: 3, Mage: 2, Heir: 1, Bard: -1 } },
        { txt: "I distract myself with anything. I stare at nothing, ignoring the cramp, pretending I'm not occupying space there.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
        { txt: "I get furious at the lack of space and push if needed to guarantee my spot.", w: { Prince: 3, Thief: 2, Witch: 1, Rogue: -2 } },
        { txt: "I strike up a trivial conversation to ease the tension and expand the comfort of the environment.", w: { Sylph: 3, Heir: 2, Prince: -3, Mage: -1 } }
    ]},
    { t: "Upon moving, you find objects from an ex-partner or a friendship that ended badly.", opts: [
        { txt: "I destroy everything. It does me no good to keep reminders of what no longer exists.", w: { Prince: 3, Witch: 2, Thief: -3, Knight: -2 } },
        { txt: "I store everything in a box at the back. I'm afraid of losing parts of my history.", w: { Thief: 3, Knight: 2, Page: 1, Prince: -3 } },
        { txt: "I give the objects to those in need. I transform the junk into something useful for someone else.", w: { Rogue: 3, Maid: 2, Sylph: 1, Thief: -3 } },
        { txt: "I leave everything in a corner gathering dust. I don't throw it away or use it, the objects just stay there existing until they fade from my view.", w: { Bard: 3, Heir: 1, Mage: 1, Prince: -2 } },
        { txt: "I look at the objects and reflect on the void they left and how it was filled.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -2 } }
    ]},
    { t: "You are waiting for a result that depends on slow bureaucratic processes.", opts: [
        { txt: "I keep myself busy thinking of new projects. Physical inertia drives me to despair.", w: { Maid: 3, Knight: 2, Page: 1, Bard: -2 } },
        { txt: "I try to use contacts or shortcuts. I don't accept the system's physical limitations stopping me.", w: { Witch: 3, Thief: 3, Seer: -2, Mage: -1 } },
        { txt: "I forget the process exists. If the result comes, it comes. If not, I won't even remember to check.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
        { txt: "I accept the slowness. I understand things have their own time to materialize.", w: { Heir: 3, Sylph: 1, Seer: 1, Prince: -3 } },
        { txt: "I get anxious. I start researching to try and understand the bureaucratic processes to prepare myself.", w: { Mage: 3, Seer: 3, Prince: -1, Knight: -1 } }
    ]},
    { t: "You face a 'creative block': the white canvas or empty space you need to fill. What is your reaction?", opts: [
        { txt: "I destroy what I started or change the environment radically. It's not worth frustrating myself if I can't work on what has been (or will be) done.", w: { Prince: 3, Witch: 2, Heir: -2 } },
        { txt: "The void confirms my fear that I have nothing original to offer. I copy trends to give life to my creation.", w: { Thief: 2, Rogue: 1, Page: 1 } },
        { txt: "I scribble some nonsense or leave the canvas blank for days, without stressing about the lack of production.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "While I can't work on anything, I study artistic processes. I prefer to prepare before anything else.", w: { Mage: 2, Seer: 2, Heir: 1 } },
        { txt: "I start filling the space with small details, tending to the environment until the idea emerges. I just don't want to leave the canvas blank.", w: { Sylph: 2, Maid: 1, Knight: 1 } }
    ]},
    { t: "You are alone in a room in absolute silence. How does this absence of stimulus affect you?", opts: [
        { txt: "Inertia drives me to despair. I start tidying things up; I need to feel I am modifying the environment.", w: { Prince: 1, Knight: 2, Maid: 1 } },
        { txt: "I feel a bad emptiness. I need to see things, eat, or consume content to not go crazy with this silence.", w: { Thief: 2, Rogue: 2, Page: 1 } },
        { txt: "I feel free. Without the physical pressure of other people, my mind expands.", w: { Heir: 2, Seer: 1, Mage: 1 } },
        { txt: "I use the isolation to train and improve my skills with no one watching.", w: { Page: 2, Knight: 1 } },
        { txt: "I lie down staring at the ceiling. The lack of stimulus makes me shut down and I just stay there, vegetating in peace.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } }
    ]}
	],
    "Rage": [
    { t: "You discover that an important rule of the institution benefits only the veterans.", opts: [
        { txt: "I believe there must be a reason and that reality is manipulable.", w: { Prince: 3, Sylph: 1, Heir: -3, Knight: -2 } },
        { txt: "I expose the flaw publicly, destroying the rule's credibility without mercy.", w: { Heir: 3, Mage: 3, Witch: 2, Bard: -3 } },
        { txt: "I make a joke of the situation. If the rule is unfair and stupid, the least I can do is ridicule those who follow it.", w: { Bard: 3, Thief: 1, Page: -1, Seer: -2 } },
        { txt: "I seek to understand who benefits and how I can use this loophole for my own gain.", w: { Thief: 3, Maid: 2, Seer: 2, Page: -1 } },
        { txt: "I try to warn those harmed, serving as support against the injustice.", w: { Rogue: 3, Sylph: 3, Page: 2, Knight: 1 } }
    ]},
    { t: "A project you value is canceled due to a silly mistake by someone else.", opts: [
        { txt: "I decide the project wasn't important. I kill my interest on the spot so I don't feel anger.", w: { Prince: 3, Maid: -2, Page: -2, Heir: -1 } },
        { txt: "I skirt around the prohibition and keep doing what I want, subverting authority.", w: { Thief: 3, Witch: 3, Heir: 2, Seer: -2 } },
        { txt: "I take the blame and work twice as hard to save what's left.", w: { Page: 3, Knight: 3, Maid: 2, Prince: -3 } },
        { txt: "I laugh at the disaster. So much effort for nothing? It's so absurd it's almost funny. I let it die.", w: { Bard: 3, Heir: 1, Mage: 1, Knight: -3 } },
        { txt: "I observe the frustration and wait to see if the truth comes out on its own.", w: { Seer: 3, Heir: 2, Mage: 2, Rogue: 1, Witch: -2 } }
    ]},
    { t: "You are at a social event where everyone pretends to be happy and successful, but you clearly perceive the tensions and lies behind the conversations. How do you behave?", opts: [
        { txt: "I get into character and am as pleasant as possible; harmony is more important than my feelings.", w: { Prince: 3, Knight: -3, Mage: -2 } },
        { txt: "I feel a physical discomfort with the falseness and stay in a corner, cataloging every hypocrisy.", w: { Seer: 3, Mage: 2, Heir: 1, Prince: -2 } },
        { txt: "I just stand there existing, kind of zoned out. Their fakeness is their problem; I just let the vibe get weird without trying.", w: { Bard: 3, Rogue: 1, Maid: -2 } },
        { txt: "I try to start real conversations, subtly poking at wounds to see who is authentic.", w: { Witch: 2, Thief: 3, Sylph: 1, Maid: -2 } },
        { txt: "I put on a mask of competence and try to be a pillar of stability for those who are suffering.", w: { Knight: 3, Page: 2, Rogue: 2, Maid: 1, Bard: -2 } }
    ]},
    { t: "You discover that a goal you pursued for years is impossible to reach due to a limitation of yours or the system that you cannot change. What is your reaction?", opts: [
        { txt: "I decide immediately that the goal was stupid. I destroy the desire I had to free myself from frustration.", w: { Prince: 3, Mage: -3, Page: -2 } },
        { txt: "I accept the limit and study the contours of this 'wall' to understand what is real.", w: { Mage: 3, Seer: 2, Heir: 1, Witch: -2 } },
        { txt: "I refuse to accept it. I will work punitively until I break the rule or the rule breaks me.", w: { Page: 3, Knight: 2, Maid: 3, Prince: -3 } },
        { txt: "I give up and go do something else. If the universe doesn't want it, I won't fight; failure is part of it.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
        { txt: "I try to find other people who failed so we can share the frustration.", w: { Rogue: 3, Sylph: 2, Thief: -2, Witch: -1 } }
    ]},
    { t: "In a group, someone insists on an idea that you know is false.", opts: [
        { txt: "If the person is happy believing that, I don't see why I should destroy the illusion.", w: { Prince: 3, Sylph: 1, Heir: -3, Knight: -2 } },
        { txt: "I agree with the lie just for the lulz. I want to see how far this hallucination goes before it collapses.", w: { Bard: 3, Thief: 1, Witch: 1, Seer: -2 } },
        { txt: "I speak the naked, raw truth, destroying the false argument in front of everyone.", w: { Heir: 3, Mage: 3, Seer: 2, Sylph: 1, Thief: 2 } },
        { txt: "I protect others from the bad idea, serving as an anchor of reality.", w: { Knight: 3, Maid: 2, Sylph: 2, Rogue: 2, Page: 1 } },
        { txt: "I explain the situation to those who are confused, trying to cure the misinformation.", w: { Rogue: 3, Sylph: 3, Page: 2, Heir: 1 } }
    ]},
    { t: "You realize you are being tricked in an important conversation.", opts: [
        { txt: "I interrupt and show I know what they are doing, forcing the truth to appear.", w: { Witch: 3, Prince: 3, Thief: 2, Heir: -3 } },
        { txt: "I maintain harmony and pretend I didn't notice. I want to see how far it goes.", w: { Prince: 2, Knight: -2, Heir: -3, Sylph: 1 } },
        { txt: "I don't even care. If they need to lie to me, they are pathetic. I let them tangle themselves up.", w: { Bard: 3, Rogue: 1, Mage: 1 } },
        { txt: "I get indignant and create a rigid barrier so I am never fooled again.", w: { Knight: 3, Page: 3, Maid: 2, Mage: 1 } },
        { txt: "I study the person's behavior to understand the logic behind the dishonesty.", w: { Mage: 3, Seer: 3, Rogue: 2, Sylph: 1 } }
    ]},
    { t: "How do you feel when you realize the world is unfair?", opts: [
        { txt: "This proves that taking life seriously is silly. I laugh at the absurdity and let things flow.", w: { Bard: 3, Heir: 2, Maid: -3, Knight: -2 } },
        { txt: "I ignore the bad news. I destroy anything that threatens my mental peace.", w: { Prince: 3, Seer: -3, Mage: -2 } },
        { txt: "I focus on being impeccable in my obligations. My discipline is my response to chaos.", w: { Maid: 3, Knight: 3, Page: 2, Bard: -3, Sylph: 1} },
        { txt: "I look for groups that share my indignation so we can support each other.", w: { Rogue: 3, Sylph: 2, Witch: 2, Heir: 2 } },
        { txt: "I accept the game is rigged, but I try to cheat back whenever I can.", w: { Thief: 3, Witch: 2, Page: -1, Seer: -1 } }
    ]},
    { t: "You discover that the person you admired most is, in fact, a complete fraud and everything they preached was a lie.", opts: [
        { txt: "I refuse to believe it. I maintain my faith in their image despite reality.", w: { Prince: 3, Sylph: 1, Page: 2, Heir: -3, Seer: -3 } },
        { txt: "I'm not surprised. Everyone is kind of rotten anyway. I keep watching for the entertainment of the disaster.", w: { Bard: 3, Mage: 1, Page: -1 } },
        { txt: "I stop respecting them on the spot. I erase any trace of admiration; they are dead to me.", w: { Heir: 3, Seer: 2, Knight: 2, Thief: 2 } },
        { txt: "I use the mistake as an example to educate others and prevent them from falling into the same trap.", w: { Witch: 3, Sylph: 3, Rogue: 2, Maid: 2 } },
        { txt: "I keep ruminating on the disappointment and start being much more skeptical about everything.", w: { Mage: 3, Page: 3, Heir: 1, Bard: -2 } }
    ]},
    { t: "In an environment where everyone argues irrationally, what is your attitude?", opts: [
        { txt: "I crack a joke to deflect attention and restore the light atmosphere.", w: { Sylph: 1, Heir: 2, Prince: -2, Rogue: 2 } },
        { txt: "I drop a dry line that summarizes the ridiculousness, silencing everyone with the raw truth.", w: { Prince: 3, Seer: 3, Mage: 2, Sylph: 2, Witch: 2 } },
        { txt: "I add fuel to the fire. I make a random comment just to see the confusion grow.", w: { Bard: 3, Thief: 2, Witch: 1, Knight: -2 } },
        { txt: "I take advantage of the fact that no one is paying attention to 'steal' my time and resolve my own things.", w: { Thief: 3, Witch: 2, Page: 2, Rogue: 1 } },
        { txt: "I maintain control and wait for the chaos to pass, judging others' lack of composure.", w: { Knight: 3, Maid: 3, Page: 2, Heir: 2, Mage: 1 } }
    ]},
    { t: "You need to choose between being honest and losing a chance, or lying and getting what you want.", opts: [
        { txt: "I speak the truth no matter who it hurts. The truth is the only real path.", w: { Mage: 3, Seer: 3, Heir: 3, Thief: -3 } },
        { txt: "I lie if it maintains my peace; the raw truth is sometimes too destructive.", w: { Prince: 2, Heir: 2, Maid: -2 } },
        { txt: "I say whatever is most convenient or funny at the moment. Truth is relative and I owe nothing to anyone.", w: { Bard: 3, Thief: 2, Witch: 1, Knight: -3 } },
        { txt: "I am honestly aggressive, punishing whoever forced me to choose.", w: { Knight: 3, Page: 3, Maid: 2, Thief: 2 } },
        { txt: "I lie if it helps more people, hiding the truth for a greater good.", w: { Sylph: 3, Rogue: 3, Witch: 3, Prince: -2 } }
    ]}
	],
   "Light": [
    { t: "You are part of a team that achieved a remarkable feat, but only one person will be the public face of this success. How do you position yourself?", opts: [
        { txt: "I ensure my contribution is the most visible; if the result is excellent, it is fair that I hold control of the narrative.", w: { Thief: 3, Witch: 2, Maid: 2, Prince: -3 } },
        { txt: "I prefer to erase my participation and stay out of the spotlight; public attention is invasive noise I prefer to avoid.", w: { Prince: 3, Page: -2, Thief: -3 } },
        { txt: "I make a point of highlighting the effort of those who appeared least, ensuring recognition is shared.", w: { Rogue: 3, Sylph: 2, Thief: -3, Maid: -1 } },
        { txt: "I don't even care if they know it was me. If they forget my name in the credits, so be it. Fame is too much work.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
        { txt: "I don't force anything. If people notice my value, great; if not, I know eventually my contribution will be recognized.", w: { Heir: 3, Seer: 2, Knight: -2, Witch: -1 } }
    ]},
    { t: "You discover a compromising truth about someone influential that could alter the course of a situation. What do you do with it?", opts: [
        { txt: "I analyze every detail of this information and how it connects to the whole, feeling the weight of carrying a truth others ignore.", w: { Mage: 3, Seer: 2, Prince: -1 } },
        { txt: "I let the information leak 'accidentally' or forget to keep it a secret. If the truth comes out and causes chaos, it happened.", w: { Bard: 3, Witch: 2, Rogue: 1, Sylph: -2 } },
        { txt: "I keep this knowledge as armor or a strategic tool, ready to use it to protect my position.", w: { Knight: 3, Thief: 2, Sylph: -2, Rogue: -2 } },
        { txt: "I pretend I never saw anything and destroy the evidence. Some truths are useless and only serve to complicate what already works.", w: { Prince: 3, Seer: -3, Mage: -2 } },
        { txt: "I share the information with the affected people to restore clarity and ensure no one is deceived.", w: { Sylph: 3, Rogue: 2, Thief: -3, Prince: -1 } }
    ]},
    { t: "In a crisis where success depends purely on a factor you don't control (like luck or an external decision), what is your stance?", opts: [
        { txt: "I trust luck will be on my side. I feel probabilities tend to conspire in my favor.", w: { Heir: 3, Knight: -3, Mage: -2 } },
        { txt: "I flip a coin and see what happens. If it goes wrong, it goes wrong. I don't try to control the uncontrollable, I just watch the result.", w: { Bard: 3, Rogue: 1, Page: 1, Seer: -2 } },
        { txt: "I try to find loopholes or influence the decision-maker to ensure the odds tip in my favor.", w: { Witch: 3, Thief: 2, Heir: -2, Seer: -2 } },
        { txt: "I ignore the idea of luck and work exhaustively behind the scenes to compensate for any unforeseen event.", w: { Knight: 3, Maid: 2, Page: 2, Heir: -3 } },
        { txt: "I worry about calculating every variable and possible signal, trying to predict the outcome so as not to be caught off guard.", w: { Seer: 3, Mage: 3, Heir: -2, Bard: -1 } }
    ]},
    { t: "A personal mistake of yours is exposed publicly and you become the center of attention and judgment. How do you react?", opts: [
        { txt: "I decide that other people's opinions are irrelevant. I treat the exposure as valueless and move on.", w: { Prince: 3, Knight: -3, Page: -2 } },
        { txt: "I admit the failure and start working punitively to correct the facts and restore my reputation.", w: { Maid: 3, Sylph: 2, Prince: -2 } },
        { txt: "I take it in stride. If my reputation went down the drain, at least the story was funny. I won't kill myself to clear my name.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -3 } },
        { txt: "I use the shame of exposure as fuel to study where I went wrong and ensure it never happens again.", w: { Page: 3, Knight: 2, Heir: -2, Bard: -1 } },
        { txt: "I try to divert the focus from my mistake to another subject that is more relevant at the moment.", w: { Thief: 3, Rogue: 2, Mage: -2, Seer: -1 } }
    ]},
    { t: "You notice a project you dedicated yourself to is losing relevance and interest from other people. What do you do?", opts: [
        { txt: "I exaggerate the project's importance or create a new fact so it returns to being the center of attention by force.", w: { Thief: 3, Witch: 2, Prince: -3, Rogue: -2 } },
        { txt: "I let it die. I prefer it falls into oblivion than seeing it wither without purpose under someone else's light.", w: { Prince: 3, Maid: -3, Sylph: -2 } },
        { txt: "I reformulate the project with new information and clarity, trying to make it useful again for the group.", w: { Sylph: 3, Maid: 3, Prince: -2, Bard: -1 } },
        { txt: "I lose interest and go do something else. If the project dies from lack of my attention, it's because it wasn't shining anymore.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I accept that relevance is cyclical. I observe what people are valuing now and let my interest shift.", w: { Heir: 3, Seer: 3, Thief: -2, Witch: -1 } }
    ]},
    { t: "How do you handle the need to be 'seen' or validated by others in your daily life?", opts: [
        { txt: "I feel I need to prove my worth constantly; if I'm not being noticed, I lose my relevance.", w: { Knight: 3, Page: 3, Maid: 2, Prince: -3 } },
        { txt: "I feel assaulted by constant attention. I prefer anonymity and darkness.", w: { Prince: 3, Thief: -3, Page: -2 } },
        { txt: "I don't care if they see me or not. Sometimes I'm the center of attention, sometimes I'm invisible. I let it happen without forcing it.", w: { Bard: 3, Heir: 2, Rogue: 1, Mage: 1 } },
        { txt: "I prefer my merit be redirected to what I produce or to the group; I hate being the central focus.", w: { Rogue: 3, Sylph: 2, Thief: -2, Knight: -1 } },
        { txt: "I use my image and visibility only as a specific tool to get what I want.", w: { Witch: 3, Thief: 3, Page: -2, Knight: -2 } }
    ]},
    { t: "When facing several conflicting versions of the same story, how do you decide which one to believe?", opts: [
        { txt: "I seek the factual and logical version. Truth should not be shaped by convenience.", w: { Seer: 3, Mage: 3, Witch: -3, Thief: -2 } },
        { txt: "I choose the version that best serves my goals or creates the most useful narrative.", w: { Witch: 3, Thief: 2, Seer: -3, Mage: -2 } },
        { txt: "I don't believe any of them. I let people fight over the 'truth' while I watch from afar, finding the confusion amusing.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "I believe there is no absolute truth; I let each version flow and time reveal which will carry more weight.", w: { Heir: 3, Knight: -3, Maid: -2 } },
        { txt: "I adopt the version that demands more responsibility and action from me, using it as a map.", w: { Knight: 3, Page: 2, Bard: -2, Heir: -1 } }
    ]},
     { t: "When observing a tragic or random event in the world, what is your first mental impulse?", opts: [
        { txt: "I immediately look for a lesson or purpose. I refuse to accept things happen without reason.", w: { Sylph: 3, Maid: 2, Seer: 2, Prince: -3 } },
        { txt: "I become obsessed with understanding the chain of events, cataloging every error so ignorance is not repeated.", w: { Mage: 3, Page: 2, Knight: 2, Heir: -2 } },
        { txt: "I accept the world is a place of noise and trying to find 'meaning' in everything is a waste of time.", w: { Prince: 3, Maid: -3, Sylph: -2 } },
        { txt: "I don't think much about it. Bad things happen, the world is random. I go on with my life without trying to decipher the chaos.", w: { Bard: 3, Heir: 2, Rogue: 1, Seer: -2 } },
        { txt: "I try to use the impact of the event to call attention to causes I consider important.", w: { Thief: 3, Witch: 2, Rogue: -2, Seer: -1 } }
    ]},
    { t: "You are in a heated argument where you know, with 100% certainty, that the other person is wrong about a technical or historical fact. How do you act?", opts: [
        { txt: "I interrupt and present the evidence. I can't stand seeing misinformation prosper when the truth is available.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -3 } },
        { txt: "I let them keep saying whatever they want. Other people's ignorance is irrelevant to me.", w: { Prince: 3, Mage: -2, Seer: -2 } },
        { txt: "I let the person talk nonsense. It's fun to see someone so confident in error, and I won't waste my energy correcting them.", w: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
        { txt: "I use their error as a strategic advantage, letting them expose themselves until I use the truth to disarm them.", w: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
        { txt: "I try to correct the person subtly, sharing knowledge as if it were something we are discovering together.", w: { Rogue: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "In a tense situation, you realize total transparency is causing conflicts. What is your attitude?", opts: [
        { txt: "I defend that clarity is the only cure. Everything must be exposed to solve the problem at the root.", w: { Sylph: 3, Seer: 2, Prince: -3, Bard: -2 } },
        { txt: "I believe secrecy is a form of protection; some things should remain in the dark.", w: { Prince: 3, Sylph: -3, Seer: -2 } },
        { txt: "I release the truth and step away. If clarity causes a fight, let it. The circus catching fire is more interesting.", w: { Bard: 3, Thief: 2, Witch: 1, Seer: -1 } },
        { txt: "I organize the information pragmatically, revealing only what is necessary to maintain order.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
        { txt: "I share the truth in a diluted form, trying to make the weight of the information shared.", w: { Rogue: 3, Heir: 2, Thief: -2, Witch: -1 } }
    ]}
	],
    "Void": [
    { t: "You discover an intimate secret of an acquaintance that would change everyone's perception of them, but no one else knows.", opts: [
        { txt: "I reveal the truth immediately. I hate secrets; they are holes in reality that need to be filled with facts.", w: { Prince: 3, Seer: 2, Light: 1 } },
        { txt: "I keep this information as a personal trump card, feeling that hidden knowledge gives me an advantage.", w: { Thief: 3, Witch: 2, Mage: 1 } },
        { txt: "I end up letting the secret slip by accident in a random conversation. I'm not good at keeping things I don't care much about.", w: { Bard: 3, Rogue: 1, Page: 1, Seer: -2 } },
        { txt: "I protect this information with the utmost discretion. If the secret exists, it is because it must remain in the dark.", w: { Maid: 3, Knight: 2, Page: 2 } },
        { txt: "I observe how this 'unsaid' influences interactions, letting the mystery follow its natural course.", w: { Mage: 3, Heir: 1, Bard: 1 } }
    ]},
    { t: "In a social setting, you realize your contributions are ignored and you feel like a non-entity.", opts: [
        { txt: "I prefer it that way. I stay in my corner, invisible, doing my own thing with no one to bother me.", w: { Bard: 3, Heir: 2, Rogue: 2, Prince: -3 } },
        { txt: "I accept the anonymity. There is immense freedom in not being noticed, allowing me to act without the weight of expectation.", w: { Heir: 3, Rogue: 2, Mage: 1 } },
        { txt: "This hurts me, so I start acting with performative competence, trying to prove my worth.", w: { Page: 3, Knight: 2, Maid: 1 } },
        { txt: "I force my presence. I don't accept being ignored; I make noise or cause a scene so my relevance is noticed.", w: { Prince: 3, Thief: 2, Witch: 1, Heir: -3 } },
        { txt: "I look for others who are also being excluded and try to create a space where our 'invisibility' is not a discomfort.", w: { Rogue: 3, Sylph: 3, Page: 1 } }
    ]},
    { t: "You receive an important task, but are given no instructions or clues on how to start.", opts: [
        { txt: "I start from absolute zero. If nothing is built, I create my own rules and fill this void.", w: { Maid: 3, Witch: 3, Page: 1 } },
        { txt: "I analyze what was 'unsaid'. The silence in the instructions reveals more to me about the real intentions than words.", w: { Seer: 3, Mage: 3, Knight: 1 } },
        { txt: "I refuse to work in the dark. I demand total clarity immediately; I won't lift a finger without knowing exactly what it is.", w: { Prince: 3, Thief: 2, Knight: 1 } },
        { txt: "I do it anyhow or don't do it at all. If they didn't explain it right, it's their problem when the result comes up blank.", w: { Bard: 3, Heir: 1, Rogue: 1, Prince: -2 } },
        { txt: "I share the uncertainty with the group, seeking a solution that doesn't depend on clear orders to advance.", w: { Rogue: 2, Heir: 2, Sylph: 3 } }
    ]},
    { t: "A vague and confusing rumor about you begins to circulate, but no one can confirm if it's true or false.", opts: [
        { txt: "I use the mystery to my advantage. I maintain an enigmatic posture that confuses people even more.", w: { Knight: 3, Page: 2, Heir: 1 } },
        { txt: "I manipulate the narrative silently, inserting new doubts until the original rumor loses all meaning.", w: { Witch: 3, Thief: 3, Mage: 1 } },
        { txt: "I ignore it and focus on helping the people affected by the confusion, acting as a safe harbor of silence.", w: { Sylph: 3, Maid: 2, Rogue: 2 } },
        { txt: "I expose the source of the rumor and the raw facts. I hate holes in the truth being used to define me.", w: { Prince: 3, Mage: 2, Seer: 1 } },
        { txt: "I neither confirm nor deny. I let people talk. I find the absurd theories they create about me funny.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } }
    ]},
    { t: "You meet someone fascinating, but the person is a complete mystery: never talks about themselves or their intentions.", opts: [
        { txt: "Uncertainty attracts me. I feel I can learn a lot about the world just by observing what this person hides.", w: { Mage: 3, Seer: 3 } },
        { txt: "I try to 'break' this mystery. I ask direct and invasive questions; I hate not knowing who I'm dealing with.", w: { Thief: 3, Witch: 2, Prince: 3 } },
        { txt: "I respect the void. I feel no need to dig into anyone's life; I accept what the person presents in the now.", w: { Heir: 3, Rogue: 3, Sylph: 1 } },
        { txt: "I don't care. If the person says nothing, we stay in silence. It's less effort for me than trying to decipher a riddle.", w: { Bard: 3, Knight: -1, Seer: -2 } },
        { txt: "I feel distrust. If there is no transparency, there is no basis for a relationship; I try to force clarity or distance myself.", w: { Prince: 2, Knight: 2, Page: 1 } }
    ]},
    { t: "Something essential to the group has disappeared and no one knows where it is or how to recover it.", opts: [
        { txt: "I work double time to supply the lack of what was lost, ensuring the group doesn't crumble.", w: { Maid: 3, Sylph: 3, Knight: 1 } },
        { txt: "I encourage the group to let go. Maybe the loss is an opportunity for us to abandon what was obsolete.", w: { Rogue: 3, Heir: 2, Prince: 1 } },
        { txt: "I track the 'nothing'. I understand that the absence of the object leaves clues and I use this lack of information to find it.", w: { Seer: 3, Mage: 3, Witch: 1 } },
        { txt: "I hadn't even noticed it was gone. And if it disappeared, it should turn up eventually. I don't stress about looking.", w: { Bard: 3, Heir: 2, Knight: -2, Seer: -2 } },
        { txt: "I try to create something new from nothing to replace the loss, acting so the vacuum doesn't consume us.", w: { Page: 3, Witch: 2, Maid: 1 } }
    ]},
    { t: "You perform a herculean task behind the scenes, but someone else receives all the public credit.", opts: [
        { txt: "Whatever. If the credit goes to another, the responsibility of maintaining success is also theirs. I stay free.", w: { Bard: 3, Rogue: 2, Heir: 2, Prince: -2 } },
        { txt: "I don't mind. The fact that the work was done in anonymity pleases me; relevance is a burden.", w: { Rogue: 3, Heir: 2, Page: 1 } },
        { txt: "This is unacceptable. I expose my participation and demand recognition; I will not be an extra in my own work.", w: { Prince: 3, Thief: 2, Witch: 1 } },
        { txt: "I keep silent. My security comes from internal competence, and anonymity protects me from interference.", w: { Knight: 3, Maid: 3, Page: 1 } },
        { txt: "I use my anonymity to continue helping selflessly, where no one can watch me.", w: { Sylph: 3, Seer: 2, Mage: 1 } }
    ]},
    { t: "You are facing a decision where all paths lead to the unknown, without guarantees of safety.", opts: [
        { txt: "I trust the flow of the uncertain. I feel the correct path will reveal itself while I walk through the darkness.", w: { Seer: 3, Heir: 3, Mage: 1 } },
        { txt: "I try to eliminate all unknown variables before acting. I hate operating without control of information.", w: { Prince: 3, Knight: 2, Mage: 1 } },
        { txt: "I choose any one without thinking much. If it's all unknown anyway, planning is a waste of time.", w: { Bard: 3, Rogue: 1, Page: 1 } },
        { txt: "I choose the emptiest path. I will shape reality as it arises, creating something where today nothing exists.", w: { Witch: 3, Page: 4, Maid: 2 } },
        { txt: "I accept the uncertainty. The best plan is having no plan and letting the void take us to new places.", w: { Heir: 3, Mage: 2, Rogue: 2 } }
    ]},
    { t: "You find a broken object that everyone considers trash, without utility or relevance.", opts: [
        { txt: "I discard it. If something has no clear utility, it is just noise that must be eliminated from my space.", w: { Prince: 3, Thief: 2, Knight: 1 } },
        { txt: "I lose it again. I'll probably forget where I put it five minutes after picking it up.", w: { Bard: 3, Heir: 1, Seer: -2 } },
        { txt: "I keep it. I feel a connection with what was forgotten and find comfort in possessing what no one values.", w: { Knight: 3, Page: 3, Rogue: 2 } },
        { txt: "I try to fix it or give it a new function. I refuse to accept that something can simply be useless.", w: { Maid: 3, Witch: 3, Sylph: 2 } },
        { txt: "I leave it where it is. The cycle of obsolescence is natural; there is no need to intervene in what returns to nothing.", w: { Heir: 3, Seer: 1, Mage: 1 } }
    ]},
    { t: "You feel you don't possess a fixed personality, acting only as a reflection of what is expected of you.",  opts: [
        { txt: "This drives me to despair. I struggle to build a striking identity so no one doubts my existence.", w: { Prince: 3, Knight: 2, Page: 2 } },
        { txt: "I feel at peace. If I am 'nothing' inside, I can be 'anything' outside, without being imprisoned by labels.", w: { Heir: 3, Rogue: 2, Sylph: 1 } },
        { txt: "I use this fluidity as a tool. I change who I am according to necessity to get what I desire.", w: { Witch: 3, Thief: 3, Mage: 2 } },
        { txt: "I just let it roll. It's easier to agree with what they think I am than trying to explain something even I don't know.", w: { Bard: 3, Heir: 2, Page: 1 } },
        { txt: "I observe this void. Understanding that the 'self' is an illusion allows me to see the truths behind others' masks.", w: { Seer: 3, Mage: 3, Sylph: 2 } }
    ]}
	],
    "Mind": [
    { t: "In a group project, the collective decision is logically flawless, but will unfairly harm a single individual.", opts: [
        { txt: "I follow the plan. The integrity of the system is priority; individual feelings shouldn't corrupt logic.", w: { Maid: 3, Knight: 2, Prince: -3 } },
        { txt: "I ignore the decision or present an emotional counter-argument. I won't tolerate cold logic crushing what I feel is right.", w: { Prince: 3, Witch: -2, Sylph: -1 } },
        { txt: "I pretend I didn't see the bad consequences. I let the group decide, and if it goes wrong for someone, the blame lies with the majority.", w: { Bard: 3, Heir: 1, Rogue: 1, Prince: -2 } },
        { txt: "I analyze the unfolding events and try to find a technical loophole that protects the individual without invalidating the plan.", w: { Seer: 3, Mage: 2, Sylph: 3, Thief: -1 } },
        { txt: "I expose the moral flaw of the plan so the group deals with the weight of the choice, removing my direct responsibility.", w: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
    ]},
    { t: "You are at a formal dinner where everyone pretends to like each other. You clearly perceive the social masks and hidden intentions.", opts: [
        { txt: "I feel a deep weariness. Seeing the mechanics behind interactions drains the color from life; I feel like a prisoner of this theater.", w: { Mage: 3, Page: 3, Seer: 1, Prince: -2 } },
        { txt: "I keep my own mask perfectly polished. I use social protocol as armor.", w: { Knight: 3, Maid: 2, Rogue: -2 } },
        { txt: "I forget protocol and speak my mind. If the vibe gets weird, at least the falseness is broken.", w: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
        { txt: "I intervene in conversations, steering topics to test how far people sustain their characters.", w: { Witch: 3, Thief: 2, Heir: -2, Sylph: -1 } },
        { txt: "I observe in silence, almost invisible, absorbing the dynamics to understand who really holds the power.", w: { Seer: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "A serious mistake was committed by a colleague and the blame is falling on the whole group. How do you position yourself?", opts: [
        { txt: "I use their failure to demonstrate my own competence, ensuring my position comes out stronger.", w: { Thief: 3, Prince: 2, Knight: -2, Rogue: -2 } },
        { txt: "I accept part of the blame or try to redistribute the responsibility so the weight doesn't destroy their career.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -3 } },
        { txt: "I do nothing. I let the error follow its logical course. If they messed up, the consequence is natural and I won't interfere.", w: { Bard: 3, Seer: 1, Mage: 1, Maid: -2 } },
        { txt: "I work double time behind the scenes to fix the mistake logically, without seeking recognition.", w: { Maid: 3, Page: 2, Witch: -1, Bard: -1 } },
        { txt: "I coldly analyze how this error happened and use the event as a study to change future patterns.", w: { Mage: 3, Seer: 2, Knight: 1, Witch: 2 } }
    ]},
    { t: "When planning something important, like a career change, what is your predominant mental process?", opts: [
        { txt: "I create contingency plans for every possible failure. If I don't foresee the path, I feel like I'll collapse.", w: { Maid: 3, Mage: 1, Knight: -2, Heir: -1 } },
        { txt: "I try not to overthink. I trust that if I follow my instinct, the logic of things will resolve itself.", w: { Prince: 3, Maid: -3, Seer: -2 } },
        { txt: "I don't plan. I procrastinate until the decision becomes inevitable or someone decides for me.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } },
        { txt: "I seek advice from several people, trying to synthesize their views into a fair strategy.", w: { Sylph: 3, Page: 2, Thief: -2, Witch: -1 } },
        { txt: "I look for shortcuts or ways to influence the system in my favor, focusing on the best result with the least effort.", w: { Thief: 3, Witch: 3, Rogue: -2, Knight: -1 } }
    ]},
    { t: "Two people you esteem are in a fierce intellectual conflict and ask for your mediation. How do you act?", opts: [
        { txt: "I dismantle both their arguments, pointing out where emotions are blinding their reasoning.", w: { Witch: 3, Knight: 2, Prince: 2, Sylph: -2 } },
        { txt: "I listen to both, trying to make each understand the other's logic to heal the division.", w: { Sylph: 3, Rogue: 2, Seer: 1, Thief: -2 } },
        { txt: "I stay silent. I see so much logical validity on both sides that I cannot choose.", w: { Page: 3, Mage: 1, Maid: -2 } },
        { txt: "I make a joke of the fight or give a nonsensical answer to disarm the logical tension with confusion.", w: { Bard: 3, Heir: 1, Rogue: 1, Seer: -2 } },
        { txt: "I use the tension to introduce new variables, shifting the focus of the fight to something more productive.", w: { Heir: 3, Thief: 2, Page: -2, Seer: -1 } }
    ]},
    { t: "You discover confidential information that could change everyone's perception of a leader. What do you do?", opts: [
        { txt: "I keep the information. Knowledge is a tool of order; revealing it without a plan would cause unnecessary chaos.", w: { Maid: 3, Knight: 2, Seer: 1 } },
        { txt: "I share the truth with those affected. I believe transparency is necessary for free decisions.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -2 } },
        { txt: "I use the secret as a bargaining chip to ensure my own ideas are implemented.", w: { Thief: 3, Prince: 3, Page: -3, Rogue: -2 } },
        { txt: "I let it slip by accident or forget to keep the secret. If leadership falls because of it, it falls.", w: { Bard: 3, Heir: 1, Mage: 1, Knight: -2 } },
        { txt: "I feel the weight of this information as a burden. The simple fact of knowing makes me feel responsible.", w: { Mage: 3, Seer: 2, Witch: 2, Knight: -1 } }
    ]},
    { t: "You are facing a choice where all paths lead to some kind of loss. How does your mind process the paralysis?", opts: [
        { txt: "I choose the path that preserves the logic of the larger system, even if I suffer. Rational sacrifice.", w: { Maid: 3, Knight: 2, Seer: 1, Prince: -3 } },
        { txt: "I refuse to choose. I let chance decide, as I don't want to carry the weight of the consequence.", w: { Bard: 3, Heir: 3, Page: 2, Witch: -2 } },
        { txt: "I try to create a forced 'third way' through manipulation, refusing the given options.", w: { Witch: 3, Thief: 3, Mage: -1, Seer: -1 } },
        { txt: "I analyze which loss is more useful in the long run. If something must be destroyed, let it be the least efficient.", w: { Prince: 3, Mage: 3, Rogue: 1, Sylph: -2 } },
        { txt: "I freeze and do nothing. If I don't choose, technically the blame for the result isn't mine.", w: { Bard: 3, Page: 2, Heir: 1, Knight: -2 } }
    ]},
    { t: "Someone questions who you really are behind all your sensible opinions and calculated behaviors. How do you answer?", opts: [
        { txt: "I am the set of my choices. There is no mystical 'me'; I am the logical sum of my actions.", w: { Mage: 3, Maid: 2, Seer: 2 } },
        { txt: "I feel a void. I fear that if the layers of logic are peeled back, nothing remains in the center.", w: { Page: 3, Knight: 3, Rogue: 2, Prince: -1 } },
        { txt: "I change according to necessity. My 'truth' is being who I need to be to function.", w: { Thief: 3, Witch: 2, Heir: 2, Sylph: -2 } },
        { txt: "I answer whatever. I don't take my identity seriously enough to have an existential crisis over it.", w: { Bard: 3, Heir: 2, Rogue: 1, Mage: -1 } },
        { txt: "Identity is a limiting illusion. I prefer not to define myself, allowing them to see the logic that suits them.", w: { Rogue: 3, Sylph: 3, Knight: -2, Bard: 1 } }
    ]},
    { t: "You feel your current life is a sham and that you are just playing a role. What is your reaction?", opts: [
        { txt: "I double down on the role. I will polish this mask until it is indistinguishable from reality.", w: { Knight: 3, Page: 3, Maid: 1, Prince: -2 } },
        { txt: "I abandon everything. I break ties and change scenery; I prefer the void to the weight of false logic.", w: { Prince: 3, Heir: -2, Seer: -2 } },
        { txt: "I analyze the choices that brought me here to rationally recalculate the route.", w: { Mage: 3, Seer: 3, Witch: 2, Knight: -2 } },
        { txt: "I keep acting, but ironically. If it's all a sham, I'll amuse myself with the absurdity of the script.", w: { Bard: 3, Thief: 2, Mage: 1, Page: -1 } },
        { txt: "I let time decide. I go with the flow, hoping a new circumstance defines who I should be.", w: { Heir: 3, Rogue: 2, Witch: -3, Maid: -1 } }
    ]},
    { t: "In a complex strategy game against an intelligent opponent, what is your main strength?", opts: [
        { txt: "My capacity to anticipate moves. I play against their mind, predicting decisions.", w: { Seer: 3, Mage: 1, Witch: 2, Page: -1 } },
        { txt: "My discipline. I follow the rules to the letter, wearing out the opponent through the absence of mistakes.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -3 } },
        { txt: "My audacity to subvert logic. I make purposefully chaotic moves to break their pattern.", w: { Prince: 2, Thief: -2, Seer: -2 } },
        { txt: "I play without paying much attention. My unpredictability comes from the fact that even I don't know what I'm doing.", w: { Bard: 3, Heir: 2, Rogue: 1, Mage: -2 } },
        { txt: "My skill in using the opponent's own strategy against them, taking the advantage when they rely on it.", w: { Thief: 3, Rogue: 2, Heir: 2, Knight: -1 } }
    ]}
	],
   "Heart": [
    { t: "You realize you act completely differently depending on the friend group you are with. How does that make you feel?", opts: [
        { txt: "I feel like a fraud. I try to destroy this facade to find a unique and solid identity.", w: { Prince: 3, Mage: -1, Heir: -2 } },
        { txt: "I don't see it as a problem. My identity is so diffuse that I simply become what the environment requires.", w: { Bard: 3, Rogue: 2, Heir: 1, Knight: -2 } },
        { txt: "I see it as a social tool. I intentionally manipulate who I am to control their perception.", w: { Witch: 3, Thief: 2, Page: 1, Seer: -2 } },
        { txt: "I feel I am giving too much of myself away. I end up absorbing their personality and losing mine to please.", w: { Rogue: 3, Maid: 2, Sylph: 1, Prince: -2 } },
        { txt: "It is natural. I flow between these identities without conflict; they are all parts of me.", w: { Heir: 3, Knight: 2, Bard: 1, Mage: -1 } }
    ]},
    { t: "In a moment of intense emotional crisis of a close friend, what is your first instinct?", opts: [
        { txt: "I try to analyze the psychological root of the problem. I want to understand 'why' they feel this way to guide them.", w: { Seer: 3, Mage: 2, Sylph: 1, Heir: -1 } },
        { txt: "I feel immense discomfort. I offer a practical solution to end the drama quickly.", w: { Prince: 3, Sylph: -3, Rogue: -2 } },
        { txt: "I freeze. I don't know how to handle the emotional load and end up making a nervous joke or changing the subject.", w: { Bard: 3, Thief: 1, Page: 1, Sylph: -2 } },
        { txt: "I take their pain upon myself. I use my charisma to divert the focus from their pain, protecting them from exposure.", w: { Knight: 3, Maid: 2, Page: 1, Prince: -2 } },
        { txt: "I intervene actively to change their mood, forcing an activity to alter how they feel.", w: { Witch: 3, Sylph: 2, Thief: 1, Bard: -2 } }
    ]},
    { t: "You need to make an important decision that goes against your personal desires, but it is the 'logical' thing to do.", opts: [
        { txt: "I ignore my feelings. If my desire is an obstacle to the perfect result, I annul it without mercy.", w: { Prince: 3, Knight: 2, Witch: -1, Heir: -3 } },
        { txt: "I follow my desires. Logic is useless if I am not satisfied; my will is absolute.", w: { Thief: 3, Mage: 1, Rogue: -3, Prince: -2 } },
        { txt: "I paralyze. I wait for the will to pass or for the logic to change. If I don't decide, fate decides.", w: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
        { txt: "I try to find a middle ground where I can serve the greater purpose without feeling empty, but I usually yield to duty.", w: { Maid: 3, Page: 2, Rogue: 1, Thief: -3 } },
        { txt: "I spend a lot of time trying to understand the origin of this desire. I only decide after knowing if what I feel is genuine.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -1 } }
    ]},
    { t: "Someone criticizes something you love deeply and consider a fundamental part of who you are.", opts: [
        { txt: "I get defensive immediately and attack the person's taste. No one has the right to question what defines me.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -2 } },
        { txt: "I pretend I don't care or agree ironically with the criticism to prevent them from seeing how much it hit me.", w: { Knight: 3, Prince: 2, Page: 1, Maid: -1 } },
        { txt: "I agree with the criticism and make fun of myself. If what I love is ridiculous, I am ridiculous with it. I don't take it seriously.", w: { Bard: 3, Heir: 1, Rogue: 1, Thief: -2 } },
        { txt: "I start to question if I should really like that. External opinion makes me reevaluate my own connection.", w: { Rogue: 3, Maid: 2, Page: 2, Heir: -1 } },
        { txt: "It doesn't shake me. My connection with what I love is internal and requires no external validation.", w: { Heir: 3, Sylph: 2, Seer: 1, Knight: -2 } }
    ]},
    { t: "Do you often feel misunderstood by the people around you?", opts: [
        { txt: "Yes, because I hide who I am. I create efficient personas, so no one knows the real 'me', and I prefer it that way.", w: { Prince: 3, Knight: 2, Witch: 1, Sylph: -2 } },
        { txt: "Yes, I feel I have an essence I haven't managed to express yet, and I'm waiting for the right moment.", w: { Page: 3, Maid: 2, Heir: 1, Thief: -2 } },
        { txt: "I don't even understand myself. I feel like a collection of random fragments, so it's natural no one sees a coherent whole.", w: { Bard: 3, Heir: 2, Mage: 1, Seer: -1 } },
        { txt: "No, I make sure everyone knows exactly who I am. I impose my personality on the environment.", w: { Thief: 3, Witch: 2, Mage: -1, Rogue: -3 } },
        { txt: "Sometimes, but I use it to observe others. The fact they don't see me gives me an advantage.", w: { Mage: 3, Seer: 2, Rogue: 1, Heir: -1 } }
    ]},
    { t: "When you look at your past, how do you see your personal evolution?", opts: [
        { txt: "With shame. I actively try to erase or forget who I was, because that old version is flawed.", w: { Prince: 3, Knight: 1, Sylph: -3 } },
        { txt: "With affection. I see every phase as necessary and think of memories as a reminder that I can always improve.", w: { Sylph: 3, Heir: 2, Mage: 1, Prince: -3 } },
        { txt: "With indifference. The past seems like a distant dream of someone else. I hold no grudge nor affection, I just forget.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
        { txt: "As a resource. The things I went through gave me emotional 'weapons' I use today.", w: { Knight: 3, Witch: 2, Thief: 1, Page: -1 } },
        { txt: "As a puzzle. I analyze the causes and effects of my changes to predict the future.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "You feel your passion for an old hobby or project is dying. What do you do?", opts: [
        { txt: "I kill the project immediately. If there is no flame, I won't carry a corpse. I cut the tie and seek something new.", w: { Prince: 3, Thief: 2, Witch: 1, Maid: -2 } },
        { txt: "I try to rekindle the flame forcibly, changing how I interact with it to see if the emotion returns.", w: { Witch: 3, Sylph: 2, Maid: 1, Bard: -2 } },
        { txt: "I let it gather dust. I don't finish it, I don't continue it. The project stays there, existing in the limbo of my apathy.", w: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
        { txt: "I continue out of stubbornness or duty. I feel dedication must overcome momentary lack of will.", w: { Maid: 3, Knight: 2, Page: 1, Prince: -2 } },
        { txt: "I analyze why I lost interest. I try to understand what changed in my essence so that it no longer serves me.", w: { Mage: 3, Seer: 2, Heir: 1 } }
    ]},
    { t: "Someone questions who you really are, suggesting you are superficial. What do you answer?", opts: [
        { txt: "I show my actions. My 'soul' is in what I do and how I serve others, not in profound speeches.", w: { Maid: 3, Knight: 2, Sylph: 1 } },
        { txt: "I feel a void. I'm afraid that if the layers are peeled back, nothing remains in the center. Maybe I am superficial.", w: { Page: 3, Rogue: 2, Prince: -1, Bard: 1 } },
        { txt: "I agree and laugh. 'I am as shallow as a saucer'. I don't take my depth seriously enough to be offended.", w: { Bard: 3, Heir: 2, Rogue: 1, Seer: -2 } },
        { txt: "I defend my complexity. I expose my desires and passions to prove I exist with intensity.", w: { Thief: 3, Witch: 2, Mage: 1, Prince: -2 } },
        { txt: "I analyze their perception. If I seem superficial, it is because they don't have the right tool to read me.", w: { Seer: 3, Mage: 2, Heir: 1 } }
    ]},
    { t: "In a relationship (romantic or deep friendship), what is your biggest fear?", opts: [
        { txt: "Losing my individuality. I fear being absorbed by the other and not knowing where I end and they begin anymore.", w: { Thief: 3, Prince: 2, Mage: 1, Rogue: -3 } },
        { txt: "Apathy. I fear simply stopping caring out of nowhere and letting the relationship die due to my negligence.", w: { Bard: 3, Heir: 1, Rogue: 1, Sylph: -2 } },
        { txt: "Not being enough. I feel I need to always be 'serving' to justify my presence in the person's life.", w: { Maid: 3, Page: 2, Knight: 1, Thief: -2 } },
        { txt: "Real vulnerability. I am terrified of lowering my guard and letting someone see my flaws without any mask.", w: { Knight: 3, Prince: 2, Witch: 1, Heir: -2 } },
        { txt: "Not being able to help. My fear is seeing the other suffering and lacking the capacity to fix them.", w: { Sylph: 3, Rogue: 2, Seer: 1, Bard: -2 } }
    ]},
    { t: "You have a very strong instinct or 'feeling' about something, but all logical data says the opposite. What do you do?", opts: [
        { txt: "I follow the data. Instinct is flawed; I trust only what can be proven and destroy internal doubt.", w: { Prince: 3, Mage: 1, Seer: -1, Heir: -3 } },
        { txt: "I follow the instinct, but erratically. One moment I trust, the next I ignore. I let my internal compass spin wildly.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
        { txt: "I follow the instinct blindly. I let myself be carried by what I feel, for my intuition protects me.", w: { Heir: 3, Sylph: 1, Prince: -3 } },
        { txt: "I use the instinct to manipulate the situation. If I feel it will go wrong, I alter the variables to ensure the result.", w: { Witch: 3, Thief: 2, Knight: 1, Page: -1 } },
        { txt: "I try to translate instinct into logic. I analyze 'why' I feel this until I find rational validation.", w: { Mage: 3, Seer: 2, Page: -1, Bard: -2 } }
    ]}
	],
    "Hope": [
    { t: "You discover that an authority figure or idol you trusted committed a grave moral error. What is your immediate reaction?", opts: [
        { txt: "I cut ties immediately. If the perfect image was stained, the whole person is a lie.", w: { Prince: 3, Bard: 2, Witch: -2, Sylph: -3 } },
        { txt: "I try to justify their actions to myself. There must be a greater reason behind this.", w: { Witch: 3, Sylph: 2, Heir: 1, Prince: -3 } },
        { txt: "I feel betrayed, but I keep it to myself. I continue acting as if I trust them, because I need that structure.", w: { Page: 3, Knight: 2, Thief: -1, Prince: -2 } },
        { txt: "I don't even flinch. Idols are flawed anyway. I keep following the person just to see where it goes.", w: { Bard: 3, Mage: 1, Rogue: 1, Knight: -2 } },
        { txt: "I analyze the historical context and their human flaws. I already expected this could happen.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Your group of friends is discouraged about a project that seems destined to fail. What do you do?", opts: [
        { txt: "I take the lead and exude exaggerated confidence, assuring everyone it will work out.", w: { Knight: 3, Page: 2, Rogue: -1, Bard: -2 } },
        { txt: "I coldly point out all the flaws. It's better to destroy false hope now than watch them suffer later.", w: { Prince: 3, Thief: 1, Sylph: -3, Maid: -2 } },
        { txt: "I do nothing. If they want to give up, let them. I'm not the one who will carry the group's morale.", w: { Bard: 3, Rogue: 1, Mage: 1, Sylph: -2 } },
        { txt: "I continue working on my part cheerfully. My unshakable faith ends up infecting some.", w: { Heir: 3, Maid: 2, Seer: -2, Prince: -3 } },
        { txt: "I let them give up if they want. Sometimes collapse is necessary for new ideas to emerge.", w: { Mage: 2, Seer: 1, Knight: -2, Sylph: -2 } }
    ]},
    { t: "You come across a theory or belief that contradicts logical facts, but makes you feel incredibly good and safe.", opts: [
        { txt: "I embrace the belief. I prefer living in a narrative that gives me purpose and happiness than in the coldness of facts.", w: { Maid: 3, Witch: 2, Heir: 1, Prince: -3 } },
        { txt: "I reject the belief with disdain. The comfort generated by ignorance is a weakness I refuse.", w: { Prince: 3, Mage: 1, Heir: -3, Page: -2 } },
        { txt: "I believe in it 'ironically'. It's fun to act as if it were true, even knowing it makes no sense.", w: { Bard: 3, Rogue: 1, Thief: 1, Seer: -2 } },
        { txt: "I study the structure of this belief to understand why it is so attractive to the human mind.", w: { Mage: 3, Seer: 2, Bard: -1, Knight: -1 } },
        { txt: "I use this belief to motivate other people. It is a useful tool to raise morale.", w: { Thief: 3, Rogue: 2, Bard: 1, Seer: -2 } }
    ]},
    { t: "In a heated debate about ethics, everyone is against your opinion. How do you position yourself?", opts: [
        { txt: "I maintain my position stubbornly. The fact that many are against me only proves I am right.", w: { Thief: 3, Prince: 3, Knight: 2, Maid: 1, Rogue: -3 } },
        { txt: "I yield and agree with the group to maintain harmony, but I keep my conviction secret.", w: { Page: 3, Rogue: 2, Sylph: 1, Thief: -3 } },
        { txt: "I try to reframe their view, showing that, deep down, we want the same thing.", w: { Sylph: 3, Witch: 2, Seer: 1, Prince: -2 } },
        { txt: "I change the subject or make a joke. I don't have the energy to defend ideals if no one wants to listen.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -2 } },
        { txt: "I dismantle their arguments one by one, focusing on proving their logic is flawed.", w: { Prince: 2, Mage: 2, Seer: 1, Heir: -2 } }
    ]},
    { t: "A close friend is deluded by a toxic relationship, believing that 'love will change everything'.", opts: [
        { txt: "I intervene drastically, listing the proofs of toxicity to break this fantasy.", w: { Prince: 3, Seer: 2, Sylph: -2, Heir: -3 } },
        { txt: "I listen to the venting and validate the feelings, hoping they realize the reality in their own time.", w: { Sylph: 3, Rogue: 2, Prince: -3, Thief: -2 } },
        { txt: "I don't get involved. If they want to delude themselves, it's their choice. I just watch from afar.", w: { Bard: 3, Mage: 1, Knight: -2, Maid: -2 } },
        { txt: "I feel anger at the naivety, but I end up picking a fight with the one hurting them.", w: { Knight: 3, Thief: 2, Mage: -1, Bard: -1 } },
        { txt: "I distance myself. I have no patience for those who choose to live in a lie.", w: { Mage: 2, Seer: 1, Knight: -2, Maid: -1 } }
    ]},
    { t: "You made a mistake that hurt someone, but it was unintentional. Guilt consumes you.", opts: [
        { txt: "I convince myself it wasn't my fault, rewriting the narrative of events.", w: { Witch: 3, Thief: 2, Prince: 1, Seer: -3 } },
        { txt: "I accept the guilt publicly and try to overcompensate for the error with grandiose acts.", w: { Page: 3, Maid: 2, Knight: 1, Thief: -2 } },
        { txt: "I freeze, hoping time erases the gravity of the error without me needing to act.", w: { Heir: 3, Bard: 2, Knight: -2, Maid: -2 } },
        { txt: "I give the person space, sacrificing my need for immediate forgiveness.", w: { Rogue: 3, Seer: 2, Sylph: 1, Witch: -2 } },
        { txt: "I forget. What's done is done. Feeling guilty won't solve anything anyway.", w: { Bard: 3, Prince: 1, Page: -1, Sylph: -2 } }
    ]},
    { t: "What is your relationship with 'happy endings' in movies and books?", opts: [
        { txt: "I find them annoying and unrealistic. Life doesn't work like that.", w: { Prince: 3, Mage: 2, Heir: -2, Sylph: -2 } },
        { txt: "They are essential. The world is already too hard; fiction should serve as a beacon of hope.", w: { Maid: 3, Sylph: 2, Page: 1, Prince: -3 } },
        { txt: "I like them, but only if the characters suffered enough to deserve it.", w: { Knight: 3, Thief: 2, Seer: 1, Heir: -1 } },
        { txt: "I don't care about the ending. If it's happy, ok. If everyone dies, ok too.", w: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
        { txt: "I focus on the journey and the open possibilities the story suggests.", w: { Heir: 3, Rogue: 2, Seer: 1, Knight: -2 } }
    ]},
    { t: "You need to convince a group of people to follow a risky path.", opts: [
        { txt: "I use my charisma and grandiose promises. It matters if they believe, not if it's true.", w: { Thief: 3, Knight: 2, Page: 1, Seer: -2 } },
        { txt: "I present the scenario honestly, trusting the truth will inspire the right people.", w: { Seer: 3, Mage: 2, Witch: -2, Thief: -3 } },
        { txt: "I say 'let's go' without any plan. My carelessness makes it seem like I know what I'm doing.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
        { txt: "I subtly manipulate circumstances so it seems like the only safe option.", w: { Witch: 3, Prince: 1, Sylph: 1, Knight: -1 } },
        { txt: "I go ahead alone. If it works, they will follow me by example.", w: { Rogue: 3, Maid: 2, Heir: 1, Bard: -1 } }
    ]},
    { t: "Data and logic guarantee that your current goal is impossible. What is your immediate reaction?", opts: [
        { txt: "I refuse this 'truth'. If reality says no, I break the rules or force a way.", w: { Prince: 3, Witch: 2, Knight: 1 } },
        { txt: "I panic. I seek validation from other people to sustain my belief.", w: { Thief: 2, Rogue: 1, Page: 1 } },
        { txt: "I keep trying, but without real effort. If it goes wrong, at least I pretended I tried.", w: { Bard: 3, Heir: 1, Rogue: 1, Knight: -2 } },
        { txt: "I analyze coldly. I try to understand the logic of failure and, if it's real, I accept and follow the flow.", w: { Mage: 2, Seer: 2, Heir: 1 } },
        { txt: "I keep up appearances. I continue acting as if it will work to preserve morale.", w: { Sylph: 2, Maid: 1, Knight: 1 } }
    ]},
    { t: "You are alone in a room in absolute silence. How does this absence of stimulus affect you?", opts: [
        { txt: "Inertia drives me to despair. I start organizing things frantically.", w: { Prince: 1, Knight: 2, Maid: 1 } },
        { txt: "I feel an existential void. I need to consume others' content to distract myself.", w: { Thief: 2, Rogue: 2, Page: 1 } },
        { txt: "I feel free. My mind creates scenarios and stories on its own to fill the silence.", w: { Heir: 2, Mage: 2, Seer: 1 } },
        { txt: "I space out completely. I enter a daydream state so deep I forget where I am.", w: { Bard: 3, Heir: 1, Rogue: 1 } },
        { txt: "I use the isolation as a tool for training and self-policing.", w: { Page: 2, Knight: 1 } }
    ]}
	],
    "Doom": [
    { t: "You receive a diagnosis of a lifelong condition. It isn't fatal, but it is a sentence that will require severe restrictions and a rigid medical routine forever.", opts: [
        { txt: "Screw the diagnosis. I continue living as if nothing has changed, refusing to let a piece of paper dictate my body's limits.", w: { Prince: 3, Witch: 1, Heir: -1 } },
        { txt: "I forget to take the meds or follow the treatment halfway. If my body holds up, it holds up; I won't stress over the inevitable.", w: { Bard: 3, Rogue: 1, Heir: 1, Sylph: -2 } },
        { txt: "I dive into technical research. I need to dissect every mechanism of the disease to map exactly where I step in this new minefield.", w: { Mage: 3, Seer: 2, Knight: 1, Prince: -2 } },
        { txt: "I submit to the new reality immediately, creating a flawless system of habits to 'tame' the disease through obedience.", w: { Sylph: 3, Maid: 2, Heir: 1, Bard: -2 } },
        { txt: "I use my condition as a social shield, ridding myself of unwanted responsibilities under the justification of my fragile health.", w: { Thief: 3, Witch: 2, Page: 1, Knight: -1 } }
    ]},
    { t: "You feel the exact moment control is lost. The vehicle you are in suffers a catastrophic failure and violent impact is a mathematical certainty in the next few seconds.", opts: [
        { txt: "I accept the end. I relax every muscle in my body to not break with the tension, trusting that flowing with the disaster is the only chance to survive.", w: { Heir: 3, Seer: 1, Sylph: 1, Prince: -3 } },
        { txt: "I start laughing nervously or simply freeze, watching the scenery pass. I don't try to save myself or anyone else, I just wait for the crash.", w: { Bard: 3, Page: 2, Mage: -1, Knight: -2 } },
        { txt: "I try to protect the other passengers with my own body, acting instinctively as a human shield to absorb the damage.", w: { Rogue: 3, Knight: 2, Maid: 1, Thief: -3 } },
        { txt: "I shout precise orders amidst the panic. I take command of the chaos, dictating impact positions to minimize losses.", w: { Seer: 2, Mage: 2, Sylph: 1, Page: -1 } },
        { txt: "I jump out before the final impact. My absolute priority is ensuring I don't go down with the wreckage.", w: { Thief: 3, Prince: 2, Witch: 1, Rogue: -3 } }
    ]},
    { t: "You discover a systemic loophole in the rules of a service or contract that allows obtaining unlimited advantages, but clearly violates the spirit of the law.", opts: [
        { txt: "I exploit the loophole to the last drop. If the system left a door open, the incompetence is theirs and the profit is mine.", w: { Thief: 3, Witch: 2, Prince: 1, Seer: -2 } },
        { txt: "I report the error immediately. Rules exist to keep the structure functional and a broken system harms the collective in the long run.", w: { Sylph: 3, Seer: 2, Heir: 1, Thief: -3 } },
        { txt: "I use the error sloppily and excessively until breaking the system or getting banned. It was fun while the anarchy lasted.", w: { Bard: 3, Rogue: 1, Heir: 1, Mage: -2 } },
        { txt: "I share the secret only with my inner circle, ensuring 'we' have the advantage before the fix arrives.", w: { Rogue: 3, Maid: 2, Page: 1, Prince: -1 } },
        { txt: "I get paranoid that using this will bring severe karmic or legal punishment, so I prefer not to touch the error.", w: { Mage: 3, Knight: 2, Bard: -1, Witch: -2 } }
    ]},
    { t: "Your community gathers for an ancient ritual or tradition you consider oppressive and meaningless, but which is seen as the pillar of social order.", opts: [
        { txt: "I participate in the tradition pretending respect, but behind the scenes, I make acidic comments that undermine the ritual's authority.", w: { Thief: 2, Witch: 2, Mage: 1 } },
        { txt: "I simply don't show up. I ignore the existence of this social rule and go do something that interests me, indifferent to the consequences.", w: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
        { txt: "I confront the tradition openly and try to destroy it. I don't accept that suffering is justified just because 'it has always been this way'.", w: { Prince: 3, Knight: 2, Witch: 1, Heir: -2 } },
        { txt: "I maintain the tradition solemnly. I understand the ritual is the glue preventing society from dissolving into absolute chaos.", w: { Heir: 3, Seer: 2, Mage: 1, Prince: -3 } },
        { txt: "I try to reform the tradition from within, suggesting small changes to the rules to make it more bearable for everyone.", w: { Sylph: 3, Witch: 2, Maid: 1, Bard: -2 } }
    ]},
    { t: "You find a small creature in its final moments of life. Suffering is visible and there is no chance of recovery; death is certain.", opts: [
        { txt: "I kill it quickly. It is an act of mercy to impose an immediate end when fate is already painfully sealed.", w: { Knight: 3, Prince: 2, Maid: 1, Bard: -1 } },
        { txt: "I look away and leave. The sight of raw death disturbs me deeply and I prefer to deny this reality.", w: { Page: 3, Heir: 2, Prince: 1, Mage: -2 } },
        { txt: "I watch until the last Breath. I feel a solemn obligation to witness the passage from life to death.", w: { Mage: 3, Seer: 2, Rogue: 1, Knight: -2 } },
        { txt: "I try to save it desperately, even knowing it's futile. I refuse to accept that death is the only option.", w: { Maid: 3, Witch: 2, Sylph: 1, Seer: -2 } },
        { txt: "I let nature take its course. If it has to die, it will die. I don't intervene to save nor to kill.", w: { Bard: 3, Seer: 1, Mage: 1, Sylph: -2 } }
    ]},
    { t: "You are trapped in a work system where rules change randomly and no one knows what they are doing, generating an environment of pure entropy.", opts: [
        { txt: "I paralyze. The lack of clear guidelines drains my vital energy and I feel incapable of producing without a safe track.", w: { Page: 3, Heir: 2, Sylph: 1, Prince: -2 } },
        { txt: "I create my own laws and impose them on others. If the universe doesn't give me structure, I become the structure.", w: { Witch: 3, Knight: 2, Maid: 1, Page: -2 } },
        { txt: "I stop trying to understand. I do whatever, however. If the result is bad, the blame lies with the rule that changed.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -2 } },
        { txt: "I navigate the chaos. Without fixed rules, no one can prove I'm wrong, so I do the bare minimum.", w: { Thief: 3, Rogue: 2, Bard: 1, Seer: -3 } },
        { txt: "I try to decipher the hidden pattern behind the changes. I believe there is an underlying logic in all this chaos.", w: { Mage: 3, Seer: 2, Heir: 1, Bard: -1 } }
    ]},
    { t: "An ally committed an unforgivable mistake that could cost their career. They beg you to lie and cover their tracks.", opts: [
        { txt: "I lie. Institutional rules aren't worth more than my personal loyalty to those with me.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } },
        { txt: "I refuse to lie. I explain that consequences are a force of nature and trying to run only worsens the catastrophe.", w: { Seer: 3, Mage: 2, Sylph: 1, Thief: -2 } },
        { txt: "I take the blame in their place. I use my own capital to pay the debt of their mistake, sacrificing myself.", w: { Rogue: 3, Page: 2, Knight: 1, Prince: -3 } },
        { txt: "I get furious at them. Their irresponsibility has now become an anchor around my neck.", w: { Prince: 3, Knight: 2, Bard: 1, Heir: -1 } },
        { txt: "I try to lie, but do it so sloppily or contradictorily that the truth ends up leaking through my incompetence.", w: { Bard: 3, Page: 2, Heir: 1, Prince: -1 } }
    ]},
    { t: "You face the Leviathan of bureaucracy: a mountain of documents, endless lines, and stamps to achieve something simple.", opts: [
        { txt: "I turn this into an efficiency challenge. I organize every paper millimetrically to beat the system by attrition.", w: { Knight: 3, Maid: 2, Sylph: 1, Bard: -2 } },
        { txt: "I feel my vitality being sucked out. Systemic inefficiency makes me want to set fire to the building.", w: { Prince: 3, Witch: 1, Heir: -2 } },
        { txt: "I give up halfway. If it's too hard, it's not worth the effort. I let the deadline expire and see what happens.", w: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
        { txt: "I accept with stoic resignation. It's boring, but it's the law of the world. I enter standby mode and wait my turn.", w: { Heir: 3, Page: 2, Rogue: 1, Prince: -3 } },
        { txt: "I try to use contacts, charm, or bribery to skip steps. Rules apply to others, not to me.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } }
    ]},
    { t: "Math is cold and the verdict is final: the money ran out. Financial collapse is imminent and there is no way to pay all debts.", opts: [
        { txt: "I start cutting everything that isn't vital. I become an ascetic, living with the absolute minimum to survive the financial winter.", w: { Prince: 3, Knight: 1, Sylph: -2 } },
        { txt: "I spend the little left on something futile to feel good. If the ship is sinking, let me sink smiling.", w: { Bard: 3, Heir: 1, Rogue: 1, Seer: -2 } },
        { txt: "I stop eating to ensure other dependents (family, team) don't feel the impact of the crisis.", w: { Rogue: 3, Maid: 2, Page: 1, Thief: -3 } },
        { txt: "I juggle finances. I take a loan to pay another and push the condemnation down the road.", w: { Thief: 3, Witch: 2, Mage: 1, Seer: -1 } },
        { txt: "I sit and calculate the exact date of bankruptcy. I create a detailed survival plan for the post-apocalyptic scenario.", w: { Seer: 3, Mage: 2, Heir: 1, Bard: -2 } }
    ]},
    { t: "You are the bearer of someone's personal apocalypse. It falls to you to deliver news (breakup, firing, death) that will destroy this person's world.", opts: [
        { txt: "I speak the truth straight up, no anesthesia. I believe brutal clarity is the only respectful way to deal with the end.", w: { Seer: 3, Mage: 2, Knight: 1, Sylph: -2 } },
        { txt: "I try to makeup the catastrophe, omitting the cruelest details hoping to protect the person from total pain.", w: { Sylph: 3, Page: 2, Heir: 1, Prince: -1 } },
        { txt: "I stall so much the person ends up finding out alone or realizing through my elusive behavior.", w: { Bard: 3, Rogue: 1, Page: 1, Knight: -2 } },
        { txt: "I freeze and disappear. I invent excuses not to have to look in the person's eyes while their world falls.", w: { Page: 3, Rogue: 2, Knight: -2 } },
        { txt: "I use the situation to show myself as indispensable. I give the bad news already offering myself as the savior who will pick up the pieces.", w: { Witch: 3, Thief: 2, Maid: 1, Prince: -2 } }
    ]}    
	],
    "Life": [
    { t: "You found out you only got your current job because your father knew the boss (nepotism), and not on your own merit. How does that make you feel?", opts: [
        { txt: "I feel no shame at all. If the world offered me a shortcut, I take it. I prefer being employed with an advantage to being a martyr.", w: { Thief: 3, Witch: 1, Prince: -2 } },
        { txt: "I feel like a complete fraud. I work three times as hard as my colleagues to prove (to them and to myself) that I deserve to occupy this space.", w: { Page: 3, Knight: 2, Maid: 1, Heir: -1 } },
        { txt: "I reject the advantage. I quit or look for another place where I can start from scratch, destroying this privilege that stains my autonomy.", w: { Prince: 3, Knight: 1, Thief: -3, Witch: -2 } },
        { txt: "I don't even think about it. I continue in the job, doing the bare minimum. If they gave me the spot, it's their problem, not mine.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
        { txt: "I use my privileged position to make life easier for my colleagues, advocating for raises or improvements, redistributing my luck.", w: { Rogue: 3, Sylph: 2, Seer: 1, Prince: -1 } }
    ]},
    { t: "In a group project, a member is clearly incompetent and is dragging everyone to failure. The deadline is tomorrow.", opts: [
        { txt: "I cut their part and do it all myself. I won't let my grade sink because of dead weight.", w: { Prince: 3, Thief: 2, Sylph: -2, Page: -2 } },
        { txt: "I sit with them and do their part together, guiding their hand if needed. I can't leave anyone behind.", w: { Sylph: 3, Maid: 2, Witch: 1, Bard: -2 } },
        { txt: "I let them sink. If they didn't do their part, let them bear the consequences. I won't kill myself to save someone who doesn't help themselves.", w: { Bard: 3, Mage: 1, Rogue: 1, Sylph: -3 } },
        { txt: "I assume leadership aggressively, dictating exactly what each one will do in the final hours to ensure the result is vital.", w: { Witch: 3, Maid: 2, Heir: 1, Seer: -1 } },
        { txt: "I watch the impending disaster. I understand failure is part of the learning cycle and sometimes pain is the only lesson that works.", w: { Seer: 3, Mage: 2, Knight: -2 } }
    ]},
    { t: "In a group of friends, you are generally the one who:", opts: [
        { txt: "Organizes activities, brings snacks, takes care of those who drank too much, and ensures everyone is well, often forgetting yourself.", w: { Maid: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
        { txt: "Is the realistic advisor who says the boring truths no one wants to hear, preventing others from making impulsive decisions.", w: { Prince: 3, Mage: 2, Seer: 1, Witch: -2 } },
        { txt: "Is the natural center of attention. You set the pace of the hangout and make plans revolve around what you want to do.", w: { Witch: 3, Knight: 2, Thief: 1, Bard: -2 } },
        { txt: "I am the one who goes with the flow. I eat whatever is there, drink whatever is given, and go wherever they take me. I am a comfortable presence that doesn't demand much.", w: { Bard: 3, Heir: 2, Rogue: 1, Maid: -1 } },
        { txt: "The one who seems to attract luck or opportunities, always ending up in advantageous situations without seeming to have put in much effort.", w: { Heir: 3, Page: 2, Thief: -1 } }
    ]},
    { t: "An old family tradition dictates you must follow a career you hate. Breaking it means being disinherited.", opts: [
        { txt: "I break with tradition. I have one life and I won't waste it following dead people's rules. My personal happiness is worth more.", w: { Witch: 3, Thief: 2, Prince: 1, Heir: -2 } },
        { txt: "I accept the burden and follow the career, finding ways to serve my family and keep the legacy alive, even if unhappy.", w: { Maid: 3, Knight: 2, Heir: 1, Bard: -2 } },
        { txt: "I flee silently. I leave the space vacant so another relative can take over, redistributing this responsibility.", w: { Rogue: 3, Knight: -2, Witch: -2 } },
        { txt: "I stall college for years, fail on purpose, or get expelled. I let failure take me out of this obligation without me having to say no.", w: { Bard: 3, Heir: 1, Page: 1, Prince: -1 } },
        { txt: "I try to reform the tradition from within, talking and showing that change is necessary for the family's survival.", w: { Sylph: 3, Seer: 2, Mage: 1, Prince: -1 } }
    ]},
    { t: "You see a child throwing a tantrum in a supermarket because they want candy, screaming and throwing themselves on the floor.", opts: [
        { txt: "I feel deep irritation. This display of uncontrolled desire and lack of discipline needs to be contained immediately.", w: { Prince: 3, Knight: 2, Sylph: -1, Bard: -1 } },
        { txt: "I find it funny or ignore it. It is the pure expression of a vital desire; children are like that, chaotic and full of want.", w: { Heir: 3, Mage: -1, Prince: -3 } },
        { txt: "If it were my child, I'd buy the candy just to shut them up so I could continue my life in peace. I resolve by yielding.", w: { Witch: 3, Rogue: 2, Page: -1, Knight: -2 } },
        { txt: "I don't even look. Kids scream, life is noisy. I go on with my shopping oblivious to other people's chaos.", w: { Bard: 3, Rogue: 1, Heir: 1, Prince: -1 } },
        { txt: "I analyze the parents. I judge their lack of authority and understand exactly where the upbringing failed.", w: { Mage: 3, Seer: 2, Heir: -1, Sylph: -1 } }
    ]},
    { t: "A rich friend offers to pay for a luxury trip for you, but you know they will throw it in your face later.", opts: [
        { txt: "I accept. If they want to act superior, that's their problem. I'll enjoy the luxury and the trip without spending a dime.", w: { Thief: 3, Witch: 1, Knight: -2, Prince: -2 } },
        { txt: "I refuse. I prefer paying for my own cheap trip than being in debt or under someone's financial dominion.", w: { Knight: 3, Prince: 2, Thief: -3, Heir: -2 } },
        { txt: "I convince them to invite more people, diluting their attention and turning the trip into a group event.", w: { Rogue: 3, Sylph: 1, Page: 1, Witch: -1 } },
        { txt: "I accept, but I make a point of 'paying' back with favors and organization, serving to balance the scales.", w: { Maid: 3, Page: 2, Seer: 1, Thief: -2 } },
        { txt: "I accept and don't care when they throw it in my face. They paid because they wanted to, I went because I was invited. I owe nothing emotionally.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -3 } }
    ]},
    { t: "You are playing a competitive game and realize your opponent is much weaker and newer than you.", opts: [
        { txt: "I win quickly and without stalling. I see no fun in pretending I'm bad. The game is to win, and I will win.", w: { Prince: 3, Thief: 2, Sylph: -3, Page: -2 } },
        { txt: "I go easy, allowing them to play and have fun, maybe even letting them win a round to encourage them.", w: { Sylph: 3, Rogue: 2, Heir: 1, Prince: -3 } },
        { txt: "I teach the mechanics while we play, stopping the match to explain what they did wrong. I become a tutor.", w: { Seer: 3, Mage: 2, Knight: -1, Witch: -1 } },
        { txt: "I start playing carelessly, testing random things. If I lose as a joke, it doesn't matter, the game was boring anyway.", w: { Bard: 3, Heir: 1, Mage: 1, Prince: -2 } },
        { txt: "I toy with them, creating absurd situations in the game just to see how they react, testing the system's limits.", w: { Witch: 3, Bard: 1, Mage: 1, Knight: -2 } }
    ]},
    { t: "You and your friends are sharing a pizza. The last slice, the most loaded one, remains. Everyone is looking, no one takes it.", opts: [
        { txt: "I take it and eat. If no one took it until now, it's because they didn't want it that much. I won't deny myself.", w: { Thief: 3, Witch: 2, Page: -1, Rogue: -3 } },
        { txt: "I offer the slice to the friend who ate least or seems hungriest. I feel pleasure in seeing another satisfied.", w: { Rogue: 3, Sylph: 2, Maid: 1, Thief: -3 } },
        { txt: "I divide the slice millimetrically into equal parts for everyone. Fair distribution is the only way to avoid conflict.", w: { Seer: 3, Mage: 2, Knight: 1, Bard: -2 } },
        { txt: "I let the slice get cold and be left over. I prefer waste to having to deal with the social dispute for food.", w: { Prince: 3, Heir: -1, Witch: -2 } },
        { txt: "I wait for someone to take it. If the slice rots there, it rots. I won't be the first or the last to touch it.", w: { Bard: 3, Heir: 2, Page: 1, Prince: -1 } }
    ]},
    { t: "You have a nagging headache, but not unbearable. How do you handle medication?", opts: [
        { txt: "I take the medicine immediately. I have no patience for feeling pain if there is an easy solution. I want to be 100% again.", w: { Witch: 3, Thief: 2, Prince: -1, Bard: -1 } },
        { txt: "I avoid taking it. I believe the body should heal itself or that medicine is an unnecessary crutch.", w: { Prince: 3, Seer: 2, Mage: 1, Sylph: -2 } },
        { txt: "I complain about the pain to someone, hoping the person takes care of me or brings me a glass of water and the pill.", w: { Page: 3, Thief: -1, Maid: -3 } },
        { txt: "I take whatever is in the drawer without even reading the label properly. If it goes away, it goes away; if not, whatever.", w: { Bard: 3, Rogue: 1, Heir: 1, Seer: -3 } },
        { txt: "I ignore the pain and keep doing my tasks. I use the pain as a reminder that I am alive and busy.", w: { Knight: 3, Maid: 2, Bard: -2, Heir: -2 } }
    ]},
    { t: "You wake up with unusual energy and drive, feeling invincible. What do you do with this day?", opts: [
        { txt: "I start three new projects, clean the house, and run a marathon. I spend this energy creating, for waste is a sin.", w: { Maid: 3, Knight: 2, Sylph: 1, Bard: -2 } },
        { txt: "I focus on myself. I use this energy to solve my pending problems and get what I want from people.", w: { Thief: 3, Witch: 2, Prince: -1, Page: -1 } },
        { txt: "I just 'am'. I let the day take me, floating through events with the absolute certainty that nothing can hit me.", w: { Heir: 3, Mage: -1, Knight: -2 } },
        { txt: "I get suspicious. This excess energy isn't normal; I try to understand what caused this before acting impulsively.", w: { Mage: 3, Seer: 2, Heir: -2, Thief: -1 } },
        { txt: "I spend it all on useless fun. I go out, drink, spend money. If life gave me extra energy, it's for me to burn however I want.", w: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } }
    ]}
	],
   "Blood": [
    { t: "A social group or community you love is slowly dying. The silence is awkward. What do you do?", opts: [
        { txt: "I try tirelessly to revive the mood. I send messages, bring up topics, and schedule events, refusing to let the bond die of starvation.", w: { Sylph: 3, Maid: 2, Heir: 1, Prince: -3 } },
        { txt: "I identify who is still worth it and create a parallel group with only my favorites. The ship is sinking, but I save the crew that matters.", w: { Thief: 3, Witch: 2, Mage: 1, Sylph: -2 } },
        { txt: "I take responsibility and confront everyone. Either we commit to keeping this alive, or we admit it's over once and for all.", w: { Knight: 3, Page: 1, Bard: -2 } },
        { txt: "I make the end official. I leave the group stating the reason or delete the server. I prefer to deliver a coup de grâce and end the agony than watch the decay.", w: { Prince: 3, Time: 1, Doom: 1, Maid: -3 } },
        { txt: "I simply stop answering. I let the group slide down my history and fall into oblivion. If no one else talks, I won't be the one to stop the silence.", w: { Bard: 3, Rogue: 2, Void: 1, Knight: -2 } }
    ]},
    { t: "You are invited to an important family event, but you are exhausted and hate the environment. What is your choice?", opts: [
        { txt: "I go and put on my best smile. My presence is a civic duty to maintain the harmony of the family structure.", w: { Maid: 3, Heir: 2, Knight: 1, Prince: -3 } },
        { txt: "I refuse the invitation categorically. If I am not relevant there or if the environment makes me feel bad, there is no reason to wear myself out.", w: { Prince: 3, Thief: 2, Witch: 1, Rogue: -1 } },
        { txt: "I say I'll go, but 'forget' or sleep through it. I let the expectation die on its own without me having to deal with the confrontation.", w: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
        { txt: "I go, but I spend the whole time observing the tensions between relatives, extracting useful information.", w: { Seer: 3, Mage: 1, Sylph: -2 } },
        { txt: "I go only to provide support to someone specific, acting as an emotional buffer for that person.", w: { Rogue: 3, Page: 2, Sylph: 1, Witch: -1 } }
    ]},
    { t: "An irreplaceable friend passed away. The funeral is over and now only silence remains. How do you handle the hole in your structure?", opts: [
        { txt: "I become the 'official guardian' of their memory. I correct those who speak wrongly and keep their belongings as sacred.", w: { Knight: 3, Thief: 2, Maid: 2, Sylph: 1, Bard: -2 } },
        { txt: "I find myself using their slang and habits. It's as if I allowed them to continue living through my actions.", w: { Heir: 3, Rogue: 2, Witch: 1 } },
        { txt: "I need to block memories and avoid places that remind me of them. The bond hurts too much, so I cut it.", w: { Prince: 3, Mage: 2, Seer: 1 } },
        { txt: "I let the memory fade. I don't fight to remember nor to forget. If the bond dissolves over time, it's natural.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "I try to fill the void by dedicating myself to finishing what they started, honoring their legacy through effort.", w: { Page: 3, Maid: 2, Seer: 1 } }
    ]},
    { t: "You feel a physical and emotional disconnection with people. It seems everyone has an 'instruction manual' you never received.", opts: [
        { txt: "I study interactions obsessively. I analyze social patterns to understand the mechanics that seem natural to others.", w: { Mage: 3, Seer: 2, Thief: 2 } },
        { txt: "I create a social 'persona' to deal with others. I act as seems correct so they don't notice I don't know how to act.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "I stop trying. If I don't connect, I keep to myself. I let relationships happen or die without interfering.", w: { Bard: 3, Rogue: 2, Heir: 1, Maid: -2 } },
        { txt: "I accept my position as an 'outsider' and let people come to me on my terms.", w: { Heir: 3, Rogue: 2, Mage: 1 } },
        { txt: "I try to become indispensable through practical favors. If I don't connect emotionally, I connect through utility.", w: { Maid: 3, Sylph: 2, Knight: 1 } }
    ]},
    { t: "Your oldest and deepest friendship is ending. There was a bad fight and the silence is now deafening. How do you react to this breakup?", opts: [
        { txt: "I don't accept the end. I feel a mix of fury and panic; this person is 'mine' and I will do the impossible to bring them back, by force if needed.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "I burn the bridge. If it's over, let it be over for good. I delete everything regarding them and block contact to move on.", w: { Prince: 3, Time: 2, Sylph: -3 } },
        { txt: "I despair to fix it. I apologize, promise to change, and try to 'heal' the wound at any cost. I don't know who I am without this person.", w: { Sylph: 3, Maid: 2, Heir: 2, Prince: -2 } },
        { txt: "I pretend I'm fine and rationalize that 'people come and go', hiding how much it affected me.", w: { Knight: 3, Page: -1 } },
        { txt: "I accept defeat and isolate myself. I feel I failed the person and that they will be better off without my mess, so I allow them to go.", w: { Page: 3, Rogue: 2, Thief: -3 } }
    ]},
    { t: "Two of your friends end a relationship catastrophically. Both demand you pick a side.", opts: [
        { txt: "I refuse to choose. I try to maintain the bridge between the two, acting as a mediator, even if both get angry.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
        { txt: "I choose the side I have more affinity with and cut the other without mercy. Loyalty is about choice.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -3 } },
        { txt: "I keep talking to both and pretend nothing happened. I ignore the drama and let them deal with my chaotic neutrality.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "I get away from both. Their emotional instability is contagious and I prefer breaking the bond with both.", w: { Prince: 3, Mage: 1, Maid: -2 } },
        { txt: "I absorb both their complaints, serving as an emotional trash can for both sides, without ever giving my opinion.", w: { Rogue: 3, Page: 2, Maid: 1, Thief: -2 } }
    ]},
    { t: "You are overwhelmed, but a group that depends on you demands a personal sacrifice of time and health.", opts: [
        { txt: "I accept, but I charge a high price later. No one can question my authority or deny me favors after this sacrifice.", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -3 } },
        { txt: "I say no. If they can't survive without draining me, that's their problem. I cut this dependency.", w: { Prince: 3, Thief: 1, Maid: -3 } },
        { txt: "I say I'll help, but procrastinate or do a sloppy job. My inertia ends up forcing them to figure it out.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "I ignore my tiredness and do what needs to be done. If I fail, the system stops, and that is inadmissible.", w: { Maid: 3, Knight: 2, Sylph: 1, Prince: -3 } },
        { txt: "I accept the burden, but try to delegate parts of it to others, redistributing the weight.", w: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } }
    ]},
    { t: "You need to wear a ridiculous uniform for work or school. Everyone wears it, but you feel humiliated.", opts: [
        { txt: "I customize the uniform, altering details to recover my identity. I can be part of the group, but on my terms.", w: { Witch: 3, Thief: 2, Knight: 1, Maid: -2 } },
        { txt: "I wear the uniform with total dedication. It is the symbol of my role there, and I wear the shirt (literally).", w: { Maid: 3, Heir: 2, Page: 1, Prince: -3 } },
        { txt: "I refuse to wear it. I prefer being punished or fired to submitting to this forced homogenization.", w: { Prince: 3, Mage: 1, Heir: -2 } },
        { txt: "I wear it anyway, all wrinkled or stained. I let the symbol of order degrade on my body.", w: { Bard: 3, Rogue: 1, Mage: 1, Knight: -2 } },
        { txt: "I feel erased. The uniform kills who I am and makes me just another number in the gear.", w: { Rogue: 3, Mage: 2, Sylph: -1 } }
    ]},
    { t: "You find out your closest friends created a group chat without you to plan something.", opts: [
        { txt: "I feel a paralyzing anxiety. I become obsessed with finding out what they are talking about and how I can get in.", w: { Page: 3, Thief: 2, Witch: 1, Rogue: -2 } },
        { txt: "I confront the group aggressively. If their loyalty isn't true, I'll end this bond myself.", w: { Prince: 3, Knight: 2, Sylph: -3, Maid: -2 } },
        { txt: "I don't even care. Fewer notifications on my phone. If they didn't call me, it's less social obligation for me.", w: { Bard: 3, Heir: 2, Rogue: 1, Knight: -2 } },
        { txt: "I accept the exclusion in silence, feeling that maybe I am the dead weight they need to leave behind.", w: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } },
        { txt: "I coldly analyze their behavior. If they felt the need to exclude me, the group has already failed.", w: { Seer: 3, Mage: 2, Knight: -1 } }
    ]},
    { t: "The group you are in is aimless and about to fragment due to lack of leadership. How do you react?", opts: [
        { txt: "I take command by force. If no one leads, I lead. I unify the group under my vision to avoid collapse.", w: { Thief: 3, Witch: 2, Prince: 1, Rogue: -3 } },
        { txt: "I make myself available to do the heavy lifting. I want everyone to feel safe through my service.", w: { Knight: 3, Page: 2, Maid: 1, Seer: -1 } },
        { txt: "I watch from the sidelines. It's fun (and curious) to see the social structure crumble on its own when no one holds it together.", w: { Bard: 3, Mage: 1, Rogue: 1, Sylph: -2 } },
        { txt: "I try to redistribute tasks. I move responsibilities to those who are idle, seeking balance without being the 'boss'.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -3 } },
        { txt: "I let it fragment. If the group can't stay together, it is weak and I cut my tie with failure.", w: { Prince: 3, Seer: 1, Maid: -3 } }
    ]}
	],
    "Breath": [
    { t: "Your routine has become extremely repetitive. Nothing new has happened for months and days seem like copies of each other. How do you react?", opts: [
        { txt: "I intentionally break the pattern. I create a problem or change something drastic just to see things happen.", w: { Maid: 3, Witch: 3, Thief: 1, Page: -1 } },
        { txt: "I keep fulfilling my obligations, but I pretend to be fine while boredom consumes me inside.", w: { Knight: 3, Prince: 2, Mage: 1, Heir: -2 } },
        { txt: "I don't care. I simply exist and let chance decide when the next change comes.", w: { Heir: 3, Rogue: 2, Sylph: 1, Knight: -2 } },
        { txt: "I start gradually withdrawing from people and commitments until I become inaccessible.", w: { Bard: 3, Rogue: 1, Page: 1, Seer: -1 } },
        { txt: "I use the free time to outline detailed plans of what my life will be like when I finally decide to change.", w: { Seer: 3, Mage: 2, Sylph: 1, Bard: -2 } }
    ]},
    { t: "An institution or person demands you sign a 5-year commitment term, with strict rules of conduct.", opts: [
        { txt: "I refuse immediately. The idea of having my future pre-defined by third parties is unacceptable to me.", w: { Prince: 3, Thief: 2, Knight: 1, Sylph: -2 } },
        { txt: "I sign, but ignore the rules that don't suit me. I find ways to do what I want without getting caught.", w: { Witch: 3, Thief: 2, Mage: 1, Page: -1 } },
        { txt: "I avoid giving a definitive answer. I disappear or change the subject to avoid dealing with the confrontation or the obligation.", w: { Rogue: 3, Bard: 2, Page: 1, Knight: -2 } },
        { txt: "I accept, trusting I'll be able to handle it, but I end up regretting it when the restrictions start to weigh down.", w: { Page: 3, Heir: 2, Sylph: 1, Seer: -3 } },
        { txt: "I accept, but restructure the agreement. If I'm staying, I'll make the rules work in my favor and not against me.", w: { Maid: 3, Sylph: 2, Witch: 1, Bard: -2 } }
    ]},
    { t: "You discover a secret about a friend that changes how they are seen, but doesn't affect their life directly.", opts: [
        { txt: "I move on as if I didn't know. It's their life and it's not my place to interfere in others' choices.", w: { Heir: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
        { txt: "I use this as a justification to distance myself. I wasn't really into maintaining closeness anyway.", w: { Bard: 3, Prince: 2, Thief: 1, Maid: -2 } },
        { txt: "I decide the truth must be told. I expose the fact to ensure there are no secrets among the group.", w: { Seer: 3, Mage: 2, Knight: 1, Rogue: -2 } },
        { txt: "I take advantage of the information to subtly influence their decisions, guiding them to where I think is best.", w: { Witch: 3, Thief: 2, Maid: 1, Page: -1 } },
        { txt: "I get anxious with the information, not knowing if I should tell or not, paralyzed by indecision.", w: { Page: 3, Knight: 2, Bard: -1, Heir: -3 } }
    ]},
    { t: "You adopt a new hobby or visual style and, shortly after, several people start copying you.", opts: [
        { txt: "I hate it. I abandon the style immediately or criticize those who copied me. I want to be unique, not a model.", w: { Prince: 3, Knight: 2, Mage: 1, Heir: -2 } },
        { txt: "I like the influence. I start dictating what is 'cool' or not, assuming control of the trend.", w: { Thief: 3, Maid: 2, Witch: 1, Page: -2 } },
        { txt: "Whatever. I do it for myself; if they want to do the same, it doesn't change my experience.", w: { Heir: 3, Rogue: 2, Bard: 1, Knight: -2 } },
        { txt: "I feel I must set the example. I try to ensure they understand the essence of what they are copying.", w: { Seer: 3, Sylph: 2, Page: 1, Thief: -2 } },
        { txt: "I take advantage of now being 'common' to blend in and lose the excessive attention I had before.", w: { Rogue: 3, Mage: 2, Bard: 1, Prince: -1 } }
    ]},
    { t: "Your group needs to make an urgent decision, but no one reaches a consensus and time is running out.", opts: [
        { txt: "I solve it alone and do it my way. Better done by me than stagnated by them.", w: { Thief: 3, Mage: 2, Knight: 1, Sylph: -2 } },
        { txt: "I take the lead and point to any direction. The important thing now is to get moving, no matter where.", w: { Maid: 3, Witch: 2, Seer: 1, Bard: -2 } },
        { txt: "I give up. If they can't decide, I'll go take care of my own things and leave the problem be.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
        { txt: "I try to facilitate the conversation so everyone yields a little and the blockage dissolves naturally.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
        { txt: "I wait for someone to decide for me. I feel my opinion won't change the impasse.", w: { Page: 3, Knight: 2, Bard: -1, Witch: -1 } }
    ]},
    { t: "You are in an unknown location, without GPS and without clear references of where the exit is.", opts: [
        { txt: "I find it great. I love the feeling of not knowing what comes next and I explore without rushing to arrive.", w: { Heir: 3, Seer: 1, Sylph: 1, Knight: -3 } },
        { txt: "I get nervous, but maintain a confident posture. I walk as if I knew the way so no one notices my mistake.", w: { Knight: 3, Page: 2, Prince: 1, Heir: -2 } },
        { txt: "I start interacting with the environment and people, using any available resource to discover the route.", w: { Witch: 3, Thief: 2, Mage: 1, Bard: -1 } },
        { txt: "I sit and wait. Eventually the situation will resolve itself or someone will show up.", w: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } },
        { txt: "I observe patterns in traffic and architecture to logically deduce where the exit must be.", w: { Mage: 3, Seer: 2, Thief: 1, Heir: -1 } }
    ]},
    { t: "A sudden opportunity to change your life arises, but it offers no guarantee of safety or stability.", opts: [
        { txt: "I go immediately. The excitement of novelty is worth more than any safety.", w: { Page: 3, Heir: 3, Sylph: 1, Seer: -2 } },
        { txt: "I only accept if I can see exactly what the consequences are and where this will take me.", w: { Seer: 3, Mage: 2, Knight: 1, Bard: -2 } },
        { txt: "I reject it. It looks like a trap or an illusion, and I prefer not to risk what I already have.", w: { Prince: 3, Thief: 2, Witch: 1, Page: -2 } },
        { txt: "I accept, planning to assume control of the situation as soon as I am inside.", w: { Thief: 3, Witch: 2, Maid: 1, Heir: -1 } },
        { txt: "I hesitate so much thinking about the risks that the opportunity ends up passing.", w: { Knight: 3, Page: 2, Bard: 1, Maid: -1 } }
    ]},
    { t: "You need to move to a smaller place and are forced to get rid of a large part of your belongings.", opts: [
        { txt: "I feel relief. I throw everything away or donate without thinking twice. Fewer things, less weight.", w: { Prince: 3, Bard: 2, Heir: 1, Maid: -2 } },
        { txt: "I pass my items to close friends. I prefer they keep them than having to carry everything with me.", w: { Rogue: 3, Sylph: 2, Seer: 1, Thief: -2 } },
        { txt: "I try to find a way to take everything, even if it gets cluttered. My things are my identity.", w: { Maid: 3, Witch: 2, Knight: 1, Prince: -2 } },
        { txt: "I keep only the strictly functional. If it has no immediate practical utility, I discard it.", w: { Mage: 3, Seer: 2, Thief: 1, Page: -1 } },
        { txt: "I suffer through the process. I feel as if I am losing parts of myself by leaving each object.", w: { Page: 3, Knight: 2, Heir: -1, Prince: -3 } }
    ]},
    { t: "The work or study environment has a hostile atmosphere, full of passive-aggressive conflicts.", opts: [
        { txt: "I leave. I make up an excuse or simply walk out. I'm not obliged to stay there.", w: { Rogue: 3, Bard: 2, Heir: 1, Knight: -2 } },
        { txt: "I try to break the ice with humor or light conversation, trying to restore normality.", w: { Sylph: 3, Heir: 2, Page: 1, Prince: -1 } },
        { txt: "I confront the problem directly to end the tension once and for all.", w: { Prince: 3, Knight: 2, Thief: 1, Sylph: -2 } },
        { txt: "I stay quiet and uncomfortable, absorbing the negativity without being able to react.", w: { Page: 3, Knight: 2, Mage: 1, Witch: -1 } },
        { txt: "I manipulate the situation to divert the focus of the conflicts to something irrelevant, clearing my path.", w: { Witch: 3, Thief: 2, Mage: 1, Seer: -1 } }
    ]},
    { t: "You find yourself in a situation where you have no obligations, no one knows you, and you owe nothing to anyone.", opts: [
        { txt: "I feel a frightening void. Without a function or someone to answer to, I don't know who I am.", w: { Knight: 3, Page: 2, Mage: 1, Heir: -2 } },
        { txt: "I feel peace. I take the moment to live without a script, just experiencing whatever comes.", w: { Heir: 3, Rogue: 2, Sylph: 1, Knight: -3 } },
        { txt: "I start building something new. Since there are no rules, I create my own from scratch.", w: { Maid: 3, Witch: 2, Thief: 1, Bard: -2 } },
        { txt: "I get bored. I'll probably cause some confusion just to have something to interact with.", w: { Bard: 3, Thief: 2, Prince: 1, Seer: -2 } },
        { txt: "I use the distance to observe and comprehend how the world works without my interference.", w: { Seer: 3, Mage: 2, Sylph: 1, Prince: -1 } }
    ]}
	]
},
        }
    }
};

let viewerClass = "";
let viewerAspect = "";

function start() {
    document.body.classList.remove('red-mode');
    state.stage = "aspect_quiz";
    state.questionCount = 0;
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
                    let aversionBonus = 0;
                    
                    if (currentAversion < 0) {
                        aversionBonus = Math.abs(currentAversion) * 0.5; 
                    }

                    state.destructionScores[aspect] += (baseDestruction + aversionBonus);
                    
                    console.log(`Destruição em ${aspect}: Base ${baseDestruction} + Bônus Aversão ${aversionBonus.toFixed(1)}`);
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
        console.log(`High Destruction ativado para ${state.dominantAspect}. Pontos de Destruição: ${dest} (Minímo necessário: 24)`);
    } else {
        state.highDestruction = false;
    }

    if (state.highDestruction) {
        state.classScores.Prince = (state.classScores.Prince || 0) + 3;
        state.classScores.Bard = (state.classScores.Bard || 0) + 3;
        state.classScores.Witch = (state.classScores.Witch || 0) + 2;
    }

    let description = aspectSynopses[state.dominantAspect];
    
    let isForced = (score === 1 && Object.values(state.aspectScores).reduce((a,b)=>a+b,0) === 1);
    
    let transitionText;
    if (isForced) {
         transitionText = uiText.transitionForced;
    } else {
         transitionText = state.highDestruction ? uiText.transitionDestruction : uiText.transitionNormal;
    }

    render(`
        <div class="fade-in">
            <h1>${uiText.resultTitleAspect} ${state.dominantAspect.toUpperCase()}</h1>
            <p>${description}</p>
            <p style="color: #00aa00;">${transitionText}</p>
            <button onclick="startClassPhase()">${uiText.btnContinue}</button>
        </div>
    `);
}
function startClassPhase() {
    state.stage = "class_quiz";
    state.questionCount = 0;
    state.currentQueue = questionsByAspect[state.dominantAspect] || [];
    renderQuestion(state.currentQueue[0]);
}


function renderDynamicView() {
    const key = `${viewerClass}:${viewerAspect}`;
    const comboText = classpectDescriptions[key]; 

    const title = document.getElementById('result-title');
    const combinedContainer = document.getElementById('combined-view-container');
    const splitContainer = document.getElementById('split-view-container');
    const comboContent = document.getElementById('combined-content');
    const comboFooter = document.getElementById('combined-footer');
    
    const classDisplay = document.getElementById('class-display-area');
    const aspectDisplay = document.getElementById('aspect-display-area');

    if (title) title.innerHTML = `${viewerClass.toUpperCase()} OF ${viewerAspect.toUpperCase()}`;

    if (comboText) {

        if (combinedContainer) {
            combinedContainer.style.display = 'block';
            comboContent.innerHTML = comboText;
            comboFooter.innerHTML = `Explorando a combinação: (${viewerAspect}) + (${viewerClass})`;
        }
        if (splitContainer) splitContainer.style.display = 'none';
        
    } else {
        if (combinedContainer) combinedContainer.style.display = 'none';
        
        if (splitContainer) {
            splitContainer.style.display = 'block';

            const cText = classSynopses[viewerClass] || "Classe desconhecida.";
            classDisplay.innerHTML = `<p>${cText}</p>`;
            
            const aText = aspectSynopses[viewerAspect] || "Aspecto desconhecido.";
            aspectDisplay.innerHTML = `<p>${aText}</p>`;
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
    let topAspect = state.dominantAspect;

    viewerClass = topClass;
    viewerAspect = topAspect;

    let top3Classes = sortedClasses.slice(0, 3);

    render(`
        <div class="result-box fade-in">
            <h1 id="result-title" style="font-size: 40px; text-shadow: 0 0 10px #00ff00;">...</h1>
            
            <p style="font-size: 18px; color: #fff; margin-bottom: 20px;">${uiText.finalSubtitle}</p>
            
            <div id="combined-view-container" style="display: none; text-align: left; margin: 20px 0; border: 1px solid #005500; padding: 20px; background: rgba(0,20,0,0.5);">
                <h3 style="color: #00ff00; font-size: 14px; margin-bottom: 15px;">${uiText.finalTitle}</h3>
                <div id="combined-content" class="combined-analysis">
                </div>
                <p id="combined-footer" style="margin-top: 25px; font-size: 0.9em; opacity: 0.8; border-top: 1px dashed #005500; padding-top: 15px;">
                    ...
                </p>
            </div>

            <div id="split-view-container" style="display: none; text-align: left; margin: 20px 0; border: 1px solid #005500; padding: 20px; background: rgba(0,20,0,0.5);">
                <h3 style="color: #00ff00; font-size: 14px; margin-bottom: 5px;">${uiText.labelAspect}</h3>
                <div id="aspect-display-area">
                </div>
                <hr style="border: 0; border-top: 1px solid #005500; margin: 20px 0;">
                <h3 style="color: #00ff00; font-size: 14px; margin-bottom: 5px;">${uiText.labelClass}</h3>
                <div id="class-display-area">
                </div>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 25px 0;">
                <div class="top3-explorer" style="flex: 1; min-width: 250px; padding: 15px; border: 1px dashed #00ff00; background: rgba(0,40,0,0.3);">
                    <p style="color: #00ff00; font-weight: bold; margin-bottom: 10px; font-size: 14px;">${uiText.exploreClasses}</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        ${top3Classes.map(item => `
                            <button class="top3-btn" onclick="updateClassView('${item[0]}')" style="padding: 6px 10px; font-size: 11px; background: #001100; border: 1px solid #00ff00; color: #00ff00; cursor: pointer; transition: 0.3s;">
                                ${item[0]} (${item[1]})
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="top3-explorer" style="flex: 1; min-width: 250px; padding: 15px; border: 1px dashed #00ff00; background: rgba(0,40,0,0.3);">
                    <p style="color: #00ff00; font-weight: bold; margin-bottom: 10px; font-size: 14px;">${uiText.exploreAspects}</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        ${top3Aspects.map(item => `
                            <button class="top3-btn" onclick="updateAspectView('${item[0]}')" style="padding: 6px 10px; font-size: 11px; background: #001100; border: 1px solid #00ff00; color: #00ff00; cursor: pointer; transition: 0.3s;">
                                ${item[0]} (${item[1]})
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <p style="color: #88ff88; font-size: 14px;">${uiText.footerNote1}</p>
            <p style="color: #88ff88; font-size: 14px;">${uiText.footerNote2}</p>
            
            <p style="font-size: 11px; color: #aaffaa; opacity: 0.7; margin-top: 5px;">
                ${uiText.footerNote3}
            </p>

            <button onclick="location.reload()" style="margin-top:20px;">${uiText.btnRestart}</button>
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
    const html = `
        <div class="fade-in result-container" style="text-align: center; padding: 2rem;">
            
            <h1>${uiText.nullTitle}</h1>
            <p style="font-style: italic; opacity: 0.8;">${uiText.nullSubtitle}</p>
            
            <img src="https://i.imgur.com/zcNK5Dk.png" alt="Void Glitch" style="max-width: 250px; width: 100%; height: auto; margin: 20px auto; display: block; border: 1px solid #ff0000; box-shadow: 0 0 10px rgba(255,0,0,0.5);">

            <div class="analysis-text" style="margin-top: 2rem;">
                <p>${uiText.nullText1}</p>
                <p><strong>${uiText.nullText2}</strong></p>
            </div>
            
            <button class="retry-button" onclick="location.reload()">${uiText.btnRetry}</button>
        </div>
    `;
    render(html);
}

function renderQuestion(q) {
    activeQuestion = q;
    let html = `<h2>${q.t}</h2>`;

    html += `<div class="options-container" style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">`;
    q.opts.forEach((opt, index) => {
        html += `<button onclick="handleInput(${index})">${opt.txt}</button>`;
    });
    html += `</div>`;

    html += `<div class="navigation-controls" style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">`;

    if (state.questionCount > 0 || state.stage === "class_quiz") {
        html += `<button class="back-button" onclick="handleBack()" style="background: #444;">${uiText.btnBack}</button>`;
    }
    
    html += `<button class="skip-button" onclick="handleSkip()" style="background: #222;">${uiText.btnSkip}</button>`;
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
        renderNullEnding(); // Chama a tela da fronha
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
        console.log("Reiniciando renderização segura.");
        renderQuestion(state.currentQueue[0]); 
    }
}

function render(html) {
    document.getElementById('content').innerHTML = html;
}

function setLanguage(lang) {
    currentLang = lang;
    
    aspectQuestions = DATABASE[lang].aspectQuestions;
    questionsByAspect = DATABASE[lang].questionsByAspect;
    aspectSynopses = DATABASE[lang].aspectSynopses;
    classSynopses = DATABASE[lang].classSynopses;
    classpectDescriptions = DATABASE[lang].classpectDescriptions;
    uiText = DATABASE[lang].ui;

    updateLanguageVisuals();
	
    if (state.stage === "intro") {
        renderIntro();
    } 
    else if (activeQuestion) {
        renderQuestion(activeQuestion);
    }
}

function renderIntro() {
    render(`
        <div class="fade-in">
            <h1>${uiText.title}</h1>
            <p>${uiText.intro1}</p>
            <p>${uiText.intro2}</p>
            <p>${uiText.intro3}</p>
            <p>${uiText.intro4}</p>
            <button onclick="start()">${uiText.btnStart}</button>
        </div>
    `);
}

function createLanguageControls() {
    // Evita criar duplicado se já existir
    if (document.getElementById('lang-controls')) return;

    const div = document.createElement('div');
    div.id = 'lang-controls';
    // Estilo CSS direto aqui para garantir que fique no topo direito
    div.style.cssText = "position: fixed; top: 15px; right: 15px; z-index: 9999; display: flex; gap: 10px;";

    div.innerHTML = `
        <button onclick="setLanguage('pt')" id="btn-pt" style="font-size: 24px; cursor: pointer; background: none; border: none; filter: grayscale(100%); transition: all 0.3s;" title="Português">
            🇧🇷
        </button>
        <button onclick="setLanguage('en')" id="btn-en" style="font-size: 24px; cursor: pointer; background: none; border: none; filter: grayscale(100%); transition: all 0.3s;" title="English">
            🇺🇸
        </button>
    `;

    document.body.appendChild(div);
}

function updateLanguageVisuals() {
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    
    if (!btnPt || !btnEn) return;

    if (currentLang === 'pt') {
        btnPt.style.filter = "grayscale(0%)";
        btnPt.style.transform = "scale(1.2)";
        btnEn.style.filter = "grayscale(100%)";
        btnEn.style.transform = "scale(1)";
    } else {
        btnEn.style.filter = "grayscale(0%)";
        btnEn.style.transform = "scale(1.2)";
        btnPt.style.filter = "grayscale(100%)";
        btnPt.style.transform = "scale(1)";
    }
}

window.onload = () => {
    createLanguageControls(); 
    setLanguage('pt'); 
};
};


















