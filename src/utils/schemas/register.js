import * as yup from "yup";

export const registerSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    postBoxNumber: yup.number().positive().integer().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  })
  .required();
