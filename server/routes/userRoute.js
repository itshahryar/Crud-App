// routes/userRoutes.js
import express from "express";
import { create, getAll,getDataById,updateById,deleteById,deleteAll,getSpecificData } from "../controller/userController.js";

const router = express.Router();

// Route to create a new user
router.post("/create", create);
router.get("/getAll",getAll);
router.get("/getDataById/:id",getDataById);
router.put("/updateById/:id",updateById);
router.delete("/deleteById/:id",deleteById);
router.delete("/deleteAll",deleteAll);
router.get("/getSpecificData", getSpecificData);

export default router;