<?php

session_start();

require('./classe.php');

if(isset($_SESSION['obj_serializado'])){

    $usuario = unserialize($_SESSION['obj_serializado']);

    echo "<p>O nome passado foi: ".$usuario->getName()."</p>";
    echo "<p>O email passado foi: ".$usuario->getEmail()."</p>";
}
else {

    echo "<p>Não há um objeto para deserializar</p>";
}

unset($_SESSION['obj_serializado']);

?>

<head>
    <title>deserializar</title>
    <style>
        * {
            margin: 10px;
        }
    </style>
</head>

<button style="margin-top: 20px" onclick="window.location.replace('index.php', 'deserializar.php')">Voltar</button>