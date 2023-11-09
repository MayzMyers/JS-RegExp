function task1() {
  function isURL(str) {
    let re =
      /^((http|https):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i;
    let result = re.test(str);
    return result;
  }
  let str = prompt("Введите строку");
  if (isURL(str)) alert("Строка является URL адресом");
  else alert("Строка не является URL адресом");
}

function task2() {
  function validateVariable(variable) {
    let re = /^([a-zA-Z_$][a-zA-Z\d_$]*)$/;
    let result = re.test(variable);
    return result;
  }
  let variable = prompt("Введите имя переменной");
  if (validateVariable(variable)) alert("Корректное имя переменной");
  else alert("Некорректное имя переменной");
}

function task3() {
  function isLettersNumbers(str) {
    let re = /^([а-яa-zA-ZА-Я0-9]*)$/;
    let result = re.test(str);
    return result;
  }
  let str = prompt("Введите строку");
  if (isLettersNumbers(str)) alert("Строка состоит только из букв и цифр");
  else alert("Строка состоит не только из букв и цифр");
}

function task4() {
  function isLetters(str) {
    let re = /^[а-яa-zA-ZА-Я]{10,}$/;
    let result = re.test(str);
    return result;
  }
  let str = prompt("Введите строку");
  if (isLetters(str))
    alert("Строка состоит только из букв ее длина не менее 10 символов");
  else alert("Строка состоит не только из букв или ее длина менее 10 символов");
}

function task5() {
  function isLetters(str) {
    let reLetter = /[A-Z]/gi;
    let reNumber = /[0-9]/g;
    let letter = str.match(reLetter).length;
    let number = str.match(reNumber).length;
    alert(`В строке ${letter} букв и ${number} цифр`);
  }
  let str = prompt("Введите строку");
  isLetters(str);
}

