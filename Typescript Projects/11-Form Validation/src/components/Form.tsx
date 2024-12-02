import React, { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const Form: React.FC = () => {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!values.name) newErrors.name = 'Name is required';
    else if (values.name.length < 3) newErrors.name = 'Name must be at least 3 characters';

    if (!values.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = 'Email is invalid';

    if (!values.password) newErrors.password = 'Password is required';
    else if (values.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      setValues({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input
          className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          id="name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
        <input
          className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          id="password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
