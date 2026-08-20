function solution(t, p) {
    var answer = 0
    let arrayed = []
    let sliced = []
    
    for(let i=0;i<t.length;i++){
        arrayed.push(...t[i]) //t 나누기
    }
    
    for(let i=0;i<t.length-p.length+1;i++){
        sliced[i] = arrayed.slice(i, p.length+i).join('') //글자 크기에 맞게 하나씩 쪼개서 저장
    }
    
    for(let i=0;i<sliced.length;i++){
        if(sliced[i] <= p) answer++
    }
    
    return answer
    
}