import formidable from 'formidable';
import fs from 'fs/promises';
import pdfParse from 'pdf-parse';
import path from 'path';
import { promisify } from 'util';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing since we're handling file uploads
  },
};

// Function to parse the uploaded PDF
const parseCV = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath);
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
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  const parseForm = promisify(form.parse);

  try {
    const { files } = await parseForm(req);
    
    if (!files.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Move file to `/tmp/` for access on Vercel
    const tempFilePath = path.join('/tmp', files.file.newFilename || 'uploaded.pdf');
    await fs.rename(files.file.filepath, tempFilePath);

    const parsedData = await parseCV(tempFilePath);
    
    res.status(200).json(parsedData);
  } catch (error) {
    console.error("Upload/Parsing Error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
