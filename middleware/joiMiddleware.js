const userValidation = async (req, res, next) => {
	const payload = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		work: req.body.work,
		password: req.body.password,
    cpassword: req.body.cpassword,
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			errorFunction(true, `Error in User Data : ${error.message}`)
		);
	} else {
		next();
	}
};
module.exports = userValidation;