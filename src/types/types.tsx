export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    name: string;
    id: string;
    email: string;
    address: IAddress;
}

export interface ITodo {
    id: number;
    title: string;
    compleated: boolean;
    
}