<?php

namespace util;

class Regex {

    const FIRSTNAME = "/^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$/";
    const LASTNAME = "/^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$/";
    const NICKNAME = "/^\w{4,}$/";
    const EMAIL = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";
    const PASSWORD = "/^\w{6,}$/";
    const TYPE_IMAGE = "/image*/";

    public static function validate($data, $pattern, $message = '')
    {
        // preg_match realiza a comparação de expressões regulares
        if(!preg_match($pattern, $data))
        {
            throw new \Exception($message?: "Falha na validação do campo {$data}.");
        }
    }
}