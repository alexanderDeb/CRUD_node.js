const express = require('express');
const userSchema = require("../models/user");

const router = express.Router();

//create
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => { res.json(data) })
        .catch((error) => res.json({ message: error }));
});

// List
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, last_name, numero, identification } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, last_name, numero, identification } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Delete user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;