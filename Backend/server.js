const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require("fs")

const app = express();

const PORT = 3000

const datafile = "data.json"
const usersfile = "users.json"

const secret_key = "login_System"

const salt = 10;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
function authMiddleware(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}

app.use(authMiddleware)


const readDataFile = () => {
    try {
        const data = fs.readFileSync(datafile, "utf8")
        console.log("data", data)
        return data ? JSON.parse(data) : []
    } catch (err) {
        return []
    }
}
const readUsersFile = () => {
    try {
        const data = fs.readFileSync(usersfile, "utf8")
        return data ? JSON.parse(data) : []
    } catch (err) {
        return []
    }
}

const writeUsersData = (data) => {
    return fs.writeFileSync(usersfile, JSON.stringify(data))
}

app.post("/register", async (req, res) => {
    const { email, password, username } = req.body
    const userData = readUsersFile()
    req.body.id = userData.length ? userData[userData.length - 1].id + 1 : 1
    const hashedPassword = await bcrypt.hash(password, salt)
    userData.push({ ...req.body, password: hashedPassword })
    writeUsersData(userData)
    res.status(201).json({ message: "Successfully user created", data: req.body })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).send("you missed inputs")
    }
    const data = readUsersFile()
    const isUserFound = data.find(user => user.email === email)
    if (!isUserFound) {
        res.status(404).send("user not found")
    } else {
        const verifyPassword = await bcrypt.compare(password, isUserFound.password)
        const token = jwt.sign(isUserFound, secret_key, { expiresIn: "3h" })

        if (verifyPassword) {
            res.status(200).json({ message: `Welcome ${isUserFound.username}`, token, status: 200 })
        }
    }
})

app.get("/products", authMiddleware, (req, res) => {
    res.json(readDataFile())

})
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})
