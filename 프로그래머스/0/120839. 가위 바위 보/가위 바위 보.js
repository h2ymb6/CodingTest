function solution(rsp) {
    var answer = [];
    for (let x of rsp){
        if(x==2) answer.push(0)
        if(x==0) answer.push(5)
        if(x==5) answer.push(2)
    }
    return answer.join('');
}