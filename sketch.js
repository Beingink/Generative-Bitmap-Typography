//Indhu Kanth @2021
//Inspired from Daniel shiffman (coding train)


// Initiate variables

let wSlider;
let hSlider;
let canvas1;
let canvas2;
let drp;
var pg;
let tileWidth ;
let tileHeight ;
var nam=[];


function setup() 

{  
  
  
  
  
canvas1=createCanvas(650, 650, P2D);
canvas1.background(0);
canvas1.position(320,160);
frameRate(25);
  
    
  

let g = createP('D I S S O S C I A T I V E');
g.style('font-size', '30px');
g.position(80, 12);
g.style('color', '#5500cc');

let g1 = createP('T Y P O G R A P H Y');
g1.style('font-size', '30px');
g1.position(80, 44);
g1.style('color', '#5500cc');
  

  
let g2 = createP(' P 5 j s -  M o d e l');
g2.style('font-size', '20px');
g2.position(480, 35);
g2.style('color', '#dc3787');
  
  
  
  
let g3 = createP('© Indhu Kanth 2021');
g3.style('font-size', '20px');
g3.position(800, 35);
g3.style('color', '#828080');

  
  
// Letter Input field  
let a = createP('L E T T E R :');
a.style('font-size', '20px');
a.position(80, 162);
a.style('color', '#000000');
input = createInput();
input.position(196, 175);
input.style('font-size', '20px');
input.size(40,30)

  
// Width Input field  
let b = createP('C E L L - W I D T H');
b.style('font-size', '16px');
b.position(105, 242);
b.style('color', '#000000');
wSlider = createSlider(12,100,2);
wSlider.position(80,283)
wSlider.style("width","180px")
wSlider.addClass("mySliders");
  

// Height Input field  
let c = createP('C E L L - H E I G H T');
c.style('font-size', '16px');
c.position(105, 334);
c.style('color', '#000000');
hSlider = createSlider(12,100,2);
hSlider.position(80,380)
hSlider.style("width","180px")
hSlider.addClass("mySliders");
  
  
  
// Freeze Check Box 
chk1 = createCheckbox(' S T O P', false);
chk1.style('font-size', '20px');
chk1.style("width","180px")

chk1.addClass("mySliders");
chk1.position(84, 640);
chk1.style('color', '#000000');  
chk1.changed(mycheck);
  

// Save button 
button = createButton("S A V E ");
button.style('font-size', '18px', 'color', '0,255,255');
button.position(84, 710);
button.size(100,42)
button.mousePressed(savename);
  
  
// Background option drop down   
drp = createSelect();
drp.position(84, 552);
drp.size(180,40)
drp.style('font-size', '18px', 'color', '0,255,255');
drp.option('1. W h i t e - BG');
drp.option(' 2. G r i d - BG');
drp.option(' 3. D y n a m i c - BG');
drp.changed(changeOp);
  
  
let v = createP('C E L L - S I Z E');
v.style('font-size', '16px');
v.position(90, 434);

valueDisplayer = createP()
valueDisplayer.position(90,450)
valueDisplayer.style('font-size', '24px');

  
}



function draw() 
{
  
  background(255);
  
    valueDisplayer.html( wSlider.value()+" x "+hSlider.value())

  // Assign the respective values
  nam=input.value();
  let yor=nam[0];
  let oru;
  oru=changeOp();
  tileWidth=wSlider.value();
  tileHeight=hSlider.value();

  // Define the letter graphic
  pg = createGraphics(width,height);
  pg.background(255);
  pg.textAlign(CENTER,CENTER);
  pg.textSize(width*0.7);
  pg.text(yor,width/2,height/2);

 
  // Initiating motion
  for(var y=0; y<height; y+=tileHeight)
  {
  
    for(var x=0; x<width; x+=tileWidth)
    
    {
      var off = frameCount * 0.1 + (x * y) * 0.01;
      var sx = parseInt(x + (sin(off))*40);
      var sy = parseInt(y + (cos(off))*40);

      
      copy(pg,sx,sy,tileWidth,tileHeight,x,y,sx,y);

 
     //Background options     
      
      noFill();
      if(oru==1)
        {
              rect(x,y,tileWidth,tileHeight);
  
          
        }
      else if(oru==2)
      
        {
        rect(x,sy,tileWidth,tileHeight);

        }
    }
  }
  
  pg.remove(); //clearing memory

}




//function for freezing screen
function mycheck() 
{
  if(chk1.checked())
    {

 noLoop();  
    }
else
  {
    loop();
  }

}



//function for saving 
function savename()
{
  save( "Letter" + nam+ ".png");
}



//function for selecting background
function changeOp()
{
 	let sel = drp.value();
  let ass;
  if(sel == '1. W h i t e - BG'){
ass=0;
  } else if(sel == ' 2. G r i d - BG'){
   	ass = 1;
  } else if(sel == ' 3. D y n a m i c - BG'){
   	ass = 2; 
  
  }
  return ass;
}

