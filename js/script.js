let result = document.querySelectorAll('.result');

console.log(result)


let arr  = Array.from(result)

arr.map((item)=>{
  
  
  
  
  let count = 0
  
  let counterUP = ()=>{
    count++
  
    item.innerHTML=count
  
  
    if(count == item.dataset.number){
      clearInterval(stop)
    }
  }
  
  let stop = setInterval(counterUP,1000/item.dataset.number)

})

