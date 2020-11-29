var colors = randomColorGenerator(6);
var h1=document.getElementById("h1");
var button1=document.getElementById("button1");
var button2=document.getElementById("easy");
var button3=document.getElementById("hard");
var squares = document.getElementsByClassName("square");
var pickedColor=randomColor();
var span1=document.getElementById("one");
var message=document.getElementById("message");
span1.textContent=String(pickedColor);
display()
function display(){
    for(var i = 0; i < squares.length; i++){    
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",EventListener);
    }
}

function EventListener(){
    var selectedColor=this.style.backgroundColor;
    if(selectedColor==pickedColor){
        message.textContent="Correct";
        for(var j = 0 ; j < squares.length; j++){
            squares[j].style.backgroundColor=pickedColor;
            }
            h1.style.background=pickedColor;
            button1.textContent="Play Again";
                }
    else{
        this.style.backgroundColor="#000000";
        message.innerHTML="Try Again";
            }
}
function randomColor() {
    var a=Math.floor(Math.random()* colors.length);
    return colors[a];
}
function randomColorGenerator(num){
    var arr=[]
    for(var i=0;i<num;i++){
        arr[i]=random()
    }
    return arr;
}
function message1(){
    h1.style.background="steelblue";
    display()
    message.textContent="";
}   
function random(){
    var red=Math.floor(Math.random() * 256);
    var green=Math.floor(Math.random() * 256);
    var blue=Math.floor(Math.random() * 256);
    return "rgb("+red+", "+green+", "+blue+")";
}    
button1.addEventListener("click",function(){
    colors = randomColorGenerator(6);
    for(var i=2;i<squares.length;i++){
        squares[i].style.display="block";
    }
    button2.classList.remove("selected");
    button3.classList.add("selected");
    button1.innerHTML="New Game";
    pickedColor=randomColor();
    span1.textContent=String(pickedColor);
    message1();
})
button2.addEventListener("click",function(){
    button2.classList.add("selected");
    button3.classList.remove("selected");
    colors=randomColorGenerator(3);
    pickedColor=randomColor();
    span1.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }

    }
    message1();
})
button3.addEventListener("click",function(){
    button2.classList.remove("selected");
    button3.classList.add("selected");
    colors=randomColorGenerator(6);
    pickedColor=randomColor();
    span1.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
    message1();
})