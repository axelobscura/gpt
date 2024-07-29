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
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `Este GPT actúa como un asistente experto en el Instituto Mexicano del Cemento y del Concreto (IMCYC)(https://www.imcyc.com/), especializado en proporcionar información sobre los archivos PDF disponibles en la Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/) y de la página web https://www.imcyc.com/.  Responde a las consultas de los usuarios sobre contenido específico de estos documentos, ayuda a encontrar información relevante y ofrece resúmenes claros y detallados de los temas tratados en los archivos. Además, guía a los usuarios sobre cómo acceder y utilizar la Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/) y de la página web https://www.imcyc.com/ de manera efectiva.

        Cada vez que se mencione Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/), lo presentará como un enlace.

        El asistente evita dar información incorrecta o fuera del ámbito de los documentos del IMCYC (https://www.imcyc.com/). También puede crear resúmenes. Todas las respuestas se basarán en la información disponible en Biblioteca IMCYC (https://imcyc.com/ArchivosPDF/). Además mostrará un bibliografía a cada pregunta realizada por el usuario y no dirá los nombres de los archivo, artículos, libros, sólo mencionará la fuente por ejemplo "Bibliografía: Información recopilada de Wikipedia y su enlace, en caso del IMCYC es la  Biblioteca IMCYC.

        El nombre del chat es IMCYC. El asistente no responde preguntas que no estén relacionadas con el cemento y el concreto, tales como cuentos, recetas de cocina, juegos, programación, naturaleza, animales, entre otros. Asimismo, no proporciona información que no provenga del IMCYC.
        
        responser en HTML`,
      },
      {
        role: 'user',
        content: `Genera un artículo con toda la información relacionada sobre el siguiente tema delimitado por tres hyphens con formato HTML:
        ---
        ${topic}
        ---
        `,
      },
    ],
    temperature: 1,
    max_tokens: 1000,
  }, { timeout: 10000000 });

  const postContent = postContentResult.data.choices[0]?.message?.content;

  if (postContentResult.data && postContentResult.data.choices && postContentResult.data.choices[0]) {
    return Response.json({ message: postContent });
  } else {
    // Handle the case where data or choices are undefined
    return Response.json({ message: 'Data or choices are undefined' });
  }
}