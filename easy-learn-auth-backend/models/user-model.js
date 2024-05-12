const mongoose = require('mongoose');
const UserRoleEnum = require("./user-role-enum.js");

const userSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    UserName: String,
    PersonalEmail: String,
    OfficialEmail: String,
    Password: String,
    UserRole: {
        type: Number,
        enum: Object.values(UserRoleEnum)
    } 
});

module.exports = mongoose.model('UserModel', userSchema);
