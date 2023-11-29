//Types
type input = {
  label: string,
  placeholder: string,
  inputType: string,
  type: string
}

type button = {
  text: string,
  type: string,
  icon: string | undefined,
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

export {
  input,
  login,
  button,
  formInterface
};
