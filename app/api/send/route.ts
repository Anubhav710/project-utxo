import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, mobile, message, email, interests } = body; // Add 'interests'

    if (!name || !mobile || !message || !email || !interests) {
      return new NextResponse("All details including interests are required", {
        status: 400,
      });
    }

    // Replace with secure method for storing email credentials
    const transporter = await nodemailer.createTransport({
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER, // Replace with environment variable
        pass: process.env.EMAIL_PASSWORD, // Replace with environment variable
      },
    });

    // Prepare the list of selected interests
    const interestsList = interests
      .map((interest: string) => `<li>${interest}</li>`)
      .join("");

    // Adding the name, phoneNo, message, and interests to the email body
    const mailOptions = {
      from: email,
      to: "utxowebtech.rohit@gmail.com",
      subject: "Enquiry received from UTXO WebTech.",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Here are the details:</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <th style="text-align: left; border-bottom: 1px solid #ddd; padding: 8px;">Name</th>
              <td style="border-bottom: 1px solid #ddd; padding: 8px;">${name}</td>
            </tr>
            <tr>
              <th style="text-align: left; border-bottom: 1px solid #ddd; padding: 8px;">E-mail</th>
              <td style="border-bottom: 1px solid #ddd; padding: 8px;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <th style="text-align: left; border-bottom: 1px solid #ddd; padding: 8px;">Mobile</th>
              <td style="border-bottom: 1px solid #ddd; padding: 8px;">${mobile}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px;">Message:</h3>
          <p>${message}</p>
          <h3 style="margin-top: 20px;">Selected Interests:</h3>
          <ul>${interestsList}</ul> <!-- Add the list of selected interests -->
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!", info });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({
      message: "Error sending email. Please try again later.",
    });
  }
}
