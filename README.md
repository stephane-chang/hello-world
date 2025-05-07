# hello-world
Just another repository

Some change for the README.md file 
This is an exploration

# Jira MCP Server 
https://github.com/sooperset/mcp-atlassian

docker run --rm -p 9000:9000 \
  --env-file .env \
  ghcr.io/sooperset/mcp-atlassian:latest \
  --transport sse --port 9000 -vv

# Instructions

- Compile: npx tsc
- Run: node build/index.js