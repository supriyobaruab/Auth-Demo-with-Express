const newuserSchema = require("../../schema/newuserSchema");
const putRecover = async (req, res) => {
  const { email, password } = req.body;
  const find = await newuserSchema.findOne({ email });
  if (!find) {
    return res.json({ message: find });
  }
  if (find) {
    if (password !== "") {
      const update = await newuserSchema.updateOne(
        { email },
        { $set: { password: password } }
      );
      return res.json({ message: "updated" });
    }
  }
  return res.json({ message: "Account found, no password provided" });
};
module.exports = putRecover;
