/**
 * Seed the `termsPage` singleton across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:terms
 *
 * Idempotent — deterministic IDs + `createOrReplace`. No media doc (the legal
 * hero is purely typographic).
 *
 * ⚠️  The copy below is a realistic brand-voice PLACEHOLDER. Have a lawyer
 * review and adapt it for your jurisdiction and actual practices before launch.
 * EN mirrors the design handoff (`pages/terms.jsx`); the rest is translated.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";
import {
  bullets,
  callout,
  defs,
  type LegalSectionCopy,
  p,
  section,
} from "./legalContent";

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

const docId = (locale: Locale) => `termsPage-${locale}`;

const keyed = <T extends object>(value: T) => ({
  _key: randomUUID(),
  ...value,
});

const SIGNATURE = "Grecia Mejía";
const APPLIES_TO = "greciamejia.com";

type Copy = {
  hero: { eyebrow: string; title: string; titleItalic: string; deck: string };
  meta: { updated: string; effective: string };
  intro: string;
  helpNote: string;
  closing: string;
  sections: LegalSectionCopy[];
};

const COPY: Record<Locale, Copy> = {
  en: {
    hero: {
      eyebrow: "Legal · Terms",
      title: "Terms &",
      titleItalic: "Conditions.",
      deck: "The agreement between you and the studio — written to be read, not to be hidden. Plain terms for a relationship built on trust.",
    },
    meta: { updated: "January 2026", effective: "1 January 2026" },
    intro:
      "These terms set out how the studio works with you: how an engagement begins, what each of us is responsible for, and what happens when plans change. They form part of your agreement with Grecia Mejía Weddings.",
    helpNote:
      "Questions about this agreement? Write to the studio and Grecia or her team will respond personally.",
    closing: "On behalf of the studio · Punta Cana, January 2026",
    sections: [
      section("Definitions", [
        p("In these terms, the following words carry the following meanings:"),
        defs([
          [
            "The studio",
            "Grecia Mejía Weddings, including its team, curators and authorised representatives.",
          ],
          [
            "The client",
            "The couple or individual who engages the studio to plan a wedding, and any person authorised to act on their behalf.",
          ],
          [
            "Services",
            "The planning, coordination, design and delivery work set out in your signed proposal.",
          ],
          [
            "Vendors",
            "The venues, officiants, caterers, photographers and other specialists engaged for your wedding.",
          ],
          [
            "The agreement",
            "Your signed proposal together with these terms, which read as one document.",
          ],
        ]),
      ]),
      section("Engaging the studio", [
        p(
          "The studio accepts a limited number of weddings each calendar year. An engagement begins only when a signed proposal and the initial retainer are received. Until both are in hand, no date is reserved and no work is guaranteed.",
        ),
        p(
          "A consultation, quotation or provisional date does not constitute a binding engagement, and we may continue to discuss the same date with other couples until your agreement is signed.",
        ),
      ]),
      section("Fees & payment", [
        p(
          "Our fees are set out in your proposal and are structured as follows:",
        ),
        ...bullets([
          "**Initial retainer** — due on signing, to reserve your date and begin work. This retainer is non-refundable.",
          "**Staged payments** — billed against agreed milestones through the planning period.",
          "**Final balance** — due no later than thirty days before the wedding.",
        ]),
        p(
          "Vendor costs, venue fees, travel and third-party charges are separate from the studio's planning fee and are payable directly or through the studio as set out in your proposal. All fees are quoted exclusive of applicable taxes.",
        ),
      ]),
      section("Scope of work", [
        p(
          "The studio will deliver the services described in your proposal with care, discretion and professional judgement. Where you ask for work beyond that scope, we will agree it — and any additional fee — in writing before proceeding.",
        ),
        p(
          "We will recommend vendors we know and trust, but the contract for each vendor's services is between you and that vendor unless your proposal states otherwise. We coordinate them; we do not employ them.",
        ),
      ]),
      section("Your responsibilities", [
        p("So that we can do our best work, we ask that you:"),
        ...bullets([
          "Provide accurate information about your guests, traditions, and requirements, and tell us promptly of any change.",
          "Make decisions and approvals within the timeframes we agree, so the planning stays on schedule.",
          "Meet payment milestones on time.",
          "Treat the studio team and all vendors with courtesy and respect.",
        ]),
      ]),
      section("Changes & postponement", [
        p(
          "Weddings change, and we plan for it. If you wish to change your date, we will do everything possible to move your engagement, subject to the availability of the studio and your vendors. Sums already paid to vendors are governed by each vendor's own terms.",
        ),
        callout(
          "We lived through 2020 with every couple on our calendar. We will always try to move a wedding before we cancel one.",
        ),
      ]),
      section("Cancellation", [
        p("Either party may end the engagement in writing. If you cancel:"),
        ...bullets([
          "The initial retainer is non-refundable.",
          "Fees for work completed up to the cancellation date are payable.",
          "Vendor cancellation terms apply separately, as set by each vendor.",
        ]),
        p(
          "If the studio must withdraw — which is rare and never done lightly — we will refund any planning fees paid for work not yet performed, and help you transition to another planner where we can.",
        ),
      ]),
      section("Force majeure", [
        p(
          "Neither party is liable for failure to perform caused by events beyond reasonable control — including weather, natural disaster, hurricane, pandemic, government restriction, or civil disruption. In such cases we will work with you to postpone, adapt or relocate the wedding, and our duty is to act in good faith, not to guarantee the impossible.",
        ),
      ]),
      section("Liability", [
        p(
          "The studio's total liability under the agreement is limited to the planning fees you have paid to us. We are not liable for the acts, omissions or failures of independent vendors, nor for indirect or consequential losses.",
        ),
        p(
          "Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything that cannot be limited by law.",
        ),
      ]),
      section("Photography & confidentiality", [
        p(
          "Your wedding is yours. We will not photograph it for our own use, publish it, or share it with press without your explicit written permission. We treat the details of every wedding — your names, your guests, your celebrations — as confidential, and we expect the same discretion in return regarding the studio's methods and vendor relationships.",
        ),
      ]),
      section("Intellectual property", [
        p(
          "Designs, plans, mood boards and documents created by the studio for your wedding remain the studio's intellectual property until the final balance is paid, at which point you receive a licence to use them for your wedding. The studio retains the right to its methods, templates and working processes.",
        ),
      ]),
      section("Governing law", [
        p(
          "These terms are governed by the laws of the Dominican Republic. Any dispute will first be addressed through good-faith discussion between you and the studio; where that does not resolve it, the courts of the Dominican Republic have jurisdiction.",
        ),
        p(
          "For any question about these terms, write to [hello@greciamejia.com](mailto:hello@greciamejia.com) or reach us through our [contact page](/contact).",
        ),
      ]),
    ],
  },

  es: {
    hero: {
      eyebrow: "Legal · Términos",
      title: "Términos y",
      titleItalic: "Condiciones.",
      deck: "El acuerdo entre tú y el estudio — escrito para leerse, no para esconderse. Términos claros para una relación basada en la confianza.",
    },
    meta: { updated: "enero de 2026", effective: "1 de enero de 2026" },
    intro:
      "Estos términos establecen cómo trabaja el estudio contigo: cómo comienza un encargo, de qué es responsable cada uno y qué ocurre cuando los planes cambian. Forman parte de tu acuerdo con Grecia Mejía Weddings.",
    helpNote:
      "¿Preguntas sobre este acuerdo? Escribe al estudio y Grecia o su equipo te responderán personalmente.",
    closing: "En nombre del estudio · Punta Cana, enero de 2026",
    sections: [
      section("Definiciones", [
        p(
          "En estos términos, las siguientes palabras tienen los siguientes significados:",
        ),
        defs([
          [
            "El estudio",
            "Grecia Mejía Weddings, incluido su equipo, sus curadoras y representantes autorizados.",
          ],
          [
            "El cliente",
            "La pareja o persona que contrata al estudio para planificar una boda, y cualquier persona autorizada a actuar en su nombre.",
          ],
          [
            "Servicios",
            "El trabajo de planificación, coordinación, diseño y ejecución establecido en tu propuesta firmada.",
          ],
          [
            "Proveedores",
            "Los lugares, oficiantes, banqueteros, fotógrafos y demás especialistas contratados para tu boda.",
          ],
          [
            "El acuerdo",
            "Tu propuesta firmada junto con estos términos, que se leen como un solo documento.",
          ],
        ]),
      ]),
      section("Contratar al estudio", [
        p(
          "El estudio acepta un número limitado de bodas cada año natural. Un encargo comienza únicamente cuando se reciben una propuesta firmada y el anticipo inicial. Hasta tener ambos, no se reserva ninguna fecha ni se garantiza ningún trabajo.",
        ),
        p(
          "Una consulta, un presupuesto o una fecha provisional no constituyen un encargo vinculante, y podemos seguir conversando esa misma fecha con otras parejas hasta que tu acuerdo esté firmado.",
        ),
      ]),
      section("Honorarios y pago", [
        p(
          "Nuestros honorarios se establecen en tu propuesta y se estructuran de la siguiente manera:",
        ),
        ...bullets([
          "**Anticipo inicial** — debido a la firma, para reservar tu fecha y comenzar el trabajo. Este anticipo no es reembolsable.",
          "**Pagos escalonados** — facturados contra hitos acordados a lo largo del periodo de planificación.",
          "**Saldo final** — debido a más tardar treinta días antes de la boda.",
        ]),
        p(
          "Los costes de proveedores, las tarifas de los lugares, los viajes y los cargos de terceros son independientes de los honorarios de planificación del estudio y se pagan directamente o a través del estudio según se indique en tu propuesta. Todos los honorarios se cotizan sin incluir los impuestos aplicables.",
        ),
      ]),
      section("Alcance del trabajo", [
        p(
          "El estudio prestará los servicios descritos en tu propuesta con esmero, discreción y criterio profesional. Cuando solicites trabajo más allá de ese alcance, lo acordaremos — junto con cualquier honorario adicional — por escrito antes de proceder.",
        ),
        p(
          "Recomendaremos proveedores que conocemos y en los que confiamos, pero el contrato por los servicios de cada proveedor es entre tú y ese proveedor, salvo que tu propuesta indique lo contrario. Los coordinamos; no los empleamos.",
        ),
      ]),
      section("Tus responsabilidades", [
        p("Para que podamos hacer nuestro mejor trabajo, te pedimos que:"),
        ...bullets([
          "Proporciones información precisa sobre tus invitados, tradiciones y requisitos, y nos informes con prontitud de cualquier cambio.",
          "Tomes decisiones y aprobaciones dentro de los plazos que acordemos, para que la planificación siga su curso.",
          "Cumplas con los hitos de pago a tiempo.",
          "Trates al equipo del estudio y a todos los proveedores con cortesía y respeto.",
        ]),
      ]),
      section("Cambios y aplazamiento", [
        p(
          "Las bodas cambian, y lo tenemos previsto. Si deseas cambiar tu fecha, haremos todo lo posible por trasladar tu encargo, sujeto a la disponibilidad del estudio y de tus proveedores. Las sumas ya pagadas a los proveedores se rigen por los términos propios de cada proveedor.",
        ),
        callout(
          "Vivimos el 2020 con cada pareja de nuestro calendario. Siempre intentaremos mover una boda antes que cancelarla.",
        ),
      ]),
      section("Cancelación", [
        p(
          "Cualquiera de las partes puede poner fin al encargo por escrito. Si cancelas:",
        ),
        ...bullets([
          "El anticipo inicial no es reembolsable.",
          "Los honorarios por el trabajo realizado hasta la fecha de cancelación son pagaderos.",
          "Los términos de cancelación de los proveedores se aplican por separado, según los fije cada proveedor.",
        ]),
        p(
          "Si el estudio se viera obligado a retirarse — algo poco frecuente y que nunca se hace a la ligera — reembolsaremos los honorarios de planificación pagados por trabajo aún no realizado y te ayudaremos a hacer la transición a otra planificadora cuando podamos.",
        ),
      ]),
      section("Fuerza mayor", [
        p(
          "Ninguna de las partes será responsable del incumplimiento causado por hechos fuera de su control razonable — incluidos el clima, los desastres naturales, los huracanes, las pandemias, las restricciones gubernamentales o los disturbios civiles. En tales casos trabajaremos contigo para aplazar, adaptar o reubicar la boda, y nuestro deber es actuar de buena fe, no garantizar lo imposible.",
        ),
      ]),
      section("Responsabilidad", [
        p(
          "La responsabilidad total del estudio en virtud del acuerdo se limita a los honorarios de planificación que nos hayas pagado. No somos responsables de los actos, omisiones o fallos de los proveedores independientes, ni de pérdidas indirectas o consecuentes.",
        ),
        p(
          "Nada en estos términos limita la responsabilidad por fallecimiento o lesiones personales causados por negligencia, por fraude, o por aquello que no pueda limitarse por ley.",
        ),
      ]),
      section("Fotografía y confidencialidad", [
        p(
          "Tu boda es tuya. No la fotografiaremos para nuestro propio uso, ni la publicaremos, ni la compartiremos con la prensa sin tu permiso explícito por escrito. Tratamos los detalles de cada boda — tus nombres, tus invitados, tus celebraciones — como confidenciales, y esperamos la misma discreción a cambio respecto a los métodos del estudio y las relaciones con los proveedores.",
        ),
      ]),
      section("Propiedad intelectual", [
        p(
          "Los diseños, planes, paneles de inspiración y documentos creados por el estudio para tu boda siguen siendo propiedad intelectual del estudio hasta que se pague el saldo final, momento en el que recibes una licencia para usarlos para tu boda. El estudio conserva el derecho sobre sus métodos, plantillas y procesos de trabajo.",
        ),
      ]),
      section("Legislación aplicable", [
        p(
          "Estos términos se rigen por las leyes de la República Dominicana. Cualquier controversia se abordará primero mediante un diálogo de buena fe entre tú y el estudio; cuando ello no la resuelva, los tribunales de la República Dominicana tendrán jurisdicción.",
        ),
        p(
          "Para cualquier pregunta sobre estos términos, escribe a [hello@greciamejia.com](mailto:hello@greciamejia.com) o contáctanos a través de nuestra [página de contacto](/contact).",
        ),
      ]),
    ],
  },

  fr: {
    hero: {
      eyebrow: "Légal · Conditions",
      title: "Conditions",
      titleItalic: "générales.",
      deck: "L'accord entre vous et le studio — écrit pour être lu, non pour être dissimulé. Des conditions claires pour une relation fondée sur la confiance.",
    },
    meta: { updated: "janvier 2026", effective: "1er janvier 2026" },
    intro:
      "Ces conditions définissent la manière dont le studio travaille avec vous : comment un engagement commence, ce dont chacun est responsable, et ce qui se passe lorsque les projets changent. Elles font partie de votre accord avec Grecia Mejía Weddings.",
    helpNote:
      "Des questions sur cet accord ? Écrivez au studio et Grecia ou son équipe vous répondront personnellement.",
    closing: "Au nom du studio · Punta Cana, janvier 2026",
    sections: [
      section("Définitions", [
        p(
          "Dans ces conditions, les mots suivants ont les significations suivantes :",
        ),
        defs([
          [
            "Le studio",
            "Grecia Mejía Weddings, y compris son équipe, ses curatrices et ses représentants autorisés.",
          ],
          [
            "Le client",
            "Le couple ou la personne qui engage le studio pour organiser un mariage, ainsi que toute personne autorisée à agir en son nom.",
          ],
          [
            "Services",
            "Le travail de planification, de coordination, de conception et de réalisation défini dans votre proposition signée.",
          ],
          [
            "Prestataires",
            "Les lieux, officiants, traiteurs, photographes et autres spécialistes engagés pour votre mariage.",
          ],
          [
            "L'accord",
            "Votre proposition signée et ces conditions, qui se lisent comme un seul document.",
          ],
        ]),
      ]),
      section("Engager le studio", [
        p(
          "Le studio accepte un nombre limité de mariages par année civile. Un engagement ne commence que lorsqu'une proposition signée et l'acompte initial sont reçus. Tant que les deux ne sont pas en main, aucune date n'est réservée et aucun travail n'est garanti.",
        ),
        p(
          "Une consultation, un devis ou une date provisoire ne constituent pas un engagement contraignant, et nous pouvons continuer à évoquer la même date avec d'autres couples jusqu'à ce que votre accord soit signé.",
        ),
      ]),
      section("Honoraires & paiement", [
        p(
          "Nos honoraires sont définis dans votre proposition et structurés comme suit :",
        ),
        ...bullets([
          "**Acompte initial** — dû à la signature, pour réserver votre date et commencer le travail. Cet acompte n'est pas remboursable.",
          "**Paiements échelonnés** — facturés selon des jalons convenus tout au long de la période de planification.",
          "**Solde final** — dû au plus tard trente jours avant le mariage.",
        ]),
        p(
          "Les coûts des prestataires, les frais de lieu, les déplacements et les charges de tiers sont distincts des honoraires de planification du studio et sont payables directement ou par l'intermédiaire du studio, selon votre proposition. Tous les honoraires sont indiqués hors taxes applicables.",
        ),
      ]),
      section("Étendue du travail", [
        p(
          "Le studio fournira les services décrits dans votre proposition avec soin, discrétion et jugement professionnel. Lorsque vous demandez un travail au-delà de cette étendue, nous le conviendrons — ainsi que tout honoraire supplémentaire — par écrit avant de poursuivre.",
        ),
        p(
          "Nous recommanderons des prestataires que nous connaissons et en qui nous avons confiance, mais le contrat pour les services de chaque prestataire est conclu entre vous et ce prestataire, sauf indication contraire dans votre proposition. Nous les coordonnons ; nous ne les employons pas.",
        ),
      ]),
      section("Vos responsabilités", [
        p(
          "Afin que nous puissions faire notre meilleur travail, nous vous demandons de :",
        ),
        ...bullets([
          "Fournir des informations exactes sur vos invités, vos traditions et vos exigences, et nous signaler rapidement tout changement.",
          "Prendre vos décisions et approbations dans les délais convenus, afin que la planification reste dans les temps.",
          "Respecter les échéances de paiement.",
          "Traiter l'équipe du studio et tous les prestataires avec courtoisie et respect.",
        ]),
      ]),
      section("Modifications & report", [
        p(
          "Les mariages évoluent, et nous l'anticipons. Si vous souhaitez changer votre date, nous ferons tout notre possible pour déplacer votre engagement, sous réserve de la disponibilité du studio et de vos prestataires. Les sommes déjà versées aux prestataires sont régies par les conditions propres à chacun.",
        ),
        callout(
          "Nous avons traversé 2020 avec chaque couple de notre calendrier. Nous essaierons toujours de déplacer un mariage avant de l'annuler.",
        ),
      ]),
      section("Annulation", [
        p(
          "Chaque partie peut mettre fin à l'engagement par écrit. Si vous annulez :",
        ),
        ...bullets([
          "L'acompte initial n'est pas remboursable.",
          "Les honoraires pour le travail réalisé jusqu'à la date d'annulation sont dus.",
          "Les conditions d'annulation des prestataires s'appliquent séparément, telles que fixées par chacun.",
        ]),
        p(
          "Si le studio devait se retirer — ce qui est rare et jamais fait à la légère — nous rembourserons les honoraires de planification versés pour un travail non encore effectué et vous aiderons à passer à un autre planificateur dans la mesure du possible.",
        ),
      ]),
      section("Force majeure", [
        p(
          "Aucune des parties n'est responsable d'un défaut d'exécution causé par des événements échappant à son contrôle raisonnable — notamment les intempéries, les catastrophes naturelles, les ouragans, les pandémies, les restrictions gouvernementales ou les troubles civils. Dans de tels cas, nous travaillerons avec vous pour reporter, adapter ou relocaliser le mariage, et notre devoir est d'agir de bonne foi, non de garantir l'impossible.",
        ),
      ]),
      section("Responsabilité", [
        p(
          "La responsabilité totale du studio au titre de l'accord est limitée aux honoraires de planification que vous nous avez versés. Nous ne sommes pas responsables des actes, omissions ou défaillances des prestataires indépendants, ni des pertes indirectes ou consécutives.",
        ),
        p(
          "Rien dans ces conditions ne limite la responsabilité en cas de décès ou de blessure corporelle causés par négligence, de fraude, ou de tout ce qui ne peut être limité par la loi.",
        ),
      ]),
      section("Photographie & confidentialité", [
        p(
          "Votre mariage vous appartient. Nous ne le photographierons pas pour notre propre usage, ne le publierons pas et ne le partagerons pas avec la presse sans votre autorisation écrite explicite. Nous traitons les détails de chaque mariage — vos noms, vos invités, vos célébrations — comme confidentiels, et nous attendons la même discrétion en retour concernant les méthodes du studio et les relations avec les prestataires.",
        ),
      ]),
      section("Propriété intellectuelle", [
        p(
          "Les conceptions, plans, planches d'ambiance et documents créés par le studio pour votre mariage restent la propriété intellectuelle du studio jusqu'au paiement du solde final, après quoi vous recevez une licence pour les utiliser pour votre mariage. Le studio conserve les droits sur ses méthodes, modèles et processus de travail.",
        ),
      ]),
      section("Droit applicable", [
        p(
          "Ces conditions sont régies par les lois de la République dominicaine. Tout litige sera d'abord traité par une discussion de bonne foi entre vous et le studio ; à défaut de résolution, les tribunaux de la République dominicaine sont compétents.",
        ),
        p(
          "Pour toute question sur ces conditions, écrivez à [hello@greciamejia.com](mailto:hello@greciamejia.com) ou contactez-nous via notre [page de contact](/contact).",
        ),
      ]),
    ],
  },

  pt: {
    hero: {
      eyebrow: "Legal · Termos",
      title: "Termos e",
      titleItalic: "Condições.",
      deck: "O acordo entre você e o estúdio — escrito para ser lido, não para ser escondido. Termos claros para uma relação construída sobre a confiança.",
    },
    meta: { updated: "janeiro de 2026", effective: "1 de janeiro de 2026" },
    intro:
      "Estes termos estabelecem como o estúdio trabalha consigo: como começa um compromisso, pelo que cada um é responsável e o que acontece quando os planos mudam. Fazem parte do seu acordo com a Grecia Mejía Weddings.",
    helpNote:
      "Dúvidas sobre este acordo? Escreva ao estúdio e a Grecia ou a sua equipa responderão pessoalmente.",
    closing: "Em nome do estúdio · Punta Cana, janeiro de 2026",
    sections: [
      section("Definições", [
        p(
          "Nestes termos, as seguintes palavras têm os seguintes significados:",
        ),
        defs([
          [
            "O estúdio",
            "Grecia Mejía Weddings, incluindo a sua equipa, curadoras e representantes autorizados.",
          ],
          [
            "O cliente",
            "O casal ou a pessoa que contrata o estúdio para planear um casamento, e qualquer pessoa autorizada a agir em seu nome.",
          ],
          [
            "Serviços",
            "O trabalho de planeamento, coordenação, design e execução estabelecido na sua proposta assinada.",
          ],
          [
            "Fornecedores",
            "Os locais, celebrantes, empresas de catering, fotógrafos e demais especialistas contratados para o seu casamento.",
          ],
          [
            "O acordo",
            "A sua proposta assinada juntamente com estes termos, que se leem como um só documento.",
          ],
        ]),
      ]),
      section("Contratar o estúdio", [
        p(
          "O estúdio aceita um número limitado de casamentos por ano civil. Um compromisso começa apenas quando uma proposta assinada e o adiantamento inicial são recebidos. Até termos ambos, nenhuma data é reservada e nenhum trabalho é garantido.",
        ),
        p(
          "Uma consulta, um orçamento ou uma data provisória não constituem um compromisso vinculativo, e podemos continuar a falar dessa mesma data com outros casais até o seu acordo estar assinado.",
        ),
      ]),
      section("Honorários e pagamento", [
        p(
          "Os nossos honorários são estabelecidos na sua proposta e estruturam-se da seguinte forma:",
        ),
        ...bullets([
          "**Adiantamento inicial** — devido na assinatura, para reservar a sua data e iniciar o trabalho. Este adiantamento não é reembolsável.",
          "**Pagamentos faseados** — faturados de acordo com marcos combinados ao longo do período de planeamento.",
          "**Saldo final** — devido o mais tardar trinta dias antes do casamento.",
        ]),
        p(
          "Os custos dos fornecedores, as taxas dos locais, as viagens e os encargos de terceiros são separados dos honorários de planeamento do estúdio e são pagáveis diretamente ou através do estúdio, conforme indicado na sua proposta. Todos os honorários são apresentados sem os impostos aplicáveis.",
        ),
      ]),
      section("Âmbito do trabalho", [
        p(
          "O estúdio prestará os serviços descritos na sua proposta com cuidado, discrição e juízo profissional. Quando solicitar trabalho além desse âmbito, acordá-lo-emos — bem como qualquer honorário adicional — por escrito antes de prosseguir.",
        ),
        p(
          "Recomendaremos fornecedores que conhecemos e em quem confiamos, mas o contrato pelos serviços de cada fornecedor é entre você e esse fornecedor, salvo indicação em contrário na sua proposta. Coordenamo-los; não os empregamos.",
        ),
      ]),
      section("As suas responsabilidades", [
        p("Para que possamos fazer o nosso melhor trabalho, pedimos-lhe que:"),
        ...bullets([
          "Forneça informações precisas sobre os seus convidados, tradições e requisitos, e nos informe prontamente de qualquer alteração.",
          "Tome decisões e aprovações dentro dos prazos que combinarmos, para que o planeamento siga a tempo.",
          "Cumpra os marcos de pagamento atempadamente.",
          "Trate a equipa do estúdio e todos os fornecedores com cortesia e respeito.",
        ]),
      ]),
      section("Alterações e adiamento", [
        p(
          "Os casamentos mudam, e contamos com isso. Se desejar alterar a sua data, faremos tudo o que for possível para mover o seu compromisso, sujeito à disponibilidade do estúdio e dos seus fornecedores. As quantias já pagas aos fornecedores regem-se pelos termos próprios de cada um.",
        ),
        callout(
          "Vivemos 2020 com cada casal do nosso calendário. Tentaremos sempre mover um casamento antes de o cancelar.",
        ),
      ]),
      section("Cancelamento", [
        p(
          "Qualquer das partes pode terminar o compromisso por escrito. Se cancelar:",
        ),
        ...bullets([
          "O adiantamento inicial não é reembolsável.",
          "Os honorários pelo trabalho realizado até à data do cancelamento são devidos.",
          "Os termos de cancelamento dos fornecedores aplicam-se separadamente, conforme definido por cada um.",
        ]),
        p(
          "Se o estúdio tiver de se retirar — algo raro e nunca feito de ânimo leve — reembolsaremos os honorários de planeamento pagos por trabalho ainda não realizado e ajudá-lo-emos a transitar para outro planeador sempre que pudermos.",
        ),
      ]),
      section("Força maior", [
        p(
          "Nenhuma das partes é responsável pelo incumprimento causado por eventos fora do seu controlo razoável — incluindo o clima, catástrofes naturais, furacões, pandemias, restrições governamentais ou perturbações civis. Nesses casos, trabalharemos consigo para adiar, adaptar ou mudar o local do casamento, e o nosso dever é agir de boa-fé, não garantir o impossível.",
        ),
      ]),
      section("Responsabilidade", [
        p(
          "A responsabilidade total do estúdio ao abrigo do acordo limita-se aos honorários de planeamento que nos tiver pago. Não somos responsáveis pelos atos, omissões ou falhas de fornecedores independentes, nem por perdas indiretas ou consequentes.",
        ),
        p(
          "Nada nestes termos limita a responsabilidade por morte ou lesão pessoal causada por negligência, por fraude, ou por aquilo que não possa ser limitado por lei.",
        ),
      ]),
      section("Fotografia e confidencialidade", [
        p(
          "O seu casamento é seu. Não o fotografaremos para uso próprio, nem o publicaremos, nem o partilharemos com a imprensa sem a sua autorização explícita por escrito. Tratamos os detalhes de cada casamento — os seus nomes, os seus convidados, as suas celebrações — como confidenciais, e esperamos a mesma discrição em troca relativamente aos métodos do estúdio e às relações com os fornecedores.",
        ),
      ]),
      section("Propriedade intelectual", [
        p(
          "Os desenhos, planos, painéis de inspiração e documentos criados pelo estúdio para o seu casamento permanecem propriedade intelectual do estúdio até ao pagamento do saldo final, momento em que recebe uma licença para os utilizar no seu casamento. O estúdio mantém os direitos sobre os seus métodos, modelos e processos de trabalho.",
        ),
      ]),
      section("Lei aplicável", [
        p(
          "Estes termos regem-se pelas leis da República Dominicana. Qualquer litígio será primeiro abordado através de um diálogo de boa-fé entre você e o estúdio; quando tal não o resolver, os tribunais da República Dominicana têm jurisdição.",
        ),
        p(
          "Para qualquer questão sobre estes termos, escreva para [hello@greciamejia.com](mailto:hello@greciamejia.com) ou contacte-nos através da nossa [página de contacto](/contact).",
        ),
      ]),
    ],
  },

  de: {
    hero: {
      eyebrow: "Rechtliches · AGB",
      title: "Allgemeine",
      titleItalic: "Geschäftsbedingungen.",
      deck: "Die Vereinbarung zwischen Ihnen und dem Studio — geschrieben, um gelesen zu werden, nicht um verborgen zu bleiben. Klare Bedingungen für eine auf Vertrauen gebaute Beziehung.",
    },
    meta: { updated: "Januar 2026", effective: "1. Januar 2026" },
    intro:
      "Diese Bedingungen legen fest, wie das Studio mit Ihnen arbeitet: wie eine Beauftragung beginnt, wofür jeder von uns verantwortlich ist und was geschieht, wenn sich Pläne ändern. Sie sind Teil Ihrer Vereinbarung mit Grecia Mejía Weddings.",
    helpNote:
      "Fragen zu dieser Vereinbarung? Schreiben Sie dem Studio, und Grecia oder ihr Team antworten persönlich.",
    closing: "Im Namen des Studios · Punta Cana, Januar 2026",
    sections: [
      section("Begriffsbestimmungen", [
        p(
          "In diesen Bedingungen haben die folgenden Wörter die folgende Bedeutung:",
        ),
        defs([
          [
            "Das Studio",
            "Grecia Mejía Weddings, einschließlich seines Teams, seiner Kuratorinnen und bevollmächtigten Vertreter.",
          ],
          [
            "Der Kunde",
            "Das Paar oder die Person, die das Studio mit der Planung einer Hochzeit beauftragt, sowie jede befugte Person, die in ihrem Namen handelt.",
          ],
          [
            "Leistungen",
            "Die in Ihrem unterzeichneten Angebot festgelegte Planungs-, Koordinations-, Gestaltungs- und Durchführungsarbeit.",
          ],
          [
            "Dienstleister",
            "Die Locations, Trauredner, Caterer, Fotografen und weiteren Spezialisten, die für Ihre Hochzeit engagiert werden.",
          ],
          [
            "Die Vereinbarung",
            "Ihr unterzeichnetes Angebot zusammen mit diesen Bedingungen, die als ein Dokument zu lesen sind.",
          ],
        ]),
      ]),
      section("Beauftragung des Studios", [
        p(
          "Das Studio nimmt pro Kalenderjahr eine begrenzte Anzahl von Hochzeiten an. Eine Beauftragung beginnt erst, wenn ein unterzeichnetes Angebot und die Anzahlung eingegangen sind. Bis beides vorliegt, ist kein Datum reserviert und keine Arbeit garantiert.",
        ),
        p(
          "Eine Beratung, ein Angebot oder ein vorläufiges Datum stellen keine verbindliche Beauftragung dar, und wir können dasselbe Datum mit anderen Paaren weiter besprechen, bis Ihre Vereinbarung unterzeichnet ist.",
        ),
      ]),
      section("Honorar & Zahlung", [
        p(
          "Unsere Honorare sind in Ihrem Angebot festgelegt und wie folgt strukturiert:",
        ),
        ...bullets([
          "**Anzahlung** — fällig bei Unterzeichnung, um Ihr Datum zu reservieren und mit der Arbeit zu beginnen. Diese Anzahlung ist nicht erstattungsfähig.",
          "**Teilzahlungen** — in Rechnung gestellt anhand vereinbarter Meilensteine über den Planungszeitraum.",
          "**Restbetrag** — fällig spätestens dreißig Tage vor der Hochzeit.",
        ]),
        p(
          "Kosten für Dienstleister, Location-Gebühren, Reisen und Drittkosten sind vom Planungshonorar des Studios getrennt und werden direkt oder über das Studio gezahlt, wie in Ihrem Angebot angegeben. Alle Honorare verstehen sich zuzüglich anfallender Steuern.",
        ),
      ]),
      section("Leistungsumfang", [
        p(
          "Das Studio erbringt die in Ihrem Angebot beschriebenen Leistungen mit Sorgfalt, Diskretion und professionellem Urteilsvermögen. Wenn Sie Arbeiten über diesen Umfang hinaus wünschen, vereinbaren wir diese — sowie jedes zusätzliche Honorar — vor der Durchführung schriftlich.",
        ),
        p(
          "Wir empfehlen Dienstleister, die wir kennen und denen wir vertrauen, doch der Vertrag über die Leistungen jedes Dienstleisters besteht zwischen Ihnen und diesem Dienstleister, sofern Ihr Angebot nichts anderes vorsieht. Wir koordinieren sie; wir beschäftigen sie nicht.",
        ),
      ]),
      section("Ihre Verantwortung", [
        p("Damit wir unsere beste Arbeit leisten können, bitten wir Sie:"),
        ...bullets([
          "Genaue Angaben zu Ihren Gästen, Traditionen und Anforderungen zu machen und uns Änderungen umgehend mitzuteilen.",
          "Entscheidungen und Freigaben innerhalb der vereinbarten Fristen zu treffen, damit die Planung im Zeitplan bleibt.",
          "Zahlungstermine pünktlich einzuhalten.",
          "Das Studio-Team und alle Dienstleister mit Höflichkeit und Respekt zu behandeln.",
        ]),
      ]),
      section("Änderungen & Verschiebung", [
        p(
          "Hochzeiten ändern sich, und wir planen dafür. Wenn Sie Ihr Datum ändern möchten, tun wir alles Mögliche, um Ihre Beauftragung zu verschieben, vorbehaltlich der Verfügbarkeit des Studios und Ihrer Dienstleister. Bereits an Dienstleister gezahlte Beträge unterliegen den Bedingungen des jeweiligen Dienstleisters.",
        ),
        callout(
          "Wir haben 2020 mit jedem Paar in unserem Kalender durchlebt. Wir werden immer versuchen, eine Hochzeit zu verschieben, bevor wir sie absagen.",
        ),
      ]),
      section("Stornierung", [
        p(
          "Jede Partei kann die Beauftragung schriftlich beenden. Wenn Sie stornieren:",
        ),
        ...bullets([
          "Ist die Anzahlung nicht erstattungsfähig.",
          "Sind Honorare für bis zum Stornierungsdatum geleistete Arbeit zu zahlen.",
          "Gelten die Stornierungsbedingungen der Dienstleister gesondert, wie von jedem festgelegt.",
        ]),
        p(
          "Sollte das Studio zurücktreten müssen — was selten und nie leichtfertig geschieht — erstatten wir gezahlte Planungshonorare für noch nicht erbrachte Arbeit und helfen Ihnen, wo möglich, beim Wechsel zu einer anderen Planerin.",
        ),
      ]),
      section("Höhere Gewalt", [
        p(
          "Keine Partei haftet für eine Nichterfüllung aufgrund von Ereignissen außerhalb ihrer angemessenen Kontrolle — einschließlich Wetter, Naturkatastrophen, Hurrikan, Pandemie, behördlicher Beschränkung oder ziviler Unruhen. In solchen Fällen arbeiten wir mit Ihnen daran, die Hochzeit zu verschieben, anzupassen oder zu verlegen, und unsere Pflicht ist es, nach Treu und Glauben zu handeln, nicht das Unmögliche zu garantieren.",
        ),
      ]),
      section("Haftung", [
        p(
          "Die Gesamthaftung des Studios aus der Vereinbarung ist auf die an uns gezahlten Planungshonorare begrenzt. Wir haften nicht für Handlungen, Unterlassungen oder Versäumnisse unabhängiger Dienstleister noch für indirekte Schäden oder Folgeschäden.",
        ),
        p(
          "Nichts in diesen Bedingungen beschränkt die Haftung für Tod oder Körperverletzung durch Fahrlässigkeit, für Betrug oder für alles, was gesetzlich nicht beschränkt werden kann.",
        ),
      ]),
      section("Fotografie & Vertraulichkeit", [
        p(
          "Ihre Hochzeit gehört Ihnen. Wir werden sie ohne Ihre ausdrückliche schriftliche Erlaubnis nicht für eigene Zwecke fotografieren, veröffentlichen oder an die Presse weitergeben. Wir behandeln die Details jeder Hochzeit — Ihre Namen, Ihre Gäste, Ihre Feiern — vertraulich und erwarten im Gegenzug dieselbe Diskretion bezüglich der Methoden des Studios und der Beziehungen zu Dienstleistern.",
        ),
      ]),
      section("Geistiges Eigentum", [
        p(
          "Vom Studio für Ihre Hochzeit erstellte Entwürfe, Pläne, Moodboards und Dokumente bleiben bis zur Zahlung des Restbetrags geistiges Eigentum des Studios; zu diesem Zeitpunkt erhalten Sie eine Lizenz, sie für Ihre Hochzeit zu nutzen. Das Studio behält die Rechte an seinen Methoden, Vorlagen und Arbeitsprozessen.",
        ),
      ]),
      section("Anwendbares Recht", [
        p(
          "Diese Bedingungen unterliegen dem Recht der Dominikanischen Republik. Jede Streitigkeit wird zunächst durch ein Gespräch nach Treu und Glauben zwischen Ihnen und dem Studio behandelt; wo dies sie nicht löst, sind die Gerichte der Dominikanischen Republik zuständig.",
        ),
        p(
          "Bei Fragen zu diesen Bedingungen schreiben Sie an [hello@greciamejia.com](mailto:hello@greciamejia.com) oder erreichen Sie uns über unsere [Kontaktseite](/contact).",
        ),
      ]),
    ],
  },

  it: {
    hero: {
      eyebrow: "Legale · Termini",
      title: "Termini e",
      titleItalic: "Condizioni.",
      deck: "L'accordo tra te e lo studio — scritto per essere letto, non per essere nascosto. Termini chiari per una relazione costruita sulla fiducia.",
    },
    meta: { updated: "gennaio 2026", effective: "1 gennaio 2026" },
    intro:
      "Questi termini stabiliscono come lo studio lavora con te: come inizia un incarico, di cosa è responsabile ciascuno e cosa accade quando i piani cambiano. Fanno parte del tuo accordo con Grecia Mejía Weddings.",
    helpNote:
      "Domande su questo accordo? Scrivi allo studio e Grecia o il suo team ti risponderanno di persona.",
    closing: "Per conto dello studio · Punta Cana, gennaio 2026",
    sections: [
      section("Definizioni", [
        p(
          "In questi termini, le seguenti parole hanno i seguenti significati:",
        ),
        defs([
          [
            "Lo studio",
            "Grecia Mejía Weddings, incluso il suo team, le sue curatrici e i rappresentanti autorizzati.",
          ],
          [
            "Il cliente",
            "La coppia o la persona che incarica lo studio di organizzare un matrimonio, e qualsiasi persona autorizzata ad agire per suo conto.",
          ],
          [
            "Servizi",
            "Il lavoro di pianificazione, coordinamento, progettazione e realizzazione stabilito nella tua proposta firmata.",
          ],
          [
            "Fornitori",
            "Le location, i celebranti, i catering, i fotografi e gli altri specialisti ingaggiati per il tuo matrimonio.",
          ],
          [
            "L'accordo",
            "La tua proposta firmata insieme a questi termini, che si leggono come un unico documento.",
          ],
        ]),
      ]),
      section("Incaricare lo studio", [
        p(
          "Lo studio accetta un numero limitato di matrimoni per ogni anno solare. Un incarico inizia solo quando vengono ricevuti una proposta firmata e l'acconto iniziale. Finché non disponiamo di entrambi, nessuna data è riservata e nessun lavoro è garantito.",
        ),
        p(
          "Una consulenza, un preventivo o una data provvisoria non costituiscono un incarico vincolante, e possiamo continuare a discutere la stessa data con altre coppie finché il tuo accordo non è firmato.",
        ),
      ]),
      section("Onorari e pagamento", [
        p(
          "I nostri onorari sono stabiliti nella tua proposta e sono strutturati come segue:",
        ),
        ...bullets([
          "**Acconto iniziale** — dovuto alla firma, per riservare la tua data e iniziare il lavoro. Questo acconto non è rimborsabile.",
          "**Pagamenti a tappe** — fatturati in base a traguardi concordati lungo il periodo di pianificazione.",
          "**Saldo finale** — dovuto entro e non oltre trenta giorni prima del matrimonio.",
        ]),
        p(
          "I costi dei fornitori, le tariffe delle location, i viaggi e gli oneri di terzi sono separati dall'onorario di pianificazione dello studio e sono pagabili direttamente o tramite lo studio, come indicato nella tua proposta. Tutti gli onorari sono indicati al netto delle imposte applicabili.",
        ),
      ]),
      section("Ambito del lavoro", [
        p(
          "Lo studio fornirà i servizi descritti nella tua proposta con cura, discrezione e giudizio professionale. Quando richiedi un lavoro oltre tale ambito, lo concorderemo — insieme a qualsiasi onorario aggiuntivo — per iscritto prima di procedere.",
        ),
        p(
          "Raccomanderemo fornitori che conosciamo e di cui ci fidiamo, ma il contratto per i servizi di ciascun fornitore è tra te e quel fornitore, salvo che la tua proposta non disponga diversamente. Li coordiniamo; non li impieghiamo.",
        ),
      ]),
      section("Le tue responsabilità", [
        p("Affinché possiamo fare il nostro lavoro migliore, ti chiediamo di:"),
        ...bullets([
          "Fornire informazioni accurate su invitati, tradizioni ed esigenze, e comunicarci tempestivamente ogni cambiamento.",
          "Prendere decisioni e approvazioni entro i tempi concordati, così che la pianificazione resti nei tempi.",
          "Rispettare puntualmente le scadenze di pagamento.",
          "Trattare il team dello studio e tutti i fornitori con cortesia e rispetto.",
        ]),
      ]),
      section("Modifiche e rinvio", [
        p(
          "I matrimoni cambiano, e lo mettiamo in conto. Se desideri cambiare la tua data, faremo tutto il possibile per spostare il tuo incarico, fatta salva la disponibilità dello studio e dei tuoi fornitori. Le somme già versate ai fornitori sono regolate dai termini propri di ciascuno.",
        ),
        callout(
          "Abbiamo attraversato il 2020 con ogni coppia del nostro calendario. Cercheremo sempre di spostare un matrimonio prima di annullarlo.",
        ),
      ]),
      section("Cancellazione", [
        p(
          "Ciascuna parte può porre fine all'incarico per iscritto. Se annulli:",
        ),
        ...bullets([
          "L'acconto iniziale non è rimborsabile.",
          "Gli onorari per il lavoro svolto fino alla data di cancellazione sono dovuti.",
          "I termini di cancellazione dei fornitori si applicano separatamente, come stabiliti da ciascuno.",
        ]),
        p(
          "Se lo studio dovesse ritirarsi — cosa rara e mai fatta alla leggera — rimborseremo gli onorari di pianificazione versati per il lavoro non ancora svolto e ti aiuteremo a passare a un'altra organizzatrice ove possibile.",
        ),
      ]),
      section("Forza maggiore", [
        p(
          "Nessuna delle parti è responsabile per la mancata esecuzione causata da eventi al di fuori del proprio ragionevole controllo — inclusi il meteo, le calamità naturali, gli uragani, le pandemie, le restrizioni governative o i disordini civili. In tali casi lavoreremo con te per rinviare, adattare o riallocare il matrimonio, e il nostro dovere è agire in buona fede, non garantire l'impossibile.",
        ),
      ]),
      section("Responsabilità", [
        p(
          "La responsabilità totale dello studio ai sensi dell'accordo è limitata agli onorari di pianificazione che ci hai versato. Non siamo responsabili per atti, omissioni o inadempienze di fornitori indipendenti, né per perdite indirette o consequenziali.",
        ),
        p(
          "Nulla in questi termini limita la responsabilità per morte o lesioni personali causate da negligenza, per frode, o per ciò che non può essere limitato dalla legge.",
        ),
      ]),
      section("Fotografia e riservatezza", [
        p(
          "Il tuo matrimonio è tuo. Non lo fotograferemo per uso nostro, non lo pubblicheremo, né lo condivideremo con la stampa senza il tuo esplicito permesso scritto. Trattiamo i dettagli di ogni matrimonio — i tuoi nomi, i tuoi invitati, le tue celebrazioni — come riservati, e ci aspettiamo la stessa discrezione in cambio riguardo ai metodi dello studio e ai rapporti con i fornitori.",
        ),
      ]),
      section("Proprietà intellettuale", [
        p(
          "Progetti, piani, mood board e documenti creati dallo studio per il tuo matrimonio restano proprietà intellettuale dello studio fino al pagamento del saldo finale, momento in cui ricevi una licenza per utilizzarli per il tuo matrimonio. Lo studio conserva i diritti sui propri metodi, modelli e processi di lavoro.",
        ),
      ]),
      section("Legge applicabile", [
        p(
          "Questi termini sono regolati dalle leggi della Repubblica Dominicana. Ogni controversia sarà dapprima affrontata attraverso un dialogo in buona fede tra te e lo studio; ove ciò non la risolva, i tribunali della Repubblica Dominicana hanno giurisdizione.",
        ),
        p(
          "Per qualsiasi domanda su questi termini, scrivi a [hello@greciamejia.com](mailto:hello@greciamejia.com) o contattaci tramite la nostra [pagina di contatto](/contact).",
        ),
      ]),
    ],
  },
};

function buildDoc(locale: Locale) {
  const c = COPY[locale];
  return {
    hero: c.hero,
    meta: { ...c.meta, appliesTo: APPLIES_TO },
    intro: c.intro,
    helpNote: c.helpNote,
    signatureName: SIGNATURE,
    closing: c.closing,
    sections: c.sections.map((s) =>
      keyed({ heading: s.heading, body: s.body }),
    ),
  };
}

async function run() {
  console.log(`Seeding termsPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "termsPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "termsPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["termsPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} termsPage docs + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
