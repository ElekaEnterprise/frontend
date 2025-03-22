import formidable from 'formidable';
import fs from 'fs/promises'; // Use promise-based fs
import pdfParse from 'pdf-parse';

export const dynamic = "force-dynamic"; // Ensure dynamic API execution

// Function to parse the uploaded PDF
const parseCV = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath); // Use fs.promises
    const data = await pdfParse(dataBuffer);

    return {
      name: 'Extracted Name', // Replace with actual parsing logic
      email: 'Extracted Email', // Replace with actual parsing logic
      experience: 'Extracted Experience', // Replace with actual parsing logic
      rawText: data.text, // Full text of the PDF
    };
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw new Error("Parsing failed");
  }
};

// API handler
export async function POST(req) {
  const form = new formidable.IncomingForm({
    keepExtensions: true, // Save file extensions
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("File upload error:", err);
        resolve(Response.json({ error: "File upload failed" }, { status: 500 }));
        return;
      }

      const filePath = files.file?.filepath; // Ensure file exists
      if (!filePath) {
        resolve(Response.json({ error: "No file uploaded" }, { status: 400 }));
        return;
      }

      try {
        const parsedData = await parseCV(filePath);
        resolve(Response.json(parsedData, { status: 200 }));
      } catch (error) {
        resolve(Response.json({ error: error.message || "Parsing failed" }, { status: 500 }));
      }
    });
  });
}
