function solution(n) {
    var answer = [];
    
    answer.push(n)
    
    while(1){
        if(n%2==0) {
            answer.push(n/2)
            n=n/2
        }
        else if(n==1){
            break;
        }
        else if(n%2!=0){
            answer.push(3*n+1)
            n=3*n+1
        }
        
    }
    return answer;
}