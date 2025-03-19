const express = require("express")
const jwt = require("jsonwebtoken")

const app = express();
const obj = {
    name : "karunakar",
    id : 1,
    age : 30
}

const secret_key = "hello"

// jwt.sign()
const token = jwt.sign(obj, secret_key, {expiresIn : "1h"})

// localStorage.setItem("token", token)

console.log("checking", token);
console.log(global)


const verifyToken = jwt.verify(token, secret_key)
console.log("verify", verifyToken)
// jwt.verify()