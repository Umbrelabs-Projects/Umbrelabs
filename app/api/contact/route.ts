import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/* ───────────────────────── Brand tokens (email-safe) ───────────────────────── */
const BRAND = {
  ink: '#14110a',
  inkSoft: '#2a251a',
  paper: '#fffdf8',
  paperDim: '#ece8de',
  surface: '#f3f0e8',
  text: '#1a160e',
  muted: '#6b6354',
  hairline: '#ddd6c7',
  gold: '#b08400',
  goldBright: '#ffcf5c',
}

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif"
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/* Wordmark used in headers: Umbre + gold "labs" */
function wordmark(onDark: boolean): string {
  const base = onDark ? BRAND.paper : BRAND.text
  const accent = onDark ? BRAND.goldBright : BRAND.gold
  return `<span style="font-family:${SERIF};font-size:24px;font-weight:600;letter-spacing:0.2px;color:${base};">Umbre<span style="color:${accent};">labs</span></span>`
}

/* ───────────────────────── Notification email (to studio) ───────────────────────── */
function buildNotificationEmail(data: {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
}): string {
  const now = new Date().toLocaleString('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'UTC',
  })

  const rows = [
    { label: 'Name', value: escapeHtml(data.name) },
    { label: 'Email', value: `<a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.gold};text-decoration:none;">${escapeHtml(data.email)}</a>` },
    data.company ? { label: 'Company', value: escapeHtml(data.company) } : null,
    data.phone ? { label: 'Phone', value: escapeHtml(data.phone) } : null,
    data.service ? { label: 'Focus area', value: escapeHtml(data.service) } : null,
  ].filter(Boolean) as { label: string; value: string }[]

  const detailRows = rows
    .map(
      (r, i) => `
        <tr>
          <td style="padding:14px 0;${i < rows.length - 1 ? `border-bottom:1px solid ${BRAND.hairline};` : ''}width:130px;vertical-align:top;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.muted};">${r.label}</td>
          <td style="padding:14px 0;${i < rows.length - 1 ? `border-bottom:1px solid ${BRAND.hairline};` : ''}font-family:${SANS};font-size:15px;color:${BRAND.text};">${r.value}</td>
        </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New project inquiry</title></head>
<body style="margin:0;padding:0;background:${BRAND.paperDim};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.paperDim};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(20,17,10,0.12);">

        <!-- Header -->
        <tr><td style="background:${BRAND.ink};padding:36px 40px;">
          ${wordmark(true)}
          <div style="margin-top:22px;font-family:${SANS};font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:${BRAND.goldBright};">New project inquiry</div>
          <div style="margin-top:8px;font-family:${SERIF};font-size:28px;line-height:1.2;color:${BRAND.paper};">Someone wants to build with you.</div>
        </td></tr>

        <!-- Details -->
        <tr><td style="background:${BRAND.paper};padding:36px 40px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRows}</table>
        </td></tr>

        <!-- Message -->
        <tr><td style="background:${BRAND.paper};padding:20px 40px 40px;">
          <div style="font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.muted};margin-bottom:12px;">Message</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.surface};border:1px solid ${BRAND.hairline};border-radius:12px;">
            <tr><td style="padding:22px 24px;border-left:3px solid ${BRAND.gold};border-radius:12px;">
              <div style="font-family:${SANS};font-size:15px;line-height:1.7;color:${BRAND.text};white-space:pre-wrap;">${escapeHtml(data.message)}</div>
            </td></tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr><td style="border-radius:999px;background:${BRAND.ink};">
              <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20your%20inquiry%20to%20Umbrelabs" style="display:inline-block;padding:13px 26px;font-family:${SANS};font-size:14px;font-weight:600;color:${BRAND.paper};text-decoration:none;border-radius:999px;">Reply to ${escapeHtml(data.name.split(' ')[0] || 'them')} &rarr;</a>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:${BRAND.ink};padding:24px 40px;">
          <div style="font-family:${SANS};font-size:12px;color:rgba(255,253,248,0.55);line-height:1.6;">
            Received ${now} UTC<br>
            via the Umbrelabs contact form
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

/* ───────────────────────── Acknowledgement email (to sender) ───────────────────────── */
function buildAcknowledgementEmail(data: { name: string; service?: string }): string {
  const firstName = escapeHtml((data.name || '').split(' ')[0] || 'there')
  const steps = [
    ['01', 'We review your message', "Our team reads every inquiry personally — usually within one business day."],
    ['02', 'A short discovery call', 'We align on scope, goals, and constraints to understand what success looks like.'],
    ['03', 'A tailored proposal', 'You receive a clear plan with timeline, team, and investment.'],
  ]

  const stepRows = steps
    .map(
      ([n, title, desc]) => `
        <tr><td style="padding:0 0 22px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
            <td style="width:46px;vertical-align:top;font-family:${SERIF};font-size:20px;color:${BRAND.gold};">${n}</td>
            <td style="vertical-align:top;">
              <div style="font-family:${SERIF};font-size:17px;color:${BRAND.text};margin-bottom:3px;">${title}</div>
              <div style="font-family:${SANS};font-size:14px;line-height:1.6;color:${BRAND.muted};">${desc}</div>
            </td>
          </tr></table>
        </td></tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>We received your message</title></head>
<body style="margin:0;padding:0;background:${BRAND.paperDim};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.paperDim};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(20,17,10,0.12);">

        <!-- Header -->
        <tr><td style="background:${BRAND.ink};padding:40px;text-align:center;">
          ${wordmark(true)}
        </td></tr>

        <!-- Intro -->
        <tr><td style="background:${BRAND.paper};padding:44px 40px 12px;">
          <div style="font-family:${SANS};font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:${BRAND.gold};margin-bottom:14px;">Message received</div>
          <div style="font-family:${SERIF};font-size:30px;line-height:1.2;color:${BRAND.text};">Thank you, ${firstName}.</div>
          <p style="font-family:${SANS};font-size:16px;line-height:1.7;color:${BRAND.muted};margin:18px 0 0;">
            Your message has reached the studio${data.service ? ` regarding <span style="color:${BRAND.text};">${escapeHtml(data.service)}</span>` : ''}. We're glad you reached out — here's what happens next.
          </p>
        </td></tr>

        <!-- Steps -->
        <tr><td style="background:${BRAND.paper};padding:34px 40px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${stepRows}</table>
        </td></tr>

        <!-- Sign-off -->
        <tr><td style="background:${BRAND.paper};padding:14px 40px 44px;">
          <div style="border-top:1px solid ${BRAND.hairline};padding-top:26px;">
            <div style="font-family:${SANS};font-size:15px;line-height:1.7;color:${BRAND.text};">With appreciation,</div>
            <div style="font-family:${SERIF};font-size:18px;color:${BRAND.text};margin-top:4px;">The Umbrelabs Team</div>
            <div style="font-family:${SANS};font-size:13px;color:${BRAND.muted};margin-top:2px;">Engineering the future of technology, with craft.</div>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:${BRAND.ink};padding:24px 40px;text-align:center;">
          <div style="font-family:${SANS};font-size:12px;color:rgba(255,253,248,0.55);line-height:1.7;">
            Umbrelabs &middot; Ghana &middot; Worldwide<br>
            This is an automated confirmation — no need to reply.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    await transporter.verify()

    const studioInbox = process.env.CONTACT_EMAIL || 'demoray18@gmail.com'
    const fromName = `Umbrelabs Studio`
    const fromAddress = process.env.SMTP_USER

    // 1) Notification to the studio
    const notifyText = [
      `New project inquiry`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      phone ? `Phone: ${phone}` : null,
      service ? `Focus area: ${service}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter((l) => l !== null)
      .join('\n')

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: studioInbox,
      replyTo: `"${name}" <${email}>`,
      subject: `New inquiry — ${service || 'General'} · ${name}`,
      text: notifyText,
      html: buildNotificationEmail({ name, email, company, phone, service, message }),
    })

    // 2) Branded acknowledgement to the sender (best-effort; never fails the request)
    try {
      await transporter.sendMail({
        from: `"${fromName}" <${fromAddress}>`,
        to: `"${name}" <${email}>`,
        replyTo: studioInbox,
        subject: `We received your message — Umbrelabs`,
        text: `Thank you, ${(name || '').split(' ')[0] || 'there'}.\n\nYour message has reached the studio${service ? ` regarding ${service}` : ''}. We review every inquiry personally, usually within one business day, then arrange a short discovery call and follow up with a tailored proposal.\n\nWith appreciation,\nThe Umbrelabs Team\nEngineering the future of technology, with craft.`,
        html: buildAcknowledgementEmail({ name, service }),
      })
    } catch (ackError) {
      console.error('Acknowledgement email failed (non-fatal):', ackError)
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
