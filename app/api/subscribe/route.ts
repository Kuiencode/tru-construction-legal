const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let email: unknown;
  try {
    const body = await req.json();
    email = body?.email;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return Response.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const endpoint = process.env.EMAIL_ENDPOINT;

  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error("Failed to forward waitlist signup to EMAIL_ENDPOINT:", error);
      return Response.json(
        { ok: false, message: "Something went wrong. Please try again." },
        { status: 502 },
      );
    }
  } else {
    // No email provider configured yet — log the signup so it isn't lost.
    // See README.md for how to wire up a real provider via EMAIL_ENDPOINT.
    console.log("Waitlist signup (EMAIL_ENDPOINT not configured):", email);
  }

  return Response.json({ ok: true, message: "Thanks! We'll notify you at launch." });
}
