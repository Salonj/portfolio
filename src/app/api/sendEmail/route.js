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
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: 'hello@onnisalomaa.dev',
      subject: `New Portfolio Contact Form message from ${name}`,
      html: `
      <div
  style="
    font-family: 'Arial', sans-serif;
    color: #e5e7eb;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 12px;
    background-color: #1e293b;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  "
>
  <!-- Header -->
  <div
    style="
      background: #2563eb;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      border-radius: 12px 12px 0 0;
    "
  >
    <h1 style="font-size: 28px; margin: 0">✨ New Portfolio Message ✨</h1>
    <p style="font-size: 16px; margin: 5px 0 0">
      ${name} contacted you through your portfolio!
    </p>
  </div>

  <!-- Body -->
  <div style="padding: 20px">
    <p style="font-size: 18px; margin-bottom: 20px; line-height: 1.6; color: #e2e8f0">
      Hey Onni,
    </p>
    <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6; color: #e2e8f0">
      You’ve just received a new message! Here are the details:
    </p>

    <!-- Content Cards -->
    <div
      style="
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background-color: #334155;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      "
    >
      <strong
        style="
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
          color: #e2e8f0;
        "
        >Name:</strong
      >
      <p style="margin: 0; font-size: 16px; color: #cbd5e1">${name}</p>
    </div>

    <div
      style="
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background-color: #334155;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      "
    >
      <strong
        style="
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
          color: #e2e8f0;
        "
        >Email:</strong
      >
      <p style="margin: 0; font-size: 16px; color: #cbd5e1">${email}</p>
    </div>

    <div
      style="
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        background-color: #334155;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      "
    >
      <strong
        style="
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
          color: #e2e8f0;
        "
        >Message:</strong
      >
      <p style="margin: 0; font-size: 16px; color: #cbd5e1">${message}</p>
    </div>

    <p
      style="
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
        color: #e2e8f0;
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
      background: #2563eb; /* Accent color */
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
