# 🔗 CURSOR MCP CONFIGURATION - PROOF OF MIND ECOSYSTEM

## 🎯 MCP Server Configuration for Cursor

Add this configuration to your Cursor MCP settings to connect directly to the Proof of Mind Ecosystem:

### 📋 MCP Server Configuration

```json
{
  "mcpServers": {
    "proof-of-mind-ecosystem": {
      "command": "node",
      "args": ["ecosystem-mcp-server.js"],
      "cwd": ".",
      "env": {
        "NODE_ENV": "production",
        "KB_BASE_URL": "https://http--hybrid-knowledge-base--nl76nv6p7k89.code.run",
        "KB_WS_URL": "wss://ws--hybrid-knowledge-base--nl76nv6p7k89.code.run"
      }
    }
  }
}
```

### 🚀 Available MCP Tools

Once connected, you'll have access to these ecosystem tools:

#### 1. **get_ecosystem_status**

- **Description**: Get the current status of all 7 ecosystem projects
- **Usage**: `@ecosystem status`
- **Returns**: Real-time status of all projects, health checks, and uptime

#### 2. **get_project_status**

- **Description**: Get detailed status of a specific project
- **Usage**: `@ecosystem project <projectId>`
- **Parameters**: projectId (pwa, ai-orchestrator, ai-devenv, mcp-troubleshooting, northflank-monitor, secretvault)
- **Returns**: Detailed project information, response times, and health status

#### 3. **store_ecosystem_documentation**

- **Description**: Store documentation in the Hybrid Knowledge Base
- **Usage**: `@ecosystem store <type> <title> <content>`
- **Parameters**: type, title, content, projectId (optional)
- **Returns**: Confirmation of storage with ID and timestamp

#### 4. **get_ecosystem_analytics**

- **Description**: Get analytics data from the ecosystem
- **Usage**: `@ecosystem analytics`
- **Returns**: Performance metrics, error rates, and usage statistics

#### 5. **broadcast_to_ecosystem**

- **Description**: Broadcast a message to all ecosystem projects
- **Usage**: `@ecosystem broadcast <message> <type>`
- **Parameters**: message, type
- **Returns**: Confirmation of broadcast to all connected projects

### 🌐 Ecosystem Projects

| Project ID            | Name                       | Role                      | Port | Status     |
| --------------------- | -------------------------- | ------------------------- | ---- | ---------- |
| `pwa`                 | Proof of Mind PWA          | Frontend Hub              | 3006 | ✅ Healthy |
| `ai-orchestrator`     | AI Builder Orchestrator    | AI Coordination           | 3004 | ✅ Healthy |
| `ai-devenv`           | AI DevEnv AutoConfigurator | Dev Automation            | 3000 | ✅ Healthy |
| `mcp-troubleshooting` | MCP Troubleshooting Server | Error Prevention          | 3001 | ✅ Healthy |
| `northflank-monitor`  | NorthFlank Monitor         | Infrastructure Monitoring | 3002 | ✅ Healthy |
| `secretvault`         | SecretVault                | Secrets Management        | 3005 | ✅ Healthy |
| `hybrid-kb`           | Hybrid Knowledge Base      | Central Hub               | 3003 | ✅ Healthy |

### 🔧 Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install axios
   ```

2. **Create MCP Server File**:

   ```javascript
   // ecosystem-mcp-server.js
   const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
   const {
     StdioServerTransport,
   } = require('@modelcontextprotocol/sdk/server/stdio.js');
   const axios = require('axios');

   // Implementation from Hybrid Knowledge Base MCP service
   ```

3. **Add to Cursor Settings**:
   - Open Cursor Settings
   - Navigate to MCP Configuration
   - Add the configuration above
   - Restart Cursor

### 🎯 Usage Examples

#### Check Ecosystem Status

```
@ecosystem status
```

#### Get Project Details

```
@ecosystem project pwa
@ecosystem project ai-orchestrator
```

#### Store Documentation

```
@ecosystem store technical "API Documentation" "Complete API reference for all endpoints" pwa
```

#### Get Analytics

```
@ecosystem analytics
```

#### Broadcast Message

```
@ecosystem broadcast "New feature deployed" info
```

### 🚨 Critical Rules (Enforced via MCP)

- **NorthFlank CI/CD Workflow**: Code → GitHub → NorthFlank → Production
- **Automatic Commits**: Every change automatically committed with beautiful descriptions
- **Ecosystem MCP Control**: All rules controlled via Hybrid Knowledge Base
- **Source Files Only**: Never build locally, always push to GitHub
- **OAuth Flow**: Always use browser OAuth for authentication

### 📊 Real-Time Monitoring

The MCP connection provides real-time access to:

- ✅ Project health status
- ✅ Response times and uptime
- ✅ Error rates and analytics
- ✅ WebSocket communication
- ✅ Ecosystem-wide broadcasts
- ✅ Documentation storage and retrieval

### 🎉 Benefits

- **Unified Control**: Manage entire ecosystem from Cursor
- **Real-Time Data**: Live status of all 7 projects
- **Automatic Enforcement**: Rules enforced via ecosystem MCP
- **Beautiful Commits**: Automatic commits with descriptive messages
- **Ecosystem Integration**: Seamless integration with all projects

**CONNECT CURSOR TO THE PROOF OF MIND ECOSYSTEM!** 🚀
