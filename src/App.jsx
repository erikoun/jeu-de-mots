import { useState, useEffect } from "react";

// Légende catégories : n=nom, adj=adjectif, v=verbe, adv=adverbe, loc=locution
const D = (d, e) => ({ definition: d, exemple: e });

const CH = [
  {
    id:"raisonnement", numero:1, titre:"Le Raisonnement", icone:"⚖️",
    description:"Logique, déduction, argumentation",
    couleur:"#3d6080", accent:"#7baee8",
    mots:[
      { mot:"raisonner", nature:"v.", ...D("Faire usage de sa raison pour penser, juger, argumenter avec méthode.","Il faut raisonner avant d'agir.") },
      { mot:"déduire", nature:"v.", ...D("Tirer une conclusion logique à partir de prémisses établies.","De ses observations, elle déduisit la vérité.") },
      { mot:"inférer", nature:"v.", ...D("Conclure par inférence, en tirant une conséquence d'une proposition.","On peut inférer son accord de son silence.") },
      { mot:"syllogisme", nature:"n.m.", ...D("Raisonnement logique en trois propositions : majeure, mineure, conclusion.","Le syllogisme classique : « Tout homme est mortel… »") },
      { mot:"postulat", nature:"n.m.", ...D("Proposition admise sans démonstration comme point de départ d'un raisonnement.","Ce postulat est à la base de sa théorie.") },
      { mot:"axiome", nature:"n.m.", ...D("Vérité première, évidente, qui ne requiert pas de preuve.","En géométrie, les axiomes d'Euclide sont fondamentaux.") },
      { mot:"réfuter", nature:"v.", ...D("Démontrer la fausseté d'une affirmation par des arguments contraires.","Il a réfuté chaque argument de l'adversaire.") },
      { mot:"corroborer", nature:"v.", ...D("Confirmer, appuyer une affirmation par des preuves supplémentaires.","Les faits corroborent son témoignage.") },
      { mot:"conjecture", nature:"n.f.", ...D("Opinion fondée sur des probabilités mais sans preuve certaine.","Ce n'est qu'une conjecture, rien n'est prouvé.") },
      { mot:"sophisme", nature:"n.m.", ...D("Raisonnement qui semble logique mais repose sur une fausse prémisse ou une tromperie.","Son argumentation n'était qu'un sophisme habile.") },
      { mot:"induire", nature:"v.", ...D("Remonter des faits particuliers à une loi générale ; amener quelqu'un à quelque chose.","De nombreux exemples, on induit une règle.") },
      { mot:"paradoxe", nature:"n.m.", ...D("Affirmation contraire à l'opinion commune ou qui se contredit apparemment elle-même.","Le paradoxe du menteur illustre les limites de la logique.") },
      { mot:"abstrait", nature:"adj.", ...D("Qui relève de la pensée pure, sans référence à un objet concret.","La liberté est un concept abstrait.") },
      { mot:"empirique", nature:"adj.", ...D("Fondé sur l'expérience sensible, l'observation, plutôt que sur la théorie.","Sa méthode est purement empirique.") },
      { mot:"démontrer", nature:"v.", ...D("Établir la vérité d'une proposition par un enchaînement rigoureux de preuves.","Il a démontré le théorème en quelques étapes.") },
    ]
  },
  {
    id:"temps", numero:2, titre:"Le Temps", icone:"⏳",
    description:"Durée, mémoire, anticipation",
    couleur:"#7a5a1a", accent:"#c8a84b",
    mots:[
      { mot:"anachronisme", nature:"n.m.", cat:"n", ...D("Erreur consistant à placer un fait dans une époque qui n'est pas la sienne.","Un téléphone dans un film médiéval serait un anachronisme.") },
      { mot:"anticipation", nature:"n.f.", cat:"n", ...D("Action de prévoir ou d'accomplir quelque chose avant le moment prévu.","Son anticipation des événements lui a permis d'éviter le pire.") },
      { mot:"décade", nature:"n.f.", cat:"n", ...D("Période de dix jours ; parfois employé abusivement pour « décennie ».","La première décade du mois fut chargée.") },
      { mot:"décennie", nature:"n.f.", cat:"n", ...D("Période de dix ans.","La décennie 1990 fut marquée par l'essor d'Internet.") },
      { mot:"expectative", nature:"n.f.", cat:"n", ...D("Attente d'une chose espérée mais incertaine ; position d'attente.","Rester dans l'expectative sans prendre de décision.") },
      { mot:"diligence (faire ~)", nature:"n.f.", cat:"n", ...D("Promptitude et soin apportés à accomplir quelque chose dans les délais.","Il a fait diligence pour remettre son rapport à temps.") },
      { mot:"hiatus", nature:"n.m.", cat:"n", ...D("Interruption, lacune dans une continuité temporelle ou logique.","Un hiatus de plusieurs années dans sa carrière.") },
      { mot:"millésime", nature:"n.m.", cat:"n", ...D("Année d'une production ; marque de l'année sur une pièce ou un objet.","Ce millésime 2015 est exceptionnel.") },
      { mot:"pérennité", nature:"n.f.", cat:"n", ...D("Caractère de ce qui dure indéfiniment, qui persiste dans le temps.","La pérennité de cette institution est remarquable.") },
      { mot:"prélude", nature:"n.m.", cat:"n", ...D("Ce qui précède et annonce quelque chose ; introduction.","Ces tensions étaient le prélude à une crise majeure.") },
      { mot:"prémices", nature:"n.f.pl.", cat:"n", ...D("Premiers signes, débuts, commencements d'un phénomène.","Les prémices du printemps se faisaient sentir.") },
      { mot:"prologue", nature:"n.m.", cat:"n", ...D("Introduction qui précède le début d'une œuvre ou d'une action.","Ce discours servit de prologue aux négociations.") },
      { mot:"prospective", nature:"n.f.", cat:"n", ...D("Ensemble de recherches sur l'évolution future de la société.","La prospective économique prévoit une croissance modérée.") },
      { mot:"réminiscence", nature:"n.f.", cat:"n", ...D("Souvenir vague et imprécis qui remonte à la mémoire.","Une réminiscence d'enfance lui traversa l'esprit.") },
      { mot:"ancestral(e)", nature:"adj.", cat:"adj", ...D("Qui remonte aux ancêtres, qui vient d'un passé très lointain.","Une tradition ancestrale transmise de génération en génération.") },
      { mot:"antédiluvien(ne)", nature:"adj.", cat:"adj", ...D("Qui date d'avant le déluge ; par ext., extrêmement vieux ou démodé.","Il utilisait encore un ordinateur antédiluvien.") },
      { mot:"archaïque", nature:"adj.", cat:"adj", ...D("Qui appartient à une époque ancienne révolue ; désuet, primitif.","Une méthode archaïque que personne n'utilise plus.") },
      { mot:"caduc(que)", nature:"adj.", cat:"adj", ...D("Qui n'est plus en vigueur, périmé ; fragile et voué à disparaître.","Cette loi est désormais caduque.") },
      { mot:"concomitant(e)", nature:"adj.", cat:"adj", ...D("Qui se produit en même temps qu'autre chose ; simultané.","Des événements concomitants dans deux pays différents.") },
      { mot:"contemporain(e)", nature:"adj.", cat:"adj", ...D("Qui existe ou a existé à la même époque ; relatif à l'époque actuelle.","Un artiste contemporain très reconnu.") },
      { mot:"désuet(ète)", nature:"adj.", cat:"adj", ...D("Qui n'est plus en usage, tombé en désuétude.","Un vocabulaire désuet qui appartient à une autre époque.") },
      { mot:"endémique", nature:"adj.", cat:"adj", ...D("Qui sévit en permanence dans une région ; devenu régulier et persistant.","Le chômage endémique dans cette région industrielle.") },
      { mot:"estival(e)", nature:"adj.", cat:"adj", ...D("Qui appartient à l'été, propre à la saison estivale.","Une chaleur estivale étouffante.") },
      { mot:"fugace", nature:"adj.", cat:"adj", ...D("Qui passe très vite, éphémère, de courte durée.","Un bonheur fugace, difficile à saisir.") },
      { mot:"immémorial(e)", nature:"adj.", cat:"adj", ...D("Qui remonte à une époque si lointaine qu'on n'en a plus mémoire.","Une coutume de temps immémoriaux.") },
      { mot:"imminent(e)", nature:"adj.", cat:"adj", ...D("Qui va se produire très prochainement, sur le point d'arriver.","Le départ est imminent, dépêchez-vous.") },
      { mot:"intempestif(ve)", nature:"adj.", cat:"adj", ...D("Qui survient à contretemps, mal à propos.","Une remarque intempestive qui a gêné tout le monde.") },
      { mot:"invétéré(e)", nature:"adj.", cat:"adj", ...D("Profondément enraciné par l'ancienneté ; dont l'habitude est ancienne.","Un fumeur invétéré depuis quarante ans.") },
      { mot:"opportun(e)", nature:"adj.", cat:"adj", ...D("Qui survient au bon moment, qui convient aux circonstances.","Une intervention opportune qui a tout changé.") },
      { mot:"prémonitoire", nature:"adj.", cat:"adj", ...D("Qui annonce un événement à venir, qui constitue un présage.","Un rêve prémonitoire qui s'est réalisé.") },
      { mot:"récurrent(e)", nature:"adj.", cat:"adj", ...D("Qui revient, se reproduit périodiquement.","Un thème récurrent dans son œuvre.") },
      { mot:"rétrograde", nature:"adj.", cat:"adj", ...D("Qui va en sens inverse du progrès ; qui revient en arrière.","Une politique rétrograde qui ignore l'avenir.") },
      { mot:"rétrospectif(ve)", nature:"adj.", cat:"adj", ...D("Qui concerne le passé, qui regarde en arrière dans le temps.","Une analyse rétrospective des erreurs commises.") },
      { mot:"révolu(e)", nature:"adj.", cat:"adj", ...D("Entièrement accompli, définitivement passé.","Une époque révolue qu'on ne reverra plus.") },
      { mot:"séculaire", nature:"adj.", cat:"adj", ...D("Qui existe depuis un ou plusieurs siècles.","Un chêne séculaire au cœur du village.") },
      { mot:"sporadique", nature:"adj.", cat:"adj", ...D("Qui se produit de façon irrégulière et dispersée dans le temps.","Des pluies sporadiques tout au long du mois.") },
      { mot:"suranné(e)", nature:"adj.", cat:"adj", ...D("Démodé, qui appartient à un temps révolu ; vieilli.","Des manières surannées qui semblent d'un autre âge.") },
      { mot:"ultérieur(e)", nature:"adj.", cat:"adj", ...D("Qui vient après, qui se situe dans un temps futur.","Nous traiterons ce point lors d'une réunion ultérieure.") },
      { mot:"ultime", nature:"adj.", cat:"adj", ...D("Qui est le dernier, le final, sans suite possible.","Son ultime tentative s'est soldée par un succès.") },
      { mot:"vétuste", nature:"adj.", cat:"adj", ...D("Vieux et dégradé par le temps.","Un immeuble vétuste menaçant de s'effondrer.") },
      { mot:"anticiper", nature:"v.", cat:"v", ...D("Prévoir et prendre en compte par avance ; agir avant l'heure prévue.","Il a su anticiper les besoins de ses clients.") },
      { mot:"commémorer", nature:"v.", cat:"v", ...D("Rappeler solennellement le souvenir d'un événement ou d'une personne.","On commémore chaque année la fin de la guerre.") },
      { mot:"subsister", nature:"v.", cat:"v", ...D("Continuer d'exister malgré le temps ou les difficultés.","Quelques vestiges romains subsistent encore.") },
    ]
  },
  {
    id:"lieu", numero:3, titre:"Le Lieu", icone:"🗺️",
    description:"Espace, territoire, déplacement",
    couleur:"#5a2a70", accent:"#b07ad0",
    mots:[
      { mot:"antipodes", nature:"n.m.pl.", cat:"n", ...D("Points diamétralement opposés du globe ; par ext., l'opposé absolu de quelque chose.","L'Australie est aux antipodes de la France.") },
      { mot:"champ", nature:"n.m.", cat:"n", ...D("Étendue de terrain ; domaine d'activité ou d'application.","Le champ des possibles s'étend à l'infini.") },
      { mot:"claustration", nature:"n.f.", cat:"n", ...D("État d'enfermement, volontaire ou subi, dans un espace limité.","La claustration prolongée affecte le moral.") },
      { mot:"dédale", nature:"n.m.", cat:"n", ...D("Ensemble de chemins tortueusement entrelacés ; labyrinthe.","Se perdre dans le dédale des ruelles de la vieille ville.") },
      { mot:"émergence", nature:"n.f.", cat:"n", ...D("Action de surgir, d'apparaître ; apparition d'un phénomène nouveau.","L'émergence de nouveaux quartiers dans la ville.") },
      { mot:"éminence", nature:"n.f.", cat:"n", ...D("Élévation de terrain ; hauteur ; aussi : titre d'un cardinal.","Une éminence rocheuse dominant la vallée.") },
      { mot:"exode", nature:"n.m.", cat:"n", ...D("Émigration massive d'une population hors d'un territoire.","L'exode rural a vidé les campagnes au XXe siècle.") },
      { mot:"exotisme", nature:"n.m.", cat:"n", ...D("Caractère de ce qui est étranger, lointain, dépaysant.","Le voyage lui apportait un sentiment d'exotisme.") },
      { mot:"expansion", nature:"n.f.", cat:"n", ...D("Développement, extension progressive dans l'espace.","L'expansion urbaine grignote les terres agricoles.") },
      { mot:"extension", nature:"n.f.", cat:"n", ...D("Action d'étendre, d'agrandir ; augmentation de la superficie.","L'extension du réseau de transports en commun.") },
      { mot:"exutoire", nature:"n.m.", cat:"n", ...D("Lieu ou moyen de décharge ; ce qui permet de libérer une tension.","Le sport est un exutoire pour ses frustrations.") },
      { mot:"inclinaison", nature:"n.f.", cat:"n", ...D("Angle que fait un plan ou un objet avec la verticale ou l'horizontale.","L'inclinaison du terrain rendait la marche difficile.") },
      { mot:"insulaire", nature:"n./adj.", cat:"n", ...D("Habitant d'une île ; relatif à une île ou à son isolement.","La mentalité insulaire façonne le rapport au territoire.") },
      { mot:"intrus(e)", nature:"n.", cat:"n", ...D("Personne qui s'introduit quelque part sans y être invitée ou admise.","Il se sentait comme un intrus dans ce milieu fermé.") },
      { mot:"microcosme", nature:"n.m.", cat:"n", ...D("Monde en miniature ; milieu restreint reflétant une réalité plus vaste.","Ce village est le microcosme de la société française.") },
      { mot:"pérégrinations", nature:"n.f.pl.", cat:"n", ...D("Voyages longs et variés en de nombreux endroits ; errances.","Ses pérégrinations à travers l'Asie l'ont transformé.") },
      { mot:"périple", nature:"n.m.", cat:"n", ...D("Long voyage comportant de nombreuses étapes et un retour au point de départ.","Un périple de six mois autour du monde.") },
      { mot:"promiscuité", nature:"n.f.", cat:"n", ...D("Coexistence forcée de personnes dans un espace trop restreint.","La promiscuité dans les transports aux heures de pointe.") },
      { mot:"reclus(e)", nature:"n.", cat:"n", ...D("Personne qui vit retirée du monde, isolée.","Il vivait en reclus depuis des années.") },
      { mot:"ubiquité", nature:"n.f.", cat:"n", ...D("Capacité d'être présent en plusieurs endroits à la fois.","Il avait le don d'ubiquité, semblant partout à la fois.") },
      { mot:"agreste", nature:"adj.", cat:"adj", ...D("Qui appartient aux champs, à la campagne ; rustique et champêtre.","Un paysage agreste d'une beauté simple.") },
      { mot:"bucolique", nature:"adj.", cat:"adj", ...D("Qui évoque la vie champêtre, pastorale, idyllique.","Une promenade bucolique au bord de la rivière.") },
      { mot:"confiné(e)", nature:"adj.", cat:"adj", ...D("Enfermé dans un espace étroit ; dont l'air ne se renouvelle pas.","Travailler dans une pièce confinée est épuisant.") },
      { mot:"cosmopolite", nature:"adj.", cat:"adj", ...D("Qui regroupe des personnes de toutes origines ; ouvert sur le monde.","Paris est une ville résolument cosmopolite.") },
      { mot:"infus(e)", nature:"adj.", cat:"adj", ...D("Communiqué à quelqu'un sans apprentissage, comme par nature ou instinct.","Il croyait avoir la science infuse.") },
      { mot:"rustique", nature:"adj.", cat:"adj", ...D("Propre à la campagne ; simple, robuste, sans raffinement.","Un mobilier rustique en chêne massif.") },
      { mot:"sédentaire", nature:"adj.", cat:"adj", ...D("Qui reste fixé en un lieu ; qui ne se déplace pas ou peu.","Un mode de vie sédentaire favorise certaines maladies.") },
      { mot:"ancrer", nature:"v.", cat:"v", ...D("Fixer solidement en un lieu ; enraciner une idée ou une habitude.","Cette tradition est ancrée dans la culture locale.") },
      { mot:"confiner", nature:"v.", cat:"v", ...D("Enfermer dans un espace limité ; être proche de, toucher à.","Confiner les enfants à l'intérieur par mauvais temps.") },
      { mot:"émaner", nature:"v.", cat:"v", ...D("Se dégager, provenir d'une source ; être issu de.","Une douce lumière émanait de la fenêtre.") },
      { mot:"exhausser", nature:"v.", cat:"v", ...D("Élever, augmenter la hauteur de quelque chose.","Exhausser un mur pour gagner en intimité.") },
      { mot:"expurger", nature:"v.", cat:"v", ...D("Supprimer d'un texte ou d'un lieu ce qui est jugé indésirable.","Expurger un document de ses passages litigieux.") },
      { mot:"extirper", nature:"v.", cat:"v", ...D("Arracher avec effort ; faire disparaître complètement.","Extirper une mauvaise herbe à la racine.") },
      { mot:"s'immiscer", nature:"v.", cat:"v", ...D("S'introduire sans y être invité, se mêler indûment de quelque chose.","Il s'immisçait dans toutes les conversations.") },
      { mot:"inculquer", nature:"v.", cat:"v", ...D("Faire pénétrer durablement une idée, une valeur dans l'esprit de quelqu'un.","Inculquer le respect dès le plus jeune âge.") },
      { mot:"s'ingérer", nature:"v.", cat:"v", ...D("S'introduire dans les affaires d'autrui sans y être appelé.","Il s'ingérait dans la vie privée de ses voisins.") },
      { mot:"sonder", nature:"v.", cat:"v", ...D("Explorer les profondeurs d'un lieu ou d'un sujet ; chercher à connaître.","Sonder l'opinion publique avant une élection.") },
    ]
  },
  {
    id:"grandeur", numero:4, titre:"Ordres de grandeur", icone:"⚡",
    description:"Taille, importance, intensité",
    couleur:"#7a3010", accent:"#e87a40",
    mots:[
      { mot:"acuité", nature:"n.f.", cat:"n", ...D("Finesse, précision d'un sens ou d'une faculté intellectuelle ; intensité.","L'acuité de son regard ne laissait rien passer.") },
      { mot:"apogée", nature:"n.m.", cat:"n", ...D("Point culminant, moment de plus grande intensité ou gloire.","Cette œuvre représente l'apogée de sa carrière.") },
      { mot:"contingences", nature:"n.f.pl.", cat:"n", ...D("Événements fortuits, aléas secondaires qui peuvent survenir ou non.","Il gérait les contingences du quotidien avec calme.") },
      { mot:"hécatombe", nature:"n.f.", cat:"n", ...D("Massacre, destruction en très grand nombre.","L'épidémie fit une véritable hécatombe dans la région.") },
      { mot:"impondérable", nature:"n.m.", cat:"n", ...D("Élément imprévisible, impossible à évaluer, qui influe sur une situation.","Les impondérables du voyage avaient tout chamboulé.") },
      { mot:"iota", nature:"n.m.", cat:"n", ...D("La plus petite quantité possible ; le moindre détail.","Il ne changea pas un iota à son discours.") },
      { mot:"mégalomane", nature:"n./adj.", cat:"n", ...D("Personne qui a une vision démesurée de sa propre importance.","Ce dirigeant mégalomane voulait régner sur le monde entier.") },
      { mot:"myriade", nature:"n.f.", cat:"n", ...D("Très grand nombre indéfini, multitude.","Une myriade d'étoiles illuminait le ciel nocturne.") },
      { mot:"primauté", nature:"n.f.", cat:"n", ...D("Caractère de ce qui est premier en rang, en importance.","La primauté du droit sur la force est un principe fondamental.") },
      { mot:"quorum", nature:"n.m.", cat:"n", ...D("Nombre minimal de membres requis pour qu'une assemblée puisse délibérer.","Le quorum n'étant pas atteint, le vote fut reporté.") },
      { mot:"quintessence", nature:"n.f.", cat:"n", ...D("Ce qu'il y a de plus pur, de plus essentiel dans quelque chose.","Ce roman est la quintessence de la littérature humaniste.") },
      { mot:"recrudescence", nature:"n.f.", cat:"n", ...D("Reprise ou aggravation soudaine d'un phénomène après une accalmie.","Une recrudescence des violences a surpris les autorités.") },
      { mot:"régression", nature:"n.f.", cat:"n", ...D("Retour en arrière, diminution, affaiblissement d'un phénomène.","La régression du niveau scolaire inquiète les enseignants.") },
      { mot:"rudiment", nature:"n.m.", cat:"n", ...D("Connaissance élémentaire, base d'une discipline ; élément primitif.","Il ne connaissait que les rudiments de l'algèbre.") },
      { mot:"anodin(e)", nature:"adj.", cat:"adj", ...D("Sans importance, sans danger, insignifiant.","Une remarque anodine qui passa inaperçue.") },
      { mot:"bénin(gne)", nature:"adj.", cat:"adj", ...D("Sans gravité, sans danger ; d'une grande douceur.","Une tumeur bénigne ne présente pas de risque vital.") },
      { mot:"crucial(e)", nature:"adj.", cat:"adj", ...D("D'une importance décisive, capital.","Ce moment crucial allait changer le cours de l'histoire.") },
      { mot:"cyclopéen(ne)", nature:"adj.", cat:"adj", ...D("D'une taille ou d'une puissance gigantesque, digne des Cyclopes.","Un chantier cyclopéen mobilisant des milliers d'ouvriers.") },
      { mot:"dérisoire", nature:"adj.", cat:"adj", ...D("D'une valeur ou d'une importance si faible qu'elle prête à rire.","Vendre sa maison pour une somme dérisoire.") },
      { mot:"éminent(e)", nature:"adj.", cat:"adj", ...D("Qui se distingue nettement par ses qualités supérieures.","Un éminent professeur reconnu dans le monde entier.") },
      { mot:"omnipotent(e)", nature:"adj.", cat:"adj", ...D("Qui a un pouvoir absolu, illimité.","Un souverain omnipotent qui ne tolérait aucune opposition.") },
      { mot:"omniscient(e)", nature:"adj.", cat:"adj", ...D("Qui sait tout, qui a une connaissance universelle.","Le narrateur omniscient voit dans l'âme de chaque personnage.") },
      { mot:"outrancier(ère)", nature:"adj.", cat:"adj", ...D("Qui pousse les choses à l'excès, qui manque de mesure.","Des propos outranciers qui choquèrent l'assemblée.") },
      { mot:"pécuniaire", nature:"adj.", cat:"adj", ...D("Qui a rapport à l'argent, aux finances.","Des difficultés pécuniaires l'obligèrent à vendre sa voiture.") },
      { mot:"prépondérant(e)", nature:"adj.", cat:"adj", ...D("Qui a plus de poids, d'importance que les autres ; dominant.","Son rôle prépondérant dans les négociations fut décisif.") },
      { mot:"pondéreux(se)", nature:"adj.", cat:"adj", ...D("De grand poids ; par ext., lourd, pesant dans la réflexion.","Des marchandises pondéreuses nécessitant un transport spécial.") },
      { mot:"sommaire", nature:"adj.", cat:"adj", ...D("Réduit à l'essentiel, succinct ; fait rapidement et sans soin.","Un exposé sommaire qui survolait les points essentiels.") },
      { mot:"superfétatoire", nature:"adj.", cat:"adj", ...D("Qui s'ajoute inutilement, superflu, sans nécessité.","Ces précautions superfétatoires alourdissaient la procédure.") },
      { mot:"subalterne", nature:"adj.", cat:"adj", ...D("D'un rang inférieur, secondaire, subordonné.","Un rôle subalterne qui ne lui convenait guère.") },
      { mot:"subsidiaire", nature:"adj.", cat:"adj", ...D("Accessoire, secondaire, qui vient en complément ou en renfort.","Une question subsidiaire pour départager les ex-æquo.") },
      { mot:"subtil(e)", nature:"adj.", cat:"adj", ...D("D'une finesse difficile à percevoir ; perspicace, ingénieux.","Une analyse subtile des enjeux politiques.") },
      { mot:"succinct(e)", nature:"adj.", cat:"adj", ...D("Exprimé en peu de mots, bref et concis.","Une réponse succincte mais parfaitement claire.") },
      { mot:"ténu(e)", nature:"adj.", cat:"adj", ...D("Très fin, très mince, à peine perceptible.","Un lien ténu entre les deux événements.") },
      { mot:"titanesque", nature:"adj.", cat:"adj", ...D("D'une grandeur, d'une puissance ou d'une ampleur extraordinaire.","Une œuvre titanesque qui prit vingt ans à construire.") },
      { mot:"virulent(e)", nature:"adj.", cat:"adj", ...D("D'une grande violence, d'une agressivité intense ; très actif et nocif.","Une critique virulente qui démolissait l'argumentation adverse.") },
      { mot:"s'amenuiser", nature:"v.", cat:"v", ...D("Devenir progressivement plus petit, plus mince ; diminuer.","Ses chances de victoire s'amenuisaient à chaque minute.") },
      { mot:"décimer", nature:"v.", cat:"v", ...D("Faire périr un grand nombre de personnes ou d'animaux.","La maladie a décimé les troupeaux de la région.") },
      { mot:"édulcorer", nature:"v.", cat:"v", ...D("Adoucir, atténuer, affadir ; rendre moins fort ou moins choquant.","Il avait édulcoré son rapport pour ne pas froisser les susceptibilités.") },
      { mot:"l'emporter", nature:"v.", cat:"v", ...D("Être supérieur, triompher ; avoir plus d'importance ou de poids.","La raison finit toujours par l'emporter sur la passion.") },
      { mot:"moduler", nature:"v.", cat:"v", ...D("Adapter, nuancer, faire varier selon les circonstances.","Moduler son discours selon l'audience.") },
      { mot:"supputer", nature:"v.", cat:"v", ...D("Calculer, évaluer approximativement ; estimer par conjecture.","Il supputa les chances de succès avant de se lancer.") },
      { mot:"recenser", nature:"v.", cat:"v", ...D("Dénombrer, inventorier, établir une liste exhaustive.","Recenser toutes les espèces présentes dans la forêt.") },
      { mot:"supplanter", nature:"v.", cat:"v", ...D("Prendre la place de quelqu'un ou quelque chose en le rendant inférieur.","Le numérique a supplanté le papier dans bien des domaines.") },
      { mot:"suppléer", nature:"v.", cat:"v", ...D("Remplacer quelqu'un ou quelque chose qui manque ; compenser.","Elle suppléait son manque d'expérience par son enthousiasme.") },
    ]
  },
  {
    id:"quantites", numero:5, titre:"Quantités et qualités", icone:"🌿",
    description:"Abondance, manque, valeur, richesse",
    couleur:"#2a6040", accent:"#5aba80",
    mots:[
      { mot:"adjuvant", nature:"n.m.", cat:"n", ...D("Ce qui aide, qui renforce l'action principale ; substance auxiliaire.","Ce médicament agit comme adjuvant au traitement principal.") },
      { mot:"amputation", nature:"n.f.", cat:"n", ...D("Suppression d'une partie importante ; retranchement.","Une amputation budgétaire sévère a touché le département.") },
      { mot:"carence", nature:"n.f.", cat:"n", ...D("Manque, insuffisance de quelque chose d'essentiel.","Une carence en fer peut provoquer une anémie.") },
      { mot:"défection", nature:"n.f.", cat:"n", ...D("Abandon d'une cause, d'un groupe ; fait de faire faux bond.","Plusieurs membres ont fait défection avant le vote.") },
      { mot:"désaffection", nature:"n.f.", cat:"n", ...D("Perte progressive d'intérêt ou d'attachement pour quelque chose.","La désaffection du public pour ce musée est préoccupante.") },
      { mot:"détriment (au ~ de)", nature:"n.m.", cat:"n", ...D("Dommage, préjudice subi ; au détriment de : au dépens de.","Il a réussi au détriment de ses collègues.") },
      { mot:"faste", nature:"n.m.", cat:"n", ...D("Magnificence, luxe ostentatoire ; signe de prospérité.","Le faste de la cérémonie impressionna tous les invités.") },
      { mot:"inanité", nature:"n.f.", cat:"n", ...D("Caractère vide de sens, de portée, d'utilité ; futilité.","L'inanité de ses arguments était évidente pour tous.") },
      { mot:"inflation", nature:"n.f.", cat:"n", ...D("Hausse généralisée des prix ; augmentation excessive d'un phénomène.","L'inflation a réduit le pouvoir d'achat des ménages.") },
      { mot:"intégrité", nature:"n.f.", cat:"n", ...D("État de ce qui est intact, complet ; droiture morale irréprochable.","Son intégrité professionnelle n'a jamais été mise en doute.") },
      { mot:"pactole", nature:"n.m.", cat:"n", ...D("Source de richesses considérables, aubaine financière.","Ce contrat représentait un véritable pactole pour l'entreprise.") },
      { mot:"panacée", nature:"n.f.", cat:"n", ...D("Remède universel censé guérir tous les maux ; solution miracle.","La technologie n'est pas une panacée pour tous les problèmes sociaux.") },
      { mot:"parcimonie", nature:"n.f.", cat:"n", ...D("Économie excessive, épargne mesquine dans l'utilisation de quelque chose.","Il distribuait les compliments avec une extrême parcimonie.") },
      { mot:"pénurie", nature:"n.f.", cat:"n", ...D("Manque grave, insuffisance criante de quelque chose de nécessaire.","La pénurie de logements affecte les grandes villes.") },
      { mot:"reliquat", nature:"n.m.", cat:"n", ...D("Ce qui reste après déduction, solde restant d'une somme ou d'un tout.","Le reliquat du budget sera reporté à l'année prochaine.") },
      { mot:"satiété", nature:"n.f.", cat:"n", ...D("État de complète satisfaction d'un besoin, notamment alimentaire ; excès.","Il mangea jusqu'à satiété lors du festin.") },
      { mot:"déficient(e)", nature:"adj.", cat:"adj", ...D("Qui présente une insuffisance, un manque, une défaillance.","Un système immunitaire déficient ne peut lutter contre les infections.") },
      { mot:"dispendieux(se)", nature:"adj.", cat:"adj", ...D("Qui entraîne de grandes dépenses, coûteux.","Un mode de vie dispendieux qui l'a mené à la ruine.") },
      { mot:"exhaustif(ve)", nature:"adj.", cat:"adj", ...D("Qui traite un sujet dans sa totalité, sans rien omettre.","Une liste exhaustive de toutes les œuvres de l'auteur.") },
      { mot:"frugal(e)", nature:"adj.", cat:"adj", ...D("Qui se contente de peu, sobre dans sa consommation.","Un repas frugal mais nourrissant.") },
      { mot:"indigent(e)", nature:"adj.", cat:"adj", ...D("Qui est dans la misère, privé des ressources nécessaires.","Des familles indigentes aidées par les associations caritatives.") },
      { mot:"intégral(e)", nature:"adj.", cat:"adj", ...D("Complet, entier, sans rien retrancher.","La version intégrale du film dure quatre heures.") },
      { mot:"lucratif(ve)", nature:"adj.", cat:"adj", ...D("Qui rapporte des gains, qui est financièrement avantageux.","Une activité très lucrative dans le secteur numérique.") },
      { mot:"nanti(e)", nature:"adj.", cat:"adj", ...D("Qui possède des richesses, bien pourvu matériellement.","Les milieux nantis ne perçoivent pas les difficultés du quotidien.") },
      { mot:"onéreux(se)", nature:"adj.", cat:"adj", ...D("Qui coûte cher, qui impose des charges importantes.","Les travaux de rénovation se sont révélés très onéreux.") },
      { mot:"opulent(e)", nature:"adj.", cat:"adj", ...D("Qui est dans l'abondance, la richesse ; qui manifeste la prospérité.","Une famille opulente vivant dans un manoir somptueux.") },
      { mot:"pléthorique", nature:"adj.", cat:"adj", ...D("Excessivement abondant, en surnombre.","Une offre pléthorique de produits encombrait les rayons.") },
      { mot:"prodigue", nature:"adj.", cat:"adj", ...D("Qui dépense avec excès, sans compter ; très généreux.","L'enfant prodigue de la parabole biblique.") },
      { mot:"radical(e)", nature:"adj.", cat:"adj", ...D("Qui agit sur la cause profonde ; total, complet, sans compromis.","Un changement radical de stratégie s'imposait.") },
      { mot:"spartiate", nature:"adj.", cat:"adj", ...D("D'une sobriété et d'une austérité extrêmes, à la manière des Spartiates.","Des conditions de vie spartiates sans aucun confort.") },
      { mot:"affecter (à)", nature:"v.", cat:"v", ...D("Destiner, attribuer quelque chose à un usage ou une personne précise.","Les fonds ont été affectés à la recherche médicale.") },
      { mot:"annihiler", nature:"v.", cat:"v", ...D("Réduire à néant, détruire complètement, anéantir.","La crise a annihilé tous ses efforts des dernières années.") },
      { mot:"défalquer", nature:"v.", cat:"v", ...D("Déduire, retrancher une somme d'un total.","Après défalquer les charges, le bénéfice reste modeste.") },
      { mot:"défrayer", nature:"v.", cat:"v", ...D("Prendre en charge les dépenses de quelqu'un ; défrayer la chronique.","L'entreprise défraiera tous vos frais de déplacement.") },
      { mot:"dilapider", nature:"v.", cat:"v", ...D("Dépenser de façon excessive et inconsidérée, gaspiller.","Il a dilapidé en quelques mois l'héritage de son père.") },
      { mot:"émousser", nature:"v.", cat:"v", ...D("Diminuer la vivacité, l'intensité de quelque chose ; rendre moins vif.","Les années avaient émoussé sa passion pour la politique.") },
      { mot:"impartir", nature:"v.", cat:"v", ...D("Accorder, attribuer un délai ou une tâche à quelqu'un.","Dans le délai imparti, il n'avait pas pu terminer le rapport.") },
      { mot:"imputer", nature:"v.", cat:"v", ...D("Attribuer la responsabilité de quelque chose à quelqu'un ; déduire d'un compte.","On lui a imputé la responsabilité de l'échec.") },
      { mot:"octroyer", nature:"v.", cat:"v", ...D("Accorder, concéder quelque chose à titre de faveur ou de droit.","Le gouvernement a octroyé une subvention aux associations.") },
      { mot:"parasiter", nature:"v.", cat:"v", ...D("Vivre aux dépens d'un autre ; perturber le fonctionnement de quelque chose.","Des rumeurs parasitaient les négociations.") },
      { mot:"péricliter", nature:"v.", cat:"v", ...D("Décliner, aller vers la ruine, se dégrader progressivement.","Sans investissement, l'entreprise risque de péricliter.") },
      { mot:"prodiguer", nature:"v.", cat:"v", ...D("Donner, distribuer en grande quantité et généreusement.","Elle prodiguait des conseils à tous ceux qui venaient la voir.") },
      { mot:"recouvrer", nature:"v.", cat:"v", ...D("Récupérer ce qu'on avait perdu ; retrouver.","Il a recouvré la vue après l'opération.") },
      { mot:"résorber", nature:"v.", cat:"v", ...D("Faire disparaître progressivement, réduire un excès ou un déficit.","Des mesures pour résorber le chômage ont été annoncées.") },
      { mot:"tronquer", nature:"v.", cat:"v", ...D("Retrancher une partie de quelque chose ; présenter de manière incomplète.","Tronquer une citation pour en trahir le sens.") },
    ]
  },
  {
    id:"vraifaux", numero:6, titre:"Le Vrai / Le Faux", icone:"🎭",
    description:"Vérité, illusion, ordre et désordre",
    couleur:"#6a1a3a", accent:"#d06090",
    mots:[
      { mot:"aberration", nature:"n.f.", cat:"n", ...D("Écart grave par rapport à la logique, à la norme ou à la vérité ; erreur manifeste.","C'est une aberration de construire une route dans cette zone inondable.") },
      { mot:"accalmie", nature:"n.f.", cat:"n", ...D("Calme temporaire après une période agitée ; pause dans un désordre.","Une brève accalmie avant la reprise des hostilités.") },
      { mot:"chaos", nature:"n.m.", cat:"n", ...D("Désordre total, confusion extrême ; état initial informe.","Le chaos régnait après la catastrophe naturelle.") },
      { mot:"conflagration", nature:"n.f.", cat:"n", ...D("Embrasement général, conflit de grande ampleur qui bouleverse l'ordre établi.","La conflagration mondiale de 1914 changea la face de l'Europe.") },
      { mot:"distorsion", nature:"n.f.", cat:"n", ...D("Déformation, écart entre deux réalités qui devraient coïncider.","Une distorsion entre les promesses et les actes.") },
      { mot:"fiction", nature:"n.f.", cat:"n", ...D("Ce qui est inventé, imaginé ; œuvre de l'imaginaire.","La frontière entre fiction et réalité devient floue.") },
      { mot:"laxisme", nature:"n.m.", cat:"n", ...D("Excès de tolérance, manque de rigueur dans l'application de règles.","Le laxisme des autorités a encouragé les infractions.") },
      { mot:"licence", nature:"n.f.", cat:"n", ...D("Liberté excessive, transgression des règles ou des convenances.","Se permettre des licences avec la vérité.") },
      { mot:"norme", nature:"n.f.", cat:"n", ...D("Règle, standard, critère de référence auquel on se conforme.","Ce comportement est en dehors des normes acceptées.") },
      { mot:"protocole", nature:"n.m.", cat:"n", ...D("Ensemble de règles formelles régissant une procédure ou une cérémonie.","Le protocole diplomatique doit être scrupuleusement respecté.") },
      { mot:"simulacre", nature:"n.m.", cat:"n", ...D("Apparence trompeuse, imitation sans substance de la réalité.","Ce procès n'était qu'un simulacre de justice.") },
      { mot:"subterfuge", nature:"n.m.", cat:"n", ...D("Moyen habile et trompeur pour se tirer d'embarras ou tromper.","Il usa d'un subterfuge pour éviter la question directe.") },
      { mot:"véracité", nature:"n.f.", cat:"n", ...D("Caractère de ce qui est vrai, conforme à la réalité.","La véracité de ses déclarations fut confirmée par les témoins.") },
      { mot:"virtualité", nature:"n.f.", cat:"n", ...D("Caractère de ce qui n'est qu'en puissance, pas encore réalisé ; monde simulé.","La virtualité de ce projet le rend difficile à financer.") },
      { mot:"aléatoire", nature:"adj.", cat:"adj", ...D("Qui dépend du hasard, incertain, imprévisible.","Le succès de cette stratégie reste très aléatoire.") },
      { mot:"apocalyptique", nature:"adj.", cat:"adj", ...D("Qui évoque la fin du monde, catastrophique au plus haut degré.","Un scénario apocalyptique que personne ne voulait envisager.") },
      { mot:"chimérique", nature:"adj.", cat:"adj", ...D("Qui n'existe que dans l'imagination, irréalisable, illusoire.","Un projet chimérique sans aucune base concrète.") },
      { mot:"erroné(e)", nature:"adj.", cat:"adj", ...D("Qui contient une erreur, qui est faux.","Une information erronée diffusée sans vérification.") },
      { mot:"éventuel(le)", nature:"adj.", cat:"adj", ...D("Qui peut se produire ou non ; possible mais incertain.","Les éventuelles complications seront gérées au cas par cas.") },
      { mot:"factice", nature:"adj.", cat:"adj", ...D("Artificiel, fabriqué pour tromper ; qui n'est pas naturel.","Un enthousiasme factice qui ne trompait personne.") },
      { mot:"fallacieux(se)", nature:"adj.", cat:"adj", ...D("Trompeur, fondé sur de faux arguments destinés à induire en erreur.","Un raisonnement fallacieux qui semblait pourtant convaincant.") },
      { mot:"formel(le)", nature:"adj.", cat:"adj", ...D("Explicite, précis, sans équivoque ; qui respecte les formes établies.","Un démenti formel de toutes les accusations portées.") },
      { mot:"fortuit(e)", nature:"adj.", cat:"adj", ...D("Qui se produit par hasard, de façon accidentelle.","Une rencontre fortuite qui allait changer sa vie.") },
      { mot:"frelaté(e)", nature:"adj.", cat:"adj", ...D("Altéré, falsifié, dont la pureté a été compromise.","Un produit frelaté vendu comme authentique.") },
      { mot:"hétéroclite", nature:"adj.", cat:"adj", ...D("Composé d'éléments disparates, sans unité ni cohérence.","Un assemblage hétéroclite d'objets sans rapport entre eux.") },
      { mot:"insidieux(se)", nature:"adj.", cat:"adj", ...D("Qui agit de façon cachée et trompeuse ; dont les effets sont sournois.","Une maladie insidieuse qui progresse sans symptômes visibles.") },
      { mot:"illusoire", nature:"adj.", cat:"adj", ...D("Qui n'existe qu'en apparence, trompeur, sans réalité.","L'espoir d'une résolution rapide s'avérait illusoire.") },
      { mot:"immuable", nature:"adj.", cat:"adj", ...D("Qui ne change pas, permanent, invariable.","Des principes immuables transmis de génération en génération.") },
      { mot:"indéniable", nature:"adj.", cat:"adj", ...D("Qu'on ne peut nier, incontestable, évident.","Son talent est indéniable, reconnu par tous les experts.") },
      { mot:"orthodoxe", nature:"adj.", cat:"adj", ...D("Conforme à la doctrine officielle ou à l'usage établi.","Une méthode peu orthodoxe mais étonnamment efficace.") },
      { mot:"pertinent(e)", nature:"adj.", cat:"adj", ...D("Approprié, qui convient exactement au sujet ; judicieux.","Une remarque pertinente qui relança le débat.") },
      { mot:"plausible", nature:"adj.", cat:"adj", ...D("Qui semble vrai, vraisemblable, acceptable à première vue.","Son alibi paraissait plausible mais restait invérifiable.") },
      { mot:"potentiel(le)", nature:"adj.", cat:"adj", ...D("Qui existe en puissance, susceptible de se réaliser.","Un candidat potentiel dont la candidature n'est pas encore confirmée.") },
      { mot:"précaire", nature:"adj.", cat:"adj", ...D("Incertain, fragile, dont la stabilité n'est pas garantie.","Une situation précaire qui pouvait basculer à tout moment.") },
      { mot:"probant(e)", nature:"adj.", cat:"adj", ...D("Qui prouve de façon convaincante, concluant.","Des résultats probants qui justifient la poursuite de la recherche.") },
      { mot:"problématique", nature:"adj.", cat:"adj", ...D("Qui pose un problème, incertain, douteux.","Une situation problématique qui nécessite une intervention urgente.") },
      { mot:"stéréotypé(e)", nature:"adj.", cat:"adj", ...D("Figé dans un schéma répétitif, sans originalité ni nuance.","Des réponses stéréotypées qui évitaient toute vraie question.") },
      { mot:"tendancieux(se)", nature:"adj.", cat:"adj", ...D("Qui cherche à orienter l'opinion dans un sens partial.","Un article tendancieux présentant les faits de façon biaisée.") },
      { mot:"accréditer", nature:"v.", cat:"v", ...D("Donner crédit, rendre crédible ; habiliter officiellement quelqu'un.","Ces preuves accréditent la thèse de l'accident.") },
      { mot:"altérer", nature:"v.", cat:"v", ...D("Modifier en mal, dégrader la qualité ou la vérité de quelque chose.","La chaleur a altéré les documents d'archives.") },
      { mot:"être censé(e)", nature:"v.", cat:"v", ...D("Être supposé, réputé faire quelque chose selon une règle ou une attente.","Il est censé remettre son rapport avant vendredi.") },
      { mot:"démythifier", nature:"v.", cat:"v", ...D("Détruire le mythe autour de quelque chose, ramener à la réalité.","Ce documentaire démythifie l'image du self-made-man.") },
      { mot:"dénaturer", nature:"v.", cat:"v", ...D("Altérer profondément la nature ou le sens de quelque chose.","Dénaturer les propos d'un auteur en les citant hors contexte.") },
      { mot:"falsifier", nature:"v.", cat:"v", ...D("Altérer frauduleusement pour tromper, contrefaire.","Il avait falsifié les comptes pour masquer les détournements.") },
      { mot:"se fourvoyer", nature:"v.", cat:"v", ...D("S'égarer, se tromper gravement de chemin ou de jugement.","Il s'est fourvoyé en faisant confiance à cet associé.") },
      { mot:"leurrer", nature:"v.", cat:"v", ...D("Tromper en faisant miroiter de fausses espérances.","Ne te laisse pas leurrer par ses belles promesses.") },
      { mot:"maquiller", nature:"v.", cat:"v", ...D("Déguiser sous une fausse apparence pour tromper.","Maquiller un accident en meurtre pour brouiller les pistes.") },
      { mot:"mystifier", nature:"v.", cat:"v", ...D("Tromper quelqu'un en abusant de sa crédulité ; induire en erreur.","Le prestidigitateur mystifiait son public avec virtuosité.") },
      { mot:"présumer", nature:"v.", cat:"v", ...D("Supposer quelque chose comme vraisemblable sans en avoir la preuve.","On le présume innocent jusqu'à preuve du contraire.") },
    ]
  },
  {
    id:"clairobscur", numero:7, titre:"Le Clair et l'Obscur", icone:"🔮",
    description:"Secret, révélation, ambiguïté",
    couleur:"#1a3a5a", accent:"#60a8d0",
    mots:[
      { mot:"ambigu(ë)", nature:"adj.", cat:"adj", ...D("Qui peut être interprété de plusieurs façons ; équivoque, à double sens.","Sa réponse ambiguë laissait planer le doute.") },
      { mot:"cabalistique", nature:"adj.", cat:"adj", ...D("Relatif à la kabbale ; par ext., mystérieux, incompréhensible pour le profane.","Des signes cabalistiques gravés sur la pierre.") },
      { mot:"énigmatique", nature:"adj.", cat:"adj", ...D("Qui ressemble à une énigme, difficile à comprendre ou à interpréter.","Un sourire énigmatique qui intriguait tous ses interlocuteurs.") },
      { mot:"équivoque", nature:"adj.", cat:"adj", ...D("Dont le sens est incertain, qui prête à confusion ; suspect.","Une formulation équivoque qui pouvait être mal interprétée.") },
      { mot:"ésotérique", nature:"adj.", cat:"adj", ...D("Réservé à un petit nombre d'initiés ; obscur, hermétique.","Un langage ésotérique incompréhensible pour les non-initiés.") },
      { mot:"flagrant(e)", nature:"adj.", cat:"adj", ...D("Qui est évident, manifeste, qu'on ne peut nier.","Un mensonge flagrant que tout le monde pouvait constater.") },
      { mot:"implicite", nature:"adj.", cat:"adj", ...D("Qui est contenu dans quelque chose sans être formellement exprimé.","Un accord implicite s'était établi entre eux.") },
      { mot:"latent(e)", nature:"adj.", cat:"adj", ...D("Qui existe à l'état caché, sans se manifester encore.","Un conflit latent qui couvait depuis des mois.") },
      { mot:"manifeste", nature:"adj.", cat:"adj", ...D("Évident, clair, qui saute aux yeux, incontestable.","Son embarras était manifeste pour tous les présents.") },
      { mot:"nébuleux(se)", nature:"adj.", cat:"adj", ...D("Confus, peu clair, vague comme une nébuleuse ; obscur.","Des projets nébuleux qui manquaient cruellement de précision.") },
      { mot:"notoire", nature:"adj.", cat:"adj", ...D("Connu de tous, dont la réputation est publiquement établie.","Son incompétence était notoire dans tout le secteur.") },
      { mot:"occulte", nature:"adj.", cat:"adj", ...D("Caché, secret ; relatif aux sciences occultes et au surnaturel.","Des forces occultes semblaient guider ses décisions.") },
      { mot:"ostentatoire", nature:"adj.", cat:"adj", ...D("Fait avec ostentation, pour se faire remarquer, de façon exagérément visible.","Un luxe ostentatoire destiné à impressionner la galerie.") },
      { mot:"patent(e)", nature:"adj.", cat:"adj", ...D("Manifeste, évident, reconnu officiellement.","Sa bonne foi était patente et reconnue de tous.") },
      { mot:"sibyllin(e)", nature:"adj.", cat:"adj", ...D("Obscur et difficile à interpréter, à la manière des oracles sibyllins.","Un message sibyllin que personne ne parvint à déchiffrer.") },
      { mot:"subreptice", nature:"adj.", cat:"adj", ...D("Fait furtivement, à la dérobée, de façon dissimulée.","Un regard subreptice qu'il croyait avoir lancé discrètement.") },
      { mot:"sciemment", nature:"adv.", cat:"adv", ...D("En pleine connaissance de cause, délibérément, intentionnellement.","Il avait sciemment omis de mentionner ce fait essentiel.") },
      { mot:"celer", nature:"v.", cat:"v", ...D("Cacher, dissimuler quelque chose à la connaissance d'autrui.","Elle celait sa douleur derrière un sourire permanent.") },
      { mot:"divulguer", nature:"v.", cat:"v", ...D("Révéler au public ce qui était secret ou confidentiel.","Il divulgua les résultats de l'enquête à la presse.") },
      { mot:"élucider", nature:"v.", cat:"v", ...D("Rendre clair, expliquer ce qui était obscur ou mystérieux.","L'enquêteur réussit à élucider cette affaire complexe.") },
      { mot:"s'enquérir", nature:"v.", cat:"v", ...D("Chercher à savoir, se renseigner, poser des questions.","Il s'enquit de la santé de ses collègues avant la réunion.") },
      { mot:"oblitérer", nature:"v.", cat:"v", ...D("Effacer, faire disparaître ; annuler en apposant un cachet.","Les années avaient oblitéré le souvenir de cet événement.") },
      { mot:"obnubiler", nature:"v.", cat:"v", ...D("Obséder, envahir totalement l'esprit au point de l'aveugler.","La peur du jugement l'obnubilait au point de le paralyser.") },
      { mot:"occulter", nature:"v.", cat:"v", ...D("Cacher, dissimuler volontairement ; faire passer dans l'ombre.","Ce scandale a occulté tous les autres sujets d'actualité.") },
      { mot:"subodorer", nature:"v.", cat:"v", ...D("Pressentir confusément, soupçonner sans en avoir la certitude.","Il subodorait une manœuvre derrière cette proposition.") },
      { mot:"insu (à son ~)", nature:"loc.", cat:"loc", ...D("Sans que la personne concernée le sache, à l'insu de quelqu'un.","On l'avait filmé à son insu dans les couloirs.") },
    ]
  },
  {
    id:"accord", numero:8, titre:"D'accord, Pas d'accord", icone:"🤝",
    description:"Alliance, conflit, consensus, dissension",
    couleur:"#3a5a20", accent:"#88c840",
    mots:[
      { mot:"affinité", nature:"n.f.", cat:"n", ...D("Attrait naturel entre personnes ayant des goûts ou des caractères semblables.","Ils partageaient une affinité intellectuelle évidente.") },
      { mot:"belligérant(e)", nature:"n./adj.", cat:"n", ...D("Qui est en état de guerre, qui participe à un conflit armé ou vif.","Les parties belligérantes ont finalement accepté le cessez-le-feu.") },
      { mot:"clivage", nature:"n.m.", cat:"n", ...D("Division nette entre deux groupes aux opinions opposées ; fracture.","Le clivage entre les partisans et les opposants s'est accentué.") },
      { mot:"collusion", nature:"n.f.", cat:"n", ...D("Entente secrète entre personnes pour tromper ou nuire à un tiers.","Une collusion entre les deux sociétés a faussé l'appel d'offres.") },
      { mot:"compromis", nature:"n.m.", cat:"n", ...D("Accord obtenu par des concessions mutuelles entre deux parties.","Après des heures de négociation, ils trouvèrent un compromis acceptable.") },
      { mot:"conformisme", nature:"n.m.", cat:"n", ...D("Tendance à se conformer aux normes, aux usages établis sans les remettre en question.","Son conformisme l'empêchait d'exprimer ses vraies opinions.") },
      { mot:"connivence", nature:"n.f.", cat:"n", ...D("Complicité tacite, entente secrète entre personnes.","Un sourire de connivence passa entre les deux complices.") },
      { mot:"consensus", nature:"n.m.", cat:"n", ...D("Accord général obtenu par l'assentiment de tous ou de la majorité.","Le consensus au sein du groupe permit d'avancer rapidement.") },
      { mot:"contentieux", nature:"n.m.", cat:"n", ...D("Ensemble des litiges, des désaccords entre parties ; sujet de dispute.","Un vieux contentieux territorial opposait les deux communes.") },
      { mot:"convention", nature:"n.f.", cat:"n", ...D("Accord, pacte entre personnes ou groupes ; règle admise tacitement.","Les conventions sociales régissent nos comportements quotidiens.") },
      { mot:"convivialité", nature:"n.f.", cat:"n", ...D("Qualité de ce qui favorise les relations chaleureuses et agréables entre personnes.","La convivialité du repas a resserré les liens entre collègues.") },
      { mot:"cooptation", nature:"n.f.", cat:"n", ...D("Mode de recrutement par lequel les membres d'un groupe choisissent eux-mêmes un nouveau membre.","Son entrée au comité s'est faite par cooptation.") },
      { mot:"différend", nature:"n.m.", cat:"n", ...D("Désaccord, litige entre personnes ou parties.","Un différend commercial entre les deux pays a paralysé les échanges.") },
      { mot:"dissensions", nature:"n.f.pl.", cat:"n", ...D("Divisions profondes, désaccords durables au sein d'un groupe.","Les dissensions internes ont fragilisé le parti.") },
      { mot:"dissident(e)", nature:"n.", cat:"n", ...D("Personne qui s'oppose à l'opinion dominante ou au pouvoir en place.","Les dissidents furent expulsés lors du congrès.") },
      { mot:"dissonance", nature:"n.f.", cat:"n", ...D("Désaccord entre des éléments qui devraient être en harmonie.","Une dissonance entre ses paroles et ses actes était flagrante.") },
      { mot:"hostilité", nature:"n.f.", cat:"n", ...D("Sentiment ou comportement d'opposition agressive envers quelqu'un.","Une hostilité croissante entre les deux voisins finit par dégénérer.") },
      { mot:"hybride", nature:"n./adj.", cat:"n", ...D("Qui est issu du mélange de deux éléments différents ; de nature mixte.","Un modèle hybride combinant travail en présentiel et télétravail.") },
      { mot:"inimitié", nature:"n.f.", cat:"n", ...D("Sentiment durable d'hostilité, d'aversion envers quelqu'un.","Une ancienne inimitié les séparait depuis des années.") },
      { mot:"litige", nature:"n.m.", cat:"n", ...D("Contestation, désaccord donnant lieu à un différend ou un procès.","Le litige entre les héritiers dura plusieurs années.") },
      { mot:"osmose", nature:"n.f.", cat:"n", ...D("Influence réciproque et profonde ; interpénétration harmonieuse entre deux entités.","Une osmose parfaite s'était créée entre les deux artistes.") },
      { mot:"scission", nature:"n.f.", cat:"n", ...D("Division d'un groupe en deux parties opposées ; rupture.","La scission du parti en deux factions a surpris les observateurs.") },
      { mot:"transfuge", nature:"n.", cat:"n", ...D("Personne qui abandonne son camp pour rejoindre le camp adverse.","Ce transfuge apporta des informations précieuses à ses nouveaux alliés.") },
      { mot:"zizanie", nature:"n.f.", cat:"n", ...D("Discorde, désunion semée volontairement au sein d'un groupe.","Il prenait plaisir à semer la zizanie entre ses collègues.") },
      { mot:"adepte", nature:"adj./n.", cat:"adj", ...D("Partisan convaincu d'une doctrine, d'une pratique ; fervent partisan.","Un adepte du jardinage naturel qui ne jure que par le compost.") },
      { mot:"antagoniste", nature:"adj.", cat:"adj", ...D("Qui s'oppose à quelque chose ou quelqu'un ; en opposition directe.","Des forces antagonistes qui s'annulaient mutuellement.") },
      { mot:"divergent(e)", nature:"adj.", cat:"adj", ...D("Qui s'écarte d'une direction commune ; qui diffère sensiblement.","Des opinions divergentes rendaient tout accord impossible.") },
      { mot:"factieux(se)", nature:"adj.", cat:"adj", ...D("Qui fomente la rébellion, qui cherche à diviser ou troubler l'ordre.","Des éléments factieux tentaient de déstabiliser le gouvernement.") },
      { mot:"grégaire", nature:"adj.", cat:"adj", ...D("Qui tend à vivre en groupe, à suivre les autres sans esprit critique.","Un instinct grégaire pousse certains à suivre la foule sans réfléchir.") },
      { mot:"mitigé(e)", nature:"adj.", cat:"adj", ...D("Mêlé de sentiments contraires ; ni franchement positif ni négatif.","Les résultats mitigés de l'expérience ont déçu les chercheurs.") },
      { mot:"réfractaire", nature:"adj.", cat:"adj", ...D("Qui résiste à toute autorité ou influence ; qui refuse de se soumettre.","Il était réfractaire à toute forme de compromis.") },
      { mot:"acquiescer", nature:"v.", cat:"v", ...D("Donner son accord, consentir, approuver.","Il acquiesça d'un hochement de tête sans dire un mot.") },
      { mot:"agréer", nature:"v.", cat:"v", ...D("Accepter, recevoir favorablement ; convenir à quelqu'un.","Veuillez agréer l'expression de mes salutations distinguées.") },
      { mot:"bafouer", nature:"v.", cat:"v", ...D("Traiter avec un mépris marqué, tourner en dérision, violer ouvertement.","Bafouer les règles établies sans aucune retenue.") },
      { mot:"braver", nature:"v.", cat:"v", ...D("Affronter avec courage ou insolence, défier ouvertement.","Il brava l'interdiction et continua son chemin.") },
      { mot:"se coaliser", nature:"v.", cat:"v", ...D("S'unir pour agir ensemble contre un adversaire commun.","Les petits commerçants se sont coalisés contre la grande surface.") },
      { mot:"dénier", nature:"v.", cat:"v", ...D("Refuser de reconnaître, nier catégoriquement.","Il déniait toute responsabilité dans cette affaire.") },
      { mot:"entériner", nature:"v.", cat:"v", ...D("Ratifier, confirmer officiellement une décision ou un accord.","Le conseil a entériné la nomination du nouveau directeur.") },
      { mot:"se formaliser", nature:"v.", cat:"v", ...D("S'offusquer, s'indigner de quelque chose ; prendre ombrage.","Elle s'est formalisée du manque de courtoisie de son interlocuteur.") },
      { mot:"frayer", nature:"v.", cat:"v", ...D("Entretenir des relations, fréquenter ; se frayer : s'ouvrir un passage.","Il ne frayait qu'avec l'élite intellectuelle de la ville.") },
      { mot:"être d'intelligence avec", nature:"loc.v.", cat:"loc", ...D("Agir de concert secrètement avec quelqu'un ; être complice de.","On soupçonnait le gardien d'être d'intelligence avec les voleurs.") },
      { mot:"aller de pair", nature:"loc.v.", cat:"loc", ...D("Aller ensemble, être associé naturellement à quelque chose.","Liberté et responsabilité vont de pair.") },
      { mot:"se rallier à", nature:"loc.v.", cat:"loc", ...D("Rejoindre une opinion, un groupe ; se ranger du côté de.","Après délibération, il s'est rallié à la position majoritaire.") },
      { mot:"ratifier", nature:"v.", cat:"v", ...D("Approuver officiellement et solennellement un accord, un traité.","Le parlement a ratifié le traité à une large majorité.") },
      { mot:"récuser", nature:"v.", cat:"v", ...D("Refuser de reconnaître la compétence ou l'autorité de quelqu'un.","L'avocat a récusé le juge en raison d'un conflit d'intérêts.") },
      { mot:"seoir (il/elle sied)", nature:"v.", cat:"v", ...D("Convenir, aller bien à quelqu'un ou quelque chose.","Cette attitude ne sied guère à quelqu'un de son rang.") },
      { mot:"transiger", nature:"v.", cat:"v", ...D("Faire des concessions mutuelles pour parvenir à un accord.","Il refusait de transiger sur ses principes fondamentaux.") },
      { mot:"être en butte à", nature:"loc.", cat:"loc", ...D("Être exposé à, être la cible de quelque chose de défavorable.","Il était en butte à l'hostilité de ses propres collaborateurs.") },
    ]
  },
  {
    id:"pouvoir", numero:9, titre:"Pouvoir, Volonté, Soumission", icone:"👑",
    description:"Autorité, domination, résistance",
    couleur:"#5a1a1a", accent:"#d04040",
    mots:[
      { mot:"anarchie", nature:"n.f.", cat:"n", ...D("Absence de gouvernement ou d'autorité organisée ; désordre total.","L'anarchie s'installa après la chute du régime.") },
      { mot:"apanage", nature:"n.m.", cat:"n", ...D("Privilège exclusif attaché à une personne ou à un groupe.","La créativité n'est pas l'apanage des artistes.") },
      { mot:"ascendant", nature:"n.m.", cat:"n", ...D("Influence, autorité morale exercée sur quelqu'un.","Il avait un ascendant naturel sur ses collaborateurs.") },
      { mot:"barbarie", nature:"n.f.", cat:"n", ...D("État de cruauté et d'inhumanité ; absence de civilisation.","Les actes de barbarie commis pendant le conflit ont choqué le monde.") },
      { mot:"clause", nature:"n.f.", cat:"n", ...D("Disposition particulière d'un contrat, d'un traité ou d'une loi.","Une clause de non-concurrence figure dans son contrat.") },
      { mot:"coercition", nature:"n.f.", cat:"n", ...D("Contrainte exercée sur quelqu'un pour le forcer à agir.","L'obéissance obtenue par coercition n'est pas durable.") },
      { mot:"démagogie", nature:"n.f.", cat:"n", ...D("Discours flatteur qui exploite les passions populaires à des fins politiques.","Sa politique de démagogie lui a valu un succès éphémère.") },
      { mot:"despote", nature:"n.m.", cat:"n", ...D("Souverain exerçant un pouvoir absolu et arbitraire ; tyran.","Ce despote étouffait toute opposition dans l'œuf.") },
      { mot:"égide", nature:"n.f.", cat:"n", ...D("Protection, patronage d'une autorité ; sous l'égide de : sous la protection de.","La conférence s'est tenue sous l'égide des Nations Unies.") },
      { mot:"esclavage", nature:"n.m.", cat:"n", ...D("État d'une personne privée de liberté et soumise à l'autorité d'un maître.","L'abolition de l'esclavage fut une avancée majeure de l'histoire.") },
      { mot:"exaction", nature:"n.f.", cat:"n", ...D("Action d'exiger plus que ce qui est dû ; acte de violence et d'abus de pouvoir.","Les exactions commises par les occupants ont été documentées.") },
      { mot:"garant(e)", nature:"n.", cat:"n", ...D("Personne qui répond de quelqu'un ou de quelque chose ; qui assure une garantie.","L'État doit être garant des droits fondamentaux.") },
      { mot:"génocide", nature:"n.m.", cat:"n", ...D("Extermination systématique d'un groupe ethnique, religieux ou national.","Le génocide rwandais de 1994 reste l'une des tragédies du XXe siècle.") },
      { mot:"hégémonie", nature:"n.f.", cat:"n", ...D("Domination, suprématie d'un État, d'un groupe sur les autres.","L'hégémonie économique de ce pays lui confère une influence mondiale.") },
      { mot:"immunité", nature:"n.f.", cat:"n", ...D("Prérogative qui soustrait quelqu'un à certaines obligations ou poursuites.","L'immunité diplomatique protège les ambassadeurs des poursuites locales.") },
      { mot:"impunité", nature:"n.f.", cat:"n", ...D("Absence de punition, situation où l'on n'est pas tenu responsable de ses actes.","Les crimes commis en toute impunité minent l'état de droit.") },
      { mot:"joug", nature:"n.m.", cat:"n", ...D("Domination pesante et contraignante exercée sur quelqu'un.","Le peuple se souleva pour se libérer du joug du colonisateur.") },
      { mot:"latitude", nature:"n.f.", cat:"n", ...D("Liberté d'action, marge de manœuvre laissée à quelqu'un.","Le directeur lui a laissé toute latitude pour gérer le projet.") },
      { mot:"mandataire", nature:"n.", cat:"n", ...D("Personne qui agit au nom d'une autre en vertu d'un mandat.","L'avocat agissait en tant que mandataire de son client.") },
      { mot:"monopole", nature:"n.m.", cat:"n", ...D("Situation où une seule entité contrôle l'offre d'un bien ou service.","Ce groupe détenait le monopole de la distribution d'électricité.") },
      { mot:"notoriété", nature:"n.f.", cat:"n", ...D("Caractère de ce qui est notoire, connu de tous ; célébrité.","Sa notoriété dans le milieu scientifique était bien établie.") },
      { mot:"novice", nature:"n.", cat:"n", ...D("Personne sans expérience dans un domaine, débutant.","En tant que novice, il commettait encore des erreurs classiques.") },
      { mot:"obligé(e)", nature:"n.", cat:"n", ...D("Personne tenue par la reconnaissance envers quelqu'un qui lui a rendu service.","Je suis votre obligé pour l'aide que vous m'avez apportée.") },
      { mot:"opprimé(e)", nature:"n.", cat:"n", ...D("Personne soumise à une oppression, victime d'un pouvoir abusif.","Il consacrait sa vie à défendre les opprimés.") },
      { mot:"ostracisme", nature:"n.m.", cat:"n", ...D("Exclusion d'un individu d'un groupe social ; mise à l'écart.","Il fut victime de l'ostracisme de ses pairs après le scandale.") },
      { mot:"potentat", nature:"n.m.", cat:"n", ...D("Souverain qui exerce un pouvoir absolu ; personnage très puissant.","Ce potentat local faisait régner la terreur dans la région.") },
      { mot:"potentiel", nature:"n.m.", cat:"n", ...D("Ensemble des capacités, des ressources disponibles non encore exploitées.","Ce jeune chercheur a un potentiel scientifique remarquable.") },
      { mot:"prérogative", nature:"n.f.", cat:"n", ...D("Droit, privilège exclusif attaché à une fonction ou à une dignité.","C'est la prérogative du président de nommer les ministres.") },
      { mot:"rétorsion", nature:"n.f.", cat:"n", ...D("Mesure de représailles prises en réponse à une action hostile.","Des mesures de rétorsion économique ont été adoptées contre ce pays.") },
      { mot:"répression", nature:"n.f.", cat:"n", ...D("Action de réprimer par la force ; ensemble des mesures coercitives.","La répression des manifestations a provoqué l'indignation internationale.") },
      { mot:"satellite", nature:"n.m.", cat:"n", ...D("État ou personne dans la dépendance d'un autre plus puissant.","Ces petits États satellites n'avaient aucune politique indépendante.") },
      { mot:"sédition", nature:"n.f.", cat:"n", ...D("Soulèvement, révolte collective contre l'autorité établie.","Les meneurs de la sédition furent arrêtés et jugés.") },
      { mot:"sévices", nature:"n.m.pl.", cat:"n", ...D("Mauvais traitements physiques infligés à quelqu'un.","Les sévices subis par les prisonniers ont été documentés par une ONG.") },
      { mot:"statut", nature:"n.m.", cat:"n", ...D("Texte définissant la situation juridique de quelqu'un ou d'une organisation.","Le statut de réfugié lui a été accordé après une longue procédure.") },
      { mot:"subversion", nature:"n.f.", cat:"n", ...D("Action visant à renverser l'ordre établi, les valeurs ou les institutions.","Le régime accusait les artistes de subversion.") },
      { mot:"sujétion", nature:"n.f.", cat:"n", ...D("État de dépendance totale, soumission à une autorité contraignante.","Vivre sous la sujétion d'un maître impitoyable.") },
      { mot:"suprématie", nature:"n.f.", cat:"n", ...D("Situation de supériorité absolue, domination sans partage.","La suprématie militaire de cette puissance n'était plus contestée.") },
      { mot:"tyrannie", nature:"n.f.", cat:"n", ...D("Gouvernement oppressif d'un tyran ; abus de pouvoir exercé par contrainte.","La tyrannie du régime se manifestait par la censure et l'arbitraire.") },
      { mot:"validité", nature:"n.f.", cat:"n", ...D("Caractère de ce qui est valide, légalement ou logiquement reconnu.","La validité du contrat a été contestée devant les tribunaux.") },
      { mot:"vandalisme", nature:"n.m.", cat:"n", ...D("Destruction ou dégradation gratuite de biens ou d'œuvres.","Des actes de vandalisme ont endommagé plusieurs monuments historiques.") },
      { mot:"arbitraire", nature:"adj.", cat:"adj", ...D("Qui dépend du bon vouloir d'une personne, sans règle ni justification objective.","Une décision arbitraire prise sans consulter les intéressés.") },
      { mot:"draconien(ne)", nature:"adj.", cat:"adj", ...D("Extrêmement sévère, rigoureux, sans concession.","Des mesures draconiennes pour réduire le déficit budgétaire.") },
      { mot:"illicite", nature:"adj.", cat:"adj", ...D("Qui est contraire à la loi ou aux règles morales.","Le trafic illicite de médicaments est sévèrement puni.") },
      { mot:"impérieux(se)", nature:"adj.", cat:"adj", ...D("Qui commande avec autorité et hauteur ; urgent, irrésistible.","Un besoin impérieux de réforme s'imposait à tous.") },
      { mot:"servile", nature:"adj.", cat:"adj", ...D("D'une soumission excessive et obséquieuse ; qui marque la servilité.","Une attitude servile qui manquait totalement de dignité.") },
      { mot:"tributaire", nature:"adj.", cat:"adj", ...D("Qui dépend de quelque chose ou de quelqu'un ; assujetti.","Notre économie est tributaire des fluctuations du prix du pétrole.") },
      { mot:"abroger", nature:"v.", cat:"v", ...D("Annuler officiellement une loi, un règlement ; supprimer légalement.","Le parlement a abrogé cette loi jugée obsolète.") },
      { mot:"aliéner", nature:"v.", cat:"v", ...D("Transférer la propriété de quelque chose ; priver quelqu'un de sa liberté.","La propagande visait à aliéner les esprits.") },
      { mot:"annexer", nature:"v.", cat:"v", ...D("Rattacher un territoire à un État par voie d'autorité.","Ce territoire fut annexé à la suite d'un conflit armé.") },
      { mot:"s'arroger", nature:"v.", cat:"v", ...D("S'attribuer sans droit un pouvoir, un privilège.","Il s'arrogeait des prérogatives qui ne lui appartenaient pas.") },
      { mot:"asservir", nature:"v.", cat:"v", ...D("Réduire à la servitude, soumettre entièrement à son autorité.","Le colonisateur avait asservi les populations locales.") },
      { mot:"bannir", nature:"v.", cat:"v", ...D("Exclure, chasser définitivement d'un lieu ou d'un groupe.","Il fut banni du royaume pour trahison.") },
      { mot:"brimer", nature:"v.", cat:"v", ...D("Soumettre à des brimades, traiter injustement, opprimer.","Les nouvelles recrues étaient brimées par leurs aînés.") },
      { mot:"cautionner", nature:"v.", cat:"v", ...D("Soutenir, approuver ; se porter garant de quelqu'un ou quelque chose.","Il refusait de cautionner une politique qu'il jugeait injuste.") },
      { mot:"châtier", nature:"v.", cat:"v", ...D("Punir sévèrement ; corriger avec rigueur.","La faute fut châtiée avec une rigueur exemplaire.") },
      { mot:"conférer", nature:"v.", cat:"v", ...D("Accorder officiellement un titre, un droit, un pouvoir.","Ce diplôme lui confère le droit d'exercer la médecine.") },
      { mot:"se désister", nature:"v.", cat:"v", ...D("Renoncer à une action en justice ou à une candidature.","Il s'est désisté au dernier moment en faveur de son allié.") },
      { mot:"destituer", nature:"v.", cat:"v", ...D("Priver quelqu'un de sa fonction, de son titre ; révoquer.","Le général fut destitué pour faute grave.") },
      { mot:"jeter son dévolu sur", nature:"loc.v.", cat:"loc", ...D("Choisir quelqu'un ou quelque chose après délibération ; porter son choix sur.","Il avait jeté son dévolu sur ce poste depuis longtemps.") },
      { mot:"discréditer", nature:"v.", cat:"v", ...D("Faire perdre sa crédibilité, son autorité à quelqu'un.","Ses adversaires ont tenté de le discréditer avec de fausses accusations.") },
      { mot:"disculper", nature:"v.", cat:"v", ...D("Prouver l'innocence de quelqu'un, le mettre hors de cause.","De nouvelles preuves ont permis de le disculper complètement.") },
      { mot:"dissuader", nature:"v.", cat:"v", ...D("Détourner quelqu'un de ses intentions par des arguments ou la crainte.","La menace de sanctions n'a pas suffi à le dissuader.") },
      { mot:"s'ériger", nature:"v.", cat:"v", ...D("Se constituer soi-même en quelque chose ; s'attribuer un rôle.","Il s'érigeait en défenseur de la liberté sans y être invité.") },
      { mot:"évincer", nature:"v.", cat:"v", ...D("Écarter, supplanter quelqu'un en prenant sa place.","Il a été évincé du conseil d'administration lors de la restructuration.") },
      { mot:"extorquer", nature:"v.", cat:"v", ...D("Obtenir quelque chose par la force, la violence ou la menace.","Des fonctionnaires corrompus extorquaient des pots-de-vin aux commerçants.") },
      { mot:"fomenter", nature:"v.", cat:"v", ...D("Préparer secrètement, susciter ou entretenir un mouvement hostile.","Des agents provocateurs fomentaient des troubles dans la capitale.") },
      { mot:"fustiger", nature:"v.", cat:"v", ...D("Critiquer vivement, blâmer avec sévérité.","Le rapport fustige la gestion chaotique du ministère.") },
      { mot:"habiliter", nature:"v.", cat:"v", ...D("Autoriser légalement quelqu'un à exercer une fonction ou à accomplir un acte.","Seuls les notaires habilités peuvent rédiger ces actes.") },
      { mot:"impliquer", nature:"v.", cat:"v", ...D("Engager, mêler quelqu'un dans une affaire ; avoir pour conséquence.","Plusieurs responsables ont été impliqués dans le scandale.") },
      { mot:"incomber", nature:"v.", cat:"v", ...D("Être imposé à quelqu'un comme devoir ou obligation.","La responsabilité de la décision lui incombait en tant que directeur.") },
      { mot:"être investi", nature:"v.", cat:"v", ...D("Recevoir officiellement un pouvoir, une mission, une charge.","Il fut investi de la mission de négocier avec les rebelles.") },
      { mot:"juguler", nature:"v.", cat:"v", ...D("Arrêter, enrayer, contenir un phénomène négatif.","Des mesures d'urgence ont été prises pour juguler l'épidémie.") },
      { mot:"obtempérer", nature:"v.", cat:"v", ...D("Obéir, se soumettre à un ordre ou à une injonction.","Face aux injonctions de la police, il a finalement obtempéré.") },
      { mot:"opter", nature:"v.", cat:"v", ...D("Faire un choix entre plusieurs possibilités.","Il a opté pour la solution la moins risquée.") },
      { mot:"prescrire", nature:"v.", cat:"v", ...D("Ordonner, imposer comme règle ou obligation ; rédiger une prescription.","La loi prescrit un délai de recours de deux mois.") },
      { mot:"prohiber", nature:"v.", cat:"v", ...D("Interdire formellement par la loi ou par l'autorité.","L'usage de ces substances est prohibé dans les compétitions sportives.") },
      { mot:"proroger", nature:"v.", cat:"v", ...D("Prolonger la durée d'un délai, d'un mandat, d'une session.","La session parlementaire a été prorogée de deux semaines.") },
      { mot:"proscrire", nature:"v.", cat:"v", ...D("Interdire, condamner officiellement ; exiler, bannir.","Cette pratique a été proscrite par le nouveau règlement.") },
      { mot:"se raviser", nature:"v.", cat:"v", ...D("Changer d'avis après réflexion, revenir sur une décision.","Il avait d'abord refusé, puis s'est ravisé en voyant l'enjeu.") },
      { mot:"en référer à", nature:"loc.v.", cat:"loc", ...D("Soumettre une question à une autorité supérieure pour décision.","Face à ce litige, il a dû en référer à sa hiérarchie.") },
      { mot:"réhabiliter", nature:"v.", cat:"v", ...D("Rétablir quelqu'un dans ses droits ou dans l'estime publique.","Il fut réhabilité après que son innocence fut prouvée.") },
      { mot:"relaxer", nature:"v.", cat:"v", ...D("Acquitter quelqu'un d'une accusation ; libérer d'une détention.","Le tribunal a relaxé le prévenu faute de preuves suffisantes.") },
      { mot:"répudier", nature:"v.", cat:"v", ...D("Rejeter, repousser avec force ; renvoyer quelqu'un.","Il répudia ses anciens alliés après la trahison.") },
      { mot:"résilier", nature:"v.", cat:"v", ...D("Mettre fin à un contrat, un engagement avant son terme.","La société a résilié le bail pour non-paiement des loyers.") },
      { mot:"révoquer", nature:"v.", cat:"v", ...D("Destituer quelqu'un de sa fonction ; annuler un acte juridique.","Le ministre a été révoqué après le scandale.") },
      { mot:"saper", nature:"v.", cat:"v", ...D("Détruire progressivement les bases de quelque chose ; miner.","Cette politique sapait la confiance des citoyens dans les institutions.") },
      { mot:"sommer", nature:"v.", cat:"v", ...D("Mettre en demeure, ordonner impérativement.","Il fut sommé de quitter les lieux dans les vingt-quatre heures.") },
      { mot:"spolier", nature:"v.", cat:"v", ...D("Dépouiller quelqu'un de ses biens par la force ou la fraude.","Les habitants ont été spoliés de leurs terres ancestrales.") },
      { mot:"subjuguer", nature:"v.", cat:"v", ...D("Soumettre complètement à son pouvoir ; captiver, fasciner irrésistiblement.","Son charisme subjuguait tous ceux qui l'écoutaient.") },
      { mot:"usurper", nature:"v.", cat:"v", ...D("S'emparer sans droit d'un pouvoir, d'un titre ou d'un bien.","Il avait usurpé le trône au détriment de l'héritier légitime.") },
    ]
  },
  {
    id:"agir", numero:10, titre:"Agir et ne pas agir", icone:"⚔️",
    description:"Action, stratégie, procrastination, méthode",
    couleur:"#3a3a1a", accent:"#c8b840",
    mots:[
      { mot:"art", nature:"n.m.", cat:"n", ...D("Habileté, savoir-faire acquis par l'expérience ou le talent dans un domaine.","Il avait l'art de désamorcer les conflits avec une aisance déconcertante.") },
      { mot:"atermoiement", nature:"n.m.", cat:"n", ...D("Fait de remettre à plus tard, de tergiverser ; délai accordé à un débiteur.","Ses atermoiements constants finissaient par agacer toute l'équipe.") },
      { mot:"compétence", nature:"n.f.", cat:"n", ...D("Capacité reconnue dans un domaine précis ; aptitude à exercer une fonction.","Ses compétences en négociation étaient unanimement reconnues.") },
      { mot:"déprédation", nature:"n.f.", cat:"n", ...D("Dommage, pillage, dégradation causés par des personnes ou des phénomènes.","Les déprédations causées par les vandales ont coûté cher à la commune.") },
      { mot:"dessein", nature:"n.m.", cat:"n", ...D("Intention délibérée, projet formé à l'avance ; but visé.","Il avait formé le dessein de tout révéler lors du procès.") },
      { mot:"détracteur", nature:"n.m.", cat:"n", ...D("Personne qui cherche à rabaisser, à critiquer systématiquement quelqu'un ou quelque chose.","Malgré ses détracteurs, elle poursuivit son projet avec détermination.") },
      { mot:"diversion", nature:"n.f.", cat:"n", ...D("Action destinée à détourner l'attention ; manœuvre d'écart.","Cette annonce n'était qu'une diversion pour masquer le vrai problème.") },
      { mot:"expédient", nature:"n.m.", cat:"n", ...D("Moyen provisoire pour se tirer d'affaire, souvent peu scrupuleux.","Faute de solution durable, il recourut à divers expédients.") },
      { mot:"ferment", nature:"n.m.", cat:"n", ...D("Ce qui fait naître ou développe quelque chose ; agent d'agitation ou de transformation.","Ces inégalités sont un ferment de révolte sociale.") },
      { mot:"foyer", nature:"n.m.", cat:"n", ...D("Point d'origine ou de concentration d'un phénomène ; lieu d'habitation.","Ce quartier était devenu un foyer de tensions communautaires.") },
      { mot:"gageure", nature:"n.f.", cat:"n", ...D("Entreprise difficile, défi qui semble presque impossible à relever.","Réconcilier les deux partis relevait de la gageure.") },
      { mot:"incurie", nature:"n.f.", cat:"n", ...D("Négligence grave, manque total de soin dans la gestion de quelque chose.","L'incurie des responsables a provoqué cette catastrophe évitable.") },
      { mot:"inertie", nature:"n.f.", cat:"n", ...D("Manque d'activité, absence de réaction face à une situation.","L'inertie du gouvernement face à la crise suscita l'indignation.") },
      { mot:"instigateur(trice)", nature:"n.", cat:"n", ...D("Personne qui pousse, incite à faire quelque chose, souvent de négatif.","On cherchait les instigateurs du mouvement de grève.") },
      { mot:"marasme", nature:"n.m.", cat:"n", ...D("Situation de stagnation profonde, de dépression dans un domaine.","Le secteur culturel était plongé dans un marasme économique.") },
      { mot:"mécomptes", nature:"n.m.pl.", cat:"n", ...D("Erreurs de calcul ou d'appréciation ; déceptions causées par des résultats inférieurs aux attentes.","Les mécomptes de sa gestion avaient entaché sa réputation.") },
      { mot:"médiation", nature:"n.f.", cat:"n", ...D("Intervention d'un tiers pour faciliter un accord entre des parties en conflit.","Une médiation internationale a été proposée pour résoudre le différend.") },
      { mot:"mobile", nature:"n.m.", cat:"n", ...D("Motif, raison qui pousse à agir ; cause d'un comportement.","La jalousie était le mobile du crime selon l'enquêteur.") },
      { mot:"oisiveté", nature:"n.f.", cat:"n", ...D("État de celui qui ne fait rien, qui vit dans l'inaction.","L'oisiveté prolongée lui pesait, il cherchait une occupation.") },
      { mot:"pragmatique", nature:"n.f./adj.", cat:"n", ...D("Attitude fondée sur la pratique et les résultats concrets plutôt que sur la théorie.","Son pragmatisme lui permettait de trouver des solutions là où d'autres échouaient.") },
      { mot:"préméditation", nature:"n.f.", cat:"n", ...D("Caractère d'un acte préparé et décidé à l'avance.","L'acte commis avec préméditation entraîne des peines plus lourdes.") },
      { mot:"procédure", nature:"n.f.", cat:"n", ...D("Ensemble des règles à suivre pour accomplir une action légale ou administrative.","La procédure de recrutement dure plusieurs semaines.") },
      { mot:"processus", nature:"n.m.", cat:"n", ...D("Suite ordonnée d'opérations ou de phénomènes conduisant à un résultat.","Le processus de paix est long et fragile.") },
      { mot:"protagoniste", nature:"n.", cat:"n", ...D("Personnage principal d'une affaire ; acteur de premier plan.","Les protagonistes du scandale ont tous refusé de commenter.") },
      { mot:"réfection", nature:"n.f.", cat:"n", ...D("Action de remettre en état, de réparer ou de rénover quelque chose.","La réfection de la toiture a duré tout l'été.") },
      { mot:"rémission", nature:"n.f.", cat:"n", ...D("Pardon accordé à une faute ; atténuation temporaire d'une maladie.","Le malade était en rémission depuis six mois.") },
      { mot:"sinécure", nature:"n.f.", cat:"n", ...D("Poste procurant des avantages sans exiger beaucoup de travail.","Ce poste de conseiller n'était qu'une sinécure bien rémunérée.") },
      { mot:"stratagème", nature:"n.m.", cat:"n", ...D("Ruse habile, manœuvre astucieuse pour atteindre un objectif.","Il déploya un stratagème ingénieux pour déjouer la surveillance.") },
      { mot:"stratégie", nature:"n.f.", cat:"n", ...D("Ensemble de moyens coordonnés pour atteindre un objectif à long terme.","La stratégie commerciale de l'entreprise porta ses fruits en trois ans.") },
      { mot:"suspens", nature:"n.m.", cat:"n", ...D("État d'attente anxieuse ; interruption provisoire d'une action.","L'affaire était tenue en suspens dans l'attente du verdict.") },
      { mot:"tergiversation", nature:"n.f.", cat:"n", ...D("Fait de tergiverser, d'hésiter, de chercher des échappatoires avant de décider.","Ses tergiversations finissaient par agacer ses partenaires.") },
      { mot:"vertu", nature:"n.f.", cat:"n", ...D("Qualité morale ; propriété, efficacité particulière d'une chose.","La patience est une vertu indispensable dans ce métier.") },
      { mot:"corrosif(ve)", nature:"adj.", cat:"adj", ...D("Qui ronge, détruit progressivement ; par ext., d'une ironie mordante et destructrice.","Son humour corrosif ne ménageait personne dans la salle.") },
      { mot:"dilatoire", nature:"adj.", cat:"adj", ...D("Qui vise à gagner du temps, à retarder une décision ou une échéance.","Ces manœuvres dilatoires n'avaient qu'un but : retarder le verdict.") },
      { mot:"probatoire", nature:"adj.", cat:"adj", ...D("Qui sert à éprouver, à tester les capacités de quelqu'un avant une validation.","Un stage probatoire de six mois précède la titularisation.") },
      { mot:"rédhibitoire", nature:"adj.", cat:"adj", ...D("Qui constitue un défaut majeur empêchant toute acceptation ; éliminatoire.","Son manque d'expérience était rédhibitoire pour ce poste de direction.") },
      { mot:"réticent(e)", nature:"adj.", cat:"adj", ...D("Qui hésite à dire ou faire quelque chose, qui manifeste des réserves.","Il était réticent à s'engager dans un projet aussi risqué.") },
      { mot:"achopper", nature:"v.", cat:"v", ...D("Buter sur un obstacle, échouer sur un point précis.","Les négociations achoppaient toujours sur la question des délais.") },
      { mot:"ajourner", nature:"v.", cat:"v", ...D("Remettre à une date ultérieure ; renvoyer à plus tard.","La réunion a été ajournée faute de quorum.") },
      { mot:"assener", nature:"v.", cat:"v", ...D("Porter un coup avec force ; formuler un argument de façon brutale et décisive.","Il lui assena une vérité qu'elle refusait d'entendre.") },
      { mot:"démanteler", nature:"v.", cat:"v", ...D("Désorganiser complètement, démolir pièce par pièce un système ou une structure.","La police a démantelé un réseau de trafic international.") },
      { mot:"édifier", nature:"v.", cat:"v", ...D("Construire ; instruire moralement, donner l'exemple.","Ce témoignage édifiant a touché l'ensemble du jury.") },
      { mot:"endiguer", nature:"v.", cat:"v", ...D("Contenir, freiner la progression d'un phénomène négatif.","Des mesures urgentes ont été prises pour endiguer la propagation du virus.") },
      { mot:"exaucer", nature:"v.", cat:"v", ...D("Satisfaire le vœu, la prière de quelqu'un ; accorder ce qui est demandé.","Ses efforts furent enfin exaucés quand il obtint le poste.") },
      { mot:"grever", nature:"v.", cat:"v", ...D("Soumettre à une charge lourde ; peser lourdement sur.","Ces dépenses imprévues ont grevé le budget de l'association.") },
      { mot:"instaurer", nature:"v.", cat:"v", ...D("Établir, mettre en place quelque chose de durable.","Le nouveau directeur a instauré un climat de confiance au sein de l'équipe.") },
      { mot:"louvoyer", nature:"v.", cat:"v", ...D("Naviguer en zigzag ; par ext., agir avec détours et habilité pour éviter un obstacle.","Il louvoyait habilement entre les intérêts contraires des deux parties.") },
      { mot:"obvier", nature:"v.", cat:"v", ...D("Prévenir, parer à un inconvénient ou un danger.","Pour obvier à ce risque, des garanties supplémentaires ont été exigées.") },
      { mot:"pallier", nature:"v.", cat:"v", ...D("Remédier provisoirement à un manque ou à un inconvénient.","Ces mesures ne font que pallier le problème sans le résoudre.") },
      { mot:"perpétrer", nature:"v.", cat:"v", ...D("Commettre, accomplir (un acte criminel ou blâmable).","Les auteurs du forfait avaient perpétré d'autres crimes auparavant.") },
      { mot:"prémunir", nature:"v.", cat:"v", ...D("Protéger à l'avance contre un danger, un risque.","Se faire vacciner permet de se prémunir contre la grippe.") },
      { mot:"récidiver", nature:"v.", cat:"v", ...D("Commettre à nouveau la même faute ou le même acte répréhensible.","Il avait promis de changer, mais il récidiva dès la semaine suivante.") },
      { mot:"refouler", nature:"v.", cat:"v", ...D("Repousser, faire reculer ; réprimer un sentiment, une pulsion.","Il refoulait ses émotions depuis des années sans jamais en parler.") },
      { mot:"réitérer", nature:"v.", cat:"v", ...D("Répéter, faire de nouveau ce qu'on a déjà dit ou fait.","Il réitéra sa demande par écrit pour laisser une trace officielle.") },
      { mot:"réviser", nature:"v.", cat:"v", ...D("Revoir, modifier ou corriger après examen ; préparer un examen.","Il a dû réviser son jugement à la lumière des nouvelles preuves.") },
    ]
  },
  {
    id:"parole", numero:11, titre:"Les Actes de parole", icone:"🎤",
    description:"Discours, rhétorique, persuasion, silence",
    couleur:"#2a1a5a", accent:"#9070e0",
    mots:[
      // Noms
      { mot:"acrimonie", nature:"n.f.", cat:"n", ...D("Amertume agressive qui se manifeste dans les paroles ou les écrits.","Il répondit avec une acrimonie qui surprit toute l'assemblée.") },
      { mot:"allégation", nature:"n.f.", cat:"n", ...D("Affirmation présentée sans preuve pour étayer une accusation ou une thèse.","Ces allégations non fondées ont été rejetées par le tribunal.") },
      { mot:"allocution", nature:"n.f.", cat:"n", ...D("Discours bref adressé à un auditoire par une personnalité officielle.","Le président a prononcé une allocution télévisée.") },
      { mot:"apologie", nature:"n.f.", cat:"n", ...D("Discours ou écrit visant à défendre et justifier quelqu'un ou quelque chose.","Son livre n'était qu'une apologie du régime en place.") },
      { mot:"assertion", nature:"n.f.", cat:"n", ...D("Affirmation présentée comme vraie, sans être nécessairement prouvée.","Cette assertion audacieuse méritait d'être vérifiée.") },
      { mot:"circonlocution", nature:"n.f.", cat:"n", ...D("Façon de s'exprimer en utilisant beaucoup de mots pour dire peu de choses.","Il usait de circonlocutions pour éviter de répondre directement.") },
      { mot:"cliché", nature:"n.m.", cat:"n", ...D("Expression ou idée banale, sans originalité, usée par l'usage répété.","Son discours était truffé de clichés sans aucune profondeur.") },
      { mot:"conciliabule", nature:"n.m.", cat:"n", ...D("Réunion secrète de personnes qui délibèrent à voix basse.","Des conciliabules se tenaient dans les couloirs entre les séances.") },
      { mot:"controverse", nature:"n.f.", cat:"n", ...D("Discussion opposant des thèses contraires, souvent vive et prolongée.","La controverse scientifique autour de ce sujet dure depuis des années.") },
      { mot:"dénégation", nature:"n.f.", cat:"n", ...D("Action de nier catégoriquement une accusation ou une affirmation.","Ses dénégations répétées ne convaincurent personne.") },
      { mot:"diffamation", nature:"n.f.", cat:"n", ...D("Action de porter atteinte à la réputation de quelqu'un par des affirmations fausses.","Il a porté plainte pour diffamation contre le journaliste.") },
      { mot:"digression", nature:"n.f.", cat:"n", ...D("Passage d'un discours qui s'écarte du sujet principal.","Après une longue digression, il revint enfin au sujet.") },
      { mot:"élocution", nature:"n.f.", cat:"n", ...D("Manière de s'exprimer oralement, façon de parler en articulant les sons.","Son élocution claire et posée facilitait la compréhension.") },
      { mot:"éloquence", nature:"n.f.", cat:"n", ...D("Faculté de bien parler, de convaincre et d'émouvoir par la parole.","Son éloquence naturelle faisait de lui un orateur redoutable.") },
      { mot:"élucubration", nature:"n.f.", cat:"n", ...D("Pensée ou propos extravagant, fruit d'une réflexion laborieuse et peu sérieuse.","Ses élucubrations nocturnes n'aboutirent à rien de concret.") },
      { mot:"euphémisme", nature:"n.m.", cat:"n", ...D("Expression atténuée pour désigner quelque chose de choquant ou de déplaisant.","Dire « non-voyant » pour aveugle est un euphémisme.") },
      { mot:"faconde", nature:"n.f.", cat:"n", ...D("Facilité à parler abondamment ; bavardage intarissable.","Sa faconde intarissable lassait parfois ses interlocuteurs.") },
      { mot:"grandiloquence", nature:"n.f.", cat:"n", ...D("Style pompeux et emphatique qui manque de naturel ; emphase excessive.","Sa grandiloquence masquait mal le vide de ses arguments.") },
      { mot:"imprécation", nature:"n.f.", cat:"n", ...D("Malédiction proférée avec violence contre quelqu'un.","Il lança des imprécations contre ceux qui l'avaient trahi.") },
      { mot:"incantation", nature:"n.f.", cat:"n", ...D("Formule magique récitée pour produire un effet ; usage répété de mots comme une formule.","Cette promesse répétée avait pris la valeur d'une incantation.") },
      { mot:"injonction", nature:"n.f.", cat:"n", ...D("Ordre formel et impératif adressé à quelqu'un.","Il a reçu une injonction judiciaire de cesser ses activités.") },
      { mot:"invective", nature:"n.f.", cat:"n", ...D("Parole violente et injurieuse adressée à quelqu'un.","Les invectives fusèrent de toutes parts lors de la réunion.") },
      { mot:"malédiction", nature:"n.f.", cat:"n", ...D("Paroles ou vœux appelant le malheur sur quelqu'un ou quelque chose.","Une malédiction semblait peser sur cette famille depuis des générations.") },
      { mot:"plaidoirie", nature:"n.f.", cat:"n", ...D("Exposé oral d'un avocat devant le tribunal pour défendre son client.","La plaidoirie de la défense dura plus de trois heures.") },
      { mot:"plaidoyer", nature:"n.m.", cat:"n", ...D("Discours passionné de défense ou de justification ; appel en faveur de quelque chose.","Ce roman est un plaidoyer pour la protection de l'environnement.") },
      { mot:"polémique", nature:"n.f.", cat:"n", ...D("Controverse violente et passionnée, souvent de nature politique ou idéologique.","Ses propos ont déclenché une polémique nationale.") },
      { mot:"récrimination", nature:"n.f.", cat:"n", ...D("Plainte ou reproche exprimé avec amertume, souvent de façon répétée.","Ses récriminations incessantes finissaient par lasser ses proches.") },
      { mot:"requête", nature:"n.f.", cat:"n", ...D("Demande formelle et motivée adressée à une autorité.","Il a adressé une requête au tribunal pour obtenir un délai.") },
      { mot:"réquisitoire", nature:"n.m.", cat:"n", ...D("Discours d'accusation du procureur ; par ext., critique sévère et détaillée.","Son article était un véritable réquisitoire contre la corruption.") },
      { mot:"sarcasme", nature:"n.m.", cat:"n", ...D("Ironie mordante, moquerie cruelle exprimée avec intention de blesser.","Il répondit par des sarcasmes qui achevèrent de vexer son interlocuteur.") },
      { mot:"soliloque", nature:"n.m.", cat:"n", ...D("Discours d'une personne qui parle seule ou comme si elle était seule.","Son long soliloque intérieur ne trouva aucun écho dans la salle.") },
      { mot:"tollé", nature:"n.m.", cat:"n", ...D("Clameur de protestation collective, cri d'indignation général.","Sa décision a soulevé un tollé dans tout le pays.") },
      { mot:"verve", nature:"n.f.", cat:"n", ...D("Entrain et brio dans la parole ; inspiration vive et spontanée.","Il récitait ses anecdotes avec une verve communicative.") },
      // Adjectifs
      { mot:"acerbe", nature:"adj.", cat:"adj", ...D("D'une âpreté blessante, d'une critique mordante et sans ménagement.","Une critique acerbe qui ne ménageait pas les susceptibilités.") },
      { mot:"caustique", nature:"adj.", cat:"adj", ...D("Qui blesse par des mots mordants ; d'une ironie corrosive.","Son esprit caustique lui valait autant d'admirateurs que d'ennemis.") },
      { mot:"emphatique", nature:"adj.", cat:"adj", ...D("Qui use d'emphase, d'un ton exagérément solennel ou grandiloquent.","Un discours emphatique qui sonnait creux malgré la pompe des mots.") },
      { mot:"gouailleur(se)", nature:"adj.", cat:"adj", ...D("Qui use d'une raillerie populaire, vive et bonne enfant.","Son ton gouailleur détendait l'atmosphère.") },
      { mot:"laconique", nature:"adj.", cat:"adj", ...D("Qui s'exprime en peu de mots, avec une brièveté austère.","Sa réponse laconique ne laissait aucune place à la discussion.") },
      { mot:"loquace", nature:"adj.", cat:"adj", ...D("Qui parle beaucoup, volontiers et aisément.","Habituellement réservé, il était ce soir-là particulièrement loquace.") },
      { mot:"péremptoire", nature:"adj.", cat:"adj", ...D("Qui ne souffre pas de réplique ; d'une autorité tranchante et absolue.","D'un ton péremptoire, il mit fin à la discussion.") },
      { mot:"prolixe", nature:"adj.", cat:"adj", ...D("Qui s'étend en longs développements ; excessivement bavard par écrit ou à l'oral.","Son rapport prolixe décourageait ceux qui devaient le lire.") },
      { mot:"sentencieux(se)", nature:"adj.", cat:"adj", ...D("Qui exprime des maximes avec une solennité affectée et pompeuse.","Son ton sentencieux agaçait ses collègues.") },
      { mot:"spirituel(le)", nature:"adj.", cat:"adj", ...D("Qui fait preuve d'esprit, d'une finesse vive et ingénieuse.","Sa réplique spirituelle déclencha les rires de toute la salle.") },
      { mot:"tacite", nature:"adj.", cat:"adj", ...D("Qui n'est pas exprimé explicitement mais sous-entendu.","Un accord tacite s'était établi entre eux sans qu'un mot soit prononcé.") },
      { mot:"truculent(e)", nature:"adj.", cat:"adj", ...D("D'une verve colorée et pittoresque, parfois crue ; haut en couleur.","Son style truculent lui avait valu une réputation sulfureuse.") },
      { mot:"verbal(e)", nature:"adj.", cat:"adj", ...D("Qui se fait par la parole, non par écrit ; relatif aux mots.","Un accord verbal, sans contrat écrit, restait difficile à faire valoir.") },
      { mot:"verbeux(se)", nature:"adj.", cat:"adj", ...D("Qui emploie trop de mots pour peu de contenu.","Son exposé verbeux perdait les auditeurs dans les détails.") },
      { mot:"volubile", nature:"adj.", cat:"adj", ...D("Qui parle avec abondance et rapidité, avec une facilité intarissable.","Elle était si volubile qu'il était impossible de la couper.") },
      // Verbes
      { mot:"adjurer", nature:"v.", cat:"v", ...D("Supplier instamment quelqu'un au nom de quelque chose de sacré ou d'important.","Il l'adjura de dire la vérité avant qu'il ne soit trop tard.") },
      { mot:"se concerter", nature:"v.", cat:"v", ...D("Se réunir pour délibérer ensemble avant d'agir.","Les membres de l'équipe se sont concertés avant de répondre.") },
      { mot:"en conférer", nature:"v.", cat:"v", ...D("S'entretenir d'une affaire avec quelqu'un pour prendre une décision.","Il dut en conférer avec ses associés avant de s'engager.") },
      { mot:"se congratuler", nature:"v.", cat:"v", ...D("Se féliciter mutuellement avec effusion.","Après le succès, ils se congratulèrent chaleureusement.") },
      { mot:"se dédire", nature:"v.", cat:"v", ...D("Revenir sur ses paroles, se rétracter de ce qu'on avait dit ou promis.","Il se dédit de sa promesse sous la pression de ses alliés.") },
      { mot:"défrayer la chronique", nature:"loc.v.", cat:"loc", ...D("Faire parler de soi, alimenter les commentaires et les discussions publiques.","Ce scandale a défrayé la chronique pendant plusieurs semaines.") },
      { mot:"délibérer", nature:"v.", cat:"v", ...D("Réfléchir collectivement avant de prendre une décision ; peser le pour et le contre.","Le jury délibéra pendant plusieurs heures avant de rendre son verdict.") },
      { mot:"dénigrer", nature:"v.", cat:"v", ...D("Chercher à rabaisser quelqu'un ou quelque chose par des paroles malveillantes.","Il dénigrait systématiquement les initiatives de ses collègues.") },
      { mot:"désavouer", nature:"v.", cat:"v", ...D("Refuser de reconnaître quelqu'un ou quelque chose comme sien ; répudier.","Le parti a désavoué les propos tenus par l'un de ses membres.") },
      { mot:"disserter", nature:"v.", cat:"v", ...D("Développer méthodiquement un sujet en examinant ses différents aspects.","Il dissertait longuement sur la philosophie stoïcienne.") },
      { mot:"éluder", nature:"v.", cat:"v", ...D("Éviter habilement une question, une difficulté, par des détours.","Il éludait toutes les questions gênantes avec une aisance déconcertante.") },
      { mot:"exhorter", nature:"v.", cat:"v", ...D("Inciter vivement quelqu'un à faire quelque chose par des paroles encourageantes.","L'entraîneur exhorta ses joueurs à donner le meilleur d'eux-mêmes.") },
      { mot:"fulminer", nature:"v.", cat:"v", ...D("Éclater en vives protestations ou menaces ; dénoncer avec violence.","Il fulminait contre l'injustice du verdict.") },
      { mot:"haranguer", nature:"v.", cat:"v", ...D("Prononcer une harangue devant un groupe ; s'adresser à une foule de façon véhémente.","Il harangua la foule pendant plus d'une heure.") },
      { mot:"intercéder", nature:"v.", cat:"v", ...D("Intervenir en faveur de quelqu'un pour obtenir une grâce ou un pardon.","Elle intercéda auprès du directeur en faveur de son employé.") },
      { mot:"notifier", nature:"v.", cat:"v", ...D("Faire connaître officiellement et formellement quelque chose à quelqu'un.","Le tribunal lui a notifié sa décision par lettre recommandée.") },
      { mot:"persifler", nature:"v.", cat:"v", ...D("Se moquer de quelqu'un avec légèreté et ironie, en le tournant en ridicule.","Il persiflait ses adversaires avec une élégance redoutable.") },
      { mot:"postuler", nature:"v.", cat:"v", ...D("Présenter sa candidature à un poste ; admettre comme postulat.","Elle a postulé à plusieurs postes dans la région.") },
      { mot:"préconiser", nature:"v.", cat:"v", ...D("Recommander vivement quelque chose comme la meilleure solution.","Les experts préconisent une réforme rapide du système fiscal.") },
      { mot:"proférer", nature:"v.", cat:"v", ...D("Prononcer des paroles, souvent violentes ou offensantes.","Il proféra des menaces avant de quitter la salle.") },
      { mot:"promulguer", nature:"v.", cat:"v", ...D("Rendre officielle une loi ou un décret en le publiant solennellement.","La loi a été promulguée au Journal officiel.") },
      { mot:"prôner", nature:"v.", cat:"v", ...D("Préconiser avec insistance, vanter les mérites de quelque chose.","Il prônait la sobriété énergétique depuis des années.") },
      { mot:"rétorquer", nature:"v.", cat:"v", ...D("Répondre vivement à une attaque ou une objection en retournant l'argument.","Elle lui rétorqua qu'il avait lui-même commis la même erreur.") },
      { mot:"solliciter", nature:"v.", cat:"v", ...D("Demander avec insistance ; s'adresser à quelqu'un pour obtenir quelque chose.","Il a sollicité une audience auprès du ministre.") },
      { mot:"stigmatiser", nature:"v.", cat:"v", ...D("Flétrir publiquement, condamner avec force un comportement ou une personne.","Le rapport stigmatise les dérives budgétaires du gouvernement.") },
      { mot:"stipuler", nature:"v.", cat:"v", ...D("Mentionner expressément une condition dans un contrat ou un accord.","Le contrat stipule clairement les obligations de chaque partie.") },
      { mot:"se targuer", nature:"v.", cat:"v", ...D("Se vanter de quelque chose, s'en prévaloir avec orgueil.","Il se targuait d'une expérience qu'il n'avait pas réellement.") },
      { mot:"vilipender", nature:"v.", cat:"v", ...D("Traiter quelqu'un avec un mépris public et total ; critiquer violemment.","La presse vilipendait le ministre depuis des semaines.") },
      { mot:"vitupérer", nature:"v.", cat:"v", ...D("Crier avec violence contre quelqu'un ou quelque chose ; invectiver.","Il vitupérait contre l'injustice de la situation.") },
      { mot:"vociférer", nature:"v.", cat:"v", ...D("Crier avec une violence désordonnée, hurler de colère.","La foule vociférait des injures devant le tribunal.") },
    ]
  },
  {
    id:"viedestinee", numero:12, titre:"La Vie, la Destinée", icone:"🌿",
    description:"Existence, héritage, cycle de la vie",
    couleur:"#4a2a6a", accent:"#9060c0",
    mots:[
      // Noms
      { mot:"adversité", nature:"n.f.", cat:"n", ...D("Situation difficile, ensemble de malheurs ou d'épreuves que l'on doit affronter.","Il a su garder sa dignité dans l'adversité la plus sombre.") },
      { mot:"avatar", nature:"n.m.", cat:"n", ...D("Transformation, métamorphose d'une personne ou d'une chose ; mésaventure ; incarnation numérique.","Ce projet n'est que le dernier avatar d'une vieille idée sans cesse relancée.") },
      { mot:"dégénérescence", nature:"n.f.", cat:"n", ...D("Processus par lequel un être vivant ou une société perd ses qualités essentielles et décline.","La dégénérescence des valeurs civiques inquiète les sociologues.") },
      { mot:"engeance", nature:"n.f.", cat:"n", ...D("Race, espèce de personnes jugées méprisables ou nuisibles ; lignée mal famée.","Il ne voulait plus avoir affaire à cette engeance de profiteurs.") },
      { mot:"génie", nature:"n.m.", cat:"n", ...D("Aptitude intellectuelle ou créatrice exceptionnelle ; personne dotée de ce don ; esprit tutélaire.","Le génie de Mozart s'est manifesté dès l'enfance.") },
      { mot:"genre", nature:"n.m.", cat:"n", ...D("Catégorie, espèce ; identité sociale et culturelle liée au sexe ; catégorie littéraire ou artistique.","Le genre humain est soumis aux mêmes angoisses existentielles.") },
      { mot:"hymen", nature:"n.m.", cat:"n", ...D("Membrane partielle à l'entrée du vagin ; par ext., poétique, le mariage, l'union conjugale.","L'hymen est souvent utilisé comme symbole littéraire de la nuptialité.") },
      { mot:"mœurs", nature:"n.f.pl.", cat:"n", ...D("Habitudes de vie, pratiques morales et sociales d'un individu ou d'un groupe à une époque donnée.","Les mœurs ont considérablement évolué au cours du XXe siècle.") },
      { mot:"nécrologie", nature:"n.f.", cat:"n", ...D("Notice biographique publiée à la mort de quelqu'un ; rubrique consacrée aux décès récents.","Sa nécrologie dans Le Monde rendait hommage à quarante ans de carrière.") },
      { mot:"parricide", nature:"n.m.", cat:"n", ...D("Meurtre de son père ou de sa mère ; par ext., crime contre une figure parentale ou fondatrice.","Le parricide est l'un des crimes les plus lourdement sanctionnés en droit romain.") },
      { mot:"parturition", nature:"n.f.", cat:"n", ...D("Ensemble du processus physiologique de l'accouchement ; mise bas chez les animaux.","La parturition naturelle sans péridurale est le choix de nombreuses femmes.") },
      { mot:"patrimoine", nature:"n.m.", cat:"n", ...D("Ensemble des biens matériels et immatériels transmis par les ancêtres ; héritage culturel ou familial.","La cathédrale est classée au patrimoine mondial de l'UNESCO.") },
      { mot:"postérité", nature:"n.f.", cat:"n", ...D("Les générations futures ; l'ensemble des descendants ; la renommée qu'on laisse après sa mort.","Cette œuvre est entrée dans la postérité bien après la mort de son auteur.") },
      { mot:"progéniture", nature:"n.f.", cat:"n", ...D("Ensemble des descendants, des enfants issus d'un être vivant ; terme souvent employé avec ironie.","Il consacrait toute son énergie à l'avenir de sa progéniture.") },
      { mot:"régénération", nature:"n.f.", cat:"n", ...D("Processus de renouvellement, de renaissance d'un être, d'un tissu ou d'une société.","La régénération cellulaire permet à la salamandre de reconstituer ses membres.") },
      { mot:"trépas", nature:"n.m.", cat:"n", ...D("La mort, le passage de la vie à la mort ; terme littéraire et solennel.","Il rendit l'âme dans la paix, sans appréhender le trépas.") },
      { mot:"vicissitude", nature:"n.f.", cat:"n", ...D("Succession de changements heureux et malheureux dans le cours d'une existence ; instabilité de la fortune.","Les vicissitudes de sa vie l'avaient forgé en un homme d'une rare sagesse.") },
      // Adjectifs
      { mot:"fatal(e)", nature:"adj.", cat:"adj", ...D("Qui entraîne inévitablement la mort ou un dénouement grave ; fixé par le destin.","Une erreur fatale qu'il ne pouvait plus réparer.") },
      { mot:"fatidique", nature:"adj.", cat:"adj", ...D("Qui marque un tournant décisif fixé par le destin ; porteur d'un présage grave.","Le jour fatidique de l'examen approchait inexorablement.") },
      { mot:"funèbre", nature:"adj.", cat:"adj", ...D("Relatif aux funérailles, à la mort ; d'une tristesse évoquant le deuil.","Les pompes funèbres organisèrent une cérémonie sobre et digne.") },
      { mot:"funeste", nature:"adj.", cat:"adj", ...D("Qui cause la mort ou un grand malheur ; d'une conséquence désastreuse.","Cette décision funeste plongea le pays dans une crise sans précédent.") },
      { mot:"inné(e)", nature:"adj.", cat:"adj", ...D("Qui est présent dès la naissance, que l'on n'a pas acquis par l'expérience ou l'apprentissage.","Son sens inné de la musique stupéfiait ses professeurs.") },
      { mot:"matriarcal(e)", nature:"adj.", cat:"adj", ...D("Relatif au matriarcat, société ou famille où l'autorité est exercée par la femme ou la mère.","Certaines sociétés matriarcales transmettent les biens par la lignée féminine.") },
      { mot:"moribond(e)", nature:"adj.", cat:"adj", ...D("Qui est sur le point de mourir ; par ext., qui tend vers sa fin ou son déclin.","Une industrie moribonde que rien ne semblait pouvoir relancer.") },
      { mot:"nuptial(e)", nature:"adj.", cat:"adj", ...D("Relatif aux noces, au mariage, à la cérémonie d'union.","La marche nuptiale de Mendelssohn résonnait dans toute l'église.") },
      { mot:"posthume", nature:"adj.", cat:"adj", ...D("Qui paraît ou se produit après la mort de quelqu'un ; né après la mort du père.","Son roman posthume fut publié par ses héritiers dix ans après sa disparition.") },
      { mot:"prédestiné(e)", nature:"adj.", cat:"adj", ...D("Dont le destin semble fixé à l'avance par une force supérieure ou les circonstances.","Il semblait prédestiné à diriger cette institution familiale.") },
      { mot:"prolifique", nature:"adj.", cat:"adj", ...D("Qui se reproduit abondamment ; qui produit beaucoup d'œuvres, d'idées.","Balzac fut l'un des romanciers les plus prolifiques de la littérature française.") },
      { mot:"puéril(e)", nature:"adj.", cat:"adj", ...D("Propre à l'enfant ou qui manque de maturité ; infantile, futile.","Ses réactions puériles surprenaient dans un homme de son âge.") },
      { mot:"sénile", nature:"adj.", cat:"adj", ...D("Relatif à la vieillesse avancée ; qui présente les signes d'un affaiblissement lié à l'âge.","La démence sénile touche une part croissante de la population âgée.") },
      // Verbes
      { mot:"dégénérer", nature:"v.", cat:"v", ...D("Perdre ses qualités originelles ; évoluer vers un état inférieur ou plus grave.","La discussion dégénéra en altercation violente.") },
      { mot:"régénérer", nature:"v.", cat:"v", ...D("Redonner une nouvelle vigueur ; reconstituer ce qui était détruit ou altéré.","Cette cure thermale l'a régénéré physiquement et mentalement.") },
    ]
  },
  {
    id:"viephysique", numero:13, titre:"La Vie physique", icone:"💪",
    description:"Corps, sensations, santé, vitalité",
    couleur:"#6a4010", accent:"#d08030",
    mots:[
      // Noms
      { mot:"atrophie", nature:"n.f.", cat:"n", ...D("Diminution progressive du volume d'un organe ou d'un tissu par manque d'usage ou de nutrition.","L'atrophie musculaire s'installe rapidement après une immobilisation prolongée.") },
      { mot:"cécité", nature:"n.f.", cat:"n", ...D("Privation totale de la vue, congénitale ou acquise ; par ext., manque de discernement.","La cécité nocturne peut être le signe d'une carence en vitamine A.") },
      { mot:"célérité", nature:"n.f.", cat:"n", ...D("Rapidité, promptitude dans l'exécution d'un mouvement ou d'une action.","Il répondit avec une célérité qui surprit son adversaire.") },
      { mot:"commotion", nature:"n.f.", cat:"n", ...D("Ébranlement violent du cerveau ou d'un organe par un choc ; traumatisme physique ou émotionnel.","La commotion cérébrale nécessite un repos complet de plusieurs jours.") },
      { mot:"complexion", nature:"n.f.", cat:"n", ...D("Constitution physique et tempérament naturel d'une personne ; couleur et texture de la peau.","Sa complexion délicate la rendait vulnérable aux infections hivernales.") },
      { mot:"décrépitude", nature:"n.f.", cat:"n", ...D("Affaiblissement profond lié à l'âge avancé ; état de délabrement d'un être ou d'une chose.","La décrépitude du vieillard contrastait avec la vivacité de son regard.") },
      { mot:"dextérité", nature:"n.f.", cat:"n", ...D("Adresse et habileté manuelle ou intellectuelle dans l'accomplissement d'une tâche.","Le chirurgien opérait avec une dextérité impressionnante.") },
      { mot:"effigie", nature:"n.f.", cat:"n", ...D("Représentation figurée d'une personne sur une monnaie, une médaille ou une image ; portrait symbolique.","Son effigie figurait sur toutes les pièces du royaume.") },
      { mot:"fébrilité", nature:"n.f.", cat:"n", ...D("État d'agitation et d'excitation fébrile, physique ou émotionnelle.","La fébrilité des coulisses avant le spectacle était palpable.") },
      { mot:"hystérie", nature:"n.f.", cat:"n", ...D("État d'agitation excessive et incontrôlée ; trouble psychique historiquement associé à des symptômes physiques.","L'annonce du concert provoqua une hystérie collective chez les fans.") },
      { mot:"inanition", nature:"n.f.", cat:"n", ...D("Épuisement extrême par manque de nourriture ; affaiblissement profond dû à la privation.","Les rescapés étaient tombés d'inanition après trois jours sans eau ni vivres.") },
      { mot:"innocuité", nature:"n.f.", cat:"n", ...D("Caractère de ce qui est sans danger pour l'organisme ou l'environnement.","L'innocuité du vaccin a été prouvée par plusieurs études cliniques.") },
      { mot:"mutisme", nature:"n.m.", cat:"n", ...D("Impossibilité ou refus de parler ; silence obstiné face à une situation.","Son mutisme face aux accusations laissait tout le monde perplexe.") },
      { mot:"satyre", nature:"n.m.", cat:"n", ...D("Homme aux mœurs dissolues et obsédé sexuel ; dans la mythologie, demi-dieu à figure animale libidineux.","Ce satyre importuna plusieurs passantes avant d'être interpellé.") },
      { mot:"sensation", nature:"n.f.", cat:"n", ...D("Impression reçue par les sens ; état affectif élémentaire provoqué par un stimulus.","La sensation de brûlure persista plusieurs heures après le contact.") },
      { mot:"vélocité", nature:"n.f.", cat:"n", ...D("Grande rapidité dans les mouvements ou l'exécution ; agilité technique en musique.","Sa vélocité au piano laissait le public bouche bée.") },
      // Adjectifs
      { mot:"aguerri(e)", nature:"adj.", cat:"adj", ...D("Endurci par l'expérience des épreuves physiques ou morales ; rompu à une pratique difficile.","Un alpiniste aguerri capable d'affronter les conditions les plus extrêmes.") },
      { mot:"amnésique", nature:"adj.", cat:"adj", ...D("Qui souffre d'amnésie, de perte partielle ou totale de la mémoire.","Le patient amnésique ne reconnaissait plus ses proches.") },
      { mot:"allergique", nature:"adj.", cat:"adj", ...D("Qui présente une réaction d'hypersensibilité à une substance normalement tolérée ; par ext., hostile à quelque chose.","Allergique aux arachides, il vérifiait systématiquement les étiquettes.") },
      { mot:"amorphe", nature:"adj.", cat:"adj", ...D("Sans énergie, sans volonté, sans réaction ; qui manque de tonus physique ou moral.","Il passait ses journées amorphe devant l'écran, incapable du moindre effort.") },
      { mot:"apathique", nature:"adj.", cat:"adj", ...D("Caractérisé par l'apathie, l'indifférence totale et le manque de réactivité.","Les adolescents apathiques de la fiche illustrent bien ce trait.") },
      { mot:"aphone", nature:"adj.", cat:"adj", ...D("Qui a perdu la voix temporairement ; dont la voix est inaudible.","Aphone après le concert, il communiquait par écrit.") },
      { mot:"boulimique", nature:"adj.", cat:"adj", ...D("Relatif à la boulimie, trouble du comportement alimentaire ; par ext., avide de façon excessive.","Un lecteur boulimique capable d'avaler trois romans par semaine.") },
      { mot:"curatif(ve)", nature:"adj.", cat:"adj", ...D("Qui vise à guérir une maladie déjà déclarée, par opposition à préventif.","Ce traitement curatif doit être associé à des mesures préventives.") },
      { mot:"débile", nature:"adj.", cat:"adj", ...D("D'une constitution physique très faible ; par ext., dénué de force intellectuelle.","Un enfant débile au sens médical nécessite un accompagnement spécialisé.") },
      { mot:"débilitant(e)", nature:"adj.", cat:"adj", ...D("Qui affaiblit progressivement les forces physiques ou morales.","La chaleur débilitante de l'été rendait tout effort impossible.") },
      { mot:"érotique", nature:"adj.", cat:"adj", ...D("Relatif à l'amour charnel, à la sexualité ; qui éveille le désir.","La littérature érotique a une longue tradition dans les lettres françaises.") },
      { mot:"exsangue", nature:"adj.", cat:"adj", ...D("Qui a perdu beaucoup de sang ; d'une pâleur extrême ; épuisé de ses ressources.","Le blessé exsangue fut transporté d'urgence au bloc opératoire.") },
      { mot:"famélique", nature:"adj.", cat:"adj", ...D("Qui souffre d'une faim intense et chronique ; décharné par le manque de nourriture.","Les animaux faméliques du refuge attendaient leur ration quotidienne.") },
      { mot:"fécond(e)", nature:"adj.", cat:"adj", ...D("Qui est capable de se reproduire abondamment ; qui produit beaucoup d'idées ou d'œuvres.","Un esprit fécond capable de générer des idées nouvelles à l'infini.") },
      { mot:"guttural(e)", nature:"adj.", cat:"adj", ...D("Qui vient du gosier ; se dit d'un son produit dans le fond de la gorge.","Son accent guttural trahissait ses origines germaniques.") },
      { mot:"impotent(e)", nature:"adj.", cat:"adj", ...D("Qui a perdu en partie ou totalement l'usage de ses membres ; invalide.","L'accident l'avait rendu impotent, cloué dans un fauteuil roulant.") },
      { mot:"insatiable", nature:"adj.", cat:"adj", ...D("Que l'on ne peut pas rassasier ; dont le désir ou l'appétit ne peut être comblé.","Un insatiable appétit de connaissances le poussait à tout lire.") },
      { mot:"oculaire", nature:"adj.", cat:"adj", ...D("Relatif à l'œil, à la vision ; qui concerne les affections de l'œil.","Le témoin oculaire confirma la version des événements.") },
      { mot:"oppressant", nature:"adj.", cat:"adj", ...D("Qui oppresse, pèse sur la poitrine ou l'esprit ; qui génère une sensation d'étouffement.","Une chaleur oppressante régnait dans la salle sans climatisation.") },
      { mot:"pathologique", nature:"adj.", cat:"adj", ...D("Relatif à une maladie ; qui dépasse les limites du normal au point de constituer un trouble.","Sa peur pathologique des espaces ouverts lui rendait la vie impossible.") },
      { mot:"roboratif(ve)", nature:"adj.", cat:"adj", ...D("Qui fortifie, qui redonne des forces physiques ; tonifiant, reconstituant.","Un repas roboratif après une longue randonnée en montagne.") },
      { mot:"salubre", nature:"adj.", cat:"adj", ...D("Qui est favorable à la santé ; dont les conditions sanitaires sont bonnes.","Un air salubre et pur, loin de la pollution urbaine.") },
      { mot:"sclérosé(e)", nature:"adj.", cat:"adj", ...D("Atteint de sclérose, rigidifié par l'âge ou l'habitude ; incapable d'évoluer.","Une administration sclérosée, incapable de s'adapter aux nouvelles réalités.") },
      { mot:"sensuel(le)", nature:"adj.", cat:"adj", ...D("Qui se rapporte aux plaisirs des sens ; qui éveille ou exprime la sensualité.","Une musique sensuelle qui invitait à la danse et au rapprochement.") },
      { mot:"soporifique", nature:"adj.", cat:"adj", ...D("Qui provoque le sommeil ; par ext., d'un ennui profond, assommant.","Son discours soporifique fit bâiller les trois quarts de l'assemblée.") },
      { mot:"tangible", nature:"adj.", cat:"adj", ...D("Que l'on peut toucher, percevoir par les sens ; réel et concret, évident.","Des résultats tangibles qui justifient l'investissement consenti.") },
      { mot:"thérapeutique", nature:"adj.", cat:"adj", ...D("Relatif au traitement des maladies ; qui a une vertu curative ou apaisante.","La marche a des effets thérapeutiques reconnus sur l'anxiété.") },
      { mot:"valide", nature:"adj.", cat:"adj", ...D("Qui jouit de toutes ses capacités physiques ; dont la santé est bonne ; juridiquement reconnu.","Un formulaire valide doit être signé et daté.") },
      // Verbes
      { mot:"anesthésier", nature:"v.", cat:"v", ...D("Supprimer la sensibilité par anesthésie ; par ext., engourdir les émotions ou la réaction.","La routine finit par anesthésier toute curiosité intellectuelle.") },
      { mot:"assouvir", nature:"v.", cat:"v", ...D("Satisfaire pleinement un besoin, un désir, une passion jusqu'à satiété.","Il assouvit enfin sa soif de voyages en parcourant l'Asie du Sud-Est.") },
      { mot:"s'étioler", nature:"v.", cat:"v", ...D("Dépérir faute de lumière, de nourriture ou de stimulation ; se dégrader progressivement.","Sans exercice physique, le corps s'étiole et perd de sa vigueur.") },
      { mot:"scléroser", nature:"v.", cat:"v", ...D("Durcir et rigidifier par sclérose ; figer dans des habitudes immuables.","L'absence de concurrence risque de scléroser l'entreprise.") },
      { mot:"subsister", nature:"v.", cat:"v", ...D("Continuer d'exister malgré les difficultés ; survivre avec le minimum.","Il subsistait grâce à de petits travaux occasionnels.") },
      { mot:"sustenter", nature:"v.", cat:"v", ...D("Fournir la nourriture nécessaire à l'entretien de la vie ; nourrir, alimenter.","Un repas copieux pour sustenter les ouvriers après leur longue journée.") },
    ]
  },
  {
    id:"vieintellectuelle", numero:14, titre:"La Vie intellectuelle et psychique", icone:"🧠",
    description:"Esprit, psychologie, raison, conscience",
    couleur:"#1a4a3a", accent:"#40a880",
    mots:[
      // Noms
      { mot:"antidote", nature:"n.m.", cat:"n", ...D("Substance neutralisant un poison ; par ext., remède contre un mal moral ou intellectuel.","La culture est le meilleur antidote contre l'obscurantisme.") },
      { mot:"conscience", nature:"n.f.", cat:"n", ...D("Faculté de percevoir sa propre existence et le monde extérieur ; sentiment moral du bien et du mal.","Il agissait en accord avec sa conscience, quelles qu'en soient les conséquences.") },
      { mot:"dément(e)", nature:"n./adj.", cat:"n", ...D("Atteint de démence, de trouble mental sévère ; par ext., qui dépasse la raison, démesuré.","Ses idées déments défiaient toute logique ordinaire.") },
      { mot:"escient", nature:"n.m.", cat:"n", ...D("Connaissance claire que l'on a de quelque chose ; surtout dans « à bon escient » : en connaissance de cause.","Il n'utilisait ce terme qu'à bon escient, avec une précision remarquable.") },
      { mot:"faculté", nature:"n.f.", cat:"n", ...D("Aptitude naturelle ou acquise de l'esprit ; capacité intellectuelle ou physique particulière.","La faculté de raisonnement abstrait se développe à l'adolescence.") },
      { mot:"fantasme", nature:"n.m.", cat:"n", ...D("Production imaginaire de l'inconscient ; désir ou scénario imaginé non réalisé.","Son fantasme de liberté absolue guidait toutes ses décisions.") },
      { mot:"for intérieur", nature:"n.m.", cat:"n", ...D("Le tribunal intérieur de la conscience ; le for intérieur : au fond de soi-même.","Dans son for intérieur, il savait qu'il avait eu tort.") },
      { mot:"inconscient", nature:"n.m.", cat:"n", ...D("Partie de la vie psychique échappant à la conscience ; ensemble des processus mentaux non conscients.","Freud a fait de l'inconscient le moteur caché de nos comportements.") },
      { mot:"intelligence", nature:"n.f.", cat:"n", ...D("Faculté de comprendre, de s'adapter et de résoudre des problèmes ; qualité de l'esprit vif et pénétrant.","L'intelligence émotionnelle est aussi précieuse que l'intelligence cognitive.") },
      { mot:"introspection", nature:"n.f.", cat:"n", ...D("Observation et analyse de ses propres états intérieurs, de ses pensées et sentiments.","La pratique de l'introspection permet une meilleure connaissance de soi.") },
      { mot:"jugement", nature:"n.m.", cat:"n", ...D("Faculté d'apprécier et d'évaluer ; opinion fondée sur une analyse ; décision rendue par un tribunal.","Son jugement était réputé pour sa finesse et son équité.") },
      { mot:"mentalité", nature:"n.f.", cat:"n", ...D("Ensemble des habitudes d'esprit, des croyances et des façons de penser propres à un individu ou un groupe.","La mentalité cartésienne caractérise souvent la pensée française.") },
      { mot:"moi", nature:"n.m.", cat:"n", ...D("Instance psychique consciente chez Freud ; la personnalité propre d'un individu, son identité profonde.","Le moi freudien joue le rôle de médiateur entre le ça et le surmoi.") },
      { mot:"opinion", nature:"n.f.", cat:"n", ...D("Avis personnel, jugement subjectif sur une question, sans certitude absolue.","Se forger une opinion éclairée exige d'entendre plusieurs points de vue.") },
      { mot:"phobie", nature:"n.f.", cat:"n", ...D("Peur irrationnelle et intense d'un objet, d'une situation ou d'un être, incontrôlable.","L'arachnophobie est l'une des phobies les plus répandues dans le monde.") },
      { mot:"préjugé", nature:"n.m.", cat:"n", ...D("Opinion adoptée sans examen préalable, souvent en défaveur de quelqu'un ou quelque chose.","Les préjugés ne résistent généralement pas à une connaissance approfondie.") },
      { mot:"psychologie", nature:"n.f.", cat:"n", ...D("Science étudiant les comportements et les processus mentaux ; aptitude à comprendre les autres.","Il avait une psychologie intuitive des foules qui impressionnait ses contemporains.") },
      { mot:"psychose", nature:"n.f.", cat:"n", ...D("Trouble mental sévère altérant le rapport à la réalité ; par ext., peur collective irrationnelle.","La psychose collective autour de l'épidémie dépassait la réalité du danger.") },
      { mot:"pulsion", nature:"n.f.", cat:"n", ...D("Force instinctive profonde poussant à l'action ; élan intérieur difficile à contrôler.","La pulsion créatrice le tenait éveillé jusqu'à l'aube chaque nuit.") },
      { mot:"résilience", nature:"n.f.", cat:"n", ...D("Capacité d'un individu à surmonter un traumatisme et à se reconstruire après une épreuve.","Sa résilience après le deuil força l'admiration de son entourage.") },
      { mot:"raison", nature:"n.f.", cat:"n", ...D("Faculté de penser logiquement et de distinguer le vrai du faux ; cause, motif d'une action.","La raison et l'émotion sont complémentaires dans la prise de décision.") },
      { mot:"sagacité", nature:"n.f.", cat:"n", ...D("Pénétration d'esprit permettant de discerner rapidement et avec justesse ce qui est caché ou complexe.","La sagacité du détective lui permit de dénouer l'affaire en quelques heures.") },
      { mot:"spéculation", nature:"n.f.", cat:"n", ...D("Réflexion purement théorique sans ancrage dans les faits ; opération financière risquée.","Sa spéculation philosophique l'éloignait parfois des réalités concrètes.") },
      { mot:"subconscient", nature:"n.m.", cat:"n", ...D("Zone frontière entre le conscient et l'inconscient ; processus mentaux accessibles à la conscience avec effort.","Nos peurs subconscientes influencent nos choix sans que nous en soyons conscients.") },
      { mot:"vacuité", nature:"n.f.", cat:"n", ...D("État de ce qui est vide ; manque total de substance intellectuelle ou morale.","La vacuité de ses propos contrastait avec l'assurance de son ton.") },
      { mot:"vie intérieure", nature:"n.f.", cat:"n", ...D("Ensemble de la vie psychique et spirituelle d'un individu, de ses pensées et émotions profondes.","Une riche vie intérieure lui permettait de supporter la solitude.") },
      // Adjectifs
      { mot:"cérébral(e)", nature:"adj.", cat:"adj", ...D("Relatif au cerveau ; qui fait appel à l'intellect plutôt qu'aux émotions.","Un auteur cérébral dont les œuvres exigent une lecture attentive.") },
      { mot:"égocentrique", nature:"adj.", cat:"adj", ...D("Qui place son moi au centre de tout ; incapable de se décentrer pour considérer le point de vue d'autrui.","Son attitude égocentrique rendait toute collaboration difficile.") },
      { mot:"intellectuel(le)", nature:"adj.", cat:"adj", ...D("Relatif à l'intellect, aux activités de l'esprit ; qui se consacre aux travaux de l'esprit.","Un travail intellectuel intense nécessite des pauses régulières pour rester efficace.") },
      { mot:"ludique", nature:"adj.", cat:"adj", ...D("Relatif au jeu ; qui repose sur une activité ludique, légère et agréable.","Une approche ludique de l'apprentissage favorise la mémorisation.") },
      { mot:"mental(e)", nature:"adj.", cat:"adj", ...D("Relatif à l'esprit, aux processus intellectuels et psychiques.","La préparation mentale est devenue essentielle dans le sport de haut niveau.") },
      { mot:"morbide", nature:"adj.", cat:"adj", ...D("Relatif à la maladie ; d'une curiosité ou d'une fascination malsaine pour la mort ou le macabre.","Une curiosité morbide pour les faits divers tragiques.") },
      { mot:"obtus(e)", nature:"adj.", cat:"adj", ...D("D'une intelligence lente et bornée, incapable de comprendre les nuances.","Il restait obtus face à toute argumentation contraire à ses convictions.") },
      { mot:"onirique", nature:"adj.", cat:"adj", ...D("Relatif aux rêves, qui évoque l'atmosphère ou la logique du rêve.","Son écriture onirique transportait le lecteur dans un univers irréel.") },
      { mot:"psychique", nature:"adj.", cat:"adj", ...D("Relatif à la vie mentale et émotionnelle ; qui appartient au domaine de l'esprit.","Les douleurs psychiques sont parfois plus difficiles à soigner que les douleurs physiques.") },
      { mot:"suggestif(ve)", nature:"adj.", cat:"adj", ...D("Qui suggère des idées ou des images sans les exprimer explicitement ; évocateur.","Un regard suggestif qui laissait deviner ce que les mots ne disaient pas.") },
      { mot:"subjectif(ve)", nature:"adj.", cat:"adj", ...D("Propre à un sujet particulier ; influencé par les sentiments et les opinions personnels.","Tout jugement esthétique comporte une part irréductiblement subjective.") },
      // Verbes
      { mot:"appréhender", nature:"v.", cat:"v", ...D("Saisir par l'intellect, comprendre ; craindre avec inquiétude un événement futur.","Il appréhendait l'examen tout en sachant qu'il était bien préparé.") },
      { mot:"entendre", nature:"v.", cat:"v", ...D("Percevoir par l'ouïe ; comprendre, saisir le sens de quelque chose ; avoir l'intention de.","J'entends par là que la nuance est essentielle à la compréhension.") },
      { mot:"se figurer", nature:"v.", cat:"v", ...D("Se représenter mentalement quelque chose ; s'imaginer, se persuader de quelque chose.","Il se figurait que tout le monde partageait son point de vue.") },
      { mot:"hypnotiser", nature:"v.", cat:"v", ...D("Plonger dans un état hypnotique ; fasciner au point d'annihiler tout esprit critique.","L'orateur hypnotisait son auditoire par la seule force de sa voix.") },
    ]
  },
  {
    id:"caracteres", numero:15, titre:"Caractères et comportements", icone:"🎭",
    description:"Tempéraments, traits de caractère, attitudes",
    couleur:"#6a2a1a", accent:"#c05030",
    mots:[
      // Noms
      { mot:"circonspection", nature:"n.f.", cat:"n", ...D("Prudence attentive qui consiste à peser soigneusement ses actes et ses paroles avant d'agir.","Il agissait avec une circonspection qui pouvait parfois passer pour de la lâcheté.") },
      { mot:"dilettante", nature:"n.", cat:"n", ...D("Personne qui se consacre à une activité par goût, sans rigueur professionnelle ; amateur superficiel.","Il abordait la peinture en dilettante, sans jamais chercher à progresser vraiment.") },
      { mot:"inadvertance", nature:"n.f.", cat:"n", ...D("Manque d'attention passager causant une erreur ou un oubli ; étourderie non intentionnelle.","C'est par inadvertance qu'il avait divulgué l'information confidentielle.") },
      { mot:"masochisme", nature:"n.m.", cat:"n", ...D("Tendance à trouver du plaisir dans sa propre souffrance physique ou morale ; complaisance dans l'échec.","Continuer à travailler pour ce patron relevait du masochisme pur.") },
      { mot:"mijaurée", nature:"n.f.", cat:"n", ...D("Femme aux manières affectées et prétentieuses, qui fait la précieuse.","Cette mijaurée refusait de s'asseoir sans qu'on lui avance sa chaise.") },
      { mot:"morgue", nature:"n.f.", cat:"n", ...D("Arrogance méprisante et hautaine dans l'attitude ou le comportement envers autrui.","Sa morgue naturelle lui aliénait tous ceux qui l'approchaient.") },
      { mot:"opiniâtreté", nature:"n.f.", cat:"n", ...D("Persistance obstinée dans ses opinions, ses décisions ou ses efforts, malgré les obstacles.","Son opiniâtreté finit par venir à bout de toutes les résistances.") },
      { mot:"propension", nature:"n.f.", cat:"n", ...D("Tendance naturelle, penchant instinctif à faire quelque chose ou à se comporter d'une certaine façon.","Sa propension au perfectionnisme le ralentissait dans ses projets.") },
      { mot:"urbanité", nature:"n.f.", cat:"n", ...D("Politesse raffinée et courtoisie dans les relations sociales ; caractère d'un comportement civilisé.","Son urbanité naturelle lui valait la sympathie de tous ses interlocuteurs.") },
      // Adjectifs
      { mot:"acariâtre", nature:"adj.", cat:"adj", ...D("D'un caractère difficile et irritable, qui dispute et grogne sans cesse.","Une voisine acariâtre qui trouvait à redire sur tout et n'importe quoi.") },
      { mot:"affecté(e)", nature:"adj.", cat:"adj", ...D("Qui manque de naturel, dont les manières sont artificielles et prétentieuses.","Son ton affecté agaçait profondément ses collègues par son manque d'authenticité.") },
      { mot:"altier(ère)", nature:"adj.", cat:"adj", ...D("Qui manifeste un sentiment de supériorité dans son attitude ; fier et hautain.","Son port altier et son regard distant intimidaient ceux qui l'approchaient.") },
      { mot:"avisé(e)", nature:"adj.", cat:"adj", ...D("Qui agit avec prudence et discernement ; sage et clairvoyant dans ses jugements.","Un investisseur avisé sait attendre le bon moment pour agir.") },
      { mot:"belliqueux(se)", nature:"adj.", cat:"adj", ...D("Qui aime les querelles et les conflits ; d'un tempérament combatif et agressif.","Son caractère belliqueux lui avait valu de nombreux ennemis au fil des ans.") },
      { mot:"bilieux(se)", nature:"adj.", cat:"adj", ...D("D'humeur irritable et sombre, porté à la contrariété et à la mauvaise humeur.","Un tempérament bilieux qui voyait tout en noir et cherchait querelle à chacun.") },
      { mot:"cabotin(e)", nature:"adj.", cat:"adj", ...D("Qui cherche à attirer l'attention par des effets excessifs et calculés ; comédien médiocre.","Son attitude cabotine lors de la réunion agaça l'ensemble des participants.") },
      { mot:"candide", nature:"adj.", cat:"adj", ...D("D'une ingénuité et d'une pureté naïves ; sincère au point de manquer de méfiance.","Voltaire a choisi un héros candide pour mieux dénoncer l'hypocrisie de son siècle.") },
      { mot:"casanier(ère)", nature:"adj.", cat:"adj", ...D("Qui préfère rester chez soi plutôt que de sortir ; attaché à ses habitudes domestiques.","Casanier par nature, il déclinait toutes les invitations dès la tombée du soir.") },
      { mot:"condescendant(e)", nature:"adj.", cat:"adj", ...D("Qui témoigne d'une supériorité bienveillante mais méprisante envers les autres.","Son ton condescendant lors de l'entretien froissa le candidat pourtant qualifié.") },
      { mot:"crédule", nature:"adj.", cat:"adj", ...D("Qui croit trop facilement et sans esprit critique ; naïf, facile à tromper.","Trop crédule, il tomba dans le piège du premier escroc venu.") },
      { mot:"éclectique", nature:"adj.", cat:"adj", ...D("Qui choisit parmi différentes influences sans s'attacher à une seule ; aux goûts variés.","Ses goûts éclectiques lui faisaient apprécier autant le jazz que l'opéra baroque.") },
      { mot:"égrillard(e)", nature:"adj.", cat:"adj", ...D("Qui aime les plaisanteries grivoises et les allusions licencieuses ; grivois.","Ses anecdotes égrillardées animaient les dîners mais choquaient parfois les nouveaux venus.") },
      { mot:"facétieux(se)", nature:"adj.", cat:"adj", ...D("Qui aime plaisanter avec esprit et malice ; plaisant et farceur.","Un esprit facétieux qui trouvait le moyen de dédramatiser toutes les situations.") },
      { mot:"fantasque", nature:"adj.", cat:"adj", ...D("D'humeur changeante et capricieuse, imprévisible dans ses goûts et ses décisions.","Son caractère fantasque rendait toute planification impossible avec lui.") },
      { mot:"faraud(e)", nature:"adj.", cat:"adj", ...D("Qui fait l'important, étale sa satisfaction avec une vanité un peu naïve.","Il se pavanait, faraud de son nouveau costume, devant ses collègues.") },
      { mot:"farfelu(e)", nature:"adj.", cat:"adj", ...D("Un peu fou, extravagant dans ses idées ou son comportement ; bizarre et original.","Ses propositions farfelues finissaient souvent par s'avérer géniales.") },
      { mot:"flegmatique", nature:"adj.", cat:"adj", ...D("Qui reste calme et imperturbable en toutes circonstances, sans laisser paraître ses émotions.","Flegmatique par tempérament, rien ne semblait pouvoir l'ébranler ni le déstabiliser.") },
      { mot:"fruste", nature:"adj.", cat:"adj", ...D("Grossier dans ses manières, peu raffiné ; qui manque de culture et de finesse.","Ses manières frustes contrastaient avec l'élégance de son entourage.") },
      { mot:"goguenard(e)", nature:"adj.", cat:"adj", ...D("Qui se moque avec une ironie narquoise et légèrement méprisante.","Un sourire goguenard se dessina sur ses lèvres à cette annonce.") },
      { mot:"gourmé(e)", nature:"adj.", cat:"adj", ...D("D'une raideur compassée et guindée dans ses manières ; qui se force à paraître digne.","Son maintien gourmé l'empêchait de se montrer naturel en société.") },
      { mot:"grivois(e)", nature:"adj.", cat:"adj", ...D("Qui fait allusion à la sexualité de façon libre et plaisante sans être obscène.","Ses chansons grivoises amusaient la galerie sans vraiment choquer personne.") },
      { mot:"guindé(e)", nature:"adj.", cat:"adj", ...D("D'une raideur affectée et solennelle ; contraint dans ses manières, manquant de naturel.","L'atmosphère guindée de la réception intimidait les invités les moins habitués.") },
      { mot:"imbu(e)", nature:"adj.", cat:"adj", ...D("Pénétré d'un sentiment excessif de sa propre valeur ou importance ; bouffi d'orgueil.","Imbu de lui-même, il ne supportait aucune remarque sur son travail.") },
      { mot:"madré(e)", nature:"adj.", cat:"adj", ...D("Rusé et retors sous des dehors de simplicité ; finaud, habile à tromper.","Ce paysan madré avait su tirer profit de la naïveté de ses acheteurs.") },
      { mot:"martial(e)", nature:"adj.", cat:"adj", ...D("Qui a l'allure, la rigueur ou la vigueur d'un guerrier ; relatif aux choses militaires.","Son maintien martial lui conférait une autorité naturelle sur ses troupes.") },
      { mot:"mièvre", nature:"adj.", cat:"adj", ...D("D'une douceur affectée et sans vigueur ; fade, insignifiant par excès de gentillesse.","Son style mièvre manquait du souffle nécessaire pour toucher le lecteur.") },
      { mot:"misanthrope", nature:"adj.", cat:"adj", ...D("Qui fuit la société des hommes et n'aime pas ses semblables par dégoût ou méfiance.","Le misanthrope de Molière exprime le dégoût de la fausseté humaine.") },
      { mot:"misogyne", nature:"adj.", cat:"adj", ...D("Qui manifeste de l'hostilité ou du mépris envers les femmes.","Ses plaisanteries misogynes lui avaient valu une plainte au tribunal des prud'hommes.") },
      { mot:"mythomane", nature:"adj.", cat:"adj", ...D("Qui a une tendance pathologique au mensonge et à la fabulation.","Ce mythomane avait convaincu tout son entourage de prouesses inexistantes.") },
      { mot:"narcissique", nature:"adj.", cat:"adj", ...D("Qui manifeste une admiration excessive et exclusive pour soi-même.","Son comportement narcissique l'empêchait de construire des relations authentiques.") },
      { mot:"narquois(e)", nature:"adj.", cat:"adj", ...D("Qui exprime une moquerie malicieuse et légèrement méchante ; ironique et railleur.","Son sourire narquois laissait entendre qu'il savait quelque chose que les autres ignoraient.") },
      { mot:"obséquieux(se)", nature:"adj.", cat:"adj", ...D("D'une politesse servile et exagérée visant à flatter ou à plaire par intérêt.","Ses courbettes obséquieuses devant le directeur indisposaient ses collègues.") },
      { mot:"ombrageux(se)", nature:"adj.", cat:"adj", ...D("Susceptible et méfiant, qui se vexe facilement ou prend ombrage des moindres choses.","Ce cheval ombrageux s'emballait au moindre bruit inhabituel sur le parcours.") },
      { mot:"perspicace", nature:"adj.", cat:"adj", ...D("Qui voit et comprend rapidement et avec finesse ce qui échappe aux autres.","Un enquêteur perspicace qui lisait les gens comme un livre ouvert.") },
      { mot:"pétulant(e)", nature:"adj.", cat:"adj", ...D("D'une vivacité et d'une exubérance débordantes dans le comportement ou la parole.","Sa personnalité pétulante animait chaque réunion d'une énergie communicative.") },
      { mot:"placide", nature:"adj.", cat:"adj", ...D("D'un calme tranquille et imperturbable ; d'un tempérament serein et peu émotif.","Placide de nature, il traversait les crises sans perdre son flegme légendaire.") },
      { mot:"prude", nature:"adj.", cat:"adj", ...D("D'une pudeur affectée et excessive ; qui se scandalise facilement des propos ou attitudes libres.","Sa réaction prude à la moindre plaisanterie amusait son entourage.") },
      { mot:"pudibond(e)", nature:"adj.", cat:"adj", ...D("D'une pudeur exagérée et ridicule ; qui affiche une chasteté ostentatoire.","Son attitude pudibonde contrastait avec la liberté de mœurs de son époque.") },
      { mot:"pudique", nature:"adj.", cat:"adj", ...D("Qui fait preuve d'une réserve naturelle et discrète dans l'expression des sentiments.","Il était trop pudique pour exprimer ouvertement son affection à ses proches.") },
      { mot:"rassis(e)", nature:"adj.", cat:"adj", ...D("Qui a acquis la maturité et la sagesse avec l'âge ; posé, réfléchi (un esprit rassis).","À force d'épreuves, il était devenu un homme rassis, peu enclin aux excès.") },
      { mot:"réaliste", nature:"adj.", cat:"adj", ...D("Qui voit et accepte les choses telles qu'elles sont, sans illusions ni idéalisme excessif.","Un négociateur réaliste qui ne perdait jamais de vue les contraintes pratiques.") },
      { mot:"rétif(ve)", nature:"adj.", cat:"adj", ...D("Qui résiste, refuse d'obéir ou de se soumettre ; récalcitrant, indocile.","Rétif à toute contrainte, il avait du mal à s'intégrer dans une équipe.") },
      { mot:"rustaud(e)", nature:"adj.", cat:"adj", ...D("Lourd et grossier dans ses manières, sans aucun raffinement ; rustre.","Ses façons rustaudees tranchaient avec l'élégance du milieu qu'il fréquentait.") },
      { mot:"revêche", nature:"adj.", cat:"adj", ...D("D'un abord difficile et peu accommodant ; rude et peu aimable dans les relations.","Une gardienne revêche qui accueillait les visiteurs avec la même méfiance.") },
      { mot:"taciturne", nature:"adj.", cat:"adj", ...D("Qui parle peu par tempérament ; d'un naturel silencieux et renfermé.","Taciturne depuis l'enfance, il exprimait ses émotions par la peinture.") },
      { mot:"téméraire", nature:"adj.", cat:"adj", ...D("Qui agit avec une hardiesse excessive sans mesurer les risques ; imprudent et audacieux.","Un alpiniste téméraire qui tentait des ascensions que les guides refusaient.") },
      { mot:"timoré(e)", nature:"adj.", cat:"adj", ...D("Craintif et indécis, qui hésite par excès de prudence ou de peur du jugement d'autrui.","Son caractère timoré l'empêchait de saisir les opportunités qui se présentaient.") },
      { mot:"velléitaire", nature:"adj.", cat:"adj", ...D("Qui n'a que des velléités, des intentions sans suite ; incapable de mener ses projets à terme.","Un velléitaire qui commençait dix projets sans jamais en finir un seul.") },
      { mot:"versatile", nature:"adj.", cat:"adj", ...D("Qui change facilement d'opinion ou de camp ; instable dans ses convictions.","Trop versatile pour être fiable, il retournait sa veste au gré des circonstances.") },
    ]
  },
  {
    id:"qualites", numero:16, titre:"Le Bien : quelques qualités", icone:"✨",
    description:"Vertus, qualités morales, bonté, rectitude",
    couleur:"#2a5a3a", accent:"#50a870",
    mots:[
      // Noms
      { mot:"abnégation", nature:"n.f.", cat:"n", ...D("Sacrifice de soi, de ses intérêts personnels au profit d'autrui ou d'une cause.","Les soignants ont fait preuve d'une abnégation remarquable pendant la crise.") },
      { mot:"bienséance", nature:"n.f.", cat:"n", ...D("Conformité aux usages et aux convenances sociales ; politesse et correction dans le comportement.","Il respectait scrupuleusement les règles de bienséance en toutes circonstances.") },
      { mot:"bienveillance", nature:"n.f.", cat:"n", ...D("Disposition favorable et bienveillante envers autrui ; bonté active et compréhensive.","Sa bienveillance naturelle mettait immédiatement les gens à l'aise.") },
      { mot:"bonhomie", nature:"n.f.", cat:"n", ...D("Simplicité et bonté naturelle dans les manières ; aimabilité sans façons ni prétention.","Sa bonhomie légendaire lui valait la sympathie de tous ceux qu'il rencontrait.") },
      { mot:"civilité", nature:"n.f.", cat:"n", ...D("Politesse élémentaire dans les relations sociales ; respect des règles de vie en commun.","Le manque de civilité dans les transports publics est une source d'agacement.") },
      { mot:"clémence", nature:"n.f.", cat:"n", ...D("Disposition à pardonner, à atténuer les châtiments ; douceur dans l'exercice du pouvoir.","Le tribunal fit preuve de clémence envers l'accusé compte tenu des circonstances.") },
      { mot:"cœur", nature:"n.m.", cat:"n", ...D("Siège symbolique des sentiments ; générosité, sensibilité, courage moral.","Il avait le cœur sur la main et ne savait rien refuser à ceux qui en avaient besoin.") },
      { mot:"commerce", nature:"n.m.", cat:"n", ...D("Au sens moral : relations sociales, fréquentation agréable de quelqu'un.","Il était d'un commerce agréable, toujours prêt à écouter et à conseiller.") },
      { mot:"constance", nature:"n.f.", cat:"n", ...D("Persévérance dans ses efforts, ses sentiments ou ses convictions malgré les obstacles.","Sa constance dans l'adversité forçait l'admiration de tous ses proches.") },
      { mot:"déférence", nature:"n.f.", cat:"n", ...D("Respect et considération marqués envers quelqu'un, souvent d'une génération ou d'un rang supérieur.","Il s'adressait à ses anciens avec une déférence sincère et naturelle.") },
      { mot:"désintéressement", nature:"n.m.", cat:"n", ...D("Absence de tout intérêt personnel dans ses actes ; générosité sans attente de réciprocité.","Son désintéressement total le rendait imperméable à toute tentation de corruption.") },
      { mot:"éthique", nature:"n.f.", cat:"n", ...D("Ensemble de principes moraux guidant la conduite ; réflexion sur les valeurs et leurs fondements.","L'éthique médicale impose le respect de la dignité et de l'autonomie du patient.") },
      { mot:"émulation", nature:"n.f.", cat:"n", ...D("Compétition bienveillante qui pousse à égaler ou surpasser autrui par le mérite et l'effort.","L'émulation entre les élèves favorise le progrès de tous sans esprit de rivalité.") },
      { mot:"intégrité", nature:"n.f.", cat:"n", ...D("Qualité d'une personne d'une probité absolue, incorruptible dans ses actes et ses jugements.","Son intégrité morale lui interdisait toute compromission avec ses convictions.") },
      { mot:"mansuétude", nature:"n.f.", cat:"n", ...D("Douceur bienveillante et indulgence dans le traitement des fautes ou des faiblesses d'autrui.","Le juge fit preuve d'une mansuétude inhabituelle envers ce prévenu repentant.") },
      { mot:"principe", nature:"n.m.", cat:"n", ...D("Règle morale fondamentale guidant la conduite ; conviction ferme sur laquelle on ne transige pas.","Un homme de principes qui ne sacrifiait jamais ses valeurs à l'opportunisme.") },
      { mot:"probité", nature:"n.f.", cat:"n", ...D("Droiture morale absolue ; honnêteté scrupuleuse dans la conduite et les affaires.","Sa probité reconnue de tous lui fermait les portes de certains milieux corrompus.") },
      { mot:"rectitude", nature:"n.f.", cat:"n", ...D("Qualité de ce qui est droit moralement ; rigueur et droiture dans la conduite.","La rectitude de son jugement lui valait une réputation d'impartialité absolue.") },
      { mot:"tact", nature:"n.m.", cat:"n", ...D("Aptitude intuitive à dire et faire ce qui convient sans blesser les susceptibilités.","Il annonça la mauvaise nouvelle avec un tact qui atténua considérablement le choc.") },
      { mot:"tempérance", nature:"n.f.", cat:"n", ...D("Modération dans les plaisirs et les passions ; vertu consistant à ne pas aller à l'excès.","La tempérance dans tous les domaines était pour lui le chemin vers l'équilibre.") },
      { mot:"vertu", nature:"n.f.", cat:"n", ...D("Disposition à agir moralement bien ; qualité morale considérée comme excellente.","La patience est une vertu que l'adversité nous enseigne mieux que quiconque.") },
      { mot:"zèle", nature:"n.m.", cat:"n", ...D("Ardeur et dévouement enthousiastes mis au service d'une cause, d'une tâche ou d'une personne.","Il accomplissait sa mission avec un zèle qui forçait le respect de ses supérieurs.") },
      // Adjectifs
      { mot:"affable", nature:"adj.", cat:"adj", ...D("D'un abord facile et aimable ; qui accueille et écoute avec bienveillance et douceur.","Un chef affable que ses collaborateurs n'hésitaient pas à approcher.") },
      { mot:"auguste", nature:"adj.", cat:"adj", ...D("Qui inspire un respect mêlé de vénération ; d'une majesté noble et imposante.","La vieille dame avait quelque chose d'auguste dans son maintien et sa parole.") },
      { mot:"chaste", nature:"adj.", cat:"adj", ...D("Qui s'abstient des plaisirs sensuels illicites ; d'une pureté morale et physique exemplaire.","Une amitié chaste et sincère, sans arrière-pensée ni ambiguïté.") },
      { mot:"conséquent(e)", nature:"adj.", cat:"adj", ...D("Qui agit en accord avec ses principes et ses engagements ; logique et cohérent dans sa conduite.","Un homme conséquent qui mettait en pratique ce qu'il prêchait aux autres.") },
      { mot:"courtois(e)", nature:"adj.", cat:"adj", ...D("D'une politesse raffinée et attentionnée dans les relations avec autrui.","Son comportement courtois en toutes circonstances le distinguait dans ce milieu brutal.") },
      { mot:"équitable", nature:"adj.", cat:"adj", ...D("Qui respecte les droits de chacun avec impartialité ; juste dans la distribution et le jugement.","Un partage équitable qui tenait compte des besoins et des mérites de chacun.") },
      { mot:"humanitaire", nature:"adj.", cat:"adj", ...D("Qui vise à améliorer les conditions de vie des êtres humains en difficulté ; relatif à l'aide humanitaire.","Les organisations humanitaires intervenaient dans les zones de conflit les plus dangereuses.") },
      { mot:"intègre", nature:"adj.", cat:"adj", ...D("D'une probité absolue et sans failles ; incorruptible dans ses actes et ses jugements.","Un fonctionnaire intègre que rien ne pouvait détourner du droit chemin.") },
      { mot:"magnanime", nature:"adj.", cat:"adj", ...D("Qui fait preuve d'une grandeur d'âme généreuse, notamment en pardonnant à ses ennemis.","Le vainqueur se montra magnanime envers ses adversaires défaits.") },
      { mot:"méticuleux(se)", nature:"adj.", cat:"adj", ...D("Qui soigne les moindres détails avec une attention scrupuleuse et minutieuse.","Un artisan méticuleux dont chaque pièce témoignait d'un soin extrême.") },
      { mot:"philanthropique", nature:"adj.", cat:"adj", ...D("Inspiré par l'amour de l'humanité et le désir d'améliorer le sort des autres.","Sa fondation philanthropique finançait des bourses pour les étudiants défavorisés.") },
      { mot:"policé(e)", nature:"adj.", cat:"adj", ...D("Qui a atteint un niveau de civilisation et de raffinement dans les mœurs et les comportements.","Une société policée règle ses conflits par le droit plutôt que par la force.") },
      { mot:"pondéré(e)", nature:"adj.", cat:"adj", ...D("Qui fait preuve d'équilibre et de mesure dans ses jugements et ses réactions.","Un médiateur pondéré qui pesait chaque mot avant de prendre position.") },
      { mot:"stoïque", nature:"adj.", cat:"adj", ...D("Qui supporte les épreuves avec courage et sérénité, sans se plaindre ni se laisser abattre.","Stoïque face à la douleur, il refusait de montrer le moindre signe de faiblesse.") },
      { mot:"tolérant(e)", nature:"adj.", cat:"adj", ...D("Qui respecte les opinions, les croyances et les comportements différents des siens.","Un enseignant tolérant qui encourageait le débat contradictoire dans sa classe.") },
      // Verbe
      { mot:"s'amender", nature:"v.", cat:"v", ...D("Corriger ses défauts, s'améliorer moralement ; réparer ses fautes par un changement de conduite.","Après ses erreurs de jeunesse, il avait sincèrement cherché à s'amender.") },
    ]
  },
  {
    id:"defauts", numero:17, titre:"Le Mal : quelques défauts", icone:"😈",
    description:"Vices, défauts moraux, perversité, lâcheté",
    couleur:"#4a1a1a", accent:"#b03030",
    mots:[
      // Noms
      { mot:"avilissement", nature:"n.m.", cat:"n", ...D("Dégradation morale profonde qui fait perdre à quelqu'un sa dignité et son estime de soi.","L'avilissement par la flatterie est plus dangereux que l'humiliation ouverte.") },
      { mot:"compromission", nature:"n.f.", cat:"n", ...D("Acte par lequel on transige avec ses principes moraux pour satisfaire un intérêt.","Sa compromission avec le pouvoir lui coûta sa réputation d'intellectuel indépendant.") },
      { mot:"cynisme", nature:"n.m.", cat:"n", ...D("Mépris affiché des convenances morales et sociales ; attitude de qui ne croit à aucune valeur.","Son cynisme affiché n'était qu'un masque dissimulant une profonde déception.") },
      { mot:"délation", nature:"n.f.", cat:"n", ...D("Dénonciation intéressée et malveillante de quelqu'un à une autorité.","La délation fut massivement pratiquée durant les heures sombres de l'Occupation.") },
      { mot:"duplicité", nature:"n.f.", cat:"n", ...D("Caractère de quelqu'un qui se comporte différemment selon les interlocuteurs ; double jeu.","Sa duplicité fut découverte quand ses deux versions des faits se contredisirent.") },
      { mot:"fatuité", nature:"n.f.", cat:"n", ...D("Satisfaction niaise et suffisante de soi-même, sans véritable mérite réel.","Sa fatuité insupportable lui aliénait tous ceux qui avaient le malheur de le côtoyer.") },
      { mot:"gloriole", nature:"n.f.", cat:"n", ...D("Vanité qui pousse à se vanter de petites choses sans importance réelle.","Il racontait ses prouesses avec une gloriole puérile qui faisait sourire.") },
      { mot:"importun(e)", nature:"n.", cat:"n", ...D("Personne qui vient mal à propos ou dont la présence est dérangeante et indiscrète.","Il avait le don d'arriver en importun précisément quand on ne voulait pas de lui.") },
      { mot:"imposteur(trice)", nature:"n.", cat:"n", ...D("Personne qui trompe en se faisant passer pour ce qu'elle n'est pas.","Cet imposteur avait usurpé le titre de médecin pendant dix ans sans être démasqué.") },
      { mot:"impudence", nature:"n.f.", cat:"n", ...D("Effronterie insolente, manque total de pudeur ou de honte dans ses actes ou paroles.","Son impudence à nier les faits les plus évidents laissait les juges sans voix.") },
      { mot:"infamie", nature:"n.f.", cat:"n", ...D("Acte ou parole d'une bassesse extrême ; déshonneur public infligé à quelqu'un.","Commettre une telle infamie contre un innocent était au-delà de l'imaginable.") },
      { mot:"malignité", nature:"n.f.", cat:"n", ...D("Penchant à faire ou à vouloir du mal ; méchanceté naturelle et profonde.","La malignité de ses remarques ne visait qu'à blesser sans raison valable.") },
      { mot:"malversation", nature:"n.f.", cat:"n", ...D("Faute grave commise dans l'exercice d'une fonction ; détournement de fonds ou abus de pouvoir.","Des malversations comptables avaient conduit l'entreprise au bord de la faillite.") },
      { mot:"outrage", nature:"n.m.", cat:"n", ...D("Offense grave et délibérée portant atteinte à la dignité ou à l'honneur de quelqu'un.","Cet outrage public à un magistrat lui valut une condamnation immédiate.") },
      { mot:"outrecuidance", nature:"n.f.", cat:"n", ...D("Présomption excessive et arrogante ; suffisance qui dépasse toute mesure.","Son outrecuidance à prétendre tout savoir mieux que les spécialistes était stupéfiante.") },
      { mot:"perfidie", nature:"n.f.", cat:"n", ...D("Trahison dissimulée sous des apparences aimables ; fausseté profonde et dangereuse.","Sa perfidie ne se révélait qu'au moment où on lui faisait le plus confiance.") },
      { mot:"perversion", nature:"n.f.", cat:"n", ...D("Déviation profonde des valeurs morales ou des comportements normaux ; corruption profonde.","La perversion du système avait fini par contaminer même ceux qui voulaient le réformer.") },
      { mot:"sadisme", nature:"n.m.", cat:"n", ...D("Plaisir cruel tiré de la souffrance infligée à autrui, physiquement ou moralement.","Le sadisme de ses railleries déguisées en humour choquait même ses alliés.") },
      { mot:"suffisance", nature:"n.f.", cat:"n", ...D("Satisfaction excessive et déplacée de soi ; air supérieur et condescendant.","Sa suffisance lui fermait toutes les portes qu'une simple modestie lui aurait ouvertes.") },
      { mot:"tare", nature:"n.f.", cat:"n", ...D("Défaut grave héréditaire ou acquis ; vice profond affectant le fonctionnement normal.","La corruption est une tare qui ronge lentement les institutions de l'intérieur.") },
      { mot:"vergogne", nature:"n.f.", cat:"n", ...D("Honte, sentiment de culpabilité ; surtout dans « sans vergogne » : sans aucune honte.","Il mentait sans vergogne, le regard dans les yeux, avec une aisance déconcertante.") },
      { mot:"vice", nature:"n.m.", cat:"n", ...D("Défaut moral grave ; penchant habituel vers le mal ; imperfection profonde d'une chose.","L'avarice est le vice que Molière a le plus férocement moqué dans son théâtre.") },
      // Adjectifs
      { mot:"abject(e)", nature:"adj.", cat:"adj", ...D("D'une bassesse et d'une ignominie extrêmes, qui inspire le dégoût et le mépris.","Un comportement abject qui révulsait même les moins sensibles de ses collègues.") },
      { mot:"chauvin(e)", nature:"adj.", cat:"adj", ...D("D'un patriotisme excessif et exclusif, méprisant les autres nations.","Un commentateur chauvin incapable de reconnaître les mérites de ses adversaires.") },
      { mot:"cupide", nature:"adj.", cat:"adj", ...D("Avide de richesses de façon excessive et sans scrupules.","Un associé cupide prêt à trahir pour s'approprier la totalité des bénéfices.") },
      { mot:"dépravé(e)", nature:"adj.", cat:"adj", ...D("Dont les mœurs sont profondément corrompues ; perverti dans ses goûts et ses actes.","Un milieu dépravé où toutes les valeurs avaient été sacrifiées au plaisir immédiat.") },
      { mot:"hâbleur(se)", nature:"adj.", cat:"adj", ...D("Qui aime se vanter avec exagération de ses exploits imaginaires ou réels.","Ce hâbleur racontait ses aventures en multipliant les exploits par dix à chaque fois.") },
      { mot:"ignare", nature:"adj.", cat:"adj", ...D("Totalement ignorant et sans instruction dans un domaine ou de façon générale.","Il était ignare en économie mais n'hésitait pas à donner son avis sur tout.") },
      { mot:"ignoble", nature:"adj.", cat:"adj", ...D("D'une bassesse révoltante et sans excuse ; qui inspire l'indignation et le dégoût.","Un acte ignoble dont la barbarie dépassa toutes les limites admissibles.") },
      { mot:"impénitent(e)", nature:"adj.", cat:"adj", ...D("Qui ne se repent pas de ses fautes et persiste obstinément dans ses mauvaises habitudes.","Un fumeur impénitent que rien ne pouvait convaincre d'arrêter sa consommation.") },
      { mot:"inique", nature:"adj.", cat:"adj", ...D("D'une injustice criante et contraire aux principes les plus élémentaires de l'équité.","Un jugement inique que la cour d'appel n'hésita pas à annuler immédiatement.") },
      { mot:"irascible", nature:"adj.", cat:"adj", ...D("Qui s'emporte facilement et violemment pour des motifs souvent disproportionnés.","Son tempérament irascible rendait toute discussion calme pratiquement impossible.") },
      { mot:"irrévérencieux(se)", nature:"adj.", cat:"adj", ...D("Qui manque de respect envers ce qui mérite considération ou vénération.","Ses commentaires irrévérencieux sur les institutions choquaient son entourage conservateur.") },
      { mot:"ladre", nature:"adj.", cat:"adj", ...D("D'une avarice sordide et mesquine ; qui refuse même les dépenses les plus nécessaires.","Si ladre qu'il refusait de chauffer son appartement en plein hiver.") },
      { mot:"machiavélique", nature:"adj.", cat:"adj", ...D("Qui use de ruse, de duplicité et de cynisme pour atteindre ses fins sans scrupules.","Sa stratégie machiavélique consistait à dresser ses adversaires les uns contre les autres.") },
      { mot:"maléfique", nature:"adj.", cat:"adj", ...D("Qui exerce une influence néfaste et nuisible ; doué d'un pouvoir mauvais.","Une influence maléfique qui corrompait tout ce qu'elle touchait.") },
      { mot:"mercantile", nature:"adj.", cat:"adj", ...D("Qui ne s'intéresse qu'au profit matériel ; dominé par l'esprit de lucre sans éthique.","Une vision mercantile de l'art qui réduisait chaque œuvre à sa valeur marchande.") },
      { mot:"opportuniste", nature:"adj.", cat:"adj", ...D("Qui adapte sa conduite selon les circonstances sans souci de cohérence ni de principes.","Un politicien opportuniste changeant de position au gré des sondages d'opinion.") },
      { mot:"parjure", nature:"adj.", cat:"adj", ...D("Qui a violé son serment ; coupable de faux serment devant une autorité.","Un témoin parjure dont les déclarations mensongères avaient condamné un innocent.") },
      { mot:"partial(e)", nature:"adj.", cat:"adj", ...D("Qui prend parti pour l'un des deux camps ; qui manque d'impartialité dans son jugement.","Un arbitre partial dont les décisions favorisaient systématiquement l'équipe locale.") },
      { mot:"partisan(e)", nature:"adj.", cat:"adj", ...D("Qui soutient aveuglément un parti ou une cause sans esprit critique.","Un soutien partisan qui refusait d'entendre le moindre argument contraire.") },
      { mot:"pédant(e)", nature:"adj.", cat:"adj", ...D("Qui fait un étalage déplacé de son savoir ; qui affiche sa culture avec prétention.","Ses explications pédantes finissaient par agacer même les plus patients de ses auditeurs.") },
      { mot:"pernicieux(se)", nature:"adj.", cat:"adj", ...D("Qui cause un grand mal de façon insidieuse et progressive.","Une idéologie pernicieuse dont les effets ne se révélèrent que des décennies plus tard.") },
      { mot:"pleutre", nature:"adj.", cat:"adj", ...D("Lâche et méprisable, qui recule devant le danger ou la responsabilité.","Un comportement pleutre qui consistait à accuser les autres de ses propres erreurs.") },
      { mot:"pusillanime", nature:"adj.", cat:"adj", ...D("Qui manque de courage moral ; timide et craintif devant les responsabilités ou les risques.","Un dirigeant pusillanime incapable de prendre la moindre décision impopulaire.") },
      { mot:"répréhensible", nature:"adj.", cat:"adj", ...D("Qui mérite d'être blâmé ; contraire à la morale ou aux règles en vigueur.","Sa conduite répréhensible lui valut une sanction disciplinaire sévère.") },
      { mot:"scélérat(e)", nature:"adj.", cat:"adj", ...D("Qui commet ou est capable de crimes ou d'actions très mauvaises ; criminel endurci.","Un scélérat sans remords que rien n'avait pu détourner de son funeste dessein.") },
      { mot:"sectaire", nature:"adj.", cat:"adj", ...D("Qui fait preuve d'un attachement exclusif et intransigeant à ses propres idées.","Son esprit sectaire lui interdisait tout dialogue avec les tenants d'autres positions.") },
      { mot:"vénal(e)", nature:"adj.", cat:"adj", ...D("Qui est prêt à se vendre, à trahir pour de l'argent ; corruptible.","Un juge vénal dont les verdicts variaient selon la générosité des parties.") },
      { mot:"veule", nature:"adj.", cat:"adj", ...D("Sans énergie ni volonté ; mou et lâche dans ses actes et ses engagements.","Sa passivité veule face aux injustices indignait ceux qui attendaient qu'il réagisse.") },
      { mot:"vindicatif(ve)", nature:"adj.", cat:"adj", ...D("Qui cherche à se venger ; animé d'un désir tenace de punir ceux qui l'ont offensé.","Un caractère vindicatif qui n'oubliait jamais une offense, aussi minime soit-elle.") },
      { mot:"volage", nature:"adj.", cat:"adj", ...D("Inconstant en amour ; qui passe facilement d'une personne à une autre sans fidélité.","Sa réputation de volage le précédait partout, le rendant suspect aux yeux des pères.") },
      // Verbes
      { mot:"abuser", nature:"v.", cat:"v", ...D("Tromper en profitant de la confiance ou de la faiblesse de quelqu'un ; user de façon excessive.","Il avait abusé de la naïveté de ses victimes pendant des années sans être inquiété.") },
      { mot:"duper", nature:"v.", cat:"v", ...D("Tromper habilement quelqu'un en abusant de sa crédulité ; berner.","Il avait dupé tout son entourage en se faisant passer pour un expert reconnu.") },
      { mot:"léser", nature:"v.", cat:"v", ...D("Causer un préjudice injuste à quelqu'un ; porter atteinte à ses droits ou ses intérêts.","Cette clause contractuelle lésait manifestement le consommateur au profit du vendeur.") },
      { mot:"lésiner", nature:"v.", cat:"v", ...D("Épargner mesquinement sur les moindres dépenses ; être avare de façon sordide.","Il lésinait sur tout, jusqu'à rationner le chauffage en plein hiver.") },
    ]
  },
  {
    id:"sentiments", numero:18, titre:"Sentiments et jugements", icone:"💫",
    description:"Émotions, passions, jugements moraux",
    couleur:"#3a1a5a", accent:"#8848c0",
    mots:[
      // Noms
      { mot:"affectivité", nature:"n.f.", cat:"n", ...D("Ensemble des états affectifs et émotionnels d'une personne ; capacité à ressentir des émotions.","Une grande affectivité peut être une force autant qu'une vulnérabilité.") },
      { mot:"affliction", nature:"n.f.", cat:"n", ...D("Profonde tristesse causée par un malheur ou une perte ; douleur morale intense.","La mort de son ami plongea toute la communauté dans l'affliction.") },
      { mot:"allégresse", nature:"n.f.", cat:"n", ...D("Joie vive et expansive qui se manifeste avec enthousiasme et légèreté.","L'annonce de la victoire déclencha une allégresse générale dans les rues.") },
      { mot:"amertume", nature:"n.f.", cat:"n", ...D("Sentiment douloureux mêlé de rancœur face à une déception ou une injustice.","Il gardait une amertume tenace envers ceux qui l'avaient trahi dans sa jeunesse.") },
      { mot:"animosité", nature:"n.f.", cat:"n", ...D("Sentiment d'hostilité vive et durable envers quelqu'un ; malveillance persistante.","Une animosité réciproque empoisonnait leurs échanges depuis des années.") },
      { mot:"austérité", nature:"n.f.", cat:"n", ...D("Caractère sévère et dépouillé, sans ornement ni plaisir ; rigueur morale ou économique.","L'austérité de ses mœurs contrastait avec le faste de son entourage.") },
      { mot:"aversion", nature:"n.f.", cat:"n", ...D("Répugnance vive et profonde ; sentiment de rejet instinctif envers quelqu'un ou quelque chose.","Il éprouvait une aversion viscérale pour toute forme de compromis moral.") },
      { mot:"commisération", nature:"n.f.", cat:"n", ...D("Pitié mêlée de mépris bienveillant pour les malheurs d'autrui.","Il regardait ses anciens collègues avec une commisération qu'ils trouvaient insupportable.") },
      { mot:"compassion", nature:"n.f.", cat:"n", ...D("Sentiment de pitié active qui pousse à partager et soulager la souffrance d'autrui.","La compassion sans action ne vaut guère mieux que l'indifférence.") },
      { mot:"convoitise", nature:"n.f.", cat:"n", ...D("Désir ardent et envieux de posséder ce qu'appartient à autrui.","La convoitise de ses associés menaçait la survie de l'entreprise familiale.") },
      { mot:"courroux", nature:"n.m.", cat:"n", ...D("Colère violente et majestueuse, surtout utilisée dans un style élevé ou littéraire.","Le courroux du roi se manifesta par une décision impitoyable.") },
      { mot:"dérision", nature:"n.f.", cat:"n", ...D("Moquerie méprisante qui ridiculise quelqu'un ou quelque chose.","Il répondait aux critiques par la dérision, refusant de les prendre au sérieux.") },
      { mot:"désintérêt", nature:"n.m.", cat:"n", ...D("Manque d'intérêt ou d'attention pour quelque chose ; détachement progressif.","Son désintérêt croissant pour le travail inquiétait ses supérieurs.") },
      { mot:"effusion", nature:"n.f.", cat:"n", ...D("Expression exubérante et spontanée d'un sentiment affectueux ; épanchement du cœur.","Les retrouvailles donnèrent lieu à des effusions touchantes entre les deux amis.") },
      { mot:"élection", nature:"n.f.", cat:"n", ...D("Choix d'une personne par préférence affective ; sentiment d'être choisi ou élu.","Il se sentait lié à elle par une affinité élective inexplicable.") },
      { mot:"euphorie", nature:"n.f.", cat:"n", ...D("État de bien-être intense et de joie exaltée, parfois sans cause apparente.","L'euphorie de la victoire laissa place à une fatigue profonde le lendemain.") },
      { mot:"exaltation", nature:"n.f.", cat:"n", ...D("État d'intense enthousiasme ou d'excitation émotionnelle qui élève l'âme.","L'exaltation des premières heures céda vite à un réalisme plus sobre.") },
      { mot:"félicité", nature:"n.f.", cat:"n", ...D("Bonheur parfait et durable ; béatitude complète, souvent d'ordre spirituel.","La philosophie stoïcienne recherche la félicité dans la maîtrise de soi.") },
      { mot:"frustration", nature:"n.f.", cat:"n", ...D("Sentiment pénible lié à une attente déçue ou à l'impossibilité d'assouvir un désir.","L'accumulation de frustrations finit par provoquer une explosion de colère.") },
      { mot:"gratitude", nature:"n.f.", cat:"n", ...D("Sentiment de reconnaissance envers quelqu'un qui nous a rendu service ou témoigné de la bonté.","Il exprimait sa gratitude avec une chaleur sincère qui touchait ses bienfaiteurs.") },
      { mot:"grief", nature:"n.m.", cat:"n", ...D("Motif de plainte ou de reproche ; sujet de mécontentement que l'on nourrit envers quelqu'un.","Il gardait un grief tenace contre son associé depuis leur différend.") },
      { mot:"idylle", nature:"n.f.", cat:"n", ...D("Relation amoureuse tendre et pure ; aventure sentimentale légère et heureuse.","Leur idylle de jeunesse avait laissé chez chacun un souvenir lumineux.") },
      { mot:"inclination", nature:"n.f.", cat:"n", ...D("Penchant naturel, attirance spontanée envers une personne ou une activité.","Son inclination pour la musique se manifesta dès sa plus tendre enfance.") },
      { mot:"indulgence", nature:"n.f.", cat:"n", ...D("Disposition à pardonner facilement les fautes ; bienveillance dans le jugement des autres.","Son indulgence envers ses élèves favorisait un climat de confiance en classe.") },
      { mot:"merci", nature:"n.m.", cat:"n", ...D("Pitié, grâce accordée à quelqu'un ; au sens fort : être à la merci de, sans défense.","Les vaincus se rendirent sans condition, à la merci du vainqueur.") },
      { mot:"pressentiment", nature:"n.m.", cat:"n", ...D("Sentiment intuitif et vague qu'un événement va se produire, sans raison précise.","Un pressentiment funeste l'avait retenu de prendre ce vol fatal.") },
      { mot:"quiétude", nature:"n.f.", cat:"n", ...D("État de calme tranquille et serein, exempt de trouble ou d'agitation.","La quiétude de cette retraite montagnarde lui permit de recouvrer ses forces.") },
      { mot:"racisme", nature:"n.m.", cat:"n", ...D("Idéologie fondée sur la croyance en la hiérarchie des races ; discrimination fondée sur l'origine.","Le racisme ordinaire est souvent plus insidieux que ses formes les plus déclarées.") },
      { mot:"réprobation", nature:"n.f.", cat:"n", ...D("Désapprobation morale sévère exprimée envers quelqu'un ou quelque chose.","Son comportement suscita la réprobation unanime de l'ensemble de la communauté.") },
      { mot:"ressentiment", nature:"n.m.", cat:"n", ...D("Souvenir amer et durable d'une offense ou d'une injustice, accompagné de rancœur.","Le ressentiment accumulé pendant des années finit par exploser au grand jour.") },
      { mot:"sensibilité", nature:"n.f.", cat:"n", ...D("Aptitude à ressentir les émotions avec intensité ; réceptivité aux impressions extérieures.","Sa sensibilité artistique lui permettait de percevoir ce que d'autres ne voyaient pas.") },
      { mot:"sentiment", nature:"n.m.", cat:"n", ...D("État affectif durable lié à une personne ou une situation ; conscience intuitive de quelque chose.","Le sentiment d'injustice peut être un puissant moteur d'engagement social.") },
      { mot:"sérénité", nature:"n.f.", cat:"n", ...D("État de calme paisible et stable ; tranquillité d'âme qui ne se laisse pas troubler.","Il abordait les crises avec une sérénité qui rassurait son entourage.") },
      { mot:"sollicitude", nature:"n.f.", cat:"n", ...D("Attention affectueuse et prévoyante portée au bien-être d'autrui.","La sollicitude de son infirmière lui rendait l'hospitalisation plus supportable.") },
      { mot:"spleen", nature:"n.m.", cat:"n", ...D("Mélancolie profonde et vague sans cause précise ; ennui existentiel baudelairien.","Baudelaire a fait du spleen le thème central de ses Fleurs du mal.") },
      { mot:"suspicion", nature:"n.f.", cat:"n", ...D("État d'esprit méfiant qui soupçonne sans preuve certaine ; défiance systématique.","Une atmosphère de suspicion régnait dans l'entreprise après les révélations.") },
      { mot:"tolérance", nature:"n.f.", cat:"n", ...D("Attitude ouverte qui respecte les opinions et modes de vie différents des siens.","La tolérance ne signifie pas l'indifférence mais l'acceptation de la différence.") },
      { mot:"volupté", nature:"n.f.", cat:"n", ...D("Plaisir des sens intense et raffiné ; joie profonde et délicieuse de l'âme ou des sens.","Il savourait avec volupté chaque page de ce roman tant attendu.") },
      { mot:"xénophobie", nature:"n.f.", cat:"n", ...D("Hostilité systématique envers les étrangers ou ce qui est perçu comme étranger.","La xénophobie prospère dans les périodes d'insécurité économique et sociale.") },
      // Adjectifs
      { mot:"altruiste", nature:"adj.", cat:"adj", ...D("Qui se préoccupe du bien d'autrui avant le sien propre ; généreux et désintéressé.","Un geste altruiste qui lui coûtait beaucoup mais qu'il accomplissait sans hésiter.") },
      { mot:"bouffon(ne)", nature:"adj.", cat:"adj", ...D("D'un comique grossier et excessif qui prête à rire par l'outrance.","Une mise en scène bouffonne qui détournait le drame en comédie involontaire.") },
      { mot:"burlesque", nature:"adj.", cat:"adj", ...D("D'un comique absurde et extravagant ; qui provoque le rire par l'invraisemblance.","La situation avait tourné au burlesque, dépassant toute fiction imaginable.") },
      { mot:"dubitatif(ve)", nature:"adj.", cat:"adj", ...D("Qui exprime ou ressent le doute ; qui manifeste une incertitude sceptique.","Son air dubitatif signalait clairement qu'il n'était pas convaincu par l'explication.") },
      { mot:"enclin(e)", nature:"adj.", cat:"adj", ...D("Naturellement porté, disposé à quelque chose par tempérament ou habitude.","Il était enclin à la mélancolie mais savait la surmonter par le travail.") },
      { mot:"féru(e)", nature:"adj.", cat:"adj", ...D("Passionné par quelque chose au point d'y consacrer beaucoup de temps et d'attention.","Féru d'histoire médiévale, il connaissait chaque château de la région.") },
      { mot:"furibond(e)", nature:"adj.", cat:"adj", ...D("En proie à une fureur violente et visible ; qui manifeste une colère explosive.","Il quitta la réunion furibond, claquant la porte derrière lui.") },
      { mot:"galant(e)", nature:"adj.", cat:"adj", ...D("Poli et attentionné envers les femmes ; d'une courtoisie élégante dans les relations.","Un homme galant qui n'oubliait jamais de tenir la porte ou d'offrir sa place.") },
      { mot:"pathétique", nature:"adj.", cat:"adj", ...D("Qui émeut profondément en suscitant la pitié ou l'émotion ; par ext., lamentable.","Son discours pathétique arracha des larmes à la quasi-totalité de l'assemblée.") },
      { mot:"prosaïque", nature:"adj.", cat:"adj", ...D("Dénué de poésie et d'idéal ; d'une platitude terre-à-terre sans élévation.","Une existence prosaïque dont il rêvait de s'échapper par la littérature.") },
      { mot:"scabreux(se)", nature:"adj.", cat:"adj", ...D("Qui touche à des sujets délicats ou choquants ; risqué sur le plan moral.","Il abordait les sujets les plus scabreux avec une désinvolture déconcertante.") },
      { mot:"trivial(e)", nature:"adj.", cat:"adj", ...D("D'une banalité vulgaire et sans élévation ; grossier dans ses expressions.","Ses plaisanteries triviales choquaient dans ce contexte officiel.") },
      // Verbes
      { mot:"abhorrer", nature:"v.", cat:"v", ...D("Avoir en horreur, détester avec une intensité extrême.","Il abhorrait le mensonge sous toutes ses formes depuis l'enfance.") },
      { mot:"affecter", nature:"v.", cat:"v", ...D("Toucher, émouvoir ; au sens moral : feindre un sentiment qu'on n'éprouve pas.","Cette nouvelle l'affecta profondément, bien qu'il s'efforçât de n'en rien montrer.") },
      { mot:"déplorer", nature:"v.", cat:"v", ...D("Ressentir et exprimer une vive tristesse ou une vive désapprobation face à quelque chose.","Il déplorait l'indifférence croissante de ses contemporains pour la chose publique.") },
      { mot:"s'emporter", nature:"v.", cat:"v", ...D("Laisser éclater sa colère de façon incontrôlée ; perdre son sang-froid.","Il s'emportait facilement mais ses colères étaient aussi brèves qu'intenses.") },
      { mot:"exécrer", nature:"v.", cat:"v", ...D("Avoir en exécration, détester avec une force et un dégoût extrêmes.","Elle exécrait l'hypocrisie plus que tout autre défaut humain.") },
      { mot:"jubiler", nature:"v.", cat:"v", ...D("Éprouver une joie intense et exubérante, souvent un peu maligne.","Il jubilait intérieurement en voyant son rival dans l'embarras.") },
      { mot:"méduser", nature:"v.", cat:"v", ...D("Frapper de stupeur au point d'ôter toute réaction, comme pétrifié.","La révélation le médusa quelques instants avant qu'il ne retrouve ses esprits.") },
      { mot:"offusquer", nature:"v.", cat:"v", ...D("Choquer, blesser la susceptibilité ou les convictions morales de quelqu'un.","Ses propos offusquèrent une bonne partie de l'assistance dès les premières minutes.") },
      { mot:"pâtir", nature:"v.", cat:"v", ...D("Souffrir des conséquences d'une situation défavorable ; subir un préjudice.","Les plus modestes pâtissaient toujours davantage des crises économiques.") },
      { mot:"révérer", nature:"v.", cat:"v", ...D("Vénérer avec un respect profond et quasi religieux ; traiter avec une déférence absolue.","Il révérait la mémoire de son maître comme celle d'un saint laïque.") },
      { mot:"sidérer", nature:"v.", cat:"v", ...D("Frapper de stupéfaction totale ; laisser sans voix par l'étonnement ou l'incrédulité.","L'audace de sa proposition sidéra l'ensemble du conseil d'administration.") },
    ]
  },
  {
    id:"religion", numero:19, titre:"Religion et philosophie", icone:"🕊️",
    description:"Croyances, rites, spiritualité, pensée",
    couleur:"#3a2a10", accent:"#c09040",
    mots:[
      // Noms
      { mot:"âme", nature:"n.f.", cat:"n", ...D("Principe spirituel immatériel animant l'être humain ; siège des émotions et de la conscience.","Il cherchait à sauver son âme en se consacrant aux œuvres de charité.") },
      { mot:"apôtre", nature:"n.m.", cat:"n", ...D("Disciple chargé de répandre une doctrine ; par ext., défenseur ardent d'une cause.","Il était devenu un apôtre convaincu du développement durable.") },
      { mot:"ascète", nature:"n.", cat:"n", ...D("Personne qui pratique l'ascèse, renonce aux plaisirs du corps pour atteindre un idéal spirituel.","Cet ascète vivait dans le dépouillement total depuis qu'il avait renoncé au monde.") },
      { mot:"bible", nature:"n.f.", cat:"n", ...D("Livre sacré des chrétiens et des juifs ; par ext., ouvrage de référence absolue dans un domaine.","Ce manuel est la bible des ingénieurs en électronique depuis quarante ans.") },
      { mot:"culte", nature:"n.m.", cat:"n", ...D("Ensemble des pratiques religieuses rendant hommage à une divinité ; vénération excessive.","Le culte de la personnalité est un danger pour toute démocratie.") },
      { mot:"damnation", nature:"n.f.", cat:"n", ...D("Condamnation divine aux peines éternelles de l'enfer ; perte définitive du salut.","La damnation éternelle était le châtiment promis aux impies dans cette théologie.") },
      { mot:"déterminisme", nature:"n.m.", cat:"n", ...D("Doctrine selon laquelle tous les événements sont déterminés par des causes antérieures.","Le déterminisme de Spinoza nie l'existence du libre arbitre absolu.") },
      { mot:"doctrine", nature:"n.f.", cat:"n", ...D("Ensemble de principes et d'idées constituant un système de pensée ou de croyance organisé.","La doctrine sociale de l'Église guide l'action des catholiques dans la société.") },
      { mot:"dogme", nature:"n.m.", cat:"n", ...D("Vérité fondamentale imposée comme certaine par une autorité religieuse ou idéologique.","Remettre en cause ce dogme lui valut l'excommunication immédiate.") },
      { mot:"éden", nature:"n.m.", cat:"n", ...D("Le paradis terrestre de la Bible ; par ext., lieu de bonheur parfait et d'innocence.","Cette île tropicale semblait un éden préservé loin de la civilisation.") },
      { mot:"entité", nature:"n.f.", cat:"n", ...D("Être ou chose considéré comme ayant une existence propre et autonome.","Dieu est conçu comme une entité transcendante dans les religions monothéistes.") },
      { mot:"fanatisme", nature:"n.m.", cat:"n", ...D("Zèle aveugle et intolérant pour une doctrine religieuse ou idéologique ; extrémisme.","Le fanatisme transforme la foi en instrument de violence et d'exclusion.") },
      { mot:"ferveur", nature:"n.f.", cat:"n", ...D("Ardeur intense dans la pratique religieuse ou dans l'attachement à une cause.","Elle priait chaque soir avec une ferveur qui émouvait ceux qui l'entouraient.") },
      { mot:"fétichisme", nature:"n.m.", cat:"n", ...D("Culte rendu à des objets matériels dotés de pouvoirs magiques ; attachement excessif à des symboles.","Son fétichisme pour les objets de sa jeunesse frisait parfois la pathologie.") },
      { mot:"foi", nature:"n.f.", cat:"n", ...D("Confiance absolue en Dieu ou en une doctrine ; adhésion profonde à une croyance ou une cause.","La foi peut déplacer des montagnes, dit la tradition chrétienne.") },
      { mot:"fortune", nature:"n.f.", cat:"n", ...D("Le destin, la chance ; la Providence qui règle les événements humains.","Les aléas de la fortune l'avaient conduit de la misère à la gloire.") },
      { mot:"genèse", nature:"n.f.", cat:"n", ...D("Le premier livre de la Bible récit de la création ; par ext., origine et développement de quelque chose.","La genèse de ce projet remontait à une conversation improvisée entre amis.") },
      { mot:"hérésie", nature:"n.f.", cat:"n", ...D("Opinion contraire aux dogmes d'une religion ; par ext., idée contraire à l'opinion dominante.","Proposer une telle réforme était considéré comme une hérésie dans ce milieu conservateur.") },
      { mot:"holocauste", nature:"n.m.", cat:"n", ...D("Sacrifice total par le feu dans l'Antiquité ; par ext., génocide des juifs par les nazis.","L'Holocauste reste l'une des pages les plus sombres de l'histoire de l'humanité.") },
      { mot:"iconoclaste", nature:"n./adj.", cat:"n", ...D("Qui brise les images sacrées ; par ext., qui s'attaque aux idées et valeurs établies.","Un artiste iconoclaste qui dynamitait les conventions de son époque.") },
      { mot:"idée", nature:"n.f.", cat:"n", ...D("Représentation mentale ; chez Platon, forme idéale et parfaite dont les choses sont des copies.","Les Idées platoniciennes sont des réalités immuables accessibles par la raison pure.") },
      { mot:"idéologie", nature:"n.f.", cat:"n", ...D("Système d'idées et de croyances orientant l'action politique ou sociale d'un groupe.","Toute idéologie tend à simplifier la réalité pour la rendre plus facile à manier.") },
      { mot:"initiation", nature:"n.f.", cat:"n", ...D("Rites d'entrée dans un groupe ou une connaissance secrète ; première introduction à un domaine.","L'initiation maçonnique comporte des rituels symboliques transmis depuis des siècles.") },
      { mot:"intégrisme", nature:"n.m.", cat:"n", ...D("Tendance à appliquer strictement et littéralement les prescriptions d'une doctrine religieuse.","L'intégrisme religieux refuse tout accommodement avec la modernité.") },
      { mot:"liturgie", nature:"n.f.", cat:"n", ...D("Ensemble des rites et cérémonies officiels d'un culte religieux.","La liturgie catholique a été profondément réformée par le concile Vatican II.") },
      { mot:"magie", nature:"n.f.", cat:"n", ...D("Art supposé d'agir sur le réel par des forces surnaturelles ; fascination inexplicable.","La magie du spectacle opérait toujours sur ce public pourtant averti.") },
      { mot:"méditation", nature:"n.f.", cat:"n", ...D("Réflexion profonde et prolongée ; pratique spirituelle de recueillement et de concentration.","La méditation quotidienne lui permettait de retrouver calme et clarté d'esprit.") },
      { mot:"métaphysique", nature:"n.f.", cat:"n", ...D("Branche de la philosophie qui étudie les principes fondamentaux de l'être et de la réalité.","La métaphysique s'interroge sur des questions que la science ne peut trancher.") },
      { mot:"oracle", nature:"n.m.", cat:"n", ...D("Réponse d'une divinité consultée ; personne censée prédire l'avenir avec autorité.","L'oracle de Delphes guidait les décisions politiques de la Grèce antique.") },
      { mot:"parabole", nature:"n.f.", cat:"n", ...D("Récit allégorique à portée morale ou religieuse, comme ceux de l'Évangile.","La parabole du fils prodigue illustre le thème du pardon et de la miséricorde.") },
      { mot:"pardon", nature:"n.m.", cat:"n", ...D("Remise d'une faute ; grâce accordée à qui a offensé ; absolution morale ou religieuse.","Accorder le pardon exige souvent plus de force que de nourrir la rancœur.") },
      { mot:"philosophie", nature:"n.f.", cat:"n", ...D("Étude rationnelle des principes fondamentaux de la connaissance, de l'être et de l'action.","La philosophie apprend à questionner ce que l'on croit aller de soi.") },
      { mot:"prosélytisme", nature:"n.m.", cat:"n", ...D("Zèle ardent à répandre et faire adopter ses convictions religieuses ou idéologiques.","Son prosélytisme envahissant finissait par indisposer ceux qu'il voulait convaincre.") },
      { mot:"relique", nature:"n.f.", cat:"n", ...D("Reste du corps d'un saint ou objet lui ayant appartenu, objet de vénération ; vestige.","Ces vieilles photographies étaient pour lui des reliques précieuses du passé.") },
      { mot:"rite", nature:"n.m.", cat:"n", ...D("Pratique réglée et symbolique d'un culte ; habitude immuable attachée à un moment particulier.","Le rite du café matinal était pour lui sacré et inviolable.") },
      { mot:"sacerdoce", nature:"n.m.", cat:"n", ...D("Fonction et dignité du prêtre ; par ext., activité exercée comme une vocation totale.","Il vivait son métier d'enseignant comme un véritable sacerdoce.") },
      { mot:"sagesse", nature:"n.f.", cat:"n", ...D("Connaissance juste des choses alliée à une conduite raisonnée et équilibrée.","La sagesse s'acquiert avec l'expérience mais aussi par la réflexion.") },
      { mot:"salut", nature:"n.m.", cat:"n", ...D("Délivrance de l'âme par la grâce divine ; preservation d'un danger grave.","Pour les chrétiens le salut s'obtient par la foi et les œuvres.") },
      { mot:"tabou", nature:"n.m.", cat:"n", ...D("Interdit absolu d'ordre religieux, social ou moral ; sujet qu'on ne peut aborder.","La mort reste un tabou dans de nombreuses familles occidentales contemporaines.") },
      // Adjectifs
      { mot:"absurde", nature:"adj.", cat:"adj", ...D("Contraire à la raison et au bon sens ; dépourvu de sens ou de justification logique.","Camus voyait dans l'absurde la condition fondamentale de l'existence humaine.") },
      { mot:"athée", nature:"adj.", cat:"adj", ...D("Qui ne croit pas en l'existence de Dieu ou de toute divinité.","Un philosophe athée convaincu qui fondait sa morale sur la seule raison humaine.") },
      { mot:"dominical(e)", nature:"adj.", cat:"adj", ...D("Relatif au dimanche, jour du Seigneur dans la tradition chrétienne.","La messe dominicale réunissait encore une partie de la communauté villageoise.") },
      { mot:"gratuit(e)", nature:"adj.", cat:"adj", ...D("Sans contrepartie ; en philosophie, acte sans motivation rationnelle ni intérêt.","L'acte gratuit gidien défie toute logique de cause à effet.") },
      { mot:"immanent(e)", nature:"adj.", cat:"adj", ...D("Qui réside à l'intérieur de la réalité même, sans transcendance extérieure.","Une justice immanente selon laquelle chaque acte porte en lui-même sa rétribution.") },
      { mot:"impie", nature:"adj.", cat:"adj", ...D("Qui manque de respect envers Dieu ou la religion ; irréligieux et sacrilège.","Ses propos impies lui valurent la condamnation du tribunal ecclésiastique.") },
      { mot:"manichéen(ne)", nature:"adj.", cat:"adj", ...D("Qui oppose radicalement le bien et le mal sans nuance ; qui pense en termes absolus.","Une vision manichéenne du monde qui ignore toute zone grise.") },
      { mot:"mystique", nature:"adj.", cat:"adj", ...D("Relatif à la communion intime avec le divin ; qui relève d'une expérience spirituelle intense.","Une ferveur mystique l'emportait parfois au-delà des frontières du rationnel.") },
      { mot:"néophyte", nature:"adj./n.", cat:"adj", ...D("Nouveau converti ; par ext., personne nouvellement entrée dans une activité ou un groupe.","En tant que néophyte, il commettait encore les erreurs typiques des débutants.") },
      { mot:"païen(ne)", nature:"adj.", cat:"adj", ...D("Qui appartient aux religions polythéistes antérieures au christianisme ; non chrétien.","Les fêtes païennes du solstice ont été christianisées au fil des siècles.") },
      { mot:"pieux(se)", nature:"adj.", cat:"adj", ...D("Qui manifeste une profonde dévotion religieuse ; animé d'une sincère ferveur spirituelle.","Une femme pieuse dont la foi simple et directe forçait le respect.") },
      { mot:"profane", nature:"adj.", cat:"adj", ...D("Qui n'appartient pas au domaine du sacré ; étranger à une discipline ou initiation.","La musique profane côtoyait la musique sacrée dans les cours médiévales.") },
      { mot:"prophétique", nature:"adj.", cat:"adj", ...D("Relatif à la prophétie ; qui annonce l'avenir avec une précision troublante.","Ces paroles prophétiques ne furent comprises qu'après la catastrophe.") },
      { mot:"puritain(e)", nature:"adj.", cat:"adj", ...D("D'une morale religieuse rigide et austère ; d'une sévérité excessive envers les plaisirs.","Une éducation puritaine qui le rendait mal à l'aise face à toute forme de légèreté.") },
      { mot:"spirituel(le)", nature:"adj.", cat:"adj", ...D("Relatif à l'esprit et à l'âme ; d'une subtilité intellectuelle et d'un humour fin.","Un directeur spirituel guidant ses fidèles dans leur cheminement intérieur.") },
      { mot:"véniel(le)", nature:"adj.", cat:"adj", ...D("Se dit d'un péché léger, pardonnable ; par ext., faute mineure sans grande conséquence.","Une erreur vénielle qui n'entachait pas l'ensemble d'un travail remarquable.") },
      // Verbes
      { mot:"abjurer", nature:"v.", cat:"v", ...D("Renoncer solennellement à une croyance ou une doctrine ; se rétracter publiquement.","Galilée fut contraint d'abjurer sa thèse sur le mouvement de la Terre.") },
      { mot:"absoudre", nature:"v.", cat:"v", ...D("Accorder l'absolution ; déclarer quelqu'un exempt de faute ou de responsabilité.","Le tribunal l'absout de tout chef d'accusation faute de preuves suffisantes.") },
      { mot:"augurer", nature:"v.", cat:"v", ...D("Présager, tirer un présage favorable ou défavorable d'un signe ou d'un événement.","Ces premiers résultats auguraient bien de la suite de l'expérience.") },
      { mot:"blasphémer", nature:"v.", cat:"v", ...D("Parler avec irrévérence du sacré ou de ce qui est vénéré ; proférer des blasphèmes.","Il blasphémait par provocation sans vraiment mesurer l'offense qu'il causait.") },
      { mot:"édifier", nature:"v.", cat:"v", ...D("Porter à la vertu par l'exemple ; instruire moralement ; construire un bâtiment.","Son comportement exemplaire édifiait tous ceux qui le côtoyaient au quotidien.") },
      { mot:"expier", nature:"v.", cat:"v", ...D("Subir une punition pour réparer une faute ; racheter une erreur par la souffrance.","Il cherchait à expier sa faute par des années de service désintéressé.") },
      { mot:"idolâtrer", nature:"v.", cat:"v", ...D("Vouer un culte excessif à quelqu'un ou quelque chose ; aimer avec une vénération aveugle.","Elle idolâtrait ce chanteur au point de lui consacrer tout son temps libre.") },
      { mot:"immoler", nature:"v.", cat:"v", ...D("Offrir en sacrifice à la divinité ; sacrifier, se sacrifier pour une cause.","Il s'immola par le feu en signe de protestation contre le régime.") },
      { mot:"profaner", nature:"v.", cat:"v", ...D("Porter atteinte au caractère sacré de quelque chose ; traiter sans respect ce qui est vénéré.","Des vandales avaient profané le cimetière en brisant plusieurs stèles funéraires.") },
      { mot:"se repentir", nature:"v.", cat:"v", ...D("Ressentir un regret sincère de ses fautes et avoir le désir de s'amender.","Il se repentit sincèrement de ses erreurs passées et chercha à les réparer.") },
      { mot:"vénérer", nature:"v.", cat:"v", ...D("Témoigner une profonde révérence, un respect quasi religieux envers quelqu'un.","La population vénérait ce saint homme comme un intercesseur auprès du divin.") },
    ]
  },
  {
    id:"culturelle", numero:20, titre:"La Vie culturelle", icone:"🎨",
    description:"Arts, littérature, culture, figures de style",
    couleur:"#1a3a5a", accent:"#4888c0",
    mots:[
      // Noms
      { mot:"acception", nature:"n.f.", cat:"n", ...D("Sens particulier d'un mot selon le contexte dans lequel il est employé.","Dans son acception la plus courante, ce terme désigne une réalité bien précise.") },
      { mot:"bibliographie", nature:"n.f.", cat:"n", ...D("Liste des ouvrages cités ou consultés dans un travail ; science des livres et de leurs éditions.","Une bibliographie soignée témoigne de la rigueur intellectuelle d'un chercheur.") },
      { mot:"biographie", nature:"n.f.", cat:"n", ...D("Récit de la vie d'une personne réelle rédigé par un autre auteur.","Cette biographie de Napoléon s'appuie sur des archives inédites.") },
      { mot:"civilisation", nature:"n.f.", cat:"n", ...D("Ensemble des caractères propres à la vie intellectuelle, morale et matérielle d'une société.","La civilisation grecque antique a profondément influencé la pensée occidentale.") },
      { mot:"connotation", nature:"n.f.", cat:"n", ...D("Signification affective ou culturelle associée à un mot, en plus de son sens littéral.","Le mot « foyer » a une connotation de chaleur et de protection familiale.") },
      { mot:"critique", nature:"n.f.", cat:"n", ...D("Analyse raisonnée d'une œuvre ; jugement évaluatif positif ou négatif sur quelque chose.","La critique littéraire a longtemps ignoré cette romancière aujourd'hui célébrée.") },
      { mot:"culture", nature:"n.f.", cat:"n", ...D("Ensemble des connaissances acquises ; production intellectuelle et artistique d'une société.","La culture générale nourrit la pensée et ouvre l'esprit aux connexions inattendues.") },
      { mot:"ellipse", nature:"n.f.", cat:"n", ...D("Figure de style consistant à omettre un ou plusieurs éléments sans nuire à la compréhension.","L'ellipse narrative permet d'accélérer le rythme du récit en sautant des épisodes.") },
      { mot:"euphémisme", nature:"n.m.", cat:"n", ...D("Figure de style atténuant une réalité choquante par une expression adoucie.","Dire « il nous a quittés » pour « il est mort » est un euphémisme classique.") },
      { mot:"fantastique (le)", nature:"n.m.", cat:"n", ...D("Genre littéraire ou artistique introduisant des éléments surnaturels dans un cadre réaliste.","Maupassant excelle dans le fantastique en jouant sur le doute entre réel et irréel.") },
      { mot:"humour", nature:"n.m.", cat:"n", ...D("Forme d'esprit qui perçoit et exprime le comique des choses avec détachement.","L'humour anglais se caractérise par une ironie pince-sans-rire souvent impénétrable.") },
      { mot:"ironie", nature:"n.f.", cat:"n", ...D("Figure de style exprimant le contraire de ce qu'on veut dire ; moquerie subtile.","L'ironie socratique consiste à feindre l'ignorance pour mieux faire raisonner l'autre.") },
      { mot:"leitmotiv", nature:"n.m.", cat:"n", ...D("Thème musical récurrent associé à un personnage ou une idée ; par ext., idée obsédante répétée.","Le leitmotiv de la culpabilité traverse toute l'œuvre de Dostoïevski.") },
      { mot:"litote", nature:"n.f.", cat:"n", ...D("Figure de style exprimant une idée en niant son contraire pour l'atténuer ou la renforcer.","« Je ne le déteste pas » est une litote classique pour exprimer de l'affection.") },
      { mot:"mécène", nature:"n.m.", cat:"n", ...D("Personne aisée qui soutient financièrement les artistes et les créateurs.","Sans son mécène généreux, le compositeur n'aurait jamais pu terminer son opéra.") },
      { mot:"média", nature:"n.m.", cat:"n", ...D("Moyen de communication de masse diffusant l'information auprès du grand public.","Les nouveaux médias ont profondément transformé le rapport à l'information.") },
      { mot:"merveilleux (le)", nature:"n.m.", cat:"n", ...D("Présence d'éléments magiques et surnaturels dans un récit acceptés sans résistance.","Le merveilleux des contes de fées repose sur un accord tacite entre auteur et lecteur.") },
      { mot:"métaphore", nature:"n.f.", cat:"n", ...D("Figure de style établissant une analogie implicite entre deux réalités sans outil de comparaison.","« Le temps est un fleuve » est une métaphore filée dans la littérature romantique.") },
      { mot:"mythe", nature:"n.m.", cat:"n", ...D("Récit fondateur mettant en scène des êtres surhumains ; représentation collective idéalisée.","Le mythe de Sisyphe symbolise pour Camus la condition humaine face à l'absurde.") },
      { mot:"néologisme", nature:"n.m.", cat:"n", ...D("Mot ou sens nouveau introduit dans une langue pour désigner une réalité nouvelle.","« Selfie » et « covoiturage » sont des néologismes entrés dans le dictionnaire.") },
      { mot:"plagiat", nature:"n.m.", cat:"n", ...D("Copie frauduleuse de l'œuvre d'un autre présentée comme sienne.","Son roman fut disqualifié lorsqu'on découvrit qu'il s'agissait d'un plagiat flagrant.") },
      { mot:"psychanalyse", nature:"n.f.", cat:"n", ...D("Méthode d'investigation et de traitement des troubles psychiques fondée par Freud.","La psychanalyse a profondément influencé la littérature et les arts du XXe siècle.") },
      { mot:"réalisme", nature:"n.m.", cat:"n", ...D("Courant artistique et littéraire représentant la réalité sans idéalisation ; pragmatisme.","Le réalisme de Zola s'appuie sur une documentation méticuleuse du monde ouvrier.") },
      { mot:"satire", nature:"n.f.", cat:"n", ...D("Œuvre critiquant les mœurs ou les travers d'une société par le rire et la dérision.","Les satires de Molière visaient les hypocrites et les précieux de son temps.") },
      { mot:"suspense", nature:"n.m.", cat:"n", ...D("Tension narrative maintenant le lecteur ou spectateur dans l'incertitude anxieuse.","Hitchcock est le maître incontesté du suspense au cinéma.") },
      { mot:"symbole", nature:"n.m.", cat:"n", ...D("Signe représentant une réalité abstraite par convention ou analogie.","La colombe est le symbole universel de la paix dans la culture occidentale.") },
      // Adjectifs
      { mot:"didactique", nature:"adj.", cat:"adj", ...D("Qui vise à instruire, à transmettre un savoir de façon méthodique et pédagogique.","Un roman didactique qui mêle fiction et information scientifique de façon habile.") },
      { mot:"dramatique", nature:"adj.", cat:"adj", ...D("Relatif au drame ; d'une intensité émotionnelle grave ; par ext., très grave et critique.","Un tournant dramatique de l'intrigue qui laisse le lecteur sans voix.") },
      { mot:"épique", nature:"adj.", cat:"adj", ...D("Relatif à l'épopée ; qui évoque des exploits héroïques et grandioses.","La retraite de Russie est décrite par Tolstoï dans une fresque épique monumentale.") },
      { mot:"épistolaire", nature:"adj.", cat:"adj", ...D("Relatif aux lettres et à la correspondance ; se dit d'un roman composé de lettres.","Les Liaisons dangereuses est le chef-d'œuvre du roman épistolaire français.") },
      { mot:"érudit(e)", nature:"adj.", cat:"adj", ...D("Qui possède une vaste et profonde connaissance dans un domaine précis.","Un commentateur érudit dont les notes enrichissaient considérablement le texte.") },
      { mot:"lyrique", nature:"adj.", cat:"adj", ...D("Qui exprime des sentiments intenses avec un souffle poétique ; relatif à l'opéra.","Un passage lyrique d'une beauté bouleversante au cœur d'un roman réaliste.") },
      { mot:"parodique", nature:"adj.", cat:"adj", ...D("Qui imite une œuvre ou un style de façon comique en en exagérant les traits.","Un film parodique qui détourne les codes du western avec une ironie mordante.") },
      { mot:"péjoratif(ve)", nature:"adj.", cat:"adj", ...D("Qui déprécie, qui exprime un jugement défavorable sur ce qu'il désigne.","Le terme « politicard » a une connotation nettement péjorative.") },
      { mot:"tragique", nature:"adj.", cat:"adj", ...D("Relatif à la tragédie ; d'une gravité douloureuse ; qui inspire terreur et pitié.","Un dénouement tragique qui laisse le spectateur dans un état de profonde émotion.") },
      { mot:"utopique", nature:"adj.", cat:"adj", ...D("Relatif à l'utopie ; qui relève d'un idéal irréalisable, chimérique.","Un projet utopique séduisant sur le papier mais impossible à mettre en œuvre.") },
      { mot:"romanesque", nature:"adj.", cat:"adj", ...D("Qui ressemble à un roman par son caractère aventureux, passionné ou improbable.","Une vie romanesque digne des plus grands romans d'aventures du XIXe siècle.") },
      // Verbe
      { mot:"se référer", nature:"v.", cat:"v", ...D("Renvoyer à une autorité, un texte ou un exemple pour fonder son propos.","Il se référait constamment à Montaigne pour étayer ses arguments.") },
    ]
  },
];

