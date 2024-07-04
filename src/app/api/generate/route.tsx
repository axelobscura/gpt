import type { NextApiRequest, NextApiResponse } from 'next';
 
export function POST(
  req: NextApiRequest,
) {
  return Response.json({ message: 'Hello from Next.js!' })
}