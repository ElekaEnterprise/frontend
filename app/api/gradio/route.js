// app/api/gradio/route.js

import { Client } from "@gradio/client";

// Named export for POST method
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { user_query } = body;   // Extract user query from the body

    const access_token = "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";
    
    const client = await Client.connect("Jimmy-Rais/ELEKA.AI", {
      hf_token: access_token,
    });

    const result = await client.predict("/predict", {
      user_query,
    });

    return new Response(JSON.stringify({ data: result.data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
