function writeSymbol(symbol) {
    let see = document.getElementsByClassName('see')[0];
    let store = see.innerHTML;
    let lastIndex = store.length - 1;
    if (store.trim() == '...' && symbol >= '0' && symbol <= '9') {
        see.innerHTML = symbol;
        //summary(symbol);
    } else if (store[lastIndex] >= '0' && store[lastIndex] <= '9') {
       // if (newArr[newArr.length - 1])
        see.innerHTML += symbol;
        //summary(symbol);
    } else if (symbol >= '0' && symbol <= '9') {
        see.innerHTML += symbol;
        //summary(symbol);
    } 
}

function writeEnter() {
    let seel = document.getElementsByClassName('see')[0];
    let store = seel.innerHTML;
    let newArr = all(store);
    //alert(store);
    //alert(newArr);
    //newArr.push(count);
    let count = newArr[0];
    let i = 1;
    if (store[store.length - 1] >= '0' && store[store.length - 1] <= 9) {
    while (newArr.includes('*') || newArr.includes('/')) {
        
        if (newArr[i] === '*') {
            count = newArr[i - 1] * newArr[i + 1]; 
            newArr.splice(i - 1, 3, count); 
            i = 0;
        } else if (newArr[i] === '/') {
            count = newArr[i - 1] / newArr[i + 1]; 
            newArr.splice(i - 1, 3, count); 
            i = 0;
        }
        i++; 
    }
    i = 0;
    while (newArr.includes('+') || newArr.includes('-')) {
        if (newArr[i] === '+') {
            count = newArr[i - 1] + newArr[i + 1];
            newArr.splice(i - 1, 3, count);
            i = 0;
        } else if (newArr[i] === '-') {
            count = newArr[i - 1] - newArr[i + 1];
            newArr.splice(i - 1, 3, count);
            i = 0;
        }
        i++;
    }
    let see = document.getElementsByClassName('see')[0];
    see.innerHTML = newArr[0];
}
}


/*
function allresult(str) {
    for (let i = 0; i < str.length; i++) {
        summary(str[i]);
    }
}
*/
/*
let sum = '';
let count = 0;
let point = 0;
let newArr = [];
*/
function all(str) {
    let sum = '';
    let count = 0;
    let point = 0;
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        summary(str[i]);
    }

    function summary(item) {
        if (item >= '0' && item <= '9') {
            if (count == 0) {
                if (point == 1) {
                    count = Number(item) / 10;
                    point = 0;
                } else count = Number(item);
            } else if (typeof count === 'number') {
                if (point == 1) {
                    count = (count * 10 + Number(item)) / 10;
                    point = 0;
                } else count = count * 10 + Number(item);
            }
        } else if (item === '.') {
            point = 1;
        } else {
            newArr.push(count);
            newArr.push(item);
            count = 0;
        }
    }

newArr.push(count);
return newArr;
}
/*
function summary(item) {
    if (item >= '0' && item <= '9') {
        if (count == 0) {
            if (point == 1) {
                count = Number(item) / 10;
                point = 0;
            } else count = Number(item);
        } else if (typeof count === 'number') {
            if (point == 1) {
                count = (count * 10 + Number(item)) / 10;
                point = 0;
            } else count = count * 10 + Number(item);
        }
    } else if (item === '.') {
        point = 1;
    } else {
        newArr.push(count);
        newArr.push(item);
        count = 0;
    }
}
*/
function writeDel() {
    let see = document.getElementsByClassName('see')[0];
    let store = see.innerHTML;
    if (store.length == 1 || store === '...') {
        see.innerHTML = '...';
    } else {
        see.innerHTML = store.slice(0, store.length - 1);
    }
}
/*
function width() {
    if (document.documentElement.clientWidth <= 319) {//уменьшать пэдинги 

    }
}*/
