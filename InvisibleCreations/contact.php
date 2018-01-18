<?php 
    $metaTitle = 'Contact';
    $metaDescription = 'Looking to contact Invisibile Creations Photography?  Then look no further!  All of our contact information can be found here.';
    include("includes/header.php"); 
    include("includes/contactValidation.php");
?>


    <div id="contact">
        <h2>Contact Us</h2>
        <p>Do you have a question you'd like to ask, such as information on the shots themselves or even how to order a print?  Or perhaps some suggestions on the type of images you'd like to see?  Or even some feedback relating to anything from the website to my photographic work?  While I'm hopeful that your experience browsing through InvisibleCreationsPhotography.com has been a pleasant one, whatever your question or concern, I'd like to hear from you!
        </p>
        <p>At this time, there are two main methods of contact:  
            <ol type="1">
                <li>You can either fill out the below form and submit your request or comment through the website.</li>
                <li>Or if you'd prefer, you can send me an email directly at <a href="mailto:sean@invisiblecreationsphotography.com">Sean@InvisibleCreationsPhotography.com</a></li>
            </ol>
        </p>
    </div>
    <div id="contactForm">
        <h2>Contact Form</h2>
        <form action="contact.php" method="post">
            <fieldset>
                <span class="contactError"><?php echo $error_fname; ?></span><br /><input type="text" name="fname" placeholder="First Name" tabindex=1 value="<?php populatePostData($fname); ?>">
            </fieldset>
            <fieldset>
                <span class="contactError"><?php echo $error_lname; ?></span><br /><input type="text" name="lname" placeholder="Last Name" tabindex=2 value="<?php populatePostData($lname); ?>">
            </fieldset>
            <fieldset>
                <span class="contactError"><?php echo $error_email; ?></span><br /><input class="longerField" type="text" name="email" placeholder="Email Address" tabindex=3 value="<?php populatePostData($email); ?>">
            </fieldset>
            <fieldset>
                <span class="contactError"><?php echo $error_website; ?></span><br /><input class="longerField" type="text" name="website" placeholder="What is your website? (optional)" tabindex=4 value="<?php populatePostData($website); ?>">
            </fieldset>
            <fieldset>
                <span class="contactError"><?php echo $error_question; ?></span><br /><textarea type="text" name="question" placeholder="Type your question or message here...." tabindex=5><?php populatePostData($question); ?></textarea>
            </fieldset>
            <fieldset id="contactSubmit">
                <input type="submit" value="Submit" name="submit" tabindex=5>
            </fieldset>
        </form>
    </div>

<?php include("includes/footer.php"); ?>
