export const validTypes = ['Estágio', 'Trainee', 'Emprego'] as const;

export type Type = typeof validTypes[number];
