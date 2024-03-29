import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();
    console.log("Email POST");
    console.log(`${email} - ${name} - ${message}`);
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
        },
    });
    
    const mailOptions: Mail.Options = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.TIFFANY_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
    }
}