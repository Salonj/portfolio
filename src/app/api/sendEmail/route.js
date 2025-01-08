import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOption = {
      from: 'Sender Name <onnikoodaa@gmail.com>',
      to: 'onnikoodaa@gmail.com',
      subject: `New Portfolio Contact Form message from ${name}`,
      html: `
   <div
  style="
    font-family: 'Arial', sans-serif;
    color: #111827; /* Foreground */
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 12px;
    background-color: #f2f2f2; /* Light background */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  "
>
  <!-- Header -->
  <div
    style="
      background: #3b9cd4; /* Accent color */
      color: #ffffff; /* Light text */
      text-align: center;
      padding: 20px;
      border-radius: 12px 12px 0 0;
    "
  >
    <h1 style="font-size: 28px; margin: 0">✨New Portfolio Message✨</h1>
    <p style="font-size: 16px; margin: 5px 0 0">
      Someone contacted you through your portfolio!
    </p>
  </div>

  <!-- Body -->
  <div style="padding: 20px">
    <p style="font-size: 18px; margin-bottom: 20px; line-height: 1.6">
      Hey Onni,
    </p>
    <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6">
      You’ve just received a new message! Here are the details:
    </p>

    <!-- Content Cards -->
    <div
      style="
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background-color: #ffffff; /* Secondary background */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      "
    >
      <strong
        style="
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
          color: #111827;
        "
        >Name:</strong
      >
      <p style="margin: 0; font-size: 16px; color: #555">${name}</p>
    </div>

    <div
      style="
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background-color: #ffffff; /* Secondary background */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      "
    >
      <strong
        style="
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
          color: #111827;
        "
        >Email:</strong
      >
      <p style="margin: 0; font-size: 16px; color: #555">${email}</p>
    </div>

    <div
      style="
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background-color: #ffffff; /* Secondary background */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      "
    >
      <strong
        style="
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
          color: #111827;
        "
        >Message:</strong
      >
      <p style="margin: 0; font-size: 16px; color: #555">${message}</p>
    </div>

    <p
      style="
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
        color: #111827;
      "
    >
      🚀 Don’t forget to reply to their message!
    </p>
  </div>

  <!-- Footer -->
  <footer
    style="
      padding: 15px;
      text-align: center;
      background: #3b9cd4; /* Accent color */
      color: #ffffff; /* Light text */
      border-radius: 0 0 12px 12px;
    "
  >
    <p style="margin: 5px 0; font-size: 14px">Portfolio Contact Form</p>
    <p style="margin: 0; font-size: 14px">onnisalomaa.dev</p>
  </footer>
</div>
  `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: 'Email Sent Successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
