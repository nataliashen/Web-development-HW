/*
 * Shared pages JS
 * nav, menu_select, sidebar_check, colorbox all combined for less HTTP calls
 */

//******nav start******//
function MM_swapImgRestore() {
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() {
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function go()
{
	box = document.goform.navi;
	destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

function profileLink(profileID) {
   window.name = 'mainWin';
	var URL;
	URL='/steinhardt/db/profiles/' + profileID;
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=570,height=440');
}

function profileList(type) {
   window.name = 'mainWin';
	var URL;
	URL='/steinhardt/db-select/profiles/profile_type/' + type + '/profile_lastname,profile_firstname/1';
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=570,height=440');
}

function popper(link) {
   window.name = 'mainWin';
	var URL;
	URL=link;
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=570,height=440');
}

function profileList2(profile_student_type) {
   window.name = 'mainWin';
	var URL;
	URL='/steinhardt/db-select/profiles/profile_student_type/' + profile_student_type + '/profile_lastname,profile_firstname/1';
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=570,height=440');
}

function newsletterView(newsid) {
	var URL;
	URL='/cgi-bin/steinhardt/db.cgi?db=newsletter&uid=default&do=view_file&cn=newsletter_graphic&id=' + newsid ;
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=600,height=440');
}


function researchAdd() {
	var URL;
	URL='/cgi-bin/steinhardt/db.cgi?db=researchfield&uid=default&do=add_form&t=researchfield';
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=570,height=440');
}


function helpBox(topic) {
	var URL;
	URL='/steinhardt/help/help_' + topic + '.htm';
	window.open(URL,'0','toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=200,height=120');
}

function printWindow() {
bV = parseInt(navigator.appVersion);
if (bV >= 4) window.print();
}

function surfto(form) {
var myindex=form.dest.selectedIndex
location.href=form.dest.options[myindex].value
}

function clearDefault(el) {
  if (el.defaultValue==el.value) el.value = ""
}



//v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}
//******nav end******//

//sidebar_check
function isEmpty( el ){ 
	return !jQuery.trim(el.html()) 
}

//menu select
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) === 0;
  };
}

//colorbox
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

jQuery.expr[':'].hasClassStartingWith = function(obj){
	  return (/\bcolorbox_/).test(obj.className);
};

jQuery(document).ready(function(){ 

	//menu select
	var url = window.location.pathname.toString();
	if(url.startsWith("/m/")){
		url = url.slice(2);
	}
	
	if(jQuery('nav#menu-left').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').length == 1){
		jQuery('nav#menu-left').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').parentsUntil('div').addClass("mobile-selected expanded"); //added cases of url's ending in slash
	}
	
	if(jQuery('nav#third_level_nav').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').length == 1){
		jQuery('nav#third_level_nav').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').parentsUntil('div').addClass("mobile-selected expanded"); //added cases of url's ending in slash
		var count = (jQuery('nav#third_level_nav').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').parentsUntil('nav')).length - 1;
		jQuery('nav#third_level_nav').addClass('level'+count);
	}
	
	if(jQuery('div#third_level_nav').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').length == 1){
		jQuery('div#third_level_nav').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').parentsUntil('div').addClass("mobile-selected expanded selected"); //added cases of url's ending in slash
		var count = (jQuery('div#third_level_nav').find('a[href="'+(url).replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+(url)+'/"]').parentsUntil('nav')).length - 1;
		jQuery('nav#third_level_nav').addClass('level'+count);
	}
	
	if(jQuery('div#secondary_navigation').find('a[href="'+url.replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+url+'/"]').length == 1){
		jQuery('div#secondary_navigation').find('a[href="'+url.replace(/\/$/, "")+'"], a[href="'+url+'"], a[href="'+url+'/"]').parents().addClass("expanded"); //added cases of url's ending in slash
	}
	
	//sidebar_check
	if (isEmpty(jQuery('#sidebar')) && isEmpty(jQuery('#topbar'))) { 
		//sidebar is empty 
		jQuery('div#content').addClass('nosidebar');
		jQuery('section#content').addClass('nosidebar');
	} 
	else { 
		//sidebar is not empty
		jQuery('div#content').addClass('sidebar');
		jQuery('section#content').addClass('sidebar');
	}
	
	jQuery('aside').each(function(){
		if(jQuery(this).children().length < 1) {
			jQuery(this).addClass("empty");
		}	
	})
	
	//colorbox
	var mobile_check = false; //initiate as false
	//device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	 || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) mobile_check = true;

	if(!mobile_check){
	    jQuery('a:hasClassStartingWith').each(function () {
	
	    	var num = (jQuery(this).attr("class")).match(/\bcolorbox_[a-zA-Z0-9]*/); 
	        num = num[0].slice(9);
	
	        if(isNumeric(num)){
	        	var cb_width = num+"px";
	        	var cb_innerWidth = "75%";
	        	var cb_innerHeight = "75%";
	        	var cb_title = "";
	        }
	        else{
	        	var cb_width = "100%";
	        	var cb_innerWidth = "500px";
	        	var cb_innerHeight = "510px";
	        	var cb_title = "Request Information";
	        }
	        
	        jQuery(".colorbox_"+num).colorbox({
		  	      title: cb_title,
	        	  iframe:true,
		  	      innerWidth: cb_innerHeight,
		  	      innerHeight: cb_innerWidth,
		  	      maxWidth: cb_width,
		  	      opacity:0.75,
		  	      closeButton:true,
		  	      allowSelect: false
		       }); 
	    	
	    });
	    
		jQuery(".colorbox").colorbox({
		      iframe:true,
		      innerWidth: "75%",
		      innerHeight: "75%",
		      opacity:0.75,
		      closeButton:true,
		      allowSelect: false
		  });
		
		jQuery('.vimeoVideo').colorbox({
			iframe: true, 
			innerWidth:"75%", 
			innerHeight:"75%", 
		});
		
//start vchannel
		jQuery('.videoGallery').colorbox({slideshow: true, 
			iframe: true, 
			innerWidth:"75%", 
			innerHeight:"75%", 
			slideshowAuto: false, 
			current: false,
			slideshowStart: '' });
	
		jQuery(function($,e){
			var n = 0;
			jQuery(".next").click(function(e) {
				var $v = jQuery('li.feature');
				$($v[n]).hide();
	
				if(n < $v.length - 1) {
					n++;
				}
				else {
					n = 0;
				}
				
				$($v[n]).show();
				return false;
			});
		});
//end vchannel
		
		jQuery('.imageGallery').colorbox({
			rel: 'gal',
			maxWidth:"75%", 
			maxHeight:"75%"
		});
		
		jQuery('.youtubeVideo').colorbox({
			iframe: true, 
			innerWidth:"75%", 
			innerHeight:"75%", 
		});
		
		jQuery('.ytPlaylistVideo').colorbox({
			iframe: true, 
			innerWidth:"75%", 
			innerHeight:"75%", 
		});
	}

}); 