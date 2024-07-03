// models/User.js
import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the user model
const User = mongoose.model("User", userSchema);

export default User;

