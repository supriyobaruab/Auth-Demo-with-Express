const jwt = require("jsonwebtoken");
function createToken(req, res, next) {
  try {
    const secure = process.env.JWT_SECURE;
    console.log("Entered createToken");
    const { name, email } = req.body;
    const token = jwt.sign(
      {
        name: name,
        email: email,
      },
      secure,
      { expiresIn: "30m" }
    );
    res.cookie("token", token);
    // res.json({ message: "Login successfull" });
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = createToken;
