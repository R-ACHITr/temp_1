const joi = require("joi");

const validation = joi.object({
     name: joi.string().alphanum().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     phone: joi.string().length(10).pattern(/[0-9]/).required(),
     work: joi.string().alphanum().trim(true).required(),
     password: joi.string().min(8).trim(true).required(),
     cpassword: joi.string().min(8).trim(true).required()
.default([]),
    is_active: joi.boolean().default(true),
});

module.exports = validation;