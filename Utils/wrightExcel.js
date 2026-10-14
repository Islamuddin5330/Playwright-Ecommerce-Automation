const Exceljs = require("exceljs");
const { worker } = require("node:cluster");

const path = require("path");

async function updateExcelResult(productName, result){

    
    const Workbook = new Exceljs.Workbook();
    // Inside updateExcelResult()
const filePath = path.join(
    __dirname,
    "getProductDataFromExcel.xlsx"
);
    await Workbook.xlsx.readFile(filePath);
    
    const sheet = Workbook.getWorksheet();
    sheet.eachRow((row, rownumber)=>{
        //skip the header row
        if(rownumber === 1){
            return
        }
        
        const excelProductName = row.getCell(3).value;
        
        if(excelProductName === productName){
            
            // Column 4 = Pass/Fail
            row.getCell(4).value = result;
            console.log(`Excel Updated : ${productName} => ${result}`)
        }
    });
    
    await Workbook.xlsx.writeFile("C:/Users/HP/PlayWright_Automation/PlayWright_E-commerce/Utils/getProductDataFromExcel.xlsx")
    
}

module.exports = updateExcelResult;