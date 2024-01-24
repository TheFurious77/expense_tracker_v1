const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection, 
  deleteTransection,
} = require("../controllers/transectionCtrl");

// router object
const router = express.Router();

//routes
//add transection POST

router.post("/add-transection", addTransection);

// Edit Transection
router.post("/edit-transection", editTransection);

//Delete Transection

router.post("/delete-transection", deleteTransection);

//get transection
router.post("/get-transection", getAllTransection);

module.exports = router;
