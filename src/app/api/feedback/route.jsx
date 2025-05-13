import { feedbackForm } from "@/app/services/Constant";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { conversation } = await req.json();
  const FinalFeedback = feedbackForm.replace("{{conversation}}", conversation);
  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });
    const completion = await openai.chat.completions.create({
      model: "opengvlab/internvl3-14b:free",
      messages: [{ role: "user", content: FinalFeedback }],
    });
    console.log(completion.choices[0].message);
    return NextResponse.json(completion.choices[0].message);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
