function solution(arr, intervals) {
    var answer = [];
    let a = arr.slice(intervals[0][0], intervals[0][1]+1)
    answer.push(...a)
    let b = arr.slice(intervals[1][0], intervals[1][1]+1)
    answer.push(...b)
    return answer
}