/**
 * skylark-domx-plugins-toggles - The skylark toggle plugin library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-toggles/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx/browser","skylark-domx/eventer","skylark-domx/noder","skylark-domx/geom","skylark-domx/query","skylark-domx-plugins-base","./toggles"],function(e,t,i,a,r,o,s,d){var n=s.Plugin.inherit({klassName:"Radio",pluginName:"domx.toggles.radio",options:{ignoreVisibilityCheck:!1},_construct:function(t,i){if(this.overrided(t,i),"label"!==t.tagName.toLowerCase())throw new Error("Radio must be initialized on the `label` that wraps the `input` element. See https://github.com/ExactTarget/fuelux/blob/master/reference/markup/radio.html for example of proper markup. Call `.radio()` on the `<label>` not the `<input>`");if(this.$label=this.$(),this.$radio=this.$label.find('input[type="radio"]'),this.groupName=this.$radio.attr("name"),!this.options.ignoreVisibilityCheck&&this.$radio.css("visibility").match(/hidden|collapse/))throw new Error("For accessibility reasons, in order for tab and space to function on radio, `visibility` must not be set to `hidden` or `collapse`. See https://github.com/ExactTarget/fuelux/pull/1996 for more details.");var a=this.$radio.attr("data-toggle");this.$toggleContainer=o(a),this.$radio.on("change",e.proxy(this.itemchecked,this)),this.setInitialState()},setInitialState:function(){var e=this.$radio,t=e.prop("checked"),i=e.prop("disabled");this.setCheckedState(e,t),this.setDisabledState(e,i)},resetGroup:function(){o('input[name="'+this.groupName+'"]').each(function(e,t){var i=o(t),a=i.parent(),r=i.attr("data-toggle"),s=o(r);a.removeClass("checked"),s.addClass("hidden")})},setCheckedState:function(e,t){var i=e,a=i.parent(),r=i.attr("data-toggle"),s=o(r);t?(this.resetGroup(),i.prop("checked",!0),a.addClass("checked"),s.removeClass("hide hidden"),a.trigger("checked.fu.radio")):(i.prop("checked",!1),a.removeClass("checked"),s.addClass("hidden"),a.trigger("unchecked.fu.radio")),a.trigger("changed.fu.radio",t)},setDisabledState:function(e,t){var i=o(e),a=this.$label;return t?(i.prop("disabled",!0),a.addClass("disabled"),a.trigger("disabled.fu.radio")):(i.prop("disabled",!1),a.removeClass("disabled"),a.trigger("enabled.fu.radio")),i},itemchecked:function(e){var t=o(e.target);this.setCheckedState(t,!0)},check:function(){this.setCheckedState(this.$radio,!0)},uncheck:function(){this.setCheckedState(this.$radio,!1)},isChecked:function(){return this.$radio.prop("checked")},enable:function(){this.setDisabledState(this.$radio,!1)},disable:function(){this.setDisabledState(this.$radio,!0)},destroy:function(){return this.$label.remove(),this.$label[0].outerHTML}});return n.prototype.getValue=n.prototype.isChecked,s.register(n),d.Radio=n});
//# sourceMappingURL=sourcemaps/radio.js.map
