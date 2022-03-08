const techList = (tech, name) => {
  let newListTech = [];
  tech.sort();
  for (let index in tech) {
    let listTech = {
      tech: tech[index],
      name: name,
    };
    newListTech.push(listTech);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return newListTech;
}

module.exports = techList;