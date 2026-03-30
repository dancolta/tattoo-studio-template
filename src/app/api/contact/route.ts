import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Log for development — wire to Resend, webhook, or booking platform per client
  console.log("Contact form submission:", body);

  // TODO: Replace with actual email/webhook integration
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'Studio <noreply@yourdomain.com>',
  //   to: 'artist@yourdomain.com',
  //   subject: `New inquiry from ${body.name}`,
  //   text: `Name: ${body.name}\nEmail: ${body.email}\nStyle: ${body.style}\n\n${body.message}`,
  // });

  return NextResponse.json({ success: true });
}
