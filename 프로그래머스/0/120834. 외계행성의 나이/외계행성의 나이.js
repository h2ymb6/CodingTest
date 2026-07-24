function solution(age) {
    let a = String(age).split('');
    let answer = [];

    for (let i = 0; i < a.length; i++) {
        answer.push(String.fromCharCode(Number(a[i]) + 97));
    }

    return answer.join('');
}