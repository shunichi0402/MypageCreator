function timeFormat(date, format){

    format = format.replace(/hh/, ('00' + date.getHours()).slice(-2));
    format = format.replace(/mm/, ('00' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/, ('00' + date.getSeconds()).slice(-2));

    return format;
}

const consola = {
    log : (msg, color, background) => {
        let displayMsg = '';
        const date = new Date();
        displayMsg += timeFormat(date, '[hh:mm:ss] ');

        if(color){
            displayMsg += color;
        }

        if (background){
            displayMsg += background;
        }

        displayMsg += msg;

        if (color) {
            displayMsg += '\x1b[0m';
        }

        if (background){
            displayMsg += '\x1b[0m';
        }

        console.log(displayMsg);
    },

    color : {
        black: '\u001b[30m',
        red: '\u001b[31m',
        green: '\u001b[32m',
        yellow: '\u001b[33m',
        blue: '\u001b[34m',
        magenta: '\u001b[35m',
        cyan: '\u001b[36m',
        white: '\u001b[37m'
    },

    background: {
        black: '\u001b[40m',
        red: '\u001b[41m',
        green: '\u001b[42m',
        yellow: '\u001b[43m',
        blue: '\u001b[44m',
        magenta: '\u001b[45m',
        cyan: '\u001b[46m',
        white: '\u001b[47m'
    },
    
    success : function (msg){
        this.log(msg, this.color.green);
    },

    error: function (msg){
        this.log(msg, this.color.white, this.background.red);
    }
}

module.exports = consola;