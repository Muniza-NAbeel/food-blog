import { type SchemaTypeDefinition } from 'sanity';
import { home } from './home';
import { products } from './products';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, products],
}
