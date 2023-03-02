const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
    console.log(req.body);
    const { firstname,lastname, username, email, password ,phonenumber } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("กรอกไม่ครบหน้าโง่!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("มีอยู่แล้วไอโง่!");
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    try{
        const user = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            phonenumber,
            role:'USER',
        });
        res.json({ message: "Register the user" });
    }catch(error){
        console.log(error);
    }

  
};
  
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
            role: user.role
          },
        },
        'secret',
        { expiresIn: "24h" }
      );
      res.status(200).json({ accessToken });
      return accessToken
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
};

const currentUser = async (req, res) => {
    res.json(req.user);
  };
module.exports = { registerUser,loginUser,currentUser };