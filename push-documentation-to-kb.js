#!/usr/bin/env node

/**
 * Push all ecosystem documentation to the Hybrid Knowledge Base
 * This script will be executed once the KB is live
 */

const axios = require('axios');

const KB_BASE_URL = 'https://http--hybrid-knowledge-base--nl76nv6p7k89.code.run';

const documentation = {
  ecosystem_documentation: [
    {
      type: 'ecosystem',
      title: 'Complete Ecosystem Audit Report',
      content: 'Comprehensive audit of all 7 projects, their GitHub repositories, NorthFlank deployment status, and identified issues.',
      projectId: 'ecosystem'
    },
    {
      type: 'ecosystem',
      title: 'Ecosystem Documentation',
      content: 'Complete overview of the ecosystem, its mission, architecture, project breakdown, inter-project communication, deployment strategy, and success metrics.',
      projectId: 'ecosystem'
    },
    {
      type: 'ecosystem',
      title: 'Ecosystem Status Report',
      content: 'Details the GitHub repository status for all 7 projects and PWA frontend configuration.',
      projectId: 'ecosystem'
    },
    {
      type: 'ecosystem',
      title: 'Production Status Report',
      content: 'Reports on the production readiness of all ecosystem components, including port configurations, database types, and NorthFlank readiness.',
      projectId: 'ecosystem'
    },
    {
      type: 'ecosystem',
      title: 'Ecosystem Integration Flow',
      content: 'Complete integration flow for all 7 projects, detailing the central hub, frontend, AI layer, infrastructure, and integration phases.',
      projectId: 'ecosystem'
    },
    {
      type: 'ecosystem',
      title: 'Implementation Plan',
      content: 'Concrete implementation steps for the ecosystem integration, including a roadmap for setup, AI integration, frontend integration, and advanced features.',
      projectId: 'ecosystem'
    },
    {
      type: 'ecosystem',
      title: 'Ecosystem Update Plan',
      content: 'Update strategy for existing production projects to add ecosystem integration features.',
      projectId: 'ecosystem'
    }
  ],
  project_documentation: [
    {
      type: 'project',
      title: 'Hybrid Knowledge Base - Central Hub',
      content: 'Central Knowledge Base Hub for Proof of Mind Ecosystem - Multi-database architecture with 6 database types (SQLite, PostgreSQL, MongoDB, Redis, Neo4j, FAISS). Provides ecosystem hub functionality with real-time monitoring and WebSocket communication.',
      projectId: 'hybrid-kb'
    },
    {
      type: 'project',
      title: 'Proof of Mind PWA - Frontend Hub',
      content: 'Frontend Hub for neurodiversity advocacy and AI-powered interviews. Features ecosystem dashboard with real-time monitoring of all 7 projects with WebSocket integration.',
      projectId: 'pwa'
    },
    {
      type: 'project',
      title: 'AI Builder Orchestrator - AI Coordination',
      content: 'AI task orchestration and project management. Coordinates AI agents across the entire ecosystem with ecosystem coordination features.',
      projectId: 'ai-orchestrator'
    },
    {
      type: 'project',
      title: 'AI DevEnv AutoConfigurator - Dev Automation',
      content: 'AI-powered development environment automation. Automates development environment setup for all ecosystem projects.',
      projectId: 'ai-devenv'
    },
    {
      type: 'project',
      title: 'MCP Troubleshooting Server - Error Prevention',
      content: 'MCP Gateway for AI Troubleshooting. Prevents AI agents from repeating errors with cross-project error analysis and prevention.',
      projectId: 'mcp-troubleshooting'
    },
    {
      type: 'project',
      title: 'NorthFlank Monitor - Infrastructure Monitoring',
      content: 'Real-time NorthFlank monitoring and testing system. Monitors all 7 projects with ecosystem monitoring capabilities.',
      projectId: 'northflank-monitor'
    },
    {
      type: 'project',
      title: 'SecretVault - Secrets Management',
      content: 'Intelligent secrets management SaaS for no-coders. Centralized secrets management for all ecosystem projects.',
      projectId: 'secretvault'
    }
  ],
  technical_documentation: [
    {
      type: 'technical',
      title: 'NorthFlank CI/CD Workflow',
      content: 'CRITICAL: ALWAYS push updates directly to GitHub repositories. NEVER create separate test branches - NorthFlank handles all testing automatically. NEVER set up manual testing environments - NorthFlank provides isolated testing. NEVER worry about container building - NorthFlank builds Docker containers automatically. NEVER worry about deployment - NorthFlank deploys with zero downtime automatically. THE WORKFLOW IS: Code → GitHub → NorthFlank → Production',
      projectId: 'ecosystem'
    },
    {
      type: 'technical',
      title: 'MCP Integration',
      content: 'Model Context Protocol integration for Cursor. Provides ecosystem status, documentation storage, analytics, and broadcasting capabilities. Endpoints: /api/mcp/tools, /api/mcp/call, /api/ecosystem/projects, /api/ecosystem/analytics',
      projectId: 'hybrid-kb'
    },
    {
      type: 'technical',
      title: 'WebSocket Communication',
      content: 'Real-time communication between all ecosystem projects via WebSocket. Enables live monitoring, status updates, and inter-project messaging.',
      projectId: 'ecosystem'
    },
    {
      type: 'technical',
      title: 'Multi-Database Architecture',
      content: 'Hybrid Knowledge Base supports 6 database types: SQLite (local), PostgreSQL (relational), MongoDB (document), Redis (cache), Neo4j (graph), FAISS (vector). Provides comprehensive data management for all ecosystem components.',
      projectId: 'hybrid-kb'
    }
  ],
  deployment_documentation: [
    {
      type: 'deployment',
      title: 'NorthFlank URLs',
      content: 'Production URLs for all ecosystem projects: Hybrid Knowledge Base: https://http--hybrid-knowledge-base--nl76nv6p7k89.code.run, WebSocket: wss://ws--hybrid-knowledge-base--nl76nv6p7k89.code.run. All projects deployed via NorthFlank CI/CD with automatic builds and scaling.',
      projectId: 'ecosystem'
    },
    {
      type: 'deployment',
      title: 'Port Configuration',
      content: 'Port assignments: Hybrid Knowledge Base (3003), Proof of Mind PWA (3006), AI Builder Orchestrator (3004), AI DevEnv AutoConfigurator (3000), MCP Troubleshooting Server (3001), NorthFlank Monitor (3002), SecretVault (3005). All ports configured for production deployment.',
      projectId: 'ecosystem'
    }
  ]
};

