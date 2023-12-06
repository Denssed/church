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

export {
  input,
  login,
  button,
  formInterface,
  Baptism
};
