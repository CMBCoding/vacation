//Import express
import express from 'express';

//Create an instance of express
const app = express();

//Define designated port, 3005
const PORT = 3005;

//Enable static file sharing
app.use(express.static("public"));

//Set the default root
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
})

app.listen(PORT, () => {
    console.log(`Server is active and running in http://localhost:${PORT}`)
})