import axios from "@/axios.config.js";

async function submitForm(form) {
  const response = await axios.post("/submit", form);

  return response;
}

export { submitForm };
