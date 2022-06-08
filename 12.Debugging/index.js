const fiboList = (num) => {
    let list = [1];
    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= num; i++) {
        c = a + b;
        list = [...list, c];
        a = b;
        b = c;
    }   

    return list;
}

console.log(fiboList(22));