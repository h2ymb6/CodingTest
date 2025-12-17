function solution(num_list) {
    let l = num_list.length
    let end = num_list[l-1]
    let endBefore = num_list[l-2]
    
    if( end > endBefore ){
        num_list.push(end-endBefore);
    } 
    else num_list.push(end*2);
    
    return num_list
}