n = 0
for(i=0;i<=1000;i++){
    let fizz = false
    let buzz = false
    //if((i % 3 == 0) || (i % 5 == 0) ){
    //    console.log("fizz")
    //}else{
    //console.log(i)}
    
    if(i % 3 == 0) {
        fizz = true
    }if(i % 5 == 0) {
        buzz = true
    }if(fizz === true && buzz === true){
        console.log("fizz" + "buzz")
    }if(fizz !== true && buzz === true){
        console.log("buzz")
    }if(fizz === true && buzz !== true){
        console.log("fizz")
    }if(fizz !==true && buzz !==true){
        console.log(i)
    }
}