import { QUESTIONS_PROMPT } from "@/app/services/Constant";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { jobPosition, jobDescription, duration, types } = await req.json();
  const FINAL_QUESTION_PROMPT = QUESTIONS_PROMPT.replace(
    "{{jobTitle}}",
    jobPosition
  )
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{duration})", duration)
    .replace("{{types}}", types);
  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });
    const completion = await openai.chat.completions.create({
      model: "opengvlab/internvl3-14b:free",
      messages: [{ role: "user", content: FINAL_QUESTION_PROMPT }],
    });
    console.log(completion.choices[0].message);
    return NextResponse.json(completion.choices[0].message);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
