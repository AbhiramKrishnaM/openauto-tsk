import { useState } from "react";

import { submitForm } from "@/api/user.js";

import Button from "@/components/base/Button";

import Input from "@/components/base/Input";

import Popup from "@/components/core/Popup";

function Form() {
  const [form, setForm] = useState({ name: "", email: "" });

  const [popup, setPopup] = useState({ status: "success", message: "" });

  const [showPopup, setShowPopup] = useState(false);

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

    try {
      const response = await submitForm(form);

      // show success pop up
      setPopup({ ...popup, status: "success", message: response.data.message });
      setForm({ name: "", email: "" });

      ShowPopup();
    } catch (error) {
      setLoading(false);

      setPopup({
        ...popup,
        status: "error",
        message: error.response.data.message,
      });

      ShowPopup();

      // show error pop up
      throw new Error(error);
    }

    setLoading(false);
  }

  function ShowPopup() {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  return (
    <form className="flex flex-col w-6/12 gap-6" onSubmit={submit}>
      {showPopup && <Popup info={popup} className="z-50" />}
      <Input
        type="text"
        placeholder="Enter your name"
        value={form.name}
        required={true}
        onInputChange={handleNameChange}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        value={form.email}
        required={true}
        onInputChange={handleEmailChange}
      />

      <Button title="Submit" type="submit" isLoading={loading} />
    </form>
  );
}

export default Form;
