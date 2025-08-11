/**
 * Configuration loader for Excel Analytics Chatbot
 * Loads environment variables and configuration settings
 */

class ConfigLoader {
    constructor() {
        this.config = {};
        this.envLoaded = false;
    }

    /**
     * Load environment variables from .env file
     */
    async loadEnv() {
        try {
            const response = await fetch('.env');
            if (!response.ok) {
                console.warn('No .env file found. Using manual API key input.');
                return false;
            }
            
            const envText = await response.text();
            const envLines = envText.split('\n');
            
            envLines.forEach(line => {
                line = line.trim();
                if (line && !line.startsWith('#')) {
                    const [key, ...valueParts] = line.split('=');
                    const value = valueParts.join('=').trim();
                    if (key && value && value !== 'your_api_key_here') {
                        this.config[key.trim()] = value;
                    }
                }
            });
            
            this.envLoaded = true;
            return true;
        } catch (error) {
            console.warn('Could not load .env file:', error.message);
            return false;
        }
    }

    /**
     * Get configuration value
     */
    get(key, defaultValue = null) {
        return this.config[key] || defaultValue;
    }

    /**
     * Check if API key is configured
     */
    hasApiKey() {
        return !!this.config['GEMINI_API_KEY'];
    }

    /**
     * Get API key
     */
    getApiKey() {
        return this.config['GEMINI_API_KEY'] || '';
    }

    /**
     * Set API key (for manual input)
     */
    setApiKey(apiKey) {
        this.config['GEMINI_API_KEY'] = apiKey;
    }

    /**
     * Check if environment was loaded successfully
     */
    isEnvLoaded() {
        return this.envLoaded;
    }
}

// Create global config instance
window.appConfig = new ConfigLoader();
