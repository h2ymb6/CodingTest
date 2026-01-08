function solution(s1, s2) {
    let answer = 0;
    let count=0
    
    answer = s1.map((a) => s2.includes(a))
    
    for(let x of answer){
        if(x == true){
            count++;
        }
    }
    
    return count
}