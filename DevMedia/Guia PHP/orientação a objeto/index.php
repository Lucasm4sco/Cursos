<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeira classe PHP</title>
</head>
<body>

    <?php 

        include_once("./classes_PHP/Expiravel.php");
        include_once("./classes_PHP/Produto.php");
        include_once("./classes_PHP/Assinatura.php");

        $Assinatura = new Assinatura();

        $Assinatura->setCodigo(123);
        $Assinatura->setNome("Assinatura MVP");
        $Assinatura->setPreco(69.99);
        $Assinatura->setDataExpiracao("2023-08-20");

        $diasRestantes = $Assinatura->getTempoRestante()->days;

        if ($Assinatura->getDataExpiracao() >= new DateTime() ){
            
            echo "Dia restantes da assinatura: $diasRestantes dias";
        } else {
            echo "Sua assinatura expirou a $diasRestantes dias";
        }
    ?>
    
</body>
</html>