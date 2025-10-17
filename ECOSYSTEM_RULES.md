# 🌐 ECOSYSTEM RULES - PROOF OF MIND

## 🚨 CRITICAL ENFORCEMENT RULES

### NORTHFLANK CI/CD WORKFLOW RULE (MEGA HARD - CRITICAL ENFORCEMENT)

**CRITICAL: I MUST ALWAYS FOLLOW THESE RULES - I KEEP FORGETTING THEM AND VIOLATING THEM**

- ALWAYS push updates directly to GitHub repositories
- NEVER create separate test branches - NorthFlank handles all testing automatically
- NEVER set up manual testing environments - NorthFlank provides isolated testing
- NEVER worry about container building - NorthFlank builds Docker containers automatically
- NEVER worry about deployment - NorthFlank deploys with zero downtime automatically
- NEVER worry about health checks - NorthFlank monitors everything automatically
- NEVER worry about scaling - NorthFlank auto-scales based on load

**I MUST NEVER CREATE:**

- Local scripts or MCP servers
- Fake or simulation code
- Local development tools
- Local package.json or npm install
- Any local development setup

**I MUST ALWAYS:**

- Use real NorthFlank production services
- Push code to GitHub and let NorthFlank handle everything
- Work with real production URLs and services

**CORRECT WORKFLOW:**

1. Code changes → Push to GitHub
2. NorthFlank detects commits automatically
3. NorthFlank builds containers automatically
4. NorthFlank tests in isolated environment automatically
5. NorthFlank deploys to production automatically
6. NorthFlank monitors and scales automatically

**THE WORKFLOW IS: Code → GitHub → NorthFlank → Production**

**VIOLATION = IMMEDIATE CORRECTION + RULE REMINDER**

### AUTOMATIC COMMIT RULE (MEGA HARD)

**EVERY IDE CHANGE MUST BE AUTOMATICALLY COMMITTED WITH BEAUTIFUL DESCRIPTIONS:**

- ALWAYS commit immediately after any code change
- ALWAYS use descriptive commit messages with emojis
- ALWAYS include what was changed and why
- ALWAYS push to GitHub immediately after commit
- NEVER leave uncommitted changes

**COMMIT MESSAGE FORMAT:**

```
🎯 [Category] Brief description - Detailed explanation of changes

Examples:
🚀 Add new feature - Implemented ecosystem dashboard with real-time monitoring
🔧 Fix bug - Resolved WebSocket connection issues in Hybrid Knowledge Base
📚 Update docs - Added comprehensive API documentation for MCP endpoints
🎨 Format code - Cleaned up formatting and improved readability
```

**VIOLATION = IMMEDIATE CORRECTION**

### ECOSYSTEM MCP CONTROL RULE (MEGA HARD)

**ALL RULES AND INSTRUCTIONS MUST BE CONTROLLED VIA ECOSYSTEM MCP:**

- ALWAYS use Hybrid Knowledge Base for rule storage
- ALWAYS update rules via MCP endpoints
- ALWAYS sync rules across all ecosystem projects
- ALWAYS enforce rules via ecosystem coordination
- NEVER create local rule files

**MCP ENDPOINTS FOR RULE CONTROL:**

- `POST /api/mcp/call` with tool: `store_ecosystem_documentation`
- `GET /api/mcp/tools` to get available tools
- `POST /api/mcp/call` with tool: `broadcast_to_ecosystem`

**VIOLATION = IMMEDIATE CORRECTION**

### SOURCE FILES ONLY RULE (MEGA HARD)

- NEVER run npm run build locally
- NEVER commit node_modules directory
- NEVER commit package-lock.json
- NEVER commit built files or dist directories
- NEVER build anything locally before pushing to GitHub

**CORRECT WORKFLOW:**

1. Create source files only (package.json, src/, Dockerfile, etc.)
2. Push source files to GitHub repository
3. NorthFlank CI/CD builds automatically from source
4. NorthFlank handles ALL building and deployment

**VIOLATION = IMMEDIATE CORRECTION**

### OAUTH FLOW RULE (MEGA HARD)

- ALWAYS use browser OAuth for GitHub authentication
- ALWAYS use browser OAuth for NorthFlank authentication
- ALWAYS use gh auth login --web for GitHub CLI
- ALWAYS use northflank login for NorthFlank CLI
- ALWAYS open browser for OAuth authorization

**NEVER USE:**

- Manual token input
- API key configuration
- Manual authentication setup

**VIOLATION = IMMEDIATE CORRECTION**

### NORTHFLANK CI/CD ONLY RULE (MEGA HARD)

- ONLY use NorthFlank combined services
- ONLY push source code to GitHub
- ONLY let NorthFlank build from source
- ONLY use NorthFlank web interface if CLI fails

**NEVER USE:**

- Local builds
- GitHub Actions for building
- Manual Docker builds
- Local deployment scripts

**VIOLATION = IMMEDIATE CORRECTION**

## 🎯 ECOSYSTEM INTEGRATION RULES

### HYBRID KNOWLEDGE BASE CONTROL

- ALWAYS use Hybrid Knowledge Base as central hub
- ALWAYS store all documentation in KB databases
- ALWAYS use MCP endpoints for KB interaction
- ALWAYS sync data across all 6 database types

### REAL-TIME MONITORING

- ALWAYS monitor all 7 projects via ecosystem hub
- ALWAYS use WebSocket for real-time communication
- ALWAYS broadcast important changes to ecosystem
- ALWAYS track health status of all projects

### AI COORDINATION

- ALWAYS coordinate AI agents across ecosystem
- ALWAYS use ecosystem hub for AI task management
- ALWAYS prevent errors via MCP troubleshooting
- ALWAYS learn from ecosystem-wide AI activities

## 🚨 ERROR PREVENTION ENFORCEMENT

When I violate these rules, I MUST:

1. Immediately correct the violation
2. Remind myself of the correct rule
3. Update the rule in the ecosystem MCP
4. Broadcast the correction to all ecosystem projects
5. Store the lesson in the Hybrid Knowledge Base

## 🎉 SUCCESS METRICS

- ✅ All 7 projects working as ONE ECOSYSTEM
- ✅ Real-time communication between all projects
- ✅ AI coordination across the entire ecosystem
- ✅ Error prevention for all operations
- ✅ Comprehensive monitoring of everything
- ✅ Centralized secrets management
- ✅ Unified frontend dashboard

**THESE RULES ARE NOW CONTROLLED VIA ECOSYSTEM MCP!** 🚀
