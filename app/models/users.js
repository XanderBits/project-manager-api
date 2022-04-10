const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String, 
            required : true
        },
        lastname : {
            type : String,
            required: true
        },
        email: {
            type: String,
            validate: {
                validator: validator.isEmail,
                message: 'EMAIL_IS_NOT_VALID'
                },
            required: true
        },
        password:  {
            type: String,
            required : true,
            select : false
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
    },
    {
        versioneKey: false,
        timestamps : true
    }
);

const hash = (user, salt, next) => {
    bcrypt.hash(user.password, salt, (error, newHash) => {
        if (error) {
            return next(error)
        }
        user.password = newHash
        return next()
        });
    }

const genSalt = (user, SALT_ROUND, next) => {
    bcrypt.genSalt(SALT_ROUND, (err, salt) => {
        if (err) {
            return next(err)
        }
        return hash(user, salt, next)
    });
}

UserSchema.pre('save', function (next) {
    const that = this
    const SALT_ROUND = 5
    if (!that.isModified('password')) {
        return next()
    }
    return genSalt(that, SALT_ROUND, next)
});

module.exports = mongoose.model('users', UserSchema);