function encode(text) {
  let newText = text;

  for (let index = 0; index < text.length; index += 1) {
    if (newText[index] === 'a') {
      newText = text.replace(/a/g, '1');
    }
    if (newText[index] === 'e') {
      newText = newText.replace(/e/g, '2');
    }
    if (newText[index] === 'i') {
      newText = newText.replace(/i/g, '3');
    }
    if (newText[index] === 'o') {
      newText = newText.replace(/o/g, '4');
    }
    if (newText[index] === 'u') {
      newText = newText.replace(/u/g, '5');
    }
  } return newText;
}

function decode(text) {
  let newText = text;

  for (let index = 0; index < text.length; index += 1) {
    if (newText[index] === '1') {
      newText = text.replace(/1/g, 'a');
    }
    if (newText[index] === '2') {
      newText = newText.replace(/2/g, 'e');
    }
    if (newText[index] === '3') {
      newText = newText.replace(/3/g, 'i');
    }
    if (newText[index] === '4') {
      newText = newText.replace(/4/g, 'o');
    }
    if (newText[index] === '5') {
      newText = newText.replace(/5/g, 'u');
    }
  } return newText;
}

module.exports = {encode, decode};