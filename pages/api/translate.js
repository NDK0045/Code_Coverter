/*import { OpenAIStream } from '@/utils';

export const config = {
  runtime: 'edge',
};

export default async function handler(req, res) {
  try {
    const { inputLanguage, outputLanguage, inputCode } = await req.json();

    const stream = await OpenAIStream(
      inputLanguage,
      outputLanguage,
      inputCode
    );

    return new Response(stream);
  } catch (error) {
    res.status(500).send('Error')
  }
}*/
import { OpenAIStream } from '@/utils'; // Adjust the import path if needed

export const config = {
  runtime: 'edge',
};

export default async function handler(req, res) {
  try {
    const { inputLanguage, outputLanguage, inputCode } = await req.json();
    const stream = await OpenAIStream(inputLanguage, outputLanguage, inputCode);
    return new Response(stream);
  } catch (error) {
    console.error('Error in translate handler:', error);
    res.status(500).send('Internal Server Error');
  }
}
