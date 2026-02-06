const aspectQuestions = [
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
];

const questionsByAspect = {
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
	] 
  ] 
}; 