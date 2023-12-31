const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "Donovanisagoodb$oy"

const User = require('../models/User')

//ROUTE 1: create a user using: POST "api/auth/createuser". No login required
router.post('/createuser', [
    body('name', "Enter a valid name").isLength({min: 3}),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({min: 5})
] ,async (req, res)=> {
    //if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    //check whether the user with this email exists already
    try{

            let user = await User.findOne({email: req.body.email})
            if(user){
                return res.status(400).json( {error: "Sorry a user with this email exists"})
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt)
            //Create a new user.
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email,
            })

            const data = {
                user: {
                    id: user.id
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);
            // console.log(jwtData)

            // res.send(req.body)
            // res.json(user)
            res.json({authToken})

        } catch(error){
            console.error(error.message)
            res.status(500).send("Internal Server Error occured")
        }
})

//ROUTE 2: Authenticate a User. using: POST "api/auth/login". No login required
router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password cannot be blank").exists()
] ,async (req, res)=>{

    const errors = validationResult(req)
    //if there are errors return Bad request and the errors
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        const authtoken =  jwt.sign(payload, JWT_SECRET);
        res.send({authtoken})

    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server Error occured")
    }
})

//ROUTE 3 : Get logged in User Details using : POST "api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res)=>{
    

        try{
            userId = req.user.id;
            const user = await User.findById(userId).select("-password")
            res.send(user)
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error")
        }
})


module.exports = router