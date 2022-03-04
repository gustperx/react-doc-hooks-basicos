import { useState } from "react";

export const userForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const hadleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return {
    values,
    hadleInputChange,
  };
};
