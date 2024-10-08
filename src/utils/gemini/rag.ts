"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function run(userQuery: string) {
  const context = `
    About Us: The primary purpose of our project is to foster a community of support and resilience among students. 
    By conducting regular support group sessions, we aim to normalize conversations around mental health, reduce stigma, 
    and empower students to take proactive steps in managing their mental wellbeing.

    Our Objectives:
    - Provide consistent and reliable support for students through weekly group sessions.
    - Create a safe and confidential environment where students can openly discuss their mental health challenges.
    - Equip students with practical tools and strategies for managing stress and anxiety.
    - Provide a consistent and reliable support system for students through weekly group sessions.

    Please answer User query using above context and keep the answer in one very very short paragraph and try to perfectly answer user query.
    User Query: ${userQuery}

    If the question is out of the context of the text given above, reply saying that you can't help with that and tell to contact 9766873785. DO NOT MENTION anything about the text that has been provided above. Be polite with you response. 
  `;

  const result = await model.generateContent(context);
  const response = result.response;
  const text = response.text();

  return text;
}
