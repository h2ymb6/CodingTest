function solution(arr, k) {
    let answer = k%2==0 ? arr.map(a => a+k) : arr.map(a => a*k) 
    return answer
}