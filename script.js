function adicionar(valor) {
  if (valor === "+" || valor === "-" || valor === "X" || valor === "÷") {
    const screen = document.getElementById("resultado").innerHTML.slice(-1);
    if (screen === "+" || screen === "-" || screen === "X" || screen === "÷") {
      alert(
        "Você não pode digitar dois operadores seguidos, digite um número."
      );
      let resultscreen = document
        .getElementById("resultado")
        .innerHTML.join(" ");
    }
  }
  let numero1 = document.getElementById("resultado").innerHTML;
  let resultado = (document.getElementById("resultado").innerHTML =
    numero1 + valor);
}

function deleteAll() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function op() {
  var op1 = document.getElementById("resultado").innerHTML;
  var expression = new String(op1);
  for (var i = 0; i < expression.length; i++) {
    switch (expression[i]) {
      case "+":
        var numeros = new String(expression.split("+"));
        n1 = numeros.substring(0, numeros.indexOf(","));
        n2 = numeros.substring(numeros.indexOf(",") + 1, numeros.lenght);
        var resultadoFinal = parseFloat(n1) + parseFloat(n2);
        alert(`${expression} = ${resultadoFinal}`);
        document.getElementById("resultado").innerHTML = resultadoFinal;
        break;
      case "-":
        var numeros = new String(expression.split("-"));
        n1 = numeros.substring(0, numeros.indexOf(","));
        n2 = numeros.substring(numeros.indexOf(",") + 1, numeros.lenght);
        var resultadoFinal = parseFloat(n1) - parseFloat(n2);
        alert(`${expression} = ${resultadoFinal}`);
        document.getElementById("resultado").innerHTML = resultadoFinal;
        break;
      case "X":
        var numeros = new String(expression.split("X"));
        n1 = numeros.substring(0, numeros.indexOf(","));
        n2 = numeros.substring(numeros.indexOf(",") + 1, numeros.lenght);
        var resultadoFinal = parseFloat(n1) * parseFloat(n2);
        alert(`${expression} = ${resultadoFinal}`);
        document.getElementById("resultado").innerHTML = resultadoFinal;
        break;
      case "÷":
        var numeros = new String(expression.split("÷"));
        n1 = numeros.substring(0, numeros.indexOf(","));
        n2 = numeros.substring(numeros.indexOf(",") + 1, numeros.lenght);
        var resultadoFinal = parseFloat(n1) / parseFloat(n2);
        alert(`${expression} = ${resultadoFinal}`);
        document.getElementById("resultado").innerHTML =
          resultadoFinal.toFixed(2);
        break;
    }
  }
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "." ||
    e.key === "X" ||
    e.key === "-" ||
    e.key === "+" ||
    e.key === "/"
  ) {
    adicionar(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    op();
  } else if (e.key === "Backspace") {
    back();
  } else if (e.key === "Escape") {
    deleteAll();
  }
});
