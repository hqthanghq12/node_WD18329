// import http from 'http';
// const app = http.createServer((req, res)=>{
//     console.log(req);
//     if(req.url == "/"){
//         res.write("<h1>HIHI haha</h1>");
//     }
// });
// app.listen(8080);
// route
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from "./routes/product.router";
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
// Kết nối với database
async function connectBD(uri){
    try{
        await mongoose.connect(uri);
        console.log(`Kết nối thành công`);
    }catch(error){
        console.log(`Kết nối thất bại`);
    }
}
connectBD(`mongodb://127.0.0.1:27017/WD18329`);
app.use('/api/', productRouter);
export const viteNodeApp = app;
