function legacyEditor (code, elem) {
  let html = code;
  let newHtml = '';
  const codigo = elem;
  if (html.length) {
    html = html.split(' ');
    for(let i = 0; i < html.length; i++) {
      if(html[i] == 'function' || html[i] == 'const' || html[i] == 'let') {
        const newFunction = document.createElement('span');
        newFunction.className = "funcion";
        newFunction.innerHTML = html[i] + ' ';
        newHtml += newFunction.outerHTML;
      } else {
        if (html[i].match(/\n/)) {
          const breakline = document.createElement('br');
          newHtml += breakline.outerHTML + ' ';  
        }
        if (!isNaN(html[i])) {
          const newNumber = document.createElement('span');
          newNumber.className = "numero";
          newHtml += newNumber.outerHTML;
        } else {
          newHtml += html[i] + ' ';
        }
      }
    }
    codigo.innerHTML = newHtml;
  } else {
    codigo.innerHTML = '';
  }
}

export { legacyEditor };
