import mongoose from "mongoose";
var Schema = mongoose.Schema;

var emails = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	sent: {
		type: Date,
		default: Date.now,
	},
});

mongoose.models = {};

var Emails = mongoose.model("Emails", emails);

export default Emails;
