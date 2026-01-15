function solution(numbers) {
    answer = numbers.sort((a, b) => a-b);
    l = numbers.length;
    return answer[l-1] * answer[l-2];
}