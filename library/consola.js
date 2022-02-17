function timeFormat(date, format){

    format = format.replace(/hh/, ('00' + date.getHours()).slice(-2));
    format = format.replace(/mm/, ('00' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/, ('00' + date.getSeconds()).slice(-2));

    return format;
}

const consola = {
    log : (msg, color) => {
        let displayMsg = '';
        const date = new Date();
        displayMsg += timeFormat(date, '[hh:mm:ss] ');

        if(color){
            displayMsg += color;
        }

        displayMsg += msg;

        if (color) {
            displayMsg += '\x1b[0m';
        }

        console.log(displayMsg);
    }
}

module.exports = consola;