let data = "";
const functAry = new Array();

{
  for (let i = 0; i < 64; i++) {
    functAry[i] = Math.sin(((2 * Math.PI) / 63) * i);
    data += String(functAry[i]) + "\r\n";
  }
}

const fs = require("fs");
fs.writeFile("exercise2.txt", data, function(error, data) {
  if (error) {
    throw error;
  }
  console.log("write is completed");
});
