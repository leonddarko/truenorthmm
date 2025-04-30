import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})


const Message = models.Message || model("Message", messageSchema);
export default Message;