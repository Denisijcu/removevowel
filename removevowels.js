function removeVowel(str) {

  console.log(typeof (str));
  if (str === '') {
    return;
  }
  if (typeof (str) !== String) {
    return;
  }

  if (typeof (str) === Number) {
    return;
  }


  if (str.length > 0) {

    let len = str.length;
    let _str = '';
    for (let i = 0; i < len; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        //return removeVowel(str.substring(0, len));
      } else {
        _str += str[i];
      }
    }
    return _str;
  }
}
let _string = removeVowel(6);
console.log(_string);