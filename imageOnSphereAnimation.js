var sphere;

var xPos, yPos;

function getValues(){
    sphere = document.getElementById("image");
}


function startAnimation(value){
    
    getValues();

    switch(value){
        
        case "topLeft":

            sphere.classList.add("topLeftAnimation");

            break;

        case "topMiddle":

            sphere.classList.add("topMiddleAnimation");

            break;

        case "topRight":

            sphere.classList.add("topRightAnimation");

            break;

        case "left":

            sphere.classList.add("leftAnimation");
    
            break;
    
        case "right":
    
            sphere.classList.add("rightAnimation");
    
            break;
    
        case "bottomLeft":

            sphere.classList.add("bottomLeftAnimation");
        
            break;
        
        case "bottomMiddle":
        
            sphere.classList.add("bottomMiddleAnimation");
        
            break;
        
        case "bottomRight":
        
            sphere.classList.add("bottomRightAnimation");
        
            break;

    }

}


function stopAnimation(value){

    getValues();

    switch(value){
        
        case "topLeft":

            sphere.classList.remove("topLeftAnimation");

            break;

        case "topMiddle":

            sphere.classList.remove("topMiddleAnimation");

            break;

        case "topRight":

            sphere.classList.remove("topRightAnimation");

            break;

        case "left":

            sphere.classList.remove("leftAnimation");
        
            break;
        
        case "right":
        
            sphere.classList.remove("rightAnimation");
      
            break;
        
        case "bottomLeft":
    
            sphere.classList.remove("bottomLeftAnimation");
            
            break;
            
        case "bottomMiddle":
         
            sphere.classList.remove("bottomMiddleAnimation");
         
            break;
            
        case "bottomRight":
            
            sphere.classList.remove("bottomRightAnimation");
            
            break;
    

    }

}
