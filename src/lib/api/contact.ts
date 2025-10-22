import axios from "axios";

export async function sendContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { data: res } = await axios.post(
    `${import.meta.env.VITE_API_URI}/messages`,
    data
  );

  return res;
}
