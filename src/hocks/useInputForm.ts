import { useState } from "react";

export default function useInputForm(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);
  const eventHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return [value, eventHandler] as const;
}
