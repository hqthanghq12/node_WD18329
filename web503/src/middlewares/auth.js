import { verify } from "jsonwebtoken";
export const checkAuth = async (req, res, next) => {
    try{
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        const tokenVerify = verify(token, "123456", function(err, decoded){
            console.log(decoded);
            if(err){
                console.log(err);
            }else{
                return next();
            }
        })

    }catch(error){
        return res.status(403).json({
            messages: "Bạn cần phải đăng nhập"
        });
    }
}