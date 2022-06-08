export const validCourses = [
  'Engenharia Ambiental',
  'Engenharia Civil',
  'Engenharia de Computação e Informação',
  'Engenharia de Controle e Automação',
  'Engenharia Elétrica',
  'Engenharia Eletrônica e de Computação',
  'Engenharia de Materiais',
  'Engenharia Mecânica',
  'Engenharia Metalúrgica',
  'Engenharia Naval e Oceânica',
  'Engenharia Nuclear',
  'Engenharia de Petróleo',
  'Engenharia de Produção',
] as const;

export type Course = typeof validCourses[number];
