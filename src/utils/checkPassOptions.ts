export interface IPasswordOptions {
  id: number;
  value: string;
  minDiversity: number;
  minLength: number;
}

export interface IPasswordOptionsState {
  contains: string[];
  id: number;
  length: number;
  value: string;
}

export const DEFAULT_OPTIONS = [
  {
    id: 0,
    value: 'Muito fraca',
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: 'Fraca',
    minDiversity: 2,
    minLength: 4,
  },
  {
    id: 2,
    value: 'Média',
    minDiversity: 3,
    minLength: 6,
  },
  {
    id: 3,
    value: 'Forte',
    minDiversity: 4,
    minLength: 8,
  },
] as IPasswordOptions[];
