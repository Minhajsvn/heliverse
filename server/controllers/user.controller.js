const { userService } = require("../services");

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers(req.query);
        res.send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createNewUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        if (result) {
            res.status(204).end();
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}