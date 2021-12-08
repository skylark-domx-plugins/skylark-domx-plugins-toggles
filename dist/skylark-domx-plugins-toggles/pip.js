/**
 * skylark-domx-plugins-toggles - The skylark toggle plugin library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-toggles/
 * @license MIT
 */
define(["skylark-langx","skylark-domx-styler","skylark-domx-noder","skylark-domx-eventer","skylark-domx-query","skylark-domx-plugins-base","./toggles"],function(t,i,e,n,s,o,r){"use strict";var u=o.Plugin.inherit({klassName:"Pip",pluginName:"domx.toggles.pip",options:{classes:{mini:"mini",unmini:"unmini"},selectors:{pipButton:".pip-button"}},_construct:function(t,i){o.Plugin.prototype._construct.call(this,t,i);let e=this.$(),n=this.options.selectors;this.target=this.options.target;n.pipButton?this.$pipButton=e.find(n.pipButton):this.$pipButton=e,this.listenTo(this.$pipButton,"click",this.togglePip),"pictureInPictureEnabled"in document||this.$pipButton.hide()},togglePip:function(){try{let t=s(this.target)[0];t!==document.pictureInPictureElement?(this.$pipButton.disabled(!0),t.requestPictureInPicture()):document.exitPictureInPicture()}catch(t){console.error(t)}finally{this.$pipButton.disabled(!1)}}});return o.register(u),r.Pip=u});
//# sourceMappingURL=sourcemaps/pip.js.map
