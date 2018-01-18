var vendorCount = data.vendor.length; //total number of vendors listed
var columnCount = vendorCount + 2; //number of vendors plus columns for category and subcategory descriptions
var rowCount = 2; //accounts for top two rows, vendor names & show/hide radio buttons
var perCategoryRowSpan = {};
var currentMain = 0; //sets the index point for data.mainCategory
var currentProduct = 0; //sets the index point for data.products
var newCategoryRow = 2; //sets the row for the first category, will be updated for each category
var currentSubCategory = 0; //sets the index point for data.mainCategory[x].subCategory
var cellWidth = 50;
var categoryCells = 405;
var tableWidth = categoryCells+data.vendor.length*cellWidth;
	
window.onscroll = function() {

	document.getElementById('tableHeader').style.top = window.pageYOffset + 'px';
	
}
//calculates true row count of the table and also the number of subcategories in each main category
for (i=0;i<data.mainCategory.length;i++){
	rowCount += data.mainCategory[i].subCategory.length;
	perCategoryRowSpan[i] = data.mainCategory[i].subCategory.length;
}

function populateVendors(){
	var vendorList = '<option value="noVendor">Select Vendor</option>';
	for(colDig=1;colDig<=vendorCount;colDig++){
		vendorList += '<option value="'+(colDig+2)+'">'+data.vendor[(colDig-1)].name+'</option>';
	}
	vendorList += '</select>';
	
	return vendorList;
	//document.write(vendorList);
}

function hideVendor(colNumber,totalRows,dataCellWidth){
	tableWidth -= dataCellWidth;
	for (rowDig=1;rowDig<=totalRows;rowDig++){
		var elementHide = 'cellID'+rowDig+'-'+colNumber;
		document.getElementById(elementHide).style.display="none";
	}
	//document.getElementById(partialVendor).style.display="block";
	document.getElementById('allVendorRadio').checked=false;
	document.getElementById('tableHeader').style.width=(tableWidth)+"px";
	document.getElementById('tableData').style.width=(tableWidth)+"px";
	document.getElementById('selectAllVendors').style.display="block";
	document.getElementById('compareVendors').style.display="none";
	}
	
function hideAllVendors(totalVendors,totalRows){
	var compareVendorTableWidth = categoryCells;
	for (rowDig=1;rowDig<=totalRows;rowDig++){
		for (colDig=3;colDig<=totalVendors;colDig++){
			var elementHide = 'cellID'+rowDig+'-'+colDig;
			document.getElementById(elementHide).style.display="none";
		}
	}
	document.getElementById('allVendorRadio').checked=false;
	document.getElementById('selectAllVendors').style.display="block";
	document.getElementById('compareVendors').style.display="none";
	document.getElementById('tableHeader').style.width=(compareVendorTableWidth)+"px";
	document.getElementById('tableData').style.width=(compareVendorTableWidth)+"px";
	document.getElementById('compareVendorDiv').style.display="block";
	document.getElementById('footer').style.marginRight="5px";
}

function showVendors(totalCols,totalRows){
	tableWidth = categoryCells+data.vendor.length*cellWidth;
	for(rowDig=1;rowDig<=totalRows;rowDig++){
		for(colDig=3;colDig<=totalCols;colDig++){
			var elementShow = 'cellID'+rowDig+'-'+colDig;
			document.getElementById(elementShow).style.display="block";
		}
	}
	for(ch=0;ch<document.getElementsByName('vendorCheckbox').length;ch++){
		document.getElementsByName('vendorCheckbox')[ch].checked=true;
	}
	document.getElementById('tableHeader').style.width=(tableWidth)+"px";
	document.getElementById('tableData').style.width=(tableWidth)+"px";
	document.getElementById('selectAllVendors').style.display="none";
	document.getElementById('compareVendors').style.display="block";
	document.getElementById('compareVendorRadio').checked=false;
	document.getElementById('compareVendorDiv').style.display="none";
	document.getElementById('footer').style.marginRight="30px";
}

