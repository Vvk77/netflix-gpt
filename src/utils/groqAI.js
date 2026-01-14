// import OpenAI from "openai";
// import { OPEN_AI_KEY } from "./constants";
import { GROQ_AI_KEY } from "./constants";




// const openai = new OpenAI({
//   apiKey: OPEN_AI_KEY,
//    dangerouslyAllowBrowser: true
// });

// export default  openai

import OpenAI from "openai";

const groq = new OpenAI({
  apiKey:  GROQ_AI_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true
});

export default groq;
