const User = require('../models/User');

const addUser = async (req, res) => {
    try {
        const { username, email, dob } = req.body;

        if (!username || !email || !dob) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = new User({ username, email, dob });
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = addUser;
