function solution(myString, pat) {
    let patAnswer = []
    for(let i=0; i<pat.length ;i++){
        if(pat[i] == 'A') patAnswer.push('B')
        else patAnswer.push('A')
    }
    return myString.includes(patAnswer.join('')) ? 1: 0
}