import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          origin: "http://localhost",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            user_name: name,
            user_email: email,
            replay_to: email,
            message: message,
          },
        }),
      }
    );

    const text = await response.text();

    if (!response.ok) {
      console.error("EmailJS API Error:", text);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EmailJS Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
