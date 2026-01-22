function solution(my_string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    
   return [...my_string].filter(i=> !vowel.includes(i)).join("");
}