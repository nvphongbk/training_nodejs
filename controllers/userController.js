const db = require('../models')

// create main Model
const User = db.users

// main work

const addUser = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)

}

const updateUser = async (req, res) => {

    let id = req.params.id

    const user = await User.update(req.body, { where: { id: id }})

    res.status(200).send(user)
   
}

const deleteUser = async (req, res) => {

    let id = req.params.id
    
    await User.destroy({ where: { id: id }} )

    res.status(200).send('User is deleted !')

}

module.exports = {
    addUser, getAllUsers, getOneUser, updateUser, deleteUser   
}