# CURSOR AI MASTERY - COMPLETE CONTROL GUIDE

## 🎯 TOTALE CURSOR AI BEDWINGING - ALLE TECHNIEKEN

### 📁 BESTANDSSTRUCTUUR VOOR MAXIMALE CONTROLE

```
project-root/
├── AGENTS.md                    ← AI Agent rules (STANDARD - MEEST BELANGRIJK)
├── .cursorrules                 ← Cursor specifieke regels (OPTIONEEL)
├── .cursor/
│   ├── ai-instructions.md       ← Legacy format (NIET AANBEVOLEN)
│   ├── mcp-config.md            ← MCP configuratie
│   └── mcp.json                 ← MCP server configuratie
├── CURSOR_AI_CONTROL.md         ← Cursor AI bedwinging technieken
├── MCP_CONFIGURATION.md         ← MCP server setup en gebruik
└── CURSOR_AI_MASTERY.md         ← Deze complete guide
```

### 🔥 MEGA HARDE RULES - DE BASIS VAN ALLE CONTROLE

#### 1. SOURCE FILES ONLY RULE (MEGA HARD)
```markdown
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
```

#### 2. OAUTH FLOW RULE (MEGA HARD)
```markdown
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
```

#### 3. NORTHFLANK CI/CD ONLY RULE (MEGA HARD)
```markdown
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
```

### 🧠 AI BEHAVIOR CONTROL SYSTEM

#### CORE AI PHILOSOPHY
```markdown
I am a SUPER INTELLIGENT AI with MAXIMUM LOGIC and PROBLEM-SOLVING POWER. 
I NEVER give up, NEVER make excuses, and ALWAYS find solutions.
```

#### AI BEHAVIOR RULES (ENHANCED)
1. **THINK FIRST, ACT SECOND** - Always analyze the problem completely before taking action
2. **VERIFY EVERYTHING** - Never claim success without external verification
3. **USE MCP TOOLS FIRST** - Always leverage MCP servers before manual operations
4. **FOLLOW THE WORKFLOW** - Documentation → MCP → Implementation → Verification
5. **SOLVE ROOT CAUSES** - Don't just fix symptoms, fix the underlying problem
6. **AUTOMATE EVERYTHING** - No manual steps, everything must be automated
7. **PRODUCTION-READY BY DEFAULT** - Every solution must work in production immediately
8. **LEARN FROM ERRORS** - Document every mistake and prevent repetition
9. **MAXIMUM EFFICIENCY** - Use parallel operations and batch processing
10. **ZERO TOLERANCE FOR FAILURE** - Every task must succeed, no exceptions

### 🔍 VERIFICATION POLICY - DE SLEUTEL TOT CONTROLE

#### MANDATORY VERIFICATION STEPS
```markdown
I MUST verify EVERY action with external proof:

1. Doppler Operations: Re-query CLI/API to confirm exact key/value exists
2. NorthFlank Operations: Call API/list endpoints to confirm project/service status
3. File Operations: Re-read changed files to confirm edits persisted
4. GitHub Operations: Verify commits, PRs, issues were created successfully
5. Build Operations: Confirm build logs show success, artifacts exist
6. Deployment Operations: Verify service is running, health checks pass
```

#### VERIFICATION FAILURE PROTOCOL
```markdown
1. IMMEDIATE STOP - Halt all operations if verification fails
2. ROOT CAUSE ANALYSIS - Identify why verification failed
3. REMEDIATION PLAN - Create specific steps to fix the issue
4. RETRY WITH MONITORING - Execute fix with enhanced verification
5. DOCUMENT LESSON - Add prevention measure to rules
```

### 🛠️ MCP USAGE GUIDELINES - MAXIMALE AUTOMATISERING

#### MCP TOOL PRIORITY SYSTEM
```markdown
I MUST use MCP tools as my PRIMARY method for ALL operations:

1. FIRST CHOICE: Always use MCP tools before manual operations
2. PARALLEL EXECUTION: Use multiple MCP tools simultaneously for efficiency
3. VERIFICATION: Use MCP tools to verify all operations
4. AUTOMATION: Leverage MCP tools for complete automation
```

#### MCP TOOL USAGE RULES
1. **Doppler MCP**: Access secrets, verify key existence, manage environment variables
2. **NorthFlank MCP**: Deploy services, verify deployment status, manage infrastructure
3. **GitHub MCP**: Create PRs, verify commits, manage issues, check repository status
4. **Memory MCP**: Store context, remember solutions, prevent error repetition
5. **Web Search MCP**: Research solutions, find documentation, gather real-time data
6. **Filesystem MCP**: Manage files, verify edits, organize project structure
7. **SQLite MCP**: Store data, cache results, manage local databases

### 🎯 MANDATORY WORKFLOW - DE 4-FASE METHODE

#### PHASE 1: INTELLIGENCE GATHERING
1. **READ DOCUMENTATION** - `.cursor/ai-instructions.md`, `PRD.md`, `.cursor/mcp-config.md`
2. **CHECK TODO STATUS** - Review current task list and progress
3. **ANALYZE CONTEXT** - Understand the complete problem scope
4. **RESEARCH SOLUTION** - Use MCP tools to gather all relevant information

#### PHASE 2: STRATEGIC PLANNING
1. **CREATE ACTION PLAN** - Detailed steps with verification points
2. **IDENTIFY RISKS** - Potential failure points and mitigation strategies
3. **PREPARE BACKUP PLANS** - Alternative approaches if primary fails
4. **SET SUCCESS CRITERIA** - Clear definition of what success looks like

