const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlPath = path.join(__dirname, 'BOT.HTML');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Get the API key from environment variable
const apiKey = process.env.GEMINI_API_KEY || '';

// Replace the placeholder
htmlContent = htmlContent.replace(/\{\{GEMINI_API_KEY\}\}/g, apiKey);

// Write back to the file
fs.writeFileSync(htmlPath, htmlContent);

console.log('Build completed: API key injected into BOT.HTML');