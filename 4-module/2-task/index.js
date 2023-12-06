function makeDiagonalRed(table) {
  const rows = table.rows;
  const numRows = rows.length;

  for (let i = 0; i < numRows; i++) {
    const row = rows[i];
    const cells = row.cells;
    const numCells = cells.length;

    if (i < numCells) {
      const cell = cells[i];
      cell.style.backgroundColor = 'red';
    }
  }
}

