function solution(my_string, indices) {
    let string = my_string.split('')
    
    for (let i of indices){
        string[i] = ''
    }
    
    return string.join('')
}