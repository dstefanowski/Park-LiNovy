<?php
if(isset($_POST['email'])) {

    // Konfiguracja poczty
    $to = "adres-email@odbiorcy.pl";
    $subject = "Wiadomość ze strony internetowej";
    $headers = "From: " . $_POST['email'] . "\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Treść wiadomości
    $message = "<html><body>";
    $message .= "<h3>Wiadomość ze strony internetowej:</h3>";
    $message .= "<p><strong>Imię i nazwisko:</strong> " . $_POST['name'] . "</p>";
    $message .= "<p><strong>E-mail:</strong> " . $_POST['email'] . "</p>";
    $message .= "<p><strong>Wiadomość:</strong> " . nl2br($_POST['message']) . "</p>";
    $message .= "</body></html>";

    // Wysłanie wiadomości
    mail($to, $subject, $message, $headers);

    // Przekierowanie na stronę potwierdzenia
    header('Location: potwierdzenie.html');
    exit;
}
?>