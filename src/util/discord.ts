import axios from 'axios';

/**
 * Set a webhook to the webhook url specified in the .env
 */
export const sendWebhook = async (data: any) => {

    if (!process.env.WEBHOOK_URL || !process.env.WEBHOOK_URL.startsWith('http')) {
        console.error('WEBHOOK_URL is not defined in .env! Unable to send webhook.');
        return;
    }

    if (!data.content) {
        data.content = null;
    }

    await axios.post(process.env.WEBHOOK_URL as string, data);

};

/**
 * Format text in a code block, escaping the bad things >:D
 */
export const codeBlock = (text: string) => `\`\`\`\n${text.replace(/`/gi, '`\u200b')}\n\`\`\``;
