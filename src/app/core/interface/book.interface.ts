import { IFullName } from './full-name.interface';

export interface IBook {
  id: string;
  bookName: string;
  author: IFullName;
  lang: Record<string, string>;
  pages: number;
  cover: Cover;
}

export interface ILang {
  [key: string]: string;
}

export type Cover = 'soft' | 'hard';
