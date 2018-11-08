//Uppgift 2
const btn = document.querySelector('#btn');
const pw = document.querySelector('.pw');

function generatePw(){
    //10-12 digits
    //uppercase, lowercase, digits, symbols like exclaimation mark

    // const randomStr = Math.random().toString(36).slice(-11);
    // const randomStr2 = Math.random().toString(36).slice(-1);
    // console.log(randomStr + randomStr2);

    const ranStr = Array(12)
        .fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$')
        .map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * (x.length + 1))])
        .join('');
    console.log(ranStr);

    // var array = new Uint32Array(10);
    // window.crypto.getRandomValues(array);

    // for (var i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }

    pw.innerHTML = ranStr;
}

btn.addEventListener('click', generatePw);