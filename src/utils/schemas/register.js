import * as yup from "yup";

export const registerSchema = yup
  .object({
    fullName: yup.string().required("Please provide a full name"),
    postBoxNumber: yup
      .number()
      .positive()
      .integer()
      .typeError("Please provide a unique numeric p.o box number")
      .required("Please provide a unique numeric p.o box number"),
    email: yup.string().email().required("Please provide an email address"),
    password: yup.string().required("Please provide a password"),
    confirmPassword: yup.string().required("Please provide a password"),
  })
  .required();
