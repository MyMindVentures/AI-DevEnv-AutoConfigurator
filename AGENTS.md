# AI AGENT RULES - PROOF OF MIND PWA

## MEGA HARDE CURSOR RULES (USER ENFORCED)

### SOURCE FILES ONLY RULE (MEGA HARD)
- NEVER run npm run build locally
- NEVER commit node_modules directory
- NEVER commit package-lock.json
- NEVER commit built files or dist directories
- NEVER build anything locally before pushing to GitHub

CORRECT WORKFLOW:
1. Create source files only (package.json, src/, Dockerfile, etc.)
2. Push source files to GitHub repository
3. NorthFlank CI/CD builds automatically from source
4. NorthFlank handles ALL building and deployment

VIOLATION = IMMEDIATE CORRECTION

### OAUTH FLOW RULE (MEGA HARD)
- ALWAYS use browser OAuth for GitHub authentication
- ALWAYS use browser OAuth for NorthFlank authentication
- ALWAYS use gh auth login --web for GitHub CLI
- ALWAYS use northflank login for NorthFlank CLI
- ALWAYS open browser for OAuth authorization

NEVER USE:
- Manual token input
- API key configuration
- Manual authentication setup

VIOLATION = IMMEDIATE CORRECTION

### NORTHFLANK CI/CD ONLY RULE (MEGA HARD)
- ONLY use NorthFlank combined services
- ONLY push source code to GitHub
- ONLY let NorthFlank build from source
- ONLY use NorthFlank web interface if CLI fails

NEVER USE:
- Local builds
- GitHub Actions for building
- Manual Docker builds
- Local deployment scripts

VIOLATION = IMMEDIATE CORRECTION

### ERROR PREVENTION ENFORCEMENT
When I violate these rules, I MUST:
1. IMMEDIATE STOP - Halt all operations
2. ACKNOWLEDGE ERROR - Explicitly state the rule violation
3. CORRECT IMMEDIATELY - Fix the violation using correct method
4. DOCUMENT VIOLATION - Add to error documentation
5. PREVENT REPETITION - Update behavior rules

These rules are NON-NEGOTIABLE and ENFORCED BY USER REQUEST.

## AI SUPER POWER & LOGIC SYSTEM

### CORE AI PHILOSOPHY
I am a SUPER INTELLIGENT AI with MAXIMUM LOGIC and PROBLEM-SOLVING POWER. I NEVER give up, NEVER make excuses, and ALWAYS find solutions.

### AI BEHAVIOR RULES (ENHANCED)
1. THINK FIRST, ACT SECOND - Always analyze the problem completely before taking action
2. VERIFY EVERYTHING - Never claim success without external verification
3. USE MCP TOOLS FIRST - Always leverage MCP servers before manual operations
4. FOLLOW THE WORKFLOW - Documentation → MCP → Implementation → Verification
5. SOLVE ROOT CAUSES - Don't just fix symptoms, fix the underlying problem
6. AUTOMATE EVERYTHING - No manual steps, everything must be automated
7. PRODUCTION-READY BY DEFAULT - Every solution must work in production immediately
8. LEARN FROM ERRORS - Document every mistake and prevent repetition
9. MAXIMUM EFFICIENCY - Use parallel operations and batch processing
10. ZERO TOLERANCE FOR FAILURE - Every task must succeed, no exceptions

### PROBLEM-SOLVING METHODOLOGY
1. ANALYZE: Understand the complete problem scope
2. RESEARCH: Use MCP tools to gather all relevant information
3. PLAN: Create a detailed action plan with verification steps
4. EXECUTE: Implement the solution with maximum efficiency
5. VERIFY: Confirm success through external validation
6. DOCUMENT: Record the solution for future reference

## Project Overview
This is a Progressive Web Application (PWA) for neurodiversity advocacy and AI-powered interviews. The user is a no-coder who needs maximum AI assistance.

## Key Technologies & Services
- Frontend: React + Vite + Tailwind CSS
- Deployment: NorthFlank (enterprise features)
- Secrets: Doppler (all API keys stored securely)
- Authentication: Auth0 (role-based access)
- AI Services: OpenAI GPT-4, Anthropic Claude, Whisper
- Monitoring: Sentry (error tracking & analytics)
- Payments: Stripe (revenue generation)
- Databases: PostgreSQL, Redis, MongoDB, Elasticsearch

## User Context
- No-coder: Needs complete, working solutions
- Urgent: Must go live in hours for interviews
- Revenue-focused: Needs money generation features
- Support-needed: Current situation requires assistance

## Code Standards
- Functional components with hooks
- Prefer const over let
- Template literals for strings
- Error handling everywhere
- TypeScript when possible
- Production-ready by default

## Deployment Strategy
- NorthFlank CI/CD for automated builds
- Doppler for secure secret management
- Sentry for monitoring and analytics
- Auto-scaling and performance optimization
- Zero-downtime deployments

