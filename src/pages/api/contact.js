import { transporter } from "@/lib/nodemailer";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json("Missed data");
    }
    try {
      console.log(data.email);
      await transporter.sendMail({
        from: data.email,
        to: process.env.EMAIL,
        subject: data.message,
        html: "<h1>Hello</h1>",
      });
      return res.status(200).json("success");
    } catch (err) {
      console.log(err.message);
      return res.status(400).json(err.message);
    }
  }
  return res.status(400).json("Missed data");
}
