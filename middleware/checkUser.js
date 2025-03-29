const newuserSchema = require("../schema/newuserSchema");
const checkUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const find = await newuserSchema.findOne({ email });
    if (!find) {
      return res.json({ message: "No account find please signup" });
    }
    if (password != find.password) {
      return res.json({ message: "Wrong username or password please recover" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = checkUser;
