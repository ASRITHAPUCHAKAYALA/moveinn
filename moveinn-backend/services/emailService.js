const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const sendBookingEmail = async (email, booking) => {

const mailOptions = {
from: `"MoveInn Travel" <${process.env.EMAIL_USER}>`,
to: email,
subject: "🚐 MoveInn Booking Confirmation",

html: `
<div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:30px">

<div style="max-width:600px;margin:auto;background:white;border-radius:10px;overflow:hidden">

<div style="background:#2563eb;color:white;padding:20px;text-align:center">
<h2>MoveInn Travel</h2>
<p>Your Trip is Confirmed 🚐</p>
</div>

<div style="padding:30px">

<p>Dear Customer,</p>

<p>
Thank you for choosing <b>MoveInn</b>. Your booking has been successfully confirmed.
Below are your trip details:
</p>

<table style="width:100%;border-collapse:collapse;margin-top:20px">

<tr>
<td style="padding:10px;border-bottom:1px solid #ddd"><b>City</b></td>
<td style="padding:10px;border-bottom:1px solid #ddd">${booking.city}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #ddd"><b>Vehicle</b></td>
<td style="padding:10px;border-bottom:1px solid #ddd">${booking.vehicle}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #ddd"><b>Start Date</b></td>
<td style="padding:10px;border-bottom:1px solid #ddd">${booking.startDate}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #ddd"><b>End Date</b></td>
<td style="padding:10px;border-bottom:1px solid #ddd">${booking.endDate}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #ddd"><b>Total Price</b></td>
<td style="padding:10px;border-bottom:1px solid #ddd">₹${booking.totalPrice}</td>
</tr>

</table>

<p style="margin-top:20px">
Your vehicle will be ready on the selected start date.  
Our team wishes you a safe and enjoyable journey.
</p>

<p style="margin-top:20px">
Best Regards,<br>
<b>MoveInn Travel Team</b>
</p>

</div>

<div style="background:#f3f4f6;text-align:center;padding:15px;font-size:12px;color:#555">
© 2026 MoveInn Travel. All rights reserved.
</div>

</div>

</div>
`
}

await transporter.sendMail(mailOptions)

}

module.exports = sendBookingEmail 