function compareVendorFunction(){
	var compareCount = 0;
	for(rowDig=1;rowDig<=rowCount;rowDig++){
		for(colDig=3;colDig<=columnCount;colDig++){
			if(document.getElementById('vendorNames1').value==colDig){
				var elementShow = 'cellID'+rowDig+'-'+colDig;
				document.getElementById(elementShow).style.display="block";
			} else if(document.getElementById('vendorNames2').value==colDig){
				var elementShow = 'cellID'+rowDig+'-'+colDig;
				document.getElementById(elementShow).style.display="block";
			} else if(document.getElementById('vendorNames3').value==colDig){
				var elementShow = 'cellID'+rowDig+'-'+colDig;
				document.getElementById(elementShow).style.display="block";
			} else if(document.getElementById('vendorNames4').value==colDig){
				var elementShow = 'cellID'+rowDig+'-'+colDig;
				document.getElementById(elementShow).style.display="block";
			} else if(document.getElementById('vendorNames5').value==colDig){
				var elementShow = 'cellID'+rowDig+'-'+colDig;
				document.getElementById(elementShow).style.display="block";
			}
		}
		var elementShow = 'cellID'+rowDig+'-'+columnCount;
		document.getElementById(elementShow).style.display="block";
	}
	
	for(i=1;i<=5;i++){
		var tempText = 'vendorNames'+i;
		if(document.getElementById(tempText).value!='noVendor'){
			compareCount += 1;
		}
	}
	tableWidth = categoryCells+(compareCount+1)*cellWidth;
	document.getElementById('compareVendorDiv').style.display="none";
	document.getElementById('tableHeader').style.width=(tableWidth)+"px";
	document.getElementById('tableData').style.width=(tableWidth)+"px";
	document.getElementById('footer').style.marginRight="30px";
}

