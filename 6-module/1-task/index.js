/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
  this.rows = rows;
    this.elem = document.createElement('table');
    this.renderTable();
  }

  renderTable() {
    const headerRow = document.createElement('tr');
    for (let key in this.rows[0]) {
      const headerCell = document.createElement('th');
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    }
    const deleteHeaderCell = document.createElement('th');
    deleteHeaderCell.textContent = 'Delete';
    headerRow.appendChild(deleteHeaderCell);

    this.elem.appendChild(headerRow);

    this.rows.forEach((rowData) => {
      const row = document.createElement('tr');
      for (let key in rowData) {
        const cell = document.createElement('td');
        cell.textContent = rowData[key];
        row.appendChild(cell);
      }

      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';

      deleteButton.addEventListener('click', () => {
        this.deleteRow(row);
      });

      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      this.elem.appendChild(row);
    });
  }

  deleteRow(row) {
    row.remove();
  }
}

const rows = [
  {
    name: 'Вася',
    age: 25,
    salary: 1000,
    city: 'Самара',
  },
  {
    name: 'Петя',
    age: 30,
    salary: 1500,
    city: 'Москва',
  },
];

const userTable = new UserTable(rows);
document.body.appendChild(userTable.elem);