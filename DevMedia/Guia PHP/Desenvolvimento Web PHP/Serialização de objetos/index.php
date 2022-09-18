<?php

require('./classe.php');

session_start();

if(isset($_GET['name']) and isset($_GET['email']))
{
    $usuario = new User();

    $usuario->setName($_GET['name']);
    $usuario->setEmail($_GET['email']);

    $_SESSION['obj_serializado'] = serialize($usuario);
    header('location: deserializar.php');
}

?>
    
<form action="./index.php" style="padding: 20px;">

    <label for="name" style="margin: 10px">NOME: </label>
    <input type="text" style="margin: 10px" id="name" name="name"> <br>

    <label for="email" style="margin: 10px">EMAIL: </label>
    <input type="text" name="email" id="email" style="margin: 10px"><br>

    <button style="margin: 20px 50px"> Serializar Objeto </button>
</form>