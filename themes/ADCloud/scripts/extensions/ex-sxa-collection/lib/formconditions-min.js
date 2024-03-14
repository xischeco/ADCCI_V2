!function(i){i.fxbConditions=function(t,n){this.el=t,this.$el=i(t),this.options=i.extend({},i.fxbConditions.defaultOptions,n)},i.extend(i.fxbConditions,{defaultOptions:{fieldConditions:[],animate:!0},helpers:{normalize:function(i,t){return null==i?"":t?String(i):String(i).toLowerCase()},toNumber:function(i){return i=Number(i),isNaN(i)?void 0:i},indexOf:function(i,t,n,e){return i=this.normalize(i,e),t=this.normalize(t,e),i.indexOf(t,n)},endsWith:function(i,t,n){i=this.normalize(i,n),t=this.normalize(t,n);var e=i.length-t.length;return e>=0&&i.substring(e)===t}},actions:{show:function(i){this.loaded&&this.options.animate?i.slideDown():i.show(),this.setRequired(i)},hide:function(i){this.loaded&&this.options.animate?i.is(":visible")&&i.slideUp():i.hide(),this.setRequired(i)},enable:function(i){i.is("input,select,textarea,button")&&(i.prop("disabled",!1),this.setRequired(i))},disable:function(i){i.is("input,select,textarea,button")&&(i.prop("disabled",!0),this.setRequired(i))},"go to page":function(t,n,e){t.each(function(t,o){if(o.name&&o.name.length&&i(o).is("input[type='submit'], button[type='submit']")){var s=this.$el.find('[name="'+o.name+'"][data-sc-next-page]');if(!s.length){if(e&&n.value){var r=this.$el.find('[name="'+o.name+'"]');i("<input>").attr({type:"hidden",name:o.name,value:n.value,"data-sc-next-page":""}).insertAfter(r.last())}return}var a=n.value;if(!e){a=s.data("sc-next-page");for(var d=this.executedActions.length-1;d>=0;d--){var f=this.executedActions[d];if(f.fieldId===n.fieldId&&f.conditionsResult&&"go to page"===f.actionType.toLowerCase()){a=f.value;break}}}s.val(a),s.prop("disabled",!a)}}.bind(this))},actionLinks:{show:"hide",enable:"disable","go to page":"go to page"},addAction:function(i,t,n,e){if(i&&i.length){if(this[i=i.toLowerCase()]=t,2===arguments.length)return;n&&n.length?(n=n.toLowerCase(),this.actionLinks[i]=n,arguments.length>3&&(this[n]=e)):delete this.actionLinks[i]}},getAction:function(i,t){if(i&&i.length){if(i=i.toLowerCase(),t)return this[i];if(this.actionLinks.hasOwnProperty(i))return this[this.actionLinks[i]];for(var n in this.actionLinks)if(this.actionLinks.hasOwnProperty(n)&&this.actionLinks[n]===i)return this[n]}return this[i]}},operators:{contains:function(t,n){return i.fxbConditions.helpers.indexOf(n,t)>=0},"does not contain":function(t,n){return-1===i.fxbConditions.helpers.indexOf(n,t)},"starts with":function(t,n){return 0===i.fxbConditions.helpers.indexOf(n,t)},"does not start with":function(t,n){return 0!==i.fxbConditions.helpers.indexOf(n,t)},"ends with":function(t,n){return i.fxbConditions.helpers.endsWith(n,t)},"does not end with":function(t,n){return!i.fxbConditions.helpers.endsWith(n,t)},"is equal to":function(t,n){if(t=i.fxbConditions.helpers.normalize(t),(n=i.fxbConditions.helpers.normalize(n))===t)return!0;if(t.length){var e=i.fxbConditions.helpers.toNumber(t);if("number"==typeof e){var o=i.fxbConditions.helpers.toNumber(n);return"number"==typeof o&&e===o}}return!1},"is not equal to":function(t,n){if(t=i.fxbConditions.helpers.normalize(t),(n=i.fxbConditions.helpers.normalize(n))===t)return!1;if(t.length){var e=i.fxbConditions.helpers.toNumber(t);if("number"==typeof e){var o=i.fxbConditions.helpers.toNumber(n);return"number"!=typeof o||e!==o}}return!0},"is greater than":function(t,n){if(t=i.fxbConditions.helpers.normalize(t),n=i.fxbConditions.helpers.normalize(n),t.length){var e=i.fxbConditions.helpers.toNumber(t);if("number"==typeof e){var o=i.fxbConditions.helpers.toNumber(n);return"number"==typeof o&&o>e}}return n>t},"is greater than or equal to":function(t,n){if(t=i.fxbConditions.helpers.normalize(t),(n=i.fxbConditions.helpers.normalize(n))===t)return!0;if(t.length){var e=i.fxbConditions.helpers.toNumber(t);if("number"==typeof e){var o=i.fxbConditions.helpers.toNumber(n);return"number"==typeof o&&o>=e}}return n>=t},"is less than":function(t,n){if(t=i.fxbConditions.helpers.normalize(t),n=i.fxbConditions.helpers.normalize(n),t.length){var e=i.fxbConditions.helpers.toNumber(t);if("number"==typeof e){var o=i.fxbConditions.helpers.toNumber(n);return"number"==typeof o&&o<e}}return n<t},"is less than or equal to":function(t,n){if(t=i.fxbConditions.helpers.normalize(t),(n=i.fxbConditions.helpers.normalize(n))===t)return!0;if(t.length){var e=i.fxbConditions.helpers.toNumber(t);if("number"==typeof e){var o=i.fxbConditions.helpers.toNumber(n);return"number"==typeof o&&o<=e}}return n<=t},addOperator:function(i,t){i&&i.length&&(this[i.toLowerCase()]=t)},getOperator:function(i){return i&&i.length?this[i.toLowerCase()]:null}},prototype:{initConditions:function(t){if(this.options=i.extend(!0,this.options||{},t),this.options.fieldConditions){var n=[];this.options.fieldConditions.forEach(function(t){t&&t.conditions&&t.conditions.forEach(function(t){if(t.fieldId&&-1===n.indexOf(t.fieldId)){n.push(t.fieldId);var e=this.$el.find('[data-sc-field-key="'+t.fieldId+'"]').filter(function(){return i.fxbConditions.helpers.endsWith(this.name,"value")});e.length&&e.on("change",this.applyConditions.bind(this))}}.bind(this))}.bind(this)),this.applyConditions(),this.loaded=!0}},applyConditions:function(){this.options.fieldConditions&&(this.executedActions=[],this.options.fieldConditions.forEach(function(i){if(i&&i.actions&&i.actions.length){var t=this.evaluateConditions(i);i.actions.forEach(function(i){this.executeAction(i,t)}.bind(this))}}.bind(this)))},setRequired:function(t){t.each(function(t,n){var e=i(n);if(e.is("input:not([type='submit']), select, textarea")){var o=n.name;if(!i.fxbConditions.helpers.endsWith(o,"value"))return;o=o.slice(0,-(o.length-o.lastIndexOf(".")-1))+"Required";var s=this.$el.find('[name="'+o+'"][data-sc-conditions-required]'),r=e.is(":hidden")||"hidden"===e.css("visibility")||n.disabled;if(!s.length){if(r){var a=this.$el.find('[name="'+n.name+'"]');i("<input>").attr({type:"hidden",name:o,value:!1,"data-sc-conditions-required":""}).insertAfter(a.last())}return}s.val(!1),s.prop("disabled",!r)}else this.setRequired(e.find("input:not([type='submit']), select, textarea"))}.bind(this))},executeAction:function(t,n){if(t&&t.fieldId&&t.actionType){var e=this.$el.find('[data-sc-field-key="'+t.fieldId+'"]');if(e.length){var o=i.fxbConditions.actions.getAction(t.actionType,n);if(o&&"function"==typeof o){o.call(this,e,t,n);var s=i.extend(!0,t,{conditionsResult:n});this.executedActions.push(s)}}}},evaluateConditions:function(i){if(!i||!i.conditions)return!0;switch((i.matchType||"").toLowerCase()){case"all":return i.conditions.every(this.isConditionSatisfied.bind(this));case"any":default:return i.conditions.some(this.isConditionSatisfied.bind(this))}},getValueList:function(t){var n,e=this.$el.find('[data-sc-field-key="'+t+'"]').filter(function(){return i.fxbConditions.helpers.endsWith(this.name,"value")}),o=e.filter(function(i,t){return"checkbox"===t.type||"radio"===t.type});return o.length?o.length>1?(n=o.filter(":checked").map(function(){return i(this).val()}).get()).length||n.push(""):n=[o[0].checked?"true":"false"]:n=[e.val()],n},isConditionSatisfied:function(t){if(t&&t.operator){var n=i.fxbConditions.operators.getOperator(t.operator);if(n&&"function"==typeof n){var e=this.getValueList(t.fieldId);return"is not equal to"===t.operator?e.every(n.bind(this,t.value)):e.some(n.bind(this,t.value))}}return!1}}}),i.fn.init_fxbConditions=function(t){return this.each(function(){var n=i.data(this,"fxbForms.conditions");n?n.initConditions(t):(n=new i.fxbConditions(this,t),i.data(this,"fxbForms.conditions",n),n.initConditions())})}}(jQuery);