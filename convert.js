const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

const convertFile = (inputFile = 'customer-data.csv') => {
    outputFile = "";
    // csv > json or json > csv
    if (path.parse(inputFile).ext == ".csv") {
        outputFile = path.parse(inputFile).name + '.json';
    } else {
        outputFile = path.parse(inputFile).name + '.csv';
    }

    console.log('Convert file', inputFile, 'to', outputFile);

    csvtojson()
        .fromFile(inputFile)
        .then((jsonObj) => {
            fs.writeFileSync(path.join(__dirname, outputFile), JSON.stringify(jsonObj));
        })
}

convertFile(process.argv[2]);
