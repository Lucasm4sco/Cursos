<?php

session_start();

$login = $_POST['login'];
$senha = $_POST['password'];

$conexao = mysqli_connect (
    "localhost", 
    "root", 
    "",
    "server",
    3306) or die ("Sem conexão com o servidor");


$mysql = $conexao->prepare("SELECT * FROM usuario WHERE nome = ? AND senha = ?");

$mysql->bind_param("ss", $login, $senha);

$mysql->execute();

$mysql->bind_result($id, $name, $password);

$mysql->fetch();

if(isset($id))
{
    $_SESSION['login'] = $login;
    $_SESSION['senha'] = $senha;
    header('location:site.php');
} else
{
    unset ($_SESSION['login']);
    unset($_SESSION['senha']);
    header('location:index.php');
    
}
