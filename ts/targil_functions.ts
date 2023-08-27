interface IAddress {
  state?: string;
  country: string;
  city: string;
  street: string;
  house: number;
  zip: number;
}

interface IContacts {
  id?: string;
  fname: string;
  lname: string;
  email: string;
  dob: Date;
  phone: string;
  age: number;
  address?: IAddress;
}

const targilFunction = (
  id: string,
  contactsArr: IContacts[]
): null | IContacts | string => {
  if (!contactsArr || !contactsArr.length) {
    //if(contactsArr == null || contactsArr.length == 0)
    return null;
  }
  for (let contact of contactsArr) {
    if (id === contact.id) {
      return contact;
    }
  }
  return "not found";
};

let contact = targilFunction("1", [
  {
    id: "1",
    fname: "h",
    lname: "h",
    email: "h@h.hhh",
    dob: new Date(),
    phone: "050505050505050505050",
    age: 50,
  },
  {
    id: "2",
    fname: "a",
    lname: "a",
    email: "a@a.aaa",
    dob: new Date(),
    phone: "050505050505050505050",
    age: 50,
  },
  {
    id: "3",
    fname: "s",
    lname: "s",
    email: "s@s.sss",
    dob: new Date(),
    phone: "050505050505050505050",
    age: 50,
  },
]);
console.log("contact", contact);
