

var addHeader = function(){

	var row = document.createElement("div");
	var small = document.createElement("small"); 
	var newDiv = document.createElement( "div");
	$(newDiv).addClass("col-lg-12");
	var h1 = document.createElement("h1");
	$(h1).addClass("page-header");
	$(h1).append("Hassan").append($(small));
	$(newDiv).append($(h1));
	$(row).addClass("row").append($(newDiv));
	$(".content").append($(row));

};


var addFooter = function(){

	var footer = document.createElement("footer");
	var div_p = document.createElement("div");
	$(div_p).addClass("col-lg-12");
	$(div_p).append($(p));
	var div_div = document.createElement("div");
	$(div_div).addClass("row").append($(div_p));
	$(footer).append($(div_div));
	$(".content").append($(footer));
}

var constructColumn = function(image_path, header, paragraph){

	var a = document.createElement("a");
	var h3 = document.createElement("h3");
	$(a).html(header);
	$(a).attr("href",image_path);
	$(h3).append($(a));
    
	var img = document.createElement("img");
	var img_a = document.createElement("a");
	$(img).addClass("img-responsive");
	$(img).attr("src",image_path);
	$(img_a).attr("href",image_path);
	$(img_a).append($(img));

	var p = document.createElement("p");
	$(p).html(paragraph);

	var col = document.createElement("div");
	$(col).addClass("col-md-4").addClass("portfolio-item");
	$(col).append($(img_a));
	$(col).append($(h3));
	$(col).append($(p));	

	return $(col);
};

var get_column = function(row, column){
	return locations && locations[row][column];
}

var column_hash = ["first_column","second_column","third_column"];

var row_hash = ["first_row", "second_row", "third_row"];

var addColumnsToARow = function(row_name){

	var row = document.createElement("div");
	var column, header, image_path, paragraph, col;

	for ( var i = 0;i < column_hash.length; i++){
		column = get_column(row_name,column_hash[i]);
		header = column["header"];
		image_path = column["image"];
		paragraph = column["paragraph"];
		col = constructColumn(image_path, header, paragraph);
		$(row).addClass("row").append($(col));
	}
	$(".content").append($(row));

};

var addRowsToContainer = function(){
	for(var i=0; i<row_hash.length;i++){
		addColumnsToARow(row_hash[i]);
	}
}


$( document ).ready(function() {
    console.log( "ready!" );
    addHeader();
    addRowsToContainer();
    addFooter();

});



