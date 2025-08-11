# 🚀 RL-Enhanced Excel Analytics Chatbot

An intelligent, voice-enabled chatbot that transforms Excel data analysis through natural language processing, reinforcement learning, and automated visualizations.

## ✨ Features

### 🎯 Core Functionality
- **Excel File Processing**: Upload and analyze XLSX, XLS, and CSV files
- **Natural Language Queries**: Ask questions about your data in plain English
- **Voice Input/Output**: Speak your questions and hear responses
- **Smart Data Entry**: Add new rows with validation and type checking
- **Interactive Visualizations**: Auto-generated charts and graphs

### 🧠 AI-Powered Analytics
- **Reinforcement Learning**: Adaptive suggestions based on user feedback
- **Google Gemini Integration**: Advanced AI analysis and insights
- **Pattern Recognition**: Automatic detection of data types and structures
- **Intelligent Suggestions**: Context-aware query recommendations

### 📊 Advanced Analysis
- **Top/Bottom N Analysis**: "Show top 10 products by sales"
- **Date Range Filtering**: "Data from last 6 months"
- **Chart Generation**: Bar charts, pie charts, line graphs
- **Statistical Insights**: Automated data summaries and trends
- **Custom Reports**: AI-generated comprehensive reports

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (free at [Google AI Studio](https://makersuite.google.com/app/apikey))

### Setup

#### Option 1: Environment File (Recommended)
1. **Clone or Download** the project files
2. **Copy** `.env.example` to `.env`: `cp .env.example .env`
3. **Edit** `.env` file and replace `your_api_key_here` with your actual Gemini API key
4. **Open** `Excel_based_chatbot` or `voice.html` in your web browser
5. **Upload Data**: Drag and drop your Excel file or click to browse

#### Option 2: Manual Configuration
1. **Clone or Download** the project files
2. **Open** `Excel_based_chatbot` or `voice.html` in your web browser
3. **Configure API Key**: Enter your Gemini API key in the configuration section
4. **Upload Data**: Drag and drop your Excel file or click to browse

### Usage Examples
```
"Show top 5 products by revenue"
"Create a pie chart of sales by category"
"What were the trends in the last quarter?"
"Generate a summary report"
"Data from 2023"
```

## 🎤 Voice Features

### Voice Commands
- **Activate**: Click the microphone button
- **Speak**: Ask your question naturally
- **Stop**: Click the stop button to end voice input
- **Listen**: Hear AI responses read aloud

### Supported Browsers
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📁 Project Structure

```
Excelbased Chatbot/
├── Excel_based_chatbot    # Main application file
├── voice.html            # Voice-enabled version
├── config.js             # Configuration loader
├── .env.example          # Environment template
├── .env                  # Your API keys (create from .env.example)
├── .gitignore           # Git ignore rules
└── README.md            # This documentation
```

## ⚙️ Environment Configuration

### Setting up API Keys
The application supports automatic API key loading through environment files:

1. **Copy the template**: `cp .env.example .env`
2. **Edit the .env file**:
   ```bash
   # Google Gemini API Configuration
   GEMINI_API_KEY=your_actual_api_key_here
   ```
3. **Restart the application** - the API key will be loaded automatically

### Environment Variables
- `GEMINI_API_KEY`: Your Google Gemini API key (required for AI features)
- `VOICE_ENABLED`: Enable/disable voice features (optional)
- `DEFAULT_CHART_TYPE`: Default chart type for visualizations (optional)
- `MAX_ROWS_DISPLAY`: Maximum rows to display in tables (optional)

### Security Notes
- The `.env` file is automatically ignored by Git (never committed)
- API keys are processed client-side only
- No server-side storage or transmission of keys

## 🔧 Technical Details

### Data Processing
- **File Formats**: XLSX, XLS, CSV
- **Data Types**: Automatic detection of dates, numbers, and text
- **Memory Efficient**: Handles large datasets with optimized processing
- **Real-time Updates**: Live data entry and modification

### AI Integration
- **Google Gemini API**: Advanced natural language understanding
- **Reinforcement Learning**: User feedback improves suggestions
- **Pattern Matching**: Smart query interpretation
- **Context Awareness**: Understands data structure and relationships

### Visualization Engine
- **Chart.js Integration**: Professional-quality charts
- **Responsive Design**: Works on desktop and mobile
- **Interactive Elements**: Clickable suggestions and controls
- **Export Ready**: Charts can be saved or printed

## 🎨 User Interface

### Design Features
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Keyboard navigation and screen reader support

### Color Scheme
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Accent**: Purple and emerald highlights
- **Background**: Clean whites and light grays
- **Status**: Green for success, red for errors

## 🔒 Privacy & Security

### Data Handling
- **Local Processing**: Files processed in your browser
- **No Data Storage**: No permanent storage of your data
- **API Security**: Secure communication with Google Gemini
- **Privacy First**: Your data never leaves your control

### API Key Management
- **Secure Storage**: API keys stored locally in browser
- **No Transmission**: Keys never sent to third parties
- **User Control**: Easy to update or remove keys

## 🛠️ Customization

### Adding New Features
The codebase is modular and extensible:
- **New Chart Types**: Add to the chart generation functions
- **Custom Queries**: Extend pattern matching in `tryAdvancedPatterns()`
- **UI Themes**: Modify CSS variables for different color schemes
- **Language Support**: Add internationalization for different languages

### Configuration Options
- **Chart Colors**: Customize visualization color schemes
- **Voice Settings**: Adjust speech recognition parameters
- **UI Layout**: Modify responsive breakpoints and layouts

## 🐛 Troubleshooting

### Common Issues
1. **File Won't Load**: Ensure file is valid Excel/CSV format
2. **Voice Not Working**: Check browser permissions for microphone
3. **API Errors**: Verify Gemini API key is correct and active
4. **Charts Not Displaying**: Check browser JavaScript is enabled

### Browser Compatibility
- **Recommended**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Voice Features**: Require modern browser with Web Speech API
- **File Processing**: Uses modern JavaScript features

## 📈 Performance

### Optimization Features
- **Lazy Loading**: Charts and visualizations load on demand
- **Memory Management**: Efficient handling of large datasets
- **Caching**: Smart caching of API responses
- **Progressive Enhancement**: Core features work without JavaScript

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Make your changes
3. Test thoroughly across browsers
4. Submit a pull request

### Code Style
- **JavaScript**: ES6+ features, async/await patterns
- **CSS**: Tailwind utility classes with custom components
- **HTML**: Semantic markup with accessibility considerations

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Google Gemini**: AI analysis capabilities
- **Chart.js**: Visualization engine
- **Tailwind CSS**: UI framework
- **SheetJS**: Excel file processing
- **Web Speech API**: Voice recognition and synthesis

## 📞 Support

For questions, issues, or feature requests:
- Check the troubleshooting section above
- Review browser console for error messages
- Ensure all prerequisites are met
- Verify API key configuration

---

**Made with ❤️ for data analysts, business users, and anyone who wants to unlock insights from their Excel data through natural conversation.**
