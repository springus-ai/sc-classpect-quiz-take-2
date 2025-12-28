let state = {
    stage: "intro",
    aspectScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    classScores: { Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Mage: 0, Seer: 0, Witch: 0, Heir: 0, Knight: 0, Page: 0, Maid: 0, Sylph: 0 },
    dominantAspect: "",
    questionCount: 0,
    currentQueue: []
};

let activeQuestion = null;

const aspectSynopses = {
    Time: "<strong>Tempo</strong> é o aspecto do Ritmo, do Fim e da Ação. Pragmáticos e focados na inevitabilidade, os Time-bound entendem que tudo tem um fim e que a luta e o conflito são necessários para o progresso.",
    Space: "<strong>Espaço</strong> é o aspecto da Criação, do Início e da Matéria. Os Space-bound focam no quadro geral, na paciência e na arte de 'deixar ser'. Eles lidam com o potencial latente e a localização física das coisas.",
    Void: "<strong>Vazio</strong> é o aspecto do Segredo, do Desconhecido e da Irrelevância. O Void-bound opera nas sombras, lidando com o potencial do que não existe ou não é visto.",
    Light: "<strong>Luz</strong> é o aspecto da Informação, Acaso e Relevância. O Light-bound busca iluminar o caminho, buscando conhecimento e foco, muitas vezes ignorando o que está nas sombras.",
    Mind: "<strong>Mente</strong> é o aspecto da Lógica, Decisão e Consequência. É a racionalização do mundo, focando em escolhas, fachadas e justiça. O Mind-bound vê o mundo como um sistema a ser entendido e navegado.",
    Heart: "<strong>Coração</strong> é o aspecto da Alma, Identidade e Emoção. Foca no 'Eu' interno, nos impulsos irracionais e na autenticidade. O Heart-bound é guiado por quem ele é, não pelo que faz sentido.",
    Rage: "<strong>Raiva</strong> é o aspecto da Verdade e do Ceticismo. É a rejeição das mentiras confortáveis e a força para derrubar sistemas falsos. O Rage-bound foca na realidade física e inegável.",
    Hope: "<strong>Esperança</strong> é o aspecto da Crença e do Poder Ilimitado. É a rejeição da realidade em favor do que 'deveria ser'. O Hope-bound molda o mundo através de pura convicção.",
    Doom: "<strong>Condenação</strong> é o aspecto das Regras, Sacrifício e Limitações. O Doom-bound entende que sistemas têm limites e que o sofrimento ou o fim são partes funcionais do todo.",
    Life: "<strong>Vida</strong> é o aspecto do Crescimento, Otimismo e Energia Bruta. É a força que quebra o asfalto. O Life-bound foca em curar, crescer e aumentar, às vezes sem controle.",
    Blood: "<strong>Sangue</strong> é o aspecto do Vínculo, Obrigação e Unidade. O oposto de Breath, foca nas correntes que nos unem, na lealdade e na responsabilidade para com o grupo.",
    Breath: "<strong>Suspiro</strong> é o aspecto da Liberdade, Direção e Desapego. O Breath-bound busca se soltar das amarras sociais e físicas, fluindo e mudando de direção conforme a necessidade."
};

const classSynopses = {
    Prince: "O <strong>Príncipe</strong> é uma classe ativa de destruição. Você destrói o seu aspecto ou destrói através dele. Frequentemente manifesta uma personalidade oposta ao seu aspecto, agindo com uma confiança rígida para eliminar o que considera fraco ou desnecessário.",
    Bard: "O <strong>Bardo</strong> é uma classe passiva de destruição. Você permite que o seu aspecto seja destruído ou convida a destruição através dele. É uma força caótica e imprevisível, muitas vezes agindo como um 'coringa' que altera o curso da narrativa de forma dramática.",
    Thief: "O <strong>Ladrão</strong> é uma classe ativa de apropriação. Você rouba o seu aspecto para benefício próprio. Movido por uma sensação de falta ou insegurança, você acumula a matéria-prima do universo para si, privando os outros dela para se sentir completo.",
    Rogue: "O <strong>Ladino</strong> é uma classe passiva de apropriação. Você rouba o seu aspecto para redistribuí-lo. Você lida com o excesso do aspecto movendo-o para onde ele é mais necessário, agindo como um mediador que evita o fardo de possuir o aspecto sozinho.",
    Knight: "O <strong>Cavaleiro</strong> é uma classe ativa de exploração. Você utiliza o seu aspecto como uma arma ou escudo. Escondendo inseguranças atrás de uma máscara de competência, você trabalha exaustivamente para compensar uma falta percebida na realidade.",
    Page: "O <strong>Escudeiro</strong> é uma classe passiva de exploração. Você provê o seu aspecto aos outros enquanto desenvolve seu próprio potencial latente. Sua jornada é longa e árdua, começando do zero para eventualmente se tornar uma fonte inesgotável de poder.",
    Maid: "A <strong>Dama</strong> é uma classe ativa de criação. Você se mantém através do seu aspecto ou o cria para si mesma. Começando muitas vezes em uma posição de servidão à sua realidade, você aprende a dominar as regras do seu aspecto para servir aos seus próprios objetivos.",
    Sylph: "A <strong>Silfide</strong> é uma classe passiva de criação. Você cura o seu aspecto ou cura através dele. Agindo como uma presença organizadora, você busca restaurar a integridade da realidade e dos seus aliados, muitas vezes de forma opinativa e insistente.",
    Witch: "A <strong>Bruxa</strong> é uma classe ativa de manipulação. Você altera o seu aspecto e as leis que o regem. Com uma natureza rebelde e criativa, você se recusa a aceitar a realidade como ela é, moldando as regras do jogo para que elas trabalhem a seu favor.",
    Heir: "O <strong>Herdeiro</strong> é uma classe passiva de manipulação. Você se torna o seu aspecto ou permite que ele te proteja. A realidade flui através de você de forma natural e instintiva, muitas vezes tornando-o um avatar vivo das forças que regem o seu destino.",
    Mage: "O <strong>Mago</strong> é uma classe ativa de conhecimento. Você conhece o seu aspecto através da experiência direta, muitas vezes sofrendo por causa dele. Esse conhecimento íntimo e doloroso permite que você navegue pela realidade com uma precisão que outros desconhecem.",
    Seer: "O <strong>Vidente</strong> é uma classe passiva de conhecimento. Você compreende o seu aspecto através da observação e do estudo das ramificações. Sua função é guiar os outros, enxergando o caminho mais favorável em meio ao caos das probabilidades."
};