function larousseUrl(mot) {
  const base = mot.replace(/\(.*?\)/g, "").replace(/^[lL]['']/, "").replace(/^s['']/, "").replace(/^se /, "").trim();
  const slug = base.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
  return `https://www.larousse.fr/dictionnaires/francais/${slug}`;
}

function getCatColor(m, accent) {
  if (!m.cat) return accent;
  if (m.cat === "n") return "#7baee8";
  if (m.cat === "adj") return "#e8a070";
  if (m.cat === "adv") return "#f0d060";
  if (m.cat === "loc") return "#d0a0e0";
  return "#6dbf7e";
}

function Carnet({ ch, onBack }) {
  const storageKey = `a_revoir:${ch.id}`;
  const [acquis, setAcquis] = useState(() => new Set());
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("tous");
  const [search, setSearch] = useState("");

  // Charger les mots marqués depuis le stockage persistant
  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(storageKey);
        if (result && result.value) {
          setAcquis(new Set(JSON.parse(result.value)));
        }
      } catch (_) {}
      setLoaded(true);
    })();
  }, [ch.id]);

  // Sauvegarder à chaque changement
  const toggle = async (mot, forceRemove = false) => {
    setAcquis(prev => {
      const n = new Set(prev);
      if (forceRemove || n.has(mot)) {
        n.delete(mot);
      } else {
        n.add(mot);
      }
      // Sauvegarder
      window.storage.set(storageKey, JSON.stringify([...n])).catch(() => {});
      return n;
    });
  };
  const total = ch.mots.length, nbARevoir = acquis.size;
  const nbMaitrises = total - nbARevoir;
  const progress = Math.round((nbMaitrises / total) * 100);

  if (!loaded) return (
    <div style={{ minHeight:"100vh", background:"#f0ead8", display:"flex", alignItems:"center", justifyContent:"center", color:"#7a6a48", fontFamily:"'Garamond',Georgia,serif" }}>
      Chargement…
    </div>
  );

  const filtered = ch.mots.filter(m => {
    if (filter === "a_revoir" && !acquis.has(m.mot)) return false;
    if (filter === "maitrise" && acquis.has(m.mot)) return false;
    if (search && !m.mot.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight:"100vh", background:"#f0ead8", color:"#2c2010", fontFamily:"'Garamond',Georgia,serif" }}>
      <div style={{ background:"linear-gradient(135deg,#faf6ee 0%,#f0ead8 100%)", borderBottom:`3px solid ${ch.accent}`, padding:"1.5rem" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", color:ch.accent, fontSize:"0.78rem", padding:0, marginBottom:"1rem", fontFamily:"inherit" }}>← Table des matières</button>
          <div style={{ fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:ch.accent, marginBottom:"0.3rem" }}>Chapitre {ch.numero} · Jeu de mots</div>
          <h1 style={{ margin:0, fontSize:"1.9rem", fontWeight:"normal" }}>{ch.icone} {ch.titre}</h1>
          <p style={{ margin:"0.3rem 0 0", fontSize:"0.8rem", color:"#7a6a48", fontStyle:"italic" }}>{ch.description}</p>
          <div style={{ marginTop:"1.1rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.75rem", color:"#7a6a48", marginBottom:"0.3rem" }}>
              <span style={{ color:"#d04040" }}>🔴 {nbARevoir} à revoir</span>
              <span style={{ color:ch.accent }}>✓ {nbMaitrises} / {total} maîtrisés</span>
            </div>
            <div style={{ background:"#d8d0bc", borderRadius:3, height:5 }}>
              <div style={{ background:ch.accent, height:"100%", width:`${progress}%`, borderRadius:3, transition:"width 0.4s" }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:680, margin:"1.1rem auto 0", padding:"0 1.5rem", display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
        {[["tous",`Tous (${total})`],["a_revoir",`🔴 À revoir (${nbARevoir})`],["maitrise",`✓ Maîtrisés (${nbMaitrises})`]].map(([key,label]) => (
          <button key={key} onClick={() => setFilter(key)} style={{ padding:"0.28rem 0.85rem", border:"1.5px solid", borderColor:filter===key?(key==="a_revoir"?"#d04040":ch.accent):"#c8bea8", background:filter===key?(key==="a_revoir"?"#d04040":ch.accent):"transparent", color:filter===key?"#faf6ee":"#7a6a48", borderRadius:2, cursor:"pointer", fontSize:"0.76rem", fontFamily:"inherit", fontWeight:filter===key?"bold":"normal", transition:"all 0.15s" }}>{label}</button>
        ))}
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Chercher…" style={{ marginLeft:"auto", padding:"0.28rem 0.7rem", border:"1.5px solid #c8bea8", borderRadius:2, fontFamily:"inherit", fontSize:"0.78rem", background:"#f0ead8", color:"#2c2010", outline:"none", width:140 }} />
      </div>

      <div style={{ maxWidth:680, margin:"0.8rem auto 3rem", padding:"0 1.5rem" }}>
        {filtered.map(m => {
          const aRevoir = acquis.has(m.mot), isOpen = selected===m.mot, cc = getCatColor(m, ch.accent);
          return (
            <div key={m.mot} style={{ borderBottom:"1px solid #e0d8c4" }}>
              <div onClick={() => setSelected(isOpen?null:m.mot)} style={{ display:"flex", alignItems:"center", gap:"0.7rem", padding:"0.78rem 0", cursor:"pointer" }}>
                {/* Signal rouge — tap pour allumer uniquement */}
                <button
                  onClick={e=>{
                    e.stopPropagation();
                    if (!aRevoir) toggle(m.mot); // allume seulement, n'éteint pas
                  }}
                  title={aRevoir ? "Mot à revoir — ouvrez la fiche pour marquer comme maîtrisé" : "Marquer comme à revoir"}
                  style={{
                    width:22, height:22, borderRadius:"50%", border:"2px solid",
                    borderColor: aRevoir ? "#d04040" : "#c8bea8",
                    background: aRevoir ? "#d04040" : "transparent",
                    cursor: aRevoir ? "default" : "pointer",
                    flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", padding:0,
                    transition:"all 0.2s",
                    boxShadow: aRevoir ? "0 0 8px #d0404088" : "none",
                  }}
                >
                  {aRevoir && <span style={{ fontSize:"0.55rem", color:"#2c2010", fontWeight:"bold", lineHeight:1 }}>!</span>}
                </button>
                {m.cat&&<span style={{ width:6, height:6, borderRadius:"50%", background:cc, flexShrink:0 }}/>}
                <span style={{ flex:1, fontSize:"0.98rem", textDecoration:"underline", textDecorationColor: aRevoir ? "#d04040" : cc, textUnderlineOffset:"3px", color: aRevoir ? "#5a1010" : "#2c2010", transition:"color 0.2s" }}>
                  {m.mot}<span style={{ marginLeft:"0.45rem", fontSize:"0.73rem", color:"#8a7a58", fontStyle:"italic" }}>{m.nature}</span>
                </span>
                <span style={{ color:"#7a6a48", fontSize:"0.68rem", transform:isOpen?"rotate(180deg)":"none", transition:"transform 0.2s" }}>▾</span>
              </div>
              {isOpen&&(
                <div
                  onClick={() => setSelected(null)}
                  style={{ background:"#f0ead8", border:"1px solid #d8d0bc", borderLeft:`3px solid ${cc}`, borderRadius:"0 3px 3px 0", padding:"0.85rem 1rem", marginBottom:"0.65rem", fontSize:"0.87rem", lineHeight:1.68, cursor:"pointer", position:"relative" }}
                >
                  {/* Bouton fermer */}
                  <span style={{ position:"absolute", top:"0.5rem", right:"0.6rem", fontSize:"1.1rem", color:"#7a6a48", lineHeight:1 }}>✕</span>
                  <p style={{ margin:"0 0 0.4rem", color:"#3a2e18" }}>{m.definition}</p>
                  <p style={{ margin:"0 0 0.8rem", color:"#7a6a48", fontStyle:"italic" }}>« {m.exemple} »</p>
                  <div onClick={e=>e.stopPropagation()} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem" }}>
                    <a href={larousseUrl(m.mot)} target="_blank" rel="noopener noreferrer" style={{ fontSize:"0.72rem", color:ch.accent, textDecoration:"none", borderBottom:`1px solid ${ch.accent}`, letterSpacing:"0.04em" }}>Ouvrir dans Larousse →</a>
                    {aRevoir && (
                      <button
                        onClick={e=>{e.stopPropagation(); toggle(m.mot, true); setSelected(null);}}
                        style={{ fontSize:"0.72rem", padding:"0.25rem 0.7rem", background:"#1a4020", border:"1px solid #5aba80", borderRadius:6, color:"#5aba80", cursor:"pointer", fontFamily:"inherit" }}
                      >
                        ✓ Mot maîtrisé — éteindre le signal
                      </button>
                    )}
                    {!aRevoir && (
                      <button
                        onClick={e=>{e.stopPropagation(); toggle(m.mot);}}
                        style={{ fontSize:"0.72rem", padding:"0.25rem 0.7rem", background:"#3a2020", border:"1px solid #d04040", borderRadius:6, color:"#d04040", cursor:"pointer", fontFamily:"inherit" }}
                      >
                        🔴 Marquer à revoir
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length===0&&<div style={{ textAlign:"center", color:"#7a6a48", padding:"3rem", fontStyle:"italic" }}>Aucun mot trouvé.</div>}
      </div>
    </div>
  );
}

function TableDesMatieres({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [compteurs, setCompteurs] = useState({});
  const [msgExport, setMsgExport] = useState("");
  const total = CH.reduce((s,c)=>s+c.mots.length,0);

  // Charger les compteurs de points rouges pour chaque chapitre
  useEffect(() => {
    (async () => {
      const c = {};
      for (const ch of CH) {
        try {
          const r = await window.storage.get(`a_revoir:${ch.id}`);
          if (r && r.value) c[ch.id] = JSON.parse(r.value).length;
          else c[ch.id] = 0;
        } catch (_) { c[ch.id] = 0; }
      }
      setCompteurs(c);
    })();
  }, []);

  // Export de tous les points rouges
  const exportData = async () => {
    const data = {};
    for (const ch of CH) {
      try {
        const r = await window.storage.get(`a_revoir:${ch.id}`);
        if (r && r.value) data[ch.id] = JSON.parse(r.value);
      } catch (_) {}
    }
    const json = JSON.stringify(data);
    navigator.clipboard.writeText(json).then(() => {
      setMsgExport("✓ Copié ! Gardez ce texte pour restaurer vos points rouges.");
      setTimeout(() => setMsgExport(""), 4000);
    }).catch(() => setMsgExport("Copiez ce texte : " + json));
  };

  // Import des points rouges
  const importData = async () => {
    const txt = prompt("Collez ici votre sauvegarde :");
    if (!txt) return;
    try {
      const data = JSON.parse(txt);
      for (const [id, mots] of Object.entries(data)) {
        await window.storage.set(`a_revoir:${id}`, JSON.stringify(mots));
      }
      setMsgExport("✓ Points rouges restaurés ! Rechargez la page.");
      setTimeout(() => setMsgExport(""), 4000);
    } catch (_) {
      setMsgExport("❌ Format invalide.");
      setTimeout(() => setMsgExport(""), 3000);
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:"#f0ead8", color:"#2c2010", fontFamily:"'Garamond',Georgia,serif" }}>
      <div style={{ background:"linear-gradient(160deg,#faf6ee 0%,#ece5d2 60%,#faf6ee 100%)", borderBottom:"1px solid #c8bea8", padding:"3.5rem 2rem 2.5rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:1, height:"100%", background:"linear-gradient(to bottom,transparent,#c8a84b33,transparent)" }}/>
        <div style={{ display:"inline-block", border:"1px solid #c8a84b44", padding:"0.2rem 1.2rem", fontSize:"0.68rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"#c8a84b", marginBottom:"1.2rem" }}>Jeu de mots</div>
        <h1 style={{ margin:0, fontSize:"clamp(1.8rem,5vw,2.8rem)", fontWeight:"normal", letterSpacing:"0.06em", color:"#2c2010" }}>Table des matières</h1>
        <p style={{ margin:"0.7rem 0 0", fontSize:"0.85rem", color:"#8a7a58", fontStyle:"italic" }}>Carnets de vocabulaire</p>
        <div style={{ display:"flex", justifyContent:"center", gap:"2.5rem", marginTop:"2rem" }}>
          {[{label:"Chapitres",val:CH.length},{label:"Mots",val:total}].map(({label,val})=>(
            <div key={label} style={{ textAlign:"center" }}>
              <div style={{ fontSize:"1.9rem", color:"#c8a84b", lineHeight:1 }}>{val}</div>
              <div style={{ color:"#8a7a58", marginTop:"0.3rem", fontSize:"0.75rem", letterSpacing:"0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:620, margin:"2.5rem auto 0", padding:"0 1.5rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.63rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#c8bea8", borderBottom:"1px solid #d8d0bc", paddingBottom:"0.45rem", marginBottom:"0.1rem" }}>
          <span>Chapitre</span><span>Mots</span>
        </div>
        {CH.map((c,i) => {
          const isH = hovered===i;
          const nbRouge = compteurs[c.id] || 0;
          return (
            <div key={i} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} onClick={()=>onSelect(c)}
              style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"1rem 0.6rem", borderBottom:"1px solid #e0d8c4", cursor:"pointer", background:isH?"#f0ead8":"transparent", borderRadius:3, transition:"background 0.15s" }}>
              <div style={{ width:32, height:32, borderRadius:"50%", border:"1.5px solid", borderColor:c.couleur, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.75rem", color:c.accent, flexShrink:0, fontStyle:"italic" }}>{c.numero}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:"1.02rem", color:isH?"#2c2010":"#2c2010", display:"flex", alignItems:"center", gap:"0.5rem", flexWrap:"wrap", transition:"color 0.15s" }}>
                  <span>{c.icone}</span>{c.titre}
                  <span style={{ fontSize:"0.58rem", background:isH?`${c.accent}22`:"#2c201015", color:isH?c.accent:"#8a7a58", padding:"0.08rem 0.45rem", borderRadius:10, letterSpacing:"0.08em", textTransform:"uppercase", transition:"all 0.15s" }}>{isH?"ouvrir →":"fait"}</span>
                  {nbRouge > 0 && (
                    <span style={{ fontSize:"0.62rem", background:"#d0404033", color:"#ff6060", border:"1px solid #d0404066", padding:"0.08rem 0.5rem", borderRadius:10, display:"inline-flex", alignItems:"center", gap:"0.25rem", boxShadow:"0 0 6px #d0404044" }}>
                      🔴 {nbRouge} à revoir
                    </span>
                  )}
                </div>
                <div style={{ fontSize:"0.73rem", color:"#8a7a58", marginTop:"0.18rem", fontStyle:"italic" }}>{c.description}</div>
              </div>
              <div style={{ flex:"0 1 70px", height:1, background:`repeating-linear-gradient(to right,${c.couleur}66 0px,${c.couleur}66 4px,transparent 4px,transparent 8px)` }}/>
              <div style={{ fontSize:"0.85rem", color:c.accent, minWidth:36, textAlign:"right", fontStyle:"italic" }}>{c.mots.length}</div>
            </div>
          );
        })}
        {msgExport && (
          <div style={{ marginTop:"1rem", padding:"0.7rem 1rem", background:"#1a4020", border:"1px solid #5aba80", borderRadius:6, fontSize:"0.78rem", color:"#5aba80" }}>
            {msgExport}
          </div>
        )}
        <div style={{ marginTop:"1.5rem", display:"flex", gap:"0.6rem", flexWrap:"wrap" }}>
          <button onClick={exportData} style={{ flex:1, padding:"0.6rem", background:"#f0ead8", border:"1px solid #c8bea8", borderRadius:6, color:"#7a6a48", cursor:"pointer", fontSize:"0.78rem", fontFamily:"inherit" }}>
            💾 Sauvegarder mes points rouges
          </button>
          <button onClick={importData} style={{ flex:1, padding:"0.6rem", background:"#f0ead8", border:"1px solid #c8bea8", borderRadius:6, color:"#7a6a48", cursor:"pointer", fontSize:"0.78rem", fontFamily:"inherit" }}>
            📥 Restaurer mes points rouges
          </button>
        </div>
        <div style={{ marginTop:"1rem", padding:"0.9rem 1rem", border:"1px solid #d8d0bc", borderLeft:"3px solid #c8a84b33", fontSize:"0.76rem", color:"#7a6a48", fontStyle:"italic", lineHeight:1.65 }}>
          Cliquez sur un chapitre pour ouvrir le carnet correspondant.
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [vue, setVue] = useState("accueil");
  const [chapitreActif, setChapitreActif] = useState(null);
  if (vue==="carnet"&&chapitreActif) {
    return <Carnet ch={chapitreActif} onBack={()=>{setVue("accueil");setChapitreActif(null);}} />;
  }
  return <TableDesMatieres onSelect={c=>{setChapitreActif(c);setVue("carnet");}} />;
}
