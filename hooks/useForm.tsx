import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (validateForm) {
      setErrors(validateForm(form));
    }
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = () => {
    setErrors(validateForm(form));
  };

  const resetForm = (initialForm) => {
    setForm(initialForm);
    setErrors({});
  };
  return {
    // loading,
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setErrors,
  };
};
