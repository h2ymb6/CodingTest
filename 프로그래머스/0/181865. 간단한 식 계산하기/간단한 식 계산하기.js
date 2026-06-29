function solution(binomial) {
    let split = binomial.split(' ')
    let first = Number(split[0])
    let sign = split[1]
    let second = Number(split[2])
    
    if(sign == '+') return first + second
    else if(sign == '-') return first - second
    else if(sign == '*') return first * second 
}