function joinBoth(str1, str2) {
  //console.log(str1.length, str2);
  if (str1.length !== str2.length) {
    return;
  }

  //console.log(str1.length);

  if (i <= str1.length - 1) {

    f = str1.substr(i, 1);
    s = str2.substr(i, 1);
    t += f + s;
    console.log(t);
    i++;
    joinBoth(str1, str2);

  }



}

let i = 0;
let f = '';
let s = '';
let t = '';
let r = joinBoth('cat', 'dog');
//console.log('Valor retornado', r);