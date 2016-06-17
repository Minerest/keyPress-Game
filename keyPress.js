

function divMaker(id, dir){
    var mainDiv = document.getElementById("playGround");
    var div = "<div class='"+dir+"' id='"+id+"'></div>";
   return mainDiv.innerHTML += div;

};
divMaker("test", "U");
divMaker("person", "person");
divMaker("barU", "U");
divMaker("test2", "U");

function BarMaker (name, posR, posU, id, dir){
    var name = this;
    var num = posU
    this.bool = true;
    this.positionR = posR;
    this.positionU = posU;
    this.idName = document.getElementById(id);
    this.motion = function(){
        name.idName.style.right = posR+'px';
        name.idName.style.top = posU+'px';

        setInterval( function(){
            var move = name.idName.style[dir];
            if (name.bool){
                num += 10
                name.idName.style[dir] = num +'px';
                //name.idName.style[dir] += move +"px";

                if (num > 760){

                   name.bool = false;
                }

                
                
            }
            else {

                num -= 10;
                name.idName.style[dir] = num+'px'
                

                if (num < 10){

                    name.bool = true;

                }
                //name.idName.style[dir] = move + "px";
            }
            
        }, 20)}
}

var barU = new BarMaker('barU', 590, 50, "barU", 'top' );
var test = new BarMaker('test', 290, 50, "test", 'left' );
var test2 = new BarMaker("test2", 200, 300, "test2", "top");
//barU.motion();
test.motion();
test2.motion();
barU.motion();


































//var barU = {};
/*barU = {
    directionR : true,
    directionU : true,
    positionR : 100,
    positionU : 100,
    idName : document.getElementById("barU"),
    motion : function (){
        this.idName.style.top = 100+"px";
        this.idName.style.left = 100+"px";
        setInterval( function(){

            if (barU.positionU >= 800-40){
                barU.directionU = false;
            }
            else if (barU.positionU <= 0){
                barU.directionU = true;
            };
            if (barU.directionU){
                barU.positionU += 20;
                barU.idName.style.top = barU.positionU +"px";
            }
            else {
                barU.positionU -= 20;
                barU.idName.style.top = barU.positionU + "px";
            }
        }, 60)}


};*/