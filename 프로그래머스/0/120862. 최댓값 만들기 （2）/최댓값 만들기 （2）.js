function solution(numbers) {

    let l= numbers.length
    let sorted = numbers.sort((a, b) => a-b)
    
    return sorted[l-1] * sorted[l-2] > sorted[0] * sorted[1] ? sorted[l-1] * sorted[l-2] : sorted[0] * sorted[1]
    
}