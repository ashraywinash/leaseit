import axios from 'axios';

export function getMcagentResponse(req, res) {
    const url = process.env.MCAGENT_WEBHOOK_URL;

    const params = {
        "message": req.params.message || "Hello, how are you?",
        "user_id": req.params.user_id || "user123",
        "imageUrl" : req.params.imageUrl || "https://example.com/image.jpg"
    };

    axios.get(url, { params })
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching data from mcagent:', error);
            res.status(500).json({ error: 'Failed to fetch data from mcagent' });
        });
}