import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rishivarshini7713@gmail.com",
        pass: "rlea ycwh exns yuts", // your Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"CPIM Website Contact" <rishivarshini7713@gmail.com>`,
      to: "cpimcbm@gmail.com",
      subject: subject || `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Mail error:", error);
    return Response.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
