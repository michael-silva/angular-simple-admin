export class Address {
    postalCode: string;
    street: string;
    number: number;
    complement: string;
    state: string;
    city: string;
    district: string;
    type: AddressType;
}

export class AddressType {
    name: string;
}