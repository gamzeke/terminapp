import IAppointments from '../appointment';

interface ICustomer {
  readonly id: number;
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
  readonly state: string;
  readonly country: string;
  readonly appointments?: IAppointments[];
  
  // TODO-MMUEJDE: Where is the time stamp?
}

export default ICustomer;
