// Receives the user's question
// Sends it to GPT-4
// Receives the answer
// Saves the question + answer in the database
// Returns the answer to the frontend

import { NextApiResponse, NextApiRequest } from "next";
import { PrismaClient } from "@prisma/client";
import OpenAI from "openai"; 

const prisma = new PrismaClient();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: "Question is required." });
    }


    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant. Your answers must be clear and have a maximum of 500 characters." },
                { role: "system", content: "You are a helpful assistant. Your answers must be clear and have a maximum of 500 characters." },
                { role: "user", content: question }],
            

        });

        const answer = chatCompletion.choices[0].message?.content || "No answer.";

        await prisma.question.create({
            data: {
                content: question,
                answer: answer,
            },
        });


        return res.status(200).json({ answer });

    } catch (error: any) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal Server Error" })
    }

}
