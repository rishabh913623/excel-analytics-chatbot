#!/bin/bash

# Excel Analytics Chatbot Setup Script
# This script helps you set up the environment file for the chatbot

echo "🚀 Excel Analytics Chatbot Setup"
echo "================================="
echo ""

# Check if .env already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled. Your existing .env file is unchanged."
        exit 0
    fi
fi

# Copy .env.example to .env
if [ -f ".env.example" ]; then
    cp .env.example .env
    echo "✅ Created .env file from template"
else
    echo "❌ .env.example file not found!"
    echo "Creating a basic .env file..."
    cat > .env << EOF
# Google Gemini API Configuration
# Get your free API key at: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_api_key_here

# Optional: Other configuration settings
# VOICE_ENABLED=true
# DEFAULT_CHART_TYPE=bar
# MAX_ROWS_DISPLAY=1000
EOF
    echo "✅ Created basic .env file"
fi

echo ""
echo "📝 Next Steps:"
echo "1. Get your free Gemini API key at: https://makersuite.google.com/app/apikey"
echo "2. Edit the .env file and replace 'your_api_key_here' with your actual API key"
echo "3. Open Excel_based_chatbot or voice.html in your web browser"
echo "4. Upload your Excel file and start analyzing!"
echo ""
echo "🔒 Security Note: The .env file is automatically ignored by Git"
echo "   Your API key will never be committed to version control."
echo ""
echo "🎉 Setup complete! Happy analyzing!"
