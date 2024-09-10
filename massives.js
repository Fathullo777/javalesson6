// Создаем пустой массив
let array = [];

// Бесконечный цикл для обработки команд
while (true) {
  // Ввод команды от пользователя
  let command = prompt("Введите команду (add, delete, stop):");

  // Прекращаем выполнение цикла, если команда 'stop'
  if (command === "stop") {
    break;
  }

  // Разделяем команду и аргументы
  let [action, value] = command.split(",").map((item) => item.trim());

  if (action === "add") {
    // Добавляем элемент в массив
    array.push(value);
    console.log(`Добавлено: ${value}`);
  } else if (action === "del") {
    // Удаляем элемент из массива
    let index = array.indexOf(value);
    if (index !== -1) {
      array.splice(index, 1);
      console.log(`Удалено: ${value}`);
    } else {
      console.log(`Элемент ${value} не найден`);
    }
  } else {
    console.log("Неизвестная команда");
  }
}

// Выводим конечный результат массива
console.log("Конечный результат массива:", array);
