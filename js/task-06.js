let input;
let total = 0;

for (let i = 1; i > 0; i++) {
  input = prompt('Введите любое число');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  total += Number(input);
}
