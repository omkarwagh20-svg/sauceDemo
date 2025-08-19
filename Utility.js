const ExcelJS = require('exceljs');

class Utility {
    async UtilityTestData(Sheetname, Rownumber, Cellnumber) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile("C:\\Users\\omkar wagh\\OneDrive\\Desktop\\omkar.xlsx");

        const worksheet = workbook.getWorksheet(Sheetname);
        if (!worksheet) {
            throw new Error(`Sheet "${Sheetname}" not found in Excel file`);
        }

        const row = worksheet.getRow(Rownumber);
        if (!row) {
            throw new Error(`Row ${Rownumber} not found`);
        }

        const cell = row.getCell(Cellnumber);
        return cell.value;
    }
}

module.exports = Utility;
