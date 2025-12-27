let state = {
    stage: "intro",
    aspectScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    classScores: { Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Mage: 0, Seer: 0, Witch: 0, Heir: 0, Knight: 0, Page: 0, Maid: 0, Sylph: 0 },
    dominantAspect: "",
    questionCount: 0,
    currentQueue: []
};

let activeQuestion = null;

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
            { txt: "Não alteraria nada, pois a imperfeição rege o mundo.", w: { Space: 3, Blood: 2, Time: -1 } } 
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
    { txt: "Sacrifico meu sono, minha saúde e uso cada segundo para garantir que a entrega seja impecável.", w: { Knight: 2, Maid: 2, Page: 3, Prince: -2, Bard: -3 } },
    { txt: "Deixo o prazo passar e lido com as consequências conforme elas vierem, sem tentar lutar contra o inevitável.", w: { Bard: 3, Heir: 2, Knight: -2, Maid: -2 } },
    { txt: "Sinto que meu tempo 'sobra', então acabo doando minhas horas para aliviar o peso de quem está em crise.", w: { Rogue: 3, Sylph: 2, Thief: -2, Prince: -1 } },
    { txt: "Eu paro tudo para analisar onde errei no cronograma e tento prever o impacto do meu atraso.", w: { Seer: 3, Mage: 3, Witch: -1 } },
    { txt: "Eu ignoro a pressão do relógio e foco na criação; o prazo é uma barreira que destruo para o projeto crescer.", w: { Prince: 3, Thief: 2, Maid: -2, Knight: -2 } }
]},
{ t: "Uma oportunidade única passou e você falhou no prazo. Como você reage no dia seguinte?", opts: [
    { txt: "Eu invalido a importância do que passou; se o tempo para aquilo acabou, não deve ocupar mais espaço.", w: { Prince: 3, Bard: 2, Sylph: -2, Maid: -2 } },
    { txt: "Eu me recuso a aceitar o 'não'. Tento convencer os responsáveis a abrirem uma nova vaga só para mim.", w: { Witch: 3, Maid: 2, Thief: 1, Seer: -2 } },
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
]}
],
    "Space": [
{ t: "Você divide o quarto com alguém extremamente desorganizado que está 'vazando' objetos para o seu lado da mesa. Como você reage?", opts: [
    { txt: "Eu limpo a bagunça dele sem perguntar. Não é por bondade, é porque a desordem dele ofende a minha necessidade de um ambiente perfeito.", w: { Maid: 3, Knight: 2, Prince: -2, Bard: -2 } },
    { txt: "Eu jogo tudo no lixo imediatamente. O acúmulo de tralhas é um desperdício de tempo e prefiro o vazio à desordem que me atrasa.", w: { Prince: 3, Bard: 1, Sylph: -3, Maid: -2 } },
    { txt: "Pego os objetos mais úteis dele e os incorporo ao meu lado. Se ele não cuida do que tem, eu cuido, pois sinto que eu saberia usar melhor.", w: { Thief: 3, Witch: 1, Rogue: -2 } },
    { txt: "Tento reorganizar as coisas dele de forma que ele aprenda a manter o espaço, agindo como um mentor da organização alheia.", w: { Sylph: 3, Seer: 2, Prince: -3, Thief: -1 } }
]},
{ t: "Você está em uma festa onde não conhece ninguém e o ambiente parece vasto e impessoal. Qual sua postura?", opts: [
    { txt: "Fico em um canto me sentindo pequeno e invisível. Observo as interações sociais como se fossem uma ciência que eu ainda não domino.", w: { Page: 3, Mage: 2, Seer: 1, Prince: -2 } },
    { txt: "A festa é um sumidouro de tempo. Julgo a estagnação física das pessoas e espero que o evento acabe logo para eu avançar.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -2 } },
    { txt: "Tento me 'enfiar' em conversas alheias ou imitar o comportamento de quem parece popular, com medo de ser excluído do fluxo da festa.", w: { Thief: 3, Rogue: 2, Prince: -2, Seer: -1 } },
    { txt: "Circulo livremente, sem me prender a nenhum grupo, apenas sentindo a 'vibe' do lugar sem pressão.", w: { Heir: 3, Bard: 2, Knight: -2, Maid: -1 } }
]},
{ t: "Um amigo próximo mudou-se para outro país. Como você lida com a distância física agora?", opts: [
    { txt: "Mantenho o contato obsessivo por mensagens. Preciso saber de cada detalhe do espaço novo dele para sentir que ainda faço parte da vida dele.", w: { Witch: 3, Knight: 2, Maid: 1, Prince: -3 } },
    { txt: "A distância matou a utilidade da relação. Se não estamos no mesmo 'agora', corto os laços para não carregar o peso de um passado estático.", w: { Prince: 3, Bard: 2, Witch: -3, Sylph: -2 } },
    { txt: "Sinto uma inveja silenciosa da vida nova dele. Posto fotos de lugares interessantes onde estou só para provar que meu espaço também é relevante.", w: { Thief: 3, Page: 2, Rogue: -2, Heir: -1 } },
    { txt: "Entendo que o espaço entre nós mudou a dinâmica. Aceito a saudade como algo natural e deixo a amizade encontrar seu novo volume.", w: { Seer: 2, Heir: 3, Thief: -2, Knight: -1 } }
]},
{ t: "Você decidiu começar um hobby novo (como pintura ou marcenaria), mas não tem as ferramentas certas ou um local adequado.", opts: [
    { txt: "Eu me viro com o que tenho. Improviso ferramentas e uso o chão da cozinha; o que importa é a minha capacidade de criar do nada.", w: { Knight: 3, Maid: 2, Page: 1, Bard: -2 } },
    { txt: "Passo semanas pesquisando o layout perfeito e as melhores ferramentas antes de começar. Se o cenário não for ideal, a criação não flui.", w: { Mage: 3, Seer: 2, Heir: -1, Knight: -1 } },
    { txt: "Peço coisas emprestadas para amigos e 'esqueço' de devolver. Sinto que preciso desses recursos mais do que eles no momento.", w: { Thief: 3, Rogue: 2, Sylph: -2, Maid: -1 } },
    { txt: "Desisto antes de começar. Se o ambiente não colabora, é sinal de que não era para ser.", w: { Bard: 3, Heir: 1, Knight: -3, Maid: -2 } }
]},
{ t: "Alguém entra no seu quarto sem bater enquanto você está focado em algo importante. Qual sua reação imediata?", opts: [
    { txt: "A interrupção quebrou meu fluxo. Expulso a pessoa porque meu tempo é sagrado e não tolero que a presença física dela me atrase.", w: { Prince: 3, Knight: 2, Sylph: -3, Rogue: -2 } },
    { txt: "Escondo o que estou fazendo imediatamente. Tenho pavor de que vejam meu processo criativo antes de estar 'perfeito'.", w: { Page: 3, Thief: 2, Maid: 1, Prince: -1 } },
    { txt: "Integro a pessoa ao que estou fazendo, aproveitando a interrupção para mudar o foco ou pedir uma opinião.", w: { Witch: 3, Sylph: 2, Heir: 1, Prince: -3 } },
    { txt: "Fico irritado internamente por terem quebrado minha linha de raciocínio espacial, mas permaneço em silêncio analisando a intrusão.", w: { Mage: 3, Seer: 2, Knight: -1, Witch: -1 } }
]},
{ t: "Você está em um elevador lotado e desconfortável. Como você se comporta no trajeto?", opts: [
    { txt: "Tento ocupar o mínimo de espaço possível, quase me fundindo à parede para não incomodar ninguém.", w: { Rogue: 3, Page: 2, Sylph: 1, Prince: -2 } },
    { txt: "Fico encarando o painel ou o teto, analisando a mecânica do elevador ou a geometria das pessoas para ignorar o desconforto.", w: { Seer: 3, Mage: 2, Heir: -1, Bard: -1 } },
    { txt: "Fico furioso com a lentidão. Sinto que cada segundo é um roubo da minha vida e as pessoas são meros obstáculos entre eu e meu destino.", w: { Prince: 2, Thief: 2, Bard: 1, Rogue: -2, Sylph: -2 } },
    { txt: "Puxo uma conversa trivial só para aliviar a tensão do ambiente, tentando acabar com o desconforto coletivo.", w: { Sylph: 3, Heir: 2, Prince: -3, Mage: -1 } }
]},
{ t: "Ao arrumar suas coisas para uma mudança, você encontra objetos de um ex-parceiro ou de uma amizade que acabou mal.", opts: [
    { txt: "Destruo tudo. Objetos são âncoras para linhas do tempo mortas; não permito que a matéria me prenda a um passado que já encerrei.", w: { Prince: 3, Witch: 2, Thief: -3, Knight: -2 } },
    { txt: "Guardo tudo em uma caixa no fundo do armário. Tenho medo de me desfazer e acabar perdendo uma parte de quem eu fui.", w: { Thief: 3, Knight: 2, Page: 1, Prince: -3 } },
    { txt: "Dou os objetos para pessoas que possam precisar deles. Transformo a memória ruim em utilidade para o espaço de outro.", w: { Rogue: 3, Maid: 2, Sylph: 1, Thief: -3, Prince: -1 } },
    { txt: "Olho para os objetos e reflito sobre como eles ocupavam lugar na minha vida e como o vazio que deixaram foi preenchido.", w: { Mage: 3, Seer: 2, Heir: 1, Prince: -2 } }
]},
{ t: "Você está esperando um resultado importante que depende de processos lentos e burocráticos. Como lida com a espera?", opts: [
    { txt: "Ocupo meu tempo criando novos projetos paralelos. A inércia me desespera, então preciso estar sempre produzindo algo.", w: { Maid: 3, Knight: 2, Page: 1, Bard: -2 } },
    { txt: "Tento usar contatos ou 'jeitinhos' para acelerar o processo. Não aceito que as regras do espaço e do tempo se apliquem a mim.", w: { Witch: 3, Thief: 2, Seer: -2, Mage: -1 } },
    { txt: "Aceito a lentidão. Entendo que tudo tem seu tempo de maturação e que forçar a colheita estraga o fruto.", w: { Heir: 3, Bard: 2, Seer: 1, Prince: -3 } },
    { txt: "Fico obcecado em entender cada etapa do processo burocrático, lendo manuais e leis para não ser pego de surpresa.", w: { Mage: 3, Seer: 2, Prince: -1, Knight: -1 } }
]}
],
"Rage": [
{ t: "Você descobre que uma regra importante da sua instituição é um esquema para beneficiar apenas os veteranos. Como você reage?", opts: [
    { txt: "Escolho acreditar que deve haver um motivo maior para isso e que, no fim, as coisas vão se equilibrar sozinhas.", w: { Prince: 3, Bard: 2, Knight: -2, Witch: -2 } },
    { txt: "Mando um e-mail para todos expondo a falha, sem me importar se isso vai causar demissões ou brigas.", w: { Witch: 3, Knight: 2, Prince: -3, Bard: -2 } },
    { txt: "Procuro entender quem mais se beneficia disso e como eu posso usar essa 'brecha' para não sair perdendo.", w: { Seer: 3, Mage: 3, Page: -1 } },
    { txt: "Tento alertar as pessoas prejudicadas, para que elas saibam exatamente quem as está enganando.", w: { Rogue: 3, Sylph: 2, Prince: -2 } }
]},
{ t: "Um projeto que você valoriza é cancelado por um erro bobo de outra pessoa. Qual sua postura?", opts: [
    { txt: "Decido que esse projeto não era tão importante assim. Já estou focado em algo novo e muito mais promissor.", w: { Prince: 3, Bard: 3, Maid: -2, Page: -2 } },
    { txt: "Dou um jeito de contornar a proibição e continuo fazendo o que eu queria, mesmo que tecnicamente esteja 'errado'.", w: { Thief: 3, Witch: 2, Seer: -2, Heir: -1 } },
    { txt: "Assumo a culpa que não é minha e trabalho o dobro para tentar salvar o que sobrou, para não admitir o fracasso.", w: { Page: 3, Knight: 2, Maid: 1, Prince: -3 } },
    { txt: "Observo a frustração geral e espero para ver se alguém vai realmente agir antes de eu me envolver.", w: { Mage: 2, Heir: 2, Seer: 1, Witch: -2 } }
]},
{ t: "Em um grupo, alguém insiste em uma ideia que você sabe que é falsa. O que você faz?", opts: [
    { txt: "Se a pessoa está feliz acreditando naquilo, não vejo por que destruir a ilusão dela com a verdade.", w: { Prince: 2, Bard: 3, Knight: -3, Mage: -2 } },
    { txt: "Falo a verdade nua e crua na frente de todos, mesmo que isso acabe com o clima da conversa.", w: { Mage: 3, Seer: 2, Prince: -2, Bard: -2 } },
    { txt: "Tento proteger os outros da ideia ruim, servindo como uma voz de 'pé no chão' contra o absurdo.", w: { Knight: 3, Maid: 2, Sylph: 1, Heir: -1 } },
    { txt: "Tento explicar a situação para quem está confuso, expondo a falha sem atacar quem a disse.", w: { Rogue: 2, Sylph: 3, Page: 1, Thief: -2 } }
]},
{ t: "Você percebe que está sendo passado para trás em uma conversa importante. Como você lida?", opts: [
    { txt: "Interrompo a pessoa e mostro que sei exatamente o que ela está tentando fazer, forçando-a a parar.", w: { Witch: 3, Thief: 2, Prince: 1, Heir: -3 } },
    { txt: "Prefiro manter a harmonia do momento e finjo que não percebi, confiando que a pessoa terá consciência depois.", w: { Bard: 3, Prince: 2, Knight: -2, Mage: -2 } },
    { txt: "Fico indignado, mas aceito a situação enquanto planejo como nunca mais deixar isso acontecer.", w: { Knight: 3, Page: 2, Maid: 1, Prince: -2 } },
    { txt: "Estudo o comportamento da pessoa para entender por que ela acha que pode me enganar.", w: { Mage: 3, Seer: 2, Rogue: -1 } }
]},
{ t: "Como você se sente quando percebe que o mundo é injusto e que pessoas ruins muitas vezes vencem?", opts: [
    { txt: "Isso prova que levar as coisas a sério é bobagem. Se nada faz sentido, prefiro rir do absurdo.", w: { Bard: 3, Heir: 2, Maid: -3, Knight: -2 } },
    { txt: "Escolho ignorar essas notícias. Prefiro focar no que é bonito e positivo para não perder minha paz.", w: { Prince: 3, Bard: 2, Seer: -2, Mage: -2 } },
    { txt: "Crio minha própria rotina e obrigações. Se nada lá fora presta, eu foco em ser impecável no que eu faço.", w: { Maid: 3, Knight: 2, Page: 2, Bard: -3 } },
    { txt: "Procuro grupos de pessoas que também estão cansadas dessa palhaçada para que possamos nos apoiar.", w: { Rogue: 3, Sylph: 2, Witch: -1 } }
]},
{ t: "Ao descobrir que um ídolo cometeu um ato vergonhoso, o que você faz?", opts: [
    { txt: "Recuso-me a acreditar. Provavelmente é um mal-entendido ou uma mentira para derrubar a imagem dele.", w: { Prince: 3, Bard: 2, Seer: -3, Mage: -3 } },
    { txt: "Deixo de respeitar na hora. Apago qualquer rastro de admiração; para mim, a pessoa deixou de existir.", w: { Prince: 1, Seer: 2, Knight: 2, Sylph: -3 } },
    { txt: "Tento usar o erro dessa pessoa como exemplo para educar os outros e evitar que caiam na mesma cilada.", w: { Witch: 2, Rogue: 2, Sylph: 3, Thief: -1 } },
    { txt: "Fico remoendo o quanto fui enganado e passo a ser muito mais cético com tudo a partir de agora.", w: { Mage: 3, Page: 3, Heir: 1, Bard: -2 } }
]},
{ t: "Em um ambiente onde todos estão discutindo de forma irracional, qual sua atitude?", opts: [
    { txt: "Tento puxar um assunto leve ou fazer uma piada para desviar a atenção do conflito e restaurar o clima.", w: { Prince: 2, Bard: 3, Knight: -2, Maid: -2 } },
    { txt: "Solto uma frase seca que resume o ridículo da situação, o que geralmente faz todo mundo calar a boca.", w: { Prince: 1, Seer: 3, Mage: 2, Sylph: -2 } },
    { txt: "Aproveito que ninguém está prestando atenção para resolver minhas coisas sem ser incomodado.", w: { Thief: 3, Witch: 2, Page: -2 } },
    { txt: "Mantenho o controle e espero o caos passar, julgando mentalmente a falta de compostura de cada um.", w: { Knight: 2, Maid: 2, Page: 2, Heir: -1 } }
]},
{ t: "Você precisa escolher entre ser honesto e perder uma chance, ou mentir e conseguir o que quer. O que você faz?", opts: [
    { txt: "Falo a verdade doa a quem doer. Prefiro o fracasso real do que um sucesso baseado em uma mentira.", w: { Mage: 2, Seer: 2, Heir: 2, Thief: -3, Witch: -2 } },
    { txt: "Minto sem hesitar se isso mantiver a esperança de alguém ou a minha própria paz; a verdade é superestimada.", w: { Prince: 3, Bard: 2, Knight: -3, Maid: -2 } },
    { txt: "Sou honesto, mas de uma forma agressiva, deixando claro que quem me forçou a isso é que está errado.", w: { Knight: 2, Page: 3, Maid: 1, Bard: -2 } },
    { txt: "Minto se isso for ajudar mais pessoas, justificando que a mentira é uma ferramenta contra a injustiça.", w: { Sylph: 3, Rogue: 2, Witch: 1, Prince: -2 } }
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
    { txt: "Obsedo-me em calcular cada variável e sinal possível, tentando prever o desfecho para que a incerteza não me pegue desprevenido.", w: { Seer: 3, Mage: 3, Heir: -2, Bard: -1 } }
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
{ t: "Em uma situação tensa, você percebe que a transparência total está causando conflitos. Qual sua atitude?", opts: [
    { txt: "Defendo que a clareza é a única cura. Tudo deve ser exposto para que possamos resolver o problema pela raiz.", w: { Sylph: 3, Seer: 2, Prince: -3, Bard: -2 } },
    { txt: "Acredito que o segredo é uma forma de proteção; algumas coisas devem permanecer no escuro para que o grupo funcione.", w: { Prince: 3, Bard: 3, Sylph: -3, Seer: -2 } },
    { txt: "Organizo as informações de forma pragmática, revelando apenas o necessário para manter a ordem e a utilidade da situação.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
    { txt: "Compartilho a verdade de forma diluída, tentando fazer com que o peso da informação seja dividido entre todos.", w: { Rogue: 3, Heir: 2, Thief: -2, Witch: -1 } }
]}
],
    "Mind": [
{ t: "Em um projeto de grupo, você percebe que a decisão coletiva é logicamente impecável, mas prejudicará injustamente um indivíduo isolado. Como você reage?", opts: [
    { txt: "Sigo o plano. A integridade do sistema e a eficiência do resultado são prioridades; sentimentos individuais não devem corromper a lógica do processo.", w: { Maid: 3, Knight: 2, Prince: -3, Bard: -2 } },
    { txt: "Saboto a decisão ou apresento um contra-argumento emocional. Não tolero que uma lógica fria esmague o que eu sinto ser o correto.", w: { Prince: 3, Bard: 2, Witch: -2, Sylph: -1 } },
    { txt: "Analiso os desdobramentos e tento encontrar uma brecha técnica que proteja o indivíduo sem invalidar o plano para o resto do grupo.", w: { Seer: 3, Mage: 2, Sylph: 2, Thief: -1 } },
    { txt: "Exponho a falha moral do plano para que o grupo lide com o peso da escolha, retirando minha responsabilidade direta sobre o dano.", w: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
]},
{ t: "Você está em um jantar formal onde todos fingem se gostar. Você percebe claramente as máscaras sociais e as intenções ocultas. Qual sua postura?", opts: [
    { txt: "Sinto um cansaço profundo. Ver a mecânica por trás das interações tira a cor da vida; sinto-me prisioneiro desse teatro de aparências.", w: { Mage: 3, Page: 3, Seer: 1, Prince: -2 } },
    { txt: "Mantenho minha própria máscara perfeitamente polida. Uso o protocolo social como uma armadura para que ninguém consiga ler meu interior.", w: { Knight: 3, Maid: 2, Bard: 1, Rogue: -2 } },
    { txt: "Intervenho nas conversas, mudando o rumo dos assuntos para testar até onde as pessoas sustentam seus personagens.", w: { Witch: 3, Thief: 2, Heir: -2, Sylph: -1 } },
    { txt: "Observo em silêncio, quase invisível, absorvendo as dinâmicas para entender quem realmente detém o poder de decisão ali.", w: { Seer: 3, Heir: 2, Thief: -3, Knight: -1 } }
]},
{ t: "Um erro grave foi cometido por um colega e a culpa está recaindo sobre o grupo todo. Como você se posiciona?", opts: [
    { txt: "Utilizo a falha dele para demonstrar minha própria competência, garantindo que minha posição saia fortalecida da crise.", w: { Thief: 3, Prince: 2, Knight: -2, Rogue: -2 } },
    { txt: "Assumo parte da culpa ou tento redistribuir a responsabilidade de forma que o peso não destrua a carreira do colega individualmente.", w: { Rogue: 3, Sylph: 2, Heir: 1, Prince: -3 } },
    { txt: "Trabalho dobrado nos bastidores para consertar o erro logicamente, sem buscar reconhecimento, apenas para restaurar a ordem.", w: { Maid: 3, Page: 2, Witch: -1, Bard: -1 } },
    { txt: "Analiso friamente como esse erro aconteceu e uso o evento como um estudo para garantir que os padrões de decisão futuros mudem.", w: { Mage: 3, Seer: 2, Knight: 1, Prince: -2 } }
]},
{ t: "Ao planejar algo importante, como uma mudança de carreira, qual é o seu processo mental predominante?", opts: [
    { txt: "Crio planos de contingência para cada falha possível. Se eu não prever o caminho e as consequências, sinto que vou colapsar.", w: { Maid: 3, Mage: 2, Knight: -2, Heir: -1 } },
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
    { txt: "Sinto o peso dessa informação como um fardo. O simples fato de saber me faz sentir responsável por cada desdobramento futuro.", w: { Mage: 3, Seer: 2, Knight: -1, Witch: -1 } }
]},
{ t: "Você sente que sua vida atual é uma farsa e que está apenas desempenhando um papel. Qual sua reação?", opts: [
    { txt: "Dobro a aposta no papel. Se minha identidade é uma construção, vou polir essa máscara até que ela seja indistinguível da realidade.", w: { Knight: 3, Page: 3, Maid: 1, Prince: -2 } },
    { txt: "Abandono tudo. Rompo laços e mudo de cenário; prefiro o vazio de uma folha em branco ao peso de uma lógica de vida que não é minha.", w: { Prince: 3, Bard: 2, Heir: -2, Seer: -2 } },
    { txt: "Analiso meticulosamente as escolhas que me trouxeram até aqui para entender a 'fórmula' da minha insatisfação e recalcular a rota.", w: { Mage: 3, Seer: 3, Knight: -2, Page: -1 } },
    { txt: "Deixo que o tempo decida. Sigo o fluxo dos acontecimentos, esperando que uma nova circunstância defina quem eu devo ser.", w: { Heir: 3, Rogue: 1, Witch: -3, Maid: -1 } }
]},
{ t: "Em um jogo de estratégia complexo contra um oponente inteligente, qual é a sua principal força?", opts: [
    { txt: "Minha capacidade de antecipar movimentos. Eu não jogo contra as peças, jogo contra a mente dele, prevendo suas decisões.", w: { Seer: 3, Mage: 2, Witch: 2, Page: -1 } },
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
{ t: "Em um relacionamento (romântico ou amizade profunda), qual é o seu maior medo?", opts: [
    { txt: "Perder minha individualidade. Tenho medo de ser absorvido pelo outro e não saber mais onde eu termino e ele começa.", w: { Thief: 3, Prince: 2, Mage: 1, Rogue: -3 } },
    { txt: "Não ser o suficiente. Sinto que preciso estar sempre 'servindo' ou sendo útil emocionalmente para justificar minha presença na vida da pessoa.", w: { Maid: 3, Page: 2, Knight: 1, Thief: -2 } },
    { txt: "A vulnerabilidade real. Tenho pavor de baixar a guarda e deixar alguém ver minhas falhas sem nenhuma máscara ou filtro.", w: { Knight: 3, Prince: 2, Witch: 1, Heir: -2 } },
    { txt: "Não conseguir ajudar. Meu medo é ver o outro sofrendo e não ter a capacidade ou a 'alma' necessária para consertá-lo.", w: { Sylph: 3, Rogue: 2, Seer: 1, Bard: -2 } }
]},
{ t: "Você tem um instinto muito forte sobre algo, mas todos os dados lógicos dizem o contrário. O que você faz?", opts: [
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
    { txt: "Exploro a falha ao máximo para ganho pessoal. Se o sistema deixou uma porta aberta, a culpa é de quem escreveu as regras, não minha.", w: { Thief: 3, Vriska: 0, Witch: 2, Prince: 1, Seer: -2 } },
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
    { txt: "Minto. As regras da empresa não valem mais do que a minha lealdade pessoal. Quebro o sistema para proteger o indivíduo.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } },
    { txt: "Não minto. Explico que as consequências são inevitáveis e que tentar fugir delas só vai piorar o destino dele a longo prazo.", w: { Seer: 3, Mage: 2, Sylph: 1, Thief: -2 } },
    { txt: "Assumo a culpa no lugar dele, se eu tiver mais capital político para gastar. Sacrifico minha reputação para salvá-lo.", w: { Rogue: 3, Page: 2, Knight: 1, Prince: -3 } },
    { txt: "Fico furioso com ele por me colocar nessa posição. A irresponsabilidade dele agora se tornou um fardo meu.", w: { Prince: 3, Knight: 2, Bard: 1, Heir: -1 } }
]},
{ t: "Você tem que lidar com uma montanha de burocracia, documentos e filas para conseguir algo simples.", opts: [
    { txt: "Transformo isso em um jogo de eficiência. Organizo tudo perfeitamente para passar pelo processo na velocidade recorde.", w: { Knight: 3, Maid: 2, Sylph: 1, Bard: -2 } },
    { txt: "Sinto minha alma sendo drenada a cada segundo. A ineficiência sistêmica me dá vontade de explodir o prédio.", w: { Prince: 3, Bard: 2, Witch: 1, Heir: -2 } },
    { txt: "Aceito com resignação. É chato, mas é como o mundo funciona. Entro em um estado meditativo e espero minha vez.", w: { Heir: 3, Page: 2, Rogue: 1, Prince: -3 } },
    { txt: "Tento usar 'quem eu conheço' ou meu charme para pular etapas. As regras são para os outros, não para mim.", w: { Thief: 3, Witch: 2, Rogue: 1, Seer: -2 } }
]}
],
    "Life": [
{ t: "Você descobriu que só conseguiu seu emprego atual porque seu pai conhecia o chefe (nepotismo), e não por mérito próprio. Como isso faz você se sentir?", opts: [
    { txt: "Não sinto vergonha alguma. O mundo é feito de conexões e vantagens; eu apenas estou usando as ferramentas que a linhagem me deu para prosperar.", w: { Thief: 3, Witch: 1, Prince: -2, Page: -1 } },
    { txt: "Sinto-me uma fraude completa. Trabalho o triplo do que meus colegas para provar (para eles e para mim) que eu mereço ocupar este espaço.", w: { Page: 3, Knight: 2, Maid: 1, Heir: -1 } },
    { txt: "Rejeito a vantagem. Peço demissão ou busco outro lugar onde eu possa começar do zero, destruindo esse privilégio que mancha minha autonomia.", w: { Prince: 3, Bard: 2, Thief: -3, Witch: -2 } },
    { txt: "Uso minha posição privilegiada para facilitar a vida dos meus colegas, advogando por aumentos ou melhorias, redistribuindo minha sorte.", w: { Rogue: 3, Sylph: 2, Seer: 1, Prince: -1 } }
]},
{ t: "Em um projeto de grupo, um membro é claramente incompetente e está arrastando todos para o fracasso. O prazo acaba amanhã.", opts: [
    { txt: "Eu o excluo do trabalho final ou refaço a parte dele inteira. A sobrevivência do grupo (e da minha nota) exige que o elo fraco seja cortado ou ignorado.", w: { Prince: 3, Thief: 2, Sylph: -2, Page: -2 } },
    { txt: "Sento com ele e faço a parte dele junto, guiando sua mão se for preciso. Não posso deixar ninguém para trás, preciso 'consertar' a incompetência dele.", w: { Sylph: 3, Maid: 2, Witch: 1, Bard: -2 } },
    { txt: "Assumo a liderança agressivamente, ditando exatamente o que cada um fará nas horas finais para garantir que o resultado seja vital e enérgico.", w: { Witch: 3, Maid: 2, Heir: 1, Seer: -1 } },
    { txt: "Observo o desastre iminente. Entendo que o fracasso é parte do ciclo de aprendizado e, às vezes, deixar morrer é a única lição que funciona.", w: { Seer: 3, Mage: 2, Bard: 1, Knight: -2 } }
]},
{ t: "Você está em um buffet muito caro, daqueles de 'tudo que você puder comer'. Qual é sua estratégia?", opts: [
    { txt: "Como até passar mal. Sinto uma necessidade compulsiva de fazer o dinheiro valer a pena e absorver o máximo de recursos disponíveis.", w: { Thief: 3, Bard: 2, Seer: -2, Mage: -2 } },
    { txt: "Seleciono apenas os alimentos mais nobres e raros. Não se trata de quantidade, mas de elevar meu padrão de existência através da qualidade.", w: { Mage: 3, Seer: 2, Heir: 1, Rogue: -1 } },
    { txt: "Sirvo os outros na mesa, garantindo que todos estejam comendo bem e se divertindo, tirando prazer da satisfação biológica alheia.", w: { Sylph: 3, Rogue: 2, Maid: 1, Prince: -2 } },
    { txt: "Sinto desconforto com a gula ao redor. A exibição obscena de comida me faz perder o apetite; prefiro a simplicidade.", w: { Prince: 3, Knight: 1, Thief: -3, Witch: -2 } }
]},
{ t: "Uma tradição familiar antiga dita que você deve seguir uma carreira que você odeia. Romper com ela significa ser deserdado.", opts: [
    { txt: "Rompo com a tradição espetacularmente. A minha vida é minha única propriedade real e recuso-me a submetê-la a regras de gente morta.", w: { Witch: 3, Thief: 2, Prince: 1, Heir: -2 } },
    { txt: "Aceito o fardo e sigo a carreira, encontrando maneiras de servir minha família e manter o legado vivo, mesmo que isso me custe felicidade pessoal.", w: { Maid: 3, Knight: 2, Heir: 1, Bard: -2 } },
    { txt: "Tento reformar a tradição por dentro, conversando e mostrando que a mudança é necessária para a sobrevivência da família a longo prazo.", w: { Sylph: 3, Seer: 2, Mage: 1, Prince: -1 } },
    { txt: "Fujo silenciosamente. Deixo o espaço vago para que outro parente assuma, redistribuindo essa responsabilidade para quem a deseja.", w: { Rogue: 3, Bard: 1, Knight: -2, Witch: -2 } }
]},
{ t: "Você vê uma criança fazendo birra em um supermercado porque quer um doce, gritando e se jogando no chão.", opts: [
    { txt: "Sinto uma irritação profunda. Essa exibição de desejo descontrolado e falta de disciplina precisa ser contida imediatamente.", w: { Prince: 3, Knight: 2, Sylph: -1, Bard: -1 } },
    { txt: "Acho graça ou ignoro. É a expressão pura de um desejo vital; crianças são assim, caóticas e cheias de querer.", w: { Heir: 3, Bard: 2, Mage: -1, Prince: -3 } },
    { txt: "Se fosse meu filho, eu compraria o doce só para ele calar a boca e eu poder continuar minha vida em paz. Resolvo o problema cedendo ao fluxo.", w: { Witch: 3, Rogue: 2, Page: -1, Knight: -2 } },
    { txt: "Analiso os pais. Julgo a falta de autoridade deles e entendo exatamente onde a criação falhou para produzir esse comportamento.", w: { Mage: 3, Seer: 2, Heir: -1, Sylph: -1 } }
]},
{ t: "Um amigo rico oferece pagar uma viagem de luxo para você, mas você sabe que ele vai jogar isso na sua cara depois.", opts: [
    { txt: "Aceito. Ele tem o recurso, eu tenho a disponibilidade. É uma troca justa e não vou deixar o orgulho me impedir de viver bem.", w: { Thief: 3, Witch: 1, Knight: -2, Prince: -2 } },
    { txt: "Recuso. Prefiro pagar minha própria viagem barata do que ficar em dívida ou sob o domínio financeiro de alguém.", w: { Knight: 3, Prince: 2, Thief: -3, Heir: -2 } },
    { txt: "Convenço-o a convidar mais pessoas, diluindo a atenção dele e transformando a viagem em um evento de grupo onde eu sou apenas mais um.", w: { Rogue: 3, Sylph: 1, Page: 1, Witch: -1 } },
    { txt: "Aceito, mas faço questão de 'pagar' de volta com favores, organização e entretenimento durante a viagem, servindo para equilibrar a balança.", w: { Maid: 3, Page: 2, Seer: 1, Thief: -2 } }
]},
{ t: "Você está jogando um jogo competitivo e percebe que seu oponente é muito mais fraco e novato que você.", opts: [
    { txt: "Eu o destruo sem piedade. A natureza não pega leve, e a melhor forma de respeitá-lo é jogar com todo o meu potencial.", w: { Prince: 3, Thief: 2, Sylph: -3, Page: -2 } },
    { txt: "Pego leve, permitindo que ele jogue e se divirta, talvez até deixo ele ganhar uma rodada para encorajar seu crescimento.", w: { Sylph: 3, Rogue: 2, Heir: 1, Prince: -3 } },
    { txt: "Ensino as mecânicas enquanto jogamos, parando a partida para explicar o que ele fez de errado. Torno-me um tutor.", w: { Seer: 3, Mage: 2, Knight: -1, Witch: -1 } },
    { txt: "Brinco com ele, criando situações absurdas no jogo apenas para ver como ele reage, testando os limites do sistema sem focar na vitória.", w: { Bard: 3, Witch: 2, Mage: 1, Knight: -2 } }
]},
{ t: "Você acorda com uma energia e disposição incomuns, sentindo-se invencível. O que faz com esse dia?", opts: [
    { txt: "Inicio três projetos novos, limpo a casa e corro uma maratona. Gasto essa energia criando e fazendo, pois o desperdício de vitalidade é pecado.", w: { Maid: 3, Knight: 2, Sylph: 1, Bard: -2 } },
    { txt: "Saio para conquistar. Uso meu carisma elevado para conseguir o que quero das pessoas, seja romance, favores ou apenas atenção.", w: { Thief: 3, Witch: 2, Prince: -1, Page: -1 } },
    { txt: "Apenas 'sou'. Deixo o dia me levar, flutuando através dos eventos com a certeza absoluta de que nada pode me atingir hoje.", w: { Heir: 3, Bard: 1, Knight: -2, Mage: -1 } },
    { txt: "Fico desconfiado. Esse excesso de energia não é normal; tento entender o que causou isso antes de agir impulsivamente.", w: { Mage: 3, Seer: 2, Heir: -2, Thief: -1 } }
]}
],
    "Blood": [
{ t: "Você recebe de herança um objeto de família extremamente feio e inútil, mas que sua avó adorava. O que você faz com ele?", opts: [
    { txt: "Mantenho o objeto em destaque na sala. A estética não importa; o que importa é que ele é um âncora material da minha linhagem.", w: { Heir: 3, Maid: 2, Sylph: 1, Prince: -3 } },
    { txt: "Jogo fora ou 'perco' acidentalmente. Não vou deixar que a nostalgia alheia ocupe espaço físico na minha vida atual.", w: { Prince: 3, Bard: 2, Knight: -2, Maid: -2 } },
    { txt: "Vendo o objeto. Transformo o valor sentimental estagnado em recursos que eu possa usar agora. Sentimento não paga contas.", w: { Thief: 3, Witch: 2, Mage: 1, Rogue: -2 } },
    { txt: "Guardo em uma caixa no fundo do armário. Sinto culpa demais para jogar fora, mas vergonha demais para exibir.", w: { Page: 3, Knight: 2, Rogue: 1, Seer: -1 } }
]},
{ t: "Você descobre que seus amigos mais próximos criaram um grupo de mensagens sem você para planejar algo.", opts: [
    { txt: "Finjo que não sei, mas fico consumido pela paranoia, analisando cada interação nossa em busca de sinais de traição.", w: { Mage: 3, Seer: 2, Bard: 1, Heir: -2 } },
    { txt: "Confronto todos imediatamente. Exijo minha inclusão ou a dissolução desse segredinho, pois a exclusão é uma ofensa pessoal.", w: { Knight: 3, Witch: 2, Maid: 1, Rogue: -2 } },
    { txt: "Aceito que talvez eu seja o problema ou um fardo. Se eles estão felizes sem mim, quem sou eu para forçar minha presença?", w: { Rogue: 3, Page: 2, Sylph: 1, Thief: -3 } },
    { txt: "Aproveito a deixa para cortar laços com eles também. Se o vínculo não é absoluto, ele não vale nada para mim.", w: { Prince: 3, Bard: 2, Thief: 1, Sylph: -3 } }
]},
{ t: "Um colega de trabalho ou escola insiste em te dar abraços longos e suados sempre que te vê. Você odeia contato físico.", opts: [
    { txt: "Permito o abraço, travando o corpo em desconforto. Suporto a violação do meu espaço para não ferir os sentimentos dele.", w: { Maid: 3, Page: 2, Rogue: 1, Prince: -2 } },
    { txt: "Coloco uma barreira física ou verbal clara. Estabeleço limites rígidos: meu corpo é minha propriedade privada.", w: { Knight: 3, Prince: 2, Thief: 1, Heir: -3 } },
    { txt: "Dou um jeito de tornar o abraço constrangedor para ele, invertendo a dinâmica para que ele nunca mais queira fazer isso.", w: { Witch: 3, Bard: 2, Mage: 1, Sylph: -2 } },
    { txt: "Entendo a carência dele e tento redirecionar essa necessidade de afeto para outra forma de cumprimento menos invasiva.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -1 } }
]},
{ t: "Você contraiu uma dívida financeira com um amigo. Ele diz 'pague quando puder', mas a tensão paira no ar.", opts: [
    { txt: "Trabalho obsessivamente para pagar o mais rápido possível. A sensação de dever algo a alguém é uma corrente que me asfixia.", w: { Knight: 3, Maid: 2, Prince: 1, Bard: -2 } },
    { txt: "Convenço a mim mesmo (e a ele) de que, com tudo que já fiz por ele no passado, estamos quites. A dívida é anulada pelo histórico.", w: { Thief: 3, Witch: 2, Prince: 1, Page: -1 } },
    { txt: "Sinto-me tão culpado que começo a evitar o amigo, deixando a vergonha corroer a amizade lentamente.", w: { Page: 3, Bard: 2, Rogue: 1, Sylph: -2 } },
    { txt: "Pago a dívida em 'favores' e serviços, integrando essa troca na dinâmica da nossa relação de forma natural.", w: { Heir: 3, Sylph: 2, Seer: 1, Knight: -1 } }
]},
{ t: "Dois amigos seus terminam um namoro de forma catastrófica. Ambos exigem que você escolha um lado.", opts: [
    { txt: "Recuso-me a escolher. Tento manter a ponte entre os dois, atuando como mediador, mesmo que ambos fiquem com raiva de mim.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
    { txt: "Escolho o lado que me parece mais 'útil' ou com quem tenho mais afinidade, e corto o outro sem piedade. Lealdade dividida é fraqueza.", w: { Thief: 3, Knight: 2, Witch: 1, Rogue: -3 } },
    { txt: "Saio de perto dos dois. A instabilidade emocional deles é contagiosa e prefiro não ser arrastado para o drama.", w: { Prince: 3, Bard: 2, Mage: 1, Maid: -2 } },
    { txt: "Absorvo as reclamações de ambos, servindo de lixeira emocional para os dois lados, sem nunca dar minha própria opinião.", w: { Rogue: 3, Page: 2, Maid: 1, Thief: -2 } }
]},
{ t: "Você está em um show lotado, prensado contra estranhos, sentindo o calor e o suor da multidão.", opts: [
    { txt: "Entro em pânico ou fico furioso. A invasão da minha individualidade por essa massa de carne anônima é insuportável.", w: { Prince: 3, Knight: 2, Thief: 1, Heir: -3 } },
    { txt: "Deixo-me levar pela onda. A sensação de ser apenas uma gota em um oceano de gente é estranhamente libertadora e segura.", w: { Heir: 3, Bard: 2, Rogue: 1, Knight: -2 } },
    { txt: "Fico atento a rotas de fuga e à segurança de quem está comigo. Alguém precisa estar sóbrio no meio do caos.", w: { Seer: 3, Maid: 2, Mage: 1, Bard: -2 } },
    { txt: "Uso a densidade da multidão a meu favor para chegar mais perto do palco, empurrando e manipulando o fluxo de pessoas.", w: { Witch: 3, Thief: 2, Knight: 1, Page: -1 } }
]},
{ t: "Você precisa usar um uniforme ridículo para o trabalho ou escola. Todos usam, mas você se sente humilhado.", opts: [
    { txt: "Customizo o uniforme, alterando detalhes para recuperar minha identidade. Posso ser parte do grupo, mas nos meus termos.", w: { Witch: 3, Thief: 2, Knight: 1, Maid: -2 } },
    { txt: "Uso o uniforme com orgulho irônico ou total dedicação. Ele é o símbolo do meu papel ali, e eu visto a camisa (literalmente).", w: { Maid: 3, Heir: 2, Page: 1, Prince: -3 } },
    { txt: "Sinto-me apagado. O uniforme mata quem eu sou e me torna apenas mais um número na engrenagem.", w: { Rogue: 3, Mage: 2, Bard: 1, Sylph: -1 } },
    { txt: "Recuso-me ou 'esqueço' de usar partes dele. Prefiro ser punido a me submeter a essa homogeneização forçada.", w: { Prince: 3, Bard: 2, Mage: 1, Heir: -2 } }
]},
{ t: "Você vê alguém se machucar feio na sua frente (fratura exposta ou muito sangue). Qual sua reação visceral?", opts: [
    { txt: "Sinto a dor como se fosse minha, fico enjoado e quase desmaio. A barreira entre meu corpo e o dele parece sumir.", w: { Mage: 3, Seer: 2, Page: 1, Prince: -1 } },
    { txt: "Ajo imediatamente para estancar o sangue. Não penso, apenas executo a manutenção necessária para consertar o estrago.", w: { Sylph: 3, Maid: 2, Knight: 1, Bard: -2 } },
    { txt: "Fico paralisado ou me afasto com repulsa. A fragilidade da carne me aterroriza e não consigo lidar com a realidade crua daquilo.", w: { Prince: 3, Bard: 2, Rogue: 1, Sylph: -3 } },
    { txt: "Protejo a cena, impedindo que curiosos se aproximem. Assumo o controle do espaço ao redor da vítima.", w: { Knight: 3, Witch: 2, Thief: 1, Page: -1 } }
]}
],
    "Breath": [
{ t: "Você recebe uma proposta de relacionamento (ou parceria de negócios) que é perfeita no papel: segura, estável e com alguém que te adora. Mas ela exige um compromisso irrevogável de 10 anos.", opts: [
    { txt: "Sinto um pânico visceral. Recuso ou saboto a proposta na hora, pois a ideia de saber onde estarei daqui a 10 anos me soa como uma sentença de morte.", w: { Thief: 3, Witch: 2, Bard: 1, Sylph: -2 } },
    { txt: "Aceito imediatamente e me agarro a isso. Eu secretamente anseio por alguém que me dê as raízes e a estrutura que sou incapaz de criar sozinho.", w: { Prince: 3, Page: 2, Knight: 1, Heir: -3 } },
    { txt: "Aceito, mas mantenho 'rotas de fuga' mentais ou financeiras. Estou lá, mas uma parte de mim permanece desvinculada para o caso de precisar partir.", w: { Mage: 3, Rogue: 2, Seer: 1, Prince: -2 } },
    { txt: "Deixo a resposta vaga e vou empurrando com a barriga, esperando que a outra pessoa decida por mim ou que a situação mude naturalmente.", w: { Heir: 3, Bard: 2, Maid: -1, Knight: -2 } }
]},
{ t: "Você sofreu um acidente e ficará confinado a uma cama, sem poder sair de casa, por seis meses. O isolamento físico é total.", opts: [
    { txt: "Transformo o quarto no meu império. Trago o mundo até mim através da internet e faço as pessoas virem me visitar. Se não vou ao mundo, o mundo vem a mim.", w: { Maid: 3, Witch: 2, Thief: 1, Page: -1 } },
    { txt: "Entro em uma depressão profunda. Sem movimento físico, sinto que minha existência perdeu a validade. Eu sou o que eu faço e onde estou.", w: { Knight: 3, Prince: 2, Heir: -1, Seer: -2 } },
    { txt: "Aproveito a pausa forçada. Encaro como uma liberdade das obrigações sociais. Finalmente posso 'flutuar' na minha própria mente sem culpa.", w: { Heir: 3, Sylph: 2, Mage: 1, Knight: -3 } },
    { txt: "Fico obcecado em monitorar a vida dos outros pelas redes sociais, vivendo vicariamente através da liberdade alheia que me foi roubada.", w: { Rogue: 3, Page: 2, Seer: 1, Bard: -1 } }
]},
{ t: "Em um grupo de amigos, percebem que você muda de personalidade dependendo de quem está por perto, como um camaleão, sem uma identidade fixa.", opts: [
    { txt: "Isso é uma estratégia deliberada. Eu me torno quem eu preciso ser para navegar situações sociais e conseguir o que quero sem atrito.", w: { Thief: 3, Witch: 2, Mage: 1, Page: -2 } },
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
    { txt: "Fico furioso com a falta de direção e incompetência. Tomo as rédeas para forçar o projeto a continuar de forma independente ou vingativa.", w: { Witch: 3, Maid: 2, Prince: 1, Page: -1 } },
    { txt: "Dou de ombros e sigo o fluxo. Se não era para ser, não era. Não gasto energia remando contra a maré.", w: { Sylph: 3, Mage: 2, Seer: 1, Prince: -3 } },
    { txt: "Sinto que falhei em proteger o trabalho. Culpo minha falta de habilidade em manter o projeto 'vivo' e relevante.", w: { Knight: 3, Page: 2, Seer: -1, Thief: -2 } }
]},
{ t: "Você presencia uma injustiça ocorrendo, mas intervir exigiria que você se expusesse publicamente e assumisse um lado, perdendo sua neutralidade.", opts: [
    { txt: "Intervenho, mas de forma indireta e anônima. Manipulo a situação dos bastidores para resolver o problema sem que minha liberdade seja comprometida.", w: { Rogue: 3, Mage: 2, Thief: 1, Knight: -1 } },
    { txt: "Fico de fora. Acredito que cada um é responsável pelo seu próprio caminho e interferir seria violar a autonomia das partes envolvidas.", w: { Bard: 3, Seer: 2, Heir: 1, Maid: -2 } },
    { txt: "Tomo a frente agressivamente. Uso minha voz para 'limpar o ar', mesmo que isso custe minha reputação. A verdade precisa circular.", w: { Maid: 3, Knight: 2, Witch: 1, Page: -1 } },
    { txt: "Tento mediar o conflito, ouvindo os dois lados e dissipando a tensão, agindo como um equalizador de pressões.", w: { Sylph: 3, Seer: 2, Heir: -1, Prince: -2 } }
]},
{ t: "Alguém muito próximo desaparece da sua vida (ghosting) sem dar explicações. Como você processa o vácuo deixado?", opts: [
    { txt: "Fico obcecado em descobrir o 'porquê'. Analiso cada interação passada buscando o momento onde o fio se partiu.", w: { Seer: 3, Mage: 2, Page: 1, Heir: -2 } },
    { txt: "Sinto raiva e decido que a pessoa 'morreu' para mim. Mato a memória dela na minha mente para não ter que lidar com a ausência.", w: { Prince: 3, Witch: 2, Thief: 1, Sylph: -2 } },
    { txt: "Aceito naturalmente. Pessoas vêm e vão, e tentar prender alguém é inútil. O espaço que ela deixou logo será preenchido.", w: { Heir: 3, Bard: 2, Rogue: 1, Knight: -2 } },
    { txt: "Preencho o vazio com atividades frenéticas ou novas pessoas. Não suporto o silêncio que a ausência dela deixou no meu dia a dia.", w: { Maid: 3, Knight: 2, Thief: -1, Mage: -1 } }
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
    
    render(`
        <div class="fade-in">
            <h1>ASPECTO: ${state.dominantAspect.toUpperCase()}</h1>
            <p>O universo te vê através da lente do <strong>${state.dominantAspect}</strong>. Este é o seu desafio existencial.</p>
            <p>Agora, vamos observar como você <strong>responde</strong> a essa carga.</p>
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
    let sorted = Object.entries(state.classScores).sort((a, b) => b[1] - a[1]);
    state.likelyClass = sorted[0][0];
    
    render(`
        <div class="result-box fade-in">
            <h1 style="font-size: 32px;">${state.likelyClass.toUpperCase()} OF ${state.dominantAspect.toUpperCase()}</h1>
            <p>Sua análise está completa. Diante da realidade do <strong>${state.dominantAspect}</strong>, sua estratégia de sobrevivência é a do <strong>${state.likelyClass}</strong>.</p>
            <div class="debug">Potencial de erro: ${sorted.slice(0,3).map(x=>x[0]+":"+x[1]).join(" | ")}</div>
            <button onclick="location.reload()">REINICIAR SESSÃO</button>
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

