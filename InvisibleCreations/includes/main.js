var jsFeatureImage = document.getElementsByClassName("featuredImage");
var jsGalleryImage = document.getElementsByClassName("thumbList");
var jsGalleryClose = document.getElementById("closeImage");
var jsEnlargedImage = document.getElementById("enlargedImage");
var jsEnlargedImageBG = document.getElementById("enlargedImageBG");
var jsMobileNav = document.getElementById("mobileNav");
var jsNavUL = document.getElementById("nav").children[1];

//Navigation:  relies on the value of a property (which is set in a mobile responsive CSS file) to show/hide the mobile navigation menu
function displayMobileNav(){
    if(window.getComputedStyle(jsNavUL,null).getPropertyValue("display") == "none") {
        jsNavUL.style.display = "block";
    } else {
        jsNavUL.style.removeProperty("display");
    }
}


//Home Page:  clicking on a rotating (or B&W to Color) image opens selected image in main Image div
function selectFeaturedImage(){
    var fullClass = this.children[0].className;
    if(fullClass == "horizontalFeatureRotate"){
        imgClass = "horizontalFeatureImage";
    } else {
        imgClass = "verticalFeatureImage";
    }
    var imgURL = this.children[0].getAttribute('src');
    var imgMargin = this.children[0].getAttribute('style');
    document.getElementById("centerFeature").innerHTML = '<img class="' + imgClass + '" src="' + imgURL + '" style="' + imgMargin + '" />';
    if(window.getComputedStyle(this,null).getPropertyValue("animation-name") == "BWtoColor" || window.getComputedStyle(this,null).getPropertyValue("animation-name") == "unknown") {
        for(var i = 0; i < jsFeatureImage.length; i++){
            jsFeatureImage[i].style.WebkitAnimationName = "unknown";
            jsFeatureImage[i].style.animationName = "unknown";
            jsFeatureImage[i].style.webkitFilter = "grayscale(100%)";
            jsFeatureImage[i].style.filter = "grayscale(100%)";
        }
        this.style.webkitFilter = "grayscale(0)";
        this.style.filter = "grayscale(0)";
    }
}

//Gallery Page:  expands gallery image to full screen when clicked
function enlargeGalleryImage(){
    var galleryH = window.innerHeight;
    var galleryW = window.innerWidth;
    var galleryURL = this.children[0].children[0].getAttribute('src');
    var galleryMargin = this.children[0].children[0].getAttribute('style');
    var fullGalleryClass = this.children[0].children[0].className;
    var splitClass = fullGalleryClass.split(" ");
    var galleryClass = '';
    var galleryBoxSize;
    if (splitClass[0] == "horizontalImage") {
        galleryClass = "enlargedHorizontalImage";
    } else {
        galleryClass = "enlargedVerticalImage";
    }
    
    if (galleryH > galleryW) {
        galleryBoxSize = galleryW - 25;
    } else {
        galleryBoxSize = galleryH - 25;
    }
    var galleryTop = (galleryH - galleryBoxSize) / 2;
    var galleryLeft = (galleryW - galleryBoxSize) / 2;
    
    document.body.style.overflow = 'hidden';
    
    document.getElementById("enlargedImageBG").style.display = 'block';
    jsEnlargedImage.style.height = galleryBoxSize + 'px';
    jsEnlargedImage.style.width = galleryBoxSize + 'px';
    jsEnlargedImage.style.top = galleryTop + 'px';
    jsEnlargedImage.style.left = galleryLeft + 'px';

    //alert(galleryClass);
    
    jsEnlargedImage.innerHTML = '<img class="' + galleryClass + '" src="' + galleryURL + '" style="' + galleryMargin + '">';
    jsEnlargedImageBG.style.WebkitAnimationName = 'fadeInGalleryImage';
    jsEnlargedImageBG.style.animationName = 'fadeInGalleryImage';
    jsEnlargedImage.style.WebkitAnimationName = "zoomInGalleryImage";
    jsEnlargedImage.style.animationName = "zoomInGalleryImage";
}

//Gallery Page:  closes full screen gallery image
function closeGalleryImage(){
    //document.getElementById("enlargedImageBG").style.display = 'none';
    document.body.style.overflow = 'visible';
    jsEnlargedImage.style.WebkitAnimationName = 'zoomOutGalleryImage';
    jsEnlargedImage.style.animationName = 'zoomOutGalleryImage';
    jsEnlargedImageBG.style.WebkitAnimationName = 'fadeOutGalleryImage';
    jsEnlargedImageBG.style.animationName = 'fadeOutGalleryImage';
    setTimeout(function(){jsEnlargedImageBG.style.display = 'none';},800);
}

jsMobileNav.addEventListener('click',displayMobileNav);

if(jsFeatureImage[0]) {  //checks page for #featuredImage
    for (var i = 0; i < jsFeatureImage.length; i++) {
        jsFeatureImage[i].addEventListener('click', selectFeaturedImage);
    }
}
if(jsGalleryImage[0]) { //checks page for .thumbList
    for (var i = 0; i < jsGalleryImage.length; i++) {
        jsGalleryImage[i].addEventListener('click', enlargeGalleryImage);
    }
}
if(jsGalleryClose) { //checks page for .closeImage
    jsGalleryClose.addEventListener('click', closeGalleryImage);
}

