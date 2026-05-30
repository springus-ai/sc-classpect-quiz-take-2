const classpectDescriptions = {

	"Prince": `<strong>Príncipe/Princesa:</strong> Você lida com o Aspecto através da negação, do corte e da ruptura. Quando algo parece excessivo, falso, fraco ou fora de controle, sua tendência é querer eliminar o problema pela raiz. Você tem um olhar crítico poderoso e não costuma tolerar aquilo que considera inútil, incoerente ou decadente. O risco é transformar discernimento em autoridade absoluta, destruindo não apenas o que atrapalha, mas também partes importantes de si mesmo e dos outros. No seu melhor, você é capaz de encerrar ciclos, romper padrões nocivos e abrir espaço através da destruição consciente. Seu desafio é aprender que nem tudo que te incomoda precisa ser aniquilado.`,

	"Bard": `<strong>Bardo/Barda:</strong> Você se relaciona com o Aspecto de forma indireta, permitindo que ele se desgaste, colapse ou se destrua ao seu redor. Às vezes isso vem como omissão, ironia, negação ou uma recusa em levar a situação a sério até que ela chegue ao limite. Você percebe o peso das coisas, mas pode preferir deixar que o mundo prove sozinho que algo era insustentável. O risco é confundir distanciamento com inocência, como se não agir também não tivesse consequências. No seu melhor, você sabe quando parar de sustentar uma estrutura condenada e permite que o fim aconteça para que algo novo possa surgir. Seu desafio é reconhecer quando sua ausência virou parte do problema.`,
	
	"Thief": `<strong>Ladrão/Ladra:</strong> Você lida com o Aspecto puxando-o para si. Quando percebe um recurso, uma oportunidade ou uma vantagem ligada ao seu Aspecto, sua tendência é tomar a dianteira antes que outra pessoa desperdice aquilo. Você é ambicioso, rápido para agir e bom em perceber onde existe algo valioso a ser conquistado. O risco é tratar toda escassez como competição, centralizando poder, atenção ou controle até deixar os outros sem espaço para participar. No seu melhor, você usa sua fome para garantir movimento, vitória e sobrevivência. Seu desafio é entender que possuir algo não é a única forma de provar que você merece aquilo.`,
	
	"Rogue": `<strong>Ladino/Ladina:</strong> Você lida com o Aspecto redistribuindo-o. Em vez de segurar aquilo para si, sua tendência é deslocar recursos, atenção, oportunidades ou cargas para quem parece precisar mais. Você é sensível ao desequilíbrio e costuma perceber quando alguém tem demais, de menos ou não sabe o que fazer com o que recebeu. O risco é usar essa generosidade como esconderijo, entregando aos outros justamente aquilo que você tem medo de assumir em si mesmo. No seu melhor, você torna o Aspecto mais acessível, equilibrado e compartilhado. Seu desafio é lembrar que redistribuir não significa se excluir da partilha.`,
	
	"Knight": `<strong>Cavaleiro/Cavaleira:</strong> Você lida com o Aspecto como ferramenta, armadura e dever. Mesmo quando se sente inseguro em relação a ele, você aprende a usá-lo com eficiência porque alguém precisa fazer o trabalho. Você tende a proteger os outros, resolver problemas e manter a situação funcionando, muitas vezes escondendo o quanto isso exige de você. O risco é transformar utilidade em identidade, como se descansar, falhar ou pedir ajuda revelasse alguma insuficiência imperdoável. No seu melhor, você é confiável, estratégico e capaz de proteger aquilo que importa sem precisar fazer cena. Seu desafio é entender que servir bem não exige se esconder dentro da própria armadura.`,
	
	"Page": `<strong>Escudeiro/Escudeira:</strong> Você começa sua relação com o Aspecto em estado de carência, atraso ou desconexão. Aquilo que parece natural para os outros pode parecer distante, confuso ou grande demais para você. Por isso, sua jornada costuma envolver tentativas desajeitadas, dependência inicial, insegurança e uma sensação constante de estar ficando para trás. No seu melhor, você transforma erro em aprendizado, acumula experiência e desenvolve uma força que não nasceu pronta, mas foi conquistada. Seu desafio é parar de se medir pela facilidade dos outros e respeitar a própria curva de crescimento.`,
	
	"Maid": `<strong>Criado/Criada:</strong> Você lida com o Aspecto através do serviço, da manutenção e da criação de condições. Você percebe o que precisa ser feito para que algo exista, continue funcionando ou finalmente tome forma, e muitas vezes assume esse trabalho antes que alguém peça. Existe em você uma dedicação real ao Aspecto, além de uma obrigação imposta de fora. O risco é deixar que essa dedicação vire exploração, como se sua função fosse sustentar tudo silenciosamente enquanto os outros só percebem sua importância quando você falha. No seu melhor, você traz o Aspecto ao mundo de forma concreta, constante e transformadora. Seu desafio é servir por escolha, não por aprisionamento.`,
	
	"Sylph": `<strong>Sílfide/Sílfido:</strong> Você lida com o Aspecto através da cura, do reparo e da orientação. Você percebe onde algo está ferido, desalinhado ou funcionando abaixo do próprio potencial, e sente vontade de intervir para restaurar equilíbrio. Sua força está em enxergar possibilidades de melhora que outras pessoas ignoram. O risco é presumir que toda ferida quer ser tratada por você, ou que sua visão de cura é automaticamente a mais correta. No seu melhor, você ajuda pessoas e situações a se recomporem sem apagar a autonomia delas. Seu desafio é entender que curar não é controlar o processo de recuperação dos outros.`,
	
	"Witch": `<strong>Bruxa/Bruxo:</strong> Você lida com o Aspecto alterando seus limites. Quando uma regra parece estreita, uma estrutura parece injusta ou uma situação parece sem saída, sua resposta natural é dobrar os termos do jogo até encontrar uma brecha. Você é inventivo, adaptável e desconfortável com sistemas que se apresentam como inevitáveis. O risco é se acostumar tanto a manipular circunstâncias que começa a tratar acordos, expectativas e pessoas como materiais moldáveis à sua conveniência. No seu melhor, você liberta o Aspecto de formas rígidas e cria possibilidades onde antes só havia bloqueio. Seu desafio é lembrar que mudar as regras não te coloca acima das consequências delas.`,
	
	"Heir": `<strong>Herdeiro/Herdeira:</strong> Você lida com o Aspecto por afinidade natural. Em vez de forçar controle sobre ele, você tende a ser conduzido por suas correntes, protegido por suas condições ou transformado por sua presença. As coisas ligadas ao seu Aspecto muitas vezes chegam até você, atravessam você ou se organizam ao seu redor sem que pareça haver esforço consciente. O risco é confundir fluidez com passividade, deixando a vida te carregar sem decidir que tipo de pessoa você quer se tornar. No seu melhor, você incorpora o Aspecto com uma naturalidade que inspira e estabiliza os outros. Seu desafio é deixar de apenas herdar uma força e passar a escolher como vivê-la.`,
	
	"Mage": `<strong>Mago/Maga:</strong> Você lida com o Aspecto através da experiência, da análise e do entendimento conquistado. Seu conhecimento raramente é puramente teórico: ele vem de contato direto, tentativa, erro, observação e, muitas vezes, custo pessoal. Você aprende como o Aspecto funciona por dentro, inclusive em seus lados menos confortáveis. O risco é transformar essa lucidez em isolamento, impaciência ou cinismo, como se ninguém mais fosse capaz de entender aquilo com a mesma profundidade. No seu melhor, você usa sua compreensão para agir com precisão e revelar mecanismos que estavam ocultos. Seu desafio é transformar experiência em sabedoria compartilhável, não apenas em prova de sobrevivência.`,
	
	"Seer": `<strong>Vidente:</strong> Você lida com o Aspecto através da observação, interpretação e orientação. Antes de agir, você tenta entender o que está acontecendo, quais padrões se repetem, quais caminhos se abrem e o que as pessoas precisam enxergar para tomar decisões melhores. Sua força está em perceber direções, significados e consequências que passam despercebidos. O risco é se acomodar na posição de quem vê, analisando tanto que agir parece sempre precipitado ou inferior. No seu melhor, você guia sem controlar, oferece clareza sem tomar a escolha das mãos dos outros. Seu desafio é lembrar que visão só se completa quando ajuda alguém a caminhar, inclusive você.`,
    
    "Mage": `<strong>Mago/Maga:</strong> A sua relação com o Aspecto é pautada no estudo ativo, solitário e sistemático. Você acumula informações, mapeia padrões e formula regras rígidas puramente para traçar a sua própria rota. Quando o Aspecto inunda a realidade de forma descontrolada e quebra os seus modelos mentais matemáticos, o seu sistema entra em colapso. O seu foco absoluto é a autossuficiência intelectual; você aprende as regras do jogo para garantir a sua própria sobrevivência.`,
    
    "Seer": `<strong>Vidente:</strong> Você é a pessoa que deixa os outros testarem o terreno primeiro, prestando atenção aos sucessos e catalogando os fracassos alheios para construir o seu próprio manual de sobrevivência. O seu distanciamento é metodológico: você exige ver as engrenagens girando antes de decidir como interagir com a máquina. Você opera estritamente na base do empirismo. Você estuda o mundo minuciosamente para dominar o seu funcionamento, usando a posição de observador para se manter a uma distância clínica das consequências.`,

    "Time": `<strong>Tempo:</strong> Você percebe a realidade como algo em movimento constante. Nada fica parado para sempre: fases acabam, oportunidades passam, escolhas cobram consequência e toda ação precisa encontrar seu momento certo. Você tende a pensar em ritmo, progresso, repetição, memória e encerramento, entendendo que mudar também exige deixar coisas para trás. No seu melhor, você é alguém capaz de agir quando a hora chega, cortar o que já cumpriu seu papel e transformar experiência em impulso para seguir adiante. No seu pior, pode se prender demais ao que passou, antecipar demais o que ainda vem ou sentir que precisa estar sempre pronto para o próximo impacto. Seu desafio é lembrar que o Tempo não serve apenas para correr contra o fim; ele também existe para marcar ciclos, amadurecer escolhas e permitir recomeços.`,

	"Space": `<strong>Espaço:</strong> Você percebe a realidade em termos de amplitude, contexto, criação e possibilidade. Antes de correr para uma conclusão, você tende a observar o quadro inteiro: o ambiente, as relações entre as partes, o espaço que cada coisa ocupa e o potencial que ainda não tomou forma. Existe em você uma paciência criativa, uma noção de que processos precisam de tempo, matéria e respiro para se desenvolver. No seu melhor, você é capaz de criar, preservar, reorganizar e dar forma ao que antes era apenas ideia solta. No seu pior, pode se perder em opções demais, manter distância emocional excessiva ou abandonar projetos quando eles deixam de parecer infinitamente abertos. Seu desafio é lembrar que o Espaço não é só contemplação e possibilidade; uma criação também precisa, em algum momento, ocupar forma concreta no mundo.`,
	
	"Void": `<strong>Vazio:</strong> Você percebe a realidade através do que está ausente, oculto, indefinido ou esquecido. Onde outras pessoas buscam respostas imediatas, você consegue permanecer perto da dúvida, do silêncio e do mistério sem entrar em pânico. Você entende que nem tudo precisa ser iluminado o tempo inteiro, e que há valor no que ainda não foi nomeado. No seu melhor, você protege segredos, acolhe ambiguidades e encontra potencial em lugares que os outros descartaram como irrelevantes. No seu pior, pode se esconder demais, apagar a própria presença ou usar a incerteza como desculpa para não se comprometer com nada. Seu desafio é lembrar que o desconhecido pode ser fértil, mas desaparecer completamente também impede que algo cresça a partir dele.`,
	
	"Light": `<strong>Luz:</strong> Você percebe a realidade através de informação, relevância, sentido e visibilidade. Sua atenção vai naturalmente para aquilo que importa: a pista decisiva, o dado esquecido, a oportunidade favorável, o padrão que explica por que certas coisas ganham destaque e outras somem no ruído. No seu melhor, você ilumina caminhos, organiza conhecimento e ajuda os outros a entenderem o que está realmente em jogo. No seu pior, pode confundir valor com reconhecimento, transformar saber em superioridade ou se desesperar quando algo permanece incerto, invisível ou fora do seu controle. Seu desafio é lembrar que nem toda verdade precisa virar holofote, e que conhecimento só se torna sabedoria quando serve a algo além da necessidade de estar certo.`,
	
	"Mind": `<strong>Mente:</strong> Você percebe a realidade através de escolhas, consequências, padrões e possibilidades. Para você, ações importam: o que alguém faz, quais caminhos se abrem a partir disso e quais resultados cada decisão tende a produzir. Sua identidade pode funcionar de forma flexível, adaptando postura, linguagem e estratégia conforme o contexto exige. No seu melhor, você é lúcido, preciso e capaz de desmontar situações complexas até encontrar uma rota viável. No seu pior, pode tratar pessoas como sistemas previsíveis demais, se afastar das próprias emoções ou ficar paralisado diante de possibilidades demais. Seu desafio é lembrar que nem tudo pode ser resolvido apenas escolhendo a opção mais eficiente; às vezes, a razão precisa abrir espaço para aquilo que não cabe no cálculo.`,
	
	"Heart": `<strong>Coração:</strong> Você percebe a realidade através de identidade, emoção, desejo e autenticidade. Para você, o motivo por trás de uma ação importa tanto quanto a ação em si, porque pessoas são histórias, máscaras, contradições e vontades tentando formar um eu coerente. No seu melhor, você entende nuances emocionais profundas, reconhece a individualidade dos outros e ajuda pessoas a entrarem em contato com quem realmente são. No seu pior, pode se prender demais à própria intensidade, confundir sentimento com verdade absoluta ou transformar autenticidade em teimosia. Seu desafio é lembrar que ter um eu forte não significa permanecer igual para sempre; o Coração também amadurece quando aceita suas próprias mudanças.`,
	
	"Rage": `<strong>Raiva:</strong> Você percebe a realidade através de conflito, ruptura, verdade crua e recusa. Existe em você uma sensibilidade forte para mentiras convenientes, falsas harmonias e estruturas que só parecem estáveis porque ninguém teve coragem de questioná-las. No seu melhor, você corta ilusões, denuncia o intolerável e força o mundo a encarar aquilo que ele preferia manter enterrado. No seu pior, pode se tornar rígido, desconfiado ou tão apegado à própria negação que nenhuma possibilidade parece legítima. Seu desafio é lembrar que destruir uma mentira não basta; depois da ruptura, ainda é preciso decidir que tipo de verdade merece ser construída no lugar.`,
	
	"Hope": `<strong>Esperança:</strong> Você percebe a realidade através de crença, imaginação, valores e possibilidade. Para você, o mundo não é apenas o que existe agora, mas também aquilo que poderia existir se alguém acreditasse o suficiente para agir. Você tende a se orientar por ideais, narrativas, sonhos e convicções, buscando um sentido maior que justifique continuar tentando. No seu melhor, você inspira coragem, sustenta visões generosas e torna o impossível um pouco mais alcançável. No seu pior, pode se agarrar a fantasias, negar problemas concretos ou exigir que a realidade obedeça ao que você acha que deveria ser verdade. Seu desafio é lembrar que fé não é fuga: uma esperança madura precisa tocar o chão sem deixar de olhar para o céu.`,
	
	"Doom": `<strong>Destino:</strong> Você percebe a realidade através de limites, consequências, perdas e inevitabilidades. Onde outros veem apenas pessimismo, você vê estrutura: regras que não podem ser ignoradas, custos que alguém terá de pagar, finais que precisam ser reconhecidos antes que causem ainda mais dano. No seu melhor, você é prudente, compassivo e capaz de preparar os outros para atravessar situações difíceis sem falsas promessas. No seu pior, pode se acostumar demais com a ideia de sofrimento, desistir cedo demais ou tratar qualquer esperança como ingenuidade. Seu desafio é lembrar que aceitar limites não significa se render a eles; às vezes, compreender o fim é justamente o que permite escolher melhor o que ainda pode ser salvo.`,
	
	"Life": `<strong>Vida:</strong> Você percebe a realidade através de crescimento, cuidado, vitalidade e autonomia. Sua atenção vai para aquilo que está vivo, florescendo, adoecendo, sendo sufocado ou tentando se expandir. Você entende que pessoas precisam de recursos, espaço, cura e desejo para continuar crescendo — e que regras inúteis não deveriam impedir a sobrevivência de ninguém. No seu melhor, você nutre, fortalece e cria condições para que os outros recuperem potência. No seu pior, pode se tornar invasivo, impaciente com fragilidade ou convencido de que sabe melhor do que os outros o que eles precisam para viver bem. Seu desafio é lembrar que crescimento forçado também machuca; cuidar da Vida é ajudar algo a florescer sem arrancar suas raízes no processo.`,
	
	"Blood": `<strong>Sangue:</strong> Você percebe a realidade através de vínculos, responsabilidade, comunidade e compromisso. Para você, ninguém existe completamente sozinho: relações criam deveres, promessas têm peso e grupos só sobrevivem quando alguém se importa o suficiente para mantê-los unidos. No seu melhor, você constrói confiança, sustenta alianças e lembra aos outros que pertencimento é uma prática diária. No seu pior, pode carregar obrigações demais, cobrar lealdade com rigidez ou confundir união com controle. Seu desafio é lembrar que laços saudáveis não precisam ser correntes; o Sangue é mais forte quando mantém as pessoas conectadas sem impedir que elas respirem.`,
	
	"Breath": `<strong>Suspiro:</strong> Você percebe a realidade através de movimento, liberdade, leveza e direção própria. Sua força está em não se deixar prender facilmente: você encontra rotas alternativas, escapa de expectativas sufocantes e inspira os outros simplesmente ao seguir o próprio caminho. No seu melhor, você traz ar novo para ambientes estagnados, lembra as pessoas de que elas podem mudar de rumo e transforma independência em impulso coletivo. No seu pior, pode fugir quando algo exige presença, confundir liberdade com distância ou abandonar responsabilidades antes de entender o que elas significavam. Seu desafio é lembrar que ser livre não precisa significar estar sempre indo embora; às vezes, a escolha mais livre é ficar porque você quer, não porque está preso.`,

	 // --- HOPE (ESPERANÇA) ---
	"Maid:Hope": `
		<h3>MAID OF HOPE (CRIADA/CRIADO DA ESPERANÇA)</h3>
		<p><strong>Que Serve a Esperança / Feita(o) de Esperança.</strong></p>
		<p>Você costuma ocupar o papel de quem mantém a fé do grupo de pé. Quando todo mundo começa a duvidar, cansar ou perder o sentido do que está fazendo, você é a pessoa que tenta reorganizar o clima, lembrar do objetivo maior e sustentar a convicção necessária para continuar. Você serve a Esperança criando condições para que ela exista: oferecendo incentivo, imaginando saídas e impedindo que o cinismo tome conta de tudo.</p>
	    <p>O risco é transformar essa função em obrigação. Se você se acostuma a ser a fonte de motivação de todos, pode começar a esconder suas próprias dúvidas ou empurrar otimismo em momentos onde as pessoas precisavam primeiro sentir frustração, luto ou raiva. Sua evolução começa quando você entende que servir a Esperança não significa fingir que tudo está bem. Às vezes, a fé mais forte é aquela que reconhece o medo e continua mesmo assim.</p>
	`,
	
	"Knight:Hope": `
	<h3>KNIGHT OF HOPE (CAVALEIRO/CAVALEIRA DA ESPERANÇA)</h3>
	<p><strong>O que Explora a Esperança / Protege a Esperança.</strong></p>
	<p>Você usa a convicção como armadura. Mesmo quando está inseguro, tenta parecer firme o suficiente para que os outros acreditem que ainda existe uma chance. Sua força está em transformar fé, idealismo e imaginação em algo prático: um discurso que levanta o grupo, uma promessa que mantém todos tentando, uma postura confiante que protege aquilo em que vocês acreditam.</p>
	<p>Mas essa confiança nem sempre nasce de tranquilidade. Muitas vezes, ela é uma performance construída para esconder o medo de ser insuficiente ou de descobrir que aquilo em que você acredita não é tão sólido quanto parecia. O risco é proteger a Esperança com tanta rigidez que você não consiga admitir dúvida nenhuma. Seu desafio é entender que esperança não fica mais fraca quando reconhece incerteza; ela fica mais honesta.</p>
	`,
		
	"Thief:Hope": `
		<h3>THIEF OF HOPE (LADRÃO/LADRA DA ESPERANÇA)</h3>
		<p><strong>O que Rouba a Esperança (para si).</strong></p>
		<p>Você deseja ser a pessoa em quem os outros acreditam. Quando percebe fé, admiração ou confiança circulando ao seu redor, sua tendência é querer puxar essa energia para si: ser o escolhido, o exemplo, a causa, o centro da convicção do grupo. Não é só vaidade; existe uma necessidade real de sentir que alguém acredita em você o bastante para tornar sua própria existência mais firme.</p>
		 <p>O problema aparece quando essa fome começa a esvaziar a fé dos outros. Você pode competir com ideais, líderes, amigos ou sonhos que não te tenham como foco, como se a esperança depositada em qualquer outra coisa fosse uma esperança tirada de você. No seu melhor, sua ambição inspira pessoas a acreditarem mais alto. Seu desafio é lembrar que ser admirado não precisa significar monopolizar a capacidade dos outros de acreditar.</p>
	`,
		
	"Mage:Hope": `
		<h3>MAGE OF HOPE (MAGO/MAGA DA ESPERANÇA)</h3>
		<p><strong>O que Entende a Esperança / Entende com a Esperança.</strong></p>
		<p>Você entende a fé porque já teve que testá-la na prática. Talvez tenha acreditado demais em uma pessoa, em uma causa, em um futuro ou em uma versão idealizada da vida — e descoberto, com algum custo, onde a esperança sustenta e onde ela ilude. Por isso, sua relação com o idealismo não é ingênua. Você sabe que acreditar pode salvar alguém, mas também sabe que uma promessa bonita pode quebrar feio quando encontra a realidade.</p>
		<p>Essa experiência te dá uma leitura apurada do que vale a pena perseguir. Você consegue distinguir uma fantasia vazia de uma possibilidade difícil, mas real. O risco é virar cético demais justamente por conhecer tão bem o mecanismo da crença. Seu desafio é compartilhar essa sabedoria sem apagar o brilho das coisas. Nem toda esperança é negação; algumas são ferramentas de sobrevivência.</p>
	`,
		
	"Witch:Hope": `
		<h3>WITCH OF HOPE (BRUXA/BRUXO DA ESPERANÇA)</h3>
		<p><strong>Que Manipula a Esperança.</strong></p>
		<p>Você altera o campo do possível. Onde outras pessoas veem uma situação fechada, você mexe na perspectiva, muda a narrativa e encontra uma brecha para que algo volte a parecer alcançável. Sua força está em manipular crenças, expectativas e ideais: você sabe como transformar desânimo em entusiasmo, medo em coragem ou uma ideia absurda em algo que o grupo decide tentar.</p>
		<p>O risco é se apaixonar demais pela própria capacidade de inspirar. Você pode começar a empurrar pessoas para sonhos que fazem sentido para você, mas não necessariamente para elas, ou tratar qualquer limite como falta de imaginação. No seu melhor, você liberta a Esperança de formatos estreitos e mostra que o impossível talvez só estivesse mal formulado. Seu desafio é lembrar que mudar a fé de alguém é mexer com algo íntimo, não apenas ajustar uma estratégia.</p>
	`,
		
	"Prince:Hope": `
		<h3>PRINCE OF HOPE (PRÍNCIPE/PRINCESA DA ESPERANÇA)</h3>
		<p><strong>O que Destrói a Esperança / Destrói com a Esperança.</strong></p>
		<p>Você tem pouca paciência para ilusões confortáveis. Quando vê alguém se agarrando a uma crença que parece frágil, falsa ou perigosa, sua tendência é querer cortar aquilo pela raiz. Você pode assumir o papel de quem desmonta fantasias, questiona promessas grandiosas e força os outros a encararem a diferença entre fé e autoengano.</p>
		<p>O perigo é destruir mais do que precisava. Às vezes, ao tentar proteger as pessoas de uma esperança falsa, você também atinge a coragem, a ternura e a possibilidade real que existiam ali. E, como todo Príncipe, pode haver ironia no processo: você talvez destrua a fé dos outros enquanto se agarra com força à própria visão de mundo. Seu desafio é aprender que nem toda esperança é mentira, e que destruir ilusões só tem valor quando abre espaço para algo mais verdadeiro viver.</p>
	`,
		
	"Sylph:Hope": `
	    <h3>SYLPH OF HOPE (SÍLFIDE/SILFO DA ESPERANÇA)</h3>
	    <p><strong>Que Cura a Esperança / Conserta a Esperança.</strong></p>
		<p>Você percebe quando a fé de alguém está ferida. Desânimo, cinismo, perda de sentido e incapacidade de imaginar um futuro melhor chamam sua atenção quase imediatamente. Sua resposta natural é tentar restaurar essa possibilidade: oferecer perspectiva, lembrar a pessoa do que ela valoriza e mostrar que ainda existe algo pelo qual vale a pena continuar.</p>		    
		<p>Sua ajuda pode ser profundamente necessária, mas também pode passar do ponto. Nem toda tristeza precisa ser curada no mesmo instante, e nem toda dúvida é uma doença espiritual. Às vezes, insistir em esperança antes da hora vira uma forma de negar a dor de alguém. No seu melhor, você ajuda pessoas a reconstruírem a própria fé sem forçar uma conclusão feliz. Seu desafio é entender que curar a Esperança também exige respeitar o tempo da descrença.</p>
	`,
		
	"Page:Hope": `
		<h3>PAGE OF HOPE (ESCUDEIRO/ESCUDEIRA DA ESPERANÇA)</h3>
		<p><strong>Aquele que Explora a Esperança / Explora através da Esperança.</strong></p>
	    <p>Você começa sua jornada buscando algo em que acreditar. Pode sentir falta de convicção própria, confiar demais na certeza dos outros ou se deixar levar por narrativas que parecem mais fortes do que a sua. A Esperança, para você, aparece primeiro como território a ser explorado: sonhos, ideais, fantasias, promessas e possibilidades que talvez ainda pareçam grandes demais para caber na sua vida real.</p>
	    <p>Ao explorar essas possibilidades, você começa a descobrir que fé não é apenas esperar que alguém te entregue um destino melhor. Aos poucos, você aprende a testar crenças, abandonar ilusões frágeis e construir uma vontade própria. No seu melhor, você transforma imaginação em força concreta, inspirando outros justamente porque sabe como é começar sem certeza nenhuma. Seu desafio é parar de esperar pelo sinal perfeito e começar a agir como alguém que também pode criar o impossível.</p>
	`,
		
	"Rogue:Hope": `
		<h3>ROGUE OF HOPE (LADINO/LADINA DA ESPERANÇA)</h3>
		<p><strong>O que Rouba a Esperança (para redistribuir).</strong></p>
		<p>Você percebe quando a fé está concentrada demais em uma pessoa, uma ideia ou uma promessa. Sua tendência é deslocar essa esperança para onde ela parece fazer mais falta: dividir confiança, redirecionar admiração, tirar alguém de um pedestal ou lembrar o grupo de que a capacidade de acreditar não pertence a um único salvador.</p>
		<p>O risco é usar essa redistribuição para escapar do próprio valor. Se alguém acredita em você, talvez sua primeira reação seja devolver, desviar ou apontar para outra pessoa, porque carregar expectativas parece perigoso demais. No seu melhor, você impede que a Esperança vire dependência e ajuda todos a encontrarem uma parte dela para si. Seu desafio é aceitar que, às vezes, você também pode ser uma fonte legítima de fé.</p>
	`,
		
	"Seer:Hope": `
		<h3>SEER OF HOPE (VIDENTE DA ESPERANÇA)</h3>
		<p><strong>Que Vê a Esperança / Guia pela Esperança.</strong></p>
		<p>Você enxerga possibilidades onde outros veem apenas confusão. Sua força não está necessariamente em acreditar com intensidade cega, mas em compreender como a crença funciona: quais ideais sustentam uma pessoa, quais promessas são vazias, quais sonhos ainda têm caminho e quais fantasias estão apenas adiando uma queda.</p>
	    <p>Com isso, você pode guiar os outros através da Esperança. Você aponta quais futuros merecem investimento, quais valores estão orientando uma escolha e onde a fé do grupo precisa ser protegida ou revista. O risco é passar tempo demais avaliando possibilidades, tentando separar sonho viável de ilusão perfeita, até demorar para agir. Seu desafio é lembrar que guiar pela Esperança não é prever o milagre certo; é ajudar as pessoas a escolherem uma crença pela qual valha a pena se mover.</p>
	`,
	
	"Heir:Hope": `
		<h3>HEIR OF HOPE (HERDEIRO/HERDEIRA DA ESPERANÇA)</h3>
		<p><strong>O que Herda a Esperança / Protegido(a) pela Esperança.</strong></p>
		<p>Você parece naturalmente envolvido por possibilidade. Mesmo em situações difíceis, há algo em você que tende a encontrar uma saída, uma coincidência favorável, uma pessoa disposta a ajudar ou uma razão para continuar acreditando. A Esperança chega até você com certa facilidade, como se o mundo abrisse pequenas frestas quando tudo parecia fechado.</p>
		<p>Essa leveza pode inspirar os outros, mas também pode te deixar passivo. Se as coisas costumam dar certo no final, talvez você demore a perceber quando uma situação exige ação concreta, planejamento ou confronto com limites reais. No seu melhor, você incorpora uma fé tranquila que ajuda o grupo a respirar. Seu desafio é não tratar a própria esperança como garantia automática; até uma bênção precisa ser escolhida para virar caminho.</p>
	`,
		
	"Bard:Hope": `
		<h3>BARD OF HOPE (BARDO/BARDA DA ESPERANÇA)</h3>
		<p><strong>O que Convida a Destruição da Esperança.</strong></p>
		<p>Sua relação com a fé é instável e indireta. Às vezes você trata ideais, promessas e motivações como piada; às vezes se agarra a uma crença de forma tão frágil que qualquer rachadura parece contaminar o ambiente inteiro. Sem necessariamente querer, você pode criar condições para que o grupo perca confiança no plano, no líder, na causa ou na própria possibilidade de vencer.</p>
		<p>Mas a destruição da Esperança nem sempre é inútil. Você pode revelar quando uma fé era artificial, quando um otimismo estava servindo para evitar problemas reais ou quando todo mundo precisava parar de fingir que acreditava. O risco é deixar o desencanto se espalhar sem direção, desmontando também as convicções que ainda mereciam cuidado. No seu melhor, você permite que esperanças falsas caiam para que uma crença mais honesta possa nascer. Seu desafio é perceber quando sua descrença virou atmosfera, não apenas opinião.</p>
		`,

    // --- BLOOD (SANGUE) ---
	"Maid:Blood": `
	    <h3>MAID OF BLOOD (CRIADA/CRIADO DO SANGUE)</h3>
	    <p><strong>Que Serve o Sangue / Feita(o) de Sangue.</strong></p>
	    <p>Você costuma ser a pessoa que mantém os vínculos funcionando na prática. Quando há tensão, distância, mal-entendido ou falta de compromisso, você tenta organizar o que precisa ser dito, feito ou sustentado para que o grupo não se desfaça. Você serve o Sangue criando condições para que relações continuem existindo: lembrando obrigações, mediando conflitos, cuidando de acordos e mantendo viva a sensação de pertencimento.</p>
	    <p>O risco é transformar esse papel em prisão. Se todos se acostumam com você como a base silenciosa da convivência, pode parecer que qualquer ruptura é sua responsabilidade pessoal. Você pode acabar carregando alianças que só continuam de pé porque você se sacrifica por elas. Sua evolução começa quando você entende que servir aos laços não significa se acorrentar a todos eles. Uma comunidade saudável também precisa sustentar você de volta.</p>
	`,
	"Knight:Blood": `
	    <h3>KNIGHT OF BLOOD (CAVALEIRO/CAVALEIRA DO SANGUE)</h3>
	    <p><strong>O que Explora o Sangue / Protege o Sangue.</strong></p>
	    <p>Você usa lealdade, compromisso e espírito de equipe como armadura. Mesmo quando sente insegurança sobre pertencer ou ser necessário, tende a compensar sendo a pessoa mais firme, mais presente e mais disposta a defender o grupo. Você explora o Sangue como ferramenta prática: sabe motivar aliados, distribuir responsabilidades e transformar vínculos em força coletiva.</p>
	    <p>O problema é que essa postura pode virar performance. Você talvez fale muito sobre união, dever e confiança porque teme que, sem esse esforço constante, ninguém escolheria ficar. O risco é proteger os laços com tanta intensidade que você esquece de existir fora deles. No seu melhor, você é o companheiro confiável que mantém o grupo de pé quando a situação aperta. Seu desafio é entender que pertencer não deveria exigir estar sempre em guarda.</p>
	`,
	
	"Thief:Blood": `
	    <h3>THIEF OF BLOOD (LADRÃO/LADRA DO SANGUE)</h3>
	    <p><strong>Que Rouba o Sangue (para si).</strong></p>
	    <p>Você deseja vínculos fortes, lealdade clara e a sensação de ser indispensável para alguém. Quando percebe afeto, intimidade ou compromisso circulando ao seu redor, pode sentir vontade de puxar esses laços para si: ser o melhor amigo, a pessoa mais confiável, o centro da rede ou aquele sem quem o grupo não funciona.</p>
	    <p>O risco é transformar pertencimento em posse. Você pode monopolizar relações, testar lealdades ou se incomodar quando pessoas importantes para você têm outros vínculos igualmente fortes. No seu melhor, seu magnetismo reúne pessoas e cria alianças intensas. Seu desafio é lembrar que laços não ficam mais verdadeiros quando são controlados. Ser amado não precisa significar ser a única prioridade de alguém.</p>
	`,
	
	"Mage:Blood": `
	    <h3>MAGE OF BLOOD (MAGO/MAGA DO SANGUE)</h3>
	    <p><strong>O que Entende o Sangue / Entende com o Sangue.</strong></p>
	    <p>Você entende vínculos porque já precisou aprender seus custos de perto. Promessas, alianças, expectativas, conflitos e responsabilidades não são conceitos abstratos para você; são coisas que pesam, cobram e deixam marcas. Por isso, você percebe rapidamente onde existem tensões ocultas, compromissos desequilibrados ou lealdades que não foram tão bem resolvidas quanto parecem.</p>
	    <p>Essa experiência te dá uma leitura social afiada, mas também pode te deixar desconfiado. Você sabe que toda relação exige algum tipo de trabalho, então pode enxergar sinais de desgaste antes de todo mundo — às vezes até cedo demais. No seu melhor, você ajuda o grupo a compreender seus próprios vínculos com honestidade. Seu desafio é não transformar todo laço em previsão de decepção. Algumas responsabilidades são pesadas porque importam, não porque estão destinadas a quebrar.</p>
	`,
	
	"Witch:Blood": `
	    <h3>WITCH OF BLOOD (BRUXA/BRUXO DO SANGUE)</h3>
	    <p><strong>Que Manipula o Sangue / Manipula através do Sangue.</strong></p>
	    <p>Você altera a forma como vínculos são organizados. Laços impostos por família, tradição, grupo ou convenção não parecem sagrados para você só porque sempre existiram. Sua tendência é questionar quem deve estar junto, quais compromissos fazem sentido e que tipo de comunidade realmente merece ser chamada de sua.</p>
	    <p>Sua força está em reconfigurar relações: aproximar pessoas que se precisavam, romper dinâmicas sufocantes, criar famílias escolhidas e mudar as regras de pertencimento. O risco é começar a tratar os laços como algo moldável apenas pela sua vontade, decidindo por todos quem deve ficar, sair, se comprometer ou se afastar. No seu melhor, você liberta o Sangue de obrigações vazias. Seu desafio é lembrar que manipular vínculos exige cuidado, porque relações não são peças de tabuleiro.</p>
	`,
	
	"Prince:Blood": `
	    <h3>PRINCE OF BLOOD (PRÍNCIPE/PRINCESA DO SANGUE)</h3>
	    <p><strong>O que Destrói o Sangue / Destrói com o Sangue.</strong></p>
	    <p>Você tem uma relação tensa com compromisso, dependência e obrigação emocional. Quando um vínculo parece falso, sufocante, desigual ou moralmente errado, sua tendência é querer cortar aquilo de forma definitiva. Você pode assumir o papel de quem rompe ciclos sociais, desfaz alianças frágeis e se recusa a manter relações apenas por costume, culpa ou pressão do grupo.</p>
	    <p>O perigo é transformar corte em reflexo. Às vezes, ao tentar destruir laços nocivos, você também atinge vínculos que só precisavam de conflito, conversa ou mudança de termos. E, como todo Príncipe, pode haver ironia: você rejeita obrigações sociais, mas talvez tenha padrões rígidos sobre como uma relação deveria funcionar. Seu desafio é entender que liberdade emocional não precisa significar queimar todas as pontes. Algumas conexões merecem ser reconstruídas, não apagadas.</p>
	`,
	
	"Sylph:Blood": `
	    <h3>SYLPH OF BLOOD (SÍLFIDE/SILFO DO SANGUE)</h3>
	    <p><strong>Que Cura o Sangue / Conserta o Sangue.</strong></p>
	    <p>Você percebe quando um vínculo está ferido. Brigas mal resolvidas, afastamentos silenciosos, promessas quebradas e grupos perdendo coesão chamam sua atenção quase imediatamente. Sua resposta natural é tentar restaurar confiança: mediar conversas, lembrar as pessoas do que as une e encontrar formas de reparar o dano antes que a relação se perca.</p>
	    <p>Essa habilidade pode ser profundamente valiosa, mas também pode passar do ponto. Nem todo conflito precisa ser resolvido no seu ritmo, e nem todo vínculo merece ser restaurado. Às vezes, insistir em reconciliação pode impedir que alguém reconheça que uma relação acabou ou precisa de distância. No seu melhor, você cura laços sem negar a dor que os rompeu. Seu desafio é lembrar que consertar o Sangue não significa manter todos juntos a qualquer custo.</p>
	`,
	
	"Page:Blood": `
	    <h3>PAGE OF BLOOD (ESCUDEIRO/ESCUDEIRA DO SANGUE)</h3>
	    <p><strong>Aquele que Explora o Sangue / Explora através do Sangue.</strong></p>
	    <p>Você começa sua jornada tentando entender pertencimento. Pode se sentir deslocado, sem raízes claras, sem grupo fixo ou inseguro sobre o que faz uma relação ser verdadeira. O Sangue, para você, aparece primeiro como território a ser explorado: amizade, lealdade, convivência, compromisso, confiança e o estranho trabalho de manter pessoas unidas.</p>
	    <p>Ao explorar esses vínculos, você começa a descobrir que comunidade não é algo que simplesmente aparece pronto. Ela é construída através de presença, responsabilidade e escolha mútua. No seu melhor, você aprende a transformar estranhos em aliados e grupos frágeis em famílias escolhidas. Seu desafio é parar de esperar que alguém prove seu pertencimento por você e começar a participar ativamente da criação dos laços que deseja ter.</p>
	`,
	
	"Rogue:Blood": `
	    <h3>ROGUE OF BLOOD (LADINO/LADINA DO SANGUE)</h3>
	    <p><strong>O que Rouba o Sangue (para redistribuir).</strong></p>
	    <p>Você percebe quando vínculos, responsabilidades ou tensões estão concentrados demais em um só lugar. Sua tendência é deslocar esse peso: aliviar alguém sobrecarregado, aproximar pessoas afastadas, dividir deveres ou assumir temporariamente uma tensão para que o grupo consiga respirar. Você rouba o Sangue de onde ele pesa demais e tenta redistribuí-lo para restaurar equilíbrio.</p>
	    <p>O risco é usar essa função para desaparecer dentro das necessidades dos outros. Você pode virar o amortecedor de conflitos, a pessoa que sempre cede, sempre entende, sempre segura a situação para que ninguém mais precise lidar com o desconforto. No seu melhor, você torna os laços mais justos e menos sufocantes. Seu desafio é lembrar que redistribuir responsabilidade não significa ficar sempre com a parte mais dolorosa.</p>
	`,
	
	"Seer:Blood": `
	    <h3>SEER OF BLOOD (VIDENTE DO SANGUE)</h3>
	    <p><strong>Que Vê o Sangue / Guia pelo Sangue.</strong></p>
	    <p>Você entende a arquitetura dos vínculos. Mesmo sem estar no centro de tudo, percebe quem confia em quem, onde há tensão, quais promessas sustentam o grupo e quais alianças estão começando a rachar. Sua força está em enxergar relações como sistemas vivos de compromisso, afeto, responsabilidade e conflito.</p>
	    <p>Com isso, você pode guiar os outros pelo Sangue: aconselhar conversas difíceis, apontar quando um vínculo precisa de cuidado, alertar sobre obrigações ignoradas ou mostrar como uma decisão afetará o grupo inteiro. O risco é observar demais e participar de menos, ficando confortável como intérprete da vida social sem se permitir depender de ninguém. Seu desafio é lembrar que compreender vínculos não substitui vivê-los.</p>
	`,
	
	"Heir:Blood": `
	    <h3>HEIR OF BLOOD (HERDEIRO/HERDEIRA DO SANGUE)</h3>
	    <p><strong>O que Herda o Sangue / Protegido(a) pelo Sangue.</strong></p>
	    <p>Você parece naturalmente envolvido por vínculos. Pessoas se aproximam, te incluem, te protegem ou te tratam como parte do grupo antes mesmo que você entenda exatamente por quê. O Sangue chega até você como uma rede de relações que se organiza ao seu redor, oferecendo pertencimento, apoio e responsabilidade.</p>
	    <p>Essa afinidade pode tornar você uma presença estabilizadora, alguém que une pessoas simplesmente por estar ali. Mas também pode gerar passividade: se os laços sempre aparecem, talvez você demore a perceber o trabalho necessário para mantê-los saudáveis. No seu melhor, você incorpora a confiança do grupo e faz as pessoas se sentirem menos sozinhas. Seu desafio é não apenas herdar conexões, mas escolher conscientemente como cuidar delas.</p>
	`,
	
	"Bard:Blood": `
	    <h3>BARD OF BLOOD (BARDO/BARDA DO SANGUE)</h3>
	    <p><strong>O que Convida a Destruição do Sangue.</strong></p>
	    <p>Sua relação com compromisso pode ser instável e indireta. Às vezes você evita conversas importantes, some quando o vínculo exige presença ou trata obrigações emocionais como algo que pode esperar indefinidamente. Sem necessariamente querer, essa ausência cria condições para que relações esfriem, promessas percam força e grupos se fragmentem.</p>
	    <p>Mas a destruição do Sangue nem sempre é inútil. Você pode revelar quando um vínculo só existia por culpa, costume ou dependência, permitindo que relações artificiais finalmente se desfaçam. O risco é deixar o afastamento agir sem consciência, rompendo também laços que ainda mereciam cuidado. No seu melhor, você permite que conexões falsas caiam para que compromissos mais honestos possam surgir. Seu desafio é perceber quando sua distância virou decisão, mesmo que você nunca tenha dito isso em voz alta.</p>
	`,

// --- BREATH (Suspiro) ---
	"Maid:Breath": `
	    <h3>MAID OF BREATH (CRIADA/CRIADO DO SUSPIRO)</h3>
	    <p><strong>Que Serve o Suspiro / Feita(o) de Suspiro.</strong></p>
	    <p>Você costuma ser a pessoa que coloca as coisas em movimento quando o ambiente fica parado demais. Quando rotinas sufocam, dependências se acumulam ou todo mundo parece preso no mesmo lugar, você tenta abrir espaço, destravar caminhos e lembrar que ainda existe uma saída possível. Você serve o Suspiro criando condições para que a liberdade aconteça: empurrando mudanças, desfazendo nós e ajudando as pessoas a recuperarem direção própria.</p>
	    <p>O risco é transformar movimento em obrigação. Se todos se acostumam a depender de você para romper a inércia, sua própria liberdade pode virar mais uma tarefa a cumprir. Você pode acabar sempre em transição, sempre resolvendo bloqueios, sem tempo para criar raízes ou escolher onde quer ficar. Sua evolução começa quando você entende que servir ao Suspiro não significa estar sempre indo embora. Às vezes, libertar também é permitir que algo respire sem precisar carregar o vento sozinho.</p>
	`,
	
	"Knight:Breath": `
	    <h3>KNIGHT OF BREATH (CAVALEIRO/CAVALEIRA DO SUSPIRO)</h3>
	    <p><strong>O que Explora o Suspiro / Protege o Suspiro.</strong></p>
	    <p>Você usa leveza, humor e desapego como armadura. Mesmo quando algo te afeta, sua tendência é parecer tranquilo, flexível ou "de boa" o suficiente para que ninguém perceba o peso real da situação. Você explora o Suspiro como ferramenta prática: muda de direção rápido, encontra rotas alternativas e protege a liberdade do grupo quando tudo começa a parecer rígido demais.</p>
	    <p>O problema é que essa leveza pode virar performance. Talvez você mantenha distância emocional não porque não se importa, mas porque parecer preso, dependente ou vulnerável parece perigoso demais. No seu melhor, você é a pessoa que abre janelas em ambientes sufocantes e ajuda os outros a não se sentirem encurralados. Seu desafio é entender que proteger sua liberdade não exige fingir que nada te alcança.</p>
	`,
	
	"Thief:Breath": `
	    <h3>THIEF OF BREATH (LADRÃO/LADRA DO SUSPIRO)</h3>
	    <p><strong>Que Rouba o Suspiro (para si).</strong></p>
	    <p>Você deseja espaço, autonomia e a liberdade de seguir sua própria direção sem pedir permissão. Quando percebe que decisões, atenção ou possibilidades estão sendo controladas por outras pessoas, sua tendência é puxar esse ar para si: tomar a frente, escapar das expectativas e garantir que ninguém limite seus movimentos.</p>
	    <p>O risco é transformar liberdade em privilégio individual. Você pode ocupar todo o espaço da sala, decidir por conta própria ou sair de situações difíceis deixando que os outros lidem com as consequências. No seu melhor, sua ousadia quebra estagnações e mostra que ninguém precisa aceitar uma vida sufocante. Seu desafio é lembrar que ser livre não precisa significar tirar a liberdade de escolha de quem está ao seu redor.</p>
	`,
	
	"Mage:Breath": `
	    <h3>MAGE OF BREATH (MAGO/MAGA DO SUSPIRO)</h3>
	    <p><strong>O que Entende o Suspiro / Entende com o Suspiro.</strong></p>
	    <p>Você entende liberdade porque já precisou aprender seus custos. Talvez tenha conhecido de perto a solidão, a distância, a instabilidade ou a sensação de que depender de alguém sempre cobra caro. Por isso, sua relação com autonomia não é ingênua: você sabe que ser livre pode ser maravilhoso, mas também pode significar estar sem apoio quando a queda vem.</p>
	    <p>Essa experiência te dá uma leitura afiada de situações sufocantes. Você percebe quando uma obrigação está virando prisão, quando uma relação está tirando o ar de alguém ou quando o melhor caminho é simplesmente sair. O risco é enxergar correntes mesmo onde existe cuidado legítimo. No seu melhor, você ajuda os outros a reconhecerem caminhos de escape e possibilidades de movimento. Seu desafio é lembrar que nem todo vínculo é uma armadilha, e que liberdade também pode incluir escolher ficar.</p>
	`,
	
	"Witch:Breath": `
	    <h3>WITCH OF BREATH (BRUXA/BRUXO DO SUSPIRO)</h3>
	    <p><strong>Que Manipula o Suspiro.</strong></p>
	    <p>Você altera direções. Quando um caminho parece fechado, previsível ou sufocante, sua tendência é mexer no fluxo: mudar o plano, virar a conversa, abrir uma rota inesperada ou convencer as pessoas de que há uma opção mais livre do que a que estavam seguindo. Sua força está em manipular movimento, autonomia e possibilidade, tornando o ar ao redor menos parado.</p>
	    <p>O risco é se apaixonar demais pela própria ruptura. Você pode tratar estabilidade como prisão, compromisso como tédio ou discordância como falta de coragem para mudar. Às vezes, ao tentar libertar os outros, acaba conduzindo todos para a direção que você considera mais interessante. No seu melhor, você quebra rotas impostas e mostra que a liberdade pode ser reinventada. Seu desafio é lembrar que mudar o vento não significa decidir por todos para onde ele deve soprar.</p>
	`,
	
	"Prince:Breath": `
	    <h3>PRINCE OF BREATH (PRÍNCIPE/PRINCESA DO SUSPIRO)</h3>
	    <p><strong>O que Destrói o Suspiro / Destrói com o Suspiro.</strong></p>
	    <p>Você tem uma relação tensa com leveza, indecisão e desapego. Quando percebe alguém fugindo de responsabilidade, evitando compromisso ou tratando tudo como se não tivesse peso, sua tendência é querer cortar esse movimento pela raiz. Você pode assumir o papel de quem interrompe dispersões, cobra direção e destrói a ilusão de que todos podem simplesmente ir embora sem consequência.</p>
	    <p>O perigo é destruir mais liberdade do que precisava. Às vezes, ao tentar combater irresponsabilidade, você também sufoca espontaneidade, descanso e autonomia legítima. Você também pode destruir com o Suspiro: afastando-se, sumindo ou usando distância como forma de encerrar situações que não sabe como enfrentar diretamente. No seu melhor, você rompe fugas vazias e ajuda as pessoas a escolherem um caminho real. Seu desafio é entender que liberdade não é sempre fuga, e que compromisso não precisa ser uma prisão.</p>
	`,
	
	"Sylph:Breath": `
	    <h3>SYLPH OF BREATH (SÍLFIDE/SILFO DO SUSPIRO)</h3>
	    <p><strong>Que Cura o Suspiro / Conserta o Suspiro.</strong></p>
	    <p>Você percebe quando alguém está sem ar. Estresse, cobrança excessiva, sensação de prisão, dependência e falta de espaço chamam sua atenção rapidamente. Sua resposta natural é tentar aliviar: oferecer uma pausa, uma rota de fuga, uma mudança de perspectiva ou um lembrete de que a pessoa ainda pode escolher por si mesma.</p>
	    <p>Essa ajuda pode ser profundamente necessária, mas também pode passar do ponto. Nem toda pressão é injusta, e nem toda responsabilidade precisa ser removida para que alguém fique bem. Às vezes, ao tentar curar a falta de liberdade dos outros, você pode acabar evitando que eles enfrentem consequências importantes. No seu melhor, você devolve ar a quem estava sufocando. Seu desafio é lembrar que curar o Suspiro não é livrar alguém de todo peso, mas ajudá-lo a respirar enquanto decide como carregá-lo.</p>
	`,
	
	"Page:Breath": `
	    <h3>PAGE OF BREATH (ESCUDEIRO/ESCUDEIRA DO SUSPIRO)</h3>
	    <p><strong>Aquele que Explora o Suspiro / Explora através do Suspiro.</strong></p>
	    <p>Você começa sua jornada tentando entender liberdade. Pode sentir que vive preso por expectativas, obrigações, inseguranças, dependência dos outros ou medo de escolher um caminho próprio. O Suspiro, para você, aparece primeiro como território a ser explorado: autonomia, movimento, leveza, direção pessoal e a possibilidade de não ser definido pelo lugar onde te colocaram.</p>
	    <p>Ao explorar essa liberdade, você começa a descobrir que ter direção própria não significa virar outra pessoa da noite para o dia. É um processo de pequenos desvios, escolhas, tentativas e permissões que você aprende a se dar. No seu melhor, você inspira os outros justamente porque sabe como é difícil começar preso e ainda assim buscar ar. Seu desafio é parar de esperar autorização para viver e começar a testar, passo a passo, o que significa seguir o próprio vento.</p>
	`,
	
	"Rogue:Breath": `
	    <h3>ROGUE OF BREATH (LADINO/LADINA DO SUSPIRO)</h3>
	    <p><strong>O que Rouba o Suspiro (para redistribuir).</strong></p>
	    <p>Você percebe quando liberdade, espaço ou leveza estão mal distribuídos. Sua tendência é deslocar o Suspiro para quem parece precisar mais: assumir uma tarefa para alguém respirar, abrir espaço para outra pessoa se expressar, aliviar uma pressão ou criar uma saída onde antes só havia obrigação.</p>
	    <p>O risco é tirar ar de si mesmo nesse processo. Você pode abrir mão da própria voz, da própria autonomia ou das próprias aventuras para que os outros tenham chance de viver as deles. No seu melhor, você torna a liberdade mais compartilhável e impede que só algumas pessoas possam se mover. Seu desafio é lembrar que redistribuir o Suspiro não significa ficar sem respirar.</p>
	`,
	
	"Seer:Breath": `
	    <h3>SEER OF BREATH (VIDENTE DO SUSPIRO)</h3>
	    <p><strong>Que Vê o Suspiro / Guia pelo Suspiro.</strong></p>
	    <p>Você entende fluxos, direções e possibilidades de movimento. Mesmo quando os outros se sentem presos, você consegue perceber onde há uma rota alternativa, uma brecha, uma mudança de perspectiva ou um caminho mais leve. Sua força está em enxergar autonomia: o que motiva alguém, o que limita suas escolhas e para onde a situação tende a se mover se ninguém interferir.</p>
	    <p>Com isso, você pode guiar os outros pelo Suspiro: apontar saídas, explicar onde a pressão está se acumulando e ajudar pessoas a escolherem uma direção própria. O risco é observar tantas possibilidades de fuga que escolher uma se torna difícil, ou orientar os outros enquanto você mesmo permanece parado. No seu melhor, você mostra que liberdade não é ausência de caminho, mas a possibilidade de caminhar com intenção. Seu desafio é lembrar que ver o vento não substitui levantar vela.</p>
	`,
	
	"Heir:Breath": `
	    <h3>HEIR OF BREATH (HERDEIRO/HERDEIRA DO SUSPIRO)</h3>
	    <p><strong>O que Herda o Suspiro / Protegido(a) pelo Suspiro.</strong></p>
	    <p>Você parece naturalmente envolvido por movimento e liberdade. Obrigações tendem a se deslocar, caminhos se abrem, situações rígidas encontram uma brecha e, muitas vezes, você acaba seguindo adiante sem precisar forçar tanto quanto os outros. O Suspiro chega até você como leveza, autonomia e uma capacidade espontânea de não ficar preso por muito tempo.</p>
	    <p>Essa afinidade pode inspirar quem se sente sufocado, mas também pode gerar passividade. Se o vento costuma te carregar, talvez você demore a perceber quando precisa escolher uma direção em vez de apenas seguir o fluxo. No seu melhor, você incorpora uma liberdade tranquila que ajuda o grupo a respirar. Seu desafio é não confundir ser levado pelo vento com saber para onde quer ir.</p>
	`,
	
	"Bard:Breath": `
	    <h3>BARD OF BREATH (BARDO/BARDA DO SUSPIRO)</h3>
	    <p><strong>O que Convida a Destruição do Suspiro.</strong></p>
	    <p>Sua relação com liberdade e movimento pode ser instável e indireta. Às vezes você evita mudanças necessárias, deixa decisões no ar ou cria uma atmosfera onde agir parece cansativo, inútil ou sempre adiável. Sem necessariamente querer, essa postura pode fazer com que o grupo perca impulso, autonomia e vontade de seguir adiante.</p>
	    <p>Mas a destruição do Suspiro nem sempre é inútil. Você pode revelar quando a liberdade de alguém era só fuga, quando uma mudança estava sendo usada para evitar responsabilidade ou quando todos precisavam parar de correr sem direção. O risco é deixar a estagnação agir sem consciência, sufocando também movimentos que ainda eram necessários. No seu melhor, você permite que liberdades vazias caiam para que escolhas mais honestas possam surgir. Seu desafio é perceber quando sua inércia virou vento contrário.</p>
	`,

// --- VOID (VAZIO) ---
	"Maid:Void": `
	    <h3>MAID OF VOID (CRIADA/CRIADO DO VAZIO)</h3>
	    <p><strong>Que Serve o Vazio / Feita(o) de Vazio.</strong></p>
	    <p>Você costuma ser a pessoa que lida com aquilo que fica escondido, ignorado ou sem nome. Quando há segredos, lacunas, desconfortos não ditos ou problemas que ninguém quer encarar diretamente, você acaba assumindo o trabalho silencioso de manter tudo funcionando nos bastidores. Você serve o Vazio criando espaço para o que não pode ou não consegue aparecer ainda.</p>
	    <p>O risco é se acostumar demais com a invisibilidade. Se todos dependem de você para guardar, absorver ou administrar o que permanece oculto, pode parecer mais seguro continuar sendo útil em silêncio do que pedir reconhecimento. No seu melhor, você preserva mistérios, protege vulnerabilidades e dá forma ao potencial que os outros descartaram como nada. Seu desafio é lembrar que servir ao Vazio não significa permitir que tratem você como ausência.</p>
	`,
	
	"Knight:Void": `
	    <h3>KNIGHT OF VOID (CAVALEIRO/CAVALEIRA DO VAZIO)</h3>
	    <p><strong>O que Explora o Vazio / Protege o Vazio.</strong></p>
	    <p>Você usa mistério, silêncio e discrição como armadura. Mesmo quando há muito acontecendo por dentro, sua tendência é parecer difícil de ler, reservado ou distante o suficiente para que ninguém consiga atingir seu ponto vulnerável. Você explora o Vazio como ferramenta prática: guarda informações, esconde intenções, trabalha nos bastidores e protege aquilo que não deve ser exposto antes da hora.</p>
	    <p>O problema é que essa proteção pode virar isolamento. Talvez você mantenha tudo indefinido não porque não sente nada, mas porque ser conhecido demais parece perigoso. No seu melhor, você é a pessoa que sabe agir sem chamar atenção, preservar segredos importantes e proteger o grupo da exposição desnecessária. Seu desafio é entender que privacidade não precisa significar desaparecer completamente.</p>
	`,
	
	"Thief:Void": `
	    <h3>THIEF OF VOID (LADRÃO/LADRA DO VAZIO)</h3>
	    <p><strong>Que Rouba o Vazio (para si).</strong></p>
	    <p>Você deseja controle sobre o que permanece oculto. Quando há segredos, ambiguidades, informações apagadas ou espaços de privacidade circulando ao seu redor, sua tendência é puxar esse Vazio para si: saber o que os outros não sabem, esconder melhor do que todos e manter sua própria presença difícil de localizar.</p>
	    <p>O risco é transformar mistério em vantagem assimétrica. Você pode querer conhecer as cartas escondidas de todo mundo enquanto mantém as suas fora da mesa, criando uma distância que te protege, mas também te separa. No seu melhor, sua habilidade de operar no escuro encontra recursos, segredos e possibilidades que ninguém mais viu. Seu desafio é lembrar que privacidade não precisa virar controle, e que ser impossível de ler também pode impedir que alguém se aproxime de verdade.</p>
	`,
	
	"Mage:Void": `
	    <h3>MAGE OF VOID (MAGO/MAGA DO VAZIO)</h3>
	    <p><strong>O que Entende o Vazio / Entende com o Vazio.</strong></p>
	    <p>Você entende ausência porque já teve que conviver com ela de perto. Irrelevância, silêncio, esquecimento, incerteza ou falta de respostas não são ideias abstratas para você; são experiências que ensinaram como o mundo funciona quando ninguém está olhando. Por isso, você percebe o que foi omitido, o que está faltando e quais verdades estão escondidas justamente pelo espaço que deixaram vazio.</p>
	    <p>Essa compreensão te dá uma sensibilidade rara para o não dito. Você sabe interpretar pausas, lacunas, segredos e contradições sutis, mas também pode se acostumar demais a procurar sentido no escuro. No seu melhor, você revela o valor do que parecia irrelevante e entende mistérios sem precisar destruí-los. Seu desafio é não transformar toda ausência em abandono, nem todo silêncio em ameaça.</p>
	`,
	
	"Witch:Void": `
	    <h3>WITCH OF VOID (BRUXA/BRUXO DO VAZIO)</h3>
	    <p><strong>Que Manipula o Vazio.</strong></p>
	    <p>Você altera o que é conhecido, desconhecido, visível ou oculto. Quando uma verdade parece pesada demais, uma exposição parece perigosa ou uma situação precisa de espaço para respirar, sua tendência é mexer nas fronteiras da informação: esconder, revelar parcialmente, despistar, apagar rastros ou criar uma zona de ambiguidade onde antes havia certeza demais.</p>
	    <p>O risco é se acostumar a tratar a realidade como algo editável. Você pode começar a manipular silêncio, ignorância e mistério para evitar confronto ou controlar como os outros percebem uma situação. No seu melhor, você protege o que não deveria ser exposto e cria possibilidades dentro do desconhecido. Seu desafio é lembrar que alterar o Vazio não te isenta de responsabilidade pelo que fica escondido nele.</p>
	`,
	
	"Prince:Void": `
	    <h3>PRINCE OF VOID (PRÍNCIPE/PRINCESA DO VAZIO)</h3>
	    <p><strong>O que Destrói o Vazio / Destrói com o Vazio.</strong></p>
	    <p>Você tem uma relação tensa com mistério, ambiguidade e falta de resposta. Quando algo está oculto, indefinido ou protegido pelo silêncio, sua tendência é querer arrancar a cobertura e tornar tudo claro, mesmo que a revelação seja desconfortável. Você pode assumir o papel de quem destrói segredos, desfaz ilusões de privacidade e se recusa a deixar perguntas importantes enterradas.</p>
	    <p>Você também pode destruir com o Vazio: apagando importância, retirando sentido ou usando a insignificância das coisas como ferramenta de corte. O perigo é revelar demais ou esvaziar demais, como se tudo precisasse ser exposto ou reduzido a nada para deixar de te ameaçar. No seu melhor, você acaba com zonas de silêncio nocivas e impede que o desconhecido seja usado como prisão. Seu desafio é entender que nem todo mistério é mentira, e nem toda ausência precisa ser preenchida à força. E lembre-se: você não é o protagonista.</p>
	`,
	
	"Sylph:Void": `
	    <h3>SYLPH OF VOID (SÍLFIDE/SILFO DO VAZIO)</h3>
	    <p><strong>Que Cura o Vazio / Conserta o Vazio.</strong></p>
	    <p>Você percebe quando alguém precisa de silêncio, privacidade ou espaço para não ser definido pelo olhar dos outros. Sua resposta natural é oferecer abrigo: guardar confidências, proteger vulnerabilidades, validar sentimentos sem exigir explicação imediata e permitir que pessoas desapareçam um pouco quando o mundo está barulhento demais.</p>
	    <p>Essa cura pode ser profundamente necessária, mas também pode passar do ponto. Nem todo segredo protege; alguns apenas impedem que uma ferida seja tratada. Às vezes, ao tentar preservar o Vazio, você pode ajudar a manter coisas importantes escondidas por tempo demais. No seu melhor, você cura através do silêncio sem transformar silêncio em negação. Seu desafio é saber quando proteger o oculto e quando abrir espaço para que a verdade finalmente respire.</p>
	`,
	
	"Page:Void": `
	    <h3>PAGE OF VOID (ESCUDEIRO/ESCUDEIRA DO VAZIO)</h3>
	    <p><strong>Aquele que Explora o Vazio / Explora através do Vazio.</strong></p>
	    <p>Você começa sua jornada tentando entender o valor do que não aparece. Pode sentir que não tem mistério, substância, importância ou lugar definido; como se tudo em você fosse óbvio demais, apagado demais ou fácil demais de ignorar. O Vazio, para você, aparece primeiro como território a ser explorado: silêncio, anonimato, segredo, potencial escondido e a liberdade de não precisar ser imediatamente compreendido.</p>
	    <p>Ao explorar esse território, você começa a descobrir que ausência não é inutilidade. O que ainda não foi nomeado pode crescer, o que está escondido pode proteger, e o que parece irrelevante pode se tornar essencial no momento certo. No seu melhor, você aprende a agir sem depender do holofote, criando possibilidades a partir do que ninguém estava vendo. Seu desafio é parar de confundir não ser notado com não existir.</p>
	`,
	
	"Rogue:Void": `
	    <h3>ROGUE OF VOID (LADINO/LADINA DO VAZIO)</h3>
	    <p><strong>O que Rouba o Vazio (para redistribuir).</strong></p>
	    <p>Você percebe quando obscuridade, silêncio ou invisibilidade estão mal distribuídos. Sua tendência é deslocar o Vazio: tirar algo do esconderijo quando isso ajuda o grupo, encontrar o que estava perdido, ou então assumir a sombra para que outra pessoa possa ser vista com mais segurança.</p>
	    <p>O risco é usar essa redistribuição para se apagar. Você pode proteger a privacidade dos outros às custas da própria presença, aceitar ser esquecido para evitar exposição alheia ou carregar segredos que não deveriam ser só seus. No seu melhor, você torna o oculto útil, compartilhável e menos solitário. Seu desafio é lembrar que redistribuir o Vazio não significa transformar sua própria existência em nota de rodapé.</p>
	`,
	
	"Seer:Void": `
	    <h3>SEER OF VOID (VIDENTE DO VAZIO)</h3>
	    <p><strong>Que Vê o Vazio / Guia pelo Vazio.</strong></p>
	    <p>Você entende lacunas. Onde outras pessoas entram em pânico por falta de informação, você consegue perceber padrões no silêncio, possibilidades no desconhecido e sentido no que ainda não foi dito. Sua força está em interpretar ausência, mistério, segredo e potencial não realizado sem precisar iluminar tudo imediatamente.</p>
	    <p>Com isso, você pode guiar os outros pelo Vazio: ajudar o grupo a navegar incertezas, respeitar o que precisa permanecer oculto e encontrar caminhos quando não há mapa claro. O risco é se fascinar tanto pelo mistério que respostas simples comecem a parecer decepcionantes, ou que a dúvida vire um lugar confortável demais para sair. No seu melhor, você mostra que nem toda escuridão é ameaça. Seu desafio é lembrar que ver o Vazio também inclui reconhecer quando algo precisa finalmente tomar forma.</p>
	`,
	
	"Heir:Void": `
	    <h3>HEIR OF VOID (HERDEIRO/HERDEIRA DO VAZIO)</h3>
	    <p><strong>O que Herda o Vazio / Protegido(a) pelo Vazio.</strong></p>
	    <p>Você parece naturalmente envolvido por esquecimento, privacidade e mistério. Às vezes as pessoas não notam sua presença, esquecem sua participação ou simplesmente deixam você existir fora do centro da atenção. O Vazio chega até você como uma proteção discreta: menos exposição, menos cobrança direta, mais espaço para ser indefinido.</p>
	    <p>Essa afinidade pode te dar liberdade para observar, criar e existir sem pressão constante, mas também pode gerar isolamento. Se ninguém te vê com clareza, talvez você demore a entender quem é quando não está apenas escapando do olhar alheio. No seu melhor, você incorpora uma tranquilidade misteriosa que permite ao grupo agir fora dos holofotes. Seu desafio é não confundir ser protegido pelo Vazio com ser condenado à irrelevância.</p>
	`,
	
	"Bard:Void": `
	    <h3>BARD OF VOID (BARDO/BARDA DO VAZIO)</h3>
	    <p><strong>O que Convida a Destruição do Vazio.</strong></p>
	    <p>Sua relação com segredo, privacidade e silêncio pode ser descuidada ou instável. Sem necessariamente querer, você cria condições para que coisas ocultas venham à tona: confidências escapam, planos discretos ficam expostos, ambiguidades se desfazem e aquilo que deveria permanecer fora do palco acaba recebendo atenção demais.</p>
	    <p>Mas a destruição do Vazio nem sempre é inútil. Você pode revelar quando um segredo estava protegendo algo tóxico, quando a incerteza estava sendo usada para manipular o grupo ou quando todos precisavam parar de fingir que não sabiam. O risco é deixar a exposição agir sem consciência, destruindo também privacidades que mereciam cuidado. No seu melhor, você permite que silêncios nocivos caiam para que algo mais honesto possa aparecer. Seu desafio é perceber quando sua falta de cuidado com o oculto virou uma forma de revelação forçada.</p>
	`,

// --- LIGHT (LUZ) ---
	"Maid:Light": `
	    <h3>MAID OF LIGHT (CRIADA/CRIADO DA LUZ)</h3>
	    <p><strong>Que Serve a Luz / Feita(o) de Luz.</strong></p>
	    <p>Você costuma ser a pessoa que busca clareza quando todo mundo parece confortável demais no escuro. Quando há confusão, desinformação, falta de direção ou decisões tomadas sem base nenhuma, você tenta pesquisar, organizar dados, encontrar sentido e trazer à tona aquilo que realmente importa. Você serve a Luz criando condições para que o conhecimento circule e para que o grupo não precise agir às cegas.</p>
	    <p>O risco é transformar essa função em cobrança constante. Se todos passam a depender de você como fonte de respostas, pode parecer que você não tem o direito de errar, duvidar ou simplesmente não saber. No seu melhor, você ilumina caminhos, revela informações úteis e ajuda as pessoas a entenderem o que está em jogo. Seu desafio é lembrar que servir à Luz não significa carregar sozinho a obrigação de esclarecer tudo.</p>
	`,
	
	"Knight:Light": `
	    <h3>KNIGHT OF LIGHT (CAVALEIRO/CAVALEIRA DA LUZ)</h3>
	    <p><strong>O que Explora a Luz / Protege a Luz.</strong></p>
	    <p>Você usa conhecimento, atenção e competência como armadura. Mesmo quando tem medo de estar errado, parecer irrelevante ou não saber o suficiente, sua tendência é se apresentar como alguém preparado, informado e capaz de encontrar a resposta certa. Você explora a Luz como ferramenta prática: pesquisa, argumenta, identifica oportunidades e protege o grupo contra ignorância, azar ou decisões mal fundamentadas.</p>
	    <p>O problema é que essa postura pode virar performance. Talvez você se esforce para parecer brilhante porque teme que qualquer falha prove que não merece ser levado a sério. No seu melhor, você é a pessoa que transforma informação em estratégia e clareza em proteção. Seu desafio é entender que admitir dúvida não apaga sua inteligência; às vezes, é justamente o que torna sua luz mais confiável.</p>
	`,
	
	"Thief:Light": `
	    <h3>THIEF OF LIGHT (LADRÃO/LADRA DA LUZ)</h3>
	    <p><strong>Que Rouba a Luz (para si).</strong></p>
	    <p>Você deseja relevância, reconhecimento e a sensação de estar no lugar onde as coisas importantes acontecem. Quando percebe atenção, sorte, informação ou prestígio circulando ao seu redor, sua tendência é puxar essa Luz para si: entrar na conversa certa, assumir a narrativa, buscar o crédito ou garantir que sua versão seja a mais visível.</p>
	    <p>O risco é transformar brilho em disputa. Você pode tratar a atenção dos outros como ameaça, como se a relevância de alguém diminuísse automaticamente a sua. No seu melhor, sua fome por Luz te torna ousado, perceptivo e capaz de agarrar oportunidades que outros deixariam passar. Seu desafio é lembrar que o brilho dos outros não te apaga, e que ser visto não precisa significar deixar alguém na sombra.</p>
	`,
	
	"Mage:Light": `
	    <h3>MAGE OF LIGHT (MAGO/MAGA DA LUZ)</h3>
	    <p><strong>O que Entende a Luz / Entende com a Luz.</strong></p>
	    <p>Você entende informação porque já teve que lidar com o peso dela. Talvez tenha sido ignorado quando sabia a resposta, exposto quando queria privacidade, enganado por dados incompletos ou forçado a descobrir cedo demais que nem toda verdade chega de forma gentil. Para você, conhecimento nunca foi só curiosidade: foi sobrevivência, comparação, reputação e chance.</p>
	    <p>Por isso, você percebe quais detalhes realmente importam. Você sabe quando uma informação muda o rumo da história, quando uma fonte é fraca, quando alguém está manipulando relevância e quando a sorte parece favorecer as pessoas erradas. O risco é se isolar nessa lucidez, como se explicar o que você sabe fosse sempre inútil. Sua evolução começa quando você entende que a Luz não precisa ser uma lâmpada de interrogatório: ela também pode ser uma lanterna entregue na mão de outra pessoa.</p>
	`,
	
	"Witch:Light": `
	    <h3>WITCH OF LIGHT (BRUXA/BRUXO DA LUZ)</h3>
	    <p><strong>Que Manipula a Luz.</strong></p>
	    <p>Você altera o foco. Quando uma situação parece confusa, injusta ou mal interpretada, sua tendência é mexer na forma como a informação aparece: destacar um detalhe, esconder ruído, reorganizar a narrativa, mudar o enquadramento ou mostrar um dado que faz todos olharem para o problema de outro jeito. Sua força está em manipular conhecimento, relevância, sorte e visibilidade.</p>
	    <p>O risco é se acostumar demais a controlar o contexto. Você pode começar a filtrar informações para conduzir as pessoas à conclusão que parece melhor para você, mesmo quando elas precisavam ver o quadro inteiro. No seu melhor, você transforma confusão em clareza estratégica e mostra oportunidades onde ninguém estava olhando. Seu desafio é lembrar que mudar a Luz de lugar não te dá posse sobre o que os outros têm direito de enxergar.</p>
	`,
	
	"Prince:Light": `
	    <h3>PRINCE OF LIGHT (PRÍNCIPE/PRINCESA DA LUZ)</h3>
	    <p><strong>O que Destrói a Luz / Destrói com a Luz.</strong></p>
	    <p>Você tem uma relação tensa com informação, relevância e reconhecimento. Quando uma verdade parece inconveniente, uma narrativa parece inflada ou alguém recebe atenção que você considera injustificada, sua tendência é querer cortar essa Luz pela raiz. Você pode assumir o papel de quem desmonta reputações falsas, apaga explicações ruins e destrói certezas que pareciam brilhantes demais para serem questionadas.</p>
	    <p>Você também pode destruir com a Luz: usando fatos, exposição e crítica como instrumentos de corte. O perigo é transformar clareza em sentença, revelando demais, humilhando demais ou reduzindo pessoas a seus erros mais visíveis. No seu melhor, você acaba com ilusões de importância e impede que mentiras se escondam atrás de prestígio. Seu desafio é entender que a verdade não perde força quando vem acompanhada de responsabilidade.</p>
	`,
	
	"Sylph:Light": `
	    <h3>SYLPH OF LIGHT (SÍLFIDE/SILFO DA LUZ)</h3>
	    <p><strong>Que Cura a Luz / Conserta a Luz.</strong></p>
	    <p>Você percebe quando alguém está perdido por falta de informação, contexto ou reconhecimento. Confusão, ignorância, má interpretação e invisibilidade chamam sua atenção rapidamente. Sua resposta natural é tentar esclarecer: explicar, ensinar, contextualizar, organizar dados e ajudar a pessoa a enxergar o que antes estava embaralhado.</p>
	    <p>Essa ajuda pode ser profundamente valiosa, mas também pode passar do ponto. Nem toda dúvida precisa ser resolvida imediatamente, e nem toda pessoa quer receber uma aula no meio do próprio processo. No seu melhor, você cura distorções, devolve clareza e ajuda talentos ignorados a serem reconhecidos. Seu desafio é lembrar que consertar a Luz não significa decidir sozinho o que os outros precisam ver.</p>
	`,
	
	"Page:Light": `
	    <h3>PAGE OF LIGHT (ESCUDEIRO/ESCUDEIRA DA LUZ)</h3>
	    <p><strong>Aquele que Explora a Luz / Explora através da Luz.</strong></p>
	    <p>Você começa sua jornada tentando entender relevância. Pode sentir que não sabe o suficiente, que não tem sorte, que ninguém percebe seu valor ou que as respostas importantes estão sempre fora do seu alcance. A Luz, para você, aparece primeiro como território a ser explorado: conhecimento, visibilidade, oportunidade, reconhecimento e a sensação de finalmente entender o que está acontecendo.</p>
	    <p>Ao explorar esse território, você começa a descobrir que brilho não é algo que precisa cair pronto no seu colo. Ele pode ser construído com curiosidade, paciência, tentativa e acúmulo. No seu melhor, você transforma insegurança em aprendizado e passa de alguém que buscava respostas para alguém capaz de iluminar caminhos próprios. Seu desafio é parar de confundir ainda não saber com não ter valor.</p>
	`,
	
	"Rogue:Light": `
	    <h3>ROGUE OF LIGHT (LADINO/LADINA DA LUZ)</h3>
	    <p><strong>O que Rouba a Luz (para redistribuir).</strong></p>
	    <p>Você percebe quando atenção, sorte, informação ou reconhecimento estão concentrados demais em um só lugar. Sua tendência é deslocar essa Luz: dividir crédito, revelar uma informação útil para quem estava no escuro, tirar alguém injustamente ignorado da sombra ou redirecionar o foco para quem precisa ser visto.</p>
	    <p>O risco é usar essa redistribuição para fugir do próprio brilho. Você pode diminuir suas conquistas, chamar talento de sorte ou entregar aos outros uma relevância que também era sua. No seu melhor, você torna a Luz mais justa, compartilhável e menos dependente de um único protagonista. Seu desafio é lembrar que redistribuir reconhecimento não significa apagar seu próprio nome da história.</p>
	`,
	
	"Seer:Light": `
	    <h3>SEER OF LIGHT (VIDENTE DA LUZ)</h3>
	    <p><strong>Que Vê a Luz / Guia pela Luz.</strong></p>
	    <p>Você enxerga relevância. Em meio a excesso de ruído, você percebe qual detalhe merece atenção, qual informação está sendo ignorada e qual oportunidade tem peso real. Sua força não está apenas em saber coisas, mas em entender quais conhecimentos importam, quais pistas mudam o rumo da situação e onde a sorte ou a visibilidade estão influenciando o resultado.</p>
	    <p>Com isso, você pode guiar os outros pela Luz: apontar caminhos promissores, destacar informações decisivas, mostrar o que estava sendo negligenciado e ajudar o grupo a agir com mais clareza. O risco é ficar frustrado quando os outros não enxergam o óbvio para você, ou passar tempo demais tentando provar que sua leitura é a mais relevante. Seu desafio é lembrar que iluminar o caminho não é o mesmo que arrastar todo mundo por ele.</p>
	`,
	
	"Heir:Light": `
	    <h3>HEIR OF LIGHT (HERDEIRO/HERDEIRA DA LUZ)</h3>
	    <p><strong>O que Herda a Luz / Protegido(a) pela Luz.</strong></p>
	    <p>Você parece naturalmente envolvido por informação, sorte e visibilidade. Respostas aparecem no momento certo, oportunidades surgem quando seriam mais úteis, e às vezes as pessoas prestam atenção em você antes mesmo que você entenda por quê. A Luz chega até você como clareza espontânea, relevância herdada ou uma facilidade curiosa para estar perto do que importa.</p>
	    <p>Essa afinidade pode inspirar os outros e abrir caminhos, mas também pode gerar passividade. Se a resposta costuma aparecer, talvez você demore a aprender como procurá-la quando ela não vem. No seu melhor, você incorpora uma clareza tranquila que ajuda o grupo a confiar no caminho. Seu desafio é não confundir sorte com mérito automático, nem visibilidade com compreensão verdadeira.</p>
	`,
	
	"Bard:Light": `
	    <h3>BARD OF LIGHT (BARDO/BARDA DA LUZ)</h3>
	    <p><strong>O que Convida a Destruição da Luz.</strong></p>
	    <p>Sua relação com informação, atenção e clareza pode ser instável e indireta. Às vezes você deixa uma confusão crescer, ignora um dado importante, permite que conclusões erradas circulem ou trata a busca por relevância como algo ridículo demais para levar a sério. Sem necessariamente querer, essa postura pode criar condições para que o grupo perca direção, confiança nos fatos ou senso do que realmente importa.</p>
	    <p>Mas a destruição da Luz nem sempre é inútil. Você pode revelar quando uma verdade era usada como arma, quando uma reputação dependia de prestígio vazio ou quando todos estavam seguindo uma "resposta certa" que ninguém questionava. O risco é deixar o caos informacional agir sem consciência, destruindo também clarezas que ainda eram necessárias. No seu melhor, você permite que certezas falsas caiam para que uma compreensão mais honesta possa surgir. Seu desafio é perceber quando sua negligência com a Luz virou desinformação, não libertação.</p>
	`,

	// --- SPACE (ESPAÇO) ---
	"Maid:Space": `
	    <h3>MAID OF SPACE (CRIADA/CRIADO DO ESPAÇO)</h3>
	    <p><strong>Que Serve o Espaço / Feita(o) de Espaço.</strong></p>
	    <p>Você costuma ser a pessoa que cria as condições materiais para que as coisas aconteçam. Enquanto os outros falam de ideias, planos e intenções, você percebe o chão, os recursos, o ambiente, o tempo de maturação e a estrutura necessária para algo realmente tomar forma. Você serve o Espaço oferecendo base: organiza, acomoda, prepara, preserva e dá lugar para que pessoas, projetos e possibilidades possam existir.</p>
	    <p>O risco é transformar essa função em apagamento. Se todos se acostumam com você como a infraestrutura silenciosa do grupo, pode parecer que seu valor está apenas em ceder espaço, resolver logística ou sustentar o ambiente dos outros. No seu melhor, você materializa potencial e torna a criação possível. Seu desafio é lembrar que servir ao Espaço não significa virar parte da mobília; você também tem direito a ocupar lugar no mundo que ajuda a construir.</p>
	`,
	
	"Knight:Space": `
	    <h3>KNIGHT OF SPACE (CAVALEIRO/CAVALEIRA DO ESPAÇO)</h3>
	    <p><strong>O que Explora o Espaço / Protege o Espaço.</strong></p>
	    <p>Você usa competência material, estética ou criativa como armadura. Mesmo quando se sente deslocado, pequeno ou inseguro sobre seu lugar no mundo, sua tendência é parecer capaz o suficiente para resolver qualquer problema prático. Você explora o Espaço como ferramenta: organiza ambientes, domina técnicas, protege recursos, constrói soluções e garante que os outros tenham onde ficar, criar ou respirar.</p>
	    <p>O problema é que essa competência pode virar performance. Talvez você se mantenha útil, estiloso, prático ou aparentemente tranquilo para que ninguém perceba o quanto às vezes se sente fora de lugar. No seu melhor, você protege o espaço físico e criativo do grupo com precisão e cuidado. Seu desafio é entender que ter lugar no mundo não precisa depender apenas daquilo que você consegue fazer pelos outros.</p>
	`,
	
	"Thief:Space": `
	    <h3>THIEF OF SPACE (LADRÃO/LADRA DO ESPAÇO)</h3>
	    <p><strong>Que Rouba o Espaço (para si).</strong></p>
	    <p>Você deseja território, presença e liberdade criativa. Quando percebe espaço, recursos, atenção estética ou potencial de criação circulando ao seu redor, sua tendência é puxar isso para si: assumir a direção visual de um projeto, ocupar o ambiente com suas ideias, reivindicar materiais ou tomar a frente porque acredita que pode fazer melhor uso daquilo.</p>
	    <p>O risco é transformar criação em posse. Você pode ocupar tanto espaço físico ou criativo que os outros ficam sem margem para experimentar, errar ou crescer ao próprio ritmo. No seu melhor, sua ambição expande possibilidades e faz projetos saírem do campo da ideia para algo grandioso. Seu desafio é lembrar que ocupar espaço não precisa significar diminuir o espaço de todo mundo ao redor.</p>
	`,
	
	"Mage:Space": `
	    <h3>MAGE OF SPACE (MAGO/MAGA DO ESPAÇO)</h3>
	    <p><strong>O que Entende o Espaço / Entende com o Espaço.</strong></p>
	    <p>Você entende criação, matéria e distância porque já teve que lidar com os custos concretos disso. Talvez conheça bem o isolamento, o desconforto físico, a frustração de uma tela em branco ou o peso de perceber que fazer algo existir exige tempo, recurso, técnica e paciência. Para você, criar nunca foi apenas inspiração: foi confronto com limite, material e forma.</p>
	    <p>Essa experiência te dá uma compreensão precisa de estrutura. Você percebe onde um projeto não se sustenta, onde um ambiente sufoca, onde falta espaço para crescer e qual esforço real existe por trás de qualquer coisa bem feita. O risco é se paralisar justamente por saber demais sobre a dificuldade de começar. No seu melhor, você transforma conhecimento técnico e sensibilidade espacial em criação consciente. Seu desafio é lembrar que entender o peso da criação não precisa impedir você de criar.</p>
	`,
	
	"Witch:Space": `
	    <h3>WITCH OF SPACE (BRUXA/BRUXO DO ESPAÇO)</h3>
	    <p><strong>Que Manipula o Espaço.</strong></p>
	    <p>Você altera limites físicos, criativos e ambientais. Quando um lugar parece pequeno demais, uma regra criativa parece estreita ou uma estrutura parece impedir o crescimento, sua tendência é mexer na forma das coisas: reorganizar o ambiente, mudar proporções, abrir caminhos, adaptar materiais e reinventar o espaço disponível até que algo novo caiba ali.</p>
	    <p>O risco é se acostumar a moldar tudo ao seu redor pela própria necessidade de expansão. Você pode tratar limites alheios como obstáculos, mexer em ambientes sem pedir ou transformar a dinâmica de um grupo para que ela orbite sua visão. No seu melhor, você liberta o Espaço de formas rígidas e mostra que sempre existe outro arranjo possível. Seu desafio é lembrar que manipular o Espaço também exige respeitar o lugar que pertence aos outros.</p>
	`,
	
	"Prince:Space": `
	    <h3>PRINCE OF SPACE (PRÍNCIPE/PRINCESA DO ESPAÇO)</h3>
	    <p><strong>O que Destrói o Espaço / Destrói com o Espaço.</strong></p>
	    <p>Você tem uma relação tensa com excesso, desordem, potencial disperso e criação sem forma. Quando algo parece caótico, mal planejado, grande demais ou cheio de possibilidades inúteis, sua tendência é cortar, limpar, reduzir e eliminar o que considera ruído. Você pode assumir o papel de quem destrói acúmulos, simplifica ambientes e encerra projetos que nunca saem do lugar.</p>
	    <p>Você também pode destruir com o Espaço: usando distância, ausência ou remoção como forma de resolver problemas. O perigo é cortar mais do que precisava, descartando processos ainda vivos só porque eram imperfeitos, lentos ou bagunçados. No seu melhor, você abre espaço ao remover o que sufoca a criação. Seu desafio é entender que nem toda bagunça é desperdício; às vezes, o processo criativo precisa de espaço para ser feio antes de encontrar forma.</p>
	`,
	
	"Sylph:Space": `
	    <h3>SYLPH OF SPACE (SÍLFIDE/SILFO DO ESPAÇO)</h3>
	    <p><strong>Que Cura o Espaço / Conserta o Espaço.</strong></p>
	    <p>Você percebe quando um ambiente, projeto ou processo criativo está desalinhado. Espaços desconfortáveis, objetos fora de lugar, ideias travadas, excesso de bagunça ou falta de estrutura chamam sua atenção rapidamente. Sua resposta natural é tentar consertar: reorganizar, sugerir, preparar materiais, melhorar o fluxo e ajudar aquilo a se tornar mais habitável ou mais fértil.</p>
	    <p>Essa ajuda pode ser profundamente valiosa, mas também pode passar do ponto. Nem todo espaço precisa ser arrumado do seu jeito, e nem toda criação alheia precisa da sua mão para amadurecer. Às vezes, ao tentar curar o Espaço, você pode invadir o processo dos outros antes que eles descubram a própria forma. No seu melhor, você restaura ambientes e ajuda ideias a nascerem com cuidado. Seu desafio é lembrar que consertar o Espaço também significa respeitar a bagunça necessária de quem ainda está criando.</p>
	`,
	
	"Page:Space": `
	    <h3>PAGE OF SPACE (ESCUDEIRO/ESCUDEIRA DO ESPAÇO)</h3>
	    <p><strong>Aquele que Explora o Espaço / Explora através do Espaço.</strong></p>
	    <p>Você começa sua jornada tentando entender lugar, criação e presença. Pode se sentir pequeno, deslocado, sem território próprio ou inseguro diante da imensidão de possibilidades ao seu redor. O Espaço, para você, aparece primeiro como território a ser explorado: ambientes, materiais, corpo, criatividade, solidão, distância e a capacidade de fazer algo existir do zero.</p>
	    <p>Ao explorar esse território, você começa a descobrir que ocupar espaço é um aprendizado. Criar não exige nascer grandioso; exige experimentar formas, testar limites, aceitar tentativas imperfeitas e permitir que algo cresça aos poucos. No seu melhor, você transforma sensação de pequenez em potência expansiva, mostrando que até um ponto aparentemente insignificante pode abrir um universo. Seu desafio é parar de esperar um lugar pronto e começar a construir o seu.</p>
	`,
	
	"Rogue:Space": `
	    <h3>ROGUE OF SPACE (LADINO/LADINA DO ESPAÇO)</h3>
	    <p><strong>O que Rouba o Espaço (para redistribuir).</strong></p>
	    <p>Você percebe quando espaço, recursos, conforto ou possibilidade criativa estão mal distribuídos. Sua tendência é deslocar o Espaço para quem parece precisar mais: abrir lugar para alguém falar, ceder materiais, adaptar ambientes, facilitar projetos ou diminuir sua própria presença para que outra pessoa consiga crescer.</p>
	    <p>O risco é usar essa redistribuição para fugir da própria autoria. Você pode abrir tanto espaço para os outros que seus projetos, desejos e presença acabam ficando sempre para depois. No seu melhor, você torna o Espaço mais justo, habitável e compartilhável. Seu desafio é lembrar que redistribuir espaço não significa se encolher até desaparecer; você também tem direito de deixar marca.</p>
	`,
	
	"Seer:Space": `
	    <h3>SEER OF SPACE (VIDENTE DO ESPAÇO)</h3>
	    <p><strong>Que Vê o Espaço / Guia pelo Espaço.</strong></p>
	    <p>Você enxerga o quadro geral. Onde outras pessoas se prendem a detalhes imediatos, você percebe contexto, proporção, ambiente, relações entre partes e o potencial de algo que ainda não tomou forma. Sua força está em entender como as coisas se encaixam, onde há espaço para crescer e que tipo de estrutura uma criação precisa para existir.</p>
	    <p>Com isso, você pode guiar os outros pelo Espaço: apontar possibilidades, organizar perspectivas, mostrar como um projeto pode se desenvolver e ajudar o grupo a respeitar o ritmo natural das coisas. O risco é observar tantas formas possíveis que escolher uma se torna difícil, ou desenhar mapas de lugares onde você mesmo nunca pisa. No seu melhor, você oferece visão ampla sem perder o mundo concreto. Seu desafio é lembrar que ver o espaço de criação não substitui criar dentro dele.</p>
	`,
	
	"Heir:Space": `
	    <h3>HEIR OF SPACE (HERDEIRO/HERDEIRA DO ESPAÇO)</h3>
	    <p><strong>O que Herda o Espaço / Protegido(a) pelo Espaço.</strong></p>
	    <p>Você parece naturalmente envolvido por ambientes, objetos, criação e possibilidade. Pessoas, recursos, responsabilidades criativas ou lugares tendem a se organizar ao seu redor, como se o mundo físico abrisse espaço para você ocupar. O Espaço chega até você como presença, território, matéria disponível e uma afinidade espontânea com o ato de criar ou preservar.</p>
	    <p>Essa afinidade pode tornar você uma presença estabilizadora, alguém ao redor de quem as coisas encontram forma. Mas também pode gerar passividade: se o espaço vem até você, talvez você demore a questionar se aquele lugar realmente foi escolhido ou apenas herdado. No seu melhor, você incorpora uma criatividade paciente que ajuda o grupo a se enraizar. Seu desafio é não apenas aceitar o espaço que te deram, mas decidir que tipo de mundo você quer construir dentro dele.</p>
	`,
	
	"Bard:Space": `
	    <h3>BARD OF SPACE (BARDO/BARDA DO ESPAÇO)</h3>
	    <p><strong>O que Convida a Destruição do Espaço.</strong></p>
	    <p>Sua relação com criação, ambiente e manutenção pode ser instável e indireta. Às vezes você deixa projetos se acumularem sem forma, ignora problemas materiais, abandona espaços que precisavam de cuidado ou trata o processo criativo como algo que pode esperar indefinidamente. Sem necessariamente querer, essa postura cria condições para que potencial se perca, ambientes se deteriorem e possibilidades deixem de ter onde crescer.</p>
	    <p>Mas a destruição do Espaço nem sempre é inútil. Você pode revelar quando um projeto só existia por obrigação, quando um ambiente estava sustentando uma vida que ninguém queria mais ou quando a criação precisava parar de ser preservada a qualquer custo. O risco é deixar o abandono agir sem consciência, destruindo também coisas que ainda mereciam cuidado. No seu melhor, você permite que formas gastas caiam para que algo mais honesto possa ocupar lugar. Seu desafio é perceber quando sua negligência com o Espaço virou perda, não libertação.</p>
	`,

	// --- TIME (TEMPO) ---
	"Maid:Time": `
	    <h3>MAID OF TIME (CRIADA/CRIADO DO TEMPO)</h3>
	    <p><strong>Que Serve o Tempo / Feita(o) de Tempo.</strong></p>
	    <p>Você costuma ser a pessoa que mantém o ritmo quando tudo ao redor ameaça se atrasar, repetir ou desandar. Quando prazos, ciclos, urgências e encerramentos são ignorados, você tenta organizar o fluxo: lembra o que precisa ser feito, marca o momento certo de agir e ajuda o grupo a não perder oportunidades importantes.</p>
	    <p>O risco é transformar essa função em cansaço constante. Se todos dependem de você para manter o tempo funcionando, pode parecer que descansar, atrasar ou simplesmente viver sem cronograma é um luxo que você não tem. No seu melhor, você cria continuidade, encerra o que precisa acabar e faz as coisas seguirem no ritmo necessário. Seu desafio é lembrar que servir ao Tempo não significa transformar todos os seus momentos em obrigação.</p>
	`,
	
	"Knight:Time": `
	    <h3>KNIGHT OF TIME (CAVALEIRO/CAVALEIRA DO TEMPO)</h3>
	    <p><strong>O que Explora o Tempo / Protege o Tempo.</strong></p>
	    <p>Você usa ritmo, prontidão e eficiência como armadura. Mesmo quando está inseguro, sua tendência é parecer preparado para agir no instante certo: resolver crises, aproveitar oportunidades, responder rápido e impedir que o grupo perca o compasso. Você explora o Tempo como ferramenta prática, transformando urgência, repetição e experiência em proteção.</p>
	    <p>O problema é que essa prontidão pode virar performance. Talvez você se mova o tempo todo porque parar parece abrir espaço para dúvida, falha ou sensação de insuficiência. No seu melhor, você é a pessoa que mantém todos vivos quando o momento exige ação. Seu desafio é entender que proteger o Tempo não exige viver como se cada segundo fosse uma emergência.</p>
	`,
	
	"Thief:Time": `
	    <h3>THIEF OF TIME (LADRÃO/LADRA DO TEMPO)</h3>
	    <p><strong>Que Rouba o Tempo (para si).</strong></p>
	    <p>Você deseja oportunidade, ritmo próprio e a chance de chegar antes que a janela se feche. Quando percebe tempo, atenção ou momento favorável circulando ao seu redor, sua tendência é puxar isso para si: tomar a dianteira, acelerar decisões, cortar espera e garantir que sua prioridade não fique presa no ritmo dos outros.</p>
	    <p>O risco é transformar urgência em atropelo. Você pode usar o tempo alheio como extensão do seu, interromper processos que ainda precisavam maturar ou agir como se a demora dos outros fosse sempre incompetência. No seu melhor, sua ambição captura oportunidades raras e impede que o grupo fique paralisado. Seu desafio é lembrar que vencer o relógio não precisa significar roubar o compasso de todo mundo.</p>
	`,
	
	"Mage:Time": `
	    <h3>MAGE OF TIME (MAGO/MAGA DO TEMPO)</h3>
	    <p><strong>O que Entende o Tempo / Entende com o Tempo.</strong></p>
	    <p>Você entende ciclos, perdas e consequências porque já teve que aprender com eles de perto. Talvez conheça bem a sensação de oportunidade perdida, repetição cansativa, mudança inevitável ou fim chegando antes que alguém estivesse pronto. Para você, o Tempo não é teoria: é experiência acumulada, memória, ritmo e custo.</p>
	    <p>Essa vivência te dá uma noção precisa de quando insistir, quando parar e quando agir antes que seja tarde. Você percebe padrões que se repetem, processos que estão chegando ao limite e momentos que não vão voltar. O risco é se tornar impaciente ou fatalista, como se entender o fim tornasse inútil aproveitar o caminho. No seu melhor, você transforma experiência em orientação prática. Seu desafio é não deixar o conhecimento da finitude te impedir de viver o presente.</p>
	`,
	
	"Witch:Time": `
	    <h3>WITCH OF TIME (BRUXA/BRUXO DO TEMPO)</h3>
	    <p><strong>Que Manipula o Tempo.</strong></p>
	    <p>Você altera ritmo, duração e ordem. Quando uma situação parece lenta demais, urgente demais ou presa a um ciclo inevitável, sua tendência é mexer no fluxo: acelerar, adiar, repetir, interromper, estender ou reorganizar o momento até que ele sirva melhor ao que você quer realizar.</p>
	    <p>O risco é se acostumar a dobrar o tempo pela própria vontade. Você pode procrastinar até transformar tudo em crise, tentar comprimir processos que precisavam de maturação ou estender situações que já pediam encerramento. No seu melhor, você quebra ciclos engessados e cria oportunidades onde o relógio parecia ter fechado a porta. Seu desafio é lembrar que manipular o ritmo não elimina as consequências do tempo que passou.</p>
	`,
	
	"Prince:Time": `
	    <h3>PRINCE OF TIME (PRÍNCIPE/PRINCESA DO TEMPO)</h3>
	    <p><strong>O que Destrói o Tempo / Destrói com o Tempo.</strong></p>
	    <p>Você tem uma relação tensa com espera, repetição e processos longos. Quando algo parece velho, atrasado, inútil ou preso em um ciclo sem saída, sua tendência é cortar o tempo daquilo: encerrar, acelerar, pular etapas ou destruir uma rotina antes que ela continue consumindo energia.</p>
	    <p>Você também pode destruir com o Tempo, usando finais, atrasos, desgaste ou urgência como instrumentos de corte. O perigo é confundir maturação com demora e processo com desperdício, encerrando coisas que ainda precisavam de tempo para revelar seu valor. No seu melhor, você rompe ciclos esgotados e impede que todos continuem presos a uma contagem regressiva sem sentido. Seu desafio é entender que nem toda espera é estagnação; algumas coisas precisam durar para se transformar.</p>
	`,
	
	"Sylph:Time": `
	    <h3>SYLPH OF TIME (SÍLFIDE/SILFO DO TEMPO)</h3>
	    <p><strong>Que Cura o Tempo / Conserta o Tempo.</strong></p>
	    <p>Você percebe quando alguém está fora de ritmo. Ansiedade por prazo, pressa excessiva, repetição dolorosa, dificuldade de encerrar ciclos ou medo de perder tempo chamam sua atenção rapidamente. Sua resposta natural é tentar ajustar o compasso: organizar etapas, lembrar que certas dores precisam de duração e ajudar as pessoas a atravessarem mudanças sem se despedaçar no processo.</p>
	    <p>Essa ajuda pode ser profundamente necessária, mas também pode passar do ponto. Nem todo ritmo precisa ser corrigido por você, e nem toda pessoa quer que sua vida vire um cronograma mais saudável. Às vezes, ao tentar curar o Tempo, você pode acabar microgerenciando processos que precisavam ser vividos de forma imperfeita. No seu melhor, você ajuda ciclos a se fecharem e feridas a amadurecerem. Seu desafio é lembrar que consertar o Tempo não significa controlar cada segundo da recuperação dos outros.</p>
	`,
	
	"Page:Time": `
	    <h3>PAGE OF TIME (ESCUDEIRO/ESCUDEIRA DO TEMPO)</h3>
	    <p><strong>Aquele que Explora o Tempo / Explora através do Tempo.</strong></p>
	    <p>Você começa sua jornada tentando entender ritmo, oportunidade e persistência. Pode sentir que está sempre atrasado, fora de compasso, impaciente demais ou incapaz de usar bem o próprio tempo. O Tempo, para você, aparece primeiro como território a ser explorado: repetição, espera, prática, memória, mudança e a chance de transformar erro em experiência.</p>
	    <p>Ao explorar esse território, você começa a descobrir que crescer não é apenas correr mais rápido. Às vezes é repetir até aprender, esperar o momento certo, aceitar finais e continuar mesmo depois de falhar. No seu melhor, você transforma atraso em maturidade e persistência em força real. Seu desafio é parar de medir sua jornada pelo relógio dos outros e começar a reconhecer o valor do seu próprio ritmo.</p>
	`,
	
	"Rogue:Time": `
	    <h3>ROGUE OF TIME (LADINO/LADINA DO TEMPO)</h3>
	    <p><strong>O que Rouba o Tempo (para redistribuir).</strong></p>
	    <p>Você percebe quando tempo, urgência ou oportunidades estão mal distribuídos. Sua tendência é deslocar o Tempo para quem parece precisar mais: cobrir alguém sobrecarregado, abrir uma janela para outra pessoa agir, assumir uma espera difícil ou reorganizar tarefas para que o grupo tenha fôlego.</p>
	    <p>O risco é tirar tempo demais de si mesmo nesse processo. Você pode adiar seus próprios planos, sacrificar descanso ou viver no ritmo das necessidades alheias até esquecer que seu relógio também importa. No seu melhor, você torna o Tempo mais justo e cria oportunidades compartilhadas. Seu desafio é lembrar que redistribuir tempo não significa gastar toda a sua vida mantendo a dos outros em movimento.</p>
	`,
	
	"Seer:Time": `
	    <h3>SEER OF TIME (VIDENTE DO TEMPO)</h3>
	    <p><strong>Que Vê o Tempo / Guia pelo Tempo.</strong></p>
	    <p>Você enxerga ciclos, consequências e direções temporais. Enquanto outras pessoas reagem apenas ao momento presente, você percebe padrões que se repetem, sinais de desgaste, oportunidades se aproximando e escolhas que provavelmente cobrarão preço mais tarde. Sua força está em entender ritmo, memória, causa e fim.</p>
	    <p>Com isso, você pode guiar os outros pelo Tempo: avisar quando algo precisa começar, quando precisa acabar, quando é melhor esperar e quando a demora já virou risco. O perigo é viver tanto no antes e no depois que o agora pareça apenas uma peça em uma linha maior. No seu melhor, você ajuda o grupo a agir com timing e perspectiva. Seu desafio é lembrar que ver o futuro provável não substitui participar do presente.</p>
	`,
	
	"Heir:Time": `
	    <h3>HEIR OF TIME (HERDEIRO/HERDEIRA DO TEMPO)</h3>
	    <p><strong>O que Herda o Tempo / Protegido(a) pelo Tempo.</strong></p>
	    <p>Você parece naturalmente envolvido por ritmo, oportunidade e inevitabilidade. As coisas chegam até você no momento certo, ciclos se fecham ao seu redor, e muitas vezes você se adapta às mudanças como se já soubesse, instintivamente, que tudo passa. O Tempo chega até você como timing, memória, transformação e uma estranha familiaridade com finais.</p>
	    <p>Essa afinidade pode te tornar paciente, resiliente e capaz de atravessar mudanças que desestabilizariam outras pessoas. Mas também pode gerar passividade: se tudo passa, talvez você demore a intervir quando algo precisava de escolha ativa. No seu melhor, você incorpora o ritmo dos ciclos e ajuda o grupo a aceitar mudança sem desespero. Seu desafio é não confundir deixar o tempo agir com deixar a própria vida acontecer sem você.</p>
	`,
	
	"Bard:Time": `
	    <h3>BARD OF TIME (BARDO/BARDA DO TEMPO)</h3>
	    <p><strong>O que Convida a Destruição do Tempo.</strong></p>
	    <p>Sua relação com ritmo, prazo e continuidade pode ser instável e indireta. Às vezes você deixa oportunidades passarem, permite que atrasos se acumulem ou trata a urgência como algo que pode ser ignorado até que o próprio tempo resolva — ou destrua — a situação. Sem necessariamente querer, essa postura cria condições para que ciclos se quebrem, processos percam o compasso e finais cheguem antes que alguém esteja preparado.</p>
	    <p>Mas a destruição do Tempo nem sempre é inútil. Você pode revelar quando um cronograma era insustentável, quando uma espera só servia para adiar o inevitável ou quando todos estavam presos a um ritmo que já não fazia sentido. O risco é deixar o colapso temporal agir sem consciência, destruindo também oportunidades que ainda podiam ser salvas. No seu melhor, você permite que ritmos falsos caiam para que um tempo mais honesto possa surgir. Seu desafio é perceber quando sua negligência com o Tempo virou perda, não libertação.</p>
	`,

    // --- HEART (CORAÇÃO) ---
	"Maid:Heart": `
	    <h3>MAID OF HEART (CRIADA/CRIADO DO CORAÇÃO)</h3>
	    <p><strong>Que Serve o Coração / Feita(o) de Coração.</strong></p>
	    <p>Você costuma ser a pessoa que mantém a dimensão emocional e identitária das coisas viva. Quando o ambiente fica apático, automático ou superficial demais, você tenta lembrar as pessoas do que sentem, do que desejam e de quem são por trás das funções que desempenham. Você serve o Coração criando espaço para autenticidade, paixão, expressão pessoal e reconhecimento emocional.</p>
	    <p>O risco é transformar essa função em trabalho constante. Se todos passam a depender de você para nomear sentimentos, sustentar a intensidade ou manter o grupo conectado com sua própria humanidade, sua identidade pode começar a parecer menos uma experiência íntima e mais uma obrigação pública. No seu melhor, você ajuda pessoas a existirem de forma mais verdadeira. Seu desafio é lembrar que servir ao Coração não significa carregar sozinho a alma de todo mundo.</p>
	`,
	
	"Knight:Heart": `
	    <h3>KNIGHT OF HEART (CAVALEIRO/CAVALEIRA DO CORAÇÃO)</h3>
	    <p><strong>O que Explora o Coração / Protege o Coração.</strong></p>
	    <p>Você usa personalidade, emoção e carisma como armadura. Mesmo quando se sente inseguro sobre ser amado, compreendido ou desejado, sua tendência é apresentar uma versão forte de si: engraçada, intensa, charmosa, dramática, independente ou impossível de ignorar. Você explora o Coração como ferramenta prática, usando identidade e afeto para proteger a si mesmo e aos outros.</p>
	    <p>O problema é que essa expressão pode virar performance. Talvez você mostre uma versão bem editada do seu coração para esconder a parte que realmente teme rejeição. No seu melhor, você protege a individualidade das pessoas e dá coragem para que elas sejam quem são. Seu desafio é entender que ser querido não precisa depender de manter uma persona sempre funcional, interessante ou invulnerável.</p>
	`,
	
	"Thief:Heart": `
	    <h3>THIEF OF HEART (LADRÃO/LADRA DO CORAÇÃO)</h3>
	    <p><strong>Que Rouba o Coração (para si).</strong></p>
	    <p>Você deseja intensidade, identidade e a sensação de ser emocionalmente indispensável. Quando percebe afeto, admiração, desejo ou autenticidade circulando ao seu redor, sua tendência é puxar essa energia para si: querer ser o centro emocional da história, a pessoa mais marcante, o amor mais inesquecível ou a personalidade mais forte da sala.</p>
	    <p>O risco é transformar identidade em apropriação. Você pode absorver trejeitos, papéis, gostos ou narrativas de outras pessoas para fortalecer o próprio senso de eu, ou buscar confirmação emocional constante para se sentir real. No seu melhor, sua fome de Coração te torna magnético, expressivo e capaz de reivindicar uma identidade poderosa. Seu desafio é lembrar que o brilho emocional dos outros não ameaça o seu, e que amar não significa fazer alguém virar espelho da sua própria existência.</p>
	`,
	
	"Mage:Heart": `
	    <h3>MAGE OF HEART (MAGO/MAGA DO CORAÇÃO)</h3>
	    <p><strong>O que Entende o Coração / Entende com o Coração.</strong></p>
	    <p>Você entende identidade, desejo e emoção porque já precisou encarar essas coisas de perto. Talvez tenha aprendido através de rejeição, paixão, autodescoberta difícil, conflitos íntimos ou da experiência de perceber que pessoas raramente são tão simples quanto dizem ser. Para você, o Coração não é teoria: é contradição vivida, instinto, máscara, vontade e ferida.</p>
	    <p>Essa experiência te dá uma percepção afiada sobre motivações e autenticidade. Você percebe quando alguém está performando, se escondendo ou agindo contra o que realmente deseja. O risco é confiar tanto nessa leitura que você passa a tratar seus instintos como verdades absolutas. No seu melhor, você entende as pessoas em profundidade sem reduzi-las ao que acha que viu nelas. Seu desafio é transformar sensibilidade emocional em sabedoria, não em sentença.</p>
	`,
	
	"Witch:Heart": `
	    <h3>WITCH OF HEART (BRUXA/BRUXO DO CORAÇÃO)</h3>
	    <p><strong>Que Manipula o Coração.</strong></p>
	    <p>Você altera identidades, emoções e papéis. Sua percepção de si mesmo não é fixa: você entende que diferentes contextos pedem diferentes versões de uma pessoa, e sabe mudar tom, presença, intensidade e expressão emocional para provocar efeitos reais. Sua força está em mexer com a forma como as pessoas se sentem, se veem e se relacionam com o próprio desejo.</p>
	    <p>O risco é se acostumar demais a moldar sentimentos. Você pode tratar emoções como ferramentas, máscaras como atalhos e relações como cenas que precisam ser conduzidas até o resultado certo. No seu melhor, você liberta o Coração de identidades rígidas e ajuda as pessoas a experimentarem novas formas de ser. Seu desafio é lembrar que manipular emoções exige cuidado, porque até uma máscara escolhida ainda toca algo verdadeiro.</p>
	`,
	
	"Prince:Heart": `
	    <h3>PRINCE OF HEART (PRÍNCIPE/PRINCESA DO CORAÇÃO)</h3>
	    <p><strong>O que Destrói o Coração / Destrói com o Coração.</strong></p>
	    <p>Você tem uma relação tensa com emoção, identidade e vulnerabilidade. Quando um sentimento parece excessivo, uma paixão parece perigosa ou uma identidade parece frágil demais, sua tendência é querer cortar, negar ou desmontar aquilo. Você pode assumir o papel de quem destrói ilusões emocionais, rompe apegos e se recusa a tratar sentimento como justificativa suficiente.</p>
	    <p>Você também pode destruir com o Coração: usando intensidade, rejeição, charme, ironia ou identidade como instrumentos de corte. O perigo é reduzir emoções a fraquezas ou tratar a individualidade dos outros como algo que precisa se curvar à sua própria visão. No seu melhor, você rompe padrões emocionais nocivos e ajuda a separar desejo real de autoengano. Seu desafio é entender que vulnerabilidade não é sempre descontrole, e que destruir uma máscara não significa destruir a pessoa por trás dela.</p>
	`,
	
	"Sylph:Heart": `
	    <h3>SYLPH OF HEART (SÍLFIDE/SILFO DO CORAÇÃO)</h3>
	    <p><strong>Que Cura o Coração / Conserta o Coração.</strong></p>
	    <p>Você percebe quando alguém está desconectado de si mesmo. Baixa autoestima, confusão de identidade, repressão emocional, relações que apagam a individualidade e sentimentos mal resolvidos chamam sua atenção rapidamente. Sua resposta natural é tentar ajudar a pessoa a se reconhecer, se expressar e recuperar contato com aquilo que sente de verdade.</p>
	    <p>Essa ajuda pode ser profundamente necessária, mas também pode passar do ponto. Nem todo coração precisa ser aberto no seu ritmo, e nem toda pessoa quer ser analisada enquanto ainda está tentando sobreviver ao que sente. No seu melhor, você cura feridas de identidade sem substituir a voz de ninguém pela sua. Seu desafio é lembrar que consertar o Coração não significa decidir quem os outros são por eles.</p>
	`,
	
	"Page:Heart": `
	    <h3>PAGE OF HEART (ESCUDEIRO/ESCUDEIRA DO CORAÇÃO)</h3>
	    <p><strong>Aquele que Explora o Coração / Explora através do Coração.</strong></p>
	    <p>Você começa sua jornada tentando entender quem é. Pode sentir que sua identidade é instável, incompleta ou dependente demais do olhar dos outros. O Coração, para você, aparece primeiro como território a ser explorado: personalidade, desejo, emoção, autenticidade, rótulos, paixões e modelos de pessoa que parecem oferecer alguma pista de como existir.</p>
	    <p>Ao explorar esse território, você pode experimentar versões de si, se espelhar em personagens, pessoas, estilos ou linguagens emocionais até descobrir o que realmente permanece. Isso não significa que você não tenha alma; significa que está aprendendo a reconhecê-la por tentativa, erro e expressão. No seu melhor, você transforma insegurança identitária em uma jornada poderosa de autodescoberta. Seu desafio é parar de pedir que um rótulo prove sua existência e começar a perceber o eu que aparece entre todos eles.</p>
	`,
	
	"Rogue:Heart": `
	    <h3>ROGUE OF HEART (LADINO/LADINA DO CORAÇÃO)</h3>
	    <p><strong>O que Rouba o Coração (para redistribuir).</strong></p>
	    <p>Você percebe quando emoção, identidade ou atenção afetiva estão mal distribuídas. Sua tendência é deslocar o Coração para onde parece fazer mais falta: acolher sentimentos que ninguém escuta, adaptar sua postura para deixar alguém confortável, dividir intensidade emocional ou ajudar outras pessoas a se sentirem mais reconhecidas.</p>
	    <p>O risco é usar essa redistribuição para se fragmentar. Você pode ceder tanto espaço emocional aos outros que seus próprios desejos, limites e identidade ficam difíceis de distinguir. No seu melhor, você torna o Coração mais compartilhável, ajudando pessoas a se reconhecerem sem ficarem sozinhas com o que sentem. Seu desafio é lembrar que redistribuir afeto não significa doar pedaços de si até desaparecer.</p>
	`,
	
	"Seer:Heart": `
	    <h3>SEER OF HEART (VIDENTE DO CORAÇÃO)</h3>
	    <p><strong>Que Vê o Coração / Guia pelo Coração.</strong></p>
	    <p>Você enxerga identidades, desejos e verdades emocionais por trás das máscaras. Mesmo quando alguém tenta racionalizar, performar ou esconder o que sente, você tende a perceber as motivações mais íntimas que estão conduzindo a situação. Sua força está em entender o que uma pessoa quer, teme, ama ou tenta ser.</p>
	    <p>Com isso, você pode guiar os outros pelo Coração: ajudar alguém a reconhecer um desejo real, entender uma relação, abandonar uma máscara sufocante ou encarar uma verdade emocional que estava sendo evitada. O risco é se frustrar quando as pessoas não estão prontas para se ver com a mesma clareza. No seu melhor, você oferece espelho sem arrancar a máscara à força. Seu desafio é lembrar que ver o Coração de alguém não te dá o direito de decidir quando ele deve ser revelado.</p>
	`,
	
	"Heir:Heart": `
	    <h3>HEIR OF HEART (HERDEIRO/HERDEIRA DO CORAÇÃO)</h3>
	    <p><strong>O que Herda o Coração / Protegido(a) pelo Coração.</strong></p>
	    <p>Você parece naturalmente envolvido por emoção, carisma e identidade. Paixões surgem com força, pessoas projetam significado em você, e muitas vezes sua presença desperta afeto, identificação ou reconhecimento sem que você precise fazer muito. O Coração chega até você como instinto, magnetismo e uma facilidade espontânea para tocar a individualidade dos outros.</p>
	    <p>Essa afinidade pode te tornar expressivo, inspirador e emocionalmente marcante, mas também pode gerar passividade. Se sentimentos e papéis chegam até você com facilidade, talvez você demore a perguntar quais deles realmente escolheu. No seu melhor, você incorpora autenticidade de forma natural e ajuda os outros a se sentirem mais vivos. Seu desafio é não apenas herdar paixões, identidades e projeções, mas escolher quem você quer ser no meio delas.</p>
	`,
	
	"Bard:Heart": `
	    <h3>BARD OF HEART (BARDO/BARDA DO CORAÇÃO)</h3>
	    <p><strong>O que Convida a Destruição do Coração.</strong></p>
	    <p>Sua relação com identidade e emoção pode ser instável e indireta. Às vezes você evita vulnerabilidade, trata sentimentos como piada, assume máscaras por tempo demais ou deixa relações perderem intimidade por falta de presença emocional. Sem necessariamente querer, essa postura cria condições para que identidades se confundam, afetos se desgastem e verdades emocionais deixem de ser cuidadas.</p>
	    <p>Mas a destruição do Coração nem sempre é inútil. Você pode revelar quando uma identidade era só prisão, quando uma paixão estava sustentando autoengano ou quando todos precisavam parar de fingir sentimentos que não existiam mais. O risco é deixar o colapso emocional agir sem consciência, destruindo também vínculos e expressões que ainda mereciam cuidado. No seu melhor, você permite que máscaras falsas caiam para que algo mais verdadeiro possa existir. Seu desafio é perceber quando sua distância emocional virou erosão, não liberdade.</p>
	`,

	// --- MIND (MENTE) ---
	"Maid:Mind": `
	    <h3>MAID OF MIND (CRIADA/CRIADO DA MENTE)</h3>
	    <p><strong>Que Serve a Mente / Feita(o) de Mente.</strong></p>
	    <p>Você costuma ser a pessoa que cria estrutura quando todos se perdem em possibilidades, dúvidas ou decisões mal pensadas. Quando o ambiente fica caótico, impulsivo ou preso em dilemas intermináveis, você tenta organizar opções, pesar consequências e transformar confusão em um curso de ação possível. Você serve a Mente criando condições para que escolhas sejam feitas com mais clareza.</p>
	    <p>O risco é transformar essa função em obrigação constante. Se todos dependem de você para pensar nos impactos, traçar planos ou ser a pessoa razoável da situação, pode parecer que você não tem direito de errar, improvisar ou agir por impulso. No seu melhor, você dá forma ao caos mental e ajuda o grupo a tomar decisões mais conscientes. Seu desafio é lembrar que servir à Mente não significa carregar sozinho a responsabilidade por todas as escolhas ao seu redor.</p>
	`,
	
	"Knight:Mind": `
	    <h3>KNIGHT OF MIND (CAVALEIRO/CAVALEIRA DA MENTE)</h3>
	    <p><strong>O que Explora a Mente / Protege a Mente.</strong></p>
	    <p>Você usa lógica, estratégia e leitura de consequências como armadura. Mesmo quando está inseguro sobre suas próprias escolhas, sua tendência é parecer rápido, esperto e preparado para desmontar qualquer problema racionalmente. Você explora a Mente como ferramenta prática: argumenta, calcula riscos, encontra falhas em planos e protege o grupo de decisões precipitadas.</p>
	    <p>O problema é que essa inteligência pode virar performance. Talvez você se esconda atrás de ironia, debate ou raciocínios complexos porque admitir dúvida parece perigoso demais. No seu melhor, você é a pessoa que mantém a cabeça fria quando todo mundo está reagindo no impulso. Seu desafio é entender que proteger sua Mente não exige transformar toda conversa em prova de competência.</p>
	`,
	
	"Thief:Mind": `
	    <h3>THIEF OF MIND (LADRÃO/LADRA DA MENTE)</h3>
	    <p><strong>Que Rouba a Mente (para si).</strong></p>
	    <p>Você confia muito na própria capacidade de decidir. Quando percebe escolhas, estratégias ou linhas de raciocínio circulando ao seu redor, sua tendência é puxar a agência para si: tomar a frente, definir o plano, corrigir a lógica dos outros ou assumir o controle porque acredita que consegue enxergar a melhor rota.</p>
	    <p>O risco é transformar discernimento em domínio. Você pode atropelar opiniões, se apropriar de ideias ou tomar decisões por pessoas que precisavam participar do próprio caminho. No seu melhor, sua confiança corta indecisões e impede que oportunidades sejam perdidas por excesso de hesitação. Seu desafio é lembrar que escolher bem não precisa significar escolher por todo mundo.</p>
	`,
	
	"Mage:Mind": `
	    <h3>MAGE OF MIND (MAGO/MAGA DA MENTE)</h3>
	    <p><strong>O que Entende a Mente / Entende com a Mente.</strong></p>
	    <p>Você entende escolhas porque já teve que conviver com o peso delas. Talvez tenha sido marcado por decisões ruins, consequências imprevistas, manipulações alheias ou pela sensação de que cada caminho aberto também fecha outro. Para você, a Mente não é apenas lógica: é responsabilidade, arrependimento, causa, efeito e a consciência de que toda ação muda alguma coisa.</p>
	    <p>Essa experiência te dá uma leitura precisa de padrões e consequências. Você percebe quando uma decisão pequena pode crescer, quando uma justificativa não se sustenta e quando alguém está tentando fugir da própria agência. O risco é se prender tanto ao cálculo que agir passa a parecer perigoso demais. No seu melhor, você transforma experiência em lucidez prática. Seu desafio é não deixar o medo de escolher te convencer de que nenhuma escolha é segura o bastante.</p>
	`,
	
	"Witch:Mind": `
	    <h3>WITCH OF MIND (BRUXA/BRUXO DA MENTE)</h3>
	    <p><strong>Que Manipula a Mente.</strong></p>
	    <p>Você altera estruturas de pensamento, decisões e possibilidades. Quando uma lógica parece estreita, uma regra parece arbitrária ou uma escolha parece aprisionar alguém em um único caminho, sua tendência é mexer no sistema: reformular argumentos, mudar critérios, propor novas opções ou reinterpretar o que parecia inevitável.</p>
	    <p>O risco é se acostumar demais a conduzir o raciocínio dos outros. Você pode plantar dúvidas, reorganizar fatos ou ajustar narrativas até que as pessoas cheguem à conclusão que você considera melhor, mesmo quando elas precisavam fazer esse percurso por conta própria. No seu melhor, você liberta a Mente de escolhas falsas e sistemas rígidos. Seu desafio é lembrar que abrir possibilidades não é o mesmo que decidir qual delas os outros devem escolher.</p>
	`,
	
	"Prince:Mind": `
	    <h3>PRINCE OF MIND (PRÍNCIPE/PRINCESA DA MENTE)</h3>
	    <p><strong>O que Destrói a Mente / Destrói com a Mente.</strong></p>
	    <p>Você tem uma relação tensa com cálculo, máscaras sociais e racionalizações excessivas. Quando vê alguém preso demais em possibilidades, justificativas ou jogos mentais, sua tendência é querer cortar a análise e forçar uma resposta mais direta. Você pode assumir o papel de quem destrói indecisões, desmonta argumentos vazios e se recusa a aceitar lógica como desculpa para evitar responsabilidade.</p>
	    <p>Você também pode destruir com a Mente: usando raciocínio, estratégia ou leitura de consequências como instrumentos de corte. O perigo é transformar clareza lógica em frieza, reduzindo pessoas a escolhas ruins, contradições ou falhas de argumento. No seu melhor, você rompe padrões mentais que aprisionam e impede que a razão seja usada para encobrir covardia. Seu desafio é entender que emoção não é sempre irracionalidade, e que lógica não precisa virar arma.</p>
	`,
	
	"Sylph:Mind": `
	    <h3>SYLPH OF MIND (SÍLFIDE/SILFO DA MENTE)</h3>
	    <p><strong>Que Cura a Mente / Conserta a Mente.</strong></p>
	    <p>Você percebe quando alguém está confuso, preso em uma escolha ruim ou incapaz de enxergar as consequências do próprio caminho. Mal-entendidos, dilemas, decisões impulsivas e pensamentos embaralhados chamam sua atenção rapidamente. Sua resposta natural é tentar organizar: esclarecer opções, mediar raciocínios e ajudar as pessoas a pensarem com mais lucidez.</p>
	    <p>Essa ajuda pode ser profundamente valiosa, mas também pode passar do ponto. Nem toda pessoa quer ter sua lógica corrigida, e nem toda escolha precisa ser otimizada por você. Às vezes, ao tentar curar a Mente, você pode tratar a agência dos outros como um problema a ser resolvido. No seu melhor, você ajuda pessoas a escolherem melhor sem escolher por elas. Seu desafio é lembrar que consertar a Mente também exige respeitar o direito de alguém aprender com as próprias consequências.</p>
	`,
	
	"Page:Mind": `
	    <h3>PAGE OF MIND (ESCUDEIRO/ESCUDEIRA DA MENTE)</h3>
	    <p><strong>Aquele que Explora a Mente / Explora através da Mente.</strong></p>
	    <p>Você começa sua jornada tentando entender escolhas, lógica e agência. Pode sentir que não sabe decidir, que muda de máscara conforme o ambiente, que pensa devagar demais ou que sempre existe uma opção melhor que você não conseguiu prever. A Mente, para você, aparece primeiro como território a ser explorado: possibilidades, consequências, estratégias, papéis sociais e caminhos alternativos.</p>
	    <p>Ao explorar esse território, você começa a descobrir que inteligência não é nascer com todas as respostas, mas aprender como decisões funcionam. Você testa posturas, observa padrões, erra, recalcula e desenvolve aos poucos uma arquitetura própria de pensamento. No seu melhor, transforma confusão em estratégia e insegurança em uma capacidade real de navegar possibilidades. Seu desafio é parar de esperar a escolha perfeita e começar a confiar no aprendizado que cada escolha produz.</p>
	`,
	
	"Rogue:Mind": `
	    <h3>ROGUE OF MIND (LADINO/LADINA DA MENTE)</h3>
	    <p><strong>O que Rouba a Mente (para redistribuir).</strong></p>
	    <p>Você percebe quando agência, estratégia ou responsabilidade de escolha estão mal distribuídas. Sua tendência é deslocar a Mente para quem precisa mais: oferecer uma ideia para outra pessoa executar, dividir opções, aconselhar nos bastidores ou abrir espaço para que alguém tome uma decisão que antes parecia impossível.</p>
	    <p>O risco é usar essa redistribuição para fugir da própria agência. Você pode passar a bola, entregar crédito intelectual ou preferir ser conselheiro em vez de assumir a decisão final, evitando a culpa caso algo dê errado. No seu melhor, você torna escolhas mais compartilháveis e ajuda o grupo a pensar junto. Seu desafio é lembrar que redistribuir a Mente não significa abandonar sua própria voz no processo.</p>
	`,
	
	"Seer:Mind": `
	    <h3>SEER OF MIND (VIDENTE DA MENTE)</h3>
	    <p><strong>Que Vê a Mente / Guia pela Mente.</strong></p>
	    <p>Você enxerga caminhos se ramificando. Diante de uma escolha, percebe consequências possíveis, reações prováveis e padrões de comportamento que outras pessoas ignoram. Sua força está em entender causalidade, estratégia, papéis sociais e a forma como pequenas decisões podem alterar todo o curso de uma situação.</p>
	    <p>Com isso, você pode guiar os outros pela Mente: apontar riscos, explicar opções, prever consequências e ajudar o grupo a agir com mais consciência. O perigo é tentar encontrar o caminho perfeito e acabar preso em análise, ou se frustrar quando as pessoas escolhem por emoção mesmo depois de entenderem a lógica. No seu melhor, você oferece clareza sem retirar a agência dos outros. Seu desafio é lembrar que ver todas as rotas não significa que você precisa caminhar por todas antes de escolher uma.</p>
	`,
	
	"Heir:Mind": `
	    <h3>HEIR OF MIND (HERDEIRO/HERDEIRA DA MENTE)</h3>
	    <p><strong>O que Herda a Mente / Protegido(a) pela Mente.</strong></p>
	    <p>Você parece naturalmente envolvido por lógica, adaptação e escolhas oportunas. Muitas vezes, a resposta certa surge para você como intuição racional: você muda de postura conforme o contexto, percebe como agir em cada situação e encontra um caminho que simplesmente faz sentido. A Mente chega até você como flexibilidade, leitura de ambiente e facilidade para navegar alternativas.</p>
	    <p>Essa afinidade pode te tornar preciso, adaptável e difícil de encurralar, mas também pode gerar passividade. Se as escolhas parecem se organizar sozinhas, talvez você demore a perguntar quais valores estão guiando suas decisões. No seu melhor, você incorpora uma lucidez flexível que ajuda o grupo a encontrar rotas viáveis. Seu desafio é não apenas seguir a lógica do momento, mas escolher conscientemente que tipo de pessoa suas escolhas estão construindo.</p>
	`,
	
	"Bard:Mind": `
	    <h3>BARD OF MIND (BARDO/BARDA DA MENTE)</h3>
	    <p><strong>O que Convida a Destruição da Mente.</strong></p>
	    <p>Sua relação com decisão, planejamento e consequência pode ser instável e indireta. Às vezes você deixa escolhas em aberto, desmonta certezas sem oferecer alternativa ou trata decisões importantes como se elas fossem reversíveis para sempre. Sem necessariamente querer, essa postura cria condições para que o grupo perca clareza, agência ou confiança no próprio julgamento.</p>
	    <p>Mas a destruição da Mente nem sempre é inútil. Você pode revelar quando um plano era rígido demais, quando uma escolha "racional" escondia medo ou quando todos estavam presos a uma lógica que já não servia. O risco é deixar a confusão agir sem consciência, destruindo também estruturas mentais que ainda eram necessárias. No seu melhor, você permite que sistemas de pensamento falsos caiam para que escolhas mais honestas possam surgir. Seu desafio é perceber quando sua recusa em decidir virou decisão por omissão.</p>
	`,
	
	// --- RAGE (IRA) ---
	"Maid:Rage": `
	    <h3>MAID OF RAGE (CRIADA/CRIADO DA IRA)</h3>
	    <p><strong>Que Serve a Ira / Feita(o) de Ira.</strong></p>
	    <p>Você costuma ser a pessoa que encara aquilo que os outros preferem negar. Quando o ambiente tenta manter uma paz falsa, evitar conflitos ou fingir que está tudo bem diante de algo claramente errado, você acaba assumindo o papel de nomear a tensão. Você serve a Ira dando lugar para o desconforto necessário: apontando limites, verbalizando frustrações e impedindo que verdades difíceis sejam varridas para debaixo do tapete.</p>
	    <p>O risco é transformar essa função em isolamento. Se todos dependem de você para dizer o que ninguém quer dizer, pode parecer que você sempre precisa ser a pessoa dura, crítica ou desagradável da situação. No seu melhor, você traz honestidade onde havia negação e cria espaço para que a raiva seja compreendida em vez de apenas reprimida. Seu desafio é lembrar que servir à Ira não significa carregar sozinho toda a negatividade do grupo.</p>
	`,
	
	"Knight:Rage": `
	    <h3>KNIGHT OF RAGE (CAVALEIRO/CAVALEIRA DA IRA)</h3>
	    <p><strong>O que Explora a Ira / Protege a Ira.</strong></p>
	    <p>Você usa franqueza, ceticismo e resistência como armadura. Mesmo quando está inseguro, sua tendência é parecer forte o bastante para não ser enganado, manipulado ou intimidado. Você explora a Ira como ferramenta prática: questiona promessas fáceis, encara conflitos de frente e protege o grupo contra ilusões que poderiam deixá-lo vulnerável.</p>
	    <p>O problema é que essa dureza pode virar performance. Talvez você ataque primeiro porque ser visto como fraco, ingênuo ou vulnerável parece perigoso demais. No seu melhor, você é a pessoa que mantém os pés no chão quando todos estão prestes a comprar uma mentira bonita. Seu desafio é entender que proteger sua visão crítica não exige transformar toda abertura em ameaça.</p>
	`,
	
	"Thief:Rage": `
	    <h3>THIEF OF RAGE (LADRÃO/LADRA DA IRA)</h3>
	    <p><strong>Que Rouba a Ira (para si).</strong></p>
	    <p>Você deseja ter direito à própria revolta. Quando percebe indignação, frustração ou senso de injustiça circulando ao seu redor, sua tendência é puxar essa Ira para si: ser a pessoa mais lúcida, mais afetada, mais disposta a dizer a verdade desagradável ou mais autorizada a se revoltar.</p>
	    <p>O risco é transformar dor e conflito em competição. Você pode invalidar a raiva dos outros, centralizar o sofrimento ou agir como se só a sua leitura fosse suficientemente realista. No seu melhor, sua intensidade rompe acomodações perigosas e força questões importantes a serem vistas. Seu desafio é lembrar que a revolta dos outros não diminui a sua, e que a verdade crua pode ser compartilhada sem virar disputa por quem sofreu mais.</p>
	`,
	
	"Mage:Rage": `
	    <h3>MAGE OF RAGE (MAGO/MAGA DA IRA)</h3>
	    <p><strong>O que Entende a Ira / Entende com a Ira.</strong></p>
	    <p>Você entende descrença, limite e desilusão porque já precisou aprender com eles de perto. Talvez tenha visto promessas bonitas falharem, sido manipulado por narrativas convenientes ou descoberto cedo demais que certas estruturas só funcionam porque ninguém questiona. Para você, a Ira não é apenas explosão: é percepção do intolerável, recusa e lucidez diante do que não fecha.</p>
	    <p>Essa experiência te dá uma leitura afiada das rachaduras. Você percebe quando algo é bom demais para ser verdade, quando uma harmonia é falsa e quando uma crença está sendo usada para evitar conflito. O risco é se acostumar tanto a procurar a falha que até gestos sinceros começam a parecer armadilhas. No seu melhor, você transforma desilusão em sabedoria crítica. Seu desafio é não deixar que conhecer a feiura do mundo te impeça de reconhecer o que ainda é honesto.</p>
	`,
	
	"Witch:Rage": `
	    <h3>WITCH OF RAGE (BRUXA/BRUXO DA IRA)</h3>
	    <p><strong>Que Manipula a Ira.</strong></p>
	    <p>Você altera a forma como conflito, descrença e indignação circulam. Quando uma situação parece anestesiada, falsa ou controlada por uma paz artificial, sua tendência é mexer na tensão: provocar perguntas, deslocar suspeitas, intensificar uma recusa ou mudar o foco da raiva para onde ela parece fazer mais sentido.</p>
	    <p>O risco é se acostumar demais a mexer com fogo. Você pode apertar botões emocionais, alimentar desconfianças ou transformar uma insatisfação legítima em conflito maior do que precisava ser. No seu melhor, você rompe consensos falsos e mostra que a Ira pode libertar pessoas de estruturas sufocantes. Seu desafio é lembrar que manipular indignação exige responsabilidade, porque uma vez acesa, a faísca nem sempre queima só o alvo escolhido.</p>
	`,
	
	"Prince:Rage": `
	    <h3>PRINCE OF RAGE (PRÍNCIPE/PRINCESA DA IRA)</h3>
	    <p><strong>O que Destrói a Ira / Destrói com a Ira.</strong></p>
	    <p>Você tem uma relação tensa com conflito, negatividade e descrença. Quando a raiva parece improdutiva, exagerada ou perigosa, sua tendência é querer cortá-la pela raiz: acalmar, reprimir, desmontar a revolta ou destruir o clima de hostilidade antes que ele tome conta. Você pode assumir o papel de quem impede que ressentimentos comandem a situação.</p>
	    <p>Você também pode destruir com a Ira: usando indignação, recusa ou confronto como instrumentos de corte. O perigo é tanto apagar raivas necessárias quanto deixar uma raiva sua destruir mais do que pretendia. No seu melhor, você acaba com ciclos de hostilidade vazia e impede que a dor vire combustível sem direção. Seu desafio é entender que nem toda raiva é descontrole; às vezes, ela é o sinal mais honesto de que algo precisa mudar.</p>
	`,
	
	"Sylph:Rage": `
	    <h3>SYLPH OF RAGE (SÍLFIDE/SILFO DA IRA)</h3>
	    <p><strong>Que Cura a Ira / Cura através da Ira.</strong></p>
	    <p>Você percebe quando alguém está reprimindo uma raiva que precisava ser ouvida. Frustrações engolidas, limites violados, descrenças abafadas e verdades duras evitadas chamam sua atenção rapidamente. Sua resposta natural é validar o desconforto: mostrar que a pessoa tem direito de se incomodar, de dizer não e de encarar aquilo que estava tentando negar.</p>
	    <p>Essa cura pode ser profundamente necessária, mas também pode passar do ponto. Nem toda mágoa precisa virar guerra, e nem toda suspeita é prova de que algo está podre. Às vezes, ao tentar curar através da Ira, você pode fortalecer ressentimentos que precisavam ser elaborados com mais cuidado. No seu melhor, você transforma raiva em clareza e limite. Seu desafio é lembrar que curar a Ira não significa mantê-la acesa para sempre.</p>
	`,
	
	"Page:Rage": `
	    <h3>PAGE OF RAGE (ESCUDEIRO/ESCUDEIRA DA IRA)</h3>
	    <p><strong>Aquele que Explora a Ira / Explora através da Ira.</strong></p>
	    <p>Você começa sua jornada tentando entender conflito, recusa e indignação. Pode ter dificuldade em se impor, duvidar da própria raiva ou aceitar mentiras convenientes para evitar confronto. A Ira, para você, aparece primeiro como território a ser explorado: ceticismo, limites, descrença, verdades incômodas e a coragem de dizer que algo não está certo.</p>
	    <p>Ao explorar esse território, você começa a descobrir que raiva não é apenas destruição. Ela também pode ser percepção, proteção e força para romper com aquilo que te diminuía. No seu melhor, você transforma passividade em firmeza e aprende a reconhecer quando o desconforto é um aviso legítimo. Seu desafio é parar de tratar conflito como fracasso e começar a usá-lo como caminho para uma verdade mais honesta.</p>
	`,
	
	"Rogue:Rage": `
	    <h3>ROGUE OF RAGE (LADINO/LADINA DA IRA)</h3>
	    <p><strong>O que Rouba a Ira (para redistribuir).</strong></p>
	    <p>Você percebe quando raiva, tensão ou negatividade estão concentradas demais em um lugar. Sua tendência é deslocar essa Ira: absorver parte do clima pesado, desviar hostilidade de alguém vulnerável, nomear um incômodo que ninguém conseguia expressar ou transformar frustração difusa em uma crítica mais útil.</p>
	    <p>O risco é carregar veneno que não era só seu. Você pode virar o amortecedor de conflitos, o alvo mais fácil ou a pessoa que fica amarga para que os outros continuem leves. No seu melhor, você redistribui a Ira de forma mais justa, impedindo que ela esmague uma única pessoa ou exploda sem direção. Seu desafio é lembrar que aliviar a raiva dos outros não significa guardar toda ela dentro de você.</p>
	`,
	
	"Seer:Rage": `
	    <h3>SEER OF RAGE (VIDENTE DA IRA)</h3>
	    <p><strong>Que Vê a Ira / Guia pela Ira.</strong></p>
	    <p>Você enxerga rachaduras, contradições e falsas harmonias. Quando uma ideia, grupo ou plano parece bom demais para ser verdade, você percebe onde está a tensão escondida, a mentira conveniente ou o limite que todos estão fingindo não ver. Sua força está em entender descrença, conflito e verdade crua sem precisar suavizar tudo imediatamente.</p>
	    <p>Com isso, você pode guiar os outros pela Ira: alertar sobre ilusões perigosas, apontar quando uma promessa não se sustenta e ajudar o grupo a transformar incômodo em lucidez. O risco é se cansar de ser a pessoa que estraga o encanto ou começar a acreditar que toda esperança é só uma mentira bem decorada. No seu melhor, você mostra que o ceticismo pode proteger sem paralisar. Seu desafio é lembrar que ver a falha não significa que só a falha é real.</p>
	`,
	
	"Heir:Rage": `
	    <h3>HEIR OF RAGE (HERDEIRO/HERDEIRA DA IRA)</h3>
	    <p><strong>O que Herda a Ira / Protegido(a) pela Ira.</strong></p>
	    <p>Você parece naturalmente envolvido por conflito, recusa e intensidade. Tensões aparecem ao seu redor, verdades inconvenientes chegam até você, e muitas vezes sua própria presença faz aquilo que estava reprimido vir à tona. A Ira chega até você como resistência, pele grossa, ceticismo e uma capacidade espontânea de sobreviver a ambientes difíceis.</p>
	    <p>Essa afinidade pode te tornar resiliente e difícil de manipular, mas também pode gerar familiaridade demais com a hostilidade. Se conflito é o terreno onde você aprendeu a se mover, a paz pode parecer estranha, frágil ou até suspeita. No seu melhor, você incorpora uma força de recusa que ajuda o grupo a não se dobrar diante do intolerável. Seu desafio é não confundir calma com falsidade, nem harmonia com armadilha.</p>
	`,
	
	"Bard:Rage": `
	    <h3>BARD OF RAGE (BARDO/BARDA DA IRA)</h3>
	    <p><strong>O que Convida a Destruição da Ira.</strong></p>
	    <p>Sua relação com conflito, indignação e verdade crua pode ser instável e indireta. Às vezes você evita encarar tensões, trata preocupações sérias como exagero ou desfaz a raiva dos outros com humor, distração ou aparente indiferença. Sem necessariamente querer, essa postura cria condições para que a capacidade crítica do grupo se enfraqueça ou para que conflitos importantes sejam adiados até perderem forma.</p>
	    <p>Mas a destruição da Ira nem sempre é inútil. Você pode revelar quando uma revolta virou hábito, quando uma desconfiança estava corroendo tudo sem motivo ou quando todos estavam presos a um ciclo de hostilidade que já não servia a ninguém. O risco é deixar a negação agir sem consciência, apagando também raivas que ainda precisavam ser ouvidas. No seu melhor, você permite que rancores falsos caiam para que uma verdade menos venenosa possa aparecer. Seu desafio é perceber quando sua recusa em levar a Ira a sério virou cumplicidade com o que deveria ser confrontado.</p>
	`,

	// --- LIFE (VIDA) ---
	"Maid:Life": `
	    <h3>MAID OF LIFE (CRIADA/CRIADO DA VIDA)</h3>
	    <p><strong>Que Serve a Vida / Feita(o) de Vida.</strong></p>
	    <p>Você costuma ser a pessoa que mantém as coisas crescendo quando o ambiente parece frágil, negligenciado ou sem energia. Quando alguém precisa de cuidado, recurso, incentivo ou recuperação, você tende a assumir o trabalho de alimentar esse processo. Você serve a Vida criando condições para que pessoas, projetos e situações recuperem força: nutrindo, organizando, tratando feridas e colocando movimento onde havia estagnação.</p>
	    <p>O risco é transformar vitalidade em obrigação. Se todos dependem de você para sustentar crescimento, cura ou bem-estar, pode parecer que você não tem direito a cansaço, fraqueza ou necessidade própria. No seu melhor, você faz a Vida circular de forma concreta, restaurando potência onde ela estava se perdendo. Seu desafio é lembrar que servir à Vida não significa virar uma fonte inesgotável para todos beberem sem devolver nada.</p>
	`,
	
	"Knight:Life": `
	    <h3>KNIGHT OF LIFE (CAVALEIRO/CAVALEIRA DA VIDA)</h3>
	    <p><strong>O que Explora a Vida / Protege a Vida.</strong></p>
	    <p>Você usa energia, presença e capacidade de resolver problemas como armadura. Mesmo quando se sente inseguro sobre sua própria força, sua tendência é parecer ativo, resistente e pronto para fazer acontecer. Você explora a Vida como ferramenta prática: cuida, incentiva, busca recursos, protege o bem-estar do grupo e empurra situações estagnadas para algum tipo de crescimento.</p>
	    <p>O problema é que essa vitalidade pode virar performance. Talvez você tente parecer invencível ou generoso o tempo todo para esconder suas próprias necessidades. No seu melhor, você protege a potência das pessoas ao redor e luta para que ninguém definhe por falta de apoio. Seu desafio é entender que defender a Vida dos outros não exige lutar todas as batalhas por eles — nem esconder quando você também precisa de cuidado.</p>
	`,
	
	"Thief:Life": `
	    <h3>THIEF OF LIFE (LADRÃO/LADRA DA VIDA)</h3>
	    <p><strong>Que Rouba a Vida (para si).</strong></p>
	    <p>Você deseja energia, recursos, prazer e espaço para crescer. Quando percebe vitalidade, atenção, status, conforto ou oportunidade circulando ao seu redor, sua tendência é puxar isso para si: buscar o melhor lugar, o melhor recurso, a maior chance de expansão ou a sensação de estar vivendo mais intensamente do que os outros.</p>
	    <p>O risco é transformar crescimento em competição. Você pode tratar recursos como escassos demais para serem compartilhados, drenando a energia do ambiente ou centralizando necessidades para garantir que as suas sejam atendidas primeiro. No seu melhor, sua fome de Vida te torna ousado, vibrante e capaz de reivindicar aquilo que te permite florescer. Seu desafio é lembrar que prosperar não precisa significar deixar os outros sem água.</p>
	`,
	
	"Mage:Life": `
	    <h3>MAGE OF LIFE (MAGO/MAGA DA VIDA)</h3>
	    <p><strong>O que Entende a Vida / Entende com a Vida.</strong></p>
	    <p>Você entende crescimento, cuidado e recurso porque já teve que lidar com seus custos. Talvez conheça bem fragilidade, doença, escassez, desigualdade, excesso de responsabilidade ou a sensação de que algumas pessoas recebem condições para florescer enquanto outras precisam lutar pelo básico. Para você, a Vida não é apenas otimismo: é corpo, necessidade, energia, privilégio, cura e sobrevivência.</p>
	    <p>Essa experiência te dá uma percepção prática de onde vale aplicar esforço. Você percebe o que nutre, o que drena, onde há potencial real de crescimento e onde insistir só está consumindo energia. O risco é se tornar pragmático demais, tratando vitalidade como cálculo e esquecendo que viver também envolve desejo, prazer e espontaneidade. No seu melhor, você transforma experiência em sabedoria de cuidado. Seu desafio é não deixar que conhecer o preço da Vida te impeça de sentir sua abundância.</p>
	`,
	
	"Witch:Life": `
	    <h3>WITCH OF LIFE (BRUXA/BRUXO DA VIDA)</h3>
	    <p><strong>Que Manipula a Vida.</strong></p>
	    <p>Você altera fluxos de crescimento, energia e bem-estar. Quando uma situação parece estagnada, doente, sem recursos ou pequena demais para o que poderia ser, sua tendência é mexer nas condições ao redor: mudar rotinas, buscar oportunidades, estimular desejo, redistribuir energia e criar caminhos para que algo floresça de outro jeito.</p>
	    <p>O risco é se acostumar demais a intervir no crescimento dos outros. Você pode confundir incentivo com pressão, cuidado com controle ou potencial com obrigação de melhorar. No seu melhor, você liberta a Vida de limites estreitos e mostra que há mais formas de florescer do que as pessoas imaginavam. Seu desafio é lembrar que manipular crescimento exige consentimento: nem toda planta quer ser podada no formato que você escolheu.</p>
	`,
	
	"Prince:Life": `
	    <h3>PRINCE OF LIFE (PRÍNCIPE/PRINCESA DA VIDA)</h3>
	    <p><strong>O que Destrói a Vida / Destrói com a Vida.</strong></p>
	    <p>Você tem uma relação tensa com excesso, dependência, conforto e crescimento sem direção. Quando algo parece indulgente demais, invasivo demais ou sustentado por recursos que não deveriam estar ali, sua tendência é cortar: reduzir, limitar, negar, simplificar ou encerrar aquilo que considera desperdício de energia.</p>
	    <p>Você também pode destruir com a Vida: usando presença, status, força, recursos ou vitalidade como instrumentos de corte. O perigo é confundir excesso com alegria, necessidade com fraqueza ou crescimento lento com inutilidade, acabando por sufocar coisas que ainda estavam tentando florescer. No seu melhor, você remove o que parasita a Vida e impede que recursos sejam consumidos sem propósito. Seu desafio é entender que nem toda abundância é decadência; às vezes, viver bem também exige espaço para prazer, cuidado e expansão.</p>
	`,
	
	"Sylph:Life": `
	    <h3>SYLPH OF LIFE (SÍLFIDE/SILFO DA VIDA)</h3>
	    <p><strong>Que Cura a Vida / Conserta a Vida.</strong></p>
	    <p>Você percebe quando alguém está sem energia, sem cuidado, sem recurso ou sem espaço para crescer. Fragilidade, adoecimento, negligência, potencial desperdiçado e ambientes que sufocam a vitalidade chamam sua atenção rapidamente. Sua resposta natural é tentar nutrir: oferecer apoio, fortalecer, cuidar, incentivar e criar condições para que a pessoa recupere potência.</p>
	    <p>Essa ajuda pode ser profundamente necessária, mas também pode passar do ponto. Nem todo crescimento precisa ser conduzido por você, e nem toda pessoa quer ser cuidada do jeito que você considera ideal. Às vezes, ao tentar curar a Vida, você pode criar dependência ou sufocar alguém com excesso de zelo. No seu melhor, você ajuda pessoas a florescerem sem tomar o lugar de suas raízes. Seu desafio é lembrar que consertar a Vida não significa controlar o ritmo de crescimento dos outros.</p>
	`,
	
	"Page:Life": `
	    <h3>PAGE OF LIFE (ESCUDEIRO/ESCUDEIRA DA VIDA)</h3>
	    <p><strong>Aquele que Explora a Vida / Explora através da Vida.</strong></p>
	    <p>Você começa sua jornada tentando entender crescimento, força e vitalidade. Pode se sentir frágil, estagnado, dependente ou incapaz de nutrir aquilo que importa para você. A Vida, para você, aparece primeiro como território a ser explorado: cura, desejo, energia, recursos, corpo, autonomia e a possibilidade de crescer para além do lugar onde te colocaram.</p>
	    <p>Ao explorar esse território, você começa a descobrir que estar vivo não é apenas resistir ao que te enfraquece. É aprender o que te alimenta, o que te expande e o que te devolve potência. No seu melhor, você transforma fragilidade em crescimento lento e verdadeiro, tornando-se alguém capaz de inspirar vitalidade justamente porque sabe como é começar sem ela. Seu desafio é parar de confundir ainda estar crescendo com ser incapaz de florescer.</p>
	`,
	
	"Rogue:Life": `
	    <h3>ROGUE OF LIFE (LADINO/LADINA DA VIDA)</h3>
	    <p><strong>O que Rouba a Vida (para redistribuir).</strong></p>
	    <p>Você percebe quando energia, cuidado, recursos ou oportunidades de crescimento estão mal distribuídos. Sua tendência é deslocar a Vida para quem parece precisar mais: dividir conforto, oferecer apoio, usar seus recursos por alguém ou abrir mão de uma vantagem para que outra pessoa consiga se recuperar.</p>
	    <p>O risco é tirar vitalidade demais de si mesmo nesse processo. Você pode sacrificar descanso, saúde, dinheiro, sucesso ou prazer para aliviar a escassez dos outros, até começar a acreditar que seu bem-estar é menos urgente. No seu melhor, você torna a Vida mais justa e impede que só alguns tenham condições de florescer. Seu desafio é lembrar que redistribuir cuidado não significa negar a si mesmo o direito de crescer.</p>
	`,
	
	"Seer:Life": `
	    <h3>SEER OF LIFE (VIDENTE DA VIDA)</h3>
	    <p><strong>Que Vê a Vida / Guia pela Vida.</strong></p>
	    <p>Você enxerga potencial de crescimento antes que ele se torne óbvio. Onde os outros veem estagnação, você percebe uma necessidade não atendida; onde veem exagero, você percebe fome; onde veem fragilidade, você percebe algo tentando continuar vivo. Sua força está em entender vitalidade, cuidado, recurso, autonomia e as condições que permitem que alguém floresça.</p>
	    <p>Com isso, você pode guiar os outros pela Vida: apontar onde investir energia, quando descansar, que ambiente está drenando uma pessoa ou que oportunidade pode ajudá-la a crescer. O risco é se frustrar ao ver potencial desperdiçado, ou acreditar que sabe melhor do que os outros o que eles precisam para melhorar. No seu melhor, você mostra caminhos de florescimento sem forçar ninguém a segui-los. Seu desafio é lembrar que guiar pela Vida é apontar a fonte de água, não obrigar a pessoa a beber.</p>
	`,
	
	"Heir:Life": `
	    <h3>HEIR OF LIFE (HERDEIRO/HERDEIRA DA VIDA)</h3>
	    <p><strong>O que Herda a Vida / Protegido(a) pela Vida.</strong></p>
	    <p>Você parece naturalmente envolvido por vitalidade, oportunidade e crescimento. Recursos aparecem, portas se abrem, pessoas se renovam ao seu redor ou sua própria energia acaba puxando situações para um estado mais vivo. A Vida chega até você como abundância, recuperação, desejo e uma facilidade espontânea para continuar crescendo.</p>
	    <p>Essa afinidade pode te tornar inspirador, resistente e capaz de levantar ambientes apagados, mas também pode gerar passividade. Se as coisas costumam florescer ao seu redor, talvez você demore a perceber o esforço que outras pessoas precisam fazer para sobreviver. No seu melhor, você incorpora uma vitalidade tranquila que ajuda o grupo a recuperar fôlego. Seu desafio é não confundir abundância recebida com mérito automático, nem crescimento natural com ausência de responsabilidade.</p>
	`,
	
	"Bard:Life": `
	    <h3>BARD OF LIFE (BARDO/BARDA DA VIDA)</h3>
	    <p><strong>O que Convida a Destruição da Vida.</strong></p>
	    <p>Sua relação com crescimento, cuidado e vitalidade pode ser instável e indireta. Às vezes você ignora necessidades do corpo, deixa recursos se perderem, adia cuidados básicos ou trata oportunidades de crescimento como algo que pode esperar indefinidamente. Sem necessariamente querer, essa postura cria condições para que energia, saúde, projetos ou ambientes comecem a definhar.</p>
	    <p>Mas a destruição da Vida nem sempre é inútil. Você pode revelar quando um crescimento era artificial, quando uma abundância escondia excesso prejudicial ou quando todos estavam sustentando algo apenas porque parecia "saudável" por fora. O risco é deixar o abandono agir sem consciência, destruindo também vitalidades que ainda mereciam cuidado. No seu melhor, você permite que formas falsas de crescimento caiam para que uma vida mais honesta possa surgir. Seu desafio é perceber quando sua negligência com a Vida virou desperdício, não liberdade.</p>
	`,

	// --- DOOM (DESTINO) ---
	"Maid:Doom": `
	    <h3>MAID OF DOOM (CRIADA/CRIADO DO DESTINO)</h3>
	    <p><strong>Que Serve o Destino / Feita(o) de Destino.</strong></p>
	    <p>Você costuma ser a pessoa que lembra os limites quando todo mundo quer ignorá-los. Quando o ambiente age como se consequências não existissem, você tenta organizar o que precisa ser contido, encerrado, aceito ou administrado antes que o dano cresça. Você serve o Destino criando condições para que regras, custos e sacrifícios necessários sejam reconhecidos em vez de empurrados para depois.</p>
	    <p>O risco é transformar essa função em peso constante. Se todos dependem de você para lidar com a parte difícil, pode parecer que seu papel é sempre carregar a má notícia, impor limites ou absorver consequências que não nasceram das suas escolhas. No seu melhor, você preserva o grupo de colapsos maiores ao reconhecer o que não pode ser evitado. Seu desafio é lembrar que servir ao Destino não significa aceitar todo sofrimento como responsabilidade sua.</p>
	`,
	
	"Knight:Doom": `
	    <h3>KNIGHT OF DOOM (CAVALEIRO/CAVALEIRA DO DESTINO)</h3>
	    <p><strong>O que Explora o Destino / Protege o Destino.</strong></p>
	    <p>Você usa cautela, resistência e conhecimento de limites como armadura. Mesmo quando carrega inseguranças ou dores próprias, sua tendência é parecer preparado para o pior cenário: prever falhas, conhecer regras, identificar riscos e proteger o grupo de consequências duras antes que elas cheguem.</p>
	    <p>O problema é que essa dureza pode virar performance. Talvez você aja como se nada te abalasse porque admitir sofrimento parece colocar todos em perigo. No seu melhor, você transforma limites em proteção prática e impede que o grupo se jogue em armadilhas previsíveis. Seu desafio é entender que ser forte diante do Destino não exige fingir que a dor nunca passa por você.</p>
	`,
	
	"Thief:Doom": `
	    <h3>THIEF OF DOOM (LADRÃO/LADRA DO DESTINO)</h3>
	    <p><strong>Que Rouba o Destino (para si).</strong></p>
	    <p>Você deseja controlar limites, regras e consequências antes que elas controlem você. Quando percebe restrições, sofrimento, culpa ou custos circulando ao seu redor, sua tendência é puxar esse Destino para si de algum modo: ser a pessoa que entende melhor a dor, que conhece a brecha da regra ou que decide quais consequências realmente importam.</p>
	    <p>O risco é transformar sofrimento ou restrição em vantagem pessoal. Você pode invalidar a dor dos outros, burlar limites que continuam prendendo todo mundo ou agir como se sua experiência te desse autoridade especial sobre o que é difícil. No seu melhor, sua esperteza encontra saídas onde todos só viam condenação. Seu desafio é lembrar que sobreviver às regras não precisa significar deixar os outros presos nelas.</p>
	`,
	
	"Mage:Doom": `
	    <h3>MAGE OF DOOM (MAGO/MAGA DO DESTINO)</h3>
	    <p><strong>O que Entende o Destino / Entende com o Destino.</strong></p>
	    <p>Você entende limites, dor e consequência porque já precisou conviver com eles de perto. Talvez conheça bem perda, frustração, regras injustas, responsabilidades pesadas ou a sensação de que certas coisas simplesmente não podem ser consertadas com vontade suficiente. Para você, o Destino não é drama abstrato: é experiência, custo, desgaste e sobrevivência.</p>
	    <p>Essa vivência te dá uma sabedoria difícil de falsificar. Você sabe quando uma luta está cobrando caro demais, quando uma estrutura está quebrada e quando alguém precisa de companhia mais do que de solução. O risco é se acostumar tanto com o limite que qualquer esperança começa a parecer ingenuidade. No seu melhor, você transforma sofrimento em compreensão compassiva. Seu desafio é não deixar que conhecer a dor te convença de que ela é tudo que existe.</p>
	`,
	
	"Witch:Doom": `
	    <h3>WITCH OF DOOM (BRUXA/BRUXO DO DESTINO)</h3>
	    <p><strong>Que Manipula o Destino.</strong></p>
	    <p>Você altera limites, regras e condições de inevitabilidade. Quando alguém diz que algo é impossível, obrigatório ou condenado a acabar de certo modo, sua tendência é procurar a brecha: reinterpretar a regra, dobrar a restrição, mudar o custo ou encontrar uma forma de escapar de um destino que parecia fechado.</p>
	    <p>O risco é se acostumar demais a mexer com estruturas fundamentais. Nem todo limite existe por opressão; alguns existem para evitar colapso, dano ou repetição de sofrimento. No seu melhor, você liberta pessoas de regras injustas e transforma condenações em novas possibilidades. Seu desafio é lembrar que manipular o Destino também significa assumir responsabilidade pelo que acontece quando uma restrição deixa de segurar algo perigoso.</p>
	`,
	
	"Prince:Doom": `
	    <h3>PRINCE OF DOOM (PRÍNCIPE/PRINCESA DO DESTINO)</h3>
	    <p><strong>O que Destrói o Destino / Destrói com o Destino.</strong></p>
	    <p>Você tem uma relação tensa com limites, sofrimento e inevitabilidade. Quando uma regra parece injusta, uma consequência parece cruel ou uma estrutura parece existir apenas para manter pessoas presas, sua tendência é querer destruir esse Destino pela raiz. Você pode assumir o papel de quem rompe restrições, recusa condenações e acaba com ciclos de resignação.</p>
	    <p>Você também pode destruir com o Destino: usando regras, punições, prazos, culpa ou consequências como instrumentos de corte. O perigo é tanto negar limites necessários quanto impor limites duros demais para encerrar um problema rapidamente. No seu melhor, você destrói fatalismos que impediam a vida de continuar. Seu desafio é entender que nem todo limite é prisão, e que nem toda libertação precisa vir pela aniquilação da estrutura.</p>
	`,
	
	"Sylph:Doom": `
	    <h3>SYLPH OF DOOM (SÍLFIDE/SILFO DO DESTINO)</h3>
	    <p><strong>Que Cura o Destino / Conserta o Destino.</strong></p>
	    <p>Você percebe quando alguém está sofrendo sob o peso de um limite, uma perda ou uma consequência inevitável. Luto, culpa, exaustão, medo do fim e sensação de impotência chamam sua atenção rapidamente. Sua resposta natural é acompanhar: ajudar a pessoa a entender o que não pode mudar, aliviar o peso do que pode ser carregado e encontrar uma forma mais humana de atravessar a dor.</p>
	    <p>Essa cura pode ser profundamente necessária, mas também pode passar do ponto. Nem todo sofrimento precisa ser preservado como identidade, e nem toda limitação deve ser aceita sem questionamento. Às vezes, ao tentar curar o Destino, você pode ajudar alguém a se acomodar em uma dor que já poderia começar a mudar. No seu melhor, você oferece companhia diante do inevitável sem transformar resignação em virtude. Seu desafio é lembrar que consertar o Destino também pode significar abrir uma saída quando ela existe.</p>
	`,
	
	"Page:Doom": `
	    <h3>PAGE OF DOOM (ESCUDEIRO/ESCUDEIRA DO DESTINO)</h3>
	    <p><strong>Aquele que Explora o Destino / Explora através do Destino.</strong></p>
	    <p>Você começa sua jornada tentando entender limites, regras e consequências. Pode sentir que as restrições não fazem sentido, que os finais chegam sem aviso ou que está preso sob obrigações que ainda não sabe nomear. O Destino, para você, aparece primeiro como território a ser explorado: sacrifício, perda, responsabilidade, falha, custo e a estrutura invisível que impede certas coisas de continuarem.</p>
	    <p>Ao explorar esse território, você começa a descobrir que limite não é apenas punição. Regras podem proteger, finais podem libertar e aceitar uma consequência pode ser o primeiro passo para agir com mais maturidade. No seu melhor, você transforma confusão diante da dor em uma compreensão firme do que precisa ser preservado, encerrado ou suportado. Seu desafio é parar de tratar limites como uma sentença incompreensível e começar a aprender o que eles estão tentando revelar.</p>
	`,
	
	"Rogue:Doom": `
	    <h3>ROGUE OF DOOM (LADINO/LADINA DO DESTINO)</h3>
	    <p><strong>O que Rouba o Destino (para redistribuir).</strong></p>
	    <p>Você percebe quando dor, culpa, consequência ou restrição estão concentradas demais em uma pessoa. Sua tendência é deslocar esse Destino: assumir parte do peso, dividir uma responsabilidade, aliviar alguém de uma consequência injusta ou levar o grupo a reconhecer que um sacrifício não deveria cair sempre nas mesmas costas.</p>
	    <p>O risco é carregar limites que não eram só seus. Você pode tomar dores, culpas e deveres em excesso, acreditando que proteger os outros significa poupá-los de qualquer sofrimento. No seu melhor, você torna consequências mais justas e impede que uma única pessoa seja esmagada pelo sistema. Seu desafio é lembrar que redistribuir o Destino não significa se oferecer sempre como o lugar onde toda dor deve parar.</p>
	`,
	
	"Seer:Doom": `
	    <h3>SEER OF DOOM (VIDENTE DO DESTINO)</h3>
	    <p><strong>Que Vê o Destino / Guia pelo Destino.</strong></p>
	    <p>Você enxerga limites, falhas e consequências antes que elas se tornem impossíveis de ignorar. Enquanto outras pessoas se empolgam com um plano sem considerar custos, você percebe onde estão as restrições, quais regras governam a situação e que tipo de fim provavelmente aguarda cada escolha.</p>
	    <p>Com isso, você pode guiar os outros pelo Destino: avisar sobre riscos, preparar o grupo para perdas inevitáveis, mostrar quando uma estratégia é insustentável e ajudar pessoas a escolherem batalhas que ainda podem ser vencidas. O risco é se acostumar tanto a ver limites que possibilidade passa a parecer fantasia. No seu melhor, você oferece cautela sem apagar coragem. Seu desafio é lembrar que ver o fim de um caminho não significa que todos os caminhos já acabaram.</p>
	`,
	
	"Heir:Doom": `
	    <h3>HEIR OF DOOM (HERDEIRO/HERDEIRA DO DESTINO)</h3>
	    <p><strong>O que Herda o Destino / Protegido(a) pelo Destino.</strong></p>
	    <p>Você parece naturalmente envolvido por regras, limites e consequências. Sistemas rígidos, responsabilidades, perdas ou estruturas difíceis tendem a se organizar ao seu redor, e muitas vezes você aprende a se mover dentro delas com uma familiaridade que outras pessoas não têm. O Destino chega até você como adaptação, resistência e uma capacidade estranha de continuar mesmo em ambientes pesados.</p>
	    <p>Essa afinidade pode te tornar prudente, resiliente e capaz de sobreviver a situações que desestabilizariam outros. Mas também pode gerar complacência: se restrições sempre pareceram parte natural da vida, talvez você demore a questionar quais delas são injustas ou desnecessárias. No seu melhor, você incorpora aceitação sem desespero e ajuda o grupo a lidar com consequências reais. Seu desafio é não confundir estar acostumado ao limite com merecer viver preso a ele.</p>
	`,
	
	"Bard:Doom": `
	    <h3>BARD OF DOOM (BARDO/BARDA DO DESTINO)</h3>
	    <p><strong>O que Convida a Destruição do Destino.</strong></p>
	    <p>Sua relação com limites, regras e consequências pode ser instável e indireta. Às vezes você ignora avisos, trata restrições como exagero ou deixa estruturas de segurança se desgastarem até que algo inevitável deixe de ser administrável. Sem necessariamente querer, essa postura cria condições para que regras caiam, proteções falhem e consequências cheguem de forma mais dura do que precisavam.</p>
	    <p>Mas a destruição do Destino nem sempre é inútil. Você pode revelar quando uma regra só existia para manter medo, quando uma limitação era artificial ou quando todos estavam obedecendo a uma sentença que já não precisava valer. O risco é deixar a irresponsabilidade agir sem consciência, destruindo também limites que protegiam pessoas reais. No seu melhor, você permite que fatalismos falsos caiam para que uma forma mais livre de viver possa surgir. Seu desafio é perceber quando sua recusa em respeitar o Destino virou negligência, não libertação.</p>
	`,

// --- TEXTOS DO SISTEMA ---
    
    "UI_Intro": `
        <div class="fade-in">
            <h1>TESTE DE CLASSPECT DA SBURBIO V2.0</h1>
            <p>Oi! Que bom que encontrou esse teste. Eu sou o SC, popularmente conhecido como springus. Talvez você não me conheça, mas espero que bote fé no projeto Sburbio.</p>
            <p>Após 3 meses desde o lançamento do nosso teste, finalmente temos um update massivo para apresentar a vocês! Demorou bastante, foi um trabalho daqueles pra mudar e descobrir o que podia melhorar e o que deixar como tava, mas agora nosso projeto está bem melhor!</p>
            <p>Na versão 2.0, eis o que há de novo:</p>
			<p>- Balanceamento novo das questões (deixamos a parte de aspectos intacta, pois achamos que já está boa do jeito que está. Deu bom da primeira vez, não tem porque mexer agora né?).</p>
			<p>- 10 novas perguntas para cada bloco de aspecto! Esperamos trazer resultados bem mais precisos assim, tendo mais situações para compensar aquelas questões que você pular.</p>
			<p>- Novas descrições para todos os classpects! Mudamos alguns termos, já que algumas coisas soavam talvez mais "Time" do que "Life" em alguns casos, coisas do tipo.</p>
			<p>- Novo design! Ouvimos muitas reclamações do estilo de terminal doer os olhos de quem está fazendo o teste (até comigo começou a incomodar), então adotamos um estilo parecido com o do site de homestuck, tornando a experiência beeem mais confortável para os olhos.</p>
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


















