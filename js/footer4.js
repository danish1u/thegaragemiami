jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});

	//Content Area Mods
	$(".pagecontainer > table:eq(1) tr:first td:first").addClass("estore-background");
	$(".estore-background table:eq(1)").addClass("estore-content");
	$(".estore-content>tbody>tr:nth-child(2)>td:nth-child(3)").attr('id', 'rightarea');
	$( ".estore-content>tbody>tr:nth-child(2)>td:nth-child(2)" ).remove();

	//Getting and Setting Store Categories
	if($("#estore-categories").length > 0) {
		if($("#LeftPanel .lcat").length > 0) {
			$("#estore-categories").html($("#LeftPanel .lcat").html());
		}
		$("#estore-categories ul[class=lev1]").find("li:last").addClass("estore-lastitem");
	}

	//Search Box
	var stxt = $("#estore-search #estore-input").find("input[class=v4sbox]").val();
	$("#estore-search #estore-input").find("input[class=v4sbox]").focus(function(){
		if($("#estore-search #estore-input").find("input[class=v4sbox]").val() == stxt) {
			$("#estore-search #estore-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#estore-search #estore-input").find("input[class=v4sbox]").blur(function(){
		if($("#estore-search #estore-input").find("input[class=v4sbox]").val() == "") {
			$("#estore-search #estore-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#estore-search #estore-submit").find("input").click(function(){
		if($("#estore-search #estore-input").find("input[class=v4sbox]").val() == stxt) {
			$("#estore-search #estore-input").find("input[class=v4sbox]").val("");
		}
	});



	//Footer
	var d = new Date();
	var footer = '\n\r<div class="container"><div class="footer"><div class="footersearch"><p>newsletter</p><form><div class="srchfooter"><input type="text" class="srchfoo" placeholder="Enter your email address"/><a href="http://my.ebay.com.au/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=thegaragemiami&refid=store&ssPageName=STORE:HTMLBUILDER:SIMPLEPAGE"><button class="footer-btn" type="button">Submit</button></a></div></form></div><div class="number"><img src="https://raw.githubusercontent.com/danish1u/thegaragemiami/master/Images/phone13.png" class="img-responsive" alt=""/></div><div class="socail_1"><a href="https://www.facebook.com/tyreandmechanic/"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="https://www.instagram.com/thegaragegoldcoast/"><i class="fa fa-instagram" aria-hidden="true"></i></a><a href="https://www.linkedin.com/company/18185838/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div></div></div><div class="footerbottom"><div class="container"><div class="col-lg-6 col-md-6 col-sm-12"><div class="row"><div class="footertext"><p>Copyright © 2017 thegaragemiami. All Rights Reserved.</p></div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="row"><div class="estorelogo"><span><a href="">Design By:</a></span><a href="https://www.upwork.com/o/profiles/users/_~015b640ac53e133434/"><img src="" alt="">&nbsp;&nbsp;M.Ali</a></div></div></div></div></div>';
	if(pageName != "PageAboutMeViewStore") {
		if($(".estore-content").length > 0) {
			$(".estore-content").after(footer);
		}
	}
	$V(document).ready(function(){
		$V('.rs-pview >table:first-child').removeClass('1grid');
		$V('.rs-pview >table:first-child').addClass('1grid_new');
	});
});
