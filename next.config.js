module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["i.imgur.com"],
	},
	async rewrites() {
		return [
			{
				source: "/certification/udacity/Full-Stack-Development-Track",
				destination: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/9839e02a-2422-4dcb-a563-ec2239a13aed.pdf",
			},
			{
				source: "/certification/coursera/Web-Application-Technologies-and-Django",
				destination: "https://www.coursera.org/account/accomplishments/certificate/KCJAC7NPH3PL",
			},
			{
				source: "/certification/coursera/Python-for-Everybody-Specialization",
				destination: "https://www.coursera.org/account/accomplishments/specialization/certificate/PM27BFAX7VDH",
			},
		];
	},
};
