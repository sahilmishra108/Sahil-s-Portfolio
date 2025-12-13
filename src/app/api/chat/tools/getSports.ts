
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool is for when the user asks about fun, hobbies, sports, or wants to see photos of Sahil.",
  parameters: z.object({}),
  execute: async () => {
    return "I am showing the photo gallery.";
  },
});