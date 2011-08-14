////////////////////////////////////////////////////////////////////////////////
// The s4sagar_Search() function will perform a Google search for us. The two
// parameters that get passed in are the event that triggered this function
// call, and the type of search to perform.
////////////////////////////////////////////////////////////////////////////////
function s4sagar_Search(event, type)
{
    // This variable will hold the URL we will browse to
    var URL = "";

    // This variable will tell us whether our search box is empty or not
    var isEmpty = false;

    // Get a handle to our search terms box (the <menulist> element)
    var searchTermsBox = document.getElementById("s4sagar-SearchTerms");
    
    // Get the value in the search terms box, trimming whitespace as necessary
    // See the s4sagar_TrimString() function farther down in this file for details
    // on how it works.
    var searchTerms = s4sagar_TrimString(searchTermsBox.value);

    if(searchTerms.length == 0) // Is the search terms box empty?
        isEmpty = true;         // If so, set the isEmpty flag to true
    else                        // If not, convert the terms to a URL-safe string
        searchTerms = s4sagar_ConvertTermsToURI(searchTerms);

    // Now switch on whatever the incoming type value is
    // If the search box is empty, we simply redirect the user to the appropriate
    // place s4sagar_LoadURLat the Google website. Otherwise, we search for whatever they entered.

    switch(type)
    {
    // Build up the URL for an image search
    case "image":
        if(isEmpty) { URL = "http://images.google.com/"; }
        else        { URL = "http://images.google.com/images?q=" + searchTerms; }
        break;


    // Build up the URL for a web search
    case "wiki": 
    	if(isEmpty) { URL = "http://en.wikipedia.org/wiki/"; }
        else        { searchTerms=s4sagar_wikify(searchTerms);URL = "http://en.wikipedia.org/wiki/" + searchTerms; }
        break;
    case "web":
    default:
        if(isEmpty) { URL = "http://www.google.com/"; }
        else        { URL = "http://www.google.com/search?q=" + searchTerms; }
        break;
    case "publishf":
    searchTerms=document.title;
    searchTerms=searchTerms.replace(" - Mozilla Firefox","");
    searchTerms = s4sagar_TrimString(searchTerms);
    searchTerms=searchTerms.replace(/\s+/g, '+');	
    var u = window._content.document.location;
    isEmpty=(u.length==0)
    	if(isEmpty) { URL = "http://www.addthis.com/bookmark.php?v=250&url=http%3A%2F%2Fs4sagar.wordpress.com%2F2010%2F01%2F19%2Fmy-toolbar-for-firefox-especially-for-sastra-students%2F&title=Vidya%20Sagar's%20Toolbar%20For%20Firefox%2C%20Especially%20for%20SASTRA%20Students%20%C2%AB%20Vidya%20Sagar%E2%80%99s%20Blog&source=fxe-2.1.1&s=twitter&pub=false"; }
        else        { 
        //searchTerms=searchTerms.replace(\s-\s.*$/,'');
        URL = "http://www.addthis.com/bookmark.php?v=250&url="+u+"title="+searchTerms+"&source=fxe-2.1.1&s=facebook&pub=false";
        }
        break;
        
       case "publisht":
       searchTerms=document.title;
       
    //searchTerms.replace(\s-\s.*$/,'');
    searchTerms=searchTerms.replace(" - Mozilla Firefox","");
    searchTerms = s4sagar_TrimString(searchTerms);
    searchTerms=searchTerms.replace(/\s+/g, '+');
    var u = window._content.document.location;
    isEmpty=(u.length==0);
    	if(isEmpty) { URL = "http://www.addthis.com/bookmark.php?v=250&url=http%3A%2F%2Fs4sagar.wordpress.com%2F2010%2F01%2F19%2Fmy-toolbar-for-firefox-especially-for-sastra-students%2F&title=Vidya%20Sagar's%20Toolbar%20For%20Firefox%2C%20Especially%20for%20SASTRA%20Students%20%C2%AB%20Vidya%20Sagar%E2%80%99s%20Blog&source=fxe-2.1.1&s=twitter&pub=false"; }
        else        { 
        URL = "http://twitter.com/home?status="+searchTerms+"+"+u+"+via+@qtwt";
        
        }
        break;
        
      case "posttweet":
	if(isEmpty) { URL = "http://www.addthis.com/bookmark.php?v=250&url=http%3A%2F%2Fs4sagar.wordpress.com%2F2010%2F01%2F19%2Fmy-toolbar-for-firefox-especially-for-sastra-students%2F&title=Vidya%20Sagar's%20Toolbar%20For%20Firefox%2C%20Especially%20for%20SASTRA%20Students%20%C2%AB%20Vidya%20Sagar%E2%80%99s%20Blog&source=fxe-2.1.1&s=twitter&pub=false"; }
	else URL = "http://twitter.com/home?status="+searchTerms;
    	break;
    	}
    
    // Load the URL in the browser window using the s4sagar_LoadURL function
    s4sagar_LoadURL(URL);
}

