const { body, validationResult } = require("express-validator");

module.exports = [
    body('username')
        .isLength({ min: 3 })
        .withMessage('Your username must contain at least 3 characters!'),

    body('email')
        .isEmail()
        .withMessage('Please enter a valid email address!'),

    body('password')
        .isLength({ min: 5 })
        .withMessage('Your password must contain at least 5 characters!'),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array(),
            });
        }

        next();
    }
];