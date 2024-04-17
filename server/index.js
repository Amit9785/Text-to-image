import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mogodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '10mb'}))

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/',async(req,res) =>{
    res.send('Hello by Prince');

})

const startServer = async() => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,() => console.log('Server has Started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
        // process.exit(1);
    }
    
}
startServer()
