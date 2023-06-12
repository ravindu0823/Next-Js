import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch", { status: 500 });
  }
};

// UPDATE
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    // Updating with new values
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    // Save to database
    await existingPrompt.save();

    // Return updated prompt
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(error, { status: 500 });
  }
};
