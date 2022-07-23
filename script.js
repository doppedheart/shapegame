let currentscore=0;
let play=false;
let shape1;
let shape2;
let shape3;
const matchbtn=document.getElementById('match');
// data base
const shapes=[
    {color: '#ff595e',width: 250 ,height:160},
    {color: '#ff595e',width: 50 ,height:150},
    {color: '#ffe',width: 250 ,height:140},
    {color: '#595e',width: 150 ,height:130},
    {color: '#ff5a95',width: 200 ,height:120},
    {color: '#ff5e',width: 40 ,height:10},
    {color: '#ff595e',width: 25 ,height:140},
    // {color: '#bde',width: 250 ,height:60},
    // {color: '#595e',width: 50 ,height:180},
    // {color: '#ff595e',width: 250 ,height:160},
    // {color: '#ff5e',width: 50 ,height:75},
    // {color: '#95e',width: 250 ,height:160},
]
// end of the shapes data 
//generating random shapes
const selectRandomShape = () => {

    // creating a variable to store the number that is generated between 0-length of the data base 
    const randomNum =Math.floor(Math.random()*shapes.length);
    // storing the data in a new variable ;
    const randomShape=shapes[randomNum];
    // returnting the generated variable 
    return randomShape;
}
const ranshapes = ()=>{
    const randomnum =Math.floor(Math.random()*shapes.length);

    const ranshap=shapes[randomnum];

    return ranshap;

}

//looping to create random shapes
const repeatRandomShape =()=>{

    setInterval(() => {
        matchbtn.disabled=false;
        shape1=selectRandomShape();
        
        
        shape2=selectRandomShape();
        
        const shape1styles =`width:${shape1.width+'px'}; background:${shape1.color}; height:${shape1.height+'px'};`
        const shape2styles =`width:${shape2.width+'px'}; background:${shape2.color}; height:${shape2.height+'px'};`
        document.getElementById('shape2').style.cssText=shape2styles;
        document.getElementById('shape1').style.cssText=shape1styles;
        
    },1000);
    
}

// start game
document.getElementById('play').onclick = ()=>{
    play=true;
    //disable play button while playing
    document.getElementById('play').disabled=true;
    repeatRandomShape();
};
// how the soring is achieved 
document.getElementById('match').onclick =() =>{

    if(play){
        matchbtn.disabled=true;
        if(Object.is(shape1,shape2) ){
            currentscore++;
            document.getElementById('score').innerHTML=currentscore;         

        }
        
        
        else{
            currentscore--;
            document.getElementById('score').innerHTML=currentscore;           

        }
    }
}