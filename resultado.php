<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="images/imc.png" type="image/x-icon">
  <link rel="stylesheet" href="css/resultado.css">
  <title>Resultado IMC</title>
</head>
<body>
  <div class="card">
    <h1>SEU IMC:</h1>
    <?php
      $nome = $_GET['nome'];
      $altura = doubleval(str_replace(',', '.', $_GET['altura']));
      $peso = doubleval(str_replace(',', '.', $_GET['peso']));
      $resultado = round($peso / ($altura ** 2), 2);
      
      echo "<h2>$resultado</h2>";

      echo "<p>Classificação:</p>";
      if ($resultado < 18.5) {
        echo '<h3 style="color: #0057d0">Abaixo do peso</h3>';
      } else if ($resultado < 25) {
          echo '<h3 style="color :#3caa30">Peso ideal</h3>';
      } else if ($resultado < 30) {
          echo '<h3 style="color: #ddbc01">Sobrepeso</h3>';
      } else if ($resultado < 35) {
          echo '<h3 style="color: #dd9401">Obesidade grau I</h3>';
      } else if ($resultado < 40) {
          echo '<h3 style="color: #dd5d01">Obesidade grau II</h3>';
      } else {
          echo '<h3 style="color: #ce0000">Obesidade grau III (mórbida)</h3>';
      }

      if ($resultado >= 0.01) {
        $percaPeso = intval($peso - ((24.99 * $peso) / $resultado) + 1) . "kg";
        $ganhoPeso = intval(((18.5 * $peso) / $resultado) - $peso + 1) . "kg";

        if ($resultado > 25) {
          echo "<h4>Você precisa perder <strong style='color:#bc0000'>$percaPeso</strong> 
          para estar no <strong style='color: #3caa3c'>Peso Ideal</strong></h4>";
        } else if ($resultado < 18.5) {
          echo "<h4>Você precisa ganhar <strong style='color:#0057d0'>$ganhoPeso</strong> 
          para estar no <strong style='color: #3caa3c'>Peso Ideal</strong></h4>";
        } else {
          echo "<h4>Parabéns</h4>";
        }
      }
    ?>
    <img src="images/imc.png" alt="Logo IMC">
  </div>
</body>
</html>