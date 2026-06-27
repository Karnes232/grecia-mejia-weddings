/**
 * Seed the `contactPage` singleton across all six locales (+ the shared
 * `contactPageMedia` stub).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:contact
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized text
 * docs. The media doc is created with `createIfNotExists` so re-running never
 * clobbers the hero image an editor has already uploaded.
 *
 * Content mirrors the design handoff (`pages/contact.jsx`). The form's field
 * labels/placeholders/options live in `messages/{locale}.json`, not here —
 * this doc holds only the editorial prose. Contact channels and studio
 * addresses are kept locale-invariant; everything editorial is translated.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN env var.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const docId = (locale: Locale) => `contactPage-${locale}`;

const keyed = <T extends object>(value: T) => ({
  _key: randomUUID(),
  ...value,
});

// ── Locale-invariant constants ───────────────────────────────────────────
const STEP_NUMBERS = ["01", "02", "03", "04"] as const;

const STUDIOS = {
  inResidence: "Cap Cana · Punta Cana\nDominican Republic",
  mediterranean: "Brera · Milan, Italy",
  opening: "7ᵉ arrondissement · Paris",
} as const;

const SCRIPT_NAME = "Grecia Mejía";

// ── Per-locale editorial copy ────────────────────────────────────────────
type Copy = {
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
  };
  form: {
    eyebrow: string;
    headline: string;
    intro: string;
    legendAboutYou: string;
    legendAboutWedding: string;
    legendInYourWords: string;
    submitLabel: string;
    submitNote: string;
    successMessage: string;
  };
  process: {
    label: string;
    headline: string;
    intro: string;
    steps: Array<{ title: string; body: string }>;
  };
  faq: {
    label: string;
    headline: string;
    items: Array<{ question: string; answer: string }>;
  };
  rail: {
    featureBody: string;
    reachHeading: string;
    reachLabels: {
      email: string;
      telephone: string;
      whatsapp: string;
      instagram: string;
    };
    studiosHeading: string;
    studiosLabels: {
      inResidence: string;
      mediterranean: string;
      opening: string;
      calendar: string;
    };
    calendarValue: string;
    languagesHeading: string;
    languagesBody: string;
  };
};

const COPY: Record<Locale, Copy> = {
  en: {
    hero: {
      eyebrow: "Contact · A private conversation",
      scriptOverline: "Begin —",
      headline: "Speak with *Grecia.*",
      deck: "We accept fourteen weddings each year. Tell us a little about yours, and Grecia will write back to you, herself, within five working days.",
    },
    form: {
      eyebrow: "The enquiry",
      headline: "Request a *private consultation.*",
      intro:
        "Every field helps Grecia prepare for your first conversation — but only your name and a way to reach you are required. The rest, we can discover together.",
      legendAboutYou: "About you",
      legendAboutWedding: "About the wedding",
      legendInYourWords: "In your words",
      submitLabel: "Request a private consultation →",
      submitNote:
        "We reply to every enquiry personally, within five working days.",
      successMessage:
        "Thank you — your enquiry is with the studio. Grecia will write to you, herself, within five working days. In the meantime, a confirmation is on its way to your inbox.",
    },
    process: {
      label: "What happens next",
      headline: "From enquiry to *first dance.*",
      intro:
        "The four steps between this form and your wedding. The first three are unhurried, and entirely without obligation.",
      steps: [
        {
          title: "You write",
          body: "You send this enquiry. Grecia reads it herself and replies within five working days — personally, never a template.",
        },
        {
          title: "We talk",
          body: "A first conversation, by video or in person. An hour or two, no agenda but to understand the wedding you are imagining.",
        },
        {
          title: "We propose",
          body: "If the studio is the right fit, we send a considered proposal — approach, scope, and an honest budget range. No pressure, no deadline.",
        },
        {
          title: "We begin",
          body: "You join the calendar. We begin the eighteen-to-twenty-four month arc of planning, with Grecia and one curator beside you the whole way.",
        },
      ],
    },
    faq: {
      label: "Before you write",
      headline: "A few *questions.*",
      items: [
        {
          question: "Is there a minimum budget or guest count?",
          answer:
            "Our minimum guest count is 40, and most of our weddings begin around a USD $100,000 all-in budget. Below either threshold we are glad to refer you, personally, to a studio that specialises in intimate weddings and elopements.",
        },
        {
          question: "How far ahead should we enquire?",
          answer:
            "Eighteen to twenty-four months is ideal. We accept only fourteen weddings a year and the calendar fills early — but do write even if your date is sooner; we occasionally hold space, and we would rather tell you honestly than have you wonder.",
        },
        {
          question: "Do you only work in Punta Cana?",
          answer:
            "No. Punta Cana is home, but roughly half of our weddings are international — Italy, France, Spain, Greece, the wider Caribbean and the United States. Tell us where you're imagining, or let us guide you.",
        },
        {
          question: "What if we don't know our details yet?",
          answer:
            "Then write anyway. Only your name and a way to reach you are required. The destination, date, guest count and budget are things we are happy to discover together in the first conversation.",
        },
        {
          question: "Will we really hear back from Grecia herself?",
          answer:
            "Yes. Every enquiry reaches Grecia directly, and she replies to each one personally within five working days. It is the first promise the studio makes, and the one we guard most carefully.",
        },
      ],
    },
    rail: {
      featureBody:
        "Every enquiry reaches Grecia directly. She reads each one herself before the studio prepares your first conversation.",
      reachHeading: "Reach the studio",
      reachLabels: {
        email: "Email",
        telephone: "Telephone",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
      studiosHeading: "Studios",
      studiosLabels: {
        inResidence: "In residence",
        mediterranean: "Mediterranean",
        opening: "Opening 2027",
        calendar: "Calendar",
      },
      calendarValue: "Booking 2027 & 2028",
      languagesHeading: "Languages",
      languagesBody:
        "English · Español · Italiano · Français — fluently. Hindi, Hebrew & Arabic ceremonies through our cultural partners.",
    },
  },

  es: {
    hero: {
      eyebrow: "Contacto · Una conversación privada",
      scriptOverline: "Comienza —",
      headline: "Habla con *Grecia.*",
      deck: "Aceptamos catorce bodas cada año. Cuéntanos un poco sobre la tuya y Grecia te responderá, personalmente, en un plazo de cinco días hábiles.",
    },
    form: {
      eyebrow: "La solicitud",
      headline: "Solicita una *consulta privada.*",
      intro:
        "Cada campo ayuda a Grecia a preparar vuestra primera conversación, pero solo tu nombre y una forma de contactarte son obligatorios. El resto, podemos descubrirlo juntos.",
      legendAboutYou: "Sobre ti",
      legendAboutWedding: "Sobre la boda",
      legendInYourWords: "En tus palabras",
      submitLabel: "Solicitar una consulta privada →",
      submitNote:
        "Respondemos a cada solicitud personalmente, en un plazo de cinco días hábiles.",
      successMessage:
        "Gracias — tu solicitud está en manos del estudio. Grecia te escribirá, personalmente, en un plazo de cinco días hábiles. Mientras tanto, una confirmación va en camino a tu correo.",
    },
    process: {
      label: "Lo que sigue",
      headline: "De la solicitud al *primer baile.*",
      intro:
        "Los cuatro pasos entre este formulario y tu boda. Los tres primeros son pausados y completamente sin compromiso.",
      steps: [
        {
          title: "Escribes",
          body: "Nos envías esta solicitud. Grecia la lee en persona y responde en un plazo de cinco días hábiles — personalmente, nunca con una plantilla.",
        },
        {
          title: "Conversamos",
          body: "Una primera conversación, por videollamada o en persona. Una hora o dos, sin más agenda que comprender la boda que imaginas.",
        },
        {
          title: "Proponemos",
          body: "Si el estudio es el adecuado, enviamos una propuesta considerada — enfoque, alcance y un rango de presupuesto honesto. Sin presión, sin plazos.",
        },
        {
          title: "Comenzamos",
          body: "Te unes al calendario. Comenzamos el arco de planificación de dieciocho a veinticuatro meses, con Grecia y una curadora a tu lado durante todo el camino.",
        },
      ],
    },
    faq: {
      label: "Antes de escribir",
      headline: "Algunas *preguntas.*",
      items: [
        {
          question: "¿Hay un presupuesto o número mínimo de invitados?",
          answer:
            "Nuestro número mínimo de invitados es 40, y la mayoría de nuestras bodas comienzan alrededor de un presupuesto integral de USD $100,000. Por debajo de cualquiera de esos umbrales, con gusto te remitimos, personalmente, a un estudio especializado en bodas íntimas y fugas románticas.",
        },
        {
          question: "¿Con cuánta antelación deberíamos escribir?",
          answer:
            "Lo ideal es de dieciocho a veinticuatro meses. Aceptamos solo catorce bodas al año y el calendario se llena pronto — pero escribe aunque tu fecha sea más cercana; en ocasiones reservamos espacio, y preferimos decírtelo con honestidad antes que dejarte con la duda.",
        },
        {
          question: "¿Solo trabajáis en Punta Cana?",
          answer:
            "No. Punta Cana es nuestra casa, pero cerca de la mitad de nuestras bodas son internacionales — Italia, Francia, España, Grecia, el resto del Caribe y los Estados Unidos. Cuéntanos dónde la imaginas, o déjanos guiarte.",
        },
        {
          question: "¿Y si aún no conocemos nuestros detalles?",
          answer:
            "Entonces escribe igualmente. Solo tu nombre y una forma de contactarte son obligatorios. El destino, la fecha, el número de invitados y el presupuesto son cosas que con gusto descubrimos juntos en la primera conversación.",
        },
        {
          question: "¿De verdad nos responderá la propia Grecia?",
          answer:
            "Sí. Cada solicitud llega directamente a Grecia, y ella responde a cada una personalmente en un plazo de cinco días hábiles. Es la primera promesa del estudio, y la que cuidamos con mayor esmero.",
        },
      ],
    },
    rail: {
      featureBody:
        "Cada solicitud llega directamente a Grecia. Ella lee cada una en persona antes de que el estudio prepare vuestra primera conversación.",
      reachHeading: "Contacta con el estudio",
      reachLabels: {
        email: "Correo",
        telephone: "Teléfono",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
      studiosHeading: "Estudios",
      studiosLabels: {
        inResidence: "En residencia",
        mediterranean: "Mediterráneo",
        opening: "Apertura 2027",
        calendar: "Calendario",
      },
      calendarValue: "Reservas 2027 y 2028",
      languagesHeading: "Idiomas",
      languagesBody:
        "English · Español · Italiano · Français — con fluidez. Ceremonias en hindi, hebreo y árabe a través de nuestros colaboradores culturales.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Contact · Une conversation privée",
      scriptOverline: "Commençons —",
      headline: "Parlez avec *Grecia.*",
      deck: "Nous acceptons quatorze mariages par an. Parlez-nous un peu du vôtre, et Grecia vous répondra, personnellement, sous cinq jours ouvrés.",
    },
    form: {
      eyebrow: "La demande",
      headline: "Demandez une *consultation privée.*",
      intro:
        "Chaque champ aide Grecia à préparer votre première conversation — mais seuls votre nom et un moyen de vous joindre sont requis. Le reste, nous pouvons le découvrir ensemble.",
      legendAboutYou: "À propos de vous",
      legendAboutWedding: "À propos du mariage",
      legendInYourWords: "En vos mots",
      submitLabel: "Demander une consultation privée →",
      submitNote:
        "Nous répondons personnellement à chaque demande, sous cinq jours ouvrés.",
      successMessage:
        "Merci — votre demande est entre les mains du studio. Grecia vous écrira, personnellement, sous cinq jours ouvrés. Entre-temps, une confirmation arrive dans votre boîte de réception.",
    },
    process: {
      label: "Ce qui suit",
      headline: "De la demande à la *première danse.*",
      intro:
        "Les quatre étapes entre ce formulaire et votre mariage. Les trois premières sont sans hâte, et entièrement sans engagement.",
      steps: [
        {
          title: "Vous écrivez",
          body: "Vous envoyez cette demande. Grecia la lit elle-même et répond sous cinq jours ouvrés — personnellement, jamais avec un modèle.",
        },
        {
          title: "Nous échangeons",
          body: "Une première conversation, en visio ou en personne. Une heure ou deux, sans autre but que de comprendre le mariage que vous imaginez.",
        },
        {
          title: "Nous proposons",
          body: "Si le studio est le bon choix, nous envoyons une proposition réfléchie — approche, périmètre et une fourchette de budget honnête. Sans pression, sans échéance.",
        },
        {
          title: "Nous commençons",
          body: "Vous rejoignez le calendrier. Nous entamons l'arc de planification de dix-huit à vingt-quatre mois, avec Grecia et une curatrice à vos côtés tout du long.",
        },
      ],
    },
    faq: {
      label: "Avant d'écrire",
      headline: "Quelques *questions.*",
      items: [
        {
          question: "Y a-t-il un budget ou un nombre d'invités minimum ?",
          answer:
            "Notre nombre minimum d'invités est de 40, et la plupart de nos mariages débutent autour d'un budget global de 100 000 USD. En dessous de l'un ou l'autre seuil, nous serons heureux de vous orienter, personnellement, vers un studio spécialisé dans les mariages intimes et les escapades.",
        },
        {
          question: "Combien de temps à l'avance devons-nous écrire ?",
          answer:
            "Dix-huit à vingt-quatre mois, c'est l'idéal. Nous n'acceptons que quatorze mariages par an et le calendrier se remplit tôt — mais écrivez-nous même si votre date est plus proche ; il nous arrive de réserver de l'espace, et nous préférons vous le dire honnêtement plutôt que de vous laisser dans le doute.",
        },
        {
          question: "Travaillez-vous uniquement à Punta Cana ?",
          answer:
            "Non. Punta Cana est notre port d'attache, mais près de la moitié de nos mariages sont internationaux — Italie, France, Espagne, Grèce, le reste des Caraïbes et les États-Unis. Dites-nous où vous l'imaginez, ou laissez-nous vous guider.",
        },
        {
          question: "Et si nous ne connaissons pas encore nos détails ?",
          answer:
            "Alors écrivez quand même. Seuls votre nom et un moyen de vous joindre sont requis. La destination, la date, le nombre d'invités et le budget sont des choses que nous découvrons volontiers ensemble lors de la première conversation.",
        },
        {
          question: "Aurons-nous vraiment des nouvelles de Grecia elle-même ?",
          answer:
            "Oui. Chaque demande parvient directement à Grecia, et elle répond à chacune personnellement sous cinq jours ouvrés. C'est la première promesse du studio, et celle que nous gardons le plus précieusement.",
        },
      ],
    },
    rail: {
      featureBody:
        "Chaque demande parvient directement à Grecia. Elle lit chacune d'elles elle-même avant que le studio ne prépare votre première conversation.",
      reachHeading: "Contacter le studio",
      reachLabels: {
        email: "E-mail",
        telephone: "Téléphone",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
      studiosHeading: "Studios",
      studiosLabels: {
        inResidence: "En résidence",
        mediterranean: "Méditerranée",
        opening: "Ouverture 2027",
        calendar: "Calendrier",
      },
      calendarValue: "Réservations 2027 & 2028",
      languagesHeading: "Langues",
      languagesBody:
        "English · Español · Italiano · Français — couramment. Cérémonies en hindi, hébreu et arabe via nos partenaires culturels.",
    },
  },

  pt: {
    hero: {
      eyebrow: "Contato · Uma conversa privada",
      scriptOverline: "Comece —",
      headline: "Fale com *Grecia.*",
      deck: "Aceitamos catorze casamentos por ano. Conte-nos um pouco sobre o seu e a Grecia responder-lhe-á, pessoalmente, no prazo de cinco dias úteis.",
    },
    form: {
      eyebrow: "O pedido",
      headline: "Solicite uma *consulta privada.*",
      intro:
        "Cada campo ajuda a Grecia a preparar a sua primeira conversa — mas apenas o seu nome e uma forma de contacto são obrigatórios. O resto, podemos descobrir juntos.",
      legendAboutYou: "Sobre você",
      legendAboutWedding: "Sobre o casamento",
      legendInYourWords: "Nas suas palavras",
      submitLabel: "Solicitar uma consulta privada →",
      submitNote:
        "Respondemos a cada pedido pessoalmente, no prazo de cinco dias úteis.",
      successMessage:
        "Obrigado — o seu pedido está com o estúdio. A Grecia escrever-lhe-á, pessoalmente, no prazo de cinco dias úteis. Entretanto, uma confirmação está a caminho da sua caixa de entrada.",
    },
    process: {
      label: "O que acontece a seguir",
      headline: "Do pedido à *primeira dança.*",
      intro:
        "Os quatro passos entre este formulário e o seu casamento. Os três primeiros são tranquilos e totalmente sem compromisso.",
      steps: [
        {
          title: "Você escreve",
          body: "Você envia este pedido. A Grecia lê-o pessoalmente e responde no prazo de cinco dias úteis — pessoalmente, nunca com um modelo.",
        },
        {
          title: "Conversamos",
          body: "Uma primeira conversa, por vídeo ou presencial. Uma hora ou duas, sem outra agenda além de compreender o casamento que imagina.",
        },
        {
          title: "Propomos",
          body: "Se o estúdio for o ideal, enviamos uma proposta cuidada — abordagem, âmbito e uma faixa de orçamento honesta. Sem pressão, sem prazos.",
        },
        {
          title: "Começamos",
          body: "Você entra no calendário. Iniciamos o arco de planeamento de dezoito a vinte e quatro meses, com a Grecia e uma curadora ao seu lado em todo o percurso.",
        },
      ],
    },
    faq: {
      label: "Antes de escrever",
      headline: "Algumas *perguntas.*",
      items: [
        {
          question: "Existe um orçamento ou número mínimo de convidados?",
          answer:
            "O nosso número mínimo de convidados é 40, e a maioria dos nossos casamentos começa em torno de um orçamento total de USD $100,000. Abaixo de qualquer um destes limites, teremos todo o gosto em encaminhá-lo, pessoalmente, para um estúdio especializado em casamentos íntimos e fugas a dois.",
        },
        {
          question: "Com quanta antecedência devemos escrever?",
          answer:
            "O ideal é dezoito a vinte e quatro meses. Aceitamos apenas catorze casamentos por ano e o calendário enche cedo — mas escreva mesmo que a sua data seja mais próxima; por vezes reservamos espaço, e preferimos dizer-lhe com honestidade do que deixá-lo na dúvida.",
        },
        {
          question: "Trabalham apenas em Punta Cana?",
          answer:
            "Não. Punta Cana é a nossa casa, mas cerca de metade dos nossos casamentos são internacionais — Itália, França, Espanha, Grécia, o restante das Caraíbas e os Estados Unidos. Diga-nos onde o imagina, ou deixe-nos guiá-lo.",
        },
        {
          question: "E se ainda não soubermos os nossos detalhes?",
          answer:
            "Então escreva à mesma. Apenas o seu nome e uma forma de contacto são obrigatórios. O destino, a data, o número de convidados e o orçamento são coisas que teremos todo o gosto em descobrir juntos na primeira conversa.",
        },
        {
          question: "Vamos mesmo receber resposta da própria Grecia?",
          answer:
            "Sim. Cada pedido chega diretamente à Grecia, e ela responde a cada um pessoalmente no prazo de cinco dias úteis. É a primeira promessa do estúdio, e aquela que guardamos com mais cuidado.",
        },
      ],
    },
    rail: {
      featureBody:
        "Cada pedido chega diretamente à Grecia. Ela lê cada um pessoalmente antes de o estúdio preparar a sua primeira conversa.",
      reachHeading: "Fale com o estúdio",
      reachLabels: {
        email: "E-mail",
        telephone: "Telefone",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
      studiosHeading: "Estúdios",
      studiosLabels: {
        inResidence: "Em residência",
        mediterranean: "Mediterrâneo",
        opening: "Abertura 2027",
        calendar: "Calendário",
      },
      calendarValue: "Reservas 2027 e 2028",
      languagesHeading: "Idiomas",
      languagesBody:
        "English · Español · Italiano · Français — fluentemente. Cerimónias em hindi, hebraico e árabe através dos nossos parceiros culturais.",
    },
  },

  de: {
    hero: {
      eyebrow: "Kontakt · Ein privates Gespräch",
      scriptOverline: "Beginnen —",
      headline: "Sprechen Sie mit *Grecia.*",
      deck: "Wir nehmen vierzehn Hochzeiten pro Jahr an. Erzählen Sie uns ein wenig von Ihrer, und Grecia wird Ihnen persönlich innerhalb von fünf Werktagen antworten.",
    },
    form: {
      eyebrow: "Die Anfrage",
      headline: "Vereinbaren Sie ein *privates Gespräch.*",
      intro:
        "Jedes Feld hilft Grecia, Ihr erstes Gespräch vorzubereiten — doch nur Ihr Name und eine Möglichkeit, Sie zu erreichen, sind erforderlich. Den Rest entdecken wir gemeinsam.",
      legendAboutYou: "Über Sie",
      legendAboutWedding: "Über die Hochzeit",
      legendInYourWords: "In Ihren Worten",
      submitLabel: "Privates Gespräch anfragen →",
      submitNote:
        "Wir beantworten jede Anfrage persönlich, innerhalb von fünf Werktagen.",
      successMessage:
        "Vielen Dank — Ihre Anfrage liegt beim Studio. Grecia wird Ihnen persönlich innerhalb von fünf Werktagen schreiben. In der Zwischenzeit ist eine Bestätigung auf dem Weg in Ihr Postfach.",
    },
    process: {
      label: "Was als Nächstes geschieht",
      headline: "Von der Anfrage zum *ersten Tanz.*",
      intro:
        "Die vier Schritte zwischen diesem Formular und Ihrer Hochzeit. Die ersten drei sind ohne Eile und völlig unverbindlich.",
      steps: [
        {
          title: "Sie schreiben",
          body: "Sie senden diese Anfrage. Grecia liest sie selbst und antwortet innerhalb von fünf Werktagen — persönlich, niemals mit einer Vorlage.",
        },
        {
          title: "Wir sprechen",
          body: "Ein erstes Gespräch, per Video oder persönlich. Eine Stunde oder zwei, ohne Agenda, außer die Hochzeit zu verstehen, die Sie sich vorstellen.",
        },
        {
          title: "Wir schlagen vor",
          body: "Wenn das Studio die richtige Wahl ist, senden wir einen durchdachten Vorschlag — Ansatz, Umfang und eine ehrliche Budgetspanne. Kein Druck, keine Frist.",
        },
        {
          title: "Wir beginnen",
          body: "Sie reihen sich in den Kalender ein. Wir beginnen den achtzehn- bis vierundzwanzigmonatigen Planungsbogen, mit Grecia und einer Kuratorin den ganzen Weg an Ihrer Seite.",
        },
      ],
    },
    faq: {
      label: "Bevor Sie schreiben",
      headline: "Ein paar *Fragen.*",
      items: [
        {
          question: "Gibt es ein Mindestbudget oder eine Mindestgästezahl?",
          answer:
            "Unsere Mindestgästezahl liegt bei 40, und die meisten unserer Hochzeiten beginnen bei einem Gesamtbudget von etwa 100.000 USD. Unterhalb einer dieser Schwellen verweisen wir Sie gern persönlich an ein Studio, das auf intime Hochzeiten und Elopements spezialisiert ist.",
        },
        {
          question: "Wie weit im Voraus sollten wir anfragen?",
          answer:
            "Achtzehn bis vierundzwanzig Monate sind ideal. Wir nehmen nur vierzehn Hochzeiten pro Jahr an und der Kalender füllt sich früh — schreiben Sie aber auch, wenn Ihr Termin näher liegt; gelegentlich halten wir Raum frei, und wir sagen es Ihnen lieber ehrlich, als Sie im Ungewissen zu lassen.",
        },
        {
          question: "Arbeiten Sie nur in Punta Cana?",
          answer:
            "Nein. Punta Cana ist unser Zuhause, doch etwa die Hälfte unserer Hochzeiten ist international — Italien, Frankreich, Spanien, Griechenland, die weitere Karibik und die Vereinigten Staaten. Sagen Sie uns, wo Sie sie sich vorstellen, oder lassen Sie sich von uns leiten.",
        },
        {
          question: "Was, wenn wir unsere Details noch nicht kennen?",
          answer:
            "Dann schreiben Sie trotzdem. Nur Ihr Name und eine Möglichkeit, Sie zu erreichen, sind erforderlich. Reiseziel, Datum, Gästezahl und Budget entdecken wir im ersten Gespräch gern gemeinsam.",
        },
        {
          question: "Hören wir wirklich von Grecia persönlich?",
          answer:
            "Ja. Jede Anfrage erreicht Grecia direkt, und sie beantwortet jede einzelne persönlich innerhalb von fünf Werktagen. Es ist das erste Versprechen des Studios und das, welches wir am sorgfältigsten hüten.",
        },
      ],
    },
    rail: {
      featureBody:
        "Jede Anfrage erreicht Grecia direkt. Sie liest jede selbst, bevor das Studio Ihr erstes Gespräch vorbereitet.",
      reachHeading: "Das Studio erreichen",
      reachLabels: {
        email: "E-Mail",
        telephone: "Telefon",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
      studiosHeading: "Studios",
      studiosLabels: {
        inResidence: "Sitz",
        mediterranean: "Mittelmeer",
        opening: "Eröffnung 2027",
        calendar: "Kalender",
      },
      calendarValue: "Buchung 2027 & 2028",
      languagesHeading: "Sprachen",
      languagesBody:
        "English · Español · Italiano · Français — fließend. Zeremonien auf Hindi, Hebräisch und Arabisch über unsere Kulturpartner.",
    },
  },

  it: {
    hero: {
      eyebrow: "Contatto · Una conversazione privata",
      scriptOverline: "Iniziamo —",
      headline: "Parla con *Grecia.*",
      deck: "Accettiamo quattordici matrimoni ogni anno. Raccontaci un po' del tuo e Grecia ti risponderà, di persona, entro cinque giorni lavorativi.",
    },
    form: {
      eyebrow: "La richiesta",
      headline: "Richiedi una *consulenza privata.*",
      intro:
        "Ogni campo aiuta Grecia a preparare la vostra prima conversazione — ma solo il tuo nome e un modo per contattarti sono obbligatori. Il resto, possiamo scoprirlo insieme.",
      legendAboutYou: "Su di te",
      legendAboutWedding: "Sul matrimonio",
      legendInYourWords: "Con parole tue",
      submitLabel: "Richiedi una consulenza privata →",
      submitNote:
        "Rispondiamo a ogni richiesta personalmente, entro cinque giorni lavorativi.",
      successMessage:
        "Grazie — la tua richiesta è allo studio. Grecia ti scriverà, di persona, entro cinque giorni lavorativi. Nel frattempo, una conferma è in arrivo nella tua casella di posta.",
    },
    process: {
      label: "Cosa succede dopo",
      headline: "Dalla richiesta al *primo ballo.*",
      intro:
        "I quattro passi tra questo modulo e il tuo matrimonio. I primi tre sono senza fretta e del tutto senza impegno.",
      steps: [
        {
          title: "Scrivi",
          body: "Invii questa richiesta. Grecia la legge di persona e risponde entro cinque giorni lavorativi — personalmente, mai con un modello.",
        },
        {
          title: "Parliamo",
          body: "Una prima conversazione, in video o di persona. Un'ora o due, senza altra agenda se non comprendere il matrimonio che immagini.",
        },
        {
          title: "Proponiamo",
          body: "Se lo studio è quello giusto, inviamo una proposta ponderata — approccio, ambito e una fascia di budget onesta. Nessuna pressione, nessuna scadenza.",
        },
        {
          title: "Iniziamo",
          body: "Entri nel calendario. Iniziamo l'arco di pianificazione di diciotto-ventiquattro mesi, con Grecia e una curatrice al tuo fianco per tutto il percorso.",
        },
      ],
    },
    faq: {
      label: "Prima di scrivere",
      headline: "Qualche *domanda.*",
      items: [
        {
          question: "C'è un budget o un numero minimo di invitati?",
          answer:
            "Il nostro numero minimo di invitati è 40, e la maggior parte dei nostri matrimoni parte da un budget complessivo di circa 100.000 USD. Al di sotto di una di queste soglie, saremo lieti di indirizzarti, personalmente, a uno studio specializzato in matrimoni intimi e fughe romantiche.",
        },
        {
          question: "Con quanto anticipo dovremmo scrivere?",
          answer:
            "Diciotto-ventiquattro mesi sono l'ideale. Accettiamo solo quattordici matrimoni all'anno e il calendario si riempie presto — ma scrivi anche se la tua data è più vicina; a volte teniamo spazio libero, e preferiamo dirtelo con onestà piuttosto che lasciarti nel dubbio.",
        },
        {
          question: "Lavorate solo a Punta Cana?",
          answer:
            "No. Punta Cana è la nostra casa, ma circa metà dei nostri matrimoni sono internazionali — Italia, Francia, Spagna, Grecia, il resto dei Caraibi e gli Stati Uniti. Dicci dove lo immagini, o lascia che ti guidiamo.",
        },
        {
          question: "E se non conoscessimo ancora i nostri dettagli?",
          answer:
            "Allora scrivi lo stesso. Solo il tuo nome e un modo per contattarti sono obbligatori. La destinazione, la data, il numero di invitati e il budget sono cose che saremo lieti di scoprire insieme nella prima conversazione.",
        },
        {
          question: "Riceveremo davvero una risposta da Grecia in persona?",
          answer:
            "Sì. Ogni richiesta arriva direttamente a Grecia, e lei risponde a ciascuna personalmente entro cinque giorni lavorativi. È la prima promessa dello studio, e quella che custodiamo con più cura.",
        },
      ],
    },
    rail: {
      featureBody:
        "Ogni richiesta arriva direttamente a Grecia. Legge ciascuna di persona prima che lo studio prepari la vostra prima conversazione.",
      reachHeading: "Contatta lo studio",
      reachLabels: {
        email: "E-mail",
        telephone: "Telefono",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
      studiosHeading: "Studi",
      studiosLabels: {
        inResidence: "In sede",
        mediterranean: "Mediterraneo",
        opening: "Apertura 2027",
        calendar: "Calendario",
      },
      calendarValue: "Prenotazioni 2027 e 2028",
      languagesHeading: "Lingue",
      languagesBody:
        "English · Español · Italiano · Français — correntemente. Cerimonie in hindi, ebraico e arabo tramite i nostri partner culturali.",
    },
  },
};

// ── Build one locale's document ──────────────────────────────────────────
function buildDoc(locale: Locale) {
  const c = COPY[locale];

  return {
    hero: {
      eyebrow: c.hero.eyebrow,
      scriptOverline: c.hero.scriptOverline,
      headline: c.hero.headline,
      deck: c.hero.deck,
    },
    form: { ...c.form },
    rail: {
      cards: [
        keyed({
          variant: "feature",
          script: SCRIPT_NAME,
          body: c.rail.featureBody,
        }),
        keyed({
          variant: "rows",
          heading: c.rail.reachHeading,
          // Values + links come from Site Settings → Contact (via row `key`).
          rows: [
            keyed({ label: c.rail.reachLabels.email, key: "email" }),
            keyed({ label: c.rail.reachLabels.telephone, key: "phone" }),
            keyed({ label: c.rail.reachLabels.whatsapp, key: "whatsapp" }),
            keyed({ label: c.rail.reachLabels.instagram, key: "instagram" }),
          ],
        }),
        keyed({
          variant: "rows",
          heading: c.rail.studiosHeading,
          rows: [
            keyed({
              label: c.rail.studiosLabels.inResidence,
              value: STUDIOS.inResidence,
            }),
            keyed({
              label: c.rail.studiosLabels.mediterranean,
              value: STUDIOS.mediterranean,
            }),
            keyed({
              label: c.rail.studiosLabels.opening,
              value: STUDIOS.opening,
            }),
            keyed({
              label: c.rail.studiosLabels.calendar,
              value: c.rail.calendarValue,
            }),
          ],
        }),
        keyed({
          variant: "note",
          heading: c.rail.languagesHeading,
          body: c.rail.languagesBody,
        }),
      ],
    },
    process: {
      label: c.process.label,
      headline: c.process.headline,
      intro: c.process.intro,
      steps: c.process.steps.map((step, i) =>
        keyed({ number: STEP_NUMBERS[i], title: step.title, body: step.body }),
      ),
    },
    faq: {
      label: c.faq.label,
      headline: c.faq.headline,
      items: c.faq.items.map((item) =>
        keyed({ question: item.question, answer: item.answer }),
      ),
    },
  };
}

async function run() {
  console.log(`Seeding contactPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "contactPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "contactPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["contactPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  // Shared media doc — created only if absent so re-runs never clobber an
  // uploaded hero image.
  tx.createIfNotExists({
    _id: "contactPageMedia",
    _type: "contactPageMedia",
    hero: {
      image: {
        _type: "image",
        alt: "A candlelit reception — a private conversation begins",
      },
    },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} contactPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
