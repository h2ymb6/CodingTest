function solution(a, b) {
    var answer = 0;
    let max = 0
    let min = 0
    
    if(a>b){
        max = a
        min = b
    }
    else{
        max = b
        min = a
    }
    
    for(let i=min;i<=max;i++){
        answer= answer+i
    }
    return answer;
}