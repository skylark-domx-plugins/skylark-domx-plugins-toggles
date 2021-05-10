/**
 * skylark-domx-plugins-toggles - The skylark toggle plugin library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-toggles/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx/browser","skylark-domx/eventer","skylark-domx/noder","skylark-domx/geom","skylark-domx/query","skylark-domx-plugins-base","./toggles"],function(e,t,i,s,c,h,o,a){var r=o.Plugin.inherit({klassName:"Checkbox",pluginName:"domx.toggles.checkbox",options:{ignoreVisibilityCheck:!1},_construct:function(t,i){this.overrided(t,i);var s=this.$();if("label"!==t.tagName.toLowerCase())throw new Error("Checkbox must be initialized on the `label` that wraps the `input` element. See https://github.com/ExactTarget/fuelux/blob/master/reference/markup/checkbox.html for example of proper markup. Call `.checkbox()` on the `<label>` not the `<input>`");if(this.$label=s,this.$chk=this.$label.find('input[type="checkbox"]'),this.$container=s.parent(".checkbox"),!this.options.ignoreVisibilityCheck&&this.$chk.css("visibility").match(/hidden|collapse/))throw new Error("For accessibility reasons, in order for tab and space to function on checkbox, checkbox `<input />`'s `visibility` must not be set to `hidden` or `collapse`. See https://github.com/ExactTarget/fuelux/pull/1996 for more details.");var c=this.$chk.attr("data-toggle");this.$toggleContainer=h(c),this.$chk.on("change",e.proxy(this.itemchecked,this)),this.setInitialState()},setInitialState:function(){var e=this.$chk,t=e.prop("checked"),i=e.prop("disabled");this.setCheckedState(e,t),this.setDisabledState(e,i)},setCheckedState:function(e,t){var i=e,s=this.$label,c=this.$toggleContainer;t?(i.prop("checked",!0),s.addClass("checked"),c.removeClass("hide hidden"),s.trigger("checked.fu.checkbox")):(i.prop("checked",!1),s.removeClass("checked"),c.addClass("hidden"),s.trigger("unchecked.fu.checkbox")),s.trigger("changed.fu.checkbox",t)},setDisabledState:function(e,t){var i=h(e),s=this.$label;return t?(i.prop("disabled",!0),s.addClass("disabled"),s.trigger("disabled.fu.checkbox")):(i.prop("disabled",!1),s.removeClass("disabled"),s.trigger("enabled.fu.checkbox")),i},itemchecked:function(e){var t=h(e.target),i=t.prop("checked");this.setCheckedState(t,i)},toggle:function(){this.isChecked()?this.uncheck():this.check()},check:function(){this.setCheckedState(this.$chk,!0)},uncheck:function(){this.setCheckedState(this.$chk,!1)},isChecked:function(){return this.$chk.prop("checked")},enable:function(){this.setDisabledState(this.$chk,!1)},disable:function(){this.setDisabledState(this.$chk,!0)},destroy:function(){return this.$label.remove(),this.$label[0].outerHTML}});return r.prototype.getValue=r.prototype.isChecked,o.register(r),a.Checkbox=r});
//# sourceMappingURL=sourcemaps/checkbox.js.map
