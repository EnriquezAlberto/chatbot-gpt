import { Configuration, OpenAIApi }  from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function main() {
const chatCompletion = await openai.getChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'user', content: 'Cual es la capital de Buenos Aires?'}
    ],
});

console.log(chatCompletion);
}

main();