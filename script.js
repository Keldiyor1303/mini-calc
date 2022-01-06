let result = document.getElementById("Javob");

document.getElementById("Submit").addEventListener("click", function (event) {
    event.preventDefault()

    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let operator = document.getElementById("amallar").value;
    let natija;
    let son1 = Number(n1.value);
    let son2 = Number(n2.value);

    switch (operator) {
        case "+":
            natija = Number(son1) + Number(son2)
            break

        case "-":
            natija = Number(son1) - Number(son2)
            break

        case "*":
            natija = Number(son1) * Number(son2)
            break

        case "/":
            natija = Number(son1) / Number(son2)
            break
    }

    result.value = natija;
});