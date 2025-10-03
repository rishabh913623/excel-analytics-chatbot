# RL-Enhanced Excel Analytics Chatbot

A powerful web-based chatbot for analyzing Excel data using natural language queries, powered by Google Gemini AI and reinforcement learning-inspired features.

## Features

- 📊 **Excel File Upload**: Support for XLSX, XLS, and CSV files
- 🤖 **AI-Powered Analysis**: Natural language queries with Google Gemini integration
- 📈 **Automatic Visualizations**: Generate charts and graphs from your data
- 🔍 **Smart Filtering**: Date ranges, top/bottom analysis, and custom filters
- 💡 **Intelligent Suggestions**: RL-inspired query suggestions based on data structure
- 📋 **Data Tables**: Interactive tables with sorting and filtering
- 📝 **Report Generation**: Automated business report creation
- ⭐ **Feedback System**: User feedback to improve AI responses

## Prerequisites

- Google Gemini API key (get one at [Google AI Studio](https://makersuite.google.com/app/apikey))

## Local Development

1. Clone or download the project
2. Open `BOT.HTML` in your web browser
3. If no API key is pre-configured, enter your Gemini API key in the configuration section
4. Upload an Excel file and start analyzing!

## Environment Variables

For production deployments, set the following environment variable:

- `GEMINI_API_KEY`: Your Google Gemini API key

When this variable is set, users won't need to manually enter the API key - it will be automatically configured.

## Deployment on Netlify

### Option 1: Drag & Drop (Quick)
1. Zip all files in this project
2. Go to [Netlify](https://app.netlify.com/) and drag the zip file to the deployment area
3. Your site will be live instantly!

### Option 2: Git Repository (Recommended)
1. Push this project to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Netlify
3. In Netlify dashboard, go to Site Settings > Environment Variables
4. Add `GEMINI_API_KEY` with your Google Gemini API key
5. Netlify will automatically deploy your site with the API key pre-configured

## Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `_redirects`: URL routing rules
- `BOT.HTML`: Main application file

## Usage

1. **Upload Data**: Drag and drop or select an Excel file (API key is pre-configured if set via environment variables)
2. **Ask Questions**: Use natural language queries like:
   - "Show top 10 products by sales"
   - "Create bar chart of revenue by month"
   - "Filter data from last year"
3. **Use Suggestions**: Click on intelligent suggestions for quick analysis
4. **Generate Reports**: Use AI-powered report generation features

*Note: If no API key is pre-configured, you'll be prompted to enter your Gemini API key before using AI features.*

## Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Libraries**: Chart.js, XLSX, Date-fns
- **AI**: Google Gemini 2.0 Flash API
- **Deployment**: Netlify

## Security Note

The Gemini API key is used client-side for demonstration purposes. In production applications, consider server-side API calls to protect your API keys.

## License

This project is open source. Feel free to modify and distribute.