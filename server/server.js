const path = require("path");
const fs = require("fs");

let chirps = [
    {
        author: "author 1",
        text: "chirp 1"
    },
    {
        author: "author 2",
        text: "chirp 2"
    },
    {
        author: "author 3",
        text: "chirp 3"
    },
    {
        author: "author 4",
        text: "chirp 4"
    },
    {
        author: "author 5",
        text: "chirp 5"
    }
];

fs.writeFile("chirps.json", JSON.stringify(chirps), (err) => {
    if (err) console.log(err);
});

fs.readFile("chirps.json", (err, data) => {
    if (err) console.log(err);
    console.log(data.toString());
});