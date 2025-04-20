<?php
// Configurações do banco de dados
$host = "localhost";
$user = "root"; // Substitua pelo seu usuário do MySQL
$password = ""; // Substitua pela sua senha do MySQL
$database = "conexao";

// Criando conexão
$con = mysqli_connect($host, $user, $password, $database);

// Verificando a conexão
if (!$con) {
    die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
}

// Configurando o charset para suportar acentos
mysqli_set_charset($con, "utf8");

// Verificando se o formulário foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebendo e limpando os dados
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $confEmail = trim($_POST['confEmail'] ?? '');
    $telefone = trim($_POST['telefone'] ?? '');
    $senha = trim($_POST['senha'] ?? '');

    // Validações
    if (empty($nome) || empty($email) || empty($confEmail) || empty($telefone) || empty($senha)) {
        echo "<script>alert('Todos os campos são obrigatórios!'); window.location.href='telaAcessoCadastro.html';</script>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('E-mail inválido!'); window.location.href='telaAcessoCadastro.html';</script>";
        exit;
    }

    if ($email !== $confEmail) {
        echo "<script>alert('Os e-mails não coincidem!'); window.location.href='telaAcessoCadastro.html';</script>";
        exit;
    }

    if (strlen($senha) < 6) {
        echo "<script>alert('A senha deve ter pelo menos 6 caracteres!'); window.location.href='telaAcessoCadastro.html';</script>";
        exit;
    }

    // Validando o telefone (apenas números, 10 ou 11 dígitos)
    if (!preg_match('/^[0-9]{10,11}$/', $telefone)) {
        echo "<script>alert('Telefone inválido! Use apenas números (10 ou 11 dígitos).'); window.location.href='telaAcessoCadastro.html';</script>";
        exit;
    }

    // Criptografando a senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // Preparando a query para evitar SQL Injection
    $sql = "INSERT INTO cadastro (nome, email, telefone, senha) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($con, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ssss", $nome, $email, $telefone, $senhaHash);
        
        if (mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Cadastro efetuado com sucesso!'); window.location.href='telaAcessoLogin.html';</script>";
        } else {
            if (mysqli_errno($con) == 1062) { // Erro de e-mail duplicado
                echo "<script>alert('Este e-mail já está cadastrado!'); window.location.href='telaAcessoCadastro.html';</script>";
            } else {
                // Log do erro para depuração (não visível ao usuário)
                error_log("Erro ao cadastrar: " . mysqli_stmt_error($stmt));
                echo "<script>alert('Erro ao cadastrar. Tente novamente.'); window.location.href='telaAcessoCadastro.html';</script>";
            }
        }

        mysqli_stmt_close($stmt);
    } else {
        // Log do erro para depuração
        error_log("Erro na preparação da consulta: " . mysqli_error($con));
        echo "<script>alert('Erro no servidor. Tente novamente mais tarde.'); window.location.href='telaAcessoCadastro.html';</script>";
    }
}

// Fechando a conexão
mysqli_close($con);
?>
