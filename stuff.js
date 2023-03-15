
const RedElm = document.querySelector("#red");
const GreenElm = document.querySelector("#green");
const BlueElm = document.querySelector("#blue");
const PatternListElm=document.querySelector("#pattern-list")

SaveMemory=[Math.floor(Math.random()*3)];
PlayerMemory=[];
counter=0;
tcounter=0;


PatternListElm.textContent="Score: " + 0

function delay(i) {
    setTimeout(() => { playAnim(SaveMemory[i]); }, 500);
  }
function playAnim(savenum){ 
    RedElm.classList.remove("spring")
    GreenElm.classList.remove("spring")
    BlueElm.classList.remove("spring")
    if (savenum==0){
        RedElm.classList.toggle("spring")
    }
    else if (savenum==1) {
        GreenElm.classList.toggle("spring")
    }
    else{
        BlueElm.classList.toggle("spring")
    }
}


playAnim(SaveMemory[0])
    

function doRockThing(rockColor){
    
    
    if (rockColor=="red"){
        PlayerMemory.push(0);
      
    }
    else if (rockColor=="green"){
        PlayerMemory.push(1);
 
    }
    else{
        PlayerMemory.push(2);
     
    }
  
    
    if (PlayerMemory[counter]==SaveMemory[counter]){
        if (counter==SaveMemory.length-1){
            SaveMemory.push(Math.floor(Math.random()*3))
            PlayerMemory=[]
            PatternListElm.textContent="Score: " + counter*100
            tcounter=counter*100
            counter=0
            delay(SaveMemory.length-1)

        }
        else {
            counter+=1
        }
        RedElm.classList.remove("spring")
        GreenElm.classList.remove("spring")
        BlueElm.classList.remove("spring")

    
        
        
        

    
        
        
    }
    else {
        RedElm.classList.remove("spring")
        GreenElm.classList.remove("spring")
        BlueElm.classList.remove("spring")
        PatternListElm.textContent="YOU LOSE! FINAL SCORE: "+tcounter
        SaveMemory=0
        
    }

   
    


}

RedElm.addEventListener("click",function(event){
    doRockThing("red")
    
        

})
GreenElm.addEventListener("click",function(event){
    doRockThing("green")
})
BlueElm.addEventListener("click",function(event){
    doRockThing("blue")
})

    

