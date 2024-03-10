<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the email subject and message
$subject = 'New Contact Form Submission';
$message_body = "Name: $name\nEmail: $email\nMessage: $message";

// Set the email headers
/* $headers = "From: $email\n";
$headers .= "Reply-To: $email\n";
$headers .= "Content-Type: text/plain; charset=utf-8\n"; */

// Send the email
if (mail('enquiries@itonlinelearning.com', $subject, $message_body, $headers)) {
  echo "Thank you for making contact! We'll be in touch soon.";
} else {
  echo "Sorry, there was an error sending your message.";
}
?>