<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $company = trim($_POST["company"]);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "C'è stato un problema con l'invio, per favore compila tutti i campi e riprova";
            exit;
        }

        $recipient = "lore.cip@gmail.com";
        $subject = "Nuovo contatto da $name";
        $sender = "info@ciprianilorenzo.com";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Company: $company\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "From: CiprianiLorenzo <$sender>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers, "-f$sender")) {
            http_response_code(200);
            echo "Grazie mille! Il tuo messaggio è stato inviato.";
        } else {
            http_response_code(500);
            echo "Oops! Qualcosa è andato storto e non è stato possibile inviare il tuo messaggio.";
        }

    } else {
        http_response_code(403);
        echo "C'è stato un problema con l'invio, per favore riprova.";
    }



?>
