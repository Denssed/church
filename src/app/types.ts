//Types
type input = {
  label: string,
  name: string,
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

export {
  input,
  login,
  button
};
