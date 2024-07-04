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
  res: NextApiResponse
) {
  const prompt = "potatoe";

  if (!prompt) {
    return res.status(400).json({ error: "Prompt missing" });
  }

  if (prompt.length > 100) {
    return res.status(400).json({ error: "Prompt too long" });
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a cringy motivational quote based on the following topic.\n
    Topic: ${prompt}\n
    Cringy motivational quote:`,
    max_tokens: 500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  const quote = completion.data.choices[0].text;

  console.log('quote: ', quote);

  res.status(200).json({ quote });
}