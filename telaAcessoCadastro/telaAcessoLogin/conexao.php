<?php
header('Content-Type: application/json');

// Verifica se o formulário foi enviado via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Método de requisição inválido!']);
    exit;
}

// Configurações de log
$logFile = __DIR__ . '/error.log';
$logEnabled = true;

try {
    if (!file_exists($logFile)) {
        file_put_contents($logFile, '');
    }
    if (!is_writable($logFile)) {
        chmod($logFile, 0644);
    }
} catch (Exception $e) {
    $logEnabled = false;
}

function logError($message) {
    global $logFile, $logEnabled;
    if ($logEnabled) {
        error_log(date('Y-m-d H:i:s') . ' - ' . $message . "\n", 3, $logFile);
    }
}

// Configurações do banco de dados
$host = 'localhost'; // Verifique se 'localhost' é correto no Hostinger
$dbname = 'u504810701_databese';
$username = 'u504810701_ailton';
$password = '6uFxDOU@';

try {
    // Verifica PDO_MySQL
    logError("Verificando se a extensão PDO_MySQL está habilitada...");
    if (!extension_loaded('pdo_mysql')) {
        throw new Exception('Extensão PDO_MySQL não está habilitada no PHP.');
    }
    logError("Extensão PDO_MySQL está habilitada.");

    // Conecta ao banco de dados
    logError("Tentando conectar ao banco de dados: host=$host, dbname=$dbname, username=$username");
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    logError("Conexão com o banco de dados '$dbname' estabelecida com sucesso.");

    // Verifica/cria a tabela 'usuarios'
    logError("Verificando se a tabela 'usuarios' existe...");
    $tables = $pdo->query("SHOW TABLES LIKE 'usuarios'")->fetchAll();
    if (empty($tables)) {
        logError("Tabela 'usuarios' não existe. Criando tabela...");
        $createTableQuery = "
            CREATE TABLE usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                telefone VARCHAR(15) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                senha VARCHAR(255) NOT NULL,
                data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )";
        $pdo->exec($createTableQuery);
        logError("Tabela 'usuarios' criada com sucesso.");
    } else {
        logError("Tabela 'usuarios' encontrada.");
    }

    // Processa formulário de cadastro
    if (isset($_POST['nome']) && isset($_POST['telefone']) && isset($_POST['email']) && isset($_POST['senha'])) {
        $nome = htmlspecialchars(trim($_POST['nome']), ENT_QUOTES, 'UTF-8');
        $telefone = htmlspecialchars(trim($_POST['telefone']), ENT_QUOTES, 'UTF-8');
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $senha = $_POST['senha'];

        logError("Dados de cadastro recebidos: nome=$nome, telefone=$telefone, email=$email");

        // Validações
        if (strlen($nome) < 3) {
            echo json_encode(['error' => 'O nome deve ter no mínimo 3 caracteres!']);
            logError("Erro de validação: Nome muito curto ($nome)");
            exit;
        }
        if (!preg_match('/^[0-9]{10,11}$/', $telefone)) {
            echo json_encode(['error' => 'O telefone deve ter 10 ou 11 dígitos numéricos!']);
            logError("Erro de validação: Telefone inválido ($telefone)");
            exit;
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['error' => 'Por favor, insira um e-mail válido!']);
            logError("Erro de validação: E-mail inválido ($email)");
            exit;
        }
        if (strlen($senha) < 6) {
            echo json_encode(['error' => 'A senha deve ter no mínimo 6 caracteres!']);
            logError("Erro de validação: Senha muito curta");
            exit;
        }

        // Verifica e-mail duplicado
        logError("Verificando se o e-mail já está cadastrado...");
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM usuarios WHERE email = :email");
        $stmt->execute([':email' => $email]);
        if ($stmt->fetchColumn() > 0) {
            echo json_encode(['error' => 'Este e-mail já está cadastrado!']);
            logError("Erro: E-mail já cadastrado ($email)");
            exit;
        }

        // Insere usuário
        $senhaHash = password_hash($senha, PASSWORD_BCRYPT);
        logError("Inserindo novo usuário...");
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, telefone, email, senha, data_cadastro) VALUES (:nome, :telefone, :email, :senha, NOW())");
        $stmt->execute([
            ':nome' => $nome,
            ':telefone' => $telefone,
            ':email' => $email,
            ':senha' => $senhaHash
        ]);
        logError("Usuário inserido com sucesso: $email");

        echo json_encode(['success' => 'Cadastro realizado com sucesso!']);
    }
    // Processa formulário de login
    elseif (isset($_POST['email']) && isset($_POST['password'])) {
        $loginInput = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $password = $_POST['password'];

        logError("Tentativa de login: loginInput=$loginInput");

        // Validações
        $emailPattern = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
        if (!preg_match($emailPattern, $loginInput)) {
            echo json_encode(['error' => 'Por favor, insira um e-mail válido!']);
            logError("Erro de validação: E-mail inválido ($loginInput)");
            exit;
        }
        if (strlen($password) < 6) {
            echo json_encode(['error' => 'A senha deve ter no mínimo 6 caracteres!']);
            logError("Erro de validação: Senha muito curta");
            exit;
        }

        // Busca usuário
        logError("Buscando usuário: $loginInput");
        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = :email");
        $stmt->execute([':email' => $loginInput]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['senha'])) {
            echo json_encode(['success' => 'Login bem-sucedido!']);
            logError("Login bem-sucedido: $loginInput");
        } else {
            echo json_encode(['error' => 'E-mail ou senha incorretos!']);
            logError("Erro: E-mail ou senha incorretos ($loginInput)");
        }
    } else {
        echo json_encode(['error' => 'Dados do formulário incompletos!']);
        logError("Erro: Dados incompletos - " . json_encode($_POST));
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao processar a solicitação. Tente novamente mais tarde.']);
    logError("Erro PDO: " . $e->getMessage() . " | Linha: " . $e->getLine() . " | Código: " . $e->getCode());
} catch (Exception $e) {
    echo json_encode(['error' => 'Erro inesperado: ' . $e->getMessage()]);
    logError("Erro: " . $e->getMessage() . " | Linha: " . $e->getLine());
}
?>