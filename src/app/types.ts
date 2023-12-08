//Types
type input = {
  label: string,
  placeholder: string,
  inputType: string,
  type: string
}

type button = {
  text: string,
  type: string
}

type formInput = {
  type: string,
  value: string
}

interface login {
  email: formInput
  password: formInput
}

interface formInterface {
  [key: string]: any
}

interface Baptism {
  id: string;
  name: string;
  lastName: string;
  pof: string;
  age: string;
}

interface Presentation {
  id: string;
  nameFather: string;
  phonePather: string;
  nameMother: string;
  phoneMother: string;
  nameChild: string;
  childPhoto: string;
  godParent: string;
  minister: string;
  date: string;
}


interface Staff {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: {
    admin: boolean;
    accoutant: boolean;
  };
}

interface User {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  civilState: string;
  profesion: string;
  address: string;
  isBaptized: boolean;
}



export {
  input,
  login,
  button,
  formInterface,
  Baptism,
  Presentation,
  Staff,
  User
};
