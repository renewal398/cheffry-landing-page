
import { GoogleGenAI, Type } from "@google/genai";

export interface RecipeResponse {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
}

export const getRecipeSuggestions = async (ingredients: string, country: string): Promise<RecipeResponse[]> => {
  if (!process.env.API_KEY) return [];

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a master chef specializing in traditional and modern ${country} cuisine. 
      The user has ONLY these ingredients: ${ingredients}.
      
      Suggest 3 authentic ${country} dishes that can be prepared using ONLY the provided ingredients.
      
      ABSOLUTE CONSTRAINTS:
      1. FORBIDDEN: Do not list any recipe that requires a main ingredient (meat, vegetable, grain, dairy) NOT present in the user's list: "${ingredients}".
      2. PERMITTED EXCEPTION: You may assume ONLY water, salt, black pepper, and cooking oil are available in a basic kitchen. 
      3. All other spices, herbs, and seasonings MUST be from the user's list.
      4. CULTURAL AUTHENTICITY: The dishes must be recognized as part of ${country}'s local food culture.
      5. FALLBACK: If a perfect match is impossible, suggest the most authentic ${country} dish that can be approximated using a SUBSET of the provided ingredients, but NEVER add external ingredients.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              recipeName: { type: Type.STRING },
              ingredients: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              instructions: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              cookingTime: { type: Type.STRING }
            },
            required: ["recipeName", "ingredients", "instructions", "cookingTime"]
          }
        },
      },
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};
