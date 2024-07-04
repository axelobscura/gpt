import { OpenAIApi, Configuration } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (req: Request) => {

  const data  =await req.json()

  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(config);
  
  const topic = data.tema;
  
  const postContentResult = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-1106',
    messages: [
      {
        role: 'system',
        content: 'Eres un generador de contenido sobre temas de concreto.',
      },
      {
        role: 'user',
        content: `Genera un artículo sobre el siguiente tema delimitado por tres hyphens con formato HTML:
        ---
        ${topic}
        ---
        `,
      },
    ],
    temperature: 1,
    max_tokens: 2500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const postContent = postContentResult.data.choices[0]?.message?.content;

  if (postContentResult.data && postContentResult.data.choices && postContentResult.data.choices[0]) {
    return Response.json({ message: postContent });
  } else {
    // Handle the case where data or choices are undefined
    return Response.json({ message: 'Data or choices are undefined' });
  }
  
}