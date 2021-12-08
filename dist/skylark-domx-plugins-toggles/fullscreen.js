/**
 * skylark-domx-plugins-toggles - The skylark toggle plugin library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-toggles/
 * @license MIT
 */
define(["skylark-langx","skylark-domx-styler","skylark-domx-noder","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./toggles"],function(l,s,e,t,n,u,r){"use strict";var i=u.Plugin.inherit({klassName:"Fullscreen",pluginName:"domx.toggles.fullscreen",options:{classes:{full:"full",unfull:"unfull"},selectors:{fullscreenButton:null}},_construct:function(l,s){u.Plugin.prototype._construct.call(this,l,s);let e=this.$(),t=this.options.selectors;this.target=this.elmx(this.options.target);t.fullscreenButton?this.$fullscreenButton=e.find(t.fullscreenButton):this.$fullscreenButton=e,this.$fullscreenIcons=e.find(t.fullscreenIcons),this.listenTo(this.$fullscreenButton,"click",this.toggleFullScreen),this.listenTo(this.target,"fullscreenchange,webkitfullscreenchange",this.updateFullscreenButton),this.updateFullscreenButton()},toggleFullScreen:function(){e.fullscreen()?e.fullscreen(!1):this.target.fullscreen()},updateFullscreenButton:function(){e.fullscreen()?(this.$fullscreenButton.data("title","Exit full screen (f)"),this.$fullscreenButton.removeClass(this.options.classes.full).addClass(this.options.classes.unfull)):(this.$fullscreenButton.data("title","Full screen (f)"),this.$fullscreenButton.removeClass(this.options.classes.unfull).addClass(this.options.classes.full))}});return u.register(i),r.Fullscreen=i});
//# sourceMappingURL=sourcemaps/fullscreen.js.map
