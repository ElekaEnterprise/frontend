import { getDocument } from './pdf.worker';

export async function extractTextFromPdf(file) {
  const fileReader = new FileReader();

  const readFileAsArrayBuffer = (file) =>
    new Promise((resolve, reject) => {
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = () => reject(new Error('Failed to read file'));
      fileReader.readAsArrayBuffer(file);
    });

  try {
    const arrayBuffer = await readFileAsArrayBuffer(file);
    const pdf = await getDocument({ data: arrayBuffer }).promise;
    const text = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(' ');
      text.push(pageText);
    }
    return text.join(' ');
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
}