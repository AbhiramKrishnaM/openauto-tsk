import { useState } from "react";

import { submitForm } from "@/api/user.js";

import Button from "@/components/base/Button";

import Input from "@/components/base/Input";

function Form() {
  const [form, setForm] = useState({ name: "", email: "" });

  const [loading, setLoading] = useState(false);

  const handleNameChange = (event) => {
    setForm({ ...form, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setForm({ ...form, email: event.target.value });
  };

  async function submit(event) {
    setLoading(true);

    event.preventDefault();

    const response = await submitForm(form);

    console.log(response);
    setLoading(false);
  }

  return (
    <form className="flex flex-col w-6/12 gap-6" onSubmit={submit}>
      <Input
        type="text"
        placeholder="Enter your name"
        required={true}
        onInputChange={handleNameChange}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        required={true}
        onInputChange={handleEmailChange}
      />
      <Button title="Submit" type="submit" isLoading={loading} />
    </form>
  );
}

export default Form;
