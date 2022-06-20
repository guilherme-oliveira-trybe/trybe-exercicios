randomNumber = () => {
  const number = Math.floor(Math.random() * 100)
  return number;
}

upperCase = (text) => {
  return text.toUpperCase();
}

firstChar = (text) => {
  const array = text.split('');
  return array[0];
}


concatenate = (firstText, secondText ) => {
  const concatenateResult = `${firstText} ${secondText}`
  return concatenateResult;
}

const dogFetch = async () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
console.log(dogFetch());

module.exports = { randomNumber, upperCase, firstChar, concatenate, dogFetch }