function solution(a, d, included) {
    var answer = 0;
    
    included.map((_, i) => {
        if(included[i]) answer+=a+i*d
    })
    
    return answer
}