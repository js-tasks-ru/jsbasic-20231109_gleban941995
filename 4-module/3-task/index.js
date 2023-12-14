function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');

    const status = cells[3].getAttribute('data-available');
    if (status === 'true') {
      row.classList.add('available');
    } else if (status === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', true);
    }

    const gender = cells[2].textContent;
    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    const age = parseInt(cells[1].textContent);
    if (age < 18) {
      cells[1].setAttribute('style', 'text-decoration: line-through');
    }
  }
}