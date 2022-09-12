<?php

namespace Venda;

use VendaException\VendaException;

class Venda {

    private $itens = [];

    public function adicionar($itemVenda)
    {
        if($itemVenda == null){

            throw new VendaException(1500, 'Item não pode ser nulo!');
        }

        if( !is_object($itemVenda) || get_class($itemVenda) !== 'ItemVenda\ItemVenda'){

            throw new \InvalidArgumentException('Não é possível adicionar itens inexistentes!');
        }

        array_push($this->itens, $itemVenda);
    }

    public function getTotal()
    {
        $total = 0;

        if(!count($this->itens)){
            throw new \LogicException('Não foi realizada nenhuma venda!');
        }

        foreach($this->itens as $itemVenda){
            $total += $itemVenda->getPreco();
        }

        return $total;
    }
}