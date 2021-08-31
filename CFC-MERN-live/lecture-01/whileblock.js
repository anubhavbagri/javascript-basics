let count = 0;

while (count < 10) {
  //   console.log("ham honge kamyamb ek din");
  process.stdout.write("*"); //doesn't change line; also, can only pass string or buffer
  //   process.stdout.write(1);   ///can't pass number
  count += 1;
}
