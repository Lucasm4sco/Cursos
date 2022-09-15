<?php

require_once "./dao.php";
require_once "./pojo_usuario.php";

$usuario = new PojoUsuario();

$usuario->setNome('Lucas');
$usuario->setEmail('lucas@example.com');
$usuario->setSenha('1234');
$usuario->setCod_usuario('3200');
$usuario->setAtivo(1);
$usuario->setPerfil($usuario);

DaoUsuario::getInstance()->Inserir($usuario);

print_r(DaoUsuario::getInstance()->buscarPorCOD($usuario->getCod_usuario()));