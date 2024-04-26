const character = document.getElementById("character");
const block = document.getElementById("block");
const tryAgain = document.getElementById("try")


function jump(){
    block.style.animation = "block 2s infinite linear";
    tryAgain.style.display = "none"
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");  
    },300);
    checkCollision()
    
}

let heart = 5;
document.getElementById("heartSpan").innerText = "Heart: " + heart;


const checkCollision = setInterval(function() {
    // Get the positions of the character and the block
    const characterRect = character.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();
    

    // Check if the character's bottom is above the block's top
    // and if the character's top is below the block's bottom
    const isColliding = !(

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





// const checkDead = setInterval(function() {
//     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
//         block.style.animation = "none";
//         alert("Game Over. score: "+Math.floor(counter/100));
//         counter=0;
//         block.style.animation = "block 1s infinite linear";
//     }else{
//         counter++;
//         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
//     }
// }, 10);


// var character = document.getElementById("character");
// var block = document.getElementById("block");
// var counter=0;
// function jump(){
//     if(character.classList == "animate"){return}
//     character.classList.add("animate");
//     setTimeout(function(){
//         character.classList.remove("animate");
//     },300);
// }
// var checkDead = setInterval(function() {
//     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
//         block.style.animation = "none";
//         alert("Game Over. score: "+Math.floor(counter/100));
//         counter=0;
//         block.style.animation = "block 1s infinite linear";
//     }else{
//         counter++;
//         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
//     }
// }, 10);

