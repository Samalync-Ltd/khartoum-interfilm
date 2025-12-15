export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}