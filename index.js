//(made by Sylvie) 🏳️‍⚧️
//disord @syiv 

let artCount = 29;
let soul = document.getElementById("soul");
let fcs = [
    'Steam: ',
    'picori_blade',
    'Epic Games: ',
    'Syiv.ie',
    'BNet: ',
    'Syiv#1296',
    'Switch: ',
    'SW-8434-4775-3500',
    'FEH: ',
    '6417991149',
    'Hoyo: ',
    '601649226',
]

persona = window.location.search
console.log(persona)

fillSoul();
function fillSoul(){

    if((persona).localeCompare('?fc') == 0){
        let fcTitle = document.createElement("div");
        fcTitle.id = "fcTitle";
        soul.appendChild(fcTitle);
        fcTitle.innerHTML = "Tap the box to copy!"
        for(let i = 0; i < fcs.length; i = i + 2){
            let fc = document.createElement("div");
            fc.className = "fc";
            soul.appendChild(fc);
            fc.innerHTML = fcs[i] + fcs[i+1];
            fc.onclick = function(){
                navigator.clipboard.writeText(fcs[i+1]);
            }
        }
    }else{
        for(let i = 1; i <= artCount; i++){
            let art = document.createElement("img");
            art.className = "art";
            art.src = "images/art/" + i + ".png";
            soul.prepend(art);
        }
    }

}



/* -----old code-----



//findArt();
function findArt(){
    var img = new Image();
    img.src = "images/art/" + artCount + ".png";

    img.onerror = function(){ // Failed to load. were done
        console.log("uh")
    };
    img.onload = function(){ // Loaded successfully. prepend and look for another
        let art = document.createElement("img");
        art.className = "art";
        art.src = "images/art/" + artCount + ".png";
        soul.prepend(art);
        artCount++
        findArt();
    };
}

    //console.log("hu")
    let body = document.getElementById("body");
    body.onload = function(){
        console.log("hu")
    }

do{
        i++;
    
        var f = new File("images/art/" + i + ".png", "file");
        const f = new File([i], "images/art/" + i + ".png", {
            type: "text/plain",
          });
    }while(f.exists());
    
    artCount = i--;
    console.log(i);

    async function loadContent(url) {
        const exists = await fileExists("images/art/" + 1 + ".png");
        if (exists) {
            // Load content
            console.log('Loading content...');
        } else {
            console.log('Content not available');
        }
    }
*/
