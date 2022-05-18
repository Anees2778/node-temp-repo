const { readFile, writeFile } = require('fs');
readFile('./content/abc.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
    }
    const first = res;
    readFile('./content/subFolder/test.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
        }
        const second = res;
        writeFile('./content/result.txt', `here is the result : ${first},${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(res);
        })
    });

});





