const solution = arr => arr.map(a => (a%2==0 && a>=50) ? a/2 : (a%2!=0 && a<50) ? a*2 : a)
