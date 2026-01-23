function solution(my_string) {
    var answer = [];
    [...my_string].map((_, i) => my_string[i].toUpperCase() == my_string[i] ? answer.push(my_string[i].toLowerCase()) : answer.push(my_string[i].toUpperCase()))
    return String(answer.join(""))
}