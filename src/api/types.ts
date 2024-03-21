export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: Record<string, string>;
  article1CId: number;
}

export interface ICategory {
  id: number;
  name: string;
}
