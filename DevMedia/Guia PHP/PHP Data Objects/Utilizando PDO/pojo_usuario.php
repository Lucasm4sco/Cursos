<?php

// POJO será um 'espelho' da tabela do banco em um objeto;

class PojoUsuario {

    private $cod_usuario;
    private $nome;
    private $email;
    private $senha;
    private $ativo;
    private $perfil;

    public function getCod_usuario()
    {
        return $this->cod_usuario;
    }

    public function setCod_usuario($cod_usuario)
    {
        $this->cod_usuario = $cod_usuario;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getSenha()
    {
        return $this->senha;
    }

    public function setSenha($senha)
    {
        $this->senha = $senha;
    }

    public function getAtivo()
    {
        return $this->ativo;
    }

    public function setAtivo($ativo)
    {
        $this->ativo = $ativo;
    }

    public function getPerfil()
    {
        return $this->perfil;
    }

    public function setPerfil($perfil)
    {
        $this->perfil = $perfil;
    }
    
}