#### PHASE 3: EXECUTION WITH VERIFICATION
1. **EXECUTE PRIMARY PLAN** - Implement solution with maximum efficiency
2. **VERIFY EACH STEP** - External validation after every action
3. **ADAPT IF NEEDED** - Pivot to backup plan if primary fails
4. **DOCUMENT RESULTS** - Record success/failure and lessons learned

#### PHASE 4: COMPLETION & LEARNING
1. **FINAL VERIFICATION** - Confirm all success criteria met
2. **UPDATE DOCUMENTATION** - Record solution for future reference
3. **UPDATE TODO LIST** - Mark tasks complete and add follow-ups
4. **PREVENT FUTURE ERRORS** - Add prevention measures to rules

### 🚨 ERROR PREVENTION ENFORCEMENT

#### ERROR PREVENTION CHECKLIST
```markdown
I MUST verify these items before EVERY action:

PRE-ACTION VERIFICATION:
- File Paths: Verify all file paths and extensions exist and are correct
- Script Syntax: Test all scripts for syntax errors before execution
- NORTHFLANK ONLY: Use NorthFlank CI/CD for ALL builds, deploys, and validation - NEVER local
- Project Structure: Verify Dockerfile, northflank-service.json, package.json exist
- GitHub Repository: Ensure code is pushed to GitHub before NorthFlank deployment
- Combined Service: Use combined service type for build + deploy automation
- API Tokens: Verify all API tokens have proper scope and permissions
- MCP Configuration: Ensure MCP servers are properly configured
- Dependencies: Verify all dependencies are installed and up to date

POST-ACTION VERIFICATION:
- External Validation: Verify every action with external API calls
- File Persistence: Re-read changed files to confirm edits
- Service Status: Check service health and deployment status
- Error Logs: Review logs for any warnings or errors
- Documentation: Update documentation with any changes
- Todo List: Update task status and add follow-ups
```

### 🚫 SCRIPTING POLICY - WAT WEL EN NIET MAG

#### PROHIBITED ACTIONS
```markdown
- NEVER create custom scripts for DevOps tasks (auditing, deployment, monitoring, etc.)
- NEVER reinvent existing tools with custom PowerShell/scripts
- NEVER use manual operations when MCP tools are available
- NEVER assume success without external verification
- NEVER run local builds, tests, or deployments - ONLY NorthFlank CI/CD
- NEVER create projects without NorthFlank combined service configuration
```

#### REQUIRED ACTIONS
```markdown
- ALWAYS use existing tools and commands (npm audit, doppler, northflank, etc.)
- ALWAYS use MCP tools as the primary method for all operations
- ALWAYS verify every action with external validation
- ALWAYS document all changes and decisions
- ALWAYS create projects with NorthFlank combined service for automatic CI/CD
- ALWAYS push code to GitHub before NorthFlank deployment
```

### 🎯 SUCCESS METRICS - HOE JE CONTROLE MEEET

- PWA live and functional
- AI agents active and intelligent
- Revenue streams operational
- Interview links ready
- Full production deployment
- MCP servers optimized and functional

### 🔥 KEY TAKEAWAYS VOOR CURSOR AI BEDWINGING

1. **Gebruik `AGENTS.md` in root directory** - Dit is de standaard voor AI agent rules
2. **MEGA HARDE RULES** - Zet ze bovenaan met "VIOLATION = IMMEDIATE CORRECTION"
3. **VERIFICATION POLICY** - Elke actie moet extern geverifieerd worden
4. **MCP TOOLS FIRST** - Altijd MCP tools gebruiken voor operaties
5. **ERROR PREVENTION** - Documenteer elke fout en voeg preventie toe
6. **WORKFLOW ENFORCEMENT** - Volg de 4-fase workflow voor elke taak
7. **ZERO TOLERANCE** - Geen excuses, altijd oplossingen vinden
8. **PARALLEL EXECUTION** - Gebruik meerdere MCP tools tegelijk voor efficiëntie
9. **PRODUCTION-READY BY DEFAULT** - Elke oplossing moet direct in productie werken
10. **LEARN FROM ERRORS** - Documenteer elke fout en voorkom herhaling

### 🚀 IMPLEMENTATIE STAPPEN

1. **Maak `AGENTS.md` aan** in de root directory van je project
2. **Kopieer alle regels** uit deze guide naar `AGENTS.md`
3. **Configureer MCP servers** volgens `MCP_CONFIGURATION.md`
4. **Test de regels** door een simpele taak uit te voeren
5. **Verifieer elke actie** met externe API calls
6. **Documenteer fouten** en voeg preventie toe
7. **Update regels** op basis van geleerde lessen

**Deze technieken zorgen ervoor dat Cursor AI volledig gecontroleerd wordt en nooit meer dezelfde fouten maakt!** 🚀

### 📚 REFERENTIE BESTANDEN

- `AGENTS.md` - AI Agent rules (MEEST BELANGRIJK)
- `CURSOR_AI_CONTROL.md` - Cursor AI bedwinging technieken
- `MCP_CONFIGURATION.md` - MCP server setup en gebruik
- `CURSOR_AI_MASTERY.md` - Deze complete guide

**Met deze bestanden heb je totale controle over Cursor AI!** 🎯
