const express = require ("express");
const path = require("path"); // entiiä onko tarpeellinen
//const bodyparser = require(body-parser);//emt 


const app = express();
const port = 3000;

//parse json
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//täällä oli app.get toiminto alunperin
app.get("/",(req,res) => {
    //handle root
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"index.html" ));
       
});


app.route("/newmessage")
.get((req,res) => {})
.post((req,res) => {
    console.log(req.body); //tää on vain testaus, lisääkö taulukkoon asioita
});
    //handle root

app.route("/ajaxmessage")
.get((req,res) => {})
.post((req,res) => {});
        //handle root


//--------------- GUESTBOOK ---------------



  //guests
let guests = [
{
    id: "1",
    username: "inception",
    country: "Nolan",
    message: "2010-07-16",
},
{
    id: "2",
    username: "irishman",
    country: "scorsese",
    message: "2019-09-27",
},
];

//get movie from list (GUESTBOOK TULEE TÄHÄN)
app.get("/guestbook", (req, res) => {
    res.json(guests);
});


//add movie
app.post("/guestbook",(req, res) =>{
    const guestbook = req.body;
    console.log(guestbook);
    guests.push(guestbook);
    res.send("movie have been sended");
});

//search for movie
app.get("/guestbook/:id", (req, res)=>{
    const id = req.params.id;
    
    for (let guestbook of guests) {
        if(guestbook.id === id) {
            res.json(guestbook);
            console.log(guestbook);
            return
        }
    }
    res.status(404).send("movie not avalable");
});

//remove movie from list
app.delete('/guestbook/:id',(req, res) =>{
    const id = req.params.id;

    guests = guests.filter((guestbook) =>{
       if(guestbook.id !== id){
           return true;
       }
       return false;
    });
    res.send('Movie deleted');
});

//set server to listen port
app.listen(port, () => console.log("Serveri toimii --> localhost: ${port}"));