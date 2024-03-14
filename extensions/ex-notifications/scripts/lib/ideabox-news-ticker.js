"use strict";$.breakingNews=function(t,e){var i,s={effect:"scroll",direction:"ltr",height:24,fontSize:"default",themeColor:"default",background:"default",borderWidth:1,radius:2,source:"html",rss2jsonApiKey:"",play:!0,delayTimer:4e3,scrollSpeed:5,stopOnHover:!0,position:"auto",zIndex:99999},n=this;n.settings={},n._element=$(t),n._label=n._element.children(".ex-notifications-v3-label"),n._news=n._element.children(".ex-notifications-v3-news"),n._ul=n._news.children("ul"),n._li=n._ul.children("li"),n._controls=n._element.children(".ex-notifications-v3-controls"),n._prev=n._controls.find(".ex-notifications-v3-prev").parent(),n._action=n._controls.find(".ex-notifications-v3__action").parent(),n._next=n._controls.find(".ex-notifications-v3-next").parent(),n._pause=!1,n._controlsIsActive=!0,n._totalNews=n._ul.children("li").length,n._activeNews=0,n._interval=!1,n._frameId=null;var l=function(){if(0<n._label.length&&("rtl"==n.settings.direction?n._news.css({right:n._label.outerWidth()}):n._news.css({left:n._label.outerWidth()})),0<n._controls.length){var t=n._controls.outerWidth();"rtl"==n.settings.direction?n._news.css({left:t}):n._news.css({right:t})}if("scroll"===n.settings.effect){var e=0;n._li.each(function(){e+=$(this).outerWidth()}),e+=50,n._ul.css({width:e})}},a=function(){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText),i="",s="";switch(n.settings.source.showingField){case"title":s="title";break;case"description":s="description";break;case"link":s="link";break;default:s="title"}var a="";void 0!==n.settings.source.seperator&&void 0!==typeof n.settings.source.seperator&&(a=n.settings.source.seperator);for(var o=0;o<e.items.length;o++)n.settings.source.linkEnabled?i+='<li><a target="'+n.settings.source.target+'" href="'+e.items[o].link+'">'+a+e.items[o][s]+"</a></li>":i+="<li><a>"+a+e.items[o][s]+"</a></li>";n._ul.empty().append(i),n._li=n._ul.children("li"),n._totalNews=n._ul.children("li").length,l(),"scroll"!=n.settings.effect&&d(),n._li.find(".ex-notifications-v3-seperator").css({height:n.settings.height-2*n.settings.borderWidth}),u()}},t.open("GET","https://api.rss2json.com/v1/api.json?rss_url="+n.settings.source.url+"&count="+n.settings.source.limit+"&api_key="+n.settings.source.rss2jsonApiKey,!0),t.send()},o=function(){$.getJSON(n.settings.source.url,function(t){var e,i="";e="undefined"===n.settings.source.showingField?"title":n.settings.source.showingField;var s="";void 0!==n.settings.source.seperator&&void 0!==typeof n.settings.source.seperator&&(s=n.settings.source.seperator);for(var a=0;a<t.length&&!(a>=n.settings.source.limit);a++)n.settings.source.linkEnabled?i+='<li><a target="'+n.settings.source.target+'" href="'+t[a].link+'">'+s+t[a][e]+"</a></li>":i+="<li><a>"+s+t[a][e]+"</a></li>","undefined"===t[a][e]&&console.log('"'+e+'" does not exist in this json.');n._ul.empty().append(i),n._li=n._ul.children("li"),n._totalNews=n._ul.children("li").length,l(),"scroll"!=n.settings.effect&&d(),n._li.find(".ex-notifications-v3-seperator").css({height:n.settings.height-2*n.settings.borderWidth}),u()})},r=function(){var t=parseFloat(n._ul.css("marginLeft"));t-=n.settings.scrollSpeed/2,n._ul.css({marginLeft:t}),t<=-n._ul.find("li:first-child").outerWidth()&&(n._ul.find("li:first-child").insertAfter(n._ul.find("li:last-child")),n._ul.css({marginLeft:0})),!1===n._pause&&(n._frameId=requestAnimationFrame(r),window.requestAnimationFrame&&n._frameId||setTimeout(r,16))},c=function(){var t=parseFloat(n._ul.css("marginRight"));t-=n.settings.scrollSpeed/2,n._ul.css({marginRight:t}),t<=-n._ul.find("li:first-child").outerWidth()&&(n._ul.find("li:first-child").insertAfter(n._ul.find("li:last-child")),n._ul.css({marginRight:0})),!1===n._pause&&(n._frameId=requestAnimationFrame(c)),window.requestAnimationFrame&&n._frameId||setTimeout(c,16)},d=function(){var t,e=$(n._ul.find("li").eq(n._activeNews)[0].firstElementChild),s=e.data("label");switch($("#data-label").text()!=s&&$("#data-label").html(s),n._controlsIsActive=!0,n.settings.effect){case"typography":n._ul.find("li").hide(),n._ul.find("li").eq(n._activeNews).width(30).show(),n._ul.find("li").eq(n._activeNews).animate({width:"100%",opacity:1},1500);break;case"fade":n._ul.find("li").hide(),n._ul.find("li").eq(n._activeNews).fadeIn();break;case"slide-down":n._totalNews<=1?n._ul.find("li").animate({top:30,opacity:0},300,function(){$(this).css({top:-30,opacity:0,display:"block"}),$(this).animate({top:0,opacity:1},300)}):(n._ul.find("li:visible").animate({top:30,opacity:0},300,function(){$(this).hide()}),n._ul.find("li").eq(n._activeNews).css({top:-30,opacity:0}).show(),n._ul.find("li").eq(n._activeNews).animate({top:0,opacity:1},300));break;case"slide-up":n._totalNews<=1?n._ul.find("li").animate({top:-30,opacity:0},300,function(){$(this).css({top:30,opacity:0,display:"block"}),$(this).animate({top:0,opacity:1},300)}):(n._ul.find("li:visible").animate({top:-30,opacity:0},300,function(){$(this).hide()}),n._ul.find("li").eq(n._activeNews).css({top:30,opacity:0}).show(),n._ul.find("li").eq(n._activeNews).animate({top:0,opacity:1},300));break;case"slide-left":"rtl"===n.settings.direction?n._ul.parent().css({right:n._label.outerWidth()+"px"}):n._ul.parent().css({left:n._label.outerWidth()+"px"}),n._totalNews<=1?n._ul.find("li").animate({left:"50%",opacity:0},300,function(){$(this).css({left:-50,opacity:0,display:"block"}),$(this).animate({left:0,opacity:1},300)}):(n._ul.find("li:visible").animate({left:"50%",opacity:0},300,function(){$(this).hide()}),n._ul.find("li").eq(n._activeNews).css({left:-50,opacity:0}).show(),n._ul.find("li").eq(n._activeNews).animate({left:0,opacity:1},300));break;case"slide-right":n._totalNews<=1?n._ul.find("li").animate({left:"-50%",opacity:0},300,function(){$(this).css({left:"50%",opacity:0,display:"block"}),$(this).animate({left:0,opacity:1},300)}):(n._ul.find("li:visible").animate({left:"-50%",opacity:0},300,function(){$(this).hide()}),n._ul.find("li").eq(n._activeNews).css({left:"50%",opacity:0}).show(),n._ul.find("li").eq(n._activeNews).animate({left:0,opacity:1},300));break;default:n._ul.find("li").hide(),n._ul.find("li").eq(n._activeNews).show()}(t=i)&&($(".news-scrolling").removeClass("news-scrolling"),"rtl"===n.settings.direction?t.css("right","0"):t.css("left","0"),t.stop());var l=e[0].scrollWidth,a=$(n._ul).innerWidth();l>a&&function(t,e){if(!$("body").hasClass("on-page-editor")){$(".news-scrolling").removeClass("news-scrolling"),t.addClass("news-scrolling");var i=parseInt(22*e);e=e,"rtl"===n.settings.direction?t.stop().animate({right:-e},i,function(){setTimeout(function(){},n.settings.delayTimer+1e3)}):t.stop().animate({left:-e-20},i,function(){setTimeout(function(){},n.settings.delayTimer+1e3)})}}(e,l-a),i=e},u=function(){if(n._pause=!1,n.settings.play)switch(n.settings.effect){case"scroll":"rtl"===n.settings.direction?n._ul.width()>n._news.width()?c():n._ul.css({marginRight:0}):n._ul.width()>n._news.width()?r():n._ul.css({marginLeft:0});break;default:n.pause(),n._interval=setInterval(function(){$(".news-scrolling").is(":animated")||n.next()},n.settings.delayTimer)}},f=function(){n._element.width()<480?(n._label.hide(),"rtl"==n.settings.direction?n._news.css({right:0}):n._news.css({left:0})):(n._label.show(),"rtl"==n.settings.direction?n._news.css({right:n._label.outerWidth()}):n._news.css({left:n._label.outerWidth()}))};n.init=function(){if(n.settings=$.extend({},s,e),"fixed-top"===n.settings.position?n._element.addClass("ex-notifications-v3-fixed-top").css({"z-index":n.settings.zIndex}):"fixed-bottom"===n.settings.position&&n._element.addClass("ex-notifications-v3-fixed-bottom").css({"z-index":n.settings.zIndex}),"default"!=n.settings.fontSize&&n._element.css({"font-size":n.settings.fontSize}),"default"!=n.settings.themeColor&&(n._element.css({"border-color":n.settings.themeColor,color:n.settings.themeColor}),n._label.css({background:n.settings.themeColor})),"default"!=n.settings.background&&n._element.css({background:n.settings.background}),n._element.css({height:n.settings.height,"line-height":n.settings.height-2*n.settings.borderWidth+"px","border-radius":n.settings.radius,"border-width":n.settings.borderWidth}),n._li.find(".ex-notifications-v3-seperator").css({height:n.settings.height-2*n.settings.borderWidth}),n._element.addClass("ex-notifications-v3-effect-"+n.settings.effect+" ex-notifications-v3-direction-"+n.settings.direction),l(),"object"==typeof n.settings.source)switch(n.settings.source.type){case"rss":"rss2json"===n.settings.source.usingApi?(a(),0<n.settings.source.refreshTime&&setInterval(function(){n._activeNews=0,n.pause(),n._ul.empty().append('<li style="display:block; padding-left:10px;"><span class="ex-notifications-v3-loader-text">......</span></li>'),setTimeout(function(){a()},1e3)},1e3*n.settings.source.refreshTime*60)):((t=new XMLHttpRequest).open("GET","https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from rss where url="'+n.settings.source.url+'" limit '+n.settings.source.limit)+"&format=json",!0),t.onreadystatechange=function(){if(4==t.readyState)if(200==t.status){var e=JSON.parse(t.responseText),i="",s="";switch(n.settings.source.showingField){case"title":s="title";break;case"description":s="description";break;case"link":s="link";break;default:s="title"}var a="";"undefined"!=n.settings.source.seperator&&void 0!==n.settings.source.seperator&&(a=n.settings.source.seperator);for(var o=0;o<e.query.results.item.length;o++)n.settings.source.linkEnabled?i+='<li><a target="'+n.settings.source.target+'" href="'+e.query.results.item[o].link+'">'+a+e.query.results.item[o][s]+"</a></li>":i+="<li><a>"+a+e.query.results.item[o][s]+"</a></li>";n._ul.empty().append(i),n._li=n._ul.children("li"),n._totalNews=n._ul.children("li").length,l(),"scroll"!=n.settings.effect&&d(),n._li.find(".ex-notifications-v3-seperator").css({height:n.settings.height-2*n.settings.borderWidth}),u()}else n._ul.empty().append('<li><span class="ex-notifications-v3-loader-text">'+n.settings.source.errorMsg+"</span></li>")},t.send(null));break;case"json":o(),0<n.settings.source.refreshTime&&setInterval(function(){n._activeNews=0,n.pause(),n._ul.empty().append('<li style="display:block; padding-left:10px;"><span class="ex-notifications-v3-loader-text">......</span></li>'),setTimeout(function(){o()},1e3)},1e3*n.settings.source.refreshTime*60);break;default:console.log('Please check your "source" object parameter. Incorrect Value')}else"html"===n.settings.source?("scroll"!=n.settings.effect&&d(),u()):console.log('Please check your "source" parameter. Incorrect Value');var t;n.settings.play?n._action.find("span").removeClass("ex-notifications-v3__action--play").addClass("ex-notifications-v3__action--pause"):n._action.find("span").removeClass("ex-notifications-v3__action--pause").addClass("ex-notifications-v3__action--play"),n._element.on("mouseleave",function(t){var e=$(document.elementFromPoint(t.clientX,t.clientY)).parents(".ex-notifications-v3-breaking-news")[0];$(this)[0]!==e&&(!0===n.settings.stopOnHover?!0===n.settings.play&&n.play():!0===n.settings.play&&!0===n._pause&&n.play()),function(){let t=$(".news-scrolling");var e=$(n._ul).outerWidth(),i=t.outerWidth(),s="rtl"===n.settings.direction?t.css("right"):t.css("left");let l=i-e,a=22*(l+(s=parseFloat(s)));"rtl"===n.settings.direction?t.stop().animate({right:-l},a,function(){}):t.stop().animate({left:-l-20},a,function(){})}()}),n._element.on("mouseenter",function(){!0===n.settings.stopOnHover&&n.pause(),$(".news-scrolling").stop()}),n._next.on("click",function(){n._controlsIsActive&&(n._controlsIsActive=!1,n.pause(),n.next())}),n._prev.on("click",function(){n._controlsIsActive&&(n._controlsIsActive=!1,n.pause(),n.prev())}),n._action.on("click",function(){n._controlsIsActive&&(n._action.find("span").hasClass("ex-notifications-v3__action--pause")?(n._action.find("span").removeClass("ex-notifications-v3__action--pause").addClass("ex-notifications-v3__action--play"),n.stop()):(n.settings.play=!0,n._action.find("span").removeClass("ex-notifications-v3__action--play").addClass("ex-notifications-v3__action--pause")))}),f(),$(window).on("resize",function(){f(),n.pause(),n.play()})},n.pause=function(){n._pause=!0,clearInterval(n._interval),cancelAnimationFrame(n._frameId)},n.stop=function(){n._pause=!0,n.settings.play=!1},n.play=function(){$("body").hasClass("on-page-editor")||u()},n.next=function(){!function(){switch(n.settings.effect){case"scroll":"rtl"===n.settings.direction?n._ul.stop().animate({marginRight:-n._ul.find("li:first-child").outerWidth()},300,function(){n._ul.find("li:first-child").insertAfter(n._ul.find("li:last-child")),n._ul.css({marginRight:0}),n._controlsIsActive=!0}):n._ul.stop().animate({marginLeft:-n._ul.find("li:first-child").outerWidth()},300,function(){n._ul.find("li:first-child").insertAfter(n._ul.find("li:last-child")),n._ul.css({marginLeft:0}),n._controlsIsActive=!0});break;default:n._activeNews++,n._activeNews>=n._totalNews&&(n._activeNews=0),d()}}()},n.prev=function(){!function(){switch(n.settings.effect){case"scroll":"rtl"===n.settings.direction?(0<=parseInt(n._ul.css("marginRight"),10)&&(n._ul.css({"margin-right":-n._ul.find("li:last-child").outerWidth()}),n._ul.find("li:last-child").insertBefore(n._ul.find("li:first-child"))),n._ul.stop().animate({marginRight:0},300,function(){n._controlsIsActive=!0})):(0<=parseInt(n._ul.css("marginLeft"),10)&&(n._ul.css({"margin-left":-n._ul.find("li:last-child").outerWidth()}),n._ul.find("li:last-child").insertBefore(n._ul.find("li:first-child"))),n._ul.stop().animate({marginLeft:0},300,function(){n._controlsIsActive=!0}));break;default:n._activeNews--,n._activeNews<0&&(n._activeNews=n._totalNews-1),d()}}()},n.init()},$.fn.breakingNews=function(t){return this.each(function(){if(null==$(this).data("breakingNews")){var e=new $.breakingNews(this,t);$(this).data("breakingNews",e)}})};