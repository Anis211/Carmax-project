import { transporter } from "@/lib/nodemailer";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    if (!data.name || !data.number || !data.message) {
      return res.status(400).json("Missed data");
    }
    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Новый Клиент!!!",
        html: `<h1>Новый Клиент!!!</h1><p>Имя: ${data.name}</p><p>Номер WhatsApp: ${data.number}</p><p>Сообщение: ${data.message}</p>`,
      });
      return res.status(200).json("success");
    } catch (err) {
      console.log(err.message);
      return res.status(400).json(err.message);
    }
  }
  return res.status(400).json("Missed data");
}
