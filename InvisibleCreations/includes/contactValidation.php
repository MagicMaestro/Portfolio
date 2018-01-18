<?php

$error_fname = "";
$error_lname = "";
$error_email = "";
$error_website = "";
$error_question = "";
$fname = "";
$lname = "";
$email = "";
$website = "";
$question = "";

//if statement ensures code is not executed until clicking 'Submit'
if(isset($_POST['submit'])) {
    if(empty($_POST["fname"])){
        $error_fname = 'Please enter your First Name';
    } else {
        $fname = validateInput($_POST["fname"]);
        if( !preg_match("/^[a-zA-Z]*$/",$fname)) {
            $error_fname = 'Please use only letters in First Name';
        }
    }
    if(empty($_POST["lname"])){
        $error_lname = 'Please enter your Last Name';
    } else {
        $lname = validateInput($_POST["lname"]);
        if( !preg_match("/^[a-zA-Z]*$/",$lname)) {
            $error_lname = 'Please use only letters in Last Name';
        }
    }
    if(empty($_POST["email"])){
        $error_email = 'A valid email is required';
    } else {
        $email = validateInput($_POST["email"]);
        if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
          $error_email = "Please enter a valid email address"; 
        }
    }
    if(!empty($_POST["website"])){
        $website = validateInput($_POST["website"]);
        //if statement to append http:// to url, if omitted
        if (!preg_match("~^(?:f|ht)tps?://~i", $website)) {
            $website = "http://" . $website;
        }
        //if statement to validate the url is valid
        if(!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)){
            $error_website = 'The website entered is invalid';
        }
    } else {
        $website = "None Provided";
    }
    if(empty($_POST["question"])){
        $error_question = 'Please type your question or comment';
    } else {
        $question = validateInput($_POST["question"]);
    }
    
    
    //if there are no errors generated, proceed to emailing message
    if($error_fname == '' && $error_lname == '' && $error_email =='' && $error_website == '' && $error_question == ''){
        $subject = "Question/Comment from " . $fname . " on InvisibleCreationsPhotography.com";
        $vSubject = "InvisibleCreationsPhotography.com has received your message!";
        $message = "You've received a question/comment from someone on InvisibleCreationsPhotography.com. The message details are included below:
            
            Name: $fname $lname
            E-mail: $email
            Website: $website
            Comment: $question
            
            For their own records, " . $fname . " has been sent a confirmation email at the same time as this message.";
        $vMessage = "Hello $fname,
        
        This email is to confirm that your recent message to InvisibleCreationsPhotography.com has been received.  Please be aware that while we try to answer each and every communication as quickly as possible, it may take up to 48 hours before we can respond.
        
            Here is the information you provided us:
                Name: $fname $lname
                E-mail: $email
                Website: $website
                Question or Comment: $question
                
            If you notice an error in the above information, please feel free to respond to this email with the corrected info.  Othwerwise, we'll respond to your feedback shortly.
            
            Thanks,
            
            Sean Reardon
            InvisibleCreationsPhotography.com";
        $header = "From: /* stripped for privacy */";
        $vHeader = "From: /* stripped for privacy */";
        mail("/* stripped for privacy */",$subject,$message,$header);
        mail($email,$vSubject,$vMessage,$vHeader);
        echo "<script type='text/javascript'>alert('Message Delivered');</script>";
    }
}

//standard function to strip white space, slashes, and special characters
function validateInput($inputData) {
    $inputData = trim($inputData);
    $inputData = stripslashes($inputData);
    $inputData = htmlspecialchars($inputData);
    
    return $inputData;
}

//function will populate all data back into contact form fields after clicking 'Submit'
function populatePostData($PostData){
    if($PostData != ''){
        echo $PostData;
    }
}
?>
