import axios from 'axios'; // You might need to install this package

export default async (req, res) => {
    console.log("API Called!");
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        prompt: req.body.message,
        max_tokens: 150
    }, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
    });

    res.status(200).json({ message: response.data.choices[0].text.trim() });
};
