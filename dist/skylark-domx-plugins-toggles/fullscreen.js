/**
 * skylark-domx-plugins-toggles - The skylark toggle plugin library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-toggles/
 * @license MIT
 */
define(["skylark-langx","skylark-domx-styler","skylark-domx-noder","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./toggles"],function(l,s,t,e,n,u,r){"use strict";var o=u.Plugin.inherit({klassName:"Fullscreen",pluginName:"domx.toggles.fullscreen",options:{classes:{full:"full",unfull:"unfull"},selectors:{fullscreenButton:null}},_construct:function(l,s){u.Plugin.prototype._construct.call(this,l,s);let t=this.$(),e=this.options.selectors;this.target=this.elmx(this.options.target);e.fullscreenButton?this.$fullscreenButton=t.find(e.fullscreenButton):this.$fullscreenButton=t,this.$fullscreenIcons=t.find(e.fullscreenIcons),this.listenTo(this.$fullscreenButton,"click",this.toggleFullScreen),this.listenTo(this.target,"fullscreenchange",this.updateFullscreenButton),this.updateFullscreenButton()},toggleFullScreen:function(){t.fullscreen()?t.fullscreen(!1):this.target.fullscreen()},updateFullscreenButton:function(){t.fullscreen()?(this.$fullscreenButton.attr("data-title","Exit full screen (f)"),this.$fullscreenButton.removeClass(this.options.classes.full).addClass(this.options.classes.unfull)):(this.$fullscreenButton.attr("data-title","Full screen (f)"),this.$fullscreenButton.removeClass(this.options.classes.unfull).addClass(this.options.classes.full))}});return u.register(o),r.Fullscreen=o});
//# sourceMappingURL=sourcemaps/fullscreen.js.map
