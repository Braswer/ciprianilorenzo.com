<?php

    if( filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){

        $name = $_POST["name"];
        $email = $_POST["email"];
        $company = $_POST["company"];
        $message = $_POST["message"];

        $to = "lore.cip@gmail.com";
        $body = "";
        $message_subject = "Contatto di lavoro";

        $body .= "Da: ".$name. "\r\n";
        $body .= "Email: ".$email. "\r\n";
        $body .= "Di: ".$company. "\r\n";
        $body .= "Messaggio: \r\n".$message. "\r\n";

        mail($to,$message_subject,$body);

        header("Location: index.html");
}
    ?>