<!-- TWO STEPS TO INSTALL POPUP WINDOW:

   1.  Paste the first into the HEAD of your HTML document
   2.  Use the code to open the popup page on your site  -->

<!-- STEP ONE: Copy this code into the HEAD of your HTML document  -->

<HEAD>

<script type="text/javascript" language="JavaScript">
<!-- Idea by:  Nic Wolfe -->
<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=600,height=400,left = 340,top = 312');");
}
// End -->
</script>


<!-- STEP TWO: Use the following link to open the new window -->

<A HREF="javascript:popUp('#')">Open the Popup Window</A>

<!-- Script Size:  0.73 KB  -->