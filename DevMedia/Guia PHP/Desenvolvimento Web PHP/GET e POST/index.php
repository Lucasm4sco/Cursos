<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Métodos post e get com php</title>
</head>
<body style="background-color: lightblue;">
    

    <form action="./index.php" method="GET">

        <fieldset style="background-color: white;">
            <legend><h2>Método GET</h2></legend>
            <input type="text" name="texto" placeholder="texto">
            <button type="submit">REALIZAR GET</button>

            <p>
                <?php
                    if(isset($_GET["texto"])){
                        echo "Você pesquisou pelo texto: ".$_GET["texto"];
                    }
                ?>
            </p>
        </fieldset>
    </form>

    <form action="./index.php" method="POST">

        <fieldset style="background-color: white;">
            <legend><h2>Método POST</h2></legend>
            <input type="email" name="email" placeholder="email">
            <button type="submit">REALIZAR POST</button>

            <p>
                <?php
                    if(isset($_POST["email"])){
                        echo "Você enviou o email: ".$_POST["email"];
                    }
                ?>
            </p>
        </fieldset>
    </form>


</body>
</html>