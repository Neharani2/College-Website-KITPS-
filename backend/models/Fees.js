const mongoose = require("mongoose");

const feesSchema = new mongoose.Schema({
  branchSemester: String,
  aadhaar: String,
  rollNo: String,
  candidateName: String,
  dob: Date,
  fatherName: String,
  address: String,
  contactNo: String,
  email: String,
  subjects: String,
}, { timestamps: true });

module.exports = mongoose.model("Fees", feesSchema);
