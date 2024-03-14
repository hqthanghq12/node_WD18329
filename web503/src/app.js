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
import productRouter from "./routes/product.router";
const app = express();
app.use(express.json());
app.use('/api/', productRouter);
export const viteNodeApp = app;
