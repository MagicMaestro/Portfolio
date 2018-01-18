<?php 
    $metaTitle = 'Invisible Creations Photography';
    $metaDescription = 'Invisible Creations specializes in a different form of photography involving infrared light.  Each unique image captures the undiscovered beauty of the invisible spectrum, allowing us a glimpse of the unseen.';
    include("includes/header.php"); 
?>

    <div class="contentText">
        <h2>Welcome to Invisible Creations Photography!</h2>
    </div>
    <div id="featured">
        
        <ul id="featuredImages">
            
            <?php
            
                $featuredPhotos = ["IR-Desert_Tree-RedRockCanyon2017.jpg","IR-Cactus-RedRockCanyon2017.jpg","Color-Building_Ruins-ValleyForge2013.jpg","IR-Santa_Maria_Bell_Tower-Italy2017.jpg","IR-Ship_Propeller-Iceland_Reyjkavik2017.jpg","IR-Elephant-Disney2016.jpg","Color-Aurora_Borealis_Shipwreck-Iceland_NorthernLights2017.jpg","IR-Colosseum-Italy2017.jpg"];
                $dirName = "galleryImages/";
                $centerFeatureEcho = '<div id="centerFeature">';

                for($i=0; $i<count($featuredPhotos); $i++){
                    $imageDir = $dirName.$featuredPhotos[$i];
                    $imageSize = getimagesize($imageDir);
                    $width = $imageSize[0];
                    $height = $imageSize[1];
                    if($width > $height){
                        $orientation = "horizontalFeatureRotate";
                        $orientationFeature = "horizontalFeatureImage";
                        $marginPercentage = 100* (1 - $height / $width) / 2;
                        $marginValue = "$marginPercentage% 0";
                    } else {
                        $orientation = "verticalFeatureRotate";
                        $orientationFeature = "verticalFeatureImage";
                        $marginPercentage = 100 * (1 - $width / $height) / 2;
                        $marginValue = "0 $marginPercentage%";
                    }
                    echo '<li class="featuredImage"><img class="'.$orientation.'" style="margin: '.$marginValue.'" src="'.$imageDir.'" /></li>';
                    
                    $centerFeatureEcho .= '<img class="featuredSwap '.$orientationFeature.'" style="margin: '.$marginValue.'" src="'.$imageDir.'" />';
                }
                
                echo '</ul>'.$centerFeatureEcho.'</div>';
                
                
            
            ?>
            
    </div><!-- end of featured -->

<?php include("includes/footer.php"); ?>
