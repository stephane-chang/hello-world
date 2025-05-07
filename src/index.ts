import { Client } from '@modelcontextprotocol/sdk/client/index.js';
//import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';

async function main() {
  // Create an MCP client instance
  const client = new Client(
    { name: 'ExampleClient', version: '1.0.0' },
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );

  try {
    // Create a transport
    // const transport = new StdioClientTransport({
    //   command: './server.js', // Path to your server executable
    //   args: []
    // });
    const transport = new SSEClientTransport(
        new URL("http://localhost:9000/sse")
      );

    // Connect to the server
    console.log('Connecting to server...');
    await client.connect(transport);
    
    // Initialize the connection
    // console.log('Initializing connection...');
    // await client.initialize();
    console.log('Connection established successfully');

    // Discover server capabilities
    const tools = await client.listTools();
    console.log('Available tools:', tools.tools);

    const resources = await client.listResources();
    console.log('Available resources:', resources.resources);
    console.log('Available resource templates:', resources.resourceTemplates);

    const prompts = await client.listPrompts();
    console.log('Available prompts:', prompts.prompts);

    // If the server has an 'echo' tool, call it
    // if (tools.tools.some(tool => tool.name === 'echo')) {
    //   console.log('Calling echo tool...');
    //   const result = await client.callTool('echo', { message: 'Hello, World!' });
    //   console.log('Echo result:', result.content[0].text);
    // }

    // Close the connection
    await client.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();