// controllers/userController.js
import User from "../model/userModel.js";

//==============================================
// Function to create a new user
export const create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    const newUser = new User({
      fname,
      lname,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//==============================================
// Function to get all users
export const getAll = async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
//==============================================
// Function to get a user by ID
export const getDataById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find user by ID
      const user = await User.findById(id);
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//==============================================
// Function to update a user by ID
export const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, lname, email, password } = req.body;

    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fname, lname, email, password },
      { new: true, runValidators: true } // To return the updated document and run validators
    );

    // Check if user exists
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//==============================================
// Function to delete a user by ID
export const deleteById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find user by ID and delete
      const deletedUser = await User.findByIdAndDelete(id);
  
      // Check if user exists
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
//==============================================
// Function to delete all users
export const deleteAll = async (req, res) => {
    try {
      const result = await User.deleteMany({});
      res.status(200).json({ message: `${result.deletedCount} users deleted successfully` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
//==============================================
// Function to get specific users based on fname and lname criteria
export const getSpecificData = async (req, res) => {
    try {
      const users = await User.find({
        fname: { $regex: /^S.*r$/, $options: "i" },
        lname: { $regex: /^A/, $options: "i" }
      });
  
      if (users.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
//==============================================




