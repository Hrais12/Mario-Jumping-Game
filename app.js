const character = document.getElementById("character");
const block = document.getElementById("block");
const tryAgain = document.getElementById("try")


function jump(){

    //display it only when playing
    block.style.animation = "block 2s infinite linear";

    //hide when playing
    tryAgain.style.display = "none"

    // add the animation to the Mario using javascript
    character.classList.add("animate");

    //  setTimeout to be able to jump so many times 
    setTimeout(function(){
        character.classList.remove("animate");  
    },300);

    checkCollision()
    
}

let heart = 5;
document.getElementById("heartSpan").innerText = "Heart: " + heart;

// set an interval to check collision every 15 ms
const checkCollision = setInterval(function() {


    // Get the positions of the character and the block using getBoundingClientRect()
    const characterRect = character.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();
    

    // Check if the character's bottom is above the block's top
    
    const isColliding = !(   //isColliding will be true if any of these conditions are false

        characterRect.bottom < blockRect.top ||
        characterRect.right < blockRect.left ||
        characterRect.left > blockRect.right 
       
    );

    if (isColliding) {

        console.log("Character has touched the block!");
        
        heart--;
        document.getElementById("heartSpan").innerText = "Heart: " + heart;
        block.style.animation = "none";
        tryAgain.style.display = "block"
        tryAgain.innerText = `You Have ${heart} Hearts left`

        if (heart === 0) {
            
            // alert(`Game Over you have ${heart} heart left `); 

            tryAgain.innerText = `GAME OVER`

            heart = 5; // Reset score
             document.getElementById("heartSpan").innerText = "Heart: " + heart; 

             block.style.animation = "none";
             
             
        
        }

        
    }


}, 15);


