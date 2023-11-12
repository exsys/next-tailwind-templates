import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import Mail from 'nodemailer/lib/mailer';

/**
 * 1. Go to: myaccount.google.com/apppasswords
 * 2. create and copy app password
 * 3. store in .env
 * npm i nodemailer
 */

export async function POST(req: NextRequest) {
    const data = await req.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_ACC,
            pass: process.env.GMAIL_PW,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.GMAIL_ACC,
        to: "justin.msc97@gmail.com",
        subject: `Portfolio Inquiry: ${data.subject} from ${data.name} (${data.email})`,
        text: String(data.message),
    };

    const sendMailPromise = () => new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err: any) {
            if (!err) {
                resolve('Email sent');
            } else {
                reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({ res: 'Successfully sent!', ok: true, status: 200 }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'There was an error sending your message. Please try again later.', status: 500 }, { status: 500 });
    }
}