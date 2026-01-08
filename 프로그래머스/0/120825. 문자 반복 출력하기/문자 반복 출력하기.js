function solution(my_string, n) {
    var answer = [];
    
    for(let x of my_string){
        answer.push(x.repeat(n))
    }
    
    return answer.join('');
}