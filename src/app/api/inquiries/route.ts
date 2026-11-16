
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      whatsapp,
      company,
      service,
      budget,
      timeline,
      description,
    } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !whatsapp?.trim() ||
      !service?.trim() ||
      !budget?.trim() ||
      !timeline?.trim() ||
      !description?.trim()
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
      .from("quote_requests")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          company: company?.trim() || null,
          service: service.trim(),
          budget: budget.trim(),
          timeline: timeline.trim(),
          description: description.trim(),
        },
      ]);

    if (error) {
      console.error("Supabase quote error:", error);

      return NextResponse.json(
        { error: "Could not save your quote request." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Quote request saved successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
