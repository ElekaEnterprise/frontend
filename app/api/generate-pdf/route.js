import { Client } from "@gradio/client";

// Named export for POST method
export async function POST(req) {
  try {
    const access_token = "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"; // Use your access token here

    // Connect to Gradio Client
    const client = await Client.connect("Jimmy-Rais/ELEKA.AI", {
      hf_token: access_token,
    });

    // Call the /predict_1 endpoint to generate PDF
    const result = await client.predict("/predict_1", {});

    console.log("Gradio result:", result); // Log the result for debugging

    // Check if result contains valid data
    if (!result || !result.data || result.data[0] === null) {
      console.error("No valid data returned from Gradio:", result);
      return new Response(JSON.stringify({ error: "No valid data returned from Gradio." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the result
    return new Response(JSON.stringify({ data: result.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in /api/generate-pdf:", error); // Log the error for debugging
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
