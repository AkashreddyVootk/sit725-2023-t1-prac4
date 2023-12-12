var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'iphone 2',
    path: 'images/iphone-2.jpeg',
    link: 'About iphone 2',
    description: 'Description of iphone 2'
},
{
    title: 'iphone 3',
    path: 'images/iphone-3.jpeg',
    link: 'About iphone 3',
    description: 'Description of iphone 3'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
