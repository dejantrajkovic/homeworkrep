function loopFunc (number) {
    for (let index = 0; index <= number; index++) {
        if (index % 2 === 0) {
            console.log(index + "\n ")
        } else  {
            console.log(index + " ");
        }
    }
}

loopFunc(20);