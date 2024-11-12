import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorized login again" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedToken.id;
    next();
  } catch (error) {
    console.log("Error in auth middleware : ", error.message);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

export default authUser;
