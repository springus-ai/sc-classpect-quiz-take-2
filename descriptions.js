const classpectDescriptions = {

	"Prince": `<strong>Príncipe/Princesa:</strong> Sua tendência natural é impor sua vontade e destruir tudo o que te incomoda ou desafia sua visão de mundo, muitas vezes agindo como um hipócrita que julga nos outros o que faz escondido. Você cria regras draconianas e padrões impossíveis para os outros, mas age como se possuísse imunidade diplomática contra as próprias leis. Mas, se você aprender a direcionar esse instinto crítico, você se torna a pessoa capaz de encerrar ciclos que ninguém mais tem coragem de fechar.`,
    
    "Bard": `<strong>Bardo/Barda:</strong> Sua postura é definida por uma negligência calculada e arrogante. Você não suja as mãos para destruir algo, basta retirar o suporte vital e deixar que a gravidade faça o resto. Você cria as condições para aquilo quebrar enquanto se isenta da culpa. Mas sua isenção é uma mentira, enquanto você foge da situação, você destrói a si mesmo e culpa o mundo pela sua situação. Se você assumir a responsabilidade, sua passividade deixa de ser covardia e vira estratégia. Você se torna a única pessoa com o sangue frio necessário para parar de sustentar causas perdidas, permitindo que o insustentável finalmente acabe para que a vida possa seguir em frente.`,
    
    "Thief": `<strong>Ladrão/Ladra:</strong> Na vida prática, você é aquela pessoa que assume o controle do projeto porque acredita que os outros são lentos ou incompetentes demais para fazê-lo. Você toma a palavra, toma o crédito e toma o espaço, não necessariamente por maldade, mas por convicção de que esses recursos serão mais úteis nas suas mãos do que nas de qualquer outro. O seu defeito óbvio é o egoísmo predatório que drena quem está ao seu redor, deixando os outros sem voz, sem vez e sem energia. Sua evolução só acontece quando você percebe que o microgerenciamento te isolou em um trono vazio, passando a centralizar o poder não mais para inflar seu ego, mas para garantir que a vitória não custe a sua companhia.`,
    
    "Rogue": `<strong>Ladino/Ladina:</strong> Sua generosidade é, muitas vezes, um esconderijo. Você é a pessoa que resolve a crise emocional dos amigos, cede sua vez na fila e recusa créditos por um trabalho bem feito, repassando o elogio para a equipe. Você se sente mais seguro gerenciando o sucesso, os problemas e os sentimentos dos outros do que lidando com o peso de ter os seus. É mais fácil consertar o namoro do amigo do que arrumar o seu; é mais fácil fazer o trabalho duro para o colega brilhar do que assumir o risco de apresentar o projeto e falhar. Você doa porque, no fundo, acredita que não é qualificado para manter aquilo com você.`,
    
    "Knight": `<strong>Cavaleiro/Cavaleira:</strong> Você é a pessoa que se esforça o dobro de todo mundo porque, lá no fundo, tem certeza de que é uma fraude e que, a qualquer momento, todos vão descobrir. Você serve aos outros e resolve problemas obsessivamente não por caridade, mas porque acredita que precisa comprar o seu lugar no grupo através da utilidade. Você usa o trabalho excessivo ou a ironia constante como uma armadura: se você estiver ocupado salvando o dia, ninguém vai ter tempo de ver o quanto você se sente vazio ou inadequado.`,
    
    "Page": `<strong>Escudeiro/Escudeira:</strong> A princípio, você parece ser a pessoa com a maior deficiência no seu Aspecto — seja falta de habilidade social, falta de vontade ou falta de sorte. Você frequentemente se sente atrás de todos, dependendo da paciência e da ajuda alheia para o básico. Mas essa 'carência'é o que torna sua jornada tão promissora. Enquanto os prodígios estagnam porque acham que já sabem tudo, você continua escalando. Você explora o Aspecto ao permitir que ele te preencha lentamente, transformando cada humilhação e cada erro em dados brutos para o seu crescimento. Você é o investimento de longo prazo que parece arriscado, mas que paga os maiores dividendos.`,
    
    "Maid": `<strong>Criado/Criada:</strong> Você é a pessoa no grupo, na família ou no ambiente de trabalho que sempre assume a carga mais pesada, simplesmente porque todos sabem que você é o único capaz de resolver o problema. Você começa sua trajetória preso às demandas dos outros, funcionando como a fundação silenciosa que sustenta a incompetência alheia. Você aceita o peso, muitas vezes ressentido, porque o seu medo de ver tudo desmoronar é maior do que o seu desejo de liberdade. Você se torna um mártir da sua própria utilidade, sendo tratado como um recurso inesgotável por pessoas que exigem a sua ajuda, mas raramente a valorizam.`,
    
    "Sylph": `<strong>Sílfide/Sílfido:</strong> Você restaura o que está quebrado e cura o que está ferido. Você tem uma noção inata de como as coisas (e as pessoas) deveriam ser e trabalha incansavelmente para consertá-las. Sua vontade de ajudar pode beirar a interferência. Você acha que sabe o que é melhor para todos, muitas vezes ignorando se eles querem ser curados ou não. Seu desafio é entender que nem tudo precisa do seu toque mágico.`,
    
    "Witch": `<strong>Bruxa/Bruxo:</strong> Diante de um limite, de um acordo desfavorável ou de uma situação de desvantagem, sua reação instintiva é alterar os termos em jogo. Na vida prática, você é a pessoa que reinterpreta combinados antigos, muda os planos na última hora para acomodar seu conforto e ajusta a narrativa de uma discussão até ter certeza de que saiu no controle da situação. O motor desse comportamento é um medo paralisante de ficar encurralado. Você manipula as circunstâncias, as expectativas e as pessoas ao seu redor para garantir que nunca mais seja a vítima das decisões de terceiros.`,
    
    "Heir": `<strong>Herdeiro/Herdeira:</strong> Você é aquele que o universo parece favorecer naturalmente. Onde outros lutam para controlar o Aspecto, você simplesmente se torna ele. As soluções tendem a cair no seu colo, e o vento sopra a seu favor. Sua grande força é também sua armadilha: você costuma ser levado pela correnteza. Seu desafio é parar de ser um passageiro da própria lenda e assumir o volante, antes que sua passividade o torne irrelevante.`,
    
    "Mage": `<strong>Mago/Maga:</strong> A sua relação com o Aspecto é pautada no estudo ativo, solitário e sistemático. Você acumula informações, mapeia padrões e formula regras rígidas puramente para traçar a sua própria rota. Quando o Aspecto inunda a realidade de forma descontrolada e quebra os seus modelos mentais matemáticos, o seu sistema entra em colapso. O seu foco absoluto é a autossuficiência intelectual; você aprende as regras do jogo para garantir a sua própria sobrevivência.`,
    
    "Seer": `<strong>Vidente:</strong> Você é a pessoa que deixa os outros testarem o terreno primeiro, prestando atenção aos sucessos e catalogando os fracassos alheios para construir o seu próprio manual de sobrevivência. O seu distanciamento é metodológico: você exige ver as engrenagens girando antes de decidir como interagir com a máquina. Você opera estritamente na base do empirismo. Você estuda o mundo minuciosamente para dominar o seu funcionamento, usando a posição de observador para se manter a uma distância clínica das consequências.`,

    "Time": `<strong>Tempo:</strong> Você é orientado a objetivos e brutalmente eficiente. O relógio não lhe assusta; ele toca a sua música. Você entende que fins são necessários e que o sacrifício faz parte do progresso. Você vive em um estado de ansiedade crônica. Você corre contra o relógio não porque gosta, mas porque teme que, se parar por um segundo, tudo desmorone. Sua impaciência é o medo da mortalidade disfarçado de produtividade.`,
    
    "Space": `<strong>Espaço:</strong> Você vê o quadro geral. Onde outros veem o fim, você vê o começo de algo novo. Criativo, artístico e fundamentalmente importante, você é o palco onde o universo acontece. Você se sente isolado e desconectado. Sua tendência a esperar passivamente pelo momento certo ou a focar demais na criação física é uma forma de evitar lidar com o fato de que, muitas vezes, você se sente sozinho numa sala cheia de gente.`,
    
    "Void": `<strong>Vazio:</strong> Você é o mistério, o potencial não realizado, o segredo. Você opera nas sombras, confortável com o desconhecido e capaz de ver o que os outros ignoram. Você é a tela em branco infinita. Você se esconde porque tem medo de ser julgado ou percebido. É mais seguro ser um nada do que arriscar ser algo e falhar. Sua passividade e apatia são formas de evitar a dor da exposição.`,
    
    "Light": `<strong>Luz:</strong> Você quer o saber, o conhecimento e a relevância. Você ilumina o caminho, manipula a sorte e garante que nada importante passe despercebido. Você joga para ganhar e geralmente ganha. Você tem pavor da irrelevância. Você precisa ser o protagonista, precisa estar certo e precisa que todos vejam isso. Sua busca por conhecimento é, muitas vezes, uma busca desesperada por validação externa e atenção.`,
    
    "Mind": `<strong>Mente:</strong> Racional, adaptável e justo. Enquanto outros se perdem tentando definir quem são, você foca obsessivamente em qual caminho tomar. Problemas existem para serem resolvidos e a sua cabeça não descansa enquanto não chegar à uma solução. Você valoriza a lógica acima do viés pessoal e a resolução acima do conforto emocional. Tome cuidado, apesar: seus sentimentos também são capazes de macular seu julgamento.`,
    
    "Heart": `<strong>Coração:</strong> Você entende as pessoas — e a si mesmo — em um nível instintivo. Autêntico e apaixonado, você é guiado por seus sentimentos e identidade, servindo como a bússola moral ou emocional do grupo. Você é obcecado pela própria identidade porque, no fundo, sente-se fragmentado. Você sente tudo com tanta intensidade que, às vezes, é difícil separar o que você sente do que é real. Sua autenticidade pode ser apenas teimosia emocional.`,
    
    "Rage": `<strong>Raiva:</strong> Você vê as mentiras que sustentam a sociedade e se recusa a aceitá-las. Sua força vem da recusa, do desafio e de uma busca agressiva pela verdade crua, custe o que custar. Você tem medo de ser enganado ou controlado, então rejeita tudo preventivamente. Sua raiva constante e seu cinismo são escudos para não se machucar. Você se fecha em uma única verdade (a sua) e chama isso de objetividade.`,
    
    "Hope": `<strong>Esperança:</strong> Você é um imaginador e um idealista. Seu otimismo é uma força da natureza, capaz de inspirar aliados e quebrar probabilidades impossíveis através da pura convicção. Sua fé cega é um mecanismo de negação. Você se apega ao "como as coisas deveriam ser" para não ter que lidar com "como as coisas são". Você prefere viver numa fantasia bonita a enfrentar uma verdade feia.`,
    
    "Doom": `<strong>Perdição:</strong> Você entende o sacrifício e as regras inevitáveis do universo. Empático e cauteloso, você sabe que nem tudo tem um final feliz, e usa esse conhecimento para mitigar o desastre para os outros. Você é fatalista. Muitas vezes, você desiste antes mesmo de tentar porque já sabe como vai acabar. Você usa o cinismo e o pessimismo como uma armadura para não se decepcionar, sufocando sua própria esperança no berço.`,
    
    "Life": `<strong>Vida:</strong>  Você é energia, crescimento e cura. Você acredita que regras existem para serem quebradas em nome da sobrevivência e do luxo. Onde há deserto, você faz crescer uma floresta. Você tem um medo profundo de ser insignificante ou de perder sua autonomia. Sua necessidade de fazer acontecer e de ajudar pode virar dominância. Você atropela os desejos dos outros porque acha que sabe o que é melhor para a sobrevivência deles.`,
    
    "Blood": `<strong>Sangue:</strong> Você é a cola que mantém todos unidos. Para você, lealdade, promessas e vínculos são mais fortes que a física. Você é um companheiro devoto que encontra força na união. Você define seu valor inteiramente pelo que pode fazer pelos outros ou a quem está conectado. Você morre de medo de ficar sozinho ou de ser inútil, o que pode levá-lo a relacionamentos codependentes ou a carregar o peso do mundo nas costas sem reclamar.`,
    
    "Breath": `<strong>Suspiro:</strong> Você é desapegado, flexível e independente. Você flutua acima dos problemas e traz movimento para onde há estagnação. Sua liberdade é, muitas vezes, apenas escapismo. Você tem pavor de amarras e responsabilidades, então se afasta (física ou emocionalmente) assim que as coisas ficam sérias ou difíceis. Você confunde indiferença com iluminação.`,
	
	 // --- HOPE (ESPERANÇA) ---
    "Maid:Hope": `
        <h3>MAID OF HOPE (CRIADA/CRIADO DA ESPERANÇA)</h3>
        <p><strong>Que Serve a Esperança / Feita(o) de Esperança.</strong></p>
        <p>Você é a pessoa que acaba gerenciando o moral e a fé daqueles ao seu redor. Sua atuação ocorre de forma puramente prática: alguém precisa manter a convicção e o otimismo de pé para que o grupo não estagne. Você "serve a Esperança" tornando-se o repositório inesgotável de motivação em um ambiente que, de outra forma, cederia facilmente ao cinismo e à descrença.</p>
        <p>Diante da falta de perspectiva ao seu redor, você simplesmente assume o fardo de ser a bateria emocional de todos. Você absorve a necessidade de acreditar em dias melhores e varre o desespero para longe, aceitando a posição de pilar de apoio por pura necessidade de manter as pessoas funcionais. O perigo real dessa dinâmica é se acostumar tanto a sustentar a fé dos outros que você acaba impondo uma positividade sufocante, invalidando as frustrações naturais do grupo e esgotando suas próprias convicções no processo.</p>
    `,
    "Knight:Hope": `
        <h3>KNIGHT OF HOPE (CAVALEIRO/CAVALEIRA DA ESPERANÇA)</h3>
        <p><strong>O que Explora a Esperança / Protege a Esperança.</strong></p>
        <p>Sua confiança não é natural; é uma performance. O Cavaleiro de Esperança é o ator que entra no palco tremendo, mas atua com tanta convicção que a plateia (e a realidade) acredita. Você usa a fé como um escudo contra sua própria insegurança paralisante. Você provavelmente sente que, no fundo, não é bom o suficiente, então compensa projetando uma imagem de certeza inabalável.</p>
        <p>Você provavelmente morre de medo de ser insuficiente ou de que as coisas *não* deem certo. Então, você performa a Esperança. Você força resultados positivos na base da teimosia, não porque acredita no destino, mas porque a alternativa — admitir a derrota — destruiria a persona invencível que você construiu para se proteger do julgamento alheio.</p>
    `,
    "Thief:Hope": `
        <h3>THIEF OF HOPE (LADRÃO/LADRA DA ESPERANÇA)</h3>
        <p><strong>O que Rouba a Esperança (para si).</strong></p>
        <p>Você tem uma necessidade quase patológica de ser o "favorito", o "escolhido", a pessoa em quem todos depositam suas fichas. Se você vê alguém admirando, confiando ou adorando outra pessoa (seja um amigo, um líder ou até uma ideia), você sente isso como uma ofensa pessoal, como se aquela fé estivesse sendo roubada de você.</p>
        <p>Isso nasce de uma insegurança profunda: você não consegue gerar autoestima ou fé interna sozinho. Você precisa ver o brilho nos olhos dos outros direcionado a você para sentir que existe. Você canibaliza a confiança do grupo, centralizando-a em si mesmo, criando uma dinâmica onde todos dependem emocionalmente da sua aprovação e da sua "divindade" fabricada, enquanto você morre de medo de que descubram que você é apenas humano.</p>
    `,
    "Mage:Hope": `
        <h3>MAGE OF HOPE (MAGO/MAGA DA ESPERANÇA)</h3>
        <p><strong>O que Entende a Esperança / Entende com a Esperança.</strong></p>
        <p>Você conhece a fé, não porque leu sobre ela, mas porque já acreditou em algo com tanta força que, quando falhou, quase te destruiu. Agora, você entende os limites da esperança. Você provavelmente já acreditou em algo ou alguém com todas as suas forças e foi traído ou desapontado brutalmente.</p>
        <p>Você é a pessoa que se joga em ideologias, relacionamentos ou causas impossíveis, não por ingenuidade, mas para ver como a engrenagem funciona. Você sabe diferenciar uma causa perdida de uma chance real. Você é o cínico que, no fundo, sabe exatamente onde o milagre está escondido, mas reclama o caminho todo até lá.</p>
    `,
    "Witch:Hope": `
        <h3>WITCH OF HOPE (BRUXA/BRUXO DA ESPERANÇA)</h3>
        <p><strong>Que Manipula a Esperança.</strong></p>
        <p>Você não impõe sua vontade pela força; você a impõe pelo entusiasmo contagiante e, às vezes, perigoso. Você trata a fé — a sua e a dos outros — como uma ferramenta ajustável, não como um dogma sagrado.</p>
        <p>Sua habilidade "mágica" é a de alterar o clima emocional e a moral de um grupo instantaneamente. Você é aquela pessoa que consegue transformar um funeral em uma festa, ou uma vitória em pânico, apenas mudando a perspectiva do que é "possível". Você vê potencial onde não existe e manipula seus amigos para que eles sigam os sonhos que você acha que eles deveriam ter. Você não faz isso por maldade, mas porque o tédio de um mundo sem "milagres" é insuportável para você.</p>
    `,
    "Prince:Hope": `
        <h3>PRINCE OF HOPE (PRÍNCIPE/PRINCESA DA ESPERANÇA)</h3>
        <p><strong>O que Destrói a Esperança / Destrói com a Esperança.</strong></p>
        <p>Você é o destruidor de ilusões. Você se orgulha de ser "brutalmente honesto", o realista que estoura os balões de fantasia dos outros. Você vê a esperança cega como uma fraqueza ou uma mentira que precisa ser erradicada.</p>
        <p>No entanto, a ironia do Príncipe é que ele age como o fantasma do aspecto oposto. Você acredita na sua própria lógica (ou no seu pessimismo) com a mesma fé cega que critica nos outros, destruindo sistematicamente qualquer chance de felicidade ou conexão genuína porque tem medo de parecer bobo ou vulnerável se acreditar.</p>
    `,
    "Sylph:Hope": `
        <h3>SYLPH OF HOPE (SÍLFIDE/SILFO DA ESPERANÇA)</h3>
        <p><strong>Que Cura a Esperança / Conserta a Esperança.</strong></p>
        <p>Você é a "intrometida" benevolente. Você não suporta ver as pessoas tristes, sem rumo ou céticas. Você sente uma compulsão quase maternal de "consertar" as crenças dos outros, oferecendo conselhos não solicitados, perspectivas positivas e soluções espirituais.</p>
        <p>Sua intenção é nobre, mas sua execução pode ser invasiva. Você tenta consertar o que não está quebrado, forçando positividade em momentos onde o luto ou a raiva seriam saudáveis. Você teme a desesperança alheia porque ela reflete suas próprias dúvidas, então você "medica" todos ao seu redor com otimismo forçado para manter seu próprio ambiente estável.</p>
    `,
    "Page:Hope": `
        <h3>PAGE OF HOPE (ESCUDEIRO/ESCUDEIRA DA ESPERANÇA)</h3>
        <p><strong>Aquele que explora a Esperança / Explora através da Esperança.</strong></p>
        <p>Você é alguém que começa sem crenças reais ou sem força de vontade. Você explora o "imaginário" porque a realidade parece decepcionante. Influenciável, ingênuo, talvez até um pouco "bobo", você está buscando desesperadamente alguém ou algo em que acreditar porque não confia no seu próprio taco.</p>
        <p>Ao explorar o potencial do que poderia ser, você acaba por tornar o impossível em algo tangível. Você tende a acreditar na narrativa de qualquer um que pareça mais confiante que você, deixando-se levar. O crescimento vem quando você para de esperar pelo "arco de personagem" e decide impor sua própria vontade no mundo, transformando sua fantasia em realidade tangível.</p>
    `,
    "Rogue:Hope": `
        <h3>ROGUE OF HOPE (LADINO/LADINA DA ESPERANÇA)</h3>
        <p><strong>O que Rouba a Esperança (para redistribuir).</strong></p>
        <p>Você tem uma aversão a ser o centro da fé alheia. Se alguém te coloca num pedestal, sua reação instintiva é chutar o pedestal e apontar para outra pessoa, dizendo: "Não olhem para mim, olhem para ela! Ela é quem realmente salvou o dia."</p>
        <p>Você morre de medo de falhar com as expectativas das pessoas, então você nunca deixa que elas esperem nada de você. Você vive nos bastidores, inflando o ego dos outros enquanto se sente secretamente uma fraude, incapaz de aceitar que talvez, só talvez, você fosse a pessoa certa para o trabalho desde o início.</p>
    `,
    "Seer:Hope": `
        <h3>SEER OF HOPE (VIDENTE DA ESPERANÇA)</h3>
        <p><strong>Que Vê a Esperança / Guia pela Esperança.</strong></p>
        <p>Você não precisa ter fé; você entende como a fé funciona. Você olha para uma situação caótica e consegue discernir quais caminhos são pura fantasia e quais têm uma chance real de sucesso. Você olha para um mar de possibilidades e sabe dizer qual é a fantasia e qual é o caminho viável. Você é o estrategista do otimismo.</p>
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
        <p>Você é o agente do caos na moral do grupo. Ou você suga a fé de todos, ou sua própria fé quebrada explode e leva tudo junto. Alguém que oscila entre tentar desesperadamente ser algo que não é e agindo de forma patética que faz todos ao redor perderem a fé em você e na situação.</p>
        <p>Você pode ser aquele que, com uma piada errada ou uma atitude cínica no momento crucial, desmonta a motivação de todos. Ou, inversamente, sua própria falta de esperança é tão contagiante e destrutiva que obriga o universo a reagir.</p>
    `,

    // --- BLOOD (SANGUE) ---
    "Maid:Blood": `
        <h3>MAID OF BLOOD (CRIADA/CRIADO DO SANGUE)</h3>
        <p><strong>Que Serve o Sangue / Feita(o) de Sangue.</strong></p>
        <p>Você é a pessoa que acaba gerenciando as relações e as obrigações daqueles ao seu redor. Sua atuação ocorre de forma puramente prática: alguém precisa manter o grupo unido e resolver as fricções constantes para que a convivência não colapse. Você "serve o Sangue" tornando-se o repositório central dos laços e deveres mútuos em um ambiente formado por indivíduos que, de outra forma, se separariam na primeira dificuldade.</p>
        <p>Diante da constante ameaça de ruptura social ao seu redor, você simplesmente assume o fardo de ser a âncora de todos. Você absorve o estresse das intrigas alheias e carrega o peso emocional das alianças, aceitando a posição de mediador permanente por pura necessidade estrutural. O perigo real dessa dinâmica é se acostumar tanto a ser o cimento das relações dos outros que você acaba preso a correntes que você mesma forjou, sacrificando sua própria autonomia para manter uma união que só existe às suas custas.</p>
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
        <p>Você constantemente se sente sozinho, e é a sensação que mais te consome. Você tende a monopolizar amigos, criar intrigas sutis para garantir que fulano goste mais de você do que de sicrano, ou exigir provas constantes de lealdade.</p>
        <p>É um mecanismo de defesa de quem se sente vazio por dentro. Você rouba a validação alheia para preencher esse buraco. Você pode ser carismático, atraindo seguidores, mas suas relações tendem a ser parasíticas: você se alimenta da devoção dos outros sem necessariamente retribuir na mesma moeda.</p>
    `,
    "Mage:Blood": `
        <h3>MAGE OF BLOOD (MAGO/MAGA DO SANGUE)</h3>
        <p><strong>O que Entende o Sangue / Entende com o Sangue.</strong></p>
        <p>Você entende de relacionamentos porque já sofreu muito por causa deles. Você é aquele que vê as linhas invisíveis que conectam as pessoas: quem gosta de quem, quem está traindo quem, onde estão as tensões ocultas. Sua intuição social é afiada pela dor.</p>
        <p>Sua "Realidade" foi, provavelmente, a traição ou o peso de uma responsabilidade que você não pediu. Agora, você navega o mundo social com um cinismo informado. Você sabe que toda promessa tem um custo e que lealdade cega é perigosa. Você guia o grupo não pelo carisma, mas pelo aviso: "eu sei onde isso vai dar errado".</p>
    `,
    "Witch:Blood": `
         <h3>WITCH OF BLOOD (BRUXA DO SANGUE)</h3>
         <p><strong>A que Manipula o Sangue / Manipula através do Sangue.</strong></p>
         <p>Você rejeita a ideia de que "sangue é mais espesso que água" — a menos que seja o *seu* sangue. Você não aceita as conexões que o destino ou a sociedade te impuseram (família biológica, colegas de classe, tradições); você escolhe a sua própria família e exige que ela funcione sob as suas regras.</p>
         <p>Sua manipulação é emocional e envolvente. Você tem um magnetismo que faz as pessoas quererem se comprometer com você, e você usa isso para reconfigurar a dinâmica do grupo. Você é capaz de pegar pessoas quebradas e solitárias e forçá-las a uma união que as salva, ou convencer amigos de longa data a se separarem porque "não faziam bem um ao outro".</p>
`,
    "Prince:Blood": `
        <h3>PRINCE OF BLOOD (PRÍNCIPE/PRINCESA DO SANGUE)</h3>
        <p><strong>O que Destrói o Sangue / Destrói com o Sangue.</strong></p>
        <p>Você performa o papel de alguém desapegado e livre (como um jogador de Breath), alegando que odeia drama, panelinhas e obrigações sociais. Você se orgulha de cortar pessoas da sua vida com a frieza de um carrasco, destruindo amizades e queimando pontes sob o pretexto de "se libertar de pessoas tóxicas".</p>
        <p>A sua hipocrisia, no entanto, é gritante: você destrói relacionamentos porque tem uma visão absolutista e rígida do que um relacionamento deve ser. Você não é livre; você é um tirano emocional. Você exige uma lealdade e uma perfeição moral tão inalcançáveis que ninguém consegue satisfazer, e então usa essa "falha" dos outros como justificativa para destruí-los.</p>
    `,
    "Sylph:Blood": `
        <h3>SYLPH OF BLOOD (SÍLFIDE/SILFO DO SANGUE)</h3>
        <p><strong>Que Cura o Sangue / Conserta o Sangue.</strong></p>
        <p>Você é a mediadora compulsiva. Você não suporta ver brigas, desentendimentos ou "climão". Sua missão autoimposta é garantir que todos se deem bem, muitas vezes varrendo problemas reais para debaixo do tapete em nome da harmonia.</p>
        <p>Isso pode se tornar tóxico quando você tenta "curar" relacionamentos que deveriam acabar, forçando pessoas a perdoarem abusos ou a manterem laços falidos porque "família é tudo". Você precisa aprender que nem todo vínculo merece ser salvo e que o conflito às vezes é saudável.</p>
    `,
    "Page:Blood": `
        <h3>PAGE OF BLOOD (ESCUDEIRO/ESCUDEIRA DO SANGUE)</h3>
        <p><strong>Aquele que explora o Sangue / Explora através do Sangue.</strong></p>
        <p>A sua carência é o pertencimento. Você se sente deslocado, sem raízes ou sem amigos verdadeiros. Você explora as conexões humanas e as obrigações porque teme a solidão profunda.</p>
        <p>O seu trabalho é entender o que mantém as pessoas unidas quando tudo o mais desmorona. Ao explorar esses vínculos, você se torna o alicerce de um grupo, alguém que explora o potencial da união para transformar desconhecidos em uma família indestrutível.</p>
    `,
    "Rogue:Blood": `
        <h3>ROGUE OF BLOOD (LADINO/LADINA DO SANGUE)</h3>
        <p><strong>O que Rouba o Sangue (para redistribuir).</strong></p>
        <p>Você é o "para-raios" do grupo. Sua função autodesignada é absorver o impacto das crises interpessoais para que ninguém mais se machuque. Se há um clima tenso na sala, você "rouba" esse desconforto — muitas vezes fazendo algo embaraçoso, assumindo a culpa por um erro que não foi seu ou se colocando como alvo de piadas — apenas para dissipar a tensão e permitir que o grupo volte a respirar.</p>
        <p>Você se torna uma lixeira emocional para os problemas dos seus amigos. Você permite que drenem sua energia e abusem da sua boa vontade porque acredita que seu único valor reside em ser o "amortecedor" que impede a família de desmoronar.</p>
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
        <p>Sua própria instabilidade emocional se torna um peso tão grande que o grupo se destrói tentando te carregar. Você se torna um buraco negro de drama, exigindo uma lealdade cega e destrutiva dos outros, obrigando-os a sacrificar a própria saúde mental para manter você estável, até que o vínculo se torne insustentável e colapse sob o peso da sua necessidade.</p>
    `,

    // --- BREATH (Suspiro) ---
    "Maid:Breath": `
        <h3>MAID OF BREATH (CRIADA/CRIADO DO SUSPIRO)</h3>
        <p><strong>Que Serve o Suspiro / Feita(o) de Suspiro.</strong></p>
        <p>Você é a força motriz não celebrada do seu círculo. Quando o ambiente ao seu redor paralisa em rotinas sufocantes ou dependências exaustivas, é você quem intervém para desatar os nós. A sua relação com o Suspiro se dá na base do esforço contínuo: a liberdade e o avanço não acontecem naturalmente ao seu redor, eles exigem que alguém empurre as coisas para frente.</p>
        <p>Como ninguém mais parece capaz de romper a inércia, o trabalho de manter a vida fluindo acaba recaindo sobre os seus ombros. Você executa as rupturas necessárias e garante a autonomia do grupo de forma estritamente utilitária. O custo silencioso de ser o vento que move as velas alheias, no entanto, é o esgotamento da sua própria capacidade de criar raízes. Você acaba vivendo em um estado de transição perpétua, onde a sua independência deixou de ser uma escolha livre para se tornar apenas mais uma exigência exaustiva do seu papel.</p>
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
        <p><strong>O que Entende o Suspiro / Entende com o Suspiro.</strong></p>
        <p>Você conhece a solidão intimamente. Você provavelmente já foi deixado à deriva ou teve que aprender a se virar sozinho muito cedo. Sua compreensão da liberdade não é romântica; você sabe que ser livre muitas vezes significa ser esquecido.</p>
        <p>Agora, você usa essa vivência para navegar a vida. Você sabe quando uma situação é uma armadilha e sabe exatamente como escapar. Você é o guia que diz "não se apegue a isso, vai te afundar". Seu desafio é parar de ver toda conexão humana como uma corrente em potencial.</p>
    `,
    "Witch:Breath": `
        <h3>WITCH OF BREATH (BRUXA/BRUXO DO SUSPIRO)</h3>
        <p><strong>Que Manipula o Suspiro.</strong></p>
        <p>Você é a rebelião encarnada. Você é a pessoa que sequestra a narrativa do grupo. Se todos decidem ir para a esquerda, você não apenas vai para a direita; você convence (ou obriga) o grupo a mudar de rota, usando seu carisma e sua energia caótica para fazer com que a sua direção pareça a única divertida ou viável.</p>
        <p>Sua personalidade é volátil e impossível de prender. Você usa o silêncio e a ausência (ghosting) de forma tática: você se retira ou ameaça ir embora para fazer as pessoas correrem atrás de você. Você "liberta" pessoas de compromissos que você acha chatos, muitas vezes destruindo relacionamentos estáveis alheios porque a estabilidade deles faz você se sentir sufocada por tabela. Você quer que todos sejam livres, desde que a liberdade deles consista em seguir você.</p>
    `,
    "Prince:Breath": `
        <h3>PRINCE OF BREATH (PRÍNCIPE/PRINCESA DO SUSPIRO)</h3>
        <p><strong>O que Destrói o Suspiro / Destrói com o Suspiro.</strong></p>
        <p>Você olha para a natureza despreocupada, flexível e "leve" do Sopro e sente nojo. Para você, "ir com o fluxo" é sinônimo de fraqueza, preguiça e falta de caráter. Você age como um fantasma rígido de Sangue: impõe regras, exige foco, cobra postura e tenta concretar os pés de todo mundo no chão.</p>
        <p>Você usa o distanciamento como punição. Quando as coisas não saem do seu jeito rígido, você não negocia; você simplesmente remove a sua presença. Você pratica o ghosting tático ou corta laços de anos em um segundo, deixando um rastro de destruição emocional, apenas para provar que você não precisa de ninguém. Você é um ditador solitário que matou todos os seus súditos porque eles não marcharam no ritmo exato que você exigiu.</p>
    `,
    "Sylph:Breath": `
        <h3>SYLPH OF BREATH (SÍLFIDE/SILFO DO SUSPIRO)</h3>
        <p><strong>Que Cura o Suspiro / Conserta o Suspiro.</strong></p>
        <p>Você é a pessoa que diz "calma, respira". Você não suporta ver as pessoas estressadas, presas ou sobrecarregadas. Sua função no grupo é aliviar a tensão, oferecer uma rota de fuga ou simplesmente lembrar a todos que o mundo não vai acabar se eles descansarem.</p>
        <p>O problema é que você pode se tornar uma "habilitadora" da procrastinação ou da irresponsabilidade. Ao tentar "curar" a falta de liberdade dos outros, você pode impedi-los de enfrentar as consequências necessárias de suas ações, mantendo-os numa bolha de conforto que impede o crescimento.</p>
    `,
    "Page:Breath": `
        <h3>PAGE OF BREATH (ESCUDEIRO/ESCUDEIRA DO SUSPIRO)</h3>
        <p><strong>Aquele que explora o Suspiro / Explora através do Suspiro.</strong></p>
        <p>Você começa sentindo-se preso, seja por obrigações, limitações físicas ou pela vontade dos outros. O seu "porquê" é a asfixia social. Você explora a liberdade não como um rebelde barulhento, mas como alguém que aprende, centímetro por centímetro, o que significa ter uma direção própria.</p>
        <p>Ao explorar o potencial da autonomia, você acaba por se tornar a brisa que inspira os outros a se libertarem, transformando a sua antiga passividade em uma liderança leve, mas imparável. Você pode se tornar a personificação da liberdade ilimitada, alguém que inspira multidões a se levantarem. O segredo é parar de pedir permissão para viver a sua própria vida.</p>
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
        <p>Você é imprevisível. Às vezes, você é a pessoa mais rígida e estagnada do mundo, recusando-se a mudar. Quando o grupo precisa de movimento e decisão, você traz uma apatia tão profunda que drena todos.</p>
        <p>Você não impede os outros de agirem de forma direta; você simplesmente faz com que a ação pareça inútil, pesada e sem sentido, permitindo que o grupo fique estagnado e à mercê do destino porque você se recusou a soprar a vela do barco. Você não quebra o vaso; você deixa a janela aberta durante a tempestade e diz "ops" quando ele cai.</p>
    `,

    // --- VOID (VAZIO) ---
   "Maid:Void": `
        <h3>MAID OF VOID (CRIADA/CRIADO DO VAZIO)</h3>
        <p><strong>Que Serve o Vazio / Feita(o) de Vazio.</strong></p>
        <p>Você é a pessoa que acaba gerenciando tudo aquilo que os outros se recusam a olhar. Sua atuação ocorre nos bastidores de forma puramente prática: alguém precisa lidar com as falhas estruturais, os segredos e os problemas invisíveis para que a engrenagem continue girando. Você "serve o Vazio" tornando-se o repositório silencioso do caos que o seu ambiente prefere ignorar.</p>
        <p>A sua resposta à inércia ao seu redor é assumir o fardo do que não é dito. Você absorve a obscuridade do grupo e apaga os incêndios que os outros fingem não existir, aceitando a posição de uma utilidade silenciosa por pura necessidade de manter as coisas funcionando. O perigo real dessa dinâmica é se acostumar tanto a ser o pilar invisível de todos que você acaba permitindo que tratem a sua própria existência como se fosse, literalmente, nada.</p>
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
        <p><strong>O que Entende o Vazio / Entende com o Vazio.</strong></p>
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
        <p>Você odeia não saber de algo. Você é o destruidor da ambiguidade. Se algo está oculto, você arranca a tampa. Você não suporta a ideia de "não saber", então você destrói o mistério com lógica brutal ou revelações forçadas.</p>
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
        <p><strongAquele que explora o Vazio / Explora através do Vazio.</strong></p>
        <p>Você começa sentindo que não tem segredos, ou pior, que não tem substância. Tudo em você parece óbvio ou sem mistério. Você explora o "nada" e o silêncio para construir uma identidade que não dependa do olhar alheio.</p>
        <p>Você explora o potencial do que está escondido, tornando-se mestre em agir pelas sombras e em criar recursos do absoluto vazio, explorando a própria irrelevância para se tornar a peça mais perigosa do tabuleiro.</p>
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
        <p>Sua relação com o que deve ser mantido em segredo, privado ou oculto é de um descaso absoluto. Passivamente, sua presença faz com que segredos venham à tona, planos ocultos falhem e a privacidade de todos seja violada. Você não sabe guardar segredo, ou sua negligência faz a verdade explodir.</p>
        <p>Você é a pessoa que apaga informações vitais, ignora evidências cruciais ou simplesmente "some" com ferramentas e soluções, tratando o que é importante como se fosse nada. Você faz planos sólidos e certezas absolutas se dissolverem em dúvida e irrelevância, deixando o grupo perdido em um vácuo de informação que você mesmo criou por se recusar a dar peso à realidade.</p>
    `,

    // --- LIGHT (LUZ) ---
    "Maid:Light": `
        <h3>MAID OF LIGHT (CRIADA/CRIADO DA LUZ)</h3>
        <p><strong>Que Serve a Luz / Feita(o) de Luz.</strong></p>
        <p>A ignorância é um luxo que você nunca pôde bancar. Em um ambiente onde as pessoas parecem perfeitamente confortáveis em tomar decisões às cegas e tatear na obscuridade, o trabalho de buscar a verdade sempre acaba caindo no seu colo. Você não acumula conhecimento ou busca clareza por uma curiosidade acadêmica vaidosa; você o faz porque alguém precisa acender a luz antes que todos tropecem no próprio desespero. A informação, para você, é puramente uma ferramenta de sobrevivência coletiva.</p>
        <p>Por perceber a constante falta de direção e sentido ao seu redor, você se submete ao esforço braçal de pesquisar, entender as regras e expor os fatos. O grupo depende da sua visão para funcionar e encontrar relevância. Contudo, transformar-se na enciclopédia e bússola dos outros carrega um peso silencioso: a proibição do erro. Ao assumir a responsabilidade vital de ser a pessoa que detém as respostas, você perde o direito de simplesmente não saber de algo.</p>
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
        <p><strong>O que Entende a Luz / Entende com a Luz.</strong></p>
        <p>Você viu a verdade, e ela não era bonita. Mages de Luz sofrem pelo excesso de clareza. Você é aquela pessoa que entende a realidade nua e crua, sem os filtros de otimismo que os outros usam. Você vê as falhas nos planos e as mentiras nas pessoas.</p>
        <p>Isso te torna um cínico ou um profeta do apocalipse. Você é guiado por um conhecimento que te isola, pois ninguém gosta da pessoa que aponta os problemas óbvios que todos estão tentando ignorar. Sua lição é aprender a comunicar sua visão sem parecer apenas um pessimista arrogante.</p>
    `,
    "Witch:Light": `
        <h3>WITCH OF LIGHT (BRUXA/BRUXO DA LUZ)</h3>
        <p><strong>Que Manipula a Luz.</strong></p>
        <p>Para você, a verdade é flexível. Você trata a verdade e os dados como propriedades privadas. Sua forma de controle é o monopólio do conhecimento: você se posiciona como a única pessoa que realmente "sabe o que está acontecendo", filtrando quais informações chegam aos outros.</p>
        <p>Para você, informação é poder, e você a usa para manter o grupo sob sua direção. Você pode fazer um fracasso parecer um sucesso estratégico, ou convencer um grupo de que uma ideia estúpida é genial. O seu lado mais difícil é a arrogância intelectual; você acredita que, por deter a informação, você tem o direito natural de ditar os passos de todos, tratando a autonomia dos outros como um erro de cálculo que você precisa corrigir através de mais "esclarecimentos".</p>
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
        <p><strong>Aquele que explora a Luz / Explora através da Luz.</strong></p>
        <p>Você sente que é invisível, que não tem sorte ou que a verdade está sempre fora do seu alcance. O seu "porquê" é a obscuridade. Você explora a informação e a relevância com a fome de quem quer ser notado.</p>
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
        <p>Você é o agente do caos cognitivo. Passivamente, você permite que a desinformação se espalhe. Você vê alguém tirando uma conclusão errada e não corrige, talvez por achar engraçado ou por preguiça. Você deixa a ignorância fermentar.</p>
        <p>Ativamente, porém, você revela a verdade no pior momento possível. Aquela fofoca que destrói um casamento, aquele fato brutal que desmoraliza o time. Você ilumina as coisas não para ajudar, mas para ver o circo pegar fogo. Você joga com a sorte de forma imprudente.</p>
    `,

    // --- SPACE (ESPAÇO) ---
    "Maid:Space": `
        <h3>MAID OF SPACE (CRIADA/CRIADO DO ESPAÇO)</h3>
        <p><strong>Que Serve o Espaço / Feita(o) de Espaço.</strong></p>
        <p>Enquanto os outros elaboram teorias e se movem freneticamente, alguém precisa providenciar o chão onde eles pisam. Você é a infraestrutura do seu círculo. Sua utilidade não nasce de uma vontade de ser produtiva, mas da dura constatação de que, se você não ceder o ambiente, o carro ou o esforço para materializar os planos físicos do grupo, nada acontece. Você atua como a fundação estática que acomoda a vida alheia.</p>
        <p>O preço de assumir o fardo de ser o "inventário" de todos é um isolamento profundo. Ao prover o espaço para que os outros existam, você acaba se sentindo sufocada e desconectada do próprio ambiente que mantém de pé. A verdadeira armadilha não é acumular coisas, mas aceitar que a única forma de manter o grupo funcional é permitindo que a tratem como se você fosse apenas parte da decoração, presa por obrigação a um lugar de onde preferiria ir embora.</p>
    `,
    "Knight:Space": `
        <h3>KNIGHT OF SPACE (CAVALEIRO/CAVALEIRA DO ESPAÇO)</h3>
        <p><strong>O que Explora o Espaço / Protege o Espaço.</strong></p>
        <p>Você compensa uma insegurança profunda sobre seu "lugar no mundo" com uma hipercompetência técnica ou estética. Você sente que falta algo em você (talento natural, profundidade, substância), então você se torna o mestre das ferramentas, da moda, da arte ou da logística.</p>
        <p>Você projeta uma imagem de "cool" e intocável, ocupando o ambiente com uma presença calculada para que ninguém perceba o quão deslocado você realmente se sente. Você protege seus amigos garantindo que eles tenham os recursos e o espaço que precisam, enquanto você mesmo se mantém numa distância segura, blindado pela sua utilidade e pela sua performance de competência. Você ajuda a todos a encontrarem seu lugar, enquanto secretamente sente que não tem um.</p>
    `,
    "Thief:Space": `
        <h3>THIEF OF SPACE (LADRÃO/LADRA DO ESPAÇO)</h3>
        <p><strong>Que Rouba o Espaço (para si).</strong></p>
        <p>A criação exige tempo e paciência, coisas que você detesta gastar, então você toma atalhos: você se apropria do trabalho, das ideias ou dos recursos físicos dos outros para acelerar o seu próprio sucesso. Você tem uma presença que exige ser notada. Territorial e expansiva, você tende a dominar o ambiente físico e criativo. Se há um projeto em grupo, você toma as rédeas estéticas; se há uma sala, você escolhe o melhor lugar.</p>
        <p>Você tem uma necessidade voraz de demarcar território. Se há um projeto, você o domina; se há uma sala, você a preenche. Você rouba o "potencial" de quem está ao seu redor — ocupando o tempo e o espaço que eles usariam para crescer — para garantir que você seja a coisa mais grandiosa e visível no ambiente. É uma conquista napoleônica do cotidiano: você diminui o mundo dos outros para que o seu pareça maior.</p>
    `,
    "Mage:Space": `
        <h3>MAGE OF SPACE (MAGO/MAGA DO ESPAÇO)</h3>
        <p><strong>O que Entende o Espaço (pelo sofrimento) / Entende com o Espaço.</strong></p>
        <p>Você entende o Espaço porque já se sentiu isolado, fisicamente desconfortável ou separado do mundo por uma barreira invisível. Você é o artista genial que vive em um artblock perpétuo, encarando a tela em branco com uma mistura de desejo e exaustão física.</p>
        <p>Enquanto outros criam sem pensar, você é paralisado pelo conhecimento do esforço que aquilo vai exigir. Esse sofrimento, no entanto, te dá uma compreensão técnica incomparável. Você sabe exatamente onde a estrutura falha, onde o material cede e qual é o custo real de se fazer qualquer coisa existir. Você não subestima a dificuldade da criação porque vive esmagado por ela.</p>
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
        <p>Você é o crítico impiedoso ou o minimalista radical. Você olha para o potencial e para a criação desordenada e sente nojo; você quer cortar, limpar, simplificar. Sua busca é por uma perfeição minimalista, e para alcançá-la, você corta, descarta e destrói tudo o que considera "lixo" ou "ruído", muitas vezes sacrificando coisas valiosas no processo.</p>
        <p>Sua hipocrisia reside em querer um resultado perfeito sem respeitar o processo de criação. Você destrói com o Espaço ao usar a distância fria e a remoção física como armas. Você resolve problemas deletando-os da sua vista ou deletando a si mesmo da situação. Você cria vácuos onde antes havia vida, deixando para trás ambientes estéreis e clinicamente limpos, mas mortos.</p>
    `,
    "Sylph:Space": `
        <h3>SYLPH OF SPACE (SÍLFIDE/SILFO DO ESPAÇO)</h3>
        <p><strong>Que Cura o Espaço / Conserta o Espaço.</strong></p>
        <p>Você não consegue estar num ambiente caótico, mal planejado ou fisicamente desconfortável sem sentir uma coceira incontrolável para arrumá-lo. Sua forma de amar é invadir o espaço físico dos outros: você é a amiga que vai na casa de alguém e começa a lavar a louça, reorganizar os móveis ou dobrar as roupas sem ser convidada.</p>
        <p>Sua relação com a criatividade alheia é de uma "parteira intrometida". Se um amigo está travado num projeto, você não dá apenas apoio moral; você pega as ferramentas da mão dele e faz a parte difícil, ou desenha o esquema exato de como ele deve proceder. Ao fazer tudo por elas — porque "elas não sabem fazer direito" ou "são muito lentas" —, você as torna dependentes da sua mão de obra.</p>
    `,
    "Page:Space": `
        <h3>PAGE OF SPACE (ESCUDEIRO/ESCUDEIRA DO ESPAÇO)</h3>
        <p><strong>Aquele que explora o Espaço / Explora através do Espaço.</strong></p>
        <p>A sua realidade inicial é a de alguém sem lugar, sem criatividade ou sem "tamanho". Você se sente pequeno e irrelevante no vasto cosmos. Por que você explora o Espaço? Porque você precisa criar o seu próprio território para existir.</p>
        <p>Você explora a solidão e a distância para entender a arte da criação do zero. No final, o seu potencial explorado permite que você manipule a própria física da realidade, provando que mesmo o menor dos pontos pode expandir-se para conter um universo inteiro.</p>
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
        <p>Você possui um talento criativo imenso que definha por negligência deliberada. Diante da responsabilidade de criar, manter ou organizar algo — seja um projeto, um relacionamento ou sua própria vida —, você opta pelo abandono, deixando que o potencial apodreça ou que o caos natural tome conta do ambiente.</p>
        <p>Sua passividade convida o desastre material: o teto cai porque você ignorou a goteira, ou o prazo estoura porque você se recusou a calcular o tempo. Você vive descolado do "aqui e agora", flutuando em distrações enquanto o mundo real se degrada ao seu redor Você ocupa o ambiente de forma invasiva e desajeitada, ou cria soluções "gambiarras" que acabam piorando o problema original.</p>
    `,

    // --- TIME (TEMPO) ---
    "Maid:Time": `
        <h3>MAID OF TIME (CRIADA/CRIADO DO TEMPO)</h3>
        <p><strong>Que Serve o Tempo / Feita(o) de Tempo.</strong></p>
        <p>O tique-taque do relógio dita um ritmo que o seu círculo costuma ignorar, forçando você a assumir a gerência das urgências, dos prazos e dos finais inevitáveis. A sua necessidade constante de agir nasce da dura constatação de que, se você não tomar o controle do cronograma, as pessoas ao seu redor vão simplesmente deixar a entropia tomar conta e os limites explodirem.</p>
        <p>A manutenção da existência funcional do grupo exige que você limpe a bagunça cronológica deles, apressando o que precisa acabar e garantindo que tudo ocorra no momento exato. O efeito colateral de atuar como o metrônomo das crises alheias é perder o direito ao próprio descanso. Ao passar a vida inteira garantindo que o mundo flua na hora certa, os seus momentos deixam de ser vividos organicamente para se tornarem apenas mais um item em uma exaustiva lista de obrigações.</p>
    `,
    "Knight:Time": `
        <h3>KNIGHT OF TIME (CAVALEIRO/CAVALEIRA DO TEMPO)</h3>
        <p><strong>O que Explora o Tempo / Protege o Tempo.</strong></p>
        <p>Você usa a velocidade como armadura. Para os outros, você é a pessoa que resolve, que nunca se atrasa (ou que faz o atraso parecer estilo), que lida com múltiplas crises simultaneamente sem suar. Você corre não porque gosta da velocidade, mas porque tem pavor de ser insuficiente.</p>
        <p>Sua hiperatividade e sua "mania de mostrar serviço" são mecanismos de defesa para mascarar a ansiedade de que, se você parar, a entropia vai te alcançar e provar que você não é o herói que finge ser. Você protege o fluxo dos eventos agindo impulsivamente para "consertar" o momento presente, mas essa urgência constante te rouba a capacidade de planejar a longo prazo ou de simplesmente estar em paz.</p>
    `,
    "Thief:Time": `
        <h3>THIEF OF TIME (LADRÃO/LADRA DO TEMPO)</h3>
        <p><strong>Que Rouba o Tempo (para si).</strong></p>
        <p>Você tem uma relação predatória com a paciência alheia. O seu tempo é ouro; o dos outros, é recurso descartável. Você tende a interromper falas, chegar atrasado (obrigando os outros a esperarem por você) ou monopolizar a atenção do grupo, drenando os minutos de todos para satisfazer suas próprias prioridades.</p>
        <p>Isso nasce de um medo agudo de ficar para trás. Você sente que a vida é curta demais para a mediocridade ou para a burocracia social, então você "rouba" atalhos. Você prioriza a sua própria cronologia e conquistas, muitas vezes atropelando o ritmo natural das pessoas ao seu redor para garantir que *você* chegue ao final antes de todo mundo.</p>
    `,
    "Mage:Time": `
        <h3>MAGE OF TIME (MAGO/MAGA DO TEMPO)</h3>
        <p><strong>O que Entende o Tempo / Entende com o Tempo.</strong></p>
        <p>Você carrega o peso do fim. Você entende, melhor que ninguém, que tudo é finito. Você provavelmente já perdeu tempo investindo em coisas que deram errado ou sofreu perdas pessoais significativas que te ensinaram a brutalidade do relógio.</p>
        <p>Agora, você é o cínico pragmático. Você sabe o que vale a pena o esforço e o que é perda de tempo. Você guia o grupo com uma urgência mórbida: "temos que fazer isso agora, antes que seja tarde". Seu desafio é não deixar que o conhecimento da inevitabilidade da morte te impeça de viver a vida.</p>
    `,
    "Witch:Time": `
        <h3>WITCH OF TIME (BRUXA/BRUXO DO TEMPO)</h3>
        <p><strong>Que Manipula o Tempo.</strong></p>
        <p>Você tem problemas com autoridade, e a maior autoridade de todas é o relógio. Você se recusa a aceitar que as coisas levam o tempo que levam. Sua vida é marcada por períodos de procrastinação rebelde seguidos por surtos de atividade maníaca onde você tenta comprimir semanas em horas.</p>
        <p>Sua personalidade é rebelde contra a ordem natural das coisas. Se o destino diz que algo deve acabar, você luta para estendê-lo. Se o momento é ruim, você se dissocia ou corre; se é bom, você tenta esticá-lo obsessivamente. Sua vontade tenta dobrar a realidade temporal, o que te faz incrivelmente eficiente em crises, mas desastrosa(o) em manter uma rotina saudável e estável.</p>
    `,
    "Prince:Time": `
        <h3>PRINCE OF TIME (PRÍNCIPE/PRINCESA DO TEMPO)</h3>
        <p><strong>O que Destrói o Tempo / Destrói com o Tempo.</strong></p>
        <p>Você é o inimigo da paciência. Como destruidor do Tempo, você pode ser alguém que procrastina destrutivamente, desperdiçando dias inteiros (matando o tempo) sem produzir nada, num ato de rebeldia niilista contra a pressão de ser produtivo.</p>
        <p>á um fatalismo na sua atitude. Você usa a inevitabilidade do fim como justificativa para queimar pontes ou encerrar ciclos abruptamente. "Isso vai acabar mal mesmo, pra que tentar?". Você acelera o fim das coisas, cortando processos e forçando conclusões prematuras. Você não tem paciência para a jornada; você quer pular direto para os créditos finais, esvaziando o significado do processo de amadurecimento.</p>
    `,
    "Sylph:Time": `
        <h3>SYLPH OF TIME (SÍLFIDE/SILFO DO TEMPO)</h3>
        <p><strong>Que Cura o Tempo / Conserta o Tempo.</strong></p>
        <p>Você é a gerente de projetos emocional. Você quer que todos tenham tempo suficiente. Você é a pessoa que diz "vai com calma, não precisa correr" ou que organiza a agenda do grupo para que ninguém fique sobrecarregado.</p>
        <p>Você tenta "curar" a ansiedade temporal dos outros, assumindo a responsabilidade de garantir que os prazos sejam cumpridos de forma saudável. O problema é que você pode acabar microgerenciando a vida alheia ou permitindo que as pessoas demorem demais em nome do conforto, ignorando a necessidade real de urgência.</p>
    `,
    "Page:Time": `
        <h3>PAGE OF TIME (ESCUDEIRO/ESCUDEIRA DO TEMPO)</h3>
        <p><strong>Aquele que explora o Tempo / Explora através do Tempo.</strong></p>
        <p>Você começa a vida sentindo que está sempre atrasado, fora de ritmo ou que o seu tempo está se esgotando sem que você faça nada. O seu "porquê" é a ansiedade da finitude.</p>
        <p>Por sentir que não domina o fluxo das coisas, você se torna um estudioso obsessivo da paciência e da repetição. Quando você finalmente aprende a explorar as engrenagens do tempo, você não apenas o "usa", você se torna o mestre da persistência que ninguém consegue parar, explorando cada segundo para transformar um fracasso inevitável em uma vitória tardia, mas absoluta.</p>
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
        <p>Mas no modo ativo/crise, você é o acelerador do apocalipse. Sua impaciência ou sua má gestão temporal causa catástrofes. Você faz as coisas acontecerem rápido demais, ou no momento errado, criando uma dissonância rítmica que quebra a harmonia do grupo. É a pressa que causa o acidente fatal.</p>
    `,

    // --- HEART (CORAÇÃO) ---
    "Maid:Heart": `
        <h3>MAID OF HEART (CRIADA/CRIADO DO CORAÇÃO)</h3>
        <p><strong>Que Serve o Coração / Feita(o) de Coração.</strong></p>
        <p>Em um ambiente dominado pela apatia ou pela superficialidade, a tarefa de manter a alma das coisas vivas invariavelmente cai no seu colo. A paixão, a identidade e a emoção genuína não florescem naturalmente ao seu redor. Para impedir que o seu círculo afunde na total desconexão, você assume a função de ser o núcleo pulsante da situação, providenciando a empatia e a força de caráter que os outros são incapazes de acessar por conta própria.</p>
        <p>A necessidade de atuar como o suporte emocional e moral de todos transforma a sua essência em uma ferramenta de utilidade pública. Ao absorver a obrigação de manter o grupo sentindo e existindo de forma autêntica, a sua própria identidade deixa de ser uma experiência puramente pessoal. Ela se torna um trabalho braçal diário, prendendo-a à exaustiva rotina de ter que gerenciar e expressar uma carga emocional que os outros simplesmente terceirizaram para você.</p>
    `,
    "Knight:Heart": `
        <h3>KNIGHT OF HEART (CAVALEIRO/CAVALEIRA DO CORAÇÃO)</h3>
        <p><strong>O que Explora o Coração / Protege o Coração.</strong></p>
        <p>Você usa sua personalidade como uma armadura. Você é muito carismático, intenso ou dramático, mas isso é uma barreira. Você projeta uma versão exagerada de si mesmo para que ninguém consiga machucar o seu "eu" verdadeiro e vulnerável que está escondido lá no fundo.</p>
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
        <p><strong>O que Entende o Coração / Entende com o Coração.</strong></p>
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
        <p>Você é o arquétipo do autossabotador. Você tem uma relação conflituosa com seu próprio ser. Muitas vezes, você tenta destruir suas emoções e impulsos através da lógica fria, reprimindo quem você é para ser "eficiente" ou "racional".</p>
        <p>Ao mesmo tempo, você impõe sua identidade com tanta força que não sobra espaço para ninguém mais ser quem é. Você trata amigos e parceiros como espelhos ou extensões do seu próprio ego, ignorando a autonomia emocional deles. Você usa a ironia e o cinismo como ácidos para dissolver qualquer traço de sinceridade ou vulnerabilidade genuína que ameace surgir em você.</p>
    `,
    "Sylph:Heart": `
        <h3>SYLPH OF HEART (SÍLFIDE/SILFO DO CORAÇÃO)</h3>
        <p><strong>Que Cura o Coração / Conserta o Coração.</strong></p>
        <p>Você é a terapeuta não licenciada do grupo. Você quer "consertar" as pessoas. Você valida, escuta e tenta ajudar todos a encontrarem sua "verdadeira essência". Você não suporta ver alguém com baixa autoestima ou problemas de identidade.</p>
        <p>Sua intromissão vem de um bom lugar, mas pode ser sufocante. Você tenta curar corações que não pediram cura, ou tenta forçar uma harmonia emocional onde o conflito é necessário. Às vezes, você foca tanto na alma dos outros para não ter que olhar para os buracos na sua.</p>
    `,
    "Page:Heart": `
        <h3>PAGE OF HEART (ESCUDEIRO/ESCUDEIRA DO CORAÇÃO)</h3>
        <p><strong>Aquele que explora o Coração / Explora através do Coração.</strong></p>
        <p>Você vive assombrado pela sensação de que é uma "casca vazia" ou uma fraude. Enquanto todo mundo parece ter uma personalidade natural e autêntica, você sente que precisa construir a sua manualmente, peça por peça. Você quer tanto ser amado e ter um papel no "enredo", que permite que os outros ditem quem você é.</p>
        <p>ocê é o tipo de pessoa que fica obcecada por testes de personalidade, signos, kins ou personagens de ficção, tentando colar esses rótulos na testa para ter uma noção de quem é. Você mimetiza a personalidade de pessoas que admira, adotando os gostos, a gíria e até a postura delas, na esperança de que, se você agir como alguém que tem "alma", eventualmente você terá uma também.</p>
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
        <p>Você é imprevisível emocionalmente. Passivamente, você pode ser frio, distante ou apático, deixando relacionamentos morrerem de inanição. Você tem uma dificuldade crônica em manter uma identidade sólida; você mimetiza quem está ao seu redor, absorvendo os trejeitos e crenças dos outros até não saber mais onde você termina e o outro começa.</p>
        <p>Você seduz e descarta, ou seus surtos emocionais destroem a coesão do grupo. Você valida os piores impulsos dos seus amigos ("se você está com raiva, quebre tudo mesmo!"), agindo como um catalisador que transforma sentimentos passageiros em desastres permanentes. Você é aquele ex que bagunçou a cabeça de alguém para sempre.</p>
    `,

    // --- MIND (MENTE) ---
    "Maid:Mind": `
        <h3>MAID OF MIND (CRIADA/CRIADO DA MENTE)</h3>
        <p><strong>Que Serve a Mente / Feita(o) de Mente.</strong></p>
        <p>A paralisia da indecisão é um luxo que o seu ambiente consome em excesso, deixando a conta para você pagar. Quando as pessoas ao seu redor se recusam a pesar consequências ou se perdem em dilemas intermináveis, a responsabilidade de traçar um curso de ação racional recai inevitavelmente sobre os seus ombros. A sua capacidade de planejamento opera como uma ferramenta de resgate contínuo: alguém precisa assumir o leme das escolhas para que o grupo não afunde na própria irracionalidade.</p>
        <p>O peso de atuar como a bússola estratégica de todos transforma o seu intelecto em uma utilidade pública. Ao absorver a obrigação de prever resultados e estruturar os passos alheios, a sua capacidade de agir com espontaneidade é progressivamente apagada. O seu esgotamento diário é o resultado direto da exigência de ter que ser a única pessoa razoável na sala. Passando o tempo todo calculando o impacto das ações do grupo, você perde o direito de simplesmente cometer um erro impulsivo sem que a estrutura ao seu redor desabe.</p>
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
        <p><strong>O que Entende a Mente / Entende com a Mente.</strong></p>
        <p>Você sofre de "paralisia por análise". Você vê todas as consequências possíveis de cada ação, e isso é aterrorizante. Você entende como as escolhas moldam a realidade porque provavelmente já fez escolhas ruins que te assombram, ou foi vítima das maquinações de outros.</p>
        <p>Agora, você é o conselheiro cauteloso. Você sabe exatamente o que vai dar errado. Você é guiado por uma lógica quase pessimista. Seu fardo é ser a pessoa que vê o precipício claramente enquanto todos os outros estão correndo felizes em direção a ele, e ter que lidar com a frustração de não ser ouvido.</p>
    `,
    "Witch:Mind": `
        <h3>WITCH OF MIND (BRUXA/BRUXO DA MENTE)</h3>
        <p><strong>Que Manipula a Mente.</strong></p>
        <p>Você encara a verdade, os fatos e a própria identidade como rascunhos editáveis. Diante de uma culpa, um erro ou uma realidade inconveniente, sua resposta imediata é reescrever a lógica por trás do evento. Você consegue justificar qualquer ação, por mais absurda que seja, se isso servir aos seus propósitos.</p>
        <p>Você vê seus amigos como personagens mal escritos que precisam de ajustes. Você interfere nas decisões, nos gostos e nas opiniões deles, não por maldade, mas porque acredita genuinamente que sabe pensar melhor que eles. Você planta sementes de dúvida ou certeza para guiá-los ao "melhor final" (segundo o seu critério).</p>
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
        <p><strong>Aquele que explora a Mente / Explora através da Mente.</strong></p>
        <p>A sua realidade é a dúvida excruciante. Você não sabe quem é ou quais escolhas tomar, sentindo-se intelectualmente inferior ou indeciso. Você explora a lógica, os pensamentos e as máscaras sociais para tentar entender como o mundo funciona.</p>
        <p>Ao explorar o potencial da causalidade, você aprende a antecipar cada movimento alheio, transformando a sua antiga confusão em uma arquitetura mental que permite explorar cada decisão como um caminho para a vitória.</p>
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
        <p>Enquanto outros agonizam sobre qual caminho tomar, você simplesmente se recusa a escolher ou age de forma aleatória porque, no fundo, você não acredita que suas ações tenham peso real. Ao se recusar a planejar ou a levar os problemas a sério, você obriga os outros a pensarem por você, sobrecarregando o sistema.</p>
    `,

    // --- RAGE (IRA) ---
    "Maid:Rage": `
        <h3>MAID OF RAGE (CRIADA/CRIADO DA IRA)</h3>
        <p><strong>Que Serve a Ira / Feita(o) de Ira.</strong></p>
        <p>A ingenuidade é um escudo que o seu ambiente usa para evitar o trabalho sujo. Quando as pessoas ao seu redor preferem tapar os olhos para as verdades feias e varrer os atritos para debaixo do tapete, a função de lidar com a realidade nua e crua acaba caindo no seu colo. A sua relação com a Ira se dá na base da obrigação utilitária: alguém precisa assumir o papel de "vilão" ou de carrasco para que a engrenagem continue girando. Você é quem executa os cortes necessários e verbaliza a hostilidade que todos sentem, mas se recusam a admitir.</p>
        <p>A falta de coragem e realismo do grupo força você a se tornar o receptáculo passivo para a negatividade do ambiente. Ao absorver todo o conflito para manter a situação, de certa forma, unida e funcional, você perde completamente o direito à paz de espírito. O custo de ser a pessoa que encara o lado feio das coisas é uma alienação severa. Você acaba isolada nesse papel ingrato, sacrificando a própria leveza para proteger um círculo de pessoas que frequentemente condena a sua atitude enquanto se beneficia da sua eficiência.</p>
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
        <p>Você precisa ser a pessoa mais revoltada da sala. Se alguém está reclamando de algo, você interrompe para dizer que o seu problema é pior. Você invalida a raiva e a frustração dos outros para centralizar a narrativa no seu próprio sofrimento ou ódio.</p>
        <p>É uma forma de controle narcisista. Você drena a capacidade dos outros de se defenderem ou de se expressarem negativamente, tornando-se o único portador autorizado da "verdade" desagradável. Você se alimenta do conflito e murcha na harmonia.</p>
    `,
    "Mage:Rage": `
        <h3>MAGE OF RAGE (MAGO/MAGA DA IRA)</h3>
        <p><strong>O que Entende a Ira / Entende com a Ira.</strong></p>
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
        <p><strong>Que Cura a Ira / Cura através da Ira.</strong></p>
        <p>Você valida os demônios dos outros. Enquanto a sociedade diz "não fique bravo", você diz "você tem todo o direito de estar puto". Você ajuda as pessoas a focarem sua raiva, a entenderem suas limitações e a aceitarem as verdades difíceis que estão tentando ignorar.</p>
        <p>Sua "cura" é através da catarse ou do choque de realidade. Mas cuidado: você pode acabar "consertando" a capacidade de alguém de perdoar, transformando mágoas passageiras em rancores eternos, ou incentivando uma paranoia que você julga ser "saudável".</p>
    `,
    "Page:Rage": `
        <h3>PAGE OF RAGE (ESCUDEIRO/ESCUDEIRA DA IRA)</h3>
        <p><strong>Aquele que explora a Ira / Explora através da Ira.</strong></p>
        <p>Você começa como alguém que não consegue se impor, que aceita mentiras ou que tem medo do conflito. A sua carência é o "nervoso".</p>
        <p>Você explora a descrença e a indignação para encontrar a verdade por trás das fachadas. Ao explorar o potencial da sua própria raiva contida, você se torna capaz de destruir falsas certezas, explorando o medo alheio para revelar a realidade nua e crua.</p>
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
        <p>Sua relação com a realidade é marcada por uma dissonância proposital. Você frequentemente opera em um estado de "dormência" ou negação entorpecida, recusando-se a encarar conflitos, verdades duras ou a feiura do mundo. Você faz com que as preocupações dos outros pareçam ridículas, destruindo a convicção deles.</p>
        <p>Você provoca, cutuca e instiga até que alguém exploda e destrua tudo, enquanto você assiste comendo pipoca. Você desmonta as narrativas, os sonhos e as esperanças do grupo com uma honestidade brutal e cruel. Você aponta o absurdo e a futilidade das coisas com tanta precisão que paralisa a motivação de todos, forçando-os a engolir uma dose de realidade tão amarga e concentrada que envenena o espírito coletivo.</p>
    `,

    // --- LIFE (VIDA) ---
    "Maid:Life": `
        <h3>MAID OF LIFE (CRIADA/CRIADO DA VIDA)</h3>
        <p><strong>Que Serve a Vida / Feita(o) de Vida.</strong></p>
        <p>Em um ambiente onde a negligência e a fragilidade parecem ditar o ritmo, a tarefa de manter tudo respirando recai inteiramente sobre você. O seu papel é atuar como o motor de crescimento do grupo, injetando energia em situações estagnadas e tratando de feridas que os outros ignoram. A sua dedicação implacável é o puro resultado de uma percepção prática: se você não for a força que impulsiona a recuperação e o sustento de todos, as coisas ao seu redor vão simplesmente desmoronar.</p>
        <p>O custo de operar como a fonte inesgotável de vitalidade transforma a sua própria essência em um recurso a ser consumido pelos outros. Ao assumir a obrigação de consertar o que quebra e nutrir quem desiste, o seu bem-estar pessoal é completamente apagado da equação. Você perde o direito ao descanso e à fraqueza, sendo engolida por uma rotina exaustiva onde garantir a sobrevivência e o conforto alheio esgota a sua energia até o inevitável colapso.</p>
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
        <p><strong>O que Entende a Vida / Entende com a Vida.</strong></p>
        <p>Você conhece o preço da vida. Talvez você tenha lidado com doenças, pobreza ou com a injustiça inerente de que a vida não é justa. Você entende os sistemas de privilégio e poder porque já se sentiu do lado errado deles.</p>
        <p>Agora, você é o pragmático que sabe exatamente onde aplicar energia para obter resultados. Você não desperdiça esforço. Você guia os outros a não gastarem tempo com causas mortas. O risco é o cinismo: ver a vida apenas como uma transação biológica ou social, sem magia.</p>
    `,
    "Witch:Life": `
        <h3>WITCH OF LIFE (BRUXA/BRUXO DA VIDA)</h3>
        <p><strong>Que Manipula a Vida.</strong></p>
        <p>Você enxerga a vitalidade, o status e a energia das pessoas ao seu redor como argila moldável. Sua abordagem para problemas é invasiva e energética: você assume o controle da rotina, da saúde ou das finanças de seus amigos porque confia apenas na sua própria capacidade de gerir o bem-estar alheio.</p>
        <p>Você arrasta introvertidos para festas, obriga sedentários a correrem e impõe "melhorias" na vida dos outros com um entusiasmo que beira a tirania. Você cultiva as pessoas como se fossem bonsais, podando o que considera ruim e adubando o que considera bom, ignorando frequentemente se elas querem crescer nessa direção.</p>
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
        <p><strong>Aquele que explora a Vida / Explora através da Vida.</strong></p>
        <p>A sua realidade inicial é a estagnação ou a fragilidade. Você se sente fraco ou incapaz de nutrir o que está ao seu redor. Você explora o crescimento, a cura e o excesso porque teme a morte e a inércia.</p>
        <p>Você explora o crescimento, a cura e o excesso porque teme a morte e a inércia. Ao explorar o potencial vital, você se torna um catalisador de evolução, capaz de explorar a biologia e a energia para garantir que nada sob seu comando pare de crescer.</p>
    `,
    "Rogue:Life": `
        <h3>ROGUE OF LIFE (LADINO/LADINA DA VIDA)</h3>
        <p><strong>O que Rouba a Vida (para redistribuir).</strong></p>
        <p>Você tira de quem tem muito (inclusive de você mesma) para dar a quem tem pouco. Você sacrifica seu conforto, seu dinheiro e sua saúde para ajudar os necessitados. Você não consegue desfrutar de um luxo se souber que alguém está sofrendo.</p>
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
        <p>Sua relação com a própria existência é marcada por um desperdício casual que enfurece quem está ao seu redor. Passivamente, você deixa sua vida, saúde ou finanças desmoronarem por pura negligência. Você assiste oportunidades morrerem e não faz nada, fazendo com que o abandono de si mesmo pareça uma escolha de estilo de vida aceitável</p>
        <p>Você valida os piores instintos e excessos dos seus amigos, encorajando-os a ignorar limites, gastar o que não têm ou negligenciar a própria segurança, tudo sob a justificativa de "aproveitar o momento". Você não cria o vício, mas cria o ambiente perfeito para que ele cresça descontroladamente. Você é a personificação da frase "viva rápido, morra jovem", arrastando todos consigo.</p>
    `,

    // --- DOOM (DESTINO) ---
    "Maid:Doom": `
        <h3>MAID OF DOOM (CRIADA/CRIADO DO DESTINO)</h3>
        <p><strong>Que Serve o Destino / Feita(o) de Destino.</strong></p>
        <p>A imprudência é o estado natural do seu círculo. Em um ambiente onde as pessoas insistem em ignorar limites e fugir das consequências de seus próprios erros, o trabalho de gerenciar o inevitável acaba caindo no seu colo. A sua relação com o Destino opera estritamente na base da contenção de danos: alguém precisa impor as regras e lidar com o sofrimento que o grupo tenta evitar a todo custo. Você atua como o limite físico e moral de uma estrutura que está sempre prestes a descarrilar.</p>
        <p>A recusa coletiva em aceitar a dor e o fracasso força você a absorver a carga total das restrições do ambiente. Ao assumir a responsabilidade de ditar os sacrifícios necessários para manter a ordem, a sua própria vida se torna uma sequência exaustiva de deveres incontornáveis. O custo de atuar como o escudo humano da situação é afundar sob o peso de consequências que muitas vezes nem foram geradas por você, perdendo qualquer perspectiva de leveza ao garantir que os outros sobrevivam à própria negligência.</p>
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
        <p><strong>O que Entende o Destino / Entende com o Destino.</strong></p>
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
        <p><strongAquele que explora o Destino / Explora através do Destino.</strong></p>
        <p>Você sente que as regras não se aplicam a você ou, inversamente, que você está esmagado por leis que não entende. O seu "porquê" é o caos desestruturado.</p>
        <p>Você explora o sacrifício, o limite e a inevitabilidade para encontrar ordem no sofrimento. Ao explorar o potencial da Perdição, você aprende a utilizar as restrições do sistema a seu favor, explorando as falhas da realidade para garantir que o fim seja exatamente como você planejou..</p>
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
        <p>Você zomba das regras. Passivamente, você ignora a segurança, os avisos e o bom senso, convidando o desastre a entrar pela porta da frente. Você permite que o sistema apodreça e que as defesas do grupo caiam por simples negligência, agindo como se as leis da causa e efeito não se aplicassem a você ou aos seus.</p>
        <p>Você não traz a "má notícia" para alertar; você a traz para enterrar qualquer tentativa de resistência. Você destrói a estrutura do grupo forçando-os a aceitar um fim que você mesmo facilitou através da sua indiferença anterior, transformando o sacrifício em um desperdício trágico e cínico.</p>
    `,

// --- TEXTOS DO SISTEMA ---
    
    "UI_Intro": `
        <div class="fade-in">
            <h1>TESTE DE CLASSPECT DA SBURBIO V1.3</h1>
            <p>Oi! Que bom que encontrou esse teste. Eu sou o SC, popularmente conhecido como springus. Talvez você não me conheça, mas espero que bote fé no projeto Sburbio.</p>
            <p>Nova atualização, novo texto. Dessa vez, alterei algumas das descrições que precisavam de revisão e mexi na matemática para Prince e Bard. Acredito que vamos ver menos resultados errados agora. Lembrando que estamos sempre felizes com comentários na nossa página do Twitter, @sburbio!</p>
            <p>As perguntas e pontuações são baseadas no que aprendi com os textos de Dewdrop e Ouroborista, mas me baseio principalmente num coletivo de interpretações individuais e que discuti com meus amigos, GeraFTC, Star e Vozes de Anjos, que me ajudaram na confecção desse quiz. São as outras pessoas que fazem parte do projeto.</p>
            <p>Agora que tiramos isso do caminho e você confia nesse teste (eu espero), vamos cortar o papo e descobrir um pouco sobre você.</p>
            <button onclick="start()">Bora ver.</button>
        </div>
    `,

    "UI_NullEnding": `
        <div class="fade-in result-container" style="text-align: center; padding: 2rem;">
            <h1>TEM ALGO DE ERRADO AQUI.</h1>
            <p style="font-style: italic; opacity: 0.8;">NENHUM CLASSPECT ATRIBUÍDO.</p>
            
            <img src="https://i.imgur.com/zcNK5Dk.png" alt="Void Glitch" style="max-width: 250px; width: 100%; height: auto; margin: 20px auto; display: block; border: 1px solid #ff0000; box-shadow: 0 0 10px rgba(255,0,0,0.5);">

            <div class="analysis-text" style="margin-top: 2rem;">
                <p>Você me fez morder a fronha. Quer dizer que você abriu esse teste só para clicar em "Nenhuma das anteriores" tipo, 30 vezes? Poxa.</p>
                <p><strong>Vem, vamos de novo. Eu sei que você quer saber o seu resultado de verdade.</strong></p>
            </div>
            
            <button class="retry-button" onclick="location.reload()">Tente novamente.</button>
        </div>
    `
};
















