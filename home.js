//your age in days 
function ageInd(){
var birthyear = prompt("what year wr u born.... brother");
var ageindaz=(2023-birthyear)*365;
var h1=document.createElement("h1");
var textanswer=document.createTextNode("you are more than"+ageindaz+" dayss  older");
h1.setAttribute('id','ageInd')
h1.appendChild(textanswer)
document.getElementById('flex-box-res').appendChild(h1)
}
function remove(){
    document.getElementById('flex-box-res').remove();
}

function catgen(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=";
    div.appendChild(image);
}
function removee(){
    document.getElementById('flex-cat-gen').remove();
}

function rpsGame(yourChoice){
    console.log(yourChoice)
    var humanChoice,botChoice;
    botChoice=numbertoCHoice(randTorspint())
    console.log('computerchoiccs',botChoice)
    humanChoice=yourChoice.id;
    var results=decideWinner(humanChoice,botChoice)
    console.log(results)
   message=finalMessage(results)
   console.log(message)
   rpsFrontend(yourChoice.id,botChoice,message);}

function randTorspint(){
   return Math.floor(Math.random()*3)
}

function numbertoCHoice(number){
    return ['rock','paper','scissor'][number]
}

function decideWinner(yourChoice,computerChoice){
    var rpsdatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'scissor':0,'rock':1,'paper':0.5},
        'scissor':{'scissor':0.5,'rock':0,'paper':1}
    };
    var yourScore=rpsdatabase[yourChoice][computerChoice]
    var computerScore=rpsdatabase[computerChoice][yourChoice]
    return [yourScore,computerScore]
};
function finalMessage([yourScore,computerScore]){
    if(yourScore==0){
        return {'message':'you losse','color':'red'}
    }
    else if(yourScore==0.5){
        return {'message':'tied','color':'yellow'} }
    else {
        return {'message':'you won','color':'green'}
    }
};
function rpsFrontend(humanImagechoice,botImagechoice,finalMessage){
var imagesDatabase={
    'rock':document.getElementById('rock').src,
    'scissor':document.getElementById('scissor').src,
    'paper':document.getElementById('paper').src
}
document.getElementById('rock').remove()
document.getElementById('paper').remove()
document.getElementById('scissor').remove()
 
var humanDiv=document.createElement('div')
var botDiv=document.createElement('div')
var messagediv=document.createElement('div')

humanDiv.innerHTML='<img src="'+imagesDatabase[humanImagechoice]+'" height=150 width=150>'
messagediv.innerHTML='<h1 style=color'+finalMessage['color']+"; font-size:60px;padding:30px;'>"+finalMessage['message']+"</h1>"
botDiv.innerHTML='<img src="'+imagesDatabase[botImagechoice]+'"height=150 width=150>'

document.getElementById('flex-box-div').appendChild(humanDiv)
document.getElementById('flex-box-div').appendChild(messagediv)
document.getElementById('flex-box-div').appendChild(botDiv)

}

//challenge 4:change the color of All buttons
var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons)
var copyallButtons=[];
for(let i=0;i<all_buttons.length;i++){
    copyallButtons.push(all_buttons[i].classList[1])
}

function buttonColorChange(buttomThing){
if(buttomThing.value==='red'){buttonRed()}   
else if(buttomThing.value==='green'){buttonGreen()}
else if(buttomThing.value==='reset'){buttonReset()}
else buttonRandom();}
function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }

}

function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }

}
function buttonReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyallButtons[i])
    }

}
function randomgen(){
    return Math.floor(Math.random()*4)
 }

function buttonRandom(){
    var choices=['btn-primary','btn-success','btn-danger','btn-warning']
    for(let i=0;i<all_buttons.length;i++){
        let x=randomgen()
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[x])            
    }

}
