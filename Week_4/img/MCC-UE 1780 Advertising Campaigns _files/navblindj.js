jQuery(function($){
	$("div.navblind ul li a, nav#third_level_nav ul li:not('.multilink') a").click(
		function() {
			if(jQuery(this).hasClass("nonavblind")) { window.location.href=jQuery(this).attr("href"); return false; }
			var $a = jQuery(this).attr("id");	
			var $u = jQuery(this).siblings();

			// execute only if there are submenus
			if($u.length) {
				var $l = jQuery(this).parent();
				if($l.hasClass("selected") && !$l.hasClass("pinned"))
					$l.removeClass("selected");
				else
					$l.addClass("selected");
				
				// toggle selected menus
				var $s = $l.siblings();
				$s.each(function(index) {
					if(!$(this).hasClass("pinned"))
						$(this).removeClass("selected");
	    		$(this).children("ul").slideUp('slow');
				});
				
				if($u.is(":visible"))
					$u.slideUp('slow');
				else
					$u.slideDown('slow');
	
				return false;
			}
			// else do nothing
		}
	);

});