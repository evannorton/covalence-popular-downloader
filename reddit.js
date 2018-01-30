const path = require("path");
const fs = require("fs");
const rp = require('request-promise');

rp("https://reddit.com/r/popular.json")
    .then(html => {

        let posts = JSON.parse(html).data.children;
        let objs = [];

        posts.forEach((item) => {
            let obj = {
                title: item.data.title,
                url: item.data.url,
                author: item.data.author
            }
            objs.push(obj);
        });

        fs.writeFile("popular-articles.json", JSON.stringify(objs), (err) => {
            if (err) console.log(err);
        });

    })
    .catch(err => {
        console.log(err);
    });