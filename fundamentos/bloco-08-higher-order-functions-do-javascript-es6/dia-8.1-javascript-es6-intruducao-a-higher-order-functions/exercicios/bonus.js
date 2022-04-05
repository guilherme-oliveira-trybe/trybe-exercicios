const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
console.log(battleMembers);

const dragonDamage = (dragon) => dragon.damage = Math
.floor((Math.random() * ((dragon.strength -15) + 1)) + 15);

const warriorDamage = (warrior) => warrior.damage = Math
.floor((Math.random() * (((warrior.strength * warrior.weaponDmg) - warrior.strength)) + 1) + warrior.strength);

const mageDamage = (mage) => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  const turnStats = {
    manaSpent: 0,
    damage: `Mana insuficiente`
  }

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math
    .random() * (maxDamage - minDamage + 1)) + minDamage);
    turnStats.manaSpent = 15;
    turnStats.damage = mageDamage;
    return turnStats;
  }

  return turnStats;
}

// console.log(dragonDamage(dragon))
// console.log(warriorDamage(warrior))
// console.log(mageDamage(mage));

const gameActions = {
  warrior: (warriorDamage) => {
    const damage = warriorDamage(warrior); 
    warrior.damage = damage;
    dragon.healthPoints -= damage
  },
  mage: (mageDamage) => {
    const mageTurnStats = mageDamage(mage);
    const damage = mageTurnStats.damage;
    mage.damage = damage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= damage; 
  },
  dragon: (dragonDamage) => {
    const damage = dragonDamage(dragon);
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage
  },
  newStatus: () => battleMembers
};

gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
console.log(gameActions.newStatus());
