<?php

class GeraLog {

    static $instance;
    private $file = 'logsDeErros.txt';

    private function __construct()
    {
        
    }

    public static function getInstance()
    {
        if(!isset(self::$instance)){
            self::$instance = new GeraLog;
        }

        return self::$instance;
    }

    public function inserirLog($mensagem){
            
        $data = date('Y-m-d H:i:s');
        $msg = sprintf( "[%s]: %s%s", $data, $mensagem, PHP_EOL );
        
        file_put_contents($this->file, $msg, FILE_APPEND);
    }
}
