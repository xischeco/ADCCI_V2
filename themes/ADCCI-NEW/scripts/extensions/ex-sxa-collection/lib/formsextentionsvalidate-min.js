$.validator.setDefaults({ignore:":hidden:not(.fxt-captcha)"});var reCaptchaArray=[];$.validator.unobtrusive.adapters.add("recaptcha",function(e){e.rules.recaptcha=!0,e.message&&(e.messages.recaptcha=e.message)}),$.validator.addMethod("recaptcha",function(e,a,t){return!0});var recaptchasRendered=!1,loadReCaptchas=function(){if(!recaptchasRendered){recaptchasRendered=!0;for(var e=0;e<reCaptchaArray.length;e++)reCaptchaArray[e]()}};function getDays(e){var a=new Date;return Math.floor((a-new Date(e))/864e5)}function getYears(e){var a=new Date,t=a.getFullYear()-new Date(e).getFullYear(),r=a;return r.setFullYear(r.getFullYear()-t),new Date(e)>r&&t--,t}function getMonths(e){var a=new Date,t=new Date(e);return 12*(a.getFullYear()-t.getFullYear())+a.getMonth()-t.getMonth()}$.validator.unobtrusive.adapters.addSingleVal("contenttype","allowedcontenttypes"),$.validator.addMethod("contenttype",function(e,a,t){if(!this.optional(a))for(var r=0;r<a.files.length;r++)if(t.indexOf(a.files[r].type)<0)return!1;return!0}),$.validator.unobtrusive.adapters.addSingleVal("filesize","maxfilesize"),$.validator.addMethod("filesize",function(e,a,t){if(!this.optional(a))for(var r=0;r<a.files.length;r++)if(a.files[r].size>t)return!1;return!0}),$.validator.unobtrusive.adapters.add("timespan",["min","max","unit"],function(e){e.rules.timespan=[e.params.min,e.params.max,e.params.unit],e.messages.timespan=e.message}),$.validator.addMethod("timespan",function(e,a,t){if(!this.optional(a)){var r=t[2],n=t[0],i=t[1],s=0;switch(r){case"days":s=getDays(e);break;case"months":s=getMonths(e);break;case"years":s=getYears(e)}var o=!0;return void 0!==n&&s<n&&(o=!1),void 0!==i&&s>i&&(o=!1),o}return!0});