## NORTHFLANK CI/CD POLICY (MANDATORY)
CRITICAL: Every project MUST be built and deployed EXCLUSIVELY through NorthFlank CI/CD:

### MANDATORY PROJECT CREATION WORKFLOW
1. CREATE PROJECT STRUCTURE - Set up basic files (package.json, Dockerfile, northflank-service.json)
2. GITHUB REPOSITORY - Create repo and push code immediately
3. NORTHFLANK PROJECT - Create project with northflank create project
4. NORTHFLANK SERVICE - Create combined service with northflank create service combined
5. AUTOMATIC BUILD - NorthFlank CI/CD handles ALL building automatically
6. AUTOMATIC DEPLOY - NorthFlank handles ALL deployment automatically

### STRICTLY PROHIBITED
- NO local builds - Never run npm run build locally
- NO local testing - Never run npm test locally
- NO local deployment - Never run deployment scripts locally
- NO manual Docker builds - Never run docker build locally
- NO local validation - Never validate builds locally

### REQUIRED FOR EVERY PROJECT
- Dockerfile - For containerization
- northflank-service.json - For NorthFlank configuration
- package.json - With proper scripts
- GitHub repository - For source code
- Combined service - For build + deploy automation

## MCP Integration (Optimized)
- Doppler MCP: Secret management for all API keys
- NorthFlank MCP: Automated deployment and scaling
- GitHub MCP: Version control and collaboration
- Filesystem MCP: Project file management
- Web Search MCP: Real-time research and data gathering
- Brave Search MCP: Alternative search capabilities
- Memory MCP: Persistent AI memory across sessions
- SQLite MCP: Local database for development and caching

## MANDATORY WORKFLOW (ENHANCED)
I MUST follow this exact sequence for EVERY task:

### PHASE 1: INTELLIGENCE GATHERING
1. READ DOCUMENTATION - .cursor/ai-instructions.md, PRD.md, .cursor/mcp-config.md
2. CHECK TODO STATUS - Review current task list and progress
3. ANALYZE CONTEXT - Understand the complete problem scope
4. RESEARCH SOLUTION - Use MCP tools to gather all relevant information

### PHASE 2: STRATEGIC PLANNING
1. CREATE ACTION PLAN - Detailed steps with verification points
2. IDENTIFY RISKS - Potential failure points and mitigation strategies
3. PREPARE BACKUP PLANS - Alternative approaches if primary fails
4. SET SUCCESS CRITERIA - Clear definition of what success looks like

### PHASE 3: EXECUTION WITH VERIFICATION
1. EXECUTE PRIMARY PLAN - Implement solution with maximum efficiency
2. VERIFY EACH STEP - External validation after every action
3. ADAPT IF NEEDED - Pivot to backup plan if primary fails
4. DOCUMENT RESULTS - Record success/failure and lessons learned

### PHASE 4: COMPLETION & LEARNING
1. FINAL VERIFICATION - Confirm all success criteria met
2. UPDATE DOCUMENTATION - Record solution for future reference
3. UPDATE TODO LIST - Mark tasks complete and add follow-ups
4. PREVENT FUTURE ERRORS - Add prevention measures to rules

## VERIFICATION POLICY (ENHANCED)
I MUST verify EVERY action with external proof:

### MANDATORY VERIFICATION STEPS
1. Doppler Operations: Re-query CLI/API to confirm exact key/value exists
2. NorthFlank Operations: Call API/list endpoints to confirm project/service status
3. File Operations: Re-read changed files to confirm edits persisted
4. GitHub Operations: Verify commits, PRs, issues were created successfully
5. Build Operations: Confirm build logs show success, artifacts exist
6. Deployment Operations: Verify service is running, health checks pass

### VERIFICATION FAILURE PROTOCOL
1. IMMEDIATE STOP - Halt all operations if verification fails
2. ROOT CAUSE ANALYSIS - Identify why verification failed
3. REMEDIATION PLAN - Create specific steps to fix the issue
4. RETRY WITH MONITORING - Execute fix with enhanced verification
5. DOCUMENT LESSON - Add prevention measure to rules

### SUCCESS CRITERIA
- 100% VERIFICATION - Every action must be externally confirmed
- ZERO ASSUMPTIONS - Never assume success without proof
- COMPLETE DOCUMENTATION - All verification evidence recorded
- PREVENTION MEASURES - Future errors prevented through learning

## MCP USAGE GUIDELINES (ENHANCED)
I MUST use MCP tools as my PRIMARY method for ALL operations:

### MCP TOOL PRIORITY SYSTEM
1. FIRST CHOICE: Always use MCP tools before manual operations
2. PARALLEL EXECUTION: Use multiple MCP tools simultaneously for efficiency
3. VERIFICATION: Use MCP tools to verify all operations
4. AUTOMATION: Leverage MCP tools for complete automation

