function solution(num_list, n) {
    var answer = [];  
    
    let after = num_list.filter((_,i) => i>=n)
    answer.push(...after)
    
    let before = num_list.filter((_,i) => i<n)
    answer.push(...before)

    return answer
}