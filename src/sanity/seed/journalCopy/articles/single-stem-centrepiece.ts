/**
 * Journal article — "The Quiet Return of the Single-Stem Centrepiece".
 * Full rich body mirroring the design's `pages/journal-article.jsx`.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const AMALFI = "/journal/when-to-wed-amalfi-coast";

type Body = {
  introP: b.Run[];
  confidenceH: string;
  confidenceP1: string;
  confidenceP2: string;
  featureCaption: string;
  featureCredit: string;
  gal: [string, string];
  disciplineH: string;
  disciplineP: string;
  pqQuote: string;
  pqCite: string;
  takeH: string;
  takeItems: string[];
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  costH: string;
  costP: string;
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  workingH: string;
  workingP: b.Run[];
};

const en: ArticleLocaleCopy = {
  title: "The Quiet Return of the *Single-Stem* Centrepiece",
  excerpt:
    "Why the most expensive tablescape of 2026 looks like almost nothing at all — and the discipline it takes to get there.",
  kicker: "Trends",
  lede: "The single stem looks like restraint and reads like confidence. Reaching that emptiness, it turns out, costs more than the crowded tables it replaced.",
  faqs: [
    {
      question: "Is a single-stem centrepiece actually cheaper?",
      answer:
        "Rarely, and not the way couples expect. The flower count falls, but the vessel, the placement and the perfection of a single bloom rise — you are paying for the editing, not the volume.",
    },
    {
      question: "What flowers work for a single-stem table?",
      answer:
        "A stem with architecture: a ranunculus at its fullest, a single peony, a branch of blossom, a stem of amaryllis. The rule is that it must hold the eye alone, without a supporting cast to hide behind.",
    },
    {
      question: "Does an empty table feel unfinished to guests?",
      answer:
        "Only if the rest of the table is unfinished. The single stem asks the linen, the glassware and the light to carry their share. When they do, the room reads as intentional, never bare.",
    },
    {
      question: "Will this style date quickly?",
      answer:
        "Restraint dates more slowly than excess. A wall of flowers belongs to a season; a considered single stem belongs to the room. That is much of its quiet appeal for 2026.",
    },
  ],
  bleedQuote: {
    script: "The hardest edit —",
    quote:
      "Anyone can add. The confidence is in what you are willing to leave off the table, and trust the room to hold.",
    cite: "Grecia Mejía · 2026",
  },
};

const enBody: Body = {
  introP: [
    "For a decade the tablescape competed for attention: taller, denser, more. The most talked-about tables of 2026 do the opposite. A single stem, a considered vessel, and a great deal of quiet space around it. It looks effortless. It is anything but.",
  ],
  confidenceH: "Restraint reads as confidence",
  confidenceP1:
    "A crowded table hedges. It fills the eye so nothing has to be perfect, because nothing is asked to stand alone. The single stem removes the hedge entirely — there is one flower, and it must be right. That exposure is precisely what makes it read as confidence rather than economy.",
  confidenceP2:
    "The effect on a guest is physical before it is intellectual. The eye is given somewhere to rest, the conversation has room to breathe, and the table stops shouting for attention it no longer needs. Calm, at a table, is the rarest luxury of all — and it cannot be bought by adding.",
  featureCaption: "One ranunculus, one vessel, and the space to see them",
  featureCredit: "Photographed for the studio, 2026",
  gal: [
    "A single amaryllis stem against bare linen",
    "The place setting, edited to its essentials",
  ],
  disciplineH: "The discipline of less",
  disciplineP:
    "Emptiness is not the absence of decisions; it is the sum of them. Every element that stays must earn its place, which means every element that goes was considered and refused. The linen, the glass, the light, the single bloom — each is chosen knowing there is nothing to hide behind. That is slow, deliberate work, and it is the opposite of doing less.",
  pqQuote:
    "People assume the empty table was the easy one. It is the hardest table we set. There is nowhere for a wrong choice to hide.",
  pqCite: "Grecia Mejía · Founder",
  takeH: "The short version",
  takeItems: [
    "The single stem exposes every choice — it reads as confidence because it has to be right",
    "Cost moves from volume to editing: fewer flowers, higher precision",
    "The table's calm comes from space, not from what fills it",
    "Restraint dates more slowly than a wall of flowers ever will",
  ],
  splitEyebrow: "How it is built",
  splitHeading: "The table is edited, not decorated.",
  splitParas: [
    "We begin by removing, not adding. Everything comes off the table, and each element returns only if it earns the space it takes. What remains is a place setting where the eye moves cleanly from linen to glass to the single stem.",
    "The vessel is chosen as carefully as the flower — its weight, its line, its proportion to the bloom. Light is set low and warm so the stem casts a shadow rather than a spotlight, and the table reads as composed rather than staged.",
  ],
  costH: "Why it costs more",
  costP:
    "The counterintuitive part is the invoice. Fewer flowers do not mean a smaller number. The savings on volume are spent on precision: sourcing a single flawless stem, the vessel that flatters it, the lighting that earns its restraint, and the hours of editing that make emptiness look inevitable. You pay for the discipline, not the material.",
  cta: {
    script: "A private conversation —",
    heading: "Considering a quieter table?",
    body: "We accept a small number of weddings each year. Tell us your date and your vision, and Grecia will write back personally within five working days.",
    ctaLabel: "Request a consultation",
  },
  workingH: "How to know it is working",
  workingP: [
    "You will know it is working when nobody mentions the flowers, and everybody remembers the room. The table will feel calm before anyone can say why. If you want to see restraint carry an entire wedding rather than a single table, our notes on ",
    { text: "when to wed on the Amalfi Coast", href: AMALFI },
    " are the closest companion to this one.",
  ],
};

const es: ArticleLocaleCopy = {
  title: "El regreso silencioso del centro de mesa de *un solo tallo*",
  excerpt:
    "Por qué la mesa más cara de 2026 parece casi nada, y la disciplina que hace falta para lograrlo.",
  kicker: "Tendencias",
  lede: "El tallo único parece contención y se lee como confianza. Llegar a ese vacío, resulta, cuesta más que las mesas recargadas que sustituyó.",
  faqs: [
    {
      question: "¿Es de verdad más barato un centro de un solo tallo?",
      answer:
        "Rara vez, y no como esperan las parejas. Baja el número de flores, pero suben el recipiente, la colocación y la perfección de una sola flor: pagas la edición, no el volumen.",
    },
    {
      question: "¿Qué flores funcionan en una mesa de un solo tallo?",
      answer:
        "Un tallo con arquitectura: un ranúnculo en su plenitud, una peonía sola, una rama en flor, un tallo de amarilis. La regla es que debe sostener la mirada solo, sin un reparto que le sirva de escondite.",
    },
    {
      question: "¿Una mesa vacía resulta inacabada para los invitados?",
      answer:
        "Solo si el resto de la mesa está inacabado. El tallo único pide que el mantel, la cristalería y la luz asuman su parte. Cuando lo hacen, la sala se lee como intencionada, nunca desnuda.",
    },
    {
      question: "¿Se quedará anticuado pronto este estilo?",
      answer:
        "La contención envejece más despacio que el exceso. Un muro de flores pertenece a una temporada; un tallo único bien pensado pertenece a la sala. En eso reside gran parte de su atractivo silencioso para 2026.",
    },
  ],
  bleedQuote: {
    script: "La edición más difícil —",
    quote:
      "Cualquiera puede añadir. La confianza está en lo que estás dispuesto a dejar fuera de la mesa, confiando en que la sala lo sostenga.",
    cite: "Grecia Mejía · 2026",
  },
};

const esBody: Body = {
  introP: [
    "Durante una década la mesa compitió por la atención: más alta, más densa, más de todo. Las mesas más comentadas de 2026 hacen lo contrario. Un solo tallo, un recipiente pensado y mucho espacio silencioso alrededor. Parece sin esfuerzo. Es todo lo contrario.",
  ],
  confidenceH: "La contención se lee como confianza",
  confidenceP1:
    "Una mesa recargada se cubre las espaldas. Llena la mirada para que nada tenga que ser perfecto, porque a nada se le pide sostenerse solo. El tallo único elimina del todo ese resguardo: hay una flor, y debe ser la correcta. Esa exposición es justo lo que hace que se lea como confianza y no como ahorro.",
  confidenceP2:
    "El efecto en el invitado es físico antes que intelectual. A la mirada se le da dónde descansar, la conversación tiene aire para respirar, y la mesa deja de reclamar una atención que ya no necesita. La calma, en una mesa, es el lujo más raro de todos, y no se compra añadiendo.",
  featureCaption: "Un ranúnculo, un recipiente y el espacio para verlos",
  featureCredit: "Fotografiado para el estudio, 2026",
  gal: [
    "Un solo tallo de amarilis contra el mantel desnudo",
    "El cubierto, editado a lo esencial",
  ],
  disciplineH: "La disciplina de lo menos",
  disciplineP:
    "El vacío no es la ausencia de decisiones; es la suma de ellas. Cada elemento que se queda debe ganarse su sitio, lo que significa que cada elemento que se va fue considerado y rechazado. El mantel, el vidrio, la luz, la flor única: cada uno se elige sabiendo que no hay dónde esconderse. Es un trabajo lento y deliberado, lo opuesto a hacer menos.",
  pqQuote:
    "La gente supone que la mesa vacía fue la fácil. Es la mesa más difícil que ponemos. No hay lugar donde una elección equivocada pueda esconderse.",
  pqCite: "Grecia Mejía · Fundadora",
  takeH: "La versión corta",
  takeItems: [
    "El tallo único expone cada elección: se lee como confianza porque tiene que ser correcto",
    "El coste pasa del volumen a la edición: menos flores, más precisión",
    "La calma de la mesa viene del espacio, no de lo que la llena",
    "La contención envejece más despacio de lo que jamás lo hará un muro de flores",
  ],
  splitEyebrow: "Cómo se construye",
  splitHeading: "La mesa se edita, no se decora.",
  splitParas: [
    "Empezamos quitando, no añadiendo. Todo sale de la mesa, y cada elemento vuelve solo si se gana el espacio que ocupa. Lo que queda es un cubierto donde la mirada se mueve limpia del mantel al vidrio y al tallo único.",
    "El recipiente se elige con tanto cuidado como la flor: su peso, su línea, su proporción con la flor. La luz se pone baja y cálida para que el tallo proyecte sombra en vez de foco, y la mesa se lea como compuesta y no como montada.",
  ],
  costH: "Por qué cuesta más",
  costP:
    "Lo contraintuitivo es la factura. Menos flores no significan una cifra menor. El ahorro en volumen se gasta en precisión: conseguir un solo tallo impecable, el recipiente que lo favorece, la luz que justifica su contención y las horas de edición que hacen que el vacío parezca inevitable. Pagas la disciplina, no el material.",
  cta: {
    script: "Una conversación privada —",
    heading: "¿Piensas en una mesa más silenciosa?",
    body: "Aceptamos un número reducido de bodas al año. Cuéntanos tu fecha y tu visión, y Grecia te responderá personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  workingH: "Cómo saber que funciona",
  workingP: [
    "Sabrás que funciona cuando nadie mencione las flores y todos recuerden la sala. La mesa se sentirá en calma antes de que nadie sepa decir por qué. Si quieres ver la contención sostener una boda entera y no una sola mesa, nuestras notas sobre ",
    { text: "cuándo casarse en la Costa Amalfitana", href: AMALFI },
    " son el compañero más cercano a este texto.",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Le retour discret du centre de table à *tige unique*",
  excerpt:
    "Pourquoi la table la plus chère de 2026 ne ressemble presque à rien — et la discipline qu'il faut pour y parvenir.",
  kicker: "Tendances",
  lede: "La tige unique a l'air de retenue et se lit comme de l'assurance. Atteindre ce vide coûte, en réalité, plus cher que les tables chargées qu'elle remplace.",
  faqs: [
    {
      question: "Un centre de table à tige unique est-il vraiment moins cher ?",
      answer:
        "Rarement, et pas comme les couples l'imaginent. Le nombre de fleurs baisse, mais le vase, le placement et la perfection d'une seule fleur montent : vous payez le travail d'édition, pas le volume.",
    },
    {
      question: "Quelles fleurs conviennent à une table à tige unique ?",
      answer:
        "Une tige avec de l'architecture : une renoncule à son apogée, une pivoine seule, une branche en fleur, une tige d'amaryllis. La règle : elle doit tenir le regard seule, sans figuration derrière laquelle se cacher.",
    },
    {
      question: "Une table vide paraît-elle inachevée aux invités ?",
      answer:
        "Seulement si le reste de la table est inachevé. La tige unique demande au linge, à la verrerie et à la lumière de porter leur part. Quand ils le font, la salle se lit comme intentionnelle, jamais nue.",
    },
    {
      question: "Ce style se démodera-t-il vite ?",
      answer:
        "La retenue vieillit plus lentement que l'excès. Un mur de fleurs appartient à une saison ; une tige unique réfléchie appartient à la salle. C'est là une grande part de son charme discret pour 2026.",
    },
  ],
  bleedQuote: {
    script: "L'édition la plus dure —",
    quote:
      "N'importe qui peut ajouter. L'assurance est dans ce que vous acceptez de laisser hors de la table, en faisant confiance à la salle pour le porter.",
    cite: "Grecia Mejía · 2026",
  },
};

const frBody: Body = {
  introP: [
    "Pendant une décennie la table s'est disputé l'attention : plus haute, plus dense, plus de tout. Les tables les plus commentées de 2026 font l'inverse. Une tige unique, un vase pensé, et beaucoup d'espace silencieux autour. Cela paraît sans effort. C'est tout le contraire.",
  ],
  confidenceH: "La retenue se lit comme de l'assurance",
  confidenceP1:
    "Une table chargée se couvre. Elle remplit le regard pour que rien n'ait à être parfait, puisque rien n'est prié de tenir seul. La tige unique supprime tout à fait ce refuge : il y a une fleur, et elle doit être juste. Cette exposition est précisément ce qui la fait lire comme de l'assurance plutôt que comme de l'économie.",
  confidenceP2:
    "L'effet sur l'invité est physique avant d'être intellectuel. On offre au regard un endroit où se poser, la conversation a de l'air pour respirer, et la table cesse de réclamer une attention dont elle n'a plus besoin. Le calme, à une table, est le plus rare des luxes, et il ne s'achète pas en ajoutant.",
  featureCaption: "Une renoncule, un vase, et l'espace pour les voir",
  featureCredit: "Photographié pour le studio, 2026",
  gal: [
    "Une seule tige d'amaryllis sur un linge nu",
    "Le couvert, réduit à l'essentiel",
  ],
  disciplineH: "La discipline du moins",
  disciplineP:
    "Le vide n'est pas l'absence de décisions ; il en est la somme. Chaque élément qui reste doit mériter sa place, ce qui signifie que chaque élément retiré a été pesé et refusé. Le linge, le verre, la lumière, la fleur unique : chacun est choisi en sachant qu'il n'y a rien derrière quoi se cacher. C'est un travail lent et délibéré, l'exact opposé d'en faire moins.",
  pqQuote:
    "On croit que la table vide était la facile. C'est la table la plus difficile que nous dressons. Un mauvais choix n'a nulle part où se cacher.",
  pqCite: "Grecia Mejía · Fondatrice",
  takeH: "En bref",
  takeItems: [
    "La tige unique expose chaque choix : elle se lit comme de l'assurance parce qu'elle doit être juste",
    "Le coût passe du volume à l'édition : moins de fleurs, plus de précision",
    "Le calme de la table vient de l'espace, non de ce qui la remplit",
    "La retenue vieillit plus lentement qu'un mur de fleurs ne le fera jamais",
  ],
  splitEyebrow: "Comment elle se construit",
  splitHeading: "La table s'édite, elle ne se décore pas.",
  splitParas: [
    "Nous commençons par retirer, non par ajouter. Tout quitte la table, et chaque élément ne revient que s'il mérite l'espace qu'il prend. Reste un couvert où le regard glisse proprement du linge au verre puis à la tige unique.",
    "Le vase est choisi avec autant de soin que la fleur : son poids, sa ligne, sa proportion à la fleur. La lumière est posée basse et chaude pour que la tige projette une ombre plutôt qu'un projecteur, et la table se lit comme composée plutôt que mise en scène.",
  ],
  costH: "Pourquoi cela coûte plus cher",
  costP:
    "Le contre-intuitif, c'est la facture. Moins de fleurs ne signifie pas un chiffre plus bas. Les économies de volume passent dans la précision : trouver une seule tige irréprochable, le vase qui la flatte, l'éclairage qui justifie sa retenue, et les heures d'édition qui rendent le vide inévitable. Vous payez la discipline, pas la matière.",
  cta: {
    script: "Une conversation privée —",
    heading: "Vous envisagez une table plus silencieuse ?",
    body: "Nous acceptons un petit nombre de mariages par an. Dites-nous votre date et votre vision, et Grecia vous répondra personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  workingH: "Comment savoir que cela fonctionne",
  workingP: [
    "Vous saurez que cela fonctionne quand personne ne mentionnera les fleurs et que tout le monde se souviendra de la salle. La table paraîtra calme avant que quiconque puisse dire pourquoi. Pour voir la retenue porter un mariage entier plutôt qu'une seule table, nos notes sur ",
    { text: "quand se marier sur la côte amalfitaine", href: AMALFI },
    " sont le compagnon le plus proche de ce texte.",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "O regresso discreto do centro de mesa de *haste única*",
  excerpt:
    "Porque a mesa mais cara de 2026 parece quase nada — e a disciplina que é precisa para lá chegar.",
  kicker: "Tendências",
  lede: "A haste única parece contenção e lê-se como confiança. Chegar a esse vazio, afinal, custa mais do que as mesas cheias que substituiu.",
  faqs: [
    {
      question: "Um centro de mesa de haste única é mesmo mais barato?",
      answer:
        "Raramente, e não como os casais esperam. O número de flores baixa, mas o recipiente, a colocação e a perfeição de uma só flor sobem: paga-se a edição, não o volume.",
    },
    {
      question: "Que flores funcionam numa mesa de haste única?",
      answer:
        "Uma haste com arquitetura: um ranúnculo no seu auge, uma peónia sozinha, um ramo em flor, uma haste de amarílis. A regra é que tem de sustentar o olhar sozinha, sem elenco por trás do qual se esconder.",
    },
    {
      question: "Uma mesa vazia parece inacabada aos convidados?",
      answer:
        "Só se o resto da mesa estiver inacabado. A haste única pede que o linho, a cristalaria e a luz assumam a sua parte. Quando o fazem, a sala lê-se como intencional, nunca despida.",
    },
    {
      question: "Este estilo ficará datado depressa?",
      answer:
        "A contenção envelhece mais devagar do que o excesso. Um muro de flores pertence a uma estação; uma haste única pensada pertence à sala. Aí reside grande parte do seu apelo discreto para 2026.",
    },
  ],
  bleedQuote: {
    script: "A edição mais difícil —",
    quote:
      "Qualquer um consegue acrescentar. A confiança está no que estás disposto a deixar fora da mesa, confiando que a sala o sustente.",
    cite: "Grecia Mejía · 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Durante uma década a mesa competiu por atenção: mais alta, mais densa, mais de tudo. As mesas mais comentadas de 2026 fazem o contrário. Uma haste única, um recipiente pensado e muito espaço silencioso à volta. Parece sem esforço. É tudo menos isso.",
  ],
  confidenceH: "A contenção lê-se como confiança",
  confidenceP1:
    "Uma mesa cheia protege-se. Enche o olhar para que nada tenha de ser perfeito, porque a nada se pede que se sustente sozinho. A haste única remove por completo esse abrigo: há uma flor, e tem de ser a certa. Essa exposição é precisamente o que a faz ler como confiança e não como poupança.",
  confidenceP2:
    "O efeito no convidado é físico antes de ser intelectual. Dá-se ao olhar onde descansar, a conversa ganha ar para respirar, e a mesa deixa de exigir uma atenção de que já não precisa. A calma, numa mesa, é o mais raro de todos os luxos, e não se compra acrescentando.",
  featureCaption: "Um ranúnculo, um recipiente e o espaço para os ver",
  featureCredit: "Fotografado para o estúdio, 2026",
  gal: [
    "Uma só haste de amarílis contra o linho despido",
    "O talher, editado ao essencial",
  ],
  disciplineH: "A disciplina do menos",
  disciplineP:
    "O vazio não é a ausência de decisões; é a soma delas. Cada elemento que fica tem de ganhar o seu lugar, o que significa que cada elemento que sai foi ponderado e recusado. O linho, o vidro, a luz, a flor única: cada um é escolhido sabendo que não há onde esconder-se. É um trabalho lento e deliberado, o oposto de fazer menos.",
  pqQuote:
    "As pessoas assumem que a mesa vazia foi a fácil. É a mesa mais difícil que pomos. Não há onde uma escolha errada se esconda.",
  pqCite: "Grecia Mejía · Fundadora",
  takeH: "A versão curta",
  takeItems: [
    "A haste única expõe cada escolha: lê-se como confiança porque tem de estar certa",
    "O custo passa do volume para a edição: menos flores, mais precisão",
    "A calma da mesa vem do espaço, não do que a enche",
    "A contenção envelhece mais devagar do que um muro de flores alguma vez fará",
  ],
  splitEyebrow: "Como se constrói",
  splitHeading: "A mesa edita-se, não se decora.",
  splitParas: [
    "Começamos por retirar, não por acrescentar. Tudo sai da mesa, e cada elemento só volta se ganhar o espaço que ocupa. O que resta é um talher onde o olhar se move limpo do linho ao vidro e à haste única.",
    "O recipiente é escolhido com tanto cuidado como a flor: o seu peso, a sua linha, a sua proporção com a flor. A luz é posta baixa e quente para que a haste projete sombra em vez de foco, e a mesa se leia como composta e não como encenada.",
  ],
  costH: "Porque custa mais",
  costP:
    "O contraintuitivo é a fatura. Menos flores não significam um número menor. A poupança no volume gasta-se em precisão: encontrar uma só haste impecável, o recipiente que a favorece, a luz que justifica a sua contenção e as horas de edição que fazem o vazio parecer inevitável. Paga-se a disciplina, não o material.",
  cta: {
    script: "Uma conversa privada —",
    heading: "A pensar numa mesa mais silenciosa?",
    body: "Aceitamos um número reduzido de casamentos por ano. Diga-nos a sua data e a sua visão, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  workingH: "Como saber que está a resultar",
  workingP: [
    "Saberá que está a resultar quando ninguém mencionar as flores e todos se lembrarem da sala. A mesa parecerá calma antes de alguém saber dizer porquê. Se quiser ver a contenção sustentar um casamento inteiro e não uma só mesa, as nossas notas sobre ",
    { text: "quando casar na Costa Amalfitana", href: AMALFI },
    " são o companheiro mais próximo deste texto.",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Die leise Rückkehr des *Einzelstiel*-Tafelschmucks",
  excerpt:
    "Warum die teuerste Tafel 2026 fast nach nichts aussieht — und welche Disziplin es kostet, dahin zu kommen.",
  kicker: "Trends",
  lede: "Der einzelne Stiel wirkt wie Zurückhaltung und liest sich wie Selbstsicherheit. Diese Leere zu erreichen kostet, wie sich zeigt, mehr als die überladenen Tische, die sie ersetzt.",
  faqs: [
    {
      question: "Ist ein Einzelstiel-Tafelschmuck wirklich günstiger?",
      answer:
        "Selten, und nicht so, wie Paare es erwarten. Die Zahl der Blüten sinkt, doch Gefäß, Platzierung und die Perfektion einer einzigen Blüte steigen — Sie bezahlen die Bearbeitung, nicht die Menge.",
    },
    {
      question: "Welche Blumen eignen sich für eine Einzelstiel-Tafel?",
      answer:
        "Ein Stiel mit Architektur: eine Ranunkel in voller Pracht, eine einzelne Pfingstrose, ein blühender Zweig, ein Amaryllisstiel. Die Regel: Er muss den Blick allein halten, ohne eine Kulisse, hinter der er sich verstecken kann.",
    },
    {
      question: "Wirkt eine leere Tafel auf Gäste unfertig?",
      answer:
        "Nur wenn der Rest der Tafel unfertig ist. Der einzelne Stiel verlangt, dass Leinen, Glas und Licht ihren Teil tragen. Tun sie das, liest sich der Raum als beabsichtigt, nie als kahl.",
    },
    {
      question: "Wird dieser Stil schnell altmodisch?",
      answer:
        "Zurückhaltung altert langsamer als Überfluss. Eine Blumenwand gehört einer Saison; ein durchdachter einzelner Stiel gehört dem Raum. Darin liegt ein Großteil seines leisen Reizes für 2026.",
    },
  ],
  bleedQuote: {
    script: "Der schwerste Schnitt —",
    quote:
      "Hinzufügen kann jeder. Die Selbstsicherheit liegt in dem, was Sie bereit sind von der Tafel wegzulassen, im Vertrauen darauf, dass der Raum es trägt.",
    cite: "Grecia Mejía · 2026",
  },
};

const deBody: Body = {
  introP: [
    "Ein Jahrzehnt lang buhlte die Tafel um Aufmerksamkeit: höher, dichter, mehr. Die meistbesprochenen Tafeln von 2026 tun das Gegenteil. Ein einzelner Stiel, ein durchdachtes Gefäß und viel stiller Raum darum herum. Es wirkt mühelos. Es ist alles andere als das.",
  ],
  confidenceH: "Zurückhaltung liest sich als Selbstsicherheit",
  confidenceP1:
    "Eine überladene Tafel sichert sich ab. Sie füllt den Blick, damit nichts perfekt sein muss, weil nichts allein stehen soll. Der einzelne Stiel nimmt diesen Schutz vollständig weg — es gibt eine Blüte, und sie muss stimmen. Genau diese Blöße lässt ihn als Selbstsicherheit statt als Sparsamkeit erscheinen.",
  confidenceP2:
    "Die Wirkung auf einen Gast ist körperlich, bevor sie geistig ist. Dem Blick wird ein Ort zum Ruhen gegeben, das Gespräch hat Raum zum Atmen, und die Tafel hört auf, nach einer Aufmerksamkeit zu rufen, die sie nicht mehr braucht. Ruhe, an einer Tafel, ist der seltenste Luxus von allen — und sie lässt sich nicht durch Hinzufügen kaufen.",
  featureCaption: "Eine Ranunkel, ein Gefäß und der Raum, sie zu sehen",
  featureCredit: "Fotografiert für das Studio, 2026",
  gal: [
    "Ein einzelner Amaryllisstiel vor kahlem Leinen",
    "Das Gedeck, auf das Wesentliche reduziert",
  ],
  disciplineH: "Die Disziplin des Weniger",
  disciplineP:
    "Leere ist nicht die Abwesenheit von Entscheidungen; sie ist ihre Summe. Jedes Element, das bleibt, muss seinen Platz verdienen, was heißt: Jedes Element, das geht, wurde erwogen und verworfen. Leinen, Glas, Licht, die einzelne Blüte — jedes wird gewählt im Wissen, dass es nichts gibt, hinter dem man sich verstecken kann. Das ist langsame, bewusste Arbeit, das Gegenteil davon, weniger zu tun.",
  pqQuote:
    "Man nimmt an, die leere Tafel sei die einfache gewesen. Es ist die schwerste Tafel, die wir decken. Eine falsche Wahl hat nirgends Platz, sich zu verstecken.",
  pqCite: "Grecia Mejía · Gründerin",
  takeH: "Die Kurzfassung",
  takeItems: [
    "Der einzelne Stiel legt jede Wahl offen — er liest sich als Selbstsicherheit, weil er stimmen muss",
    "Die Kosten wandern vom Volumen zur Bearbeitung: weniger Blumen, höhere Präzision",
    "Die Ruhe der Tafel kommt aus dem Raum, nicht aus dem, was ihn füllt",
    "Zurückhaltung altert langsamer, als eine Blumenwand es je tun wird",
  ],
  splitEyebrow: "Wie sie gebaut wird",
  splitHeading: "Die Tafel wird bearbeitet, nicht dekoriert.",
  splitParas: [
    "Wir beginnen mit dem Wegnehmen, nicht mit dem Hinzufügen. Alles kommt von der Tafel, und jedes Element kehrt nur zurück, wenn es den Raum verdient, den es einnimmt. Was bleibt, ist ein Gedeck, in dem der Blick sauber vom Leinen zum Glas zum einzelnen Stiel wandert.",
    "Das Gefäß wird so sorgfältig gewählt wie die Blume — sein Gewicht, seine Linie, seine Proportion zur Blüte. Das Licht wird tief und warm gesetzt, damit der Stiel einen Schatten wirft statt eines Scheinwerfers, und die Tafel sich als komponiert statt inszeniert liest.",
  ],
  costH: "Warum es mehr kostet",
  costP:
    "Das Gegenintuitive ist die Rechnung. Weniger Blumen bedeuten keine kleinere Zahl. Was am Volumen gespart wird, geht in die Präzision: die Beschaffung eines einzigen makellosen Stiels, das Gefäß, das ihm schmeichelt, das Licht, das seine Zurückhaltung rechtfertigt, und die Stunden der Bearbeitung, die die Leere unvermeidlich aussehen lassen. Sie bezahlen die Disziplin, nicht das Material.",
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Denken Sie über eine leisere Tafel nach?",
    body: "Wir nehmen jedes Jahr eine kleine Zahl von Hochzeiten an. Nennen Sie uns Ihr Datum und Ihre Vision, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  workingH: "Woran Sie erkennen, dass es wirkt",
  workingP: [
    "Sie werden wissen, dass es wirkt, wenn niemand die Blumen erwähnt und alle sich an den Raum erinnern. Die Tafel wird sich ruhig anfühlen, bevor jemand sagen kann, warum. Wenn Sie sehen möchten, wie Zurückhaltung eine ganze Hochzeit trägt statt nur eine einzelne Tafel, sind unsere Notizen dazu, ",
    { text: "wann man an der Amalfiküste heiraten sollte", href: AMALFI },
    ", der engste Begleiter zu diesem Text.",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Il ritorno silenzioso del centrotavola a *stelo singolo*",
  excerpt:
    "Perché la tavola più costosa del 2026 sembra quasi nulla — e la disciplina che serve per arrivarci.",
  kicker: "Tendenze",
  lede: "Lo stelo singolo sembra misura e si legge come sicurezza. Raggiungere quel vuoto, a conti fatti, costa più dei tavoli affollati che ha sostituito.",
  faqs: [
    {
      question: "Un centrotavola a stelo singolo è davvero più economico?",
      answer:
        "Di rado, e non come le coppie si aspettano. Il numero di fiori cala, ma salgono il contenitore, la disposizione e la perfezione di un solo fiore: paghi l'editing, non il volume.",
    },
    {
      question: "Quali fiori funzionano per una tavola a stelo singolo?",
      answer:
        "Uno stelo con architettura: un ranuncolo al suo apice, una peonia sola, un ramo in fiore, uno stelo di amarillide. La regola è che deve reggere lo sguardo da solo, senza un contorno dietro cui nascondersi.",
    },
    {
      question: "Una tavola vuota sembra incompiuta agli invitati?",
      answer:
        "Solo se il resto della tavola è incompiuto. Lo stelo singolo chiede che tovagliato, cristalleria e luce facciano la loro parte. Quando lo fanno, la sala si legge come intenzionale, mai spoglia.",
    },
    {
      question: "Questo stile passerà di moda in fretta?",
      answer:
        "La misura invecchia più lentamente dell'eccesso. Un muro di fiori appartiene a una stagione; uno stelo singolo pensato appartiene alla sala. In questo sta gran parte del suo fascino silenzioso per il 2026.",
    },
  ],
  bleedQuote: {
    script: "Il taglio più difficile —",
    quote:
      "Chiunque può aggiungere. La sicurezza sta in ciò che sei disposto a lasciare fuori dalla tavola, confidando che la sala lo regga.",
    cite: "Grecia Mejía · 2026",
  },
};

const itBody: Body = {
  introP: [
    "Per un decennio la tavola ha gareggiato per l'attenzione: più alta, più densa, più di tutto. Le tavole più discusse del 2026 fanno l'opposto. Uno stelo singolo, un contenitore pensato e molto spazio silenzioso intorno. Sembra senza sforzo. È tutt'altro.",
  ],
  confidenceH: "La misura si legge come sicurezza",
  confidenceP1:
    "Una tavola affollata si copre le spalle. Riempie lo sguardo perché nulla debba essere perfetto, dato che a nulla è chiesto di reggersi da solo. Lo stelo singolo toglie del tutto quel riparo: c'è un fiore, e deve essere giusto. È proprio questa esposizione a farlo leggere come sicurezza e non come risparmio.",
  confidenceP2:
    "L'effetto su un invitato è fisico prima che intellettuale. Allo sguardo si dà dove posarsi, la conversazione ha aria per respirare, e la tavola smette di reclamare un'attenzione di cui non ha più bisogno. La calma, a una tavola, è il più raro di tutti i lussi, e non si compra aggiungendo.",
  featureCaption: "Un ranuncolo, un contenitore e lo spazio per vederli",
  featureCredit: "Fotografato per lo studio, 2026",
  gal: [
    "Un solo stelo di amarillide contro il tovagliato spoglio",
    "Il coperto, ridotto all'essenziale",
  ],
  disciplineH: "La disciplina del meno",
  disciplineP:
    "Il vuoto non è l'assenza di decisioni; ne è la somma. Ogni elemento che resta deve guadagnarsi il posto, il che significa che ogni elemento che va via è stato valutato e rifiutato. Il tovagliato, il vetro, la luce, il fiore unico: ciascuno è scelto sapendo che non c'è nulla dietro cui nascondersi. È un lavoro lento e deliberato, l'opposto di fare meno.",
  pqQuote:
    "Si dà per scontato che la tavola vuota sia stata la facile. È la tavola più difficile che apparecchiamo. Una scelta sbagliata non ha dove nascondersi.",
  pqCite: "Grecia Mejía · Fondatrice",
  takeH: "In breve",
  takeItems: [
    "Lo stelo singolo espone ogni scelta: si legge come sicurezza perché deve essere giusto",
    "Il costo passa dal volume all'editing: meno fiori, più precisione",
    "La calma della tavola viene dallo spazio, non da ciò che la riempie",
    "La misura invecchia più lentamente di quanto un muro di fiori farà mai",
  ],
  splitEyebrow: "Come si costruisce",
  splitHeading: "La tavola si edita, non si decora.",
  splitParas: [
    "Cominciamo togliendo, non aggiungendo. Tutto esce dalla tavola, e ogni elemento torna solo se si guadagna lo spazio che occupa. Ciò che resta è un coperto dove lo sguardo scorre pulito dal tovagliato al vetro allo stelo singolo.",
    "Il contenitore è scelto con la stessa cura del fiore: il suo peso, la sua linea, la sua proporzione col fiore. La luce è posta bassa e calda perché lo stelo proietti un'ombra invece di un riflettore, e la tavola si legga come composta e non come allestita.",
  ],
  costH: "Perché costa di più",
  costP:
    "Il controintuitivo è la fattura. Meno fiori non significano una cifra minore. Il risparmio sul volume si spende in precisione: procurare un solo stelo impeccabile, il contenitore che lo valorizza, la luce che giustifica la sua misura e le ore di editing che rendono il vuoto inevitabile. Paghi la disciplina, non il materiale.",
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pensando a una tavola più silenziosa?",
    body: "Accettiamo un numero ridotto di matrimoni all'anno. Dicci la tua data e la tua visione, e Grecia ti risponderà personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  workingH: "Come capire che funziona",
  workingP: [
    "Capirai che funziona quando nessuno menzionerà i fiori e tutti ricorderanno la sala. La tavola sembrerà calma prima che qualcuno sappia dire perché. Se vuoi vedere la misura reggere un intero matrimonio e non una sola tavola, i nostri appunti su ",
    { text: "quando sposarsi in Costiera Amalfitana", href: AMALFI },
    " sono il compagno più vicino a questo testo.",
  ],
};

const byLocale: Record<Locale, ArticleLocaleCopy> = { en, es, fr, pt, de, it };
const BODY: Record<Locale, Body> = {
  en: enBody,
  es: esBody,
  fr: frBody,
  pt: ptBody,
  de: deBody,
  it: itBody,
};

const buildBody = (locale: Locale): Record<string, unknown>[] => {
  const c = byLocale[locale];
  const t = BODY[locale];
  return [
    b.lede(c.lede),
    b.p(t.introP),
    b.h2(t.confidenceH),
    b.p(t.confidenceP1),
    b.p(t.confidenceP2),
    b.featureImage(t.featureCaption, t.featureCaption, t.featureCredit),
    b.gallery([
      { alt: t.gal[0], caption: t.gal[0] },
      { alt: t.gal[1], caption: t.gal[1] },
    ]),
    b.h2(t.disciplineH),
    b.p(t.disciplineP),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.takeaways(t.takeH, t.takeItems),
    b.split({
      alt: t.splitHeading,
      eyebrow: t.splitEyebrow,
      heading: t.splitHeading,
      paragraphs: [t.splitParas[0], t.splitParas[1]],
    }),
    b.h2(t.costH),
    b.p(t.costP),
    b.inlineCta({
      script: t.cta.script,
      heading: t.cta.heading,
      body: t.cta.body,
      ctaLabel: t.cta.ctaLabel,
      ctaHref: "/contact",
    }),
    b.h2(t.workingH),
    b.p(t.workingP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "single-stem-centrepiece",
  categorySlug: "wedding-design",
  relatedDestinationSlug: "punta-cana",
  readMinutes: 6,
  publishedAt: "2025-11-20T09:00:00Z",
  featured: false,
  relatedArticles: [
    "when-to-wed-amalfi-coast",
    "welcome-party-second-star",
    "the-sangeet-night-before",
  ],
  byLocale,
  buildBody,
};
