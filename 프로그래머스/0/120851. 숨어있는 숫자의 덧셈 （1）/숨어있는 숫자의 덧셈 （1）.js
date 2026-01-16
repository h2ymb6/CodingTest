function solution(my_string) {
    return my_string.split("").filter(i => !isNaN(i)).map(a => Number(a)).reduce((acc, cur) => acc+cur);
}