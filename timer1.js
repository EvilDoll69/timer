const commandArray = process.argv.splice(2).sort((a, b) => a - b);

 

for (const num of commandArray) {
  if(num > 0) {
   
    setTimeout(() => {
      process.stdout.write(`${num}\n`);
    
    },  num * 1000);
  }  
}

