<?php

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);

$to      = "thoparit@gmail.com, info@klimatisspb.ru";
$subject = "Заявка с сайта instrument.promt.spb.ru";

$message = "";
if($name){
	$message .=  "Имя: $name\n";
}
if($phone){
	$message .=  "Телефон: $phone\n";
}
if($text){
	$message .=  "Текст вопроса: $text\n";
}

$headers = "From: instrument.promt.spb.ru";

mail($to, $subject, $message, $headers);

?>