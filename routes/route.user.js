const { getUser, registerUser, loginUser, deleteUser } = require("../controllers/auth.controller");

const router = require("express").Router()

// get user 
router.get("/", getUser)

// create user
router.post("/register", registerUser)

// login user
router.post("/login", loginUser)

// delete user
router.delete("/delete/:id", deleteUser)



module.exports = router;