import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
 
export const GET = (req: Request) => {
	// do stuff
	return Response.json({ message: 'hola' })
}