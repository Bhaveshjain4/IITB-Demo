const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Proxy endpoint
app.post('/api/soap', async (req, res) => {
  const { username, password, url, soapRequest } = req.body;

  if (!username || !password || !url || !soapRequest) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }

  try {
    const response = await axios.post(url, soapRequest, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      }
    });
    
    res.send(response.data);
  } catch (error) {
    console.error('Error making SOAP request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
