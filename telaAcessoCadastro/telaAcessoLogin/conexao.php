<?php
// Configurações do banco de dados SQLite
$banco = "C:/xampp11/htdocs/descomplicaMarinha_v1.0/telaAcessoCadastro/telaAcessoLogin/conexao.db";

try {
    // Criar conexão com SQLite usando PDO
    $conexao = new PDO("sqlite:$banco");
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Verificar se é um cadastro
        if (isset($_POST['nome']) && isset($_POST['telefone']) && isset($_POST['email']) && isset($_POST['confEmail']) && isset($_POST['senha'])) {
            // Dados do formulário de cadastro
            $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
            $telefone = filter_var($_POST['telefone'], FILTER_SANITIZE_STRING);
            $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            $confEmail = filter_var($_POST['confEmail'], FILTER_SANITIZE_EMAIL);
            $senha = trim($_POST['senha']); // Remover espaços extras

            // Validar confirmação de email
            if ($email !== $confEmail) {
                echo "<script>alert('Os e-mails não coincidem!'); window.history.back();</script>";
                exit();
            }

            // Validar tamanho da senha
            if (strlen($senha) < 6) {
                echo "<script>alert('A senha deve ter no mínimo 6 caracteres!'); window.history.back();</script>";
                exit();
            }

            // Criptografar a senha
            $senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);

            // Verificar se o email já está cadastrado
            $sql = "SELECT email FROM cadastro WHERE email = :email";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                echo "<script>alert('E-mail já cadastrado!'); window.history.back();</script>";
                exit();
            }

            // Inserir dados na tabela cadastro
            $sql = "INSERT INTO cadastro (nome, telefone, email, senha) VALUES (:nome, :telefone, :email, :senha)";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':telefone', $telefone);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':senha', $senhaCriptografada);

            if ($stmt->execute()) {
                echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href = '../telaAcessoLogin/telaAcessoLogin.html';</script>";
            } else {
                echo "<script>alert('Erro ao cadastrar!'); window.history.back();</script>";
            }
        }
        // Verificar se é um login
        elseif (isset($_POST['email']) && isset($_POST['password'])) {
            // Dados do formulário de login
            $email_cpf = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
            $senha = trim($_POST['password']); // Remover espaços extras

            // Consultar o banco de dados (tentar email primeiro)
            $sql = "SELECT * FROM cadastro WHERE email = :email_cpf";
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':email_cpf', $email_cpf);
            $stmt->execute();
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                // Usuário encontrado
                if (password_verify($senha, $usuario['senha'])) {
                    // Login bem-sucedido, redirecionar
                    header("Location: /descomplicaMarinha_v1.0/cabineControle-II/cabineControle.html");
                    exit();
                } else {
                    echo "<script>alert('Senha incorreta!'); window.history.back();</script>";
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
                        // Login bem-sucedido, redirecionar
                        header("Location: /descomplicaMarinha_v1.0/cabineControle-II/cabineControle.html");
                        exit();
                    } else {
                        echo "<script>alert('Senha incorreta!'); window.history.back();</script>";
                    }
                } else {
                    echo "<script>alert('E-mail ou CPF não encontrado!'); window.history.back();</script>";
                }
            }
        } else {
            echo "<script>alert('Dados inválidos!'); window.history.back();</script>";
        }
    }
} catch (PDOException $e) {
    die("Falha na conexão: " . $e->getMessage());
}

// Fechar conexão (não necessário no SQLite, mas mantido por compatibilidade)
$conexao = null;
?>