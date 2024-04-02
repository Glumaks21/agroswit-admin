export interface ICategory {
  id: number;
  name: string;
  description?: string;
  properties: ICategoryProperty[];
  subcategories: Omit<ICategory, 'properties' | 'subcategories'>[];
}

export interface ICategoryProperty {
  name: string;
  type: 'TEXT' | 'NUMBER';
}
