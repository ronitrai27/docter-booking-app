import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers; // Get the token from headers

    if (!atoken) {
      return res.json({
        success: false,
        message: "Unauthorized: Login Again",
      });
    }

    // Verify the token
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Unauthorized: Login Again",
      });
    }

    // Proceed to the next middleware if the token is valid
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Token verification failed" });
  }
};

export default authAdmin;
