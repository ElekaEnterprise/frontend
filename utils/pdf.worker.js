// Import the PDF.js worker
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

const pdfWorkerUrl = new URL('pdfjs-dist/build/pdf.worker.js', import.meta.url);
GlobalWorkerOptions.workerSrc = pdfWorkerUrl.href;

export { getDocument };