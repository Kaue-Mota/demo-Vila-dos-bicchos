import type {
  BusinessInfo,
  GalleryImage,
  Highlight,
  NavLink,
  Review,
  Service,
  Stat,
  TeamMember,
  Value,
} from '../types';

export const business: BusinessInfo = {
  name: 'Vila dos Bichos',
  tagline: 'Cuidado com quem ama o seu pet.',
  phone: '(41) 98745-8356',
  phoneDigits: '+5541987458356',
  whatsapp: 'https://wa.me/5541987458356',
  email: 'contato@viladosbichos.com.br',
  address: 'Av. Desembargador Hugo Simas, 990',
  neighborhood: 'Bom Retiro',
  city: 'Curitiba - PR, 80520-250',
  hours: [
    { day: 'Segunda a Sexta', time: '09:00 – 18:00' },
    { day: 'Sábado', time: '09:00 – 12:00' },
    { day: 'Domingo', time: 'Fechado' },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.840617077185!2d-49.283821824611366!3d-25.410145177574474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41ada19fbed%3A0x785248a8ac8bf311!2sVila%20dos%20Bichos%20Veterin%C3%A1ria%20Geral%20e%20Dermatologia%2C%20Pet%20Shop!5e0!3m2!1spt-BR!2sbr!4v1776435488216!5m2!1spt-BR!2sbr',
};

export const navLinks: NavLink[] = [
  { label: 'A Clínica', href: '/sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Equipe', href: '/#equipe' },
  { label: 'Estrutura', href: '/#estrutura' },
  { label: 'Contato', href: '/#contato' },
];

export const highlights: Highlight[] = [
  {
    id: 'completo',
    icon: '🏥',
    title: 'Atendimento Completo',
    description:
      'Consultas, exames e procedimentos com toda a infraestrutura necessária.',
  },
  {
    id: 'especialidades',
    icon: '💚',
    title: 'Especialidades',
    description:
      'Veterinária geral e dermatologia com profissionais experientes.',
  },
  {
    id: 'petshop',
    icon: '🐾',
    title: 'Pet Shop Integrado',
    description: 'Tudo o que seu pet precisa em um só lugar.',
  },
];

export const services: Service[] = [
  {
    id: 'consultas',
    name: 'Consultas',
    icon: '🩺',
    description: 'Avaliação clínica completa com diagnóstico preciso.',
  },
  {
    id: 'dermatologia',
    name: 'Dermatologia',
    icon: '🔬',
    description: 'Especialidade em problemas de pele e pelagem.',
  },
  {
    id: 'vacinacao',
    name: 'Vacinação',
    icon: '💉',
    description: 'Calendário vacinal completo para cães e gatos.',
  },
  {
    id: 'cirurgias',
    name: 'Cirurgias',
    icon: '🏥',
    description: 'Procedimentos cirúrgicos com segurança e cuidado.',
  },
  {
    id: 'exames',
    name: 'Exames Laboratoriais',
    icon: '🧪',
    description: 'Resultados rápidos e confiáveis.',
  },
  {
    id: 'banho-tosa',
    name: 'Banho & Tosa',
    icon: '🛁',
    description: 'Higiene e estética para seu pet.',
  },
  {
    id: 'petshop',
    name: 'Pet Shop',
    icon: '🛍️',
    description: 'Rações, acessórios e produtos de qualidade.',
  },
  {
    id: 'domiciliar',
    name: 'Atendimento Domiciliar',
    icon: '🏡',
    description: 'Conforto e tranquilidade na sua casa.',
  },
];

export const team: TeamMember[] = [
  {
    id: 'mariana',
    name: 'Dra. Mariana Costa',
    specialty: 'Veterinária Geral',
    bio: 'Formada pela UFPR com mais de 10 anos de experiência em clínica geral e atendimento a pequenos animais.',
    photo:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'rafael',
    name: 'Dr. Rafael Lima',
    specialty: 'Dermatologia',
    bio: 'Especialista em dermatologia veterinária pela UNESP, dedicado ao tratamento de doenças de pele em cães e gatos.',
    photo:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'julia',
    name: 'Dra. Júlia Mendes',
    specialty: 'Clínica Médica',
    bio: 'Especialista em medicina felina com pós-graduação pela UFRGS. Atendimento humanizado e atencioso.',
    photo:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=640&q=80&auto=format&fit=crop',
  },
];

export const gallery: GalleryImage[] = [
  {
    id: 'recepcao',
    src: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=900&q=80&auto=format&fit=crop',
    alt: 'Recepção moderna da clínica veterinária',
  },
  {
    id: 'consultorio',
    src: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&q=80&auto=format&fit=crop',
    alt: 'Consultório veterinário equipado',
  },
  {
    id: 'exames',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&auto=format&fit=crop',
    alt: 'Sala de exames laboratoriais',
  },
  {
    id: 'cirurgia',
    src: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&q=80&auto=format&fit=crop&sat=-30',
    alt: 'Centro cirúrgico preparado',
  },
  {
    id: 'banho',
    src: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&q=80&auto=format&fit=crop',
    alt: 'Espaço de banho e tosa',
  },
  {
    id: 'petshop',
    src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80&auto=format&fit=crop',
    alt: 'Área de pet shop integrada',
  },
];

export const reviews: Review[] = [
  {
    id: 'patricia',
    author: 'Patrícia S.',
    rating: 5,
    text: 'Atendimento incrível! Cuidaram do meu cachorro com muito carinho. A Dra. Mariana é super atenciosa e explica tudo com calma. Recomendo de olhos fechados.',
  },
  {
    id: 'bruno',
    author: 'Bruno A.',
    rating: 5,
    text: 'Levei minha gata para uma consulta de dermatologia e o Dr. Rafael resolveu o problema rapidamente. Estrutura excelente e equipe muito profissional.',
  },
  {
    id: 'leticia',
    author: 'Letícia M.',
    rating: 5,
    text: 'A Vila dos Bichos virou referência aqui em Curitiba. Atendimento humano, preço justo e os profissionais realmente amam o que fazem. Não troco por outra.',
  },
];

export const values: Value[] = [
  {
    id: 'cuidado',
    icon: '💚',
    title: 'Cuidado',
    description: 'Cada pet é tratado como se fosse da nossa família.',
  },
  {
    id: 'excelencia',
    icon: '🔬',
    title: 'Excelência',
    description: 'Profissionais especializados e estrutura completa.',
  },
  {
    id: 'confianca',
    icon: '🤝',
    title: 'Confiança',
    description: 'Comunicação clara e transparente com cada tutor.',
  },
];

export const stats: Stat[] = [
  { id: 'anos', value: '8+', label: 'Anos de Experiência' },
  { id: 'pets', value: '5.000+', label: 'Pets Atendidos' },
  { id: 'nota', value: '4.9★', label: 'Avaliação Média' },
  { id: 'especialidades', value: '3', label: 'Especialidades' },
];
