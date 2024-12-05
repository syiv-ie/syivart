//(made by Sylvie) 🏳️‍⚧️
//disord @syiv 

let artCount = 21;
let soul = document.getElementById("soul");


fillSoul();
function fillSoul(){

    for(let i = 1; i <= artCount; i++){
        let art = document.createElement("img");
        art.className = "art";
        art.src = "images/art/" + i + ".png";
        soul.prepend(art);
    }

    //findArt();
}



/*



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