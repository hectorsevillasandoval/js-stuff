const person = () => {
  let name = 'Name';

  return {
    getName() {
      return name;
    },

    setName(value) {
      name = value;
    },
  };
};

const newPerson = person();
console.log(newPerson.name);
newPerson.name = 'Jousmo';
console.log(newPerson.name);
