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
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    } 
}