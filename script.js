document.write('<span class="cell header">&times;</span>');
let i = 0;
while (i <= 10) {
  document.write('<span class="cell header">' + i + "</span>");
  i++;
}
document.write("<br>");


// TODO: Write two nested while loops to output the rest of the multiplication table
// Loop to create each row(loop variabe; rowNum 0-10)
 let outterLoop = 0; 
 while (outterLoop <=10) {
document.write('<span class="cell header">' + outterLoop + '</span>');
// b. loop to create multiplication answers cells of the table
 let innerLoop = 0;
while(innerLoop <= 10){
 document.write('<span class="cell">' + innerLoop * outterLoop + '</span>');
 innerLoop += 1 }
 outterLoop +=1;
 document.write("<br>")
}