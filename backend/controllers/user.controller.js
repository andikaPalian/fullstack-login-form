const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({message: "Please enter username, email and password"});
        };
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: "User already exists"});
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username, 
            email,
            password: hashedPassword,
        });
        await newUser.save(); 
        res.status(201).json({message: "User registered successfully", data: newUser});
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message || "An unexpected error occurred",
        });
    };
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: "Please enter email and password"});
        };
        const user = await User.findOne({email});
        if (user  && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({
                id: user._id,
            }, process.env.ACCESS_TOKEN, {expiresIn: "1h"})
            user.password = undefined;
            res.status(200).json({message: "User logged in successfully", data: {user, token}});
        } else {
            return res.status(400).json({message: 'Invalid email or password'});
        }
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message || "An unexpected error occurred",
        });
    };
};

module.exports = {register, login};