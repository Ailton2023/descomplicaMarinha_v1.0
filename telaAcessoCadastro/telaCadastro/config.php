<?php
$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'cadastro-login';
$conexao = new mysqli ($dbHost, $dbUsername, $dbPassword, $dbName);

if($conexao->connect_ernro)

{
    echo "Erro";
}

else
{
    echo"Conexão efetuada com sucesso"
}

?>