async function waitForKB() {
  console.log('🔄 Waiting for Hybrid Knowledge Base to be ready...');
  
  for (let i = 0; i < 30; i++) {
    try {
      const response = await axios.get(`${KB_BASE_URL}/health`, { timeout: 5000 });
      if (response.status === 200) {
        console.log('✅ Hybrid Knowledge Base is ready!');
        return true;
      }
    } catch (error) {
      console.log(`⏳ Attempt ${i + 1}/30: KB not ready yet...`);
      await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
    }
  }
  
  console.log('❌ Hybrid Knowledge Base is not ready after 5 minutes');
  return false;
}

async function pushDocumentation() {
  console.log('📚 Pushing documentation to Hybrid Knowledge Base...');
  
  let totalPushed = 0;
  let totalFailed = 0;
  
  for (const [category, docs] of Object.entries(documentation)) {
    console.log(`\n📂 Processing ${category}...`);
    
    for (const doc of docs) {
      try {
        const response = await axios.post(`${KB_BASE_URL}/api/mcp/call`, {
          tool: 'store_ecosystem_documentation',
          args: doc
        }, { timeout: 10000 });
        
        if (response.data.success) {
          console.log(`✅ Stored: ${doc.title}`);
          totalPushed++;
        } else {
          console.log(`❌ Failed: ${doc.title} - ${response.data.error}`);
          totalFailed++;
        }
      } catch (error) {
        console.log(`❌ Error storing ${doc.title}: ${error.message}`);
        totalFailed++;
      }
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log(`\n📊 Documentation Push Summary:`);
  console.log(`✅ Successfully pushed: ${totalPushed}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`📚 Total processed: ${totalPushed + totalFailed}`);
}

async function testMCPEndpoints() {
  console.log('\n🧪 Testing MCP endpoints...');
  
  try {
    // Test tools endpoint
    const toolsResponse = await axios.get(`${KB_BASE_URL}/api/mcp/tools`, { timeout: 10000 });
    console.log('✅ MCP Tools endpoint working');
    console.log(`📋 Available tools: ${toolsResponse.data.tools.length}`);
    
    // Test ecosystem status
    const statusResponse = await axios.post(`${KB_BASE_URL}/api/mcp/call`, {
      tool: 'get_ecosystem_status',
      args: {}
    }, { timeout: 10000 });
    
    if (statusResponse.data.success) {
      console.log('✅ Ecosystem status endpoint working');
    } else {
      console.log('❌ Ecosystem status endpoint failed');
    }
    
    // Test analytics
    const analyticsResponse = await axios.post(`${KB_BASE_URL}/api/mcp/call`, {
      tool: 'get_ecosystem_analytics',
      args: {}
    }, { timeout: 10000 });
    
    if (analyticsResponse.data.success) {
      console.log('✅ Analytics endpoint working');
    } else {
      console.log('❌ Analytics endpoint failed');
    }
    
  } catch (error) {
    console.log(`❌ MCP endpoint test failed: ${error.message}`);
  }
}

async function main() {
  console.log('🚀 Starting documentation push to Hybrid Knowledge Base...');
  
  const isReady = await waitForKB();
  if (!isReady) {
    process.exit(1);
  }
  
  await testMCPEndpoints();
  await pushDocumentation();
  
  console.log('\n🎉 Documentation push completed!');
  console.log('🔗 Hybrid Knowledge Base is now ready for Cursor MCP integration!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { pushDocumentation, testMCPEndpoints, waitForKB };
