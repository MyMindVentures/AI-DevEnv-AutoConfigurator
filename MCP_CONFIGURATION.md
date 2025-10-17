# MCP CONFIGURATION GUIDE - PROOF OF MIND PWA

## Overview

This document explains the optimized MCP (Model Context Protocol) configuration for the Proof of Mind PWA project.

## MCP Servers Configuration

### 1. Doppler MCP (Production Secrets)

- **Purpose**: Secure management of all API keys and environment variables
- **Token**: Production Doppler token for secure secret access
- **Usage**: Access secrets like OpenAI API keys, Auth0 credentials, Stripe keys
- **Security**: All sensitive data stored in Doppler, never in code

### 2. NorthFlank MCP (Deployment)

- **Purpose**: Automated deployment and infrastructure management
- **Token**: NorthFlank API token for deployment operations
- **Usage**: Deploy services, manage scaling, monitor infrastructure
- **Features**: CI/CD automation, auto-scaling, zero-downtime deployments

### 3. GitHub MCP (Version Control)

- **Purpose**: Repository management and collaboration
- **Token**: GitHub Personal Access Token
- **Usage**: Code management, pull requests, issue tracking
- **Features**: Automated commits, branch management, release automation

### 4. Filesystem MCP (Project Management)

- **Purpose**: File operations and project structure management
- **Directory**: Project root directory access
- **Usage**: File creation, editing, project organization
- **Security**: Restricted to project directory only

### 5. Web Search MCP (Research)

- **Purpose**: Real-time information gathering and research
- **API Key**: Search API key for web search capabilities
- **Usage**: Research neurodiversity topics, find interview targets, gather data
- **Features**: Real-time search, content analysis, data extraction

### 6. Brave Search MCP (Alternative Search)

- **Purpose**: Alternative search capabilities and data gathering
- **API Key**: Brave Search API key
- **Usage**: Alternative search results, comprehensive research
- **Features**: Privacy-focused search, diverse results

### 7. Memory MCP (Persistent Memory)

- **Purpose**: Persistent AI memory across sessions
- **Directory**: `.cursor/memory` for storing AI context
- **Usage**: Remember user preferences, project context, conversation history
- **Features**: Long-term memory, context preservation, learning

### 8. SQLite MCP (Local Database)

- **Purpose**: Local database for development and caching
- **Database**: `data/proof-of-mind.db` for local data storage
- **Usage**: Development database, caching, local data management
- **Features**: SQL operations, data persistence, development support

## Configuration Benefits

### For No-Code User

- **Automated Operations**: All complex operations handled by MCP servers
- **Secure Management**: Secrets managed automatically through Doppler
- **Intelligent Assistance**: AI has persistent memory and research capabilities
- **Production Ready**: All configurations optimized for production deployment

### For Development

- **Streamlined Workflow**: MCP servers handle repetitive tasks
- **Real-time Research**: Web search capabilities for up-to-date information
- **Persistent Context**: Memory MCP maintains project context across sessions
- **Local Development**: SQLite MCP provides local database capabilities

### For Production

- **Secure Deployment**: NorthFlank MCP handles all deployment operations
- **Secret Management**: Doppler MCP ensures secure secret handling
- **Monitoring**: Integrated monitoring and analytics through MCP
- **Scalability**: Auto-scaling and performance optimization

## Usage Examples

### Accessing Secrets

```javascript
// AI will automatically use Doppler MCP to access secrets
const openaiKey = await getSecret('OPENAI_API_KEY');
const auth0Domain = await getSecret('AUTH0_DOMAIN');
```

### Deployment Operations

```javascript
// AI will use NorthFlank MCP for deployment
await deployService('proof-of-mind-pwa', {
  environment: 'production',
  scaling: 'auto',
});
```

### Research and Data Gathering

```javascript
// AI will use Web Search MCP for research
const research = await searchWeb('neurodiversity advocacy organizations');
const targets = await searchWeb('Joe Dispenza contact information');
```

### Memory and Context

```javascript
// AI will use Memory MCP to remember context
await saveMemory('user_preferences', {
  preferredLanguage: 'en',
  interviewTargets: ['Joe Dispenza', 'Russell Barkley'],
});
```

## Security Considerations

1. **All secrets stored in Doppler** - Never hardcoded in configuration
2. **Restricted filesystem access** - Limited to project directory
3. **Secure API tokens** - All tokens properly configured and secured
4. **Production-ready** - All configurations optimized for production use

## Performance Optimization

1. **Caching strategies** - Memory MCP provides intelligent caching
2. **Local database** - SQLite MCP for fast local operations
3. **Efficient search** - Multiple search MCPs for comprehensive results
4. **Automated deployment** - NorthFlank MCP for optimized deployments

## Troubleshooting

### Common Issues

1. **MCP server not responding** - Check API tokens and network connectivity
2. **Permission errors** - Verify directory permissions and API access
3. **Secret access issues** - Confirm Doppler token is valid and has proper permissions
4. **Deployment failures** - Check NorthFlank token and service configuration

### Solutions

1. **Restart Cursor** - Often resolves MCP connection issues
2. **Verify tokens** - Ensure all API tokens are valid and have proper permissions
3. **Check logs** - Review MCP server logs for specific error messages
4. **Update packages** - Ensure all MCP packages are up to date

## Next Steps

1. **Test all MCP servers** - Verify each server is working correctly
2. **Configure API keys** - Set up proper API keys for search services
3. **Test deployment** - Verify NorthFlank deployment works
4. **Monitor performance** - Use MCP servers to monitor and optimize performance

## MCP TOOL USAGE RULES

### MCP TOOL PRIORITY SYSTEM

1. **FIRST CHOICE**: Always use MCP tools before manual operations
2. **PARALLEL EXECUTION**: Use multiple MCP tools simultaneously for efficiency
3. **VERIFICATION**: Use MCP tools to verify all operations
4. **AUTOMATION**: Leverage MCP tools for complete automation

### MCP TOOL USAGE RULES

1. **Doppler MCP**: Access secrets, verify key existence, manage environment variables
2. **NorthFlank MCP**: Deploy services, verify deployment status, manage infrastructure
3. **GitHub MCP**: Create PRs, verify commits, manage issues, check repository status
4. **Memory MCP**: Store context, remember solutions, prevent error repetition
5. **Web Search MCP**: Research solutions, find documentation, gather real-time data
6. **Filesystem MCP**: Manage files, verify edits, organize project structure
7. **SQLite MCP**: Store data, cache results, manage local databases

### MCP FAILURE PROTOCOL

1. **IMMEDIATE DIAGNOSIS**: Identify why MCP tool failed
2. **FALLBACK PLAN**: Use alternative MCP tool or manual method
3. **ROOT CAUSE FIX**: Fix the underlying MCP configuration issue
4. **VERIFICATION**: Confirm MCP tool works after fix
5. **DOCUMENTATION**: Record the fix to prevent future failures

