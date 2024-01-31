import { useContext } from "react";
import { isEmail } from "validator";

import LanguageContext from "../context/LanguageContext";
import { nameRegex } from "../utils/regex";

const useValidations = () => {
  const { texts } = useContext(LanguageContext);

  const nameValidation = {
    required: {
      value: true,
      message: texts.form.name.required,
    },
    pattern: {
      value: nameRegex,
      message: texts.form.name.pattern,
    },
    minLength: {
      value: 5,
      message: texts.form.name.minLength,
    },
    maxLength: {
      value: 50,
      message: texts.form.name.maxLength,
    },
  };

  const emailValidation = {
    required: {
      value: true,
      message: texts.form.email.required,
    },
    minLength: {
      value: 6,
      message: texts.form.email.minLength,
    },
    maxLength: {
      value: 64,
      message: texts.form.email.maxLength,
    },
    validate: {
      isEmail: (value) => isEmail(value) || texts.form.email.validate,
    },
  };

  const messageValidation = {
    required: {
      value: true,
      message: texts.form.message.required,
    },
    minLength: {
      value: 20,
      message: texts.form.message.minLength,
    },
    maxLength: {
      value: 500,
      message: texts.form.message.maxLength,
    },
  };

  return { nameValidation, emailValidation, messageValidation };
};

export default useValidations;
