function foo() {
    if(true) {
        var x = 5;
        let y = 10;
    }
    console.log(x); // will print 5 - var is function-scoped
}

foo();
