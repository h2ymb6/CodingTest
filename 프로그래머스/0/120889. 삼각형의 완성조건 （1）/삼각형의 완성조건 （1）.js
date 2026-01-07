function solution(sides) {
    return sides.sort((a, b) => b-a).slice(0, 1) >= sides.sort((a, b)=> a-b).slice(0, 2).reduce((acc, cur) => acc+cur, 0)  ? 2 : 1;
    
}