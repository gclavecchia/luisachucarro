import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(data) {
  const { name, email, phone, event, guests, date, message } = data;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #1a1a1a; color: #F5F0EB;">
  <div style="max-width: 560px; margin: 0 auto; padding: 40px 24px;">
    <div style="border-bottom: 1px solid rgba(201,169,110,0.2); padding-bottom: 24px; margin-bottom: 32px;">
      <span style="font-size: 11px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: #C9A96E;">Nueva consulta</span>
    </div>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 12px; color: #9A9490; width: 140px;">Nombre</td>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 14px; color: #F5F0EB;">${name || "—"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 12px; color: #9A9490;">Email</td>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 14px; color: #F5F0EB;">${email || "—"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 12px; color: #9A9490;">Teléfono</td>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 14px; color: #F5F0EB;">${phone || "—"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 12px; color: #9A9490;">Tipo de evento</td>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 14px; color: #F5F0EB;">${event || "—"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 12px; color: #9A9490;">Invitados</td>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 14px; color: #F5F0EB;">${guests || "—"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 12px; color: #9A9490;">Fecha tentativa</td>
        <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.08); font-size: 14px; color: #F5F0EB;">${date || "—"}</td>
      </tr>
    </table>
    
    ${message ? `
    <div style="margin-top: 24px;">
      <div style="font-size: 12px; color: #9A9490; margin-bottom: 8px;">Mensaje</div>
      <div style="font-size: 14px; color: #F5F0EB; line-height: 1.7; white-space: pre-wrap;">${message}</div>
    </div>
    ` : ""}
    
    <div style="margin-top: 40px; font-size: 11px; color: #6A6460; letter-spacing: 0.5px;">
      Enviado desde web Luis Achucarro
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, event, guests, date, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos" },
        { status: 400 }
      );
    }

    const eventType = event?.trim() || "Consulta general";
    const subject = `Nueva consulta de ${name.trim()} - ${eventType}`;

    const { data, error } = await resend.emails.send({
      from: "Luis Achucarro Web <onboarding@resend.dev>",
      to: ["achu8751@gmail.com", "contacto@luisachucarro.com"],
      subject,
      html: buildEmailHtml({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || "",
        event: eventType,
        guests: guests?.trim() || "",
        date: date?.trim() || "",
        message: message?.trim() || "",
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: err.message || "Error interno" },
      { status: 500 }
    );
  }
}
