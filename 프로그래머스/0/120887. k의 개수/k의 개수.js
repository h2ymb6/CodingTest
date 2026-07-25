function solution(i, j, k) {
    var answer = 0;
    for(let p=i;p<=j;p++){
        for (const c of String(p)){
            if(c==String(k)){
                answer++
            }
        }
    }
    return answer;
}
