import { createContext } from "react";

interface RegisterFormContext {
  name: string;
  email: string;
  nameOnChange: (value: string) => void;
  emailOnChange: (value: string) => void;
}

const defaultValue: RegisterFormContext = {
  name: "",
  email: "",
  nameOnChange: () => {},
  emailOnChange: () => {},
};

export const RegisterFormContext = createContext(defaultValue);
