
function Xfunction(x) {
    return eval(document.getElementById("function").value);
}

 function Zfunction(z){
    var res = eval(document.getElementById("function").value);
    return[res[0],res[1]];

 }

 function drow_function() {
    
        var imgdata=ctx.createImageData(canv.scrollWidth,canv.scrollHeight);
        console.time("plot");
        ctx.clearRect(0, 0, canv.scrollWidth, canv.scrollHeight);
       // var canv=document.getElementById('my_conv');
       // var ctx=canv.getContext('2d');
        Vshift=Voshift*zoom;
        Hshift=Hoshift*zoom;
        var cord=Math.round(20*zoom);
        var reShift=-Vshift-canv.scrollWidth/2;
        var imShift=Hshift+canv.scrollHeight/2;
        ctx.beginPath();
        
        
        var contrast = document.getElementById("contrast").value;
    if(document.getElementById("zfun").checked==true)  {
        
        var inv=document.getElementById("invert").checked;
        var i;
        var j;
        var re;
        var gr;
        var bl;
        switch(document.getElementById("id_select_red").value){
            case "Z:re": {re=1;break}
            case "Z:im": {re=2;break}
            case "Z:(re+im)/2": {re=3;break}
            case "none": {re=4;break}
        }
        switch(document.getElementById("id_select_green").value){
            case "Z:re": {gr=1;break}
            case "Z:im": {gr=2;break}
            case "Z:(re+im)/2": {gr=3;break}
            case "none": {gr=4;break}
        }
        switch(document.getElementById("id_select_blue").value){
            case "Z:re": {bl=1;break}
            case "Z:im": {bl=2;break}
            case "Z:(re+im)/2": {bl=3;break}
            case "none": {bl=4;break}
        }
        var red;
        var green;
        var blue;
        
        
       
        var invContr=contrast*100;
        var Contr=10/contrast;
        for( i=0;i<canv.scrollHeight;i+=1){
            var position=i*canv.scrollWidth*4;
            for(j=0;j<canv.scrollWidth;j+=1){
                var cposition=position+j*4;
                var current = [(j+reShift)/(cord),(-i+imShift)/(cord)];  
                var arr = Zfunction(current);
                var r = arr[0];
                var im = arr[1];
                switch(re){
                    case 1: {red=r;break}
                    case 2: {red=im;break}
                    case 3: {red=(r+im)/2;break}
                    case 4: {red=-125;break}
                }
                switch(gr){
                    case 1: {green=r;break}
                    case 2: {green=im;break}
                    case 3: {green=(r+im)/2;break}
                    case 4: {green=-125;;break}
                }
                switch(bl){
                    case 1: {blue=r;break}
                    case 2: {blue=im;break}
                    case 3: {blue=(r+im)/2;break}
                    case 4: {blue=-125;break}
                }
                
                if(red!=(-125)&&!inv) {red/=Contr+Math.abs(red)} else {if(red!=(-125)) {red=Math.round(invContr/(red*126))}};
                if(green!=(-125)&&!inv) {green/=Contr+Math.abs(green)}else {if(green!=(-125)) {green=Math.round(invContr/(green*126))}};
                if(blue!=(-125)&&!inv) {blue/=Contr+Math.abs(blue)} else{if(blue!=(-125)) {blue=Math.round(invContr/(blue*126))}};
                if(!inv){red=Math.round(red*125);green=Math.round(green*126);blue=Math.round(blue*125);}
                    //ctx.beginPath();
                    //ctx.moveTo(i,j);
                    //ctx.lineTo(i,j+1);
                    //ctx.strokeStyle= "rgb("+(125+red)+","+(125+green)+","+(125+blue)+")";
                    imgdata.data[cposition]=125+red;
                    imgdata.data[cposition+1]=125+green;
                    imgdata.data[cposition+2]=125+blue;
                    imgdata.data[cposition+3]=255;

                    //ctx.closePath();
                    //ctx.stroke();
            }
            
        }
        ctx.putImageData(imgdata,0,0)
        
            var i;
            for( i=-reShift;i<canv.scrollWidth;i+=cord){
                ctx.beginPath();
                ctx.moveTo(i,0);
                ctx.lineTo(i,canv.scrollHeight);
                ctx.strokeStyle ="rgba(0,0,150,0.1)" ;
                ctx.stroke();
                ctx.closePath();
            }
            
            var i;
            for( i=-reShift;i>0;i-=cord){
                ctx.beginPath();
                ctx.moveTo(i,0);
                ctx.lineTo(i,canv.scrollHeight);
                ctx.strokeStyle ="rgba(0,0,150,0.1)" ;
                ctx.stroke();
                ctx.closePath();
            }

            var i;
            for( i=imShift;i<canv.scrollHeight;i+=cord){
                ctx.beginPath();
                ctx.moveTo(0,i);
                ctx.lineTo(canv.scrollWidth,i);
                ctx.strokeStyle ="rgba(0,0,150,0.1)" ;
                ctx.stroke();
                ctx.closePath();
            }

            var i;
            for( i=imShift;i>0;i-=cord){
                ctx.beginPath();
                ctx.moveTo(0,i);
                ctx.lineTo(canv.scrollWidth,i);
                ctx.strokeStyle ="rgba(0,0,150,0.1)" ;
                ctx.stroke();
                ctx.closePath();
            }
            



            ctx.beginPath();
            ctx.moveTo(0,canv.scrollHeight/2+Hshift);
            ctx.lineTo(canv.scrollWidth,canv.scrollHeight/2+Hshift);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(canv.scrollWidth/2+Vshift,0);
            ctx.lineTo(canv.scrollWidth/2+Vshift,canv.scrollHeight);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
    }
    else{
        ctx.clearRect(0, 0, canv.scrollWidth, canv.scrollHeight);
        ctx.beginPath();
        var i;
        for( i=canv.scrollWidth/2+Vshift;i<canv.scrollWidth;i+=cord){
            ctx.beginPath();
            ctx.moveTo(i,0);
            ctx.lineTo(i,canv.scrollHeight);
            ctx.strokeStyle ="yellow" ;
            ctx.stroke();
            ctx.closePath();
        }
        
        var i;
        for( i=canv.scrollWidth/2+Vshift;i>0;i-=cord){
            ctx.beginPath();
            ctx.moveTo(i,0);
            ctx.lineTo(i,canv.scrollHeight);
            ctx.strokeStyle ="yellow" ;
            ctx.stroke();
            ctx.closePath();
        }

        var i;
        for( i=canv.scrollHeight/2+Hshift;i<canv.scrollHeight;i+=cord){
            ctx.beginPath();
            ctx.moveTo(0,i);
            ctx.lineTo(canv.scrollWidth,i);
            ctx.strokeStyle ="yellow" ;
            ctx.stroke();
            ctx.closePath();
        }

        var i;
        for( i=canv.scrollHeight/2+Hshift;i>0;i-=cord){
            ctx.beginPath();
            ctx.moveTo(0,i);
            ctx.lineTo(canv.scrollWidth,i);
            ctx.strokeStyle ="yellow" ;
            ctx.stroke();
            ctx.closePath();
        }
        



        ctx.beginPath();
        ctx.moveTo(0,canv.scrollHeight/2+Hshift);
        ctx.lineTo(canv.scrollWidth,canv.scrollHeight/2+Hshift);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(canv.scrollWidth/2+Vshift,0);
        ctx.lineTo(canv.scrollWidth/2+Vshift,canv.scrollHeight);
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.closePath();

        var i;
        ctx.beginPath();
        for( i=0;i<canv.scrollWidth;i+=1){
              
          if(isFinite(y)==0){
               var y=Xfunction((i-canv.scrollWidth/2-Vshift)/(20*zoom));
                ctx.moveTo(i,canv.scrollHeight/2+Hshift-y*(20*zoom));
          }
            else{
                var y=Xfunction((i-canv.scrollWidth/2-Vshift)/(20*zoom));
                if(isFinite(y)&&i!=0){
                ctx.lineTo(i,canv.scrollHeight/2+Hshift-y*(20*zoom));
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }  
            
            ctx.moveTo(i,canv.scrollHeight/2+Hshift-y*(20*zoom));
        }
                
           
           
                
            
            }
            ctx.closePath();
        }
        console.timeEnd("plot");
    }


