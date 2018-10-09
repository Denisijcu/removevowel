function removeVowel(str) {
  if (str === "") {
    return;
  }
  if (typeof str !== "string") {
    return;
  }

  len = str.length;

  if (len >= i) {
    if (
      str.substr(i, 1) === "a" ||
      str.substr(i, 1) === "e" ||
      str.substr(i, 1) === "i" ||
      str.substr(i, 1) === "o" ||
      str.substr(i, 1) === "u"
    ) {
    } else {
      c += str.substr(i, 1);
    }
    i++;
    removeVowel(str);
  }
  return c;
}

let c = "";
let i = 0;
let len = 0;
console.log(removeVowel("horse"));

/* 
 /*
  let myRegex = /[^aeiou]/gi; 
  let result = str.match(myRegex);
  let s = '';
  result.forEach(r => {
    s += r;
  });

  return s;
}*/
