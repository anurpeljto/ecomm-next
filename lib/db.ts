import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connectionState = mongoose.connection.readyState;
        if(connectionState === 1) {
            console.log('Already connected to DB');
            return;
        }
        if(connectionState === 2) {
            console.log('Connecting...')
            return;
        }

        if(process.env.MONGO_URI) {
            mongoose.connect(process.env.MONGO_URI, {
                dbName:'FULL-BACKEND',
                bufferCommands: true
            });
            console.log('Connected');
        }
    } catch (error: any) {
        console.log('Error: ', error);
        throw new Error("Error: ", error);
    }
}

export default connectDB;