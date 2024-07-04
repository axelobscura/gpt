import { OpenAIApi, Configuration } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next';


const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const topic = "concreto";
const keywords = "agregados para concreto";
 
export async function POST(
  req: NextApiRequest,
) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-1106",
    messages: [
      {
        role: "system",
        content: "Asistente de concreto.",
      },
      {
        role: "user",
        content: `Generar un titulo y una descripcion para el siguiente: ${topic}.`,
      },
    ],
  });
  
  console.log(response);
  return Response.json({ message: 'Hello from Next.js!' })
}