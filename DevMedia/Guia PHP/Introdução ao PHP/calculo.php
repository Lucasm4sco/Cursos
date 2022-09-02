<?php

$mensagem = '';

if ($_POST){
    $distancia = $_POST['distancia'];
    $autonomia = $_POST['autonomia'];

    if (is_numeric($distancia) && is_numeric($autonomia)){

        if ($distancia > 0 && $autonomia > 0){

            $valorGasolina = 5.25;
            $valorAlcool = 2.8;
            $valorDiesel = 6.9;

            $consumoGasolina = ( $distancia / $autonomia ) * $valorGasolina;
            $consumoGasolina = number_format($consumoGasolina, 2, ',', '.');

            $consumoAlcool = ( $distancia / $autonomia ) * $valorAlcool;
            $consumoAlcool = number_format($consumoAlcool, 2, ',', '.');

            $consumoDiesel = ( $distancia / $autonomia ) * $valorDiesel;
            $consumoDiesel = number_format($consumoDiesel, 2, ',', '.');


            $mensagem .= "<div class='sucesso'><p>O valor total de gastos será: </p>";
            $mensagem .= "<ul>";

            $mensagem .= "<li><b>Consumo em gasolina: R$</b> ".$consumoGasolina."</li>";
            $mensagem .= "<li><b>Consumo em álcool: R$ </b>".$consumoAlcool."</li>";
            $mensagem .= "<li><b>Consumo em Díesel: R$ </b>".$consumoDiesel."</li>";

            $mensagem .= "</ul></div>";

        } else {
            $mensagem .= "<div class='erro'> <p> Os valores passados devem ser maiores que zero! </p></div>";
        }
    
    }  else {
        $mensagem .= "<div class='erro'><p> Valores recebidos não são númericos </p></div>";
    }

} else {
    $mensagem .= "<div class='erro'> <p>Erro ao receber dados do usuário</p> </div>";
}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculo do consumo do combustível</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <div class="painel resultado">
            <h2> Resultado </h2>
            <div class="conteudo-painel">
               <?php echo $mensagem ?> 
               
            </div>
            <a class="botao" href="index.php">Voltar </a>
            
        </div>
    </main>
</body>
</html>