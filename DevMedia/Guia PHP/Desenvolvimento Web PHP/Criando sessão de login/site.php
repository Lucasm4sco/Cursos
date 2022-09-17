<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    
<?php 

session_start();

if((!isset($_SESSION['login']) == true) and (!isset($_SESSION['senha']) == true)){
    header('location:index.php');
} 

$logado = $_SESSION['login'];

?>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SISTEMA WEB</title>
</head>

<style>

    body {
        text-align: center;
        background-color: gray;
        color: white;
        padding-top: 100px;
    }

    h1 {
        font-size: 50px;
        text-transform: uppercase;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>

<body>

    <h1>Seja bem-vindo(a) <?= $logado ?></h1>

</body>
</html>