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
    { t: "2. You feel like someone is trying to downplay a concern of yours by saying, 'Relax, it's nothing.'", opts: [
        { txt: "I stand my ground regarding my unease. If something triggered my alarm, I won't let someone else turn it off just for the sake of convenience.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I try to figure out if my reaction stems from actual experience or if I'm projecting fear where there might not be any.", w: { Mage: 3, Seer: 2 } },
        { txt: "I point out the concrete risk they're ignoring, even if it makes me come across as negative.", w: { Seer: 3, Sylph: 2 } },
        { txt: "I start to doubt my own reaction and end up letting the person convince me that I'm overreacting.", w: { Page: 3, Rogue: 2, Heir: -1 } },
        { txt: "I channel my irritation into resolving the situation quickly, before anyone can push me into passivity.", w: { Knight: 3, Maid: 2 } }
    ]},
   { t: "3. You see an advertising campaign using a serious cause to appear profound, but without saying anything concrete.", opts: [
		{ txt: "I transform my irritation into public criticism; if the message is empty, someone needs to point out the trick.", w: { Knight: 3, Prince: 2 } },
		{ txt: "I use the campaign's own aesthetics against it, creating a parody that exposes how fake everything is.", w: { Witch: 3, Bard: 2 } },
		{ txt: "I try to explain why it harms the cause it pretends to defend, even if people think it's an exaggeration.", w: { Sylph: 3, Maid: 2 } },
		{ txt: "I take advantage of the indignation the campaign generated to draw attention to my own criticism.", w: { Thief: 3, Witch: 2 } },
		{ txt: "At first I fall for the pretty message, but when I perceive the emptiness behind it, and I'm ashamed for having believed it.", w: { Page: 3, Bard: 1 } }
	]},
    { t: "4. A group conversation turns into a contest to see who is the most righteous, pure, or enlightened.", opts: [
        { txt: "I cut the dynamic short before it turns into moral posturing. No one is trying to solve anything—they’re just trying to outdo each other's image.", w: { Prince: 3, Knight: 2 } },
        { txt: "I use the tension to my advantage and provoke contradictions in everyone until their masks slip.", w: { Witch: 3, Thief: 2, Rogue: -1 } },
        { txt: "I try to redirect the anger toward something useful, because competing for superiority changes nothing.", w: { Maid: 3, Sylph: 2, Bard: -1 } },
        { txt: "I stay quiet for fear of saying the wrong thing, but I end up absorbing the entire group's paranoia.", w: { Page: 3, Bard: 2 } },
        { txt: "I stand up for the person being crushed by the conversation, even if they expressed themselves poorly.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "5. You encounter a work of art clearly designed to disturb, provoke disgust, or make the audience uncomfortable.", opts: [
        { txt: "I like it precisely because it doesn't try to be pleasant; sometimes the function of art is to unsettle.", w: { Bard: 3, Heir: 1 } },
        { txt: "I try to understand which social lie the work is tearing apart before deciding if the provocation works.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use the work as a starting point to discuss what people prefer to pretend doesn't exist.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I find it cowardly when a work shocks just for the sake of shocking. If it’s going to shatter comfort, let it shatter something real.", w: { Knight: 3, Prince: 2 } },
        { txt: "I want to create something even more unsettling, just to see how much the audience can stand to face.", w: { Thief: 3, Witch: 2, Sylph: -1 } }
    ]},
     { t: "6. A rumor starts circulating, and no one knows if it's true, yet everyone is already reacting.", opts: [
        { txt: "I spread doubt back to the group. If no one knows anything, no one should feel comfortable.", w: { Bard: 3, Witch: 2, Maid: -1 } },
        { txt: "I try to establish a basic way to verify the facts before paranoia actually hurts someone.", w: { Maid: 3, Seer: 2, Bard: -1 } },
        { txt: "I use the rumor to find out who is taking advantage of the chaos and who is trying to protect others.", w: { Thief: 3, Mage: 1 } },
        { txt: "I ask the people involved direct questions, even if it immediately makes the atmosphere worse.", w: { Knight: 3, Prince: 1 } },
        { txt: "I waver between belief and doubt, reacting too strongly to every new version that pops up.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "7. You realize a rule exists solely to keep people obedient, not because it makes sense.", opts: [
        { txt: "I break the rule in public to prove it only works as long as everyone pretends to believe in it.", w: { Bard: 3, Prince: 2, Maid: -1 } },
        { txt: "I look for a loophole and use the rule's own structure against those trying to enforce it.", w: { Witch: 3, Thief: 2 } },
        { txt: "I organize a practical way to resist without leaving people more vulnerable to punishment.", w: { Maid: 3, Rogue: 2, Bard: -1 } },
        { txt: "I dismantle the rule before others do and view their rebellion as lagging behind; if anyone is going to truly see through the charade, it will be me.", w: { Thief: 3, Prince: 2, Sylph: -1 } },
        { txt: "I want to defy it, but I wait for someone braver to start so I can see if it's safe.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "8. During an argument, someone uses calm and politeness to mask a cruel remark.", opts: [
        { txt: "I strip away the feigned kindness and respond to what the person actually meant.", w: { Prince: 3, Knight: 2 } },
        { txt: "I reply in the same polite tone, but twist the words until their cruelty becomes impossible to hide.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "I step in to protect the person who was targeted, even if the cruel individual tries to appear reasonable.", w: { Sylph: 3, Rogue: 2, Thief: -1 } },
        { txt: "I channel my anger into a firm response, refusing to let the veneer of politeness intimidate me.", w: { Knight: 3, Maid: 2 } },
        { txt: "I hesitate to react because the remark seems acceptable on the surface, and only later do I realize why it hurt me.", w: { Page: 3, Mage: 1 } }
    ]},
    { t: "9. You come across an absurd theory that several people are taking seriously.", opts: [
        { txt: "I make fun of the theory until it loses the aura of mystery that was convincing people.", w: { Bard: 3, Prince: 1, Sylph: -1 } },
        { txt: "I delve into its logic and twist the premises until the theory contradicts itself.", w: { Witch: 3, Mage: 2 } },
        { txt: "I try to construct an accessible explanation to steer people away from it without humiliating them.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I use the theory as ammunition to win an argument against someone who thought they were too smart.", w: { Thief: 3, Seer: 1 } },
        { txt: "I’m afraid I won’t be able to refute it properly and will end up looking just as lost as those who believe it.", w: { Page: 3, Rogue: 1 } }
    ]},
   { t: "10. You are at a protest, debate, or rally, and the collective anger begins to spiral out of control.", opts: [
        { txt: "I channel the energy into concrete action before the uprising turns into a mere disorganized explosion.", w: { Maid: 3, Knight: 2, Bard: -1 } },
        { txt: "I push the crowd to the breaking point. Sometimes order really needs to shatter.", w: { Bard: 3, Witch: 2, Sylph: -1 } },
        { txt: "I protect those becoming vulnerable amidst the chaos, even if it takes me away from the center of the action.", w: { Rogue: 3, Sylph: 2, Thief: -1 } },
        { txt: "I step to the forefront of the confrontation, because hesitation in that moment only hands power back to the oppressors.", w: { Knight: 3, Thief: 1 } },
        { txt: "I want to participate, but the intensity scares me, and I end up following the crowd.", w: { Page: 3, Heir: 1 } }
    ]},
   { t: "11. Someone accuses you of being too negative because you always point out what could go wrong.", opts: [
        { txt: "I own the reputation. If everyone wants comfort, someone has to face the ugly side of things.", w: { Heir: 3, Knight: 1 } },
        { txt: "I try to turn my warnings into concrete procedures so it doesn't just sound like complaining.", w: { Maid: 3, Seer: 2, Bard: -1 } },
        { txt: "I turn the accusation back on them: maybe they only call it negativity because it's something they don't want to admit.", w: { Thief: 3, Witch: 2 } },
        { txt: "I get insecure and start downplaying my concerns too much, until they lose their impact.", w: { Page: 3, Sylph: 1 } },
        { txt: "I cut the conversation short. I’m not going to perform optimism just to make someone feel comfortable.", w: { Prince: 3, Rogue: 1 } }
    ]},
    { t: "12. You realize that an entire community is sustaining itself on a convenient collective fantasy.", opts: [
        { txt: "I plant small seeds of doubt at strategic points until the fantasy begins to crack from within.", w: { Witch: 3, Bard: 2 } },
        { txt: "I try to build a more honest ground for people to land on, so they don't completely destroy themselves.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I use the collapse of the fantasy to claim a position that was previously shielded by it.", w: { Thief: 3, Prince: 1, Rogue: -1 } },
        { txt: "I gather those who were already suspicious, because no one should have to face a truth like that alone.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I let the fantasy collapse when it’s time for it to collapse. Sometimes chaos teaches more than any warning.", w: { Bard: 3, Heir: 1, Knight: -1 } }
    ]},
    { t: "13. You notice a group accepting a convenient explanation simply because it makes everyone feel more comfortable.", opts: [
        { txt: "I reject the explanation immediately. A comfortable version doesn't become true just because it avoids conflict.", w: { Heir: 3, Prince: 2 } },
        { txt: "I start pointing out flaws in the accepted version until people are forced to confront the inconsistencies.", w: { Seer: 3, Sylph: 2 } },
        { txt: "I try to show how this false sense of calm could harm someone later on.", w: { Sylph: 3, Mage: 2 } },
        { txt: "I use the doubt no one wants to touch to steer the conversation in my favor.", w: { Thief: 3, Witch: 2 } },
        { txt: "I observe who actually believes the explanation and who is merely accepting it to keep the peace.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "14. You discover that a goal you’ve pursued for years might not be possible in the way you imagined.", opts: [
        { txt: "I try to understand exactly where the limitation lies, because knowing the reality hurts less than continuing to flail in the dark.", w: { Mage: 3, Seer: 2 } },
        { txt: "I keep looking for signs that there’s still a way through, even if everyone else has already given up.", w: { Heir: 3, Witch: 2 } },
        { txt: "I turn my frustration into the strength to try a different approach—even if it’s just out of sheer stubbornness.", w: { Maid: 3, Knight: 2 } },
        { txt: "I downplay the goal so I don’t get hung up on it; if it can’t happen, maybe it didn’t deserve that much importance anyway.", w: { Prince: 3, Bard: 2 } },
        { txt: "I seek out others who have hit the same wall, because it’s easier to deal with the frustration when it isn’t mine alone.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "15. You know you need to say 'no' to someone, but they are expecting you to give in.", opts: [
        { txt: "I say no and stand by the decision, even if they try to make me look difficult or cruel.", w: { Rogue: 3, Heir: 2 } },
        { txt: "I use the refusal to change a dynamic that had been wrong for too long.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I try to appear firm, but if they insist in the right way, I end up reacting exactly as they wanted.", w: { Page: 3, Bard: 2, Knight: -1 } },
        { txt: "I show that their persistence only proves why that boundary needed to exist.", w: { Prince: 3, Mage: 2 } },
        { txt: "I shut down the conversation before it turns into a negotiation. My 'no' doesn't need an audience.", w: { Heir: 3, Knight: 2 } }
    ]},
    { t: "16. You realize you're being misled during an important conversation.", opts: [
        { txt: "I interrupt and point out the contradiction before the person can keep pretending everything is normal.", w: { Prince: 3, Heir: 2 } },
        { txt: "I pretend not to notice for a few more minutes to understand exactly what lie they're trying to maintain.", w: { Mage: 3, Seer: 2 } },
        { txt: "I ask specific questions until the person struggles to stick to their story.", w: { Seer: 3, Knight: 2 } },
        { txt: "I use the conversation's tension to turn the pressure back on them and make them lose their composure.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "I get so indignant that I might react too strongly before grasping the full picture.", w: { Page: 3, Knight: 2 } }
    ]},
    { t: "17. You realize the world is more unjust and absurd than you would like to believe.", opts: [
        { txt: "This reinforces my distrust. You can't treat the world as if it were naturally just.", w: { Heir: 3, Mage: 2 } },
        { txt: "I try to turn that indignation into something useful—even if it's just a routine, a small action, or a firmer refusal.", w: { Maid: 3, Knight: 2, Bard: -1 } },
        { txt: "I seek out people who share the same outrage, because dealing with it alone just makes everything feel heavier.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I use people's anger to spur a reaction they might not have had the courage to initiate on their own.", w: { Witch: 3, Thief: 2 } },
        { txt: "I laugh at the absurdity and try not to take things too seriously, because facing it all head-on all the time would break me.", w: { Bard: 3, Page: 2, Knight: -1 } }
    ]},
    { t: "18. You discover that someone you admired was far less genuine than they appeared.", opts: [
        { txt: "I’m not exactly surprised. Sometimes the fall just confirms something I already suspected.", w: { Mage: 3, Heir: 2 } },
        { txt: "I try to understand which signs I ignored so I don't fall for that kind of false image again.", w: { Seer: 3, Mage: 2 } },
        { txt: "I cut off my admiration immediately. Once I see the charade, I can't keep treating them the same way.", w: { Prince: 3, Heir: 2 } },
        { txt: "I use the situation to warn others who are still taken in by that image.", w: { Sylph: 3, Maid: 2 } },
        { txt: "At first, I try to pretend it didn't affect me, but later I start to distrust anyone similar.", w: { Bard: 3, Page: 2 } }
    ]},
    { t: "19. Everyone around you is excited about something new, but you feel like something isn't right.", opts: [
        { txt: "I’m the first to say I don’t trust it, even knowing I’ll look like a killjoy.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I investigate the source of my unease to see if it’s just paranoia or if there’s actually something fake going on.", w: { Mage: 3, Seer: 2 } },
        { txt: "I start pointing out flaws to dampen the excitement before it turns into collective blindness.", w: { Prince: 3, Sylph: 2 } },
        { txt: "I use the first crack in the excitement to steer people toward my own interpretation of the situation.", w: { Thief: 3, Witch: 2 } },
        { txt: "I reject the new thing almost automatically—more to prove I’m not easily influenced than because I actually grasp the problem.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "20. You have to choose between being honest and losing an opportunity, or twisting the truth to get what you want.", opts: [
        { txt: "I tell the truth, even if it closes the door. I prefer a real 'no' to a chance built on a lie.", w: { Heir: 3, Seer: 2, Thief: -2 } },
        { txt: "I weigh who might be harmed by the lie before deciding. The problem isn't just the lie itself, but the consequences that follow.", w: { Mage: 3, Seer: 2 } },
        { txt: "I lie if the situation is already unfair to me. If the game is rigged, I’m not going to be the only one playing by the rules.", w: { Thief: 3, Witch: 2 } },
        { txt: "I am brutally honest—almost as if I’m punishing the situation for forcing me to make this choice.", w: { Knight: 3, Prince: 2 } },
        { txt: "I try to avoid the choice until I’m forced to answer, because every option feels tainted in its own way.", w: { Rogue: 3, Bard: 2 } }
    ]}
	],
    "Light": [
   { t: "1. You start studying a new subject and realize that everyone around you seems to understand it better than you do.", opts: [
        { txt: "I pretend to follow the conversation and repeat terms I don't quite understand yet, hoping I won't be questioned.", w: { Page: 3, Bard: 1 } },
        { txt: "I go back to the basics and try to understand the actual mechanism behind the subject, even if it makes me look like I'm lagging behind.", w: { Mage: 3, Seer: 2 } },
        { txt: "I turn studying into a routine: summaries, flashcards, examples, and my own way of organizing the information.", w: { Maid: 3, Knight: 2 } },
        { txt: "I look for a loophole in the traditional method and learn through less obvious paths until the information makes sense to me.", w: { Witch: 3, Page: 2 } },
        { txt: "I accept that some things will reveal themselves over time, without needing to master everything immediately.", w: { Heir: 3, Rogue: 1 } }
    ]},
    { t: "2. You find an ancient source that contradicts the most famous version of an event.", opts: [
        { txt: "I investigate where the source came from, who preserved it, who ignored it, and why it lost its relevance.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use the source to reconstruct the narrative with more context, even if the final version becomes less simple.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I highlight this source before anyone else does, because finding something rare is also a way to gain an advantage.", w: { Thief: 3, Witch: 1 } },
        { txt: "I become obsessed with the possibility that I’ve found the piece that changes everything, even without knowing yet how to prove it.", w: { Page: 3, Heir: 2 } },
        { txt: "I question the renown of the accepted version. If a story relies on erasing another, perhaps it deserves to lose its luster.", w: { Prince: 3, Seer: 1 } }
    ]},
    { t: "3. A piece of your content suddenly gets attention due to the algorithm, but not for the reason you intended.", opts: [
        { txt: "I make the most of the spotlight while it lasts. Even if the attention came the wrong way, I can still redirect it toward myself.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "I try to tweak the title, context, and presentation so people grasp the intended point.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I analyze why it went viral: the wording, image, timing, audience, a misinterpretation, or just plain bad luck.", w: { Mage: 3, Seer: 2 } },
        { txt: "I feel insecure, because being seen the wrong way seems worse than not being seen at all.", w: { Page: 3, Rogue: 2 } },
        { txt: "I let the interpretation run wild. Once something is out in the public eye, controlling its meaning takes too much effort.", w: { Bard: 3, Heir: 1, Knight: -1 } }
    ]},
    { t: "4. You receive feedback stating that your research is correct but poorly explained.", opts: [
        { txt: "I reorganize the information until it is clear, useful, and presentable to those who didn't follow my train of thought.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I retrace my steps to understand where my thinking skipped over points that seemed obvious only to me.", w: { Mage: 3, Seer: 2 } },
        { txt: "I get defensive; if the information is correct, part of me feels it's unfair to be criticized for the presentation.", w: { Page: 3, Prince: 1 } },
        { txt: "I change the format of the explanation—an example, metaphor, diagram, comparison, anything to make the idea click.", w: { Witch: 3, Maid: 2 } },
        { txt: "I accept that not every truth needs to be explained in a way that suits everyone; those who want to understand can keep up.", w: { Prince: 3, Bard: 1 } }
    ]},
    { t: "5. You are in a contest, game, or a situation involving chance, and you win thanks to an unlikely detail.", opts: [
        { txt: "I try to understand the conditions that boosted my odds, so I can turn luck into a method for next time.", w: { Mage: 3, Knight: 2 } },
        { txt: "I accept the victory as a sign I was on the right track, even if I can't explain every detail.", w: { Heir: 3, Page: 1 } },
        { txt: "I use the victory to gain recognition before anyone can dismiss my achievement as mere chance.", w: { Thief: 3, Prince: 1 } },
        { txt: "I worry that I didn't truly earn the win, so I start studying to make up for the luck later.", w: { Page: 3, Maid: 2 } },
        { txt: "I share what worked so that others can improve their own chances, too.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "6. You realize that a small detail in an image, text, or conversation completely changes the interpretation.", opts: [
        { txt: "I follow the detail until I understand the entire chain of meaning it reveals.", w: { Mage: 3, Seer: 2 } },
        { txt: "I point the detail out to everyone, because ignoring it would make the whole conclusion wrong.", w: { Seer: 3, Sylph: 2 } },
        { txt: "I use that detail to turn the prevailing interpretation to my advantage before others notice it.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "I try to turn the detail into a larger explanation, giving shape to something that seemed like a coincidence.", w: { Maid: 3, Mage: 1 } },
        { txt: "I get stuck on that detail and start doubting whether I understood anything at all before it appeared.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "7. Someone asks you to teach something you know, but learned in a haphazard, self-taught way.", opts: [
        { txt: "I explain it using the method that worked for me, even if it seems strange or out of the traditional order.", w: { Witch: 3, Mage: 2 } },
        { txt: "I map out the path from the very beginning, breaking it into steps so the person doesn't stumble where I did.", w: { Mage: 3, Sylph: 2 } },
        { txt: "I create organized materials for them to consult later, with easy-to-follow examples and sources.", w: { Maid: 3, Seer: 1 } },
        { txt: "I'm afraid of teaching it wrong and ending up revealing the gaps in my own knowledge.", w: { Page: 3, Rogue: 2 } },
        { txt: "I prefer to show just the result and let the person figure out the process on their own.", w: { Prince: 3, Thief: 1, Sylph: -1 } }
    ]},
    { t: "8. You see someone receive credit for a discovery that only happened because others had pieced together clues beforehand.", opts: [
        { txt: "I reconstruct the path of the discovery to show who illuminated which part of the process.", w: { Maid: 3, Seer: 2 } },
        { txt: "I redirect attention to those who went unnoticed, even if it diminishes the spotlight on the person being celebrated.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I claim the narrative for myself if I was the one who saw how the clues connected.", w: { Thief: 3, Mage: 1, Rogue: -2 } },
        { txt: "I analyze why one person became the face of the discovery while the others became mere footnotes.", w: { Mage: 3, Seer: 2 } },
        { txt: "It bothers me, but I don't know how to set the record straight without looking like I'm begging for recognition.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "9. You discover that you had been confidently defending incorrect information.", opts: [
        { txt: "I trace back through the chain of sources to understand exactly where the false information entered.", w: { Mage: 3, Seer: 2 } },
        { txt: "I publicly correct it and make the right version more visible than the error.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I feel embarrassed and start doubting my ability to know anything with certainty.", w: { Page: 3, Heir: 1 } },
        { txt: "I downplay the entire discussion so I don't get weighed down by having been wrong.", w: { Bard: 3, Prince: 2, Mage: -1 } },
        { txt: "I quickly change my stance and try to use the correction as proof that I'm smarter for adapting.", w: { Thief: 3, Witch: 2 } }
    ]},
    { t: "10. You come across an obscure topic that almost no one knows about, yet it seems full of important connections.", opts: [
        { txt: "I dive into the topic until I understand why it stayed out of the public eye for so long.", w: { Mage: 3, Heir: 2 } },
        { txt: "I start putting together a guide to make this knowledge accessible without destroying its complexity.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I use the topic as a personal brand; being one of the few people who understands it gives me an edge.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I’m fascinated but lost, jumping from link to link without knowing what’s foundational and what’s just a detail.", w: { Page: 3, Heir: 1 } },
        { txt: "I shift the angle of presentation until the topic seems relevant to people who would never have cared about it otherwise.", w: { Witch: 3, Seer: 1 } }
    ]},
    { t: "11. You are part of a team that achieved a remarkable feat, but only one person will be the public face of that success. How do you position yourself?", opts: [
        { txt: "I ensure my contribution is the most visible; if the result is excellent, it is only fair that I control the narrative.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "I prefer to downplay my involvement and stay out of the spotlight; public attention is an intrusive noise I’d rather avoid.", w: { Prince: 3, Rogue: 2, Thief: -3 } },
        { txt: "I make a point of highlighting the efforts of those who were less visible, ensuring the recognition is shared.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I don't even care if people know it was me. If my name gets left out of the credits, so be it. Fame is too much work.", w: { Bard: 3, Heir: 2 } },
        { txt: "I don't force anything. If people notice my worth, great; if not, I know my contribution will eventually be recognized.", w: { Heir: 3, Seer: 1 } }
    ]},
    { t: "12. You discover an important piece of information before anyone else, but you aren't sure yet if you should share it.", opts: [
        { txt: "I keep it to myself for now and watch to see who else notices. Information is worth more when you know the right moment to use it.", w: { Knight: 3, Mage: 2 } },
        { txt: "I tell everyone immediately; if it's important, people need to know before making decisions in the dark.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I use the information to put myself in a better position. Since I was the one who discovered it, it makes sense for it to benefit me first.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I'm unsure if I understood it correctly and try to confirm with someone else before identifying myself as the source.", w: { Rogue: 3, Knight: 2 } },
        { txt: "I start digging deeper, because this information might just be the tip of the iceberg regarding something much bigger.", w: { Heir: 3, Seer: 2 } }
    ]},
    { t: "13. You are researching a subject and realize there are different, contradictory, and seemingly well-founded versions.", opts: [
        { txt: "I compare the sources and try to figure out which interpretation truly sheds light on the bigger picture.", w: { Seer: 3, Mage: 2 } },
        { txt: "I dive deeper and deeper. If there are so many versions, there must be some hidden detail explaining the difference.", w: { Heir: 3, Knight: 1 } },
        { txt: "I try to create my own synthesis from what I’ve found, rather than passively accepting a ready-made explanation.", w: { Maid: 3, Witch: 2 } },
        { txt: "I begin to suspect that the clash of interpretations is more important than the original fact itself.", w: { Mage: 3, Seer: 2 } },
        { txt: "I pretend I understand it better than I actually do and end up repeating the version that seems most impressive.", w: { Page: 3, Thief: 1, Mage: -2 } }
    ]},
   { t: "14. A personal mistake of yours is publicly exposed, and you become the center of attention and judgment. How do you react?", opts: [
        { txt: "I decide that others' opinions are irrelevant. I treat the exposure as meaningless and move on.", w: { Prince: 3, Bard: 1, Page: -2 } },
        { txt: "I own up to the mistake and set to work—punishingly so—to set the record straight and restore my reputation.", w: { Maid: 3, Knight: 2 } },
        { txt: "I take it in stride. If my reputation is ruined, at least the story was funny. I’m not going to kill myself trying to clear my name.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I use the shame of the exposure as fuel to analyze where I went wrong and ensure it never happens again.", w: { Page: 3, Knight: 2, Mage: 1 } },
        { txt: "I try to shift the focus away from my mistake to a topic that is more relevant at the moment.", w: { Thief: 3, Witch: 2 } }
    ]},
    { t: "15. You realize that something considered irrelevant by everyone might hold significant meaning.", opts: [
        { txt: "I start giving it shape and context until it stops seeming random and begins to mean something.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I try to convince people to take another look. The problem is that no one is paying attention in the right way.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I get stuck analyzing it for hours because the possibility of a hidden meaning won't leave my mind.", w: { Heir: 3, Knight: 2 } },
        { txt: "I use my interpretation to change the thing's value; if everyone thought it was irrelevant, maybe I can flip that.", w: { Witch: 3, Maid: 2 } },
        { txt: "I discard the old importance assigned to it and replace it with an interpretation that makes more sense to me.", w: { Prince: 3, Witch: 2 } }
    ]},
    { t: "16. How do you handle the need to be 'seen' or validated by others in your daily life?", opts: [
        { txt: "I feel I constantly need to prove my worth; if I’m not being noticed, I lose my relevance.", w: { Page: 3, Knight: 3, Maid: 1, Prince: -2 } },
        { txt: "I feel assaulted by constant attention. I prefer anonymity and the shadows.", w: { Prince: 3, Rogue: 2, Thief: -3 } },
        { txt: "I don't care whether I'm seen or not. Sometimes I'm the center of attention, sometimes I'm invisible. I let things happen naturally.", w: { Bard: 3, Heir: 2 } },
        { txt: "I prefer for the credit to go to what I produce or to the group; I hate being the main focus.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I use my image and visibility only as a strategic tool to get what I want.", w: { Witch: 3, Thief: 3 } }
    ]},
    { t: "17. When faced with several conflicting versions of the same story, how do you decide which one to believe?", opts: [
        { txt: "I seek the factual and logical version. Truth should not be shaped by convenience.", w: { Seer: 3, Mage: 3, Witch: -2 } },
        { txt: "I choose the version that best serves my goals or creates the most useful narrative.", w: { Witch: 3, Thief: 2, Seer: -2 } },
        { txt: "I don't believe any of them. I let people fight over the 'truth' while I watch from afar, amused by the confusion.", w: { Bard: 3, Rogue: 1, Knight: -1 } },
        { txt: "I believe there is no absolute truth; I let each version flow and allow time to reveal which one carries the most weight.", w: { Heir: 3, Bard: 1 } },
        { txt: "I adopt the version that demands the most responsibility and action from me, using it as a map.", w: { Knight: 3, Page: 2 } }
    ]},
    { t: "18. You discover that a frequently repeated story about you is distorting what actually happened.", opts: [
        { txt: "I gather the correct version, details, and context to reconstruct the narrative more accurately.", w: { Maid: 3, Seer: 2 } },
        { txt: "I use the distorted version to my advantage if it puts me in a more important position.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I destroy the story's importance. If it no longer serves a purpose, I’d rather it cease to mean anything at all.", w: { Prince: 3, Bard: 2, Maid: -1 } },
        { txt: "I feel insecure about correcting it, as it might look like I’m trying to draw too much attention to myself.", w: { Rogue: 3, Page: 2 } },
        { txt: "I analyze how the distortion spread, because understanding the flow of information helps control the damage.", w: { Mage: 3, Knight: 2 } }
    ]},
    { t: "19. You are in a heated argument where you know, with 100% certainty, that the other person is wrong about a technical or historical fact. How do you act?", opts: [
        { txt: "I interrupt and present the evidence. I can't stand seeing misinformation thrive when the truth is available.", w: { Sylph: 3, Maid: 2, Knight: 2, Prince: -2 } },
        { txt: "I let them keep saying whatever they want. Other people's ignorance is irrelevant to me.", w: { Prince: 3, Bard: 1, Seer: -2 } },
        { txt: "I let the person spout nonsense. It's amusing to see someone so confident while being wrong, and I'm not going to waste my energy correcting them.", w: { Bard: 3, Thief: 1, Knight: -1 } },
        { txt: "I use their error to my strategic advantage, letting them expose themselves until I use the truth to disarm them.", w: { Thief: 3, Witch: 2, Seer: 2, Rogue: -2 } },
        { txt: "I try to correct the person subtly, sharing the knowledge as if it were something we are discovering together.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "20. In a tense situation, you realize that information transparency is causing conflict. What is your approach?", opts: [
        { txt: "I maintain that clarity is the only solution. Everything must be brought to light to resolve the problem at its root.", w: { Sylph: 3, Seer: 2, Prince: -3 } },
        { txt: "I believe secrecy is a form of protection; some things should remain in the dark.", w: { Prince: 3, Rogue: 1, Sylph: -3 } },
        { txt: "I drop the truth and walk away. If clarity causes a fight, so be it. Watching the chaos unfold is more interesting.", w: { Bard: 3, Thief: 2, Seer: -1 } },
        { txt: "I organize the information pragmatically, revealing only what is necessary to maintain order.", w: { Maid: 3, Knight: 2 } },
        { txt: "I share the truth in a diluted form, trying to ensure the weight of the information is shared among others.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]}
    ],
    "Void": [
    { t: "1. You discover an intimate secret about an acquaintance that would change everyone's perception of them, but no one else knows it.", opts: [
        { txt: "I reveal the truth immediately. I hate secrets; they are holes in reality that need to be filled with facts.", w: { Prince: 3, Seer: 2 } },
        { txt: "I keep this information as a personal trump card, feeling that hidden knowledge gives me an advantage.", w: { Thief: 3, Witch: 2, Mage: 1 } },
        { txt: "I end up blurting out the secret unintentionally during a casual conversation. I'm not good at keeping things to myself that don't matter much to me.", w: { Bard: 3, Page: 2, Seer: -2 } },
        { txt: "I guard this information with the utmost discretion. If the secret exists, it is because it is meant to remain in the dark.", w: { Maid: 3, Knight: 2, Prince: -1 } },
        { txt: "I observe how this 'unspoken' fact influences interactions, letting the mystery take its natural course.", w: { Mage: 3, Heir: 2, Bard: 1 } }
    ]},
    { t: "2. In a social setting, you notice your contributions are being ignored and you feel like a 'nobody'.", opts: [
		{ txt: "I prefer it that way. I stay in my own corner, invisible, doing my own thing without anyone pestering me.", w: { Bard: 3, Heir: 2, Rogue: 1, Prince: -2 } },
		{ txt: "I embrace the anonymity. There is immense freedom in not being noticed, allowing me to act without the weight of expectation.", w: { Heir: 3, Rogue: 2 } },
		{ txt: "It hurts me, so I start acting with performative competence, trying to prove my worth.", w: { Page: 3, Knight: 2, Maid: 1 } },
		{ txt: "I force my presence. I won't accept being ignored; I make noise or cause a scene so my relevance is noticed.", w: { Prince: 3, Thief: 2, Heir: -2 } },
		{ txt: "I seek out others who are also being excluded and try to create a space where our 'invisibility' isn't uncomfortable.", w: { Sylph: 3, Rogue: 3, Page: 1 } }
    ]},
   { t: "3. You find an old, unnamed folder filled with files lacking dates, authors, or explanations.", opts: [
        { txt: "I investigate metadata, file patterns, and strange omissions to understand what the folder is trying to hide.", w: { Seer: 3, Mage: 2 } },
        { txt: "I claim the files for myself before anyone notices they exist. What remains unknown to others might prove useful.", w: { Thief: 3, Witch: 1, Rogue: -2 } },
        { txt: "I organize the material from scratch, creating names, folders, and context so it ceases to be an incomprehensible void.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I alter the folder's structure to further confuse anyone who might try to trace the contents later.", w: { Witch: 3, Thief: 2 } },
        { txt: "I leave the folder alone. Not everything that is lost needs to regain an owner or an explanation.", w: { Heir: 3, Bard: 1 } }
    ]},
    { t: "4. You notice someone using silence to protect themselves from unfair exposure.", opts: [
        { txt: "I actively protect that silence, deflecting questions and preventing the person from being forcibly dragged out of the shadows.", w: { Knight: 3, Maid: 2 } },
        { txt: "I create a discreet way out for the person, so they don't have to explain themselves or disappear completely.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I use the surrounding confusion to gain an advantage while no one is looking, without directly touching upon their secret.", w: { Thief: 3, Witch: 2 } },
        { txt: "I observe who tries to break the silence and who respects the boundary without needing to know everything.", w: { Seer: 3, Mage: 2 } },
        { txt: "If the silence is hurting others, I try to tear down the curtain and expose what is being hidden.", w: { Prince: 3, Knight: 1 } }
    ]},
    { t: "5. You are on an anonymous forum where no one knows who is who, yet some people begin to gain influence.", opts: [
        { txt: "I use the anonymity to move between different conversations and gain advantages without attaching them to my name.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "I analyze writing patterns, timestamps, and word choices to figure out who might be behind each account.", w: { Seer: 3, Mage: 2 } },
        { txt: "I establish unspoken rules of conduct so that anonymity doesn't just turn into abuse without consequences.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I help new or overlooked users find a space where they can speak without being drowned out by the noise.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I shift my stance, name, and voice depending on the room. If no one knows who I am, I can be whatever the situation calls for.", w: { Witch: 3, Page: 1 } }
    ]},
    { t: "6. An important conversation ends with something clearly left unsaid, yet everyone pretends nothing was left hanging.", opts: [
        { txt: "I pay attention to the shape of the void: who changed the subject, who avoided eye contact, and where the sentence was cut off.", w: { Mage: 3, Seer: 2 } },
        { txt: "I draw out the unsaid indirectly, creating a situation where the truth slips out without it feeling like an interrogation.", w: { Witch: 3, Seer: 1 } },
        { txt: "I use the lingering silence to position myself better, waiting until someone needs me to fill the gap.", w: { Thief: 3, Mage: 1, Rogue: -1 } },
        { txt: "I try to address the discomfort without forcing anyone to reveal what they aren't yet able to say.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I let the gap exist. Sometimes, what remains unsaid explains more than any confession.", w: { Heir: 3, Bard: 1 } }
    ]},
    { t: "7. You accidentally delete an important message, image, or file before realizing its value.", opts: [
        { txt: "I search for traces, backups, cache, partial names, and any digital shadow that remains.", w: { Seer: 3, Mage: 2 } },
        { txt: "I transform the loss into something else, recreating the file's meaning from what I still remember.", w: { Maid: 3, Page: 2 } },
        { txt: "I use the fact that no one else has access to the file to control the version of what was in it.", w: { Thief: 3, Witch: 2, Sylph: -1 } },
        { txt: "I accept that it is gone and try not to violate the void with a false reconstruction.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I feel insecure about admitting the loss, so I try to compensate in silence before anyone notices.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "8. You enter an abandoned place where almost everything has been removed, yet traces of those who lived there remain.", opts: [
        { txt: "I read the marks on the walls, the missing furniture, the stains, and the forgotten objects to imagine what happened there.", w: { Seer: 3, Mage: 2 } },
        { txt: "I take a small object that no one will miss, as if I could carry a piece of that oblivion away with me.", w: { Thief: 3, Rogue: 1 } },
        { txt: "I feel an urge to preserve the place as it is, preventing its last traces from being erased.", w: { Maid: 3, Knight: 2 } },
        { txt: "I completely reimagine the space, thinking of how to transform that abandonment into something else.", w: { Witch: 3, Sylph: 1 } },
        { txt: "I find comfort in the place's emptiness. Without function, owner, or explanation, it seems to breathe more freely.", w: { Heir: 3, Bard: 2 } }
    ]},
    { t: "9. Someone tells you something confusing, contradictory, and full of gaps, expecting you to understand what even they cannot explain.", opts: [
        { txt: "I listen for what is missing from the story—not just what was said—and try to map the absences that shape the account.", w: { Mage: 3, Seer: 2 } },
        { txt: "I help the person give shape to what is hazy, without forcing a clearer truth than what they actually possess.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I pick one of the gaps and use it as a key to steer the conversation in the direction that interests me.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "I create a provisional structure so the person can keep talking, even without understanding everything yet.", w: { Maid: 3, Sylph: 1 } },
        { txt: "I get lost along with the person and begin to doubt whether any version of that story makes sense.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "10. You need to go unnoticed in a situation where drawing attention could work against you.", opts: [
        { txt: "I use anonymity to my advantage, letting others take the spotlight while I get what I need.", w: { Thief: 3, Rogue: 1 } },
        { txt: "I adjust my clothing, posture, speech, and presence to blend into the surroundings without looking like I'm trying.", w: { Witch: 3, Knight: 1 } },
        { txt: "I observe which behaviors go ignored in that place and mimic the pattern until I become part of the background.", w: { Seer: 3, Mage: 2 } },
        { txt: "I get so worried about not being noticed that I end up too stiff, as if my very effort gives me away.", w: { Page: 3, Knight: 2 } },
        { txt: "I shield someone else from the spotlight, diverting attention toward the general background noise instead of them.", w: { Sylph: 3, Rogue: 2 } }
    ]},
    { t: "11. You notice that someone in your group is always doing invisible work that no one ever acknowledges.", opts: [
        { txt: "I try to make that work visible without exposing the person in a way they didn't ask for.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I quietly take on part of that work myself, because some responsibilities simply need to be handled for the group to stay together.", w: { Maid: 3, Knight: 2 } },
        { txt: "I use the invisibility of that work to understand how the group truly sustains itself beneath the surface.", w: { Mage: 3, Seer: 2 } },
        { txt: "I take on the most strategic invisible role, because the one who controls what happens behind the scenes controls more than people realize.", w: { Thief: 3, Witch: 2, Rogue: -1 } },
        { txt: "I think it's unfair, but I don't know how to intervene without making things worse or drawing the wrong kind of attention.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "12. You discover a password, code, or encrypted system protecting something that shouldn't be easy for just anyone to access.", opts: [
        { txt: "I try to understand the logic behind the code, because the way something hides reveals what it's afraid of showing.", w: { Mage: 3, Seer: 2 } },
        { txt: "I break through the protection and take what's hidden before anyone realizes the secret is no longer safe.", w: { Thief: 3, Prince: 1, Sylph: -1 } },
        { txt: "I rewrite the encryption so the secret stays protected—but now according to my own rules.", w: { Witch: 3, Knight: 1 } },
        { txt: "I reinforce the security and notify the people who need to know, without exposing what was being protected.", w: { Knight: 3, Maid: 2, Thief: -1 } },
        { txt: "I create a safe way to reveal only what's necessary without destroying the privacy the code was protecting.", w: { Sylph: 3, Rogue: 2 } }
    ]},
    { t: "13. You're given an important task, but no instructions or clues about how to begin.", opts: [
        { txt: "I start from absolute scratch. If nothing has been built, I'll create my own rules and fill the void myself.", w: { Maid: 3, Witch: 2, Page: 1 } },
        { txt: "I analyze what wasn't said. The silence in the instructions tells me more about the real intentions than the words do.", w: { Mage: 3, Seer: 2, Knight: 1 } },
        { txt: "I refuse to work in the dark. I demand complete clarity before I lift a finger.", w: { Prince: 3, Knight: 2, Heir: -1 } },
        { txt: "I either wing it or don't do it at all. If they couldn't explain it properly, it's their problem when the result comes back empty.", w: { Bard: 3, Heir: 1, Maid: -1 } },
        { txt: "I share the uncertainty with the group, looking for a solution that doesn't depend on clear orders to move forward.", w: { Sylph: 3, Rogue: 2, Heir: 1 } }
    ]},
    { t: "14. A vague and confusing rumor about you starts spreading, but no one can confirm whether it's true or false.", opts: [
        { txt: "I use the mystery to my advantage. I maintain an enigmatic attitude that only confuses people even more.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "I quietly manipulate the narrative, planting new doubts until the original rumor loses all meaning.", w: { Witch: 3, Thief: 2, Mage: 1 } },
        { txt: "I ignore it and focus on helping the people affected by the confusion, becoming a quiet source of stability.", w: { Sylph: 3, Maid: 2, Rogue: 1 } },
        { txt: "I expose where the rumor came from and present the plain facts. I hate when gaps in the truth are used to define me.", w: { Prince: 3, Seer: 2, Mage: 1 } },
        { txt: "I neither confirm nor deny it. I just let people talk. It's funny seeing the ridiculous theories they come up with about me.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "15. You meet someone fascinating, but they're a complete mystery—they never talk about themselves or their intentions.", opts: [
        { txt: "The uncertainty draws me in. I feel like I can learn a lot about the world simply by observing what this person chooses to hide.", w: { Mage: 3, Seer: 2, Heir: 1 } },
        { txt: "I try to break the mystery. I ask direct, intrusive questions because I hate not knowing who I'm dealing with.", w: { Prince: 3, Thief: 2, Witch: 1 } },
        { txt: "I respect the emptiness. I don't feel the need to dig into anyone's life; I'm content with what they choose to show me.", w: { Heir: 3, Rogue: 2, Sylph: 1 } },
        { txt: "I don't really care. If they don't talk, then we can just sit in silence. That's less effort than trying to solve a puzzle.", w: { Bard: 3, Heir: 1, Seer: -2 } },
        { txt: "It makes me suspicious. Without transparency there's no foundation for a relationship, so I either push for clarity or walk away.", w: { Prince: 3, Knight: 2, Page: 1 } }
    ]},
    { t: "16. Something essential to the group has gone missing, and no one knows where it is or how to get it back.", opts: [
        { txt: "I work twice as hard to make up for what's been lost, making sure the group doesn't fall apart.", w: { Maid: 3, Sylph: 2, Knight: 1 } },
        { txt: "I encourage the group to let go. Maybe this loss is an opportunity to leave behind what had become obsolete.", w: { Rogue: 3, Heir: 2, Prince: 1 } },
        { txt: "I trace the absence itself. A missing object leaves clues, and I use that lack of information to find it.", w: { Seer: 3, Mage: 3, Witch: 1 } },
        { txt: "I hadn't even noticed it was gone. And if it's missing, it'll probably turn up eventually. I'm not going to stress over it.", w: { Bard: 3, Heir: 2, Seer: -2 } },
        { txt: "I try to create something new from nothing to replace what was lost, making sure the void doesn't consume us.", w: { Page: 3, Maid: 2, Witch: 1 } }
    ]},
    { t: "17. You do an enormous amount of work behind the scenes, but someone else receives all the public credit.", opts: [
        { txt: "Doesn't matter to me. If someone else gets the credit, then they're the one responsible for keeping that success going. I'm free.", w: { Bard: 3, Heir: 2, Rogue: 2 } },
        { txt: "I don't mind. I actually like that the work was done anonymously; recognition feels more like a burden than a reward.", w: { Rogue: 3, Heir: 2, Thief: -2 } },
        { txt: "That's unacceptable. I make my contribution known and demand recognition. I refuse to be a supporting character in my own work.", w: { Prince: 3, Thief: 2, Heir: -2 } },
        { txt: "I stay silent. My confidence comes from my own competence, and anonymity protects me from unnecessary interference.", w: { Knight: 3, Maid: 2, Page: 1 } },
        { txt: "I use my anonymity to keep helping others selflessly, where no one can watch or judge me.", w: { Sylph: 3, Seer: 2, Rogue: 1 } }
    ]},
    { t: "18. You're faced with a decision where every possible path leads into the unknown, with no guarantee of safety.", opts: [
        { txt: "I trust the flow of uncertainty. I believe the right path will reveal itself as I walk through the darkness.", w: { Heir: 3, Seer: 2, Mage: 1 } },
        { txt: "I try to eliminate every unknown variable before taking action. I hate operating without control over the available information.", w: { Prince: 3, Knight: 2, Heir: -1 } },
        { txt: "I just pick one without overthinking it. If they're all unknown anyway, planning is a waste of time.", w: { Bard: 3, Page: 1 } },
        { txt: "I choose the emptiest path. I'll shape reality as it unfolds, creating something where nothing exists yet.", w: { Page: 3, Witch: 2, Maid: 2 } },
        { txt: "I embrace the uncertainty. The best plan is having no plan at all and letting the void carry us somewhere new.", w: { Heir: 3, Rogue: 2, Mage: 1 } }
    ]},
    { t: "19. You come across a broken object that everyone else considers useless junk, with no value or purpose.", opts: [
        { txt: "I throw it away. If something has no clear purpose, it's just noise that should be removed from my space.", w: { Prince: 3, Knight: 1, Sylph: -1 } },
        { txt: "I lose it again. I'll probably forget where I put it five minutes after picking it up.", w: { Bard: 3, Heir: 1, Seer: -2 } },
        { txt: "I keep it. I feel connected to forgotten things and find comfort in owning what no one else values.", w: { Rogue: 3, Page: 2, Knight: 1 } },
        { txt: "I try to repair it or give it a new purpose. I refuse to accept that anything can be truly useless.", w: { Maid: 3, Sylph: 2, Witch: 2 } },
        { txt: "I leave it where it is. Obsolescence is a natural cycle; there's no need to interfere with what is returning to nothingness.", w: { Heir: 3, Mage: 1 } }
    ]},
    { t: "20. You feel like you don't have a fixed personality, acting only as a reflection of what others expect you to be.", opts: [
        { txt: "It terrifies me. I do everything I can to build a strong identity so no one can ever doubt my existence.", w: { Prince: 3, Page: 2, Knight: 2, Heir: -1 } },
        { txt: "I'm at peace with it. If I'm 'nothing' on the inside, I can become 'anything' on the outside without being trapped by labels.", w: { Heir: 3, Rogue: 2, Sylph: 1 } },
        { txt: "I use that fluidity as a tool. I become whoever I need to be in order to get what I want.", w: { Witch: 3, Thief: 3, Mage: 1 } },
        { txt: "I just go with the flow. It's easier to agree with whatever people think I am than to explain something even I don't fully understand.", w: { Bard: 3, Heir: 2, Page: 1 } },
        { txt: "I observe that emptiness. Understanding that the 'self' is an illusion allows me to see the truths hidden behind everyone else's masks.", w: { Seer: 3, Mage: 3, Sylph: 1 } }
    ]}
	],
    "Mind": [
    { t: "1. You receive a long message from someone who's clearly upset with you. Before replying, you spend several minutes rereading every sentence and trying to predict which response would avoid the worst possible outcome.", opts: [
        { txt: "I rewrite my reply over and over until I've considered every possible reaction. By the time I'm done, I've barely answered at all.", w: { Page: 3, Seer: 2, Knight: 1 } },
        { txt: "I think back to similar conversations that went well and adapt what worked before to fit the current situation.", w: { Thief: 3, Mage: 2 } },
        { txt: "I immediately take control of the conversation's pace, putting pressure on the weakest parts of the other person's argument.", w: { Knight: 3, Prince: 2, Page: -2 } },
        { txt: "I lose patience with all the social theater and say exactly what's on my mind, even knowing it'll probably make everything worse.", w: { Prince: 3, Bard: 2, Sylph: -2 } },
        { txt: "I point out the moral flaw in the situation so everyone else has to confront the weight of the choice, keeping myself out of direct responsibility.", w: { Rogue: 3, Heir: 2 } }
    ]},
    { t: "2. You notice that two people close to you have fallen out because they completely misunderstood each other's intentions. Neither of them seems willing to back down.", opts: [
        { txt: "I try to reorganize the conversation more rationally, translating what each person probably meant before things spiral any further.", w: { Sylph: 3, Seer: 2, Maid: 1 } },
        { txt: "Even when things get heated, I can distance myself emotionally enough to weigh both sides before acting.", w: { Heir: 3, Knight: 1 } },
        { txt: "As the argument escalates, I keep interrupting because it's painfully obvious where this is heading, and nobody else seems to notice.", w: { Prince: 3, Seer: 2, Bard: -2 } },
        { txt: "I stay out of it. Fights like these usually burn themselves out once everyone gets tired of reacting on impulse.", w: { Bard: 3, Heir: 1, Sylph: -2 } },
        { txt: "I change the way I approach each of them, trying to lower their guard one person at a time.", w: { Witch: 3, Thief: 2 } }
    ]},
    { t: "3. A coworker has made a serious mistake, and now the entire group is being blamed. How do you respond?", opts: [
        { txt: "I use their mistake to highlight my own competence, making sure I come out of the situation in a stronger position.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "I take on part of the blame—or spread the responsibility around—so the consequences don't destroy their career.", w: { Rogue: 3, Sylph: 2, Prince: -2 } },
        { txt: "I don't interfere. They made the mistake, so whatever follows is simply the natural consequence.", w: { Bard: 3, Mage: 1, Maid: -2 } },
        { txt: "I quietly work twice as hard behind the scenes to fix the problem without expecting any recognition.", w: { Maid: 3, Knight: 2 } },
        { txt: "I analyze exactly how the mistake happened and treat it as a case study for improving future decisions.", w: { Mage: 3, Seer: 2, Witch: 1 } }
    ]},
    { t: "4. When you're planning something important—like changing careers—what's your usual way of thinking?", opts: [
        { txt: "I build contingency plans for every possible failure. If I can't see the road ahead, I feel like everything might collapse.", w: { Knight: 3, Seer: 2 } },
        { txt: "I try not to overthink it. If I trust my instincts, everything else tends to fall into place on its own.", w: { Prince: 3, Bard: 2, Maid: -3 } },
        { txt: "I don't really plan. I keep putting it off until the decision becomes unavoidable—or someone else makes it for me.", w: { Bard: 3, Rogue: 2, Knight: -2 } },
        { txt: "I ask for advice from several different people, then try to weave their perspectives into a fair strategy.", w: { Sylph: 3, Heir: 2 } },
        { txt: "I look for shortcuts or ways to bend the system in my favor, aiming for the best possible outcome with the least effort.", w: { Thief: 3, Witch: 3, Rogue: -2 } }
    ]},
    { t: "5. You realize that both available options will lead to unavoidable problems, but one of them will keep things more stable in the long run.", opts: [
        { txt: "I choose the more stable option, even if I know some people won't be happy with it.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I keep replaying every possibility in my head because I'm terrified I'll miss one obvious detail that changes everything.", w: { Page: 3, Knight: 2, Seer: 1 } },
        { txt: "I try to reshape the situation entirely, looking for a third option that avoids the worst consequences of both.", w: { Witch: 3, Maid: 2 } },
        { txt: "I end up taking responsibility for the decision myself because trusting other people to choose correctly feels too risky.", w: { Prince: 3, Thief: 2, Bard: -2 } },
        { txt: "I accept that every meaningful choice benefits someone while hurting someone else, so I'd rather make sure I'm not the one who loses.", w: { Thief: 3, Mage: 2, Sylph: -2 } }
    ]},
    { t: "6. You notice that someone close to you is making a bad decision, but they're completely convinced they're being rational.", opts: [
        { txt: "Instead of arguing against the decision itself, I try to change the way they're looking at the situation so other possibilities become visible.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I point out that they're not nearly as objective as they think. They've already made up their mind—they're just dressing it up with good-sounding reasons.", w: { Prince: 3, Mage: 2 } },
        { txt: "I avoid telling them what they should do. I'd rather stay quiet than find out later that my judgment was wrong.", w: { Rogue: 3, Page: 2, Prince: -2 } },
        { txt: "I pay attention to their reasoning so I can understand what they value, then keep that in mind for similar decisions I might face later.", w: { Thief: 3, Mage: 2 } },
        { txt: "I try to show that I can look at the situation logically too, but I end up making it obvious that I'm personally bothered by it.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "7. You're playing a complex board game for the first time, and you realize the rules allow for very different strategies.", opts: [
        { txt: "I watch a few rounds first until I naturally understand how the decisions connect, instead of trying to master every rule immediately.", w: { Heir: 3, Seer: 1 } },
        { txt: "I start hunting for loopholes—a combination of rules nobody else seems to be taking advantage of yet.", w: { Witch: 3, Thief: 2 } },
        { txt: "I explain the rules to anyone who's feeling lost, making sure everyone can actually enjoy the game.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I'm afraid of making a stupid move, so I spend way too much time asking whether I've understood every little detail correctly.", w: { Page: 3, Rogue: 1 } },
        { txt: "I share strategies and suggestions to keep the game balanced, even if that means giving up my own advantage.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
    ]},
    { t: "8. You're choosing a route in a game or interactive story, knowing each decision could lock you out of future scenes.", opts: [
        { txt: "I follow the path that feels true to the character I'm roleplaying, even without knowing where it'll lead.", w: { Heir: 3, Page: 1 } },
        { txt: "I try to predict which choices will unlock the most possibilities later, almost like mapping out a decision tree.", w: { Seer: 3, Mage: 2 } },
        { txt: "I look for ways to bend the system so I can see more paths than the game intended.", w: { Witch: 3, Thief: 1 } },
        { txt: "I save the game before every important choice because I don't trust my own ability to predict the outcome.", w: { Page: 3, Knight: 2 } },
        { txt: "I choose whichever route leaves my favorite characters—or allies—with the least long-term damage.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "9. A friend asks you to help them choose between two options, but it's obvious they really want you to decide for them.", opts: [
        { txt: "I lay out the pros, cons, and consequences so they can make the choice themselves instead of handing me the responsibility.", w: { Sylph: 3, Maid: 2 } },
        { txt: "If they're completely stuck, I'll make the call for them. Someone has to make a move before the situation gets worse.", w: { Knight: 3, Prince: 1, Page: -1 } },
        { txt: "I hand the decision back to them in a clearer way, separating what's fear, what's desire, and what's an actual consequence.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "Their hesitation tells me a lot about the kinds of choices they avoid. I quietly file that pattern away for future reference.", w: { Mage: 3, Thief: 1 } },
        { txt: "I worry about influencing them too much and ending up blamed if things go wrong.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "10. You join a group where everyone seems to have an unspoken role: leader, comedian, mediator, punching bag, advisor...", opts: [
        { txt: "I quickly notice which role nobody's filling and naturally slip into it without really thinking.", w: { Heir: 3, Maid: 1 } },
        { txt: "I pay attention to who's making decisions, who's pulling strings behind the scenes, and who seems to have the least freedom.", w: { Seer: 3, Mage: 2 } },
        { txt: "I adjust my behavior depending on which role gives me the most room to maneuver within that group.", w: { Witch: 3, Thief: 2 } },
        { txt: "I try to redistribute those roles so no one gets trapped in the same uncomfortable position forever.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I spend too much time trying to figure out what role everyone expects me to play, and I end up acting unnaturally.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "11. You realize an argument isn't really about who's right, but about which set of rules each person believes they're playing by.", opts: [
        { txt: "I try to identify the hidden rules behind the conversation so everyone understands what game they're actually playing.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I use the clash between their different systems of rules to steer the conversation onto ground where I have the advantage.", w: { Witch: 3, Thief: 2, Rogue: -1 } },
        { txt: "I accept that each person is operating under their own internal logic and try to move between them instead of forcing a single framework.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I get stuck trying to figure out which set of rules is the 'real' one before I say anything at all.", w: { Page: 3, Mage: 2 } },
        { txt: "I build a middle ground so the conversation can continue without anyone having to abandon their own logic entirely.", w: { Maid: 3, Sylph: 2 } }
    ]},
    { t: "12. You need to put together a schedule, but time isn't the problem. It's deciding the logical order of the steps.", opts: [
        { txt: "I arrange the steps as a chain of cause and effect, making each action naturally prepare the next.", w: { Maid: 3, Knight: 2 } },
        { txt: "I mentally test different sequences until I find the one that's least likely to create problems later.", w: { Seer: 3, Mage: 2 } },
        { txt: "I let the order emerge as I work. Sometimes the next step only becomes obvious after the previous one exists.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I reorganize the process into a smarter route than the standard order suggests.", w: { Witch: 3, Thief: 1 } },
        { txt: "Overwhelmed by too many possible orders, I end up copying an existing template even if I'm not convinced it fits.", w: { Page: 3, Bard: 1 } }
    ]},
    { t: "13. You discover that an unfair rule is being enforced differently depending on who breaks it.", opts: [
        { txt: "I map out the pattern behind the exceptions to understand who the system protects and who it punishes.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use the inconsistency to open up a loophole that other people can benefit from as well.", w: { Rogue: 3, Witch: 2 } },
        { txt: "I change the way the group handles the rule, creating a process that's fairer than the official one.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I take advantage of the exception if it finally works in my favor. I'm not the one who made the system hypocritical.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I'm afraid that if I point out the injustice, I'll become the next example.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "14. You're trying to understand someone who always seems to behave differently depending on the situation.", opts: [
        { txt: "That feels perfectly natural to me. People take on different roles depending on what the situation calls for—I don't need to pin down a single 'true' version of them.", w: { Heir: 3, Seer: 1 } },
        { txt: "I compare the different situations to figure out what conditions bring out each side of them.", w: { Mage: 3, Seer: 2 } },
        { txt: "I try to help them notice those patterns without making them feel fake or inconsistent.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I use that flexibility to predict which approach is most likely to work on them.", w: { Thief: 3, Witch: 1 } },
        { txt: "It makes me uneasy because I can't tell which version of them is the 'real' one—or what the right way to respond is.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "15. A group plan is falling apart because everyone is making individually good decisions that become bad once they're combined.", opts: [
        { txt: "I reorganize the decision-making process so that one person's choice can't undermine the group's overall outcome.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I redistribute responsibilities and options so each person makes decisions where they'll do the least harm and the most good.", w: { Rogue: 3, Knight: 1 } },
        { txt: "I study the entire web of consequences until I understand where the decisions are working against each other.", w: { Seer: 3, Mage: 2 } },
        { txt: "I manipulate certain parts of the plan to steer people toward better choices without having to convince everyone directly.", w: { Witch: 3, Thief: 2, Sylph: -1 } },
        { txt: "I genuinely try to help, but I get lost once I realize the right choice for one person can be the wrong choice for the group.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "16. You realize you're always choosing the most rational option, even when it leaves you unhappy.", opts: [
        { txt: "I try to understand which inner rule is making my decisions before I even have the chance to feel what I actually want.", w: { Mage: 3, Seer: 2 } },
        { txt: "I look for a choice that preserves my logic without completely ignoring my own needs.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept that this is simply how my mind works. Not every good decision has to feel emotionally satisfying.", w: { Heir: 3, Knight: 1 } },
        { txt: "I deliberately go against my own pattern just to prove I'm not a slave to my own logic.", w: { Witch: 3, Prince: 1 } },
        { txt: "I get stuck between doing what makes sense and admitting that maybe I don't even know how to choose based on what I truly want.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "17. You're faced with a choice where every possible path leads to some kind of loss. How does your mind process the paralysis?", opts: [
        { txt: "I choose the path that preserves the logic of the larger system, even if it hurts me. A rational sacrifice.", w: { Maid: 3, Knight: 2, Prince: -2 } },
        { txt: "I refuse to choose. I let chance decide because I don't want to carry the weight of the consequences.", w: { Bard: 3, Heir: 2, Witch: -2 } },
        { txt: "I try to force a 'third option' into existence by manipulating the situation instead of accepting the choices I've been given.", w: { Witch: 3, Thief: 2 } },
        { txt: "I analyze which loss will be more useful in the long run. If something has to be destroyed, let it be whatever serves the least purpose.", w: { Prince: 3, Mage: 2 } },
        { txt: "I freeze and do nothing. If I never make the choice, then technically the outcome isn't my fault.", w: { Bard: 3, Page: 2, Knight: -2 } }
    ]},
    { t: "18. You enter a new environment where everyone seems to follow social rules that nobody ever explained.", opts: [
        { txt: "I watch how people behave, copy the basics so I don't stand out, and gradually adjust as I get a better feel for the atmosphere.", w: { Heir: 3, Maid: 2 } },
        { txt: "I quickly try to identify which behaviors are rewarded and which are punished, because understanding those rules saves trouble later.", w: { Mage: 3, Seer: 2 } },
        { txt: "I stay polite and neutral until I understand what role makes sense in that environment. It's better to build a safe foundation before doing too much.", w: { Maid: 3, Knight: 2 } },
        { txt: "Even while trying to fit in, I become painfully aware of every gesture and every word, as if any small mistake could expose that I have no idea what I'm doing.", w: { Knight: 3, Page: 2 } },
        { txt: "I act like myself until someone gives me a real reason to change. I don't like pretending to understand rules that nobody was willing to explain.", w: { Bard: 3, Prince: 2, Maid: -2 } }
    ]},
    { t: "19. You realize you've been putting off an important reply because any choice of words could completely change the course of the situation.", opts: [
        { txt: "I organize what I need to say into clear parts: the facts, the consequences, and the decision that follows from them.", w: { Maid: 3, Seer: 2 } },
        { txt: "I reread it over and over, looking for anything that could be misunderstood before I finally hit send.", w: { Knight: 3, Seer: 2 } },
        { txt: "I can tell where the conversation is most sensitive, but I struggle to turn that insight into a response the other person will actually understand.", w: { Seer: 3, Rogue: 2 } },
        { txt: "I try to strip away the emotional weight of the situation and respond only to what genuinely needs to be resolved.", w: { Sylph: 3, Maid: 2, Bard: -2 } },
        { txt: "I answer in whatever way feels most honest to me in that moment. Calculating every possible consequence would only make the conversation feel artificial.", w: { Bard: 3, Prince: 1, Knight: -2 } }
    ]},
    { t: "20. You need to ask someone for an important favor. Before the conversation, what's your most natural instinct?", opts: [
        { txt: "I think about how they're likely to react and adjust my approach to maximize my chances of getting what I need.", w: { Witch: 3, Thief: 2 } },
        { txt: "I carefully organize what I'm going to say so the conversation follows the clearest and most effective path.", w: { Maid: 3, Knight: 2 } },
        { txt: "I imagine so many possible outcomes that I end up taking longer than I'd like to actually start the conversation.", w: { Page: 3, Mage: 2 } },
        { txt: "I begin without a fixed plan and adjust my approach as I see how the other person responds.", w: { Heir: 3, Rogue: 2 } },
        { txt: "I'd rather not rehearse anything. If I overthink it, the conversation loses its spontaneity.", w: { Bard: 3, Prince: 1 } }
    ]}
	],
   "Heart": [
    { t: "1. You find yourself becoming really interested in something pretty niche, but you know the people around you would probably think it's weird.", opts: [
        { txt: "I keep it to myself or play it off as a joke. I don't want a personal interest becoming evidence that I'm 'weird.'", w: { Rogue: 3, Bard: 2, Heir: -2 } },
        { txt: "I embrace it naturally. If it's part of who I am now, I don't see any reason to be ashamed of it.", w: { Heir: 3, Maid: 2, Rogue: -2 } },
        { txt: "I get so excited talking about it that I probably end up sharing way more than anyone actually asked for.", w: { Page: 3, Maid: 1 } },
        { txt: "I make it a visible part of my identity until people naturally start associating it with me.", w: { Maid: 3, Heir: 1 } },
        { txt: "I try to get someone else into it too. Maybe they just need to let themselves enjoy it the way I do.", w: { Sylph: 3, Witch: 2 } }
    ]},
    { t: "2. Someone close to you is clearly hurting, but they keep insisting they're fine while becoming more and more defensive.", opts: [
        { txt: "I tell them they need to admit what they're feeling before it comes out in an even worse way.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I recognize the kind of wound behind their reaction because I've felt something similar myself.", w: { Mage: 3, Seer: 2 } },
        { txt: "I try to help them stop clinging so tightly to that emotion. Feeling something doesn't mean letting it control everything.", w: { Prince: 3, Knight: 2, Heir: -2 } },
        { txt: "I avoid digging too deeply into it. Other people's repressed emotions tend to pull me into places I'd rather not revisit.", w: { Bard: 3, Rogue: 2, Sylph: -2 } },
        { txt: "I subtly change the way I talk to them to draw out a more honest reaction, even if they think they reached it on their own.", w: { Witch: 3, Mage: 1 } }
    ]},
    { t: "3. You meet someone with an incredibly strong personality—the kind of person who dominates a room just by being there.", opts: [
        { txt: "I borrow the traits that make them so magnetic and gradually weave them into my own personality until they feel natural.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "I pay attention to what their presence reveals about the insecurities and desires of everyone around them.", w: { Seer: 3, Mage: 2 } },
        { txt: "I try to figure out whether I genuinely admire them, or if I just want the effect they have on other people.", w: { Mage: 3, Seer: 2, Thief: 1 } },
        { txt: "I'm suspicious of the idea that they're somehow 'special,' and I try to show that nobody is truly that unique.", w: { Prince: 3, Bard: 1 } },
        { txt: "I let their presence affect me without resisting it too much. Some people simply change the atmosphere wherever they go.", w: { Heir: 3, Page: 1 } }
    ]},
    { t: "4. You notice that someone has started copying the way you talk, your tastes, or your personal style.", opts: [
        { txt: "It annoys me because it's not just a style—it's a part of me being worn like a costume.", w: { Prince: 3, Thief: 1 } },
        { txt: "I change my own style before they can catch up. If they want to imitate me, they'll always be chasing an older version.", w: { Witch: 3, Thief: 2 } },
        { txt: "I try to understand what they're actually trying to become by imitating me.", w: { Seer: 3, Mage: 2 } },
        { txt: "I act like it doesn't bother me, but I start hiding parts of myself so I don't have to watch them become someone else's performance.", w: { Rogue: 3, Bard: 2 } },
        { txt: "I take it as proof that my style has value. If people are copying me, I must be doing something right.", w: { Thief: 3, Page: 2, Rogue: -2 } }
    ]},
    { t: "5. You create a character, avatar, or online persona that starts feeling more interesting than your real self.", opts: [
        { txt: "Little by little, that persona becomes my main way of existing. It feels more like 'me' than my everyday self does.", w: { Witch: 3, Heir: 2 } },
        { txt: "I get stuck between wanting people to see me as that persona and feeling like I'm deceiving everyone.", w: { Page: 3, Mage: 1 } },
        { txt: "I examine which parts of myself that persona expresses better than I can directly.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use the persona to attract attention, affection, and fascination that I'd struggle to earn by being completely genuine.", w: { Thief: 3, Witch: 2 } },
        { txt: "I get rid of the persona once I realize it's starting to replace my real identity.", w: { Prince: 3, Knight: 1, Heir: -1 } }
    ]},
    { t: "6. Someone tells you they know you better than you know yourself.", opts: [
        { txt: "I react badly. Nobody has the right to claim ownership over my identity and explain me as if I were something to be analyzed.", w: { Prince: 3, Knight: 2 } },
        { txt: "I use their perception to reshape the image I project, taking advantage of what they already see in me.", w: { Witch: 3, Thief: 2 } },
        { txt: "I'm curious to know what pattern of mine became so obvious from the outside.", w: { Seer: 3, Mage: 2 } },
        { txt: "Part of me wants to believe them. Maybe accepting a ready-made identity is easier than building one myself.", w: { Page: 3, Rogue: 1 } },
        { txt: "If their interpretation benefits me, I embrace it. If someone sees something powerful in me, maybe I can make it true.", w: { Thief: 3, Heir: 1 } }
    ]},
    { t: "7. You realize you're falling in love more with the idea you've created of someone than with the person they actually are.", opts: [
        { txt: "I try to separate the real person from my fantasy before I start treating my projection as reality.", w: { Mage: 3, Seer: 2 } },
        { txt: "I hold onto the fantasy for as long as it still feeds something inside me. Sometimes what I feel matters more than who they really are.", w: { Thief: 3, Bard: 2, Sylph: -1 } },
        { txt: "I change the way I approach them so I can discover who they are outside the role I've imagined for them.", w: { Witch: 3, Seer: 1 } },
        { txt: "I'm embarrassed that I projected so much of myself onto someone who may never have existed that way.", w: { Page: 3, Rogue: 2 } },
        { txt: "I cut the idealization off completely. If the image isn't real, I don't want to keep feeding that emotional lie.", w: { Prince: 3, Knight: 1, Bard: -1 } }
    ]},
    { t: "8. You join a conversation where everyone is trying to prove they're more authentic than everyone else.", opts: [
        { txt: "I realize the competition over authenticity has simply become another social mask—just a more sophisticated one.", w: { Seer: 3, Mage: 2 } },
        { txt: "I position myself as the most honest person in the room, even if that overshadows everyone else's sincerity.", w: { Thief: 3, Prince: 1, Rogue: -1 } },
        { txt: "I shift the mood of the conversation so people stop performing depth and start speaking more naturally.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I become insecure because I don't know whether the most authentic version of me would seem deep enough.", w: { Page: 3, Rogue: 1 } },
        { txt: "I refuse to play along. Turning the self into a competition only makes everyone less genuine.", w: { Prince: 3, Heir: 1, Thief: -1 } }
    ]},
    { t: "9. Someone close to you starts acting as though their suffering is deeper and more genuine than everyone else's.", opts: [
        { txt: "I try to understand what need for identity lies behind their attachment to that pain.", w: { Seer: 3, Mage: 2 } },
        { txt: "I use the intensity of my own emotions to take away their monopoly on depth in the conversation.", w: { Thief: 3, Page: 1, Rogue: -1 } },
        { txt: "I try to help make their pain less central to the way they define themselves.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I put an end to the dramatization once it starts drowning out everyone else's feelings.", w: { Prince: 3, Knight: 2, Sylph: -1 } },
        { txt: "It makes me uncomfortable because I understand the urge to use pain as proof that you exist.", w: { Mage: 3, Rogue: 1 } }
    ]},
    { t: "10. You realize a compliment someone gives you isn't really about who you are—it's about a convenient image of you.", opts: [
        { txt: "I accept the compliment anyway and make use of that image if it makes me seem more desirable or admirable.", w: { Thief: 3, Witch: 1, Rogue: -1 } },
        { txt: "I try to correct them, because being loved for a false version of myself feels worse than not being loved at all.", w: { Prince: 3, Seer: 1 } },
        { txt: "I examine which part of me was simplified to fit into that person's perception.", w: { Seer: 3, Mage: 2 } },
        { txt: "I subtly change the way I present myself so they can see a more genuine layer of who I am, without confronting them directly.", w: { Witch: 3, Maid: 1 } },
        { txt: "I'm torn between appreciating the validation and feeling like it doesn't really belong to me.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "11. You notice that your personality changes quite a bit depending on who's watching.", opts: [
        { txt: "I see it as a skill. Each person gets the version of me that works best for that particular relationship.", w: { Witch: 3, Thief: 2 } },
        { txt: "I try to figure out which version of me remains when there's nobody left to impress.", w: { Mage: 3, Seer: 2 } },
        { txt: "I'm afraid there may not be a 'real me' underneath all those adaptations.", w: { Page: 3, Rogue: 1 } },
        { txt: "I'm perfectly comfortable with it. Being the exact same person all the time feels more artificial than changing.", w: { Heir: 3, Bard: 1 } },
        { txt: "I use those different versions of myself to gain affection, opportunities, or influence where my unfiltered self wouldn't be enough.", w: { Thief: 3, Witch: 2, Rogue: -1 } }
    ]},
    { t: "12. Someone starts telling the story of your shared past in a way that turns you into a supporting character in their narrative.", opts: [
        { txt: "I take the story back and make it clear where my own desires, pain, and choices were erased.", w: { Thief: 3, Prince: 2, Rogue: -1 } },
        { txt: "I reshape the story so everyone is portrayed as a person with their own inner life, not just as a role in someone else's journey.", w: { Maid: 3, Sylph: 2, Thief: -1 } },
        { txt: "I notice which parts of me they had to simplify in order to make their version of the story work.", w: { Seer: 3, Mage: 2 } },
        { txt: "From that point on, I change the way I present myself so that interpretation won't stick.", w: { Witch: 3, Knight: 1 } },
        { txt: "It makes me so uncomfortable that I start wondering whether my own version of the story is even strong enough to compete.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "13. You realize you've been living as a version of yourself that was shaped to please someone important to you.", opts: [
        { txt: "I consciously begin building an identity that's truly mine, even if I'm still not sure who I am without that person's influence.", w: { Maid: 3, Rogue: 2 } },
        { txt: "I cut that false version of myself away all at once. I'd rather seem cold or ungrateful than keep performing something I don't truly feel.", w: { Prince: 3, Bard: 2, Maid: -1 } },
        { txt: "I struggle to let it go because part of me still wants that person's approval.", w: { Rogue: 3, Maid: 1 } },
        { txt: "I gradually reshape my personality until it genuinely feels like mine, even if it began as someone else's influence.", w: { Witch: 3, Heir: 2 } },
        { txt: "I pretend it doesn't bother me, but inside I grow emptier and more frustrated over time.", w: { Bard: 3, Knight: 1, Sylph: -1 } }
    ]},
    { t: "14. You join a group where someone is already known for having exactly the kind of charisma or style you've always wanted.", opts: [
        { txt: "I try to find my own way to stand out instead of competing directly with them.", w: { Maid: 3, Rogue: 2, Thief: -2 } },
        { txt: "I take whatever makes them so memorable and push it even further until that trait feels more like mine than theirs.", w: { Thief: 3, Page: 2, Rogue: -2 } },
        { txt: "I quietly observe what makes them so captivating, trying to understand what desire or insecurity they awaken in other people.", w: { Seer: 3, Mage: 2 } },
        { txt: "I'm skeptical of their whole aura and try to show that nobody is as special as they seem.", w: { Prince: 3, Bard: 2 } },
        { txt: "I feel intimidated and try to hide how much I wish I had that same kind of presence.", w: { Rogue: 3, Knight: 1, Thief: -2 } }
    ]},
    { t: "15. You feel a strong, irrational urge to make a decision, even though you can't really explain why.", opts: [
        { txt: "I trust the impulse. If something inside me is pulling this hard, there's probably some truth behind it.", w: { Heir: 3, Page: 2 } },
        { txt: "I try to understand where the desire is coming from before deciding whether it's truly mine or just a passing reaction.", w: { Mage: 3, Seer: 2 } },
        { txt: "I shut the impulse down before it can take control. A strong feeling isn't enough to justify a decision.", w: { Prince: 3, Knight: 2, Heir: -2 } },
        { txt: "I use that desire as fuel to act, even if I'm still unsure whether it's morally the right thing to do.", w: { Knight: 3, Mage: 2 } },
        { txt: "I become overly certain and act as though that feeling is destiny, even though I'm not ready to deal with everything it might bring.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "16. A friend is clearly ashamed of a part of their personality that's completely genuine.", opts: [
        { txt: "I try to help them see the beauty in that part of themselves, even if I end up coddling them a little too much.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I talk about my own quirks to create a space where they feel safe opening up too.", w: { Heir: 3, Rogue: 2 } },
        { txt: "It makes me uncomfortable because I recognize a shame that's a lot like my own.", w: { Mage: 3, Rogue: 2 } },
        { txt: "I try to change the way they see that part of themselves, as if it could become a strength instead of a flaw.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I end up making the moment more emotionally intense than it needed to be, trying to prove they're loved.", w: { Page: 3, Sylph: 2 } }
    ]},
    { t: "17. You notice someone trying to suppress something they're passionate about just to seem more rational or mature.", opts: [
        { txt: "I try to rekindle that passion, reminding them that caring deeply about something isn't childish.", w: { Sylph: 3, Heir: 2, Prince: -2 } },
        { txt: "The idea irritates me. Thinking that strong emotions make someone weak just feels like emotional cowardice.", w: { Prince: 3, Bard: 2 } },
        { txt: "I understand the impulse to hide it. Sometimes we learn to keep what we love to ourselves so it won't become a target.", w: { Rogue: 3, Mage: 2 } },
        { txt: "I try to lead by example, showing that it's possible to be passionate without apologizing for it.", w: { Knight: 3, Maid: 2 } },
        { txt: "It scares me a little, because I also tend to bottle up my passions until they eventually explode.", w: { Bard: 3, Rogue: 2, Sylph: -1 } }
    ]},
    { t: "18. You quickly fall in love with a new person, idea, or possibility.", opts: [
        { txt: "I dive in without much hesitation. If it's awakened something genuine in me, I don't want to pretend I'm indifferent.", w: { Heir: 3, Page: 2, Prince: -2 } },
        { txt: "I try to keep my feelings in check because I'm afraid of overwhelming people or coming across as too emotional.", w: { Rogue: 3, Knight: 2 } },
        { txt: "I get attached far too quickly, showing a level of closeness that probably hasn't been earned yet.", w: { Page: 3, Bard: 2 } },
        { txt: "I turn that passion into action—I make plans, create things, and try to make it a real part of my life.", w: { Maid: 3, Knight: 2 } },
        { txt: "I try to figure out whether this passion is truly mine or if I've simply been swept up in someone else's desire.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "19. You realize a conversation has become far too detached for something that clearly involves important feelings.", opts: [
        { txt: "I try to bring the conversation back to what everyone is actually feeling, not just what seems logical to say.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I'm tempted to end the conversation altogether. If nobody can talk about feelings without everything falling apart, maybe it's better not to open that door.", w: { Prince: 3, Bard: 2, Sylph: -2 } },
        { txt: "I notice who's hiding a wound behind their calm demeanor and try to understand what they're leaving unsaid.", w: { Seer: 3, Mage: 2 } },
        { txt: "I end up bursting out with everything I've been holding back, because the emotional distance makes me feel invisible.", w: { Bard: 3, Page: 2, Knight: -1 } },
        { txt: "I use my own feelings as a starting point, but I try to stay grounded so it doesn't turn into nothing but venting.", w: { Knight: 3, Maid: 2 } }
    ]},
    { t: "20. Someone tells you you're too intense about the things you love.", opts: [
        { txt: "I don't feel particularly embarrassed. Loving something half-heartedly just to seem well-adjusted has never made sense to me.", w: { Heir: 3, Maid: 2, Rogue: -2 } },
        { txt: "I become defensive and try to prove that my intensity is an essential part of who I am.", w: { Page: 3, Prince: 2 } },
        { txt: "I pretend it doesn't bother me, but afterward I keep wondering if I should hide that side of myself more.", w: { Rogue: 3, Bard: 2 } },
        { txt: "I use that intensity to draw other people in. When I love something, I want that enthusiasm to spread to everyone around me.", w: { Maid: 3, Sylph: 2, Thief: 1 } },
        { txt: "I try to rein in that intensity before it makes me dependent, ridiculous, or easy to manipulate.", w: { Prince: 3, Knight: 2, Heir: -2 } }
    ]}
	],
   "Hope": [
    { t: "1. Someone invites you to join an idea that's a little absurd, but they're clearly and genuinely excited about it.", opts: [
        { txt: "I say yes before I overthink it. If they believe in it that much, it's probably worth giving it a chance.", w: { Page: 3, Heir: 2, Prince: -2 } },
        { txt: "I try to figure out whether it's genuine enthusiasm or just a fantasy that'll fall apart at the first obstacle.", w: { Mage: 3, Seer: 2 } },
        { txt: "I encourage them and try to get other people on board too. Sometimes all someone needs is permission to begin.", w: { Sylph: 3, Maid: 2, Prince: -2 } },
        { txt: "I'll support it if it makes sense to me, but I won't pretend to believe in something just to keep everyone's spirits up.", w: { Prince: 3, Knight: 2, Sylph: -2 } },
        { txt: "I reshape the idea into something more people can believe in, even if it means changing the original dream a little.", w: { Witch: 3, Sylph: 2 } }
    ]},
    { t: "2. You realize you're waiting for someone else's approval before starting something you genuinely want to do.", opts: [
        { txt: "I stay stuck until someone gives me the green light. If nobody says I can, it feels wrong to move forward on my own.", w: { Maid: 3, Rogue: 2, Prince: -2 } },
        { txt: "I try to convince myself I deserve to try, but part of me still feels like the opportunity is too good to be real.", w: { Rogue: 3, Page: 2 } },
        { txt: "I create my own reason to move forward. If I need a green light, maybe it has to come from me.", w: { Maid: 3, Witch: 2 } },
        { txt: "I use other people's faith in me as fuel. If they believe I can do it, I can push myself even further.", w: { Knight: 3, Thief: 2 } },
        { txt: "I act like I don't need anyone's approval, but deep down I keep trying to prove that it really was possible all along.", w: { Page: 3, Knight: 2 } }
    ]},
    { t: "3. Someone you trusted deeply disappoints you in a way that's impossible to ignore.", opts: [
        { txt: "I try to figure out whether I placed my trust in the wrong person, or if there's still something worth believing in.", w: { Mage: 3, Seer: 2 } },
        { txt: "I struggle to let go of my faith in them. Part of me keeps believing things will somehow work out.", w: { Heir: 3, Maid: 2, Prince: -2 } },
        { txt: "I cut through the idealization immediately. If the trust is broken, I'm not going to keep supporting a comforting lie.", w: { Prince: 3, Bard: 1, Sylph: -2 } },
        { txt: "I try to help them earn my trust back, but I end up pushing too hard for them to prove they're still a good person.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I act like I'm fine, but inside I start questioning everything I believed about them.", w: { Bard: 3, Rogue: 2 } }
    ]},
    { t: "4. The evidence suggests that something deeply important to you probably won't happen, but giving up on it feels like giving up on everything.", opts: [
        { txt: "I hold onto my faith anyway. As long as there's even the slightest possibility, I refuse to treat it as dead.", w: { Heir: 3, Page: 2, Mage: -1 } },
        { txt: "I try to figure out whether there's still a real reason to hope, or if I'm just shielding myself from a painful truth.", w: { Mage: 3, Seer: 2 } },
        { txt: "I find a new reason to keep going. If one hope dies, I need to light another before everything comes to a stop.", w: { Maid: 3, Witch: 2 } },
        { txt: "I reject everyone else's conclusion. The world doesn't get to decide on its own what's still possible and what isn't.", w: { Prince: 3, Witch: 2 } },
        { txt: "I pretend I've accepted it, but I keep retreating into the fantasy because it still feels more livable than reality.", w: { Bard: 3, Rogue: 2 } }
    ]},
    { t: "5. You see someone giving up because they're convinced they'll never succeed.", opts: [
        { txt: "I try to show them a real possibility they haven't noticed yet. Maybe they just can't see the path forward.", w: { Seer: 3, Sylph: 2 } },
        { txt: "I push them to try again, even if they resist. Sometimes the first step has to be dragged out of someone.", w: { Sylph: 3, Witch: 2 } },
        { txt: "I offer them my confidence to lean on. If they can't believe in themselves yet, they can borrow my faith for a while.", w: { Heir: 3, Maid: 2 } },
        { txt: "I'm skeptical of people calling something impossible. Sometimes 'impossible' is just another word for 'I'm afraid to try.'", w: { Prince: 3, Knight: 2 } },
        { txt: "I want to help, but I'm afraid of giving someone too much hope and feeding an illusion instead.", w: { Rogue: 3, Mage: 2 } }
    ]},
   { t: "6. A group is disheartened, but someone starts speaking of a better future with such conviction that everyone seems re-energized.", opts: [
        { txt: "I seize that energy and become the face of the group's hope. If anyone is going to carry the vision, it will be with me at the center.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I help turn those words into something concrete, so that hope doesn't die the moment the excitement fades.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I observe exactly what made people believe again, because the group's faith has revealed a hidden need.", w: { Seer: 3, Mage: 2 } },
        { txt: "I let the excitement grow without trying to control it. Sometimes a collective fantasy needs to take hold before it can turn into something real.", w: { Bard: 3, Heir: 1 } },
        { txt: "I use the group's newfound belief to push for a change that no one would have dared to accept before.", w: { Witch: 3, Thief: 2 } }
    ]},
    { t: "7. You realize someone believes in you in an almost exaggerated way, as if you were incapable of failure.", opts: [
        { txt: "I capitalize on that faith to gain more room, confidence, and influence before the perfect image crumbles.", w: { Thief: 3, Witch: 1, Rogue: -2 } },
        { txt: "I try to correct that image before the person gets hurt by believing in an impossible version of me.", w: { Sylph: 3, Mage: 1, Thief: -1 } },
        { txt: "I accept it naturally. If the person sees something great in me, perhaps they are just seeing it before everyone else does.", w: { Heir: 3, Page: 1 } },
        { txt: "I get caught up trying to live up to that faith, even though it was placed in me without me asking for it.", w: { Page: 3, Knight: 2 } },
        { txt: "I let the person believe whatever they want. If the illusion shatters later, I wasn't the one who built it alone.", w: { Bard: 3, Prince: 1, Sylph: -1 } }
    ]},
    { t: "8. A beautiful promise begins to unite people, but you realize no one knows how it would actually be fulfilled.", opts: [
        { txt: "I champion the promise anyway; a strong vision can move people before a perfect plan exists.", w: { Thief: 3, Knight: 1 } },
        { txt: "I try to give the promise structure, distinguishing between the dream, the goal, and the first possible step.", w: { Maid: 3, Seer: 2 } },
        { txt: "I tweak the promise so it remains inspiring but less reliant on an impossible fantasy.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I shatter the spell if I realize hope is being used to avoid responsibility.", w: { Prince: 3, Mage: 2, Heir: -1 } },
        { txt: "I let the promise inflate until its own contradictions surface. Sometimes, only excess reveals the lie.", w: { Bard: 3, Witch: 1, Maid: -1 } }
    ]},
    { t: "9. You see someone selling a miracle solution to people desperate to believe in something.", opts: [
        { txt: "I draw that audience's attention to myself, offering a more convincing promise before they fall into an even worse situation.", w: { Thief: 3, Sylph: 1, Rogue: -1 } },
        { txt: "I try to protect the people without ridiculing their need for hope.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I investigate what void that promise is filling, because no one believes in a miracle without a reason.", w: { Mage: 3, Seer: 2 } },
        { txt: "I harshly expose the fraud. If something feeds on the faith of the vulnerable, it deserves to be shattered.", w: { Prince: 3, Knight: 2, Sylph: -1 } },
        { txt: "I am tempted to believe it too, even knowing the promise is too good to be true.", w: { Page: 3, Bard: 2 } }
    ]},
    { t: "10. You realize that a person can only keep going because they believe in a fantasy that will likely never come true.", opts: [
        { txt: "I let the fantasy exist. Perhaps it is doing more good than the truth would right now.", w: { Bard: 3, Heir: 2 } },
        { txt: "I try to create a substitute hope—one that is more livable—before addressing the old fantasy.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I use that belief to steer the person in the direction I think is best, even if they don't realize it.", w: { Witch: 3, Thief: 2, Rogue: -1 } },
        { txt: "I take on the role of the one upholding that faith, because being essential to someone's hope gives me strength.", w: { Thief: 3, Rogue: 1, Sylph: -1 } },
        { txt: "I try to understand whether the fantasy is a bridge for survival or a prison preventing the person from taking action.", w: { Mage: 3, Seer: 2 } }
    ]},
   { t: "11. A cause that once seemed pure begins to attract people more interested in the attractive image than the ideal itself.", opts: [
        { txt: "I use the cause's image to gain reach. If the aesthetic draws people in, I can turn that into power for the movement.", w: { Thief: 3, Witch: 2, Rogue: -2 } },
        { txt: "I try to refocus the cause on its original ideal before it turns into nothing but a performance of goodness.", w: { Maid: 3, Prince: 1 } },
        { txt: "I analyze what kind of belief people are buying into: genuine justice, a sense of belonging, or just a beautiful version of themselves.", w: { Seer: 3, Mage: 2 } },
        { txt: "I make the cause seem more accessible so that superficial people might join and, perhaps, come to truly believe in it later.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I let the hypocrisy build up until the cause is forced to confront what it has become.", w: { Bard: 3, Prince: 1, Maid: -1 } }
    ]},
    { t: "12. You dream of an ideal version of yourself, but it seems too far removed from the person you are now.", opts: [
        { txt: "I seize that image as if it were already mine. If I believe strongly enough, I can pull my future closer.", w: { Thief: 3, Page: 2 } },
        { txt: "I turn that ideal into small rituals, habits, and daily proofs that I am still moving forward.", w: { Maid: 3, Knight: 2 } },
        { txt: "I try to understand whether this ideal was born of a true desire or a fantasy that only humiliates me.", w: { Mage: 3, Seer: 2 } },
        { txt: "I let that perfect image guide me, even if I can't explain why it feels so right.", w: { Heir: 3, Page: 1 } },
        { txt: "I laugh at my own fantasy and go on living; not every dream needs to become a sacred mission.", w: { Bard: 3, Rogue: 1 } }
    ]},
    { t: "13. You realize that an old hope of yours remains alive only because other people still believe in it for you.", opts: [
        { txt: "I borrow that faith and use it as fuel, even if it no longer seems to originate from within me.", w: { Thief: 3, Rogue: 2 } },
        { txt: "I try to discover if there is still a spark of my own in there, or if I am merely acting out the dreams of others.", w: { Mage: 3, Seer: 2 } },
        { txt: "I treat this hope as something shared, rather than as an individual obligation of mine.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I reshape the dream so that it makes sense to me again, not just to those who believe in me.", w: { Witch: 3, Maid: 1 } },
        { txt: "I let the faith of others carry the situation a little longer. If they still see light, perhaps I don't need to.", w: { Bard: 3, Heir: 1 } }
    ]},
   { t: "14. You encounter a work, religion, philosophy, or history that offers a grand meaning for suffering.", opts: [
        { txt: "I immerse myself in it because there finally seems to be an explanation beautiful enough to bear the pain.", w: { Page: 3, Heir: 2 } },
        { txt: "I try to understand what this belief does to people: whether it liberates, consoles, binds, or distorts.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use this meaning to strengthen my own narrative and position myself as someone who survived for a reason.", w: { Thief: 3, Prince: 1, Rogue: -1 } },
        { txt: "I adapt parts of the belief to create a more useful perspective, even if it displeases those who take the system literally.", w: { Witch: 3, Sylph: 1 } },
        { txt: "I let the belief numb me a little. Sometimes a beautiful explanation is better than facing the full void.", w: { Bard: 3, Rogue: 1 } }
    ]},
    { t: "15. You notice someone monopolizing the group's hope, as if only their vision could save everyone.", opts: [
        { txt: "I take that role for myself if their vision is weak. The group needs to believe in someone more convincing.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "I try to redistribute the group's faith, reminding them that hope shouldn't depend on a single person.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I analyze why the group agreed to center so much meaning on just one person.", w: { Seer: 3, Mage: 2 } },
        { txt: "I create a symbolic alternative that shifts the focus from individual salvation to a collective possibility.", w: { Witch: 3, Maid: 2 } },
        { txt: "I let the pedestal grow until it collapses. If everyone wants to believe in a savior, perhaps they need to see one fail.", w: { Bard: 3, Heir: 1, Sylph: -1 } }
    ]},
    { t: "16. An opportunity seems too perfect—the kind that makes you want to believe without asking too many questions.", opts: [
        { txt: "My first reaction is to accept. If it looks good and nothing is obviously wrong, why not say yes?", w: { Page: 3, Heir: 2, Mage: -2 } },
        { txt: "I investigate whether it’s authentic or just a pretty promise. I’ve seen things that looked too good turn out to be traps.", w: { Mage: 3, Seer: 2, Page: -2 } },
        { txt: "I’m torn: I want to believe, but I’m afraid I’m accepting a fantasy simply because I desperately need it to be real.", w: { Rogue: 3, Bard: 2 } },
        { txt: "I seize the chance and use the excitement to my advantage. If everyone is fired up, I might as well turn that into momentum before the feeling fades.", w: { Thief: 3, Knight: 2 } },
        { txt: "I try to uncover the true path within the promise, separating what is actually possible from what is merely a flashy facade.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "17. You realize people are placing too much faith in you, as if you were the solution to everything.", opts: [
        { txt: "I use that trust to motivate everyone, but I’m afraid of failing and proving I was never worthy of it.", w: { Knight: 3, Rogue: 2 } },
        { txt: "I easily accept being put on a pedestal. If they need to believe in someone, I’d rather be that person.", w: { Thief: 3, Prince: 2, Rogue: -2 } },
        { txt: "I try to live up to expectations, even though some of that faith was created by others before it became mine.", w: { Maid: 3, Heir: 2 } },
        { txt: "I feel uncomfortable and try to shift that trust back to the group. I don’t want to be the only one carrying everyone’s hopes.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I reject the perfect image they’ve created of me. Believing in me doesn’t mean inventing a false version of who I am.", w: { Prince: 3, Mage: 2 } }
    ]},
    { t: "18. You discover that a long-held belief of yours might not be as true as it once seemed.", opts: [
        { txt: "I struggle with it, but try to understand what about that belief was authentic and what was merely a source of comfort.", w: { Mage: 3, Seer: 2 } },
        { txt: "I seek a new point of faith to replace the old one. If one light has gone out, I need to create another to keep moving forward.", w: { Maid: 3, Heir: 2 } },
        { txt: "I cast the belief aside completely if it proves false. I don't want to cling to a hope just because it once made me feel good.", w: { Prince: 3, Knight: 2 } },
        { txt: "I try to defend the belief longer than I should, because letting go of it feels like losing a part of myself.", w: { Bard: 3, Page: 2 } },
        { txt: "I try to shift my understanding of the belief rather than discarding it entirely; perhaps it simply needs to mean something different now.", w: { Witch: 3, Sylph: 2 } }
    ]},
    { t: "19. You deeply believe in an idea, cause, or dream that those around you consider naive, impossible, or delusional.", opts: [
        { txt: "I keep believing. The fact that no one can prove it right now doesn't mean it isn't true.", w: { Heir: 3, Page: 2 } },
        { txt: "I try to turn that belief into something others can also feel is real.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I look for signs of authenticity. I want to believe, but I need to know if it's true faith or just a comforting fantasy.", w: { Mage: 3, Seer: 2 } },
        { txt: "I reject the opinions of those who try to reduce everything to cold facts. If they can't imagine something better, that's their limitation.", w: { Prince: 3, Knight: 2, Rogue: -2 } },
        { txt: "I'm afraid of believing too much and ending up looking ridiculous, so I let others carry that faith for me.", w: { Rogue: 3, Maid: 2 } }
    ]},
    { t: "20. You see someone defending something that, to you, crosses a moral line that cannot be relativized.", opts: [
        { txt: "I can't treat it as just a 'different opinion.' Some things are wrong, and accepting it as a matter for debate would be conceding too much.", w: { Prince: 3, Knight: 2 } },
        { txt: "I try to understand the belief underpinning that view before deciding if there is still common ground to be found.", w: { Seer: 3, Mage: 2 } },
        { txt: "I try to change how the person sees the issue, building a bridge for them to believe in something better.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I try to maintain harmony and believe the person can improve, even if it means being too tolerant.", w: { Heir: 3, Maid: 2, Prince: -2 } },
        { txt: "I avoid casting myself as the judge of the situation. I'm afraid of relying too much on my own sense of right and wrong.", w: { Rogue: 3, Page: 2, Prince: -2 } }
    ]}
	],
    "Doom": [
    { t: "1. You realize you've taken on too many tasks for the week, and if you keep trying to handle it all, something is bound to be done poorly.", opts: [
        { txt: "I immediately cut whatever is least necessary. Better to lose part of the plan than let everything fall apart.", w: { Seer: 3, Knight: 2, Bard: -2 } },
        { txt: "I make a list of obligations and try to complete everything in the right order, but I only cut a task if someone confirms it's okay to set it aside.", w: { Maid: 3, Rogue: 2 } },
        { txt: "I try to push through it all anyway. I don't like admitting that a practical limitation has power over me.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "I pretend there's still time and avoid thinking about it until the situation forces me to face the consequences.", w: { Bard: 3, Page: 2, Knight: -2 } },
        { txt: "I take on the heaviest parts myself because I feel it's safer for me to shoulder the burden than to trust someone else to handle it.", w: { Thief: 3, Heir: 2 } }
    ]},
    { t: "2. A new rule at work or school disrupts your routine, but it was clearly created to prevent a real problem.", opts: [
        { txt: "I look for a way to get around the rule without directly breaking it. If the limit exists, maybe I can bend its format.", w: { Witch: 3, Mage: 2 } },
        { txt: "I follow the rule without making a fuss. If it exists to prevent a problem, it's best to respect it until there's a real need to act differently.", w: { Heir: 3, Maid: 2, Bard: -2 } },
        { txt: "I try to understand exactly where the rule applies and where it doesn't, because every restriction has a practical loophole.", w: { Mage: 3, Knight: 2 } },
        { txt: "I start reminding people why the rule exists, especially when I see someone treating it like it's trivial.", w: { Sylph: 3, Seer: 2, Bard: -2 } },
        { txt: "I try to follow the rule to show I'm responsible, but I end up going overboard or interpreting it more rigidly than necessary.", w: { Page: 3, Maid: 2 } }
    ]},
    { t: "3. You realize that an unjust rule cannot simply be broken without someone paying a heavy price for it.", opts: [
        { txt: "I analyze who would be punished, who would escape unscathed, and the real cost behind each choice.", w: { Mage: 3, Seer: 2 } },
        { txt: "I accept the existence of the limit and act within it, even though I hate that it is necessary for survival.", w: { Heir: 3, Knight: 1 } },
        { txt: "I look for a way to spread the risk so that a single person doesn't bear the full brunt of the punishment.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I take the most dangerous part of breaking the rule upon myself, because I prefer to control where the consequences land.", w: { Thief: 3, Knight: 2 } },
        { txt: "I try to alter the terms of the rule so it remains in place but causes less harm to those who are already vulnerable.", w: { Witch: 3, Sylph: 2 } }
    ]},
    { t: "4. You discover a friend is hiding a debt, fine, or bureaucratic issue that will only get worse over time.", opts: [
        { txt: "I make the person face the numbers, deadlines, and consequences before the situation turns into a worse sentence.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I try to understand how the problem grew, where the system tightened the screws, and what rule might still be used to their advantage.", w: { Mage: 3, Witch: 2 } },
        { txt: "I tackle the most urgent part first, even if it drags me into a mess that wasn't mine to begin with.", w: { Thief: 3, Knight: 2 } },
        { txt: "I help share the burden among trustworthy people so no one sinks alone.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I accept that not everything can be saved and focus on what can still prevent greater damage.", w: { Heir: 3, Seer: 1 } }
    ]},
    { t: "5. Your body is showing clear signs of exhaustion, yet obligations still await you.", opts: [
        { txt: "I acknowledge physical limits as a real rule, not a weakness, and reorganize what can still be done.", w: { Mage: 3, Maid: 2 } },
        { txt: "I keep going until I break, because stopping before a collapse feels like admitting defeat too soon.", w: { Bard: 3, Prince: 2, Sylph: -2 } },
        { txt: "I ruthlessly cut tasks to preserve the bare minimum level of functioning.", w: { Seer: 3, Knight: 2, Bard: -1 } },
        { txt: "I ask someone to shoulder part of the burden, even though I hate relying on others' stamina.", w: { Rogue: 3, Page: 2 } },
        { txt: "I tackle the worst parts first, so that at least the suffering follows an order I can control.", w: { Thief: 3, Heir: 1 } }
    ]},
    { t: "6. You realize a situation is bound to end badly regardless, but you can still choose how that ending plays out.", opts: [
        { txt: "I choose the least destructive ending, even if no one walks away completely satisfied.", w: { Seer: 3, Mage: 2 } },
        { txt: "I accept the ending as part of the process and try to go through it without wasting energy denying the obvious.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I organize a practical wrap-up: documents, objects, pending conversations, and everything that needs to be properly concluded.", w: { Maid: 3, Knight: 2 } },
        { txt: "I try to shoulder the bitterest part of the ending so others don't have to face it all at once.", w: { Thief: 3, Sylph: 1 } },
        { txt: "I force the ending before it continues to slowly fester and hurt everyone for any longer.", w: { Prince: 3, Witch: 2 } }
    ]},
    { t: "7. You are in a line, system, or bureaucratic process that treats everyone like a number.", opts: [
        { txt: "I learn the system's unwritten rules to figure out where I can survive without being crushed by it.", w: { Mage: 3, Seer: 2 } },
        { txt: "I accept the process and follow every step, because fighting the machine only leads to burnout.", w: { Heir: 3, Maid: 1 } },
        { txt: "I exploit a loophole to get my case processed sooner, even if it means someone else has to wait longer.", w: { Thief: 3, Prince: 1, Rogue: -2 } },
        { txt: "I help those who are lost understand the codes, forms, and steps so they don't lose their turn.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I try to change the order of steps or the way the problem is presented to avoid hitting the system's cruelest bottleneck.", w: { Witch: 3, Mage: 1 } }
    ]},
    { t: "8. Someone is suffering from an inevitable loss and asks you to say that everything will be okay.", opts: [
        { txt: "I don't promise a magical cure. I stay by their side and help them get through what cannot be fixed.", w: { Heir: 3, Sylph: 2 } },
        { txt: "I try to give practical shape to the suffering: food, rest, paperwork, phone calls, and next steps.", w: { Maid: 3, Knight: 2 } },
        { txt: "I recognize the type of pain and explain what likely comes next, so they don't feel crazy when things get worse.", w: { Mage: 3, Seer: 2 } },
        { txt: "I take on the most horrible tasks myself so they can grieve without having to deal with all the mess.", w: { Thief: 3, Rogue: 1 } },
        { txt: "I look for others to share the caregiving, because inevitable pain doesn't have to turn into isolation.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "9. You notice that someone close to you only feels useful when they are suffering or making sacrifices.", opts: [
        { txt: "I try to show that setting boundaries is a form of survival, not a moral failing.", w: { Sylph: 3, Mage: 1 } },
        { txt: "I recognize the pattern because I understand how someone learns to turn pain into a function.", w: { Mage: 3, Heir: 1 } },
        { txt: "I redistribute responsibilities so that this person doesn't keep carrying the whole burden alone.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I use their own rule of obligation against them: if the goal is to keep everything running, they need to function too.", w: { Witch: 3, Knight: 2 } },
        { txt: "I get irritated and shut down the logic of sacrifice. Suffering more doesn't automatically make someone more necessary.", w: { Prince: 3, Sylph: 1 } }
    ]},
    { t: "10. A plan only works if someone accepts a negative consequence that the entire group is avoiding naming.", opts: [
        { txt: "I name the consequence and place it at the center of the conversation before it becomes a silent trap.", w: { Seer: 3, Sylph: 2 } },
        { txt: "I shoulder the consequence if it prevents the whole group from being punished later.", w: { Thief: 3, Knight: 2 } },
        { txt: "I break the consequence down into smaller parts so no one has to be the plan's martyr.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I accept that someone will pay the price and try to choose the option that best preserves the larger system.", w: { Heir: 3, Mage: 1 } },
        { txt: "I look for a way to alter the plan so the consequence falls elsewhere or loses its impact.", w: { Witch: 3, Prince: 1 } }
    ]},
    { t: "11. You realize you are stuck in a bad but predictable routine, and breaking free from it would entail greater risks.", opts: [
        { txt: "I accept the routine for now. Sometimes a familiar prison is safer than a freedom that could kill you.", w: { Heir: 3, Bard: 1 } },
        { txt: "I map out exactly what risks would arise if I left, to distinguish real fear from imagined doom.", w: { Mage: 3, Seer: 2 } },
        { txt: "I devise a minimal, slow, and carefully controlled escape route so I don't trade a problem for a catastrophe.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I take the risk of leaving upon myself before anyone realizes just how badly it could go wrong.", w: { Thief: 3, Witch: 1 } },
        { txt: "I wait for someone to confirm that leaving isn't irresponsible, because I don't trust my judgment regarding limits.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "12. You receive bad news that confirms exactly what you had long feared.", opts: [
        { txt: "I feel the shock, but a part of me was already prepared for this outcome.", w: { Heir: 3, Mage: 1 } },
        { txt: "I retrace all the earlier signs to understand when the end was already written—even if I hadn't accepted it yet.", w: { Mage: 3, Seer: 2 } },
        { txt: "I turn the news into a list of next steps, because suffering without structure only makes the fall worse.", w: { Maid: 3, Knight: 2 } },
        { txt: "I shoulder the practical burden of the crisis myself, because at least that way the misfortune serves a purpose.", w: { Thief: 3, Knight: 1 } },
        { txt: "I try to find someone to share the consequences with before I become the sole point of containment.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "13. You realize that a personal project you really wanted to do simply doesn't fit into your current routine.", opts: [
        { txt: "I refuse to accept that it's impossible and try to push the project forward anyway, even if it means completely wrecking my schedule.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "I accept that something has to go and try to choose the least destructive loss before everything starts falling apart together.", w: { Seer: 3, Mage: 1, Bard: -2 } },
        { txt: "I keep putting it off without admitting it might not work out. As long as I don't face it as a real limitation, it still seems possible.", w: { Bard: 3, Page: 2, Seer: -2 } },
        { txt: "I organize my obligations by importance, but I only feel comfortable giving something up if someone confirms I'm not failing.", w: { Maid: 3, Rogue: 2 } },
        { txt: "I scale the project back to the bare minimum needed to keep moving forward, even if it means sacrificing parts I wanted to keep.", w: { Knight: 3, Seer: 2 } }
    ]},
    { t: "14. Someone dumps a tedious responsibility in your lap at the last minute, saying you seem like the most capable person to handle it.", opts: [
        { txt: "I take it on because I’ll probably do a better job anyway. If anyone is going to shoulder this burden properly, I’d rather it be me.", w: { Thief: 3, Knight: 2, Rogue: -2 } },
        { txt: "I try to pass the task on to someone more suitable. I don’t like accepting a burden I might not be able to handle.", w: { Rogue: 3, Page: 2, Thief: -2 } },
        { txt: "I accept it quietly if it seems truly necessary. I don’t like the task, but duty is duty.", w: { Heir: 3, Maid: 2, Bard: -2 } },
        { txt: "I accept too quickly to prove I’m responsible, even without fully grasping the scale of the commitment.", w: { Page: 3, Maid: 2 } },
        { txt: "I try to renegotiate the terms of the task. I might help, but not in the exact way they tried to impose.", w: { Witch: 3, Prince: 2 } }
    ]},
    { t: "15. An important object starts showing minor signs of wear, but it still works if you pretend nothing is wrong.", opts: [
        { txt: "I recognize the pattern of the problem before it gets worse. I've seen small issues turn into major losses because they were ignored for too long.", w: { Mage: 3, Seer: 2 } },
        { txt: "I stop to investigate the signs and figure out what is likely to break first before deciding what to do.", w: { Seer: 3, Mage: 2 } },
        { txt: "I warn people to stop using it carelessly. If things go on like this, a breakdown is only a matter of time.", w: { Sylph: 3, Maid: 2, Bard: -2 } },
        { txt: "I keep using it until it actually stops working. I see no reason to treat something that still gets the job done as a disaster.", w: { Bard: 3, Page: 1, Sylph: -2 } },
        { txt: "I use the current limitations to my advantage and adapt how I handle the object until I can truly fix the problem.", w: { Knight: 3, Mage: 2 } }
    ]},
    { t: "16. You receive a really fun invitation, but you know you have an obligation early the next day.", opts: [
        { txt: "I go anyway and deal with the consequences later. A good night shouldn't be ruined by a boring obligation.", w: { Bard: 3, Prince: 2, Sylph: -2 } },
        { txt: "I decline the invitation if the obligation is serious. I don't like it, but some things simply have to come first.", w: { Heir: 3, Maid: 2, Bard: -2 } },
        { txt: "I go only if I can set clear boundaries: arrival time, departure time, and minimizing the damage for the next day as much as possible.", w: { Knight: 3, Seer: 2 } },
        { txt: "I try to overcome the limitation through sheer willpower, as if getting little sleep or waking up wrecked were just a minor, surmountable detail.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "I make a solid plan to fulfill the obligation while still enjoying myself a bit, but I rely on someone to pull me back if I go overboard.", w: { Maid: 3, Page: 2, Rogue: 1 } }
    ]},
    { t: "17. You need to say no to a request for help because you know you're already at your limit.", opts: [
        { txt: "I try to find a way to help without destroying myself, but I still feel like I need permission not to carry the whole burden.", w: { Maid: 3, Rogue: 2, Sylph: 1 } },
        { txt: "I tell the person they need to find another solution before we both sink. Helping shouldn't mean ignoring all boundaries.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I look for someone else to take over or share the load, because I don't trust myself to handle it alone right now.", w: { Rogue: 3, Heir: 1 } },
        { txt: "I refuse to carry the part that isn't mine. If someone tried to dump that weight on me, I hand it back before it becomes an obligation.", w: { Thief: 3, Prince: 2, Maid: -1 } },
        { txt: "I try to change the terms of the request: I'll help in a different way, on a different timeline, or with different limits, but I won't accept the whole package as-is.", w: { Witch: 3, Mage: 2 } }
    ]},
    { t: "18. A quick fix would solve your problem right now, but it involves ignoring a safety rule that exists for a good reason.", opts: [
        { txt: "I think about the times this kind of shortcut went wrong before. If the rule exists, someone probably got burned to make it happen.", w: { Mage: 3, Seer: 2 } },
        { txt: "I analyze what might happen if the rule is ignored. It might work out now, but the risk doesn't vanish just because it's inconvenient.", w: { Seer: 3, Sylph: 2 } },
        { txt: "I ignore the rule if it's stopping me from solving something urgent. No limit should be absolute when it gets in the way too much.", w: { Prince: 3, Witch: 2, Sylph: -2 } },
        { txt: "I try to do it anyway, thinking I understand the risk, only to realize halfway through that I underestimated the consequences.", w: { Page: 3, Bard: 2 } },
        { txt: "I follow the rule, even if frustrated. Unless it's absolutely necessary to break that limit, I prefer not to mess with it.", w: { Heir: 3, Maid: 2, Prince: -1 } }
    ]},
    { t: "19. You realize you are persisting in something that hasn't worked for a long time.", opts: [
        { txt: "I try to accept that continuing to pour energy into this will only increase the loss. Sometimes stopping is the only sensible decision.", w: { Seer: 3, Mage: 2 } },
        { txt: "I set a final limit: one more attempt, one more deadline, one more condition. After that, it's over.", w: { Sylph: 3, Knight: 2 } },
        { txt: "I keep pushing because giving up feels worse than admitting that the thing died a long time ago.", w: { Bard: 3, Prince: 2, Seer: -2 } },
        { txt: "I force the situation until it yields or breaks completely. If there's a wall in my way, I'd rather knock it down.", w: { Prince: 3, Witch: 2 } },
        { txt: "I try to get someone else to decide if it's still worth persisting. I don't want to be the one to declare the end of something important.", w: { Rogue: 3, Page: 2 } }
    ]},
    { t: "20. You have to deal with an exhausting situation for longer than you’d like, with no guarantee of a clear reward at the end.", opts: [
        { txt: "I turn the situation into a series of rules and small goals. If I do what’s necessary, I can get through it without falling apart.", w: { Knight: 3, Maid: 2, Bard: -2 } },
        { txt: "I take on the hardest parts myself because I’d rather control the burden than rely on others' endurance.", w: { Thief: 3, Knight: 2 } },
        { txt: "I accept externally imposed limits to prove I can handle it, even while complaining about how heavy the load is.", w: { Page: 3, Maid: 2 } },
        { txt: "I look for a way to alter the conditions of the situation so the strain doesn't have to follow the established rules exactly.", w: { Witch: 3, Mage: 2 } },
        { txt: "I try to keep everything running for others, but I struggle to recognize when I need to stop myself.", w: { Maid: 3, Sylph: 2 } }
    ]}    
	],
    "Life": [
    { t: "1. You discovered that you only got your current job because your father knew the boss, and not because of your own merit. How does that make you feel?", opts: [
		{ txt: "I feel no shame whatsoever. If the world offered me a shortcut, I'll take it. I prefer to be employed with an advantage than to be a martyr.", w: { Thief: 3, Witch: 2 } },
		{ txt: "I feel like a complete fraud. I work three times as hard as my colleagues to prove (to them and to myself) that I deserve to occupy this space.", w: { Page: 3, Knight: 2, Maid: 1 } },
		{ txt: "I reject the advantage. I resign or look for another place where I can start from scratch, destroying this privilege that tarnishes my autonomy.", w: { Prince: 3, Knight: 2, Thief: -3 } },
		{ txt: "I don't even think about it. I continue at work, doing the bare minimum. If they gave me the job, it's their problem, not mine.", w: { Bard: 3, Heir: 2, Rogue: 1 } },
		{ txt: "I use my privileged position to make life easier for my colleagues, advocating for raises or improvements, redistributing my luck.", w: { Rogue: 3, Sylph: 2, Thief: -2 } }
	]},
    { t: "2. In a group project, one member is clearly incompetent and dragging everyone toward failure. The deadline is tomorrow.", opts: [
        { txt: "I cut out his part and do everything myself. I won't let my grade tank because of dead weight.", w: { Prince: 3, Thief: 2, Sylph: -3 } },
        { txt: "I sit down with him and do his part together, guiding his hand if necessary. I can't leave anyone behind.", w: { Sylph: 3, Maid: 2, Bard: -2 } },
        { txt: "I let him sink. If he didn't do his part, he can face the consequences. I won't kill myself trying to save someone who won't help themselves.", w: { Bard: 3, Prince: 1, Sylph: -3 } },
        { txt: "I aggressively take the lead, dictating exactly what everyone will do in these final hours to ensure the result is vital.", w: { Witch: 3, Maid: 2 } },
        { txt: "I watch the impending disaster. I understand that failure is part of the learning cycle, and sometimes pain is the only lesson that works.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "3. In a group of friends, you are usually the one who:", opts: [
        { txt: "Organizes activities, brings snacks, looks after anyone who’s had too much to drink, and ensures everyone is okay—often forgetting about yourself.", w: { Maid: 3, Sylph: 2, Prince: -2 } },
        { txt: "Acts as the realistic advisor who speaks the uncomfortable truths no one wants to hear, preventing others from making impulsive decisions.", w: { Prince: 3, Mage: 2 } },
        { txt: "Is the natural center of attention. You set the pace for the outing and make sure plans revolve around what you want to do.", w: { Witch: 3, Thief: 2 } },
        { txt: "Goes with the flow. I eat whatever is there, drink whatever I’m given, and go wherever I’m taken. I’m a comfortable presence who doesn’t demand much.", w: { Bard: 3, Heir: 2 } },
        { txt: "Seems to attract luck or opportunities, always ending up in advantageous situations without appearing to put in much effort.", w: { Heir: 3, Page: 2 } }
    ]},
    { t: "4. An old family tradition dictates that you must pursue a career you hate. Breaking with it means being disinherited.", opts: [
        { txt: "I break with tradition. I have only one life, and I won't spend it following the rules of dead people. My personal happiness matters more.", w: { Witch: 3, Prince: 2, Heir: -2 } },
        { txt: "I accept the burden and pursue the career, finding ways to serve my family and keep the legacy alive, even if I am unhappy.", w: { Maid: 3, Knight: 2, Bard: -2 } },
        { txt: "I slip away quietly. I leave the position open for another relative to step in, redistributing the responsibility.", w: { Rogue: 3, Bard: 1 } },
        { txt: "I drag out my studies for years, failing on purpose or getting expelled. I let failure release me from the obligation without having to say no.", w: { Bard: 3, Page: 2 } },
        { txt: "I try to reform the tradition from within, talking to others and showing that change is necessary for the family's survival.", w: { Sylph: 3, Seer: 2 } }
    ]},
    { t: "5. You see a child throwing a tantrum in a supermarket because they want a piece of candy—screaming and throwing themselves on the floor.", opts: [
        { txt: "I feel deeply irritated. This display of uncontrolled desire and lack of discipline needs to be curbed immediately.", w: { Prince: 3, Knight: 2 } },
        { txt: "I find it amusing or simply ignore it. It is the pure expression of a vital desire; that’s just how children are—chaotic and full of wants.", w: { Heir: 3, Bard: 2, Prince: -3 } },
        { txt: "If it were my child, I’d buy the candy just to shut them up so I could go on with my life in peace. I resolve the situation by giving in.", w: { Witch: 3, Rogue: 2, Knight: -2 } },
        { txt: "I don’t even look. Children scream; life is noisy. I continue my shopping, oblivious to the chaos around me.", w: { Bard: 3, Heir: 1 } },
        { txt: "I analyze the parents. I judge their lack of authority and understand exactly where the parenting failed.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "6. A wealthy friend offers to pay for a luxury trip for you, but you know he’ll throw it in your face later.", opts: [
        { txt: "I accept. If he wants to act superior, that’s his problem. I’ll enjoy the luxury and the trip without spending a dime.", w: { Thief: 3, Witch: 2 } },
        { txt: "I decline. I’d rather pay for my own cheap trip than be in debt or under someone’s financial thumb.", w: { Knight: 3, Prince: 2, Thief: -3 } },
        { txt: "I convince him to invite more people, diluting his focus and turning the trip into a group event.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I accept, but I make sure to 'pay' him back with favors and by handling the logistics, balancing the scales.", w: { Maid: 3, Page: 2, Thief: -2 } },
        { txt: "I accept and don't even care when he throws it in my face. He paid because he wanted to; I went because I was invited. I don't owe him anything emotionally.", w: { Bard: 3, Heir: 2, Knight: -2 } }
    ]},
    { t: "7. You are playing a competitive game and realize your opponent is much weaker and more of a novice than you.", opts: [
        { txt: "A quick, no-nonsense win. I see no point in pretending to be bad. The game is about winning, and I’m going to win.", w: { Prince: 3, Thief: 2, Sylph: -3 } },
        { txt: "I go easy on them, letting them play and have fun—maybe even letting them win a round to encourage them.", w: { Sylph: 3, Rogue: 2, Prince: -3 } },
        { txt: "I teach the mechanics as we play, pausing the match to explain what they did wrong. I become a tutor.", w: { Seer: 3, Mage: 2 } },
        { txt: "I start playing haphazardly, testing out random things. If I lose because I'm messing around, it doesn't matter; the game was boring anyway.", w: { Bard: 3, Heir: 1 } },
        { txt: "I toy with them, creating absurd situations in the game just to see how they react, testing the limits of the system.", w: { Witch: 3, Bard: 2, Knight: -2 } }
    ]},
    { t: "8. You start a new self-care routine but realize you don't quite know what your body really needs.", opts: [
        { txt: "I test things out little by little: sleep, food, exercise, rest. I still make plenty of mistakes, but I'm starting to learn from my body.", w: { Page: 3, Mage: 1 } },
        { txt: "I research signs, patterns, and reactions to understand what actually boosts my energy, rather than following generic advice.", w: { Mage: 3, Seer: 2 } },
        { txt: "I build a sustainable routine with schedules, boundaries, and small actions I can maintain without burning myself out.", w: { Maid: 3, Knight: 2 } },
        { txt: "I ask someone more experienced for help, because trying to grow alone without a reference seems like a recipe for failure.", w: { Page: 3, Rogue: 1 } },
        { txt: "I adjust the routine based on how my body responds, changing the method without abandoning the intention to improve.", w: { Witch: 3, Sylph: 1 } }
    ]},
    { t: "9. You notice someone close to you is burning out because they take care of everyone but themselves.", opts: [
        { txt: "I try to show them that they are a living being with needs too, not just an endless source of care.", w: { Sylph: 3, Mage: 1 } },
        { txt: "I redistribute tasks and caregiving duties so the group's survival doesn't always depend on the same person.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I organize a practical way to lighten their load: food, rest, scheduling, company, and boundaries.", w: { Maid: 3, Knight: 2 } },
        { txt: "I understand the pattern, because I can see how they learned to measure their worth by how much they can offer.", w: { Mage: 3, Seer: 2 } },
        { txt: "I feel insecure about interfering, because they might think I'm saying their way of loving is wrong.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "10. A plant, animal, or person under your care begins to grow in a way different from expected.", opts: [
        { txt: "I observe the growth pattern before deciding whether it is a problem, an adaptation, or simply another form of life.", w: { Seer: 3, Mage: 2 } },
        { txt: "I alter the environment to foster this growth without trying to force everything back to the original plan.", w: { Sylph: 3, Witch: 2 } },
        { txt: "I create a support structure so that this growth can continue without harming its surroundings.", w: { Maid: 3, Knight: 2 } },
        { txt: "I struggle to know if I am caring for it properly and begin to rely on external signs to trust the process.", w: { Page: 3, Rogue: 1 } },
        { txt: "I accept that living growth rarely follows the initial design. The thing finds its own form.", w: { Heir: 3, Seer: 1 } }
    ]},
    { t: "11. You notice that something which started out healthy is growing out of control and suffocating everything else.", opts: [
        { txt: "I prune the excess before it kills the entire environment. Unchecked growth turns into destruction.", w: { Knight: 3, Seer: 2, Bard: -1 } },
        { txt: "I try to understand when the expansion stopped being vitality and turned into an invasion.", w: { Mage: 3, Seer: 2 } },
        { txt: "I redistribute space, resources, and attention so that other parts can flourish too.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I alter the environmental conditions to redirect the growth without needing to destroy everything.", w: { Witch: 3, Maid: 1 } },
        { txt: "I feel bad about cutting back something so full of life, even knowing it has gone too far.", w: { Page: 3, Sylph: 1 } }
    ]},
    { t: "12. You receive extra food, money, or energy at a time when others around you have less.", opts: [
        { txt: "I share it in a way that helps those who need it most, without turning the act of sharing into a spectacle of kindness.", w: { Rogue: 3, Sylph: 2, Thief: -2 } },
        { txt: "I use the surplus to build a more stable foundation: saving, cooking, preparing, planting, or investing in things that keep yielding returns.", w: { Maid: 3, Knight: 2 } },
        { txt: "I take what ensures my own security first. I can only help others if I’m not lacking anything myself.", w: { Thief: 3, Mage: 1, Rogue: -1 } },
        { txt: "I try to calculate the fairest distribution, considering actual need rather than just who asked first.", w: { Seer: 3, Mage: 2 } },
        { txt: "I feel uncomfortable receiving more than others and end up giving away too much to prove I’m not selfish.", w: { Page: 3, Rogue: 2 } }
    ]},
    { t: "13. You realize you are prospering while someone close to you remains stuck in a difficult situation.", opts: [
        { txt: "I try to pave the way for that person as well, using my improvement as a bridge rather than a source of distance.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I feel guilty about growing on my own and almost sabotage my own progress so it doesn't look like I've abandoned anyone.", w: { Page: 3, Maid: 1 } },
        { txt: "I analyze the conditions that enabled my improvement and identify what the other person is still lacking.", w: { Mage: 3, Seer: 2 } },
        { txt: "I use my improved position to secure tangible resources, contacts, or opportunities I wouldn't have been able to offer before.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I accept that growth is not a betrayal. My life doesn't have to come to a halt just to prove loyalty to someone else's suffering.", w: { Heir: 3, Knight: 1 } }
    ]},
    { t: "14. Someone offers you very rigid life advice on how you should develop.", opts: [
        { txt: "I try to understand if the advice respects my nature or if it’s just trying to prune me to fit someone else's mold.", w: { Mage: 3, Seer: 2 } },
        { txt: "I adapt the advice to my own pace, taking what nourishes me and discarding what stifles me.", w: { Witch: 3, Sylph: 1 } },
        { txt: "I proceed cautiously at first, because I don't yet fully trust my ability to grow without guidance.", w: { Page: 3, Maid: 1 } },
        { txt: "I create a practical version of the advice, turning a vague idea into habits I can actually maintain.", w: { Maid: 3, Knight: 2 } },
        { txt: "I reject the attempt to mold me. Not all growth needs to be tamed to be valid.", w: { Prince: 3, Thief: 1, Sylph: -1 } }
    ]},
    { t: "15. You are learning a physical skill, such as cooking, dancing, tending to plants, sewing, or training.", opts: [
        { txt: "I repeat the movement until I can feel where the error lies in my body, even if I can't yet explain it technically.", w: { Page: 3, Knight: 2 } },
        { txt: "I study texture, rhythm, reaction, temperature, force, and other concrete signals until I grasp the living logic of the practice.", w: { Mage: 3, Seer: 2 } },
        { txt: "I turn the learning process into care for others: better food, a better environment, a safer body.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I use the skill to gain autonomy; the more I know how to do, the less I depend on others to sustain me.", w: { Knight: 3, Thief: 2 } },
        { txt: "I do things my own way until the method feels alive, even if I don't strictly follow the technique I was taught.", w: { Witch: 3, Heir: 1 } }
    ]},
    { t: "16. You realize someone is confusing care with control, deciding everything 'for your own good'.", opts: [
        { txt: "I point out that protecting someone shouldn't mean taking away their ability to grow on their own.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I try to regain my autonomy gradually, proving I can take care of myself without severing ties all at once.", w: { Page: 3, Knight: 2 } },
        { txt: "I nip the interference in the bud. If the person calls control 'care,' I won't accept that kind of care.", w: { Prince: 3, Knight: 1, Sylph: -1 } },
        { txt: "I understand the fears fueling this control and try to separate intention from consequence.", w: { Mage: 3, Seer: 2 } },
        { txt: "I shift the dynamic so the person can still help, but without dictating the entire shape of my life.", w: { Witch: 3, Rogue: 2 } }
    ]},
    { t: "17. You have the chance to begin a more comfortable phase—one with more resources, pleasure, and stability than you are used to.", opts: [
        { txt: "I enjoy it without apology. If life has finally opened a fruitful door, I’m going to reap the maximum benefit.", w: { Thief: 3, Heir: 2 } },
        { txt: "I’m wary of how easy it is and try to figure out if this abundance comes with a hidden cost.", w: { Mage: 3, Seer: 2 } },
        { txt: "I organize this stability to ensure it lasts, rather than squandering it all just because I can finally breathe easy.", w: { Maid: 3, Knight: 2 } },
        { txt: "I think about how to use my improved situation to support others so they can prosper too.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I find it hard to relax amidst abundance, as if I need to earn every bit of it before I can accept it.", w: { Page: 3, Knight: 1 } }
    ]},
    { t: "18. You and your friends are sharing a pizza. The last slice—the one with the most toppings—arrives. Everyone is looking at it, but no one takes it.", opts: [
        { txt: "I take it and eat it. If no one has taken it by now, it means they didn't want it that badly. I’m not going to deny myself.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "I offer the slice to the friend who ate the least or looks the hungriest. It gives me pleasure to see someone else satisfied.", w: { Rogue: 3, Sylph: 2, Thief: -3 } },
        { txt: "I divide the slice into perfectly equal portions for everyone. Fair distribution is the only way to avoid conflict.", w: { Seer: 3, Mage: 2, Bard: -2 } },
        { txt: "I let the slice go cold and get left behind. I’d rather see it go to waste than deal with the social struggle over food.", w: { Prince: 3, Bard: 1 } },
        { txt: "I wait for someone else to take it. If the slice rots there, so be it. I won't be the first or the last to touch it.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "19. You have an annoying headache, though it's not unbearable. How do you handle medication?", opts: [
        { txt: "I take the medicine right away. I have no patience for pain when there's an easy solution. I want to be 100% again.", w: { Witch: 3, Thief: 2 } },
        { txt: "I avoid taking it. I believe the body should heal itself or that medicine is an unnecessary crutch.", w: { Prince: 3, Seer: 2, Sylph: -2 } },
        { txt: "I complain about the pain to someone, hoping they'll take care of me or bring me a glass of water and the medicine.", w: { Page: 3, Rogue: 1, Maid: -3 } },
        { txt: "I take whatever is in the drawer without even really reading the label. If it works, great; if not, oh well.", w: { Bard: 3, Heir: 2, Seer: -3 } },
        { txt: "I ignore the pain and keep doing my tasks. I use the pain as a reminder that I'm alive and busy.", w: { Knight: 3, Maid: 2, Bard: -2 } }
    ]},
    { t: "20. You wake up with unusual energy and vigor, feeling invincible. What do you do with this day?", opts: [
        { txt: "I start three new projects, clean the house, and run a marathon. I spend this energy creating, for waste is a sin.", w: { Maid: 3, Knight: 2, Bard: -2 } },
        { txt: "I focus on myself. I use this energy to resolve my pending issues and get what I want from people.", w: { Thief: 3, Witch: 2 } },
        { txt: "I simply 'am'. I let the day carry me, floating through events with the absolute certainty that nothing can touch me.", w: { Heir: 3, Bard: 1, Knight: -2 } },
        { txt: "I grow suspicious. This excess energy isn't normal; I try to understand what caused it before acting impulsively.", w: { Mage: 3, Seer: 2, Heir: -2 } },
        { txt: "I spend it all on frivolous fun. I go out, drink, and spend money. If life gave me extra energy, it's for me to burn however I please.", w: { Bard: 3, Page: 2, Maid: -2 } }
    ]}
	],
   "Blood": [
    { t: "1. A social group or community you love is slowly dying out. The silence is awkward. What do you do?", opts: [
        { txt: "I tirelessly try to revive the atmosphere. I send messages, start conversations, and schedule events, refusing to let the bond die of neglect.", w: { Sylph: 3, Maid: 2, Prince: -2 } },
        { txt: "I identify who is still worth it and create a separate group with just my favorites. The ship is sinking, but I save the crew that matters.", w: { Thief: 3, Witch: 2, Sylph: -2 } },
        { txt: "I take charge and confront the group. Either we commit to keeping this alive, or we admit it's over once and for all.", w: { Knight: 3, Page: 2, Bard: -2 } },
        { txt: "I make the end official. I leave the group with an explanation or delete the server. I’d rather deliver the *coup de grâce* and end the agony than watch it slowly fade away.", w: { Prince: 3, Maid: -2, Sylph: -2 } },
        { txt: "I simply stop replying. I let the group slip down my history list and fade into oblivion. If no one else is speaking, I won't be the one to break the silence.", w: { Bard: 3, Rogue: 2, Knight: -2 } }
    ]},
    { t: "2. You are invited to an important family event, but you are exhausted and hate the atmosphere. What do you choose?", opts: [
        { txt: "I go and put on my best smile. My presence is a civic duty to maintain the harmony of the family structure.", w: { Maid: 3, Heir: 2, Prince: -2 } },
        { txt: "I flatly refuse the invitation. If I’m not relevant there or if the environment is bad for me, there’s no reason to wear myself out.", w: { Prince: 3, Thief: 2 } },
        { txt: "I say I’ll go, but I 'forget' or fall asleep when the time comes. I let the expectation die on its own without having to deal with a confrontation.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "I go, but I spend the whole time observing the tensions between relatives, gathering useful information.", w: { Seer: 3, Mage: 2 } },
        { txt: "I go only to support a specific person, acting as an emotional buffer for them.", w: { Rogue: 3, Sylph: 2 } }
    ]},
    { t: "3. You join a new group and realize no one explained the social rules, yet everyone acts as if they were obvious.", opts: [
        { txt: "I observe who holds real authority, who only seems important, and which alliances sustain the group's dynamic.", w: { Seer: 3, Mage: 2 } },
        { txt: "I naturally adapt to the role that seems to be missing, as if the group already had a space reserved for me.", w: { Heir: 3, Maid: 1 } },
        { txt: "I alter my approach with each person until I figure out which bonds I can strengthen or redirect.", w: { Witch: 3, Sylph: 1 } },
        { txt: "I try to establish a foundation for interaction so no one has to guess on their own how to fit in.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I feel insecure and start copying others' behavior so I don't look out of place.", w: { Page: 3, Heir: 1 } }
    ]},
    { t: "4. Someone in the group always becomes the butt of the joke, the target, or the scapegoat when something goes wrong.", opts: [
        { txt: "I notice the pattern and point out how the group uses this person to vent tension without addressing the real problem.", w: { Seer: 3, Mage: 2 } },
        { txt: "I try to gradually shift the dynamic, creating other ways to relieve conflict without always sacrificing the same person.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I stand up for the person and try to restore their place in the group before they get pushed out.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept that every group creates its own roles, even the unfair ones; it isn't easy to tear out a function that holds the structure together.", w: { Heir: 3, Mage: 1 } },
        { txt: "I’m afraid that defending them too much might result in me taking their place as the new target.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "5. A group you love starts developing an informal hierarchy, with a few people calling the shots without admitting they're in charge.", opts: [
        { txt: "I map out who influences whom, which decisions arrive as a done deal, and where the illusion of equality starts to break down.", w: { Seer: 3, Mage: 2 } },
        { txt: "I try to shift the flow of power, bringing in people who were previously left out of the decision-making process.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I establish a clearer way to share responsibilities so the group doesn't rely on hidden authority.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I accept the hierarchy if it keeps the group running, but I stay alert for the moment it starts to feel stifling.", w: { Heir: 3, Seer: 1 } },
        { txt: "I use the informal structure to get closer to the people who are actually calling the shots.", w: { Thief: 3, Witch: 1, Rogue: -2 } }
    ]},
    { t: "6. A simple collective ritual (weekly dinner, group call, annual event) begins to lose its spark.", opts: [
        { txt: "I try to understand what that ritual still meant to each person and why it stopped sustaining the bond.", w: { Mage: 3, Seer: 2 } },
        { txt: "I change the ritual's format so it fits the group's current life again, rather than becoming an empty obligation.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I ensure the tradition continues in a more relaxed way, without requiring everyone to perform the same intimacy as before.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I keep attending because that custom still feels like a natural part of the bond to me, even if it has diminished.", w: { Heir: 3, Maid: 1 } },
        { txt: "I feel anxious to show up and prove I still belong, even when I’m no longer sure I want to be there.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "7. You realize that a friendship is only continuing because everyone avoids talking about an old grievance.", opts: [
        { txt: "I observe how that grievance shapes every conversation, every joke, and every silence between the people involved.", w: { Seer: 3, Mage: 2 } },
        { txt: "I try to create a situation where the topic can come up without turning into immediate judgment.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I help mend the bond, but without pretending the wound never existed.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept that some bonds survive with scars. Not everything needs to return to its original state to remain real.", w: { Heir: 3, Mage: 1 } },
        { txt: "I feel insecure about bringing up the subject and ending up blamed for destroying what was left.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "8. A highly charismatic person begins bringing together various people who previously didn't interact.", opts: [
        { txt: "I analyze the type of bond being formed: genuine friendship, dependency, admiration, or merely attraction to their presence.", w: { Seer: 3, Mage: 2 } },
        { txt: "I use this social energy to reorganize the group into new combinations, bringing together those who might work better as a team.", w: { Witch: 3, Maid: 1 } },
        { txt: "I try to ensure no one gets swallowed up by that person's orbit to the point of losing their own voice.", w: { Sylph: 3, Seer: 1 } },
        { txt: "I go with the flow naturally. If someone can unite such different people, perhaps the group just needed that central figure.", w: { Heir: 3, Page: 1 } },
        { txt: "I try to get close to the person to join the network they're creating before my own place in it becomes too small.", w: { Thief: 3, Page: 1 } }
    ]},
    { t: "9. You discover that someone in the group is staying in touch with a person everyone had decided to cut ties with.", opts: [
        { txt: "I try to understand what need this contact still fulfills and what the collective decision failed to resolve.", w: { Mage: 3, Seer: 2 } },
        { txt: "I change how the group handles the estrangement, because an exclusion rule that no one can properly maintain needs to be revisited.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I try to protect the group without automatically branding the person who kept in touch a traitor.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept that bonds don't vanish just because the group decreed it. Sometimes the tie persists beneath the rule.", w: { Heir: 3, Mage: 1 } },
        { txt: "I find myself torn between loyalty to the group and understanding for the person who couldn't cut off contact.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "10. You realize you’ve become the person everyone turns to in order to find out 'what’s going on' between others.", opts: [
        { txt: "I use this position to understand the group's true landscape: alliances, tensions, favors, grudges, and dependencies.", w: { Seer: 3, Mage: 2 } },
        { txt: "I carefully redirect information, bringing together people who need to talk and steering clear of pointless conflicts.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I try to turn gossip into useful communication, without fueling paranoia or causing unnecessary exposure.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept this role as something natural. Certain connections pass through me before finding their right path.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I’m afraid of misusing what I know and ending up manipulating relationships that only sought my help.", w: { Page: 3, Mage: 1 } }
    ]},
    { t: "11. A community decides to create new rules to avoid conflicts, but some people feel this will kill the group's spontaneity.", opts: [
        { txt: "I observe which real conflicts prompted the rules and what fears are being projected onto them.", w: { Seer: 3, Mage: 2 } },
        { txt: "I try to adjust the rules so they protect the group without turning every bond into a protocol.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I help explain the rules as an act of mutual care, not as punishment or cold control.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept rules if they keep the group alive. Social freedom without structure can also turn into abandonment.", w: { Heir: 3, Knight: 1 } },
        { txt: "I feel insecure because I don't know if I'll be able to belong when even spontaneity comes with instructions.", w: { Page: 3, Rogue: 1 } }
    ]},
    { t: "12. You realize that two people in the group can only connect through you.", opts: [
        { txt: "I analyze why their bond needs a bridge and what is missing for it to exist on its own.", w: { Seer: 3, Mage: 2 } },
        { txt: "I alter small dynamics so they can form a direct relationship, without always relying on my presence.", w: { Witch: 3, Sylph: 2 } },
        { txt: "I maintain the bridge as long as it's needed, but try to avoid letting it become a prison for me.", w: { Sylph: 3, Maid: 2 } },
        { txt: "I accept being that point of connection. Sometimes a group naturally organizes itself around certain links.", w: { Heir: 3, Rogue: 1 } },
        { txt: "I feel anxious because, if I step aside, their bond might die, and the blame would seem to fall on me.", w: { Page: 3, Rogue: 2 } }
    ]},
   { t: "13. An irreplaceable friend has passed away. The funeral is over, and now only silence remains. How do you deal with the void left in your life?", opts: [
        { txt: "I become the 'official guardian' of their memory. I correct anyone who speaks of them incorrectly and treat their belongings as sacred.", w: { Knight: 3, Maid: 2, Thief: 1, Bard: -2 } },
        { txt: "I find myself using their slang and habits. It is as if I am allowing them to live on through my actions.", w: { Heir: 3, Rogue: 2, Witch: 1 } },
        { txt: "I need to block out the memories and avoid places that remind me of them. The bond hurts too much, so I sever it.", w: { Prince: 3, Mage: 2, Sylph: -1 } },
        { txt: "I let the memory fade. I don't fight to remember or to forget. If the bond unravels over time, it is only natural.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I try to fill the void by dedicating myself to finishing what they started, honoring their legacy through my efforts.", w: { Page: 3, Maid: 2, Seer: 1 } }
    ]},
    { t: "14. You feel a physical and emotional disconnection from people. It seems like everyone has an 'instruction manual' that you never received.", opts: [
        { txt: "I study interactions obsessively. I analyze social patterns to understand the mechanics that seem natural to others.", w: { Mage: 3, Seer: 2, Page: 1 } },
        { txt: "I create a social 'persona' to deal with others. I act in ways that seem correct so they don't notice I don't know how to behave.", w: { Knight: 3, Page: 2, Witch: 1 } },
        { txt: "I stop trying. If I don't connect, I keep to myself. I let relationships happen or die out without interfering.", w: { Bard: 3, Rogue: 2, Maid: -2 } },
        { txt: "I accept my position as an 'outsider' and let people come to me on my own terms.", w: { Heir: 3, Rogue: 2, Mage: 1 } },
        { txt: "I try to make myself indispensable through practical favors. If I can't connect emotionally, I connect through usefulness.", w: { Maid: 3, Knight: 2, Sylph: 1 } }
    ]},
    { t: "15. Your oldest and deepest friendship is coming to an end. There was a nasty fight, and the silence is now deafening. How do you react to this rift?", opts: [
        { txt: "I refuse to accept the end. I feel a mix of rage and panic; this person is 'mine,' and I’ll do the impossible to bring them back—even if I have to force it.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "I burn the bridge. If it’s over, let it be over for good. I delete everything related to them and block all contact so I can move on.", w: { Prince: 3, Sylph: -3 } },
        { txt: "I become desperate to fix things. I apologize, promise to change, and try to 'heal' the wound at any cost. I don't know who I am without this person.", w: { Sylph: 3, Maid: 2, Heir: 2, Prince: -2 } },
        { txt: "I pretend I’m fine and rationalize that 'people come and go,' hiding just how much this has affected me.", w: { Knight: 3, Bard: 1 } },
        { txt: "I accept defeat and isolate myself. I feel like I’ve failed them and that they’ll be better off without my mess, so I let them go.", w: { Page: 3, Rogue: 2, Thief: -3 } }
    ]},
    { t: "16. Two friends of yours end their relationship disastrously. Both demand that you pick a side.", opts: [
        { txt: "I refuse to choose. I try to keep a bridge between them, acting as a mediator, even if it makes them both angry.", w: { Sylph: 3, Seer: 2, Prince: -2 } },
        { txt: "I choose the side I have more affinity with and cut the other person off without mercy. Loyalty is about choice.", w: { Thief: 3, Knight: 2, Rogue: -3 } },
        { txt: "I keep talking to both of them and pretend nothing happened. I ignore the drama and let them deal with my chaotic neutrality.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I distance myself from both of them. Their emotional instability is contagious, and I prefer to sever ties with both.", w: { Prince: 3, Mage: 1, Maid: -2 } },
        { txt: "I absorb both their complaints, serving as an emotional dumping ground for both sides without ever offering my own opinion.", w: { Rogue: 3, Page: 2 } }
    ]},
    { t: "17. You are overwhelmed, but a group that depends on you demands a personal sacrifice of time and health.", opts: [
        { txt: "I accept, but I exact a high price later. No one can question my authority or deny me favors after this sacrifice.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "I say no. If they can't survive without draining me, that's their problem. I cut off that dependency.", w: { Prince: 3, Thief: 1, Maid: -3 } },
        { txt: "I say I'll help, but I procrastinate or do a half-hearted job. My inertia eventually forces them to fend for themselves.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "I ignore my exhaustion and do what needs to be done. If I fail, the system grinds to a halt, and that is unacceptable.", w: { Maid: 3, Knight: 2, Prince: -3 } },
        { txt: "I accept the burden but try to delegate parts of it to others, redistributing the weight.", w: { Rogue: 3, Sylph: 2, Thief: -3 } }
    ]},
    { t: "18. You have to wear a ridiculous uniform for work or school. Everyone wears it, but you feel humiliated.", opts: [
        { txt: "I customize the uniform, altering details to reclaim my identity. I can be part of the group, but on my own terms.", w: { Witch: 3, Thief: 2 } },
        { txt: "I wear the uniform with total dedication. It symbolizes my role there, and I truly embody it.", w: { Maid: 3, Heir: 2, Prince: -3 } },
        { txt: "I refuse to wear it. I’d rather be punished or fired than submit to this forced conformity.", w: { Prince: 3, Mage: 1, Heir: -2 } },
        { txt: "I wear it sloppily—all wrinkled or stained. I let the symbol of the order degrade while I wear it.", w: { Bard: 3, Rogue: 1, Knight: -2 } },
        { txt: "I feel erased. The uniform kills who I am and turns me into just another cog in the machine.", w: { Rogue: 3, Mage: 2 } }
    ]},
    { t: "19. You discover that your closest friends have created a group chat without you to plan something.", opts: [
        { txt: "I feel paralyzing anxiety. I become obsessed with finding out what they're saying and how I can get in.", w: { Page: 3, Thief: 2 } },
        { txt: "I confront the group aggressively. If their loyalty isn't genuine, I'll cut ties myself.", w: { Prince: 3, Knight: 2, Sylph: -3 } },
        { txt: "I don't even care. One less notification on my phone. If they didn't invite me, that's one less social obligation for me.", w: { Bard: 3, Heir: 2, Knight: -2 } },
        { txt: "I accept being left out in silence, feeling that perhaps I'm the dead weight they need to leave behind.", w: { Rogue: 3, Page: 2, Thief: -3 } },
        { txt: "I coldly analyze their behavior. If they felt the need to exclude me, the group has already failed.", w: { Seer: 3, Mage: 2 } }
    ]},
    { t: "20. The group you are in is aimless and on the verge of fracturing due to a lack of leadership. How do you react?", opts: [
        { txt: "I seize command by force. If no one else leads, I will. I unify the group under my vision to prevent a collapse.", w: { Thief: 3, Witch: 2, Rogue: -3 } },
        { txt: "I step up to handle the heavy lifting. I want everyone to feel secure through my service.", w: { Knight: 3, Maid: 2, Page: 1 } },
        { txt: "I watch from the sidelines. It’s entertaining (and curious) to see the social structure crumble on its own when no one holds things together.", w: { Bard: 3, Mage: 1, Sylph: -2 } },
        { txt: "I try to redistribute tasks. I shift responsibilities to those who are idle, seeking balance without acting like the 'boss'.", w: { Rogue: 3, Sylph: 2, Thief: -3 } },
        { txt: "I let it fracture. If the group can't stay together, it's weak, and I cut ties with failure.", w: { Prince: 3, Seer: 1, Maid: -3 } }
    ]}
	],
   "Breath": [
    { t: "1. You are offered total stability, but with a rigid routine and no room for improvisation.", opts: [
        { txt: "I accept the benefits but start looking for loopholes to keep doing what I want.", w: { Thief: 3, Rogue: 2 } },
        { txt: "I use the stability as a shield to fund my freedom outside of this obligation.", w: { Knight: 3, Maid: 2 } },
        { txt: "I refuse and warn others against trading freedom for comfort.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "I accept for a while to understand my limits within this stifling routine.", w: { Mage: 3, Seer: 2 } },
        { txt: "I simply take another path. I won't stay where my life turns into a cage.", w: { Heir: 3, Bard: 2, Knight: -2 } }
    ]},
    { t: "2. You started a group hobby, but your enthusiasm has faded while the rest of the group remains excited.", opts: [
        { txt: "I quit immediately. Better to cause disappointment now than to fake energy that’s already gone.", w: { Prince: 3, Witch: 2 } },
        { txt: "I hand over the organizing duties to someone more engaged and gradually step away.", w: { Rogue: 3, Thief: 2 } },
        { txt: "I keep participating so I don't let anyone down, even though I’ve lost interest.", w: { Page: 3, Knight: 2 } },
        { txt: "I restructure the dynamic so the group can continue without relying on me.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "I slowly fade into the background until my absence causes the activity to dissolve naturally.", w: { Bard: 3, Heir: 2, Sylph: -2 } }
    ]},
    { t: "3. You make new friends, and an old friend starts acting possessively.", opts: [
        { txt: "I shut down the demands and make it clear that no friendship justifies confinement.", w: { Prince: 3, Witch: 2 } },
        { txt: "I distance myself to force that person to develop their own independence.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I try to balance everything, even if it ends up stifling my freedom.", w: { Page: 3, Knight: 2 } },
        { txt: "I throw myself into the new friendships and ignore their jealousy.", w: { Thief: 3, Rogue: 2 } },
        { txt: "I stop explaining myself and let the demands lose steam on their own.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "4. You are immersed in a personal interest, but your group faces an urgent bureaucratic crisis.", opts: [
        { txt: "I resolve it as quickly as possible just to clear my path again.", w: { Prince: 3, Witch: 2 } },
        { txt: "I handle the practical side like a shield, but protect my true interest.", w: { Knight: 3, Maid: 2 } },
        { txt: "I point out the direction and the flaws of the problem, but avoid taking on the execution.", w: { Seer: 3, Mage: 2 } },
        { txt: "I take advantage of the chaos to monopolize time, space, or resources for my project.", w: { Thief: 3, Rogue: 2, Maid: -2 } },
        { txt: "I stay in my bubble and keep going my own way, as if the crisis isn't pulling at me.", w: { Heir: 3, Bard: 2, Knight: -1 } }
    ]},
    { t: "5. Your group needs to make an urgent decision, but no one can reach a consensus.", opts: [
        { txt: "I decide on my own. Better to move forward my way than to stand still.", w: { Thief: 3, Mage: 2, Sylph: -2 } },
        { txt: "I take the lead and point out any viable direction. The important thing is to get moving.", w: { Maid: 3, Witch: 2, Bard: -2 } },
        { txt: "I give up on it and go attend to my own business.", w: { Bard: 3, Rogue: 2, Knight: -2 } },
        { txt: "I facilitate the conversation so the deadlock resolves naturally.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I wait for someone else to decide for me, since my opinion doesn't seem to make a difference.", w: { Page: 3, Knight: 2 } }
    ]},
    { t: "6. You are in an unfamiliar place, without GPS and with no idea where the exit is.", opts: [
        { txt: "I enjoy the feeling of not knowing what comes next and explore at my own pace.", w: { Heir: 3, Bard: 1, Knight: -3 } },
        { txt: "I feel nervous, but I walk as if I know the way.", w: { Knight: 3, Page: 2 } },
        { txt: "I use the environment and the people around me to figure out a route.", w: { Witch: 3, Thief: 2, Mage: 1 } },
        { txt: "I sit and wait. Eventually, something or someone will show up.", w: { Bard: 3, Rogue: 2, Maid: -2 } },
        { txt: "I observe patterns in the traffic and architecture to deduce the way out.", w: { Mage: 3, Seer: 2 } }
    ]},
    { t: "7. You are in a safe and comfortable situation, but it is completely static and lacks new challenges.", opts: [
        { txt: "I leave. Comfort without movement is still stagnation.", w: { Prince: 3, Witch: 2 } },
        { txt: "I come up with new goals to create movement where there was none.", w: { Maid: 3, Knight: 2 } },
        { txt: "I push the people around me to step out of their comfort zones too.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "I use the calm as a foundation to focus on my interests outside of that environment.", w: { Thief: 3, Mage: 2 } },
        { txt: "My attention drifts away, and I gradually stop showing up until I leave without a major break.", w: { Heir: 3, Bard: 2 } }
    ]},
    { t: "8. You notice someone close to you is stuck because they believe there is only one right path for their life.", opts: [
        { txt: "I try to show them possibilities they haven't seen yet, without forcing a specific choice.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I share examples, contacts, and alternatives so they can choose more freely.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I analyze where this idea of ​​a single path came from and what fears are keeping the person trapped in it.", w: { Mage: 3, Seer: 2 } },
        { txt: "I feel insecure because I also don't quite know how someone finds their own path without getting lost.", w: { Page: 3, Rogue: 1 } },
        { txt: "I create a small, practical first step—something to prove that life doesn't have to stay exactly the same.", w: { Maid: 3, Witch: 1 } }
    ]},
    { t: "9. A group feels heavy, serious, and tense, and no one can quite breathe easy around the others.", opts: [
        { txt: "I use humor, levity, or a shift in atmosphere to create emotional breathing room before everyone explodes.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I try to understand what invisible expectation is keeping everyone locked into the same behavior.", w: { Mage: 3, Seer: 2 } },
        { txt: "I come up with a simple activity to get people moving, talking, or shifting their focus.", w: { Maid: 3, Sylph: 2 } },
        { txt: "I want to lighten the mood, but I’m afraid of coming across as inappropriate or childish.", w: { Page: 3, Knight: 1 } },
        { txt: "I step away for a few minutes so I don't get swallowed up by the collective heaviness.", w: { Heir: 3, Rogue: 1 } }
    ]},
    { t: "10. You need to lead people who are unmotivated, but you don't want to become a rigid authority figure.", opts: [
        { txt: "I lead by example, doing things my own way and hoping people feel inspired without me having to give orders.", w: { Maid: 3, Heir: 2 } },
        { txt: "I grant freedom within the task, letting each person choose how best to contribute.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I understand what is draining the group's drive before trying to push any solution.", w: { Mage: 3, Seer: 2 } },
        { txt: "I try to appear confident and spontaneous, but I feel insecure that no one will take my direction seriously.", w: { Page: 3, Knight: 2 } },
        { txt: "I reorganize the plan so it feels less stifling and more manageable to get started.", w: { Witch: 3, Maid: 2 } }
    ]},
    { t: "11. You get the chance to travel, change your surroundings, or experience a completely different routine for a while.", opts: [
        { txt: "I proceed carefully, trying to learn what this change reveals about my own need for freedom.", w: { Mage: 3, Page: 1 } },
        { txt: "I use the experience to open doors for others to also discover something outside their own bubble.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I make the bare minimum preparations to keep the move light, avoiding turning the adventure into a logistical prison.", w: { Maid: 3, Knight: 1 } },
        { txt: "I want to go, but I wait for an invitation, a sign, or permission to make the choice less daunting.", w: { Page: 3, Heir: 1 } },
        { txt: "I accept it naturally. Sometimes changing places is just a matter of following the wind when it calls.", w: { Heir: 3, Bard: 1 } }
    ]},
    { t: "12. You realize you are avoiding a commitment not because it is bad, but because making a choice seems to close off other possibilities.", opts: [
        { txt: "I try to understand whether I fear the choice itself or the person I would cease to be by making it.", w: { Mage: 3, Seer: 2 } },
        { txt: "I create a more flexible form of commitment, with room to breathe and change without breaking everything.", w: { Witch: 3, Maid: 2 } },
        { txt: "I accept a small step in a certain direction first, rather than demanding a definitive, forever decision from myself.", w: { Page: 3, Maid: 1 } },
        { txt: "I talk to the people involved to share expectations, boundaries, and room for maneuver.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I acknowledge that total freedom can also lead to paralysis, so I choose something that keeps me moving.", w: { Maid: 3, Knight: 2 } }
    ]},
    { t: "13. Someone in the group always tries to dodge responsibilities, but does so in such a charismatic way that everyone forgives them.", opts: [
        { txt: "I notice the pattern and try to understand why the group rewards this avoidance as if it were charm.", w: { Seer: 3, Mage: 2 } },
        { txt: "I redistribute the tasks so that their freedom doesn't become a burden for everyone else.", w: { Rogue: 3, Maid: 2 } },
        { txt: "I try to show that being free doesn't mean leaving others stuck with the work they abandoned.", w: { Sylph: 3, Knight: 1 } },
        { txt: "I feel insecure about holding them accountable and seeming like a killjoy, because everyone seems to like them precisely because they don't take anything too seriously.", w: { Page: 3, Rogue: 1 } },
        { txt: "I create a system where the person can contribute more loosely, without relying on a discipline they lack.", w: { Witch: 3, Maid: 2 } }
    ]},
    { t: "14. You feel the urgency to disappear for a while, but you know some people might genuinely worry.", opts: [
        { txt: "I give a simple, casual heads-up, making space for myself without turning my absence into abandonment.", w: { Maid: 3, Rogue: 2 } },
        { txt: "I try to understand what I’m avoiding before labeling it a need for freedom.", w: { Mage: 3, Seer: 2 } },
        { txt: "I set boundaries regarding contact so no one feels the need to keep tabs on me or demand my constant presence.", w: { Sylph: 3, Rogue: 2 } },
        { txt: "I feel insecure and end up disappearing without a clear explanation, hoping they understand it’s nothing personal.", w: { Page: 3, Bard: 1, Knight: -1 } },
        { txt: "I use the break to reorganize my life and return less bound by others' expectations of me.", w: { Maid: 3, Witch: 1 } }
    ]},
   { t: "15. You come into contact with someone who lives in a much freer, more spontaneous, and less attached way than you do.", opts: [
        { txt: "I observe what about this freedom is real and what might just be a well-presented form of escapism.", w: { Mage: 3, Seer: 2 } },
        { txt: "I feel a desire to learn from them, but also a fear of seeming artificial if I try to be more laid-back.", w: { Page: 3, Heir: 1 } },
        { txt: "I take some of the possibilities they’ve opened up and adapt them to my own life, without copying the whole package.", w: { Rogue: 3, Witch: 1 } },
        { txt: "I create small experiments with freedom in my daily life, without needing to dismantle everything all at once.", w: { Maid: 3, Page: 1 } },
        { txt: "I let their presence pull me out of my rigidity. Some people are the wind in human form.", w: { Heir: 3, Sylph: 1 } }
    ]},
    { t: "16. An important plan needs to be adapted halfway through because reality has shifted direction.", opts: [
        { txt: "I quickly reorganize tasks so the group keeps moving without getting stuck on the old plan.", w: { Maid: 3, Knight: 2 } },
        { txt: "I help each person find new room to maneuver within the unexpected change.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I analyze what has actually changed versus what only looks like chaos because no one updated their mental map.", w: { Mage: 3, Seer: 2 } },
        { txt: "I feel anxious because I was just starting to grasp the old plan, and now I have to relearn the direction.", w: { Page: 3, Knight: 1 } },
        { txt: "I alter the plan's structure to capitalize on the new direction rather than just reacting to it.", w: { Witch: 3, Maid: 1 } }
    ]},
    { t: "17. You realize that your personal freedom depends on someone else's invisible labor.", opts: [
        { txt: "I redistribute this work so that my lightness doesn't exist at the expense of someone else's burden.", w: { Rogue: 3, Sylph: 2 } },
        { txt: "I create a minimal routine to handle my share without turning my entire life into an obligation.", w: { Maid: 3, Knight: 2 } },
        { txt: "I try to understand how I got used to calling something 'freedom' when someone else was sustaining it for me.", w: { Mage: 3, Seer: 2 } },
        { txt: "I feel ashamed and try to make up for it too quickly, taking on more than I can handle.", w: { Page: 3, Maid: 1 } },
        { txt: "I change the arrangement so that everyone has more freedom of choice, not just me.", w: { Witch: 3, Rogue: 2 } }
    ]},
    { t: "18. An authority figure demands that you define a detailed life plan and stop improvising.", opts: [
        { txt: "I question the usefulness of rigidly planning an unpredictable future.", w: { Prince: 3, Witch: 2 } },
        { txt: "I defend my path as proof that adaptation works best for me.", w: { Maid: 3, Knight: 2 } },
        { txt: "I try to show that uncertainty doesn't have to be treated as a danger.", w: { Sylph: 3, Seer: 2 } },
        { txt: "I pretend to agree, make a generic plan, and keep following my own path.", w: { Thief: 3, Mage: 2, Knight: -2 } },
        { txt: "I give it a try, but over time I abandon the plan without realizing it.", w: { Bard: 3, Heir: 2 } }
    ]},
    { t: "19. You go offline for a few days, and upon your return, people demand detailed explanations for your disappearance.", opts: [
        { txt: "I shut down the demands. My availability isn't anyone's right.", w: { Prince: 3, Witch: 2 } },
        { txt: "I refuse to apologize and act as if my disappearance were normal.", w: { Maid: 3, Knight: 2 } },
        { txt: "I use the situation to set clear boundaries regarding communication.", w: { Seer: 3, Mage: 2 } },
        { txt: "I dodge the interrogation with a vague answer and change the subject.", w: { Rogue: 3, Thief: 2 } },
        { txt: "I shrug it off and carry on as usual until the demands lose steam.", w: { Heir: 3, Bard: 2 } }
    ]},
    { t: "20. You want to put a simple idea into practice, but discover you have to go through a massive bureaucratic process.", opts: [
        { txt: "I do it my way and deal with the fallout later.", w: { Prince: 3, Witch: 2 } },
        { txt: "I find a loophole to get approval faster than everyone else.", w: { Thief: 3, Rogue: 2, Maid: -2 } },
        { txt: "I try to simplify the process for everyone, not just myself.", w: { Sylph: 3, Seer: 2, Thief: -2 } },
        { txt: "I follow protocol, even though I hate every step of it.", w: { Page: 3, Knight: 2, Prince: -2 } },
        { txt: "I lose interest and go do something simpler and freer.", w: { Heir: 3, Bard: 2 } }
	]} 
  ] 
};


