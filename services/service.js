const User = require("../models/userSchema");
const validation = require("../models/user.validator")
const userService = {
  async getAllUsers() {
    return await User.find();
  },

  async getUserByEmail(email) {
    return await User.findOne({ email });
  },

  async createUser(userData) {
    const { error } = validation.validate(userData);
    if (error) throw new Error(error.details[0].message);
    const userExist = await User.findOne({ email: userData.email });
    if (userExist) throw new Error("Email already exists");

    const user = new User(userData);
    await user.save();
    return user;
  },

  async updateUser(email, updatedData) {
    const { error } = validation.validate(updatedData);
    if (error) throw new Error(error.details[0].message);
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    if (updatedData.email) {
      const emailExists = await User.findOne({ email: updatedData.email, _id: { $ne: user._id } });
      if (emailExists) throw new Error("Email ID already exists");
      user.email = updatedData.email;
    }

    Object.assign(user, updatedData);
    await user.save();
    return user;
  },
 
  async deleteUser(email) {
    const deletedUser = await User.findOneAndDelete({ email });
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
  }
};

module.exports = userService;
