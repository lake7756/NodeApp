import express from 'express';
import {reverse} from "./utility";

const app = express();


app.get("/", (req,res)=>{
    const output = reverse("Hola amigos! Namaste.");
    res.send(output);
});

app.listen("8000",()=>{
    console.log("Server is running at port 8000");
})