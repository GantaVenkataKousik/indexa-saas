// To use real Gemini API:
// 1. npm install @google/generative-ai
// 2. Uncomment the imports and the code in the try block
// 3. Set NEXT_PUBLIC_GEMINI_API_KEY in your .env file

// import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export interface ChatMessage {
    role: 'user' | 'model';
    parts: string;
}

export const geminiService = {
    askQuestion: async (prompt: string, history: ChatMessage[] = []) => {
        console.log('Asking Gemini:', prompt);

        if (!API_KEY) {
            // Mock response if no API key is configured
            return new Promise<string>((resolve) => {
                setTimeout(() => {
                    const responses = [
                        "Based on your current SEO metrics, I recommend focusing on backlink quality.",
                        "I've analyzed the competitor data. They are ranking for 'AI automation' which you are missing.",
                        "Your citation consistency score is 85%. There are discrepancies in Yelp and YellowPages.",
                        "To improve visibility, consider updating your Google Business Profile with recent photos.",
                        `Here is a simulated answer for: "${prompt}". \n\n(Configure NEXT_PUBLIC_GEMINI_API_KEY to get real AI responses)`
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    resolve(randomResponse);
                }, 1500);
            });
        }

        try {
            // Real implementation (uncomment when package is installed)
            /*
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});
            
            const chat = model.startChat({
              history: history.map(h => ({
                role: h.role,
                parts: [{ text: h.parts }]
              })),
            });
      
            const result = await chat.sendMessage(prompt);
            const response = await result.response;
            return response.text();
            */

            // Fallback until package is installed
            return "Gemini API key found but @google/generative-ai package is missing. Please install it.";

        } catch (error) {
            console.error("Error calling Gemini:", error);
            throw error;
        }
    },

    analyzeData: async (data: any) => {
        const prompt = `Analyze this data and provide insights: ${JSON.stringify(data)}`;
        return geminiService.askQuestion(prompt);
    }
};
