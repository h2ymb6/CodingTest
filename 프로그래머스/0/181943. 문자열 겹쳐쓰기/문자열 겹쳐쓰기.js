function solution(my_string, overwrite_string, s) {
    var answer = [];
    let a = my_string.slice(0, s)
    let b = my_string.slice(overwrite_string.length+s)
    answer.push(a, overwrite_string ,b)
    return answer.join('')

}