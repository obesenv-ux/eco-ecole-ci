const baseDeConnaissances = [
  {
    "question": "Comment t'appelles-tu et quel est ton nom ?",
    "reponse": "Je m'appelle ECO BOT ! Je suis l'intelligence artificielle créée pour le projet ECO-ÉCOLE CI."
  },
  {
    "question": "Qu'est-ce que l'environnement et la nature ?",
    "reponse": "L'environnement est l'ensemble des éléments naturels et humains qui nous entourent."
  },
  {
    "question": "Pourquoi faut-il protéger l'environnement et la nature ?",
    "reponse": "Pour préserver la vie, la santé, les ressources naturelles et les générations futures."
  },
  {
    "question": "Qu'est-ce qu'une éco-école ou un établissement écologique ?",
    "reponse": "Une éco-école est un établissement qui adopte des pratiques respectueuses de l'environnement."
  },
  {
    "question": "Qu'est-ce que le développement durable pour les générations futures ?",
    "reponse": "Le développement durable répond aux besoins du présent sans compromettre ceux des générations futures."
  },
  {
    "question": "Qu'est-ce que le recyclage des déchets ?",
    "reponse": "Le recyclage consiste à transformer des déchets en nouveaux produits."
  },
  {
    "question": "Pourquoi faut-il recycler les déchets et les ordures ?",
    "reponse": "Cela permet de réduire la quantité de déchets, de préserver les ressources naturelles, d'économiser de l'énergie et de limiter la pollution de l'environnement."
  },
  {
    "question": "Comment recycler les déchets et les ordures ?",
    "reponse": "Pour recycler, il faut trier les déchets selon leur nature (papier, carton, plastique, verre, métal), les déposer dans les bacs de tri appropriés ou les apporter dans un centre de recyclage afin qu'ils soient transformés en nouveaux produits."
  },
  {
    "question": "Qu'est-ce que le tri des déchets et des ordures ?",
    "reponse": "Le tri des déchets consiste à séparer les déchets selon leur nature afin de faciliter leur recyclage ou leur traitement."
  },
  {
    "question": "Quels déchets peut-on recycler et comment les trier ?",
    "reponse": "Le papier, le carton, le plastique, le verre et les métaux sont généralement recyclables."
  },
  {
    "question": "Qu'est-ce qu'un déchet ou une ordure ?",
    "reponse": "Un déchet est un objet ou une matière dont on n'a plus l'usage."
  },
  {
    "question": "Comment réduire les déchets et les objets jetables ?",
    "reponse": "En réutilisant les objets, en recyclant et en évitant les produits jetables."
  },
  {
    "question": "Qu'est-ce que la pollution de l'environnement ?",
    "reponse": "La pollution est la dégradation de l'environnement par des substances nocives."
  },
  {
    "question": "Quelles sont les causes de la pollution et pourquoi l'environnement se dégrade-t-il ?",
    "reponse": "Les transports, les industries, les déchets et certaines activités humaines sont les principales causes."
  },
  {
    "question": "Qu'est-ce que la pollution de l'air et de l'atmosphère ?",
    "reponse": "C'est la présence de gaz ou de particules nocives dans l'atmosphère."
  },
  {
    "question": "Comment lutter contre la pollution et protéger la nature ?",
    "reponse": "En réduisant les émissions polluantes, en recyclant et en utilisant des énergies propres."
  },
  {
    "question": "Pourquoi faut-il économiser l'eau potable ?",
    "reponse": "Parce que l'eau potable est une ressource précieuse et limitée."
  },
  {
    "question": "Qu'est-ce que l'eau potable et propre pour la santé ?",
    "reponse": "L'eau potable est une eau propre qui peut être bue sans danger."
  },
  {
    "question": "Comment économiser l'eau et éviter le gaspillage ?",
    "reponse": "En fermant le robinet lorsqu'il n'est pas utilisé, en réparant les fuites et en évitant le gaspillage."
  },
  {
    "question": "Pourquoi faut-il économiser l'électricité et l'énergie ?",
    "reponse": "Pour réduire la consommation d'énergie et protéger l'environnement."
  },
  {
    "question": "Comment économiser l'électricité et l'énergie à l'école ou à la maison ?",
    "reponse": "En éteignant les lumières inutiles et en débranchant les appareils non utilisés."
  },
  {
    "question": "Qu'est-ce que le changement climatique ou réchauffement du climat ?",
    "reponse": "C'est la modification durable du climat, principalement causée par les activités humaines."
  },
  {
    "question": "Quelles sont les causes du changement climatique et pourquoi le climat change-t-il ?",
    "reponse": "Les émissions de gaz à effet de serre provenant des transports, des industries et de la déforestation."
  },
  {
    "question": "Qu'est-ce que l'effet de serre sur la Terre ?",
    "reponse": "C'est un phénomène naturel qui réchauffe la Terre et qui est renforcé par les activités humaines."
  },
  {
    "question": "Qu'est-ce que la biodiversité des animaux et des plantes ?",
    "reponse": "La biodiversité désigne l'ensemble des êtres vivants et des écosystèmes."
  },
  {
    "question": "Pourquoi faut-il protéger la biodiversité et les écosystèmes ?",
    "reponse": "Parce qu'elle est essentielle à l'équilibre de la nature et au bien-être de l'humanité."
  },
  {
    "question": "Qu'est-ce que la déforestation et la destruction des forêts ?",
    "reponse": "La déforestation est la destruction des forêts."
  },
  {
    "question": "Pourquoi faut-il planter des arbres dans la nature ?",
    "reponse": "Les arbres produisent de l'oxygène, absorbent le dioxyde de carbone et protègent les sols."
  },
  {
    "question": "Comment planter un arbre dans la terre ?",
    "reponse": "Il faut creuser un trou, placer l'arbre, reboucher avec de la terre et arroser."
  },
  {
    "question": "Qu'est-ce que le compost et l'engrais organique ?",
    "reponse": "Le compost est un engrais naturel obtenu par la décomposition des déchets organiques."
  },
  {
    "question": "Que peut-on mettre dans un compost et comment l'alimenter ?",
    "reponse": "Les épluchures de légumes, les feuilles mortes, les fruits et les déchets végétaux."
  },
  {
    "question": "Qu'est-ce qu'une énergie renouvelable et propre ?",
    "reponse": "Une énergie renouvelable est une énergie provenant de ressources naturelles qui se renouvellent naturellement."
  },
  {
    "question": "Citez des énergies renouvelables et comment elles se déclinent ?",
    "reponse": "L'énergie solaire, l'énergie éolienne, l'énergie hydraulique et la biomasse."
  },
  {
    "question": "Qu'est-ce que l'énergie solaire du soleil ?",
    "reponse": "C'est une énergie produite à partir de la lumière et de la chaleur du soleil."
  },
  {
    "question": "Qu'est-ce que l'énergie éolienne du vent ?",
    "reponse": "C'est une énergie produite grâce à la force du vent."
  },
  {
    "question": "Qu'est-ce que l'énergie hydraulique de l'eau ?",
    "reponse": "C'est une énergie produite grâce au mouvement de l'eau."
  },
  {
    "question": "Qu'est-ce que le plastique et le pétrole ?",
    "reponse": "Le plastique est un matériau fabriqué à partir du pétrole et qui met très longtemps à se dégrader."
  },
  {
    "question": "Pourquoi faut-il limiter l'utilisation du plastique et des sachets ?",
    "reponse": "Parce qu'il pollue les océans, les sols et menace la faune."
  },
  {
    "question": "Qu'est-ce qu'un sac réutilisable ou un sachet durable ?",
    "reponse": "C'est un sac conçu pour être utilisé plusieurs fois afin de réduire les déchets."
  },
  {
    "question": "Qu'est-ce qu'un geste écologique pour l'environnement ?",
    "reponse": "C'est une action qui contribue à protéger l'environnement."
  },
  {
    "question": "Quels sont les exemples de gestes écologiques et comment agir ?",
    "reponse": "Recycler, économiser l'eau, planter des arbres, éteindre les lumières inutiles et utiliser un vélo."
  },
  {
    "question": "Pourquoi ne faut-il pas jeter les déchets ou ordures dans la nature ?",
    "reponse": "Parce qu'ils polluent les sols, les rivières et mettent les animaux en danger."
  },
  {
    "question": "Qu'est-ce qu'un parc naturel ou une réserve protégée ?",
    "reponse": "Un parc naturel est un espace protégé destiné à préserver la faune, la flore et les paysages."
  },
  {
    "question": "Pourquoi faut-il protéger les animaux sauvages et la faune ?",
    "reponse": "Les animaux jouent un rôle essentiel dans l'équilibre des écosystèmes."
  },
  {
    "question": "Qu'est-ce qu'une espèce menacée de disparition ?",
    "reponse": "Une espèce menacée est une espèce qui risque de disparaître."
  },
  {
    "question": "Comment protéger les animaux et la faune sauvage ?",
    "reponse": "En protégeant leurs habitats, en luttant contre le braconnage et en réduisant la pollution."
  },
  {
    "question": "Que sont les Objectifs de Développement Durable ou ODD ?",
    "reponse": "Ce sont 17 objectifs définis pour améliorer les conditions de vie tout en protégeant la planète."
  },
  {
    "question": "Combien existe-t-il d'Objectifs de Développement Durable ODD ?",
    "reponse": "Il existe 17 Objectifs de Développement Durable."
  },
  {
    "question": "Qu'est-ce que l'ODD 13 pour le climat ?",
    "reponse": "L'ODD 13 vise à lutter contre les changements climatiques."
  },
  {
    "question": "Qu'est-ce que l'ODD 15 pour la biodiversité ?",
    "reponse": "L'ODD 15 vise à protéger les écosystèmes terrestres et la biodiversité."
  },
  {
    "question": "Comment devenir un éco-citoyen responsable ?",
    "reponse": "En adoptant chaque jour des comportements responsables pour protéger l'environnement."
  },
  {
    "question": "Que peut faire un élève pour protéger l'environnement à l'école ?",
    "reponse": "Il peut économiser l'eau, trier les déchets, planter des arbres, éviter le gaspillage et sensibiliser ses camarades."
  },
  {
    "question": "Quel est le rôle d'ECO-ÉCOLE CI et que fait cet organisme ?",
    "reponse": "ECO-ÉCOLE CI sensibilise les élèves, les enseignants et les communautés à la protection de l'environnement à travers des projets éducatifs, des campagnes de sensibilisation et des actions écocitoyennes."
  },
  {
    "question": "Pourquoi faut-il boire de l'eau potable et propre ?",
    "reponse": "Parce qu'elle protège la santé et évite de nombreuses maladies."
  },
  {
    "question": "Comment protéger les sources d'eau naturelles ?",
    "reponse": "En évitant la pollution et en préservant les forêts autour des sources."
  },
  {
    "question": "Qu'est-ce qu'une rivière ou un cours d'eau ?",
    "reponse": "Une rivière est un cours d'eau naturel qui s'écoule vers un fleuve ou un lac."
  },
  {
    "question": "Pourquoi les rivières sont-elles importantes pour la nature ?",
    "reponse": "Elles fournissent de l'eau, abritent des animaux et irriguent les cultures."
  },
  {
    "question": "Comment éviter de polluer une rivière ou un fleuve ?",
    "reponse": "En ne jetant jamais de déchets ni de produits chimiques dans l'eau."
  },
  {
    "question": "Qu'est-ce qu'une nappe phréatique sous la terre ?",
    "reponse": "C'est une réserve d'eau située sous la terre."
  },
  {
    "question": "Pourquoi protéger les nappes phréatiques et l'eau souterraine ?",
    "reponse": "Elles alimentent de nombreuses populations en eau potable."
  },
  {
    "question": "Comment économiser l'eau potable à l'école ou à la maison ?",
    "reponse": "En fermant les robinets et en signalant rapidement les fuites."
  },
  {
    "question": "Qu'est-ce que l'assainissement de l'environnement ?",
    "reponse": "L'assainissement regroupe les actions qui permettent de garder un environnement propre et sain."
  },
  {
    "question": "Pourquoi faut-il construire des toilettes propres et hygiéniques ?",
    "reponse": "Pour éviter la propagation des maladies."
  },
  {
    "question": "Comment garder une école propre et sans déchets ?",
    "reponse": "En nettoyant régulièrement les salles et en utilisant des poubelles."
  },
  {
    "question": "Qu'est-ce qu'un égout pour les eaux usées ?",
    "reponse": "C'est un réseau qui évacue les eaux usées."
  },
  {
    "question": "Pourquoi faut-il traiter les eaux usées et sales ?",
    "reponse": "Pour éviter de polluer les rivières et les océans."
  },
  {
    "question": "Comment éviter les inondations et les catastrophes d'eau ?",
    "reponse": "En gardant les caniveaux propres et en protégeant les zones naturelles."
  },
  {
    "question": "Qu'est-ce qu'un marécage ou une zone humide ?",
    "reponse": "C'est une zone humide riche en biodiversité."
  },
  {
    "question": "Pourquoi protéger les zones humides et les marécages ?",
    "reponse": "Elles filtrent l'eau et abritent de nombreuses espèces."
  },
  {
    "question": "Comment réduire le gaspillage d'eau au quotidien ?",
    "reponse": "En utilisant seulement la quantité nécessaire."
  },
  {
    "question": "Qu'est-ce qu'une sécheresse ou le manque de pluie ?",
    "reponse": "C'est une longue période avec très peu de pluie."
  },
  {
    "question": "Pourquoi les sécheresses augmentent-elles avec le climat ?",
    "reponse": "Le changement climatique en est l'une des principales causes."
  },
  {
    "question": "Comment faire face à la sécheresse et protéger l'eau ?",
    "reponse": "En économisant l'eau et en protégeant les ressources naturelles."
  },
  {
    "question": "Qu'est-ce que la pluie et les nuages ?",
    "reponse": "La pluie est de l'eau qui tombe des nuages."
  },
  {
    "question": "Pourquoi la pluie est-elle importante pour la nature ?",
    "reponse": "Elle nourrit les plantes, les animaux et les réserves d'eau."
  },
  {
    "question": "Comment recueillir et stocker l'eau de pluie ?",
    "reponse": "Avec des réservoirs ou des citernes adaptés."
  },
  {
    "question": "Qu'est-ce qu'une citerne ou un réservoir d'eau ?",
    "reponse": "C'est un grand réservoir utilisé pour stocker l'eau."
  },
  {
    "question": "Qu'est-ce qu'un déchet organique ou biodégradable ?",
    "reponse": "C'est un déchet qui provient des êtres vivants et peut se décomposer naturellement."
  },
  {
    "question": "Pourquoi faut-il trier les déchets dans les poubelles ?",
    "reponse": "Pour faciliter leur recyclage et réduire la pollution."
  },
  {
    "question": "Comment fabriquer du compost avec des déchets organiques ?",
    "reponse": "En mélangeant des déchets organiques qui se décomposent naturellement."
  },
  {
    "question": "Qu'est-ce qu'une poubelle de tri sélectif ?",
    "reponse": "C'est une poubelle destinée à une catégorie précise de déchets."
  },
  {
    "question": "Pourquoi utiliser une poubelle de tri pour les ordures ?",
    "reponse": "Pour mieux recycler les déchets."
  },
  {
    "question": "Comment réutiliser une bouteille en plastique vide ?",
    "reponse": "Elle peut servir de pot de fleurs ou d'arrosoir."
  },
  {
    "question": "Qu'est-ce qu'un objet réutilisable ou durable ?",
    "reponse": "C'est un objet qui peut servir plusieurs fois."
  },
  {
    "question": "Pourquoi éviter les objets jetables et le plastique ?",
    "reponse": "Ils produisent beaucoup de déchets."
  },
  {
    "question": "Comment réduire les emballages plastiques et déchets ?",
    "reponse": "En choisissant des produits avec peu d'emballage."
  },
  {
    "question": "Qu'est-ce qu'une décharge publique pour les ordures ?",
    "reponse": "C'est un lieu où sont déposés les déchets."
  },
  {
    "question": "Pourquoi les décharges de déchets doivent-elles être contrôlées ?",
    "reponse": "Pour éviter la pollution des sols et de l'eau."
  },
  {
    "question": "Comment recycler le papier et le carton ?",
    "reponse": "En le déposant dans les bacs de recyclage."
  },
  {
    "question": "Qu'est-ce qu'un emballage recyclable ou écologique ?",
    "reponse": "C'est un emballage qui peut être transformé en nouveau produit."
  },
  {
    "question": "Pourquoi faut-il recycler le verre et les bouteilles ?",
    "reponse": "Parce qu'il peut être recyclé plusieurs fois."
  },
  {
    "question": "Comment réduire les déchets plastiques et les sachets ?",
    "reponse": "En utilisant des sacs réutilisables."
  },
  {
    "question": "Qu'est-ce qu'un centre de recyclage pour les ordures ?",
    "reponse": "C'est un lieu où les déchets sont triés et recyclés."
  },
  {
    "question": "Pourquoi faut-il recycler les piles usagées ?",
    "reponse": "Elles contiennent des substances dangereuses."
  },
  {
    "question": "Comment jeter une pile usagée ou une batterie ?",
    "reponse": "En la déposant dans un point de collecte."
  },
  {
    "question": "Qu'est-ce qu'un déchet dangereux ou toxique ?",
    "reponse": "C'est un déchet qui peut nuire à la santé ou à l'environnement."
  },
  {
    "question": "Pourquoi ne faut-il pas brûler les déchets et faire de la fumée ?",
    "reponse": "Parce que cela produit des fumées toxiques."
  },
  {
    "question": "Comment réduire les déchets à la maison ?",
    "reponse": "En achetant seulement ce dont on a besoin."
  },
  {
    "question": "Qu'est-ce que le gaspillage des ressources et nourriture ?",
    "reponse": "C'est l'utilisation inutile ou excessive d'une ressource."
  },
  {
    "question": "Pourquoi faut-il éviter le gaspillage au quotidien ?",
    "reponse": "Pour préserver les ressources naturelles."
  },
  {
    "question": "Comment sensibiliser les gens au recyclage des déchets ?",
    "reponse": "En expliquant son importance et en donnant le bon exemple."
  },
  {
    "question": "Qu'est-ce qu'une économie circulaire pour les produits ?",
    "reponse": "C'est un système qui réutilise les ressources le plus longtemps possible."
  },
  {
    "question": "Qu'est-ce que la faune et les animaux sauvages ?",
    "reponse": "La faune est l'ensemble des animaux d'un milieu."
  },
  {
    "question": "Pourquoi protéger la faune et les animaux de la forêt ?",
    "reponse": "Parce qu'elle est essentielle à l'équilibre de la nature."
  },
  {
    "question": "Comment protéger la faune et la nature ?",
    "reponse": "En protégeant les habitats naturels."
  },
  {
    "question": "Qu'est-ce que la flore, les plantes et la végétation ?",
    "reponse": "La flore est l'ensemble des plantes d'une région."
  },
  {
    "question": "Pourquoi protéger la flore, les plantes et les arbres ?",
    "reponse": "Elle produit de l'oxygène et nourrit les êtres vivants."
  },
  {
    "question": "Comment protéger les plantes et les forêts ?",
    "reponse": "En évitant les feux de brousse et la déforestation."
  },
  {
    "question": "Qu'est-ce qu'un écosystème naturel ?",
    "reponse": "C'est un milieu où les êtres vivants interagissent avec leur environnement."
  },
  {
    "question": "Pourquoi préserver les écosystèmes et la nature ?",
    "reponse": "Ils assurent l'équilibre de la planète."
  },
  {
    "question": "Comment préserver un écosystème naturel ?",
    "reponse": "En réduisant la pollution et en protégeant les habitats."
  },
  {
    "question": "Qu'est-ce que la couche d'ozone dans l'atmosphère ?",
    "reponse": "C'est une couche de l'atmosphère qui protège la Terre des rayons ultraviolets."
  },
  {
    "question": "Pourquoi protéger la couche d'ozone du ciel ?",
    "reponse": "Elle protège la santé humaine et les écosystèmes."
  },
  {
    "question": "Comment réduire les gaz à effet de serre et le carbone ?",
    "reponse": "En utilisant des transports propres et des énergies renouvelables."
  },
  {
    "question": "Qu'est-ce que le dioxyde de carbone ou CO2 ?",
    "reponse": "C'est un gaz naturellement présent dans l'air mais produit en grande quantité par les activités humaines."
  },
  {
    "question": "Pourquoi réduire les émissions de CO2 et de dioxyde de carbone ?",
    "reponse": "Pour limiter le réchauffement climatique."
  },
  {
    "question": "Comment lutter contre le réchauffement climatique de la Terre ?",
    "reponse": "En économisant l'énergie et en plantant des arbres."
  },
  {
    "question": "Qu'est-ce qu'une catastrophe naturelle comme les inondations ?",
    "reponse": "C'est un événement naturel qui cause des dégâts importants."
  },
  {
    "question": "Pourquoi les catastrophes naturelles augmentent-elles sur la planète ?",
    "reponse": "Le changement climatique peut aggraver certains phénomènes."
  },
  {
    "question": "Comment se préparer aux catastrophes naturelles et aux dangers ?",
    "reponse": "En suivant les consignes de sécurité et en étant bien informé."
  },
  {
    "question": "Qu'est-ce qu'un feu de brousse ou un incendie de forêt ?",
    "reponse": "C'est un incendie qui se propage dans la végétation."
  },
  {
    "question": "Pourquoi éviter les feux de brousse et protéger les arbres ?",
    "reponse": "Ils détruisent les forêts et les habitats des animaux."
  },
  {
    "question": "Comment prévenir et éviter les feux de brousse ?",
    "reponse": "En évitant les feux non contrôlés."
  },
  {
    "question": "Qu'est-ce que la reforestation et le reboisement des arbres ?",
    "reponse": "C'est l'action de replanter des arbres."
  },
  {
    "question": "Pourquoi faire de la reforestation et planter des arbres ?",
    "reponse": "Pour restaurer les forêts."
  },
  {
    "question": "Comment réussir une reforestation ou faire pousser des arbres ?",
    "reponse": "En plantant des espèces adaptées et en les entretenant."
  },
  {
    "question": "Qu'est-ce qu'une forêt ou une jungle d'arbres ?",
    "reponse": "Une forêt est un vaste espace couvert d'arbres."
  },
  {
    "question": "Pourquoi respecter la nature et l'environnement ?",
    "reponse": "Parce qu'elle est indispensable à la vie."
  },
  {
    "question": "Comment respecter la nature et la planète au quotidien ?",
    "reponse": "En évitant de polluer et en protégeant les animaux."
  },
  {
    "question": "Qu'est-ce qu'un éco-club ou un club environnement à l'école ?",
    "reponse": "C'est un groupe d'élèves qui réalise des actions pour protéger l'environnement."
  },
  {
    "question": "Pourquoi créer un éco-club à l'école ou au collège ?",
    "reponse": "Pour sensibiliser toute l'école."
  },
  {
    "question": "Comment créer un éco-club avec les élèves et professeurs ?",
    "reponse": "En réunissant des élèves motivés et un enseignant encadreur."
  },
  {
    "question": "Qu'est-ce qu'un nettoyage citoyen ou un ramassage d'ordures ?",
    "reponse": "C'est une activité consistant à ramasser les déchets dans un lieu public."
  },
  {
    "question": "Pourquoi organiser une journée de nettoyage pour ramasser les déchets ?",
    "reponse": "Pour rendre l'environnement plus propre."
  },
  {
    "question": "Comment organiser une journée écologique ou de nettoyage ?",
    "reponse": "En préparant des activités de sensibilisation et de nettoyage."
  },
  {
    "question": "Qu'est-ce qu'un jardin scolaire écologique à l'école ?",
    "reponse": "C'est un espace cultivé par les élèves dans l'école."
  },
  {
    "question": "Pourquoi créer un jardin scolaire pour les élèves ?",
    "reponse": "Pour apprendre à cultiver et protéger la nature."
  },
  {
    "question": "Comment entretenir un jardin scolaire et cultiver des plantes ?",
    "reponse": "En arrosant, en désherbant et en protégeant les plantes."
  },
  {
    "question": "Qu'est-ce qu'une campagne de sensibilisation à l'environnement ?",
    "reponse": "C'est une action destinée à informer le public."
  },
  {
    "question": "Pourquoi sensibiliser les élèves et les enfants à l'écologie ?",
    "reponse": "Pour développer des comportements responsables."
  },
  {
    "question": "Comment sensibiliser les élèves à la protection de la nature ?",
    "reponse": "Avec des affiches, des jeux, des vidéos et des ateliers."
  },
  {
    "question": "Qu'est-ce qu'un ambassadeur de l'environnement ou un éco-délégué ?",
    "reponse": "C'est une personne qui encourage les autres à protéger la nature."
  },
  {
    "question": "Pourquoi devenir ambassadeur de l'environnement à l'école ?",
    "reponse": "Pour inspirer les autres à agir."
  },
  {
    "question": "Comment devenir un ambassadeur de l'environnement responsable ?",
    "reponse": "En montrant l'exemple chaque jour."
  },
  {
    "question": "Qu'est-ce que la responsabilité environnementale citoyenne ?",
    "reponse": "C'est le devoir de protéger la nature."
  },
  {
    "question": "Pourquoi agir pour la planète et sauver la Terre ?",
    "reponse": "Pour assurer un avenir meilleur aux générations futures."
  },
  {
    "question": "Comment protéger la planète et la Terre chaque jour ?",
    "reponse": "En adoptant de petits gestes écologiques."
  },
  {
    "question": "Qu'est-ce que la consommation responsable ou l'achat écologique ?",
    "reponse": "C'est acheter et utiliser les produits de manière réfléchie pour limiter les déchets."
  },
  {
    "question": "Pourquoi privilégier les produits locaux et l'agriculture locale ?",
    "reponse": "Ils réduisent le transport, soutiennent les producteurs et limitent les émissions de CO₂."
  },
  {
    "question": "Comment choisir un produit respectueux de l'environnement et écologique ?",
    "reponse": "En privilégiant les produits durables, recyclables ou fabriqués localement."
  },
  {
    "question": "Qu'est-ce qu'une école verte ou un collège écologique ?",
    "reponse": "C'est une école qui adopte des pratiques durables pour protéger l'environnement."
  },
  {
    "question": "Pourquoi chaque élève doit-il protéger l'environnement et la nature ?",
    "reponse": "Parce que chaque geste compte et que chacun peut contribuer à préserver la planète."
  },
  {
    "question": "Quels sont les bacs de tri au collège et que mettre dedans ?",
    "reponse": "Au collège, nous utilisons 3 bacs : le Bac Jaune (bouteilles & plastiques), le Bac Bleu (papier & cartons), et le Bac Vert (déchets organiques & restes de nourriture pour le compostage)."
  },
  {
    "question": "Qu'est-ce que la règle des 3R pour l'environnement ?",
    "reponse": "La règle des 3R signifie : 1. Réduire sa consommation de produits jetables, 2. Réutiliser les objets pour leur donner une seconde vie, et 3. Recycler les matières transformables."
  },
  {
    "question": "Comment signaler une fuite d'eau ou un problème au collège ?",
    "reponse": "Il suffit de se rendre sur l'onglet 'Signalement' de notre plateforme ECO-ÉCOLE CI, de remplir le formulaire avec une photo et d'indiquer le lieu pour que le comité intervienne rapidement !"
  },
  {
    "question": "Où se situe notre établissement éco-citoyen ?",
    "reponse": "Notre établissement est le Collège Départemental d'Agnibilékrou en Côte d'Ivoire, engagé dans la transition écologique et le programme Éco-Écoles."
  }
];