// FASE 1: ASPECTO (MATÉRIA-PRIMA)
const aspectQuestions = [
    {
        t: "1. Diante de um impasse, qual verdade te incomoda mais?",
        opts: [
            { txt: "Que as coisas acabem e morram.", w: { Life: 1, Space: 2, Time: -1, Doom: -2 } }, 
            { txt: "Que nada mude ou evolua.", w: { Time: 2, Life: 3, Breath: 1, Space: -1, Void: -1 } }, 
            { txt: "Que as pessoas sejam falsas ou vazias.", w: { Heart: 3, Light: 2, Mind: -2, Void: -1 } }, 
            { txt: "Que a verdade seja cruel e inevitável.", w: { Hope: 3, Void: 2, Light: -1, Rage: -2 } }, 
            { txt: "Desde que seja a verdade, não me incomoda.", w: { Doom: 3, Rage: 2, Hope: -2, Life: -1 } } 
        ]
    },
    {
        t: "2. O que constitui a 'base' de uma experiência significativa?",
        opts: [
            { txt: "A conexão autêntica e a identidade pessoal.", w: { Blood: 3, Heart: 2, Mind: -1, Breath: -1 } },
            { txt: "A importância, o propósito e a verdade.", w: { Light: 3, Mind: 2, Void: -2, Rage: -1 } },
            { txt: "A liberdade e a aventura.", w: { Breath: 3, Life: 2, Blood: -2, Doom: -1 } },
            { txt: "O mistério, o potencial e o novo.", w: { Void: 3, Space: 2, Light: -2, Time: -1 } }
        ]
    },
    {
        t: "3. Você prefere uma mentira bonita ou uma verdade feia?",
        opts: [
            { txt: "A verdade feia. O mundo é o que é.", w: { Rage: 3, Light: 2, Doom: 1, Hope: -3, Breath: -1 } },
            { txt: "A mentira bonita. A crença pode alterar a realidade.", w: { Hope: 3, Breath: 2, Rage: -3, Light: -1 } },
            { txt: "Depende da utilidade dessa informação.", w: { Mind: 3, Time: 2, Heart: -2 } },
            { txt: "Depende de como isso afeta as pessoas.", w: { Blood: 3, Heart: 2, Mind: -1 } }
        ]
    },
    {
        t: "4. Qual conceito te dá mais medo?",
        opts: [
            { txt: "Falta de agência e Esquecimento.", w: { Mind: 3, Light: 2, Heart: -1, Void: -2 } },
            { txt: "Estagnação e Tédio.", w: { Time: 3, Breath: 2, Space: -1, Doom: -1 } },
            { txt: "Caos sem sentido e falta de propósito.", w: { Doom: 3, Space: 2, Life: -1, Rage: -1 } }, 
            { txt: "Inevitabilidade e a dura realidade.", w: { Hope: 3, Void: 2, Doom: -3, Time: -1 } }
        ]
    },
    {
        t: "5. O grupo está desmoronando e o plano falhou. Qual é a sua atitude imediata no meio do caos?",
        opts: [
            { txt: "Mediação. Eu engulo meu orgulho e faço as pessoas conversarem.", w: { Blood: 4, Rage: -2, Heart: -1 } },
            { txt: "Desapego. Improviso uma saída e sigo meu próprio ritmo.", w: { Breath: 4, Blood: -3, Doom: -1 } }, 
            { txt: "Triagem Fria. Corto o peso morto e foco puramente em sobreviver.", w: { Doom: 3, Life: 2, Hope: -2, Light: -1 } }, 
            { txt: "Direcionamento. Eu subo num caixote, grito as ordens e mostro o caminho.", w: { Light: 3, Space: 2, Void: -2 } } 
        ]
    },
    {
        t: "6. Pra ti, o universo é feito de quê?",
        opts: [
            { txt: "Histórias, acaso e conhecimento.", w: { Light: 4, Void: -3 } },
            { txt: "Convicção, fé e o que ainda não existe.", w: { Hope: 4, Rage: -3 } },
            { txt: "Matéria, criação e espaço físico.", w: { Space: 4, Time: -2 } },
            { txt: "Segredos, irrelevância e o que não vemos.", w: { Void: 4, Light: -3 } }
        ]
    },
    {
        t: "7. Como você lida com regras?",
        opts: [
            { txt: "Regras são necessárias e o sacrifício faz parte.", w: { Doom: 4, Life: -2, Breath: -2 } },
            { txt: "Regras existem para serem quebradas se impedirem o crescimento.", w: { Life: 4, Doom: -3 } },
            { txt: "Regras são ferramentas lógicas para otimizar resultados.", w: { Mind: 4, Heart: -2 } },
            { txt: "Regras são mentiras que contamos para nos sentir seguros.", w: { Rage: 4, Hope: -1 } }
        ]
    },
    {
        t: "8. O que te motiva a levantar da cama?",
        opts: [
            { txt: "O desejo de criar algo novo.", w: { Space: 4, Time: -1, Doom: -1 } },
            { txt: "A pura teimosia e o instinto de luta.", w: { Rage: 4, Hope: -1 } },
            { txt: "Minhas paixões, meus desejos e quem eu sou.", w: { Heart: 4, Blood: 2, Mind: -2 } },
            { txt: "A curiosidade de aprender algo novo.", w: { Light: 2, Mind: 2, Void: -2 } } 
        ]
    },
    {
        t: "9. A narrativa da sua vida contém uma falha trágica inevitável. Como você reage a isso?",
        opts: [
            { txt: "Rebeldia. Eu vou forçar um novo caminho na base da teimosia.", w: { Breath: 3, Life: 2, Doom: -3 } },
            { txt: "Resignação Melancólica. Eu aceito o fardo para entender o todo.", w: { Doom: 3, Time: 2, Life: -2, Breath: -1 } },
            { txt: "Negação Absoluta. Eu rejeito essa 'realidade' falha e imponho a minha própria fé.", w: { Hope: 4, Rage: -2, Light: -1 } },
            { txt: "Desconstrução. Eu racionalizo a falha e tento destrinchar sua consequências.", w: { Rage: 3, Mind: 2, Hope: -2 } } 
        ]
    },
    {
        t: "10. Diante de uma decisão impossível, no que você confia cegamente?",
        opts: [
            { txt: "Na Lógica. Se a matemática não fecha, a decisão está errada.", w: { Mind: 4, Heart: -3 } },
            { txt: "No Instinto. Eu sinto o perigo ou a oportunidade antes de poder explicá-la.", w: { Heart: 4, Mind: -3 } }, 
            { txt: "Na Prática. Pensar não resolve; testar, errar e consertar na prática resolve.", w: { Time: 3, Space: 2, Void: -1 } },
            { txt: "Na Visão. Eu confio no que vejo (ou no que imagino que pode ser visto).", w: { Light: 4, Void: -3 } },
            { txt: "Nos Outros. Eu confio nas pessoas ao redor para me guiar.", w: { Blood: 4, Breath: -3 } } 
        ]
    },
    {
        t: "11. Você está diante de uma porta escura de onde emanam sussurros. O que você sente?",
        opts: [
            { txt: "Necessidade compulsiva de acender uma luz e expor o que está lá dentro.", w: { Light: 3, Rage: 2, Void: -3 } },
            { txt: "Um conforto estranho. O escuro é um manto onde posso ser eu mesmo.", w: { Void: 3, Space: 2, Light: -3 } },
            { txt: "Um peso no peito. Sinto que o que está lá dentro é o meu fim, e eu aceito.", w: { Doom: 3, Time: 2, Life: -2 } },
            { txt: "Uma ressonância. Sinto que aquilo está chamando minha alma diretamente.", w: { Heart: 3, Blood: 2, Mind: -1 } },
            { txt: "Um receio. Sinto apreensão em descobrir o que está do outro lado.", w: { Life: 3, Mind: 2, Doom: -1 } } 
        ]
    },
    {
        t: "12. Qual é a armadilha psicológica na qual você constantemente cai?",
        opts: [
            { txt: "Pensar Demais. Considero tantos caminhos que nunca escolho um.", w: { Mind: 4, Heart: -1 } },
            { txt: "Visão de Túnel. Foco tanto no que está errado que não enxergo o todo.", w: { Rage: 3, Time: 2, Hope: -2 } },
            { txt: "Escapismo. Prefiro viver no potencial do 'que poderia ser' do que lidar com o 'que é'.", w: { Hope: 3, Void: 2, Rage: -1, Light: -1 } },
            { txt: "Desconexão. Eu me solto tanto das obrigações que flutuo para longe do que importa.", w: { Breath: 3, Space: 2, Blood: -3 } }
        ]
    },
    {
        t: "13. Para criar um universo perfeito, algo deve ser sacrificado.",
        opts: [
            { txt: "Eliminar a Morte. Ninguém morre por causas naturais.", w: { Life: 4, Blood: 1, Doom: -4, Time: -2 } },  
            { txt: "Eliminar o Acaso. Ninguém nunca errará, a vida é um roteiro fixo.", w: { Doom: 3, Time: 2, Breath: -2, Life: -1 } }, 
            { txt: "Eliminar o Segredo. Toda a verdade é acessível a todos.", w: { Light: 4, Void: -4 } }, 
            { txt: "Não alteraria nada, pois a perfeição não existe.", w: { Rage: 4, Hope: -3 } }, 
            { txt: "Não alteraria nada, pois a imperfeição faz parte do mundo.", w: { Space: 3, Blood: 2, Time: -1 } } 
        ]
    },
    {
        t: "14. O que é a 'Verdade' para você?",
        opts: [
            { txt: "É o que eu sinto no fundo da minha alma.", w: { Heart: 4, Mind: -2 } },
            { txt: "É a realidade física cruel que sobra quando paramos de fingir.", w: { Rage: 3, Doom: 2, Hope: -3 } },
            { txt: "É algo que nunca saberemos totalmente, e isso é fascinante.", w: { Void: 4, Light: -2 } },
            { txt: "É uma estrutura lógica construída por fatos e consequências.", w: { Mind: 4, Heart: -2 } }
        ]
    },
    {
        t: "15. Você foi preso em uma torre. Qual é seu primeiro pensamento?",
        opts: [
            { txt: "Vou pular da janela. Prefiro morrer livre a viver enjaulado.", w: { Breath: 4, Blood: -2, Doom: -2 } },
            { txt: "Quem está preso comigo? Precisamos nos unir para sobreviver.", w: { Blood: 4, Breath: -2, Rage: -1 } },
            { txt: "Quem me prendeu? Se for para cair, vou levá-lo comigo.", w: { Rage: 4, Hope: -1, Life: -1 } }, 
            { txt: "Quais dados eu tenho? Vou esperar o momento certo para agir.", w: { Time: 3, Mind: 2, Rage: -1 } },
            { txt: "Isso era inevitável. Vou estudar minha cela e entender meus limites.", w: { Doom: 3, Space: 2, Hope: -2 } }
        ]
    },
    {
        t: "16. O conflito é iminente. Qual é o seu recurso final?",
        opts: [
            { txt: "Desgaste. Eu não preciso vencer agora, só preciso durar mais que você.", w: { Time: 3, Life: 2, Space: -1 } }, 
            { txt: "Malícia. Vou usar seus pontos fracos contra você.", w: { Light: 3, Mind: 2, Hope: -1 } }, 
            { txt: "Força Vital Incontida. Eu vou me recuperar mais rápido do que você pode me ferir.", w: { Life: 3, Hope: 2, Doom: -2 } }, 
            { txt: "Fúria Descompassada. Eu vou te machucar e desestabilizar sua confiança.", w: { Rage: 4, Blood: -1 } } ,
            { txt: "Resignação. Eu vou me fechar e, quando você menos esperar, voltarei.", w: { Void: 3, Doom: 2, Light: -2 } } 
        ]
    },
    {
        t: "17. O que define seu modo de agir e pensar?",
        opts: [
            { txt: "Movimento. Eu não sou um ponto fixo; sou a mudança.", w: { Breath: 4, Blood: -2 } }, 
            { txt: "Potencial. Eu sou o espaço negativo onde algo novo pode surgir.", w: { Void: 4, Light: -2 } }, 
            { txt: "Consciência. Eu sou uma sequência de escolhas lógicas e observações.", w: { Mind: 4, Heart: -2 } }, 
            { txt: "Vínculo. Eu sou feito das promessas e conexões que mantenho.", w: { Blood: 4, Breath: -2 } } 
        ]
    },
    {
        t: "18. Para que um grupo prospere de verdade, o que deve ser priorizado?",
        opts: [
            { txt: "Recursos e Espaço. Sem a base material, ideias não valem nada.", w: { Space: 4, Time: -1 } }, 
            { txt: "Otimismo e Convicção. Precisamos acreditar em algo maior.", w: { Hope: 4, Rage: -2, Doom: -1 } }, 
            { txt: "Ordem e Consequência. Regras claras impedem que o caos nos consuma.", w: { Doom: 4, Life: -2, Breath: -1 } },
            { txt: "Inovação e Adaptabilidade. O antigo deve dar espaço ao novo.", w: { Life: 3, Breath: 2, Time: -1 } },
            { txt: "Identidade e Paixão. O grupo serve para o indivíduo expressar quem é.", w: { Heart: 4, Mind: -2 } } 
        ]
    },
    {
        t: "19. Quando a inércia toma conta, qual é a única coisa capaz de te fazer agir?",
        opts: [
            { txt: "A Obrigação ou a Necessidade.", w: { Blood: 3, Doom: 2, Breath: -2 } }, 
            { txt: "A Inspiração ou o Impulso.", w: { Heart: 3, Breath: 2, Mind: -2 } }, 
            { txt: "O Planejamento ou a Lógica.", w: { Mind: 4, Rage: -1 } },
            { txt: "A Possibilidade ou o Espaço.", w: { Space: 4, Time: -1 } }
        ]
    },
    {
        t: "20. Qual é o princípio operante do universo?",
        opts: [
            { txt: "Mecânica. O universo é um relógio de causas, efeitos e entropia.", w: { Time: 3, Doom: 2, Life: -1 } },
            { txt: "Narrativa. O universo é uma história feita de conhecimento e sorte.", w: { Light: 4, Void: -2 } },
            { txt: "Vitalidade. O universo é um organismo caótico, pulsante e livre.", w: { Life: 4, Doom: -2 } },
            { txt: "Convicção. O universo é uma projeção do que acreditamos.", w: { Hope: 4, Rage: -2 } }
        ]
    },
];

