function solution(a, b) {
    let num1 = a+""+b
    let num2 = b+""+a
    return num1 > num2 ? Number(num1) : Number(num2);
}