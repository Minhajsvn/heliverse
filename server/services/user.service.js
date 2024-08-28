const User = require("../models/user.model");
const axios = require("axios");


const getAllUsers = async (query) => {
    const { domain, gender, available, page = 1, limit = 20 } = query;

    const skip = (page - 1) * limit;
    let filter = {};
    if (domain) filter.domain = domain;
    if (gender) filter.gender = gender;
    if (available !== undefined) filter.available = available === 'true';

    let userData = await User.find(filter).skip(skip).limit(Number(limit));
    const totalUsers = await User.countDocuments(filter);
    if(userData){
        return  {
            totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: Math.floor(skip / limit) + 1,
            userData
        };
    }
    throw new Error("No Data found in database")
};


const getUserById = async (id) => {
    try {
        let user = await User.findOne({ id: id });

        if (!user) {
            throw new Error('User not found in database');
        }
    } catch (error) {
        throw new Error('An error occurred while fetching user')
    }
}

const createNewUser = async (userData) => {
    const { email } = userData;
    try {
        const existingUser = await User.findOne({ email });
        if(existingUser){
            throw new Error('User with that email already exists')
        }

        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;

    } catch (error) {
        throw new Error('An error occurred while creating new user')
    }
}

const updateUser = async (id, updates) => {
    try {
        const user = await User.findOneAndUpdate({ id: id }, updates, { new: true });
        if(!user){
            throw new Error('User not Found');
        }
        return user;
    } catch (error) {
        throw new Error('An error occurred while attempting to update the user');
    }
}

const deleteUser = async (id) => {
    try {
        const user = await User.findOneAndUpdate({id: id }, {deleted: true}, { new: true });

        if(!user){
            throw new Error('User not Found');
        }
        return user;

    } catch (error) {
        throw new Error('An error occurred while deleting user');
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}