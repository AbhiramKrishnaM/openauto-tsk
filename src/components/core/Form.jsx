import Button from "@/components/base/Button";

import Input from "@/components/base/Input";

function sendForm(event) {
  event.preventDefault();

  alert("You clicked me");
}

function Form() {
  return (
    <form className="flex flex-col w-6/12 gap-6" onSubmit={sendForm}>
      <Input type="text" placeholder="Enter your name" required={true} />
      <Input type="email" placeholder="Enter your email" required={true} />
      <Button title="Submit" type="submit" />
    </form>
  );
}

export default Form;
