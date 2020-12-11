function rate() {
    var num01 = Number(document.getElementById("num1").value)
    var num02 = Number(document.getElementById("num2").value)
    var act = document.getElementById("opera").value.toLowerCase()
    var show

    if (act == "+" || act == "plus") {
        show = num01 + num02
    }
    else if (act == "-" || act == "sub") {
        show = num01 - num02
    }
    else if (act == "/" || act == "divide") {
        show = num01 / num02
    }
    else if (act == "*" || act == "multiply") {
        show = num01 * num02
    }
    else if (act == "%" || act == "reminder") {
        show = num01 % num02
    }
    else if (act == "^" || act == "power") {
        show = num01 ** num02
    }
    else if (act == "root") {
        var nu = 1 / num02
        show = num01 ** nu
    }
    document.getElementById("screen").innerHTML = show
}