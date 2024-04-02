import { IProducer } from '../producer/types';

export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  description?: string;
  article1CId?: number;
  producer: IProducer;
  properties: IProductProperty[];
}

interface IProductProperty {
  name: string;
  type: 'TEXT' | 'NUMBER';
  value: string | number;
}
