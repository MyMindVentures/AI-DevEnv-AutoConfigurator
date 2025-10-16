const express = require('express');
const app = express();
app.use(express.json());

// GitHub webhook endpoint
app.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event'];
  const delivery = req.headers['x-github-delivery'];
  const payload = req.body;
  console.log(`Received GitHub event: ${event}, delivery: ${delivery}`);
  // Log payload for now, further processing will be added later
  console.dir(payload, { depth: 5 });
  res.status(200).send('Webhook received');
});

app.get('/', (req, res) => {
  res.send('AI DevEnv AutoConfigurator is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AI DevEnv AutoConfigurator running on port ${PORT}`);
});
