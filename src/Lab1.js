let greeter = (myArray, counter) => {
    let greetText = 'Hello ';

    for (let name of myArray) {
        console.log(greetText + name);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);