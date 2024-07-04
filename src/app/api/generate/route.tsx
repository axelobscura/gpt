import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
 
export const GET = (req: Request) => {
	// do stuff
	return new Response('hello world');
}