import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini safely using lazy client creation
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY" && key !== "") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
      console.log("Lazy initialized Gemini Client.");
    }
  }
  return aiClient;
}

// REST endpoint for smart tutoring and translation
app.post("/api/translate-explain", async (req: express.Request, res: express.Response) => {
  const { text, context, type } = req.body;
  try {
    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        success: false,
        error: "NO_SECRET_API_KEY",
        text: `💡 **AI Tutor Offline**\n\nConfigure your \`GEMINI_API_KEY\` in **Settings > Secrets** to enable instant AI-powered translations and detailed explanations of Patente rules in Persian!`
      });
    }

    const systemInstruction = `You are a expert bilingul (Italian and Persian/Farsi) Patente di Guida (Italian Driving License theory exam) instructor.
Your goal is to explain and translate rules, vocabulary, or quiz questions to help an immigrant student in Italy pass their driving license exam.
Answer in a professional, empathetic, academic, and highly structured manner.
Provide:
1. Accurate, natural, classy Farsi (Persian) translation of the text.
2. A very educational explanation in Farsi why it is Vero or Falso (if it's a question), highlighting traps or linguistic nuances.
Always render in elegant markdown format, using bolding and nice spacing. Keep it to-the-point, less than 250 words.`;

    let userPrompt = "";
    if (type === "question") {
      userPrompt = `Please translate and explain this Patente quiz statement:
Statement: "${text}"
Answer status context: "${context || 'Vero or Falso as applicable'}"`;
    } else if (type === "word") {
      userPrompt = `Please translate and define this Italian driving term and explain what to look out for in exam questions:
Term: "${text}"`;
    } else {
      userPrompt = `Please translate and summarize the main rules in this driving theory paragraph:
Text: "${text}"`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.15,
      }
    });

    return res.json({
      success: true,
      text: response.text || "",
    });

  } catch (error: any) {
    console.error("Gemini API server exception:", error);
    return res.status(500).json({ error: error.message || "Tutor server error" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Fullstack] Server running on http://localhost:${PORT}`);
  });
}

startServer();