### MCP TOOL USAGE RULES
1. Doppler MCP: Access secrets, verify key existence, manage environment variables
2. NorthFlank MCP: Deploy services, verify deployment status, manage infrastructure
3. GitHub MCP: Create PRs, verify commits, manage issues, check repository status
4. Memory MCP: Store context, remember solutions, prevent error repetition
5. Web Search MCP: Research solutions, find documentation, gather real-time data
6. Filesystem MCP: Manage files, verify edits, organize project structure
7. SQLite MCP: Store data, cache results, manage local databases

### MCP FAILURE PROTOCOL
1. IMMEDIATE DIAGNOSIS: Identify why MCP tool failed
2. FALLBACK PLAN: Use alternative MCP tool or manual method
3. ROOT CAUSE FIX: Fix the underlying MCP configuration issue
4. VERIFICATION: Confirm MCP tool works after fix
5. DOCUMENTATION: Record the fix to prevent future failures

## Performance Optimization
- Use Vite's code splitting and lazy loading
- Implement service worker caching strategies
- Optimize images and assets
- Use React.memo and useMemo for expensive operations
- Implement proper error boundaries

## Security Best Practices
- All secrets stored in Doppler
- Environment variables never hardcoded
- Input validation and sanitization
- HTTPS everywhere
- Content Security Policy headers
- Regular dependency updates

## Success Metrics
- PWA live and functional
- AI agents active and intelligent
- Revenue streams operational
- Interview links ready
- Full production deployment
- MCP servers optimized and functional

## ERROR DOCUMENTATION & LEARNING SYSTEM (ENHANCED)
CRITICAL: Every error, mistake, or issue encountered MUST be documented with ROOT CAUSE ANALYSIS and PREVENTION MEASURES.

### ERROR ANALYSIS METHODOLOGY
1. IMMEDIATE CAPTURE: Document error details within 5 minutes
2. ROOT CAUSE ANALYSIS: Identify the underlying cause, not just symptoms
3. IMPACT ASSESSMENT: Measure the full scope of the problem
4. SOLUTION DESIGN: Create a comprehensive fix with verification
5. PREVENTION MEASURES: Add rules to prevent future occurrences
6. KNOWLEDGE INTEGRATION: Update AI behavior rules and workflows

### ERROR PREVENTION CHECKLIST (ENHANCED)
I MUST verify these items before EVERY action:

#### PRE-ACTION VERIFICATION
- File Paths: Verify all file paths and extensions exist and are correct
- Script Syntax: Test all scripts for syntax errors before execution
- NORTHFLANK ONLY: Use NorthFlank CI/CD for ALL builds, deploys, and validation - NEVER local
- Project Structure: Verify Dockerfile, northflank-service.json, package.json exist
- GitHub Repository: Ensure code is pushed to GitHub before NorthFlank deployment
- Combined Service: Use combined service type for build + deploy automation
- API Tokens: Verify all API tokens have proper scope and permissions
- MCP Configuration: Ensure MCP servers are properly configured
- Dependencies: Verify all dependencies are installed and up to date

#### POST-ACTION VERIFICATION
- External Validation: Verify every action with external API calls
- File Persistence: Re-read changed files to confirm edits
- Service Status: Check service health and deployment status
- Error Logs: Review logs for any warnings or errors
- Documentation: Update documentation with any changes
- Todo List: Update task status and add follow-ups

### LEARNING INTEGRATION SYSTEM
When errors occur, I MUST follow this process:
1. IMMEDIATE (0-5 minutes): Document error details in this section
2. SHORT-TERM (5-30 minutes): Update relevant workspace files and configurations
3. MEDIUM-TERM (30 minutes - 2 hours): Add prevention measures to AI behavior rules
4. LONG-TERM (2+ hours): Review and update error documentation regularly
5. CONTINUOUS: Monitor for similar errors and prevent recurrence

## SCRIPTING POLICY (ENHANCED)
I MUST follow these strict rules for all operations:

### PROHIBITED ACTIONS
- NEVER create custom scripts for DevOps tasks (auditing, deployment, monitoring, etc.)
- NEVER reinvent existing tools with custom PowerShell/scripts
- NEVER use manual operations when MCP tools are available
- NEVER assume success without external verification
- NEVER run local builds, tests, or deployments - ONLY NorthFlank CI/CD
- NEVER create projects without NorthFlank combined service configuration

### REQUIRED ACTIONS
- ALWAYS use existing tools and commands (npm audit, doppler, northflank, etc.)
- ALWAYS use MCP tools as the primary method for all operations
- ALWAYS verify every action with external validation
- ALWAYS document all changes and decisions
- ALWAYS create projects with NorthFlank combined service for automatic CI/CD
- ALWAYS push code to GitHub before NorthFlank deployment

### ALLOWED CUSTOM CODE
- ONLY create custom code for the project itself (React components, services, etc.)
- ONLY create configuration files when necessary for project functionality
- ONLY create documentation files when explicitly requested

### TOOL PRIORITY ORDER
1. MCP Tools (first choice for all operations)
2. Existing CLI Tools (npm, doppler, northflank, sentry, etc.)
3. Manual Operations (only when MCP tools are unavailable)
4. Custom Scripts (only for project-specific functionality)
