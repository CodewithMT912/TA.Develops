
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { name, email, service, message } =
      await request.json();

    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );

    const { error } = await supabase
      .from("inquiries")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          service: service || null,
          message: message.trim(),
        },
      ]);

    if (error) {
      console.error("Supabase inquiry error:", error);

      return NextResponse.json(
        { error: "Could not save your message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message was sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
