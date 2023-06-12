import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  // console.log(params.id);
  try {
    await connectToDB();

    const prompt = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompt), { status: 200 });
    // return new Response(JSON.stringify(), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
