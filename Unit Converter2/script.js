
function convert(){
    // initialization
    var inputValue=document.getElementById("inputValue").value;
    var inputUnit=document.getElementById("inputUnit").value;
    var outputUnit=document.getElementById("outputUnit").value;
    var outputValue;

    //starting of logics

    if (inputUnit == "m" && outputUnit== "cm"){
        outputValue=inputValue*100;
    }
    else if (inputUnit == "cm" && outputUnit== "m"){ 
    outputValue=inputValue/100;
    }  
   else if(inputUnit=="m" && outputUnit=="ft"){
    outputValue=inputValue*3.281;
   } 
   else if(inputUnit=="ft" && outputUnit=="m"){
    outputValue=inputValue/3.281;
   } 
   else if (inputUnit == "m" && outputUnit== "in"){
    outputValue=inputValue*39.3701;
    }   
    else if (inputUnit == "in" && outputUnit== "m"){
    outputValue=inputValue/39.3701;
    } 
    else if (inputUnit == "in" && outputUnit== "cm"){
        outputValue=inputValue*2.54;
    } 
    else if (inputUnit == "cm" && outputUnit== "in"){
        outputValue=inputValue/2.54;
    } 
    else if (inputUnit == "cm" && outputUnit== "ft"){
        outputValue=inputValue* 0.0328084;
    }
    else if (inputUnit == "ft" && outputUnit== "cm"){
        outputValue=inputValue/0.0328084;
    } 
    else if(inputUnit=="ft" && outputUnit=="in"){
        outputValue=inputValue*12;
       }  
    else if(inputUnit=="in" && outputUnit=="ft"){
        outputValue=inputValue/12;
    }  
      
    // output value 
   document.getElementById("outputValue").value=outputValue;

}
