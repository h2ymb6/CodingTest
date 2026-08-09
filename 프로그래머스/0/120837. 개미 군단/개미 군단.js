function solution(hp) {
    let answer = 0;

    let j = Math.floor(hp / 5);
    answer += j;
    hp %= 5;

    let b = Math.floor(hp / 3);
    answer += b;
    hp %= 3;

    answer += hp;

    return answer;
}