<?php

// A classe DAO será responsável por realizar as consultas, inserções, deleções e edições no banco, retornando POJOs se necessários para a camada de controle. Usaremos um padrão de projeto chamado Singleton que faz com que o objeto seja criado apenas uma vez na memória.

require_once "./admin/conexao.php";
require_once "./admin/geralog.php";
require_once "./pojo_usuario.php";

class DaoUsuario {

    public static $instance;

    private function __construct()
    {
        //
    }

    public static function getInstance()
    {
        if(!isset(self::$instance)) 
            self::$instance = new DaoUsuario;

        return self::$instance;
    }

    public function Inserir(PojoUsuario $usuario)
    {
        try {

            $sql = " INSERT INTO 
            usuario ( nome, email, senha, ativo, cod_usuario )
            VALUES (:nome, :email, :senha, :ativo, :cod_usuario) ";

            $p_sql = Conexao::getInstance()->prepare($sql);

            $p_sql->bindValue(":nome", $usuario->getNome());
            $p_sql->bindValue(":email", $usuario->getEmail());
            $p_sql->bindValue(":senha", $usuario->getSenha());
            $p_sql->bindValue(":ativo", $usuario->getAtivo());
            $p_sql->bindValue(":cod_usuario", $usuario->getPerfil()->getCod_Usuario());

            return $p_sql->execute();

        } catch(Exception $error) {

            print "Ocorreu um erro ao tentar executar esta ação, foi gerado um LOG do mesmo, tente novamente mais tarde. ";
            GeraLog::getInstance()->inserirLog("Erro: Código: ". $error->getCode() . " Mensagem: ". $error->getMessage());
        }
    }

    public function Editar(PojoUsuario $usuario)
    {
        try {

            $sql = "UPDATE usuario SET nome = :nome,
            email = :email, senha = :senha, ativo :ativo,
            cod_usuario = :cod_usuario WHERE cod_usuario = :cod_usuario";

            $p_sql = Conexao::getInstance()->prepare($sql);

            $p_sql->bindValue(":nome", $usuario->getNome());
            $p_sql->bindValue(":email", $usuario->getEmail());
            $p_sql->bindValue(":senha", $usuario->getSenha());
            $p_sql->bindValue(":ativo", $usuario->getAtivo());
            $p_sql->bindValue(":cod_usuario", $usuario->getPerfil()->getCod_usuario());

            return $p_sql->execute();

        } catch(Exception $error) {
            
            print "Ocorreu um erro ao tentar executar esta ação, foi gerado um LOG do mesmo, tente novamente mais tarde. ";
            GeraLog::getInstance()->inserirLog("Erro: Código: ". $error->getCode() . " Mensagem: ". $error->getMessage());
        }
    }

    public function Deletar($cod)
    {
        try {
            
            $sql = "DELETE FROM usuario WHERE cod_usuario = :cod";
            $p_sql = Conexao::getInstance()->prepare($sql);
            $p_sql->bindValue(":cod", $cod);

            return $p_sql->execute();
        } catch ( Error $error) {

            print "Ocorreu um erro ao tentar executar esta ação, foi gerado um LOG do mesmo, tente novamente mais tarde.";
            GeraLog::getInstance()->inserirLog("Erro: Código: " . $error->getCode() . " Mensagem: " . $error->getMessage());
        }
    }

    public function buscarPorCOD($cod)
    {
        try {
            
            $sql = " SELECT * FROM usuario WHERE cod_usuario = :cod";
            $p_sql = Conexao::getInstance()->prepare($sql);
            $p_sql->bindValue(":cod", $cod);

            $p_sql->execute();

            return $this->populaUsuario($p_sql->fetch(PDO::FETCH_ASSOC));

        } catch ( Error $error) {
            
            print "Ocorreu um erro ao tentar executar esta ação, foi gerado um LOG do mesmo, tente novamente mais tarde.";
            GeraLog::getInstance()->inserirLog("Erro: Código: " . $error->getCode() . " Mensagem: " . $error->getMessage());
        }
    }

    private function populaUsuario($row)
    {
        $pojo = new PojoUsuario;
        $pojo->setCod_usuario($row['cod_usuario']);
        $pojo->setNome($row['nome']);
        $pojo->setEmail($row['email']);
        $pojo->setSenha($row['senha']);
        $pojo->setAtivo($row['ativo']);
        $pojo->setPerfil($row);
        return $pojo;
    }

}