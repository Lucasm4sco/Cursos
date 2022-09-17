<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <style>

        * {
            margin-top: 30px;
            text-align: center;
        }

        body {
            background-color: lightslategrey;
        }

        fieldset {
            max-width: 480px;
            height: 300px;
            margin: auto;
            background-color: whitesmoke;
            font-size: 20px;
        }
        
        input {
            text-align: start;
        }

    </style>

</head>
<body>
    
    <form action="./ope.php" method="post" id="formlogin" name="formlogin"> 
        <fieldset id="fie">
            <h2>LOGIN</h2>
            <label for="login">Nome: </label>
            <input type="text" name="login" id="login"> <br>
            <label for="password">Senha: </label>
            <input type="password" name="password" id="password"><br>
            <button type="submit"> LOGAR </button>
        </fieldset>
    </form>
</body>
</html>