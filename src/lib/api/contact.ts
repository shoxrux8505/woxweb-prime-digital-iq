import axios from "axios";

export async function sendContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { data: res } = await axios.post(
    `${process.env.API_URI}/messagesasdasd`,
    data
  );

  return res;
}
