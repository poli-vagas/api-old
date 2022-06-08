export const validTypes = [
  'Iniciação Científica',
  'Estágio',
  'Trainee',
  'Emprego',
] as const;

export type Type = typeof validTypes[number];
