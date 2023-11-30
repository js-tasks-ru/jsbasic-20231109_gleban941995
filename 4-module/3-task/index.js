function highlight(table) {
      // Получаем все строки таблицы
    var rows = table.querySelectorAll('tbody tr');
  
    // Проходимся по каждой строке
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
  
      // Получаем данные ячеек в текущей строке
      var cells = row.getElementsByTagName('td');
  
      // Получаем значение атрибута data-available для ячейки Status
      var status = cells[3].getAttribute('data-available');
  
      // Добавляем класс available или unavailable в зависимости от значения атрибута
      if (status === 'true') {
        row.classList.add('available');
      } else if (status === 'false') {
        row.classList.add('unavailable');
      } else {
        row.setAttribute('hidden', true); // Если атрибута нет вообще
      }
  
      // Получаем значение ячейки Gender
      var gender = cells[2].textContent;
  
      // Добавляем класс male или female в зависимости от значения ячейки
      if (gender === 'm') {
        row.classList.add('male');
      } else if (gender === 'f') {
        row.classList.add('female');
      }
  
      // Получаем значение ячейки Age
      var age = parseInt(cells[1].textContent);
  
      // Добавляем inline-стиль "text-decoration: line-through", если значение ячейки меньше 18
      if (age < 18) {
        cells[1].setAttribute('style', 'text-decoration: line-through');
      }
    }
  }