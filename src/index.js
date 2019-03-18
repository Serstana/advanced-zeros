module.exports = function getZerosCount(number, base) {
  // your implementation
let n=base;
let k=0;
let prohod=0;
let min=0;

for(let i = base; i > 1; --i){
  if(base % i == 0){
    let j = i - 1;
    for(;j > 1; --j){
      if(i % j == 0){
        break;
      }
    }
    if(j == 1){
      n = i;
      let l = n;
      k=0;
      while(number / l >= 1){
        k += Math.floor(number / l);
        l *= n;
      }
      l = 0;
      while(base % n == 0){
        ++l;
        base /= n;
      }
      k=Math.floor(k/l);
      if(prohod==0){
        min = k;
      }else if (min>k){
        min=k;
      } 
      prohod++;
    }
  }
} return min
}