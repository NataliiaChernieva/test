// //Задача1. Игра"Камень-ножницы-бумага"
const vars = ["Камень", "Ножницы", "Бумага"];

const game = () => {
  let input;
  do {
    const compVar = Math.floor(Math.random() * 3);
    alert(vars[compVar]);
    input = Number(
      prompt("ВВедите значение\n 0 - камень\n 1 - Ножницы\n 2 - Бумага")
    );
    if (input !== null) {
      if (input === compVar) {
        alert("Ничья");
      } else if (
        (input === 0 && compVar === 1) ||
        (input === 1 && compVar === 2) ||
        (input === 2 && compVar === 0)
      ) {
        alert(vars[compVar]);
        alert("Пользователь победил");
      } else {
        alert(vars[compVar]);
        alert("Победил комп");
      }
    }
  } while (input !== null);
};