// FASE 2: CLASSES (REPOSTA À REALIDADE)
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
        { t: "Alguém te pede um favor que vai ocupar todas as horas do seu único dia de descanso na semana.", opts: [
            { txt: "Digo não prontamente. O meu tempo livre é o limite que estabeleço para não ser consumido pelas demandas externas.", w: { Prince: 3, Knight: 2, Thief: 2, Sylph: -3 } },
            { txt: "Cedo o tempo por pressão, mas passo o dia sentindo que estou sendo drenado e perdendo minha própria vida.", w: { Rogue: 3, Page: 2, Maid: 1, Witch: -2 } },
            { txt: "Ajudo da maneira mais rápida possível. Uso todo o meu conhecimento para terminar a tarefa na metade do tempo previsto.", w: { Witch: 3, Maid: 2, Mage: 2, Knight: -1 } },
            { txt: "Aceito o favor como parte do dia. Se o tempo deve ser gasto assim, eu me adapto e encontro satisfação no processo.", w: { Heir: 3, Sylph: 2, Seer: 1, Prince: -3 } }
        ]},
        { t: "Você encontra uma ampulheta antiga que dizem poder desacelerar a percepção do tempo. O que você faz?", opts: [
            { txt: "Uso para prolongar meus momentos de prazer ou descanso, sem me importar com o resto do mundo.", w: { Thief: 3, Witch: 2, Rogue: -2, Heir: -1 } },
            { txt: "Uso para ter mais tempo de estudar e compreender a estrutura da realidade.", w: { Mage: 3, Seer: 3, Page: 1, Prince: -2 } },
            { txt: "Quebro a ampulheta. Ninguém deveria ter o poder de mexer no fluxo natural das coisas.", w: { Prince: 3, Bard: 2, Knight: 1, Witch: -3 } },
            { txt: "Uso para dar mais tempo de vida ou de reação para quem está em perigo.", w: { Sylph: 3, Rogue: 2, Maid: 1, Thief: -2 } }
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
            { txt: "Fico em um canto me sentindo pequeno. Observo as interações como uma ciência que ainda não domino.", w: { Page: 3, Mage: 3, Seer: 2, Prince: -2 } },
            { txt: "A festa é um sumidouro de espaço. Julgo a estagnação física das pessoas e quero que acabe.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -2 } },
            { txt: "Tento me 'enfiar' em conversas alheias para não ser excluído do fluxo do ambiente.", w: { Thief: 3, Rogue: 2, Prince: -2, Seer: -1 } },
            { txt: "Circulo livremente, sem me prender, sentindo a 'vibe' do lugar sem pressão.", w: { Heir: 3, Bard: 2, Knight: -2, Maid: -1 } }
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
        { t: "Ao descobrir que um ídolo cometeu um ato vergonhoso, o que você faz?", opts: [
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
            { txt: "Minto se isso mantiver a paz ou minha esperança; a verdade bruta é destrutiva.", w: { Bard: 3, Prince: 2, Knight: -3, Maid: -2 } },
            { txt: "Sou honesto de forma agressiva, punindo quem me forçou a escolher.", w: { Knight: 3, Page: 3, Maid: 2, Thief: 2 } },
            { txt: "Minto se isso for ajudar mais pessoas, manipulando a verdade por um bem maior.", w: { Sylph: 3, Rogue: 3, Witch: 3, Prince: -2 } }
        ]}
    ],
    "Light": [
        { t: "Você faz parte de uma equipe bem-sucedida, mas apenas uma pessoa será o rosto público disso.", opts: [
            { txt: "Certifico-me de que minha contribuição seja a mais visível; controlo a narrativa.", w: { Thief: 3, Witch: 2, Maid: 2, Prince: -3 } },
            { txt: "Apago minha participação e fico fora dos holofotes; a atenção é um ruído.", w: { Prince: 3, Bard: 2, Thief: -3, Page: -2 } },
            { txt: "Destaco quem menos apareceu, garantindo que a luz seja dividida.", w: { Rogue: 3, Sylph: 3, Thief: -3, Maid: -1 } },
            { txt: "Não forço nada. Se as pessoas notarem meu valor, que seja pela sorte.", w: { Heir: 3, Seer: 2, Knight: -2, Witch: -1 } }
        ]},
        { t: "Você descobre uma verdade comprometedora sobre alguém influente. O que faz?", opts: [
            { txt: "Analiso cada detalhe dessa informação e como ela se conecta ao todo.", w: { Mage: 3, Seer: 3, Bard: -2, Prince: -1 } },
            { txt: "Guardo esse conhecimento como uma arma estratégica para me proteger.", w: { Knight: 3, Thief: 2, Sylph: -2, Rogue: -2 } },
            { txt: "Destruo as evidências. Algumas verdades são inúteis e só complicam as coisas.", w: { Prince: 3, Bard: 2, Seer: -3, Mage: -2 } },
            { txt: "Compartilho com os afetados para restaurar a clareza e a justiça.", w: { Sylph: 3, Rogue: 3, Thief: -3, Prince: -1 } }
        ]},
        { t: "Em uma crise onde o sucesso depende puramente de sorte, qual sua postura?", opts: [
            { txt: "Confio que a sorte estará ao meu lado naturalmente.", w: { Heir: 3, Bard: 3, Knight: -3, Mage: -2 } },
            { txt: "Tento influenciar quem decide para forçar o resultado para o meu lado.", w: { Witch: 3, Thief: 3, Heir: -2, Seer: -2 } },
            { txt: "Trabalho exaustivamente para compensar qualquer falta de sorte com esforço.", w: { Knight: 3, Maid: 3, Page: 2, Heir: -3 } },
            { txt: "Obsedo-me em calcular cada variável para prever o desfecho.", w: { Seer: 3, Mage: 3, Heir: -2, Bard: -1 } }
        ]},
        { t: "Um erro pessoal seu é exposto publicamente. Como reage?", opts: [
            { txt: "Decido que a opinião alheia não tem valor e sigo como se nada tivesse ocorrido.", w: { Prince: 3, Bard: 2, Knight: -3, Page: -2 } },
            { txt: "Assumo a falha e trabalho para corrigir os fatos e minha imagem.", w: { Maid: 3, Sylph: 2, Prince: -2, Bard: -1 } },
            { txt: "Uso a vergonha para estudar onde errei e nunca mais ser ignorante.", w: { Page: 3, Knight: 3, Heir: -2, Bard: -1 } },
            { txt: "Desvio o foco para outro assunto mais relevante, diluindo a atenção.", w: { Thief: 3, Rogue: 3, Mage: -2, Seer: -1 } }
        ]},
        { t: "Você percebe que um projeto seu está perdendo a relevância. O que faz?", opts: [
            { txt: "Crio um fato novo ou exagero a importância para ele voltar ao centro.", w: { Thief: 3, Witch: 3, Prince: -3, Rogue: -2 } },
            { txt: "Deixo que morra. Prefiro o esquecimento do que vê-lo definhar sem luz.", w: { Prince: 3, Bard: 2, Maid: -3, Sylph: -2 } },
            { txt: "Reformulo o projeto com novas informações para torná-lo útil novamente.", w: { Sylph: 3, Maid: 3, Prince: -2, Bard: -1 } },
            { txt: "Aceito o ciclo. Deixo que meu interesse mude conforme o fluxo das coisas.", w: { Heir: 3, Seer: 3, Thief: -2, Witch: -1 } }
        ]},
        { t: "Como você lida com a necessidade de ser validado pelos outros?", opts: [
            { txt: "Preciso provar meu valor constantemente para ser notado.", w: { Knight: 3, Page: 3, Maid: 2, Prince: -3 } },
            { txt: "Sinto-me agredido pela atenção; prefiro o anonimato absoluto.", w: { Prince: 3, Bard: 2, Thief: -3, Page: -2 } },
            { txt: "Redireciono o mérito para o grupo; detesto ser o foco sozinho.", w: { Rogue: 3, Sylph: 3, Thief: -2, Knight: -1 } },
            { txt: "Uso minha imagem apenas como ferramenta para conseguir o que quero.", w: { Witch: 3, Thief: 3, Page: -2, Knight: -2 } }
        ]},
        { t: "Ao se deparar com várias versões de uma mesma história, como decide?", opts: [
            { txt: "Busco a versão factual e lógica, por mais nua e crua que seja.", w: { Seer: 3, Mage: 3, Witch: -3, Thief: -2 } },
            { txt: "Escolho a versão que melhor serve aos meus objetivos estratégicos.", w: { Witch: 3, Thief: 3, Seer: -3, Mage: -2 } },
            { txt: "Acredito que não existe verdade absoluta; deixo o tempo revelar o peso.", w: { Heir: 3, Bard: 3, Knight: -3, Maid: -2 } },
            { txt: "Adoto a versão que exige mais responsabilidade e ação da minha parte.", w: { Knight: 3, Page: 2, Bard: -2, Heir: -1 } }
        ]},
        { t: "Em uma situação tensa, a transparência total está causando conflitos.", opts: [
            { txt: "A clareza é a única cura. Tudo deve ser exposto agora.", w: { Sylph: 3, Seer: 3, Prince: -3, Bard: -2 } },
            { txt: "Algumas coisas devem permanecer no escuro para proteção.", w: { Prince: 3, Bard: 3, Sylph: -3, Seer: -2 } },
            { txt: "Organizo as informações e revelo apenas o necessário para a ordem.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
            { txt: "Compartilho a verdade de forma diluída entre todos os envolvidos.", w: { Rogue: 3, Heir: 2, Thief: -2, Witch: -1 } }
        ]}
    ],
    "Mind": [
        { t: "Um plano lógico prejudicará injustamente um indivíduo. Como reage?", opts: [
            { txt: "Sigo o plano. A eficiência do sistema é prioridade sobre sentimentos.", w: { Maid: 3, Knight: 3, Prince: -3, Bard: -2 } },
            { txt: "Saboto o plano. Não tolero que a lógica fria esmague o que sinto ser correto.", w: { Prince: 3, Bard: 3, Witch: -2, Sylph: -1 } },
            { txt: "Analiso e busco uma brecha técnica para proteger o indivíduo sem invalidar o todo.", w: { Seer: 3, Mage: 3, Sylph: 2, Thief: -1 } },
            { txt: "Exponho a falha moral e retiro minha responsabilidade sobre o dano.", w: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
        ]},
        { t: "Você percebe as máscaras sociais em um jantar formal. Qual sua postura?", opts: [
            { txt: "Sinto um cansaço profundo. Ver a mecânica das aparências tira a cor da vida.", w: { Mage: 3, Page: 3, Seer: 2, Prince: -2 } },
            { txt: "Polio minha própria máscara. Uso o protocolo como armadura impenetrável.", w: { Knight: 3, Maid: 2, Bard: 1, Rogue: -2 } },
            { txt: "Intervenho para testar até onde as pessoas sustentam seus personagens.", w: { Witch: 3, Thief: 3, Heir: -2, Sylph: -1 } },
            { txt: "Observo em silêncio para entender quem detém o poder real de decisão.", w: { Seer: 3, Heir: 2, Thief: -3, Knight: -1 } }
        ]},
        { t: "Um erro grave de um colega faz a culpa cair no grupo todo.", opts: [
            { txt: "Uso a falha dele para demonstrar minha competência e me fortalecer.", w: { Thief: 3, Prince: 3, Knight: -2, Rogue: -2 } },
            { txt: "Assumo parte da culpa para redistribuir o peso e salvar o colega.", w: { Rogue: 3, Sylph: 3, Heir: 1, Prince: -3 } },
            { txt: "Trabalho dobrado nos bastidores para consertar o erro e restaurar a ordem.", w: { Maid: 3, Page: 2, Witch: -1, Bard: -1 } },
            { txt: "Analiso como o erro aconteceu para garantir que os padrões de decisão mudem.", w: { Mage: 3, Seer: 3, Knight: 1, Prince: -2 } }
        ]},
        { t: "Ao planejar algo importante, qual seu processo mental predominante?", opts: [
            { txt: "Crio planos de contingência para cada falha. Preciso prever as consequências.", w: { Maid: 3, Mage: 3, Knight: -2, Heir: -1 } },
            { txt: "Confio no instinto. A lógica das coisas se resolve sozinha se eu seguir o coração.", w: { Prince: 3, Bard: 3, Maid: -3, Seer: -2 } },
            { txt: "Busco conselhos e sintetizo as visões em uma estratégia justa.", w: { Sylph: 3, Page: 3, Thief: -2, Witch: -1 } },
            { txt: "Procuro atalhos para obter o melhor resultado com o menor esforço lógico.", w: { Thief: 3, Witch: 3, Rogue: -2, Knight: -1 } }
        ]},
        { t: "Dois amigos pedem sua mediação em um conflito intelectual acirrado.", opts: [
            { txt: "Desmonto os argumentos de ambos e forço uma conclusão neutra.", w: { Witch: 3, Knight: 3, Prince: 2, Sylph: -2 } },
            { txt: "Escuto ambos para que entendam a lógica um do outro e curem a divisão.", w: { Sylph: 3, Rogue: 3, Seer: 2, Thief: -2 } },
            { txt: "Fico sobrecarregado. Vejo tanta validade em ambos que não consigo decidir.", w: { Page: 3, Bard: 2, Mage: 1, Maid: -2 } },
            { txt: "Uso a tensão para introduzir variáveis e mudar o foco da briga.", w: { Heir: 3, Thief: 2, Page: -2, Seer: -1 } }
        ]},
        { t: "Você descobre uma informação confidencial sobre um líder.", opts: [
            { txt: "Guardo a informação. Revelá-la sem um plano causaria caos desnecessário.", w: { Maid: 3, Knight: 3, Seer: 1, Bard: -2 } },
            { txt: "Compartilho com os afetados. Todos devem tomar suas próprias decisões.", w: { Rogue: 3, Sylph: 3, Heir: 2, Prince: -2 } },
            { txt: "Uso o segredo como moeda de troca para implementar minhas próprias ideias.", w: { Thief: 3, Prince: 3, Page: -3, Rogue: -2 } },
            { txt: "Sinto o peso disso como um fardo; saber me torna responsável pelo futuro.", w: { Mage: 3, Seer: 3, Knight: -1, Witch: -1 } }
        ]},
        { t: "Você sente que sua vida atual é uma farsa e que desempenha um papel.", opts: [
            { txt: "Dobro a aposta. Vou polir essa máscara até ser indistinguível da realidade.", w: { Knight: 3, Page: 3, Maid: 2, Prince: -2 } },
            { txt: "Abandono tudo. Prefiro o vazio ao peso de uma lógica que não é minha.", w: { Prince: 3, Bard: 3, Heir: -2, Seer: -2 } },
            { txt: "Analiso meticulosamente as escolhas passadas para recalcular a rota.", w: { Mage: 3, Seer: 3, Knight: -2, Page: -1 } },
            { txt: "Deixo que o tempo e as circunstâncias definam quem eu devo ser.", w: { Heir: 3, Rogue: 2, Witch: -3, Maid: -1 } }
        ]},
        { t: "Em um jogo de estratégia contra um oponente inteligente, qual sua força?", opts: [
            { txt: "Antecipar movimentos. Jogo contra a mente dele, prevendo decisões.", w: { Seer: 3, Mage: 3, Witch: 2, Page: -1 } },
            { txt: "Disciplina. Sigo as regras à risca, vencendo pela ausência de erros.", w: { Maid: 3, Knight: 3, Page: 2, Bard: -3 } },
            { txt: "Subversão. Faço jogadas caóticas para quebrar o padrão dele.", w: { Prince: 3, Bard: 3, Thief: -2, Seer: -2 } },
            { txt: "Usar a própria estratégia do oponente contra ele, tomando a vantagem.", w: { Thief: 3, Rogue: 3, Heir: 2, Knight: -1 } }
        ]}
    ],
    "Heart": [
        { t: "Você percebe que age diferente dependendo do grupo. Como se sente?", opts: [
            { txt: "Sinto-me uma fraude. Destruo essas máscaras em busca de uma identidade única.", w: { Prince: 3, Bard: 2, Mage: 2, Heir: -2 } },
            { txt: "É uma ferramenta. Manipulo quem sou para obter a melhor reação de cada um.", w: { Witch: 3, Thief: 3, Page: 1, Seer: -2 } },
            { txt: "Sinto que me perco. Absorvo a personalidade alheia e esqueço a minha.", w: { Rogue: 3, Maid: 2, Sylph: 2, Prince: -2 } },
            { txt: "É natural. Fluo entre identidades sem conflito; todas são partes de mim.", w: { Heir: 3, Knight: 2, Bard: 2, Mage: -1 } }
        ]},
        { t: "Amigo em crise emocional intensa. Qual seu instinto?", opts: [
            { txt: "Analiso a raiz psicológica para guiá-lo para fora do labirinto mental.", w: { Seer: 3, Mage: 3, Sylph: 1, Heir: -1 } },
            { txt: "Desconforto imenso. Ofereço uma solução prática e brutal para acabar com o drama.", w: { Prince: 3, Bard: 2, Sylph: -3, Rogue: -2 } },
            { txt: "Tomo as dores para mim. Uso meu carisma para desviar o foco da dor dele.", w: { Knight: 3, Maid: 2, Page: 2, Prince: -2 } },
            { txt: "Intervenho para mudar o humor dele, forçando uma nova emoção no ambiente.", w: { Witch: 3, Sylph: 3, Thief: 1, Bard: -2 } }
        ]},
        { t: "Tomar uma decisão lógica que vai contra seus desejos pessoais.", opts: [
            { txt: "Ignoro meus sentimentos. Anulo meu desejo em prol do resultado perfeito.", w: { Prince: 3, Knight: 3, Witch: -1, Heir: -3 } },
            { txt: "Sigo meus desejos. Minha vontade é a prioridade absoluta acima da lógica.", w: { Thief: 3, Mage: 2, Rogue: -3, Prince: -2 } },
            { txt: "Tento servir ao propósito maior sem me sentir vazio, mas geralmente cedo.", w: { Maid: 3, Page: 2, Rogue: 2, Thief: -3 } },
            { txt: "Analiso a origem do desejo para saber se ele é genuíno antes de agir.", w: { Mage: 3, Seer: 3, Heir: 1, Prince: -1 } }
        ]},
        { t: "Alguém critica algo que você ama profundamente.", opts: [
            { txt: "Ataco o gosto da pessoa imediatamente. Ninguém questiona o que me define.", w: { Thief: 3, Knight: 2, Witch: 2, Rogue: -2 } },
            { txt: "Finjo que não me importo para evitar que vejam minha vulnerabilidade.", w: { Knight: 3, Prince: 3, Page: 2, Maid: -1 } },
            { txt: "Questiono se eu deveria gostar daquilo; a opinião externa abala minha conexão.", w: { Rogue: 3, Maid: 2, Page: 2, Heir: -1 } },
            { txt: "Não me abala. Minha conexão é interna e não requer validação.", w: { Heir: 3, Sylph: 2, Seer: 2, Knight: -2 } }
        ]},
        { t: "Você se sente mal compreendido pelas pessoas?", opts: [
            { txt: "Sim, porque escondo quem sou através de personas eficientes.", w: { Prince: 3, Knight: 3, Witch: 2, Sylph: -2 } },
            { txt: "Sim, sinto um potencial interno que ainda não consegui expressar.", w: { Page: 3, Maid: 3, Heir: 1, Thief: -2 } },
            { txt: "Não, imponho minha personalidade e garanto que saibam quem sou.", w: { Thief: 3, Witch: 3, Mage: -1, Rogue: -3 } },
            { txt: "Às vezes, mas uso isso para observar os outros sem ser notado.", w: { Mage: 3, Seer: 3, Rogue: 2, Heir: -1 } }
        ]},
        { t: "Como enxerga sua evolução pessoal no passado?", opts: [
            { txt: "Com vergonha. Tento ativamente apagar quem eu fui; era uma versão falha.", w: { Prince: 3, Bard: 2, Knight: 2, Sylph: -3 } },
            { txt: "Com carinho. Tento 'curar' as memórias e aceitá-las como parte de mim.", w: { Sylph: 3, Heir: 3, Mage: 1, Prince: -3 } },
            { txt: "Como recurso. O que passei me deu 'armas' emocionais para hoje.", w: { Knight: 3, Witch: 2, Thief: 2, Page: -1 } },
            { txt: "Como um quebra-cabeça. Analiso causas e efeitos para prever quem serei.", w: { Seer: 3, Mage: 3, Heir: -1, Bard: -1 } }
        ]},
        { t: "Qual seu maior medo em um relacionamento?", opts: [
            { txt: "Perder minha individualidade e ser absorvido pelo outro.", w: { Thief: 3, Prince: 3, Mage: 2, Rogue: -3 } },
            { txt: "Não ser o suficiente; sinto que devo servir para justificar minha presença.", w: { Maid: 3, Page: 3, Knight: 2, Thief: -2 } },
            { txt: "Vulnerabilidade real. Pavor de deixar alguém ver minhas falhas sem filtros.", w: { Knight: 3, Prince: 3, Witch: 1, Heir: -2 } },
            { txt: "Não conseguir ajudar; ver o outro sofrendo e não poder 'consertá-lo'.", w: { Sylph: 3, Rogue: 3, Seer: 2, Bard: -2 } }
        ]},
        { t: "Instinto forte contra dados lógicos. O que faz?", opts: [
            { txt: "Sigo os dados. Destruo a dúvida interna irracional.", w: { Prince: 3, Mage: 2, Seer: 1, Heir: -3 } },
            { txt: "Sigo o instinto. Deixo-me levar pelo que sinto ser a verdade da alma.", w: { Heir: 3, Bard: 3, Sylph: 2, Prince: -3 } },
            { txt: "Uso o instinto para manipular as variáveis e garantir meu favor.", w: { Witch: 3, Thief: 3, Knight: 1, Page: -1 } },
            { txt: "Tento traduzir o instinto em lógica até encontrar validação racional.", w: { Mage: 3, Seer: 3, Page: -1, Bard: -2 } }
        ]}
    ],
    "Hope": [
        { t: "Ídolo comete erro moral grave. Reação?", opts: [
            { txt: "Corto laços. Se a imagem foi manchada, a pessoa é uma mentira.", w: { Prince: 3, Bard: 2, Witch: -2, Sylph: -3 } },
            { txt: "Justifico as ações. Deve haver uma razão maior para manter a fé.", w: { Witch: 3, Sylph: 3, Heir: 2, Prince: -3 } },
            { txt: "Sinto traição, mas guardo para mim; preciso dessa estrutura de crença.", w: { Page: 3, Knight: 2, Thief: -1, Prince: -2 } },
            { txt: "Analiso o contexto. Eu já esperava falhas humanas; ninguém é perfeito.", w: { Seer: 3, Mage: 3, Heir: -1, Bard: -1 } }
        ]},
        { t: "Grupo desanimado com projeto destinado ao fracasso.", opts: [
            { txt: "Assumo a liderança e exalo confiança para manter a esperança viva.", w: { Knight: 3, Page: 3, Rogue: -1, Bard: -2 } },
            { txt: "Aponto as falhas. Destruo a falsa esperança para evitar sofrimento futuro.", w: { Prince: 3, Thief: 2, Sylph: -3, Maid: -2 } },
            { txt: "Trabalho alegremente. Minha fé inabalável contagia os outros.", w: { Heir: 3, Maid: 3, Seer: -2, Prince: -3 } },
            { txt: "Deixo que desistam. O colapso abre espaço para ideias novas e verdadeiras.", w: { Bard: 3, Mage: 2, Knight: -2, Sylph: -2 } }
        ]},
        { t: "Teoria que contradiz a lógica, mas te faz sentir seguro.", opts: [
            { txt: "Abraço a crença. Prefiro uma narrativa que me dê felicidade.", w: { Maid: 3, Witch: 3, Heir: 2, Prince: -3 } },
            { txt: "Rejeito com desprezo. Conforto na ignorância é uma fraqueza que destruo.", w: { Prince: 3, Mage: 2, Heir: -3, Page: -2 } },
            { txt: "Estudo a estrutura dessa crença para entender sua atração mental.", w: { Mage: 3, Seer: 3, Bard: -1, Knight: -1 } },
            { txt: "Uso a crença para motivar os outros, mesmo sem acreditar totalmente.", w: { Thief: 3, Rogue: 3, Bard: 2, Seer: -2 } }
        ]},
        { t: "Em um debate sobre ética, todos estão contra você.", opts: [
            { txt: "Mantenho a posição com teimosia. Sou o único que vê a luz real.", w: { Thief: 3, Knight: 3, Maid: 2, Rogue: -3 } },
            { txt: "Cedo para manter a harmonia, mas guardo minha convicção secreta.", w: { Page: 3, Rogue: 3, Sylph: 2, Thief: -3 } },
            { txt: "Tento reformular a visão deles, curando o conflito com palavras novas.", w: { Sylph: 3, Witch: 2, Seer: 2, Prince: -2 } },
            { txt: "Desmonto os argumentos deles, provando que a lógica deles é falha.", w: { Prince: 3, Bard: 2, Mage: 2, Heir: -2 } }
        ]},
        { t: "Amigo iludido com relacionamento tóxico acreditando no amor.", opts: [
            { txt: "Intervenho e listo provas para quebrar essa fantasia agora.", w: { Prince: 3, Seer: 3, Sylph: -2, Heir: -3 } },
            { txt: "Valido os sentimentos dele, esperando que ele perceba a realidade sozinho.", w: { Sylph: 3, Rogue: 3, Prince: -3, Thief: -2 } },
            { txt: "Compro a briga dele e ataco quem o está machucando.", w: { Knight: 3, Thief: 3, Mage: -1, Bard: -1 } },
            { txt: "Afasto-me. Não quero ser arrastado para quem escolhe viver na mentira.", w: { Mage: 2, Bard: 3, Knight: -2, Maid: -1 } }
        ]},
        { t: "Cometeu um erro sem intenção que prejudicou alguém.", opts: [
            { txt: "Reescrevo a narrativa para me convencer que não foi minha culpa.", w: { Witch: 3, Thief: 3, Prince: 1, Seer: -3 } },
            { txt: "Aceito a culpa e busco redenção através de atos grandiosos de serviço.", w: { Page: 3, Maid: 3, Knight: 2, Thief: -2 } },
            { txt: "Fico paralisado, esperando que o tempo apague a gravidade do erro.", w: { Heir: 3, Bard: 3, Knight: -2, Maid: -2 } },
            { txt: "Dou espaço à pessoa, sacrificando minha necessidade de perdão imediato.", w: { Rogue: 3, Seer: 2, Sylph: 2, Witch: -2 } }
        ]},
        { t: "Qual sua relação com 'finais felizes'?", opts: [
            { txt: "Irritantes e irreais. A ficção que ignora a tragédia é uma mentira.", w: { Prince: 3, Mage: 3, Heir: -2, Sylph: -2 } },
            { txt: "Essenciais. Devem servir como farol do que o mundo deveria ser.", w: { Maid: 3, Sylph: 3, Page: 2, Prince: -3 } },
            { txt: "Gosto, se for conquistado com luta e sofrimento prévio.", w: { Knight: 3, Thief: 2, Seer: 2, Heir: -1 } },
            { txt: "Não importa o final, mas as possibilidades que a jornada abriu.", w: { Heir: 3, Rogue: 2, Bard: 2, Knight: -2 } }
        ]},
        { t: "Convencer um grupo a seguir um caminho arriscado.", opts: [
            { txt: "Uso carisma e promessas grandiosas para que acreditem em mim.", w: { Thief: 3, Knight: 2, Page: 2, Seer: -2 } },
            { txt: "Apresento os riscos honestamente, inspirando as pessoas pela verdade.", w: { Seer: 3, Mage: 3, Witch: -2, Thief: -3 } },
            { txt: "Manipulo as circunstâncias para que pareça a única opção segura.", w: { Witch: 3, Prince: 2, Sylph: 2, Knight: -1 } },
            { txt: "Vou na frente sozinho. O exemplo da minha sobrevivência os guiará.", w: { Rogue: 3, Maid: 2, Heir: 2, Bard: -1 } }
        ]}
    ],
    "Doom": [
        { t: "Diagnóstico de condição crônica limitante.", opts: [
            { txt: "Ignoro. Recuso-me a deixar que regras biológicas ditem minha vida.", w: { Prince: 3, Bard: 2, Heir: -1, Mage: -2 } },
            { txt: "Mergulho na pesquisa para entender cada mecanismo da restrição.", w: { Mage: 3, Seer: 3, Knight: 1, Prince: -2 } },
            { txt: "Crio um sistema rígido de hábitos para 'consertar' minha rotina.", w: { Sylph: 3, Maid: 3, Heir: 1, Bard: -2 } },
            { txt: "Uso a condição para evitar responsabilidades e expectativas alheias.", w: { Thief: 3, Witch: 3, Page: 1, Knight: -1 } }
        ]},
        { t: "Acidente iminente e inevitável em um veículo.", opts: [
            { txt: "Aceito o impacto. Fluo com o desastre para sobreviver ao fim.", w: { Heir: 3, Bard: 3, Sylph: 1, Prince: -3 } },
            { txt: "Atuo como escudo humano para proteger os outros passageiros.", w: { Rogue: 3, Knight: 3, Maid: 2, Thief: -3 } },
            { txt: "Assumo o comando do pânico, ditando regras para minimizar danos.", w: { Seer: 2, Mage: 2, Sylph: 2, Page: -1 } },
            { txt: "Pulo fora antes do impacto; salvo minha pele acima de tudo.", w: { Thief: 3, Prince: 3, Witch: 2, Rogue: -3 } }
        ]},
        { t: "Descobre falha técnica em contrato que permite vantagens ilimitadas.", opts: [
            { txt: "Exploro ao máximo. A culpa é de quem escreveu as regras falhas.", w: { Thief: 3, Witch: 3, Prince: 2, Seer: -2 } },
            { txt: "Reporto o erro. Regras mantêm o equilíbrio necessário.", w: { Sylph: 3, Seer: 3, Heir: 1, Thief: -3 } },
            { txt: "Compartilho com amigos para redistribuir o benefício do sistema.", w: { Rogue: 3, Maid: 2, Page: 2, Prince: -1 } },
            { txt: "Não toco; tenho pavor de punições sistêmicas ou cármicas.", w: { Mage: 3, Knight: 3, Bard: -1, Witch: -2 } }
        ]},
        { t: "Comunidade mantém tradição tóxica que 'mantém a ordem'.", opts: [
            { txt: "Participo performaticamente enquanto mino a autoridade dela.", w: { Bard: 3, Prince: 2, Thief: 2, Sylph: -2 } },
            { txt: "Confronto abertamente e tento destruir a estrutura opressora.", w: { Prince: 3, Knight: 3, Witch: 2, Heir: -2 } },
            { txt: "Mantenho a tradição; a ordem, mesmo ruim, impede a dissolução total.", w: { Heir: 3, Seer: 2, Mage: 2, Prince: -3 } },
            { txt: "Tento reformar as regras por dentro para curar o sofrimento coletivo.", w: { Sylph: 3, Witch: 2, Maid: 2, Bard: -2 } }
        ]},
        { t: "Vê um animal pequeno morrendo sem chance de recuperação.", opts: [
            { txt: "Mato rapidamente; misericórdia é encerrar o destino selado.", w: { Knight: 3, Prince: 3, Maid: 2, Bard: -1 } },
            { txt: "Vou embora; a visão da impotência e da morte me perturba.", w: { Page: 3, Heir: 2, Prince: 2, Mage: -2 } },
            { txt: "Observo até o fim, testemunhando a passagem inevitável.", w: { Mage: 3, Seer: 3, Rogue: 1, Knight: -2 } },
            { txt: "Tento salvar de qualquer jeito, recusando-me a aceitar o fim.", w: { Maid: 3, Witch: 3, Sylph: 2, Seer: -2 } }
        ]},
        { t: "Projeto onde as regras mudam constantemente; caos reina.", opts: [
            { txt: "Paraliso; a falta de trilhos claros drena minha capacidade de agir.", w: { Page: 3, Heir: 3, Sylph: 1, Prince: -2 } },
            { txt: "Crio minhas próprias regras e as imponho; eu me torno a estrutura.", w: { Witch: 3, Knight: 3, Maid: 2, Page: -2 } },
            { txt: "Aproveito o caos para agir sem prestar contas a ninguém.", w: { Bard: 3, Thief: 3, Rogue: 2, Seer: -3 } },
            { txt: "Tento decifrar o padrão oculto por trás das mudanças caóticas.", w: { Mage: 3, Seer: 3, Heir: 1, Bard: -1 } }
        ]},
        { t: "Amigo pede que minta para encobrir erro que custará o emprego dele.", opts: [
            { txt: "Minto; lealdade pessoal vale mais que as regras do sistema.", w: { Thief: 3, Witch: 3, Rogue: 2, Seer: -2 } },
            { txt: "Não minto; as consequências e o destino são inevitáveis.", w: { Seer: 3, Mage: 3, Sylph: 1, Thief: -2 } },
            { txt: "Assumo a culpa; sacrifico meu destino para salvar o dele.", w: { Rogue: 3, Page: 3, Knight: 2, Prince: -3 } },
            { txt: "Fico furioso; a irresponsabilidade dele se tornou um fardo meu.", w: { Prince: 3, Knight: 2, Bard: 2, Heir: -1 } }
        ]},
        { t: "Lidar com uma montanha de burocracia para algo simples.", opts: [
            { txt: "Transformo em jogo de eficiência; venço o sistema pela organização.", w: { Knight: 3, Maid: 3, Sylph: 2, Bard: -2 } },
            { txt: "Sinto a alma drenada; a ineficiência me dá vontade de explodir tudo.", w: { Prince: 3, Bard: 3, Witch: 1, Heir: -2 } },
            { txt: "Aceito com resignação; entro em estado meditativo e espero o fim.", w: { Heir: 3, Page: 3, Rogue: 1, Prince: -3 } },
            { txt: "Uso charme ou contatos para pular as regras destinadas aos outros.", w: { Thief: 3, Witch: 3, Rogue: 2, Seer: -2 } }
        ]}
    ],
    "Life": [
        { t: "Conseguiu emprego por nepotismo e não mérito. Como se sente?", opts: [
            { txt: "Sem vergonha. Uso as vantagens da linhagem para prosperar.", w: { Thief: 3, Witch: 2, Prince: -2, Page: -1 } },
            { txt: "Sinto-me uma fraude; trabalho o triplo para provar que mereço o espaço.", w: { Page: 3, Knight: 3, Maid: 2, Heir: -1 } },
            { txt: "Rejeito a vantagem; destruo esse privilégio para ter autonomia.", w: { Prince: 3, Bard: 2, Thief: -3, Witch: -2 } },
            { txt: "Uso o privilégio para facilitar a vida dos colegas e redistribuir a sorte.", w: { Rogue: 3, Sylph: 3, Seer: 1, Prince: -1 } }
        ]},
        { t: "Membro incompetente arrasta o grupo para o fracasso. Prazo amanhã.", opts: [
            { txt: "Excluo-o ou refaço tudo; a sobrevivência exige cortar o elo fraco.", w: { Prince: 3, Thief: 3, Sylph: -2, Page: -2 } },
            { txt: "Guio a mão dele se preciso; preciso 'consertar' a incompetência.", w: { Sylph: 3, Maid: 3, Witch: 1, Bard: -2 } },
            { txt: "Assumo a liderança agressiva para garantir um resultado vital.", w: { Witch: 3, Maid: 2, Heir: 2, Seer: -1 } },
            { txt: "Observo o desastre; deixar morrer é a única lição que funciona.", w: { Seer: 3, Mage: 3, Bard: 1, Knight: -2 } }
        ]},
        { t: "Regras impedem as pessoas de explorarem seu potencial.", opts: [
            { txt: "Ignoro ou quebro as regras; a vida não deve ser contida.", w: { Witch: 3, Thief: 3, Prince: -3, Seer: -2 } },
            { txt: "Uso as brechas para drenar as vantagens do sistema para os meus.", w: { Thief: 3, Rogue: 3, Page: 1, Sylph: -2 } },
            { txt: "Defendo as regras; sem limites o crescimento se torna destrutivo.", w: { Prince: 3, Knight: 3, Bard: 1, Witch: -3 } },
            { txt: "Ensino os outros a navegarem no sistema para crescerem com segurança.", w: { Sylph: 3, Seer: 3, Mage: 2, Prince: -2 } }
        ]},
        { t: "Tradição familiar exige carreira que você odeia ou será deserdado.", opts: [
            { txt: "Rompo espetacularmente; minha vida é minha única propriedade real.", w: { Witch: 3, Thief: 3, Prince: 2, Heir: -2 } },
            { txt: "Aceito o fardo; mantenho o legado vivo mesmo custando minha felicidade.", w: { Maid: 3, Knight: 3, Heir: 1, Bard: -2 } },
            { txt: "Tento reformar a tradição por dentro para a sobrevivência da família.", w: { Sylph: 3, Seer: 2, Mage: 2, Prince: -1 } },
            { txt: "Fujo silenciosamente e deixo a responsabilidade para outro.", w: { Rogue: 3, Bard: 2, Knight: -2, Witch: -2 } }
        ]},
        { t: "Criança fazendo birra violenta por doce no mercado.", opts: [
            { txt: "Irritação profunda; esse desejo descontrolado deve ser contido.", w: { Prince: 3, Knight: 3, Sylph: -1, Bard: -1 } },
            { txt: "Acho graça; é a expressão pura e caótica de um desejo vital.", w: { Heir: 3, Bard: 3, Mage: -1, Prince: -3 } },
            { txt: "Cedo ao fluxo e compro o doce para resolver o problema logo.", w: { Witch: 3, Rogue: 2, Page: -1, Knight: -2 } },
            { txt: "Analiso onde a criação falhou para produzir esse comportamento.", w: { Mage: 3, Seer: 3, Heir: -1, Sylph: -1 } }
        ]},
        { t: "Sobrecarregado e sem energia. Reação instintiva?", opts: [
            { txt: "Isolo-me; preciso extinguir as demandas para não colapsar.", w: { Prince: 3, Bard: 3, Sylph: -3, Witch: -2 } },
            { txt: "Continuo empurrando; se eu parar de produzir, perco meu valor.", w: { Knight: 3, Maid: 3, Page: 2, Heir: -2 } },
            { txt: "Procuro suporte; aceito a ajuda alheia como adubo para minha volta.", w: { Heir: 3, Rogue: 3, Seer: 1, Prince: -3 } },
            { txt: "Racionalizo o cansaço para otimizar minha produção futura.", w: { Mage: 3, Seer: 3, Thief: -1, Knight: -1 } }
        ]},
        { t: "Jogando contra um oponente muito mais fraco e novato.", opts: [
            { txt: "Destruo sem piedade; a natureza não pega leve com ninguém.", w: { Prince: 3, Thief: 3, Sylph: -3, Page: -2 } },
            { txt: "Pego leve para encorajar o crescimento e a diversão dele.", w: { Sylph: 3, Rogue: 3, Heir: 2, Prince: -3 } },
            { txt: "Torno-me tutor, parando a partida para ensinar as mecânicas.", w: { Seer: 3, Mage: 3, Knight: -1, Witch: -1 } },
            { txt: "Brinco com o sistema, criando situações absurdas sem focar na vitória.", w: { Bard: 3, Witch: 3, Mage: 1, Knight: -2 } }
        ]},
        { t: "Acorda com disposição invencível. O que faz?", opts: [
            { txt: "Gasto a vitalidade criando e fazendo; desperdício de vida é pecado.", w: { Maid: 3, Knight: 3, Sylph: 1, Bard: -2 } },
            { txt: "Uso meu carisma para conquistar o que quero das pessoas.", w: { Thief: 3, Witch: 3, Prince: -1, Page: -1 } },
            { txt: "Apenas 'sou'; deixo o dia me levar com a certeza de ser intocável.", w: { Heir: 3, Bard: 2, Knight: -2, Mage: -1 } },
            { txt: "Fico desconfiado e tento entender a causa desse excesso de energia.", w: { Mage: 3, Seer: 3, Heir: -2, Thief: -1 } }
        ]}
    ],
    "Blood": [
        { t: "Recebe herança feia e inútil, mas que sua avó adorava.", opts: [
            { txt: "Mantenho em destaque; é uma âncora material da minha linhagem.", w: { Heir: 3, Maid: 3, Sylph: 1, Prince: -3 } },
            { txt: "Jogo fora; não deixo a nostalgia alheia ocupar meu espaço.", w: { Prince: 3, Bard: 2, Knight: -2, Maid: -2 } },
            { txt: "Uso a história do objeto para que as pessoas me valorizem mais.", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -2 } },
            { txt: "Guardo escondido; sinto culpa por jogar fora e vergonha de exibir.", w: { Page: 3, Knight: 2, Rogue: 2, Seer: -1 } }
        ]},
        { t: "Descobre que amigos criaram um grupo de mensagens sem você.", opts: [
            { txt: "Invaço o espaço deles para recuperar meu lugar central.", w: { Thief: 3, Witch: 3, Mage: 1, Rogue: -2 } },
            { txt: "Confronto e encerro o vínculo; exijo lealdade total ou nada.", w: { Prince: 3, Knight: 3, Sylph: -3, Maid: -2 } },
            { txt: "Aceito em silêncio; sinto que sou o peso morto do grupo.", w: { Rogue: 3, Page: 3, Heir: 1, Thief: -3 } },
            { txt: "Observo a queda do grupo; se me excluíram, a estrutura já falhou.", w: { Seer: 3, Mage: 3, Bard: 1, Knight: -1 } }
        ]},
        { t: "Como lida com membros 'folgados' em uma equipe?", opts: [
            { txt: "Faço a parte deles pelo projeto, mas guardo profundo ressentimento.", w: { Maid: 3, Knight: 3, Rogue: 1, Prince: -2 } },
            { txt: "Exponho a falta de compromisso; a vergonha social é o remédio.", w: { Prince: 2, Witch: 3, Thief: 3, Sylph: -2 } },
            { txt: "Ofereço apoio para reintegrar a pessoa à dinâmica da equipe.", w: { Sylph: 3, Page: 2, Seer: 2, Thief: -2 } },
            { txt: "Ajusto as expectativas e foco na minha própria conexão com o resultado.", w: { Mage: 3, Heir: 2, Bard: 2, Knight: -1 } }
        ]},
        { t: "Amigo sendo excluído injustamente por um grupo maior.", opts: [
            { txt: "Arrisco minha reputação para defendê-lo; lealdade acima da massa.", w: { Knight: 3, Witch: 3, Heir: 1, Bard: -3 } },
            { txt: "Ajudo o amigo a desapegar; argumento que aqueles laços eram fardos.", w: { Prince: 3, Rogue: 3, Sylph: -2, Maid: -2 } },
            { txt: "Se a exclusão é para a saúde do grupo, aceito o sacrifício do amigo.", w: { Seer: 3, Mage: 3, Prince: 2, Page: -2 } },
            { txt: "Medeio discretamente para curar a imagem dele perante os outros.", w: { Sylph: 3, Maid: 2, Page: 2, Thief: -2 } }
        ]},
        { t: "Dois amigos terminam namoro e exigem que você escolha um lado.", opts: [
            { txt: "Recuso; tento manter a ponte entre os dois como mediador.", w: { Sylph: 3, Seer: 3, Heir: 1, Prince: -2 } },
            { txt: "Escolho o lado mais 'útil' e corto o outro sem piedade.", w: { Thief: 3, Knight: 2, Witch: 2, Rogue: -3 } },
            { txt: "Saio de perto; a instabilidade deles é um peso contagioso.", w: { Prince: 3, Bard: 3, Mage: 1, Maid: -2 } },
            { txt: "Absorvo as reclamações de ambos, servindo de lixeira emocional.", w: { Rogue: 3, Page: 3, Maid: 2, Thief: -2 } }
        ]},
        { t: "Qual seu papel inicial ao entrar em uma nova comunidade?", opts: [
            { txt: "Entendo quem é leal a quem e as regras não escritas antes de agir.", w: { Mage: 3, Seer: 3, Knight: 1, Heir: -1 } },
            { txt: "Assumo postura de liderança para garantir que todos se integrem.", w: { Knight: 3, Maid: 3, Witch: 2, Bard: -2 } },
            { txt: "Mantenho-me à margem; pavor de me sentir preso a rituais sociais.", w: { Prince: 3, Bard: 3, Maid: -2, Sylph: -2 } },
            { txt: "Tento me tornar indispensável para as figuras centrais por segurança.", w: { Thief: 3, Rogue: 3, Page: 2, Seer: -1 } }
        ]},
        { t: "Precisa usar um uniforme ridículo que te humilha.", opts: [
            { txt: "Customizo para recuperar minha identidade dentro do grupo.", w: { Witch: 3, Thief: 3, Knight: 1, Maid: -2 } },
            { txt: "Uso com dedicação; é o símbolo do meu papel e compromisso.", w: { Maid: 3, Heir: 3, Page: 2, Prince: -3 } },
            { txt: "Sinto-me apagado e transformado em apenas um número.", w: { Rogue: 3, Mage: 2, Bard: 2, Sylph: -1 } },
            { txt: "Recuso-me a usar; prefiro a punição à homogeneização forçada.", w: { Prince: 3, Bard: 3, Mage: 1, Heir: -2 } }
        ]},
        { t: "Dois amigos próximos brigam e o grupo corre risco de acabar.", opts: [
            { txt: "Intervenho agressivamente; não admito que destruam nossa unidade.", w: { Knight: 3, Maid: 3, Witch: 2, Prince: -2 } },
            { txt: "Exponho as hipocrisias para que o vínculo se quebre de vez.", w: { Prince: 3, Bard: 3, Sylph: -3, Knight: -2 } },
            { txt: "Explico para um o que o outro sente, agindo como ponte invisível.", w: { Seer: 3, Mage: 3, Sylph: 2, Thief: -2 } },
            { txt: "Deixo as coisas fluírem; minha presença mantém a normalidade.", w: { Heir: 3, Rogue: 3, Page: 2, Witch: -2 } }
        ]}
    ],
    "Breath": [
        { t: "Viagem com itinerário rígido e compromissos obrigatórios.", opts: [
            { txt: "Sinto-me sufocado e sumo sem dar explicações pela minha autonomia.", w: { Heir: 3, Thief: 3, Prince: -2, Knight: -2 } },
            { txt: "Imponho um novo plano eficiente, cortando as sugestões dos outros.", w: { Prince: 3, Witch: 3, Sylph: -2, Rogue: -2 } },
            { txt: "Sigo o fluxo sem me envolver; estou ali, mas minha mente está livre.", w: { Bard: 3, Page: 2, Seer: -1, Maid: -1 } },
            { txt: "Sugerir mudanças sutis que tragam leveza sem causar conflito.", w: { Seer: 3, Mage: 2, Prince: -3, Thief: -1 } }
        ]},
        { t: "Pessoa próxima tornando-se dependente de você para decidir tudo.", opts: [
            { txt: "Irrita-me; mostro instabilidade para que ela aprenda a ser livre.", w: { Prince: 3, Witch: 2, Heir: 2, Sylph: -3 } },
            { txt: "Ensino a pessoa a ser livre, oferecendo ferramentas de decisão.", w: { Sylph: 3, Seer: 3, Maid: 2, Thief: -2 } },
            { txt: "Aproveito; se ela quer que eu decida, eu a guio para onde eu quero.", w: { Thief: 3, Rogue: 2, Bard: -2, Page: -2 } },
            { txt: "Ignoro e deixo que as coisas se resolvam conforme o vento sopra.", w: { Heir: 3, Bard: 3, Knight: -2, Prince: -2 } }
        ]},
        { t: "Em debate, todos presos em tradições que você considera obsoletas.", opts: [
            { txt: "Observo as falhas deles, sentindo-me superior por ser livre.", w: { Mage: 3, Seer: 3, Knight: 1, Page: -1 } },
            { txt: "Uso minha voz para invalidar as regras e limites deles.", w: { Prince: 3, Thief: 3, Bard: 1, Maid: -2 } },
            { txt: "Simplesmente saio; não gasto esforço com quem escolheu algemas.", w: { Heir: 3, Rogue: 3, Knight: -2, Witch: -2 } },
            { txt: "Traduzo ideias novas para abrir brechas de flexibilidade no grupo.", w: { Maid: 3, Page: 3, Prince: -3, Thief: -1 } }
        ]},
        { t: "Proposta de liderança que exige seriedade e raízes firmes.", opts: [
            { txt: "Recuso; a ideia de dependência constante me faz querer fugir.", w: { Heir: 3, Rogue: 3, Prince: -3, Maid: -1 } },
            { txt: "Aceito com uma máscara de seriedade para esconder meu desapego.", w: { Knight: 3, Page: 3, Mage: 1, Bard: -2 } },
            { txt: "Aceito e destruo as burocracias, forçando uma liberdade eficiente.", w: { Prince: 3, Witch: 3, Thief: 2, Sylph: -2 } },
            { txt: "Aceito e deixo cada um agir como quiser; o rumo será orgânico.", w: { Bard: 3, Seer: 2, Prince: -3, Knight: -2 } }
        ]},
        { t: "Como lida com compromissos de longo prazo?", opts: [
            { txt: "Evito; minha lealdade é com meu estado de espírito atual.", w: { Heir: 3, Thief: 3, Rogue: 2, Knight: -3 } },
            { txt: "Cumpro por imagem, mas ressinto as cordas que me prendem.", w: { Knight: 3, Maid: 3, Page: 2, Prince: -2 } },
            { txt: "Quebro compromissos quando não servem mais ao meu propósito.", w: { Witch: 3, Prince: 3, Sylph: -3, Seer: -1 } },
            { txt: "Analiso cada um para garantir que não sufocarão meu movimento.", w: { Seer: 3, Mage: 3, Prince: -1, Bard: -1 } }
        ]},
        { t: "Tendência natural em crise emocional de um amigo.", opts: [
            { txt: "Ofereço perspectiva distante para que ele se desapegue da dor.", w: { Seer: 3, Prince: 3, Maid: 2, Sylph: -2 } },
            { txt: "Desconforto com a intensidade; tento levar o clima para algo leve.", w: { Heir: 3, Rogue: 3, Knight: -2, Mage: -1 } },
            { txt: "Digo duramente que a pessoa precisa de autocontrole e liberdade.", w: { Prince: 3, Thief: 2, Bard: -2, Page: -2 } },
            { txt: "Sou o ar fresco; ouço sem julgar para que ela se sinta leve.", w: { Sylph: 3, Page: 2, Prince: -3, Witch: -1 } }
        ]},
        { t: "Alguém espalhando boatos sobre você. Como afeta sua direção?", opts: [
            { txt: "Não afeta; o que pensam é barulho estático sem poder sobre mim.", w: { Heir: 3, Mage: 3, Bard: 2, Knight: -3 } },
            { txt: "Sinto minha marca roubada; trabalho para retomar minha narrativa.", w: { Knight: 3, Thief: 3, Page: 2, Rogue: -2 } },
            { txt: "Exponho a pessoa para destruir a credibilidade dela com a verdade.", w: { Prince: 3, Witch: 3, Sylph: -3, Maid: -2 } },
            { txt: "Observo quem acredita e uso como filtro para meu círculo social.", w: { Seer: 3, Rogue: 2, Prince: -2, Thief: -1 } }
        ]},
        { t: "Relação com a rotina diária e tarefas repetitivas.", opts: [
            { txt: "Batalha constante; tarefas são pequenas mortes da liberdade.", w: { Thief: 3, Witch: 3, Heir: 2, Prince: -2 } },
            { txt: "Rígido com a rotina para 'matar' qualquer desvio imprevisto.", w: { Prince: 3, Knight: 3, Bard: -3, Heir: -2 } },
            { txt: "Automático e desapegado; faço o necessário para não me prender.", w: { Maid: 3, Rogue: 2, Page: 2, Prince: -2 } },
            { txt: "Inexistente; faço o que sinto vontade quando sinto vontade.", w: { Bard: 3, Heir: 3, Knight: -3, Prince: -2 } }
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
    let sorted = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);
    state.dominantAspect = sorted[0][0];

    let description = aspectSynopses[state.dominantAspect];

    render(`
        <div class="fade-in">
            <h1>ASPECTO: ${state.dominantAspect.toUpperCase()}</h1>
            <p>${description}</p>
            <hr style="border: 1px dashed #005500; margin: 30px 0; opacity: 0.5;">
            <p style="font-size: 16px; color: #00aa00;">Agora que entendemos sua realidade, vamos observar como você <strong>responde</strong> a ela.</p>
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
    let cls = sortedClasses[0][0]; 
    
    let asp = state.dominantAspect; 

    let clsSyn = classSynopses[cls];

    render(`
        <div class="result-box fade-in">
            <h1 style="font-size: 40px; text-shadow: 0 0 10px #00ff00;">${cls.toUpperCase()} OF ${asp.toUpperCase()}</h1>
            <p style="font-size: 20px; color: #fff;">Sua análise foi concluída.</p>
            
            <div style="text-align: left; margin: 20px 0; border: 1px solid #005500; padding: 20px; background: rgba(0,20,0,0.5);">
                <p><strong>${cls}:</strong> ${clsSyn}</p>
                <p style="margin-top: 15px;">Ao confrontar a realidade do <strong>${asp}</strong>, você adotou a estratégia do <strong>${cls}</strong>. Esta é a sua ferramenta de sobrevivência e sua identidade no jogo.</p>
            </div>

            <div class="debug">
                <p>Potencial de Erro (Top 3): ${sortedClasses.slice(0,3).map(x => x[0] + ":" + x[1]).join(" | ")}</p>
            </div>
            
            <p style="font-style: italic; color: #88ff88;">Lembre-se: Esse teste não será suficiente para te definir. Por favor, comente no memo de Classpecting para mais informações.</p>
            
            <button onclick="location.reload()" style="margin-top:20px;">REINICIAR SESSÃO</button>
        </div>
    `);
}
function renderQuestion(q) {
        activeQuestion = q; 
        let html = `<div class="fade-in"><h1>${q.t}</h1>`;
        
        // Renderiza as opções normais
        q.opts.forEach((opt, idx) => {
            html += `<button onclick='handleInput(${idx})'>${opt.txt}</button>`;
        });

        // Adiciona o botão de pular/nenhuma
        html += `<button class="skip-button" onclick="handleSkip()">Nenhuma das anteriores.</button>`;
        
    render(html);
}

function handleSkip() {
        // Simplesmente avança sem somar pontos a nada 
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

function render(html) {
    document.getElementById('content').innerHTML = html;
}

window.onload = () => {
    render(`
        <div class="fade-in">
            <h1>TESTE DE CLASSPECT DO STREETCRUSH</h1>
            <p>Opa, SC aqui. Antes de tudo, não fiz um simples "copia e cola" de testes que já existem, e isso também não é uma tradução. Tudo aqui é baseado nos textos de Dewdrop e Ouroborista, mas principalmente num coletivo de interpretações individuais e que discuti com alguns amigos. Confia que dá bom.</p>
            <p>Vamos descobrir o que te torna especial.</p>
            <button onclick="start()">Bora ver.</button>
        </div>
    `);
};








