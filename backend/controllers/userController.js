import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/createToken.js";
import Note from "../models/noteModel.js";

const register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
        throw new Error('Please Fill All fields.');
    }
    const userExists = await User.findOne({ email });
    if (userExists) res.status(400).send('User already exists.');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        generateToken(res, newUser._id);

        newUser.password = '';
        res.status(201).json(newUser);
    } catch {
        res.status(400);
        throw new Error('User not created.');
    }

};


const login = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        throw new Error('Please Fill All fields.');
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if (isPasswordMatch) {
            generateToken(res, existingUser._id);
            existingUser.password = '';
            res.status(201).json(existingUser);
            return;
        }
    }
};

const getAllNames = async (req, res) => {
    const { _id } = req.user;

    const allNotes = await Note.findOne({ userId: _id }).sort(({ isPinned: -1 }));
};




export { register, login };