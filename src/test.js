function fib(n) {
    var a, b;
    a = 0;
    b = 1;
    while (a < n ){
        //console.log('%d',a);
        process.stdout.write(a.toString(10)+' ');
        nextNumber = a + b;   
        a = b;
        b = nextNumber;  
        // one more comment     
    }
    console.log();
}


fib(50);