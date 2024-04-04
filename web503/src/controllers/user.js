import bcryptjs from "bcryptjs";
import { registerShema, singinSchema } from "../schemas/auth";
import User from "../models/user";
import jwt from "jsonwebtoken";
export const singup = async (req, res) => {
  try {
    // lấy dữ liệu từ ngdung gửi lên req.body
    const { username, email, password, age } = req.body;
    // Kiểm tra xem dự liệu nhập vào có đúng hay không
    const { error } = registerShema.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map(({ message }) => message);
      return res.status(400).json({
        messages,
      });
    }
    // Kiểm tra xem email đã có hay chưa
    const exitUser = await User.findOne({ email });
    if (exitUser) {
      return res.status(400).json({
        messages: "Email đã tồn tại",
      });
    }
    // Mã hóa password
    const hashPassword = await bcryptjs.hash(password, 10);
    // tạo user mới: username, email, password(đã mã hóa), age
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      age,
    });
    // tạo mã token
    const token = jwt.sign({ userID: user.id }, "123456", { expiresIn: "1h" });
    return res.status(201).json({
      messages: "Đăng ký thành công",
      user,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const singin = async (req, res) => {
  try {
    const {email, password} = req.body;
     // Kiểm tra xem dự liệu nhập vào có đúng hay không
     const { error } = singinSchema.validate(req.body, { abortEarly: false });
     if (error) {
       const messages = error.details.map(({ message }) => message);
       return res.status(400).json({
         messages,
       });
     }
     // Kiểm tra xem email đã có hay chưa
    const exitUser = await User.findOne({ email });
    if (!exitUser) {
      return res.status(400).json({
        messages: "Email không tồn tại",
      });
    }
    // so sánh mật khẩu mà ngdung nhập vào có khớp hay hông
    const isMatch = await bcryptjs.compare(password, exitUser.password);
    if(!isMatch){
      return res.status(400).json({
        messages: "Password không chính xác",
      });
    }
    // trả về token nếu đúng
    const token = jwt.sign({ userID: exitUser.id }, "123456");
    return res.status(200).json({
      messages: "Đăng nhập thành công",
      exitUser,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
