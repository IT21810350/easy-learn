const UserModel = require("../models/user-model.js");
const UserRoleEnum = require("../models/user-role-enum.js");
const { CreateToken } = require("../utill/token-handler.js");
const bcrypt = require('bcryptjs');
const {sendEmail} = require('../services/mail-service.js');
const fs = require('fs');
const path = require('path');


module.exports.Welcome = async (req, res) => {
    res.json({ message: "Welcome to easy-learn API Backend!" });
};

module.exports.LearnerSignUp = async (req, res, next) => {
    try {
        const req_user = req.body;

        //encrypt password
        const hashedPassword = await bcrypt.hash(req_user.Password, 10);
        req_user.Password = hashedPassword;

        //assign userrole and create user
        req_user.UserRole = UserRoleEnum.LEARNER;

        //create user name
        const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
        req_user.UserName = "IT24" + randomSixDigits;

        //assign official email
        req_user.OfficialEmail = req_user.UserName.toLowerCase() + "@my.sliit.lk";

        //create user
        const result_user = await UserModel.create(req_user);

        if (!result_user) {
            return res.status(401).json({ message: "Error in signup" })
        }

        const emailTemplatepath = path.resolve(__dirname, "../utill/email-templates/signup-success-email.html");
        const emailTemplate = fs.readFileSync(emailTemplatepath, { encoding: "utf8" });

        const formattedTemplate = emailTemplate.replace('{{FirstName}}', result_user.FirstName)
                                               .replace('{{LastName}}', result_user.LastName)
                                               .replace('{{OfficialEmail}}', result_user.OfficialEmail);

        // Define email parameters
        const mailOptions = {
            from: 'thirangamicrosoft@gmail.com',
            to: result_user.PersonalEmail,
            subject: 'Welcome to Easy-Learn',
            html: formattedTemplate
        };

        // Send the email
        await sendEmail(mailOptions);

        return res.status(201).json({ message: "User signed up successfully", success: true, user: result_user });

        next();

    } catch (error) {

        return res.status(500).json({ message: "An error occurred when signing up", error: error.message });
    }
};

module.exports.SignIn = async (req, res, next) => {
    try {
        const { UserName, Password } = req.body;

        const result_user = await UserModel.findOne({ UserName });

        if (!result_user) {
            return res.status(401).json({ message: "User not found", success: false });
        }

        const isPasswordValid = await bcrypt.compare(Password, result_user.Password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password", success: false });
        }

        const token = CreateToken(result_user);
        res.setHeader('Authorization', `Bearer ${token}`);

        return res.status(200).json({ message: "User signed in successfully", success: true, user: result_user, token: token });

        next();

    } catch (error) {
        return res.status(500).json({ message: "An error occurred when signing in", error: error.message });
    }
};



