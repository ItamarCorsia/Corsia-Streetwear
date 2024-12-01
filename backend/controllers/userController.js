import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, massage: "User doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid credentials " })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.massage })
    }
}

//Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Checking user already exists or not 
        const exists = await userModel.findOne({ email })

        if (exists) {
            return res.json({ success: false, massage: "User already exists" })
        }

        // Validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, massage: "Please enter valid email" })
        }

        // Validating strong password
        if (password.length < 8) {
            return res.json({ success: false, massage: "Please enter strong password" })
        }

        // Hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.massage })
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.massage })
    }

}

export { loginUser, registerUser, adminLogin }