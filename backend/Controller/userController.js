const User = require("../models/User");

const updatePersonalInformation = async (req, res) => {
  try {
    const { name, mobileNumber } = req.body;
    const { _id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        name: name,
        mobileNumber: mobileNumber,
      },
      {
        new: true,
      }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Personal Information Updated Successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  updatePersonalInformation,
};
