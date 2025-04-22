<?php
// Configurações do banco de dados
$servidor = "192.168.77.145";
$usuario = "root";
$senha = "";
$banco = "conexao";

// Criar conexão
$conexao = new mysqli($servidor, $usuario, $senha, $banco);

// Verificar conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}

// Definir charset
mysqli_set_charset($conexao, "utf8");

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar se é um cadastro
    if (isset($_POST['nome']) && isset($_POST['telefone']) && isset($_POST['email']) && isset($_POST['confEmail']) && isset($_POST['senha'])) {
        // Dados do formulário de cadastro
        $nome = $conexao->real_escape_string($_POST['nome']);
        $telefone = $conexao->real_escape_string($_POST['telefone']);
        $email = $conexao->real_escape_string($_POST['email']);
        $confEmail = $conexao->real_escape_string($_POST['confEmail']);
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
        $sql = "SELECT email FROM cadastro WHERE email = '$email'";
        $resultado = $conexao->query($sql);

        if ($resultado->num_rows > 0) {
            echo "<script>alert('E-mail já cadastrado!'); window.history.back();</script>";
            exit();
        }

        // Inserir dados na tabela cadastro
        $sql = "INSERT INTO cadastro (nome, telefone, email, senha) VALUES ('$nome', '$telefone', '$email', '$senhaCriptografada')";
        
        if ($conexao->query($sql) === TRUE) {
            echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href = '../telaAcessoLogin/telaAcessoLogin.html';</script>";
        } else {
            echo "<script>alert('Erro ao cadastrar: " . $conexao->error . "'); window.history.back();</script>";
        }
    }
    // Verificar se é um login
    elseif (isset($_POST['email']) && isset($_POST['password'])) {
        // Dados do formulário de login
        $email_cpf = $conexao->real_escape_string($_POST['email']);
        $senha = trim($_POST['password']); // Remover espaços extras

        // Consultar o banco de dados (tentar email primeiro)
        $sql = "SELECT * FROM cadastro WHERE email = '$email_cpf'";
        $resultado = $conexao->query($sql);

        if ($resultado->num_rows > 0) {
            // Usuário encontrado
            $usuario = $resultado->fetch_assoc();
            
            if (password_verify($senha, $usuario['senha'])) {
                // Login bem-sucedido, redirecionar
                header("Location: http://192.168.77.145/telaacessocadastro/cabineControle-II/cabineControle.html");
                exit();
            } else {
                echo "<script>alert('Senha incorreta!'); window.history.back();</script>";
            }
        } else {
            // Tentar login com CPF (telefone)
            $sql = "SELECT * FROM cadastro WHERE telefone = '$email_cpf'";
            $resultado = $conexao->query($sql);

            if ($resultado->num_rows > 0) {
                $usuario = $resultado->fetch_assoc();
                
                if (password_verify($senha, $usuario['senha'])) {
                    // Login bem-sucedido, redirecionar
                    header("Location: http://192.168.77.145/telaacessocadastro/cabineControle-II/cabineControle.html");
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

// Fechar conexão
$conexao->close();
?>