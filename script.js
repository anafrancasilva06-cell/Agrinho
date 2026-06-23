function calcular(){

    let area = Number(document.getElementById("area").value);
    let litros = Number(document.getElementById("litros").value);

    if(area <= 0 || litros <= 0){
        document.getElementById("resultado").innerHTML =
        "Digite valores válidos.";
        return;
    }

    let consumo = area * litros;

    let economia = consumo * 0.20;

    document.getElementById("resultado").innerHTML =
    `Consumo diário: ${consumo.toLocaleString()} litros.<br>
    Economia possível com técnicas sustentáveis: ${economia.toLocaleString()} litros/dia.`;
}