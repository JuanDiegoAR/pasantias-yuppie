import { Genders } from "./contactSchema";

export interface Rate {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rate;
}

export interface StructureContactForm {
  name: string;
  lastName: string;
  age: number;
  email: string;
  country: string;
  address: string;
  gender: Genders;
  message: string;
}
