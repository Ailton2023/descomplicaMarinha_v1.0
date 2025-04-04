<?php
// Configurações do banco de dados
$host = "localhost";
$user = "root";
$password = "";
$database = "conexao";

// Criando conexão
$con = mysqli_connect($host, $user, $password, $database);

// Verificando a conexão
if (!$con) {
    die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
}

// Verificando se os dados foram recebidos via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebendo e sanitizando os dados
    $nome = mysqli_real_escape_string($con, trim($_POST['nome']));
    $email = mysqli_real_escape_string($con, trim($_POST['email']));
    $confEmail = mysqli_real_escape_string($con, trim($_POST['confEmail']));
    $telefone = mysqli_real_escape_string($con, trim($_POST['telefone']));
    $senha = mysqli_real_escape_string($con, password_hash(trim($_POST['senha']), PASSWORD_DEFAULT)); // Senha criptografada

    // Validação básica
    if (empty($nome) || empty($email) || empty($confEmail) || empty($telefone) || empty($senha)) {
        echo "<script>alert('Todos os campos são obrigatórios!'); window.history.back();</script>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('E-mail inválido!'); window.history.back();</script>";
        exit;
    }

    if ($email !== $confEmail) {
        echo "<script>alert('Os e-mails não coincidem!'); window.history.back();</script>";
        exit;
    }

    if (strlen($_POST['senha']) < 6) {
        echo "<script>alert('A senha deve ter pelo menos 6 caracteres!'); window.history.back();</script>";
        exit;
    }

    // Preparando a query para evitar SQL Injection
    $sql = "INSERT INTO cadastro (nome, email, telefone, senha) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($con, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ssss", $nome, $email, $telefone, $senha);
        
        if (mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Cadastro efetuado com sucesso!'); window.location.href = 'telaAcessoLogin.html';</script>";
        } else {
            echo "<script>alert('Erro ao cadastrar: " . mysqli_stmt_error($stmt) . "'); window.history.back();</script>";
        }

        mysqli_stmt_close($stmt);
    } else {
        echo "<script>alert('Erro na preparação da consulta: " . mysqli_error($con) . "'); window.history.back();</script>";
    }
}

// Fechando a conexão
mysqli_close($con);
?>


