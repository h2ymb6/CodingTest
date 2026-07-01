function solution(my_string, is_prefix) {
    var answer = 0;
    my_string = my_string.split('')
    
    for(let i=0;i<my_string.length;i++){
        if(my_string.slice(0, i).join('') == (is_prefix)){
            answer=1
        }
    }
    return answer;

}