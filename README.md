# AI DevEnv AutoConfigurator

This service listens for new GitHub repo events and automatically configures VS Code, Cursor, Devin, and Bolt for each new repo using AI and best practices.

## Features
- GitHub webhook listener
- AI-powered config generation
- OAuth integration
- Northflank-ready Docker deployment

## Usage
1. Deploy to Northflank
2. Set up GitHub webhook to `/webhook`
3. Configure `.env` with your secrets
