// Todos os textos abaixo são PLACEHOLDERS: o escritório deve revisar e
// substituir tudo antes da publicação (publicidade na advocacia / OAB).

export const site = {
  name: "Nome do Escritório",
  tagline: "Advocacia",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.exemplo.com.br",
  city: "Cidade",
  uf: "UF",
  address: "Rua Exemplo, 000, sala 00, Bairro, Cidade/UF, CEP 00000-000",
  phone: "(00) 0000-0000",
  email: "contato@exemplo.com.br",
  whatsapp: "5500000000000", // DDI + DDD + número, só dígitos
  whatsappMessage: "Olá, gostaria de entrar em contato com o escritório.",
  hours: "Segunda a sexta, das 9h às 18h",
  registro: "Sociedade de Advogados registrada na OAB/UF sob o nº 0000.",
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "Escritório", href: "/#escritorio" },
  { label: "Áreas de atuação", href: "/#areas" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Conteúdos", href: "/#conteudos" },
  { label: "Contato", href: "/#contato" },
];

export const values = [
  { title: "Ética", text: "Atuação pautada pela ética profissional." },
  { title: "Técnica", text: "Análise jurídica fundamentada." },
  { title: "Transparência", text: "Comunicação clara com o cliente." },
  { title: "Responsabilidade", text: "Atuação responsável em cada demanda." },
  { title: "Confidencialidade", text: "Proteção das informações confiadas ao escritório." },
];

export const pillars = [
  "Atuação jurídica personalizada",
  "Experiência profissional",
  "Atendimento individualizado",
  "Atuação técnica",
];

export type Area = {
  slug: string;
  title: string;
  summary: string;
  topics: string[];
  intro: string;
  approach: string;
};

export const areas: Area[] = [
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    summary: "Atuação jurídica relacionada às atividades empresariais.",
    topics: ["Contratos", "Sociedades", "Operações empresariais", "Consultoria", "Reorganizações", "Conflitos empresariais"],
    intro: "Assessoria jurídica para empresas em suas relações contratuais, societárias e operacionais.",
    approach: "O escritório analisa a estrutura e os objetivos da empresa, identifica os riscos envolvidos e apresenta as alternativas jurídicas pertinentes a cada situação.",
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    summary: "Atuação em questões relacionadas às relações civis.",
    topics: ["Contratos", "Responsabilidade civil", "Obrigações", "Indenizações", "Patrimônio"],
    intro: "Orientação e representação em questões que envolvem as relações civis entre pessoas e organizações.",
    approach: "Cada caso é analisado conforme suas particularidades, com avaliação documental e explicação clara das possibilidades e dos riscos.",
  },
  {
    slug: "direito-de-familia",
    title: "Direito de Família",
    summary: "Orientação em questões familiares e sucessórias.",
    topics: ["Divórcio", "Guarda", "Alimentos", "União estável", "Inventário", "Sucessões"],
    intro: "Atendimento cuidadoso em temas familiares e sucessórios, que exigem sensibilidade e discrição.",
    approach: "O atendimento é individualizado e reservado, com atenção às particularidades de cada família.",
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    summary: "Consultoria e atuação em relações de trabalho.",
    topics: ["Relações de trabalho", "Contratos", "Consultoria", "Reclamações trabalhistas", "Defesa empresarial"],
    intro: "Atuação consultiva e contenciosa em matéria trabalhista, para empregados e empregadores.",
    approach: "São avaliados os fatos, a documentação e a legislação aplicável antes de qualquer orientação sobre os caminhos possíveis.",
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    summary: "Segurança jurídica em operações e questões imobiliárias.",
    topics: ["Compra e venda", "Contratos", "Locação", "Regularização", "Questões condominiais", "Análise documental"],
    intro: "Apoio jurídico em operações imobiliárias, da análise documental à formalização contratual.",
    approach: "A análise da documentação do imóvel e das partes antecede a orientação, para que as decisões sejam tomadas com informação.",
  },
  {
    slug: "direito-tributario",
    title: "Direito Tributário",
    summary: "Consultoria e defesa em matéria fiscal.",
    topics: ["Planejamento tributário", "Consultoria", "Questões fiscais", "Recuperação de créditos", "Defesa administrativa e judicial"],
    intro: "Orientação sobre obrigações fiscais e representação em discussões administrativas e judiciais.",
    approach: "O escritório examina a situação fiscal concreta e apresenta as possibilidades jurídicas, sem promessa de resultado.",
  },
];

export const differentials = [
  { title: "Análise individualizada", text: "Cada situação é analisada conforme suas características específicas." },
  { title: "Comunicação clara", text: "Informações jurídicas apresentadas de forma compreensível." },
  { title: "Estratégia jurídica", text: "Avaliação das possibilidades e riscos envolvidos." },
  { title: "Acompanhamento", text: "O cliente acompanha as etapas relevantes do caso." },
  { title: "Tecnologia", text: "Uso de ferramentas digitais para organização e comunicação." },
];

