import { OpenAIApi, Configuration } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
 
export const GET = async (req: Request) => {
  
  const topic = "concreto";
  const keywords = "agregados para concreto";
  
  const postContentResult = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a blog post generator.',
      },
      {
        role: 'user',
        content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
        The response should be formatted in SEO-friendly HTML, 
        limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
      },
    ]
  });

  if (postContentResult.data && postContentResult.data.choices && postContentResult.data.choices[0]) {
    const postContent = postContentResult.data.choices[0]?.message?.content;
    return Response.json({ message: postContent });
  } else {
    // Handle the case where data or choices are undefined
    return Response.json({ message: 'Data or choices are undefined' });
  }
}