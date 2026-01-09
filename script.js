let state = {
    stage: "intro",
    aspectScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    destructionScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    classScores: { Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Mage: 0, Seer: 0, Witch: 0, Heir: 0, Knight: 0, Page: 0, Maid: 0, Sylph: 0 },
    dominantAspect: "",
    highDestruction: false,
    questionCount: 0,
    currentQueue: [],
    history: []
};

let activeQuestion = null;

const aspectSynopses = {
    Time: "<strong>Tempo:</strong> Você é orientado a objetivos e brutalmente eficiente. O relógio não lhe assusta; ele toca a sua música. Você entende que fins são necessários e que o sacrifício faz parte do progresso. Você vive em um estado de ansiedade crônica. Você corre contra o relógio não porque gosta, mas porque teme que, se parar por um segundo, tudo desmorone. Sua impaciência é o medo da mortalidade disfarçado de produtividade.",
    Space: "<strong>Espaço:</strong> Você vê o quadro geral. Onde outros veem o fim, você vê o começo de algo novo. Criativo, artístico e fundamentalmente importante, você é o palco onde o universo acontece. Você se sente isolado e desconectado. Sua tendência a esperar passivamente pelo momento certo ou a focar demais na criação física é uma forma de evitar lidar com o fato de que, muitas vezes, você se sente sozinho numa sala cheia de gente.",
    Void: "<strong>Vazio:</strong> Você é o mistério, o potencial não realizado, o segredo. Você opera nas sombras, confortável com o desconhecido e capaz de ver o que os outros ignoram. Você é a tela em branco infinita. Você se esconde porque tem medo de ser julgado ou percebido. É mais seguro ser um nada do que arriscar ser algo e falhar. Sua passividade e apatia são formas de evitar a dor da exposição.",
    Light: "<strong>Luz:</strong> Você quer a verdade, o conhecimento e a relevância. Você ilumina o caminho, manipula a sorte e garante que nada importante passe despercebido. Você joga para ganhar e geralmente ganha. Você tem pavor da irrelevância. Você precisa ser o protagonista, precisa estar certo e precisa que todos vejam isso. Sua busca por conhecimento é, muitas vezes, uma busca desesperada por validação externa e atenção.",
    Mind: "<strong>Mente:</strong> Racional, adaptável e justo. Enquanto outros se perdem tentando definir quem são, você foca obsessivamente em qual caminho tomar. Sua mente disseca cada desdobramento, cada variável e cada consequência antes mesmo de o dado rolar. Você valoriza a justiça acima do viés pessoal e a lógica acima do conforto emocional. Você é capaz de ignorar o que o seu 'eu' deseja, se isso garantir que a escolha feita seja, factualmente, a melhor jogada no tabuleiro.",
    Heart: "<strong>Coração:</strong> Você entende as pessoas — e a si mesmo — em um nível instintivo. Autêntico e apaixonado, você é guiado por seus sentimentos e identidade, servindo como a bússola moral ou emocional do grupo. Você é obcecado pela própria identidade porque, no fundo, sente-se fragmentado. Você sente tudo com tanta intensidade que, às vezes, é difícil separar o que você sente do que é real. Sua autenticidade pode ser apenas teimosia emocional.",
    Rage: "<strong>Raiva:</strong> Você vê as mentiras que sustentam a sociedade e se recusa a aceitá-las. Sua força vem da recusa, do desafio e de uma busca agressiva pela verdade crua, custe o que custar. Você tem medo de ser enganado ou controlado, então rejeita tudo preventivamente. Sua raiva constante e seu cinismo são escudos para não se machucar. Você se fecha em uma única verdade (a sua) e chama isso de objetividade.",
    Hope: "<strong>Esperança:</strong> Você acredita. E porque você acredita, torna-se real. Seu otimismo é uma força da natureza, capaz de inspirar aliados e quebrar probabilidades impossíveis através da pura convicção. Sua fé cega é um mecanismo de negação. Você se apega ao 'como as coisas deveriam ser' para não ter que lidar com 'como as coisas são'. Você prefere viver numa fantasia bonita a enfrentar uma verdade feia.",
    Doom: "<strong>Perdição:</strong> Você entende o sacrifício e as regras inevitáveis do universo. Empático e cauteloso, você sabe que nem tudo tem um final feliz, e usa esse conhecimento para mitigar o desastre para os outros. Você é fatalista. Muitas vezes, você desiste antes mesmo de tentar porque já sabe como vai acabar. Você usa o cinismo e o pessimismo como uma armadura para não se decepcionar, sufocando sua própria esperança no berço.",
    Life: "<strong>Vida:</strong>  Você é energia pura, crescimento e cura. Você acredita que regras existem para serem quebradas em nome da sobrevivência e do luxo. Onde há deserto, você faz crescer uma floresta. Você tem um medo profundo de ser insignificante ou de perder sua autonomia. Sua necessidade de fazer acontecer e de ajudar pode virar dominância. Você atropela os desejos dos outros porque acha que sabe o que é melhor para a sobrevivência deles.",
    Blood: "<strong>Sangue:</strong> Você é a cola que mantém todos unidos. Para você, lealdade, promessas e vínculos são mais fortes que a física. Você é um líder natural ou um companheiro devoto que encontra força na união. Você define seu valor inteiramente pelo que pode fazer pelos outros ou a quem está conectado. Você morre de medo de ficar sozinho ou de ser inútil, o que pode levá-lo a relacionamentos codependentes ou a carregar o peso do mundo nas costas sem reclamar.",
    Breath: "<strong>Suspiro:</strong> Você é o vento que não pode ser contido. Desapegado, flexível e independente, você flutua acima dos problemas e traz movimento para onde há estagnação. Você é a própria definição de liberdade. Sua liberdade é, muitas vezes, apenas escapismo. Você tem pavor de amarras e responsabilidades, então se afasta (física ou emocionalmente) assim que as coisas ficam sérias ou difíceis. Você confunde indiferença com iluminação."
};

const classSynopses = {
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
};

// FASE 1: ASPECTO 
const aspectQuestions = [
    { t: "1. Um grupo de amigos insiste em manter uma tradição anual que você acha cansativa. O que você faz?", opts: [
        { txt: "Acabo indo, mas só para cumprir o protocolo. Me incluíram, mas não significa que estou ali de corpo e alma.", w: { Doom: 3, Life: 1, Breath: 1 } },
        { txt: "Insisto para que todos compareçam. Se a gente começar a abrir exceções, o grupo acaba se perdendo com o tempo.", w: { Blood: 4, Breath: -2 } },
        { txt: "Não vou. Se não está me fazendo bem, não faz sentido me sentir preso a um compromisso só por obrigação.", w: { Breath: 3, Void: 2, Life: 1, Blood: -3 }, destroys: "Blood" }, 
        { txt: "Tento convencer o pessoal a mudar um pouco o plano para algo que canse menos, mas que ainda sirva para a gente se reunir.", w: { Mind: 3, Life: 2, Space: 2, Heart: -1 } },
        { txt: "Analiso o motivo do meu cansaço. Pode não ter nada a ver com a tradição em si, mas com algum outro fator na minha vida que esteja me exaurindo.", w: { Heart: 3, Time: 2 } }
    ]},
    { t: "2. Você descobre um erro grave de um colega de trabalho que é seu amigo. Isso pode prejudicá-lo no futuro. O que você faz?", opts: [
        { txt: "Digo a ele exatamente o que vi. Ele precisa ter todos os fatos em mãos para ter clareza sobre a própria situação.", w: { Light: 3, Rage: 2, Void: -3 }, destroys: "Void" }, 
        { txt: "Mantenho segredo. Trazer isso à tona agora só criaria um clima ruim e uma atenção negativa que ninguém precisa.", w: { Void: 3, Blood: 2, Light: -3 } }, 
        { txt: "Não me meto. Se o erro aconteceu, as consequências virão naturalmente e não acho que eu deva interferir no que tem que ser.", w: { Doom: 3, Time: 2, Life: -2 } },
        { txt: "Aviso ele e ajudo a bolar uma forma de consertar o erro antes que isso gere um efeito dominó e piore as coisas.", w: { Life: 3, Space: 1, Mind: 1 }, destroys: "Doom" },
        { txt: "Depende. O erro dele pode me prejudicar ou as pessoas ao meu redor.", w: { Mind: 3, Time: 2, Doom: -2 } }
    ]},
    { t: "3. Ao iniciar um novo projeto pessoal, qual é a sua maior preocupação?", opts: [
        { txt: "Se eu vou conseguir dar forma a tudo o que imaginei e fazer aquilo realmente ocupar o espaço que merece no mundo.", w: { Space: 3, Hope: 2, Time: -2 } },
        { txt: "Se terei tempo para terminar antes que o tédio destrua o plano.", w: { Time: 3, Breath: 1, Space: -2, Life: 1 } }, 
        { txt: "Se esse projeto realmente diz algo verdadeiro sobre mim ou se estou apenas seguindo um impulso que não me representa.", w: { Heart: 3, Rage: 1, Mind: -3 }, destroys: "Mind" },
        { txt: "Se eu tomei as decisões certas no planejamento ou se estou ignorando alguma falha que vai arruinar o resultado depois.", w: { Mind: 3, Light: 1, Heart: -3 } }, 
        { txt: "Se isso que estou criando tem potencial para me levar a lugares novos e realmente mudar minha situação atual.", w: { Life: 3, Light: 2, Doom: -3 }, destroys: "Doom" }
    ]},
    { t: "4. Como você lida com uma crítica dura sobre sua competência?", opts: [
        { txt: "Avalio se os pontos levantados fazem sentido ou se a pessoa apenas tomou uma decisão errada ao me julgar daquela forma.", w: { Heart: 3, Time: 1 } }, 
        { txt: "Ignoro o tom da fala e foco apenas no que pode ser útil para melhorar a qualidade técnica do que eu estou entregando.", w: { Space: 3, Mind: 2 }, destroys: "Heart" },
        { txt: "Fico questionando a real intenção por trás da fala. Muita gente critica só para exercer poder ou esconder a própria frustração.", w: { Light: 3, Rage: 2 } },
        { txt: "Aceito o que foi dito. Se eu falhei em ser eficiente, é natural que eu tenha que lidar com as cobranças e os resultados disso.", w: { Doom: 3, Void: 1, Time: 2, Life: -2 }, destroys: "Life" },
        { txt: "Tento enxergar o que a pessoa viu. Às vezes ela percebeu algum detalhe ou uma informação importante que passou batido por mim.", w: { Blood: 3, Light: 2, Void: -2 } }
    ]},
    { t: "5. Em uma discussão acalorada, o que mais te irrita nos outros?", opts: [
        { txt: "Gente que tenta 'amaciar' a situação ou manter um otimismo forçado quando as coisas estão claramente um desastre.", w: { Rage: 3, Life: 2, Hope: -3 }, destroys: "Hope" }, 
        { txt: "Gente que não interfere ou que se fecha para possibilidades só porque 'as regras não permitem' ou 'é impossível'.", w: { Hope: 3, Life: 1, Rage: 1 }, destroys: "Doom" }, 
        { txt: "Gente que trata o problema de forma fria e técnica demais, ignorando completamente o que as pessoas envolvidas estão sentindo.", w: { Heart: 3, Breath: 2, Mind: -3, Time: -1 } },
        { txt: "Gente que perde o controle e começa a agir por puro impulso emocional, sem parar um segundo para pensar no que é mais sensato fazer.", w: { Mind: 3, Space: 1, Heart: -3 } },
        { txt: "Gente que fica dando voltas e focando em detalhes que não servem para nada, em vez de ir direto ao ponto que realmente importa.", w: { Light: 3, Blood: 2, Time: 2, Void: -3 }, destroys: "Void" } 
    ]},
    { t: "6. Você tem um final de semana livre. Como se sente parado?", opts: [
        { txt: "Inquieto. Sinto que cada hora que passo sem produzir algo concreto é um desperdício de um recurso que não volta mais.", w: { Time: 3, Life: 1, Space: -2 }, destroys: "Space" }, 
        { txt: "Meio culpado. Estar sozinho e parado me faz sentir que estou falhando com as pessoas que dependem de mim ou que estou perdendo o contato com o que importa.", w: { Blood: 3, Rage: 3, Doom: 1, Breath: -3 }, destroys: "Breath" }, 
        { txt: "Leve. Aproveito a tranquilidade e uso meu tempo para focar no que gosto de fazer e no que me der na telha.", w: {Breath: 3, Space: 3, Time: -3 }, destroys: "Time" }, 
        { txt: "Reflexivo. Uso o silêncio para tentar entender se o que eu estou fazendo da vida hoje é o que eu realmente quero.", w: { Heart: 3, Life: 2, Mind: -1, Light: -1 } },
        { txt: "Entediado. Se não houver algo novo acontecendo ou algum estímulo externo, sinto como se minha energia estivesse estagnando.", w: { Life: 3, Rage: 1, Mind: 2, Doom: -2 } }
    ]},
    { t: "7. O que mais te atrai em alguém que você acabou de conhecer?", opts: [
        { txt: "A autenticidade. Sinto-me atraído por quem parece estar em paz consigo mesmo e não finge ser o que não é.", w: { Heart: 3, Blood: 2, Mind: -2 }, destroys: "Mind" }, 
        { txt: "A objetividade. Admiro quem consegue ser direto e coerente, sem deixar que o ego ou as emoções nublem o que é sensato.", w: { Mind: 1, Light: 3, Heart: -3 } }, 
        { txt: "A confiabilidade. Gosto de pessoas que transmitem segurança e que parecem levar a sério os compromissos que assumem.", w: { Blood: 3, Rage: 1, Doom: 3, Breath: -2 } }, 
        { txt: "O mistério. Me interesso por quem não se expõe logo de cara e mantém um mundo próprio, longe dos olhos de todo mundo.", w: { Void: 3, Breath: 2, Light: -3 }, destroys: "Light"},
        { txt: "A originalidade. Me interesso por quem tem um estilo único e parece estar sempre criando ou transformando algo ao seu redor.", w: { Space: 3, Life: 2, Time: -2 }, destroys: "Time" }
    ]},
    { t: "8. Você precisa demitir alguém esforçado sem resultados. Como lida?", opts: [
        { txt: "Foco no que é necessário para o sistema funcionar. Se uma peça não está cumprindo seu papel, ela precisa ser removida para o bem do todo.", w: { Mind: 3, Space: 2, Blood: 2, Life: -3 }, destroys: "Life" }, 
        { txt: "Tento dar mais uma chance ou mudar a pessoa de função. Acredito que, com o estímulo certo, qualquer um pode florescer e dar a volta por cima.", w: { Life: 3, Hope: 2, Doom: -3 }, destroys: "Doom" }, 
        { txt: "Sinto o peso da decisão. Tento fazer o processo ser o menos doloroso possível, garantindo que a pessoa saiba que ainda tem meu apoio pessoal.", w: { Breath: 3, Doom: 2, Heart: 2, Mind: -1 } },
        { txt: "Sou direto e honesto sobre os fatos. Mentir ou dar falsas esperanças só faria a pessoa perder tempo em um lugar onde ela não terá futuro.", w: { Rage: 3, Light: 2, Hope: -3 }, destroys: "Hope" }, 
        { txt: "Analiso a situação de fora. Se o desligamento é a conclusão lógica baseada nos dados, eu executo a decisão sem deixar que o sentimentalismo interfira no veredito.", w: { Mind: 3, Space: 2, Heart: -3 }, destroys: "Heart" }
    ]},
    { t: "9. Qual é a sua relação com lembranças, fotos e o passado?", opts: [
        { txt: "Guardo objetos e fotos com cuidado. Ter algo físico para tocar me ajuda a sentir que aqueles momentos e pessoas ainda ocupam um espaço real na minha vida.", w: { Time: 3, Doom: 2, Space: -2 }, destroys: "Space" }, 
        { txt: "Vejo o passado como uma memória que abre um leque de possibilidades para novas experiências que carregarei comigo.", w: { Space: 3, Hope: 2 } },
        { txt: "O passado serve como aprendizado. Guardo o que aconteceu apenas para analisar as consequências das minhas escolhas e não cometer o mesmo erro de novo.", w: { Mind: 3, Light: 1 } }, 
        { txt: "Minhas memórias são o que me dão força. Acredito que o que vivi de bom é a prova de que coisas melhores ainda podem ser construídas no futuro.", w: { Hope: 3, Breath: 2, Rage: 2 } },
        { txt: "Não dou muita importância. O que passou já perdeu o brilho; prefiro focar no agora sem carregar o peso do que já foi.", w: { Void: 3, Breath: 2, Light: -2 }, destroys: "Light" }
    ]},
    { t: "10. Diante de um impasse sem solução, qual sua reação?", opts: [
        { txt: "Tento forçar uma solução. Às vezes a única saída é forçar a passagem e derrubar o que está bloqueando o caminho, custe o que custar.", w: { Doom: 3, Rage: 1, Hope: -3 } }, 
        { txt: "Aceito o limite. Se o caminho fechou, é porque chegamos ao fim da linha e não adianta lutar contra uma situação que já está decidida.", w: { Time: 3, Life: -3 }, destroys: "Life" }, 
        { txt: "Não aceito que não tenha solução. Acredito que sempre há uma saída se persistirmos e mantivermos a convicção.", w: {Hope: 3, Rage: 3, Life: 1 } }, 
        { txt: "Tento bolar uma ferramenta nova ou abordar o problema por um ângulo diferente para contornar o obstáculo.", w: { Space: 3, Breath: 2, Mind: 3, Time: -1 } },
        { txt: "Paro tudo e volto a investigar. Se parece sem solução, é porque ainda tem algum detalhe importante que eu não consegui enxergar.", w: { Light: 3, Time: 1, Void: -3 }, destroys: "Void" }
    ]},
    { t: "11. Um segredo perigoso chega até você. O que pensa?", opts: [
        { txt: "Se essa informação me foi confiada ou se ela pode afetar as pessoas ao meu redor, eu a guardo comigo, não importa o peso.", w: { Blood: 3, Doom: 2, Void: 1, Breath: -2 } }, 
        { txt: "Se esse segredo for revelado no momento certo, ele pode trazer a clareza que todos precisam para agir.", w: { Light: 3, Mind: 1, Void: -3 }, destroys: "Void" }, 
        { txt: "Segredos geralmente são usados para esconder verdades feias ou para manipular quem não sabe de nada.", w: { Mind: 3, Rage: 1, Hope: -2 } },
        { txt: "Não quero saber. Não quero que essa informação mude minha paz ou me obrigue a tomar partido.", w: { Void: 3, Breath: 2, Light: -3 }, destroys: "Light" }, 
        { txt: "Um segredo é apenas mais uma variável que pode alterar o resultado das minhas escolhas futuras.", w: { Mind: 2, Time: 2, Heart: -2 }, destroys: "Heart" }
    ]},
    { t: "12. O grupo insiste em um plano fadado ao erro por otimismo. O que faz?", opts: [
        { txt: "Digo abertamente que vai dar errado. Prefiro ser o chato que fala a verdade do que ver todo mundo se perdendo numa mentira confortável.", w: { Rage: 3, Blood: 2, Hope: -3 }, destroys: "Hope" }, 
        { txt: "Mostro por que a ideia não faz sentido e apresento uma alternativa. Não vou seguir um caminho que a lógica já mostra que é um beco sem saída.", w: { Mind: 3, Light: 1, Heart: -2 }, destroys: "Void" }, 
        { txt: "Acompanho o grupo mesmo sabendo do risco. O mais importante agora é estarmos dispostos a seguir em frente.", w: { Breath: 3, Doom: 1, Rage: -2 } },
        { txt: "Vou com eles. Acredito que, se a gente mantiver o ânimo e a convicção, a nossa vontade pode acabar mudando o resultado final.", w: { Hope: 3, Life: 2, Rage: -2 } }, 
        { txt: "Observo o desenrolar das coisas. Se eles escolheram esse caminho, o fracasso é a consequência natural e eu vou usar a experiência para não repetir o erro.", w: { Space: 3, Light: 2, Time: -3 } }
    ]},
    { t: "13. Você está em um local onde ninguém te conhece. Como se sente?", opts: [
        { txt: "Livre. Sem expectativas, posso agir sem ser rotulado.", w: { Breath: 3, Space: 2, Blood: -2, Life: 1 } },
        { txt: "Irrelevante. Preciso encontrar alguém para validar minha existência.", w: { Light: 3, Heart: 2, Void: 2 }, destroys: "Breath" },
        { txt: "Observador. Chance perfeita para analisar a lógica do local.", w: { Mind: 3, Time: 2, Heart: -1 }, destroys: "Void" },
        { txt: "Inquieto. O anonimato me incomoda; vou logo me apresentar e entender o cenário.", w: { Light: 3, Blood: 1, Void: -3 } },
        { txt: "Desconectado. Sozinho, não tenho um motivo para estar aqui.", w: { Blood: 3, Doom: 2, Breath: -3 } }
    ]},
    { t: "14. Você precisa magoar alguém para um objetivo. O que dói?", opts: [
        { txt: "O fato de que estou sendo falso comigo mesmo. Odeio ter que agir contra o que eu sinto que é certo só para cumprir uma meta.", w: { Heart: 3, Blood: 1, Hope: 2 } },
        { txt: "A frustração de não ter encontrado uma solução melhor. Magoar alguém foi o sacrifício necessário.", w: { Doom: 3, Light: 2, Heart: -3 }, destroys: "Heart" }, 
        { txt: "A quebra da confiança. Saber que essa atitude vai manchar ou destruir o vínculo que eu tinha com aquela pessoa, talvez para sempre.", w: { Blood: 3, Time: 2, Breath: -2 }, destroys: "Breath" },
        { txt: "A necessidade do sacrifício. É péssimo ter que passar por cima de alguém ou de algo vivo para que o projeto continue avançando.", w: { Life: 3, Breath: 2, Hope: 1, Doom: -3 }, destroys: "Doom" }, 
        { txt: "A confirmação de que o mundo é cruel. Magoar alguém é apenas a realidade batendo à porta, mostrando que nem tudo se resolve com boas intenções.", w: { Rage: 3, Doom: 1, Hope: -3 }, destroys: "Hope" } 
    ]},
    { t: "15. Qual o seu maior medo em relação ao futuro?", opts: [
        { txt: "Ficar preso a uma rotina ou a um lugar de onde eu não consiga sair. A ideia de perder a minha autonomia e ser confinado me apavora.", w: { Breath: 3, Void: 2, Time: -3 }, destroys: "Time" }, 
        { txt: "Perceber que meus ideais eram vazios e que o futuro é apenas um destino inevitável e sem sentido, onde nada do que eu acreditei pode florescer.", w: { Hope: 3, Life: 2, Time: -3 } },
        { txt: "Perceber que a minha existência não teve importância nenhuma ou que eu passarei pelo mundo sem que ninguém realmente me tenha visto.", w: { Light: 3, Heart: 2, Void: -3 } },
        { txt: "Ser exposto de uma forma que eu não consiga controlar. Tenho medo que vasculhem a minha vida e tirem de mim a paz do anonimato.", w: { Void: 3, Rage: 1, Light: -3 }, destroys: "Light" }, 
        { txt: "Não ter tempo suficiente. Sinto uma angústia constante de que o tempo está a acabar e eu não vou conseguir concluir o que é necessário antes que o prazo expire.", w: { Time: 3, Doom: 2, Space: -2 } }
    ]},
    { t: "16. Você recebe uma tarefa repetitiva. Como reage?", opts: [
        { txt: "Aceito-a. Há um certo conforto na repetição; saber exatamente o que esperar e cumprir o ciclo me dá uma sensação de segurança e ordem.", w: { Doom: 3, Time: 2, Life: -3 } },
        { txt: "Sinto-me sufocado. Odeio qualquer coisa que me obrigue a ficar parado ou que impeça o meu crescimento e a busca por algo mais vibrante.", w: { Life: 3, Breath: 2, Doom: -3 }, destroys: "Doom" }, 
        { txt: "Tento encontrar o padrão lógico por trás daquilo. Se eu entender como o processo funciona, posso otimizá-lo e executá-lo de forma automática.", w: { Mind: 3, Space: 1, Heart: -1 } }, 
        { txt: "Encaro como uma oportunidade para 'desligar'. Cumpro a função mecanicamente enquanto a minha mente viaja para um lugar onde ninguém me alcança.", w: { Void: 3, Breath: 2, Light: -2 } }, 
        { txt: "Questiono-me sobre a utilidade real daquilo. Irrita-me profundamente ter de participar numa encenação de produtividade que não serve para nada de verdade.", w: { Rage: 3, Light: 1, Hope: -2 } }
    ]},
    { t: "17. Em uma competição, o que é o sucesso?", opts: [
        { txt: "A vitória de um ideal. O sucesso é mostrar que o que eu acredito é possível e conseguir inspirar os outros com esse resultado.", w: { Hope: 3, Breath: 1, Life: 1, Rage: -3 }, destroys: "Rage" }, 
        { txt: "A clareza dos fatos. O sucesso é quando a competição revela quem realmente tem a competência, sem mentiras ou favorecimentos.", w: { Rage: 2, Light: 3, Hope: -3 } }, 
        { txt: "A união do grupo. O sucesso não é ganhar sozinho, mas garantir que a nossa aliança e lealdade saíram fortalecidas da experiência.", w: { Blood: 3, Heart: 1, Breath: -2 }, destroys: "Breath" }, 
        { txt: "A perfeição do resultado. O sucesso é quando o que foi entregue atinge um nível de excelência técnica e estética que não pode ser contestado.", w: { Space: 3, Mind: 1, Time: -2 } },
        { txt: "A satisfação de ter sido fiel a mim mesmo. Se eu não sacrifiquei a minha identidade para ganhar, então eu já venci, independentemente do placar.", w: { Heart: 3, Void: 1, Mind: -3 } }
    ]},
    { t: "18. Se você descobrisse que toda a sua trajetória até aqui foi, na verdade, planejada ou 'escrita' por outra pessoa, qual seria seu maior incômodo?", opts: [
        { txt: "O fato de que minhas escolhas não foram realmente minhas. É irritante pensar que minha vontade foi apenas uma peça em um tabuleiro lógico que eu não controlei.", w: { Mind: 3, Breath: 1, Heart: -3 } }, 
        { txt: "A dúvida sobre quem eu sou de verdade. Se minha história foi escrita, eu preciso saber se meus sentimentos são reais ou se minha 'alma' é apenas um conjunto de falas prontas.", w: { Heart: 3, Blood: 1, Mind: -3 } }, 
        { txt: "Sentiria um alívio profundo, na verdade. Saber que existe um propósito maior e que nada foi por acaso me dá a paz de que minha vida tem um sentido real.", w: { Hope: 3, Doom: 1, Rage: -3 }, destroys: "Rage" },
        { txt: "A sensação de estar preso. Saber que existe um trilho me faz sentir como se eu estivesse acorrentado a um papel, quando eu só queria ser livre para ir para onde eu quisesse.", w: { Breath: 3, Space: 1, Blood: -3 } }, 
        { txt: "O medo do desfecho. Se existe um roteiro, existe um fim planejado, e a ideia de que meus limites e o meu 'prazo de validade' já foram decididos é o que mais me assusta.", w: { Time: 3, Doom: 2, Life: -2 } }
    ]},
    { t: "19. Como você prefere ser lembrado?", opts: [
        { txt: "Como alguém que inspirou os outros. Quero que a minha passagem pelo mundo seja vista como um exemplo de que coisas melhores são possíveis.", w: { Hope: 3, Life: 2, Rage: -3 }, destroys: "Rage" },
        { txt: "Pelas coisas que criei. Quero deixar um legado físico e duradouro, algo que ocupe um espaço real mesmo quando eu não estiver aqui.", w: { Space: 3, Time: 2, Void: -1 }, destroys: "Time" },
        { txt: "Como alguém que foi o alicerce de quem precisava. Quero ser lembrado como a pessoa que manteve as coisas unidas quando tudo ia cair.", w: { Blood: 3, Doom: 2, Breath: -2 } },
        { txt: "Prefiro não ser lembrado de forma pública. O meu sucesso é ter vivido a minha vida com privacidade e silêncio, sem precisar de atenção externa.", w: { Void: 3, Mind: 1, Light: -3 }, destroys: "Light" }, 
        { txt: "Como alguém cuja vida teve um significado profundo. Quero que a minha história seja vista como algo importante e que trouxe clareza para o mundo.", w: { Light: 3, Heart: 2, Void: -3 } }
    ]},
    { t: "20. O que é liberdade para você?", opts: [
        { txt: "Não ter de dar satisfações. Liberdade é poder ir para onde eu quiser e recomeçar sem os rótulos e as expectativas que os outros me impõem.", w: { Breath: 3, Void: 2, Blood: -3 } },
        { txt: "Ter a segurança de um lugar ao qual pertenço. A verdadeira liberdade é saber que tenho vínculos sólidos que me apoiam se eu cair.", w: { Blood: 3, Doom: 1, Breath: -3 }, destroys: "Breath" },
        { txt: "Poder crescer sem limites. Liberdade é ter saúde, energia e recursos para ir atrás de tudo o que a vida tem para oferecer.", w: { Life: 3, Space: 2, Doom: -3 }, destroys: "Doom" }, 
        { txt: "Ser quem eu sou de verdade. Liberdade é não ter que usar máscaras ou fingir que sou outra pessoa para ser aceite pela sociedade.", w: { Heart: 3, Rage: 1, Mind: -3 } },
        { txt: "Ter o controle das minhas escolhas. Liberdade é entender os caminhos à minha frente e ser a única pessoa responsável pela direção que decido tomar", w: { Mind: 3, Time: 2, Heart: -3 } }
    ]}
]; 

