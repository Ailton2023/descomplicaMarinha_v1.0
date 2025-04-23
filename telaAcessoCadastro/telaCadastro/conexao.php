<?php
// Ativar exibição de erros para depuração (remova em produção)
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    // Conectar ao banco SQLite
    $db = new PDO('sqlite:conexao.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Cadastro
        if (isset($_POST['nome'], $_POST['telefone'], $_POST['email'], $_POST['senha'])) {
            $nome = trim($_POST['nome']);
            $telefone = trim($_POST['telefone']);
            $email = trim($_POST['email']);
            $senha = trim($_POST['senha']);

            // Validar email
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo json_encode(['error' => 'E-mail inválido']);
                exit;
            }

            // Validar telefone
            if (!preg_match('/^[0-9]{10,11}$/', $telefone)) {
                echo json_encode(['error' => 'Telefone inválido']);
                exit;
            }

            // Validar senha
            if (strlen($senha) < 6) {
                echo json_encode(['error' => 'A senha deve ter no mínimo 6 caracteres']);
                exit;
            }

            // Verificar se o email já está cadastrado
            $stmt = $db->prepare('SELECT COUNT(*) FROM cadastro WHERE email = :email');
            $stmt->execute(['email' => $email]);
            if ($stmt->fetchColumn() > 0) {
                echo json_encode(['error' => 'Este e-mail já está cadastrado']);
                exit;
            }

            // Criptografar a senha
            $senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);

            // Inserir os dados
            $stmt = $db->prepare('INSERT INTO cadastro (nome, telefone, email, senha) VALUES (:nome, :telefone, :email, :senha)');
            $stmt->execute([
                'nome' => $nome,
                'telefone' => $telefone,
                'email' => $email,
                'senha' => $senhaCriptografada
            ]);

            echo json_encode(['success' => 'Cadastro realizado com sucesso']);
            exit;
        }

        // Login
        if (isset($_POST['email'], $_POST['password'])) {
            $email_cpf = trim($_POST['email']);
            $password = trim($_POST['password']);

            // Tentar login com email
            $stmt = $db->prepare('SELECT * FROM cadastro WHERE email = :email OR telefone = :telefone');
            $stmt->execute(['email' => $email_cpf, 'telefone' => $email_cpf]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user && password_verify($password, $user['senha'])) {
                session_start();
                $_SESSION['user_id'] = $user['id'];
                echo json_encode(['success' => 'Login bem-sucedido']);
                exit;
            } else {
                echo json_encode(['error' => 'E-mail, CPF ou senha inválidos']);
                exit;
            }
        }

        echo json_encode(['error' => 'Dados inválidos']);
        exit;
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro no banco: ' . $e->getMessage()]);
    exit;
}
?>