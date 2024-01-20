const express= require('express')

const router = express.Router();

import { LoginUser, SignupUser } from '../controllers/usercontroller';

//login route

route.post('/login',LoginUser);

//sign up route
//
route.post('/signup',SignupUser);

module.exports = router;