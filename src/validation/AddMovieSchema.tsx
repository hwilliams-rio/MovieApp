import * as yup from "yup";

export const movieSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});
