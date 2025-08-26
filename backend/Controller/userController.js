const User = require("../models/User");

const updatePersonalInformation = async (req, res) => {
  try {
    const { _id, name, mobileNumber } = req.body;
    User.findByIdAndUpdate(
      { _id: _id },
      {
        name: name,
        mobileNumber: mobileNumber,
      })
      res.status(200).json({message:"Personal Information Updated Successfully"})
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
    updatePersonalInformation
}
