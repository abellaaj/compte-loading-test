import { Moment } from 'moment';

export interface ICompte {
  id?: string;
  libelle?: string;
  banque?: string;
  dateAdded?: Moment;
  dateModified?: Moment;
  iban?: string;
  devise?: string;
}

export class Compte implements ICompte {
  constructor(
    public id?: string,
    public libelle?: string,
    public banque?: string,
    public dateAdded?: Moment,
    public dateModified?: Moment,
    public iban?: string,
    public devise?: string
  ) {}
}
