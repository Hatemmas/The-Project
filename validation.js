const { check, validationResult } = require ("express-validator")


exports.registerValidation = () => [
    check("name", "This field is required !").notEmpty(),
    check('email', 'This field is required !').notEmpty(),
    check('email', 'This field is require a valid Email !').isEmail(),
    check('password', 'Your password must be at least 6 characters').isLength({min:6,})
]
exports.loginValidation = () => [
    check('email', 'This field is required !').notEmpty(),
    check('email', 'This field is require a valid Email !').isEmail(),
    check('password', 'Your password must be at least 6 characters').isLength({min:6,})
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req)
    errors.isEmpty() ? next() : res.status(400).send(errors.errors[0].msg)
}
