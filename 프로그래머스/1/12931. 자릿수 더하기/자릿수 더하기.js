function solution(n)
{
    var answer = 0;
    
    let tmp = String(n).split('')
    for(const item of tmp){
        answer+=Number(item)
    }

    return answer;
}