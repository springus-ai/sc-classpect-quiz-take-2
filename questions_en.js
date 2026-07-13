const aspectQuestions = [
    { t: "1. A group of friends insists on keeping up an annual tradition that you find exhausting. What do you do?", opts: [
        { txt: "I end up going, but just to go through the motions. I was included, but that doesn't mean I'm there heart and soul.", w: { Doom: 3, Life: 1, Breath: 1 } },
        { txt: "I insist that everyone attends. If we start making exceptions, the group will eventually drift apart.", w: { Blood: 4, Breath: -2 } }, 
        { txt: "I don't go. If it isn't doing me any good, there's no point in feeling tied to a commitment out of mere obligation.", w: { Breath: 3, Void: 3, Life: 1, Blood: -3 } },
        { txt: "I try to convince the group to tweak the plan to something less draining, but that still allows us to get together.", w: { Mind: 3, Life: 2, Space: 2, Heart: -1 } },
        { txt: "I analyze the reason for my exhaustion. It might have nothing to do with the tradition itself, but rather with some other factor in my life that is draining me.", w: { Heart: 3, Time: 2 } }
    ]},
   { t: "2. You discover a serious mistake by a coworker who is your friend. This could harm you in the future. What do you do?", opts: [
		{ txt: "I tell them exactly what I saw. They needs to have all the facts at hand to have clarity about their own situation.", w: { Light: 3, Rage: 3, Void: -3 } }, 
		{ txt: "I keep it a secret. Bringing it up now would only create a bad atmosphere and negative attention that nobody needs.", w: { Void: 4, Blood: 3, Light: -3 } }, 
		{ txt: "I don't interfere. If the mistake happened, the consequences will come naturally, and I don't think I should interfere with what has to be.", w: { Doom: 3, Time: 3, Life: -2 } },
		{ txt: "I warn them and help them figure out a way to fix the mistake beforehand that this could create a domino effect and make things worse.", w: { Life: 3, Space: 1, Mind: 1 } },
		{ txt: "It depends. Their mistake could harm me or the people around me.", w: { Mind: 3, Time: 2, Doom: -2 } }
	]},
	{ t: "3. When starting a new personal project, what is your biggest concern?", opts: [
		{ txt: "If I will be able to give shape to everything I imagined and make it really occupy the space it deserves in the world.", w: { Space: 3, Hope: 2, Time: -2 } },
		{ txt: "If I will have the necessary discipline not to give up on the project before finishing.", w: { Time: 3, Breath: 2, Space: -2, Life: 1 }, destroys: "Space" },
		{ txt: "If this project really means something about me or if i'm just following an impulse that doesn't represent me.", w: { Heart: 3, Rage: 3, Mind: -3 } },
		{ txt: "If i made the right decisions in planning or ended up ignoring some flaw that will ruin the result later.", w: { Mind: 3, Light: 1, Heart: -3 } },
		{ txt: "If what I'm creating will have the potential to take me to new places and truly change my current situation.", w: { Life: 3, Light: 2, Doom: -3 } }
	]},
    { t: "4. How do you deal with harsh criticism about your competence?", opts: [
		{ txt: "I assess whether the points raised make sense or if the person simply made the wrong decision in judging me that way.", w: { Heart: 3, Time: 1 } },
		{ txt: "I get deeply irritated. My competence should not be questioned because I always perform my work masterfully.", w: { Heart: 3, Light: 2 } },
		{ txt: "I question the real intention behind the criticism. People can judge for many different reasons.", w: { Light: 3, Rage: 2 } },
		{ txt: "I accept what was said. If I failed to be efficient, it's natural that I have to deal with the demands and the results of that.", w: { Doom: 3, Void: 1, Time: 2, Life: -2 } },
		{ txt: "I try to see what the other person saw. Sometimes they noticed a detail or important information that I missed.", w: { Blood: 3, Light: 2, Void: -2 } }
	]},
	{ t: "5. In a heated discussion, what irritates you most about others?", opts: [
		{ txt: "People who try to 'soften' the situation or maintain forced optimism when things are clearly a disaster.", w: { Rage: 3, Life: 2, Hope: -3 } },
		{ txt: "People who don't interfere or who close themselves off to possibilities just because 'the rules don't allow it' or 'it's impossible'.", w: { Hope: 4, Life: 1, Rage: 1 } },
		{ txt: "People who treat the problem in a cold and overly technical way, completely ignoring what the people involved are feeling.", w: { Heart: 3, Breath: 2, Mind: -3, Time: -1 } },
		{ txt: "People who lose control and start acting on pure emotional impulse, without stopping for a second to think about what is most sensible to do.", w: { Mind: 3, Space: 1, Heart: -3 } },
		{ txt: "People who keep going around in circles and focusing on details that are useless, instead of going straight to the point that really matters.", w: { Light: 3, Blood: 2, Time: 2, Void: -2 } }
	]},
    { t: "6. You have a free weekend. How does it feel to be idle?", opts: [
        { txt: "Restless. I feel that every hour spent without producing something concrete is a waste of a resource that never comes back.", w: { Time: 3, Life: 1, Space: -2 } }, 
        { txt: "A bit guilty. Being alone and idle makes me feel like I'm letting down the people who depend on me or losing touch with what matters.", w: { Blood: 3, Rage: 3, Doom: 1, Breath: -3 } },
        { txt: "Light. I enjoy the tranquility and use my time to focus on what I like doing and whatever strikes my fancy.", w: { Breath: 3, Space: 3, Hope: 2, Time: -3 } },
        { txt: "Reflective. I use the silence to try and understand if what I'm doing with my life right now is what I truly want.", w: { Heart: 3, Life: 2, Mind: -1, Light: -1 } },
        { txt: "Bored. If there isn't something new happening or some external stimulus, I feel like my energy is stagnating.", w: { Life: 3, Rage: 1, Mind: 2, Doom: -2 } }
    ]},
    { t: "7. What attracts you most to someone you’ve just met?", opts: [
        { txt: "Authenticity. I’m drawn to those who seem at peace with themselves and don’t pretend to be something they aren’t.", w: { Heart: 3, Blood: 2, Mind: -2 } },
        { txt: "Objectivity. I admire those who can be direct and consistent, without letting ego or emotions cloud what is sensible.", w: { Mind: 1, Light: 3, Heart: -3 } },
        { txt: "Reliability. I like people who exude a sense of security and seem to take their commitments seriously.", w: { Blood: 3, Rage: 1, Doom: 3, Breath: -2 } },
        { txt: "Mystery. I’m captivated by those who don’t reveal everything right away, and I feel compelled to uncover what lies behind the mask.", w: { Light: 2, Doom: 2, Void: -3 } },
        { txt: "Innovativeness. I’m interested in those who seem to be constantly creating or transforming the world around them.", w: { Space: 3, Life: 2, Time: -2 } }
    ]},
    { t: "8. You need to fire someone who works hard but isn't delivering results. How do you handle it?", opts: [
        { txt: "I focus on what is necessary for the system to function. If a part isn't playing its role, it needs to be pruned to serve the whole.", w: { Mind: 3, Space: 2, Blood: 2, Life: -3 } },
        { txt: "I try giving them another chance or moving them to a different role. I believe that, with the right encouragement, anyone can flourish and turn things around.", w: { Life: 3, Hope: 3, Doom: -3 } },
        { txt: "I feel the weight of the decision. I try to make the process as painless as possible, ensuring the person knows they still have my personal support.", w: { Breath: 3, Doom: 2, Heart: 2, Mind: -1 } },
        { txt: "I am direct and honest about the facts. Lying or offering false hope would only waste the person's time in a place where they have no future.", w: { Rage: 3, Light: 2, Hope: -3 } },
        { txt: "I analyze the situation objectively. If termination is the logical conclusion based on the data, I carry out the decision without letting sentimentality interfere with the verdict.", w: { Void: 3, Space: 2, Heart: -3 } }
    ]},
    { t: "9. What is your relationship with memories, photos, and the past?", opts: [
        { txt: "I carefully keep objects and photos. Having something physical to touch helps me feel that those moments and people still occupy a real space in my life.", w: { Time: 3, Doom: 2, Space: -2 } },
        { txt: "I look back on the past with appreciation. The future only exists because of the past, whether good or bad.", w: { Space: 3, Hope: 3 } },
        { txt: "The past serves as a learning experience. I hold onto what happened only to analyze the consequences of my choices and avoid making the same mistake again.", w: { Mind: 3, Light: 1 } },
        { txt: "My memories give me strength. I believe that what I’ve lived through is proof that better things can still be built in the future.", w: { Hope: 3, Breath: 2, Rage: 2 } },
        { txt: "I don't attach much importance to it. What’s past has lost its luster; I prefer to focus on the now without carrying the weight of what’s gone.", w: { Void: 3, Breath: 2, Time: -2 } }
    ]},
    { t: "10. Faced with an impasse that seems to have no solution, what is your reaction?", opts: [
        { txt: "I try to force a solution. Sometimes the only way out is to push through and knock down whatever is blocking the path, no matter the cost.", w: { Doom: 3, Rage: 1, Hope: -2 } },
        { txt: "I accept the limitation. If the path is closed, it means we’ve reached the end of the line; there’s no point fighting a situation that is already decided.", w: { Time: 3, Life: -3 } },
        { txt: "I refuse to accept that there is no solution. I believe there is always a way out if we persist and hold fast to our conviction.", w: {Hope: 3, Rage: 3, Life: 1 } },
        { txt: "I try to devise a new tool or approach the problem from a different angle to bypass the obstacle.", w: { Space: 3, Breath: 2, Mind: 3, Time: -1 } },
        { txt: "I stop everything and go back to investigating. If it seems unsolvable, it’s because there is still an important detail I haven't noticed yet.", w: { Light: 3, Time: 1, Void: -3 } }
    ]},
    { t: "11. A dangerous secret reaches you. What do you think?", opts: [
        { txt: "If this information was entrusted to me or if it could affect the people around me, I keep it to myself, no matter the burden.", w: { Blood: 3, Doom: 2, Void: 2, Breath: -2 } },
        { txt: "If this secret is revealed at the right moment, it could bring the clarity everyone needs to take action.", w: { Light: 3, Mind: 1, Void: -3 } },
        { txt: "Secrets are usually used to hide ugly truths or to manipulate those who are in the dark.", w: { Mind: 3, Rage: 2, Hope: -2 } },
        { txt: "I don't want to know. I don't want this information to disturb my peace or force me to take sides.", w: { Void: 3, Breath: 2, Light: -3 } },
        { txt: "A secret is just another variable that could alter the outcome of my future choices.", w: { Mind: 2, Time: 2, Heart: -2 } }
    ]},
    { t: "12. The group insists on a plan doomed by over-optimism. What do you do?", opts: [
        { txt: "I openly say it’s going to fail. I’d rather be the killjoy who speaks the truth than watch everyone get lost in a comfortable lie.", w: { Rage: 3, Blood: 2, Hope: -3 } },
        { txt: "I show why the idea makes no sense and present an alternative. I won’t follow a path that logic already shows is a dead end.", w: { Mind: 3, Light: 1, Heart: -2, Void: -3 } },
        { txt: "I stay out of it. If they came up with the plan, there must be some logic to it—it’s not my place to interfere.", w: { Void: 3, Doom: 1, Rage: -2 } },
        { txt: "I go along with them. I believe that if we keep our spirits and conviction high, our willpower might just change the final outcome.", w: { Hope: 3, Life: 2, Rage: -2 } }, 
        { txt: "I watch how things unfold. If they chose this path, failure is the natural consequence, and I’ll use the experience to avoid repeating the mistake.", w: { Space: 3, Light: 2, Time: -3 } }
    ]},
    { t: "13. You are in a place where no one knows you. How do you feel?", opts: [
        { txt: "Free. Without expectations, I can act without being labeled.", w: { Breath: 3, Space: 2, Blood: -2, Life: 1 } },
        { txt: "Despondent. I need to find something, or someone, to comfort me and validate my existence.", w: { Light: 3, Heart: 2, Void: 2, Breath: -3 } }, 
        { txt: "Observant. A perfect chance to analyze the local dynamics without getting involved.", w: { Void: 2, Time: 3, Heart: -1 } },
        { txt: "Imaginative. I take the moment to retreat into my own head.", w: { Hope: 3, Blood: 1, Void: -3 } },
        { txt: "Disconnected. Alone; I have no reason to be here.", w: { Blood: 3, Doom: 2, Breath: -3 } }
    ]},
    { t: "14. You need to hurt someone to achieve a goal. What hurts?", opts: [
        { txt: "The fact that I am being false to myself. I hate having to act against what I feel is right just to meet a goal.", w: { Heart: 3, Blood: -2, Hope: 2 } },
        { txt: "The frustration of not finding a better solution. Hurting someone was the necessary sacrifice.", w: { Doom: 3, Light: 3, Heart: -3 } },
        { txt: "The breach of trust. Knowing that this action will tarnish or destroy the bond I had with that person—perhaps forever.", w: { Blood: 3, Time: 2, Breath: -2 } },
        { txt: "The necessity of the sacrifice. It feels terrible to have to trample over someone or something living just to keep the project moving forward.", w: { Life: 3, Breath: 2, Hope: 1, Doom: -3 } },
        { txt: "The confirmation that the world is cruel. Hurting someone is just reality knocking at the door, showing that not everything can be resolved with good intentions.", w: { Rage: 3, Doom: 1, Hope: -3 } } 
    ]},
    { t: "15. What is your greatest fear regarding the future?", opts: [
        { txt: "Being trapped in a routine or a place I cannot escape. The idea of ​​losing my autonomy and being confined terrifies me.", w: { Breath: 3, Void: 2, Time: -3 } },
        { txt: "Realizing that my ideals were hollow and that the looming future is meaningless—a place where nothing I believed in can flourish.", w: { Hope: 3, Life: 3, Time: -3 } },
        { txt: "Realizing that my existence held no importance, or that I will pass through the world without anyone truly seeing me.", w: { Light: 3, Heart: 3, Void: -3 } },
        { txt: "Being exposed in a way I cannot control. I fear having my life scrutinized and losing the peace of anonymity.", w: { Void: 3, Mind: 2, Light: -3 } }, 
        { txt: "Not having enough time. I feel a constant anxiety that time is running out and I won't be able to finish what is necessary before the deadline expires.", w: { Time: 3, Doom: 3, Space: -2 } }
    ]},
    { t: "16. You are given a repetitive task. How do you react?", opts: [
        { txt: "I accept it. There is a certain comfort in repetition; knowing exactly what to expect and completing the cycle gives me a sense of security and order.", w: { Doom: 3, Time: 3, Space: -2, Life: -2 } },
        { txt: "I feel stifled. I hate anything that forces me to stand still or hinders my growth and the pursuit of something more vibrant.", w: { Life: 3, Breath: 2, Doom: -3 } }, 
        { txt: "I try to find the pattern behind it. If I understand how the process works, I can optimize it and execute it automatically.", w: { Mind: 3, Space: 2, Heart: -1 } },
        { txt: "I view it as an opportunity to 'switch off.' I perform the task mechanically while my mind drifts away.", w: { Void: 3, Breath: 3, Light: -2 } },
        { txt: "I question the task. I don't mind doing it, but I do question its purpose.", w: { Rage: 2, Light: 3 } }
    ]},
    { t: "17. In a competition, what is success?", opts: [
        { txt: "The perpetuation of an ideal. Success is showing that what I believe in is possible and managing to inspire others with that result.", w: { Hope: 3, Breath: 1, Life: 1, Rage: -3 } }, 
        { txt: "Victory. Success is when the competition reveals who is truly competent and who is not.", w: { Rage: 2, Light: 3, Hope: -3, Void: -3 } }, 
        { txt: "Camaraderie. Success isn't winning alone, but ensuring everyone emerged from the experience stronger.", w: { Blood: 3, Heart: 1, Breath: -2 } },
        { txt: "Perfection of the result. Success is when the final output reaches a level of technical excellence that cannot be disputed.", w: { Space: 3, Mind: 2, Time: -2 } },
        { txt: "The satisfaction of having given my best. If I put in the effort, regardless of the score, I am satisfied.", w: { Heart: 3, Void: 1, Mind: -3 } }
    ]},
    { t: "18. If you discovered that your entire journey up to this point had actually been planned or 'written' by someone else, what would bother you the most?", opts: [
        { txt: "The fact that my choices weren't truly mine. It’s infuriating to think my will was just a piece on a board I didn't control.", w: { Heart: 3, Blood: 1 } },
        { txt: "The doubt about what is true. If my story was written, the events I witnessed aren't genuine and need to be re-evaluated.", w: { Rage: 3, Mind: 1, Hope: -3 } },
        { txt: "I’d feel a deep sense of relief, actually. Knowing there’s a greater purpose and that nothing happened by chance gives me peace, knowing my life has real meaning.", w: { Hope: 3, Doom: 1, Rage: -3 } },
        { txt: "The feeling of being trapped. Knowing there’s a set track makes me feel chained to a role, when I just wanted the freedom to go wherever I pleased.", w: { Breath: 3, Space: 1 } },
        { txt: "The fear of the outcome. If there’s a script, there’s a planned ending; the idea that my limits and my 'expiration date' have already been decided is what scares me most.", w: { Time: 3, Doom: 3, Life: -2 } }
    ]},
    { t: "19. How do you prefer to be remembered?", opts: [
        { txt: "As someone who inspired others. I want my time in the world to be seen as an example that better things are possible.", w: { Hope: 3, Life: 2, Breath: 1 } },
        { txt: "For the things I created. I want to leave a tangible, lasting legacy—something that occupies real space even when I am no longer here.", w: { Space: 3, Time: 2, Void: -1 } }, 
        { txt: "As someone who was a pillar of support for those in need. I want to be remembered as the person who held things together when everything was on the verge of collapse.", w: { Blood: 3, Doom: 2 } },
        { txt: "I prefer not to be remembered publicly. My success lies in having lived my life in privacy and quiet, without needing external attention.", w: { Void: 3, Mind: 1, Light: -3 } },
        { txt: "I want my story to be seen as significant and as something that brought meaning to the people I loved.", w: { Light: 3, Heart: 3, Void: -3 } }
    ]},
    { t: "20. What does freedom mean to you?", opts: [
        { txt: "Not having to answer to anyone. Freedom is being able to go wherever I want and start over without the labels and expectations others impose on me.", w: { Breath: 3, Void: 2, Blood: -3 } }, 
        { txt: "Having the security of a place where I belong. True freedom is knowing there are people who won't abandon me.", w: { Blood: 3, Doom: 1, Breath: -3 } },
        { txt: "Freedom is having the health, energy, and resources to pursue everything life has to offer.", w: { Life: 3, Space: 2, Doom: -3 } },
        { txt: "Being my true self. Freedom is not having to wear masks or pretend to be someone else to be accepted by society.", w: { Heart: 3, Rage: 3, Mind: -3 } },
        { txt: "Having control over my choices. Freedom is understanding the paths ahead and being the only one responsible for the direction I decide to take.", w: { Mind: 3, Time: 2 } }
    ]}
];

