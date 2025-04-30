import connectDB from "@/app/lib/utils";
import Message from "@/app/lib/models/message";

export async function POST(request) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
        const req = await request.json();
        console.log(req);

        const { fname, email, subject, message } = req

        console.log("Connecting to database...");
        await connectDB();
        console.log("Connected.");

        console.log("Creating document...");
        const newmessage = await Message({
            fname,
            email,
            email,
            subject,
            message,
        }).save()
        console.log("Message saved...");
        console.log(newmessage);
        
        return Response.json({ okay: "Message Sent" }, { status: 200 });

    } catch (error) {
        console.error('An error occured', error);
        return Response.json({ error: 'An error occured' }, { status: 500 });
    }

}