import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleReset() {
    setValues(initialValues);
  }

  return { values, handleChange, handleReset };
}

export { useForm };
