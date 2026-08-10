import { NextRequest, NextResponse } from 'next/server';

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/careers
//
// Accepts a multipart/form-data submission with:
//   fullName, email, phone, address, role, instagram?, message?, cv (PDF)
//
// Sends an internal email notification to the clinic team.
// ─────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName  = formData.get('fullName') as string | null;
    const email     = formData.get('email') as string | null;
    const phone     = formData.get('phone') as string | null;
    const address   = formData.get('address') as string | null;
    const role      = formData.get('role') as string | null;
    const _instagram = formData.get('instagram') as string | null;
    const _message   = formData.get('message') as string | null;
    const cvFile    = formData.get('cv') as File | null;

    // ── Basic Validation ────────────────────────────────────────────────────
    if (!fullName || !email || !phone || !address || !role) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!cvFile) {
      return NextResponse.json(
        { error: 'Please upload your CV as a PDF file.' },
        { status: 400 }
      );
    }

    if (cvFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are accepted for CV upload.' },
        { status: 400 }
      );
    }

    if (cvFile.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: 'CV file size must be under 5 MB.' },
        { status: 400 }
      );
    }

    // ── Email Notification ──────────────────────────────────────────────────
    // Wire up your preferred email provider here (Nodemailer, Resend, SendGrid, etc.)
    // The CV blob is available as: await cvFile.arrayBuffer()
    //
    // Example with Resend (install with: npm install resend):
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
    // await resend.emails.send({
    //   from: 'careers@22luna.in',
    //   to: '22lunaskin@gmail.com',
    //   subject: `New Career Application — ${role} — ${fullName}`,
    //   text: [
    //     `Name:      ${fullName}`,
    //     `Email:     ${email}`,
    //     `Phone:     ${phone}`,
    //     `Address:   ${address}`,
    //     `Role:      ${role}`,
    //     instagram ? `Instagram: ${instagram}` : null,
    //     message ? `\nMessage:\n${message}` : null,
    //   ].filter(Boolean).join('\n'),
    //   attachments: [{ filename: cvFile.name || 'cv.pdf', content: cvBuffer }],
    // });

    console.log('[22Luna Careers] New application received:', {
      fullName, email, phone, role,
      cvName: cvFile.name,
      cvSize: cvFile.size,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('[22Luna Careers] Submission error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