export const steps = [
  { title: "Primeiro contato", text: "O interessado entra em contato com o escritório." },
  { title: "Análise inicial", text: "São coletadas informações necessárias para compreender a demanda." },
  { title: "Avaliação jurídica", text: "O profissional analisa a questão apresentada." },
  { title: "Orientação", text: "São apresentadas as possibilidades jurídicas pertinentes." },
  { title: "Contratação", text: "Caso haja interesse e viabilidade, são definidos os termos da contratação." },
  { title: "Acompanhamento", text: "O escritório acompanha a demanda conforme contratado." },
];

export const businessItems = [
  "Consultoria",
  "Contratos",
  "Societário",
  "Trabalhista",
  "Tributário",
  "Proteção de dados",
  "Compliance",
  "Prevenção de conflitos",
];

export type Lawyer = {
  slug: string;
  name: string;
  oab: string;
  areaSlugs: string[];
  bio: string;
  education: string[];
};

const bioPlaceholder =
  "Apresentação profissional a ser fornecida pelo escritório, de forma objetiva e compatível com as normas de publicidade da advocacia.";

export const team: Lawyer[] = [
  { slug: "advogado-1", name: "Nome Completo", oab: "OAB/UF XXXXX", areaSlugs: ["direito-empresarial", "direito-tributario"], bio: bioPlaceholder, education: ["Graduação em Direito — Instituição", "Pós-graduação — Instituição"] },
  { slug: "advogado-2", name: "Nome Completo", oab: "OAB/UF XXXXX", areaSlugs: ["direito-civil", "direito-imobiliario"], bio: bioPlaceholder, education: ["Graduação em Direito — Instituição", "Pós-graduação — Instituição"] },
  { slug: "advogado-3", name: "Nome Completo", oab: "OAB/UF XXXXX", areaSlugs: ["direito-de-familia", "direito-trabalhista"], bio: bioPlaceholder, education: ["Graduação em Direito — Instituição", "Pós-graduação — Instituição"] },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  areaSlug: string;
  date: string; // ISO
  excerpt: string;
  authorSlug: string;
};

export const articles: Article[] = [
  { slug: "o-que-muda-em-um-contrato-de-locacao", title: "O que muda em um contrato de locação?", category: "Direito Imobiliário", areaSlug: "direito-imobiliario", date: "2026-09-30", excerpt: "Pontos que merecem atenção na leitura e na negociação de um contrato de locação.", authorSlug: "advogado-2" },
  { slug: "clausulas-essenciais-em-contratos-empresariais", title: "Cláusulas essenciais em contratos empresariais", category: "Direito Empresarial", areaSlug: "direito-empresarial", date: "2026-09-15", excerpt: "Uma visão geral das cláusulas que costumam merecer revisão cuidadosa.", authorSlug: "advogado-1" },
  { slug: "guarda-e-alimentos-conceitos-basicos", title: "Guarda e alimentos: conceitos básicos", category: "Direito de Família", areaSlug: "direito-de-familia", date: "2026-09-01", excerpt: "Explicação introdutória sobre dois temas frequentes do direito de família.", authorSlug: "advogado-3" },
];

export const faq = [
  { q: "Como funciona o primeiro atendimento?", a: "O primeiro atendimento serve para compreender a sua demanda e verificar as possibilidades de atuação do escritório." },
  { q: "Preciso levar documentos?", a: "Quando houver documentos relacionados ao assunto, eles ajudam na análise. O escritório informará quais são pertinentes." },
  { q: "O atendimento pode ser online?", a: "Sim, conforme a natureza da demanda. O escritório indicará os canais disponíveis." },
  { q: "O escritório atende empresas?", a: "Sim. Veja a seção de atuação empresarial para conhecer as frentes disponíveis." },
  { q: "Como funciona a contratação?", a: "Após a avaliação jurídica, se houver interesse e viabilidade, são definidos os termos da contratação." },
  { q: "O escritório atua em todo o Brasil?", a: "Resposta a ser definida pelo escritório, conforme sua atuação real." },
  { q: "Posso enviar documentos antecipadamente?", a: "O escritório informará o canal adequado e seguro após o primeiro contato." },
  { q: "Como acompanho meu processo?", a: "O cliente é informado sobre as etapas relevantes, pelos canais combinados na contratação." },
  { q: "Como funciona o pagamento dos honorários?", a: "Os honorários são definidos por contrato, conforme a natureza e a complexidade da demanda." },
  { q: "O escritório trabalha com quais áreas?", a: "Veja a seção de áreas de atuação. As áreas reais serão definidas pelo escritório." },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
export const lawyerBySlug = (slug: string) => team.find((l) => l.slug === slug);
export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { timeZone: "UTC" });