// FASE 2: CLASSES
const questionsByAspect = {
"Time": [
    { t: "Você tem um projeto vital com um prazo impossível que está se esgotando hoje.", opts: [
        { txt: "Sacrifico meu sono, minha saúde e uso cada segundo para garantir que a entrega seja impecável.", w: { Knight: 3, Maid: 2, Page: 2, Prince: -2, Bard: -2 } },
        { txt: "Deixo o prazo passar e lido com as consequências conforme elas vierem, sem tentar lutar contra o inevitável.", w: { Bard: 3, Heir: 3, Knight: -2, Maid: -2 } },
        { txt: "Sinto que meu tempo 'sobra', então acabo doando minhas horas para aliviar o peso de quem está em crise.", w: { Rogue: 3, Sylph: 2, Thief: -2, Prince: -2 } },
        { txt: "Eu paro tudo para analisar onde errei no cronograma e tento prever o impacto do meu atraso.", w: { Seer: 3, Mage: 3, Witch: -1, Page: -1 } },
        { txt: "Eu ignoro a pressão do relógio e foco na criação; o prazo é uma barreira que destruo para o projeto crescer.", w: { Prince: 3, Thief: 2, Witch: 2, Heir: -2 } }
    ]},
    { t: "Uma oportunidade única passou e você falhou no prazo. Como você reage no dia seguinte?", opts: [
        { txt: "Eu invalido a importância do que passou; se o tempo para aquilo acabou, não deve ocupar mais espaço.", w: { Prince: 3, Bard: 2, Sylph: -2, Maid: -2 } },
        { txt: "Eu me recuso a aceitar o 'não'. Tento convencer os responsáveis a abrirem uma nova vaga só para mim.", w: { Witch: 3, Thief: 2, Maid: 1, Seer: -2 } },
        { txt: "Ajudo amigos com os prazos deles, tentando 'consertar' o tempo alheio já que quebrei o meu.", w: { Sylph: 3, Rogue: 2, Prince: -2, Bard: -2 } },
        { txt: "Crio uma regra rígida na minha rotina para que eu nunca mais perca uma chance por desleixo.", w: { Page: 3, Knight: 2, Mage: 1, Heir: -2 } }
    ]},
    { t: "Alguém próximo a você faleceu. Como você processa essa ausência nas semanas seguintes?", opts: [
        { txt: "Deleto as memórias e me desfaço dos pertences; o passado é um peso morto que destruo para o novo surgir.", w: { Prince: 3, Bard: 2, Sylph: -3, Knight: -1 } },
        { txt: "Eu me enterro em tarefas práticas. Organizo o inventário e resolvo as pendências burocráticas.", w: { Maid: 3, Knight: 2, Page: 1, Prince: -2 } },
        { txt: "Tento compensar o luto me dedicando a causas que eram da pessoa ou vivendo em função do legado dela.", w: { Sylph: 3, Rogue: 2, Bard: -2, Thief: -1 } },
        { txt: "Deixo a dor e a saudade me guiarem naturalmente, sem tentar controlar ou forçar o esquecimento.", w: { Heir: 3, Seer: 2, Witch: -2, Maid: -1 } }
    ]},
    { t: "Como você encara o conceito de 'Legado' e o que deixa para o futuro?", opts: [
        { txt: "É um fardo. Sinto que devo trabalhar incansavelmente para ser digno do que veio antes de mim.", w: { Page: 3, Knight: 2, Maid: 1, Bard: -2 } },
        { txt: "É uma ferramenta. O conhecimento do passado serve apenas para eu prever e manipular o que virá.", w: { Mage: 3, Seer: 2, Thief: 1, Rogue: -1 } },
        { txt: "Legado é o passado tentando colonizar o futuro. Prefiro destruir velhas tradições para dar espaço à inovação.", w: { Prince: 3, Bard: 2, Knight: -2, Page: -3 } },
        { txt: "É algo coletivo. Eu sou apenas um elo passando o que recebi para quem precisa mais.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
    ]},
    { t: "Você está em uma fila de mercado que não anda e tem um compromisso importante logo em seguida.", opts: [
        { txt: "Tento trocar de fila ou apressar as pessoas ao redor. Não admito que o atraso dos outros mude os meus planos.", w: { Thief: 3, Witch: 2, Prince: 1, Heir: -2 } },
        { txt: "Assumo a liderança da situação se puder. Ajudo a organizar as compras ou oriento quem está confuso para o tempo fluir.", w: { Maid: 3, Sylph: 2, Knight: 1, Prince: -2 } },
        { txt: "Mantenho a calma. Sei que o tempo tem seu próprio curso e que me estressar não vai fazer a fila andar mais rápido.", w: { Heir: 3, Bard: 2, Rogue: 1, Knight: -3 } },
        { txt: "Calculo o tempo exato que ainda posso esperar antes de desistir. Tomo a decisão baseada na probabilidade de chegar atrasado.", w: { Seer: 3, Mage: 2, Page: 1, Witch: -1 } }
    ]},
    { t: "Se você pudesse mudar algo em um evento trágico do seu passado, como abordaria isso?", opts: [
        { txt: "Eu não mudaria nada. O trauma é uma lição necessária e o destino não deve ser alterado por caprichos individuais.", w: { Seer: 2, Heir: 3, Bard: 2, Witch: -3 } },
        { txt: "Eu destruiria a causa do evento sem hesitar. O tempo não justifica o sofrimento; a liberdade de mudar é mais importante.", w: { Prince: 3, Witch: 3, Knight: 2, Mage: -2 } },
        { txt: "Eu me prepararia melhor. Se eu soubesse o que aconteceria, teria trabalhado o dobro para proteger o que perdi.", w: { Knight: 3, Maid: 2, Page: 2, Bard: -2 } },
        { txt: "Eu tentaria tirar algo de bom da tragédia para ajudar outros que passam pelo mesmo, transformando a dor em um recurso útil.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -2 } }
    ]},
    { t: "Você encontra uma ferramenta ou objeto antigo e quebrado que pertenceu à sua família. O que você faz?", opts: [
        { txt: "Eu o conserto imediatamente, mesmo que não tenha utilidade. Sinto a obrigação de restaurar a função do que o tempo tentou destruir.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -2 } },
        { txt: "Uso as peças dele para criar algo totalmente novo e moderno. O passado serve apenas como matéria-prima para o futuro.", w: { Witch: 3, Prince: 2, Mage: -2, Seer: -1 } },
        { txt: "Analiso o objeto para entender a história de quem o usou. A peça é um registro fóssil que me ensina sobre a inevitabilidade do fim.", w: { Seer: 3, Mage: 2, Bard: 1, Thief: -2 } },
        { txt: "Dou o objeto para alguém que saiba apreciá-lo mais do que eu. Não quero carregar o peso emocional de algo que está morto.", w: { Rogue: 3, Heir: 2, Maid: -2, Knight: -2 } }
    ]},
    { t: "Alguém te pede um favor que vai ocupar todas as horas do seu único dia de descanso na semana.", opts: [
        { txt: "Digo não prontamente. O meu tempo livre é o limite que estabeleço para não ser consumido pelas demandas externas.", w: { Prince: 3, Knight: 2, Thief: 2, Sylph: -3 } },
        { txt: "Cedo o tempo por pressão, mas passo o dia sentindo que estou sendo drenado e perdendo minha própria vida.", w: { Rogue: 3, Page: 2, Maid: 1, Witch: -2 } },
        { txt: "Ajudo da maneira mais rápida possível. Uso todo o meu conhecimento para terminar a tarefa na metade do tempo previsto.", w: { Witch: 3, Maid: 2, Mage: 2, Knight: -1 } },
        { txt: "Aceito o favor como parte do dia. Se o tempo deve ser gasto assim, eu me adapto e encontro satisfação no processo.", w: { Heir: 3, Sylph: 2, Seer: 1, Prince: -3 } }
    ]},
    { t: "Você está assistindo a um filme ou lendo um livro e percebe que o final será triste e inevitável. Como você reage?", opts: [
        { txt: "Paro de ler ou ver imediatamente. Recuso-me a gastar meu tempo com uma conclusão que já aceitei. Prefiro imaginar possibilidades infinitas.", w: { Prince: 3, Witch: 2, Seer: -2, Mage: -2 } },
        { txt: "Vou até o fim, mesmo sofrendo. Preciso ver como a estrutura da tragédia foi montada para entender como evitar algo assim na vida real.", w: { Mage: 3, Seer: 2, Knight: 1, Bard: -2 } },
        { txt: "Tento convencer outras pessoas a verem comigo. Dividir a carga emocional do final triste torna a experiência menos solitária e pesada.", w: { Rogue: 3, Sylph: 2, Page: 1, Thief: -2 } },
        { txt: "Fico obcecado com os detalhes técnicos da obra (direção, edição) para me distanciar da passagem da trama em direção à morte.", w: { Knight: 3, Maid: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Qual sua relação com a pontualidade alheia?", opts: [
        { txt: "Exijo precisão absoluta. O atraso dos outros é uma ofensa à ordem que tento manter.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -2 } },
        { txt: "Não me importo. O tempo é fluido e as pessoas chegam quando devem chegar.", w: { Bard: 3, Heir: 2, Rogue: 2, Knight: -3 } },
        { txt: "Aproveito o atraso deles para roubar esse tempo para minhas próprias atividades.", w: { Thief: 3, Witch: 2, Prince: 1, Sylph: -2 } },
        { txt: "Fico analisando os motivos do atraso, tentando prever se isso se tornará um padrão.", w: { Seer: 3, Mage: 2, Maid: 1, Page: -1 } }
    ]}
    ],
    "Space": [
    { t: "Você divide o quarto com alguém extremamente desorganizado que está 'vazando' objetos para o seu lado da mesa.", opts: [
        { txt: "Eu limpo a bagunça dele sem perguntar. A desordem dele ofende minha necessidade de um ambiente perfeito.", w: { Maid: 3, Knight: 2, Prince: -2, Bard: -2 } },
        { txt: "Eu jogo tudo no lixo imediatamente. O acúmulo de tralhas é um desperdício e prefiro o vazio à desordem.", w: { Prince: 3, Bard: 2, Sylph: -3, Maid: -2 } },
        { txt: "Pego os objetos mais úteis dele e os incorporo ao meu lado. Se ele não cuida, eu cuidarei melhor.", w: { Thief: 3, Witch: 2, Rogue: -2, Page: -1 } },
        { txt: "Tento reorganizar as coisas dele de forma que ele aprenda a manter o espaço sozinho.", w: { Sylph: 3, Seer: 2, Prince: -3, Thief: -1 } }
    ]},
    { t: "Você está em uma festa onde não conhece ninguém e o ambiente parece vasto e impessoal.", opts: [
        { txt: "Fico num canto tentando entender como as pessoas conseguem conversar com tanta naturalidade. Parece que todo mundo recebeu um manual de instruções que eu perdi.", w: { Page: 3, Mage: 3, Seer: 2, Prince: -2 } },
        { txt: "Esse lugar está sufocante e as conversas são fúteis. Dá vontade de derrubar essa fachada inteira e forçar algo real a acontecer.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -2 } },
        { txt: "Me sinto invisível, então tento colar em qualquer rodinha ou pescar o assunto de alguém pra ver se finalmente me sinto parte do que está rolando.", w: { Thief: 3, Rogue: 2, Prince: -2, Seer: -1 } },
        { txt: "Vou circulando por aí sem rumo. Se eu achar algo legal, paro; se não, só deixo a música e o movimento me levarem sem me preocupar muito.", w: { Heir: 3, Bard: 2, Knight: -2, Maid: -1 } }
    ]},
    { t: "Um amigo próximo mudou-se para outro país. Como você lida com a distância física?", opts: [
        { txt: "Mantenho contato obsessivo. Preciso saber de cada detalhe do espaço novo dele para me sentir presente.", w: { Witch: 3, Knight: 2, Maid: 1, Prince: -3 } },
        { txt: "A distância matou a relação. Se não ocupamos o mesmo espaço, corto os laços para não carregar pesos mortos.", w: { Prince: 3, Bard: 2, Witch: -3, Sylph: -2 } },
        { txt: "Sinto uma inveja silenciosa. Posto fotos de lugares interessantes onde estou para provar que meu espaço é relevante.", w: { Thief: 3, Page: 2, Rogue: -2, Heir: -1 } },
        { txt: "Entendo que o espaço entre nós mudou. Aceito a saudade e deixo a amizade encontrar seu novo volume.", w: { Seer: 2, Heir: 3, Thief: -2, Knight: -1 } }
    ]},
    { t: "Você decidiu começar um hobby novo, mas não tem as ferramentas certas ou um local adequado.", opts: [
        { txt: "Eu me viro com o que tenho. Improviso ferramentas; o que importa é criar do nada.", w: { Knight: 3, Maid: 3, Page: 1, Bard: -2 } },
        { txt: "Passo semanas pesquisando o layout perfeito. Se o cenário não for ideal, a criação não flui.", w: { Mage: 3, Seer: 3, Heir: -1, Knight: -1 } },
        { txt: "Peço coisas emprestadas e 'esqueço' de devolver. Sinto que preciso desses recursos mais do que eles.", w: { Thief: 3, Rogue: 2, Sylph: -2, Maid: -1 } },
        { txt: "Desisto antes de começar. Se o ambiente não colabora, é sinal de que não era para ser.", w: { Bard: 3, Heir: 2, Knight: -3, Maid: -2 } }
    ]},
    { t: "Alguém entra no seu quarto sem bater enquanto você está focado em algo importante.", opts: [
        { txt: "Expulso a pessoa imediatamente. Meu espaço de criação é sagrado e não tolero intrusões.", w: { Prince: 3, Knight: 2, Sylph: -3, Rogue: -2 } },
        { txt: "Escondo o que estou fazendo. Tenho pavor de que vejam meu processo criativo incompleto.", w: { Page: 3, Thief: 2, Maid: 1, Prince: -1 } },
        { txt: "Integro a pessoa ao que estou fazendo, aproveitando a interrupção para mudar o foco.", w: { Witch: 3, Sylph: 2, Heir: 2, Prince: -3 } },
        { txt: "Fico irritado em silêncio, analisando a geometria da intrusão e como ela quebrou meu fluxo.", w: { Mage: 3, Seer: 2, Knight: -1, Witch: -1 } }
    ]},
    { t: "Você está em um elevador lotado e desconfortável. Como você se comporta?", opts: [
        { txt: "Tento ocupar o mínimo de espaço possível, quase me fundindo à parede.", w: { Rogue: 3, Page: 2, Sylph: 1, Prince: -2 } },
        { txt: "Analiso a mecânica do elevador ou a geometria das pessoas para ignorar o desconforto.", w: { Seer: 3, Mage: 2, Heir: 1, Bard: -1 } },
        { txt: "Fico furioso com a lentidão e com a massa física das pessoas me impedindo de chegar ao destino.", w: { Prince: 3, Thief: 2, Bard: 1, Rogue: -2 } },
        { txt: "Puxo uma conversa trivial para aliviar a tensão e expandir o conforto do ambiente.", w: { Sylph: 3, Heir: 2, Prince: -3, Mage: -1 } }
    ]},
    { t: "Ao se mudar, você encontra objetos de um ex-parceiro ou de uma amizade que acabou mal.", opts: [
        { txt: "Destruo tudo. Objetos são âncoras para o que não existe mais; limpo o espaço físico para o novo.", w: { Prince: 3, Witch: 2, Thief: -3, Knight: -2 } },
        { txt: "Guardo tudo em uma caixa no fundo. Tenho medo de perder partes da minha história espacial.", w: { Thief: 3, Knight: 2, Page: 1, Prince: -3 } },
        { txt: "Dou os objetos para quem precisa. Transformo a matéria inútil em utilidade para outro.", w: { Rogue: 3, Maid: 2, Sylph: 1, Thief: -3 } },
        { txt: "Olho para os objetos e reflito sobre o vazio que deixaram e como ele foi preenchido.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -2 } }
    ]},
    { t: "Você está esperando um resultado que depende de processos burocráticos lentos.", opts: [
        { txt: "Ocupo meu espaço criando novos projetos. A inércia física me desespera.", w: { Maid: 3, Knight: 2, Page: 1, Bard: -2 } },
        { txt: "Tento usar contatos para acelerar. Não aceito que as limitações de espaço/tempo se apliquem a mim.", w: { Witch: 3, Thief: 3, Seer: -2, Mage: -1 } },
        { txt: "Aceito a lentidão. Entendo que a matéria tem seu próprio tempo de maturação.", w: { Heir: 3, Bard: 2, Seer: 1, Prince: -3 } },
        { txt: "Fico obcecado em entender cada etapa do processo, mapeando a burocracia.", w: { Mage: 3, Seer: 3, Prince: -1, Knight: -1 } }
    ]},
    { t: "Você encara um 'bloqueio criativo': a tela branca ou o espaço vazio que precisa preencher. Qual sua reação?", opts: [
        { txt: "O vazio é um insulto à minha produtividade. Destruo a tela ou mudo de foco imediatamente para algo onde eu possa ver progresso real agora.", w: { Prince: 2, Witch: 1 } },
        { txt: "O vazio confirma meu medo de que não tenho nada de original para oferecer. Tento ocupar o espaço com tendências para não parecer oco.", w: { Thief: 2, Rogue: 1 } },
        { txt: "Observo o vazio e tento entender as leis que o regem. Procuro inspiração na geometria ou na estrutura antes de agir.", w: { Mage: 2, Seer: 2, Heir: 1 } },
        { txt: "Começo a preencher o espaço com pequenos ajustes, cuidando do ambiente até que a ideia certa se sinta segura para emergir.", w: { Sylph: 2, Maid: 1, Knight: 1 } }
    ]},
    { t: "Você está sozinho em um quarto em silêncio absoluto. Como essa ausência de estímulo te afeta?", opts: [
        { txt: "A inércia me desespera. Começo a organizar coisas freneticamente; preciso sentir que o tempo está passando e algo está sendo feito.", w: { Prince: 1, Knight: 2, Maid: 1 } },
        { txt: "Sinto um vazio existencial insuportável. Preciso consumir conteúdo alheio para sentir que meu espaço mental está 'cheio'.", w: { Thief: 2, Rogue: 2, Bard: 1 } },
        { txt: "Sinto-me finalmente livre. Sem a pressão da matéria ou de outras pessoas, minha mente pode se expandir sem limites.", w: { Heir: 2, Seer: 1, Mage: 1 } },
        { txt: "Uso o isolamento como ferramenta de treino e autopoliciamento, trabalhando em minhas falhas sem distrações externas.", w: { Page: 2, Knight: 1 } }
    ]}
    ],
    "Rage": [
    { t: "Você descobre que uma regra importante da instituição beneficia apenas os veteranos.", opts: [
        { txt: "Escolho acreditar que deve haver um motivo e que as coisas vão se equilibrar sozinhas.", w: { Bard: 3, Heir: 3, Prince: -3, Knight: -2 } },
        { txt: "Exponho a falha publicamente, destruindo a credibilidade da regra sem piedade.", w: { Prince: 3, Mage: 3, Witch: 2, Bard: -3 } },
        { txt: "Procuro entender quem se beneficia e como posso usar essa brecha para meu ganho.", w: { Thief: 3, Maid: 2, Seer: 2, Page: -1 } },
        { txt: "Tento alertar os prejudicados, servindo de suporte contra a injustiça.", w: { Rogue: 3, Sylph: 3, Page: 2, Knight: 1 } }
    ]},
    { t: "Um projeto que você valoriza é cancelado por um erro bobo de outra pessoa.", opts: [
        { txt: "Decido que o projeto não era importante. Destruo minha ligação com ele e foco em algo novo.", w: { Bard: 3, Prince: 3, Maid: -2, Page: -2 } },
        { txt: "Contorno a proibição e continuo fazendo o que quero, subvertendo a autoridade.", w: { Thief: 3, Witch: 3, Heir: 2, Seer: -2 } },
        { txt: "Assumo a culpa e trabalho o dobro para salvar o que sobrou.", w: { Page: 3, Knight: 3, Maid: 2, Prince: -3 } },
        { txt: "Observo a frustração e espero para ver se a verdade aparece sozinha.", w: { Seer: 3, Heir: 2, Mage: 2, Witch: -2 } }
    ]},
        { t: "Você está em um evento social onde todos fingem estar felizes e bem-sucedidos, mas você percebe claramente as tensões e mentiras por trás das conversas. Como você se porta?", opts: [
        { txt: "Entro no personagem e me esforço para ser a pessoa mais positiva e agradável do lugar; se todos estão tentando, eu farei minha parte para a ilusão funcionar.", w: { Prince: 3, Bard: 2, Knight: -3, Mage: -2 } },
        { txt: "Sinto um incômodo físico com a falsidade e acabo ficando em um canto, observando e catalogando cada hipocrisia que vejo.", w: { Seer: 3, Mage: 2, Heir: 1, Prince: -2 } },
        { txt: "Tento puxar conversas mais reais com algumas pessoas, cutucando as feridas de forma sutil para ver quem tem coragem de ser autêntico.", w: { Witch: 2, Thief: 3, Sylph: -2, Maid: -2 } },
        { txt: "Visto uma 'máscara' de competência e tento ser o pilar de estabilidade para quem parece estar prestes a desmoronar sob a pressão da fachada.", w: { Knight: 3, Page: 2, Maid: 1, Bard: -2 } }
    ]},
    { t: "Você descobre que uma meta que perseguiu por anos é impossível de alcançar devido a uma limitação sua ou do sistema que você não pode mudar. Qual sua reação?", opts: [
        { txt: "Decido imediatamente que aquela meta era boba e que eu nunca a quis de verdade. Já estou convencido de que algo muito melhor me aguarda.", w: { Prince: 3, Bard: 3, Mage: -3, Page: -2 } },
        { txt: "Aceito o limite como um fato e estudo os contornos dessa 'parede' para entender exatamente o que é real e o que é apenas medo meu.", w: { Mage: 3, Seer: 2, Heir: 1, Witch: -2 } },
        { txt: "Me recuso a aceitar a derrota. Vou trabalhar de forma punitiva e obsessiva até que eu quebre a regra ou a regra me quebre.", w: { Page: 3, Knight: 2, Maid: 3, Prince: -3 } },
        { txt: "Tento encontrar outras pessoas que falharam no mesmo ponto para que possamos compartilhar a frustração e, talvez, criar algo novo juntos.", w: { Rogue: 3, Sylph: 2, Thief: -2, Witch: -1 } }
    ]},
    { t: "Em um grupo, alguém insiste em uma ideia que você sabe que é falsa.", opts: [
        { txt: "Se a pessoa está feliz acreditando nisso, não vejo por que destruir a ilusão.", w: { Bard: 3, Heir: 3, Prince: -3, Knight: -2 } },
        { txt: "Falo a verdade nua e crua, destruindo o argumento falso na frente de todos.", w: { Prince: 3, Mage: 3, Seer: 2, Thief: 2 } },
        { txt: "Protejo os outros da ideia ruim, servindo como uma âncora de realidade.", w: { Knight: 3, Maid: 2, Sylph: 2, Page: 1 } },
        { txt: "Explico a situação para quem está confuso, tentando curar a desinformação.", w: { Rogue: 3, Sylph: 3, Page: 2, Heir: 1 } }
    ]},
    { t: "Você percebe que está sendo passado para trás em uma conversa importante.", opts: [
        { txt: "Interrompo e mostro que sei o que estão fazendo, forçando a verdade a aparecer.", w: { Witch: 3, Prince: 3, Thief: 2, Heir: -3 } },
        { txt: "Mantenho a harmonia e finjo que não percebi, deixando que a mentira se destrua sozinha.", w: { Bard: 3, Heir: 2, Knight: -2, Prince: -3 } },
        { txt: "Fico indignado e crio uma barreira rígida para que nunca mais me enganem.", w: { Knight: 3, Page: 3, Maid: 2, Mage: 1 } },
        { txt: "Estudo o comportamento da pessoa para entender a lógica por trás da desonestidade.", w: { Mage: 3, Seer: 3, Rogue: 2, Sylph: 1 } }
    ]},
    { t: "Como você se sente quando percebe que o mundo é injusto?", opts: [
        { txt: "Isso prova que seriedade é bobagem. Rio do absurdo e deixo as coisas fluírem.", w: { Bard: 3, Heir: 3, Maid: -3, Knight: -2 } },
        { txt: "Ignoro as notícias ruins. Destruo qualquer coisa que ameace minha paz mental.", w: { Prince: 3, Bard: 2, Seer: -3, Mage: -2 } },
        { txt: "Foco em ser impecável nas minhas obrigações. Minha disciplina é minha resposta ao caos.", w: { Maid: 3, Knight: 3, Page: 2, Bard: -3 } },
        { txt: "Procuro grupos que compartilham da minha indignação para nos apoiarmos.", w: { Rogue: 3, Sylph: 3, Witch: 2, Heir: 2 } }
    ]},
    { t: "Você descobre que a pessoa que você mais admirava é, na verdade, uma farsa completa e tudo o que ela pregava era mentira.", opts: [
        { txt: "Recuso-me a acreditar. Mantenho minha fé na imagem dele apesar da realidade.", w: { Bard: 3, Heir: 3, Prince: -3, Seer: -3 } },
        { txt: "Deixo de respeitar na hora. Apago qualquer rastro de admiração; ele morreu para mim.", w: { Prince: 3, Seer: 2, Knight: 2, Thief: 2 } },
        { txt: "Uso o erro como exemplo para educar os outros e evitar que caiam na mesma cilada.", w: { Witch: 3, Sylph: 3, Rogue: 2, Maid: 2 } },
        { txt: "Fico remoendo a decepção e passo a ser muito mais cético com tudo.", w: { Mage: 3, Page: 3, Heir: 1, Bard: -2 } }
    ]},
        { t: "Em um ambiente onde todos discutem de forma irracional, qual sua atitude?", opts: [
        { txt: "Faço uma piada para desviar a atenção e restaurar o clima leve.", w: { Bard: 3, Sylph: 2, Heir: 2, Prince: -2 } },
        { txt: "Solto uma frase seca que resume o ridículo, calando a todos com a verdade bruta.", w: { Prince: 3, Seer: 3, Mage: 2, Witch: 2 } },
        { txt: "Aproveito que ninguém presta atenção para 'roubar' meu tempo e resolver minhas coisas.", w: { Thief: 3, Witch: 2, Page: 2, Rogue: 1 } },
        { txt: "Mantenho o controle e espero o caos passar, julgando a falta de compostura alheia.", w: { Knight: 3, Maid: 3, Page: 2, Heir: 2 } }
    ]},
    { t: "Você precisa escolher entre ser honesto e perder uma chance, ou mentir e conseguir o que quer.", opts: [
        { txt: "Falo a verdade doa a quem doer. A verdade é o único caminho real.", w: { Mage: 3, Seer: 3, Heir: 3, Thief: -3 } },
        { txt: "Minto se isso mantiver a minha paz ou minha esperança; a verdade bruta é destrutiva.", w: { Bard: 3, Prince: 2, Knight: -3, Maid: -2 } },
        { txt: "Sou honesto de forma agressiva, punindo quem me forçou a escolher.", w: { Knight: 3, Page: 3, Maid: 2, Thief: 2 } },
        { txt: "Minto se isso for ajudar mais pessoas, escondendo a verdade por um bem maior.", w: { Sylph: 3, Rogue: 3, Witch: 3, Prince: -2 } }
    ]}
    ],
    "Light": [
    { t: "Você faz parte de uma equipe que realizou um feito notável, mas apenas uma pessoa será o rosto público desse sucesso. Como você se posiciona?", opts: [
        { txt: "Certifico-me de que minha contribuição seja a mais visível; se o resultado é excelente, é justo que eu detenha o controle da narrativa principal.", w: { Thief: 3, Witch: 2, Maid: 2, Prince: -3, Rogue: -2 } },
        { txt: "Prefiro apagar minha participação e ficar fora dos holofotes; a atenção pública é um ruído invasivo que prefiro evitar a todo custo.", w: { Prince: 3, Bard: 2, Thief: -3, Page: -2 } },
        { txt: "Faço questão de destacar o esforço de quem menos apareceu, garantindo que o reconhecimento seja dividido e eu não carregue o peso da atenção sozinho.", w: { Rogue: 3, Sylph: 2, Thief: -3, Maid: -1 } },
        { txt: "Não forço nada. Se as pessoas notarem meu valor, ótimo; se não, deixo que a sorte e os fatos sigam seu curso natural.", w: { Heir: 3, Seer: 2, Knight: -2, Witch: -1 } }
    ]},
    { t: "Você descobre uma verdade comprometedora sobre alguém influente que pode alterar o rumo de uma situação. O que faz com isso?", opts: [
        { txt: "Analiso cada detalhe dessa informação e como ela se conecta ao todo, sentindo o peso de carregar uma verdade que os outros ignoram.", w: { Mage: 3, Seer: 2, Bard: -2, Prince: -1 } },
        { txt: "Guardo esse conhecimento como uma armadura ou ferramenta estratégica, pronto para usá-lo para proteger minha posição se necessário.", w: { Knight: 3, Thief: 2, Sylph: -2, Rogue: -2 } },
        { txt: "Finjo que nunca vi nada e destruo as evidências. Algumas verdades são inúteis e só servem para complicar o que já funciona no escuro.", w: { Prince: 3, Bard: 2, Seer: -3, Mage: -2 } },
        { txt: "Compartilho a informação com as pessoas afetadas para restaurar a clareza e garantir que ninguém seja enganado por aparências falsas.", w: { Sylph: 3, Rogue: 2, Thief: -3, Prince: -1 } }
    ]},
    { t: "Em uma crise onde o sucesso depende puramente de um fator que você não controla (como sorte ou uma decisão externa), qual sua postura?", opts: [
        { txt: "Confio que a sorte estará ao meu lado. Sinto que as probabilidades costumam conspirar a meu favor sem que eu precise me esforçar.", w: { Heir: 3, Bard: 2, Knight: -3, Mage: -2 } },
        { txt: "Tento encontrar brechas ou influenciar quem decide para garantir que as chances pendam para o meu lado, forçando o resultado desejado.", w: { Witch: 3, Thief: 2, Heir: -2, Seer: -2 } },
        { txt: "Ignoro a ideia de sorte e trabalho exaustivamente nos bastidores para compensar qualquer imprevisto, tentando garantir o êxito pelo esforço.", w: { Knight: 3, Maid: 2, Page: 2, Heir: -3, Bard: -2 } },
        { txt: "Me preocupo em calcular cada variável e sinal possível, tentando prever o desfecho para que a incerteza não me pegue desprevenido.", w: { Seer: 3, Mage: 3, Heir: -2, Bard: -1 } }
    ]},
    { t: "Um erro pessoal seu é exposto publicamente e você se torna o centro das atenções e julgamentos. Como reage?", opts: [
        { txt: "Decido que a opinião alheia é irrelevante. Trato a exposição como algo sem valor e sigo em frente como se nada tivesse acontecido.", w: { Prince: 3, Bard: 2, Knight: -3, Page: -2 } },
        { txt: "Assumo a falha e começo a trabalhar de forma punitiva para corrigir os fatos e garantir que a narrativa sobre mim seja restaurada.", w: { Maid: 3, Sylph: 2, Prince: -2, Bard: -1 } },
        { txt: "Uso a vergonha da exposição como um combustível obsessivo para estudar onde errei e garantir que eu nunca mais seja pego em tal ignorância.", w: { Page: 3, Knight: 2, Heir: -2, Bard: -1 } },
        { txt: "Tento desviar o foco do meu erro para outro assunto que seja mais relevante no momento, diluindo a atenção negativa.", w: { Thief: 3, Rogue: 2, Mage: -2, Seer: -1 } }
    ]},
    { t: "Você percebe que um projeto ao qual se dedicou muito está perdendo a relevância e o interesse das outras pessoas. O que faz?", opts: [
        { txt: "Exagero a importância do projeto ou crio um fato novo para que ele volte a ser o centro das atenções à força.", w: { Thief: 3, Witch: 2, Prince: -3, Rogue: -2 } },
        { txt: "Deixo que ele morra e desapareça. Prefiro que caia no esquecimento do que vê-lo definhar sem propósito sob a luz alheia.", w: { Prince: 3, Bard: 2, Maid: -3, Sylph: -2 } },
        { txt: "Reformulo o projeto com novas informações e clareza, tentando curar a falta de interesse ao torná-lo útil novamente para o grupo.", w: { Sylph: 3, Maid: 3, Prince: -2, Bard: -1 } },
        { txt: "Aceito que a relevância é cíclica. Observo o que as pessoas estão valorizando agora e deixo que meu interesse mude conforme o fluxo.", w: { Heir: 3, Seer: 3, Thief: -2, Witch: -1 } }
    ]},
    { t: "Como você lida com a necessidade de ser 'visto' ou validado pelos outros no seu cotidiano?", opts: [
        { txt: "Sinto que preciso provar meu valor constantemente; se eu não estiver sendo útil ou notado, sinto que perco minha relevância no mundo.", w: { Knight: 3, Page: 3, Maid: 2, Prince: -3, Rogue: -2 } },
        { txt: "Sinto-me agredido pela atenção constante. Prefiro o anonimato e sinto que quanto menos as pessoas souberem de mim, mais seguro estou.", w: { Prince: 3, Bard: 2, Thief: -3, Page: -2 } },
        { txt: "Prefiro que meu mérito seja redirecionado para o que eu produzo ou para o grupo; detesto ser o foco central sozinho.", w: { Rogue: 3, Sylph: 2, Thief: -2, Knight: -1 } },
        { txt: "Uso minha imagem e visibilidade apenas como uma ferramenta pontual para conseguir o que quero, sem me prender à opinião dos outros.", w: { Witch: 3, Thief: 3, Page: -2, Knight: -2 } }
    ]},
    { t: "Ao se deparar com várias versões conflitantes de uma mesma história, como você decide em qual acreditar?", opts: [
        { txt: "Busco a versão factual e lógica, por mais nua e crua que seja. A verdade não deve ser moldada pela conveniência.", w: { Seer: 3, Mage: 3, Witch: -3, Thief: -2 } },
        { txt: "Escolho a versão que melhor serve aos meus objetivos ou que cria a narrativa mais útil para o momento.", w: { Witch: 3, Thief: 2, Seer: -3, Mage: -2 } },
        { txt: "Acredito que não existe uma verdade absoluta; deixo que cada versão flua e o tempo revele qual delas terá mais peso.", w: { Heir: 3, Bard: 3, Knight: -3, Maid: -2 } },
        { txt: "Adoto a versão que exige mais responsabilidade e ação da minha parte, usando-a como um mapa para o que devo fazer a seguir.", w: { Knight: 3, Page: 2, Bard: -2, Heir: -1 } }
    ]},
     { t: "Ao observar um evento trágico ou aleatório no mundo, qual é o seu primeiro impulso mental?", opts: [
        { txt: "Procuro imediatamente uma lição ou um propósito por trás disso. Recuso-me a aceitar que as coisas aconteçam sem uma razão superior.", w: { Sylph: 3, Maid: 2, Seer: 2, Prince: -3, Bard: -2 } },
        { txt: "Fico obcecado em entender a cadeia de eventos que levou à tragédia, tentando catalogar cada erro para que a ignorância não se repita.", w: { Mage: 3, Page: 2, Knight: 2, Heir: -2 } },
        { txt: "Aceito que o mundo é um lugar de ruído e que tentar encontrar 'sentido' em tudo é uma perda de tempo exaustiva.", w: { Prince: 3, Bard: 3, Maid: -3, Sylph: -2 } },
        { txt: "Tento usar o impacto do evento para chamar atenção para causas que eu considero importantes, moldando a narrativa do ocorrido.", w: { Thief: 3, Witch: 2, Rogue: -2, Seer: -1 } }
    ]},
    { t: "Você está em uma discussão acalorada onde sabe, com 100% de certeza, que a outra pessoa está errada sobre um fato técnico ou histórico. Como você age?", opts: [
        { txt: "Interrompo a pessoa e apresento as provas e fontes imediatamente. Não suporto ver a desinformação prosperar quando a verdade está disponível.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -3, Bard: -2 } },
        { txt: "Deixo que ela continue falando o que quiser. A ignorância alheia é irrelevante para mim e não sinto necessidade de iluminar quem não quer ver.", w: { Prince: 3, Bard: 3, Mage: -2, Seer: -2 } },
        { txt: "Uso o erro dela como uma vantagem estratégica, deixando que ela se exponha até que eu possa usar a verdade para desarmá-la no momento certo.", w: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
        { txt: "Tento corrigir a pessoa de forma sutil, compartilhando o conhecimento como se fosse algo que 'nós' estamos descobrindo juntos para não criar mal-estar.", w: { Rogue: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "Em uma situação tensa, você percebe que a transparência total está causando conflitos. Qual sua atitude?", opts: [
        { txt: "Defendo que a clareza é a única cura. Tudo deve ser exposto para que possamos resolver o problema pela raiz.", w: { Sylph: 3, Seer: 2, Prince: -3, Bard: -2 } },
        { txt: "Acredito que o segredo é uma forma de proteção; algumas coisas devem permanecer no escuro para que o grupo funcione.", w: { Prince: 3, Bard: 3, Sylph: -3, Seer: -2 } },
        { txt: "Organizo as informações de forma pragmática, revelando apenas o necessário para manter a ordem e a utilidade da situação.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
        { txt: "Compartilho a verdade de forma diluída, tentando fazer com que o peso da informação seja dividido entre todos.", w: { Rogue: 3, Heir: 2, Thief: -2, Witch: -1 } }
        ]}
    ],
    "Void": [
    { t: "Você descobre um segredo íntimo de um conhecido que mudaria a percepção de todos sobre ele, mas ninguém mais sabe disso.", opts: [
        { txt: "Eu revelo a verdade imediatamente. Segredos são buracos na realidade que só servem para esconder quem as pessoas realmente são.", w: { Prince: 3, Seer: 2 } },
        { txt: "Guardo essa informação como um trunfo pessoal, sentindo que o conhecimento oculto me dá uma vantagem silenciosa sobre a situação.", w: { Thief: 3, Witch: 2 } },
        { txt: "Protejo essa informação com o máximo de discrição. Se o segredo existe, é porque deve permanecer no escuro.", w: { Maid: 3, Knight: 2, Page: 2 } },
        { txt: "Observo como esse 'não-dito' influencia as interações, deixando que o mistério siga seu curso natural sem interferir.", w: { Mage: 3, Bard: 2, Heir: 1 } }
    ]},
    { t: "Em um ambiente social, você percebe que suas contribuições são ignoradas e você se sente um 'zero à esquerda'.", opts: [
        { txt: "Aceito o anonimato. Há uma liberdade imensa em não ser notado, permitindo que eu aja sem o peso da expectativa alheia.", w: { Heir: 3, Bard: 3, Rogue: 1 } },
        { txt: "Isso me fere, então passo a agir com uma competência performática e silenciosa, tentando provar meu valor sem precisar pedir atenção.", w: { Page: 3, Knight: 2 } },
        { txt: "Eu forço minha presença. Se o ambiente tenta me apagar, eu interrompo e exijo que minha relevância seja estabelecida.", w: { Thief: 3, Prince: 2, Witch: 1 } },
        { txt: "Procuro outros que também estão sendo excluídos e tento criar um espaço onde nossa 'invisibilidade' se torne nossa força.", w: { Rogue: 3, Sylph: 3 } }
    ]},
    { t: "Você recebe uma tarefa importante, mas não lhe dão instruções ou qualquer pista de como começar.", opts: [
        { txt: "Começo do zero absoluto. Se não há nada construído, eu crio minhas próprias regras e preencho esse vazio.", w: { Maid: 3, Witch: 3 } },
        { txt: "Analiso o que 'não foi dito'. O silêncio nas instruções me revela mais sobre as intenções reais do que as palavras diriam.", w: { Seer: 3, Mage: 3, Knight: 1 } },
        { txt: "Recuso-me a trabalhar no escuro. Exijo clareza total ou exponho a falha de quem não forneceu as bases necessárias.", w: { Prince: 3, Thief: 2 } },
        { txt: "Divido a incerteza com o grupo, buscando uma solução que não dependa de ordens claras para avançar.", w: { Rogue: 2, Heir: 2, Sylph: 3 } }
    ]},
    { t: "Um boato vago e confuso sobre você começa a circular, mas ninguém consegue confirmar se é verdade ou mentira.", opts: [
        { txt: "Uso o mistério a meu favor. Mantenho uma postura enigmática que confunde ainda mais as pessoas.", w: { Knight: 3, Page: 2, Heir: 1 } },
        { txt: "Manipulo a narrativa silenciosamente, inserindo novas dúvidas até que o boato original perca todo o sentido.", w: { Witch: 3, Thief: 3 } },
        { txt: "Ignoro e foco em ajudar as pessoas afetadas pela confusão, agindo como um porto seguro de silêncio.", w: { Sylph: 3, Maid: 2, Rogue: 2 } },
        { txt: "Exponho a origem do boato e os fatos crus. Detesto que buracos na verdade sejam usados para me definir.", w: { Prince: 3, Mage: 2 } }
    ]},
    { t: "Você conhece alguém fascinante, mas a pessoa é um mistério completo: nunca fala de si ou de suas intenções.", opts: [
        { txt: "A incerteza me atrai. Sinto que posso aprender muito sobre o mundo apenas observando o que essa pessoa esconde.", w: { Mage: 3, Seer: 3 } },
        { txt: "Tento 'quebrar' esse mistério. Faço perguntas diretas ou provoco reações para ver o que está por trás da máscara.", w: { Thief: 3, Witch: 2, Prince: 1 } },
        { txt: "Respeito o vazio. Não sinto necessidade de cavar a vida de ninguém; aceito o que a pessoa apresenta no agora.", w: { Heir: 3, Bard: 3, Rogue: 3 } },
        { txt: "Sinto desconfiança. Se não há transparência, não há base para uma relação; tento forçar uma clareza ou me afasto.", w: { Prince: 2, Knight: 2, Page: 1 } }
    ]},
    { t: "Algo essencial para o grupo desapareceu e ninguém sabe onde está ou como recuperar.", opts: [
        { txt: "Trabalho dobrado para suprir a falta do que foi perdido, garantindo que o grupo não desmorone.", w: { Maid: 3, Sylph: 3, Knight: 1 } },
        { txt: "Encorajo o grupo a desapegar. Talvez a perda seja uma oportunidade para abandonarmos o que era obsoleto.", w: { Rogue: 3, Heir: 2, Bard: 2 } },
        { txt: "Rastreio o 'nada'. Entendo que a ausência do objeto deixa pistas e uso essa falta de informação para encontrá-lo.", w: { Seer: 3, Mage: 3 } },
        { txt: "Tento criar algo novo do nada para substituir a perda, agindo para que o vácuo não nos consuma.", w: { Page: 3, Witch: 2, Maid: 1 } }
    ]},
    { t: "Você realiza um trabalho hercúleo nos bastidores, mas outra pessoa recebe todo o crédito público.", opts: [
        { txt: "Não me importo. O fato de o trabalho ter sido feito no anonimato me agrada; a relevância é um fardo.", w: { Rogue: 3, Bard: 3, Heir: 2 } },
        { txt: "Isso é inaceitável. Exponho minha participação e exijo reconhecimento; não serei um figurante.", w: { Prince: 3, Thief: 2, Witch: 1 } },
        { txt: "Mantenho o silêncio. Minha segurança vem da competência interna, e o anonimato me protege de interferências.", w: { Knight: 3, Maid: 3, Page: 1 } },
        { txt: "Uso meu anonimato para continuar ajudando de forma desinteressada, onde ninguém pode me vigiar.", w: { Sylph: 3, Seer: 2, Mage: 1 } }
    ]},
    { t: "Você está diante de uma decisão onde todos os caminhos levam ao desconhecido, sem garantias de segurança.", opts: [
        { txt: "Confio no fluxo do incerto. Sinto que o caminho correto se revelará enquanto eu caminho pela escuridão.", w: { Seer: 3, Heir: 3, Bard: 1 } },
        { txt: "Tento eliminar todas as variáveis desconhecidas antes de agir. Detesto operar sem o controle da informação.", w: { Prince: 2, Knight: 2, Mage: 1 } },
        { txt: "Escolho o caminho mais vazio. Vou moldar a realidade conforme ela surgir, criando algo onde hoje não existe nada.", w: { Witch: 3, Page: 4, Maid: 2 } },
        { txt: "Aceito a incerteza. O melhor plano é não ter plano e deixar que o vácuo nos leve a lugares novos.", w: { Bard: 3, Mage: 3, Rogue: 1 } }
    ]},
    { t: "Você encontra um objeto quebrado que todos consideram lixo, sem utilidade ou relevância.", opts: [
        { txt: "Eu o descarto. Se algo não tem utilidade clara, sua existência é apenas um ruído que deve ser eliminado.", w: { Prince: 3, Thief: 2 } },
        { txt: "Eu o guardo. Sinto uma conexão com o que foi esquecido e encontro conforto em possuir o que ninguém valoriza.", w: { Knight: 3, Page: 3, Rogue: 2 } },
        { txt: "Tento consertá-lo ou dar uma função nova. Recuso-me a aceitar que algo possa ser simplesmente inútil.", w: { Maid: 3, Witch: 3, Sylph: 2 } },
        { txt: "Deixo-o onde está. O ciclo de obsolescência é natural; não há necessidade de intervir no que volta ao nada.", w: { Bard: 3, Heir: 3, Seer: 1 } }
    ]},
    { t: "Você sente que não possui uma personalidade fixa, agindo apenas como um reflexo do que esperam de você.",  opts: [
        { txt: "Isso me desespera. Me esforço para construir uma identidade marcante para que ninguém duvide da minha importância.", w: { Prince: 3, Knight: 2, Page: 2 } },
        { txt: "Sinto-me em paz. Se sou 'nada' por dentro, posso ser 'qualquer coisa' por fora, sem ser aprisionado por rótulos.", w: { Heir: 3, Bard: 3, Rogue: 2 } },
        { txt: "Uso essa fluidez como ferramenta. Mudo quem eu sou conforme a necessidade para obter o que desejo.", w: { Witch: 3, Thief: 3, Mage: 2 } },
        { txt: "Observo esse vazio. Entender que o 'eu' é uma ilusão me permite ver as verdades atrás das máscaras alheias.", w: { Seer: 3, Mage: 3, Sylph: 2 } }
    ]}
    ],
    "Mind": [
    { t: "Em um projeto de grupo, você percebe que a decisão coletiva é logicamente impecável, mas prejudicará injustamente um indivíduo isolado. Como você reage?", opts: [
        { txt: "Sigo o plano. A integridade do sistema e a eficiência do resultado são prioridades; sentimentos individuais não devem corromper a lógica do processo.", w: { Maid: 3, Knight: 2, Prince: -3, Bard: -2 } },
        { txt: "Saboto a decisão ou apresento um contra-argumento emocional. Não tolero que uma lógica fria esmague o que eu sinto ser o correto.", w: { Prince: 3, Bard: 3, Witch: -2, Sylph: -1 } },
        { txt: "Analiso os desdobramentos e tento encontrar uma brecha técnica que proteja o indivíduo sem invalidar o plano para o resto do grupo.", w: { Seer: 3, Mage: 2, Sylph: 3, Thief: -1 } },
        { txt: "Exponho a falha moral do plano para que o grupo lide com o peso da escolha, retirando minha responsabilidade direta sobre o dano.", w: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
    ]},
    { t: "Você está em um jantar formal onde todos fingem se gostar. Você percebe claramente as máscaras sociais e as intenções ocultas. Qual sua postura?", opts: [
        { txt: "Sinto um cansaço profundo. Ver a mecânica por trás das interações tira a cor da vida; sinto-me prisioneiro desse teatro de aparências.", w: { Mage: 3, Page: 3, Seer: 1, Prince: -2 } },
        { txt: "Mantenho minha própria máscara perfeitamente polida. Uso o protocolo social como uma armadura para que ninguém consiga ler meu interior.", w: { Knight: 3, Maid: 2, Bard: 3, Rogue: -2 } },
        { txt: "Intervenho nas conversas, mudando o rumo dos assuntos para testar até onde as pessoas sustentam seus personagens.", w: { Witch: 3, Thief: 2, Heir: -2, Sylph: -1 } },
        { txt: "Observo em silêncio, quase invisível, absorvendo as dinâmicas para entender quem realmente detém o poder de decisão ali.", w: { Seer: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "Um erro grave foi cometido por um colega e a culpa está recaindo sobre o grupo todo. Como você se posiciona?", opts: [
        { txt: "Utilizo a falha dele para demonstrar minha própria competência, garantindo que minha posição saia fortalecida da crise.", w: { Thief: 3, Prince: 2, Knight: -2, Rogue: -2 } },
        { txt: "Assumo parte da culpa ou tento redistribuir a responsabilidade de forma que o peso não destrua a carreira do colega individualmente.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -3 } },
        { txt: "Trabalho dobrado nos bastidores para consertar o erro logicamente, sem buscar reconhecimento, apenas para restaurar a ordem.", w: { Maid: 3, Page: 2, Witch: -1, Bard: -1 } },
        { txt: "Analiso friamente como esse erro aconteceu e uso o evento como um estudo para garantir que os padrões de decisão futuros mudem.", w: { Mage: 3, Seer: 2, Knight: 1, Witch: 2 } }
    ]},
    { t: "Ao planejar algo importante, como uma mudança de carreira, qual é o seu processo mental predominante?", opts: [
        { txt: "Crio planos de contingência para cada falha possível. Se eu não prever o caminho e as consequências, sinto que vou colapsar.", w: { Maid: 3, Mage: 1, Knight: -2, Heir: -1 } },
        { txt: "Tento não pensar demais. Confio que, se eu seguir meu instinto e o que meu coração diz, a lógica das coisas se resolverá sozinha.", w: { Prince: 3, Bard: 3, Maid: -3, Seer: -2 } },
        { txt: "Busco o conselho de várias pessoas, tentando sintetizar a visão delas em uma única estratégia que pareça justa para todos.", w: { Sylph: 3, Page: 2, Thief: -2, Witch: -1 } },
        { txt: "Procuro atalhos ou formas de influenciar o sistema a meu favor, focando em obter o melhor resultado com o menor esforço lógico.", w: { Thief: 3, Witch: 3, Rogue: -2, Knight: -1 } }
    ]},
    { t: "Duas pessoas que você estima estão em um conflito intelectual acirrado e pedem sua mediação. Como você age?", opts: [
        { txt: "Desmonto os argumentos de ambos, apontando onde as emoções estão cegando o raciocínio e forço uma conclusão neutra.", w: { Witch: 3, Knight: 2, Prince: 2, Sylph: -2 } },
        { txt: "Escuto ambos, tentando fazer com que cada um entenda a lógica por trás da perspectiva do outro para curar a divisão.", w: { Sylph: 3, Rogue: 2, Seer: 1, Thief: -2 } },
        { txt: "Fico em silêncio, sobrecarregado. Vejo tanta validade lógica em ambos os lados que sinto dificuldade em escolher uma direção.", w: { Page: 3, Bard: 2, Mage: 1, Maid: -2 } },
        { txt: "Uso a tensão para introduzir novas variáveis, mudando o foco da briga para algo que eu considere mais produtivo.", w: { Heir: 3, Thief: 2, Page: -2, Seer: -1 } }
    ]},
    { t: "Você descobre uma informação confidencial que poderia mudar a percepção de todos sobre um líder. O que faz?", opts: [
        { txt: "Guardo a informação. O conhecimento é uma ferramenta de ordem; revelá-la sem um plano causaria um caos desnecessário.", w: { Maid: 3, Knight: 2, Seer: 1, Bard: -2 } },
        { txt: "Compartilho a verdade com os afetados. Acredito que a transparência é necessária para que os outros tomem suas próprias decisões.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -2 } },
        { txt: "Uso o segredo como moeda de troca para garantir que minhas próprias ideias sejam implementadas por esse líder.", w: { Thief: 3, Prince: 3, Page: -3, Rogue: -2 } },
        { txt: "Sinto o peso dessa informação como um fardo. O simples fato de saber me faz sentir responsável por cada desdobramento futuro.", w: { Mage: 3, Seer: 2, Witch: 2, Knight: -1 } }
    ]},
    { t: "Você está diante de uma escolha onde todos os caminhos levam a algum tipo de perda. Como sua mente processa a paralisia da decisão?", opts: [
        { txt: "Escolho o caminho que preserva a lógica do sistema maior, mesmo que eu sofra pessoalmente. O sacrifício individual é um preço racional a se pagar.", w: { Maid: 3, Knight: 2, Seer: 1, Prince: -3 } },
        { txt: "Recuso-me a escolher. Deixo que o acaso ou outra pessoa decida por mim, pois me sinto incapaz de carregar o peso das consequências futuras.", w: { Bard: 3, Heir: 3, Page: 2, Witch: -2 } },
        { txt: "Tento criar uma 'terceira via' forçada através da manipulação das variáveis presentes, recusando-me a aceitar as opções que me foram dadas.", w: { Witch: 3, Thief: 3, Mage: -1, Seer: -1 } },
        { txt: "Analiso qual perda é mais útil a longo prazo. Se algo deve ser destruído, que seja a peça que menos afetará a eficiência do meu futuro.", w: { Prince: 3, Mage: 3, Rogue: 1, Sylph: -2 } }
    ]},
    { t: "Alguém questiona quem você é de verdade por trás de todas as suas opiniões sensatas e comportamentos calculados. O que você responde?", opts: [
        { txt: "Eu sou o conjunto das minhas escolhas. Não existe um 'eu' místico por trás; minha identidade é a soma lógica das minhas ações e decisões.", w: { Mage: 3, Maid: 2, Seer: 2, Bard: -2 } },
        { txt: "Sinto um vazio ao tentar responder. Temo que, se eu tirar todas as camadas de lógica e as máscaras sociais, não sobre absolutamente nada no centro.", w: { Page: 3, Knight: 3, Rogue: 2, Prince: -1 } },
        { txt: "Eu mudo conforme a necessidade do ambiente. Minha 'verdade' é ser quem eu preciso ser para que as coisas funcionem ou para que eu obtenha o que quero.", w: { Thief: 3, Witch: 2, Heir: 2, Sylph: -2 } },
        { txt: "A identidade é uma ilusão que limita o potencial. Prefiro não me definir, permitindo que as pessoas vejam em mim a lógica que melhor lhes convém.", w: { Rogue: 3, Bard: 2, Sylph: 3, Knight: -2 } }
    ]},
    { t: "Você sente que sua vida atual é uma farsa e que está apenas desempenhando um papel. Qual sua reação?", opts: [
        { txt: "Dobro a aposta no papel. Se minha identidade é uma construção, vou polir essa máscara até que ela seja indistinguível da realidade.", w: { Knight: 3, Page: 3, Maid: 1, Prince: -2 } },
        { txt: "Abandono tudo. Rompo laços e mudo de cenário; prefiro o vazio de uma folha em branco ao peso de uma lógica de vida que não é minha.", w: { Prince: 3, Bard: 2, Heir: -2, Seer: -2 } },
        { txt: "Analiso meticulosamente as escolhas que me trouxeram até aqui para entender a 'fórmula' da minha insatisfação e recalcular a rota.", w: { Mage: 3, Seer: 3, Witch: 2, Knight: -2 } },
        { txt: "Deixo que o tempo decida. Sigo o fluxo dos acontecimentos, esperando que uma nova circunstância defina quem eu devo ser.", w: { Heir: 3, Rogue: 2, Witch: -3, Maid: -1 } }
    ]},
    { t: "Em um jogo de estratégia complexo contra um oponente inteligente, qual é a sua principal força?", opts: [
        { txt: "Minha capacidade de antecipar movimentos. Eu não jogo contra as peças, jogo contra a mente dele, prevendo suas decisões.", w: { Seer: 3, Mage: 1, Witch: 2, Page: -1 } },
        { txt: "Minha disciplina. Sigo as regras e a estratégia à risca, cansando o oponente através da consistência e da ausência de erros.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -3 } },
        { txt: "Minha audácia em subverter a lógica. Faço jogadas propositalmente caóticas para quebrar o padrão de raciocínio do adversário.", w: { Prince: 2, Bard: 3, Thief: -2, Seer: -2 } },
        { txt: "Minha habilidade em usar a própria estratégia do oponente contra ele, tomando a vantagem no momento em que ele mais confia nela.", w: { Thief: 3, Rogue: 2, Heir: 2, Knight: -1 } }
        ]}
    ],
   "Heart": [
    { t: "Você percebe que está agindo de forma completamente diferente dependendo do grupo de amigos com quem está. Como isso faz você se sentir em relação à sua identidade?", opts: [
        { txt: "Sinto que sou uma fraude. Tento destruir essas 'máscaras' para encontrar uma lógica única e consistente, rejeitando essas variações emocionais.", w: { Prince: 3, Bard: 2, Mage: -1, Heir: -2 } },
        { txt: "Vejo isso como uma ferramenta social. Eu manipulo intencionalmente quem eu sou para obter a melhor reação de cada grupo, controlando a percepção deles.", w: { Witch: 3, Thief: 2, Page: 1, Seer: -2 } },
        { txt: "Sinto que estou me doando demais. Acabo absorvendo a personalidade deles e perdendo a minha para agradar ou facilitar a convivência.", w: { Rogue: 3, Maid: 2, Sylph: 1, Prince: -2 } },
        { txt: "É natural. Eu fluo entre essas identidades sem conflito; todas elas são partes de mim e eu 'visto' a que for necessária no momento.", w: { Heir: 3, Knight: 2, Bard: 1, Mage: -1 } }
    ]},
    { t: "Em um momento de crise emocional intensa de um amigo próximo, qual é o seu primeiro instinto?", opts: [
        { txt: "Tento analisar a raiz psicológica do problema. Quero entender 'por que' ele sente isso para guiá-lo para fora do labirinto mental.", w: { Seer: 3, Mage: 2, Sylph: 1, Heir: -1 } },
        { txt: "Sinto um desconforto imenso. Emoções irracionais me irritam; prefiro oferecer uma solução prática e brutalmente honesta para acabar logo com o drama.", w: { Prince: 3, Bard: 2, Sylph: -3, Rogue: -2 } },
        { txt: "Tomo as dores para mim. Uso minha própria experiência ou carisma para desviar o foco da dor dele, protegendo-o da exposição.", w: { Knight: 3, Maid: 2, Page: 1, Prince: -2 } },
        { txt: "Eu intervenho ativamente para mudar o humor dele, talvez forçando uma atividade ou mudando o ambiente para alterar como ele se sente.", w: { Witch: 3, Sylph: 2, Thief: 1, Bard: -2 } }
    ]},
    { t: "Você precisa tomar uma decisão importante que vai contra seus desejos pessoais, mas é a coisa 'lógica' a se fazer.", opts: [
        { txt: "Eu ignoro meus sentimentos. Se meu desejo é um obstáculo para o resultado perfeito, eu o anulo sem piedade.", w: { Prince: 3, Knight: 2, Witch: -1, Heir: -3 } },
        { txt: "Eu sigo meus desejos mesmo assim. A lógica não serve de nada se eu não estiver satisfeito; minha vontade é a prioridade absoluta.", w: { Thief: 3, Mage: 1, Rogue: -3, Prince: -2 } },
        { txt: "Tento encontrar um meio-termo onde eu possa servir ao propósito maior sem me sentir completamente vazio, mas geralmente cedo ao dever.", w: { Maid: 3, Page: 2, Rogue: 1, Thief: -3 } },
        { txt: "Passo muito tempo tentando entender a origem desse desejo. Só decido depois de saber se o que sinto é genuíno ou passageiro.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -1 } }
    ]},
    { t: "Alguém critica algo que você ama profundamente e que considera parte fundamental de quem você é (como um hobby, gosto musical ou crença).", opts: [
        { txt: "Fico na defensiva imediatamente e ataco o gosto da pessoa. Ninguém tem o direito de questionar o que me define.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -2 } },
        { txt: "Finjo que não me importo ou concordo ironicamente com a crítica para evitar que vejam o quanto aquilo me atingiu.", w: { Knight: 3, Prince: 2, Page: 1, Maid: -1 } },
        { txt: "Começo a questionar se eu deveria gostar daquilo mesmo. A opinião externa me faz reavaliar minha própria conexão com o objeto.", w: { Rogue: 3, Maid: 2, Page: 2, Heir: -1 } },
        { txt: "Não me abala. Minha conexão com o que amo é interna e não requer validação externa para continuar existindo.", w: { Heir: 3, Sylph: 2, Seer: 1, Knight: -2 } }
    ]},
    { t: "Você se sente frequentemente mal compreendido pelas pessoas ao seu redor?", opts: [
        { txt: "Sim, porque eu escondo quem sou. Crio personas eficientes para lidar com o mundo, então ninguém conhece o 'eu' real, e prefiro assim.", w: { Prince: 3, Knight: 2, Witch: 1, Sylph: -2 } },
        { txt: "Sim, sinto que tenho um potencial ou uma essência que ainda não consegui expressar, e estou esperando o momento certo para desabrochar.", w: { Page: 3, Maid: 2, Heir: 1, Thief: -2 } },
        { txt: "Não, eu faço questão de que todos saibam exatamente quem sou e o que quero. Imponho minha personalidade no ambiente.", w: { Thief: 3, Witch: 2, Mage: -1, Rogue: -3 } },
        { txt: "Às vezes, mas uso isso para observar os outros. O fato de não me verem me dá vantagem para entender quem 'eles' são.", w: { Mage: 3, Seer: 2, Rogue: 1, Heir: -1 } }
    ]},
    { t: "Quando você olha para o seu passado, como você enxerga sua evolução pessoal?", opts: [
        { txt: "Com vergonha. Tento ativamente apagar ou esquecer quem eu fui, pois aquela versão antiga é falha e não condiz com quem quero ser.", w: { Prince: 3, Bard: 2, Knight: 1, Sylph: -3 } },
        { txt: "Com carinho. Vejo cada fase como necessária, mesmo as ruins, e tento 'curar' as memórias aceitando-as como parte da minha história.", w: { Sylph: 3, Heir: 2, Mage: 1, Prince: -3 } },
        { txt: "Como um recurso. As coisas que passei me deram 'armas' emocionais que uso hoje para me proteger ou conseguir o que quero.", w: { Knight: 3, Witch: 2, Thief: 1, Page: -1 } },
        { txt: "Como um quebra-cabeça. Analiso as causas e efeitos das minhas mudanças para prever quem me tornarei no futuro.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Você está diante de uma escolha onde todos os caminhos levam a algum tipo de perda. Como sua mente processa a paralisia da decisão?", opts: [
        { txt: "Escolho o caminho que preserva a lógica do sistema maior, mesmo que eu sofra pessoalmente. O sacrifício individual é um preço racional a se pagar.", w: { Maid: 3, Knight: 2, Seer: 1, Prince: -3 } },
        { txt: "Recuso-me a escolher. Deixo que o acaso ou outra pessoa decida por mim, pois me sinto incapaz de carregar o peso das consequências futuras.", w: { Bard: 3, Heir: 3, Page: 2, Witch: -2 } },
        { txt: "Tento criar uma 'terceira via' forçada através da manipulação das variáveis presentes, recusando-me a aceitar as opções que me foram dadas.", w: { Witch: 3, Thief: 3, Mage: -1, Seer: -1 } },
        { txt: "Analiso qual perda é mais útil a longo prazo. Se algo deve ser destruído, que seja a peça que menos afetará a eficiência do meu futuro.", w: { Prince: 3, Mage: 3, Rogue: 1, Sylph: -2 } }
    ]},
    { t: "Alguém questiona quem você é de verdade por trás de todas as suas opiniões sensatas e comportamentos calculados. O que você responde?", opts: [
        { txt: "Eu sou o conjunto das minhas escolhas. Não existe um 'eu' místico por trás; minha identidade é a soma lógica das minhas ações e decisões.", w: { Mage: 3, Maid: 2, Seer: 2, Bard: -2 } },
        { txt: "Sinto um vazio ao tentar responder. Temo que, se eu tirar todas as camadas de lógica e as máscaras sociais, não sobre absolutamente nada no centro.", w: { Page: 3, Knight: 3, Rogue: 2, Prince: -1 } },
        { txt: "Eu mudo conforme a necessidade do ambiente. Minha 'verdade' é ser quem eu preciso ser para que as coisas funcionem ou para que eu obtenha o que quero.", w: { Thief: 3, Witch: 2, Heir: 2, Sylph: -2 } },
        { txt: "A identidade é uma ilusão que limita o potencial. Prefiro não me definir, permitindo que as pessoas vejam em mim a lógica que melhor lhes convém.", w: { Rogue: 3, Bard: 2, Sylph: 3, Knight: -2 } }
    ]},
    { t: "Em um relacionamento (romântico ou amizade profunda), qual é o seu maior medo?", opts: [
        { txt: "Perder minha individualidade. Tenho medo de ser absorvido pelo outro e não saber mais onde eu termino e ele começa.", w: { Thief: 3, Prince: 2, Mage: 1, Rogue: -3 } },
        { txt: "Não ser o suficiente. Sinto que preciso estar sempre 'servindo' ou sendo útil emocionalmente para justificar minha presença na vida da pessoa.", w: { Maid: 3, Page: 2, Knight: 1, Thief: -2 } },
        { txt: "A vulnerabilidade real. Tenho pavor de baixar a guarda e deixar alguém ver minhas falhas sem nenhuma máscara ou filtro.", w: { Knight: 3, Prince: 2, Witch: 1, Heir: -2 } },
        { txt: "Não conseguir ajudar. Meu medo é ver o outro sofrendo e não ter a capacidade ou a 'alma' necessária para consertá-lo.", w: { Sylph: 3, Rogue: 2, Seer: 1, Bard: -2 } }
    ]},
    { t: "Você tem um instinto ou 'feeling' muito forte sobre algo, mas todos os dados lógicos dizem o contrário. O que você faz?", opts: [
        { txt: "Sigo os dados. O instinto é falho e irracional; confio apenas no que pode ser provado e destruo a dúvida interna.", w: { Prince: 3, Mage: 1, Seer: -1, Heir: -3 } },
        { txt: "Sigo o instinto cegamente. Deixo-me levar pelo que sinto, pois minha intuição geralmente me protege de formas que a lógica não explica.", w: { Heir: 3, Bard: 2, Sylph: 1, Prince: -3 } },
        { txt: "Uso o instinto para manipular a situação. Se sinto que vai dar errado, altero as variáveis para garantir que o resultado me favoreça.", w: { Witch: 3, Thief: 2, Knight: 1, Page: -1 } },
        { txt: "Tento traduzir o instinto em lógica. Passo tempo analisando o 'porquê' de eu sentir isso até encontrar a validação racional para a emoção.", w: { Mage: 3, Seer: 2, Page: -1, Bard: -2 } }
        ]}
    ],
    "Hope": [
    { t: "Você descobre que uma figura de autoridade ou ídolo em quem confiava cometeu um erro moral grave. Qual sua reação imediata?", opts: [
        { txt: "Corto os laços imediatamente. Se a imagem perfeita foi manchada, a pessoa inteira é uma mentira e não merece minha atenção.", w: { Prince: 3, Bard: 2, Witch: -2, Sylph: -3 } },
        { txt: "Tento justificar as ações dele para mim mesmo e para os outros. Deve haver uma razão maior ou um mal-entendido por trás disso.", w: { Witch: 3, Sylph: 2, Heir: 1, Prince: -3 } },
        { txt: "Sinto-me traído, mas guardo para mim. Continuo agindo como se confiasse, pois preciso dessa estrutura de autoridade para funcionar.", w: { Page: 3, Knight: 2, Thief: -1, Prince: -2 } },
        { txt: "Analiso o contexto histórico e as falhas humanas dele. Eu já esperava que isso pudesse acontecer, pois ninguém é infalível.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } }
    ]},
    { t: "Seu grupo de amigos está desanimado com um projeto que parece destinado ao fracasso. O que você faz?", opts: [
        { txt: "Assumo a liderança e exalo uma confiança exagerada, garantindo a todos que vai dar certo, mesmo que eu esteja tremendo por dentro.", w: { Knight: 3, Page: 2, Rogue: -1, Bard: -2 } },
        { txt: "aponto friamente todas as falhas do projeto. É melhor destruir a falsa esperança agora do que vê-los sofrerem com o fracasso inevitável depois.", w: { Prince: 3, Thief: 1, Sylph: -3, Maid: -2 } },
        { txt: "Continuo trabalhando na minha parte alegremente, ignorando o clima ruim. Minha fé inabalável de que 'as coisas se ajeitam' acaba contagiando alguns.", w: { Heir: 3, Maid: 2, Seer: -2, Prince: -3 } },
        { txt: "Deixo que eles desistam se quiserem. Às vezes, o colapso de um plano ruim é a única forma de surgirem ideias novas e verdadeiras.", w: { Bard: 3, Mage: 1, Knight: -2, Sylph: -2 } }
    ]},
    { t: "Você se depara com uma teoria ou crença que contradiz fatos lógicos, mas que faz você se sentir incrivelmente bem e seguro.", opts: [
        { txt: "Abraço a crença. A 'verdade' factual é fria e muitas vezes subjetiva; prefiro viver em uma narrativa que me dê propósito e felicidade.", w: { Maid: 3, Witch: 2, Heir: 1, Prince: -3 } },
        { txt: "Rejeito a crença com desprezo. O conforto gerado pela ignorância é uma fraqueza que me recuso a permitir em mim mesmo.", w: { Prince: 3, Mage: 1, Heir: -3, Page: -2 } },
        { txt: "Estudo a estrutura dessa crença para entender por que ela é tão atraente para a mente humana, sem necessariamente aderi-la.", w: { Mage: 3, Seer: 2, Bard: -1, Knight: -1 } },
        { txt: "Uso essa crença para motivar outras pessoas, mesmo que eu não acredite totalmente nela. É uma ferramenta útil para elevar o moral.", w: { Thief: 3, Rogue: 2, Bard: 1, Seer: -2 } }
    ]},
    { t: "Em um debate acalorado sobre ética, todos estão contra a sua opinião. Como você se posiciona?", opts: [
        { txt: "Mantenho minha posição com teimosia absoluta. O fato de serem muitos contra mim só prova que sou o único que vê a 'luz' da verdade.", w: { Thief: 3, Knight: 2, Maid: 1, Rogue: -3 } },
        { txt: "Cedo e concordo com o grupo para manter a harmonia, mas guardo minha convicção em segredo, sentindo que falhei em defendê-la.", w: { Page: 3, Rogue: 2, Sylph: 1, Thief: -3 } },
        { txt: "Tento reformular a visão deles, mostrando que, no fundo, o que eles querem é o mesmo que eu, apenas com palavras diferentes.", w: { Sylph: 3, Witch: 2, Seer: 1, Prince: -2 } },
        { txt: "Desmonto os argumentos deles um por um, focando em provar que a lógica deles é falha, mais do que provar que eu estou certo.", w: { Prince: 2, Bard: 2, Mage: 1, Heir: -2 } }
    ]},
    { t: "Um amigo próximo está iludido com um relacionamento tóxico, acreditando que 'o amor vai mudar tudo'.", opts: [
        { txt: "Intervenho drasticamente, listando todas as provas de toxicidade para quebrar essa fantasia antes que ele se machuque mais.", w: { Prince: 3, Seer: 2, Sylph: -2, Heir: -3 } },
        { txt: "Ouço os desabafos dele e valido seus sentimentos, esperando que, ao se sentir seguro, ele mesmo perceba a realidade no tempo dele.", w: { Sylph: 3, Rogue: 2, Prince: -3, Thief: -2 } },
        { txt: "Sinto raiva por ele ser tão ingênuo, mas acabo tomando as dores dele e comprando briga com quem o está machucando.", w: { Knight: 3, Thief: 2, Mage: -1, Bard: -1 } },
        { txt: "Afasto-me. Não tenho paciência para quem escolhe viver na mentira e não quero ser arrastado para o drama inevitável.", w: { Mage: 2, Bard: 3, Knight: -2, Maid: -1 } }
    ]},
    { t: "Você cometeu um erro que prejudicou alguém, mas foi sem intenção. A culpa o consome.", opts: [
        { txt: "Convenço a mim mesmo e aos outros de que não foi realmente minha culpa, reescrevendo a narrativa dos eventos para conseguir lidar com isso.", w: { Witch: 3, Thief: 2, Prince: 1, Seer: -3 } },
        { txt: "Aceito a culpa publicamente e tento compensar exageradamente o erro, buscando redenção através de atos grandiosos de serviço.", w: { Page: 3, Maid: 2, Knight: 1, Thief: -2 } },
        { txt: "Fico paralisado, esperando que o tempo apague a gravidade do erro ou que a pessoa simplesmente me perdoe sem eu precisar agir.", w: { Heir: 3, Bard: 2, Knight: -2, Maid: -2 } },
        { txt: "Dou espaço para a pessoa, sacrificando minha necessidade de perdão imediato para respeitar o processo de cura dela.", w: { Rogue: 3, Seer: 2, Sylph: 1, Witch: -2 } }
    ]},
    { t: "Qual é a sua relação com 'finais felizes' em filmes e livros?", opts: [
        { txt: "Acho irritantes e irreais. A vida não funciona assim, e ficção que ignora a tragédia é um desserviço à inteligência.", w: { Prince: 3, Mage: 2, Heir: -2, Sylph: -2 } },
        { txt: "São essenciais. O mundo já é difícil demais; a ficção deve servir como um farol de como as coisas poderiam e deveriam ser.", w: { Maid: 3, Sylph: 2, Page: 1, Prince: -3 } },
        { txt: "Gosto, mas apenas se os personagens sofreram o suficiente para merecê-lo. A esperança tem que ser conquistada com luta.", w: { Knight: 3, Thief: 2, Seer: 1, Heir: -1 } },
        { txt: "Não me importo com o final, mas sim com a jornada e as possibilidades abertas que a história sugere, mesmo que não se concretizem.", w: { Heir: 3, Rogue: 2, Bard: 1, Knight: -2 } }
    ]},
    { t: "Você precisa convencer um grupo de pessoas a seguir um caminho arriscado.", opts: [
        { txt: "Uso meu carisma e promessas grandiosas. Não importa se eu tenho certeza, importa se eles acreditam que eu tenho.", w: { Thief: 3, Knight: 2, Page: 1, Seer: -2 } },
        { txt: "Apresento o cenário de forma honesta, incluindo os riscos, confiando que a verdade inspirará as pessoas certas a virem comigo.", w: { Seer: 3, Mage: 2, Witch: -2, Thief: -3 } },
        { txt: "Manipulo sutilmente as circunstâncias para que o caminho arriscado pareça a única opção segura e lógica.", w: { Witch: 3, Prince: 1, Sylph: 1, Knight: -1 } },
        { txt: "Vou na frente sozinho. Se eu sobreviver e der certo, eles me seguirão naturalmente pelo exemplo.", w: { Rogue: 3, Maid: 2, Heir: 1, Bard: -1 } }
    ]},
    { t: "Os dados e a lógica garantem que seu objetivo atual é impossível. Qual sua reação imediata?", opts: [
        { txt: "Recuso essa 'verdade'. Se a realidade diz não, eu quebro as regras ou forço um caminho na marra.", w: { Prince: 2, Witch: 1 } },
        { txt: "Entro em pânico. Busco validação em outras pessoas para sustentar minha crença que está desmoronando.", w: { Thief: 2, Rogue: 1 } },
        { txt: "Analiso friamente. Tento entender a lógica da falha e, se for real, aceito e sigo o fluxo.", w: { Mage: 2, Seer: 2, Heir: 1 } },
        { txt: "Mantenho as aparências. Continuo agindo como se fosse dar certo para preservar a moral e o esforço.", w: { Sylph: 2, Maid: 1, Knight: 1 } }
    ]},
    { t: "Você está sozinho em um quarto em silêncio absoluto. Como essa ausência de estímulo te afeta?", opts: [
        { txt: "A inércia me desespera. Começo a organizar coisas freneticamente; preciso sentir que o tempo está passando e algo está sendo feito.", w: { Prince: 1, Knight: 2, Maid: 1 } },
        { txt: "Sinto um vazio existencial insuportável. Preciso consumir conteúdo alheio para sentir que meu espaço mental está 'cheio'.", w: { Thief: 2, Rogue: 2, Bard: 1 } },
        { txt: "Sinto-me finalmente livre. Sem a pressão da matéria ou de outras pessoas, minha mente pode se expandir sem limites.", w: { Heir: 2, Seer: 1, Mage: 1 } },
        { txt: "Uso o isolamento como ferramenta de treino e autopoliciamento, trabalhando em minhas falhas sem distrações externas.", w: { Page: 2, Knight: 1 } }
    ]}
    ],
    "Doom": [
    { t: "Você recebe um diagnóstico de uma condição crônica (não fatal, mas limitante) que exigirá mudanças drásticas e chatas no seu estilo de vida para sempre.", opts: [
        { txt: "Ignoro o diagnóstico. Continuo vivendo exatamente como antes, recusando-me a deixar que um pedaço de papel dite o que meu corpo pode ou não fazer.", w: { Prince: 3, Bard: 2, Heir: -1, Mage: -2 } },
        { txt: "Mergulho na pesquisa médica. Preciso entender cada mecanismo da doença para saber exatamente onde piso e como navegar minhas novas restrições.", w: { Mage: 3, Seer: 2, Knight: 1, Prince: -2 } },
        { txt: "Adapto minha rotina imediatamente, criando um novo sistema rígido de hábitos. Encontro conforto em ter novas regras para seguir e 'consertar' minha saúde.", w: { Sylph: 3, Maid: 2, Heir: 1, Bard: -2 } },
        { txt: "Uso minha condição como justificativa para me livrar de responsabilidades que eu não queria. A doença se torna uma ferramenta útil para evitar expectativas.", w: { Thief: 3, Witch: 2, Page: 1, Knight: -1 } }
    ]},
    { t: "Você está em um veículo (carro, barco) que começa a apresentar uma falha catastrófica. O acidente é iminente e inevitável.", opts: [
        { txt: "Aceito o impacto. Relaxo o corpo para não quebrar ossos com a tensão, confiando que, se eu fluir com o desastre, sobreviverei.", w: { Heir: 3, Bard: 2, Sylph: 1, Prince: -3 } },
        { txt: "Tento proteger os outros passageiros com meu próprio corpo ou ações, agindo como um escudo humano instintivo.", w: { Rogue: 3, Knight: 2, Maid: 1, Thief: -3 } },
        { txt: "Grito ordens precisas para todos. Assumo o comando do pânico, ditando o que cada um deve fazer para minimizar os danos.", w: { Seer: 2, Mage: 2, Sylph: 1, Page: -1 } },
        { txt: "Pulo fora antes do impacto final. Minha prioridade é salvar a minha pele, pois não vejo sentido em afundar junto com o barco.", w: { Thief: 3, Prince: 2, Witch: 1, Rogue: -3 } }
    ]},
    { t: "Você descobre uma falha técnica em um contrato ou nos termos de uso de um serviço que permite obter vantagens ilimitadas (dinheiro, acesso, itens).", opts: [
        { txt: "Exploro a falha ao máximo para ganho pessoal. Se o sistema deixou uma porta aberta, a culpa é de quem escreveu as regras, não minha.", w: { Thief: 3, Witch: 2, Prince: 1, Seer: -2 } },
        { txt: "Reporto o erro aos administradores. Regras existem para manter o equilíbrio, e um sistema quebrado prejudica a todos a longo prazo.", w: { Sylph: 3, Seer: 2, Heir: 1, Thief: -3 } },
        { txt: "Compartilho o 'glitch' com meus amigos próximos para que todos nós possamos nos beneficiar antes que consertem.", w: { Rogue: 3, Maid: 2, Page: 1, Prince: -1 } },
        { txt: "Fico paranoico de que usar isso trará consequências terríveis ou punições cármicas, então prefiro não tocar.", w: { Mage: 3, Knight: 2, Bard: -1, Witch: -2 } }
    ]},
    { t: "Sua família ou comunidade mantém uma tradição antiga que você considera tóxica e sem sentido, mas que 'mantém a ordem'.", opts: [
        { txt: "Participo da tradição performaticamente, mas pelas costas zombo dela e incentivo outros a não a levarem a sério, minando sua autoridade.", w: { Bard: 3, Prince: 2, Thief: 1, Sylph: -2 } },
        { txt: "Confronto a tradição abertamente e tento destruí-la. Não me importo com a ordem social se ela é construída sobre sofrimento.", w: { Prince: 3, Knight: 2, Witch: 1, Heir: -2 } },
        { txt: "Mantenho a tradição. Entendo que, mesmo sendo ruim, ela é a cola que impede a comunidade de se dissolver no caos.", w: { Heir: 3, Seer: 2, Mage: 1, Prince: -3 } },
        { txt: "Tento reformar a tradição por dentro, alterando as regras aos poucos para torná-la mais suportável e útil para as pessoas.", w: { Sylph: 3, Witch: 2, Maid: 1, Bard: -2 } }
    ]},
    { t: "Você vê um inseto ou animal pequeno sofrendo, morrendo lentamente e sem chance de recuperação.", opts: [
        { txt: "Mato-o rapidamente. É um ato de misericórdia encerrar o sofrimento quando o destino já está selado.", w: { Knight: 3, Prince: 2, Maid: 1, Bard: -1 } },
        { txt: "Não consigo olhar e vou embora. A visão da morte e da impotência me perturba profundamente e prefiro negar essa realidade.", w: { Page: 3, Heir: 2, Prince: 1, Mage: -2 } },
        { txt: "Fico observando até o fim. Sinto uma curiosidade mórbida ou uma obrigação respeitosa de testemunhar a passagem da vida.", w: { Mage: 3, Seer: 2, Rogue: 1, Knight: -2 } },
        { txt: "Tento salvá-lo de qualquer jeito, mesmo sabendo que é fútil. Recuso-me a aceitar que a morte é a única opção.", w: { Maid: 3, Witch: 2, Sylph: 1, Seer: -2 } }
    ]},
    { t: "Você está preso em um projeto onde as regras mudam constantemente e ninguém sabe o que está fazendo. O caos reina.", opts: [
        { txt: "Paraliso. A falta de regras claras drena minha energia e me sinto incapaz de agir sem um 'trilho' para seguir.", w: { Page: 3, Heir: 2, Sylph: 1, Prince: -2 } },
        { txt: "Crio minhas próprias regras e as imponho aos outros. Se não há estrutura, eu me torno a estrutura.", w: { Witch: 3, Knight: 2, Maid: 1, Page: -2 } },
        { txt: "Aproveito o caos. Sem regras, ninguém pode me dizer que estou errado. Faço o mínimo possível e navego na desordem.", w: { Bard: 3, Thief: 2, Rogue: 1, Seer: -3 } },
        { txt: "Tento decifrar o padrão por trás das mudanças. Acredito que há uma lógica oculta nesse caos e quero entendê-la.", w: { Mage: 3, Seer: 2, Heir: 1, Bard: -1 } }
    ]},
    { t: "Um amigo pede que você minta para encobrir um erro dele que poderia custar o emprego dele.", opts: [
        { txt: "Minto. As regras da empresa não valem mais do que a minha lealdade pessoal.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } },
        { txt: "Não minto. Explico que as consequências são inevitáveis e que tentar fugir delas só vai piorar a situação dele a longo prazo.", w: { Seer: 3, Mage: 2, Sylph: 1, Thief: -2 } },
        { txt: "Assumo a culpa no lugar dele, se eu tiver mais capital político para gastar. Sacrifico minha reputação para salvá-lo.", w: { Rogue: 3, Page: 2, Knight: 1, Prince: -3 } },
        { txt: "Fico furioso com ele por me colocar nessa posição. A irresponsabilidade dele agora se tornou um fardo meu.", w: { Prince: 3, Knight: 2, Bard: 1, Heir: -1 } }
    ]},
    { t: "Você tem que lidar com uma montanha de burocracia, documentos e filas para conseguir algo simples.", opts: [
        { txt: "Transformo isso em um jogo de eficiência. Organizo tudo perfeitamente para passar pelo processo na velocidade recorde.", w: { Knight: 3, Maid: 2, Sylph: 1, Bard: -2 } },
        { txt: "Sinto minha alma sendo drenada a cada segundo. A ineficiência sistêmica me dá vontade de explodir o prédio.", w: { Prince: 3, Bard: 2, Witch: 1, Heir: -2 } },
        { txt: "Aceito com resignação. É chato, mas é como o mundo funciona. Entro em um estado meditativo e espero minha vez.", w: { Heir: 3, Page: 2, Rogue: 1, Prince: -3 } },
        { txt: "Tento usar 'quem eu conheço' ou meu charme para pular etapas. As regras são para os outros, não para mim.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } }
    ]},
    { t: "Você está gerenciando o orçamento da casa ou de um projeto e a matemática é clara: o dinheiro acabou. Não há como pagar tudo e o colapso é certo.", opts: [
        { txt: "Saio cortando tudo que não é essencial. Cancelo streaming, paro de pedir comida, zero o lazer. Viro um monge na base do ódio pra fazer o dinheiro render.", w: { Prince: 3, Bard: 2, Knight: 1, Sylph: -2 } },
        { txt: "Deixo de comer ou de comprar coisas para mim para garantir que os outros dependentes (família, equipe) não sintam o impacto da crise.", w: { Rogue: 3, Maid: 2, Page: 1, Thief: -3 } },
        { txt: "Faço malabarismo. Pego empréstimo pra pagar outro empréstimo, jogo com os prazos e tento empurrar a dívida com a barriga o máximo que der.", w: { Thief: 3, Witch: 2, Mage: 1, Seer: -1 } },
        { txt: "Sento e calculo a data exata da falência. Aceito que vai dar ruim e crio um plano detalhado de como vamos sobreviver quando o dinheiro acabar de vez.", w: { Seer: 3, Mage: 2, Heir: 1, Bard: -2 } }
    ]},
    { t: "Você precisa dar uma notícia devastadora para alguém (um término, uma demissão, um falecimento). É uma verdade que vai destruir o mundo daquela pessoa.", opts: [
        { txt: "Falo a verdade na lata. Acredito que tentar enrolar ou amaciar o golpe é desrespeitoso e só prolonga o sofrimento da pessoa.", w: { Seer: 3, Mage: 2, Knight: 1, Sylph: -2 } },
        { txt: "Tento dar uma maquiada na situação, omitindo os detalhes mais cruéis. Quero proteger a pessoa da parte mais feia da realidade, nem que eu tenha que mentir um pouco.", w: { Sylph: 3, Page: 2, Heir: 1, Prince: -1 } },
        { txt: "Travo totalmente. Fico enrolando, invento desculpas para não encontrar a pessoa ou torço para ela descobrir por outra pessoa antes de eu ter que falar.", w: { Bard: 3, Page: 2, Rogue: 1, Knight: -2 } },
        { txt: "Uso a situação para me mostrar presente. Dou a notícia já oferecendo meu ombro, garantindo que eu seja a pessoa que vai 'salvar' o dia quando ela desabar.", w: { Witch: 3, Thief: 2, Maid: 1, Prince: -2 } }
    ]}    
    ],
    "Life": [
    { t: "Você descobriu que só conseguiu seu emprego atual porque seu pai conhecia o chefe (nepotismo), e não por mérito próprio. Como isso faz você se sentir?", opts: [
        { txt: "Não sinto vergonha alguma. Se o mundo me ofereceu um atalho, seria estupidez não pegar. Prefiro estar empregado com vantagem do que ser um mártir desempregado.", w: { Thief: 3, Witch: 1, Prince: -2, Page: -1 } },
        { txt: "Sinto-me uma fraude completa. Trabalho o triplo do que meus colegas para provar (para eles e para mim) que eu mereço ocupar este espaço.", w: { Page: 3, Knight: 2, Maid: 1, Heir: -1 } },
        { txt: "Rejeito a vantagem. Peço demissão ou busco outro lugar onde eu possa começar do zero, destruindo esse privilégio que mancha minha autonomia.", w: { Prince: 3, Bard: 2, Thief: -3, Witch: -2 } },
        { txt: "Uso minha posição privilegiada para facilitar a vida dos meus colegas, advogando por aumentos ou melhorias, redistribuindo minha sorte.", w: { Rogue: 3, Sylph: 2, Seer: 1, Prince: -1 } }
    ]},
    { t: "Em um projeto de grupo, um membro é claramente incompetente e está arrastando todos para o fracasso. O prazo acaba amanhã.", opts: [
        { txt: "Eu corto a parte dele e faço tudo sozinho. Não vou deixar minha nota afundar por causa de um peso morto. Se eu fiz o trabalho, o crédito (e a nota) é meu.", w: { Prince: 3, Thief: 2, Sylph: -2, Page: -2 } },
        { txt: "Sento com ele e faço a parte dele junto, guiando sua mão se for preciso. Não posso deixar ninguém para trás, preciso 'consertar' a incompetência dele.", w: { Sylph: 3, Maid: 2, Witch: 1, Bard: -2 } },
        { txt: "Assumo a liderança agressivamente, ditando exatamente o que cada um fará nas horas finais para garantir que o resultado seja vital e enérgico.", w: { Witch: 3, Maid: 2, Heir: 1, Seer: -1 } },
        { txt: "Observo o desastre iminente. Entendo que o fracasso é parte do ciclo de aprendizado e, às vezes, deixar morrer é a única lição que funciona.", w: { Seer: 3, Mage: 2, Bard: 1, Knight: -2 } }
    ]},
    { t: "Em um grupo de amigos, você é geralmente aquele que:", opts: [
        { txt: "Organiza as atividades, traz os lanches, cuida de quem bebeu demais e garante que todos estejam bem, muitas vezes esquecendo de si mesmo.", w: { Maid: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
        { txt: "É o conselheiro realista que diz as verdades duras que ninguém quer ouvir, impedindo que os outros tomem decisões impulsivas e estúpidas.", w: { Prince: 3, Mage: 2, Seer: 1, Witch: -2 } },
        { txt: "É o centro das atenções natural. Você define o ritmo do rolê e, sem perceber, faz com que os planos girem em torno do que você quer fazer.", w: { Witch: 3, Knight: 2, Thief: 1, Bard: -2 } },
        { txt: "Aquele que parece atrair a sorte ou as oportunidades, sempre terminando em situações vantajosas sem parecer que fez muito esforço para isso.", w: { Heir: 3, Page: 2, Bard: 1, Thief: -1 } }
    ]},
    { t: "Uma tradição familiar antiga dita que você deve seguir uma carreira que você odeia. Romper com ela significa ser deserdado.", opts: [
        { txt: "Rompo com a tradição. Tenho uma vida só e não vou gastá-la seguindo regras de gente morta. Minha felicidade pessoal vale mais que qualquer herança.", w: { Witch: 3, Thief: 2, Prince: 1, Heir: -2 } },
        { txt: "Aceito o fardo e sigo a carreira, encontrando maneiras de servir minha família e manter o legado vivo, mesmo que isso me custe felicidade pessoal.", w: { Maid: 3, Knight: 2, Heir: 1, Bard: -2 } },
        { txt: "Tento reformar a tradição por dentro, conversando e mostrando que a mudança é necessária para a sobrevivência da família a longo prazo.", w: { Sylph: 3, Seer: 2, Mage: 1, Prince: -1 } },
        { txt: "Fujo silenciosamente. Deixo o espaço vago para que outro parente assuma, redistribuindo essa responsabilidade para quem a deseja.", w: { Rogue: 3, Bard: 1, Knight: -2, Witch: -2 } }
    ]},
    { t: "Você vê uma criança fazendo birra em um supermercado porque quer um doce, gritando e se jogando no chão.", opts: [
        { txt: "Sinto uma irritação profunda. Essa exibição de desejo descontrolado e falta de disciplina precisa ser contida imediatamente.", w: { Prince: 3, Knight: 2, Sylph: -1, Bard: -1 } },
        { txt: "Acho graça ou ignoro. É a expressão pura de um desejo vital; crianças são assim, caóticas e cheias de querer.", w: { Heir: 3, Bard: 3, Mage: -1, Prince: -3 } },
        { txt: "Se fosse meu filho, eu compraria o doce só para ele calar a boca e eu poder continuar minha vida em paz. Resolvo o problema cedendo ao fluxo.", w: { Witch: 3, Rogue: 2, Page: -1, Knight: -2 } },
        { txt: "Analiso os pais. Julgo a falta de autoridade deles e entendo exatamente onde a criação falhou para produzir esse comportamento.", w: { Mage: 3, Seer: 2, Heir: -1, Sylph: -1 } }
    ]},
    { t: "Um amigo rico oferece pagar uma viagem de luxo para você, mas você sabe que ele vai jogar isso na sua cara depois.", opts: [
        { txt: "Aceito. Se ele quer pagar de superior, problema dele. Vou aproveitar o luxo, comer bem e curtir a viagem sem gastar um centavo. O saldo final é positivo para mim.", w: { Thief: 3, Witch: 1, Knight: -2, Prince: -2 } },
        { txt: "Recuso. Prefiro pagar minha própria viagem barata do que ficar em dívida ou sob o domínio financeiro de alguém.", w: { Knight: 3, Prince: 2, Thief: -3, Heir: -2 } },
        { txt: "Convenço-o a convidar mais pessoas, diluindo a atenção dele e transformando a viagem em um evento de grupo onde eu sou apenas mais um.", w: { Rogue: 3, Sylph: 1, Page: 1, Witch: -1 } },
        { txt: "Aceito, mas faço questão de 'pagar' de volta com favores, organização e entretenimento durante a viagem, servindo para equilibrar a balança.", w: { Maid: 3, Page: 2, Seer: 1, Thief: -2 } }
    ]},
    { t: "Você está jogando um jogo competitivo e percebe que seu oponente é muito mais fraco e novato que você.", opts: [
        { txt: "Ganho rápido e sem enrolação. Não vejo graça em fingir que sou ruim só para agradar. O jogo é para ganhar, e eu vou ganhar.", w: { Prince: 3, Thief: 2, Sylph: -3, Page: -2 } },
        { txt: "Pego leve, permitindo que ele jogue e se divirta, talvez até deixo ele ganhar uma rodada para encorajar seu crescimento.", w: { Sylph: 3, Rogue: 2, Heir: 1, Prince: -3 } },
        { txt: "Ensino as mecânicas enquanto jogamos, parando a partida para explicar o que ele fez de errado. Torno-me um tutor.", w: { Seer: 3, Mage: 2, Knight: -1, Witch: -1 } },
        { txt: "Brinco com ele, criando situações absurdas no jogo apenas para ver como ele reage, testando os limites do sistema sem focar na vitória.", w: { Bard: 3, Witch: 2, Mage: 1, Knight: -2 } }
    ]},
     { t: "Você e seus amigos vão dividir uma pizza. Chega o último pedaço, o mais recheado. Todos estão olhando, ninguém pega.", opts: [
        { txt: "Eu pego e como. Se ninguém pegou até agora, é porque não queriam tanto assim. Não vou passar vontade por pura etiqueta.", w: { Thief: 3, Witch: 2, Page: -1, Rogue: -3 } },
        { txt: "Ofereço o pedaço para o amigo que comeu menos ou que parece mais faminto. Sinto prazer em ver o outro satisfeito.", w: { Rogue: 3, Sylph: 2, Maid: 1, Thief: -3 } },
        { txt: "Divido o pedaço milimetricamente em partes iguais para todos. A distribuição justa é a única forma de evitar conflito.", w: { Seer: 3, Mage: 2, Knight: 1, Bard: -2 } },
        { txt: "Deixo o pedaço esfriar e sobrar. Prefiro o desperdício a ter que lidar com a disputa social por comida.", w: { Prince: 3, Bard: 1, Heir: -1, Witch: -2 } }
    ]},
    { t: "Você está com uma dor de cabeça chata, mas não insuportável. Como lida com a medicação?", opts: [
        { txt: "Tomo o remédio na hora. Não tenho paciência para sentir dor se existe uma solução fácil. Quero estar 100% de novo, rápido.", w: { Witch: 3, Thief: 2, Prince: -1, Bard: -1 } },
        { txt: "Evito tomar. Acredito que o corpo deve se curar sozinho ou que o remédio é uma muleta desnecessária.", w: { Prince: 3, Seer: 2, Rogue: 1, Mage: 1, Sylph: -2 } },
        { txt: "Reclamo da dor para alguém, esperando que a pessoa cuide de mim ou me traga um copo d'água e o remédio.", w: { Page: 3, Thief: -1, Maid: -3 } },
        { txt: "Ignoro a dor e continuo fazendo minhas tarefas. Uso a dor como um lembrete de que estou vivo e ocupado.", w: { Knight: 3, Maid: 2, Bard: -2, Heir: -2 } }
    ]},
    { t: "Você acorda com uma energia e disposição incomuns, sentindo-se invencível. O que faz com esse dia?", opts: [
        { txt: "Inicio três projetos novos, limpo a casa e corro uma maratona. Gasto essa energia criando e fazendo, pois o desperdício de vitalidade é pecado.", w: { Maid: 3, Knight: 2, Sylph: 1, Bard: -2 } },
        { txt: "Foco em mim. Uso essa energia para resolver meus problemas pendentes e conseguir o que eu quero das pessoas. Hoje o dia é meu.", w: { Thief: 3, Witch: 2, Prince: -1, Page: -1 } },
        { txt: "Apenas 'sou'. Deixo o dia me levar, flutuando através dos eventos com a certeza absoluta de que nada pode me atingir hoje.", w: { Heir: 3, Bard: 1, Knight: -2, Mage: -1 } },
        { txt: "Fico desconfiado. Esse excesso de energia não é normal; tento entender o que causou isso antes de agir impulsivamente.", w: { Mage: 3, Seer: 2, Heir: -2, Thief: -1 } }
    ]}
    ],
   "Blood": [
    { t: "Você recebe de herança um objeto de família extremamente feio e inútil, mas que sua avó adorava. O que você faz com ele?", opts: [
        { txt: "Mantenho o objeto em destaque na sala. A estética não importa; o que importa é que ele é um âncora material da minha linhagem.", w: { Heir: 3, Maid: 2, Sylph: 1, Prince: -3 } },
        { txt: "Jogo fora ou 'perco' acidentalmente. Não vou deixar que a nostalgia alheia ocupe espaço físico na minha vida atual.", w: { Prince: 3, Bard: 2, Knight: -2, Maid: -2 } },
        { txt: "Prefiro trocar o objeto por algo que me dê autonomia real agora, em vez de ser refém de uma herança que não escolhi.", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -2 } },
        { txt: "Guardo em uma caixa no fundo do armário. Sinto culpa demais para jogar fora, mas vergonha demais para exibir.", w: { Page: 3, Knight: 2, Rogue: 1, Seer: -1 } }
    ]},
    { t: "Você é convidado para um evento de família importante, mas está exausto e odeia o ambiente. Qual sua escolha?", opts: [
        { txt: "Vou e coloco o meu melhor sorriso. Minha presença é um dever cívico para manter a harmonia da estrutura familiar.", w: { Maid: 3, Heir: 2, Knight: 1, Prince: -3 } },
        { txt: "Se eu não for relevante lá, prefiro não ir para não me sentir um figurante na minha própria linhagem.", w: { Prince: 3, Bard: 2, Thief: 2, Rogue: -1 } },
        { txt: "Vou, mas passo o tempo todo observando as tensões entre os parentes, extraindo informações que possam ser úteis no futuro.", w: { Seer: 3, Mage: 1, Sylph: -2 } },
        { txt: "Vou apenas para prestar apoio a alguém específico que eu goste, agindo como um amortecedor emocional para as frustrações dessa pessoa.", w: { Rogue: 3, Page: 2, Sylph: 1, Witch: -1 } }
    ]},
    { t: "Um amigo insubstituível faleceu. O funeral passou, as visitas pararam e agora resta apenas o silêncio. Como você lida com o buraco que ele deixou na sua estrutura de vida?", opts: [
        { txt: "Me torno o 'guardião oficial' da memória dele. Corrijo quem fala errado sobre ele e guardo seus pertences como se fossem sagrados.", w: { Thief: 3, Witch: 2, Knight: 1 }},
        { txt: "Pego-me usando as gírias dele, ouvindo as músicas dele ou adotando seus hábitos. É como se eu permitisse que ele continuasse vivendo através das minhas ações.", w: { Heir: 3, Rogue: 2, Sylph: 1 }},
        { txt: "Para conseguir continuar funcionando, preciso bloquear as memórias e evitar lugares ou pessoas que me lembrem dele. O vínculo dói demais, então eu o anestesio.", w: { Prince: 3, Bard: 2, Mage: 1 }},
        { txt: "Tento preencher o vazio dedicando-me a terminar o que ele começou ou servindo a uma causa que ele amava, buscando honrar o legado dele pelo esforço.", w: { Page: 3, Maid: 2, Seer: 1 } } 
    ]},
    { t: "Você sente uma desconexão física e emocional com as pessoas. Parece que todos têm um 'manual de instruções' para interagir que você nunca recebeu.", opts: [
        { txt: "Eu estudo as interações obsessivamente. Analiso padrões de linguagem corporal e social para entender a mecânica que parece natural para os outros.", w: { Mage: 3, Seer: 2, Thief: 1 } },
        { txt: "Eu crio uma 'persona' social perfeita. Atuo o papel de amigo ideal ou líder carismático para compensar o vazio que sinto por dentro.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "Eu aceito minha posição de 'outsider' e deixo que as pessoas venham até mim nos meus termos, sem forçar uma intimidade que não existe.", w: { Heir: 3, Bard: 2, Rogue: 1 } },
        { txt: "Eu tento me tornar indispensável através de favores práticos. Se não consigo conectar emocionalmente, conecto através da utilidade.", w: { Maid: 3, Sylph: 2 } }
    ]},
    { t: "Você contraiu uma dívida financeira com um amigo. Ele diz 'pague quando puder', mas a tensão paira no ar.", opts: [
        { txt: "Trabalho obsessivamente para pagar o mais rápido possível. A sensação de dever algo a alguém é uma corrente que me asfixia.", w: { Knight: 3, Maid: 2, Prince: 1, Bard: -2 } },
        { txt: "Sinto que a dívida é injusta porque eu 'invisto' emocionalmente muito mais nessa amizade do que ele. A dívida é anulada pelo histórico.", w: { Thief: 3, Witch: 2, Prince: 1, Page: -1 } },
        { txt: "Sinto-me tão culpado que começo a evitar o amigo, deixando a vergonha corroer a amizade lentamente.", w: { Page: 3, Bard: 2, Rogue: 1, Sylph: -2 } },
        { txt: "Pago a dívida em 'favores' e serviços, integrando essa troca na dinâmica da nossa relação de forma natural.", w: { Heir: 3, Sylph: 2, Seer: 1, Knight: -1 } }
    ]},
    { t: "Dois amigos seus terminam um namoro de forma catastrófica. Ambos exigem que você escolha um lado.", opts: [
        { txt: "Recuso-me a escolher. Tento manter a ponte entre os dois, atuando como mediador, mesmo que ambos fiquem com raiva de mim.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
        { txt: "Escolho o lado com quem tenho mais afinidade, e corto o outro sem piedade.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -3 } },
        { txt: "Saio de perto dos dois. A instabilidade emocional deles é contagiosa e prefiro não ser arrastado para o drama.", w: { Prince: 3, Bard: 2, Mage: 1, Maid: -2 } },
        { txt: "Absorvo as reclamações de ambos, servindo de lixeira emocional para os dois lados, sem nunca dar minha própria opinião.", w: { Rogue: 3, Page: 2, Maid: 1, Thief: -2 } }
    ]},
    { t: "Você está sobrecarregado, mas um grupo que depende de você (seja sua família ou seus amigos) exige um sacrifício pessoal de tempo e saúde. O que você faz?", opts: [
        { txt: "Eu aceito, mas garanto que todos saibam o quanto estou me sacrificando. Depois dessa, ninguém pode questionar minha autoridade ou me negar favores", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -3 } },
        { txt: "Se eles não conseguem sobreviver sem me drenar, o problema é deles.", w: { Prince: 3, Bard: 2, Thief: 1, Maid: -3 } },
        { txt: "Eu ignoro meu cansaço e faço o que precisa ser feito. Se eu falhar, o sistema para de funcionar, e isso é inadmissível.", w: { Maid: 3, Knight: 2, Sylph: 1, Prince: -3 } },
        { txt: "Eu aceito o fardo, mas tento delegar partes dele para outros que estão menos exaustos, mesmo que eu não receba o crédito.", w: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } }
    ]},
    { t: "Você precisa usar um uniforme ridículo para o trabalho ou escola. Todos usam, mas você se sente humilhado.", opts: [
        { txt: "Customizo o uniforme, alterando detalhes para recuperar minha identidade. Posso ser parte do grupo, mas nos meus termos.", w: { Witch: 3, Thief: 2, Knight: 1, Maid: -2 } },
        { txt: "Uso o uniforme com orgulho irônico ou total dedicação. Ele é o símbolo do meu papel ali, e eu visto a camisa (literalmente).", w: { Maid: 3, Heir: 2, Page: 1, Prince: -3 } },
        { txt: "Sinto-me apagado. O uniforme mata quem eu sou e me torna apenas mais um número na engrenagem.", w: { Rogue: 3, Mage: 2, Bard: 1, Sylph: -1 } },
        { txt: "Recuso-me ou 'esqueço' de usar partes dele. Prefiro ser punido a me submeter a essa homogeneização forçada.", w: { Prince: 3, Bard: 2, Mage: 1, Heir: -2 } }
    ]},
    { t: "Você descobre que seus amigos mais próximos criaram um grupo de mensagens sem você para planejar algo.", opts: [
        { txt: "Sinto uma ansiedade paralisante por estar 'fora'. Fico obcecado em descobrir o que estão falando sem mim.", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -2 } }, 
        { txt: "Confronto o grupo com agressividade. Se a lealdade deles não é verdadeira, então esse vínculo está morto para mim e eu mesmo o encerro aqui.", w: { Prince: 3, Knight: 2, Sylph: -3, Maid: -2 } }, 
        { txt: "Aceito a exclusão em silêncio, sentindo que talvez eu seja o peso morto que eles precisam deixar para trás para que o grupo flua melhor.", w: { Rogue: 3, Page: 2, Heir: 1, Thief: -3 } }, 
        { txt: "Analiso friamente o comportamento deles. Se sentiram necessidade de me excluir, o grupo já falhou e eu apenas observo a queda.", w: { Seer: 3, Mage: 2, Bard: 1, Knight: -1 } }
    ]},       
    { t: "O grupo em que você está inserido está sem rumo e prestes a se fragmentar por falta de liderança. Como você reage?", opts: [
        { txt: "Sinto a dor como se fosse minha, fico enjoado e quase desmaio. A barreira entre meu corpo e o dele parece sumir.", w: { Thief: 3, Witch: 2, Prince: 1, Rogue: -3 } },
        { txt: "Eu me coloco à disposição para fazer o trabalho pesado. Não sei o que estou fazendo, mas quero que todos se sintam seguros.", w: { Knight: 3, Page: 2, Maid: 1, Seer: -1 } },
        { txt: "Eu tento redistribuir as tarefas. Se alguém está sobrecarregado, eu movo essa responsabilidade para quem está ocioso, buscando equilíbrio sem precisar ser o 'líder' oficial.", w: { Rogue: 3, Sylph: 2, Heir: 1, Thief: -3 } },
        { txt: "Deixo que se fragmente. Se o grupo não consegue se manter unido por conta própria, ele é fraco e merece acabar.", w: { Prince: 3, Bard: 2, Mage: 1, Maid: -3 } }
    ]}
    ],
    "Breath": [
    { t: "Um grupo está perdido em um deserto. Todos olham uns para os outros esperando um consenso ou um sinal. Não há ordens, apenas o silêncio sufocante da indecisão.", opts: [
        { txt: "Eu simplesmente começo a andar na direção que me parece mais aberta. Não peço que me sigam, mas meu passo é tão decidido que, quando percebo, o grupo inteiro está atrás de mim.", w: { Heir: 3, Witch: 2, Page: 1, Seer: -2 } },
        { txt: "Eu assumo a frente porque tenho pavor de que o grupo desista. Eu me esforço o dobro, fingindo que sei exatamente para onde vamos apenas para mantê-los em movimento.", w: { Knight: 3, Page: 2, Maid: 1, Heir: -2 } },
        { txt: "Sinto-me paralisado. Sem alguém para me dizer para onde ir, eu simplesmente sento e espero o fim ou um milagre.", w: { Page: 3, Bard: 2, Heir: -1, Thief: -3 } },
        { txt: "Não tenho paciência para reuniões. Escolho um caminho e vou embora rápido; quem quiser sobreviver que trate de acompanhar o meu ritmo.", w: { Thief: 3, Prince: 2, Witch: 1, Knight: -2 } }
    ]},
    { t: "Você sofreu um acidente e ficará confinado a uma cama, sem poder sair de casa, por seis meses. O isolamento físico é total.", opts: [
        { txt: "Não aceito ser deixado de lado. Uso cada ferramenta digital possível para garantir que eu continue sendo o centro das atenções e que nada aconteça lá fora sem o meu aval.", w: { Maid: 3, Thief: 3, Witch: 1, Page: -1 } },
        { txt: "Entro em uma depressão profunda. Sem movimento físico, sinto que minha existência perdeu a validade. Eu sou o que eu faço e onde estou.", w: { Knight: 3, Prince: 2, Heir: -1, Seer: -2 } },
        { txt: "Aproveito a pausa forçada. Encaro como uma liberdade das obrigações sociais. Finalmente posso 'flutuar' na minha própria mente sem culpa.", w: { Heir: 3, Sylph: 2, Mage: 1, Knight: -3 } },
        { txt: "Fico obcecado em monitorar a vida dos outros pelas redes sociais, vivendo vicariamente através da liberdade alheia que me foi roubada.", w: { Rogue: 3, Page: 2, Seer: 1, Bard: -1 } }
    ]},
    { t: "Em um grupo de amigos, percebem que você muda de personalidade dependendo de quem está por perto, como um camaleão, sem uma identidade fixa.", opts: [
        { txt: "Na verdade, eu faço o ambiente girar ao meu redor. Minha personalidade é tão forte que, não importa com quem eu esteja, acabo ditando o tom da conversa.", w: { Thief: 3, Prince: 2, Bard: 1, Page: -2 } },
        { txt: "Fico ofendido com a acusação e tento definir regras rígidas sobre quem eu sou, tornando-me teimoso e inflexível para provar que tenho substância.", w: { Prince: 3, Knight: 2, Heir: -3, Sylph: -1 } },
        { txt: "Vejo isso como uma qualidade natural. Não sou 'falso', sou fluido. Minha identidade não é uma pedra, é o vento que preenche o espaço disponível.", w: { Heir: 3, Sylph: 2, Rogue: 1, Prince: -2 } },
        { txt: "Sinto-me vazio. Percebo que não sei quem sou quando estou sozinho e uso as personalidades alheias como muleta para existir.", w: { Page: 3, Bard: 2, Knight: 1, Mage: -1 } }
    ]},
    { t: "Você está lidando com uma herança de família: uma casa abarrotada de objetos, memórias e tralhas acumuladas por gerações. O que você faz?", opts: [
        { txt: "Contrato uma caçamba e jogo tudo fora. Não tenho paciência para o peso do passado e quero ver o espaço vazio e limpo o mais rápido possível.", w: { Prince: 3, Bard: 2, Thief: 1, Maid: -2 } },
        { txt: "Passo meses catalogando cada item, tentando entender a história de cada objeto antes de decidir seu destino. O passado merece ser 'lido'.", w: { Seer: 3, Mage: 2, Page: 1, Thief: -2 } },
        { txt: "Distribuo tudo entre parentes e amigos. Alivio o meu fardo passando a responsabilidade material para os outros.", w: { Rogue: 3, Sylph: 2, Maid: 1, Prince: -1 } },
        { txt: "Mantenho a casa como está e vivo no meio da bagunça. A inércia é mais forte que a vontade de mudar o ambiente.", w: { Heir: 3, Page: 2, Knight: -2, Witch: -1 } }
    ]},
    { t: "Um projeto em que você trabalhou por meses foi cancelado abruptamente pela diretoria sem explicações claras. Sua reação:", opts: [
        { txt: "Sinto um alívio secreto. Eu já estava entediado e isso me liberta para perseguir algo novo sem ter que ser eu a pedir demissão.", w: { Heir: 3, Bard: 2, Rogue: 1, Knight: -2 } },
        { txt: "Começo a causar atritos propositais ou ironizar o consenso. Prefiro um clima pesado e honesto do que essa harmonia falsa onde ninguém pensa por si.", w: { Prince: 3, Witch: 2, Bard: 1, Heir: -3 } },
        { txt: "Trato de garantir o meu lado primeiro. Pego os melhores recursos, contatos ou créditos do projeto para meu uso pessoal antes que tudo afunde.", w: { Thief: 3, Mage: 2, Witch: 1, Page: -1 } },
        { txt: "Acabo absorvendo o jeito deles para não gerar conflito. Sinto um alívio em não ter que decidir nada sozinho.", w: { Page: 3, Knight: 2, Maid: 1, Mage: -1 } }
    ]},
     { t: "Você entra num grupo onde todos agem e pensam igual ao líder. Para se enturmar, você sente que precisa anular sua personalidade e entrar na onda", opts: [
        { txt: "Entro no jogo, mas para virar o jogo. Aos poucos, imponho minhas vontades até que o grupo esteja, na prática, seguindo as minhas regras e não as do líder.", w: { Thief: 3, Witch: 2, Prince: 1, Knight: -2 } },
        { txt: "Fico furioso com a falta de direção e incompetência. Tomo as rédeas para forçar o projeto a continuar de forma independente ou vingativa.", w: { Witch: 3, Maid: 2, Prince: 1, Page: -1 } },
        { txt: "Dou de ombros e sigo o fluxo. Se não era para ser, não era. Não gasto energia remando contra a maré.", w: { Sylph: 3, Mage: 2, Seer: 1, Prince: -3 } },
        { txt: "Sinto que falhei em proteger o trabalho. Culpo minha falta de habilidade em manter o projeto 'vivo' e relevante.", w: { Knight: 3, Page: 2, Seer: -1, Thief: -2 } }
    ]},
    { t: "Você presencia uma injustiça ocorrendo, mas intervir exigiria que você se expusesse publicamente e assumisse um lado, perdendo sua neutralidade.", opts: [
        { txt: "Eu entro no meio e resolvo a situação na força bruta se necessário. Não suporto ver alguém restringindo a liberdade alheia, então imponho a minha ordem.", w: { Thief: 3, Witch: 2, Prince: 1, Rogue: -2 } },
        { txt: "Fico de fora. Acredito que cada um é responsável pelo seu próprio caminho e interferir seria violar a autonomia das partes envolvidas.", w: { Bard: 3, Seer: 2, Heir: 1, Maid: -2 } },
        { txt: "Tomo a frente agressivamente. Uso minha voz para 'limpar o ar', mesmo que isso custe minha reputação. A verdade precisa circular.", w: { Maid: 3, Knight: 2, Witch: 1, Page: -1 } },
        { txt: "Tento mediar o conflito, ouvindo os dois lados e dissipando a tensão, agindo como um equalizador de pressões.", w: { Sylph: 3, Seer: 2, Heir: -1, Prince: -2 } }
    ]},
    { t: "Alguém muito próximo desaparece da sua vida sem dar explicações. Como você processa o vácuo deixado?", opts: [
        { txt: "Fico obcecado em descobrir o 'porquê'. Analiso cada interação passada buscando o momento onde o fio se partiu.", w: { Seer: 3, Mage: 2, Page: 1, Heir: -2 } },
        { txt: "Sinto raiva e decido que a pessoa 'morreu' para mim. Mato a memória dela na minha mente para não ter que lidar com a ausência.", w: { Prince: 3, Witch: 2, Thief: 1, Sylph: -2 } },
        { txt: "Aceito naturalmente. Pessoas vêm e vão, e tentar prender alguém é inútil. O espaço que ela deixou logo será preenchido.", w: { Heir: 3, Bard: 2, Rogue: 1, Knight: -2 } },
        { txt: "Preencho o vazio com atividades frenéticas ou novas pessoas. Não suporto o silêncio que a ausência dela deixou no meu dia a dia.", w: { Maid: 3, Knight: 2, Thief: -1, Mage: -1 } }
    ]},
     { t: "Você recebe uma oportunidade incrível em outro lugar, mas precisa partir amanhã levando apenas o que cabe nos bolsos e deixando para trás tudo o que construiu até agora.", opts: [
        { txt: "Vou sem olhar para trás. Itens e títulos são âncoras; sinto um alívio imenso em ser ninguém de novo e poder recomeçar onde o vento me levar.", w: { Heir: 3, Bard: 2, Rogue: 1, Knight: -3 } },
        { txt: "Eu vou, mas a ideia de perder o controle sobre o que deixei me corrói. Já perdi muito antes e odeio não ter uma base sólida para onde voltar se tudo der errado.", w: { Mage: 3, Knight: 2, Page: 1, Prince: -2 } },
        { txt: "Eu vou e levo o que me interessa. O que eu conquistei é meu, e se eu tiver que deixar algo para trás, garanto que não servirá para mais ninguém.", w: { Prince: 3, Thief: 2, Witch: 1, Maid: -2 } },
        { txt: "Hesito. Fico tentando encontrar um jeito de levar o máximo possível ou de garantir que as coisas fiquem esperando por mim, com medo de flutuar sem rumo.", w: { Maid: 3, Sylph: 2, Seer: 1, Heir: -2 } }
    ]},
    { t: "Você está em um ambiente onde todos concordam o tempo todo (uma câmara de eco). O consenso é absoluto, mas sufocante.", opts: [
        { txt: "Lanço uma opinião polêmica ou contraditória só para ver o circo pegar fogo. O caos é preferível a essa estagnação intelectual.", w: { Bard: 3, Thief: 2, Witch: 1, Seer: -1 } },
        { txt: "Tento guiar o grupo gentilmente para novas perspectivas, curando a cegueira coletiva sem quebrar a harmonia.", w: { Sylph: 3, Seer: 2, Maid: 1, Prince: -2 } },
        { txt: "Permaneço calado, observando a dinâmica. Sinto-me desconectado daquilo, como se estivesse assistindo a um filme ruim.", w: { Mage: 3, Page: 2, Rogue: 1, Knight: -1 } },
        { txt: "Torno-me o líder dessa concordância, usando a união do grupo para fortalecer nossa posição contra quem está de fora.", w: { Prince: 3, Knight: 2, Heir: -2, Bard: -3 } }
]}
],
};

function start() {
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
                    state.destructionScores[aspect] += 5;
                    console.log(`Destruição registrada em: ${aspect}`);
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

    for (let asp in state.aspectScores) {
        finalTotals[asp] = (state.aspectScores[asp] || 0) + (state.destructionScores[asp] || 0);
    }

    let sorted = Object.entries(finalTotals).sort((a, b) => b[1] - a[1]);
    state.dominantAspect = sorted[0][0];

    let score = state.aspectScores[state.dominantAspect] || 0;
    let dest = state.destructionScores[state.dominantAspect] || 0;
    
    state.highDestruction = (dest > score);

    if (state.highDestruction) {
        state.classScores.Prince += 3;
        state.classScores.Bard += 2;
    }

    let description = aspectSynopses[state.dominantAspect];
    let transitionText = state.highDestruction
        ? `Sua conexão com ${state.dominantAspect} é... complicada. Vamos ver como você interage com esse aspecto.`
        : `Passamos da primeira parte! Vamos ver como você interage com esse aspecto.`;

    render(`
        <div class="fade-in">
            <h1>ASPECTO: ${state.dominantAspect.toUpperCase()}</h1>
            <p>${description}</p>
            <p style="color: #00aa00;">${transitionText}</p>
            <button onclick="startClassPhase()">CONTINUAR PARA CLASSES</button>
        </div>
    `);
}

function startClassPhase() {
    state.stage = "class_quiz";
    state.questionCount = 0;
    state.currentQueue = questionsByAspect[state.dominantAspect] || [];
    renderQuestion(state.currentQueue[0]);
}

function finishClassPhase() {
    
    let sortedClasses = Object.entries(state.classScores).sort((a, b) => b[1] - a[1]);
    
    let sortedAspects = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);

    if (sortedClasses[0][1] <= 0) {
        renderNullEnding();
        return;
    }

    let topClass = sortedClasses[0][0];
    let topAspect = state.dominantAspect; 

    let classDesc = classSynopses[topClass] || "Dados corrompidos.";
    let aspectDesc = aspectSynopses[topAspect] || "Dados obscurecidos.";

    let top3Classes = sortedClasses.slice(0, 3);
    let top3Aspects = sortedAspects.slice(0, 3); 

    render(`
        <div class="result-box fade-in">
            <h1 style="font-size: 40px; text-shadow: 0 0 10px #00ff00;">${topClass.toUpperCase()} OF ${topAspect.toUpperCase()}</h1>
            <p style="font-size: 18px; color: #fff; margin-bottom: 20px;">Sua análise de Classpecto foi concluída.</p>
            
            <div style="text-align: left; margin: 20px 0; border: 1px solid #005500; padding: 20px; background: rgba(0,20,0,0.5);">
                
                <h3 style="color: #00ff00; font-size: 14px; margin-bottom: 5px;">O ASPECTO:</h3>
                <div id="aspect-display-area">
                    <p style="margin-bottom: 20px;">${aspectDesc}</p> 
                </div>
                
                <hr style="border: 0; border-top: 1px solid #005500; margin: 20px 0;">
                
                <h3 style="color: #00ff00; font-size: 14px; margin-bottom: 5px;">A CLASSE:</h3>
                <div id="class-display-area">
                    <p>${classDesc}</p>
                </div>

                <p style="margin-top: 25px; font-size: 0.9em; opacity: 0.8; border-top: 1px dashed #005500; padding-top: 15px;">
                    Ao confrontar a realidade do <strong>${topAspect}</strong>, você adotou a estratégia do <strong>${topClass}</strong>. 
                </p>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 25px 0;">
                
                <div class="top3-explorer" style="flex: 1; min-width: 250px; padding: 15px; border: 1px dashed #00ff00; background: rgba(0,40,0,0.3);">
                    <p style="color: #00ff00; font-weight: bold; margin-bottom: 10px; font-size: 14px;">EXPLORAR CLASSES:</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        ${top3Classes.map(item => `
                            <button class="top3-btn" onclick="updateClassView('${item[0]}')" style="padding: 6px 10px; font-size: 11px; background: #001100; border: 1px solid #00ff00; color: #00ff00; cursor: pointer; transition: 0.3s;">
                                ${item[0]} (${item[1]})
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="top3-explorer" style="flex: 1; min-width: 250px; padding: 15px; border: 1px dashed #00ff00; background: rgba(0,40,0,0.3);">
                    <p style="color: #00ff00; font-weight: bold; margin-bottom: 10px; font-size: 14px;">EXPLORAR ASPECTOS:</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        ${top3Aspects.map(item => `
                            <button class="top3-btn" onclick="updateAspectView('${item[0]}')" style="padding: 6px 10px; font-size: 11px; background: #001100; border: 1px solid #00ff00; color: #00ff00; cursor: pointer; transition: 0.3s;">
                                ${item[0]} (${item[1]})
                            </button>
                        `).join('')}
                    </div>
                </div>

            </div>
            
            <p style="font-style: italic; color: #88ff88; font-size: 14px;">Lembre-se: Esse teste não será suficiente para te definir. Você já tem um norte, recomendo ler e tirar suas conclusões.</p>
            
            <button onclick="location.reload()" style="margin-top:20px;">REINICIAR SESSÃO</button>
        </div>
    `);
}

window.updateClassView = function(className) {
    const displayArea = document.getElementById('class-display-area');
    if (displayArea) {
        displayArea.style.opacity = '0';
        setTimeout(() => {
            const newDesc = classSynopses[className] || "Descrição não encontrada.";
            displayArea.innerHTML = `<p>${newDesc}</p>`;
            displayArea.style.opacity = '1';
        }, 150);
    }
};

window.updateAspectView = function(aspectName) {
    const displayArea = document.getElementById('aspect-display-area');
    if (displayArea) {
        displayArea.style.opacity = '0';
        setTimeout(() => {
            const newDesc = aspectSynopses[aspectName] || "Descrição não encontrada.";
            displayArea.innerHTML = `<p>${newDesc}</p>`;
            displayArea.style.opacity = '1';
        }, 150);
    }
};

function renderNullEnding() {
    const html = `
        <div class="fade-in result-container" style="text-align: center; padding: 2rem;">
            <h1>TEM ALGO DE ERRADO AQUI.</h1>
            <p style="font-style: italic; opacity: 0.8;">[NADA OF NADA]</p>
            
            <div class="analysis-text" style="margin-top: 2rem;">
                <p>Você clicou, avançou e observou. Mas não escolheu absolutamente nada. Não sobrou nem classe, nem aspecto.</p>
                
                <p><strong>Você venceu, eu acho?</strong></p>
            </div>
            
            <button class="retry-button" onclick="location.reload()">Tente novamente.</button>
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
        dominantAspect: state.dominantAspect
    })));

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

window.onload = () => {
    render(`
        <div class="fade-in">
            <h1>TESTE DE CLASSPECT DO STREETCRUSH</h1>
            <p>Opa, SC aqui. Aquele do MEMO_BRASIL.</p>
            <p>Antes de tudo, vamos contextualizar sobre esse teste. Não fiz um simples "copia e cola" de testes que já existem, levei duas semanas mexendo (e um dia!) nesse projeto por um motivo. As perguntas e pontuações são baseadas no que aprendi com os textos de Dewdrop e Ouroborista, mas principalmente num coletivo de interpretações individuais e que discuti com meus amigos, GeraFTC, Star e Vozes de Anjos.</p>
            <p>Agora que tiramos isso do caminho e você confia nesse teste (eu espero), vamos cortar o papo e descobrir um pouco sobre você.</p>
            <button onclick="start()">Bora ver.</button>
        </div>
    `);
};














































