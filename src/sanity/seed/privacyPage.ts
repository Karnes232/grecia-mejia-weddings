/**
 * Seed the `privacyPage` singleton across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:privacy
 *
 * Idempotent — deterministic IDs + `createOrReplace`. No media doc (the legal
 * hero is purely typographic).
 *
 * ⚠️  The copy below is a realistic brand-voice PLACEHOLDER. Have a lawyer
 * review and adapt it for your jurisdiction and actual data practices before
 * launch. EN mirrors the design handoff (`pages/privacy.jsx`); the rest is
 * translated.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";
import {
  bullets,
  callout,
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

const docId = (locale: Locale) => `privacyPage-${locale}`;

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
      eyebrow: "Legal · Privacy",
      title: "Privacy",
      titleItalic: "Policy.",
      deck: "How the studio collects, uses and protects your personal information — written plainly, because your trust matters more than legal cover.",
    },
    meta: { updated: "January 2026", effective: "1 January 2026" },
    intro:
      "At Grecia Mejía Weddings, we hold your information the way we hold your wedding: privately, carefully, and only for as long as it serves you. This policy explains exactly what we collect and what you can ask of us.",
    helpNote:
      "Questions about this policy? Write to the studio and Grecia or her team will respond personally.",
    closing: "On behalf of the studio · Punta Cana, January 2026",
    sections: [
      section("Who we are", [
        p(
          'Grecia Mejía Weddings ("the studio," "we," "us") is a luxury wedding planning practice registered in the Dominican Republic, with studios in Punta Cana and Milan. We curate destination and multicultural weddings worldwide.',
        ),
        p(
          "This policy explains what personal information we collect when you contact us or use **greciamejia.com**, how we use it, and the rights you hold over it. We are the data controller responsible for your information.",
        ),
      ]),
      section("Information we collect", [
        p(
          "We collect only what we need to respond to an enquiry and, where you become a client, to plan your wedding. This includes:",
        ),
        ...bullets([
          "**Contact details** — name, email address, telephone and WhatsApp number, country of residence.",
          "**Wedding details** — desired destination, estimated date, guest count, wedding type or tradition, estimated budget, and anything else you choose to tell us in your message.",
          "**Correspondence** — the content of emails, messages and consultation notes exchanged with the studio.",
          "**Technical data** — limited, anonymised analytics about how the website is used (pages visited, approximate region, device type).",
        ]),
        p(
          "We do not knowingly collect information from anyone under the age of eighteen, and we never purchase or rent contact lists.",
        ),
      ]),
      section("How we use your information", [
        p("Your information is used for a small, defined set of purposes:"),
        ...bullets([
          "To respond to your consultation enquiry — personally, usually by Grecia or a senior curator.",
          "To plan, coordinate and deliver your wedding, where you become a client.",
          "To communicate with the specialists, venues and vendors required for your wedding — sharing only what each needs to know.",
          "To meet our legal, accounting and contractual obligations.",
        ]),
        p(
          "We will never use your wedding details, photographs or story for marketing or press without your explicit, written permission.",
        ),
      ]),
      section("The legal basis", [
        p(
          "We process your information on the following bases: **consent** (when you submit an enquiry), **contract** (when you engage the studio to plan your wedding), and **legitimate interest** (to operate the studio and respond to you). You may withdraw consent at any time.",
        ),
      ]),
      section("Who we share it with", [
        p(
          "We are a small studio and we treat your information as privately as we treat your wedding. We share it only where necessary:",
        ),
        ...bullets([
          "**Specialists & vendors** — officiants, caterers, venues, photographers and similar, and only the details each requires.",
          "**Professional advisers** — our accountants and legal advisers, where required.",
          "**Service providers** — secure email, document storage and scheduling tools that help us run the studio.",
        ]),
        callout(
          "We never sell your personal information. We never share it with advertisers. Your wedding is not content unless you decide it is.",
        ),
      ]),
      section("International transfers", [
        p(
          "Because we plan weddings across continents, your information may be processed in the Dominican Republic, the European Union, and the country of your wedding. Wherever it travels, we apply the same standard of care described in this policy and use appropriate safeguards for any transfer.",
        ),
      ]),
      section("How long we keep it", [
        p(
          "If you enquire but do not become a client, we keep your correspondence for up to **twenty-four months**, then delete it. If you become a client, we keep your records for the duration of the engagement and for up to **seven years** afterward, to meet legal and accounting obligations. You may ask us to delete your information sooner, subject to those obligations.",
        ),
      ]),
      section("Your rights", [
        p(
          "You hold the following rights over your personal information, and we will honour any request within thirty days:",
        ),
        ...bullets([
          "**Access** — a copy of the information we hold about you.",
          "**Correction** — to fix anything inaccurate or incomplete.",
          "**Erasure** — to have your information deleted, subject to legal limits.",
          "**Restriction & objection** — to limit or object to how we use it.",
          "**Portability** — to receive your information in a portable format.",
        ]),
        p(
          "To exercise any of these, write to [privacy@greciamejia.com](mailto:privacy@greciamejia.com).",
        ),
      ]),
      section("Cookies & analytics", [
        p(
          "Our website uses a minimal set of cookies — those strictly necessary for the site to function, and anonymised analytics to understand how the site is used. We do not use advertising or tracking cookies. You can disable cookies in your browser settings without losing access to the site.",
        ),
      ]),
      section("Security", [
        p(
          "We protect your information with encrypted storage, access controls limited to the studio team, and secure communication tools. No system is perfectly secure, but we treat your details with the same discretion we bring to every wedding, and we will notify you promptly of any breach that affects you.",
        ),
      ]),
      section("Changes & contact", [
        p(
          'We may update this policy from time to time. The "last updated" date at the top of this page always reflects the current version. Material changes will be communicated to active clients directly.',
        ),
        p(
          "For any question about your privacy, write to [privacy@greciamejia.com](mailto:privacy@greciamejia.com) or reach the studio through our [contact page](/contact). Grecia or a member of the team will respond personally.",
        ),
      ]),
    ],
  },

  es: {
    hero: {
      eyebrow: "Legal · Privacidad",
      title: "Política de",
      titleItalic: "Privacidad.",
      deck: "Cómo el estudio recopila, usa y protege tu información personal — escrito con claridad, porque tu confianza importa más que la cobertura legal.",
    },
    meta: { updated: "enero de 2026", effective: "1 de enero de 2026" },
    intro:
      "En Grecia Mejía Weddings, guardamos tu información como guardamos tu boda: con privacidad, con cuidado y solo durante el tiempo que te sirva. Esta política explica exactamente qué recopilamos y qué puedes pedirnos.",
    helpNote:
      "¿Preguntas sobre esta política? Escribe al estudio y Grecia o su equipo te responderán personalmente.",
    closing: "En nombre del estudio · Punta Cana, enero de 2026",
    sections: [
      section("Quiénes somos", [
        p(
          "Grecia Mejía Weddings («el estudio», «nosotros») es una práctica de planificación de bodas de lujo registrada en la República Dominicana, con estudios en Punta Cana y Milán. Curamos bodas de destino y multiculturales en todo el mundo.",
        ),
        p(
          "Esta política explica qué información personal recopilamos cuando nos contactas o usas **greciamejia.com**, cómo la utilizamos y los derechos que tienes sobre ella. Somos el responsable del tratamiento de tu información.",
        ),
      ]),
      section("Información que recopilamos", [
        p(
          "Recopilamos solo lo que necesitamos para responder a una solicitud y, cuando te conviertes en cliente, para planificar tu boda. Esto incluye:",
        ),
        ...bullets([
          "**Datos de contacto** — nombre, correo electrónico, teléfono y número de WhatsApp, país de residencia.",
          "**Detalles de la boda** — destino deseado, fecha estimada, número de invitados, tipo de boda o tradición, presupuesto estimado y cualquier otra cosa que decidas contarnos en tu mensaje.",
          "**Correspondencia** — el contenido de los correos, mensajes y notas de consulta intercambiados con el estudio.",
          "**Datos técnicos** — analíticas limitadas y anonimizadas sobre cómo se usa el sitio web (páginas visitadas, región aproximada, tipo de dispositivo).",
        ]),
        p(
          "No recopilamos a sabiendas información de personas menores de dieciocho años, y nunca compramos ni alquilamos listas de contactos.",
        ),
      ]),
      section("Cómo usamos tu información", [
        p(
          "Tu información se utiliza para un conjunto pequeño y definido de fines:",
        ),
        ...bullets([
          "Para responder a tu solicitud de consulta — personalmente, normalmente por Grecia o una curadora sénior.",
          "Para planificar, coordinar y realizar tu boda, cuando te conviertes en cliente.",
          "Para comunicarnos con los especialistas, lugares y proveedores necesarios para tu boda — compartiendo solo lo que cada uno necesita saber.",
          "Para cumplir con nuestras obligaciones legales, contables y contractuales.",
        ]),
        p(
          "Nunca usaremos los detalles, las fotografías o la historia de tu boda con fines de marketing o prensa sin tu permiso explícito por escrito.",
        ),
      ]),
      section("La base jurídica", [
        p(
          "Tratamos tu información sobre las siguientes bases: **consentimiento** (cuando envías una solicitud), **contrato** (cuando contratas al estudio para planificar tu boda) e **interés legítimo** (para operar el estudio y responderte). Puedes retirar el consentimiento en cualquier momento.",
        ),
      ]),
      section("Con quién la compartimos", [
        p(
          "Somos un estudio pequeño y tratamos tu información con la misma privacidad con la que tratamos tu boda. Solo la compartimos cuando es necesario:",
        ),
        ...bullets([
          "**Especialistas y proveedores** — oficiantes, banqueteros, lugares, fotógrafos y similares, y solo los datos que cada uno requiere.",
          "**Asesores profesionales** — nuestros contables y asesores legales, cuando sea necesario.",
          "**Proveedores de servicios** — herramientas seguras de correo, almacenamiento de documentos y agenda que nos ayudan a gestionar el estudio.",
        ]),
        callout(
          "Nunca vendemos tu información personal. Nunca la compartimos con anunciantes. Tu boda no es contenido, a menos que tú lo decidas.",
        ),
      ]),
      section("Transferencias internacionales", [
        p(
          "Como planificamos bodas en distintos continentes, tu información puede tratarse en la República Dominicana, la Unión Europea y el país de tu boda. Dondequiera que viaje, aplicamos el mismo estándar de cuidado descrito en esta política y usamos las garantías adecuadas para cualquier transferencia.",
        ),
      ]),
      section("Cuánto tiempo la conservamos", [
        p(
          "Si nos escribes pero no te conviertes en cliente, conservamos tu correspondencia hasta **veinticuatro meses** y luego la eliminamos. Si te conviertes en cliente, conservamos tus registros durante el encargo y hasta **siete años** después, para cumplir obligaciones legales y contables. Puedes pedirnos que eliminemos tu información antes, con sujeción a esas obligaciones.",
        ),
      ]),
      section("Tus derechos", [
        p(
          "Tienes los siguientes derechos sobre tu información personal, y atenderemos cualquier solicitud en un plazo de treinta días:",
        ),
        ...bullets([
          "**Acceso** — una copia de la información que tenemos sobre ti.",
          "**Rectificación** — corregir cualquier cosa inexacta o incompleta.",
          "**Supresión** — que se elimine tu información, con sujeción a los límites legales.",
          "**Limitación y oposición** — limitar u oponerte al uso que hacemos de ella.",
          "**Portabilidad** — recibir tu información en un formato portable.",
        ]),
        p(
          "Para ejercer cualquiera de ellos, escribe a [privacy@greciamejia.com](mailto:privacy@greciamejia.com).",
        ),
      ]),
      section("Cookies y analítica", [
        p(
          "Nuestro sitio web usa un conjunto mínimo de cookies — las estrictamente necesarias para que el sitio funcione y analíticas anonimizadas para entender cómo se usa. No usamos cookies de publicidad ni de seguimiento. Puedes desactivar las cookies en la configuración de tu navegador sin perder el acceso al sitio.",
        ),
      ]),
      section("Seguridad", [
        p(
          "Protegemos tu información con almacenamiento cifrado, controles de acceso limitados al equipo del estudio y herramientas de comunicación seguras. Ningún sistema es perfectamente seguro, pero tratamos tus datos con la misma discreción que llevamos a cada boda, y te notificaremos con prontitud cualquier violación que te afecte.",
        ),
      ]),
      section("Cambios y contacto", [
        p(
          "Podemos actualizar esta política de vez en cuando. La fecha de «última actualización» en la parte superior de esta página siempre refleja la versión vigente. Los cambios sustanciales se comunicarán directamente a los clientes activos.",
        ),
        p(
          "Para cualquier pregunta sobre tu privacidad, escribe a [privacy@greciamejia.com](mailto:privacy@greciamejia.com) o contacta con el estudio a través de nuestra [página de contacto](/contact). Grecia o un miembro del equipo te responderá personalmente.",
        ),
      ]),
    ],
  },

  fr: {
    hero: {
      eyebrow: "Légal · Confidentialité",
      title: "Politique de",
      titleItalic: "confidentialité.",
      deck: "Comment le studio collecte, utilise et protège vos informations personnelles — écrit clairement, parce que votre confiance compte plus qu'une couverture juridique.",
    },
    meta: { updated: "janvier 2026", effective: "1er janvier 2026" },
    intro:
      "Chez Grecia Mejía Weddings, nous gardons vos informations comme nous gardons votre mariage : avec discrétion, avec soin, et seulement aussi longtemps qu'elles vous servent. Cette politique explique exactement ce que nous collectons et ce que vous pouvez nous demander.",
    helpNote:
      "Des questions sur cette politique ? Écrivez au studio et Grecia ou son équipe vous répondront personnellement.",
    closing: "Au nom du studio · Punta Cana, janvier 2026",
    sections: [
      section("Qui nous sommes", [
        p(
          "Grecia Mejía Weddings (« le studio », « nous ») est une maison de planification de mariages de luxe enregistrée en République dominicaine, avec des studios à Punta Cana et à Milan. Nous concevons des mariages de destination et multiculturels dans le monde entier.",
        ),
        p(
          "Cette politique explique quelles informations personnelles nous collectons lorsque vous nous contactez ou utilisez **greciamejia.com**, comment nous les utilisons et les droits que vous détenez sur elles. Nous sommes le responsable du traitement de vos informations.",
        ),
      ]),
      section("Les informations que nous collectons", [
        p(
          "Nous ne collectons que ce dont nous avons besoin pour répondre à une demande et, lorsque vous devenez client, pour organiser votre mariage. Cela comprend :",
        ),
        ...bullets([
          "**Coordonnées** — nom, adresse e-mail, numéro de téléphone et de WhatsApp, pays de résidence.",
          "**Détails du mariage** — destination souhaitée, date estimée, nombre d'invités, type de mariage ou tradition, budget estimé, et tout ce que vous choisissez de nous dire dans votre message.",
          "**Correspondance** — le contenu des e-mails, messages et notes de consultation échangés avec le studio.",
          "**Données techniques** — des statistiques limitées et anonymisées sur l'utilisation du site (pages visitées, région approximative, type d'appareil).",
        ]),
        p(
          "Nous ne collectons pas sciemment d'informations auprès de personnes de moins de dix-huit ans, et nous n'achetons ni ne louons jamais de listes de contacts.",
        ),
      ]),
      section("Comment nous utilisons vos informations", [
        p(
          "Vos informations sont utilisées à un petit ensemble de fins définies :",
        ),
        ...bullets([
          "Pour répondre à votre demande de consultation — personnellement, généralement par Grecia ou une curatrice senior.",
          "Pour planifier, coordonner et réaliser votre mariage, lorsque vous devenez client.",
          "Pour communiquer avec les spécialistes, lieux et prestataires nécessaires à votre mariage — en ne partageant que ce que chacun doit savoir.",
          "Pour respecter nos obligations légales, comptables et contractuelles.",
        ]),
        p(
          "Nous n'utiliserons jamais les détails, les photographies ou l'histoire de votre mariage à des fins de marketing ou de presse sans votre autorisation écrite explicite.",
        ),
      ]),
      section("La base légale", [
        p(
          "Nous traitons vos informations sur les bases suivantes : **consentement** (lorsque vous soumettez une demande), **contrat** (lorsque vous engagez le studio pour organiser votre mariage) et **intérêt légitime** (pour exploiter le studio et vous répondre). Vous pouvez retirer votre consentement à tout moment.",
        ),
      ]),
      section("Avec qui nous les partageons", [
        p(
          "Nous sommes un petit studio et nous traitons vos informations aussi discrètement que votre mariage. Nous ne les partageons que lorsque c'est nécessaire :",
        ),
        ...bullets([
          "**Spécialistes & prestataires** — officiants, traiteurs, lieux, photographes et similaires, et uniquement les détails dont chacun a besoin.",
          "**Conseillers professionnels** — nos comptables et conseillers juridiques, lorsque cela est requis.",
          "**Fournisseurs de services** — outils sécurisés d'e-mail, de stockage de documents et de planification qui nous aident à gérer le studio.",
        ]),
        callout(
          "Nous ne vendons jamais vos informations personnelles. Nous ne les partageons jamais avec des annonceurs. Votre mariage n'est pas un contenu, sauf si vous en décidez ainsi.",
        ),
      ]),
      section("Transferts internationaux", [
        p(
          "Parce que nous organisons des mariages sur plusieurs continents, vos informations peuvent être traitées en République dominicaine, dans l'Union européenne et dans le pays de votre mariage. Où qu'elles voyagent, nous appliquons le même standard de soin décrit dans cette politique et utilisons des garanties appropriées pour tout transfert.",
        ),
      ]),
      section("Combien de temps nous les conservons", [
        p(
          "Si vous nous contactez sans devenir client, nous conservons votre correspondance jusqu'à **vingt-quatre mois**, puis nous la supprimons. Si vous devenez client, nous conservons vos dossiers pendant la durée de l'engagement et jusqu'à **sept ans** après, pour respecter nos obligations légales et comptables. Vous pouvez nous demander de supprimer vos informations plus tôt, sous réserve de ces obligations.",
        ),
      ]),
      section("Vos droits", [
        p(
          "Vous détenez les droits suivants sur vos informations personnelles, et nous honorerons toute demande sous trente jours :",
        ),
        ...bullets([
          "**Accès** — une copie des informations que nous détenons à votre sujet.",
          "**Rectification** — corriger tout ce qui est inexact ou incomplet.",
          "**Effacement** — faire supprimer vos informations, sous réserve des limites légales.",
          "**Limitation & opposition** — limiter ou vous opposer à l'usage que nous en faisons.",
          "**Portabilité** — recevoir vos informations dans un format portable.",
        ]),
        p(
          "Pour exercer l'un de ces droits, écrivez à [privacy@greciamejia.com](mailto:privacy@greciamejia.com).",
        ),
      ]),
      section("Cookies & statistiques", [
        p(
          "Notre site utilise un ensemble minimal de cookies — ceux strictement nécessaires au fonctionnement du site et des statistiques anonymisées pour comprendre son utilisation. Nous n'utilisons pas de cookies publicitaires ou de pistage. Vous pouvez désactiver les cookies dans les réglages de votre navigateur sans perdre l'accès au site.",
        ),
      ]),
      section("Sécurité", [
        p(
          "Nous protégeons vos informations par un stockage chiffré, des contrôles d'accès limités à l'équipe du studio et des outils de communication sécurisés. Aucun système n'est parfaitement sûr, mais nous traitons vos données avec la discrétion que nous apportons à chaque mariage, et nous vous informerons rapidement de toute violation qui vous concerne.",
        ),
      ]),
      section("Modifications & contact", [
        p(
          "Nous pouvons mettre à jour cette politique de temps à autre. La date de « dernière mise à jour » en haut de cette page reflète toujours la version actuelle. Les changements importants seront communiqués directement aux clients actifs.",
        ),
        p(
          "Pour toute question sur votre confidentialité, écrivez à [privacy@greciamejia.com](mailto:privacy@greciamejia.com) ou contactez le studio via notre [page de contact](/contact). Grecia ou un membre de l'équipe vous répondra personnellement.",
        ),
      ]),
    ],
  },

  pt: {
    hero: {
      eyebrow: "Legal · Privacidade",
      title: "Política de",
      titleItalic: "Privacidade.",
      deck: "Como o estúdio recolhe, utiliza e protege as suas informações pessoais — escrito com clareza, porque a sua confiança importa mais do que a cobertura legal.",
    },
    meta: { updated: "janeiro de 2026", effective: "1 de janeiro de 2026" },
    intro:
      "Na Grecia Mejía Weddings, guardamos as suas informações como guardamos o seu casamento: com privacidade, com cuidado e apenas pelo tempo que lhe forem úteis. Esta política explica exatamente o que recolhemos e o que nos pode pedir.",
    helpNote:
      "Dúvidas sobre esta política? Escreva ao estúdio e a Grecia ou a sua equipa responderão pessoalmente.",
    closing: "Em nome do estúdio · Punta Cana, janeiro de 2026",
    sections: [
      section("Quem somos", [
        p(
          "A Grecia Mejía Weddings («o estúdio», «nós») é uma prática de planeamento de casamentos de luxo registada na República Dominicana, com estúdios em Punta Cana e Milão. Curamos casamentos de destino e multiculturais em todo o mundo.",
        ),
        p(
          "Esta política explica que informações pessoais recolhemos quando nos contacta ou utiliza **greciamejia.com**, como as utilizamos e os direitos que tem sobre elas. Somos o responsável pelo tratamento das suas informações.",
        ),
      ]),
      section("Informações que recolhemos", [
        p(
          "Recolhemos apenas o que precisamos para responder a um pedido e, quando se torna cliente, para planear o seu casamento. Isto inclui:",
        ),
        ...bullets([
          "**Dados de contacto** — nome, endereço de e-mail, telefone e número de WhatsApp, país de residência.",
          "**Detalhes do casamento** — destino pretendido, data estimada, número de convidados, tipo de casamento ou tradição, orçamento estimado e tudo o mais que decidir contar-nos na sua mensagem.",
          "**Correspondência** — o conteúdo dos e-mails, mensagens e notas de consulta trocados com o estúdio.",
          "**Dados técnicos** — análises limitadas e anonimizadas sobre como o site é utilizado (páginas visitadas, região aproximada, tipo de dispositivo).",
        ]),
        p(
          "Não recolhemos conscientemente informações de pessoas com menos de dezoito anos, e nunca compramos nem alugamos listas de contactos.",
        ),
      ]),
      section("Como utilizamos as suas informações", [
        p(
          "As suas informações são utilizadas para um conjunto pequeno e definido de finalidades:",
        ),
        ...bullets([
          "Para responder ao seu pedido de consulta — pessoalmente, normalmente pela Grecia ou por uma curadora sénior.",
          "Para planear, coordenar e realizar o seu casamento, quando se torna cliente.",
          "Para comunicar com os especialistas, locais e fornecedores necessários ao seu casamento — partilhando apenas o que cada um precisa de saber.",
          "Para cumprir as nossas obrigações legais, contabilísticas e contratuais.",
        ]),
        p(
          "Nunca utilizaremos os detalhes, as fotografias ou a história do seu casamento para fins de marketing ou imprensa sem a sua autorização explícita por escrito.",
        ),
      ]),
      section("A base jurídica", [
        p(
          "Tratamos as suas informações com as seguintes bases: **consentimento** (quando envia um pedido), **contrato** (quando contrata o estúdio para planear o seu casamento) e **interesse legítimo** (para operar o estúdio e responder-lhe). Pode retirar o consentimento a qualquer momento.",
        ),
      ]),
      section("Com quem as partilhamos", [
        p(
          "Somos um estúdio pequeno e tratamos as suas informações com a mesma privacidade com que tratamos o seu casamento. Só as partilhamos quando necessário:",
        ),
        ...bullets([
          "**Especialistas e fornecedores** — celebrantes, catering, locais, fotógrafos e afins, e apenas os detalhes de que cada um necessita.",
          "**Consultores profissionais** — os nossos contabilistas e consultores jurídicos, quando necessário.",
          "**Prestadores de serviços** — ferramentas seguras de e-mail, armazenamento de documentos e agendamento que nos ajudam a gerir o estúdio.",
        ]),
        callout(
          "Nunca vendemos as suas informações pessoais. Nunca as partilhamos com anunciantes. O seu casamento não é conteúdo, a menos que você decida que sim.",
        ),
      ]),
      section("Transferências internacionais", [
        p(
          "Porque planeamos casamentos em vários continentes, as suas informações podem ser tratadas na República Dominicana, na União Europeia e no país do seu casamento. Para onde quer que viajem, aplicamos o mesmo padrão de cuidado descrito nesta política e usamos as salvaguardas adequadas para qualquer transferência.",
        ),
      ]),
      section("Quanto tempo as conservamos", [
        p(
          "Se nos contactar mas não se tornar cliente, conservamos a sua correspondência até **vinte e quatro meses** e depois eliminamo-la. Se se tornar cliente, conservamos os seus registos durante o compromisso e até **sete anos** depois, para cumprir obrigações legais e contabilísticas. Pode pedir-nos para eliminar as suas informações mais cedo, sujeito a essas obrigações.",
        ),
      ]),
      section("Os seus direitos", [
        p(
          "Tem os seguintes direitos sobre as suas informações pessoais, e honraremos qualquer pedido no prazo de trinta dias:",
        ),
        ...bullets([
          "**Acesso** — uma cópia das informações que temos sobre si.",
          "**Retificação** — corrigir o que esteja incorreto ou incompleto.",
          "**Apagamento** — ter as suas informações eliminadas, sujeito aos limites legais.",
          "**Limitação e oposição** — limitar ou opor-se ao uso que delas fazemos.",
          "**Portabilidade** — receber as suas informações num formato portável.",
        ]),
        p(
          "Para exercer qualquer um destes, escreva para [privacy@greciamejia.com](mailto:privacy@greciamejia.com).",
        ),
      ]),
      section("Cookies e análise", [
        p(
          "O nosso site utiliza um conjunto mínimo de cookies — os estritamente necessários para o funcionamento do site e análises anonimizadas para compreender como é utilizado. Não utilizamos cookies de publicidade ou de rastreio. Pode desativar os cookies nas definições do seu navegador sem perder o acesso ao site.",
        ),
      ]),
      section("Segurança", [
        p(
          "Protegemos as suas informações com armazenamento encriptado, controlos de acesso limitados à equipa do estúdio e ferramentas de comunicação seguras. Nenhum sistema é perfeitamente seguro, mas tratamos os seus dados com a mesma discrição que levamos a cada casamento, e notificá-lo-emos prontamente de qualquer violação que o afete.",
        ),
      ]),
      section("Alterações e contacto", [
        p(
          "Podemos atualizar esta política de tempos a tempos. A data de «última atualização» no topo desta página reflete sempre a versão atual. As alterações substanciais serão comunicadas diretamente aos clientes ativos.",
        ),
        p(
          "Para qualquer questão sobre a sua privacidade, escreva para [privacy@greciamejia.com](mailto:privacy@greciamejia.com) ou contacte o estúdio através da nossa [página de contacto](/contact). A Grecia ou um membro da equipa responderá pessoalmente.",
        ),
      ]),
    ],
  },

  de: {
    hero: {
      eyebrow: "Rechtliches · Datenschutz",
      title: "Datenschutz-",
      titleItalic: "erklärung.",
      deck: "Wie das Studio Ihre personenbezogenen Daten erhebt, verwendet und schützt — klar geschrieben, weil Ihr Vertrauen mehr zählt als rechtliche Absicherung.",
    },
    meta: { updated: "Januar 2026", effective: "1. Januar 2026" },
    intro:
      "Bei Grecia Mejía Weddings bewahren wir Ihre Daten so, wie wir Ihre Hochzeit bewahren: privat, sorgfältig und nur so lange, wie sie Ihnen dienen. Diese Erklärung erläutert genau, was wir erheben und worum Sie uns bitten können.",
    helpNote:
      "Fragen zu dieser Erklärung? Schreiben Sie dem Studio, und Grecia oder ihr Team antworten persönlich.",
    closing: "Im Namen des Studios · Punta Cana, Januar 2026",
    sections: [
      section("Wer wir sind", [
        p(
          "Grecia Mejía Weddings („das Studio“, „wir“, „uns“) ist eine in der Dominikanischen Republik registrierte Praxis für luxuriöse Hochzeitsplanung mit Studios in Punta Cana und Mailand. Wir kuratieren Destination- und multikulturelle Hochzeiten weltweit.",
        ),
        p(
          "Diese Erklärung erläutert, welche personenbezogenen Daten wir erheben, wenn Sie uns kontaktieren oder **greciamejia.com** nutzen, wie wir sie verwenden und welche Rechte Sie daran haben. Wir sind der für Ihre Daten Verantwortliche.",
        ),
      ]),
      section("Welche Daten wir erheben", [
        p(
          "Wir erheben nur, was wir benötigen, um auf eine Anfrage zu antworten und — wenn Sie Kunde werden — Ihre Hochzeit zu planen. Dazu gehören:",
        ),
        ...bullets([
          "**Kontaktdaten** — Name, E-Mail-Adresse, Telefon- und WhatsApp-Nummer, Wohnsitzland.",
          "**Hochzeitsdetails** — gewünschtes Reiseziel, geschätztes Datum, Gästezahl, Hochzeitsart oder Tradition, geschätztes Budget und alles Weitere, das Sie uns in Ihrer Nachricht mitteilen.",
          "**Korrespondenz** — der Inhalt der mit dem Studio ausgetauschten E-Mails, Nachrichten und Beratungsnotizen.",
          "**Technische Daten** — begrenzte, anonymisierte Statistiken zur Nutzung der Website (besuchte Seiten, ungefähre Region, Gerätetyp).",
        ]),
        p(
          "Wir erheben nicht wissentlich Daten von Personen unter achtzehn Jahren, und wir kaufen oder mieten niemals Kontaktlisten.",
        ),
      ]),
      section("Wie wir Ihre Daten verwenden", [
        p(
          "Ihre Daten werden für eine kleine, klar definierte Reihe von Zwecken verwendet:",
        ),
        ...bullets([
          "Um auf Ihre Beratungsanfrage zu antworten — persönlich, in der Regel durch Grecia oder eine leitende Kuratorin.",
          "Um Ihre Hochzeit zu planen, zu koordinieren und durchzuführen, wenn Sie Kunde werden.",
          "Um mit den für Ihre Hochzeit erforderlichen Spezialisten, Locations und Dienstleistern zu kommunizieren — wobei wir nur weitergeben, was jeder wissen muss.",
          "Um unsere rechtlichen, buchhalterischen und vertraglichen Pflichten zu erfüllen.",
        ]),
        p(
          "Wir werden die Details, Fotografien oder die Geschichte Ihrer Hochzeit niemals ohne Ihre ausdrückliche schriftliche Erlaubnis für Marketing oder Presse verwenden.",
        ),
      ]),
      section("Die Rechtsgrundlage", [
        p(
          "Wir verarbeiten Ihre Daten auf folgenden Grundlagen: **Einwilligung** (wenn Sie eine Anfrage senden), **Vertrag** (wenn Sie das Studio mit der Planung Ihrer Hochzeit beauftragen) und **berechtigtes Interesse** (um das Studio zu betreiben und Ihnen zu antworten). Sie können Ihre Einwilligung jederzeit widerrufen.",
        ),
      ]),
      section("Mit wem wir sie teilen", [
        p(
          "Wir sind ein kleines Studio und behandeln Ihre Daten so privat wie Ihre Hochzeit. Wir teilen sie nur, wenn es notwendig ist:",
        ),
        ...bullets([
          "**Spezialisten & Dienstleister** — Trauredner, Caterer, Locations, Fotografen und Ähnliche, und nur die Details, die jeder benötigt.",
          "**Fachberater** — unsere Buchhalter und Rechtsberater, soweit erforderlich.",
          "**Diensteanbieter** — sichere E-Mail-, Dokumentenspeicher- und Terminplanungs-Tools, die uns beim Betrieb des Studios helfen.",
        ]),
        callout(
          "Wir verkaufen Ihre personenbezogenen Daten niemals. Wir teilen sie niemals mit Werbetreibenden. Ihre Hochzeit ist kein Inhalt, es sei denn, Sie entscheiden sich dafür.",
        ),
      ]),
      section("Internationale Übermittlungen", [
        p(
          "Da wir Hochzeiten über Kontinente hinweg planen, können Ihre Daten in der Dominikanischen Republik, der Europäischen Union und im Land Ihrer Hochzeit verarbeitet werden. Wohin auch immer sie gelangen, wenden wir denselben in dieser Erklärung beschriebenen Sorgfaltsmaßstab an und nutzen für jede Übermittlung geeignete Garantien.",
        ),
      ]),
      section("Wie lange wir sie aufbewahren", [
        p(
          "Wenn Sie anfragen, aber nicht Kunde werden, bewahren wir Ihre Korrespondenz bis zu **vierundzwanzig Monate** auf und löschen sie dann. Wenn Sie Kunde werden, bewahren wir Ihre Unterlagen für die Dauer der Beauftragung und bis zu **sieben Jahre** danach auf, um rechtliche und buchhalterische Pflichten zu erfüllen. Vorbehaltlich dieser Pflichten können Sie uns bitten, Ihre Daten früher zu löschen.",
        ),
      ]),
      section("Ihre Rechte", [
        p(
          "Sie haben die folgenden Rechte an Ihren personenbezogenen Daten, und wir kommen jeder Anfrage innerhalb von dreißig Tagen nach:",
        ),
        ...bullets([
          "**Auskunft** — eine Kopie der Daten, die wir über Sie haben.",
          "**Berichtigung** — alles Unrichtige oder Unvollständige zu korrigieren.",
          "**Löschung** — Ihre Daten löschen zu lassen, vorbehaltlich gesetzlicher Grenzen.",
          "**Einschränkung & Widerspruch** — die Nutzung zu begrenzen oder ihr zu widersprechen.",
          "**Datenübertragbarkeit** — Ihre Daten in einem übertragbaren Format zu erhalten.",
        ]),
        p(
          "Um eines dieser Rechte auszuüben, schreiben Sie an [privacy@greciamejia.com](mailto:privacy@greciamejia.com).",
        ),
      ]),
      section("Cookies & Statistiken", [
        p(
          "Unsere Website verwendet ein Minimum an Cookies — die für den Betrieb der Website unbedingt erforderlichen und anonymisierte Statistiken, um die Nutzung zu verstehen. Wir verwenden keine Werbe- oder Tracking-Cookies. Sie können Cookies in Ihren Browsereinstellungen deaktivieren, ohne den Zugang zur Website zu verlieren.",
        ),
      ]),
      section("Sicherheit", [
        p(
          "Wir schützen Ihre Daten durch verschlüsselte Speicherung, auf das Studio-Team beschränkte Zugriffskontrollen und sichere Kommunikationsmittel. Kein System ist vollkommen sicher, aber wir behandeln Ihre Daten mit derselben Diskretion, die wir jeder Hochzeit entgegenbringen, und wir werden Sie unverzüglich über jede Verletzung informieren, die Sie betrifft.",
        ),
      ]),
      section("Änderungen & Kontakt", [
        p(
          "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das Datum „zuletzt aktualisiert“ oben auf dieser Seite spiegelt stets die aktuelle Fassung wider. Wesentliche Änderungen werden aktiven Kunden direkt mitgeteilt.",
        ),
        p(
          "Bei Fragen zu Ihrem Datenschutz schreiben Sie an [privacy@greciamejia.com](mailto:privacy@greciamejia.com) oder erreichen Sie das Studio über unsere [Kontaktseite](/contact). Grecia oder ein Mitglied des Teams antwortet persönlich.",
        ),
      ]),
    ],
  },

  it: {
    hero: {
      eyebrow: "Legale · Privacy",
      title: "Informativa sulla",
      titleItalic: "Privacy.",
      deck: "Come lo studio raccoglie, utilizza e protegge le tue informazioni personali — scritto con chiarezza, perché la tua fiducia conta più della copertura legale.",
    },
    meta: { updated: "gennaio 2026", effective: "1 gennaio 2026" },
    intro:
      "In Grecia Mejía Weddings, custodiamo le tue informazioni come custodiamo il tuo matrimonio: con riservatezza, con cura e solo per il tempo in cui ti sono utili. Questa informativa spiega esattamente cosa raccogliamo e cosa puoi chiederci.",
    helpNote:
      "Domande su questa informativa? Scrivi allo studio e Grecia o il suo team ti risponderanno di persona.",
    closing: "Per conto dello studio · Punta Cana, gennaio 2026",
    sections: [
      section("Chi siamo", [
        p(
          "Grecia Mejía Weddings («lo studio», «noi») è una pratica di wedding planning di lusso registrata nella Repubblica Dominicana, con studi a Punta Cana e Milano. Curiamo matrimoni di destinazione e multiculturali in tutto il mondo.",
        ),
        p(
          "Questa informativa spiega quali informazioni personali raccogliamo quando ci contatti o utilizzi **greciamejia.com**, come le utilizziamo e i diritti che detieni su di esse. Siamo il titolare del trattamento delle tue informazioni.",
        ),
      ]),
      section("Le informazioni che raccogliamo", [
        p(
          "Raccogliamo solo ciò di cui abbiamo bisogno per rispondere a una richiesta e, quando diventi cliente, per organizzare il tuo matrimonio. Questo include:",
        ),
        ...bullets([
          "**Dati di contatto** — nome, indirizzo e-mail, numero di telefono e WhatsApp, paese di residenza.",
          "**Dettagli del matrimonio** — destinazione desiderata, data stimata, numero di invitati, tipo di matrimonio o tradizione, budget stimato e tutto ciò che scegli di dirci nel tuo messaggio.",
          "**Corrispondenza** — il contenuto di e-mail, messaggi e note di consulenza scambiati con lo studio.",
          "**Dati tecnici** — analisi limitate e anonimizzate su come viene utilizzato il sito (pagine visitate, regione approssimativa, tipo di dispositivo).",
        ]),
        p(
          "Non raccogliamo consapevolmente informazioni da persone di età inferiore ai diciotto anni, e non acquistiamo né noleggiamo mai liste di contatti.",
        ),
      ]),
      section("Come utilizziamo le tue informazioni", [
        p(
          "Le tue informazioni sono utilizzate per un insieme ristretto e definito di finalità:",
        ),
        ...bullets([
          "Per rispondere alla tua richiesta di consulenza — personalmente, di solito da Grecia o da una curatrice senior.",
          "Per pianificare, coordinare e realizzare il tuo matrimonio, quando diventi cliente.",
          "Per comunicare con gli specialisti, le location e i fornitori necessari al tuo matrimonio — condividendo solo ciò che ciascuno deve sapere.",
          "Per adempiere ai nostri obblighi legali, contabili e contrattuali.",
        ]),
        p(
          "Non utilizzeremo mai i dettagli, le fotografie o la storia del tuo matrimonio per marketing o stampa senza il tuo esplicito permesso scritto.",
        ),
      ]),
      section("La base giuridica", [
        p(
          "Trattiamo le tue informazioni sulle seguenti basi: **consenso** (quando invii una richiesta), **contratto** (quando incarichi lo studio di organizzare il tuo matrimonio) e **legittimo interesse** (per gestire lo studio e risponderti). Puoi revocare il consenso in qualsiasi momento.",
        ),
      ]),
      section("Con chi le condividiamo", [
        p(
          "Siamo uno studio piccolo e trattiamo le tue informazioni con la stessa riservatezza con cui trattiamo il tuo matrimonio. Le condividiamo solo quando necessario:",
        ),
        ...bullets([
          "**Specialisti e fornitori** — celebranti, catering, location, fotografi e simili, e solo i dettagli di cui ciascuno necessita.",
          "**Consulenti professionali** — i nostri commercialisti e consulenti legali, ove richiesto.",
          "**Fornitori di servizi** — strumenti sicuri di e-mail, archiviazione documenti e pianificazione che ci aiutano a gestire lo studio.",
        ]),
        callout(
          "Non vendiamo mai le tue informazioni personali. Non le condividiamo mai con inserzionisti. Il tuo matrimonio non è contenuto, a meno che non lo decida tu.",
        ),
      ]),
      section("Trasferimenti internazionali", [
        p(
          "Poiché organizziamo matrimoni tra continenti, le tue informazioni possono essere trattate nella Repubblica Dominicana, nell'Unione Europea e nel paese del tuo matrimonio. Ovunque viaggino, applichiamo lo stesso standard di cura descritto in questa informativa e utilizziamo garanzie adeguate per ogni trasferimento.",
        ),
      ]),
      section("Per quanto tempo le conserviamo", [
        p(
          "Se ci contatti ma non diventi cliente, conserviamo la tua corrispondenza fino a **ventiquattro mesi**, poi la eliminiamo. Se diventi cliente, conserviamo i tuoi dati per la durata dell'incarico e fino a **sette anni** dopo, per adempiere agli obblighi legali e contabili. Puoi chiederci di eliminare le tue informazioni prima, fatti salvi tali obblighi.",
        ),
      ]),
      section("I tuoi diritti", [
        p(
          "Detieni i seguenti diritti sulle tue informazioni personali, e onoreremo ogni richiesta entro trenta giorni:",
        ),
        ...bullets([
          "**Accesso** — una copia delle informazioni che deteniamo su di te.",
          "**Rettifica** — correggere ciò che è inesatto o incompleto.",
          "**Cancellazione** — far eliminare le tue informazioni, fatti salvi i limiti di legge.",
          "**Limitazione e opposizione** — limitare o opporti all'uso che ne facciamo.",
          "**Portabilità** — ricevere le tue informazioni in un formato portabile.",
        ]),
        p(
          "Per esercitare uno di questi diritti, scrivi a [privacy@greciamejia.com](mailto:privacy@greciamejia.com).",
        ),
      ]),
      section("Cookie e analisi", [
        p(
          "Il nostro sito utilizza un insieme minimo di cookie — quelli strettamente necessari al funzionamento del sito e analisi anonimizzate per capire come viene utilizzato. Non utilizziamo cookie pubblicitari o di tracciamento. Puoi disattivare i cookie nelle impostazioni del tuo browser senza perdere l'accesso al sito.",
        ),
      ]),
      section("Sicurezza", [
        p(
          "Proteggiamo le tue informazioni con archiviazione crittografata, controlli di accesso limitati al team dello studio e strumenti di comunicazione sicuri. Nessun sistema è perfettamente sicuro, ma trattiamo i tuoi dati con la stessa discrezione che portiamo a ogni matrimonio, e ti notificheremo tempestivamente qualsiasi violazione che ti riguardi.",
        ),
      ]),
      section("Modifiche e contatto", [
        p(
          "Possiamo aggiornare questa informativa di tanto in tanto. La data di «ultimo aggiornamento» in cima a questa pagina riflette sempre la versione attuale. Le modifiche sostanziali saranno comunicate direttamente ai clienti attivi.",
        ),
        p(
          "Per qualsiasi domanda sulla tua privacy, scrivi a [privacy@greciamejia.com](mailto:privacy@greciamejia.com) o contatta lo studio tramite la nostra [pagina di contatto](/contact). Grecia o un membro del team risponderà di persona.",
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
  console.log(`Seeding privacyPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "privacyPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "privacyPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["privacyPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} privacyPage docs + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
