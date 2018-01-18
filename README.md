# Portfolio
A portfolio of my web development work, including personal projects designed using PHP, HTML/CSS, and Javascript.  A overview of each project can be found below.

Please be aware that work submitted to this repository is my own copyrighted work and is submitted only for the purposes of a porfolio. It is not being offered with any open source licensing. 


# Invisible Creations Portfolio Site - Uses PHP, Javascript, HTML, CSS
Developed January 2018
Working Link:  http://invisiblecreationsphotography.com

**Note** This was developed for use in the Chrome browser.  Additional updates will be performed to achieve full cross browser support, but are not currently in place.

Personal project displaying a small portfolio of photography work.  

Main requirements:  
•	Utilizes PHP on the Gallery.php page in order to dynamically import all JPG files located within a specific folder (adding new photographs to the website requires only that a JPG file be uploaded to the folder)  
•	PHP is used to validate data entered on the contact page form.  
•	Contact form generates emails with PHP when a comment or question is entered and validated  
•	PHP is also used to create a common page template which imports header information, navigation, and footer.  Common PHP variables are used for page title and basic meta information.  
•	Site is mobile responsive down to screens approximately 300px in width  
•	CSS Animations are utilized on main page for presentation purposes  
•	Javascript is used in combination with CSS animations to deliver photo enlargements on the Gallery.php page  



# SLC (Security Line Card) Project - Uses HTML, CSS, Javascript
Developed October 2016 - January 2017
Working Tool Link: http://securitylinecard.info (attribution can be found on line 103 of the source code)

The Security Line Card is a web comparison matrix developed as a public-facing, security vendor comparison tool for Ingram Micro clients.  The purpose of the tool is to provide customers with contact information for the supporting teams of the products.  Over 30+ vendors, 4 main product categories (all security-based), and 38 subcategories.  The tool was developed by myself near the end of 2016.

Project requirements:  
•	Tool must be developed in Javascript (access to PHP server restricted to internal access only)  
•	Tool must import all data from an external file, which can be updated regularly to reflect the regular changes that occur with vendors supported by Ingram Micro, products supported by vendor, and contact information for the product teams  
•	External data file must be in a format that can be taught to a new team member with the use of supporting documentation or comments in the file  
•	Each product cell should be formatted automatically based on the type of product entered (hardware, software, cloud)  
•	Team contact info and product info (including product website, if provided) should be displayed when hovering over each cell  
•	Client should be able to select up to 5 vendors to compare through the use of a drop-down list (list must be updated automatically based on vendors listed in external data file)  
•	Clients must also be able to remove entire vendor lines from the results if desired  
