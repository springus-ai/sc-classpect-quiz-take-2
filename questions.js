const aspectQuestions = [
    { t: "1. Um grupo de amigos insiste em manter uma tradição anual que você acha cansativa. O que você faz?", opts: [
        { txt: "Acabo indo, mas só para cumprir o protocolo. Me incluíram, mas não significa que estou ali de corpo e alma.", w: { Doom: 3, Life: 1, Breath: 1 } },
        { txt: "Insisto para que todos compareçam. Se a gente começar a abrir exceções, o grupo acaba se perdendo com o tempo.", w: { Blood: 4, Breath: -2 } }, 
        { txt: "Não vou. Se não está me fazendo bem, não faz sentido me sentir preso a um compromisso só por obrigação.", w: { Breath: 3, Void: 3, Life: 1, Blood: -3 } },
        { txt: "Tento convencer o pessoal a mudar um pouco o plano para algo que canse menos, mas que ainda sirva para a gente se reunir.", w: { Mind: 3, Life: 2, Space: 2, Heart: -1 } },
        { txt: "Analiso o motivo do meu cansaço. Pode não ter nada a ver com a tradição em si, mas com algum outro fator na minha vida que esteja me exaurindo.", w: { Heart: 3, Time: 2 } }
    ]},
    { t: "2. Você descobre um erro grave de um colega de trabalho que é seu amigo. Isso pode prejudicá-lo no futuro. O que você faz?", opts: [
        { txt: "Digo a ele exatamente o que vi. Ele precisa ter todos os fatos em mãos para ter clareza sobre a própria situação.", w: { Light: 3, Rage: 3, Void: -3 } }, 
        { txt: "Mantenho segredo. Trazer isso à tona agora só criaria um clima ruim e uma atenção negativa que ninguém precisa.", w: { Void: 4, Blood: 3, Light: -3 } }, 
        { txt: "Não me meto. Se o erro aconteceu, as consequências virão naturalmente e não acho que eu deva interferir no que tem que ser.", w: { Doom: 3, Time: 3, Life: -2 } },
        { txt: "Aviso ele e ajudo a bolar uma forma de consertar o erro antes que isso gere um efeito dominó e piore as coisas.", w: { Life: 3, Space: 1, Mind: 1 } },
        { txt: "Depende. O erro dele pode me prejudicar ou as pessoas ao meu redor.", w: { Mind: 3, Time: 2, Doom: -2 } }
    ]},
    { t: "3. Ao iniciar um novo projeto pessoal, qual é a sua maior preocupação?", opts: [
        { txt: "Se eu vou conseguir dar forma a tudo o que imaginei e fazer aquilo realmente ocupar o espaço que merece no mundo.", w: { Space: 3, Hope: 2, Time: -2 } },
        { txt: "Se  terei a disciplina necessária para não desistir do projeto antes de finalizar.", w: { Time: 3, Breath: 2, Space: -2, Life: 1 }, destroys: "Space" },
        { txt: "Se esse projeto realmente diz algo verdadeiro sobre mim ou se estou apenas seguindo um impulso que não me representa.", w: { Heart: 3, Rage: 3, Mind: -3 } },
        { txt: "Se eu tomei as decisões certas no planejamento ou se estou ignorando alguma falha que vai arruinar o resultado depois.", w: { Mind: 3, Light: 1, Heart: -3 } },
        { txt: "Se isso que estou criando tem potencial para me levar a lugares novos e realmente mudar minha situação atual.", w: { Life: 3, Light: 2, Doom: -3 } } 
    ]},
    { t: "4. Como você lida com uma crítica dura sobre sua competência?", opts: [
        { txt: "Avalio se os pontos levantados fazem sentido ou se a pessoa apenas tomou uma decisão errada ao me julgar daquela forma.", w: { Heart: 3, Time: 1 } },
        { txt: "Me irrito profundamente. Minha competência não deve ser questionada pois exerço meu trabalho sempre com maestria.", w: { Heart: 3, Light: 2 } },
        { txt: "Fico questionando a real intenção por trás da crítica. As pessoas podem julgar por muitos motivos diferentes.", w: { Light: 3, Rage: 2 } },
        { txt: "Aceito o que foi dito. Se eu falhei em ser eficiente, é natural que eu tenha que lidar com as cobranças e os resultados disso.", w: { Doom: 3, Void: 1, Time: 2, Life: -2 } },
        { txt: "Tento enxergar o que a pessoa viu. Às vezes ela percebeu algum detalhe ou uma informação importante que passou batido por mim.", w: { Blood: 3, Light: 2, Void: -2 } }
    ]},
    { t: "5. Em uma discussão acalorada, o que mais te irrita nos outros?", opts: [
        { txt: "Gente que tenta 'amaciar' a situação ou manter um otimismo forçado quando as coisas estão claramente um desastre.", w: { Rage: 3, Life: 2, Hope: -3 } },
        { txt: "Gente que não interfere ou que se fecha para possibilidades só porque 'as regras não permitem' ou 'é impossível'.", w: { Hope: 4, Life: 1, Rage: 1 } }, 
        { txt: "Gente que trata o problema de forma fria e técnica demais, ignorando completamente o que as pessoas envolvidas estão sentindo.", w: { Heart: 3, Breath: 2, Mind: -3, Time: -1 } },
        { txt: "Gente que perde o controle e começa a agir por puro impulso emocional, sem parar um segundo para pensar no que é mais sensato fazer.", w: { Mind: 3, Space: 1, Heart: -3 } },
        { txt: "Gente que fica dando voltas e focando em detalhes que não servem para nada, em vez de ir direto ao ponto que realmente importa.", w: { Light: 3, Blood: 2, Time: 2, Void: -2 } }
    ]},
    { t: "6. Você tem um final de semana livre. Como se sente parado?", opts: [
        { txt: "Inquieto. Sinto que cada hora que passo sem produzir algo concreto é um desperdício de um recurso que não volta mais.", w: { Time: 3, Life: 1, Space: -2 } }, 
        { txt: "Meio culpado. Estar sozinho e parado me faz sentir que estou falhando com as pessoas que dependem de mim ou que estou perdendo o contato com o que importa.", w: { Blood: 3, Rage: 3, Doom: 1, Breath: -3 } },
        { txt: "Leve. Aproveito a tranquilidade e uso meu tempo para focar no que gosto de fazer e no que me der na telha.", w: { Breath: 3, Space: 3, Hope: 2, Time: -3 } },
        { txt: "Reflexivo. Uso o silêncio para tentar entender se o que eu estou fazendo da vida hoje é o que eu realmente quero.", w: { Heart: 3, Life: 2, Mind: -1, Light: -1 } },
        { txt: "Entediado. Se não houver algo novo acontecendo ou algum estímulo externo, sinto como se minha energia estivesse estagnando.", w: { Life: 3, Rage: 1, Mind: 2, Doom: -2 } }
    ]},
    { t: "7. O que mais te atrai em alguém que você acabou de conhecer?", opts: [
        { txt: "A autenticidade. Sinto-me atraído por quem parece estar em paz consigo mesmo e não finge ser o que não é.", w: { Heart: 3, Blood: 2, Mind: -2 } },
        { txt: "A objetividade. Admiro quem consegue ser direto e coerente, sem deixar que o ego ou as emoções nublem o que é sensato.", w: { Mind: 1, Light: 3, Heart: -3 } },
        { txt: "A confiabilidade. Gosto de pessoas que transmitem segurança e que parecem levar a sério os compromissos que assumem.", w: { Blood: 3, Rage: 1, Doom: 3, Breath: -2 } },
        { txt: "O mistério. Sou cativado por quem não se expõe logo de cara e me sinto compelido a desvendar o que está por trás da máscara.", w: { Light: 2, Doom: 2, Void: -3 } },
        { txt: "A inovatividade. Me interesso por quem parece estar sempre criando ou transformando algo ao seu redor.", w: { Space: 3, Life: 2, Time: -2 } }
    ]},
    { t: "8. Você precisa demitir alguém esforçado sem resultados. Como lida?", opts: [
        { txt: "Foco no que é necessário para o sistema funcionar. Se uma peça não está cumprindo seu papel, ela precisa ser podada para servir ao todo.", w: { Mind: 3, Space: 2, Blood: 2, Life: -3 } },
        { txt: "Tento dar mais uma chance ou mudar a pessoa de função. Acredito que, com o estímulo certo, qualquer um pode florescer e dar a volta por cima.", w: { Life: 3, Hope: 3, Doom: -3 } },
        { txt: "Sinto o peso da decisão. Tento fazer o processo ser o menos doloroso possível, garantindo que a pessoa saiba que ainda tem meu apoio pessoal.", w: { Breath: 3, Doom: 2, Heart: 2, Mind: -1 } },
        { txt: "Sou direto e honesto sobre os fatos. Mentir ou dar falsas esperanças só faria a pessoa perder tempo em um lugar onde ela não terá futuro.", w: { Rage: 3, Light: 2, Hope: -3 } },
        { txt: "Analiso a situação de fora. Se o desligamento é a conclusão lógica baseada nos dados, eu executo a decisão sem deixar que o sentimentalismo interfira no veredito.", w: { Void: 3, Space: 2, Heart: -3 } }
    ]},
    { t: "9. Qual é a sua relação com lembranças, fotos e o passado?", opts: [
        { txt: "Guardo objetos e fotos com cuidado. Ter algo físico para tocar me ajuda a sentir que aqueles momentos e pessoas ainda ocupam um espaço real na minha vida.", w: { Time: 3, Doom: 2, Space: -2 } },
        { txt: "Olho para o passado com apreço. O futuro só existe por conta do passado, seja ele bom ou ruim.", w: { Space: 3, Hope: 3 } },
        { txt: "O passado serve como aprendizado. Guardo o que aconteceu apenas para analisar as consequências das minhas escolhas e não cometer o mesmo erro de novo.", w: { Mind: 3, Light: 1 } },
        { txt: "Minhas memórias são o que me dão força. Acredito que o que vivi é a prova de que coisas melhores ainda podem ser construídas no futuro.", w: { Hope: 3, Breath: 2, Rage: 2 } },
        { txt: "Não dou muita importância. O que passou já perdeu o brilho; prefiro focar no agora sem carregar o peso do que já foi.", w: { Void: 3, Breath: 2, Time: -2 } }
    ]},
    { t: "10. Diante de um impasse sem solução, qual sua reação?", opts: [
        { txt: "Tento forçar uma solução. Às vezes a única saída é forçar a passagem e derrubar o que está bloqueando o caminho, custe o que custar.", w: { Doom: 3, Rage: 1, Hope: -2 } },
        { txt: "Aceito o limite. Se o caminho fechou, é porque chegamos ao fim da linha e não adianta lutar contra uma situação que já está decidida.", w: { Time: 3, Life: -3 } },
        { txt: "Não aceito que não tenha solução. Acredito que sempre há uma saída se persistirmos e mantivermos a convicção.", w: {Hope: 3, Rage: 3, Life: 1 } },
        { txt: "Tento bolar uma ferramenta nova ou abordar o problema por um ângulo diferente para contornar o obstáculo.", w: { Space: 3, Breath: 2, Mind: 3, Time: -1 } },
        { txt: "Paro tudo e volto a investigar. Se parece sem solução, é porque ainda tem algum detalhe importante que eu não consegui enxergar.", w: { Light: 3, Time: 1, Void: -3 } }
    ]},
    { t: "11. Um segredo perigoso chega até você. O que pensa?", opts: [
        { txt: "Se essa informação me foi confiada ou se ela pode afetar as pessoas ao meu redor, eu a guardo comigo, não importa o peso.", w: { Blood: 3, Doom: 2, Void: 2, Breath: -2 } },
        { txt: "Se esse segredo for revelado no momento certo, ele pode trazer a clareza que todos precisam para agir.", w: { Light: 3, Mind: 1, Void: -3 } },
        { txt: "Segredos geralmente são usados para esconder verdades feias ou para manipular quem não sabe de nada.", w: { Mind: 3, Rage: 2, Hope: -2 } },
        { txt: "Não quero saber. Não quero que essa informação mude minha paz ou me obrigue a tomar partido.", w: { Void: 3, Breath: 2, Light: -3 } },
        { txt: "Um segredo é apenas mais uma variável que pode alterar o resultado das minhas escolhas futuras.", w: { Mind: 2, Time: 2, Heart: -2 } }
    ]},
    { t: "12. O grupo insiste em um plano fadado ao erro por otimismo. O que faz?", opts: [
        { txt: "Digo abertamente que vai dar errado. Prefiro ser o chato que fala a verdade do que ver todo mundo se perdendo numa mentira confortável.", w: { Rage: 3, Blood: 2, Hope: -3 } },
        { txt: "Mostro por que a ideia não faz sentido e apresento uma alternativa. Não vou seguir um caminho que a lógica já mostra que é um beco sem saída.", w: { Mind: 3, Light: 1, Heart: -2, Void: -3 } },
        { txt: "Me omito. Se foram eles bolaram o plano, deve ter alguma lógica - não cabe a mim interferir.", w: { Void: 3, Doom: 1, Rage: -2 } },
        { txt: "Vou com eles. Acredito que, se a gente mantiver o ânimo e a convicção, a nossa vontade pode acabar mudando o resultado final.", w: { Hope: 3, Life: 2, Rage: -2 } }, 
        { txt: "Observo o desenrolar das coisas. Se eles escolheram esse caminho, o fracasso é a consequência natural e eu vou usar a experiência para não repetir o erro.", w: { Space: 3, Light: 2, Time: -3 } }
    ]},
    { t: "13. Você está em um local onde ninguém te conhece. Como se sente?", opts: [
        { txt: "Livre. Sem expectativas, posso agir sem ser rotulado.", w: { Breath: 3, Space: 2, Blood: -2, Life: 1 } },
        { txt: "Prostrado. Preciso encontrar algo, ou alguém, que me conforte e valide a minha existência.", w: { Light: 3, Heart: 2, Void: 2, Breath: -3 } }, 
        { txt: "Observador. Chance perfeita para analisar a dinâmica do local, sem me envolver.", w: { Void: 2, Time: 3, Heart: -1 } },
        { txt: "Imaginativo. Tomo o momento para me refugiar na minha própria cabeça.", w: { Hope: 3, Blood: 1, Void: -3 } },
        { txt: "Desconectado. Sozinho, não tenho um motivo para estar aqui.", w: { Blood: 3, Doom: 2, Breath: -3 } }
    ]},
    { t: "14. Você precisa magoar alguém para um objetivo. O que dói?", opts: [
        { txt: "O fato de que estou sendo falso comigo mesmo. Odeio ter que agir contra o que eu sinto que é certo só para cumprir uma meta.", w: { Heart: 3, Blood: -2, Hope: 2 } },
        { txt: "A frustração de não ter encontrado uma solução melhor. Magoar alguém foi o sacrifício necessário.", w: { Doom: 3, Light: 3, Heart: -3 } },
        { txt: "A quebra da confiança. Saber que essa atitude vai manchar ou destruir o vínculo que eu tinha com aquela pessoa, talvez para sempre.", w: { Blood: 3, Time: 2, Breath: -2 } },
        { txt: "A necessidade do sacrifício. É péssimo ter que passar por cima de alguém ou de algo vivo para que o projeto continue avançando.", w: { Life: 3, Breath: 2, Hope: 1, Doom: -3 } },
        { txt: "A confirmação de que o mundo é cruel. Magoar alguém é apenas a realidade batendo à porta, mostrando que nem tudo se resolve com boas intenções.", w: { Rage: 3, Doom: 1, Hope: -3 } } 
    ]},
    { t: "15. Qual o seu maior medo em relação ao futuro?", opts: [
        { txt: "Ficar preso a uma rotina ou a um lugar de onde eu não consiga sair. A ideia de perder a minha autonomia e ser confinado me apavora.", w: { Breath: 3, Void: 2, Time: -3 } },
        { txt: "Perceber que meus ideais eram vazios e que o futuro emininente é sem sentido, onde nada do que eu acreditei pode florescer.", w: { Hope: 3, Life: 3, Time: -3 } },
        { txt: "Perceber que a minha existência não teve importância nenhuma ou que eu passarei pelo mundo sem que ninguém realmente me tenha visto.", w: { Light: 3, Heart: 3, Void: -3 } },
        { txt: "Ser exposto de uma forma que eu não consiga controlar. Tenho medo que vasculhem a minha vida e tirem de mim a paz do anonimato.", w: { Void: 3, Mind: 2, Light: -3 } }, 
        { txt: "Não ter tempo suficiente. Sinto uma angústia constante de que o tempo está acabando e eu não vou conseguir concluir o que é necessário antes que o prazo expire.", w: { Time: 3, Doom: 3, Space: -2 } }
    ]},
    { t: "16. Você recebe uma tarefa repetitiva. Como reage?", opts: [
        { txt: "Aceito-a. Há um certo conforto na repetição; saber exatamente o que esperar e cumprir o ciclo me dá uma sensação de segurança e ordem.", w: { Doom: 3, Time: 3, Space: -2, Life: -2 } },
        { txt: "Sinto-me sufocado. Odeio qualquer coisa que me obrigue a ficar parado ou que impeça o meu crescimento e a busca por algo mais vibrante.", w: { Life: 3, Breath: 2, Doom: -3 } }, 
        { txt: "Tento encontrar o padrão por trás daquilo. Se eu entender como o processo funciona, posso otimizá-lo e executá-lo de forma automática.", w: { Mind: 3, Space: 2, Heart: -1 } },
        { txt: "Encaro como uma oportunidade para 'desligar'. Cumpro a função mecanicamente enquanto a minha mente dissocia.", w: { Void: 3, Breath: 3, Light: -2 } },
        { txt: "Questiono a tarefa. Não me importo em ter que fazê-la, mas sim com o objetivo dela.", w: { Rage: 2, Light: 3 } }
    ]},
    { t: "17. Em uma competição, o que é o sucesso?", opts: [
        { txt: "A perpetuação de um ideal. O sucesso é mostrar que o que eu acredito é possível e conseguir inspirar os outros com esse resultado.", w: { Hope: 3, Breath: 1, Life: 1, Rage: -3 } }, 
        { txt: "A vitória. O sucesso é quando a competição revela quem realmente é competente e quem não é.", w: { Rage: 2, Light: 3, Hope: -3, Void: -3 } }, 
        { txt: "A camaradagem. O sucesso não é ganhar sozinho, mas garantir que todos saíram fortalecidos da experiência.", w: { Blood: 3, Heart: 1, Breath: -2 } },
        { txt: "A perfeição do resultado. O sucesso é quando o que foi entregue atinge um nível de excelência técnica que não pode ser contestado.", w: { Space: 3, Mind: 2, Time: -2 } },
        { txt: "A satisfação de ter dado meu melhor. Se me esforcei, independentemente do placar, estou satisfeito.", w: { Heart: 3, Void: 1, Mind: -3 } }
    ]},
    { t: "18. Se você descobrisse que toda a sua trajetória até aqui foi, na verdade, planejada ou 'escrita' por outra pessoa, qual seria seu maior incômodo?", opts: [
        { txt: "O fato de que minhas escolhas não foram realmente minhas. É irritante pensar que minha vontade foi apenas uma peça em um tabuleiro que eu não controlei.", w: { Heart: 3, Blood: 1 } },
        { txt: "A dúvida sobre o que é a verdade. Se minha história foi escrita, os eventos que presenciei não são genuínos e precisam ser reavaliados.", w: { Rage: 3, Mind: 1, Hope: -3 } },
        { txt: "Sentiria um alívio profundo, na verdade. Saber que existe um propósito maior e que nada foi por acaso me dá a paz de que minha vida tem um sentido real.", w: { Hope: 3, Doom: 1, Rage: -3 } },
        { txt: "A sensação de estar preso. Saber que existe um trilho me faz sentir como se eu estivesse acorrentado a um papel, quando eu só queria ser livre para ir para onde eu quisesse.", w: { Breath: 3, Space: 1 } },
        { txt: "O medo do desfecho. Se existe um roteiro, existe um fim planejado, e a ideia de que meus limites e o meu 'prazo de validade' já foram decididos é o que mais me assusta.", w: { Time: 3, Doom: 3, Life: -2 } }
    ]},
    { t: "19. Como você prefere ser lembrado?", opts: [
        { txt: "Como alguém que inspirou os outros. Quero que a minha passagem pelo mundo seja vista como um exemplo de que coisas melhores são possíveis.", w: { Hope: 3, Life: 2, Breath: 1 } },
        { txt: "Pelas coisas que criei. Quero deixar um legado físico e duradouro, algo que ocupe um espaço real mesmo quando eu não estiver aqui.", w: { Space: 3, Time: 2, Void: -1 } }, 
        { txt: "Como alguém que foi o alicerce de quem precisava. Quero ser lembrado como a pessoa que manteve as coisas unidas quando tudo ia cair.", w: { Blood: 3, Doom: 2 } },
        { txt: "Prefiro não ser lembrado de forma pública. O meu sucesso é ter vivido a minha vida com privacidade e silêncio, sem precisar de atenção externa.", w: { Void: 3, Mind: 1, Light: -3 } },
        { txt: "Quero que a minha história seja vista como algo importante e que trouxe significado para as pessoas que amei.", w: { Light: 3, Heart: 3, Void: -3 } }
    ]},
    { t: "20. O que é liberdade para você?", opts: [
        { txt: "Não ter de dar satisfações. Liberdade é poder ir para onde eu quiser e recomeçar sem os rótulos e as expectativas que os outros me impõem.", w: { Breath: 3, Void: 2, Blood: -3 } }, 
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
    { t: "Como você encara o conceito de 'legado' e o que deixa para o futuro?", opts: [
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
        { txt: "Eu limpo a bagunça dele sem perguntar. A desordem dele ofende minha necessidade de um ambiente funcional.", w: { Maid: 3, Knight: 2, Prince: -2, Bard: -2 } },
        { txt: "Eu jogo tudo no lixo imediatamente. O acúmulo de tralhas é um desperdício e prefiro o vazio à desordem.", w: { Prince: 3, Bard: 1, Sylph: -3, Maid: -2 } },
        { txt: "Eu nem noto. Vou empurrando as coisas dele para o lado para caber o meu prato e sigo a vida no meio do caos.", w: { Bard: 3, Heir: 1, Mage: -1, Prince: -3 } },
        { txt: "Pego os objetos mais úteis dele e incorporo ao meu lado. Se ele não cuida, eu vou usar melhor.", w: { Thief: 3, Witch: 1, Rogue: -2, Page: -1 } },
        { txt: "Tento reorganizar as coisas dele de um jeito que o espaço fique mais fácil de manter sem eu precisar refazer tudo depois.", w: { Sylph: 3, Seer: 1, Maid: 1, Prince: -3 } }
    ]},
    { t: "Você está em uma festa onde não conhece ninguém e o ambiente parece grande demais para se situar.", opts: [
        { txt: "Vou circulando pelo espaço até achar um canto, objeto ou detalhe interessante onde eu consiga me encaixar naturalmente.", w: { Heir: 3, Rogue: 1, Knight: -1, Prince: -1 } },
        { txt: "Começo a observar a disposição do lugar: onde as pessoas se agrupam, onde dá para respirar e quais cantos parecem mais confortáveis.", w: { Seer: 3, Mage: 1, Bard: -1, Page: -1 } },
        { txt: "Se o ambiente não me acolhe, eu mesmo crio um pequeno território: sento num lugar, apoio minhas coisas e faço dali meu ponto fixo.", w: { Maid: 3, Knight: 1, Bard: -1, Prince: -1 } },
        { txt: "Acabo ocupando o espaço dos outros sem perceber muito: deixo bolsa, copo ou corpo onde der, só tentando me sentir menos deslocado.", w: { Page: 3, Thief: 1, Sylph: -1, Knight: -1 } },
        { txt: "Se eu acho o lugar ruim ou desconfortável demais, simplesmente vou embora ou me isolo. Não tenho paciência para ambiente que me expulsa.", w: { Prince: 3, Bard: 1, Heir: -1, Sylph: -1 } }
    ]},
    { t: "Um amigo próximo mudou-se para outro país, e a amizade agora depende de lidar com a distância física.", opts: [
        { txt: "Aceito que a relação vai mudar de formato. Não tento forçar a mesma presença de antes, só deixo a amizade encontrar outro espaço.", w: { Heir: 3, Seer: 1, Thief: -2, Knight: -1 } },
        { txt: "Crio formas materiais de manter presença: fotos, chamadas marcadas, cartas, presentes ou pequenos objetos que lembrem a pessoa.", w: { Maid: 3, Sylph: 1, Bard: -1, Prince: -1 } },
        { txt: "Vou esquecendo de manter contato. Se a pessoa não está mais no meu espaço cotidiano, ela naturalmente sai do meu campo de atenção.", w: { Bard: 3, Heir: 1, Sylph: -2, Maid: -1 } },
        { txt: "Tento ocupar um pedaço do espaço novo da pessoa à distância, pedindo fotos, detalhes e atualizações do lugar onde ela vive agora.", w: { Witch: 3, Knight: 1, Prince: -1, Rogue: -1 } },
        { txt: "Sinto a ausência como um espaço grande demais e tento preencher com outras pessoas, lugares ou rotinas para não ficar encarando o vazio.", w: { Rogue: 3, Sylph: 1, Thief: -1, Prince: -1 } }
    ]},
    { t: "Você decidiu começar um hobby manual ou criativo, mas não tem as ferramentas certas nem um lugar ideal para praticar.", opts: [
        { txt: "Improviso com o que tenho. Qualquer objeto pode virar ferramenta se eu entender como usar.", w: { Knight: 3, Mage: 1, Bard: -1, Page: -1 } },
        { txt: "Arrumo um canto, separo materiais e crio um espaço mínimo para começar direito.", w: { Maid: 3, Sylph: 1, Bard: -1, Prince: -1 } },
        { txt: "Pego materiais emprestados, ocupo mesa dos outros e vou deixando minhas coisas espalhadas até o hobby caber na casa.", w: { Thief: 3, Page: 1, Rogue: -1, Sylph: -1 } },
        { txt: "Começo de qualquer jeito. Se ficar torto, quebrado ou estranho, faz parte do processo.", w: { Bard: 3, Heir: 1, Seer: -1, Knight: -1 } },
        { txt: "Vou testando, errando e ajustando fisicamente até entender como aquele material funciona de verdade.", w: { Mage: 3, Knight: 1, Page: -1, Prince: -1 } }
    ]},
    { t: "Alguém entra no seu quarto sem bater enquanto você está focado em algo criativo.", opts: [
        { txt: "Expulso a pessoa imediatamente. Meu espaço de criação não é lugar para intrusão aleatória.", w: { Prince: 3, Knight: 1, Sylph: -3, Rogue: -1 } },
        { txt: "Escondo o que estou fazendo. Ainda está incompleto demais para alguém ver.", w: { Rogue: 3, Page: 2, Heir: -1, Prince: -1 } },
        { txt: "Integro a interrupção ao processo. Se a pessoa apareceu, talvez isso mude a direção da criação de um jeito interessante.", w: { Witch: 3, Heir: 1, Prince: -2, Knight: -1 } },
        { txt: "Não faço nada. A pessoa entra, olha, mexe, fala, e eu continuo no meu mundo como se o quarto ainda fosse só meu.", w: { Bard: 3, Mage: 1, Knight: -2, Prince: -1 } },
        { txt: "Aproveito a presença da pessoa para pedir uma opinião prática sobre forma, cor, posição ou composição.", w: { Sylph: 3, Seer: 1, Rogue: -1, Prince: -1 } }
    ]},
    { t: "Você está em um elevador lotado e desconfortável.", opts: [
        { txt: "Tento ocupar o mínimo de espaço possível, quase me fundindo à parede para não incomodar ninguém.", w: { Rogue: 3, Page: 1, Thief: -2, Prince: -1 } },
        { txt: "Analiso a posição das pessoas e encontro o melhor jeito de distribuir meu corpo sem piorar o aperto.", w: { Seer: 3, Knight: 1, Bard: -1, Page: -1 } },
        { txt: "Me desligo do desconforto. Fico olhando para um ponto qualquer e espero o elevador chegar.", w: { Bard: 3, Heir: 1, Knight: -2, Prince: -1 } },
        { txt: "Fico irritado com a falta de espaço e abro meu lugar se precisar. Também tenho direito de caber ali.", w: { Prince: 3, Thief: 1, Rogue: -2, Sylph: -1 } },
        { txt: "Tento aliviar o clima com um comentário leve, fazendo o espaço parecer menos sufocante para todo mundo.", w: { Sylph: 3, Heir: 1, Prince: -2, Mage: -1 } }
    ]},
    { t: "Ao se mudar, você encontra objetos de uma relação ou fase da vida que acabou mal.", opts: [
        { txt: "Destruo ou descarto tudo. Não quero que esses objetos continuem ocupando espaço na minha vida.", w: { Prince: 3, Witch: 1, Thief: -2, Sylph: -1 } },
        { txt: "Guardo algumas coisas porque elas ainda fazem parte da forma como minha história tomou corpo.", w: { Mage: 3, Heir: 1, Prince: -1, Bard: -1 } },
        { txt: "Dou os objetos para quem pode usar. Se não cabem mais comigo, ainda podem ganhar outra função em outro lugar.", w: { Rogue: 3, Sylph: 2, Thief: -2, Prince: -1 } },
        { txt: "Deixo tudo num canto por tempo demais. Não uso, não jogo fora, só deixo os objetos existirem até sumirem do meu campo de visão.", w: { Bard: 3, Heir: 1, Maid: -1, Prince: -1 } },
        { txt: "Pego os objetos bonitos ou úteis e incorporo ao meu espaço atual, mesmo que originalmente pertencessem a outra fase ou pessoa.", w: { Thief: 3, Witch: 1, Rogue: -2, Sylph: -1 } }
    ]},
    { t: "Você precisa reorganizar um cômodo pequeno para caber uma nova função nele.", opts: [
        { txt: "Meço tudo, reposiciono móveis e tento fazer cada objeto ocupar o lugar mais eficiente possível.", w: { Knight: 3, Seer: 1, Bard: -1, Page: -1 } },
        { txt: "Se não há espaço, eu crio espaço: tiro excessos, libero superfícies e abro circulação.", w: { Maid: 3, Sylph: 1, Thief: -1, Bard: -1 } },
        { txt: "Começo a mudar tudo de lugar sem plano fixo, testando combinações até o ambiente parecer certo.", w: { Witch: 3, Heir: 1, Seer: -1, Prince: -1 } },
        { txt: "Vou empilhando coisas em cantos e usando qualquer brecha disponível, mesmo que o resultado fique meio caótico.", w: { Page: 3, Thief: 1, Knight: -1, Sylph: -1 } },
        { txt: "Acho que o cômodo simplesmente não serve para isso e corto a ideia antes de desperdiçar energia tentando forçar.", w: { Prince: 3, Bard: 1, Maid: -1, Witch: -1 } }
    ]},
    { t: "Você encara um bloqueio criativo: uma tela, folha ou arquivo vazio esperando ser preenchido.", opts: [
        { txt: "Começo colocando qualquer forma, cor ou detalhe pequeno. O importante é dar ao vazio algo para crescer a partir dali.", w: { Maid: 3, Sylph: 1, Bard: -1, Prince: -1 } },
        { txt: "Rabisco qualquer coisa sem me preocupar se vai prestar. Às vezes a criação precisa nascer torta antes de virar algo.", w: { Bard: 3, Heir: 1, Knight: -1, Seer: -1 } },
        { txt: "Abro referências e acabo usando uma composição ou estética de alguém como base mais do que deveria.", w: { Page: 3, Rogue: 1, Mage: -1, Thief: -1 } },
        { txt: "Destruo o começo, mudo de material ou viro a página. Se o espaço não quer funcionar desse jeito, eu corto o formato inteiro.", w: { Prince: 3, Witch: 1, Heir: -1, Maid: -1 } },
        { txt: "Pego uma ideia, estética ou técnica de outra pessoa e faço dela o centro da minha criação, até parecer que ela nasceu comigo.", w: { Thief: 3, Witch: 1, Rogue: -2, Sylph: -1 } }
    ]},
    { t: "Você está sozinho em um quarto silencioso, sem estímulo imediato além do ambiente ao seu redor.", opts: [
        { txt: "Começo a reparar na disposição dos objetos, nas sombras, nas texturas e em pequenos detalhes que normalmente ignoro.", w: { Seer: 3, Mage: 1, Bard: -1, Page: -1 } },
        { txt: "Aproveito para mexer no ambiente: arrumo uma prateleira, mudo algo de lugar ou crio uma sensação nova no quarto.", w: { Maid: 3, Knight: 1, Bard: -1, Prince: -1 } },
        { txt: "Sinto o espaço vazio como liberdade. Sem gente por perto, posso existir do meu jeito e deixar o ambiente respirar.", w: { Heir: 3, Rogue: 1, Prince: -1, Thief: -1 } },
        { txt: "Preencho o silêncio com coisas: abro vídeos, pego comida, mexo em objetos ou procuro qualquer estímulo para ocupar o vazio.", w: { Thief: 3, Page: 1, Heir: -1, Seer: -1 } },
        { txt: "Fico deitado olhando para o teto. A falta de estímulo me desliga, e eu só deixo o corpo existir ali por um tempo.", w: { Bard: 3, Heir: 1, Knight: -2, Maid: -1 } }
    ]}
	],
   "Rage": [
    { t: "Alguém tenta te vender uma ideia perfeita demais, dizendo que você só precisa confiar e parar de procurar problema.", opts: [
        { txt: "Minha primeira reação é procurar onde a ideia começa a parecer falsa. Se precisa tanto da minha confiança, quero saber por quê.", w: { Heir: 3, Mage: 1, Prince: -1, Bard: -1 } },
        { txt: "Faço perguntas até descobrir se a ideia aguenta ser contrariada sem desmoronar.", w: { Seer: 3, Knight: 1, Page: -1, Bard: -1 } },
        { txt: "Digo não antes de ser empurrado para uma escolha que não tive tempo de questionar direito.", w: { Rogue: 3, Heir: 1, Page: -1, Prince: -1 } },
        { txt: "Mexo na insegurança da pessoa até ela mesma começar a revelar onde a própria narrativa falha.", w: { Witch: 3, Thief: 1, Sylph: -1, Heir: -1 } },
        { txt: "Quero acreditar no começo, mas qualquer detalhe estranho me faz perder a confiança muito rápido.", w: { Bard: 3, Page: 1, Mage: -1, Seer: -1 } }
    ]},
    { t: "Você sente que alguém está tentando minimizar uma preocupação sua com um 'relaxa, não é nada'.", opts: [
        { txt: "Insisto no incômodo. Se algo acendeu meu alerta, não vou deixar outra pessoa desligar isso por conveniência.", w: { Heir: 3, Rogue: 1, Knight: 1, Bard: -1 } },
        { txt: "Tento entender se minha reação vem de experiência real ou se estou projetando medo onde talvez não exista.", w: { Mage: 3, Seer: 1, Page: -1, Prince: -1 } },
        { txt: "Aponto o risco concreto que estão ignorando, mesmo que isso me faça parecer negativo.", w: { Seer: 3, Sylph: 1, Bard: -1, Page: -1 } },
        { txt: "Começo a duvidar da minha própria reação e acabo deixando a pessoa me convencer de que estou exagerando.", w: { Page: 3, Rogue: 1, Knight: -1, Heir: -1 } },
        { txt: "Uso a irritação para resolver a situação logo, antes que alguém consiga me empurrar para a passividade.", w: { Knight: 3, Maid: 1, Bard: -1, Rogue: -1 } }
    ]},
    { t: "Você percebe que um grupo está aceitando uma explicação conveniente só porque ela deixa todo mundo mais confortável.", opts: [
        { txt: "Recuso a explicação na hora. Uma versão confortável não vira verdadeira só porque evita conflito.", w: { Heir: 3, Prince: 1, Bard: -1, Page: -1 } },
        { txt: "Começo a apontar as falhas da versão aceita até as pessoas precisarem encarar o que não fecha.", w: { Seer: 3, Sylph: 1, Bard: -1, Page: -1 } },
        { txt: "Tento mostrar como essa falsa tranquilidade pode prejudicar alguém depois.", w: { Sylph: 3, Mage: 1, Prince: -1, Thief: -1 } },
        { txt: "Uso a dúvida que ninguém quer tocar para virar a conversa a meu favor.", w: { Thief: 3, Witch: 1, Rogue: -1, Sylph: -1 } },
        { txt: "Observo quem realmente acredita na explicação e quem só está aceitando para manter o clima.", w: { Mage: 3, Seer: 1, Page: -1, Heir: -1 } }
    ]},
    { t: "Você descobre que uma meta que perseguiu por anos talvez não seja possível do jeito que imaginava.", opts: [
        { txt: "Tento entender exatamente onde está a limitação, porque saber o que é real dói menos do que continuar batendo no escuro.", w: { Mage: 3, Seer: 2, Bard: -1, Page: -1 } },
        { txt: "Fico procurando sinais de que ainda existe uma brecha, mesmo que todo mundo já tenha desistido.", w: { Heir: 3, Witch: 1, Seer: -1, Prince: -1 } },
        { txt: "Transformo a frustração em força para tentar de outro jeito, nem que seja por pura teimosia.", w: { Maid: 3, Knight: 2, Bard: -1, Rogue: -1 } },
        { txt: "Desvalorizo a meta para não ficar preso nela. Se aquilo não pode acontecer, talvez nem merecesse tanta importância.", w: { Prince: 3, Bard: 1, Mage: -1, Heir: -1 } },
        { txt: "Procuro pessoas que também bateram nesse limite, porque é mais fácil lidar com a frustração quando ela não é só minha.", w: { Rogue: 3, Sylph: 1, Thief: -1, Prince: -1 } }
    ]},
    { t: "Você sabe que precisa dizer 'não' para alguém, mas a pessoa está esperando que você ceda.", opts: [
        { txt: "Digo não e sustento a decisão, mesmo que a pessoa tente me fazer parecer difícil ou cruel.", w: { Rogue: 3, Heir: 2, Page: -1, Bard: -1 } },
        { txt: "Uso a recusa para mudar uma dinâmica que já estava errada há tempo demais.", w: { Maid: 3, Sylph: 1, Prince: -1, Bard: -1 } },
        { txt: "Tento parecer firme, mas se a pessoa insistir do jeito certo eu acabo reagindo exatamente como ela queria.", w: { Page: 3, Bard: 1, Knight: -1, Mage: -1 } },
        { txt: "Mostro que a insistência da pessoa só prova por que esse limite precisava existir.", w: { Prince: 3, Mage: 1, Sylph: -1, Heir: -1 } },
        { txt: "Fecho a conversa antes que vire negociação. Meu 'não' não precisa de audiência.", w: { Heir: 3, Knight: 1, Sylph: -1, Maid: -1 } }
    ]},
    { t: "Você percebe que está sendo passado para trás em uma conversa importante.", opts: [
        { txt: "Interrompo e coloco a contradição na mesa antes que a pessoa consiga seguir fingindo normalidade.", w: { Prince: 3, Heir: 1, Bard: -1, Rogue: -1 } },
        { txt: "Finjo que não percebi por mais alguns minutos para entender exatamente qual mentira estão tentando sustentar.", w: { Mage: 3, Seer: 1, Page: -1, Heir: -1 } },
        { txt: "Faço perguntas específicas até a pessoa ter dificuldade de manter a versão dela.", w: { Seer: 3, Knight: 1, Bard: -1, Page: -1 } },
        { txt: "Uso a tensão da conversa para virar a pressão contra a pessoa e fazê-la perder segurança.", w: { Witch: 3, Thief: 2, Sylph: -1, Rogue: -1 } },
        { txt: "Fico tão indignado que posso reagir forte demais antes de entender todo o jogo.", w: { Page: 3, Knight: 1, Mage: -1, Seer: -1 } }
    ]},
    { t: "Você percebe que o mundo é mais injusto e absurdo do que gostaria de acreditar.", opts: [
        { txt: "Isso reforça minha desconfiança. Não dá para tratar o mundo como se ele fosse naturalmente justo.", w: { Heir: 3, Mage: 1, Bard: -1, Page: -1 } },
        { txt: "Tento transformar a indignação em algo útil, nem que seja uma rotina, uma ação pequena ou uma recusa mais firme.", w: { Maid: 3, Knight: 1, Bard: -1, Prince: -1 } },
        { txt: "Procuro pessoas que compartilham da mesma revolta, porque lidar sozinho com isso só deixa tudo mais pesado.", w: { Rogue: 3, Sylph: 2, Thief: -1, Prince: -1 } },
        { txt: "Uso a raiva das pessoas para empurrar uma reação que elas talvez não tivessem coragem de assumir sozinhas.", w: { Witch: 3, Thief: 2, Sylph: -1, Rogue: -1 } },
        { txt: "Rio do absurdo e tento não levar tão a sério, porque encarar tudo de frente o tempo todo me quebraria.", w: { Bard: 3, Page: 1, Maid: -1, Knight: -1 } }
    ]},
    { t: "Você descobre que uma pessoa que admirava era bem mais falsa do que parecia.", opts: [
        { txt: "Não fico exatamente surpreso. Às vezes a queda só confirma algo que eu já desconfiava.", w: { Mage: 3, Heir: 1, Page: -1, Bard: -1 } },
        { txt: "Procuro entender quais sinais eu ignorei para não cair no mesmo tipo de imagem falsa de novo.", w: { Seer: 3, Mage: 1, Bard: -1, Page: -1 } },
        { txt: "Corto minha admiração de uma vez. Depois que vejo a farsa, não consigo continuar tratando como se fosse igual.", w: { Prince: 3, Heir: 1, Sylph: -1, Bard: -1 } },
        { txt: "Uso o caso para alertar outras pessoas que ainda estão presas naquela imagem.", w: { Sylph: 3, Maid: 1, Thief: -1, Prince: -1 } },
        { txt: "No começo tento fingir que não abalou nada, mas depois passo a desconfiar de todo mundo parecido.", w: { Bard: 3, Page: 1, Mage: -1, Seer: -1 } }
    ]},
    { t: "Todo mundo ao seu redor está animado com uma novidade, mas você sente que existe algo errado ali.", opts: [
        { txt: "Sou a primeira pessoa a dizer que não confio, mesmo sabendo que vou parecer estraga-prazeres.", w: { Heir: 3, Rogue: 1, Bard: -1, Page: -1 } },
        { txt: "Investigo a origem do incômodo para saber se é paranoia minha ou se existe mesmo algo falso ali.", w: { Mage: 3, Seer: 2, Page: -1, Prince: -1 } },
        { txt: "Começo a apontar falhas para diminuir a empolgação antes que ela vire cegueira coletiva.", w: { Prince: 3, Sylph: 1, Heir: -1, Bard: -1 } },
        { txt: "Uso a primeira rachadura na empolgação para puxar as pessoas para a minha leitura da situação.", w: { Thief: 3, Witch: 1, Rogue: -1, Sylph: -1 } },
        { txt: "Rejeito a novidade meio no automático, mais para provar que não sou influenciável do que por entender o problema.", w: { Page: 3, Bard: 1, Mage: -1, Seer: -1 } }
    ]},
    { t: "Você precisa escolher entre ser honesto e perder uma chance, ou distorcer a verdade para conseguir o que quer.", opts: [
        { txt: "Falo a verdade, mesmo que isso feche a porta. Prefiro um 'não' real a uma chance construída em cima de mentira.", w: { Heir: 3, Seer: 1, Thief: -2, Bard: -1 } },
        { txt: "Avalio quem seria prejudicado pela mentira antes de decidir. O problema não é só mentir, é o que a mentira faz depois.", w: { Mage: 3, Seer: 2, Page: -1, Bard: -1 } },
        { txt: "Minto se a situação já é injusta comigo. Se o jogo veio viciado, eu não vou ser o único obedecendo regra.", w: { Thief: 3, Witch: 1, Sylph: -1, Heir: -1 } },
        { txt: "Sou honesto de um jeito duro demais, quase como se estivesse punindo a situação por me colocar nessa escolha.", w: { Knight: 3, Prince: 2, Rogue: -1, Bard: -1 } },
        { txt: "Tento escapar da escolha até ser obrigado a responder, porque qualquer opção parece suja de um jeito diferente.", w: { Rogue: 3, Bard: 1, Knight: -1, Prince: -1 } }
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
    { t: "Você descobre uma informação importante antes de todo mundo, mas ainda não sabe se deve compartilhar.", opts: [
        { txt: "Guardo por enquanto e observo quem mais percebe. Informação vale mais quando você sabe o momento certo de usar.", w: { Knight: 3, Mage: 1, Sylph: -1, Page: -1 } },
        { txt: "Conto imediatamente, porque se isso é importante as pessoas precisam saber antes de tomarem decisões no escuro.", w: { Sylph: 3, Seer: 1, Prince: -1, Bard: -1 } },
        { txt: "Uso a informação para me colocar numa posição melhor. Se fui eu que descobri, faz sentido que isso me favoreça primeiro.", w: { Thief: 3, Prince: 1, Rogue: -2, Sylph: -1 } },
        { txt: "Fico inseguro sobre se entendi direito e tento confirmar com alguém antes de me colocar como fonte.", w: { Rogue: 3, Knight: 1, Thief: -1, Prince: -1 } },
        { txt: "Começo a pesquisar mais fundo, porque talvez essa informação seja só a ponta de algo muito maior.", w: { Heir: 3, Seer: 2, Bard: -1, Prince: -1 } }
    ]},
    { t: "Você está pesquisando um assunto e percebe que existem versões diferentes, contraditórias e aparentemente bem fundamentadas.", opts: [
        { txt: "Comparo as fontes e tento descobrir qual interpretação realmente ilumina o quadro maior.", w: { Seer: 3, Mage: 1, Page: -1, Bard: -1 } },
        { txt: "Mergulho cada vez mais fundo. Se existem tantas versões, deve haver algum detalhe escondido explicando a diferença.", w: { Heir: 3, Knight: 1, Bard: -1, Prince: -1 } },
        { txt: "Tento criar minha própria síntese a partir do que encontrei, em vez de aceitar passivamente uma explicação pronta.", w: { Maid: 3, Witch: 1, Rogue: -1, Page: -1 } },
        { txt: "Começo a desconfiar que a disputa de interpretações é mais importante do que o fato original em si.", w: { Mage: 3, Seer: 1, Heir: -1, Page: -1 } },
        { txt: "Finjo que entendi melhor do que entendi e acabo repetindo a versão que parece mais impressionante.", w: { Page: 3, Thief: 1, Mage: -2, Seer: -1 } }
    ]},
    { t: "Um erro pessoal seu é exposto publicamente e você se torna o centro das atenções e julgamentos. Como reage?", opts: [
        { txt: "Decido que a opinião alheia é irrelevante. Trato a exposição como algo sem valor e sigo em frente.", w: { Prince: 3, Knight: -3, Page: -2 } },
        { txt: "Assumo a falha e começo a trabalhar de forma punitiva para corrigir os fatos e restaurar minha reputação.", w: { Maid: 3, Sylph: 2, Prince: -2 } },
        { txt: "Eu levo na esportiva. Se minha reputação foi pro lixo, pelo menos a história foi engraçada. Não vou me matar pra limpar meu nome.", w: { Bard: 3, Heir: 2, Mage: 1, Knight: -3 } },
        { txt: "Uso a vergonha da exposição como combustível para estudar onde errei e garantir que nunca mais aconteça.", w: { Page: 3, Knight: 2, Heir: -2, Bard: -1 } },
        { txt: "Tento desviar o foco do meu erro para outro assunto que seja mais relevante no momento.", w: { Thief: 3, Rogue: 2, Mage: -2, Seer: -1 } }
    ]},
    { t: "Você percebe que uma coisa considerada irrelevante por todos pode ter um significado importante.", opts: [
        { txt: "Começo a dar forma e contexto para aquilo, até que deixe de parecer aleatório e passe a significar algo.", w: { Maid: 3, Sylph: 1, Prince: -1, Bard: -1 } },
        { txt: "Tento convencer as pessoas a olharem de novo. O problema é que ninguém está prestando atenção do jeito certo.", w: { Sylph: 3, Seer: 1, Bard: -1, Prince: -1 } },
        { txt: "Fico preso analisando aquilo por horas, porque a possibilidade de existir um significado escondido não sai da minha cabeça.", w: { Heir: 3, Knight: 1, Bard: -1, Page: -1 } },
        { txt: "Uso minha interpretação para mudar o valor da coisa; se todo mundo achava irrelevante, talvez eu consiga inverter isso.", w: { Witch: 3, Maid: 1, Prince: -1, Mage: -1 } },
        { txt: "Descarto a importância antiga que deram a isso e substituo por uma leitura que faz mais sentido para mim.", w: { Prince: 3, Witch: 1, Heir: -1, Sylph: -1 } }
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
     { t: "Você descobre que uma história muito repetida sobre você está distorcendo o que realmente aconteceu.", opts: [
        { txt: "Reúno a versão correta, os detalhes e o contexto para reconstruir a narrativa com mais precisão.", w: { Maid: 3, Seer: 1, Bard: -1, Prince: -1 } },
        { txt: "Uso a versão distorcida a meu favor se ela me coloca numa posição mais importante.", w: { Thief: 3, Prince: 1, Rogue: -2, Sylph: -1 } },
        { txt: "Destruo a importância dessa história. Se ela não serve mais, prefiro que pare de significar qualquer coisa.", w: { Prince: 3, Bard: 1, Maid: -1, Heir: -1 } },
        { txt: "Fico inseguro em corrigir porque talvez pareça que estou tentando chamar atenção demais para mim.", w: { Rogue: 3, Page: 1, Thief: -1, Knight: -1 } },
        { txt: "Analiso como a distorção se espalhou, porque entender o caminho da informação ajuda a controlar o estrago.", w: { Mage: 3, Knight: 1, Page: -1, Witch: -1 } }
    ]},
    { t: "Você está em uma discussão acalorada onde sabe, com 100% de certeza, que a outra pessoa está errada sobre um fato técnico ou histórico. Como você age?", opts: [
        { txt: "Interrompo e apresento as provas. Não suporto ver a desinformação prosperar quando a verdade está disponível.", w: { Maid: 3, Sylph: 2, Knight: 2, Prince: -3 } },
        { txt: "Deixo que ela continue falando o que quiser. A ignorância alheia é irrelevante para mim.", w: { Prince: 3, Mage: -2, Seer: -2 } },
        { txt: "Eu deixo a pessoa falar besteira. É divertido ver alguém tão confiante no erro, e não vou gastar minha energia corrigindo.", w: { Bard: 3, Thief: 1, Witch: 1, Knight: -2 } },
        { txt: "Uso o erro dela como vantagem estratégica, deixando que ela se exponha até eu usar a verdade para desarmá-la.", w: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
        { txt: "Tento corrigir a pessoa de forma sutil, compartilhando o conhecimento como se fosse algo que estamos descobrindo juntos.", w: { Rogue: 3, Heir: 2, Thief: -3, Knight: -1 } }
    ]},
    { t: "Em uma situação tensa, você percebe que a transparência das informações está causando conflitos. Qual sua atitude?", opts: [
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
    { t: "Você recebe uma mensagem enorme de alguém claramente irritado com você. Antes de responder, passa vários minutos relendo cada frase e tentando prever qual resposta evitaria o pior desfecho possível.", opts: [
        { txt: "Reescrevo a mensagem várias vezes e acabo demorando tanto tentando prever todas as reações possíveis que quase não respondo.", w: { Page: 3, Mage: 2, Heir: 1, Prince: -1 } },
        { txt: "Puxo da memória conversas parecidas que já deram certo e adapto o padrão pra encaixar na situação atual.", w: { Thief: 3, Mage: 1, Seer: 1, Bard: -1 } },
        { txt: "Assumo o controle do ritmo da conversa imediatamente, pressionando os argumentos mais frágeis da outra pessoa.", w: { Knight: 3, Thief: 1, Maid: -1, Page: -2 } },
        { txt: "Perco a paciência com o teatro social e respondo exatamente o que penso, mesmo sabendo que isso provavelmente vai piorar tudo.", w: { Prince: 3, Bard: 2, Witch: -1, Sylph: -2 } },
        { txt: "Exponho a falha moral do plano para que o grupo lide com o peso da escolha, retirando minha responsabilidade direta.", w: { Rogue: 3, Heir: 3, Page: -2, Maid: -1 } }
    ]},
    { t: "Você percebe que duas pessoas próximas brigaram porque interpretaram completamente errado as intenções uma da outra. Nenhuma delas parece disposta a ceder.", opts: [
        { txt: "Tento reorganizar a conversa de um jeito mais racional, traduzindo o que cada lado provavelmente quis dizer antes que a situação piore ainda mais.", w: { Sylph: 3, Seer: 2, Maid: 1, Prince: -2 } },
        { txt: "Mesmo em situações tensas, consigo me distanciar emocionalmente o bastante pra analisar os diferentes lados antes de agir.", w: { Heir: 3, Sylph: 1, Knight: 1, Bard: -2 } },
        { txt: "Conforme a discussão escala, começo a interromper os dois lados constantemente porque fica claro pra mim que ninguém ali está percebendo onde essa situação vai acabar.", w: { Prince: 3, Knight: 1, Bard: -2, Heir: -1 } },
        { txt: "Evito me envolver diretamente. Discussões assim normalmente se resolvem sozinhas quando as pessoas cansam de reagir no impulso.", w: { Bard: 3, Thief: 1, Page: -1, Sylph: -2 } },
        { txt: "Mudo minha abordagem dependendo de com quem estou falando, tentando fazer cada pessoa baixar a guarda separadamente.", w: { Witch: 3, Thief: 2, Maid: 1, Rogue: -1 } }
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
    { t: "Você percebe que duas escolhas disponíveis vão gerar problemas inevitáveis, mas uma delas mantém a situação mais estável a longo prazo.", opts: [
        { txt: "Escolho a opção mais estável, mesmo sabendo que algumas pessoas vão ficar insatisfeitas com isso.", w: { Sylph: 3, Heir: 2, Prince: 1, Bard: -2 } },
        { txt: "Continuo revisando mentalmente cada possibilidade porque tenho medo de deixar passar algum detalhe óbvio que mudaria completamente a decisão correta.", w: { Page: 3, Seer: 2, Heir: 1, Prince: -1 } },
        { txt: "Tento reorganizar a situação pra criar uma terceira alternativa que evite os piores efeitos dos dois lados.", w: { Witch: 3, Maid: 2, Rogue: 1, Bard: -1 } },
        { txt: "Acabo assumindo a responsabilidade pela decisão porque confiar que os outros vão escolher direito parece arriscado demais.", w: { Prince: 3, Thief: 2, Heir: -1, Bard: -2 } },
        { txt: "Aceito que toda escolha importante acaba favorecendo alguém e prejudicando outra pessoa, então prefiro garantir que eu não seja quem sai perdendo.", w: { Thief: 3, Mage: 1, Heir: -1, Sylph: -2 } }
    ]},
    { t: "Você percebe que uma pessoa próxima está tomando uma decisão ruim, mas ela parece convencida de que está sendo totalmente racional.", opts: [
        { txt: "Em vez de discutir a escolha diretamente, tento mudar o jeito como ela está enxergando o problema para abrir outras possibilidades.", w: { Witch: 3, Sylph: 1, Prince: -1, Knight: -1 } },
        { txt: "Aponto que ela não está sendo tão imparcial quanto pensa. A decisão já parece tomada, ela só está inventando uma justificativa bonita.", w: { Prince: 3, Mage: 1, Bard: -1, Heir: -2 } },
        { txt: "Evito dizer o que ela deve fazer. Tenho medo de interferir demais e depois descobrir que minha leitura estava errada.", w: { Rogue: 3, Page: 1, Prince: -2, Thief: -1 } },
        { txt: "Uso o raciocínio dela para entender o que ela valoriza e aproveito essa informação quando eu precisar tomar decisões parecidas.", w: { Thief: 3, Mage: 1, Rogue: -1, Sylph: -1 } },
        { txt: "Tento mostrar que eu também consigo analisar a situação friamente, mas acabo deixando claro demais que estou pessoalmente incomodado.", w: { Page: 3, Bard: 1, Knight: -1, Heir: -1 } }
    ]},
    { t: "Você está diante de uma escolha onde todos os caminhos levam a algum tipo de perda. Como sua mente processa a paralisia?", opts: [
        { txt: "Escolho o caminho que preserva a lógica do sistema maior, mesmo que eu sofra. Sacrifício racional.", w: { Maid: 3, Knight: 2, Seer: 1, Prince: -3 } },
        { txt: "Recuso-me a escolher. Deixo que o acaso decida, pois não quero carregar o peso da consequência.", w: { Bard: 3, Heir: 3, Page: 2, Witch: -2 } },
        { txt: "Tento criar uma 'terceira via' forçada através da manipulação, recusando as opções dadas.", w: { Witch: 3, Thief: 3, Mage: -1, Seer: -1 } },
        { txt: "Analiso qual perda é mais útil a longo prazo. Se algo deve ser destruído, que seja o menos eficiente.", w: { Prince: 3, Mage: 3, Rogue: 1, Sylph: -2 } },
        { txt: "Paraliso e não faço nada. Se eu não escolher, tecnicamente a culpa do resultado não é minha.", w: { Bard: 3, Page: 2, Heir: 1, Knight: -2 } }
    ]},
    { t: "Você entra em um ambiente novo onde todo mundo parece seguir regras sociais que ninguém explicou claramente.", opts: [
        { txt: "Observo como as pessoas agem, copio o básico para não chamar atenção e vou ajustando meu comportamento conforme entendo melhor o clima.", w: { Heir: 3, Maid: 1, Page: -1, Prince: -1 } },
        { txt: "Tento identificar rapidamente quais atitudes ali são recompensadas ou punidas, porque entender essas regras evita problemas depois.", w: { Mage: 3, Seer: 2, Bard: -1, Witch: -1 } },
        { txt: "Adoto uma postura educada e neutra até entender qual papel faz sentido naquele espaço. Melhor criar uma base segura antes de agir demais.", w: { Maid: 3, Knight: 1, Bard: -2, Prince: -1 } },
        { txt: "Mesmo tentando me encaixar, fico consciente demais de cada gesto e palavra, como se qualquer detalhe pudesse denunciar que não sei o que estou fazendo.", w: { Knight: 3, Page: 2, Heir: -1, Bard: -1 } },
        { txt: "Ajo do meu jeito até me darem um motivo real para mudar. Não gosto de fingir que entendi regras que ninguém teve coragem de explicar.", w: { Bard: 3, Prince: 1, Maid: -2, Heir: -1 } }
    ]},
    { t: "Você percebe que está adiando uma resposta importante porque qualquer escolha de palavras pode mudar completamente o rumo da situação.", opts: [
        { txt: "Organizo o que preciso dizer em partes claras: o fato, a consequência e a decisão que vem depois disso.", w: { Maid: 3, Seer: 1, Bard: -1, Page: -1 } },
        { txt: "Releio várias vezes procurando onde a mensagem pode ser mal interpretada antes de finalmente enviar.", w: { Knight: 3, Seer: 2, Bard: -1, Heir: -1 } },
        { txt: "Percebo qual é o ponto sensível da conversa, mas tenho dificuldade de transformar isso numa resposta que faça sentido para outra pessoa.", w: { Seer: 3, Rogue: 1, Knight: -1, Prince: -1 } },
        { txt: "Tento tirar o peso emocional da situação e responder só ao que realmente precisa ser resolvido.", w: { Sylph: 3, Maid: 1, Bard: -2, Prince: -1 } },
        { txt: "Respondo do jeito que parece mais verdadeiro pra mim no momento. Ficar calculando cada consequência só deixaria tudo artificial.", w: { Bard: 3, Witch: 1, Knight: -2, Sylph: -1 } }
    ]},
    { t: "Você percebe que a explicação de alguém parece lógica na superfície, mas alguma coisa nela não encaixa com o que a pessoa está fazendo na prática.", opts: [
        { txt: "Questiono as premissas da explicação. Talvez o problema não esteja na conclusão, mas nas regras que a pessoa usou para chegar até ela.", w: { Witch: 3, Seer: 1, Maid: -1, Page: -1 } },
        { txt: "Comparo o discurso com o comportamento. Se a lógica não aparece nas ações, então ela provavelmente é só uma justificativa conveniente.", w: { Prince: 3, Mage: 1, Heir: -1, Bard: -1 } },
        { txt: "Tento identificar o padrão por trás da contradição, porque esse tipo de raciocínio costuma aparecer de novo em outras situações.", w: { Mage: 3, Seer: 1, Witch: -1, Page: -1 } },
        { txt: "Evito bater de frente e observo como outras pessoas reagem à explicação antes de decidir se minha leitura faz sentido.", w: { Rogue: 3, Heir: 1, Prince: -2, Knight: -1 } },
        { txt: "Tento provar que consigo acompanhar o raciocínio, mas acabo defendendo ou atacando a ideia antes de realmente entender todas as partes.", w: { Page: 3, Bard: 1, Seer: -1, Mage: -1 } }
    ]}
    ],
   "Heart": [
    { t: "Você começa a gostar muito de algo meio específico, mas percebe que as pessoas ao seu redor provavelmente achariam estranho.", opts: [
        { txt: "Guardo para mim ou finjo que é só uma piada. Não quero que um gosto pessoal vire prova de que sou esquisito.", w: { Rogue: 3, Bard: 1, Page: -1, Heir: -1 } },
        { txt: "Assumo com naturalidade. Se isso faz parte de mim agora, não vejo motivo para tratar como vergonha.", w: { Heir: 3, Maid: 1, Rogue: -2, Prince: -1 } },
        { txt: "Falo disso com entusiasmo demais e talvez acabe despejando muito mais informação do que a pessoa pediu.", w: { Page: 3, Maid: 1, Knight: -1, Prince: -1 } },
        { txt: "Transformo esse interesse numa parte visível da minha identidade, até que as pessoas passem a associar aquilo comigo.", w: { Maid: 3, Thief: 1, Rogue: -1, Bard: -1 } },
        { txt: "Tento convencer alguém a experimentar também, porque talvez a pessoa só precise se permitir sentir a mesma coisa.", w: { Sylph: 3, Witch: 1, Prince: -1, Rogue: -1 } }
    ]},
	{ t: "Alguém próximo começa a negar claramente que está magoado, mesmo ficando cada vez mais reativo.", opts: [
        { txt: "Digo que a pessoa precisa admitir o que sente antes que isso saia de outro jeito pior.", w: { Sylph: 3, Seer: 1, Bard: -1, Prince: -1 } },
        { txt: "Percebo o tipo de ferida por trás da reação porque já senti algo parecido antes.", w: { Mage: 3, Seer: 1, Page: -1, Heir: -1 } },
        { txt: "Tento fazer a pessoa parar de se agarrar tanto a essa emoção; sentir não significa deixar aquilo mandar em tudo.", w: { Prince: 3, Knight: 1, Sylph: -1, Heir: -1 } },
        { txt: "Evito mexer muito nisso. Emoção reprimida dos outros costuma me puxar para um lugar que eu não quero encarar.", w: { Bard: 3, Rogue: 1, Sylph: -2, Page: -1 } },
        { txt: "Mudo a forma de conversar com ela para despertar uma reação mais honesta, mesmo que a pessoa ache que chegou lá sozinha.", w: { Witch: 3, Mage: 1, Prince: -1, Rogue: -1 } }
    ]},
	{ t: "Você percebe que está vivendo uma versão de si mesmo criada para agradar alguém importante.", opts: [
        { txt: "Começo a construir conscientemente uma identidade minha, mesmo que eu ainda não saiba exatamente quem sou sem aquela influência.", w: { Maid: 3, Rogue: 1, Heir: -1, Thief: -1 } },
        { txt: "Tento cortar essa versão falsa de mim de uma vez. Prefiro parecer frio ou ingrato a continuar performando algo que não sinto.", w: { Prince: 3, Bard: 1, Sylph: -1, Maid: -1 } },
        { txt: "Tenho dificuldade de largar, porque parte de mim ainda quer que essa pessoa aprove quem eu sou.", w: { Rogue: 3, Maid: 1, Prince: -1, Thief: -1 } },
        { txt: "Adapto minha própria personalidade até ela parecer mais verdadeira para mim, mesmo que tenha começado como influência externa.", w: { Witch: 3, Heir: 1, Mage: -1, Prince: -1 } },
        { txt: "Finjo que isso não me afeta, mas vou ficando cada vez mais vazio e irritado por dentro.", w: { Bard: 3, Knight: 1, Sylph: -1, Heir: -1 } }
    ]},
	{ t: "Você entra em um grupo onde uma pessoa já é conhecida por ter exatamente o tipo de carisma ou estilo que você queria ter.", opts: [
        { txt: "Tento encontrar meu próprio jeito de brilhar sem precisar competir diretamente com a presença dela.", w: { Maid: 3, Rogue: 1, Thief: -2, Prince: -1 } },
        { txt: "Pego aquilo que torna a pessoa marcante e faço com mais intensidade, até o traço que era dela começar a parecer mais meu do que dela.", w: { Thief: 3, Page: 1, Rogue: -2, Sylph: -1 } },
        { txt: "Fico observando o que torna aquela pessoa tão marcante, tentando entender que desejo ou ferida ela desperta nos outros.", w: { Seer: 3, Mage: 1, Page: -1, Thief: -1 } },
        { txt: "Desconfio da aura dela e tento mostrar que ninguém é tão especial quanto parece.", w: { Prince: 3, Bard: 1, Heir: -1, Sylph: -1 } },
        { txt: "Fico intimidado e tento esconder que queria ter esse tipo de presença também.", w: { Rogue: 3, Knight: 1, Thief: -2, Heir: -1 } }
    ]},
	{ t: "Você sente uma vontade forte e irracional de tomar uma decisão que não consegue justificar muito bem.", opts: [
        { txt: "Confio no impulso. Se algo dentro de mim está puxando tão forte, provavelmente existe uma verdade ali.", w: { Heir: 3, Page: 1, Prince: -1, Seer: -1 } },
        { txt: "Tento entender de onde esse desejo está vindo antes de decidir se ele é realmente meu ou só uma reação do momento.", w: { Mage: 3, Seer: 2, Heir: -1, Page: -1 } },
        { txt: "Corto o impulso antes que ele me controle. Vontade forte não é argumento suficiente.", w: { Prince: 3, Knight: 1, Heir: -2, Page: -1 } },
        { txt: "Uso esse desejo como energia para agir, mesmo que eu ainda esteja inseguro sobre o quanto ele é moralmente certo.", w: { Knight: 3, Mage: 1, Bard: -1, Prince: -1 } },
        { txt: "Exagero na certeza e ajo como se essa vontade fosse destino, mesmo sem ter maturidade para lidar com tudo que ela envolve.", w: { Page: 3, Bard: 1, Seer: -1, Mage: -1 } }
    ]},
	{ t: "Um amigo demonstra vergonha de uma parte muito sincera da própria personalidade.", opts: [
        { txt: "Tento fazer ele enxergar beleza naquela característica, mesmo que eu precise coddar um pouco demais no processo.", w: { Sylph: 3, Maid: 1, Prince: -1, Bard: -1 } },
        { txt: "Falo sobre minhas próprias esquisitices para criar espaço para ele se abrir também.", w: { Heir: 3, Rogue: 1, Prince: -1, Thief: -1 } },
        { txt: "Fico desconfortável porque reconheço nele uma vergonha parecida com a minha.", w: { Mage: 3, Rogue: 2, Page: -1, Sylph: -1 } },
        { txt: "Tento mudar a relação dele com essa parte de si, como se ela pudesse virar força em vez de defeito.", w: { Witch: 3, Sylph: 1, Prince: -1, Mage: -1 } },
        { txt: "Acabo transformando o assunto numa demonstração emocional maior do que precisava, tentando provar que ele é amado.", w: { Page: 3, Sylph: 1, Knight: -1, Prince: -1 } }
    ]},
	{ t: "Você percebe que alguém está tentando apagar a própria paixão por algo para parecer mais racional ou maduro.", opts: [
        { txt: "Tento reacender essa paixão, lembrando a pessoa de que gostar intensamente de algo não é infantil.", w: { Sylph: 3, Heir: 1, Prince: -2, Bard: -1 } },
        { txt: "Fico irritado com a ideia de que sentir muito torna alguém fraco. Para mim, isso só revela covardia emocional.", w: { Prince: 3, Bard: 1, Sylph: -1, Rogue: -1 } },
        { txt: "Entendo o impulso de esconder. Às vezes a gente aprende a guardar o que ama para não virar alvo.", w: { Rogue: 3, Mage: 2, Heir: -1, Page: -1 } },
        { txt: "Tento mostrar, pelo meu próprio exemplo, que dá para ser intenso sem pedir desculpa por isso.", w: { Knight: 3, Maid: 1, Bard: -1, Rogue: -1 } },
        { txt: "Mexer nisso me assusta um pouco, porque eu também costumo deixar minhas paixões quietas até elas explodirem.", w: { Bard: 3, Rogue: 1, Sylph: -1, Page: -1 } }
    ]},
	{ t: "Você se apaixona rapidamente por uma pessoa, ideia ou possibilidade nova.", opts: [
        { txt: "Me entrego com facilidade. Se isso despertou algo verdadeiro em mim, não quero fingir distância.", w: { Heir: 3, Page: 1, Prince: -2, Knight: -1 } },
        { txt: "Tento dosar a intensidade porque tenho medo de invadir espaço ou parecer emocional demais.", w: { Rogue: 3, Knight: 1, Page: -1, Thief: -1 } },
        { txt: "Vou longe demais rápido demais, demonstrando uma intimidade que talvez ainda não exista de verdade.", w: { Page: 3, Bard: 1, Seer: -1, Mage: -1 } },
        { txt: "Transformo essa paixão em movimento: faço planos, crio coisas e tento tornar aquilo parte real da minha vida.", w: { Maid: 3, Knight: 1, Bard: -1, Prince: -1 } },
        { txt: "Tento entender se essa paixão é minha mesmo ou se fui arrastado pelo desejo de outra pessoa.", w: { Mage: 3, Seer: 1, Heir: -1, Page: -1 } }
    ]},
	{ t: "Você percebe que uma conversa está ficando fria demais para algo que claramente envolve sentimentos importantes.", opts: [
        { txt: "Tento trazer a conversa de volta para o que cada pessoa realmente sente, não só para o que parece lógico dizer.", w: { Sylph: 3, Seer: 1, Prince: -1, Bard: -1 } },
        { txt: "Fico tentado a encerrar o assunto. Se ninguém consegue falar de sentimentos sem virar bagunça, talvez seja melhor não abrir isso.", w: { Prince: 3, Bard: 2, Sylph: -2, Heir: -1 } },
        { txt: "Percebo quem está escondendo uma ferida por trás da calma e tento entender o que ela não está dizendo.", w: { Seer: 3, Mage: 1, Page: -1, Prince: -1 } },
        { txt: "Acabo explodindo com o que eu estava segurando, porque a frieza da conversa me faz sentir apagado.", w: { Bard: 3, Page: 1, Knight: -1, Sylph: -1 } },
        { txt: "Uso meu próprio sentimento como ponto de partida, mas tento manter firmeza para não virar só desabafo.", w: { Knight: 3, Maid: 1, Bard: -1, Page: -1 } }
    ]},
	{ t: "Alguém acusa você de ser intenso demais com as coisas que ama.", opts: [
        { txt: "Assumo sem muita vergonha. Amar pouco só para parecer equilibrado nunca fez sentido para mim.", w: { Heir: 3, Maid: 1, Rogue: -2, Prince: -1 } },
        { txt: "Fico na defensiva e tento provar que minha intensidade é parte essencial de quem eu sou.", w: { Page: 3, Prince: 1, Mage: -1, Rogue: -1 } },
        { txt: "Finjo que não ligo para a acusação, mas depois fico remoendo se eu deveria esconder mais esse lado.", w: { Rogue: 3, Bard: 1, Heir: -1, Thief: -1 } },
        { txt: "Uso essa intensidade para puxar outras pessoas junto comigo. Se eu amo algo, eu faço esse amor contaminar o ambiente.", w: { Maid: 3, Sylph: 1, Thief: 1, Prince: -1 } },
        { txt: "Tento cortar essa intensidade antes que ela me torne dependente, ridículo ou fácil de manipular.", w: { Prince: 3, Knight: 1, Heir: -2, Page: -1 } }
    ]}
    ],
    "Hope": [
    { t: "Alguém te chama para uma ideia meio absurda, mas claramente feita com entusiasmo genuíno.", opts: [
        { txt: "Digo sim antes de pensar demais. Se a pessoa acredita tanto nisso, talvez valha pelo menos tentar.", w: { Page: 3, Heir: 2, Seer: -1, Prince: -2 } },
        { txt: "Tento entender se aquilo é uma empolgação verdadeira ou só uma fantasia que vai desabar no primeiro obstáculo.", w: { Mage: 3, Seer: 2, Page: -1, Bard: -1 } },
        { txt: "Incentivo a pessoa e tento fazer os outros darem uma chance também. Às vezes alguém só precisa de permissão para começar.", w: { Sylph: 3, Maid: 1, Prince: -2, Bard: -1 } },
        { txt: "Apoio se fizer sentido para mim, mas não vou fingir fé em algo só para manter o clima bonito.", w: { Prince: 3, Knight: 1, Heir: -1, Sylph: -2 } },
        { txt: "Tento transformar a ideia em algo que pareça possível para mais gente, mesmo que precise mudar um pouco o sonho original.", w: { Witch: 3, Knight: 1, Mage: -1, Prince: -1 } }
    ]},
	{ t: "Você percebe que está esperando uma confirmação externa para começar algo que realmente quer fazer.", opts: [
        { txt: "Fico preso até alguém me dar o sinal verde. Se ninguém confirmar que posso, parece errado seguir sozinho.", w: { Maid: 3, Rogue: 1, Prince: -2, Thief: -1 } },
        { txt: "Tento me convencer de que mereço tentar, mas uma parte minha ainda acha que essa chance é boa demais para ser real.", w: { Rogue: 3, Page: 1, Heir: -1, Thief: -2 } },
        { txt: "Crio meu próprio motivo para seguir. Se eu preciso de uma luz verde, talvez ela tenha que vir de mim.", w: { Maid: 3, Witch: 1, Rogue: -1, Bard: -1 } },
        { txt: "Uso a expectativa dos outros como combustível. Se eles acreditam em mim, eu consigo me empurrar mais longe.", w: { Knight: 3, Thief: 1, Prince: -1, Bard: -1 } },
        { txt: "Finjo que não preciso de aprovação nenhuma, mas acabo tentando provar que aquilo era real e possível o tempo todo.", w: { Page: 3, Knight: 1, Mage: -1, Seer: -1 } }
    ]},
	{ t: "Uma pessoa em quem você confiava muito decepciona você de um jeito difícil de ignorar.", opts: [
        { txt: "Tento descobrir se minha confiança estava no lugar errado ou se ainda existe algo verdadeiro ali que vale salvar.", w: { Mage: 3, Seer: 1, Bard: -1, Page: -1 } },
        { txt: "Tenho dificuldade de abandonar a fé nela. Uma parte minha continua achando que tudo vai se acertar de algum jeito.", w: { Heir: 3, Maid: 1, Prince: -2, Mage: -1 } },
        { txt: "Corto a idealização na hora. Se a confiança quebrou, não vou continuar sustentando uma mentira confortável.", w: { Prince: 3, Bard: 1, Sylph: -2, Heir: -1 } },
        { txt: "Tento ajudar a pessoa a recuperar minha confiança, mas fico insistindo demais para que ela prove que ainda pode ser boa.", w: { Sylph: 3, Maid: 1, Prince: -1, Thief: -1 } },
        { txt: "Dou um jeito de parecer bem com isso, mas no fundo começo a duvidar de tudo que eu acreditava sobre a pessoa.", w: { Bard: 3, Rogue: 1, Heir: -1, Knight: -1 } }
    ]},
	{ t: "Os fatos apontam que algo importante para você provavelmente não vai acontecer, mas abrir mão disso parece destruir o sentido de tudo.", opts: [
        { txt: "Seguro a fé mesmo assim. Enquanto existir qualquer possibilidade, eu não aceito tratar aquilo como morto.", w: { Heir: 3, Page: 2, Seer: -1, Mage: -1 } },
        { txt: "Tento descobrir se ainda existe um sinal real de esperança ou se estou só me protegendo de uma verdade dolorosa.", w: { Mage: 3, Seer: 2, Bard: -1, Heir: -1 } },
        { txt: "Crio outro motivo para continuar. Se uma esperança falha, eu preciso acender outra antes que tudo pare.", w: { Maid: 3, Witch: 1, Rogue: -1, Prince: -1 } },
        { txt: "Recuso a conclusão dos outros. O mundo não tem direito de decidir sozinho o que ainda pode ou não existir.", w: { Prince: 3, Witch: 1, Sylph: -1, Mage: -1 } },
        { txt: "Finjo que já aceitei, mas continuo voltando para a fantasia porque ela ainda parece mais habitável que a realidade.", w: { Bard: 3, Rogue: 1, Knight: -1, Seer: -1 } }
    ]},
	{ t: "Você vê alguém desistindo de algo porque está convencido de que nunca vai conseguir.", opts: [
        { txt: "Tento mostrar uma possibilidade real que a pessoa ainda não percebeu. Talvez ela só precise enxergar o caminho certo.", w: { Seer: 3, Sylph: 1, Prince: -1, Bard: -1 } },
        { txt: "Empurro a pessoa para tentar de novo, mesmo que ela esteja resistente. Às vezes o primeiro passo precisa ser arrancado na marra.", w: { Sylph: 3, Witch: 1, Rogue: -1, Prince: -1 } },
        { txt: "Ofereço minha confiança como apoio. Se ela ainda não acredita em si, pode se apoiar um pouco na minha fé.", w: { Heir: 3, Maid: 1, Thief: -1, Prince: -1 } },
        { txt: "Desconfio desse discurso de desistência. Às vezes a pessoa chama de impossível algo que só está com medo de encarar.", w: { Prince: 3, Knight: 1, Sylph: -1, Heir: -1 } },
        { txt: "Quero ajudar, mas fico com medo de prometer esperança demais e acabar alimentando uma ilusão.", w: { Rogue: 3, Mage: 1, Page: -1, Thief: -1 } }
    ]},
	{ t: "Uma oportunidade parece perfeita demais, do tipo que dá vontade de acreditar sem fazer muitas perguntas.", opts: [
        { txt: "Minha primeira reação é aceitar. Se parece bom e não tem nada obviamente errado, por que não dizer sim?", w: { Page: 3, Heir: 1, Mage: -2, Prince: -1 } },
        { txt: "Investigo se aquilo é autêntico ou só uma promessa bonita. Já vi coisa boa demais virar armadilha.", w: { Mage: 3, Seer: 2, Page: -2, Bard: -1 } },
        { txt: "Fico dividido: quero acreditar, mas tenho medo de estar aceitando uma fantasia porque preciso muito que ela seja real.", w: { Rogue: 3, Bard: 1, Thief: -1, Knight: -1 } },
        { txt: "Agarro a chance e uso a empolgação ao meu favor. Se todo mundo está animado, melhor transformar isso em impulso antes que passe.", w: { Thief: 3, Knight: 1, Rogue: -1, Seer: -1 } },
        { txt: "Tento descobrir qual é o caminho verdadeiro dentro da promessa, separando o que é possível do que é só brilho.", w: { Seer: 3, Mage: 1, Page: -1, Heir: -1 } }
    ]},
	{ t: "Você percebe que as pessoas estão colocando fé demais em você, como se você fosse a solução para tudo.", opts: [
        { txt: "Uso essa confiança para motivar todo mundo, mas fico com medo de falhar e provar que nunca fui digno dela.", w: { Knight: 3, Rogue: 1, Thief: -1, Bard: -1 } },
        { txt: "Aceito o pedestal com facilidade. Se precisam acreditar em alguém, eu prefiro ser essa pessoa.", w: { Thief: 3, Prince: 1, Rogue: -2, Maid: -1 } },
        { txt: "Tento corresponder ao que esperam de mim, mesmo que parte dessa fé tenha sido criada pelos outros antes de ser minha.", w: { Maid: 3, Heir: 1, Prince: -1, Thief: -1 } },
        { txt: "Fico desconfortável e tento devolver essa confiança para o grupo. Não quero ser o único carregando a esperança de todo mundo.", w: { Rogue: 3, Sylph: 1, Thief: -2, Prince: -1 } },
        { txt: "Rejeito a imagem perfeita que criaram de mim. Acreditar em mim não significa inventar uma versão falsa do que eu sou.", w: { Prince: 3, Mage: 1, Maid: -1, Heir: -1 } }
    ]},
	{ t: "Você descobre que uma crença antiga sua talvez não seja tão verdadeira quanto parecia.", opts: [
        { txt: "Sofro com isso, mas tento entender o que naquela crença era autêntico e o que era só conforto.", w: { Mage: 3, Seer: 1, Bard: -1, Page: -1 } },
        { txt: "Procuro um novo ponto de fé para substituir o antigo. Se uma luz apagou, preciso criar outra para continuar andando.", w: { Maid: 3, Heir: 1, Rogue: -1, Prince: -1 } },
        { txt: "Destruo a crença de vez se ela se provar falsa. Não quero ficar agarrado numa esperança só porque ela me fazia bem.", w: { Prince: 3, Knight: 1, Heir: -1, Sylph: -1 } },
        { txt: "Fico tentando defender a crença por mais tempo do que deveria, porque abrir mão dela parece perder uma parte de mim.", w: { Bard: 3, Page: 1, Mage: -1, Prince: -1 } },
        { txt: "Tento mudar a forma como entendo essa crença em vez de jogar tudo fora; talvez ela só precise significar outra coisa agora.", w: { Witch: 3, Sylph: 1, Prince: -1, Mage: -1 } }
    ]},
	{ t: "Você acredita profundamente em uma ideia, causa ou sonho que as pessoas ao seu redor consideram ingênuo, impossível ou delirante.", opts: [
        { txt: "Continuo acreditando. O fato de ninguém conseguir provar agora não significa que aquilo não seja verdadeiro.", w: { Heir: 3, Page: 2, Mage: -1, Prince: -1 } },
        { txt: "Tento transformar essa crença em algo que outras pessoas também consigam sentir como real.", w: { Witch: 3, Sylph: 2, Bard: -1, Prince: -1 } },
        { txt: "Procuro sinais de autenticidade. Eu quero acreditar, mas preciso saber se aquilo é fé verdadeira ou só uma fantasia confortável.", w: { Mage: 3, Seer: 2, Page: -1, Heir: -1 } },
        { txt: "Rejeito a opinião de quem tenta reduzir tudo a fatos frios. Se eles não conseguem imaginar algo melhor, isso é limitação deles.", w: { Prince: 3, Knight: 1, Bard: 1, Rogue: -2 } },
        { txt: "Tenho medo de acreditar demais e acabar parecendo ridículo, então deixo outras pessoas carregarem essa fé por mim.", w: { Rogue: 3, Maid: 1, Thief: -1, Prince: -1 } }
    ]},
	{ t: "Você vê alguém defendendo algo que, para você, cruza uma linha moral impossível de relativizar.", opts: [
        { txt: "Não consigo tratar como 'opinião diferente'. Algumas coisas são erradas, e aceitar isso como debate já seria ceder demais.", w: { Prince: 3, Knight: 2, Heir: -1, Witch: -1 } },
        { txt: "Tento entender qual crença sustenta aquela visão antes de decidir se ainda existe algo ali que possa ser alcançado.", w: { Seer: 3, Mage: 1, Bard: -1, Page: -1 } },
        { txt: "Tento mudar o jeito como a pessoa enxerga a questão, criando uma ponte para ela acreditar em algo melhor.", w: { Witch: 3, Sylph: 2, Prince: -1, Thief: -1 } },
        { txt: "Fico tentando manter harmonia e acreditar que a pessoa pode melhorar, mesmo que isso me faça tolerar demais.", w: { Heir: 3, Maid: 1, Prince: -2, Bard: -1 } },
        { txt: "Evito me colocar como juiz da situação. Tenho medo de confiar demais na minha própria noção do que é certo.", w: { Rogue: 3, Page: 1, Prince: -2, Knight: -1 } }
    ]}
    ],
    "Doom": [
   { t: "Você percebe que assumiu tarefas demais na semana e, se continuar tentando dar conta de tudo, alguma coisa vai sair mal feita.", opts: [
        { txt: "Corto imediatamente o que for menos necessário. Melhor perder uma parte do plano do que deixar tudo desmoronar.", w: { Seer: 3, Knight: 2, Prince: -1, Bard: -2 } },
        { txt: "Faço uma lista do que é obrigação e tento cumprir tudo na ordem certa, mas só corto alguma tarefa se alguém confirmar que tudo bem deixar aquilo de lado.", w: { Maid: 3, Rogue: 1, Knight: 1, Prince: -2 } },
        { txt: "Tento empurrar tudo mesmo assim. Não gosto de admitir que uma limitação prática tem poder sobre mim.", w: { Prince: 3, Witch: 2, Heir: -1, Sylph: -2 } },
        { txt: "Finjo que ainda dá tempo e vou evitando pensar nisso até a situação me obrigar a encarar as consequências.", w: { Bard: 3, Page: 2, Knight: -2, Seer: -1 } },
        { txt: "Pego para mim as partes mais pesadas porque acho mais seguro eu carregar o prejuízo do que confiar que outra pessoa vai aguentar.", w: { Thief: 3, Heir: 2, Rogue: 1, Bard: -2 } }
    ]},
    { t: "Uma regra nova no trabalho ou na escola atrapalha sua rotina, mas claramente foi criada para evitar um problema real.", opts: [
        { txt: "Procuro um jeito de contornar a regra sem quebrá-la diretamente. Se o limite existe, talvez dê para dobrar o formato dele.", w: { Witch: 3, Mage: 1, Knight: 1, Sylph: -2 } },
        { txt: "Sigo a regra sem fazer muito caso. Se ela existe para evitar um problema, é melhor respeitar até surgir necessidade real de agir diferente.", w: { Heir: 3, Maid: 1, Bard: -2, Prince: -2 } },
        { txt: "Tento entender exatamente onde a regra se aplica e onde ela não se aplica, porque toda restrição tem uma brecha prática.", w: { Mage: 3, Knight: 2, Page: -1, Bard: -1 } },
        { txt: "Começo a lembrar as pessoas do motivo da regra existir, especialmente quando vejo alguém tratando aquilo como frescura.", w: { Sylph: 3, Seer: 1, Prince: -1, Bard: -2 } },
        { txt: "Tento seguir a regra para mostrar que sou responsável, mas acabo exagerando ou interpretando tudo de um jeito mais rígido do que precisava.", w: { Page: 3, Maid: 1, Knight: -1, Witch: -2 } }
    ]},
	{ t: "Você percebe que um projeto pessoal que queria muito fazer simplesmente não cabe na sua rotina atual.", opts: [
        { txt: "Recuso a ideia de que isso é impossível e tento empurrar o projeto mesmo assim, nem que precise arrebentar minha agenda inteira.", w: { Prince: 3, Witch: 1, Sylph: -2, Heir: -1 } },
        { txt: "Aceito que alguma coisa precisa ser cortada e tento escolher a perda menos destrutiva antes que tudo comece a apodrecer junto.", w: { Seer: 3, Knight: 1, Bard: -2, Page: -1 } },
        { txt: "Vou deixando para depois sem admitir que talvez não dê. Enquanto eu não encarar isso como limite real, ainda parece possível.", w: { Bard: 3, Page: 2, Seer: -1, Knight: -2 } },
        { txt: "Organizo as obrigações em ordem de importância, mas só me sinto confortável desistindo de algo se alguém confirmar que eu não estou falhando.", w: { Maid: 3, Rogue: 1, Heir: 1, Prince: -2 } },
        { txt: "Reduzo o projeto ao mínimo necessário para continuar avançando, mesmo que isso signifique sacrificar partes que eu queria manter.", w: { Knight: 3, Seer: 1, Bard: -1, Witch: -1 } }
    ]},
	{ t: "Alguém joga uma responsabilidade chata no seu colo de última hora, dizendo que você parece ser a pessoa mais capaz de lidar com aquilo.", opts: [
        { txt: "Assumo porque provavelmente faço melhor mesmo. Se alguém vai carregar esse peso direito, prefiro que seja eu.", w: { Thief: 3, Knight: 1, Rogue: -2, Bard: -1 } },
        { txt: "Tento passar a tarefa para alguém mais adequado. Não gosto de aceitar um peso que talvez eu não saiba cumprir.", w: { Rogue: 3, Page: 1, Thief: -2, Prince: -1 } },
        { txt: "Aceito em silêncio se parecer realmente necessário. Não gosto da tarefa, mas obrigação é obrigação.", w: { Heir: 3, Maid: 1, Bard: -2, Witch: -1 } },
        { txt: "Aceito rápido demais para provar que sou responsável, mesmo sem entender direito o tamanho do compromisso.", w: { Page: 3, Maid: 1, Seer: -1, Knight: -1 } },
        { txt: "Tento renegociar os termos da tarefa. Posso até ajudar, mas não do jeito exato que tentaram impor.", w: { Witch: 3, Prince: 1, Heir: -1, Sylph: -1 } }
    ]},
	{ t: "Um objeto importante começa a dar pequenos sinais de desgaste, mas ainda funciona se você fingir que nada está acontecendo.", opts: [
        { txt: "Reconheço o padrão de problema antes dele piorar. Já vi coisa pequena virar prejuízo grande por ser ignorada tempo demais.", w: { Mage: 3, Seer: 1, Bard: -1, Page: -1 } },
        { txt: "Paro para investigar os sinais e descobrir o que provavelmente vai quebrar primeiro antes de decidir o que fazer.", w: { Seer: 3, Knight: 1, Bard: -1, Prince: -1 } },
        { txt: "Aviso as pessoas para pararem de usar aquilo sem cuidado. Se continuar assim, a quebra é só questão de tempo.", w: { Sylph: 3, Maid: 1, Prince: -1, Bard: -2 } },
        { txt: "Continuo usando até realmente parar de funcionar. Não vejo por que tratar como desastre algo que ainda dá conta.", w: { Bard: 3, Page: 1, Seer: -2, Sylph: -2 } },
        { txt: "Uso as limitações atuais a meu favor e adapto o jeito de lidar com o objeto até conseguir resolver o problema de verdade.", w: { Knight: 3, Mage: 1, Witch: 1, Page: -1 } }
    ]},
	{ t: "Você recebe um convite muito divertido, mas sabe que tem uma obrigação cedo no dia seguinte.", opts: [
        { txt: "Vou mesmo assim e deixo para lidar com as consequências depois. Uma noite boa não devia ser destruída por uma obrigação chata.", w: { Bard: 3, Prince: 1, Sylph: -2, Knight: -1 } },
        { txt: "Recuso o convite se a obrigação for séria. Não gosto, mas tem coisa que simplesmente precisa vir primeiro.", w: { Heir: 3, Maid: 1, Bard: -2, Witch: -1 } },
        { txt: "Vou só se conseguir impor limites claros: hora de chegar, hora de sair e o mínimo de dano possível no dia seguinte.", w: { Knight: 3, Seer: 1, Page: -1, Bard: -1 } },
        { txt: "Tento quebrar a limitação pela força de vontade, como se dormir pouco ou acordar destruído fosse só um detalhe superável.", w: { Prince: 3, Witch: 1, Sylph: -2, Heir: -1 } },
        { txt: "Faço um plano certinho para cumprir a obrigação e ainda aproveitar um pouco, mas dependo de alguém me puxar de volta se eu passar do limite.", w: { Maid: 3, Page: 1, Rogue: 1, Prince: -1 } }
    ]},
	{ t: "Você precisa dizer não a um pedido de ajuda porque sabe que já está no seu limite.", opts: [
        { txt: "Tento organizar uma forma de ajudar sem me destruir, mas ainda sinto que preciso de permissão para não carregar tudo.", w: { Maid: 3, Rogue: 1, Sylph: 1, Prince: -2 } },
        { txt: "Digo que a pessoa precisa procurar outra solução antes que os dois afundem. Ajudar não pode significar ignorar todos os limites.", w: { Sylph: 3, Seer: 1, Bard: -1, Thief: -1 } },
        { txt: "Procuro outra pessoa para assumir ou dividir o peso, porque não confio que eu consiga lidar com isso sozinho agora.", w: { Rogue: 3, Heir: 1, Knight: -1, Thief: -1 } },
        { txt: "Recuso carregar a parte que não é minha. Se alguém tentou jogar esse peso em mim, eu devolvo antes que vire obrigação.", w: { Thief: 3, Prince: 1, Maid: -1, Rogue: -1 } },
        { txt: "Tento mudar as condições do pedido: ajudo de outro jeito, em outro prazo ou com outro limite, mas não aceito o pacote fechado.", w: { Witch: 3, Mage: 1, Heir: -1, Sylph: -1 } }
    ]},
	{ t: "Uma solução rápida resolveria seu problema agora, mas envolve ignorar uma regra de segurança que existe por um bom motivo.", opts: [
        { txt: "Penso nas vezes em que esse tipo de atalho deu errado antes. Se a regra existe, provavelmente alguém já se ferrou para ela existir.", w: { Mage: 3, Seer: 1, Bard: -1, Page: -1 } },
        { txt: "Analiso o que pode acontecer se a regra for ignorada. Talvez dê certo agora, mas o risco não some só porque é inconveniente.", w: { Seer: 3, Sylph: 1, Prince: -1, Bard: -1 } },
        { txt: "Ignoro a regra se ela estiver me impedindo de resolver algo urgente. Limite nenhum devia ser absoluto quando atrapalha demais.", w: { Prince: 3, Witch: 2, Heir: -1, Sylph: -2 } },
        { txt: "Tento fazer mesmo assim achando que entendi o risco, até perceber no meio do caminho que subestimei as consequências.", w: { Page: 3, Bard: 1, Knight: -1, Mage: -1 } },
        { txt: "Sigo a regra, mesmo frustrado. Se não é absolutamente necessário quebrar esse limite, prefiro não mexer nele.", w: { Heir: 3, Maid: 1, Prince: -1, Witch: -1 } }
    ]},
	{ t: "Você percebe que está insistindo em algo que já não funciona há muito tempo.", opts: [
        { txt: "Tento aceitar que continuar gastando energia nisso só vai aumentar a perda. Às vezes parar é a única decisão útil.", w: { Seer: 3, Mage: 1, Prince: -1, Bard: -1 } },
        { txt: "Crio um limite final: mais uma tentativa, mais um prazo, mais uma condição. Depois disso, acabou.", w: { Sylph: 3, Knight: 1, Bard: -1, Page: -1 } },
        { txt: "Continuo empurrando porque desistir parece pior do que admitir que aquilo já morreu faz tempo.", w: { Bard: 3, Prince: 1, Seer: -2, Sylph: -1 } },
        { txt: "Forço a situação até ela ceder ou quebrar de vez. Se existe uma parede no caminho, eu prefiro derrubar.", w: { Prince: 3, Witch: 1, Heir: -1, Maid: -1 } },
        { txt: "Tento fazer outra pessoa decidir se ainda vale insistir. Não quero ser quem declara o fim de algo importante.", w: { Rogue: 3, Page: 1, Prince: -1, Knight: -1 } }
    ]},
	{ t: "Você precisa lidar com uma situação desgastante por mais tempo do que gostaria, sem garantia de recompensa clara no final.", opts: [
        { txt: "Transformo a situação em uma série de regras e metas pequenas. Se eu seguir o necessário, consigo atravessar isso sem desmoronar.", w: { Knight: 3, Maid: 1, Heir: 1, Bard: -2 } },
        { txt: "Pego para mim as partes mais duras porque prefiro controlar o peso do que depender da resistência dos outros.", w: { Thief: 3, Knight: 1, Rogue: -1, Bard: -1 } },
        { txt: "Aceito limites impostos de fora para provar que dou conta, mesmo reclamando do quanto isso está sendo pesado.", w: { Page: 3, Maid: 1, Prince: -1, Mage: -1 } },
        { txt: "Procuro uma forma de alterar as condições da situação para que o desgaste não precise seguir exatamente as regras dadas.", w: { Witch: 3, Mage: 1, Heir: -1, Sylph: -1 } },
        { txt: "Tento manter tudo funcionando para os outros, mas tenho dificuldade em reconhecer quando eu mesmo preciso parar.", w: { Maid: 3, Sylph: 1, Thief: -1, Prince: -1 } }
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
   { t: "Te oferecem estabilidade total, mas com uma rotina rígida e sem margem para improviso.", opts: [
        { txt: "Aceito os benefícios, mas começo a explorar brechas para continuar fazendo o que quero.", w: { Thief: 3, Rogue: 2, Knight: -1, Page: -2 } },
        { txt: "Uso a estabilidade como escudo para financiar minha liberdade fora dessa obrigação.", w: { Knight: 3, Maid: 2, Rogue: -1, Page: -2 } },
        { txt: "Recuso e alerto os outros sobre trocar liberdade por conforto.", w: { Sylph: 3, Seer: 2, Bard: -1, Thief: -2 } },
        { txt: "Aceito por um tempo para entender meus limites dentro dessa rotina engessada.", w: { Mage: 3, Seer: 2, Heir: -2, Sylph: -1 } },
        { txt: "Simplesmente sigo outro caminho. Não fico onde minha vida vira uma gaiola.", w: { Heir: 3, Bard: 2, Knight: -2, Page: -1 } }
 ]},
	{ t: "Você começou um hobby em grupo, mas sua vontade sumiu enquanto o resto do grupo continua animado.", opts: [
        { txt: "Encerro de uma vez. Melhor frustrar agora do que fingir energia que já acabou.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -1 } },
        { txt: "Passo a organização para alguém mais engajado e saio aos poucos.", w: { Rogue: 3, Thief: 2, Knight: -2, Maid: -1 } },
        { txt: "Continuo participando para não decepcionar ninguém, mesmo sem vontade.", w: { Page: 3, Knight: 2, Prince: -2, Thief: -1 } },
        { txt: "Reorganizo a dinâmica para o grupo continuar sem depender de mim.", w: { Sylph: 3, Seer: 2, Thief: -2, Prince: -1 } },
        { txt: "Vou sumindo devagar até minha ausência dissolver a atividade naturalmente.", w: { Bard: 3, Heir: 2, Sylph: -2, Knight: -1 } }
 ]},
	{ t: "Você faz novas amizades, e um amigo antigo começa a agir de forma possessiva.", opts: [
        { txt: "Corto a cobrança e deixo claro que amizade nenhuma justifica prisão.", w: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
        { txt: "Me afasto para forçar essa pessoa a desenvolver a própria independência.", w: { Sylph: 3, Seer: 2, Thief: -2, Bard: -1 } },
        { txt: "Tento equilibrar tudo, mesmo que isso acabe sufocando minha liberdade.", w: { Page: 3, Knight: 2, Prince: -2, Thief: -1 } },
        { txt: "Mergulho nas novas amizades e ignoro o ciúme dele.", w: { Thief: 3, Rogue: 2, Page: -2, Knight: -1 } },
        { txt: "Paro de dar satisfações e deixo a cobrança perder força sozinha.", w: { Bard: 3, Heir: 2, Prince: -2, Maid: -1 } }
 ]},
	{ t: "Você está imerso em um interesse pessoal, mas seu grupo entra numa crise burocrática urgente.", opts: [
        { txt: "Resolvo do jeito mais rápido possível só para liberar meu caminho de novo.", w: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
        { txt: "Cuido da parte prática como um escudo, mas protejo meu verdadeiro interesse.", w: { Knight: 3, Maid: 2, Rogue: -2, Heir: -1 } },
        { txt: "Aponto a direção e as falhas do problema, mas evito assumir a execução.", w: { Seer: 3, Mage: 2, Bard: -1, Page: -2 } },
        { txt: "Aproveito o caos para monopolizar tempo, espaço ou recursos para meu projeto.", w: { Thief: 3, Rogue: 2, Knight: -1, Maid: -2 } },
        { txt: "Continuo na minha bolha e sigo meu rumo como se a crise não me puxasse.", w: { Heir: 3, Bard: 2, Prince: -2, Knight: -1 } }
]},
	{ t: "Seu grupo precisa decidir algo urgente, mas ninguém chega a consenso.", opts: [
		{ txt: "Resolvo sozinho. Melhor andar do meu jeito do que ficar parado.", w: { Thief: 3, Mage: 2, Knight: 1, Sylph: -2 } },
		{ txt: "Tomo a frente e aponto qualquer direção viável. O importante é sair do lugar.", w: { Maid: 3, Witch: 2, Seer: 1, Bard: -2 } },
		{ txt: "Largo mão e vou cuidar das minhas coisas.", w: { Bard: 3, Rogue: 1, Heir: 1, Knight: -2 } },
		{ txt: "Facilito a conversa para o bloqueio se desfazer naturalmente.", w: { Sylph: 3, Seer: 2, Heir: 1, Prince: -2 } },
		{ txt: "Espero alguém decidir por mim, porque minha opinião parece não mover nada.", w: { Page: 3, Knight: 2, Bard: -1, Witch: -1 } }
 ]},
	{ t: "Você está em um lugar desconhecido, sem GPS e sem saber onde fica a saída.", opts: [
		{ txt: "Gosto da sensação de não saber o que vem depois e exploro sem pressa.", w: { Heir: 3, Seer: 1, Sylph: 1, Knight: -3 } },
		{ txt: "Fico nervoso, mas ando como se soubesse o caminho.", w: { Knight: 3, Page: 2, Prince: 1, Heir: -2 } },
		{ txt: "Uso o ambiente e as pessoas ao redor para descobrir uma rota.", w: { Witch: 3, Thief: 2, Mage: 1, Bard: -1 } },
		{ txt: "Sento e espero. Eventualmente algo ou alguém aparece.", w: { Bard: 3, Rogue: 1, Page: 1, Maid: -2 } },
		{ txt: "Observo padrões no trânsito e na arquitetura para deduzir a saída.", w: { Mage: 3, Seer: 2, Thief: 1, Heir: -1 } }
 ]},
 	{ t: "Você está em uma dinâmica segura e confortável, mas totalmente parada e sem novos desafios.", opts: [
        { txt: "Vou embora. Conforto sem movimento ainda é estagnação.", w: { Prince: 3, Witch: 2, Heir: -2, Page: -1 } },
        { txt: "Invento objetivos novos para criar movimento onde não havia.", w: { Maid: 3, Knight: 2, Rogue: -2, Sylph: -1 } },
        { txt: "Empurro as pessoas ao redor para saírem da zona de conforto também.", w: { Sylph: 3, Seer: 2, Thief: -2, Bard: -1 } },
        { txt: "Uso a calmaria como base para focar nos meus interesses fora dali.", w: { Thief: 3, Mage: 2, Page: -2, Knight: -1 } },
        { txt: "Minha atenção evapora e eu vou faltando até sair sem grande ruptura.", w: { Heir: 3, Bard: 2, Prince: -2, Maid: -1 } }
]},
 { t: "Uma autoridade exige que você defina um plano de vida detalhado e pare de improvisar.", opts: [
		{ txt: "Questiono a utilidade de planejar rigidamente um futuro imprevisível.", w: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
        { txt: "Defendo minha trajetória como prova de que adaptação funciona melhor para mim.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
        { txt: "Tento mostrar que incerteza não precisa ser tratada como perigo.", w: { Sylph: 3, Seer: 2, Thief: -2, Bard: -1 } },
        { txt: "Finjo concordar, faço um plano genérico e continuo seguindo meu caminho.", w: { Thief: 3, Mage: 2, Knight: -2, Page: -1 } },
        { txt: "Até tento, mas com o tempo abandono o plano sem perceber.", w: { Bard: 3, Heir: 2, Prince: -2, Maid: -1 } }
 ]},
 { t: "Você fica offline por alguns dias e, ao voltar, cobram explicações detalhadas sobre seu sumiço.", opts: [
		{ txt: "Corto a cobrança. Minha disponibilidade não é direito de ninguém.", w: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
		{ txt: "Recuso pedir desculpas e ajo como se meu sumiço fosse normal.", w: { Maid: 3, Knight: 2, Rogue: -2, Heir: -1 } },
		{ txt: "Uso a situação para definir limites claros de comunicação.", w: { Seer: 3, Mage: 2, Bard: -2, Thief: -1 } },
		{ txt: "Desvio do interrogatório com uma resposta vaga e mudo de assunto.", w: { Rogue: 3, Thief: 2, Maid: -2, Knight: -1 } },
		{ txt: "Dou de ombros e sigo normalmente até a cobrança perder força.", w: { Heir: 3, Bard: 2, Seer: -2, Mage: -1 } }
]},
 { t: "Você quer colocar uma ideia simples em prática, mas descobre que precisa passar por um processo burocrático enorme.", opts: [
		{ txt: "Faço do meu jeito e lido com a bronca depois.", w: { Prince: 3, Witch: 2, Page: -2, Sylph: -1 } },
		{ txt: "Encontro uma brecha para conseguir a liberação mais rápido que os outros.", w: { Thief: 3, Rogue: 2, Knight: -1, Maid: -2 } },
		{ txt: "Tento simplificar o processo para todo mundo, não só para mim.", w: { Sylph: 3, Seer: 2, Bard: -2, Thief: -1 } },
		{ txt: "Sigo o protocolo, mesmo odiando cada etapa.", w: { Page: 3, Knight: 2, Prince: -2, Thief: -1 } },
		{ txt: "Perco o interesse e vou fazer algo mais simples e livre.", w: { Heir: 3, Bard: 2, Seer: -2, Mage: -1 } }
	]} 
  ] 
};


