import { useEffect } from "react";
import { AUDIENCE } from "../data/audience";
import { FORMATS } from "../data/formats";
import { STATS } from "../data/stats";
import { VIRALS } from "../data/virals";

const PAGE_TITLE =
  "Diego Sheik Midia Kit | Criador de Conteudo e Humor em Recife";
const PAGE_DESCRIPTION =
  "Midia kit oficial de Diego Sheik, criador de conteudo de humor em Recife-PE. Dados de audiencia, formatos de parceria e metricas reais para publis, reels e campanhas.";
const SITE_URL = "https://sheik.unificando.com.br/";
const PAGE_KEYWORDS = [
  "Diego Sheik",
  "midia kit",
  "criador de conteudo Recife",
  "influenciador Recife",
  "humor pernambucano",
  "Reels patrocinado",
  "publi Instagram",
  "campanha com influenciador",
];
const SOCIAL_IMAGE = `${SITE_URL}assets/diego-hero.jpg`;
const INSTAGRAM_URL = "https://instagram.com/diegosheik_";
const WHATSAPP_URL = "https://wa.me/5581999591979";
const CONTACT_EMAIL = "diegosheik.contato@gmail.com";
const LAST_UPDATED = "2026-03-17";

const FAQS = [
  {
    question: "Quem e Diego Sheik?",
    answer:
      "Diego Sheik e um criador de conteudo de humor de Recife-PE, conhecido por Reels com perguntas, respostas espontaneas e linguagem regional que geram alto compartilhamento organico.",
  },
  {
    question: "Que tipo de parceria Diego Sheik faz com marcas?",
    answer:
      "O midia kit oferece Reel patrocinado, sequencia de Stories e collab fixada, com possibilidade de integracao natural do produto, aprovacao previa e relatorio de performance.",
  },
  {
    question: "Qual e o perfil da audiencia de Diego Sheik?",
    answer:
      "A audiencia e majoritariamente brasileira, com concentracao entre 18 e 34 anos e forte presenca em Recife, Jaboatao dos Guararapes, Olinda e Sao Paulo.",
  },
  {
    question: "Quais metricas comprovam o alcance do criador?",
    answer:
      "O site apresenta 15,7 milhoes de visualizacoes, 2,2 milhoes de interacoes e 5,3 milhoes de contas alcancadas no periodo informado, com 94,1% das interacoes vindas de nao seguidores.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      name: "Midia Kit Diego Sheik",
      description: PAGE_DESCRIPTION,
      dateModified: LAST_UPDATED,
      inLanguage: "pt-BR",
      url: SITE_URL,
      mainEntity: {
        "@type": "Person",
        name: "Diego Sheik",
        alternateName: "diegosheik_",
        description:
          "Criador de conteudo de humor em Recife-PE com foco em Reels, campanhas para marcas e humor regional.",
        homeLocation: {
          "@type": "City",
          name: "Recife, PE, Brasil",
        },
        jobTitle: "Criador de Conteudo",
        sameAs: [INSTAGRAM_URL, WHATSAPP_URL],
        image: SOCIAL_IMAGE,
      },
    },
    {
      "@type": "CreativeWork",
      name: "Midia Kit Diego Sheik",
      headline: "Dados de audiencia, formatos comerciais e desempenho de campanhas",
      description: PAGE_DESCRIPTION,
      url: SITE_URL,
      author: {
        "@type": "Person",
        name: "Diego Sheik",
      },
      about: [
        "Humor regional",
        "Publicidade com influenciador",
        "Instagram Reels",
        "Marketing de influencia",
      ],
      keywords: PAGE_KEYWORDS.join(", "),
      dateModified: LAST_UPDATED,
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "Dataset",
      name: "Metricas de performance e audiencia de Diego Sheik",
      description:
        "Conjunto resumido de metricas de Instagram usadas no midia kit comercial de Diego Sheik.",
      creator: {
        "@type": "Person",
        name: "Diego Sheik",
      },
      temporalCoverage: STATS.period,
      dateModified: LAST_UPDATED,
      variableMeasured: [
        "Visualizacoes",
        "Interacoes",
        "Contas alcancadas",
        "Compartilhamentos",
        "Seguidores convertidos",
      ],
    },
  ],
};

export const SeoMeta = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;

    const setMeta = (
      selector: string,
      attributes: Record<string, string>,
      content: string,
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) =>
          element?.setAttribute(key, value),
        );
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setLink = (
      selector: string,
      attributes: Record<string, string>,
      href: string,
    ) => {
      let element = document.head.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement("link");
        Object.entries(attributes).forEach(([key, value]) =>
          element?.setAttribute(key, value),
        );
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', { name: "description" }, PAGE_DESCRIPTION);
    setMeta('meta[name="keywords"]', { name: "keywords" }, PAGE_KEYWORDS.join(", "));
    setMeta('meta[name="robots"]', { name: "robots" }, "index,follow,max-image-preview:large");
    setMeta(
      'meta[name="googlebot"]',
      { name: "googlebot" },
      "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
    );
    setMeta('meta[name="author"]', { name: "author" }, "Diego Sheik");
    setMeta('meta[name="theme-color"]', { name: "theme-color" }, "#020202");
    setMeta('meta[property="og:url"]', { property: "og:url" }, SITE_URL);
    setMeta(
      'meta[property="og:title"]',
      { property: "og:title" },
      PAGE_TITLE,
    );
    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      PAGE_DESCRIPTION,
    );
    setMeta('meta[property="og:type"]', { property: "og:type" }, "profile");
    setMeta('meta[property="og:locale"]', { property: "og:locale" }, "pt_BR");
    setMeta('meta[property="og:image"]', { property: "og:image" }, SOCIAL_IMAGE);
    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, PAGE_TITLE);
    setMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      PAGE_DESCRIPTION,
    );
    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, SOCIAL_IMAGE);
    setLink('link[rel="canonical"]', { rel: "canonical" }, SITE_URL);
    setLink(
      'link[rel="alternate"][hreflang="pt-BR"]',
      { rel: "alternate", hreflang: "pt-BR" },
      SITE_URL,
    );

    let script = document.getElementById("seo-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "seo-jsonld";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <section
      aria-label="Resumo SEO"
      className="sr-only"
    >
      <h2>Resumo do midia kit</h2>
      <p>
        Diego Sheik e criador de conteudo de humor em Recife-PE, com foco em
        Reels e campanhas para marcas.
      </p>
      <p>
        O midia kit resume performance, audiencia, formatos comerciais e
        contatos diretos para publicidade.
      </p>
      <p>
        Dados de referencia: {STATS.period}. Ultima atualizacao editorial: 17
        mar 2026.
      </p>
      <ul>
        <li>{STATS.views} de visualizacoes no periodo analisado.</li>
        <li>{STATS.interactions} de interacoes no periodo analisado.</li>
        <li>{STATS.accountsReached} de contas alcancadas.</li>
        <li>{AUDIENCE.countries[0].pct}% da audiencia no Brasil.</li>
        <li>{FORMATS[0].title} como formato comercial principal.</li>
        <li>
          Conteudos virais com destaque para {VIRALS[0].views} no Reel mais
          visto.
        </li>
      </ul>
      <h2>Perguntas frequentes</h2>
      {FAQS.map((faq) => (
        <article key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </article>
      ))}
      <p>Contato comercial por e-mail, WhatsApp e Instagram.</p>
      <p>{CONTACT_EMAIL}</p>
    </section>
  );
};
