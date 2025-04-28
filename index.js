import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as storage from 'node-persist';

const app = express();
const PORT = 3000;

// This is needed because you're using "import" syntax (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the current directory
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "public")));





(async () => {
    await storage.init();
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});