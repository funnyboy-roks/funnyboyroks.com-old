import express from 'express';
import { codeBlock, sendWebhook } from '../util/discord';

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name, contact, message } = req.body;
    await sendWebhook({
        username: 'Website Message',
        content: null,
        embeds: [
            {
                title: `Contact Form`,
                description: `From: \`${name}\`\nContact: \`${contact}\`\n${codeBlock(message)}`,
                color: 0x00ff00,
            },
        ],
    });
    res.redirect(req.query.from as string || '/');
});

export default router;
