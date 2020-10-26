const fs = require("fs");
const path = require("path");

const filename = process.argv[2];
const extension = "." + filename.split('.')[1];

function parseENV(data){
    let regex1 = /\S+=\S+/gm;
            data = data.match(regex1).join('",\n"');
            let regex2 = /=/gm;
            data = data.replace(regex2, '" : "');
            let regex3 = /^|$/g;
            data = data.replace(regex3, '"');
            data = "{\n" + data + "\n}";
            fs.writeFile("env.json", data, (err) => {
                if (err) throw err;
                console.log("The file was succesfully saved!");
            }); 
}

function parseINI(data){
    let _regex1 = /\S+=\S+/gm;
            data = data.match(_regex1).join('",\n"');
            let _regex2 = /=/gm;
            data = data.replace(_regex2, '" : "');
            let _regex3 = /^|$/g;
            data = data.replace(_regex3, '"');
            data = "{\n" + data + "\n}";
            fs.writeFile("ini.json", data, (err) => {
                if (err) throw err;
                console.log("The file was succesfully saved!");
            }); 
}

fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
        return console.log(error)
    }

    switch(extension){
        case ".env":
            parseENV(data);
        break;
        case ".ini":
            parseINI(data);
        break;
    }




// console.log(data)
});