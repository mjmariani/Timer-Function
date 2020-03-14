function countDown(num){
    let timer = setInterval(function (){
        console.log(num);
        if(num === 0){
            clearInterval(timer); //clearInterval function needs argument to be put in
            return;
        }
        num--;
        



    },1000)
}