//Main function which creates the comparison matrix and writes the page HTML
function createTable(){
	document.write('<div id="results"><span></span><div id="tableHeader" style="width: '+tableWidth+'px;"><span></span>');
	for(r=0; r<rowCount; r++){ //creates each row in table
		if(r==2){
			document.write('</div><div id="tableData" style="width: '+tableWidth+'px;">')
		} else {
			document.write('<div class="row">');
		}
		for(c=0; c<columnCount; c++){ //create each cell in row
			var cellID = "cellID"+(r+1)+"-"+(c+1);
			if(r==0 && c==0){ //key cell
				document.write('<div id="'+cellID+'" class="keyCell" colspan="2"><a href="https://ingrammicro.com"><img src="http://www.securitylinecard.info/files/theme/linecard/images/imLogo.png"></a><br /><span id="keyCellContainer">');
				document.write('<br /><div class="keyLeftofEqual">HW </div>= Hardware Only');
				document.write('<br /><div class="keyLeftofEqual">SW </div>= Software Only');
				document.write('<br /><div class="keyLeftofEqual">H/S </div>= Hardware & Software Options');
				document.write('<br /><div><div class="keyLeftofEqual"><img class="keyImage" src="http://www.securitylinecard.info/files/theme/linecard/images/blueSquare.png"> </div><div class="keyAlign">= Cloud Options</div></span></div></div>'); 
			} else if (r==0 && c==1){ //placeholder for non-existent cell
				//**LEAVE BLANK**
			} else if (r==0 && c>1){//vendor names
				if (c==columnCount-1){
					document.write('<div id="'+cellID+'" '+'class="rotateContainer rcLast" name="'+data.vendor[c-2].shorthand+'"><div><span></span></div></div>');
				} else {
					document.write('<div id="'+cellID+'" '+'class="rotateContainer" name="'+data.vendor[c-2].shorthand+'"><div><span><a href="'+data.vendor[c-2].website+'">'+data.vendor[c-2].name+'</a></span></div></div>');
				}				 
			} else if (r==1 && c==0){
				document.write('<div id="'+cellID+'" colspan="2" class="allVendorCheck">');
				document.write('<div id="selectAllVendors" style="display: none;"><input type="radio" value="All Vendors" id="allVendorRadio" onclick="showVendors('+(data.vendor.length+2)+','+rowCount+')" checked>Show all Vendors</div>');
				document.write('<div id="compareVendors" style="display: block;"><input type="radio" value="All Vendors" id="compareVendorRadio" onclick="hideAllVendors('+(data.vendor.length+2)+','+rowCount+')"><span class="allVendorH3">Compare Specific Vendors</span></div></div>');
			} else if (r==1 && c==1){ //placeholder for merged cell
				//**LEAVE BLANK**
			} else if (r==1 && c>1){
				var onChangeName = "'"+data.vendor[c-2].shorthand+"'";
				if (c==columnCount-1){
					document.write('<div id="'+cellID+'" '+ 'class="vendorCheck vcLast" name="'+data.vendor[c-2].shorthand+'"></div>');
				} else {
					document.write('<div id="'+cellID+'" '+ 'class="vendorCheck" name="'+data.vendor[c-2].shorthand+'"><input type="checkbox" name="vendorCheckbox" onchange="hideVendor('+(c+1)+','+rowCount+','+cellWidth+')" checked></div>');
				}
			} else if (r==newCategoryRow && c==0){ //main category names
				//alert(newCategoryRow);
				if(newCategoryRow-2==0){
					document.write('<div class="subCategoryContainer">');
				} else {
					document.write('</div><div class="subCategoryContainer">')
				}
				var vendor = data.mainCategory[currentMain].name;
				var mainCategoryHeight = perCategoryRowSpan[currentMain]*40;
				var vendorLineBreak = vendor.split("~");
				if(vendorLineBreak.length > 1){
					document.write('<div id="'+cellID+'" class="primaryCategoryMultiRow" style="height: '+mainCategoryHeight+'px; '+data.mainCategory[currentMain].cellColor+'" rowspan='+perCategoryRowSpan[currentMain]+'><div style="width: '+(mainCategoryHeight)+'px; left: -'+(mainCategoryHeight)+'px;"><span class="spanPrimaryCategoryMultiRow">'+vendorLineBreak[0]);
					for(b=1;b<vendorLineBreak.length;b++){
						document.write('<br />'+vendorLineBreak[b]);
					}
				} else {
					document.write('<div id="'+cellID+'" class="primaryCategory" style="height: '+mainCategoryHeight+'px; '+data.mainCategory[currentMain].cellColor+'" rowspan='+perCategoryRowSpan[currentMain]+'><div style="width: '+(mainCategoryHeight)+'px; left: -'+(mainCategoryHeight)+'px;"><span class="spanPrimaryCategory">'+vendorLineBreak[0]);
				}
				document.write('</span></div></div>'); 
				newCategoryRow += perCategoryRowSpan[currentMain];
				currentMain++;
			} else if (r<newCategoryRow && c==0){ //placeholder for non-existent cell
				//**LEAVE BLANK**  
			} else if (c==1){ //sub category names
				if(data.mainCategory[currentMain-1].subCategory[currentSubCategory].multiLineSubCategory=="yes"){
					var SubCatLinePadding = 'style="padding-top: 0;"'
				} else {
					var SubCatLinePadding = '';
				}
				var techDescriptionPopup = "";
				if(data.mainCategory[currentMain-1].subCategory[currentSubCategory].popupDesc != ""){
					techDescriptionPopup = '<div class="categoryInfoContainer"><div class="categoryInfo"><p>'+data.mainCategory[currentMain-1].subCategory[currentSubCategory].popupDesc+'</p></div></div>';
				}
				if(currentMain%2==1){
					document.write('<div id="'+cellID+'" '+SubCatLinePadding+' class="subCategoryColor1"><span>'+data.mainCategory[currentMain-1].subCategory[currentSubCategory].name+techDescriptionPopup+'</span></div>');
				} else {
					document.write('<div id="'+cellID+'" '+SubCatLinePadding+' class="subCategoryColor2"><span>'+data.mainCategory[currentMain-1].subCategory[currentSubCategory].name+techDescriptionPopup+'</span></div>');
				}
			} else {
				if(currentProduct < data.products.length && data.mainCategory[currentMain-1].subCategory[currentSubCategory].name == data.products[currentProduct].category && data.products[currentProduct].vendorShort == data.vendor[c-2].shorthand){
					var prodClass;
					if(data.products[currentProduct].cloud == ""){
						prodClass = 'dataCell noCloud';
					} else {
						prodClass = 'dataCell yesCloud';
					}
					if(c==columnCount-1){
						prodClass = 'dataLastCell';
					}
					var prodContact = "";
					prodContact = '<p class="popupContacts">';
					if(data.products[currentProduct].preferredContact != ""){
						prodContact += 'Preferred Contact: ' +data.products[currentProduct].preferredContact + '<br>';
					}
					if(data.vendor[c-2].tech != ""){
					 prodContact += 'Pre-sale Technical Support: ' +data.vendor[c-2].tech;
					}
					if(data.vendor[c-2].tam != ""){
					 prodContact += '<br>Technical Account Manager: ' +data.vendor[c-2].tam;
					}
					if(data.vendor[c-2].tc != ""){
					 prodContact += '<br>Technical Consultant: ' +data.vendor[c-2].tc;
					}
					if(data.vendor[c-2].sce != ""){
					 prodContact += '<br>Solution Center Expert: ' +data.vendor[c-2].sce;
					}
					prodContact += '</p>';
					
					var prodProduct = "";
					if(data.products[currentProduct].productName != ""){
						if(data.products[currentProduct].website == ""){
							prodProduct = '<h5>Products:</h5><p class="popupProducts">'+data.products[currentProduct].productName +'</p>';
						} else {
							prodProduct = '<h5>Products:</h5><p class="popupProducts"><a class="productLink" target="_blank" href="'+data.products[currentProduct].website+'">'+data.products[currentProduct].productName +'</a></p>';
						}
					}
					document.write('<div id="'+cellID+'" name="'+data.vendor[c-2].shorthand+'" class="'+prodClass+'"><span>'+data.products[currentProduct].notation+'<div class="productInfoContainer"><div class="productInfo"><h5>'+data.vendor[c-2].name+' Contacts:</h5>'+prodContact+prodProduct+'</div></div></span></div>');
					//document.write('<div>'+currentMain-1+' - '+currentSubCategory+'</div>');
					currentProduct++;
				} else {
					document.write('<div id="'+cellID+'" name="'+data.vendor[c-2].shorthand+'" class="dataCell noInfo">'/*+(currentMain-1)+'-'+(c-2)*/+'</div>'); //hardware/software/cloud cells
				}
			}
			if(r > 1 && c == columnCount-1){
				currentSubCategory++ ;
				if(currentSubCategory>=(data.mainCategory[currentMain-1].subCategory.length)){
					currentSubCategory = 0;
				}
			}
		}
		document.write('</div>');
	}
	//footer section
	document.write('<div id="footer"><span id="footerNotes">*All Validation is Subject to Change</span><div id="credit">Tool Maintained by Tom Mroz  Property of Ingram Micro inc.</div></div>')
	document.write('</div>');
	
	//Popup Compare Vendor Section
	document.write('<div id="compareVendorDiv" style="display: none;">');
	document.write('<form id="compareVendorForm">');
	document.write('<h3>Please Select up to 5 Vendors for comparison</h3>');
	document.write('<span>Vendor 1: <select class="selectVendorClass" name="vendorNames1" id="vendorNames1">'+populateVendors());
	document.write('<br />Vendor 2: <select class="selectVendorClass" name="vendorNames2" id="vendorNames2">'+populateVendors());
	document.write('<br />Vendor 3: <select class="selectVendorClass" name="vendorNames3" id="vendorNames3">'+populateVendors());
	document.write('<br />Vendor 4: <select class="selectVendorClass" name="vendorNames4" id="vendorNames4">'+populateVendors());
	document.write('<br />Vendor 5: <select class="selectVendorClass" name="vendorNames5" id="vendorNames5">'+populateVendors());
	document.write('<br /><button type="button" class="selectVendorButton" onclick="compareVendorFunction()">Compare Vendors</button>');
	document.write('</span></form>')
	document.write('</div></div>');
}
