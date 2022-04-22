const express = require('express');
const router = express.Router()
const User = require('./../models/users');

router.get('/usersList', async (req,res) => { 
    result = searchUserList();
    
    result.then(list => {
        res.json(list)
    }).catch(err => {
        res.status(400).json({
            err
        })
    });
})

async function searchUserList() {
    let usersList = await User.find({})
    return usersList;
}


module.exports = router;