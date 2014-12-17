// Printer-Friendly Script v1.1
// Have a suggestion to improve this script? Please e-mail HighWireWebAdmin@highmark.com

function popPfWin() {

	if (window.popupHandler && !window.popupHandler.closed){
		//Window is already open. Give it focus.
		window.popupHandler.location.href="about:blank";
	}
	else {
		//Open new window
		newWidth=document.body.offsetWidth-75;
		newHeight=document.body.offsetHeight-200;
		newLeft=screenLeft+25;
		newTop=screenTop+5;
		popupHandler = window.open("about:blank","_blank","location=yes,menubar=yes,scrollbars=yes,status=yes,titlebar=yes,toolbar=yes,width="+newWidth+",height="+newHeight+",left="+newLeft+",top="+newTop);
		//Bring the original window to the top to prevent a JavaScript error from closing the popup before it's finished loading.
		window.focus(); 
	}
	
	//write that all important html to the new window
	popupHandler.document.writeln('<html xmlns="http://www.w3.org/1999/xhtml"><HEAD>');
	popupHandler.document.writeln('<TITLE>');
	popupHandler.document.writeln(document.title);
	popupHandler.document.writeln('</TITLE>');
	
	for (var i=0; i<window.document.styleSheets.length; i++) {
		popupHandler.document.write('<LINK REL="stylesheet" HREF="');
		popupHandler.document.write(window.document.styleSheets[i].href);
		popupHandler.document.writeln('" TYPE="text/css">');
	}
	
	popupHandler.document.writeln('<style>#printPage,#footer { display: none; }\nBODY{background-image : none;background-color : White;}</style>');
	popupHandler.document.writeln('</HEAD>');
	popupHandler.document.writeln('<body leftmargin="5" topmargin="5" rightmargin="5" bottommargin="5">');
	popupHandler.document.write(window.document.all.contentCell.innerHTML);
	popupHandler.document.write('</BODY></HTML>');
	popupHandler.document.close();
	//Bring the popup to the front.
	popupHandler.window.focus();
}


function popPfWin2col() {

	if (window.popupHandler && !window.popupHandler.closed){
		//Window is already open. Give it focus.
		window.popupHandler.location.href="about:blank";
	}
	else {
		//Open new window
		newWidth=document.body.offsetWidth-75;
		newHeight=document.body.offsetHeight-200;
		newLeft=screenLeft+25;
		newTop=screenTop+5;	
		popupHandler = window.open("about:blank","_blank","location=yes,menubar=yes,scrollbars=yes,status=yes,titlebar=yes,toolbar=yes,width="+newWidth+",height="+newHeight+",left="+newLeft+",top="+newTop);
		//Bring the original window to the top to prevent a JavaScript error from closing the popup before it's finished loading.
		window.focus(); 
	}
	
	//write that all important html to the new window
	popupHandler.document.writeln('<html xmlns="http://www.w3.org/1999/xhtml"><HEAD>');
	popupHandler.document.writeln('<TITLE>');
	popupHandler.document.writeln(document.title);
	popupHandler.document.writeln('</TITLE>');
	
	for (var i=0; i<window.document.styleSheets.length; i++) {
		popupHandler.document.write('<LINK REL="stylesheet" HREF="');
		popupHandler.document.write(window.document.styleSheets[i].href);
		popupHandler.document.writeln('" TYPE="text/css">');
	}
	
	popupHandler.document.writeln('<style>#printPage,#footer { display: none; }\nBODY{background-image : none;background-color : White;}</style>');
	popupHandler.document.writeln('</HEAD>');
	popupHandler.document.writeln('<body leftmargin="5" topmargin="5" rightmargin="5" bottommargin="5">');
	popupHandler.document.write(window.document.all.contentCell2Col.innerHTML);
	popupHandler.document.write('</BODY></HTML>');
	popupHandler.document.close();
	//Bring the popup to the front.
	popupHandler.window.focus();
}