export interface ICustomer {
    readonly id?: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly firstContactDate: Date;
    readonly telephone: string;
    readonly birthday: Date;
    readonly streetName: string;
    readonly streetNumber: number;
    readonly postCode: number;
    readonly city: string;
}
