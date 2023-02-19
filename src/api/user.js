import axios from "@/axios.config.js";

async function submitForm(form) {
  try {
    const response = await axios.post("/submit", form);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export { submitForm };
