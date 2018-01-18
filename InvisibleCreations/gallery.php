<?php 
    $metaTitle = 'Invisible Creations Gallery';
    $metaDescription = 'Check out the gallery to see a mixture of infrared 
        photos (made with invisible light) as well as color photographs.  I\'m 
        proud of my work, and I\'m glad to share it with you!';
    include("includes/header.php"); 
?>

        <?php 
            $dirname = "galleryImages/";
            $photos = glob($dirname."*.jpg");
            
            foreach($photos as $photo) {
                $size = getimagesize($photo);
                $width = $size[0];
                $height = $size[1];
                if($width > $height){
                    $orientationClass = "horizontalImage";
                    $marginPercent = 100 * (1 - $height / $width) / 2;
                    $marginValue = "$marginPercent%";
                } else {
                    $orientationClass = "verticalImage";
                    $marginValue = "0";
                }
                echo '<div class="thumbList"><a href="#"
                    ><img class="'.$orientationClass.' thumbImages" style
                    ="margin: '.$marginValue.' 0;" src="'.$photo.'" /></a></div
                    >';
            }
            
        ?>
        
    <div id="enlargedImageBG" style="display: none">
        <div id="closeImage"></div>
        <div id="enlargedImage"></div>
    </div>
        
<?php include("includes/footer.php"); ?>
