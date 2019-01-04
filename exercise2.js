function counter() {
  for (var i = 0; i < 10; i++) {
    console.log("i is", i);
  }
}
counter();
console.log("After loop,the last i is", i);
//reference error i is not defined

(function() {
  for (var i = 0; i < 10; i++) {
    console.log("i", i);
  }
})();
