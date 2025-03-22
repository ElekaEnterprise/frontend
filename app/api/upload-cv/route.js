import formidable from 'formidable';
import fs from 'fs/promises';
import pdfParse from 'pdf-parse';
import path from 'path';

export const dynamic = "force-dynamic"; // Ensure dynamic API execution

// Function to parse the uploaded PDF
const parseCV = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath);
    const data = await pdfParse(dataBuffer);

    return {
      name: 'Extracted Name', // Replace with actual parsing logic
      email: 'Extracted Email', // Replace with actual parsing logic
      experience: 'Extracted Experience', // Replace with actual parsing logic
      rawText: data.text,
    };
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw new Error("Parsing failed");
  }
};

// API handler
export async function POST(req) {
  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
    uploadDir: "/tmp", // Ensure files are stored in a writable directory
  });

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("File upload error:", err);
        resolve(new Response(JSON.stringify({ error: "File upload failed" }), { status: 500 }));
        return;
      }

      const file = files.file;
      if (!file || !file.filepath) {
        resolve(new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 }));
        return;
      }

      try {
        // Move file to /tmp if needed
        const tempFilePath = path.join("/tmp", path.basename(file.filepath));
        await fs.rename(file.filepath, tempFilePath);

        // Parse the PDF
        const parsedData = await parseCV(tempFilePath);
        resolve(new Response(JSON.stringify(parsedData), { status: 200, headers: { "Content-Type": "application/json" } }));
      } catch (error) {
        resolve(new Response(JSON.stringify({ error: error.message || "Parsing failed" }), { status: 500 }));
      }
    });
  });
}
