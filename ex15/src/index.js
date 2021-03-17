function myDoWhile () {
    var myNumbers = ""; str = 0;
    do {
        str = str + 1;
        myNumbers = myNumbers + str + ", ";

    } while (str < 9);
    console.log(myNumbers);
}
console.log(myDoWhile());
module.exports= myDoWhile