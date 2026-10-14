const Exceljs = require("exceljs")

const path = require("path");

async function excelTest() {
    const Workbook = new Exceljs.Workbook();
    //if we wanted to run from github this below line we need to add
    const filePath = path.join(
        __dirname,
        "getProductDataFromExcel.xlsx"
    );

    // await Workbook.xlsx.readFile("C:/Users/HP/PlayWright_Automation/PlayWright_E-commerce/Utils/getProductDataFromExcel.xlsx");
    await Workbook.xlsx.readFile(filePath);
    const sheet = Workbook.getWorksheet("Sheet1");

    // sheet.eachRow((row, rowNumber) => {
    //     console.log("Row Number", rowNumber)
    //     row.eachCell((cell, cellNumber) => {
    //         console.log("Cell Number", cellNumber);
    //     })
    // });

    const excelData = [];

    sheet.eachRow((row, rowNumber)=>{
         // Skip Excel header
        if(rowNumber === 1){
            return;
        };

        //now from here it will start from second row
        const usernameCell = row.getCell(1).value;
        const password = row.getCell(2).value;
        const productName = row.getCell(3).value;
        const result = row.getCell(4).value;

        const username = typeof usernameCell === "object" ? usernameCell.text : usernameCell;

        console.log("UserName: ", username)
        console.log("Password: ", password)
        console.log("ProductName: ", productName)
        console.log("Result: ", result)

        //Put the rows into an array
        excelData.push({
            username,
            password,
            productName,
            result
        });

    });

    console.log(excelData);

    return excelData;

};

// excelTest();

//export the function:
module.exports = excelTest;