<?php

include_once __DIR__."/app/autoload.php";

define("MEGA_EM_BYTES", 1048576);

use io\FileWriter;
use util\Regex;
use http\Request;
use http\Response;

$response = new Response();

try {
    //validação das expressoes regulares :
    Regex::validate(Request::get('email'), Regex::EMAIL, "Falha na validação do email");
    Regex::validate(Request::get('senha'), Regex::PASSWORD, "Falha na validação da senha");

    if(Request::get('senha') !== Request::get('confirmar-senha'))
    {
        throw new Exception("Falha na validação da senha. As senha devem ser iguais.");
    }

    Regex::validate(Request::get('nome'), Regex::FIRSTNAME, "Falha na validação do nome");
    Regex::validate(Request::get('sobrenome'), Regex::LASTNAME, "Falha na validação do sobrenome");
    Regex::validate(Request::get('login'), Regex::NICKNAME, "Falha na validação do login");

    switch(Request::get('login'))
    {
        case 'Lucas':
            throw new Exception('O login "Lucas" já existe');
        case 'Devmedia':
            throw new Exception('O login "Devmedia" já existe');
    }

    //validações do arquivo :

    $file = Request::file('file');

    if($file->isValid())
    {
        Regex::validate($file->getType(), Regex::TYPE_IMAGE, "O arquivo não é uma imagem no formato JPG, GIF ou PNG");

        $max_file_size = MEGA_EM_BYTES / 3;

        if($file->getSize() >= $max_file_size)
        {
            throw new Exception('A imagem não pode ser maior que '.number_format(($max_file_size / 1024), 2). 'KB');
        }

        $file->rename('upload');
        $writer = new FileWriter();
        $writer->save($file, __DIR__.'/upload');
    }
    else if($file->getError() !== UPLOAD_ERR_NO_FILE)
    {
        throw new Exception("Erro no uplado do arquivo. Código do erro #{$file->getError()}");
    }

    $response->setStatus(Response::STATUS_200, "Dados Validados com sucesso.");

} catch (Exception $error) {
    $response->setStatus(Response::STATUS_500, $error->getMessage());
} catch (Error $error) {
    $response->setStatus(Response::STATUS_500, "Ocorreu um erro inesperado.");
}

$response->resolve();

exit;
