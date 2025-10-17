const express = require('express');
const AutoCommit = require('./auto-commit');
const EcosystemMCPClient = require('./ecosystem-mcp-client');
const app = express();
app.use(express.json());

// Initialize services
const autoCommit = new AutoCommit();
const ecosystemMCP = new EcosystemMCPClient();

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

// Auto-commit endpoint
app.post('/auto-commit', async (req, res) => {
  try {
    const { filePath, content } = req.body;
    const result = await autoCommit.commitChanges(filePath, content);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Auto-commit all changes endpoint
app.post('/auto-commit-all', async (req, res) => {
  try {
    const result = await autoCommit.commitAllChanges();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ecosystem MCP endpoints
app.get('/ecosystem/status', async (req, res) => {
  try {
    const result = await ecosystemMCP.getEcosystemStatus();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/ecosystem/analytics', async (req, res) => {
  try {
    const result = await ecosystemMCP.getEcosystemAnalytics();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/ecosystem/broadcast', async (req, res) => {
  try {
    const { message, type } = req.body;
    const result = await ecosystemMCP.broadcastToEcosystem(message, type);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/ecosystem/store-doc', async (req, res) => {
  try {
    const { type, title, content, projectId } = req.body;
    const result = await ecosystemMCP.storeDocumentation(
      type,
      title,
      content,
      projectId
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/ecosystem/update-rules', async (req, res) => {
  try {
    const result = await ecosystemMCP.updateEcosystemRules();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/ecosystem/monitor', async (req, res) => {
  try {
    const result = await ecosystemMCP.monitorEcosystem();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AI DevEnv AutoConfigurator running on port ${PORT}`);
});
