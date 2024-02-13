<?php

  $remitente = $_POST['email'];
  $destinatario = 'dmorgade.estudiocontable@gmail.com';
  $asunto = $_POST['subject'];
  $mensaje = $_POST['comments'];

  // Configura el encabezado del correo electrónico
  $headers = "From: $remitente\r\n";
  $headers .= "Reply-To: $remitente\r\n";

  // Envía el correo electrónico
  if (mail($remitente, $asunto, $mensaje, $headers)) {
    echo "El correo electrónico se envió correctamente.";
  } else {
    echo "Hubo un error al enviar el correo electrónico.";
  }

?>