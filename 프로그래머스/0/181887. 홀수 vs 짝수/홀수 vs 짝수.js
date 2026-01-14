function solution(num_list) {
    var answer = 0;
    let odd = 0;
    let even = 0;
    
    odd = num_list.filter((_, n)=> n%2!=0).reduce((acc, cur) => acc+cur)
    even = num_list.filter((_, n)=> n%2==0).reduce((acc, cur) => acc+cur)
    return Math.max(odd, even);
}