const express = require("express");
const app = express().use(express.json());
const jwt = require('jsonwebtoken');

app.post("/encoder", (req, res) => {
    try{      
        const {user, password} = req.body;
        const token = jwt.sign({user}, 'secret', { expiresIn: '1h' });
        return res.status(200).json({token})
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

app.get('/decoder', (req, res)=>{
    try{
        const {authorization} = req.headers; //Beare token
        const decoder = jwt.verify(authorization.split(' ')[1], 'secret');
        return res.status(200).json({decoder})
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

app.listen(8081, ()=>{
    console.log(`Server is running on port 8081`)
})