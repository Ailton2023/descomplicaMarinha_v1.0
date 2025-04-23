<?php
// Cabeçalho para permitir CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configurações do banco de dados SQLite
$banco = "C:/xampp11/htdocs/descomplicaMarinha_v1.0/telaAcessoCadastro/telaAcessoLogin/conexao.db";

try {
    // Criar conexão com SQLite usando PDO
    $conexao = new PDO("sqlite:$banco");
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexao->exec('PRAGMA busy_timeout = 10000;'); // Timeout de 10 segundos

    // Criar tabela se não existir
    $conexao->exec("
        CREATE TABLE IF NOT EXISTS cadastro (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            telefone TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL
        )
    ");

    // Verificar se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Verificar se é um cadastro
        if (isset($_POST['nome']) && isset($_POST['telefone']) && isset($_POST['email']) && isset($_POST['confEmail']) && isset($_POST['senha'])) {
            // Dados do formulário de cadastro
            $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
            $telefone = filter_var($_POST['telefone'], FILTER_SANITIZE_STRING);
            $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            $confEmail = filter_var($_POST['confEmail'], FILTER_SANITIZE_EMAIL);
            $senha = trim($_POST['senha']);

            // Validar confirmação de email
            if ($email !== $confEmail) {
                echo json_encode(['error' => 'Os e-mails não coincidem!']);
                exit();
            }

            // Validar tamanho da senha
            if (strlen($senha) < 6) {
                echo json_encode(['error' => 'A senha deve ter no mínimo 6 caracteres!']);
                exit();
            }

            // Verificar se o email já está cadastrado
            $sql = "SELECT email FROM cadastro WHERE email = :email";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                echo json_encode(['error' => 'E-mail já cadastrado!']);
                exit();
            }

            // Criptografar a senha
            $senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);

            // Inserir dados na tabela cadastro
            $conexao->beginTransaction();
            try {
                $sql = "INSERT INTO cadastro (nome, telefone, email, senha) VALUES (:nome, :telefone, :email, :senha)";
                $stmt = $conexao->prepare($sql);
                $stmt->bindParam(':nome', $nome);
                $stmt->bindParam(':telefone', $telefone);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':senha', $senhaCriptografada);

                if ($stmt->execute()) {
                    $conexao->commit();
                    echo json_encode(['success' => 'Cadastro realizado com sucesso!']);
                } else {
                    $conexao->rollBack();
                    echo json_encode(['error' => 'Erro ao cadastrar.']);
                }
            } catch (Exception $e) {
                $conexao->rollBack();
                error_log('Erro ao cadastrar: ' . $e->getMessage() . ' | Arquivo: ' . $banco . ' | Linha: ' . $e->getLine(), 3, 'sqlite_errors.log');
                echo json_encode(['error' => 'Erro ao cadastrar: ' . $e->getMessage()]);
            }
        }
        // Verificar se é um login
        elseif (isset($_POST['email']) && isset($_POST['password'])) {
            // Dados do formulário de login
            $email_cpf = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
            $senha = trim($_POST['password']);

            // Consultar o banco de dados (tentar email primeiro)
            $sql = "SELECT * FROM cadastro WHERE email = :email_cpf";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':email_cpf', $email_cpf);
            $stmt->execute();
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                // Usuário encontrado
                if (password_verify($senha, $usuario['senha'])) {
                    echo json_encode(['success' => 'Login bem-sucedido!']);
                    exit();
                } else {
                    echo json_encode(['error' => 'Senha incorreta!']);
                }
            } else {
                // Tentar login com CPF (telefone)
                $sql = "SELECT * FROM cadastro WHERE telefone = :email_cpf";
                $stmt = $conexao->prepare($sql);
                $stmt->bindParam(':email_cpf', $email_cpf);
                $stmt->execute();
                $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($usuario) {
                    if (password_verify($senha, $usuario['senha'])) {
                        echo json_encode(['success' => 'Login bem-sucedido!']);
                        exit();
                    } else {
                        echo json_encode(['error' => 'Senha incorreta!']);
                    }
                } else {
                    echo json_encode(['error' => 'E-mail ou CPF não encontrado!']);
                }
            }
        } else {
            echo json_encode(['error' => 'Dados inválidos!']);
        }
    } else {
        echo json_encode(['error' => 'Método não permitido!']);
    }
} catch (PDOException $e) {
    error_log('Erro SQLite: ' . $e->getMessage() . ' | Arquivo: ' . $banco . ' | Linha: ' . $e->getLine(), 3, 'sqlite_errors.log');
    echo json_encode(['error' => 'Falha na conexão: ' . $e->getMessage()]);
}

// Fechar conexão
$conexao = null;
?>