function s4sagar_linkify(event,where) {
	switch(where) {
		case "GMAIL":s4sagar_LoadURL("http://mail.google.com");break;
		case "TWITTER":s4sagar_LoadURL("http://twitter.com/");break;
		case "parents":s4sagar_LoadURL("http://www.sastra.edu/content/amenities/Parentscorner.htm");break;				
		case "tube":s4sagar_LoadURL("http://www.youtube.com");break;
		case "cric":s4sagar_LoadURL("http://www.cricinfo.com");break;				
		case "orkut":s4sagar_LoadURL("http://www.orkut.com");break;
		case "face":s4sagar_LoadURL("http://www.facebook.com");break;				
		case "news":s4sagar_LoadURL("http://www.hindustantimes.com");break;		
		case "blog":s4sagar_LoadURL("http://www.blogger.com/home");break;
		case "word":s4sagar_LoadURL("http://wordpress.com/");break;		
		case "daksh":s4sagar_LoadURL("http://daksh.sastra.edu/");break;
		case "tweet":s4sagar_LoadURL("http://www.addthis.com/bookmark.php?v=250&url=http%3A%2F%2Fs4sagar.wordpress.com%2F2010%2F01%2F19%2Fmy-toolbar-for-firefox-especially-for-sastra-students%2F&title=Vidya%20Sagar's%20Toolbar%20For%20Firefox%2C%20Especially%20for%20SASTRA%20Students%20%C2%AB%20Vidya%20Sagar%E2%80%99s%20Blog&source=fxe-2.1.1&s=twitter&pub=false");break;
		case "share":s4sagar_LoadURL("http://www.addthis.com/bookmark.php?v=250&url=http%3A%2F%2Fs4sagar.wordpress.com%2F2010%2F01%2F19%2Fmy-toolbar-for-firefox-especially-for-sastra-students%2F&title=Vidya%20Sagar's%20Toolbar%20For%20Firefox%2C%20Especially%20for%20SASTRA%20Students%20%C2%AB%20Vidya%20Sagar%E2%80%99s%20Blog&source=fxe-2.1.1&s=facebook&pub=false");break;
		}		
}

////////////////////////////////////////////////////////////////////////////////
// The s4sagar_TrimString() function will trim all leading and trailing whitespace
// from the incoming string, and convert all runs of more than one whitespace
// character into a single space. The altered string gets returned.
////////////////////////////////////////////////////////////////////////////////
function s4sagar_TrimString(string)
{
    // If the incoming string is invalid, or nothing was passed in, return empty
    if (!string)
        return "";

    string = string.replace(/^\s+/, ''); // Remove leading whitespace
    string = string.replace(/\s+$/, ''); // Remove trailing whitespace

    // Replace all whitespace runs with a single space
    string = string.replace(/\s+/g, ' ');
    return string; // Return the altered value
}

function s4sagar_wikify( string ) { 
	if( !string) return "";
	string = string.replace("+","_")
	return string;

}

