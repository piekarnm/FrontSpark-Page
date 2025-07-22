<?php
header('Content-Type: application/json; charset=utf-8');

$name = $_POST["name"]; // input name="name"
$from = $_POST["email"]; // input name="email"
$subject = "Wiadomość z formularza na stronie Frontspark.pl";
$to = "kontakt@frontspark.pl"; // adres, na który ma zostać wysłany mail
$message = $_POST["msg"]; // textarea name="msg"

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    echo json_encode(['ok' => true,  'msg' => 'Wiadomość została wysłana!']);
    exit;
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'msg' => 'Wystąpił błąd wysyłania!']);
    exit;
}