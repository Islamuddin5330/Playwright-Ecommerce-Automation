// const Exceljs = require("exceljs");
// const { worker } = require("node:cluster");

// const path = require("path");

// async function updateExcelResult(productName, result){

    
//     const Workbook = new Exceljs.Workbook();
//     // Inside updateExcelResult()
// const filePath = path.join(
//     __dirname,
//     "getProductDataFromExcel.xlsx"
// );
//     await Workbook.xlsx.readFile(filePath);
    
//     const sheet = Workbook.getWorksheet();
//     sheet.eachRow((row, rownumber)=>{
//         //skip the header row
//         if(rownumber === 1){
//             return
//         }
        
//         const excelProductName = row.getCell(3).value;
        
//         if(excelProductName === productName){
            
//             // Column 4 = Pass/Fail
//             row.getCell(4).value = result;
//             console.log(`Excel Updated : ${productName} => ${result}`)
//         }
//     });
    
//     await Workbook.xlsx.writeFile("C:/Users/HP/PlayWright_Automation/PlayWright_E-commerce/Utils/getProductDataFromExcel.xlsx")
    
// }

// module.exports = updateExcelResult;



const ExcelJS = require("exceljs");
const path = require("path");

async function updateExcelResult(productName, result) {
    const workbook = new ExcelJS.Workbook();

    const filePath = path.join(
        __dirname,
        "getProductDataFromExcel.xlsx"
    );

    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet("Sheet1");

    if (!sheet) {
        throw new Error("Sheet1 not found in Excel workbook");
    }

    let productUpdated = false;

    sheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;

        const cellValue = row.getCell(3).value;

        const excelProductName =
            typeof cellValue === "object" && cellValue !== null
                ? cellValue.text
                : cellValue;

        if (
            String(excelProductName ?? "").trim() ===
            String(productName).trim()
        ) {
            row.getCell(4).value = result;
            productUpdated = true;

            console.log(
                `Excel Updated: ${productName} => ${result}`
            );
        }
    });

    if (!productUpdated) {
        console.warn(`Product not found in Excel: ${productName}`);
    }

    await workbook.xlsx.writeFile(filePath);
}

module.exports = updateExcelResult;