const questionsByAspect = {
    "Time": [
    { t: "1. You have a vital project with an impossible deadline that expires today.",  opts: [
        { txt: "I sacrifice my sleep and health, using every second to ensure the delivery is flawless.", w: { Knight: 3, Maid: 2, Page: 1 } },
        { txt: "I get lost in distractions and lose track of time; if the deadline passes, so be it.", w: { Bard: 3, Heir: 1, Knight: -2 } },
        { txt: "I let the deadline pass and deal with the consequences as they come, without fighting the inevitable.", w: { Heir: 3, Bard: 2 } },
        { txt: "I know everything will work out, so I end up devoting my time to easing the burden of someone in crisis.", w: { Rogue: 3, Heir: 2, Thief: -2 } },
        { txt: "I stop everything to analyze where I went wrong in the schedule and try to predict the impact of my delay.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "2. A unique opportunity has passed, and you missed the deadline. How do you react the next day?", opts: [
        { txt: "I shrug it off; if the chance slipped away due to my own carelessness, it’s a sign it wasn't meant to be.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I dismiss the importance of what was lost; if the time for it has run out, it shouldn't take up any more space in my mind.", w: { Prince: 3, Bard: 1 } },
        { txt: "I refuse to accept 'no' for an answer. I try to convince those in charge to open a new spot just for me.", w: { Witch: 3, Thief: 2 } },
        { txt: "I help friends with their deadlines, trying to 'fix' others' time since I broke my own.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I create a strict rule for my routine so I never miss a chance due to carelessness again.", w: { Page: 3, Knight: 2, Bard: -1 } }
    ]},
    { t: "3. Someone close to you has passed away. How do you process this absence in the weeks that follow?", opts: [
        { txt: "I delete the memories and get rid of their belongings; the past is a burden I cannot handle.", w: { Prince: 3, Bard: 1, Sylph: -2 } },
        { txt: "I bury myself in practical tasks. I organize my routine and stay immersed in my obligations.", w: { Maid: 3, Knight: 2 } },
        { txt: "I let the memories fade away on their own; I allow time to erase the person's presence from my daily life.", w: { Bard: 3, Heir: 2 } },
        { txt: "I try to cope with the grief by dedicating myself to causes the person cared about or by living for their legacy.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I let the pain and longing guide me naturally, without trying to control or force myself to forget.", w: { Heir: 3, Seer: 2 } }
    ]},
    { t: "4. How do you view the concept of 'legacy,' and what do you leave for the future?", opts: [
        { txt: "It is a burden. I feel I must work tirelessly to be worthy of what came before me.", w: { Page: 3, Knight: 2 } },
        { txt: "I feel no responsibility to keep anything alive; if the past is lost due to neglect, so be it.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "It is a tool. Knowledge of the past serves only to help me predict and manipulate what is to come.", w: { Mage: 3, Seer: 2, Thief: 1 } },
        { txt: "Legacy is the past colonizing the future. I prefer to destroy traditions to make way for innovation.", w: { Prince: 3, Witch: 2 } },
        { txt: "It is a collective matter. I am merely a link, passing on what I received to those who need it most.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "5. You are in a supermarket line that isn't moving, and you have an important appointment right after.", opts: [
        { txt: "I try to switch lines or hurry the people around me. I won't let delays change my plans.", w: { Thief: 3, Witch: 2 } },
        { txt: "I take charge. I help organize the groceries or guide those who are confused so things keep moving.", w: { Maid: 3, Sylph: 2, Knight: 1 } },
        { txt: "I stay calm. I know time takes its course and stressing out won't make the line move any faster.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I accept the delay without a fight; I use the slow line as an excuse and don't stress about the outcome.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I calculate exactly how much longer I can wait before giving up, based on the likelihood of a delay.", w: { Seer: 3, Mage: 2, Page: 1 } }
    ]},
   { t: "6. If you could change something about a tragic event in your past, how would you approach it?", opts: [
        { txt: "I wouldn't change a thing. Trauma is a necessary lesson, and fate shouldn't be altered on a whim.", w: { Heir: 3, Seer: 2, Witch: -2 } },
        { txt: "I'd leave it as is; the misfortune broke who I was and forced me to move forward.", w: { Bard: 3, Heir: 1 } },
        { txt: "I would destroy the cause of the event without hesitation. The freedom to change things matters more than time itself.", w: { Prince: 3, Witch: 3 } },
        { txt: "I would prepare myself better. If I had known what was coming, I would have worked twice as hard to protect what I lost.", w: { Knight: 3, Page: 2, Maid: 1 } },
        { txt: "I would try to find something good in the tragedy to help others, turning pain into a resource.", w: { Rogue: 3, Sylph: 2, Heir: 1 } }
    ]},
    { t: "7. You find an old, broken tool or object that belonged to your family. What do you do?", opts: [
        { txt: "I fix it immediately; I feel an obligation to restore the function of what time tried to destroy.", w: { Maid: 3, Sylph: 2, Knight: 1 } },
        { txt: "I use its parts to create something new; the past serves only as raw material for the future.", w: { Witch: 3, Prince: 2 } },
        { txt: "I leave the object where it is; if it has broken and aged, I see no point in trying to save it now.", w: { Bard: 3, Heir: 1, Maid: -2 } },
        { txt: "I analyze the object to understand the story of the person who used it; it is a record that teaches about the end.", w: { Seer: 3, Mage: 2 } },
        { txt: "I give the object to someone who knows how to appreciate it; I don't want to carry the weight of something that is dead.", w: { Rogue: 3, Heir: 2 } }
    ]},
    { t: "8. Someone asks you for a favor that will take up every hour of your only day off during the week.", opts: [
        { txt: "I say no immediately; my free time is the boundary I set to avoid being consumed.", w: { Prince: 3, Thief: 2 } },
        { txt: "I give in to the pressure, but spend the day feeling drained and like I'm wasting my life.", w: { Rogue: 3, Page: 2 } },
        { txt: "I say I'll help, but I end up running so late that the person gives up on waiting for me.", w: { Bard: 3, Prince: 1, Maid: -2 } },
        { txt: "I help as quickly as possible; I use my knowledge to finish in half the expected time.", w: { Witch: 3, Mage: 2, Maid: 1 } },
        { txt: "I accept the favor as part of the day; if that's how the time is to be spent, I adapt and find satisfaction.", w: { Heir: 3, Sylph: 2 } }
    ]},
    { t: "9. You are watching a movie or reading a book and realize the ending will be sad and inevitable. How do you react?", opts: [
        { txt: "I stop reading immediately; I refuse to spend my time on a conclusion I’ve already accepted.", w: { Prince: 3, Witch: 1, Seer: -2 } },
        { txt: "I see it through to the end, even if it hurts; I need to understand how to avoid something like that in real life.", w: { Mage: 3, Seer: 2 } },
        { txt: "I try to convince others to watch it with me; sharing the emotional burden makes the ending less heavy.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I look for spoilers; if the ending is going to be bad, I’d rather get the suspense over with and not waste time.", w: { Bard: 3, Thief: 2 } },
        { txt: "I obsess over the work's technical details to distance myself from the path leading to death.", w: { Knight: 3, Maid: 2 } }
    ]},
    { t: "10. You are rehearsing a group musical performance, but someone always comes in off-beat.", opts: [
        { txt: "I take over counting out loud and set the rhythm so everyone can keep up.", w: { Knight: 3, Maid: 2, Seer: 1 } },
        { txt: "If the person can't hold their timing, I take that part on myself before everything falls apart.", w: { Thief: 3, Witch: 1, Rogue: -1 } },
        { txt: "I stop the rehearsal to figure out exactly which repetition the mistake started on.", w: { Seer: 3, Mage: 2 } },
        { txt: "I repeat my part silently until the timing clicks, even if I don't feel ready yet.", w: { Page: 3, Heir: 1 } },
        { txt: "I let the mistake happen a few times; perhaps the group will find a more natural rhythm because of it.", w: { Heir: 3, Bard: 1 } }
    ]},
   { t: "11. You realize you're falling behind in a skill that everyone around you seems to have mastered.", opts: [
        { txt: "I practice in secret until I can step out at the perfect moment and surprise everyone.", w: { Page: 3, Thief: 1 } },
        { txt: "I pick up the tricks used by those who are better and adapt them to speed up my own progress.", w: { Thief: 3, Mage: 2, Rogue: -1 } },
        { txt: "I accept that I have my own pace and let practice become a natural part of my routine.", w: { Heir: 3, Maid: 1 } },
        { txt: "I create a strict training plan with small goals and deadlines for each stage.", w: { Knight: 3, Page: 2, Bard: -1 } },
        { txt: "I analyze why I'm lagging behind and try to identify the pattern that's holding me back.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "12. An important opportunity arises, but the spot is limited, and someone else wants it badly too.", opts: [
        { txt: "I secure my spot before anyone else has time to react.", w: { Thief: 3, Knight: 1, Rogue: -2 } },
        { txt: "I try to alter the terms of the opening to create an opening for more than one person.", w: { Witch: 3, Rogue: 2 } },
        { txt: "I pass the opportunity on if the other person seems to need it more right now.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I hesitate too long, torn between wanting to try and doubting I'm ready.", w: { Page: 3, Seer: 1 } },
        { txt: "I bow out before it becomes a source of suffering; not every opportunity is worth pursuing.", w: { Prince: 3, Bard: 1 } }
    ]},
    { t: "13. You come across old recordings of yourself from a time when you were still very inexperienced.", opts: [
        { txt: "I analyze every mistake to understand how my rhythm and choices have changed over time.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use this as proof that I’ve improved and can still go much further.", w: { Page: 3, Knight: 1, Heir: 1 } },
        { txt: "I delete everything; I don’t want an old version of myself taking up space in my story.", w: { Prince: 3, Thief: 1, Sylph: -2 } },
        { txt: "I keep the recordings as a memento; even if they’re bad, they show the path I’ve traveled.", w: { Maid: 3, Heir: 2 } },
        { txt: "I show them to someone just starting out, so they can see that they too can grow.", w: { Sylph: 3, Rogue: 2 } }
    ]},
   { t: "14. A repetitive task must be performed every day for months.", opts: [
        { txt: "I create a system, shortcut, or workaround to bend the routine to my advantage.", w: { Witch: 3, Mage: 1, Maid: 1 } },
        { txt: "I pick the most advantageous times first; whoever is slow gets whatever is left.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I turn the repetition into a duty; if it needs to be done, then it will be done.", w: { Knight: 3, Maid: 2, Bard: -1 } },
        { txt: "I let small delays pile up until the routine falls apart without a major explosion.", w: { Bard: 3, Heir: 1, Maid: -2 } },
        { txt: "I treat each repetition as training; boring or not, mastery is being built there.", w: { Page: 3, Knight: 2, Thief: 1 } }
    ]},
   { t: "15. Someone uses years of your work as a foundation to grow faster, without giving you credit.", opts: [
        { txt: "I take the lead back; if they grew off my time, I can use that as momentum too.", w: { Thief: 3, Witch: 2 } },
        { txt: "I lay out the entire timeline and make it clear who did what, when, and for how long.", w: { Seer: 3, Mage: 2 } },
        { txt: "I cut ties with the project; nothing that erases my time deserves to keep being fueled.", w: { Prince: 3, Knight: 1 } },
        { txt: "I try to mend the situation so everyone involved gets recognition for the time invested.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I get stuck between the feeling of having been robbed and the doubt that maybe I'm still not good enough.", w: { Page: 3, Mage: 1 } }
    ]},
    { t: "16. A decisive answer, capable of changing your future plans, takes weeks to arrive.", opts: [
        { txt: "I go on living as if the answer will arrive when it’s meant to.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I send messages, call, and demand an answer; the decision must be wrested out before the waiting consumes everything.", w: { Thief: 3, Witch: 2, Heir: -2 } },
        { txt: "I prepare several possible futures—one for each likely answer.", w: { Seer: 3, Mage: 2 } },
        { txt: "Since my own future is on hold, I focus on helping others with their time.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I use the wait as a test of patience, even though anxiety is eating away at me inside.", w: { Page: 3, Knight: 1, Heir: 1 } }
    ]},
    { t: "17. A friend is trapped in nostalgia and cannot move forward.", opts: [
        { txt: "I organize memories, rituals, and farewells until the past stops hurting so much.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I pull the person out of stagnation with new things, new places, and a forced next chapter if necessary.", w: { Witch: 3, Sylph: 1 } },
        { txt: "I carefully observe the pattern that keeps drawing the person back to the same time period.", w: { Seer: 3, Mage: 2 } },
        { txt: "I say that certain memories need to die, or the present will never have room to exist.", w: { Prince: 3, Bard: 1, Sylph: -2 } },
        { txt: "I share a personal experience of overcoming something, even if I am still learning to cope with it myself.", w: { Page: 3, Rogue: 2, Mage: 1 } }
    ]},
    { t: "18. You have a single free day before a very difficult phase begins.", opts: [
        { txt: "Rest without guilt; if free time has appeared, it is part of the flow.", w: { Heir: 3 } },
        { txt: "Train, get a head start on tasks, and turn the free day into an advantage to survive what comes next.", w: { Knight: 3, Page: 2 } },
        { txt: "Claim this time for myself and let no one touch it, even if others are in need.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "Share the day among several people, leaving everyone a little better prepared.", w: { Rogue: 3, Sylph: 2, Thief: -1 } },
        { txt: "Let distractions swallow the hours; the difficult phase is coming regardless.", w: { Bard: 3, Heir: 1, Knight: -2 } }
    ]},
    { t: "19. A phase of your life is clearly coming to an end, and there is no going back to how things were.", opts: [
        { txt: "I make one last bold move before the end happens on its own.", w: { Thief: 3, Prince: 1, Witch: 1 } },
        { txt: "I document everything—photos, writings, objects, and memories—to preserve the meaning of that time.", w: { Maid: 3, Seer: 2, Heir: 1 } },
        { txt: "I accept the change as inevitable, without trying to hold back the next phase at the door.", w: { Heir: 3, Bard: 1 } },
        { txt: "I try to understand what this cycle of endings and new beginnings is teaching me about myself.", w: { Mage: 3, Page: 2, Seer: 1 } },
        { txt: "I break away from the old phase once and for all; prolonging the farewell only weakens the ending.", w: { Prince: 3, Knight: 1 } }
    ]},
   { t: "20. How do you feel about others' punctuality?", opts: [
        { txt: "I demand absolute precision; others being late is an affront to the order I try to maintain.", w: { Maid: 3, Knight: 2, Bard: -2 } },
        { txt: "I don't mind; time is fluid, and people arrive when they are meant to arrive.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I'm usually late myself, so I don't judge; I love it when others are late too—it takes the pressure off me.", w: { Bard: 3, Heir: 2, Maid: -2 } },
        { txt: "I use the time they're late to steal a few moments for my own activities.", w: { Thief: 3, Witch: 2 } },
        { txt: "I analyze the reasons for the delay, trying to predict if it will become a pattern.", w: { Seer: 3, Mage: 2 } }
    ]}
	],
   "Space": [
    { t: "1. You share a room with someone extremely disorganized whose belongings are 'spilling over' onto your side of the desk.", opts: [
        { txt: "I clean up their mess without asking. The disorder offends my need for a functional environment.", w: { Maid: 3, Knight: 2, Bard: -2 } },
        { txt: "I throw everything in the trash immediately. Clutter is wasteful, and I prefer emptiness to disorder.", w: { Prince: 3, Bard: 2, Sylph: -3, Maid: -2 } },
        { txt: "I don't even notice. I just push their things aside to make room for my plate and go on with life amidst the chaos.", w: { Bard: 3, Heir: 2, Prince: -2 } },
        { txt: "I take their most useful items and incorporate them into my side. If they won't take care of them, I'll put them to better use.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "I try to reorganize their things so the space is easier to maintain without me having to redo everything later.", w: { Sylph: 3, Maid: 2 } }
    ]},
   { t: "2. You are at a party where you don't know anyone, and the setting feels too vast to get your bearings.", opts: [
        { txt: "I wander around the space until I find a corner, object, or interesting detail where I can naturally fit in.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I start observing the layout: where people are gathering, where there's room to breathe, and which corners seem most comfortable.", w: { Seer: 3, Mage: 2 } },
        { txt: "If the environment doesn't welcome me, I create my own little territory: I sit down, set my things down, and make that my anchor point.", w: { Maid: 3, Knight: 2 } },
        { txt: "I end up encroaching on others' space without really noticing: I leave my bag, drink, or body wherever I can, just trying to feel less out of place.", w: { Page: 3, Thief: 2 } },
        { txt: "If I find the place unpleasant or too uncomfortable, I simply leave or isolate myself. I have no patience for an environment that pushes me away.", w: { Prince: 3, Bard: 2, Sylph: -1 } }
    ]},
   { t: "3. A close friend has moved to another country, and the friendship now depends on dealing with physical distance.", opts: [
        { txt: "I accept that the relationship will change form. I don't try to force the same kind of presence as before; I simply let the friendship find a new space.", w: { Heir: 3, Seer: 2 } },
        { txt: "I create tangible ways to maintain a presence: photos, scheduled calls, letters, gifts, or small objects that remind me of the person.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I gradually stop keeping in touch. If the person is no longer part of my daily life, they naturally drift out of my field of attention.", w: { Bard: 3, Heir: 2, Sylph: -2 } },
        { txt: "I try to occupy a part of the person's new space from afar by asking for photos, details, and updates about where they live now.", w: { Witch: 3, Knight: 2 } },
        { txt: "I feel the absence as a vast void and try to fill it with other people, places, or routines so I don't have to stare at the emptiness.", w: { Rogue: 3, Sylph: 1 } }
    ]},
    { t: "4. You’ve decided to take up a hands-on or creative hobby, but you lack the right tools and an ideal place to practice.", opts: [
        { txt: "I improvise with what I have. Any object can become a tool if I figure out how to use it.", w: { Knight: 3, Mage: 2 } },
        { txt: "I clear a corner, gather materials, and set up a dedicated space to start things off right.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I borrow materials, take over other people's tables, and leave my stuff scattered around until the hobby fits into the house.", w: { Thief: 3, Page: 2 } },
        { txt: "I just dive in. If it turns out crooked, broken, or odd, that’s all part of the process.", w: { Bard: 3, Heir: 2 } },
        { txt: "I experiment, make mistakes, and physically adjust things until I truly understand how the material works.", w: { Mage: 3, Knight: 2 } }
    ]},
    { t: "5. Someone enters your room without knocking while you are focused on something creative.", opts: [
        { txt: "I kick the person out immediately. My creative space is no place for random intrusions.", w: { Prince: 3, Knight: 2, Sylph: -2 } },
        { txt: "I hide what I'm doing. It's still too unfinished for anyone to see.", w: { Rogue: 3, Page: 2 } },
        { txt: "I incorporate the interruption into the process. If the person showed up, perhaps it will shift the direction of the creation in an interesting way.", w: { Witch: 3, Heir: 2 } },
        { txt: "I do nothing. The person enters, looks, pokes around, and speaks, while I remain in my own world as if the room were still solely mine.", w: { Bard: 3, Mage: 1, Knight: -2 } },
        { txt: "I take advantage of the person's presence to ask for a practical opinion on form, color, placement, or composition.", w: { Sylph: 3, Seer: 2 } }
    ]},
    { t: "6. You are in a crowded, uncomfortable elevator.", opts: [
        { txt: "I try to take up as little space as possible, almost blending into the wall so I don't bother anyone.", w: { Rogue: 3, Page: 2, Thief: -2 } },
        { txt: "I analyze where everyone is standing and find the best way to position myself without making the crowding worse.", w: { Seer: 3, Knight: 2 } },
        { txt: "I tune out the discomfort. I stare at a random spot and wait for the elevator to arrive.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I get annoyed by the lack of space and claim my spot if I have to. I have a right to fit in there, too.", w: { Prince: 3, Thief: 2, Rogue: -2 } },
        { txt: "I try to lighten the mood with a casual comment, making the space feel less stifling for everyone.", w: { Sylph: 3, Heir: 2 } }
    ]},
    { t: "7. While moving, you come across objects from a relationship or phase of life that ended badly.", opts: [
        { txt: "I destroy or discard everything. I don't want these objects taking up space in my life anymore.", w: { Prince: 3, Witch: 2, Sylph: -1 } },
        { txt: "I keep a few things because they are still part of how my story took shape.", w: { Mage: 3, Heir: 2 } },
        { txt: "I give the objects to someone who can use them. If they no longer fit my life, they might still serve a purpose elsewhere.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I leave everything in a corner for too long. I don't use them or throw them away; I just let the objects exist until they fade from my view.", w: { Bard: 3, Heir: 2 } },
        { txt: "I take the beautiful or useful objects and incorporate them into my current space, even if they originally belonged to another phase or person.", w: { Thief: 3, Witch: 1, Rogue: -2 } }
    ]},
    { t: "8. You need to reorganize a small room to accommodate a new function.", opts: [
        { txt: "I measure everything, reposition furniture, and try to place each object in the most efficient spot possible.", w: { Knight: 3, Seer: 2 } },
        { txt: "If there isn't enough space, I create it: I clear out the excess, free up surfaces, and open up pathways.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I start moving things around without a fixed plan, testing combinations until the room feels right.", w: { Witch: 3, Heir: 2 } },
        { txt: "I pile things up in corners and use whatever nook is available, even if the result ends up looking a bit chaotic.", w: { Page: 3, Thief: 2, Knight: -1 } },
        { txt: "I decide the room simply isn't suitable for that purpose and scrap the idea before wasting energy trying to force it.", w: { Prince: 3, Bard: 1 } }
    ]},
    { t: "9. You get lost in an unfamiliar city; your phone battery is dead, and there are few recognizable landmarks around.", opts: [
        { txt: "I observe the streets, corners, signs, the flow of people, and landmarks until I’ve built a mental map of the place.", w: { Seer: 3, Mage: 2 } },
        { txt: "I keep walking until a path feels right. If the space led me here, it can also lead me out.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I turn what I have into a tool: I sketch a makeshift map, mark the path, or use shadows and building facades to orient myself.", w: { Witch: 3, Knight: 1 } },
        { txt: "I ask for help and let someone else guide me to a safe spot, even if it makes me feel a bit lost and dependent.", w: { Page: 3, Rogue: 2 } },
        { txt: "I take the most direct route possible. If a street, wall, or gate stands in my way, I find a direct way to cross or get around it.", w: { Prince: 3, Thief: 1 } }
    ]},
    { t: "10. You are participating in a group painting on a large wall, but everyone has a different idea for how to use the space.", opts: [
        { txt: "I try to weave everyone's ideas into a composition that feels alive, without erasing anyone's contribution.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I claim the most visible part of the wall to develop my main idea before the space gets taken over by inferior proposals.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "I analyze the entire wall before touching it: proportion, visual flow, balance, negative space, and where each element should go.", w: { Seer: 3, Mage: 2 } },
        { txt: "I accept a smaller area and try to make it beautiful enough to strengthen the whole.", w: { Rogue: 3, Page: 2 } },
        { txt: "If the composition is becoming cluttered, I advocate cutting out entire sections before the mural turns into a mere jumble.", w: { Prince: 3, Knight: 1 } }
    ]},
    { t: "11. You are tending to a plant, garden, or small crop that is just getting started.", opts: [
        { txt: "I prepare the space with care: pot, soil, light, water, and a spot where it can grow without being crushed.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I study the plant and the environment until I understand what that organism needs from that specific space.", w: { Mage: 3, Seer: 2 } },
        { txt: "I change the pot, position, support, and lighting as many times as necessary until the plant responds better.", w: { Witch: 3, Sylph: 1 } },
        { txt: "I learn through hands-on experience, making mistakes with water, sunlight, and spacing until I start to understand how to care for it properly.", w: { Page: 3, Mage: 1 } },
        { txt: "If the plant doesn't thrive, I accept that the space wasn't right for it and let the attempt die out without pushing too hard.", w: { Bard: 3, Heir: 1, Maid: -2 } }
    ]},
    { t: "12. You need to photograph or draw a scene, but you realize that the empty space around the object is just as important as the object itself.", opts: [
        { txt: "I consider the entire composition: breathing room, framing, proportion, and what the empty space communicates.", w: { Seer: 3, Mage: 2 } },
        { txt: "I ruthlessly cut away the excess. If something doesn't strengthen the image, it's just taking up space.", w: { Prince: 3, Witch: 1, Sylph: -1 } },
        { txt: "I arrange the scene so that every element looks like it's exactly where it should be.", w: { Maid: 3, Knight: 2 } },
        { txt: "I use an existing reference to understand how others handle this type of composition.", w: { Page: 3, Seer: 1 } },
        { txt: "I take a visual solution from another work and make it the centerpiece of my own image.", w: { Thief: 3, Witch: 2, Rogue: -2 } }
    ]},
    { t: "13. You share a studio, workbench, or creative space with others, and materials are limited.", opts: [
        { txt: "I distribute materials, tools, and space based on what each person actually needs to create.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I secure the materials that suit my project first. If I wait too long, someone else will put them to poor use.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I safeguard a functional area so work can continue; without a minimum level of order, no one can create anything properly.", w: { Knight: 3, Maid: 2 } },
        { txt: "I take the leftovers and try to prove I can make something good even without the best materials.", w: { Page: 3, Mage: 1 } },
        { txt: "If someone wastes space or materials, I revoke their privileges without ceremony.", w: { Prince: 3, Knight: 1, Sylph: -1 } }
    ]},
    { t: "14. You find a damaged old item: a drawing, a garment, a handcrafted object, or a piece of decor with sentimental value.", opts: [
        { txt: "I restore it patiently, trying to preserve the original form without erasing the marks that tell its story.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I analyze the material, technique, and damage before deciding whether it's worth restoring, adapting, or leaving as is.", w: { Mage: 3, Seer: 2 } },
        { txt: "I take the piece apart and repurpose only the usable parts for a new creation.", w: { Prince: 3, Witch: 2 } },
        { txt: "I pass it on to someone who would know how to care for it better or give the object a more beautiful purpose.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I put it aside without touching it. I don't want to destroy it, but I also can't deal with it demanding my attention.", w: { Bard: 3, Heir: 1 } }
    ]},
    { t: "15. You are creating a fictional world, an RPG map, or a setting for a story.", opts: [
        { txt: "I start by opening up possibilities: regions, cultures, biomes, strange objects, and places that might not even make it into the plot.", w: { Heir: 3, Page: 1 } },
        { txt: "I think of the map as a system: distances, borders, resources, movement, and how the environment shapes those who live there.", w: { Seer: 3, Mage: 2 } },
        { txt: "I alter the geography, physical laws, and scale until the world best serves the experience I want to create.", w: { Witch: 3, Prince: 1 } },
        { txt: "I create safe havens, routes, homes, tools, and communal spaces before even deciding on the main conflict.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I'll just keep adding ideas without much hierarchy. The world might become huge and somewhat chaotic, but at least it feels alive.", w: { Bard: 3, Rogue: 1 } }
    ]},
    { t: "16. You are helping to organize an event in a public space and realize that some people wouldn't be able to move around easily there.", opts: [
        { txt: "I rearrange the layout with accessibility, rest areas, traffic flow, and comfort in mind for those who might otherwise be left out.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I mark out routes, entrances, exits, and support points so everyone understands how to use the space without getting lost.", w: { Knight: 3, Seer: 2 } },
        { txt: "I get the venue ready before the event starts—setting up chairs, signage, tables, and open spaces—to prevent issues later on.", w: { Maid: 3, Witch: 1 } },
        { txt: "I secure a better spot for my group before it gets taken by people who don't really need it as much.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "I ask where I can help, but I feel unsure about changing anything major for fear of getting in the way.", w: { Page: 3, Sylph: 1 } }
    ]},
    { t: "17. An important object is too big, too small, or too strange to fit where it’s supposed to.", opts: [
        { txt: "I study the object's dimensions, limits, and properties until I figure out why it doesn't fit.", w: { Mage: 3, Seer: 2 } },
        { txt: "I alter the object or its surroundings until the scale finally makes sense.", w: { Witch: 3, Prince: 1 } },
        { txt: "I try some unconventional solutions first, learning through trial and error what fits, what breaks, and what looks ridiculous.", w: { Page: 3, Knight: 1 } },
        { txt: "I look for another use or a different place where it might serve better, even if it wasn't the original plan.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I just leave it there. Sometimes the environment simply needs to accept something odd taking up space.", w: { Bard: 3, Heir: 1 } }
    ]},
    { t: "18. You need to pack a small suitcase for a long trip, and not everything you'd like to take fits.", opts: [
        { txt: "I choose each item based on function and pack everything precisely to make the most of the space.", w: { Knight: 3, Maid: 2 } },
        { txt: "I visualize possible combinations before closing the suitcase, considering what each object might be useful for later.", w: { Seer: 3, Mage: 2 } },
        { txt: "I pack my favorites first and let the rest fight for whatever space is left.", w: { Thief: 3, Page: 1, Rogue: -2 } },
        { txt: "I remove some of my own things to make room for items others might need during the trip.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I ruthlessly cut half the options. If it doesn't fit, it doesn't deserve to go.", w: { Prince: 3, Witch: 1 } }
    ]},
    { t: "19. You face a creative block: a blank canvas, sheet, or file waiting to be filled.", opts: [
        { txt: "I start by placing any shape, color, or small detail. The important thing is to give the emptiness something to grow from.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I scribble anything without worrying if it’ll turn out well. Sometimes a creation needs to start out lopsided before it becomes something.", w: { Bard: 3, Heir: 2 } },
        { txt: "I open up references and end up using someone else's composition or aesthetic as a base more than I probably should.", w: { Page: 3, Rogue: 2 } },
        { txt: "I destroy the beginning, switch materials, or turn the page. If the space doesn't want to work that way, I cut out the whole shape.", w: { Prince: 3, Witch: 2 } },
        { txt: "I take an idea, aesthetic, or technique from someone else and make it the core of my creation, until it feels like it originated with me.", w: { Thief: 3, Witch: 2, Rogue: -2 } }
    ]},
    { t: "20. You are alone in a quiet room, with no immediate stimuli other than your surroundings.", opts: [
        { txt: "I start noticing the arrangement of objects, the shadows, the textures, and small details I usually overlook.", w: { Seer: 3, Mage: 2 } },
        { txt: "I take the opportunity to tinker with the environment: tidying a shelf, moving something, or creating a new atmosphere in the room.", w: { Maid: 3, Knight: 2 } },
        { txt: "I perceive the empty space as freedom. With no one around, I can simply exist on my own terms and let the room breathe.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I fill the silence with things: playing videos, grabbing a snack, fiddling with objects, or seeking any stimulus to occupy the void.", w: { Thief: 3, Page: 2 } },
        { txt: "I lie down and stare at the ceiling. The lack of stimulation makes me zone out, and I simply let my body exist there for a while.", w: { Bard: 3, Heir: 2, Knight: -2 } }
    ]}
	],
   "Rage": [
    { t: "1. Someone tries to sell you an idea that seems too perfect, saying you just need to trust them and stop looking for flaws.", opts: [
        { txt: "My first reaction is to look for where the idea starts to seem fake. If it requires so much of my trust, I want to know why.", w: { Heir: 3, Mage: 2 } },
        { txt: "I ask questions until I find out if the idea can withstand opposition without falling apart.", w: { Seer: 3, Knight: 2 } },
        { txt: "I say no before I get pushed into a choice I haven't had time to properly question.", w: { Rogue: 3, Heir: 2 } },
        { txt: "I poke at the person's insecurities until they start revealing where their own narrative falls apart.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "I want to believe it at first, but any odd detail makes me lose trust very quickly.", w: { Bard: 3, Page: 2 } }
    ]},
    { t: "Você sente que alguém está tentando minimizar uma preocupação sua com um 'relaxa, não é nada'.", opts: [
        { txt: "Insisto no incômodo. Se algo acendeu meu alerta, não vou deixar outra pessoa desligar isso por conveniência.", w: { Heir: 3, Rogue: 2 } },
        { txt: "Tento entender se minha reação vem de experiência real ou se estou projetando medo onde talvez não exista.", w: { Mage: 3, Seer: 2 } },
        { txt: "Aponto o risco concreto que estão ignorando, mesmo que isso me faça parecer negativo.", w: { Seer: 3, Sylph: 2 } },
        { txt: "Começo a duvidar da minha própria reação e acabo deixando a pessoa me convencer de que estou exagerando.", w: { Page: 3, Rogue: 2, Heir: -1 } },
        { txt: "Uso a irritação para resolver a situação logo, antes que alguém consiga me empurrar para a passividade.", w: { Knight: 3, Maid: 2 } }
    ]},
    { t: "Você vê uma campanha publicitária usando uma causa séria para parecer profunda, mas sem dizer nada de concreto.", opts: [
        { txt: "Transformo minha irritação em crítica pública; se a mensagem é vazia, alguém precisa apontar o truque.", w: { Knight: 3, Prince: 2 } },
        { txt: "Uso a própria estética da campanha contra ela, criando uma paródia que expõe o quanto tudo ali é falso.", w: { Witch: 3, Bard: 2 } },
        { txt: "Tento explicar por que aquilo prejudica a causa que finge defender, mesmo que as pessoas achem exagero.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aproveito a indignação que a campanha gerou para puxar atenção para minha própria crítica.", w: { Thief: 3, Witch: 2 } },
        { txt: "No começo eu caio na mensagem bonita, mas quando percebo o vazio por trás fico com vergonha de ter acreditado.", w: { Page: 3, Bard: 1 } }
    ]},
    { t: "Uma conversa em grupo vira uma disputa para ver quem é mais correto, puro ou consciente.", opts: [
        { txt: "Corto a dinâmica antes que vire teatro moral. Ninguém está tentando resolver nada, só vencer a pose.", w: { Prince: 3, Knight: 2 } },
        { txt: "Uso a tensão a meu favor e provoco as contradições de cada pessoa até a máscara cair.", w: { Witch: 3, Thief: 2, Rogue: -1 } },
        { txt: "Tento redirecionar a raiva para algo útil, porque só competir por superioridade não muda nada.", w: { Maid: 3, Sylph: 2, Bard: -1 } },
        { txt: "Fico quieto por medo de falar errado, mas acabo absorvendo a paranoia do grupo inteiro.", w: { Page: 3, Bard: 2 } },
        { txt: "Defendo quem está sendo esmagado pela conversa, mesmo que a pessoa tenha se expressado mal.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "Você encontra uma obra de arte feita claramente para incomodar, provocar nojo ou deixar o público desconfortável.", opts: [
        { txt: "Gosto justamente porque ela não tenta ser agradável; às vezes a função da arte é perturbar.", w: { Bard: 3, Heir: 1 } },
        { txt: "Tento entender qual mentira social a obra está rasgando antes de decidir se a provocação funciona.", w: { Mage: 3, Seer: 2 } },
        { txt: "Uso a obra como ponto de partida para discutir o que as pessoas preferem fingir que não existe.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Acho covarde quando a obra só choca por chocar. Se vai destruir conforto, que destrua alguma coisa real.", w: { Knight: 3, Prince: 2 } },
        { txt: "Quero fazer algo ainda mais incômodo, só para ver até onde o público aguenta encarar.", w: { Thief: 3, Witch: 2, Sylph: -1 } }
    ]},
    { t: "Um boato começa a circular, e ninguém sabe se é verdade, mas todo mundo já está reagindo.", opts: [
        { txt: "Espalho a dúvida de volta para o grupo. Se ninguém sabe de nada, ninguém deveria estar confortável.", w: { Bard: 3, Witch: 2, Maid: -1 } },
        { txt: "Tento criar um caminho mínimo de verificação antes que a paranoia machuque alguém de verdade.", w: { Maid: 3, Seer: 2, Bard: -1 } },
        { txt: "Uso o boato para descobrir quem se aproveita do caos e quem tenta proteger os outros.", w: { Thief: 3, Mage: 1 } },
        { txt: "Faço perguntas diretas às pessoas envolvidas, mesmo que isso torne o clima imediatamente pior.", w: { Knight: 3, Prince: 1 } },
        { txt: "Fico entre acreditar e duvidar, reagindo forte demais a cada nova versão que aparece.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "Você percebe que uma regra existe só para manter as pessoas obedientes, não porque ela faz sentido.", opts: [
        { txt: "Quebro a regra em público para provar que ela só funciona enquanto todo mundo finge acreditar.", w: { Bard: 3, Prince: 2, Maid: -1 } },
        { txt: "Procuro uma brecha e uso a própria estrutura da regra contra quem tenta aplicá-la.", w: { Witch: 3, Thief: 2 } },
        { txt: "Organizo uma forma prática de resistir sem deixar as pessoas mais vulneráveis ao castigo.", w: { Maid: 3, Rogue: 2, Bard: -1 } },
        { txt: "Desmonto a regra antes dos outros e trato a revolta deles como atraso; se alguém vai enxergar a farsa direito, vai ser por mim.", w: { Thief: 3, Prince: 2, Sylph: -1 } },
        { txt: "Tenho vontade de desafiar, mas espero alguém mais corajoso começar para saber se é seguro.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Durante uma discussão, alguém usa calma e educação para esconder uma fala cruel.", opts: [
        { txt: "Arranco a gentileza falsa da conversa e respondo ao que a pessoa realmente quis dizer.", w: { Prince: 3, Knight: 2 } },
        { txt: "Devolvo no mesmo tom polido, mas torcendo as palavras até a crueldade dela ficar impossível de esconder.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "Intervenho para proteger quem foi atingido, mesmo que a pessoa cruel tente se fazer de razoável.", w: { Sylph: 3, Rogue: 2, Thief: -1 } },
        { txt: "Uso minha raiva para sustentar uma resposta firme, sem deixar o verniz de educação me intimidar.", w: { Knight: 3, Maid: 2 } },
        { txt: "Demoro para reagir porque a fala parece aceitável por fora, e só depois entendo por que me machucou.", w: { Page: 3, Mage: 1 } }
    ]},
    { t: "Você se depara com uma teoria absurda que várias pessoas estão levando a sério.", opts: [
        { txt: "Faço piada da teoria até ela perder a aura de mistério que estava convencendo as pessoas.", w: { Bard: 3, Prince: 1, Sylph: -1 } },
        { txt: "Entro no raciocínio dela por dentro e torço as premissas até a própria teoria se contradizer.", w: { Witch: 3, Mage: 2 } },
        { txt: "Tento montar uma explicação acessível para tirar as pessoas dali sem humilhá-las.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Uso a teoria como munição para ganhar discussão com quem estava se achando inteligente demais.", w: { Thief: 3, Seer: 1 } },
        { txt: "Fico com medo de não conseguir refutar direito e acabar parecendo tão perdido quanto quem acredita.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você está em um protesto, debate ou mobilização, e a raiva coletiva começa a sair do controle.", opts: [
        { txt: "Canalizo a energia para uma ação concreta antes que a revolta vire só explosão desorganizada.", w: { Maid: 3, Knight: 2, Bard: -1 } },
        { txt: "Empurro a multidão para o ponto de ruptura. Às vezes a ordem precisa realmente quebrar.", w: { Bard: 3, Witch: 2, Sylph: -1 } },
        { txt: "Defendo quem está ficando vulnerável no meio do caos, mesmo que isso me tire do centro da ação.", w: { Rogue: 3, Sylph: 2, Thief: -1 } },
        { txt: "Tomo a frente do confronto, porque hesitação naquele momento só devolve poder para quem oprime.", w: { Knight: 3, Thief: 1 } },
        { txt: "Quero participar, mas a intensidade me assusta e acabo seguindo o movimento dos outros.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "Alguém te acusa de ser negativo demais por sempre apontar o que pode dar errado.", opts: [
        { txt: "Assumo a fama. Se todo mundo quer conforto, alguém precisa ficar encarando a parte feia.", w: { Heir: 3, Knight: 1 } },
        { txt: "Tento transformar meus alertas em procedimentos concretos, para não parecer só reclamação.", w: { Maid: 3, Seer: 2, Bard: -1 } },
        { txt: "Uso a acusação contra a pessoa: talvez ela só chame de negatividade aquilo que não quer admitir.", w: { Thief: 3, Witch: 2 } },
        { txt: "Fico inseguro e começo a suavizar demais minhas preocupações, até elas perderem a força.", w: { Page: 3, Sylph: 1 } },
        { txt: "Corto a conversa. Não vou performar otimismo para deixar alguém confortável.", w: { Prince: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que uma comunidade inteira está se sustentando em uma fantasia coletiva conveniente.", opts: [
        { txt: "Planto dúvidas pequenas em pontos estratégicos até a fantasia começar a rachar por dentro.", w: { Witch: 3, Bard: 2 } },
        { txt: "Tento construir um chão mais honesto para as pessoas caírem sem se destruírem completamente.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Uso a queda da fantasia para ocupar uma posição que antes estava protegida pela fantasia.", w: { Thief: 3, Prince: 1, Rogue: -1 } },
        { txt: "Reúno quem já estava desconfiando, porque ninguém deveria encarar uma verdade dessas sozinho.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Deixo a fantasia colapsar quando tiver que colapsar. Às vezes o caos ensina mais do que aviso nenhum.", w: { Bard: 3, Heir: 1, Knight: -1 } }
    ]},
    { t: "Você percebe que um grupo está aceitando uma explicação conveniente só porque ela deixa todo mundo mais confortável.", opts: [
        { txt: "Recuso a explicação na hora. Uma versão confortável não vira verdadeira só porque evita conflito.", w: { Heir: 3, Prince: 2 } },
        { txt: "Começo a apontar as falhas da versão aceita até as pessoas precisarem encarar o que não fecha.", w: { Seer: 3, Sylph: 2 } },
        { txt: "Tento mostrar como essa falsa tranquilidade pode prejudicar alguém depois.", w: { Sylph: 3, Mage: 2 } },
        { txt: "Uso a dúvida que ninguém quer tocar para virar a conversa a meu favor.", w: { Thief: 3, Witch: 2 } },
        { txt: "Observo quem realmente acredita na explicação e quem só está aceitando para manter o clima.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "Você descobre que uma meta que perseguiu por anos talvez não seja possível do jeito que imaginava.", opts: [
        { txt: "Tento entender exatamente onde está a limitação, porque saber o que é real dói menos do que continuar batendo no escuro.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico procurando sinais de que ainda existe uma brecha, mesmo que todo mundo já tenha desistido.", w: { Heir: 3, Witch: 2 } },
        { txt: "Transformo a frustração em força para tentar de outro jeito, nem que seja por pura teimosia.", w: { Maid: 3, Knight: 2 } },
        { txt: "Desvalorizo a meta para não ficar preso nela. Se aquilo não pode acontecer, talvez nem merecesse tanta importância.", w: { Prince: 3, Bard: 2 } },
        { txt: "Procuro pessoas que também bateram nesse limite, porque é mais fácil lidar com a frustração quando ela não é só minha.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "Você sabe que precisa dizer 'não' para alguém, mas a pessoa está esperando que você ceda.", opts: [
        { txt: "Digo não e sustento a decisão, mesmo que a pessoa tente me fazer parecer difícil ou cruel.", w: { Rogue: 3, Heir: 2 } },
        { txt: "Uso a recusa para mudar uma dinâmica que já estava errada há tempo demais.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Tento parecer firme, mas se a pessoa insistir do jeito certo eu acabo reagindo exatamente como ela queria.", w: { Page: 3, Bard: 2, Knight: -1 } },
        { txt: "Mostro que a insistência da pessoa só prova por que esse limite precisava existir.", w: { Prince: 3, Mage: 2 } },
        { txt: "Fecho a conversa antes que vire negociação. Meu 'não' não precisa de audiência.", w: { Heir: 3, Knight: 2 } }
    ]},
    { t: "Você percebe que está sendo passado para trás em uma conversa importante.", opts: [
        { txt: "Interrompo e coloco a contradição na mesa antes que a pessoa consiga seguir fingindo normalidade.", w: { Prince: 3, Heir: 2 } },
        { txt: "Finjo que não percebi por mais alguns minutos para entender exatamente qual mentira estão tentando sustentar.", w: { Mage: 3, Seer: 2 } },
        { txt: "Faço perguntas específicas até a pessoa ter dificuldade de manter a versão dela.", w: { Seer: 3, Knight: 2 } },
        { txt: "Uso a tensão da conversa para virar a pressão contra a pessoa e fazê-la perder segurança.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "Fico tão indignado que posso reagir forte demais antes de entender todo o jogo.", w: { Page: 3, Knight: 2 } }
    ]},
    { t: "Você percebe que o mundo é mais injusto e absurdo do que gostaria de acreditar.", opts: [
        { txt: "Isso reforça minha desconfiança. Não dá para tratar o mundo como se ele fosse naturalmente justo.", w: { Heir: 3, Mage: 2 } },
        { txt: "Tento transformar a indignação em algo útil, nem que seja uma rotina, uma ação pequena ou uma recusa mais firme.", w: { Maid: 3, Knight: 2, Bard: -1 } },
        { txt: "Procuro pessoas que compartilham da mesma revolta, porque lidar sozinho com isso só deixa tudo mais pesado.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Uso a raiva das pessoas para empurrar uma reação que elas talvez não tivessem coragem de assumir sozinhas.", w: { Witch: 3, Thief: 2 } },
        { txt: "Rio do absurdo e tento não levar tão a sério, porque encarar tudo de frente o tempo todo me quebraria.", w: { Bard: 3, Page: 2, Knight: -1 } }
    ]},
    { t: "Você descobre que uma pessoa que admirava era bem mais falsa do que parecia.", opts: [
        { txt: "Não fico exatamente surpreso. Às vezes a queda só confirma algo que eu já desconfiava.", w: { Mage: 3, Heir: 2 } },
        { txt: "Procuro entender quais sinais eu ignorei para não cair no mesmo tipo de imagem falsa de novo.", w: { Seer: 3, Mage: 2 } },
        { txt: "Corto minha admiração de uma vez. Depois que vejo a farsa, não consigo continuar tratando como se fosse igual.", w: { Prince: 3, Heir: 2 } },
        { txt: "Uso o caso para alertar outras pessoas que ainda estão presas naquela imagem.", w: { Sylph: 3, Maid: 2 } },
        { txt: "No começo tento fingir que não abalou nada, mas depois passo a desconfiar de todo mundo parecido.", w: { Bard: 3, Page: 2 } }
    ]},
    { t: "Todo mundo ao seu redor está animado com uma novidade, mas você sente que existe algo errado ali.", opts: [
        { txt: "Sou a primeira pessoa a dizer que não confio, mesmo sabendo que vou parecer estraga-prazeres.", w: { Heir: 3, Rogue: 2 } },
        { txt: "Investigo a origem do incômodo para saber se é paranoia minha ou se existe mesmo algo falso ali.", w: { Mage: 3, Seer: 2 } },
        { txt: "Começo a apontar falhas para diminuir a empolgação antes que ela vire cegueira coletiva.", w: { Prince: 3, Sylph: 2 } },
        { txt: "Uso a primeira rachadura na empolgação para puxar as pessoas para a minha leitura da situação.", w: { Thief: 3, Witch: 2 } },
        { txt: "Rejeito a novidade meio no automático, mais para provar que não sou influenciável do que por entender o problema.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "Você precisa escolher entre ser honesto e perder uma chance, ou distorcer a verdade para conseguir o que quer.", opts: [
        { txt: "Falo a verdade, mesmo que isso feche a porta. Prefiro um 'não' real a uma chance construída em cima de mentira.", w: { Heir: 3, Seer: 2, Thief: -2 } },
        { txt: "Avalio quem seria prejudicado pela mentira antes de decidir. O problema não é só mentir, é o que a mentira faz depois.", w: { Mage: 3, Seer: 2 } },
        { txt: "Minto se a situação já é injusta comigo. Se o jogo veio viciado, eu não vou ser o único obedecendo regra.", w: { Thief: 3, Witch: 2 } },
        { txt: "Sou honesto de um jeito duro demais, quase como se estivesse punindo a situação por me colocar nessa escolha.", w: { Knight: 3, Prince: 2 } },
        { txt: "Tento escapar da escolha até ser obrigado a responder, porque qualquer opção parece suja de um jeito diferente.", w: { Rogue: 3, Bard: 2 } }
    ]}
	],
    "Light": [
    { t: "Você começa a estudar um assunto novo e percebe que todo mundo ao redor parece entender mais do que você.", opts: [
        { txt: "Finjo que acompanho a conversa e repito termos que ainda não entendo direito, torcendo para não ser questionado.", w: { Page: 3, Bard: 1 } },
        { txt: "Volto para as bases e tento entender o mecanismo real por trás do assunto, mesmo que isso me faça parecer atrasado.", w: { Mage: 3, Seer: 2 } },
        { txt: "Transformo o estudo em rotina: resumos, fichas, exemplos e um jeito próprio de organizar a informação.", w: { Maid: 3, Knight: 2 } },
        { txt: "Procuro uma brecha no método tradicional e aprendo por caminhos menos óbvios, até a informação fazer sentido para mim.", w: { Witch: 3, Page: 2 } },
        { txt: "Aceito que algumas coisas vão se revelar com o tempo, sem precisar dominar tudo imediatamente.", w: { Heir: 3, Rogue: 1 } }
    ]},
    { t: "Você encontra uma fonte antiga que contradiz a versão mais famosa de um acontecimento.", opts: [
        { txt: "Investigo de onde a fonte veio, quem a preservou, quem a ignorou e por que ela perdeu relevância.", w: { Mage: 3, Seer: 2 } },
        { txt: "Uso a fonte para reconstruir a narrativa com mais contexto, mesmo que a versão final fique menos simples.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Destaco essa fonte antes de todo mundo, porque encontrar algo raro também é uma forma de ganhar vantagem.", w: { Thief: 3, Witch: 1 } },
        { txt: "Fico obcecado com a possibilidade de ter achado a peça que muda tudo, mesmo sem saber ainda como provar.", w: { Page: 3, Heir: 2 } },
        { txt: "Questiono a fama da versão aceita. Se uma história depende de apagar outra, talvez mereça perder o brilho.", w: { Prince: 3, Seer: 1 } }
    ]},
    { t: "Um conteúdo seu recebe atenção repentina por causa do algoritmo, mas não pelo motivo que você queria.", opts: [
        { txt: "Aproveito o foco enquanto dura. Se a atenção veio pelo caminho errado, ainda posso redirecioná-la para mim.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "Tento ajustar título, contexto e apresentação para que as pessoas entendam o ponto certo.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Analiso por que aquilo viralizou: palavra, imagem, timing, público, erro de leitura ou puro azar.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico inseguro, porque ser visto do jeito errado parece pior do que não ser visto.", w: { Page: 3, Rogue: 2 } },
        { txt: "Deixo a interpretação correr solta. Depois que algo cai no público, controlar o significado dá trabalho demais.", w: { Bard: 3, Heir: 1, Knight: -1 } }
    ]},
    { t: "Você recebe uma crítica dizendo que sua pesquisa está correta, mas mal explicada.", opts: [
        { txt: "Reorganizo a informação até ela ficar clara, útil e apresentável para quem não acompanhou meu raciocínio.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Volto para entender onde meu pensamento pulou etapas que pareciam óbvias só para mim.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico na defensiva; se a informação está certa, parte de mim acha injusto ser cobrado pela embalagem.", w: { Page: 3, Prince: 1 } },
        { txt: "Mudo o formato da explicação: exemplo, metáfora, diagrama, comparação, qualquer coisa que faça a ideia acender.", w: { Witch: 3, Maid: 2 } },
        { txt: "Aceito que nem toda verdade precisa ser didática para todo mundo. Quem quiser entender, que acompanhe.", w: { Prince: 3, Bard: 1 } }
    ]},
    { t: "Você está em uma prova, jogo ou situação de sorte, e vence por um detalhe improvável.", opts: [
        { txt: "Tento entender quais condições aumentaram minha chance, para transformar sorte em método da próxima vez.", w: { Mage: 3, Knight: 2 } },
        { txt: "Aceito a vitória como sinal de que eu estava no caminho certo, mesmo sem conseguir explicar tudo.", w: { Heir: 3, Page: 1 } },
        { txt: "Uso a vitória para ganhar destaque antes que alguém reduza meu mérito a acaso.", w: { Thief: 3, Prince: 1 } },
        { txt: "Fico com medo de ter vencido sem merecer e começo a estudar para compensar a sorte depois.", w: { Page: 3, Maid: 2 } },
        { txt: "Compartilho o que funcionou para que outras pessoas também consigam melhorar suas chances.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "Você percebe que um detalhe pequeno em uma imagem, texto ou conversa muda completamente a interpretação.", opts: [
        { txt: "Sigo o detalhe até entender toda a cadeia de significado que ele revela.", w: { Mage: 3, Seer: 2 } },
        { txt: "Aponto o detalhe para todo mundo, porque ignorá-lo faria a conclusão inteira ficar errada.", w: { Seer: 3, Sylph: 2 } },
        { txt: "Uso esse detalhe para virar a leitura dominante a meu favor antes que os outros percebam.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "Tento transformar o detalhe em uma explicação maior, dando forma para algo que parecia coincidência.", w: { Maid: 3, Mage: 1 } },
        { txt: "Fico preso nesse detalhe e começo a duvidar se entendi qualquer coisa antes dele aparecer.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "Alguém pede que você ensine algo que você sabe, mas aprendeu de um jeito bagunçado e autodidata.", opts: [
        { txt: "Explico pelo caminho que funcionou para mim, mesmo que ele pareça estranho ou fora da ordem tradicional.", w: { Witch: 3, Mage: 2 } },
        { txt: "Recrio o percurso desde o começo, separando etapas para que a pessoa não tropece onde eu tropecei.", w: { Mage: 3, Sylph: 2 } },
        { txt: "Faço um material organizado para a pessoa consultar depois, com exemplos e fontes fáceis de seguir.", w: { Maid: 3, Seer: 1 } },
        { txt: "Tenho medo de ensinar errado e acabar revelando que meu conhecimento tem buracos.", w: { Page: 3, Rogue: 2 } },
        { txt: "Prefiro mostrar só o resultado e deixar a pessoa descobrir o processo por conta própria.", w: { Prince: 3, Thief: 1, Sylph: -1 } }
    ]},
    { t: "Você vê alguém receber crédito por uma descoberta que só aconteceu porque outras pessoas juntaram pistas antes.", opts: [
        { txt: "Reconstruo o caminho da descoberta para mostrar quem iluminou qual parte do processo.", w: { Maid: 3, Seer: 2 } },
        { txt: "Redireciono a atenção para quem ficou invisível, mesmo que isso tire brilho da pessoa celebrada.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "Tomo a narrativa para mim se fui a pessoa que enxergou como as pistas se conectavam.", w: { Thief: 3, Mage: 1, Rogue: -2 } },
        { txt: "Analiso por que uma pessoa virou símbolo da descoberta enquanto as outras viraram nota de rodapé.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico incomodado, mas não sei como corrigir sem parecer que estou mendigando reconhecimento.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você descobre que estava defendendo uma informação errada com muita confiança.", opts: [
        { txt: "Volto pela cadeia de fontes para entender exatamente onde a informação falsa entrou.", w: { Mage: 3, Seer: 2 } },
        { txt: "Corrijo publicamente e deixo a versão certa mais visível do que o erro.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Fico envergonhado e passo a duvidar da minha capacidade de saber qualquer coisa com segurança.", w: { Page: 3, Heir: 1 } },
        { txt: "Desvalorizo a discussão inteira para não ficar preso ao peso de ter errado.", w: { Bard: 3, Prince: 2, Mage: -1 } },
        { txt: "Mudo rapidamente de posição e tento usar a correção como prova de que sou mais esperto por me adaptar.", w: { Thief: 3, Witch: 2 } }
    ]},
    { t: "Você encontra um tema obscuro que quase ninguém conhece, mas que parece cheio de conexões importantes.", opts: [
        { txt: "Mergulho no tema até entender por que ele ficou fora do olhar público por tanto tempo.", w: { Mage: 3, Heir: 2 } },
        { txt: "Começo a montar um guia para tornar esse conhecimento acessível sem destruir sua complexidade.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Uso o tema como marca pessoal; ser uma das poucas pessoas que entende disso me dá vantagem.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "Fico fascinado, mas perdido, pulando de link em link sem saber o que é base e o que é detalhe.", w: { Page: 3, Heir: 1 } },
        { txt: "Mudo o ângulo de apresentação até o tema parecer relevante para pessoas que nunca ligariam para ele.", w: { Witch: 3, Seer: 1 } }
    ]},	
    { t: "Você faz parte de uma equipe que realizou um feito notável, mas apenas uma pessoa será o rosto público desse sucesso. Como você se posiciona?", opts: [
        { txt: "Certifico-me de que minha contribuição seja a mais visível; se o resultado é excelente, é justo que eu detenha o controle da narrativa.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "Prefiro apagar minha participação e ficar fora dos holofotes; a atenção pública é um ruído invasivo que prefiro evitar.", w: { Prince: 3, Rogue: 2, Thief: -3 } },
        { txt: "Faço questão de destacar o esforço de quem menos apareceu, garantindo que o reconhecimento seja dividido.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "Eu nem ligo se sabem que fui eu. Se esquecerem meu nome na hora dos créditos, paciência. A fama dá muito trabalho.", w: { Bard: 3, Heir: 2 } },
        { txt: "Não forço nada. Se as pessoas notarem meu valor, ótimo; se não, sei que eventualmente minha contribuição será reconhecida.", w: { Heir: 3, Seer: 1 } }
    ]},
    { t: "Você descobre uma informação importante antes de todo mundo, mas ainda não sabe se deve compartilhar.", opts: [
        { txt: "Guardo por enquanto e observo quem mais percebe. Informação vale mais quando você sabe o momento certo de usar.", w: { Knight: 3, Mage: 2 } },
        { txt: "Conto imediatamente, porque se isso é importante as pessoas precisam saber antes de tomarem decisões no escuro.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Uso a informação para me colocar numa posição melhor. Se fui eu que descobri, faz sentido que isso me favoreça primeiro.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "Fico inseguro sobre se entendi direito e tento confirmar com alguém antes de me colocar como fonte.", w: { Rogue: 3, Knight: 2 } },
        { txt: "Começo a pesquisar mais fundo, porque talvez essa informação seja só a ponta de algo muito maior.", w: { Heir: 3, Seer: 2 } }
    ]},
    { t: "Você está pesquisando um assunto e percebe que existem versões diferentes, contraditórias e aparentemente bem fundamentadas.", opts: [
        { txt: "Comparo as fontes e tento descobrir qual interpretação realmente ilumina o quadro maior.", w: { Seer: 3, Mage: 2 } },
        { txt: "Mergulho cada vez mais fundo. Se existem tantas versões, deve haver algum detalhe escondido explicando a diferença.", w: { Heir: 3, Knight: 1 } },
        { txt: "Tento criar minha própria síntese a partir do que encontrei, em vez de aceitar passivamente uma explicação pronta.", w: { Maid: 3, Witch: 2 } },
        { txt: "Começo a desconfiar que a disputa de interpretações é mais importante do que o fato original em si.", w: { Mage: 3, Seer: 2 } },
        { txt: "Finjo que entendi melhor do que entendi e acabo repetindo a versão que parece mais impressionante.", w: { Page: 3, Thief: 1, Mage: -2 } }
    ]},
    { t: "Um erro pessoal seu é exposto publicamente e você se torna o centro das atenções e julgamentos. Como reage?", opts: [
        { txt: "Decido que a opinião alheia é irrelevante. Trato a exposição como algo sem valor e sigo em frente.", w: { Prince: 3, Bard: 1, Page: -2 } },
        { txt: "Assumo a falha e começo a trabalhar de forma punitiva para corrigir os fatos e restaurar minha reputação.", w: { Maid: 3, Knight: 2 } },
        { txt: "Eu levo na esportiva. Se minha reputação foi pro lixo, pelo menos a história foi engraçada. Não vou me matar pra limpar meu nome.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Uso a vergonha da exposição como combustível para estudar onde errei e garantir que nunca mais aconteça.", w: { Page: 3, Knight: 2, Mage: 1 } },
        { txt: "Tento desviar o foco do meu erro para outro assunto que seja mais relevante no momento.", w: { Thief: 3, Witch: 2 } }
    ]},
    { t: "Você percebe que uma coisa considerada irrelevante por todos pode ter um significado importante.", opts: [
        { txt: "Começo a dar forma e contexto para aquilo, até que deixe de parecer aleatório e passe a significar algo.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Tento convencer as pessoas a olharem de novo. O problema é que ninguém está prestando atenção do jeito certo.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Fico preso analisando aquilo por horas, porque a possibilidade de existir um significado escondido não sai da minha cabeça.", w: { Heir: 3, Knight: 2 } },
        { txt: "Uso minha interpretação para mudar o valor da coisa; se todo mundo achava irrelevante, talvez eu consiga inverter isso.", w: { Witch: 3, Maid: 2 } },
        { txt: "Descarto a importância antiga que deram a isso e substituo por uma leitura que faz mais sentido para mim.", w: { Prince: 3, Witch: 2 } }
    ]},
    { t: "Como você lida com a necessidade de ser 'visto' ou validado pelos outros no seu cotidiano?", opts: [
        { txt: "Sinto que preciso provar meu valor constantemente; se eu não estiver sendo notado, perco minha relevância.", w: { Page: 3, Knight: 3, Maid: 1, Prince: -2 } },
        { txt: "Sinto-me agredido pela atenção constante. Prefiro o anonimato e a escuridão.", w: { Prince: 3, Rogue: 2, Thief: -3 } },
        { txt: "Não ligo se me veem ou não. Às vezes sou o centro das atenções, às vezes sou invisível. Deixo acontecer sem forçar.", w: { Bard: 3, Heir: 2 } },
        { txt: "Prefiro que meu mérito seja redirecionado para o que eu produzo ou para o grupo; detesto ser o foco central.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "Uso minha imagem e visibilidade apenas como uma ferramenta pontual para conseguir o que quero.", w: { Witch: 3, Thief: 3 } }
    ]},
    { t: "Ao se deparar com várias versões conflitantes de uma mesma história, como você decide em qual acreditar?", opts: [
        { txt: "Busco a versão factual e lógica. A verdade não deve ser moldada pela conveniência.", w: { Seer: 3, Mage: 3, Witch: -2 } },
        { txt: "Escolho a versão que melhor serve aos meus objetivos ou que cria a narrativa mais útil.", w: { Witch: 3, Thief: 2, Seer: -2 } },
        { txt: "Eu não acredito em nenhuma. Deixo as pessoas brigarem pela 'verdade' enquanto eu assisto de longe, achando graça da confusão.", w: { Bard: 3, Rogue: 1, Knight: -1 } },
        { txt: "Acredito que não existe uma verdade absoluta; deixo que cada versão flua e o tempo revele qual terá mais peso.", w: { Heir: 3, Bard: 1 } },
        { txt: "Adoto a versão que exige mais responsabilidade e ação da minha parte, usando-a como um mapa.", w: { Knight: 3, Page: 2 } }
    ]},
    { t: "Você descobre que uma história muito repetida sobre você está distorcendo o que realmente aconteceu.", opts: [
        { txt: "Reúno a versão correta, os detalhes e o contexto para reconstruir a narrativa com mais precisão.", w: { Maid: 3, Seer: 2 } },
        { txt: "Uso a versão distorcida a meu favor se ela me coloca numa posição mais importante.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "Destruo a importância dessa história. Se ela não serve mais, prefiro que pare de significar qualquer coisa.", w: { Prince: 3, Bard: 2, Maid: -1 } },
        { txt: "Fico inseguro em corrigir porque talvez pareça que estou tentando chamar atenção demais para mim.", w: { Rogue: 3, Page: 2 } },
        { txt: "Analiso como a distorção se espalhou, porque entender o caminho da informação ajuda a controlar o estrago.", w: { Mage: 3, Knight: 2 } }
    ]},
    { t: "Você está em uma discussão acalorada onde sabe, com 100% de certeza, que a outra pessoa está errada sobre um fato técnico ou histórico. Como você age?", opts: [
        { txt: "Interrompo e apresento as provas. Não suporto ver a desinformação prosperar quando a verdade está disponível.", w: { Sylph: 3, Maid: 2, Knight: 2, Prince: -2 } },
        { txt: "Deixo que ela continue falando o que quiser. A ignorância alheia é irrelevante para mim.", w: { Prince: 3, Bard: 1, Seer: -2 } },
        { txt: "Eu deixo a pessoa falar besteira. É divertido ver alguém tão confiante no erro, e não vou gastar minha energia corrigindo.", w: { Bard: 3, Thief: 1, Knight: -1 } },
        { txt: "Uso o erro dela como vantagem estratégica, deixando que ela se exponha até eu usar a verdade para desarmá-la.", w: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
        { txt: "Tento corrigir a pessoa de forma sutil, compartilhando o conhecimento como se fosse algo que estamos descobrindo juntos.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "Em uma situação tensa, você percebe que a transparência das informações está causando conflitos. Qual sua atitude?", opts: [
        { txt: "Defendo que a clareza é a única cura. Tudo deve ser exposto para resolver o problema pela raiz.", w: { Sylph: 3, Seer: 2, Prince: -3 } },
        { txt: "Acredito que o segredo é uma forma de proteção; algumas coisas devem permanecer no escuro.", w: { Prince: 3, Rogue: 1, Sylph: -3 } },
        { txt: "Eu solto a verdade e saio de perto. Se a clareza vai causar briga, que cause. O circo pegando fogo é mais interessante.", w: { Bard: 3, Thief: 2, Seer: -1 } },
        { txt: "Organizo as informações de forma pragmática, revelando apenas o necessário para manter a ordem.", w: { Maid: 3, Knight: 2 } },
        { txt: "Compartilho a verdade de forma diluída, tentando fazer com que o peso da informação seja dividido.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]}
    ],
    "Void": [
    { t: "Você descobre um segredo íntimo de um conhecido que mudaria a percepção de todos sobre ele, mas ninguém mais sabe disso.", opts: [
        { txt: "Eu revelo a verdade imediatamente. Odeio segredos; eles são buracos na realidade que precisam ser preenchidos com fatos.", w: { Prince: 3, Seer: 2 } },
        { txt: "Guardo essa informação como um trunfo pessoal, sentindo que o conhecimento oculto me dá uma vantagem.", w: { Thief: 3, Witch: 2, Mage: 1 } },
        { txt: "Acabo soltando o segredo sem querer em uma conversa aleatória. Não sou bom em guardar coisas que não me importam muito.", w: { Bard: 3, Page: 2, Seer: -2 } },
        { txt: "Protejo essa informação com o máximo de discrição. Se o segredo existe, é porque deve permanecer no escuro.", w: { Maid: 3, Knight: 2, Prince: -1 } },
        { txt: "Observo como esse 'não-dito' influencia as interações, deixando que o mistério siga seu curso natural.", w: { Mage: 3, Heir: 2, Bard: 1 } }
    ]},
    { t: "Em um ambiente social, você percebe que suas contribuições são ignoradas e você se sente um 'zero à esquerda'.", opts: [
        { txt: "Eu prefiro assim. Fico no meu canto, invisível, fazendo minhas coisas sem ninguém para me encher a paciência.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
        { txt: "Aceito o anonimato. Há uma liberdade imensa em não ser notado, permitindo que eu aja sem o peso da expectativa.", w: { Heir: 3, Rogue: 2 } },
        { txt: "Isso me fere, então passo a agir com uma competência performática, tentando provar meu valor.", w: { Page: 3, Knight: 2, Maid: 1 } },
        { txt: "Eu forço minha presença. Não aceito ser ignorado; faço barulho ou causo uma cena para que minha relevância seja notada.", w: { Prince: 3, Thief: 2, Heir: -2 } },
        { txt: "Procuro outros que também estão sendo excluídos e tento criar um espaço onde nossa 'invisibilidade' não seja um desconforto.", w: { Sylph: 3, Rogue: 3, Page: 1 } }
    ]},
    { t: "Você encontra uma pasta antiga sem nome, cheia de arquivos sem data, sem autor e sem explicação.", opts: [
        { txt: "Investigo metadados, padrões de arquivo e ausências estranhas para entender o que aquela pasta tenta esconder.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tomo os arquivos para mim antes que alguém perceba que eles existem. O que ninguém sabe que está ali pode ser útil.", w: { Thief: 3, Witch: 1, Rogue: -2 } },
        { txt: "Organizo o material do zero, criando nomes, pastas e contexto para que aquilo deixe de ser um buraco incompreensível.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Altero a estrutura da pasta para confundir ainda mais quem tentar rastrear o conteúdo depois.", w: { Witch: 3, Thief: 2 } },
        { txt: "Deixo a pasta quieta. Nem tudo que está perdido precisa voltar a ter dono ou explicação.", w: { Heir: 3, Bard: 1 } }
    ]},
    { t: "Você percebe que alguém está usando o silêncio para se proteger de uma exposição injusta.", opts: [
        { txt: "Protejo esse silêncio ativamente, desviando perguntas e impedindo que a pessoa seja arrancada do escuro à força.", w: { Knight: 3, Maid: 2 } },
        { txt: "Crio uma saída discreta para a pessoa, para que ela não precise se explicar nem desaparecer completamente.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Uso a confusão ao redor para pegar uma vantagem que ninguém está olhando, sem tocar diretamente no segredo dela.", w: { Thief: 3, Witch: 2 } },
        { txt: "Observo quem tenta quebrar o silêncio e quem respeita o limite sem precisar saber tudo.", w: { Seer: 3, Mage: 2 } },
        { txt: "Se o silêncio está machucando outras pessoas, tento rasgar a cortina e expor o que está sendo escondido.", w: { Prince: 3, Knight: 1 } }
    ]},
    { t: "Você está em um fórum anônimo onde ninguém sabe quem é quem, mas algumas pessoas começam a ganhar influência.", opts: [
        { txt: "Uso o anonimato para me mover entre conversas diferentes e coletar vantagens sem associá-las ao meu nome.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "Analiso padrões de escrita, horários e escolhas de palavra para descobrir quem pode estar por trás de cada conta.", w: { Seer: 3, Mage: 2 } },
        { txt: "Crio regras silenciosas de convivência para que o anonimato não vire só abuso sem consequência.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Ajudo usuários novos ou ignorados a encontrar um lugar onde possam falar sem serem engolidos pelo ruído.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Mudo de postura, nome e voz conforme a sala. Se ninguém sabe quem eu sou, posso ser o que a situação pedir.", w: { Witch: 3, Page: 1 } }
    ]},
    { t: "Uma conversa importante termina com algo claramente não dito, mas todo mundo finge que nada ficou pendente.", opts: [
        { txt: "Fico atento ao formato do vazio: quem mudou de assunto, quem evitou olhar e onde a frase foi cortada.", w: { Mage: 3, Seer: 2 } },
        { txt: "Puxo o não-dito para fora de maneira indireta, criando uma situação em que a verdade escapa sem parecer interrogatório.", w: { Witch: 3, Seer: 1 } },
        { txt: "Uso o silêncio pendente para me posicionar melhor, esperando até que alguém precise de mim para preencher a lacuna.", w: { Thief: 3, Mage: 1, Rogue: -1 } },
        { txt: "Tento cuidar do desconforto sem obrigar ninguém a revelar o que ainda não consegue dizer.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Deixo a lacuna existir. Às vezes o que não foi dito explica mais do que qualquer confissão.", w: { Heir: 3, Bard: 1 } }
    ]},
    { t: "Você apaga sem querer uma mensagem, imagem ou arquivo importante antes de entender seu valor.", opts: [
        { txt: "Procuro rastros, backups, cache, nomes parciais e qualquer sombra digital que tenha sobrado.", w: { Seer: 3, Mage: 2 } },
        { txt: "Transformo a perda em outra coisa, recriando o sentido do arquivo a partir do que ainda lembro.", w: { Maid: 3, Page: 2 } },
        { txt: "Uso o fato de ninguém mais ter acesso ao arquivo para controlar a versão do que havia nele.", w: { Thief: 3, Witch: 2, Sylph: -1 } },
        { txt: "Aceito que desapareceu e tento não violentar o vazio com uma reconstrução falsa.", w: { Heir: 3, Rogue: 1 } },
        { txt: "Fico inseguro sobre admitir a perda, então tento compensar em silêncio antes que alguém note.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "Você entra em um lugar abandonado onde quase tudo foi removido, mas ainda restam marcas de quem viveu ali.", opts: [
        { txt: "Leio marcas nas paredes, móveis ausentes, manchas e objetos esquecidos para imaginar o que aconteceu ali.", w: { Seer: 3, Mage: 2 } },
        { txt: "Pego um objeto pequeno que ninguém vai sentir falta, como se pudesse levar comigo um pedaço daquele esquecimento.", w: { Thief: 3, Rogue: 1 } },
        { txt: "Tenho vontade de preservar o lugar como está, impedindo que o último vestígio dele seja apagado.", w: { Maid: 3, Knight: 2 } },
        { txt: "Reimagino o espaço completamente, pensando em como transformar aquele abandono em outra coisa.", w: { Witch: 3, Sylph: 1 } },
        { txt: "Sinto conforto no vazio do lugar. Sem função, sem dono, sem explicação, ele parece respirar melhor.", w: { Heir: 3, Bard: 2 } }
    ]},
    { t: "Alguém te conta algo confuso, contraditório e cheio de lacunas, esperando que você entenda o que nem ela sabe explicar.", opts: [
        { txt: "Escuto o que falta na história, não só o que foi dito, e tento mapear as ausências que organizam o relato.", w: { Mage: 3, Seer: 2 } },
        { txt: "Ajudo a pessoa a dar forma ao que está nebuloso, sem forçar uma verdade mais clara do que ela realmente tem.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Pego uma das lacunas e uso como chave para conduzir a conversa na direção que me interessa.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "Crio uma estrutura provisória para a pessoa conseguir continuar falando mesmo sem entender tudo ainda.", w: { Maid: 3, Sylph: 1 } },
        { txt: "Me perco junto com a pessoa e começo a duvidar se qualquer versão daquela história faz sentido.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "Você precisa passar despercebido em uma situação onde chamar atenção poderia te prejudicar.", opts: [
        { txt: "Uso o anonimato como vantagem, deixando que outras pessoas ocupem o foco enquanto eu consigo o que preciso.", w: { Thief: 3, Rogue: 1 } },
        { txt: "Ajusto roupa, postura, fala e presença para me misturar ao ambiente sem parecer que estou tentando.", w: { Witch: 3, Knight: 1 } },
        { txt: "Observo quais comportamentos são ignorados naquele lugar e imito o padrão até me tornar parte do fundo.", w: { Seer: 3, Mage: 2 } },
        { txt: "Fico tão preocupado em não ser notado que acabo rígido demais, como se meu esforço me denunciasse.", w: { Page: 3, Knight: 2 } },
        { txt: "Protejo outra pessoa do foco, desviando a atenção para o ruído geral ao invés de para ela.", w: { Sylph: 3, Rogue: 2 } }
    ]},
    { t: "Você percebe que uma pessoa do grupo sempre faz trabalho invisível que ninguém reconhece.", opts: [
        { txt: "Tento tornar esse trabalho visível sem expor a pessoa de um jeito que ela não pediu.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Assumo parte desse trabalho em silêncio, porque algumas funções só precisam ser feitas para o grupo continuar inteiro.", w: { Maid: 3, Knight: 2 } },
        { txt: "Uso a invisibilidade desse trabalho para aprender como o grupo realmente se sustenta por baixo da superfície.", w: { Mage: 3, Seer: 2 } },
        { txt: "Tomo para mim a função invisível mais estratégica, porque quem controla os bastidores controla mais do que parece.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "Acho injusto, mas fico sem saber como interferir sem piorar a situação ou chamar atenção errada.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você encontra uma senha, código ou sistema criptografado que protege algo que ninguém deveria acessar facilmente.", opts: [
        { txt: "Tento entender a lógica do código, porque o modo como algo se esconde revela o que ele teme mostrar.", w: { Mage: 3, Seer: 2 } },
        { txt: "Quebro a proteção e pego o que estava escondido antes que alguém perceba que o segredo deixou de ser seguro.", w: { Thief: 3, Prince: 1, Sylph: -1 } },
        { txt: "Altero a criptografia para que o segredo continue protegido, mas agora segundo as minhas regras.", w: { Witch: 3, Knight: 1 } },
        { txt: "Reforço a proteção e aviso quem precisa saber, sem espalhar o conteúdo escondido.", w: { Knight: 3, Maid: 2, Thief: -1 } },
        { txt: "Crio um caminho seguro para revelar só o necessário, sem destruir a privacidade que o código estava guardando.", w: { Sylph: 3, Rogue: 2 } }
    ]},
    { t: "Você recebe uma tarefa importante, mas não lhe dão instruções ou qualquer pista de como começar.", opts: [
        { txt: "Começo do zero absoluto. Se não há nada construído, eu crio minhas próprias regras e preencho esse vazio.", w: { Maid: 3, Witch: 2, Page: 1 } },
        { txt: "Analiso o que 'não foi dito'. O silêncio nas instruções me revela mais sobre as intenções reais do que as palavras.", w: { Mage: 3, Seer: 2, Knight: 1 } },
        { txt: "Recuso-me a trabalhar no escuro. Exijo clareza total imediatamente; não movo um dedo sem saber exatamente o que é.", w: { Prince: 3, Knight: 2, Heir: -1 } },
        { txt: "Faço de qualquer jeito ou nem faço. Se não explicaram direito, o problema é deles quando o resultado vier em branco.", w: { Bard: 3, Heir: 1, Maid: -1 } },
        { txt: "Divido a incerteza com o grupo, buscando uma solução que não dependa de ordens claras para avançar.", w: { Sylph: 3, Rogue: 2, Heir: 1 } }
    ]},
    { t: "Um boato vago e confuso sobre você começa a circular, mas ninguém consegue confirmar se é verdade ou mentira.", opts: [
        { txt: "Uso o mistério a meu favor. Mantenho uma postura enigmática que confunde ainda mais as pessoas.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "Manipulo a narrativa silenciosamente, inserindo novas dúvidas até que o boato original perca todo o sentido.", w: { Witch: 3, Thief: 2, Mage: 1 } },
        { txt: "Ignoro e foco em ajudar as pessoas afetadas pela confusão, agindo como um porto seguro de silêncio.", w: { Sylph: 3, Maid: 2, Rogue: 1 } },
        { txt: "Exponho a origem do boato e os fatos crus. Detesto que buracos na verdade sejam usados para me definir.", w: { Prince: 3, Seer: 2, Mage: 1 } },
        { txt: "Nem confirmo nem nego. Deixo o povo falar. Acho engraçado ver as teorias absurdas que criam sobre mim.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "Você conhece alguém fascinante, mas a pessoa é um mistério completo: nunca fala de si ou de suas intenções.", opts: [
        { txt: "A incerteza me atrai. Sinto que posso aprender muito sobre o mundo apenas observando o que essa pessoa esconde.", w: { Mage: 3, Seer: 2, Heir: 1 } },
        { txt: "Tento 'quebrar' esse mistério. Faço perguntas diretas e invasivas; odeio não saber com quem estou lidando.", w: { Prince: 3, Thief: 2, Witch: 1 } },
        { txt: "Respeito o vazio. Não sinto necessidade de cavar a vida de ninguém; aceito o que a pessoa apresenta no agora.", w: { Heir: 3, Rogue: 2, Sylph: 1 } },
        { txt: "Não ligo. Se a pessoa não fala nada, a gente fica em silêncio. É menos esforço pra mim do que tentar decifrar enigma.", w: { Bard: 3, Heir: 1, Seer: -2 } },
        { txt: "Sinto desconfiança. Se não há transparência, não há base para uma relação; tento forçar uma clareza ou me afasto.", w: { Prince: 3, Knight: 2, Page: 1 } }
    ]},
    { t: "Algo essencial para o grupo desapareceu e ninguém sabe onde está ou como recuperar.", opts: [
        { txt: "Trabalho dobrado para suprir a falta do que foi perdido, garantindo que o grupo não desmorone.", w: { Maid: 3, Sylph: 2, Knight: 1 } },
        { txt: "Encorajo o grupo a desapegar. Talvez a perda seja uma oportunidade para abandonarmos o que era obsoleto.", w: { Rogue: 3, Heir: 2, Prince: 1 } },
        { txt: "Rastreio o 'nada'. Entendo que a ausência do objeto deixa pistas e uso essa falta de informação para encontrá-lo.", w: { Seer: 3, Mage: 3, Witch: 1 } },
        { txt: "Eu nem tinha percebido que sumiu. E se sumiu, deve aparecer uma hora dessas. Não me estresso procurando.", w: { Bard: 3, Heir: 2, Seer: -2 } },
        { txt: "Tento criar algo novo do nada para substituir a perda, agindo para que o vácuo não nos consuma.", w: { Page: 3, Maid: 2, Witch: 1 } }
    ]},
    { t: "Você realiza um trabalho hercúleo nos bastidores, mas outra pessoa recebe todo o crédito público.", opts: [
        { txt: "Tanto faz. Se o crédito for para outro, a responsabilidade de manter o sucesso também é dele. Eu fico livre.", w: { Bard: 3, Heir: 2, Rogue: 2 } },
        { txt: "Não me importo. O fato de o trabalho ter sido feito no anonimato me agrada; a relevância é um fardo.", w: { Rogue: 3, Heir: 2, Thief: -2 } },
        { txt: "Isso é inaceitável. Exponho minha participação e exijo reconhecimento; não serei um figurante na minha própria obra.", w: { Prince: 3, Thief: 2, Heir: -2 } },
        { txt: "Mantenho o silêncio. Minha segurança vem da competência interna, e o anonimato me protege de interferências.", w: { Knight: 3, Maid: 2, Page: 1 } },
        { txt: "Uso meu anonimato para continuar ajudando de forma desinteressada, onde ninguém pode me vigiar.", w: { Sylph: 3, Seer: 2, Rogue: 1 } }
    ]},
    { t: "Você está diante de uma decisão onde todos os caminhos levam ao desconhecido, sem garantias de segurança.", opts: [
        { txt: "Confio no fluxo do incerto. Sinto que o caminho correto se revelará enquanto eu caminho pela escuridão.", w: { Heir: 3, Seer: 2, Mage: 1 } },
        { txt: "Tento eliminar todas as variáveis desconhecidas antes de agir. Detesto operar sem o controle da informação.", w: { Prince: 3, Knight: 2, Heir: -1 } },
        { txt: "Escolho qualquer um sem pensar muito. Se é tudo desconhecido mesmo, planejar é perda de tempo.", w: { Bard: 3, Page: 1 } },
        { txt: "Escolho o caminho mais vazio. Vou moldar a realidade conforme ela surgir, criando algo onde hoje não existe nada.", w: { Page: 3, Witch: 2, Maid: 2 } },
        { txt: "Aceito a incerteza. O melhor plano é não ter plano e deixar que o vácuo nos leve a lugares novos.", w: { Heir: 3, Rogue: 2, Mage: 1 } }
    ]},
    { t: "Você encontra um objeto quebrado que todos consideram lixo, sem utilidade ou relevância.", opts: [
        { txt: "Eu o descarto. Se algo não tem utilidade clara, é apenas ruído que deve ser eliminado do meu espaço.", w: { Prince: 3, Knight: 1, Sylph: -1 } },
        { txt: "Eu perco ele de novo. Provavelmente vou esquecer onde coloquei cinco minutos depois de pegar.", w: { Bard: 3, Heir: 1, Seer: -2 } },
        { txt: "Eu o guardo. Sinto uma conexão com o que foi esquecido e encontro conforto em possuir o que ninguém valoriza.", w: { Rogue: 3, Page: 2, Knight: 1 } },
        { txt: "Tento consertá-lo ou dar uma função nova. Recuso-me a aceitar que algo possa ser simplesmente inútil.", w: { Maid: 3, Sylph: 2, Witch: 2 } },
        { txt: "Deixo-o onde está. O ciclo de obsolescência é natural; não há necessidade de intervir no que volta ao nada.", w: { Heir: 3, Mage: 1 } }
    ]},
    { t: "Você sente que não possui uma personalidade fixa, agindo apenas como um reflexo do que esperam de você.",  opts: [
        { txt: "Isso me desespera. Me esforço para construir uma identidade marcante para que ninguém duvide da minha existência.", w: { Prince: 3, Page: 2, Knight: 2, Heir: -1 } },
        { txt: "Sinto-me em paz. Se sou 'nada' por dentro, posso ser 'qualquer coisa' por fora, sem ser aprisionado por rótulos.", w: { Heir: 3, Rogue: 2, Sylph: 1 } },
        { txt: "Uso essa fluidez como ferramenta. Mudo quem eu sou conforme a necessidade para obter o que desejo.", w: { Witch: 3, Thief: 3, Mage: 1 } },
        { txt: "Eu só deixo rolar. É mais fácil concordar com o que acham que eu sou do que tentar explicar algo que nem eu sei.", w: { Bard: 3, Heir: 2, Page: 1 } },
        { txt: "Observo esse vazio. Entender que o 'eu' é uma ilusão me permite ver as verdades atrás das máscaras alheias.", w: { Seer: 3, Mage: 3, Sylph: 1 } }
    ]}
	],
    "Mind": [
    { t: "Você recebe uma mensagem enorme de alguém claramente irritado com você. Antes de responder, passa vários minutos relendo cada frase e tentando prever qual resposta evitaria o pior desfecho possível.", opts: [
        { txt: "Reescrevo a mensagem várias vezes e acabo demorando tanto tentando prever todas as reações possíveis que quase não respondo.", w: { Page: 3, Seer: 2, Knight: 1 } },
        { txt: "Puxo da memória conversas parecidas que já deram certo e adapto o padrão pra encaixar na situação atual.", w: { Thief: 3, Mage: 2 } },
        { txt: "Assumo o controle do ritmo da conversa imediatamente, pressionando os argumentos mais frágeis da outra pessoa.", w: { Knight: 3, Prince: 2, Page: -2 } },
        { txt: "Perco a paciência com o teatro social e respondo exatamente o que penso, mesmo sabendo que isso provavelmente vai piorar tudo.", w: { Prince: 3, Bard: 2, Sylph: -2 } },
        { txt: "Exponho a falha moral do plano para que o grupo lide com o peso da escolha, retirando minha responsabilidade direta.", w: { Rogue: 3, Heir: 2 } }
    ]},
    { t: "Você percebe que duas pessoas próximas brigaram porque interpretaram completamente errado as intenções uma da outra. Nenhuma delas parece disposta a ceder.", opts: [
        { txt: "Tento reorganizar a conversa de um jeito mais racional, traduzindo o que cada lado provavelmente quis dizer antes que a situação piore ainda mais.", w: { Sylph: 3, Seer: 2, Maid: 1 } },
        { txt: "Mesmo em situações tensas, consigo me distanciar emocionalmente o bastante pra analisar os diferentes lados antes de agir.", w: { Heir: 3, Knight: 1 } },
        { txt: "Conforme a discussão escala, começo a interromper os dois lados constantemente porque fica claro pra mim que ninguém ali está percebendo onde essa situação vai acabar.", w: { Prince: 3, Seer: 2, Bard: -2 } },
        { txt: "Evito me envolver diretamente. Discussões assim normalmente se resolvem sozinhas quando as pessoas cansam de reagir no impulso.", w: { Bard: 3, Heir: 1, Sylph: -2 } },
        { txt: "Mudo minha abordagem dependendo de com quem estou falando, tentando fazer cada pessoa baixar a guarda separadamente.", w: { Witch: 3, Thief: 2 } }
    ]},
    { t: "Um erro grave foi cometido por um colega e a culpa está recaindo sobre o grupo todo. Como você se posiciona?", opts: [
        { txt: "Utilizo a falha dele para demonstrar minha própria competência, garantindo que minha posição saia fortalecida.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "Assumo parte da culpa ou tento redistribuir a responsabilidade para que o peso não destrua a carreira dele.", w: { Rogue: 3, Sylph: 2, Prince: -2 } },
        { txt: "Não faço nada. Deixo o erro seguir seu curso lógico. Se ele errou, a consequência é natural e eu não vou interferir.", w: { Bard: 3, Mage: 1, Maid: -2 } },
        { txt: "Trabalho dobrado nos bastidores para consertar o erro logicamente, sem buscar reconhecimento.", w: { Maid: 3, Knight: 2 } },
        { txt: "Analiso friamente como esse erro aconteceu e uso o evento como estudo para mudar padrões futuros.", w: { Mage: 3, Seer: 2, Witch: 1 } }
    ]},
    { t: "Ao planejar algo importante, como uma mudança de carreira, qual é o seu processo mental predominante?", opts: [
        { txt: "Crio planos de contingência para cada falha possível. Se eu não prever o caminho, sinto que vou colapsar.", w: { Knight: 3, Seer: 2 } },
        { txt: "Tento não pensar demais. Confio que, se eu seguir meu instinto, a lógica das coisas se resolverá sozinha.", w: { Prince: 3, Bard: 2, Maid: -3 } },
        { txt: "Eu não planejo. Vou empurrando com a barriga até a decisão se tornar inevitável ou alguém decidir por mim.", w: { Bard: 3, Rogue: 2, Knight: -2 } },
        { txt: "Busco o conselho de várias pessoas, tentando sintetizar a visão delas em uma estratégia justa.", w: { Sylph: 3, Heir: 2 } },
        { txt: "Procuro atalhos ou formas de influenciar o sistema a meu favor, focando no melhor resultado com menor esforço.", w: { Thief: 3, Witch: 3, Rogue: -2 } }
    ]},
    { t: "Você percebe que duas escolhas disponíveis vão gerar problemas inevitáveis, mas uma delas mantém a situação mais estável a longo prazo.", opts: [
        { txt: "Escolho a opção mais estável, mesmo sabendo que algumas pessoas vão ficar insatisfeitas com isso.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Continuo revisando mentalmente cada possibilidade porque tenho medo de deixar passar algum detalhe óbvio que mudaria completamente a decisão correta.", w: { Page: 3, Knight: 2, Seer: 1 } },
        { txt: "Tento reorganizar a situação pra criar uma terceira alternativa que evite os piores efeitos dos dois lados.", w: { Witch: 3, Maid: 2 } },
        { txt: "Acabo assumindo a responsabilidade pela decisão porque confiar que os outros vão escolher direito parece arriscado demais.", w: { Prince: 3, Thief: 2, Bard: -2 } },
        { txt: "Aceito que toda escolha importante acaba favorecendo alguém e prejudicando outra pessoa, então prefiro garantir que eu não seja quem sai perdendo.", w: { Thief: 3, Mage: 2, Sylph: -2 } }
    ]},
    { t: "Você percebe que uma pessoa próxima está tomando uma decisão ruim, mas ela parece convencida de que está sendo totalmente racional.", opts: [
        { txt: "Em vez de discutir a escolha diretamente, tento mudar o jeito como ela está enxergando o problema para abrir outras possibilidades.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Aponto que ela não está sendo tão imparcial quanto pensa. A decisão já parece tomada, ela só está inventando uma justificativa bonita.", w: { Prince: 3, Mage: 2 } },
        { txt: "Evito dizer o que ela deve fazer. Tenho medo de interferir demais e depois descobrir que minha leitura estava errada.", w: { Rogue: 3, Page: 2, Prince: -2 } },
        { txt: "Uso o raciocínio dela para entender o que ela valoriza e aproveito essa informação quando eu precisar tomar decisões parecidas.", w: { Thief: 3, Mage: 2 } },
        { txt: "Tento mostrar que eu também consigo analisar a situação friamente, mas acabo deixando claro demais que estou pessoalmente incomodado.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "Você está jogando um jogo de tabuleiro complexo pela primeira vez, e percebe que as regras permitem estratégias bem diferentes.", opts: [
        { txt: "Observo algumas rodadas até entender naturalmente como as escolhas se conectam, sem precisar dominar tudo antes de jogar.", w: { Heir: 3, Seer: 1 } },
        { txt: "Procuro a brecha no sistema: uma combinação de regras que ninguém está usando direito ainda.", w: { Witch: 3, Thief: 2 } },
        { txt: "Explico as regras para quem está perdido, tentando fazer todo mundo conseguir jogar sem travar.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Fico com medo de fazer uma jogada burra e passo tempo demais perguntando se entendi cada detalhe.", w: { Page: 3, Rogue: 1 } },
        { txt: "Distribuo dicas e possibilidades para equilibrar a mesa, mesmo que isso enfraqueça minha própria vantagem.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "Você precisa escolher uma rota em um jogo ou história interativa, sabendo que cada decisão pode bloquear cenas futuras.", opts: [
        { txt: "Sigo o caminho que parece coerente com o personagem que estou interpretando, mesmo sem saber todas as consequências.", w: { Heir: 3, Page: 1 } },
        { txt: "Tento prever quais escolhas liberam mais possibilidades depois, como se estivesse mapeando uma árvore de decisões.", w: { Seer: 3, Mage: 2 } },
        { txt: "Procuro uma forma de manipular o sistema para ver mais caminhos do que ele parecia permitir.", w: { Witch: 3, Thief: 1 } },
        { txt: "Salvo antes de cada decisão importante porque não confio na minha leitura do que vai acontecer.", w: { Page: 3, Knight: 2 } },
        { txt: "Escolho pensando em quais personagens ou aliados sairiam menos prejudicados no longo prazo.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "Um amigo te pede ajuda para decidir entre duas opções, mas claramente quer que você escolha por ele.", opts: [
        { txt: "Organizo os prós, contras e consequências para que ele consiga decidir sem empurrar a responsabilidade para mim.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Assumo a decisão se a pessoa estiver travada demais; alguém precisa fazer a jogada antes que o tabuleiro piore.", w: { Knight: 3, Prince: 1, Page: -1 } },
        { txt: "Devolvo a escolha para ele de um jeito mais claro, separando o que é medo, desejo e consequência real.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Uso a hesitação dele para entender que tipo de escolha ele evita, e guardo esse padrão para depois.", w: { Mage: 3, Thief: 1 } },
        { txt: "Fico inseguro de influenciar demais e acabar sendo culpado se a escolha der errado.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "Você entra em um grupo onde cada pessoa parece ter uma função implícita: líder, piadista, mediador, alvo, conselheiro.", opts: [
        { txt: "Percebo rapidamente qual papel está vazio e acabo ocupando esse lugar sem pensar muito.", w: { Heir: 3, Maid: 1 } },
        { txt: "Analiso quem toma decisões, quem influencia por trás e quem parece ter menos escolha do que os outros.", w: { Seer: 3, Mage: 2 } },
        { txt: "Mudo meu comportamento conforme o papel que me dá mais margem de movimento naquele grupo.", w: { Witch: 3, Thief: 2 } },
        { txt: "Tento redistribuir as funções para ninguém ficar preso no mesmo papel desconfortável para sempre.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Fico tentando descobrir qual papel esperam de mim e acabo agindo de forma artificial demais.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "Você percebe que uma discussão não é sobre quem está certo, mas sobre quais regras cada pessoa acha que estão valendo.", opts: [
        { txt: "Tento nomear as regras escondidas da conversa para que todo mundo saiba qual jogo está jogando.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Uso a diferença entre os sistemas de regra para mudar a conversa para um terreno onde eu tenha vantagem.", w: { Witch: 3, Thief: 2, Rogue: -1 } },
        { txt: "Aceito que cada pessoa está operando com uma lógica própria e tento navegar entre elas sem forçar uma única estrutura.", w: { Heir: 3, Rogue: 2 } },
        { txt: "Fico preso tentando descobrir qual conjunto de regras é o verdadeiro antes de falar qualquer coisa.", w: { Page: 3, Mage: 2 } },
        { txt: "Crio um meio-termo para a conversa continuar sem que ninguém precise abandonar completamente sua lógica.", w: { Maid: 3, Sylph: 2 } }
    ]},
    { t: "Você precisa montar um cronograma, mas o problema não é tempo: é decidir a ordem lógica das etapas.", opts: [
        { txt: "Organizo as etapas como uma cadeia de causa e efeito, para cada ação preparar a próxima.", w: { Maid: 3, Knight: 2 } },
        { txt: "Simulo diferentes ordens mentalmente até perceber qual delas cria menos conflitos depois.", w: { Seer: 3, Mage: 2 } },
        { txt: "Deixo a sequência se formar enquanto faço; às vezes a próxima etapa fica óbvia só depois da anterior existir.", w: { Heir: 3, Rogue: 1 } },
        { txt: "Reorganizo as etapas para criar uma rota mais esperta do que a ordem padrão sugeria.", w: { Witch: 3, Thief: 1 } },
        { txt: "Travado entre muitas ordens possíveis, começo a copiar um modelo pronto mesmo sem saber se ele encaixa.", w: { Page: 3, Bard: 1 } }
    ]},
    { t: "Você descobre que uma regra injusta está sendo aplicada de forma diferente dependendo de quem quebra.", opts: [
        { txt: "Mapeio o padrão das exceções para entender quem o sistema protege e quem ele pune.", w: { Mage: 3, Seer: 2 } },
        { txt: "Uso a inconsistência para abrir uma brecha que outras pessoas também possam usar.", w: { Rogue: 3, Witch: 2 } },
        { txt: "Mudo a forma como o grupo lida com a regra, criando um procedimento mais justo do que o oficial.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Tiro vantagem da exceção se ela finalmente me favorece; não fui eu que fiz o sistema ser hipócrita.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "Tenho medo de apontar a injustiça e virar o próximo exemplo de punição.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você está tentando entender uma pessoa que sempre age de forma diferente dependendo do contexto.", opts: [
        { txt: "Vejo isso como natural. Pessoas mudam de papel conforme a situação pede; não preciso fixar uma versão única delas.", w: { Heir: 3, Seer: 1 } },
        { txt: "Comparo os contextos para descobrir quais condições ativam cada comportamento.", w: { Mage: 3, Seer: 2 } },
        { txt: "Tento ajudar a pessoa a perceber esses padrões sem tratá-la como falsa ou incoerente.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Uso essa flexibilidade dela para prever qual abordagem vai funcionar melhor comigo.", w: { Thief: 3, Witch: 1 } },
        { txt: "Fico inseguro porque não sei qual versão da pessoa é a 'real' e qual resposta minha seria adequada.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "Um plano coletivo está falhando porque cada pessoa está tomando decisões boas isoladamente, mas ruins em conjunto.", opts: [
        { txt: "Reorganizo o sistema de escolhas para que uma decisão individual não atrapalhe a consequência coletiva.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Redistribuo tarefas e opções para cada pessoa tomar decisões onde causa menos dano e mais benefício.", w: { Rogue: 3, Knight: 1 } },
        { txt: "Observo a rede inteira de consequências até entender onde as escolhas estão se sabotando.", w: { Seer: 3, Mage: 2 } },
        { txt: "Manipulo algumas condições do plano para forçar decisões melhores sem precisar convencer todo mundo diretamente.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "Tento ajudar, mas fico perdido quando percebo que uma escolha certa para uma pessoa pode ser errada para o grupo.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que está sempre escolhendo a opção mais racional, mesmo quando isso te deixa infeliz.", opts: [
        { txt: "Tento entender qual regra interna está decidindo por mim antes mesmo de eu sentir o que quero.", w: { Mage: 3, Seer: 2 } },
        { txt: "Procuro uma escolha que preserve minha lógica sem apagar completamente minhas necessidades.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito que minha mente funciona assim; nem toda escolha precisa parecer emocionalmente satisfatória para ser correta.", w: { Heir: 3, Knight: 1 } },
        { txt: "Tento agir contra meu próprio padrão só para provar que não sou escravo da minha lógica.", w: { Witch: 3, Prince: 1 } },
        { txt: "Fico preso entre fazer o que faz sentido e admitir que talvez eu nem saiba escolher por vontade própria.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você está diante de uma escolha onde todos os caminhos levam a algum tipo de perda. Como sua mente processa a paralisia?", opts: [
        { txt: "Escolho o caminho que preserva a lógica do sistema maior, mesmo que eu sofra. Sacrifício racional.", w: { Maid: 3, Knight: 2, Prince: -2 } },
        { txt: "Recuso-me a escolher. Deixo que o acaso decida, pois não quero carregar o peso da consequência.", w: { Bard: 3, Heir: 2, Witch: -2 } },
        { txt: "Tento criar uma 'terceira via' forçada através da manipulação, recusando as opções dadas.", w: { Witch: 3, Thief: 2 } },
        { txt: "Analiso qual perda é mais útil a longo prazo. Se algo deve ser destruído, que seja o menos eficiente.", w: { Prince: 3, Mage: 2 } },
        { txt: "Paraliso e não faço nada. Se eu não escolher, tecnicamente a culpa do resultado não é minha.", w: { Bard: 3, Page: 2, Knight: -2 } }
    ]},
    { t: "Você entra em um ambiente novo onde todo mundo parece seguir regras sociais que ninguém explicou claramente.", opts: [
        { txt: "Observo como as pessoas agem, copio o básico para não chamar atenção e vou ajustando meu comportamento conforme entendo melhor o clima.", w: { Heir: 3, Maid: 2 } },
        { txt: "Tento identificar rapidamente quais atitudes ali são recompensadas ou punidas, porque entender essas regras evita problemas depois.", w: { Mage: 3, Seer: 2 } },
        { txt: "Adoto uma postura educada e neutra até entender qual papel faz sentido naquele espaço. Melhor criar uma base segura antes de agir demais.", w: { Maid: 3, Knight: 2 } },
        { txt: "Mesmo tentando me encaixar, fico consciente demais de cada gesto e palavra, como se qualquer detalhe pudesse denunciar que não sei o que estou fazendo.", w: { Knight: 3, Page: 2 } },
        { txt: "Ajo do meu jeito até me darem um motivo real para mudar. Não gosto de fingir que entendi regras que ninguém teve coragem de explicar.", w: { Bard: 3, Prince: 2, Maid: -2 } }
    ]},
    { t: "Você percebe que está adiando uma resposta importante porque qualquer escolha de palavras pode mudar completamente o rumo da situação.", opts: [
        { txt: "Organizo o que preciso dizer em partes claras: o fato, a consequência e a decisão que vem depois disso.", w: { Maid: 3, Seer: 2 } },
        { txt: "Releio várias vezes procurando onde a mensagem pode ser mal interpretada antes de finalmente enviar.", w: { Knight: 3, Seer: 2 } },
        { txt: "Percebo qual é o ponto sensível da conversa, mas tenho dificuldade de transformar isso numa resposta que faça sentido para outra pessoa.", w: { Seer: 3, Rogue: 2 } },
        { txt: "Tento tirar o peso emocional da situação e responder só ao que realmente precisa ser resolvido.", w: { Sylph: 3, Maid: 2, Bard: -2 } },
        { txt: "Respondo do jeito que parece mais verdadeiro pra mim no momento. Ficar calculando cada consequência só deixaria tudo artificial.", w: { Bard: 3, Prince: 1, Knight: -2 } }
    ]},
    { t: "Você percebe que a explicação de alguém parece lógica na superfície, mas alguma coisa nela não encaixa com o que a pessoa está fazendo na prática.", opts: [
        { txt: "Questiono as premissas da explicação. Talvez o problema não esteja na conclusão, mas nas regras que a pessoa usou para chegar até ela.", w: { Witch: 3, Seer: 2 } },
        { txt: "Comparo o discurso com o comportamento. Se a lógica não aparece nas ações, então ela provavelmente é só uma justificativa conveniente.", w: { Prince: 3, Mage: 2 } },
        { txt: "Tento identificar o padrão por trás da contradição, porque esse tipo de raciocínio costuma aparecer de novo em outras situações.", w: { Mage: 3, Seer: 2 } },
        { txt: "Evito bater de frente e observo como outras pessoas reagem à explicação antes de decidir se minha leitura faz sentido.", w: { Rogue: 3, Heir: 2 } },
        { txt: "Tento provar que consigo acompanhar o raciocínio, mas acabo defendendo ou atacando a ideia antes de realmente entender todas as partes.", w: { Page: 3, Bard: 2 } }
    ]}
	],
   "Heart": [
    { t: "Você começa a gostar muito de algo meio específico, mas percebe que as pessoas ao seu redor provavelmente achariam estranho.", opts: [
        { txt: "Guardo para mim ou finjo que é só uma piada. Não quero que um gosto pessoal vire prova de que sou esquisito.", w: { Rogue: 3, Bard: 2, Heir: -2 } },
        { txt: "Assumo com naturalidade. Se isso faz parte de mim agora, não vejo motivo para tratar como vergonha.", w: { Heir: 3, Maid: 2, Rogue: -2 } },
        { txt: "Falo disso com entusiasmo demais e talvez acabe despejando muito mais informação do que a pessoa pediu.", w: { Page: 3, Maid: 1 } },
        { txt: "Transformo esse interesse numa parte visível da minha identidade, até que as pessoas passem a associar aquilo comigo.", w: { Maid: 3, Heir: 1 } },
        { txt: "Tento convencer alguém a experimentar também, porque talvez a pessoa só precise se permitir sentir a mesma coisa.", w: { Sylph: 3, Witch: 2 } }
    ]},
    { t: "Alguém próximo começa a negar claramente que está magoado, mesmo ficando cada vez mais reativo.", opts: [
        { txt: "Digo que a pessoa precisa admitir o que sente antes que isso saia de outro jeito pior.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Percebo o tipo de ferida por trás da reação porque já senti algo parecido antes.", w: { Mage: 3, Seer: 2 } },
        { txt: "Tento fazer a pessoa parar de se agarrar tanto a essa emoção; sentir não significa deixar aquilo mandar em tudo.", w: { Prince: 3, Knight: 2, Heir: -2 } },
        { txt: "Evito mexer muito nisso. Emoção reprimida dos outros costuma me puxar para um lugar que eu não quero encarar.", w: { Bard: 3, Rogue: 2, Sylph: -2 } },
        { txt: "Mudo a forma de conversar com ela para despertar uma reação mais honesta, mesmo que a pessoa ache que chegou lá sozinha.", w: { Witch: 3, Mage: 1 } }
    ]},
    { t: "Você conhece alguém com uma personalidade muito marcante, do tipo que parece dominar qualquer ambiente só por existir.", opts: [
        { txt: "Pego os traços que tornam essa pessoa magnética e começo a incorporar ao meu próprio jeito, até parecer mais natural em mim.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "Observo o que essa presença revela sobre as inseguranças e desejos das pessoas ao redor.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tento entender se admiro a pessoa de verdade ou se só quero possuir o efeito que ela causa nos outros.", w: { Mage: 3, Seer: 2, Thief: 1 } },
        { txt: "Desconfio da aura de especialidade dela e tento mostrar que ninguém é tão único assim.", w: { Prince: 3, Bard: 1 } },
        { txt: "Deixo essa presença me afetar sem resistir muito. Algumas pessoas simplesmente mudam a energia de um lugar.", w: { Heir: 3, Page: 1 } }
    ]},
    { t: "Você percebe que alguém está tentando copiar seu jeito de falar, seus gostos ou sua estética pessoal.", opts: [
        { txt: "Fico irritado porque aquilo não é só estilo; é uma parte minha sendo usada como fantasia por outra pessoa.", w: { Prince: 3, Thief: 1 } },
        { txt: "Mudo meu próprio estilo antes que a cópia consiga me alcançar. Se querem me imitar, vão correr atrás de uma versão antiga.", w: { Witch: 3, Thief: 2 } },
        { txt: "Tento entender o que exatamente a pessoa está tentando ser ao me imitar.", w: { Seer: 3, Mage: 2 } },
        { txt: "Finjo que não ligo, mas começo a esconder partes minhas para não vê-las virando performance alheia.", w: { Rogue: 3, Bard: 2 } },
        { txt: "Uso a situação para provar que meu jeito é desejável; se estão copiando, é porque tem valor.", w: { Thief: 3, Page: 2, Rogue: -2 } }
    ]},
    { t: "Você cria um personagem, avatar ou persona online que começa a parecer mais interessante do que você mesmo.", opts: [
        { txt: "Aos poucos, passo a usar essa persona como forma principal de existir; ela parece mais minha do que a versão cotidiana.", w: { Witch: 3, Heir: 2 } },
        { txt: "Fico preso entre querer ser visto como essa persona e sentir que estou enganando todo mundo.", w: { Page: 3, Mage: 1 } },
        { txt: "Analiso quais desejos meus essa persona expressa melhor do que eu consigo expressar diretamente.", w: { Mage: 3, Seer: 2 } },
        { txt: "Uso a persona para puxar atenção, afeto e fascínio que eu não conseguiria obter sendo direto demais.", w: { Thief: 3, Witch: 2 } },
        { txt: "Corto a persona quando percebo que ela está começando a substituir minha identidade real.", w: { Prince: 3, Knight: 1, Heir: -1 } }
    ]},
    { t: "Alguém diz que conhece você melhor do que você conhece a si mesmo.", opts: [
        { txt: "Reajo mal. Ninguém tem o direito de tomar posse da minha identidade e me explicar como se eu fosse objeto de estudo.", w: { Prince: 3, Knight: 2 } },
        { txt: "Uso a leitura da pessoa para ajustar a imagem que projeto, aproveitando o que ela enxerga em mim.", w: { Witch: 3, Thief: 2 } },
        { txt: "Fico curioso para saber que padrão meu ficou tão visível de fora.", w: { Seer: 3, Mage: 2 } },
        { txt: "Sinto vontade de acreditar, porque talvez seja mais fácil receber uma identidade pronta do que construir uma sozinho.", w: { Page: 3, Rogue: 1 } },
        { txt: "Tomo essa leitura para mim se ela me favorece; se alguém viu algo forte em mim, posso transformar isso em verdade.", w: { Thief: 3, Heir: 1 } }
    ]},
    { t: "Você percebe que está se apaixonando mais pela ideia que criou de alguém do que pela pessoa real.", opts: [
        { txt: "Tento separar a pessoa da fantasia antes que eu comece a tratar minha projeção como se fosse verdade.", w: { Mage: 3, Seer: 2 } },
        { txt: "Seguro a fantasia enquanto ela ainda me alimenta. Às vezes o que eu sinto importa mais do que a pessoa em si.", w: { Thief: 3, Bard: 2, Sylph: -1 } },
        { txt: "Mudo minha forma de me aproximar para descobrir quem a pessoa é quando não está dentro do papel que imaginei.", w: { Witch: 3, Seer: 1 } },
        { txt: "Fico envergonhado por ter colocado tanto de mim em alguém que talvez nunca tenha existido desse jeito.", w: { Page: 3, Rogue: 2 } },
        { txt: "Corto a idealização de uma vez. Se a imagem não é real, não quero continuar alimentando essa mentira emocional.", w: { Prince: 3, Knight: 1, Bard: -1 } }
    ]},
    { t: "Você entra em uma conversa onde todo mundo está tentando provar quem é mais verdadeiro consigo mesmo.", opts: [
        { txt: "Percebo que a disputa por autenticidade virou outra máscara social, só mais sofisticada.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tomo para mim a posição de pessoa mais honesta da sala, mesmo que isso diminua a sinceridade dos outros.", w: { Thief: 3, Prince: 1, Rogue: -1 } },
        { txt: "Mudo o clima da conversa para que as pessoas parem de performar profundidade e falem de um jeito menos ensaiado.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Fico inseguro, porque não sei se minha versão mais autêntica pareceria profunda o bastante.", w: { Page: 3, Rogue: 1 } },
        { txt: "Recuso a disputa. Transformar o eu em competição só torna todo mundo mais falso.", w: { Prince: 3, Heir: 1, Thief: -1 } }
    ]},
    { t: "Uma pessoa próxima começa a agir como se seu sofrimento fosse mais profundo e mais verdadeiro que o de qualquer outra pessoa.", opts: [
        { txt: "Tento enxergar qual necessidade de identidade existe por trás desse apego à dor.", w: { Seer: 3, Mage: 2 } },
        { txt: "Uso minha própria intensidade emocional para tirar dela o monopólio da profundidade na conversa.", w: { Thief: 3, Page: 1, Rogue: -1 } },
        { txt: "Tento transformar a dor em algo menos central para a forma como ela se define.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Corto a dramatização quando ela começa a apagar os sentimentos de todo mundo ao redor.", w: { Prince: 3, Knight: 2, Sylph: -1 } },
        { txt: "Fico desconfortável porque entendo a vontade de fazer da dor uma prova de existência.", w: { Mage: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que um elogio recebido não parece enxergar quem você é, só uma imagem conveniente sua.", opts: [
        { txt: "Aceito o elogio mesmo assim e uso essa imagem conveniente se ela me torna mais desejável ou admirado.", w: { Thief: 3, Witch: 1, Rogue: -1 } },
        { txt: "Tento corrigir a pessoa, porque ser amado por uma versão falsa de mim parece pior do que não ser amado.", w: { Prince: 3, Seer: 1 } },
        { txt: "Analiso que parte de mim foi simplificada para caber no olhar da pessoa.", w: { Seer: 3, Mage: 2 } },
        { txt: "Mudo minha apresentação para fazer a pessoa enxergar uma camada mais real, sem precisar confrontar diretamente.", w: { Witch: 3, Maid: 1 } },
        { txt: "Fico dividido entre gostar da validação e sentir que ela não pertence exatamente a mim.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "Você percebe que sua personalidade muda muito dependendo de quem está olhando.", opts: [
        { txt: "Vejo isso como uma habilidade. Cada pessoa recebe a versão de mim que melhor funciona naquela relação.", w: { Witch: 3, Thief: 2 } },
        { txt: "Tento entender qual dessas versões aparece quando não existe ninguém para impressionar.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico com medo de não existir um eu verdadeiro por trás das adaptações.", w: { Page: 3, Rogue: 1 } },
        { txt: "Assumo a multiplicidade sem crise. Ser uma pessoa só o tempo todo parece mais artificial do que mudar.", w: { Heir: 3, Bard: 1 } },
        { txt: "Uso essas versões para conseguir afeto, acesso ou influência em lugares onde meu eu direto não bastaria.", w: { Thief: 3, Witch: 2, Rogue: -1 } }
    ]},
    { t: "Alguém começa a contar sua história de vida de um jeito que transforma você em personagem secundário da narrativa dela.", opts: [
        { txt: "Tomo a história de volta e faço questão de deixar claro onde meu desejo, minha dor e minha escolha foram apagados.", w: { Thief: 3, Prince: 2, Rogue: -1 } },
        { txt: "Reorganizo a narrativa para que cada pessoa apareça com sua própria interioridade, não só como função na vida de alguém.", w: { Maid: 3, Sylph: 2, Thief: -1 } },
        { txt: "Percebo quais partes de mim a pessoa precisou simplificar para sustentar a versão dela.", w: { Seer: 3, Mage: 2 } },
        { txt: "Mudo a forma como me apresento dali em diante para impedir que essa leitura continue colando.", w: { Witch: 3, Knight: 1 } },
        { txt: "Fico tão desconfortável que começo a duvidar se minha versão da história tem força suficiente para competir.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que está vivendo uma versão de si mesmo criada para agradar alguém importante.", opts: [
        { txt: "Começo a construir conscientemente uma identidade minha, mesmo que eu ainda não saiba exatamente quem sou sem aquela influência.", w: { Maid: 3, Rogue: 2 } },
        { txt: "Tento cortar essa versão falsa de mim de uma vez. Prefiro parecer frio ou ingrato a continuar performando algo que não sinto.", w: { Prince: 3, Bard: 2, Maid: -1 } },
        { txt: "Tenho dificuldade de largar, porque parte de mim ainda quer que essa pessoa aprove quem eu sou.", w: { Rogue: 3, Maid: 1 } },
        { txt: "Adapto minha própria personalidade até ela parecer mais verdadeira para mim, mesmo que tenha começado como influência externa.", w: { Witch: 3, Heir: 2 } },
        { txt: "Finjo que isso não me afeta, mas vou ficando cada vez mais vazio e irritado por dentro.", w: { Bard: 3, Knight: 1, Sylph: -1 } }
    ]},
    { t: "Você entra em um grupo onde uma pessoa já é conhecida por ter exatamente o tipo de carisma ou estilo que você queria ter.", opts: [
        { txt: "Tento encontrar meu próprio jeito de brilhar sem precisar competir diretamente com a presença dela.", w: { Maid: 3, Rogue: 2, Thief: -2 } },
        { txt: "Pego aquilo que torna a pessoa marcante e faço com mais intensidade, até o traço que era dela começar a parecer mais meu do que dela.", w: { Thief: 3, Page: 2, Rogue: -2 } },
        { txt: "Fico observando o que torna aquela pessoa tão marcante, tentando entender que desejo ou ferida ela desperta nos outros.", w: { Seer: 3, Mage: 2 } },
        { txt: "Desconfio da aura dela e tento mostrar que ninguém é tão especial quanto parece.", w: { Prince: 3, Bard: 2 } },
        { txt: "Fico intimidado e tento esconder que queria ter esse tipo de presença também.", w: { Rogue: 3, Knight: 1, Thief: -2 } }
    ]},
    { t: "Você sente uma vontade forte e irracional de tomar uma decisão que não consegue justificar muito bem.", opts: [
        { txt: "Confio no impulso. Se algo dentro de mim está puxando tão forte, provavelmente existe uma verdade ali.", w: { Heir: 3, Page: 2 } },
        { txt: "Tento entender de onde esse desejo está vindo antes de decidir se ele é realmente meu ou só uma reação do momento.", w: { Mage: 3, Seer: 2 } },
        { txt: "Corto o impulso antes que ele me controle. Vontade forte não é argumento suficiente.", w: { Prince: 3, Knight: 2, Heir: -2 } },
        { txt: "Uso esse desejo como energia para agir, mesmo que eu ainda esteja inseguro sobre o quanto ele é moralmente certo.", w: { Knight: 3, Mage: 2 } },
        { txt: "Exagero na certeza e ajo como se essa vontade fosse destino, mesmo sem ter maturidade para lidar com tudo que ela envolve.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "Um amigo demonstra vergonha de uma parte muito sincera da própria personalidade.", opts: [
        { txt: "Tento fazer ele enxergar beleza naquela característica, mesmo que eu precise coddar um pouco demais no processo.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Falo sobre minhas próprias esquisitices para criar espaço para ele se abrir também.", w: { Heir: 3, Rogue: 2 } },
        { txt: "Fico desconfortável porque reconheço nele uma vergonha parecida com a minha.", w: { Mage: 3, Rogue: 2 } },
        { txt: "Tento mudar a relação dele com essa parte de si, como se ela pudesse virar força em vez de defeito.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Acabo transformando o assunto numa demonstração emocional maior do que precisava, tentando provar que ele é amado.", w: { Page: 3, Sylph: 2 } }
    ]},
    { t: "Você percebe que alguém está tentando apagar a própria paixão por algo para parecer mais racional ou maduro.", opts: [
        { txt: "Tento reacender essa paixão, lembrando a pessoa de que gostar intensamente de algo não é infantil.", w: { Sylph: 3, Heir: 2, Prince: -2 } },
        { txt: "Fico irritado com a ideia de que sentir muito torna alguém fraco. Para mim, isso só revela covardia emocional.", w: { Prince: 3, Bard: 2 } },
        { txt: "Entendo o impulso de esconder. Às vezes a gente aprende a guardar o que ama para não virar alvo.", w: { Rogue: 3, Mage: 2 } },
        { txt: "Tento mostrar, pelo meu próprio exemplo, que dá para ser intenso sem pedir desculpa por isso.", w: { Knight: 3, Maid: 2 } },
        { txt: "Mexer nisso me assusta um pouco, porque eu também costumo deixar minhas paixões quietas até elas explodirem.", w: { Bard: 3, Rogue: 2, Sylph: -1 } }
    ]},
    { t: "Você se apaixona rapidamente por uma pessoa, ideia ou possibilidade nova.", opts: [
        { txt: "Me entrego com facilidade. Se isso despertou algo verdadeiro em mim, não quero fingir distância.", w: { Heir: 3, Page: 2, Prince: -2 } },
        { txt: "Tento dosar a intensidade porque tenho medo de invadir espaço ou parecer emocional demais.", w: { Rogue: 3, Knight: 2 } },
        { txt: "Vou longe demais rápido demais, demonstrando uma intimidade que talvez ainda não exista de verdade.", w: { Page: 3, Bard: 2 } },
        { txt: "Transformo essa paixão em movimento: faço planos, crio coisas e tento tornar aquilo parte real da minha vida.", w: { Maid: 3, Knight: 2 } },
        { txt: "Tento entender se essa paixão é minha mesmo ou se fui arrastado pelo desejo de outra pessoa.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "Você percebe que uma conversa está ficando fria demais para algo que claramente envolve sentimentos importantes.", opts: [
        { txt: "Tento trazer a conversa de volta para o que cada pessoa realmente sente, não só para o que parece lógico dizer.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Fico tentado a encerrar o assunto. Se ninguém consegue falar de sentimentos sem virar bagunça, talvez seja melhor não abrir isso.", w: { Prince: 3, Bard: 2, Sylph: -2 } },
        { txt: "Percebo quem está escondendo uma ferida por trás da calma e tento entender o que ela não está dizendo.", w: { Seer: 3, Mage: 2 } },
        { txt: "Acabo explodindo com o que eu estava segurando, porque a frieza da conversa me faz sentir apagado.", w: { Bard: 3, Page: 2, Knight: -1 } },
        { txt: "Uso meu próprio sentimento como ponto de partida, mas tento manter firmeza para não virar só desabafo.", w: { Knight: 3, Maid: 2 } }
    ]},
    { t: "Alguém acusa você de ser intenso demais com as coisas que ama.", opts: [
        { txt: "Assumo sem muita vergonha. Amar pouco só para parecer equilibrado nunca fez sentido para mim.", w: { Heir: 3, Maid: 2, Rogue: -2 } },
        { txt: "Fico na defensiva e tento provar que minha intensidade é parte essencial de quem eu sou.", w: { Page: 3, Prince: 2 } },
        { txt: "Finjo que não ligo para a acusação, mas depois fico remoendo se eu deveria esconder mais esse lado.", w: { Rogue: 3, Bard: 2 } },
        { txt: "Uso essa intensidade para puxar outras pessoas junto comigo. Se eu amo algo, eu faço esse amor contaminar o ambiente.", w: { Maid: 3, Sylph: 2, Thief: 1 } },
        { txt: "Tento cortar essa intensidade antes que ela me torne dependente, ridículo ou fácil de manipular.", w: { Prince: 3, Knight: 2, Heir: -2 } }
    ]}
	],
   "Hope": [
    { t: "Alguém te chama para uma ideia meio absurda, mas claramente feita com entusiasmo genuíno.", opts: [
        { txt: "Digo sim antes de pensar demais. Se a pessoa acredita tanto nisso, talvez valha pelo menos tentar.", w: { Page: 3, Heir: 2, Prince: -2 } },
        { txt: "Tento entender se aquilo é uma empolgação verdadeira ou só uma fantasia que vai desabar no primeiro obstáculo.", w: { Mage: 3, Seer: 2 } },
        { txt: "Incentivo a pessoa e tento fazer os outros darem uma chance também. Às vezes alguém só precisa de permissão para começar.", w: { Sylph: 3, Maid: 2, Prince: -2 } },
        { txt: "Apoio se fizer sentido para mim, mas não vou fingir fé em algo só para manter o clima bonito.", w: { Prince: 3, Knight: 2, Sylph: -2 } },
        { txt: "Tento transformar a ideia em algo que pareça possível para mais gente, mesmo que precise mudar um pouco o sonho original.", w: { Witch: 3, Sylph: 2 } }
    ]},
    { t: "Você percebe que está esperando uma confirmação externa para começar algo que realmente quer fazer.", opts: [
        { txt: "Fico preso até alguém me dar o sinal verde. Se ninguém confirmar que posso, parece errado seguir sozinho.", w: { Maid: 3, Rogue: 2, Prince: -2 } },
        { txt: "Tento me convencer de que mereço tentar, mas uma parte minha ainda acha que essa chance é boa demais para ser real.", w: { Rogue: 3, Page: 2 } },
        { txt: "Crio meu próprio motivo para seguir. Se eu preciso de uma luz verde, talvez ela tenha que vir de mim.", w: { Maid: 3, Witch: 2 } },
        { txt: "Uso a expectativa dos outros como combustível. Se eles acreditam em mim, eu consigo me empurrar mais longe.", w: { Knight: 3, Thief: 2 } },
        { txt: "Finjo que não preciso de aprovação nenhuma, mas acabo tentando provar que aquilo era real e possível o tempo todo.", w: { Page: 3, Knight: 2 } }
    ]},
    { t: "Uma pessoa em quem você confiava muito decepciona você de um jeito difícil de ignorar.", opts: [
        { txt: "Tento descobrir se minha confiança estava no lugar errado ou se ainda existe algo verdadeiro ali que vale salvar.", w: { Mage: 3, Seer: 2 } },
        { txt: "Tenho dificuldade de abandonar a fé nela. Uma parte minha continua achando que tudo vai se acertar de algum jeito.", w: { Heir: 3, Maid: 2, Prince: -2 } },
        { txt: "Corto a idealização na hora. Se a confiança quebrou, não vou continuar sustentando uma mentira confortável.", w: { Prince: 3, Bard: 1, Sylph: -2 } },
        { txt: "Tento ajudar a pessoa a recuperar minha confiança, mas fico insistindo demais para que ela prove que ainda pode ser boa.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Dou um jeito de parecer bem com isso, mas no fundo começo a duvidar de tudo que eu acreditava sobre a pessoa.", w: { Bard: 3, Rogue: 2 } }
    ]},
    { t: "Os fatos apontam que algo importante para você provavelmente não vai acontecer, mas abrir mão disso parece destruir o sentido de tudo.", opts: [
        { txt: "Seguro a fé mesmo assim. Enquanto existir qualquer possibilidade, eu não aceito tratar aquilo como morto.", w: { Heir: 3, Page: 2, Mage: -1 } },
        { txt: "Tento descobrir se ainda existe um sinal real de esperança ou se estou só me protegendo de uma verdade dolorosa.", w: { Mage: 3, Seer: 2 } },
        { txt: "Crio outro motivo para continuar. Se uma esperança falha, eu preciso acender outra antes que tudo pare.", w: { Maid: 3, Witch: 2 } },
        { txt: "Recuso a conclusão dos outros. O mundo não tem direito de decidir sozinho o que ainda pode ou não existir.", w: { Prince: 3, Witch: 2 } },
        { txt: "Finjo que já aceitei, mas continuo voltando para a fantasia porque ela ainda parece mais habitável que a realidade.", w: { Bard: 3, Rogue: 2 } }
    ]},
    { t: "Você vê alguém desistindo de algo porque está convencido de que nunca vai conseguir.", opts: [
        { txt: "Tento mostrar uma possibilidade real que a pessoa ainda não percebeu. Talvez ela só precise enxergar o caminho certo.", w: { Seer: 3, Sylph: 2 } },
        { txt: "Empurro a pessoa para tentar de novo, mesmo que ela esteja resistente. Às vezes o primeiro passo precisa ser arrancado na marra.", w: { Sylph: 3, Witch: 2 } },
        { txt: "Ofereço minha confiança como apoio. Se ela ainda não acredita em si, pode se apoiar um pouco na minha fé.", w: { Heir: 3, Maid: 2 } },
        { txt: "Desconfio desse discurso de desistência. Às vezes a pessoa chama de impossível algo que só está com medo de encarar.", w: { Prince: 3, Knight: 2 } },
        { txt: "Quero ajudar, mas fico com medo de prometer esperança demais e acabar alimentando uma ilusão.", w: { Rogue: 3, Mage: 2 } }
    ]},
    { t: "Um grupo está desanimado, mas uma pessoa começa a falar de um futuro melhor com tanta convicção que todos parecem reacender.", opts: [
        { txt: "Tomo essa energia para mim e passo a ser o rosto da esperança do grupo. Se alguém vai carregar a visão, vai ser comigo no centro.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "Ajudo a transformar a fala em algo mais concreto, para que a esperança não morra assim que a empolgação passar.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Observo o que exatamente fez as pessoas acreditarem de novo, porque a fé do grupo revelou uma necessidade escondida.", w: { Seer: 3, Mage: 2 } },
        { txt: "Deixo a empolgação crescer sem tentar controlar. Às vezes uma fantasia coletiva precisa tomar conta antes de virar qualquer coisa real.", w: { Bard: 3, Heir: 1 } },
        { txt: "Uso a nova crença do grupo para empurrar uma mudança que antes ninguém teria coragem de aceitar.", w: { Witch: 3, Thief: 2 } }
    ]},
    { t: "Você percebe que alguém acredita em você de um jeito quase exagerado, como se você fosse incapaz de falhar.", opts: [
        { txt: "Aproveito essa fé para conseguir mais espaço, mais confiança e mais influência antes que a imagem perfeita desmorone.", w: { Thief: 3, Witch: 1, Rogue: -2 } },
        { txt: "Tento corrigir a imagem antes que a pessoa se machuque acreditando numa versão impossível de mim.", w: { Sylph: 3, Mage: 1, Thief: -1 } },
        { txt: "Aceito naturalmente. Se a pessoa enxerga algo grandioso em mim, talvez ela só esteja vendo antes de todo mundo.", w: { Heir: 3, Page: 1 } },
        { txt: "Fico preso tentando merecer essa fé, mesmo que ela tenha sido colocada em mim sem eu pedir.", w: { Page: 3, Knight: 2 } },
        { txt: "Deixo a pessoa acreditar até onde quiser. Se a ilusão quebrar depois, não fui eu que construí sozinho.", w: { Bard: 3, Prince: 1, Sylph: -1 } }
    ]},
    { t: "Uma promessa bonita começa a unir as pessoas, mas você percebe que ninguém sabe como ela seria cumprida.", opts: [
        { txt: "Uso a promessa como bandeira mesmo assim; uma visão forte pode mover pessoas antes de existir um plano perfeito.", w: { Thief: 3, Knight: 1 } },
        { txt: "Tento dar estrutura para a promessa, separando sonho, meta e primeiro passo possível.", w: { Maid: 3, Seer: 2 } },
        { txt: "Mudo a promessa até ela continuar inspiradora, mas menos dependente de uma fantasia impossível.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Destruo o encanto se percebo que estão usando esperança para evitar responsabilidade.", w: { Prince: 3, Mage: 2, Heir: -1 } },
        { txt: "Deixo a promessa inflar até as próprias contradições aparecerem. Às vezes só o excesso revela a mentira.", w: { Bard: 3, Witch: 1, Maid: -1 } }
    ]},
    { t: "Você vê alguém vendendo uma solução milagrosa para pessoas desesperadas por acreditar em alguma coisa.", opts: [
        { txt: "Tomo a atenção desse público para mim, oferecendo uma promessa mais convincente antes que caiam numa pior.", w: { Thief: 3, Sylph: 1, Rogue: -1 } },
        { txt: "Tento proteger as pessoas sem ridicularizar a necessidade que elas têm de esperança.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Investigo qual vazio aquela promessa está preenchendo, porque ninguém acredita em milagre sem motivo.", w: { Mage: 3, Seer: 2 } },
        { txt: "Exponho a farsa de forma dura. Se algo se alimenta da fé dos vulneráveis, merece ser quebrado.", w: { Prince: 3, Knight: 2, Sylph: -1 } },
        { txt: "Fico tentado a acreditar também, mesmo sabendo que a promessa é boa demais para ser real.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "Você percebe que uma pessoa só consegue continuar porque acredita numa fantasia que provavelmente nunca vai acontecer.", opts: [
        { txt: "Deixo a fantasia existir. Talvez ela esteja fazendo mais bem do que a verdade faria agora.", w: { Bard: 3, Heir: 2 } },
        { txt: "Tento criar uma esperança substituta, mais habitável, antes de tocar na fantasia antiga.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Uso essa crença para conduzir a pessoa na direção que acho melhor, mesmo que ela não perceba.", w: { Witch: 3, Thief: 2, Rogue: -1 } },
        { txt: "Pego para mim a posição de quem sustenta essa fé, porque ser necessário para a esperança de alguém me dá força.", w: { Thief: 3, Rogue: 1, Sylph: -1 } },
        { txt: "Tento entender se a fantasia é uma ponte para sobreviver ou uma prisão que impede a pessoa de agir.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "Uma causa que parecia pura começa a atrair pessoas interessadas mais na imagem bonita do que no ideal em si.", opts: [
        { txt: "Uso a imagem da causa para ganhar alcance. Se a estética atrai gente, posso transformar isso em poder para o movimento.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "Tento recentrar a causa no ideal original antes que ela vire só performance de bondade.", w: { Maid: 3, Prince: 1 } },
        { txt: "Analiso que tipo de crença as pessoas estão comprando: justiça real, pertencimento ou só uma versão bonita de si mesmas.", w: { Seer: 3, Mage: 2 } },
        { txt: "Faço a causa parecer mais acessível para que pessoas superficiais possam entrar e, talvez, acreditar de verdade depois.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Deixo a hipocrisia se acumular até a causa precisar encarar o que virou.", w: { Bard: 3, Prince: 1, Maid: -1 } }
    ]},
    { t: "Você sonha com uma versão ideal de si mesmo, mas ela parece distante demais da pessoa que você é agora.", opts: [
        { txt: "Agarro essa imagem como se ela já fosse minha. Se eu acreditar forte o bastante, posso puxar meu futuro para mais perto.", w: { Thief: 3, Page: 2 } },
        { txt: "Transformo o ideal em pequenos rituais, hábitos e provas diárias de que ainda estou caminhando.", w: { Maid: 3, Knight: 2 } },
        { txt: "Tento entender se esse ideal nasceu de um desejo verdadeiro ou de uma fantasia que só me humilha.", w: { Mage: 3, Seer: 2 } },
        { txt: "Deixo a imagem perfeita me guiar, mesmo que eu não consiga explicar por que ela parece tão certa.", w: { Heir: 3, Page: 1 } },
        { txt: "Rio da minha própria fantasia e continuo vivendo; nem todo sonho precisa virar missão sagrada.", w: { Bard: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que uma esperança antiga sua só continua viva porque outras pessoas ainda acreditam nela por você.", opts: [
        { txt: "Pego essa fé emprestada e uso como combustível, mesmo que ela já não pareça nascer de mim.", w: { Thief: 3, Rogue: 2 } },
        { txt: "Tento descobrir se ainda existe uma chama minha ali ou se estou só representando o sonho dos outros.", w: { Mage: 3, Seer: 2 } },
        { txt: "Cuido dessa esperança como algo compartilhado, não como uma obrigação individual minha.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Mudo o formato do sonho para que ele volte a fazer sentido para mim, não só para quem acredita em mim.", w: { Witch: 3, Maid: 1 } },
        { txt: "Deixo que a fé dos outros carregue a situação mais um pouco. Se eles ainda veem luz, talvez eu não precise ver.", w: { Bard: 3, Heir: 1 } }
    ]},
    { t: "Você entra em contato com uma obra, religião, filosofia ou história que oferece um sentido grandioso para o sofrimento.", opts: [
        { txt: "Mergulho naquilo porque finalmente parece existir uma explicação bonita o bastante para suportar a dor.", w: { Page: 3, Heir: 2 } },
        { txt: "Tento entender o que essa crença faz com as pessoas: se liberta, consola, prende ou distorce.", w: { Mage: 3, Seer: 2 } },
        { txt: "Uso esse sentido para fortalecer minha própria narrativa e me colocar como alguém que sobreviveu por um motivo.", w: { Thief: 3, Prince: 1, Rogue: -1 } },
        { txt: "Adapto partes da crença para criar uma visão mais útil, mesmo que isso desagrade quem leva o sistema ao pé da letra.", w: { Witch: 3, Sylph: 1 } },
        { txt: "Deixo a crença me anestesiar um pouco. Às vezes uma explicação bonita é melhor do que encarar o vazio inteiro.", w: { Bard: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que alguém está monopolizando a esperança do grupo, como se só a visão dela pudesse salvar todo mundo.", opts: [
        { txt: "Tomo esse papel para mim se a visão dela for fraca. O grupo precisa acreditar em alguém mais convincente.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "Tento redistribuir a fé do grupo, lembrando que esperança não deveria depender de uma única pessoa.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "Analiso por que o grupo aceitou centralizar tanto sentido em uma pessoa só.", w: { Seer: 3, Mage: 2 } },
        { txt: "Crio uma alternativa simbólica que muda o foco da salvação individual para uma possibilidade coletiva.", w: { Witch: 3, Maid: 2 } },
        { txt: "Deixo o pedestal crescer até cair. Se todo mundo quer acreditar em salvador, talvez precise ver um falhar.", w: { Bard: 3, Heir: 1, Sylph: -1 } }
    ]},
    { t: "Uma oportunidade parece perfeita demais, do tipo que dá vontade de acreditar sem fazer muitas perguntas.", opts: [
        { txt: "Minha primeira reação é aceitar. Se parece bom e não tem nada obviamente errado, por que não dizer sim?", w: { Page: 3, Heir: 2, Mage: -2 } },
        { txt: "Investigo se aquilo é autêntico ou só uma promessa bonita. Já vi coisa boa demais virar armadilha.", w: { Mage: 3, Seer: 2, Page: -2 } },
        { txt: "Fico dividido: quero acreditar, mas tenho medo de estar aceitando uma fantasia porque preciso muito que ela seja real.", w: { Rogue: 3, Bard: 2 } },
        { txt: "Agarro a chance e uso a empolgação ao meu favor. Se todo mundo está animado, melhor transformar isso em impulso antes que passe.", w: { Thief: 3, Knight: 2 } },
        { txt: "Tento descobrir qual é o caminho verdadeiro dentro da promessa, separando o que é possível do que é só brilho.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "Você percebe que as pessoas estão colocando fé demais em você, como se você fosse a solução para tudo.", opts: [
        { txt: "Uso essa confiança para motivar todo mundo, mas fico com medo de falhar e provar que nunca fui digno dela.", w: { Knight: 3, Rogue: 2 } },
        { txt: "Aceito o pedestal com facilidade. Se precisam acreditar em alguém, eu prefiro ser essa pessoa.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "Tento corresponder ao que esperam de mim, mesmo que parte dessa fé tenha sido criada pelos outros antes de ser minha.", w: { Maid: 3, Heir: 2 } },
        { txt: "Fico desconfortável e tento devolver essa confiança para o grupo. Não quero ser o único carregando a esperança de todo mundo.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "Rejeito a imagem perfeita que criaram de mim. Acreditar em mim não significa inventar uma versão falsa do que eu sou.", w: { Prince: 3, Mage: 2 } }
    ]},
    { t: "Você descobre que uma crença antiga sua talvez não seja tão verdadeira quanto parecia.", opts: [
        { txt: "Sofro com isso, mas tento entender o que naquela crença era autêntico e o que era só conforto.", w: { Mage: 3, Seer: 2 } },
        { txt: "Procuro um novo ponto de fé para substituir o antigo. Se uma luz apagou, preciso criar outra para continuar andando.", w: { Maid: 3, Heir: 2 } },
        { txt: "Destruo a crença de vez se ela se provar falsa. Não quero ficar agarrado numa esperança só porque ela me fazia bem.", w: { Prince: 3, Knight: 2 } },
        { txt: "Fico tentando defender a crença por mais tempo do que deveria, porque abrir mão dela parece perder uma parte de mim.", w: { Bard: 3, Page: 2 } },
        { txt: "Tento mudar a forma como entendo essa crença em vez de jogar tudo fora; talvez ela só precise significar outra coisa agora.", w: { Witch: 3, Sylph: 2 } }
    ]},
    { t: "Você acredita profundamente em uma ideia, causa ou sonho que as pessoas ao seu redor consideram ingênuo, impossível ou delirante.", opts: [
        { txt: "Continuo acreditando. O fato de ninguém conseguir provar agora não significa que aquilo não seja verdadeiro.", w: { Heir: 3, Page: 2 } },
        { txt: "Tento transformar essa crença em algo que outras pessoas também consigam sentir como real.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Procuro sinais de autenticidade. Eu quero acreditar, mas preciso saber se aquilo é fé verdadeira ou só uma fantasia confortável.", w: { Mage: 3, Seer: 2 } },
        { txt: "Rejeito a opinião de quem tenta reduzir tudo a fatos frios. Se eles não conseguem imaginar algo melhor, isso é limitação deles.", w: { Prince: 3, Knight: 2, Rogue: -2 } },
        { txt: "Tenho medo de acreditar demais e acabar parecendo ridículo, então deixo outras pessoas carregarem essa fé por mim.", w: { Rogue: 3, Maid: 2 } }
    ]},
    { t: "Você vê alguém defendendo algo que, para você, cruza uma linha moral impossível de relativizar.", opts: [
        { txt: "Não consigo tratar como 'opinião diferente'. Algumas coisas são erradas, e aceitar isso como debate já seria ceder demais.", w: { Prince: 3, Knight: 2 } },
        { txt: "Tento entender qual crença sustenta aquela visão antes de decidir se ainda existe algo ali que possa ser alcançado.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tento mudar o jeito como a pessoa enxerga a questão, criando uma ponte para ela acreditar em algo melhor.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Fico tentando manter harmonia e acreditar que a pessoa pode melhorar, mesmo que isso me faça tolerar demais.", w: { Heir: 3, Maid: 2, Prince: -2 } },
        { txt: "Evito me colocar como juiz da situação. Tenho medo de confiar demais na minha própria noção do que é certo.", w: { Rogue: 3, Page: 2, Prince: -2 } }
    ]}
	],
    "Doom": [
    { t: "Você percebe que assumiu tarefas demais na semana e, se continuar tentando dar conta de tudo, alguma coisa vai sair mal feita.", opts: [
        { txt: "Corto imediatamente o que for menos necessário. Melhor perder uma parte do plano do que deixar tudo desmoronar.", w: { Seer: 3, Knight: 2, Bard: -2 } },
        { txt: "Faço uma lista do que é obrigação e tento cumprir tudo na ordem certa, mas só corto alguma tarefa se alguém confirmar que tudo bem deixar aquilo de lado.", w: { Maid: 3, Rogue: 2 } },
        { txt: "Tento empurrar tudo mesmo assim. Não gosto de admitir que uma limitação prática tem poder sobre mim.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "Finjo que ainda dá tempo e vou evitando pensar nisso até a situação me obrigar a encarar as consequências.", w: { Bard: 3, Page: 2, Knight: -2 } },
        { txt: "Pego para mim as partes mais pesadas porque acho mais seguro eu carregar o prejuízo do que confiar que outra pessoa vai aguentar.", w: { Thief: 3, Heir: 2 } }
    ]},
    { t: "Uma regra nova no trabalho ou na escola atrapalha sua rotina, mas claramente foi criada para evitar um problema real.", opts: [
        { txt: "Procuro um jeito de contornar a regra sem quebrá-la diretamente. Se o limite existe, talvez dê para dobrar o formato dele.", w: { Witch: 3, Mage: 2 } },
        { txt: "Sigo a regra sem fazer muito caso. Se ela existe para evitar um problema, é melhor respeitar até surgir necessidade real de agir diferente.", w: { Heir: 3, Maid: 2, Bard: -2 } },
        { txt: "Tento entender exatamente onde a regra se aplica e onde ela não se aplica, porque toda restrição tem uma brecha prática.", w: { Mage: 3, Knight: 2 } },
        { txt: "Começo a lembrar as pessoas do motivo da regra existir, especialmente quando vejo alguém tratando aquilo como frescura.", w: { Sylph: 3, Seer: 2, Bard: -2 } },
        { txt: "Tento seguir a regra para mostrar que sou responsável, mas acabo exagerando ou interpretando tudo de um jeito mais rígido do que precisava.", w: { Page: 3, Maid: 2 } }
    ]},
    { t: "Você percebe que uma regra injusta não pode ser simplesmente quebrada sem que alguém pague caro por isso.", opts: [
        { txt: "Analiso quem seria punido, quem escaparia ileso e qual custo real existe por trás de cada escolha.", w: { Mage: 3, Seer: 2 } },
        { txt: "Aceito a existência do limite e ajo dentro dele, mesmo odiando o fato de ele ser necessário para sobreviver.", w: { Heir: 3, Knight: 1 } },
        { txt: "Procuro uma forma de distribuir o risco para que uma única pessoa não carregue toda a punição.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Tomo para mim a parte mais perigosa da quebra, porque prefiro controlar onde a consequência vai cair.", w: { Thief: 3, Knight: 2 } },
        { txt: "Tento alterar as condições da regra para que ela continue existindo, mas machuque menos quem já está vulnerável.", w: { Witch: 3, Sylph: 2 } }
    ]},
    { t: "Você descobre que um amigo está escondendo uma dívida, multa ou problema burocrático que só vai piorar com o tempo.", opts: [
        { txt: "Faço a pessoa encarar os números, prazos e consequências antes que a situação vire uma sentença maior.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Tento entender como o problema cresceu, onde o sistema apertou e qual regra ainda pode ser usada a favor dela.", w: { Mage: 3, Witch: 2 } },
        { txt: "Pego a parte mais urgente para resolver primeiro, mesmo que isso me coloque no meio de uma dor que nem era minha.", w: { Thief: 3, Knight: 2 } },
        { txt: "Ajudo a dividir o peso entre pessoas confiáveis para que ninguém afunde sozinho.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Aceito que não dá para salvar tudo e foco no que ainda pode impedir o dano maior.", w: { Heir: 3, Seer: 1 } }
    ]},
    { t: "Seu corpo começa a dar sinais claros de exaustão, mas ainda existem obrigações esperando por você.", opts: [
        { txt: "Reconheço o limite físico como uma regra real, não como fraqueza, e reorganizo o que ainda pode ser feito.", w: { Mage: 3, Maid: 2 } },
        { txt: "Continuo até quebrar, porque parar antes do colapso parece admitir derrota cedo demais.", w: { Bard: 3, Prince: 2, Sylph: -2 } },
        { txt: "Corto tarefas sem piedade para preservar o mínimo necessário de funcionamento.", w: { Seer: 3, Knight: 2, Bard: -1 } },
        { txt: "Peço que alguém assuma parte do peso, mesmo odiando depender da resistência dos outros.", w: { Rogue: 3, Page: 2 } },
        { txt: "Pego as piores partes logo, para que pelo menos o sofrimento tenha uma ordem que eu consigo controlar.", w: { Thief: 3, Heir: 1 } }
    ]},
    { t: "Você percebe que uma situação vai acabar mal de qualquer jeito, mas ainda dá para escolher como esse fim acontece.", opts: [
        { txt: "Escolho o fim menos destrutivo, mesmo que ninguém saia completamente satisfeito.", w: { Seer: 3, Mage: 2 } },
        { txt: "Aceito o fim como parte do processo e tento atravessá-lo sem desperdiçar energia negando o óbvio.", w: { Heir: 3, Rogue: 1 } },
        { txt: "Organizo uma despedida prática: documentos, objetos, conversas pendentes e tudo que precisa ser encerrado direito.", w: { Maid: 3, Knight: 2 } },
        { txt: "Tento carregar a parte mais amarga do encerramento para que os outros não precisem encarar tudo de uma vez.", w: { Thief: 3, Sylph: 1 } },
        { txt: "Forço o fim antes que ele continue apodrecendo lentamente e machucando todo mundo por mais tempo.", w: { Prince: 3, Witch: 2 } }
    ]},
    { t: "Você está em uma fila, sistema ou processo burocrático que trata todo mundo como número.", opts: [
        { txt: "Aprendo as regras não escritas do sistema para saber onde dá para sobreviver sem ser esmagado por ele.", w: { Mage: 3, Seer: 2 } },
        { txt: "Aceito o processo e sigo cada etapa, porque brigar com a máquina só aumenta o desgaste.", w: { Heir: 3, Maid: 1 } },
        { txt: "Pego uma brecha para passar meu caso antes, mesmo que isso deixe outra pessoa esperando mais.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "Ajudo quem está perdido a entender senhas, formulários e etapas para não perder a vez.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Tento mudar a ordem das etapas ou o jeito de apresentar o problema para não cair na trava mais cruel do sistema.", w: { Witch: 3, Mage: 1 } }
    ]},
    { t: "Alguém está sofrendo por uma perda inevitável e pede que você diga que tudo vai ficar bem.", opts: [
        { txt: "Não prometo cura mágica. Fico junto e ajudo a pessoa a atravessar o que não tem conserto.", w: { Heir: 3, Sylph: 2 } },
        { txt: "Tento dar uma forma prática ao sofrimento: comida, descanso, documentos, ligações e próximos passos.", w: { Maid: 3, Knight: 2 } },
        { txt: "Reconheço o tipo de dor e explico o que provavelmente vem depois, para a pessoa não se sentir louca quando piorar.", w: { Mage: 3, Seer: 2 } },
        { txt: "Tomo para mim as tarefas mais horríveis para que a pessoa possa sofrer sem lidar com toda a sujeira.", w: { Thief: 3, Rogue: 1 } },
        { txt: "Procuro outras pessoas para dividir esse cuidado, porque uma dor inevitável não precisa virar isolamento.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "Você percebe que uma pessoa próxima só se sente útil quando está sofrendo ou se sacrificando.", opts: [
        { txt: "Tento mostrar que limite também é uma forma de sobrevivência, não uma falha moral.", w: { Sylph: 3, Mage: 1 } },
        { txt: "Reconheço o padrão porque entendo como alguém aprende a transformar dor em função.", w: { Mage: 3, Heir: 1 } },
        { txt: "Redistribuo responsabilidades para que essa pessoa não continue carregando todo o peso sozinha.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Uso a própria regra de obrigação contra ela: se o objetivo é manter tudo funcionando, ela também precisa funcionar.", w: { Witch: 3, Knight: 2 } },
        { txt: "Fico irritado e corto a lógica do sacrifício. Sofrer mais não torna ninguém automaticamente mais necessário.", w: { Prince: 3, Sylph: 1 } }
    ]},
    { t: "Um plano só funciona se alguém assumir uma consequência ruim que o grupo inteiro está evitando nomear.", opts: [
        { txt: "Nomeio a consequência e coloco no centro da conversa antes que ela vire uma armadilha silenciosa.", w: { Seer: 3, Sylph: 2 } },
        { txt: "Assumo a consequência se isso impedir que o grupo todo seja punido depois.", w: { Thief: 3, Knight: 2 } },
        { txt: "Divido a consequência em partes menores para que ninguém precise ser o mártir do plano.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Aceito que alguém vai pagar o preço e tento escolher a opção que preserva melhor o sistema maior.", w: { Heir: 3, Mage: 1 } },
        { txt: "Procuro uma forma de mudar o plano para que a consequência caia em outro lugar ou perca força.", w: { Witch: 3, Prince: 1 } }
    ]},
    { t: "Você percebe que está preso em uma rotina ruim, mas previsível, e sair dela traria riscos maiores.", opts: [
        { txt: "Aceito a rotina por enquanto. Às vezes uma prisão conhecida é mais segura que uma liberdade que pode te matar.", w: { Heir: 3, Bard: 1 } },
        { txt: "Mapeio exatamente quais riscos surgiriam se eu saísse, para separar medo real de condenação imaginada.", w: { Mage: 3, Seer: 2 } },
        { txt: "Crio uma saída mínima, lenta e cheia de contenções para não trocar um problema por uma catástrofe.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Tomo para mim o risco da saída antes que alguém perceba o quanto isso pode dar errado.", w: { Thief: 3, Witch: 1 } },
        { txt: "Fico esperando alguém confirmar que sair não é irresponsável, porque eu não confio no meu julgamento de limite.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "Você recebe uma notícia ruim que confirma exatamente aquilo que você temia há tempos.", opts: [
        { txt: "Sinto o choque, mas uma parte de mim já estava preparada para esse desfecho.", w: { Heir: 3, Mage: 1 } },
        { txt: "Repasso todos os sinais anteriores para entender quando o fim já estava escrito e eu ainda não tinha aceitado.", w: { Mage: 3, Seer: 2 } },
        { txt: "Transformo a notícia em lista de próximos passos, porque sofrer sem estrutura só piora a queda.", w: { Maid: 3, Knight: 2 } },
        { txt: "Pego o peso prático da crise para mim, porque pelo menos assim a desgraça tem uma função.", w: { Thief: 3, Knight: 1 } },
        { txt: "Tento encontrar quem pode dividir a consequência comigo antes que eu vire o único ponto de contenção.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "Você percebe que um projeto pessoal que queria muito fazer simplesmente não cabe na sua rotina atual.", opts: [
        { txt: "Recuso a ideia de que isso é impossível e tento empurrar o projeto mesmo assim, nem que precise arrebentar minha agenda inteira.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "Aceito que alguma coisa precisa ser cortada e tento escolher a perda menos destrutiva antes que tudo comece a apodrecer junto.", w: { Seer: 3, Mage: 1, Bard: -2 } },
        { txt: "Vou deixando para depois sem admitir que talvez não dê. Enquanto eu não encarar isso como limite real, ainda parece possível.", w: { Bard: 3, Page: 2, Seer: -2 } },
        { txt: "Organizo as obrigações em ordem de importância, mas só me sinto confortável desistindo de algo se alguém confirmar que eu não estou falhando.", w: { Maid: 3, Rogue: 2 } },
        { txt: "Reduzo o projeto ao mínimo necessário para continuar avançando, mesmo que isso signifique sacrificar partes que eu queria manter.", w: { Knight: 3, Seer: 2 } }
    ]},
    { t: "Alguém joga uma responsabilidade chata no seu colo de última hora, dizendo que você parece ser a pessoa mais capaz de lidar com aquilo.", opts: [
        { txt: "Assumo porque provavelmente faço melhor mesmo. Se alguém vai carregar esse peso direito, prefiro que seja eu.", w: { Thief: 3, Knight: 2, Rogue: -2 } },
        { txt: "Tento passar a tarefa para alguém mais adequado. Não gosto de aceitar um peso que talvez eu não saiba cumprir.", w: { Rogue: 3, Page: 2, Thief: -2 } },
        { txt: "Aceito em silêncio se parecer realmente necessário. Não gosto da tarefa, mas obrigação é obrigação.", w: { Heir: 3, Maid: 2, Bard: -2 } },
        { txt: "Aceito rápido demais para provar que sou responsável, mesmo sem entender direito o tamanho do compromisso.", w: { Page: 3, Maid: 2 } },
        { txt: "Tento renegociar os termos da tarefa. Posso até ajudar, mas não do jeito exato que tentaram impor.", w: { Witch: 3, Prince: 2 } }
    ]},
    { t: "Um objeto importante começa a dar pequenos sinais de desgaste, mas ainda funciona se você fingir que nada está acontecendo.", opts: [
        { txt: "Reconheço o padrão de problema antes dele piorar. Já vi coisa pequena virar prejuízo grande por ser ignorada tempo demais.", w: { Mage: 3, Seer: 2 } },
        { txt: "Paro para investigar os sinais e descobrir o que provavelmente vai quebrar primeiro antes de decidir o que fazer.", w: { Seer: 3, Mage: 2 } },
        { txt: "Aviso as pessoas para pararem de usar aquilo sem cuidado. Se continuar assim, a quebra é só questão de tempo.", w: { Sylph: 3, Maid: 2, Bard: -2 } },
        { txt: "Continuo usando até realmente parar de funcionar. Não vejo por que tratar como desastre algo que ainda dá conta.", w: { Bard: 3, Page: 1, Sylph: -2 } },
        { txt: "Uso as limitações atuais a meu favor e adapto o jeito de lidar com o objeto até conseguir resolver o problema de verdade.", w: { Knight: 3, Mage: 2 } }
    ]},
    { t: "Você recebe um convite muito divertido, mas sabe que tem uma obrigação cedo no dia seguinte.", opts: [
        { txt: "Vou mesmo assim e deixo para lidar com as consequências depois. Uma noite boa não devia ser destruída por uma obrigação chata.", w: { Bard: 3, Prince: 2, Sylph: -2 } },
        { txt: "Recuso o convite se a obrigação for séria. Não gosto, mas tem coisa que simplesmente precisa vir primeiro.", w: { Heir: 3, Maid: 2, Bard: -2 } },
        { txt: "Vou só se conseguir impor limites claros: hora de chegar, hora de sair e o mínimo de dano possível no dia seguinte.", w: { Knight: 3, Seer: 2 } },
        { txt: "Tento quebrar a limitação pela força de vontade, como se dormir pouco ou acordar destruído fosse só um detalhe superável.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "Faço um plano certinho para cumprir a obrigação e ainda aproveitar um pouco, mas dependo de alguém me puxar de volta se eu passar do limite.", w: { Maid: 3, Page: 2, Rogue: 1 } }
    ]},
    { t: "Você precisa dizer não a um pedido de ajuda porque sabe que já está no seu limite.", opts: [
        { txt: "Tento organizar uma forma de ajudar sem me destruir, mas ainda sinto que preciso de permissão para não carregar tudo.", w: { Maid: 3, Rogue: 2, Sylph: 1 } },
        { txt: "Digo que a pessoa precisa procurar outra solução antes que os dois afundem. Ajudar não pode significar ignorar todos os limites.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Procuro outra pessoa para assumir ou dividir o peso, porque não confio que eu consiga lidar com isso sozinho agora.", w: { Rogue: 3, Heir: 1 } },
        { txt: "Recuso carregar a parte que não é minha. Se alguém tentou jogar esse peso em mim, eu devolvo antes que vire obrigação.", w: { Thief: 3, Prince: 2, Maid: -1 } },
        { txt: "Tento mudar as condições do pedido: ajudo de outro jeito, em outro prazo ou com outro limite, mas não aceito o pacote fechado.", w: { Witch: 3, Mage: 2 } }
    ]},
    { t: "Uma solução rápida resolveria seu problema agora, mas envolve ignorar uma regra de segurança que existe por um bom motivo.", opts: [
        { txt: "Penso nas vezes em que esse tipo de atalho deu errado antes. Se a regra existe, provavelmente alguém já se ferrou para ela existir.", w: { Mage: 3, Seer: 2 } },
        { txt: "Analiso o que pode acontecer se a regra for ignorada. Talvez dê certo agora, mas o risco não some só porque é inconveniente.", w: { Seer: 3, Sylph: 2 } },
        { txt: "Ignoro a regra se ela estiver me impedindo de resolver algo urgente. Limite nenhum devia ser absoluto quando atrapalha demais.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "Tento fazer mesmo assim achando que entendi o risco, até perceber no meio do caminho que subestimei as consequências.", w: { Page: 3, Bard: 2 } },
        { txt: "Sigo a regra, mesmo frustrado. Se não é absolutamente necessário quebrar esse limite, prefiro não mexer nele.", w: { Heir: 3, Maid: 2, Prince: -1 } }
    ]},
    { t: "Você percebe que está insistindo em algo que já não funciona há muito tempo.", opts: [
        { txt: "Tento aceitar que continuar gastando energia nisso só vai aumentar a perda. Às vezes parar é a única decisão útil.", w: { Seer: 3, Mage: 2 } },
        { txt: "Crio um limite final: mais uma tentativa, mais um prazo, mais uma condição. Depois disso, acabou.", w: { Sylph: 3, Knight: 2 } },
        { txt: "Continuo empurrando porque desistir parece pior do que admitir que aquilo já morreu faz tempo.", w: { Bard: 3, Prince: 2, Seer: -2 } },
        { txt: "Forço a situação até ela ceder ou quebrar de vez. Se existe uma parede no caminho, eu prefiro derrubar.", w: { Prince: 3, Witch: 2 } },
        { txt: "Tento fazer outra pessoa decidir se ainda vale insistir. Não quero ser quem declara o fim de algo importante.", w: { Rogue: 3, Page: 2 } }
    ]},
    { t: "Você precisa lidar com uma situação desgastante por mais tempo do que gostaria, sem garantia de recompensa clara no final.", opts: [
        { txt: "Transformo a situação em uma série de regras e metas pequenas. Se eu seguir o necessário, consigo atravessar isso sem desmoronar.", w: { Knight: 3, Maid: 2, Bard: -2 } },
        { txt: "Pego para mim as partes mais duras porque prefiro controlar o peso do que depender da resistência dos outros.", w: { Thief: 3, Knight: 2 } },
        { txt: "Aceito limites impostos de fora para provar que dou conta, mesmo reclamando do quanto isso está sendo pesado.", w: { Page: 3, Maid: 2 } },
        { txt: "Procuro uma forma de alterar as condições da situação para que o desgaste não precise seguir exatamente as regras dadas.", w: { Witch: 3, Mage: 2 } },
        { txt: "Tento manter tudo funcionando para os outros, mas tenho dificuldade em reconhecer quando eu mesmo preciso parar.", w: { Maid: 3, Sylph: 2 } }
    ]}    
	],
    "Life": [
    { t: "Você descobriu que só conseguiu seu emprego atual porque seu pai conhecia o chefe (nepotismo), e não por mérito próprio. Como isso faz você se sentir?", opts: [
        { txt: "Não sinto vergonha alguma. Se o mundo me ofereceu um atalho, eu pego. Prefiro estar empregado com vantagem do que ser um mártir.", w: { Thief: 3, Witch: 2 } },
        { txt: "Sinto-me uma fraude completa. Trabalho o triplo do que meus colegas para provar (para eles e para mim) que eu mereço ocupar este espaço.", w: { Page: 3, Knight: 2, Maid: 1 } },
        { txt: "Rejeito a vantagem. Peço demissão ou busco outro lugar onde eu possa começar do zero, destruindo esse privilégio que mancha minha autonomia.", w: { Prince: 3, Knight: 2, Thief: -3 } },
        { txt: "Eu nem penso nisso. Continuo no emprego, fazendo o mínimo necessário. Se me deram a vaga, o problema é deles, não meu.", w: { Bard: 3, Heir: 2, Rogue: 1 } },
        { txt: "Uso minha posição privilegiada para facilitar a vida dos meus colegas, advogando por aumentos ou melhorias, redistribuindo minha sorte.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "Em um projeto de grupo, um membro é claramente incompetente e está arrastando todos para o fracasso. O prazo acaba amanhã.", opts: [
        { txt: "Eu corto a parte dele e faço tudo sozinho. Não vou deixar minha nota afundar por causa de um peso morto.", w: { Prince: 3, Thief: 2, Sylph: -3 } },
        { txt: "Sento com ele e faço a parte dele junto, guiando sua mão se for preciso. Não posso deixar ninguém para trás.", w: { Sylph: 3, Maid: 2, Bard: -2 } },
        { txt: "Eu deixo ele afundar. Se ele não fez a parte dele, que arque com as consequências. Não vou me matar para salvar quem não se ajuda.", w: { Bard: 3, Prince: 1, Sylph: -3 } },
        { txt: "Assumo a liderança agressivamente, ditando exatamente o que cada um fará nas horas finais para garantir que o resultado seja vital.", w: { Witch: 3, Maid: 2 } },
        { txt: "Observo o desastre iminente. Entendo que o fracasso é parte do ciclo de aprendizado e, às vezes, a dor é a única lição que funciona.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "Em um grupo de amigos, você é geralmente aquele que:", opts: [
        { txt: "Organiza as atividades, traz os lanches, cuida de quem bebeu demais e garante que todos estejam bem, muitas vezes esquecendo de si mesmo.", w: { Maid: 3, Sylph: 2, Prince: -2 } },
        { txt: "É o conselheiro realista que diz as verdades chatas que ninguém quer ouvir, impedindo que os outros tomem decisões impulsivas.", w: { Prince: 3, Mage: 2 } },
        { txt: "É o centro das atenções natural. Você define o ritmo do rolê e faz com que os planos girem em torno do que você quer fazer.", w: { Witch: 3, Thief: 2 } },
        { txt: "Eu sou o que vai na onda. Como o que tiver, bebo o que derem e vou onde levarem. Sou uma presença confortável que não exige muito.", w: { Bard: 3, Heir: 2 } },
        { txt: "Aquele que parece atrair a sorte ou as oportunidades, sempre terminando em situações vantajosas sem parecer que fez muito esforço.", w: { Heir: 3, Page: 2 } }
    ]},
    { t: "Uma tradição familiar antiga dita que você deve seguir uma carreira que você odeia. Romper com ela significa ser deserdado.", opts: [
        { txt: "Rompo com a tradição. Tenho uma vida só e não vou gastá-la seguindo regras de gente morta. Minha felicidade pessoal vale mais.", w: { Witch: 3, Prince: 2, Heir: -2 } },
        { txt: "Aceito o fardo e sigo a carreira, encontrando maneiras de servir minha família e manter o legado vivo, mesmo infeliz.", w: { Maid: 3, Knight: 2, Bard: -2 } },
        { txt: "Fujo silenciosamente. Deixo o espaço vago para que outro parente assuma, redistribuindo essa responsabilidade.", w: { Rogue: 3, Bard: 1 } },
        { txt: "Eu enrolo a faculdade por anos, reprovo de propósito ou sou expulso. Deixo que o fracasso me tire dessa obrigação sem eu ter que dizer não.", w: { Bard: 3, Page: 2 } },
        { txt: "Tento reformar a tradição por dentro, conversando e mostrando que a mudança é necessária para a sobrevivência da família.", w: { Sylph: 3, Seer: 2 } }
    ]},
    { t: "Você vê uma criança fazendo birra em um supermercado porque quer um doce, gritando e se jogando no chão.", opts: [
        { txt: "Sinto uma irritação profunda. Essa exibição de desejo descontrolado e falta de disciplina precisa ser contida imediatamente.", w: { Prince: 3, Knight: 2 } },
        { txt: "Acho graça ou ignoro. É a expressão pura de um desejo vital; crianças são assim, caóticas e cheias de querer.", w: { Heir: 3, Bard: 2, Prince: -3 } },
        { txt: "Se fosse meu filho, eu compraria o doce só para ele calar a boca e eu poder continuar minha vida em paz. Resolvo cedendo.", w: { Witch: 3, Rogue: 2, Knight: -2 } },
        { txt: "Eu nem olho. Crianças gritam, a vida é barulhenta. Sigo minhas compras alheio ao caos alheio.", w: { Bard: 3, Heir: 1 } },
        { txt: "Analiso os pais. Julgo a falta de autoridade deles e entendo exatamente onde a criação falhou.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "Um amigo rico oferece pagar uma viagem de luxo para você, mas você sabe que ele vai jogar isso na sua cara depois.", opts: [
        { txt: "Aceito. Se ele quer pagar de superior, problema dele. Vou aproveitar o luxo e curtir a viagem sem gastar um centavo.", w: { Thief: 3, Witch: 2 } },
        { txt: "Recuso. Prefiro pagar minha própria viagem barata do que ficar em dívida ou sob o domínio financeiro de alguém.", w: { Knight: 3, Prince: 2, Thief: -3 } },
        { txt: "Convenço-o a convidar mais pessoas, diluindo a atenção dele e transformando a viagem em um evento de grupo.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Aceito, mas faço questão de 'pagar' de volta com favores e organização, servindo para equilibrar a balança.", w: { Maid: 3, Page: 2, Thief: -2 } },
        { txt: "Aceito e nem ligo quando ele jogar na cara. Ele pagou porque quis, eu fui porque me chamaram. Não devo nada emocionalmente.", w: { Bard: 3, Heir: 2, Knight: -2 } }
    ]},
    { t: "Você está jogando um jogo competitivo e percebe que seu oponente é muito mais fraco e novato que você.", opts: [
        { txt: "Ganho rápido e sem enrolação. Não vejo graça em fingir que sou ruim. O jogo é para ganhar, e eu vou ganhar.", w: { Prince: 3, Thief: 2, Sylph: -3 } },
        { txt: "Pego leve, permitindo que ele jogue e se divirta, talvez até deixo ele ganhar uma rodada para encorajar.", w: { Sylph: 3, Rogue: 2, Prince: -3 } },
        { txt: "Ensino as mecânicas enquanto jogamos, parando a partida para explicar o que ele fez de errado. Torno-me um tutor.", w: { Seer: 3, Mage: 2 } },
        { txt: "Começo a jogar de qualquer jeito, testando coisas aleatórias. Se eu perder por brincadeira, não importa, o jogo já estava chato mesmo.", w: { Bard: 3, Heir: 1 } },
        { txt: "Brinco com ele, criando situações absurdas no jogo apenas para ver como ele reage, testando os limites do sistema.", w: { Witch: 3, Bard: 2, Knight: -2 } }
    ]},
    { t: "Você começa uma rotina nova de autocuidado, mas percebe que não sabe direito o que seu corpo realmente precisa.", opts: [
        { txt: "Vou testando aos poucos: sono, comida, exercício, descanso. Ainda erro muito, mas começo a aprender pelo corpo.", w: { Page: 3, Mage: 1 } },
        { txt: "Pesquiso sinais, padrões e reações para entender o que realmente melhora minha energia em vez de seguir conselho genérico.", w: { Mage: 3, Seer: 2 } },
        { txt: "Monto uma rotina sustentável, com horários, limites e pequenas ações que eu consiga manter sem me destruir.", w: { Maid: 3, Knight: 2 } },
        { txt: "Peço ajuda a alguém mais experiente, porque tentar crescer sozinho sem referência parece receita para fracassar.", w: { Page: 3, Rogue: 1 } },
        { txt: "Ajusto a rotina conforme meu corpo responde, mudando o método sem abandonar a intenção de melhorar.", w: { Witch: 3, Sylph: 1 } }
    ]},
    { t: "Você percebe que uma pessoa próxima está se esgotando porque cuida de todo mundo menos de si mesma.", opts: [
        { txt: "Tento mostrar que ela também é um ser vivo com necessidades, não só uma fonte infinita de cuidado.", w: { Sylph: 3, Mage: 1 } },
        { txt: "Redistribuo tarefas e cuidados para que a sobrevivência do grupo não dependa sempre da mesma pessoa.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Organizo um jeito prático de aliviar a carga dela: comida, descanso, agenda, companhia e limites.", w: { Maid: 3, Knight: 2 } },
        { txt: "Entendo o padrão, porque dá para ver como ela aprendeu a medir valor pelo quanto consegue oferecer.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico inseguro sobre interferir, porque talvez ela ache que estou chamando sua forma de amar de errada.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Uma planta, animal ou pessoa sob seus cuidados começa a crescer de um jeito diferente do esperado.", opts: [
        { txt: "Observo o padrão de crescimento antes de decidir se aquilo é problema, adaptação ou simplesmente outra forma de vida.", w: { Seer: 3, Mage: 2 } },
        { txt: "Mudo o ambiente para favorecer esse crescimento sem tentar forçar tudo de volta ao plano original.", w: { Sylph: 3, Witch: 2 } },
        { txt: "Crio uma estrutura de apoio para que esse crescimento continue sem machucar o que está ao redor.", w: { Maid: 3, Knight: 2 } },
        { txt: "Tenho dificuldade de saber se estou cuidando direito e começo a depender de sinais externos para confiar no processo.", w: { Page: 3, Rogue: 1 } },
        { txt: "Aceito que crescimento vivo raramente obedece ao desenho inicial. A coisa encontra sua própria forma.", w: { Heir: 3, Seer: 1 } }
    ]},
    { t: "Você percebe que algo que começou saudável está crescendo demais e sufocando todo o resto.", opts: [
        { txt: "Podo o excesso antes que ele mate o ambiente inteiro. Crescimento sem limite também vira destruição.", w: { Knight: 3, Seer: 2, Bard: -1 } },
        { txt: "Tento entender quando a expansão deixou de ser vitalidade e virou invasão.", w: { Mage: 3, Seer: 2 } },
        { txt: "Redistribuo espaço, recurso e atenção para que outras partes também possam florescer.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Mudo as condições do ambiente para que o crescimento se redirecione sem precisar destruir tudo.", w: { Witch: 3, Maid: 1 } },
        { txt: "Fico com pena de cortar algo que está tão vivo, mesmo sabendo que ele está passando do limite.", w: { Page: 3, Sylph: 1 } }
    ]},
    { t: "Você recebe comida, dinheiro ou energia extra em um momento em que outras pessoas ao redor estão com menos.", opts: [
        { txt: "Divido de um jeito que ajude quem mais precisa sem transformar a partilha em espetáculo de bondade.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "Uso o excedente para criar uma base mais estável: guardar, cozinhar, preparar, plantar ou investir no que continua rendendo.", w: { Maid: 3, Knight: 2 } },
        { txt: "Pego para mim primeiro o que garante minha segurança. Só consigo ajudar se eu não estiver faltando.", w: { Thief: 3, Mage: 1, Rogue: -1 } },
        { txt: "Tento calcular a distribuição mais justa, pensando em necessidade real e não só em quem pediu primeiro.", w: { Seer: 3, Mage: 2 } },
        { txt: "Fico desconfortável em receber mais do que os outros e acabo oferecendo demais para provar que não sou egoísta.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "Você percebe que está prosperando enquanto alguém próximo continua preso em uma situação difícil.", opts: [
        { txt: "Tento abrir caminho para a pessoa também, usando minha melhora como ponte e não como distância.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Sinto culpa por crescer sozinho e quase saboto minha própria melhora para não parecer que abandonei ninguém.", w: { Page: 3, Maid: 1 } },
        { txt: "Analiso quais condições permitiram minha melhora e quais ainda faltam para a outra pessoa.", w: { Mage: 3, Seer: 2 } },
        { txt: "Uso minha posição melhor para garantir recursos concretos, contatos ou oportunidades que antes eu não teria como oferecer.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Aceito que crescer não é traição. Minha vida não precisa parar para provar lealdade ao sofrimento de alguém.", w: { Heir: 3, Knight: 1 } }
    ]},
    { t: "Alguém te oferece um conselho de vida muito rígido sobre como você deveria se desenvolver.", opts: [
        { txt: "Tento entender se o conselho respeita minha natureza ou se só tenta me podar para caber na forma de outra pessoa.", w: { Mage: 3, Seer: 2 } },
        { txt: "Adapto o conselho ao meu próprio ritmo, pegando o que nutre e descartando o que me sufoca.", w: { Witch: 3, Sylph: 1 } },
        { txt: "Sigo com cuidado no começo, porque ainda não confio totalmente na minha capacidade de crescer sem orientação.", w: { Page: 3, Maid: 1 } },
        { txt: "Crio uma versão prática do conselho, transformando uma ideia vaga em hábitos que eu consiga manter.", w: { Maid: 3, Knight: 2 } },
        { txt: "Rejeito a tentativa de me moldar. Nem todo crescimento precisa ser domesticado para ser válido.", w: { Prince: 3, Thief: 1, Sylph: -1 } }
    ]},
    { t: "Você está aprendendo uma habilidade ligada ao corpo, como cozinhar, dançar, cuidar de plantas, costurar ou treinar.", opts: [
        { txt: "Repito o movimento até sentir no corpo onde está o erro, mesmo que eu ainda não saiba explicar tecnicamente.", w: { Page: 3, Knight: 2 } },
        { txt: "Estudo textura, ritmo, reação, temperatura, força e outros sinais concretos até entender a lógica viva da prática.", w: { Mage: 3, Seer: 2 } },
        { txt: "Transformo o aprendizado em cuidado para outras pessoas: comida melhor, ambiente melhor, corpo mais seguro.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Uso a habilidade para ganhar autonomia; quanto mais eu sei fazer, menos dependo de alguém para me sustentar.", w: { Knight: 3, Thief: 2 } },
        { txt: "Vou fazendo do meu jeito até o método parecer vivo, mesmo que não siga exatamente a técnica ensinada.", w: { Witch: 3, Heir: 1 } }
    ]},
    { t: "Você percebe que alguém está confundindo cuidado com controle, decidindo tudo 'para o seu bem'.", opts: [
        { txt: "Aponto que proteger alguém não deveria significar tirar sua capacidade de crescer por conta própria.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Tento recuperar minha autonomia aos poucos, provando que consigo cuidar de mim sem romper tudo de uma vez.", w: { Page: 3, Knight: 2 } },
        { txt: "Corto a interferência na raiz. Se a pessoa chama controle de cuidado, eu não aceito esse cuidado.", w: { Prince: 3, Knight: 1, Sylph: -1 } },
        { txt: "Entendo quais medos alimentam esse controle e tento separar intenção de consequência.", w: { Mage: 3, Seer: 2 } },
        { txt: "Mudo a dinâmica para que a pessoa ainda possa ajudar, mas sem decidir o formato inteiro da minha vida.", w: { Witch: 3, Rogue: 2 } }
    ]},
    { t: "Você tem a chance de começar uma fase mais confortável, com mais recursos, prazer e estabilidade do que está acostumado.", opts: [
        { txt: "Aproveito sem pedir desculpa. Se a vida finalmente abriu uma porta fértil, eu vou colher o máximo possível.", w: { Thief: 3, Heir: 2 } },
        { txt: "Fico desconfiado da facilidade e tento entender se essa abundância tem custo escondido.", w: { Mage: 3, Seer: 2 } },
        { txt: "Organizo essa estabilidade para que ela dure, em vez de gastar tudo só porque finalmente posso respirar.", w: { Maid: 3, Knight: 2 } },
        { txt: "Penso em como transformar minha melhora em suporte para outras pessoas também prosperarem.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Tenho dificuldade de relaxar na abundância, como se eu precisasse merecer cada pedaço antes de aceitar.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "Você e seus amigos vão dividir uma pizza. Chega o último pedaço, o mais recheado. Todos estão olhando, ninguém pega.", opts: [
        { txt: "Eu pego e como. Se ninguém pegou até agora, é porque não queriam tanto assim. Não vou passar vontade.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "Ofereço o pedaço para o amigo que comeu menos ou que parece mais faminto. Sinto prazer em ver o outro satisfeito.", w: { Rogue: 3, Sylph: 2, Thief: -3 } },
        { txt: "Divido o pedaço milimetricamente em partes iguais para todos. A distribuição justa é a única forma de evitar conflito.", w: { Seer: 3, Mage: 2, Bard: -2 } },
        { txt: "Deixo o pedaço esfriar e sobrar. Prefiro o desperdício a ter que lidar com a disputa social por comida.", w: { Prince: 3, Bard: 1 } },
        { txt: "Eu espero alguém pegar. Se o pedaço apodrecer lá, apodreceu. Não vou ser o primeiro nem o último a tocar.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "Você está com uma dor de cabeça chata, mas não insuportável. Como lida com a medicação?", opts: [
        { txt: "Tomo o remédio na hora. Não tenho paciência para sentir dor se existe uma solução fácil. Quero estar 100% de novo.", w: { Witch: 3, Thief: 2 } },
        { txt: "Evito tomar. Acredito que o corpo deve se curar sozinho ou que o remédio é uma muleta desnecessária.", w: { Prince: 3, Seer: 2, Sylph: -2 } },
        { txt: "Reclamo da dor para alguém, esperando que a pessoa cuide de mim ou me traga um copo d'água e o remédio.", w: { Page: 3, Rogue: 1, Maid: -3 } },
        { txt: "Tomo qualquer coisa que tiver na gaveta sem nem ler o rótulo direito. Se passar, passou; se não, paciência.", w: { Bard: 3, Heir: 2, Seer: -3 } },
        { txt: "Ignoro a dor e continuo fazendo minhas tarefas. Uso a dor como um lembrete de que estou vivo e ocupado.", w: { Knight: 3, Maid: 2, Bard: -2 } }
    ]},
    { t: "Você acorda com uma energia e disposição incomuns, sentindo-se invencível. O que faz com esse dia?", opts: [
        { txt: "Inicio três projetos novos, limpo a casa e corro uma maratona. Gasto essa energia criando, pois desperdício é pecado.", w: { Maid: 3, Knight: 2, Bard: -2 } },
        { txt: "Foco em mim. Uso essa energia para resolver meus problemas pendentes e conseguir o que eu quero das pessoas.", w: { Thief: 3, Witch: 2 } },
        { txt: "Apenas 'sou'. Deixo o dia me levar, flutuando através dos eventos com a certeza absoluta de que nada pode me atingir.", w: { Heir: 3, Bard: 1, Knight: -2 } },
        { txt: "Fico desconfiado. Esse excesso de energia não é normal; tento entender o que causou isso antes de agir impulsivamente.", w: { Mage: 3, Seer: 2, Heir: -2 } },
        { txt: "Eu gasto tudo em diversão inútil. Saio, bebo, gasto dinheiro. Se a vida me deu energia extra, é para eu queimar como quiser.", w: { Bard: 3, Page: 2, Maid: -2 } }
    ]}
	],
   "Blood": [
    { t: "Um grupo social ou comunidade que você adora está morrendo lentamente. O silêncio é constrangedor. O que você faz?", opts: [
        { txt: "Tento reviver o clima incansavelmente. Mando mensagens, puxo assuntos e marco eventos, recusando-me a deixar o vínculo morrer por inanição.", w: { Sylph: 3, Maid: 2, Prince: -2 } },
        { txt: "Identifico quem ainda vale a pena e crio um grupo paralelo só com os meus favoritos. O barco está afundando, mas eu salvo a tripulação que importa.", w: { Thief: 3, Witch: 2, Sylph: -2 } },
        { txt: "Chamo a responsabilidade e confronto o pessoal. Ou a gente se compromete a manter isso vivo, ou admite que acabou de uma vez.", w: { Knight: 3, Page: 2, Bard: -2 } },
        { txt: "Oficializo o fim. Saio do grupo avisando o motivo ou excluo o servidor. Prefiro dar um tiro de misericórdia e acabar com a agonia do que ver a decadência.", w: { Prince: 3, Maid: -2, Sylph: -2 } },
        { txt: "Simplesmente paro de responder. Deixo o grupo descer no meu histórico e cair no esquecimento. Se ninguém mais fala, não serei eu a impedir o silêncio.", w: { Bard: 3, Rogue: 2, Knight: -2 } }
    ]},
    { t: "Você é convidado para um evento de família importante, mas está exausto e odeia o ambiente. Qual sua escolha?", opts: [
        { txt: "Vou e coloco o meu melhor sorriso. Minha presença é um dever cívico para manter a harmonia da estrutura familiar.", w: { Maid: 3, Heir: 2, Prince: -2 } },
        { txt: "Recuso o convite categoricamente. Se eu não for relevante lá ou se o ambiente me faz mal, não há motivo para me desgastar.", w: { Prince: 3, Thief: 2 } },
        { txt: "Digo que vou, mas 'esqueço' ou durmo na hora. Deixo a expectativa morrer sozinha sem eu ter que lidar com o confronto.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "Vou, mas passo o tempo todo observando as tensões entre os parentes, extraindo informações úteis.", w: { Seer: 3, Mage: 2 } },
        { txt: "Vou apenas para prestar apoio a alguém específico, agindo como um amortecedor emocional para essa pessoa.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "Você entra em um grupo novo e percebe que ninguém explicou as regras sociais, mas todo mundo age como se elas fossem óbvias.", opts: [
        { txt: "Observo quem tem autoridade real, quem só parece importante e quais alianças sustentam o clima do grupo.", w: { Seer: 3, Mage: 2 } },
        { txt: "Me adapto naturalmente ao papel que parece estar faltando, como se o grupo já tivesse um espaço reservado para mim.", w: { Heir: 3, Maid: 1 } },
        { txt: "Mudo minha abordagem com cada pessoa até descobrir quais vínculos posso fortalecer ou redirecionar.", w: { Witch: 3, Sylph: 1 } },
        { txt: "Tento criar uma base de convivência para que ninguém precise adivinhar sozinho como pertencer ali.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Fico inseguro e começo a copiar o comportamento dos outros para não parecer deslocado.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "Uma pessoa do grupo sempre vira piada, alvo ou bode expiatório quando algo dá errado.", opts: [
        { txt: "Percebo o padrão e aponto como o grupo usa essa pessoa para descarregar tensões sem resolver o problema real.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tento mudar a dinâmica aos poucos, criando outras formas de aliviar conflito sem sacrificar sempre a mesma pessoa.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Defendo a pessoa e tento restaurar o lugar dela no grupo antes que ela seja empurrada para fora.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito que todo grupo cria seus papéis, mesmo os injustos; não é simples arrancar uma função que mantém a estrutura de pé.", w: { Heir: 3, Mage: 1 } },
        { txt: "Fico com medo de defender demais e acabar ocupando o lugar dela como novo alvo.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Um grupo que você ama começa a criar uma hierarquia informal, com algumas pessoas decidindo tudo sem admitir que mandam.", opts: [
        { txt: "Mapeio quem influencia quem, quais decisões já chegam prontas e onde a falsa igualdade começa a falhar.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tento alterar a circulação de poder, aproximando pessoas que foram deixadas de fora das decisões.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Crio um jeito mais claro de dividir responsabilidades, para o grupo não depender de autoridade escondida.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Aceito a hierarquia se ela mantém o grupo funcionando, mas fico atento ao momento em que ela começa a sufocar.", w: { Heir: 3, Seer: 1 } },
        { txt: "Uso a estrutura informal para me aproximar de quem realmente decide as coisas.", w: { Thief: 3, Witch: 1, Rogue: -2 } }
    ]},
    { t: "Um ritual coletivo simples (jantar semanal, chamada em grupo, evento anual) começa a perder força.", opts: [
        { txt: "Tento entender o que esse ritual ainda significava para cada pessoa e por que deixou de sustentar o vínculo.", w: { Mage: 3, Seer: 2 } },
        { txt: "Mudo o formato do ritual para que ele volte a caber na vida atual do grupo, em vez de virar obrigação vazia.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Cuido para que a tradição continue de um jeito mais leve, sem exigir que todo mundo performe a mesma intimidade de antes.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Continuo indo porque aquele costume ainda me parece parte natural do vínculo, mesmo que esteja menor.", w: { Heir: 3, Maid: 1 } },
        { txt: "Fico ansioso para comparecer e provar que ainda pertenço, mesmo quando já não sei se quero estar ali.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que uma amizade só continua porque todo mundo evita falar de um ressentimento antigo.", opts: [
        { txt: "Observo como esse ressentimento molda cada conversa, cada piada e cada silêncio entre as pessoas.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tento criar uma situação em que o assunto possa aparecer sem virar julgamento imediato.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Ajudo a remendar o vínculo, mas sem fingir que a ferida nunca existiu.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito que alguns vínculos sobrevivem com cicatrizes. Nem tudo precisa voltar ao estado original para continuar sendo real.", w: { Heir: 3, Mage: 1 } },
        { txt: "Fico inseguro de tocar no assunto e acabar sendo culpado por destruir o que ainda restava.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Uma pessoa muito carismática começa a aproximar várias pessoas que antes não conviviam.", opts: [
        { txt: "Analiso que tipo de vínculo ela está criando: amizade real, dependência, admiração ou só atração pela presença dela.", w: { Seer: 3, Mage: 2 } },
        { txt: "Uso essa energia social para reorganizar o grupo em novas combinações, aproximando quem poderia funcionar melhor junto.", w: { Witch: 3, Maid: 1 } },
        { txt: "Tento garantir que ninguém seja engolido pela órbita dessa pessoa a ponto de perder a própria voz.", w: { Sylph: 3, Seer: 1 } },
        { txt: "Entro no fluxo naturalmente. Se alguém consegue unir gente tão diferente, talvez o grupo só precisasse desse centro.", w: { Heir: 3, Page: 1 } },
        { txt: "Tento me aproximar da pessoa para participar da rede que ela está criando antes que meu lugar fique pequeno demais.", w: { Thief: 3, Page: 1 } }
    ]},
    { t: "Você descobre que alguém do grupo está mantendo contato com uma pessoa que todos tinham decidido afastar.", opts: [
        { txt: "Tento entender qual necessidade esse contato ainda cumpre e o que a decisão coletiva não resolveu.", w: { Mage: 3, Seer: 2 } },
        { txt: "Mudo a forma como o grupo lida com o afastamento, porque uma regra de exclusão que ninguém consegue sustentar direito precisa ser revista.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Tento proteger o grupo sem transformar a pessoa que manteve contato em traidora automática.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito que vínculos não somem só porque o grupo decretou. Às vezes o laço continua existindo embaixo da regra.", w: { Heir: 3, Mage: 1 } },
        { txt: "Fico perdido entre lealdade ao grupo e compreensão pela pessoa que não conseguiu cortar contato.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que virou a pessoa que todo mundo procura para saber 'o que está acontecendo' entre os outros.", opts: [
        { txt: "Uso essa posição para entender o mapa real do grupo: alianças, tensões, favores, mágoas e dependências.", w: { Seer: 3, Mage: 2 } },
        { txt: "Redireciono informações com cuidado, aproximando pessoas que precisam conversar e afastando conflitos inúteis.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Tento transformar fofoca em comunicação útil, sem alimentar paranoia nem exposição desnecessária.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito esse papel como algo natural. Alguns vínculos passam por mim antes de encontrarem o caminho certo.", w: { Heir: 3, Rogue: 1 } },
        { txt: "Fico com medo de usar mal o que sei e acabar manipulando relações que só queriam minha ajuda.", w: { Page: 3, Mage: 1 } }
    ]},
    { t: "Uma comunidade decide criar regras novas para evitar conflitos, mas algumas pessoas acham que isso vai matar a espontaneidade do grupo.", opts: [
        { txt: "Observo quais conflitos reais motivaram as regras e quais medos estão sendo projetados nelas.", w: { Seer: 3, Mage: 2 } },
        { txt: "Tento ajustar as regras para que protejam o grupo sem transformar todo vínculo em protocolo.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Ajudo a explicar as regras como cuidado mútuo, não como punição ou controle frio.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito regras se elas mantêm o grupo vivo. Liberdade social sem estrutura também pode virar abandono.", w: { Heir: 3, Knight: 1 } },
        { txt: "Fico inseguro porque não sei se vou conseguir pertencer quando até a espontaneidade tiver instruções.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "Você percebe que duas pessoas do grupo só conseguem se conectar através de você.", opts: [
        { txt: "Analiso por que o vínculo delas precisa passar por uma ponte e o que falta para ele existir sozinho.", w: { Seer: 3, Mage: 2 } },
        { txt: "Mudo pequenas dinâmicas para que elas criem uma relação direta, sem depender sempre da minha presença.", w: { Witch: 3, Sylph: 2 } },
        { txt: "Cuido da ponte enquanto ela for necessária, mas tento evitar que isso vire uma prisão para mim.", w: { Sylph: 3, Maid: 2 } },
        { txt: "Aceito ser esse ponto de passagem. Às vezes um grupo se organiza naturalmente ao redor de certas conexões.", w: { Heir: 3, Rogue: 1 } },
        { txt: "Fico ansioso porque, se eu sair do meio, talvez o vínculo delas morra e a culpa pareça minha.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "Um amigo insubstituível faleceu. O funeral passou e agora resta apenas o silêncio. Como você lida com o buraco na sua estrutura?", opts: [
        { txt: "Me torno o 'guardião oficial' da memória dele. Corrijo quem fala errado e guardo seus pertences como sagrados.", w: { Knight: 3, Maid: 2, Thief: 1, Bard: -2 } },
        { txt: "Pego-me usando as gírias e hábitos dele. É como se eu permitisse que ele continuasse vivendo através das minhas ações.", w: { Heir: 3, Rogue: 2, Witch: 1 } },
        { txt: "Preciso bloquear as memórias e evitar lugares que me lembrem dele. O vínculo dói demais, então eu o corto.", w: { Prince: 3, Mage: 2, Sylph: -1 } },
        { txt: "Deixo a memória desbotar. Não luto para lembrar nem para esquecer. Se o vínculo se desfizer com o tempo, é natural.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Tento preencher o vazio dedicando-me a terminar o que ele começou, honrando o legado dele pelo esforço.", w: { Page: 3, Maid: 2, Seer: 1 } }
    ]},
    { t: "Você sente uma desconexão física e emocional com as pessoas. Parece que todos têm um 'manual de instruções' que você nunca recebeu.", opts: [
        { txt: "Eu estudo as interações obsessivamente. Analiso padrões sociais para entender a mecânica que parece natural para os outros.", w: { Mage: 3, Seer: 2, Page: 1 } },
        { txt: "Eu crio uma 'persona' social para lidar com os outros. Atuo conforme parece correto para que não notem que não sei como agir.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "Eu paro de tentar. Se não me conecto, fico na minha. Deixo as relações acontecerem ou morrerem sem interferir.", w: { Bard: 3, Rogue: 2, Maid: -2 } },
        { txt: "Eu aceito minha posição de 'outsider' e deixo que as pessoas venham até mim nos meus termos.", w: { Heir: 3, Rogue: 2, Mage: 1 } },
        { txt: "Eu tento me tornar indispensável através de favores práticos. Se não conecto emocionalmente, conecto pela utilidade.", w: { Maid: 3, Knight: 2, Sylph: 1 } }
    ]},
    { t: "Sua amizade mais antiga e profunda está acabando. Houve uma briga feia e o silêncio agora é ensurdecedor. Como você reage a esse rompimento?", opts: [
        { txt: "Não aceito o fim. Sinto uma mistura de fúria e pânico; essa pessoa é 'minha' e eu vou fazer o impossível para trazê-la de volta, nem que seja na marra.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "Queimo a ponte. Se acabou, que acabe de vez. Deleto tudo que diz respeito a ela e bloqueio o contato para seguir em frente.", w: { Prince: 3, Sylph: -3 } },
        { txt: "Entro em desespero para consertar. Peço desculpas, prometo mudar e tento 'curar' a ferida a qualquer custo. Não sei quem sou sem essa pessoa.", w: { Sylph: 3, Maid: 2, Heir: 2, Prince: -2 } },
        { txt: "Finjo que estou bem e racionalizo que 'pessoas vêm e vão', escondendo o quanto isso me afetou.", w: { Knight: 3, Bard: 1 } },
        { txt: "Aceito a derrota e me isolo. Sinto que falhei com a pessoa e que ela estará melhor sem a minha bagunça, então permito que ela vá.", w: { Page: 3, Rogue: 2, Thief: -3 } }
    ]},
    { t: "Dois amigos seus terminam um namoro de forma catastrófica. Ambos exigem que você escolha um lado.", opts: [
        { txt: "Recuso-me a escolher. Tento manter a ponte entre os dois, atuando como mediador, mesmo que ambos fiquem com raiva.", w: { Sylph: 3, Seer: 2, Prince: -2 } },
        { txt: "Escolho o lado com quem tenho mais afinidade e corto o outro sem piedade. Lealdade é sobre escolha.", w: { Thief: 3, Knight: 2, Rogue: -3 } },
        { txt: "Continuo falando com os dois e finjo que nada aconteceu. Ignoro o drama e deixo que lidem com minha neutralidade caótica.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Saio de perto dos dois. A instabilidade emocional deles é contagiosa e prefiro quebrar o vínculo com ambos.", w: { Prince: 3, Mage: 1, Maid: -2 } },
        { txt: "Absorvo as reclamações de ambos, servindo de lixeira emocional para os dois lados, sem nunca dar minha opinião.", w: { Rogue: 3, Page: 2 } }
    ]},
    { t: "Você está sobrecarregado, mas um grupo que depende de você exige um sacrifício pessoal de tempo e saúde.", opts: [
        { txt: "Eu aceito, mas cobro caro depois. Ninguém pode questionar minha autoridade ou me negar favores após esse sacrifício.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "Digo não. Se eles não conseguem sobreviver sem me drenar, o problema é deles. Corto essa dependência.", w: { Prince: 3, Thief: 1, Maid: -3 } },
        { txt: "Digo que vou ajudar, mas procrastino ou faço de qualquer jeito. Minha inércia acaba forçando-os a se virarem.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "Eu ignoro meu cansaço e faço o que precisa ser feito. Se eu falhar, o sistema para, e isso é inadmissível.", w: { Maid: 3, Knight: 2, Prince: -3 } },
        { txt: "Eu aceito o fardo, mas tento delegar partes dele para outros, redistribuindo o peso.", w: { Rogue: 3, Sylph: 2, Thief: -3 } }
    ]},
    { t: "Você precisa usar um uniforme ridículo para o trabalho ou escola. Todos usam, mas você se sente humilhado.", opts: [
        { txt: "Customizo o uniforme, alterando detalhes para recuperar minha identidade. Posso ser parte do grupo, mas nos meus termos.", w: { Witch: 3, Thief: 2 } },
        { txt: "Uso o uniforme com total dedicação. Ele é o símbolo do meu papel ali, e eu visto a camisa (literalmente).", w: { Maid: 3, Heir: 2, Prince: -3 } },
        { txt: "Recuso-me a usar. Prefiro ser punido ou demitido a me submeter a essa homogeneização forçada.", w: { Prince: 3, Mage: 1, Heir: -2 } },
        { txt: "Uso de qualquer jeito, todo amassado ou manchado. Deixo o símbolo da ordem se degradar no meu corpo.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "Sinto-me apagado. O uniforme mata quem eu sou e me torna apenas mais um número na engrenagem.", w: { Rogue: 3, Mage: 2 } }
    ]},
    { t: "Você descobre que seus amigos mais próximos criaram um grupo de mensagens sem você para planejar algo.", opts: [
        { txt: "Sinto uma ansiedade paralisante. Fico obcecado em descobrir o que estão falando e como posso entrar.", w: { Page: 3, Thief: 2 } },
        { txt: "Confronto o grupo com agressividade. Se a lealdade deles não é verdadeira, eu mesmo encerro esse vínculo.", w: { Prince: 3, Knight: 2, Sylph: -3 } },
        { txt: "Nem ligo. Menos notificação no meu celular. Se não me chamaram, é menos obrigação social para mim.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "Aceito a exclusão em silêncio, sentindo que talvez eu seja o peso morto que eles precisam deixar para trás.", w: { Rogue: 3, Page: 2, Thief: -3 } },
        { txt: "Analiso friamente o comportamento deles. Se sentiram necessidade de me excluir, o grupo já falhou.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "O grupo em que você está inserido está sem rumo e prestes a se fragmentar por falta de liderança. Como você reage?", opts: [
        { txt: "Assumo o comando à força. Se ninguém lidera, eu lidero. Unifico o grupo sob minha visão para evitar o colapso.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "Eu me coloco à disposição para fazer o trabalho pesado. Quero que todos se sintam seguros através do meu serviço.", w: { Knight: 3, Maid: 2, Page: 1 } },
        { txt: "Assisto de camarote. É divertido (e curioso) ver a estrutura social desmoronar sozinha quando ninguém segura as pontas.", w: { Bard: 3, Mage: 1, Sylph: -2 } },
        { txt: "Tento redistribuir as tarefas. Movo responsabilidades para quem está ocioso, buscando equilíbrio sem ser o 'chefe'.", w: { Rogue: 3, Sylph: 2, Thief: -3 } },
        { txt: "Deixo que se fragmente. Se o grupo não consegue se manter unido, ele é fraco e eu corto meu vínculo com o fracasso.", w: { Prince: 3, Seer: 1, Maid: -3 } }
    ]}
	],
   "Breath": [
    { t: "Te oferecem estabilidade total, mas com uma rotina rígida e sem margem para improviso.", opts: [
        { txt: "Aceito os benefícios, mas começo a explorar brechas para continuar fazendo o que quero.", w: { Thief: 3, Rogue: 2 } },
        { txt: "Uso a estabilidade como escudo para financiar minha liberdade fora dessa obrigação.", w: { Knight: 3, Maid: 2 } },
        { txt: "Recuso e alerto os outros sobre trocar liberdade por conforto.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "Aceito por um tempo para entender meus limites dentro dessa rotina engessada.", w: { Mage: 3, Seer: 2 } },
        { txt: "Simplesmente sigo outro caminho. Não fico onde minha vida vira uma gaiola.", w: { Heir: 3, Bard: 2, Knight: -2 } }
    ]},
    { t: "Você começou um hobby em grupo, mas sua vontade sumiu enquanto o resto do grupo continua animado.", opts: [
        { txt: "Encerro de uma vez. Melhor frustrar agora do que fingir energia que já acabou.", w: { Prince: 3, Witch: 2 } },
        { txt: "Passo a organização para alguém mais engajado e saio aos poucos.", w: { Rogue: 3, Thief: 2 } },
        { txt: "Continuo participando para não decepcionar ninguém, mesmo sem vontade.", w: { Page: 3, Knight: 2 } },
        { txt: "Reorganizo a dinâmica para o grupo continuar sem depender de mim.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "Vou sumindo devagar até minha ausência dissolver a atividade naturalmente.", w: { Bard: 3, Heir: 2, Sylph: -2 } }
    ]},
    { t: "Você faz novas amizades, e um amigo antigo começa a agir de forma possessiva.", opts: [
        { txt: "Corto a cobrança e deixo claro que amizade nenhuma justifica prisão.", w: { Prince: 3, Witch: 2 } },
        { txt: "Me afasto para forçar essa pessoa a desenvolver a própria independência.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Tento equilibrar tudo, mesmo que isso acabe sufocando minha liberdade.", w: { Page: 3, Knight: 2 } },
        { txt: "Mergulho nas novas amizades e ignoro o ciúme dele.", w: { Thief: 3, Rogue: 2 } },
        { txt: "Paro de dar satisfações e deixo a cobrança perder força sozinha.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "Você está imerso em um interesse pessoal, mas seu grupo entra numa crise burocrática urgente.", opts: [
        { txt: "Resolvo do jeito mais rápido possível só para liberar meu caminho de novo.", w: { Prince: 3, Witch: 2 } },
        { txt: "Cuido da parte prática como um escudo, mas protejo meu verdadeiro interesse.", w: { Knight: 3, Maid: 2 } },
        { txt: "Aponto a direção e as falhas do problema, mas evito assumir a execução.", w: { Seer: 3, Mage: 2 } },
        { txt: "Aproveito o caos para monopolizar tempo, espaço ou recursos para meu projeto.", w: { Thief: 3, Rogue: 2, Maid: -2 } },
        { txt: "Continuo na minha bolha e sigo meu rumo como se a crise não me puxasse.", w: { Heir: 3, Bard: 2, Knight: -1 } }
    ]},
    { t: "Seu grupo precisa decidir algo urgente, mas ninguém chega a consenso.", opts: [
        { txt: "Resolvo sozinho. Melhor andar do meu jeito do que ficar parado.", w: { Thief: 3, Mage: 2, Sylph: -2 } },
        { txt: "Tomo a frente e aponto qualquer direção viável. O importante é sair do lugar.", w: { Maid: 3, Witch: 2, Bard: -2 } },
        { txt: "Largo mão e vou cuidar das minhas coisas.", w: { Bard: 3, Rogue: 2, Knight: -2 } },
        { txt: "Facilito a conversa para o bloqueio se desfazer naturalmente.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Espero alguém decidir por mim, porque minha opinião parece não mover nada.", w: { Page: 3, Knight: 2 } }
    ]},
    { t: "Você está em um lugar desconhecido, sem GPS e sem saber onde fica a saída.", opts: [
        { txt: "Gosto da sensação de não saber o que vem depois e exploro sem pressa.", w: { Heir: 3, Bard: 1, Knight: -3 } },
        { txt: "Fico nervoso, mas ando como se soubesse o caminho.", w: { Knight: 3, Page: 2 } },
        { txt: "Uso o ambiente e as pessoas ao redor para descobrir uma rota.", w: { Witch: 3, Thief: 2, Mage: 1 } },
        { txt: "Sento e espero. Eventualmente algo ou alguém aparece.", w: { Bard: 3, Rogue: 2, Maid: -2 } },
        { txt: "Observo padrões no trânsito e na arquitetura para deduzir a saída.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "Você está em uma dinâmica segura e confortável, mas totalmente parada e sem novos desafios.", opts: [
        { txt: "Vou embora. Conforto sem movimento ainda é estagnação.", w: { Prince: 3, Witch: 2 } },
        { txt: "Invento objetivos novos para criar movimento onde não havia.", w: { Maid: 3, Knight: 2 } },
        { txt: "Empurro as pessoas ao redor para saírem da zona de conforto também.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "Uso a calmaria como base para focar nos meus interesses fora dali.", w: { Thief: 3, Mage: 2 } },
        { txt: "Minha atenção evapora e eu vou faltando até sair sem grande ruptura.", w: { Heir: 3, Bard: 2 } }
    ]},
    { t: "Você percebe que uma pessoa próxima está travada porque acha que só existe um caminho certo para a vida dela.", opts: [
        { txt: "Tento mostrar possibilidades que ela ainda não enxergou, sem forçar uma escolha específica.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Divido exemplos, contatos e alternativas para que ela possa escolher com mais liberdade.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Analiso de onde veio essa ideia de caminho único e quais medos mantêm a pessoa presa nela.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico inseguro porque também não sei muito bem como alguém encontra o próprio caminho sem se perder.", w: { Page: 3, Rogue: 1 } },
        { txt: "Crio uma primeira saída pequena e prática, algo que prove que a vida não precisa continuar exatamente igual.", w: { Maid: 3, Witch: 1 } }
    ]},
    { t: "Um grupo está pesado, sério e cheio de tensão, e ninguém consegue respirar direito perto dos outros.", opts: [
        { txt: "Uso humor, leveza ou uma mudança de clima para abrir espaço emocional antes que todo mundo exploda.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Tento entender qual expectativa invisível está deixando todos presos no mesmo comportamento.", w: { Mage: 3, Seer: 2 } },
        { txt: "Crio uma atividade simples que faça as pessoas se moverem, conversarem ou mudarem de foco.", w: { Maid: 3, Sylph: 2 } },
        { txt: "Tenho vontade de aliviar o clima, mas fico com medo de parecer inconveniente ou infantil.", w: { Page: 3, Knight: 1 } },
        { txt: "Saio do ambiente por alguns minutos para não ser engolido pelo peso coletivo.", w: { Heir: 3, Rogue: 1 } }
    ]},
    { t: "Você precisa liderar pessoas que estão desmotivadas, mas não quer virar uma autoridade rígida.", opts: [
        { txt: "Dou exemplo fazendo do meu jeito, esperando que as pessoas se inspirem sem eu precisar mandar.", w: { Maid: 3, Heir: 2 } },
        { txt: "Distribuo liberdade dentro da tarefa, deixando cada pessoa escolher como contribuir melhor.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Entendo o que está drenando a vontade do grupo antes de tentar empurrar qualquer solução.", w: { Mage: 3, Seer: 2 } },
        { txt: "Tento parecer confiante e espontâneo, mas fico inseguro de ninguém levar minha direção a sério.", w: { Page: 3, Knight: 2 } },
        { txt: "Reorganizo o plano para que ele pareça menos sufocante e mais possível de começar.", w: { Witch: 3, Maid: 2 } }
    ]},
    { t: "Você recebe a chance de viajar, mudar de ambiente ou experimentar uma rotina completamente diferente por um tempo.", opts: [
        { txt: "Vou com cuidado, tentando aprender o que essa mudança revela sobre minhas próprias necessidades de liberdade.", w: { Mage: 3, Page: 1 } },
        { txt: "Uso a experiência para abrir portas para outras pessoas também conhecerem algo fora da própria bolha.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Preparo o mínimo necessário para a mudança ser leve, sem transformar a aventura em prisão logística.", w: { Maid: 3, Knight: 1 } },
        { txt: "Quero ir, mas fico esperando um convite, sinal ou permissão que torne a escolha menos assustadora.", w: { Page: 3, Heir: 1 } },
        { txt: "Aceito naturalmente. Às vezes mudar de lugar é só seguir o vento quando ele chama.", w: { Heir: 3, Bard: 1 } }
    ]},
    { t: "Você percebe que está evitando um compromisso não porque ele é ruim, mas porque escolher parece fechar outras possibilidades.", opts: [
        { txt: "Tento entender se meu medo é da escolha em si ou da pessoa que eu deixaria de ser ao escolher.", w: { Mage: 3, Seer: 2 } },
        { txt: "Crio uma forma mais flexível de compromisso, com espaço para respirar e mudar sem romper tudo.", w: { Witch: 3, Maid: 2 } },
        { txt: "Aceito uma direção pequena primeiro, em vez de exigir de mim uma decisão definitiva para sempre.", w: { Page: 3, Maid: 1 } },
        { txt: "Converso com as pessoas envolvidas para dividir expectativas, limites e margem de movimento.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Assumo que liberdade total também pode virar paralisia, então escolho algo que me mantenha em movimento.", w: { Maid: 3, Knight: 2 } }
    ]},
    { t: "Uma pessoa do grupo sempre tenta escapar das responsabilidades, mas faz isso de um jeito carismático que todos perdoam.", opts: [
        { txt: "Percebo o padrão e tento entender por que o grupo recompensa essa fuga como se fosse charme.", w: { Seer: 3, Mage: 2 } },
        { txt: "Redistribuo as tarefas para que a liberdade dela não vire peso para todo mundo.", w: { Rogue: 3, Maid: 2 } },
        { txt: "Tento mostrar que ser livre não significa deixar os outros presos no trabalho que ela largou.", w: { Sylph: 3, Knight: 1 } },
        { txt: "Fico inseguro de cobrar e parecer chato, porque todo mundo parece gostar mais dela justamente por não levar nada tão a sério.", w: { Page: 3, Rogue: 1 } },
        { txt: "Crio um sistema em que a pessoa possa contribuir de forma mais solta, sem depender de disciplina que ela não tem.", w: { Witch: 3, Maid: 2 } }
    ]},
    { t: "Você sente vontade de desaparecer por um tempo, mas sabe que algumas pessoas podem se preocupar de verdade.", opts: [
        { txt: "Aviso de um jeito simples e leve, criando espaço para mim sem transformar sumiço em abandono.", w: { Maid: 3, Rogue: 2 } },
        { txt: "Tento entender o que estou tentando evitar antes de chamar isso de necessidade de liberdade.", w: { Mage: 3, Seer: 2 } },
        { txt: "Combino limites de contato para que ninguém precise me vigiar nem me cobrar presença constante.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "Fico inseguro e acabo sumindo mal explicado, torcendo para entenderem que não é pessoal.", w: { Page: 3, Bard: 1, Knight: -1 } },
        { txt: "Uso a pausa para reorganizar minha vida e voltar menos preso ao que esperavam de mim.", w: { Maid: 3, Witch: 1 } }
    ]},
    { t: "Você entra em contato com uma pessoa que vive de um jeito muito mais livre, espontâneo e desapegado do que você.", opts: [
        { txt: "Observo o que nessa liberdade é real e o que talvez seja só fuga bem apresentada.", w: { Mage: 3, Seer: 2 } },
        { txt: "Sinto vontade de aprender com ela, mas também medo de parecer artificial tentando ser mais solto.", w: { Page: 3, Heir: 1 } },
        { txt: "Pego algumas possibilidades que ela abriu e adapto para minha própria vida sem copiar o pacote inteiro.", w: { Rogue: 3, Witch: 1 } },
        { txt: "Crio pequenos experimentos de liberdade no meu cotidiano, sem precisar desmontar tudo de uma vez.", w: { Maid: 3, Page: 1 } },
        { txt: "Deixo a presença dela me puxar para fora da minha rigidez. Algumas pessoas são vento em forma de gente.", w: { Heir: 3, Sylph: 1 } }
    ]},
    { t: "Um plano importante precisa ser adaptado no meio do caminho porque a realidade mudou de direção.", opts: [
        { txt: "Reorganizo rapidamente as tarefas para que o grupo continue se movendo sem travar no plano antigo.", w: { Maid: 3, Knight: 2 } },
        { txt: "Ajudo cada pessoa a encontrar uma nova margem de ação dentro da mudança inesperada.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Analiso o que mudou de verdade e o que só parece caos porque ninguém atualizou o mapa mental.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico ansioso porque eu estava começando a entender o plano antigo e agora preciso reaprender a direção.", w: { Page: 3, Knight: 1 } },
        { txt: "Mudo a estrutura do plano para aproveitar a nova direção em vez de apenas reagir a ela.", w: { Witch: 3, Maid: 1 } }
    ]},
    { t: "Você percebe que sua liberdade pessoal está dependendo do trabalho invisível de outra pessoa.", opts: [
        { txt: "Redistribuo esse trabalho para que minha leveza não exista às custas do peso de alguém.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Crio uma rotina mínima para assumir minha parte sem transformar minha vida inteira em obrigação.", w: { Maid: 3, Knight: 2 } },
        { txt: "Tento entender como me acostumei a chamar de liberdade algo que outra pessoa estava sustentando por mim.", w: { Mage: 3, Seer: 2 } },
        { txt: "Fico envergonhado e tento compensar rápido demais, assumindo mais do que consigo manter.", w: { Page: 3, Maid: 1 } },
        { txt: "Mudo o acordo para que todo mundo tenha mais espaço de escolha, não só eu.", w: { Witch: 3, Rogue: 2 } }
    ]},
    { t: "Uma autoridade exige que você defina um plano de vida detalhado e pare de improvisar.", opts: [
        { txt: "Questiono a utilidade de planejar rigidamente um futuro imprevisível.", w: { Prince: 3, Witch: 2 } },
        { txt: "Defendo minha trajetória como prova de que adaptação funciona melhor para mim.", w: { Maid: 3, Knight: 2 } },
        { txt: "Tento mostrar que incerteza não precisa ser tratada como perigo.", w: { Sylph: 3, Seer: 2 } },
        { txt: "Finjo concordar, faço um plano genérico e continuo seguindo meu caminho.", w: { Thief: 3, Mage: 2, Knight: -2 } },
        { txt: "Até tento, mas com o tempo abandono o plano sem perceber.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "Você fica offline por alguns dias e, ao voltar, cobram explicações detalhadas sobre seu sumiço.", opts: [
        { txt: "Corto a cobrança. Minha disponibilidade não é direito de ninguém.", w: { Prince: 3, Witch: 2 } },
        { txt: "Recuso pedir desculpas e ajo como se meu sumiço fosse normal.", w: { Maid: 3, Knight: 2 } },
        { txt: "Uso a situação para definir limites claros de comunicação.", w: { Seer: 3, Mage: 2 } },
        { txt: "Desvio do interrogatório com uma resposta vaga e mudo de assunto.", w: { Rogue: 3, Thief: 2 } },
        { txt: "Dou de ombros e sigo normalmente até a cobrança perder força.", w: { Heir: 3, Bard: 2 } }
    ]},
    { t: "Você quer colocar uma ideia simples em prática, mas descobre que precisa passar por um processo burocrático enorme.", opts: [
        { txt: "Faço do meu jeito e lido com a bronca depois.", w: { Prince: 3, Witch: 2 } },
        { txt: "Encontro uma brecha para conseguir a liberação mais rápido que os outros.", w: { Thief: 3, Rogue: 2, Maid: -2 } },
        { txt: "Tento simplificar o processo para todo mundo, não só para mim.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "Sigo o protocolo, mesmo odiando cada etapa.", w: { Page: 3, Knight: 2, Prince: -2 } },
        { txt: "Perco o interesse e vou fazer algo mais simples e livre.", w: { Heir: 3, Bard: 2 } }
	]} 
  ] 
};


