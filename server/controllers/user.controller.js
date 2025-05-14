const UserModel=require('../models/user.model')

const createUser = async (req, res) => {
  try {
    const users = await UserModel.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers=async(req,res)=>{
  try{
const users = await UserModel.find({});
    res.status(200).json(users);
  }catch(error){
     res.status(500).json({ message: error.message });
  }
}

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.findByIdAndUpdate(id, req.body);
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUsers = await UserModel.findById(id);
    res.status(200).json(updatedUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error); 
    res.status(500).json({ message: error.message });
  }
};

module.exports={createUser,getUsers,updateUsers,getUsersById,deleteUser}
