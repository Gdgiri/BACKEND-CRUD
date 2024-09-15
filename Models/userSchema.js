import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
    trim: true, // Removes extra whitespace
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Ensures email is unique
    lowercase: true, // Converts email to lowercase
  },
  age: {
    type: Number, // Age as a number
    required: true, // Age is required
    min: 0, // Ensures age is a positive number
  },
});

const User = mongoose.model("User", userSchema);

export default User;
