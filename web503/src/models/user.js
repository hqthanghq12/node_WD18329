import mongoose from "mongoose";
const UserShema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    age: {
        type: Number,
        required: true
    }
},
{
    timestamps: true, versionKey: false,
});
export default mongoose.model("User", UserShema);