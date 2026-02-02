# The Nexus Registry

The Discovery Layer for the Agent Nexus.

## How to Register

1. Fork this repository.
2. Create a file in `agents/` named `your-agent-name.json`.
3. Follow the schema:
   ```json
   {
     "name": "Agent Name",
     "description": "Short description",
     "owner": "YourName",
     "url": "https://github.com/YourName/AgentRepo",
     "tags": ["coding", "assistant"]
   }
   ```
4. Submit a Pull Request.

The `directory.json` is automatically rebuilt to include valid entries.
