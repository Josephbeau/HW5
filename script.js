/*
File: script.js
GUI Assignment: THis scrabble game is only able to dynamically fill the hand with
randomly selected tiles from the "bag"
Joseph Beausoleil, UMass Lowell Computer Science, Joseph_Beausoleli@uml.student.edu
What to submit: My HTML, CSS, and JS files along with github link
Copyright (c) 2024 by Jospeh. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JB on June 28, 2024
*/

function fillHand(){
let count = 7 - document.getElementById( 
    "hand").childElementCount; ;

    for(let i = 0; i < count; i++){
        let  tile = Math.floor(Math.random()*101)+1;

        let div = document.createElement("div");
        div.id = "img" + i;
        $("#hand").append(div)

        if(tile <= 8){
            //a
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 10){
            //b
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg";
            img.id = "tile";
            img.value = "3";
            $("#img" + i).append(img);
        }
        else if(tile <= 12){
            //c.
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg";
            img.id = "tile";
            img.value = "3";
            $("#img" + i).append(img);
        }
        else if(tile <= 16){
            //d
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg";
            img.id = "tile";
            img.value = "2";
            $("#img" + i).append(img);
        }
        else if(tile <= 28){
            //e
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 30){
            //f
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg";
            img.id = "tile";
            img.value = "4";
            $("#img" + i).append(img);
        }
        else if(tile <= 33){
            //g
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg";
            img.id = "tile";
            img.value = "2";
            $("#img" + i).append(img);
        }
        else if(tile <= 35){
            //h
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg";
            img.id = "tile";
            img.value = "4";
            $("#img" + i).append(img);
        }
        else if(tile <= 44){
            //i
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 45){
            //j
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg";
            img.id = "tile";
            img.value = "8";
            $("#img" + i).append(img);
        }
        else if(tile <= 46){
            //k
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg";
            img.id = "tile";
            img.value = "5";
            $("#img" + i).append(img);
        }
        else if(tile <= 50){
            //l
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 52){
            //m
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg";
            img.id = "tile";
            img.value = "3";
            $("#img" + i).append(img);
        }
        else if(tile <= 57){
            //n
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 65){
            //o
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 67){
            //p
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg";
            img.id = "tile";
            img.value = "3";
            $("#img" + i).append(img);
        }
        else if(tile <= 68){
            //q
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg";
            img.id = "tile";
            img.value = "10";
            $("#img" + i).append(img);
        }
        else if(tile <= 74){
            //r
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 78){
            //s
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 84){
            //t
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 88){
            //u
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg";
            img.id = "tile";
            img.value = "1";
            $("#img" + i).append(img);
        }
        else if(tile <= 90){
            //v
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg";
            img.id = "tile";
            img.value = "4";
            $("#img" + i).append(img);
        }
        else if(tile <= 92){
            //w
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg";
            img.id = "tile";
            img.value = "4";
            $("#img" + i).append(img);
        }
        else if(tile <= 93){
            //x
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg";
            img.id = "tile";
            img.value = "8";
            $("#img" + i).append(img);
        }
        else if(tile <= 95){
            //y
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg";
            img.id = "tile";
            img.value = "4";
            $("#img" + i).append(img);
        }
        else if(tile <= 97){
            //z
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg";
            img.id = "tile";
            img.value = "10";
            $("#img" + i).append(img);
        }
        else if(tile <= 99){
            //blank
            let img = document.createElement("img");
            img.src = "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg";
            img.id = "tile";
            img.value = "4";
            $("#img" + i).append(img);
        }
    }

    return 0;
}

function startGame(){
    document.getElementById("score").textContent = "Score: ";
    fillHand();
}

function calcScore(){

}