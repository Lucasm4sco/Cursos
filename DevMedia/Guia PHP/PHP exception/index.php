<?php

use ItemVenda\ItemVenda;
use Venda\Venda;
use VendaException\VendaException;

require_once "./classes_PHP/VendaException.php";
require_once "./classes_PHP/Venda.php";
require_once "./classes_PHP/ItemVenda.php";


try {

    $camisa = new ItemVenda();
    $camisa->setDescricao("Camisa Polo");
    $camisa->setPreco(12.0);

    $bone = new ItemVenda();
    $bone->setDescricao("Boné infantil");
    $bone->setPreco(11.0);

    $Venda = new Venda();

    $Venda->adicionar(null); // RETORNA UM ERRO
    $Venda->adicionar('shorts'); // RETORNA OUTRO ERRO
    $Venda->adicionar($camisa);
    $Venda->adicionar($bone);

    print "Total da venda: " . $Venda->getTotal();

} catch (VendaException $error) {

    echo "Ocorreu um erro: " . $error->getMessage(). " - Código: ". $error->getCodigo();
} catch (\LogicException $error){

    echo $error->getMessage();
} finally {

    echo "\nProcessamento encerrado!";
}


