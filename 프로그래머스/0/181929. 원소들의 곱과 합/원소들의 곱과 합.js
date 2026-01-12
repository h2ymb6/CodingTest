function solution(num_list) {
    var answer = 0;
    let Mul = num_list.reduce((acc, cur) => acc * cur);
    let sumSq = (num_list.reduce((acc, cur) => acc + cur) ** 2);
    return Mul > sumSq ? 0:1;
}