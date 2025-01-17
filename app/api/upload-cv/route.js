import formidable from 'formidable';
import fs from 'fs/promises'; // Use promise-based fs
import pdfParse from 'pdf-parse';

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing
  },
};

// Function to parse the uploaded PDF
const parseCV = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath); // Use fs.promises
    const data = await pdfParse(dataBuffer);

    // Extracting dummy data (modify this as needed)
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
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const form = new formidable.IncomingForm({
    keepExtensions: true, // Save file extensions
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("File upload error:", err);
      return res.status(500).json({ error: 'File upload failed' });
    }

    const filePath = files.file?.filepath; // Ensure file exists

    if (!filePath) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const parsedData = await parseCV(filePath);
      res.status(200).json(parsedData);
    } catch (error) {
      res.status(500).json({ error: error.message || "Parsing failed" });
    }
  });
}
