//Types
type input = {
  label: string,
  name: string,
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

export {
  input,
  login
};


// interface user {
//   email: {
//       label: string,
//       name: string,
//       type: string,
//       placeholder: string
//     }
//     password: {
//       label: string,
//       name: string,
//       type: string,
//       placeholder: string,
//     }
//   }
