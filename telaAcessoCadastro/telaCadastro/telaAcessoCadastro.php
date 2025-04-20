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

// Inicializar variável para mensagens de erro
$error_message = "";

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
        $error_message = "Todos os campos são obrigatórios!";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "E-mail inválido!";
    } elseif ($email !== $confEmail) {
        $error_message = "Os e-mails não coincidem!";
    } elseif (strlen($senha) < 6) {
        $error_message = "A senha deve ter pelo menos 6 caracteres!";
    } elseif (!preg_match('/^[0-9]{10,11}$/', $telefone)) {
        $error_message = "Telefone inválido! Use apenas números (10 ou 11 dígitos).";
    } else {
        // Criptografando a senha
        $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

        // Preparando a query para evitar SQL Injection
        $sql = "INSERT INTO cadastro (nome, email, telefone, senha) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($con, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ssss", $nome, $email, $telefone, $senhaHash);
            
            if (mysqli_stmt_execute($stmt)) {
                echo "<script>alert('Cadastro efetuado com sucesso!'); window.location.href='telaAcessoLogin.html';</script>";
                exit;
            } else {
                if (mysqli_errno($con) == 1062) { // Erro de e-mail duplicado
                    $error_message = "Este e-mail já está cadastrado!";
                } else {
                    error_log("Erro ao cadastrar: " . mysqli_stmt_error($stmt));
                    $error_message = "Erro ao cadastrar. Tente novamente.";
                }
            }
            mysqli_stmt_close($stmt);
        } else {
            error_log("Erro na preparação da consulta: " . mysqli_error($con));
            $error_message = "Erro no servidor. Tente novamente mais tarde.";
        }
    }
}

// Fechando a conexão
mysqli_close($con);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Cadastro</title>
    <link rel="stylesheet" href="telaAcessoCadastro.css">
</head>
<body>
    <section class="conteinerAcessoCadastro">
        <article class="cabecalhoCadastro">
            <h1>Cadastre-se</h1>
            <p>Se preferir, use sua rede social</p>
            
            <button type="button" class="botaoGoogle" aria-label="Cadastrar com Google">
                <img src="../icons/logoGoogle.png" alt="Logo do Google"> 
            </button>

            <p>Teremos acesso a seu nome e endereço de e-mail apenas para efetuar seu cadastro.</p>
        </article>
        <hr>
        <?php if (!empty($error_message)): ?>
            <div style="color: red; text-align: center; margin: 10px 0;">
                <?php echo htmlspecialchars($error_message); ?>
            </div>
        <?php endif; ?>
        <form name="cadastro" method="POST" action="telaAcessoCadastro.php" autocomplete="on" class="formularioCadastro">
            <div class="campoInput">
                <label for="pessoa">
                    <img class="iconeInput" src="../icons/pessoa.png" alt="Ícone de pessoa" aria-hidden="true">
                    <span class="sr-only">Nome Completo</span>
                </label>
                <input type="text" name="nome" id="pessoa" placeholder="Nome Completo" value="<?php echo isset($_POST['nome']) ? htmlspecialchars($_POST['nome']) : ''; ?>" required>
            </div>

            <div class="campoInput">
                <label for="numero">
                    <img class="iconeInput" src="../icons/telefone.png" alt="Ícone de telefone" aria-hidden="true">
                    <span class="sr-only">Telefone</span>
                </label>
                <input type="tel" name="telefone" id="numero" placeholder="Telefone" pattern="[0-9]{10,11}" value="<?php echo isset($_POST['telefone']) ? htmlspecialchars($_POST['telefone']) : ''; ?>" required>
            </div>

            <div class="campoInput">
                <label for="email">
                    <img class="iconeInput" src="../icons/e-mail.png" alt="Ícone de e-mail" aria-hidden="true">
                    <span class="sr-only">E-mail</span>
                </label>
                <input type="email" name="email" id="email" placeholder="E-mail" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>" required>
            </div>

            <div class="campoInput">
                <label for="emailConfirmacao">
                    <img class="iconeInput" src="../icons/e-mail.png" alt="Ícone de e-mail" aria-hidden="true">
                    <span class="sr-only">Confirmar E-mail</span>
                </label>
                <input type="email" name="confEmail" id="emailConfirmacao" placeholder="Confirmar E-mail" value="<?php echo isset($_POST['confEmail']) ? htmlspecialchars($_POST['confEmail']) : ''; ?>" required>
            </div>

            <div class="campoInput">
                <label for="senha">
                    <img class="iconeInput" src="../icons/cadeado.png" alt="Ícone de senha" aria-hidden="true">
                    <span class="sr-only">Senha</span>
                </label>
                <input type="password" name="senha" id="senha" placeholder="Senha (mínimo de 6 caracteres)" minlength="6" required>
            </div>

            <div class="containerPDF">
                <img class="iconePDF" src="imagens/pdf.png" alt="Ícone PDF" aria-hidden="true">
                <a href="termoUso/017973000101011.pdf" download>Termos de Uso</a>
            </div>

            <div class="containerCheckbox">
                <input type="checkbox" id="checkboxButtonCadastrar" onclick="toggleCadastroButton()">
                <label for="checkboxButtonCadastrar">Eu li e aceito os Termos de Uso</label>
            </div>
        
            <button type="submit" class="botao" id="botaoCadastro" disabled>CADASTRAR</button>
        </form>

        <hr>

        <div class="alinhamentoLados">
            <h1>Já é cadastrado?</h1>
            <a href="../telaAcessoLogin/telaAcessoLogin.html"><p>É só fazer login!</p></a>
        </div>
    </section>

    <script>
        function toggleCadastroButton() {
            const checkbox = document.getElementById('checkboxButtonCadastrar');
            const botaoCadastro = document.getElementById('botaoCadastro');
            botaoCadastro.disabled = !checkbox.checked;
        }

        document.forms['cadastro'].addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const confEmail = document.getElementById('emailConfirmacao').value;
            const senha = document.getElementById('senha').value;
            const botaoCadastro = document.getElementById('botaoCadastro');

            // Validação no front-end
            if (email !== confEmail) {
                alert('Os e-mails não coincidem!');
                e.preventDefault();
                return;
            }

            if (senha.length < 6) {
                alert('A senha deve ter no mínimo 6 caracteres!');
                e.preventDefault();
                return;
            }

            // Indicador de carregamento
            botaoCadastro.disabled = true;
            botaoCadastro.textContent = 'Enviando...';
        });
    </script>

    <style>
        /* Estilo para acessibilidade */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    </style>
</body>
</html>