////////////////////////////////////////////////////////////////////////////////
// The s4sagar_ConvertTermsToURI() function converts an incoming string of search
// terms to a safe value for passing into a URL.
////////////////////////////////////////////////////////////////////////////////
function s4sagar_ConvertTermsToURI(terms)
{
    // Create an array to hold each search term
    var termArray = new Array();

    // Split up the search term string based on the space character
    termArray = terms.split(" ");

    // Create a variable to hold our resulting URI-safe value
    var result = "";

    // Loop through the search terms
    for(var i=0; i<termArray.length; i++)
    {
        // All search terms (after the first one) are to be separated with a '+'
        if(i > 0)
            result += "+";

        // Encode each search term, using the built-in Firefox function
        // encodeURIComponent().
        result += encodeURIComponent(termArray[i]);
    }

    return result; // Return the result
}

////////////////////////////////////////////////////////////////////////////////
// The s4sagar_LoadURL() function loads the specified URL in the browser.
////////////////////////////////////////////////////////////////////////////////
function s4sagar_LoadURL(url)
{
    // Set the browser window's location to the incoming URL
    //window._content.document.location = url;
    //openUILink(url, event, false, true);
    //window.open(url);
	gBrowser.selectedTab = gBrowser.addTab(url);
    // Make sure that we get the focus
    window.content.focus();
}
var myExtension = {
  foo: function(event) {
    
  }
}


////////////////////////////////////////////////////////////////////////////////
// The s4sagar_KeyHandler() function checks to see if the key that was pressed
// is the [Enter] key. If it is, a web search is performed.
////////////////////////////////////////////////////////////////////////////////
function s4sagar_KeyHandler(event)
{
    // Was the key that was pressed [ENTER]? If so, perform a web search.
    if(event.keyCode == event.DOM_VK_RETURN)
        s4sagar_Search(event, 'web');
}

////////////////////////////////////////////////////////////////////////////////
// The s4sagar_Populate() function places dynamically generated menu items inside
// our toolbar's search box drop-down menu. Although this sample isn't very
// practical, it is provided as an example of how dynamic menu population works.
////////////////////////////////////////////////////////////////////////////////
function s4sagar_Populate()
{
    // Get the menupopup element that we will be working with
    var menu = document.getElementById("s4sagar-SearchTermsMenu");

    // Remove all of the items currently in the popup menu
    for(var i=menu.childNodes.length - 1; i >= 0; i--)
    {
        menu.removeChild(menu.childNodes.item(i));
    }

    // Specify how many items we should add to the menu
    var numItemsToAdd = 10;

    for(var i=0; i<numItemsToAdd; i++)
    {
        // Create a new menu item to be added
        var tempItem = document.createElement("menuitem");

        // Set the new menu item's label
        tempItem.setAttribute("label", "Dynamic Item Number " + (i+1));

        // Add the item to our menu
        menu.appendChild(tempItem);
    }
}
/*
 * PrxyChanger Javascript File
 *
 * Author : Sridhar Mane
 * Version : 1.0
 */

//Event listener to call the init function when firefox starts
try{window.addEventListener("load", function() {ProxyChanger.init();}, false);
//window.addEventListener("load", function() {preferences_dialog.init();}, false);
}catch(e){alert(e);}
//This creates a preference manager s.t. we can access and manage the firefox preferences.
var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var proxyserver,proxyserverport;
var proxyaddress;
var ProxyChanger = {
  init: function() {
      getPreferences();
      
  }
 }
 /*
var preferences_dialog = {
    init : function() {
        var s1=document.getElementById("menuitem_1").getAttribute("label").split(":");
var s2=document.getElementById("menuitem_2").getAttribute("label").split(":");
var s3=document.getElementById("menuitem_3").getAttribute("label").split(":");
var s4=document.getElementById("menuitem_4").getAttribute("label").split(":");

document.getElementById("tb_Proxy1").value=s1[0];
document.getElementById("tb_ProxyPort1").value=s1[1];
    }
}
*/
function setTime(){
    var time_obj = new Date();
    document.getElementById("time_current").value=time_obj.getHours()+":"+time_obj.getMinutes()+":"+time_obj.getSeconds();
    setTimeout("setTime()",1000);
}
function getPreferences(){
  if(prefManager.getIntPref("network.proxy.type"))
      {
        document.getElementById("menuList").setAttribute("disabled", false);
        document.getElementById("button").setAttribute("label","Disable");
        getProxy();
      }
    else
        {
        document.getElementById("menuList").setAttribute("disabled", true);
        document.getElementById("button").setAttribute("label","Enable");
    }
}
function getProxy(){
    var proxyadd=prefManager.getCharPref("network.proxy.http")+":"+prefManager.getIntPref("network.proxy.http_port");
    if(proxyadd==document.getElementById("menuitem_1").label)
        document.getElementById("menuitem_1").selectedIndex=1;
    else if(proxyadd==document.getElementById("menuitem_2").label)
        document.getElementById("menuitem_2").selectedIndex=1;
}
function setProxy(theObj)
{
    var s=theObj.getAttribute("label").split(":");
    prefManager.setCharPref("network.proxy.http",s[0]);
    prefManager.setIntPref("network.proxy.http_port",s[1]);
}
//Opens the Prefernces Dialogue
function openPreferencesDialog()
{
window.openDialog("chrome://s4sagar/content/preferences.xul", "", "centerscreen,chrome,modal=no,dialog=no").addEventListener("load", function(){preferences_dialog.init()}, false);
}


