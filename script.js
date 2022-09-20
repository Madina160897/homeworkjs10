function taskOne(item) {
    let a = "";
    for (let i = 1; i < item*item; i++) {
      if ((i % (item + 1)) == 0) {
        a += "\n";
      } else if (i % 2 != 0) {
        a += "#";
      } else {
        a += " ";
      }
    }
    
    return a;
  }
  
  console.log(taskOne(8));

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0){
      console.log((i) + ". Fizz");
    }else if (i % 5 == 0){
      console.log((i) +". Buzz");
    }else{
      console.log((i) +". FizzBuzz");
    } 
}

function taskThree(item) {
  let a = item.split("");
  if (item === a.reverse().join("")) { 
    return "Палиндром" 
  }else{
    return "Не палиндром"
  }
}
  
console.log(taskThree("level"));
console.log(taskThree("three"));
console.log(taskThree("aba"));