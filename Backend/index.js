import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/CRUD");

app.post("/create", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await new User({
      name,
      email,
      age,
    });
    await user.save();
    return res.json({ message: "User has been created", success: true });
  } catch (error) {
    return res.json({ message: "Error in creating User", success: false });
  }
});

app.get("/getusers", async (req, res) => {
  try {
    const user = await User.find();
    return res.json(user);
  } catch (error) {
    return res.json({ message: "Error in getting user", success: false });
  }
});

app.get("/getuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    return res.json(user);
  } catch (error) {
    return res.json({ message: "Error in getting user", success: false });
  }
});

app.put("/getuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email, age: req.body.age }
    );
    return res.json(user);
  } catch (error) {
    return res.json({ message: "Error in getting user", success: false });
  }
});

app.delete('/deleteuser/:id',(req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete({_id:id}).then(res=>res.json(res)).catch(err=>res.json(err))
})


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
