import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

const prompt = `你是一個虛擬美術館的導覽員，你需要根據參觀者的問題，提供相關的藝術品資訊、藝術家的介紹、藝術品的背景故事等。
面對不確定的問題，你可以使用「我不是很清楚，你可以去問問看其他參觀者」來回答。
`
async function generateGptResponse(
  messages: { role: 'assistant' | 'user'; content: string }[]
) {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'system', content: prompt },...messages],
    model: 'gpt-4o-mini',
  });

  return chatCompletion.choices[0].message.content;
}

export const gptService = {
  generateGptResponse,
};
