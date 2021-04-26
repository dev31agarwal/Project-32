const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, base1, base2, box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22; 
var box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35; 
var box36, box37, box38, box39, box40;
var polygon, polygonImage, sling1, score=0, bg="white";

function preload(){
    polygonImage= loadImage("polygon.png");
}

function setup(){
createCanvas(1200, 700);     
getBackgroundImg();
engine = Engine.create();
world = engine.world;

ground1= new Ground(width/2, 690, width, 20);
base1= new Ground(420, 540, 350, 15);
base2= new Ground(850, 250, 350, 15);

//first level
box1= new BlockPink(270, 505, 50, 50);
box2= new BlockBlue(320, 505, 50, 50);
box3= new BlockPink(370, 505, 50, 50);
box4= new BlockBlue(420, 505, 50, 50);
box5= new BlockPink(470, 505, 50, 50);
box6= new BlockBlue(520, 505, 50, 50);
box7= new BlockPink(570, 505, 50, 50);

//second level
box8= new BlockYellow(295, 455, 50, 50);
box9= new BlockRed(345, 455, 50, 50);
box10= new BlockYellow(395, 455, 50, 50);
box11= new BlockRed(445, 455, 50, 50);
box12= new BlockYellow(495, 455, 50, 50);
box13= new BlockRed(545, 455, 50, 50);

//third level
box14= new BlockPink(320, 405, 50, 50);
box15= new BlockBlue(370, 405, 50, 50);
box16= new BlockPink(420, 405, 50, 50);
box17= new BlockBlue(470, 405, 50, 50);
box18= new BlockPink(520, 405, 50, 50);

//fourth level
box19= new BlockYellow(345, 355, 50, 50);
box20= new BlockRed(395, 355, 50, 50);
box21= new BlockYellow(445, 355, 50, 50);
box22= new BlockRed(495, 355, 50, 50);

//first level-2
box23= new BlockRed(700, 215, 50, 50);
box24= new BlockBlue(750, 215, 50, 50);
box25= new BlockRed(800, 215, 50, 50);
box26= new BlockBlue(850, 215, 50, 50);
box27= new BlockRed(900, 215, 50, 50);
box28= new BlockBlue(950, 215, 50, 50);
box29= new BlockRed(1000, 215, 50, 50);

//second level-2
box30= new BlockPink(725, 165, 50, 50);
box31= new BlockYellow(775, 165, 50, 50);
box32= new BlockPink(825, 165, 50, 50);
box33= new BlockYellow(875, 165, 50, 50);
box34= new BlockPink(925, 165, 50, 50);
box35= new BlockYellow(975, 165, 50, 50);

//third level-2
box36= new BlockRed(750, 115, 50, 50);
box37= new BlockBlue(800, 115, 50, 50);
box38= new BlockRed(850, 115, 50, 50);
box39= new BlockBlue(900, 115, 50, 50);
box40= new BlockRed(950, 115, 50, 50);

var polygonOptions= {
    isStatic:false,
}



polygon= Bodies.circle(75, 235, 60, polygonOptions);
World.add(world, polygon);

imageMode(CENTER);
image(polygonImage, polygon.position.x, polygon.position.y, 120, 120);

sling1= new SlingShot(polygon, {x:100, y:200});


Engine.run(engine);
}

function draw(){
    background(bg);

    ground1.display();
    base1.display();
    base2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
   sling1.display();
    imageMode(CENTER);
image(polygonImage, polygon.position.x, polygon.position.y, 120, 120);
    
    

    textSize(35);
    fill("brown");
    text("X:"+mouseX+" Y:"+mouseY, 100, 50);

    text("Score: "+Math.round(score), 300, 50);


}

function mouseDragged(){

    Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})
}

function mouseReleased(){

    sling1.sling.bodyA=null
}

function keyPressed(){

    if(keyCode===32){
        sling1.sling.bodyA=polygon
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)
    if(hour>=06 && hour<=19){
        bg = "white";
    }
    else{
        bg = "black";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}