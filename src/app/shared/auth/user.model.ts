import { Address } from './address.model';
import { Contact } from './contact.model';

export class User {
    id: number;
    image: string;
    name: string;
    born: Date;

    account: Account;
    addresses: Address[];
    contacts: Contact[];
}

export class Account {
    login: string;
    password: string;
    email: string;
}