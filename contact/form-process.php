<?php

$errorMSG = "";

// FIRST NAME
if (empty($_POST["firstname"])) {
    $errorMSG = "First Name is required";
} else {
    $firstname = $_POST["firstname"];
}

// LAST NAME
if (empty($_POST["lastname"])) {
    $errorMSG = "Last Name is required";
} else {
    $lastname = $_POST["lastname"];
}

// COUNTRY
$country = $_POST["country"];

// STREET ADDRESS
$streetaddress = $_POST["streetaddress"];

// CITY
$city = $_POST["city"];

// POST CODE
$postcode = $_POST["postcode"];


// TELEPHONE
$telephone = $_POST["telephone"];

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["enquiry"])) {
    $errorMSG .= "Enquiry is required";
} else {
    $enquiry = $_POST["enquiry"];
}


$EmailTo = "mohomed.anees@gmail.com";
$Subject = "Enquiries from contact form";

// prepare email body text
$Body = "";
$Body .= "First Name: ";
$Body .= $firstname;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $lastname;
$Body .= "\n";
$Body .= "Country: ";
$Body .= $country;
$Body .= "\n";
$Body .= "City: ";
$Body .= $city;
$Body .= "\n";
$Body .= "Street Address: ";
$Body .= $streetaddress;
$Body .= "\n";
$Body .= "Postcode: ";
$Body .= $postcode;
$Body .= "\n";
$Body .= "Telephone: ";
$Body .= $telephone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Enquiry: ";
$Body .= $enquiry;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>