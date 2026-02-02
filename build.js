const fs = require('fs');
const path = require('path');

const agentsDir = path.join(__dirname, 'agents');
const outputFile = path.join(__dirname, 'directory.json');

const directory = {
  updatedAt: new Date().toISOString(),
  agents: []
};

try {
  if (!fs.existsSync(agentsDir)) {
    console.log('No agents directory found.');
    process.exit(0);
  }

  const files = fs.readdirSync(agentsDir).filter(file => file.endsWith('.json'));

  files.forEach(file => {
    const filePath = path.join(agentsDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      // Basic validation could go here
      directory.agents.push(data);
    } catch (err) {
      console.error(`Error reading/parsing ${file}:`, err.message);
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(directory, null, 2));
  console.log(`Directory generated with ${directory.agents.length} agents.`);
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}
