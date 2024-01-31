//importing express
import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
});

//making joke api
app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "This is joke 1"
        },
        {
            id: 1,
            title: "Joke 2",
            content: "This is joke 2"
        },
        {
            id: 1,
            title: "Joke 3",
            content: "This is joke 3"
        },
        {
            id: 1,
            title: "Joke 4",
            content: "This is joke 4"
        },
        {
            id: 1,
            title: "Joke 5",
            content: "This is joke 5"
        },
        {
            id: 1,
            title: "Joke 6",
            content: "This is joke 6"
        }
    ];
    res.send(jokes);
})
//now we will manage this api on frontend

//making port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is ruinning at PORT:${port}`);
});