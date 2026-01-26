function solution(num_list) {
    let odd= []
    let even = []
    num_list.filter(o=>o%2==0? even.push(o) : odd.push(o))
    return Number(even.join("")) + Number(odd.join(''));
}