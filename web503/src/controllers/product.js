// Hiện thị toàn bộ
// export const getProducts = async(req, res)=>{
//     try{
//         const response = await fetch(`http://localhost:3000/products`);
//         const data = await response.json();
//         res.json(data);
//     }catch (error){
//         res.status(400).json({
//             message: "Lỗi r fix men"
//         });
//     }

// }
// Hiện thị thông tin sửa
// app.get('/api/products/:id', async(req, res)=>{
//     try{
//         console.log(req.params.id);
//         const response = await fetch(`http://localhost:3000/products/${req.params.id}`);
//         const data = await response.json();
//         res.json(data);
//     }catch (error){
//         res.status(400).json({
//             message: "Lỗi r fix men"
//         });
//     }

// })
// Thêm -> post
// app.post('/api/products', async(req, res)=>{
//     try{
//         const response = await fetch(`http://localhost:3000/products`,{
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(req.body),
//         });
//         const data = await response.json();
//         res.json(data);
//     }catch (error){
//         res.status(400).json({
//             message: "Lỗi r fix men"
//         });
//     }
// })
// Sửa = put
// app.put('/api/products/:id', async(req, res)=>{
//     try{
//         const response = await fetch(`http://localhost:3000/products/${req.params.id}`,{
//             method: "PUT",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(req.body),
//         });
//         const data = await response.json();
//         res.json(data);
//     }catch (error){
//         res.status(400).json({
//             message: "Lỗi r fix men"
//         });
//     }
// })
// Xóa = delete
// app.delete('/api/products/:id', async(req, res)=>{
//     try{
//         const response = await fetch(`http://localhost:3000/products/${req.params.id}`,{
//             method: "DELETE",
//         });
//         const data = await response.json();
//         res.json(data);
//     }catch (error){
//         res.status(400).json({
//             message: "Lỗi r fix men"
//         });
//     }
// })
// hiển thị toàn bộ => get
import Product from "../models/product";
import {ProductShemas} from "../schemas/auth";
export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Lỗi r fix men",
    });
  }
};
// Hiện thị theo id => get
export const getProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(400).json({
        message: "Lỗi r fix men",
      });
    }
  };
//   Thêm = post
export const postProduct = async (req, res) => {
    try {
      // Lấy dữ liệu ngdung gửi lên
      const {code, name, price} = req.body;
      // Kiểm tra xem ngdung gửi có đúng yêu cầu của shema hay không
      const {error} = ProductShemas.validate(req.body, {abortEarly: false});
      if(error){
        const messages = error.details.map(({message}) => message);
        return res.status(400).json({
          messages,
        });
      }
      // Kiểm tra xem code đã tồn tại hay chưa
      const exitProduct = await Product.findOne({code});
      if(exitProduct){
        return res.status(400).json({
          messages: "Code đã tồn tại",
        });
      }
      const product = await Product.create({
        code, name, price
      });
      res.json(product);
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };
// Sửa = put
export const putProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
// Xóa = delete
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};