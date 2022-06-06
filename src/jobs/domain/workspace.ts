export const validWorkspaces = ['Presencial', 'Remoto', 'Híbrido'] as const;

export type Workspace = typeof validWorkspaces[number];
