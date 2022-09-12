<?php

namespace ItemVenda;

class ItemVenda {

    private $preco;
    private $descricao;

    public function setPreco($preco)
    {
        $this->preco = $preco;
    }    

    public function getPreco()
    {
        return $this->preco;
    }

    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    public function getDescricao() 
    {
        return $this->descricao;
    }
}