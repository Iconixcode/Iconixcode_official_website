import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  company?: string;
  email?: string;
  project?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { message: "Contact service is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const project = body.project?.trim() ?? "";

    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!project || project.length < 10) {
      return NextResponse.json(
        { message: "Please add a few more details about your project." },
        { status: 400 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        project,
      }),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          message:
            result.message ||
            "Unable to send your message right now. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message:
          result.message ||
          "Thanks for contacting Iconixcode. We received your message and will reach you soon.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}