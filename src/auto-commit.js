const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutoCommit {
  constructor() {
    this.commitCategories = {
      feature: '🚀',
      fix: '🔧',
      docs: '📚',
      style: '🎨',
      refactor: '♻️',
      test: '🧪',
      chore: '⚙️',
      perf: '⚡',
      security: '🔒',
      ecosystem: '🌐',
      mcp: '🔗',
      northflank: '🚀',
      deployment: '📦',
      monitoring: '📊',
      ai: '🤖',
      integration: '🔗',
      update: '🔄',
      optimization: '⚡',
      bugfix: '🐛',
      enhancement: '✨',
    };
  }

  detectChangeType(filePath, content) {
    const fileName = path.basename(filePath);
    const fileExt = path.extname(filePath);

    // Detect change type based on file and content
    if (
      fileName.includes('README') ||
      fileName.includes('DOCS') ||
      fileExt === '.md'
    ) {
      return 'docs';
    } else if (fileName.includes('test') || fileName.includes('spec')) {
      return 'test';
    } else if (
      fileName.includes('config') ||
      fileName.includes('package.json')
    ) {
      return 'chore';
    } else if (fileName.includes('ecosystem') || fileName.includes('mcp')) {
      return 'ecosystem';
    } else if (fileName.includes('northflank') || fileName.includes('deploy')) {
      return 'deployment';
    } else if (fileName.includes('ai') || fileName.includes('agent')) {
      return 'ai';
    } else if (fileName.includes('monitor') || fileName.includes('analytics')) {
      return 'monitoring';
    } else if (
      fileExt === '.js' ||
      fileExt === '.jsx' ||
      fileExt === '.ts' ||
      fileExt === '.tsx'
    ) {
      return 'feature';
    } else {
      return 'update';
    }
  }

  generateCommitMessage(filePath, changeType, content) {
    const category = this.detectChangeType(filePath, content);
    const emoji = this.commitCategories[category] || '📝';
    const fileName = path.basename(filePath);
    const projectName = this.getProjectName(filePath);

    // Generate descriptive message based on content
    let description = this.generateDescription(content, fileName);

    return `${emoji} ${category} ${description} - ${projectName}`;
  }

  getProjectName(filePath) {
    const parts = filePath.split(path.sep);
    const projectIndex = parts.findIndex(
      part =>
        part.includes('AI-DevEnv') ||
        part.includes('Hybrid-Knowledge') ||
        part.includes('Proof-of-Mind') ||
        part.includes('AI-Builder') ||
        part.includes('MCP-Troubleshooting') ||
        part.includes('NorthFlank-Monitor') ||
        part.includes('SecretVault')
    );

    if (projectIndex !== -1) {
      return parts[projectIndex];
    }
    return 'Ecosystem';
  }

  generateDescription(content, fileName) {
    // Analyze content to generate meaningful description
    const contentLower = content.toLowerCase();

    if (
      contentLower.includes('ecosystem') &&
      contentLower.includes('integration')
    ) {
      return 'Ecosystem integration and coordination features';
    } else if (
      contentLower.includes('mcp') &&
      contentLower.includes('service')
    ) {
      return 'MCP service integration for Cursor';
    } else if (
      contentLower.includes('northflank') &&
      contentLower.includes('deploy')
    ) {
      return 'NorthFlank deployment configuration';
    } else if (
      contentLower.includes('websocket') &&
      contentLower.includes('communication')
    ) {
      return 'Real-time WebSocket communication';
    } else if (
      contentLower.includes('monitoring') &&
      contentLower.includes('dashboard')
    ) {
      return 'Real-time monitoring dashboard';
    } else if (
      contentLower.includes('ai') &&
      contentLower.includes('coordination')
    ) {
      return 'AI agent coordination across ecosystem';
    } else if (
      contentLower.includes('knowledge') &&
      contentLower.includes('base')
    ) {
      return 'Hybrid Knowledge Base functionality';
    } else if (
      contentLower.includes('rules') &&
      contentLower.includes('enforcement')
    ) {
      return 'Ecosystem rules and enforcement';
    } else if (
      contentLower.includes('documentation') &&
      contentLower.includes('storage')
    ) {
      return 'Documentation storage in Knowledge Base';
    } else if (
      contentLower.includes('analytics') &&
      contentLower.includes('ecosystem')
    ) {
      return 'Ecosystem analytics and monitoring';
    } else if (
      contentLower.includes('error') &&
      contentLower.includes('prevention')
    ) {
      return 'Error prevention and troubleshooting';
    } else if (
      contentLower.includes('secrets') &&
      contentLower.includes('management')
    ) {
      return 'Centralized secrets management';
    } else if (
      contentLower.includes('format') ||
      contentLower.includes('cleanup')
    ) {
      return 'Code formatting and cleanup';
    } else if (
      contentLower.includes('update') &&
      contentLower.includes('dependencies')
    ) {
      return 'Dependency updates and maintenance';
    } else if (contentLower.includes('fix') && contentLower.includes('bug')) {
      return 'Bug fix and issue resolution';
    } else if (
      contentLower.includes('add') &&
      contentLower.includes('feature')
    ) {
      return 'New feature implementation';
    } else if (
      contentLower.includes('refactor') &&
      contentLower.includes('code')
    ) {
      return 'Code refactoring and optimization';
    } else if (
      contentLower.includes('test') &&
      contentLower.includes('coverage')
    ) {
      return 'Test coverage and validation';
    } else {
      return `Updated ${fileName} with ecosystem improvements`;
    }
  }

  async commitChanges(filePath, content) {
    try {
      // Check if we're in a git repository
      execSync('git status', { stdio: 'pipe' });

      // Add the file
      execSync(`git add "${filePath}"`, { stdio: 'pipe' });

      // Generate commit message
      const commitMessage = this.generateCommitMessage(
        filePath,
        'auto',
        content
      );

      // Commit with the generated message
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });

      // Push to GitHub
      execSync('git push origin main', { stdio: 'pipe' });

      console.log(`✅ Auto-committed: ${commitMessage}`);
      return { success: true, message: commitMessage };
    } catch (error) {
      console.error(`❌ Auto-commit failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async commitAllChanges() {
    try {
      // Check if we're in a git repository
      execSync('git status', { stdio: 'pipe' });

      // Get list of changed files
      const statusOutput = execSync('git status --porcelain', {
        encoding: 'utf8',
      });
      const changedFiles = statusOutput
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.substring(3)); // Remove status indicators

      if (changedFiles.length === 0) {
        console.log('📝 No changes to commit');
        return { success: true, message: 'No changes to commit' };
      }

      // Add all changes
      execSync('git add .', { stdio: 'pipe' });

      // Generate commit message based on changes
      const commitMessage = this.generateBulkCommitMessage(changedFiles);

      // Commit with the generated message
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });

      // Push to GitHub
      execSync('git push origin main', { stdio: 'pipe' });

      console.log(`✅ Auto-committed all changes: ${commitMessage}`);
      return { success: true, message: commitMessage };
    } catch (error) {
      console.error(`❌ Auto-commit failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  generateBulkCommitMessage(changedFiles) {
    const categories = new Set();
    const projectNames = new Set();

    changedFiles.forEach(file => {
      const category = this.detectChangeType(file, '');
      categories.add(category);
      projectNames.add(this.getProjectName(file));
    });

    const categoryList = Array.from(categories);
    const projectList = Array.from(projectNames);

    let emoji = '🔄';
    if (categoryList.includes('ecosystem')) emoji = '🌐';
    else if (categoryList.includes('mcp')) emoji = '🔗';
    else if (categoryList.includes('deployment')) emoji = '🚀';
    else if (categoryList.includes('ai')) emoji = '🤖';
    else if (categoryList.includes('monitoring')) emoji = '📊';

    const category = categoryList.length === 1 ? categoryList[0] : 'ecosystem';
    const projects =
      projectList.length === 1 ? projectList[0] : 'Multiple projects';

    return `${emoji} ${category} Multiple ecosystem updates - ${projects} (${changedFiles.length} files)`;
  }
}

module.exports = AutoCommit;
