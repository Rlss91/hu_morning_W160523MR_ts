interface IPhone {
  phoneNumber: number | string;
  model: string;
  nfc?: boolean;
}

let phone: IPhone;
phone = {
  phoneNumber: 500,
  model: "asdfasdfasdf",
};
phone.phoneNumber = 600;

let phone2: IPhone;
