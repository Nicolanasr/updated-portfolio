import connectDB from "../../middleware/mongodb";
import Emails from "../../models/emails";

const handler = async (req, res) => {
	require("dotenv").config();
	let nodemailer = require("nodemailer");

	const mailData = {
		from: req.body.email,
		to: "nasr528@gmail.com",
		subject: `Message From ${req.body.name} - ${req.body.email}`,
		text: req.body.message + " | Sent from: " + req.body.email,
		html: `<div>${req.body.message}</div><br><p>Sent from: ${req.body.name} - ${req.body.email}</p>`,
	};

	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "nicolasnasr69@gmail.com",
			pass: process.env.password,
		},
		secure: true,
	});

	transporter.sendMail(mailData, function (err, info) {
		if (err) res.status(500).send(err);
	});

	// ADD contact form to database
	const { name, email, message } = req.body;
	if (name && email && message) {
		try {
			var contact = new Emails({
				name,
				email,
				message,
			});
			var emailSent = await contact.save();
			return res.status(200).send(emailSent);
		} catch (err) {
			res.status(200).send(err);
		}
	}
};

export default connectDB(handler);
