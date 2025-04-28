import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import storage from 'node-persist';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());


storage.init()
    .then((res) => {
        console.log("Initialized storage");
    });

app.post('/save', async (req, res) => {
    const {key, value} = req.body;
    if (!key || !value) {
        return res.status(400).send("missing key or value");
    }

    try {
        await storage.setItem(key, value);
        console.log(`Received key: ${key}, value: ${value}`)
        res.send({message: 'Data saved'});
    } catch (error) {
        console.error("Error saving data: ", error);
        res.status(500).send("error saving data");
    }
});
// How to catch slug in express
app.get('/get/:key', async (req, res) => {
    const {key} = req.params;
    console.log(key);
    const value = await storage.getItem(key);
    if (value === undefined) {
        res.status(404).send({error: "Key not found"});
    } else {
        res.send({key, value});
    }
});

app.get('/delete/:key', async (req, res) => {
    const {key} = req.params;
    console.log(key);
    const value = await storage.removeItem(key);
    if (value === undefined) {
        res.status(404).send({error: "Key not found"});
    } else {
        res.send({message: "key deleted"});
    }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});