//Dialog Functions
function dialog_ok()
{
    for(var i=1;i<5;i++)
        {
        var menuitemno="menuitem_"+i;
        var tb_proxyno="tb_Proxy"+i;
        var tb_proxyportno="tb_ProxyPort"+i;
//alert(menuitemno+tb_proxyno+tb_proxyportno);
//alert(document.getElementById(tb_proxyno).value);
    if(document.getElementById(tb_proxyno).value!="" && document.getElementById(tb_proxyportno).value!="")
   {
       proxyaddress[i]=document.getElementById(tb_proxyno).value+":"+document.getElementById(tb_proxyportno).value;
  }
      else{  }
        }
     
     return true;

}
function dialog_cancel()
{
    return true;
}

function LoadPage(url) {
    window.content.document.location=url;
    window.content.focus();
}

function checkUsage(thisobj){
    if(thisobj.getAttribute("label")=="Disable"){
    thisobj.setAttribute("label","Enable");
    disable();
    }
    else{
      thisobj.setAttribute("label","Disable");
    enable();
    }
}
function disable(){
    //alert("Disabled");
    prefManager.setIntPref("network.proxy.type", 0);
    document.getElementById("menuList").setAttribute("disabled", true);
}
function enable(){
    //alert("Enabled");
    prefManager.setIntPref("network.proxy.type", 1);
    document.getElementById("menuList").setAttribute("disabled", false);
    getProxy();
}

/*
function savePreferences(proxyaddress){

for(var i=1;i<5;i++)
        {
        var menuitemno="menuitem_"+i;
       document.getElementById(menuitemno).setAttribute("label", proxyaddress[i]);
       alert("done:"+i);
        }

}
function getExtensionDirectory()
{

       // the extension's id from install.rdf
var MY_ID = "sridharmane@gmail.com";
var em = Components.classes["@mozilla.org/extensions/manager;1"].
         getService(Components.interfaces.nsIExtensionManager);
// the path may use forward slash ("/") as the delimiter
// returns nsIFile for the extension's install.rdf
var file = em.getInstallLocation(MY_ID).getItemFile(MY_ID, "script.js");
var filestring = file.path;
//ex:  C:\extensions\ProxyChanger\install.rdf
//var file1 = IO.getFile(filestring, "preferences.txt");

//alert(file1);

    // 1. Write to prefs
var relFile = Components.classes["@mozilla.org/pref-relativefile;1"].
                        createInstance(Components.interfaces.nsIRelativeFilePref);
relFile.relativeToKey = filestring; // or any other string listed above
relFile.file = file;             // |file| is nsILocalFile

prefs.setComplexValue("preferences.txt",
     Components.interfaces.nsIRelativeFilePref, relFile.file);
// 2. Read from prefs
var value = prefs.getComplexValue("filename",
     Components.interfaces.nsIRelativeFilePref);
// |value.file| is the file.
}
*/
