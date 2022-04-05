const url = `https://api.coincap.io/v2/assets`;

function append(data) {
  const ol = document.querySelector('ol');

  const li = document.createElement('li');
  const divNome = document.createElement('div');

  divNome.innerHTML = `${data.name} (${data.symbol}): U$$ ${data.price}`;

  li.appendChild(divNome);

  ol.appendChild(li);
}

const moedas = async () => {
  try {
    const response = await fetch(url);
    const itens = await response.json();
    const { data } = itens;
    const coins = data.map((coin) => {
      return {
        rank: coin.rank,
        name: coin.name,
        symbol: coin.symbol,
        price: parseFloat(coin.priceUsd).toFixed(4)
      }
    });
    return coins.filter((coin) => coin.rank <= 10).forEach(append)
  } catch (error) {
    console.log(error);
  }
}

moedas();