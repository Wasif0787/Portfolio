import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <wasifhussain77890@gmail.com>',
            to: ['wasifhussain787@gmail.com'],
            subject: 'Hello world',
            react: <><p>Email body</p></>,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
