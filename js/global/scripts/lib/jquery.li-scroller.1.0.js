var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2009 Gian Carlo Mingati
 * Version: 1.0.1 (07-DECEMBER-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires:
 * jQuery v1.2.x or later
 * 
 */


jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
		travelocity: 0.07
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripWidth = 0;
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
				var containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width
				$strip.find("li").each(function(i){
				stripWidth += jQuery(this, i).width();
				});
				$strip.width(stripWidth + 400);
				var totalTravel = stripWidth+containerWidth + 400;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye
				function scrollnews(spazio, tempo){
				$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.left + stripWidth;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});
		});
};

}
/*
     FILE ARCHIVED ON 01:28:39 Mar 29, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:36:14 Jul 10, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 570.306
  exclusion.robots: 146.207
  exclusion.robots.policy: 146.201
  xauthn.identify: 82.322
  xauthn.chkprivs: 63.66
  RedisCDXSource: 201.252
  esindex: 0.008
  LoadShardBlock: 204.124 (3)
  PetaboxLoader3.datanode: 207.535 (4)
  CDXLines.iter: 16.782 (3)
  load_resource: 84.694
  PetaboxLoader3.resolve: 70.093
*/