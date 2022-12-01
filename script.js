const form = document.querySelector('form');
const info = document.getElementById("user-info");

//creating new values evry time btton is pushed
const testing = () => {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    // String to Number converting(since only Integeres are used, Number() is used)
    let sum = Number(num1) + Number(num2);
    let result = romanize(sum);
    const message = `Name: ${firstName},  Surname: ${lastName}.  Number1: ${num1},  Number2: ${num2}. Sum=${result}`;
    console.log(message);
    info.innerHTML = message;
}

//Roman numbers converting
function romanize(num) {
    var lookup = { X: 10, IX: 9, VIII: 8, VII: 7, VI: 6, V: 5, IV: 4, III: 3, II: 2, I: 1 },
        roman = '',
        i;
    //Object enumerating
    for (i in lookup) {
        // compare num with object's property, if less exit while and proceed in for loop
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}
form.addEventListener('submit', (e) => {
    e.preventDefault(); //to prevent auto submit by refresh
    //function call
    testing();
})