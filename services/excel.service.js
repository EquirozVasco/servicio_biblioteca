const ExcelJS = require("exceljs");

const excel = async (headers, rows, nameSheet) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(nameSheet);
  //sheet.columns = headers;
  //sheet.addRows(rows).addPageBreak;

  let t = sheet.addTable({
    name: 'MyTable',
    ref: 'D2',
    headerRow: true,
    totalsRow: true,
    style: {
      theme: 'TableStyleMedium5',
      showRowStripes: true,
    },
    columns: headers,
    rows: rows,
  });

  return await workbook.xlsx.writeBuffer();
};

module.exports = excel;