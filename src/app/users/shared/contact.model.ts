export class Contact {
    description: string;
    type: ContactType;
}

export class ContactType {
    name: string;
    pattern: RegExp;
    mask: string;
}