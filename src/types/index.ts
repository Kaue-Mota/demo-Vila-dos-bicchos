export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  photo: string;
}

export interface Review {
  id: string;
  text: string;
  author: string;
  rating: number;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDigits: string;
  whatsapp: string;
  email: string;
  address: string;
  neighborhood: string;
  city: string;
  hours: { day: string; time: string }[];
  mapEmbed: string;
}

export interface NavLink {
  label: string;
  href: string;
}
