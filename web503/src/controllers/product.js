// Hiện thị toàn bộ
export const getProducts = async(req, res)=>{
    try{
        const response = await fetch(`http://localhost:3000/products`);
        const data = await response.json();
        res.json(data);
    }catch (error){
        res.status(400).json({
            message: "Lỗi r fix men"
        });
    }

}
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