const axios = require('axios');

class EcosystemMCPClient {
  constructor() {
    this.kbBaseUrl = 'https://http--hybrid-knowledge-base--nl76nv6p7k89.code.run';
    this.kbWsUrl = 'wss://ws--hybrid-knowledge-base--nl76nv6p7k89.code.run';
    this.isConnected = false;
  }

  async connect() {
    try {
      const response = await axios.get(`${this.kbBaseUrl}/health`, { timeout: 10000 });
      if (response.status === 200) {
        this.isConnected = true;
        console.log('✅ Connected to Hybrid Knowledge Base');
        return true;
      }
    } catch (error) {
      console.log('⏳ Hybrid Knowledge Base not ready yet...');
      return false;
    }
  }

  async getEcosystemStatus() {
    try {
      const response = await axios.post(`${this.kbBaseUrl}/api/mcp/call`, {
        tool: 'get_ecosystem_status',
        args: {}
      }, { timeout: 10000 });
      
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get ecosystem status:', error.message);
      return { success: false, error: error.message };
    }
  }

  async getProjectStatus(projectId) {
    try {
      const response = await axios.post(`${this.kbBaseUrl}/api/mcp/call`, {
        tool: 'get_project_status',
        args: { projectId }
      }, { timeout: 10000 });
      
      return response.data;
    } catch (error) {
      console.error(`❌ Failed to get project status for ${projectId}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async storeDocumentation(type, title, content, projectId = 'ecosystem') {
    try {
      const response = await axios.post(`${this.kbBaseUrl}/api/mcp/call`, {
        tool: 'store_ecosystem_documentation',
        args: { type, title, content, projectId }
      }, { timeout: 10000 });
      
      return response.data;
    } catch (error) {
      console.error('❌ Failed to store documentation:', error.message);
      return { success: false, error: error.message };
    }
  }

  async getEcosystemAnalytics() {
    try {
      const response = await axios.post(`${this.kbBaseUrl}/api/mcp/call`, {
        tool: 'get_ecosystem_analytics',
        args: {}
      }, { timeout: 10000 });
      
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get ecosystem analytics:', error.message);
      return { success: false, error: error.message };
    }
  }

  async broadcastToEcosystem(message, type = 'info') {
    try {
      const response = await axios.post(`${this.kbBaseUrl}/api/mcp/call`, {
        tool: 'broadcast_to_ecosystem',
        args: { message, type }
      }, { timeout: 10000 });
      
      return response.data;
    } catch (error) {
      console.error('❌ Failed to broadcast to ecosystem:', error.message);
      return { success: false, error: error.message };
    }
  }

  async storeRule(ruleType, ruleContent, enforcement = 'MEGA_HARD') {
    try {
      const title = `${ruleType} Rule - ${enforcement}`;
      const content = `**${ruleType.toUpperCase()} RULE (${enforcement})**\n\n${ruleContent}\n\n**VIOLATION = IMMEDIATE CORRECTION**`;
      
      const response = await this.storeDocumentation('rule', title, content, 'ecosystem');
      
      if (response.success) {
        // Broadcast rule update to ecosystem
        await this.broadcastToEcosystem(`New rule added: ${ruleType}`, 'rule_update');
      }
      
      return response;
    } catch (error) {
      console.error('❌ Failed to store rule:', error.message);
      return { success: false, error: error.message };
    }
  }

  async updateEcosystemRules() {
    try {
      console.log('🔄 Updating ecosystem rules via MCP...');
      
      // Store all critical rules
      const rules = [
        {
          type: 'NorthFlank CI/CD Workflow',
          content: 'ALWAYS push updates directly to GitHub repositories. NEVER create separate test branches - NorthFlank handles all testing automatically. NEVER set up manual testing environments - NorthFlank provides isolated testing. NEVER worry about container building - NorthFlank builds Docker containers automatically. NEVER worry about deployment - NorthFlank deploys with zero downtime automatically. THE WORKFLOW IS: Code → GitHub → NorthFlank → Production'
        },
        {
          type: 'Automatic Commit',
          content: 'EVERY IDE CHANGE MUST BE AUTOMATICALLY COMMITTED WITH BEAUTIFUL DESCRIPTIONS. ALWAYS commit immediately after any code change. ALWAYS use descriptive commit messages with emojis. ALWAYS include what was changed and why. ALWAYS push to GitHub immediately after commit. NEVER leave uncommitted changes.'
        },
        {
          type: 'Ecosystem MCP Control',
          content: 'ALL RULES AND INSTRUCTIONS MUST BE CONTROLLED VIA ECOSYSTEM MCP. ALWAYS use Hybrid Knowledge Base for rule storage. ALWAYS update rules via MCP endpoints. ALWAYS sync rules across all ecosystem projects. ALWAYS enforce rules via ecosystem coordination. NEVER create local rule files.'
        },
        {
          type: 'Source Files Only',
          content: 'NEVER run npm run build locally. NEVER commit node_modules directory. NEVER commit package-lock.json. NEVER commit built files or dist directories. NEVER build anything locally before pushing to GitHub. CORRECT WORKFLOW: Create source files only → Push to GitHub → NorthFlank builds automatically.'
        },
        {
          type: 'OAuth Flow',
          content: 'ALWAYS use browser OAuth for GitHub authentication. ALWAYS use browser OAuth for NorthFlank authentication. ALWAYS use gh auth login --web for GitHub CLI. ALWAYS use northflank login for NorthFlank CLI. ALWAYS open browser for OAuth authorization. NEVER USE: Manual token input, API key configuration, Manual authentication setup.'
        }
      ];

      let successCount = 0;
      let failCount = 0;

      for (const rule of rules) {
        const result = await this.storeRule(rule.type, rule.content);
        if (result.success) {
          successCount++;
          console.log(`✅ Stored rule: ${rule.type}`);
        } else {
          failCount++;
          console.log(`❌ Failed to store rule: ${rule.type}`);
        }
      }

      console.log(`📊 Rules update summary: ${successCount} success, ${failCount} failed`);
      
      return { success: successCount > 0, successCount, failCount };
    } catch (error) {
      console.error('❌ Failed to update ecosystem rules:', error.message);
      return { success: false, error: error.message };
    }
  }

  async monitorEcosystem() {
    try {
      const status = await this.getEcosystemStatus();
      const analytics = await this.getEcosystemAnalytics();
      
      console.log('🌐 Ecosystem Status:', status.success ? 'Healthy' : 'Issues detected');
      console.log('📊 Analytics:', analytics.success ? 'Available' : 'Unavailable');
      
      return { status, analytics };
    } catch (error) {
      console.error('❌ Failed to monitor ecosystem:', error.message);
      return { success: false, error: error.message };
    }
  }
}

module.exports = EcosystemMCPClient;
