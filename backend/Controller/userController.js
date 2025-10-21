import User from "../models/User.js";

const updatePersonalInformation = async (req, res) => {
  try {
    const { name, mobileNumber } = req.body;
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      id,
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

    res.status(200).json({ message: "Personal Information Updated Successfully", user: updatedUser });

  } catch (err) {
    res.status(400).json(err);
  }
};

export { updatePersonalInformation };
