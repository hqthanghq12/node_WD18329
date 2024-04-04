import bcryptjs from "bcryptjs";
import {registerShema, singinSchema} from "../schemas/auth";
import User from "../models/user";
import jwt from "jsonwebtoken";
export const singup = async(req, res) =>{
    try{
    // lấy dữ liệu từ ngdung gửi lên req.body
    const {username, email, password, age} = req.body;
    // Kiểm tra xem dự liệu nhập vào có đúng hay không
    const {error} = registerShema.validate(req.body, {abortEarly: false});
    if(error){
        const messages = error.details.map(({message}) => message);
        return res.status(400).json({
          messages,
        });
      }
      // Kiểm tra xem email đã có hay chưa
      const exitUser = await User.findOne({email});
      if(exitUser){
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
        age
      });
      // tạo mã token
      const token = jwt.sign({userID: user.id}, "123456", {expiresIn: "1h"});
      return res.status(201).json({
        messages: "Đăng ký thành công",
        user,
        token
      });
    }catch(error){
       return res.status(400).json({
            message: error.message,
        });
    }
}