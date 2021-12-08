define([
  "skylark-langx",
  "skylark-domx-styler",
  "skylark-domx-noder",
  "skylark-domx-eventer",
  "skylark-domx-query",
  "skylark-domx-plugins-base",
  "./toggles"
],function(langx,styler,noder, eventer,$ , plugins,toggles) {

  'use strict'

  var Fullscreen = plugins.Plugin.inherit({
    klassName : "Fullscreen",

    pluginName : "intg.custom_html5_video",
   
    options : {
      classes : {
        full : "full",
        unfull : "unfull"
      },
      selectors : {
        fullscreenButton : '.fullscreen-button',
        fullscreenIcons : '.fullscreen-button use'
      }
    },


    _construct: function(elm, options) {
      //this.options = options
      plugins.Plugin.prototype._construct.call(this,elm,options);

      let $el = this.$(),
          selectors = this.options.selectors,
          target = this.target = this.options.target;

      if (selectors.fullscreenButton) {
        this.$fullscreenButton = $el.find(selectors.fullscreenButton);
      } else {
        this.$fullscreenButton = $el;
      }

      this.$fullscreenIcons = $el.find(selectors.fullscreenIcons);

      // Add eventlisteners here
      this.listenTo(this.$fullscreenButton,'click',this.toggleFullScreen);
      this.listenTo($(target),'fullscreenchange,webkitfullscreenchange',this.updateFullscreenButton);

    },


    // toggleFullScreen toggles the full screen state of the video
    // If the browser is currently in fullscreen mode,
    // then it should exit and vice versa.
    toggleFullScreen : function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (document.webkitFullscreenElement) {
        // Need this to support Safari
        document.webkitExitFullscreen();
      } else if (this.target.webkitRequestFullscreen) {
        // Need this to support Safari
        this.target.webkitRequestFullscreen();
      } else {
        this.target.requestFullscreen();
      }
    },

    // updateFullscreenButton changes the icon of the full screen button
    // and tooltip to reflect the current full screen state of the video
    updateFullscreenButton : function () {
      this._fullscreenIcons.forEach((icon) => icon.classList.toggle('hidden'));

      if (document.fullscreenElement) {
        this.$fullscreenButton.data('title', 'Exit full screen (f)');
        this.$fullscreenButton.removeClass(this.options.classes.full).addClass(this.options.classes.unfull);
      } else {
        this.$fullscreenButton.data('title', 'Full screen (f)');
        this.$fullscreenButton.removeClass(this.options.classes.unfull).addClass(this.options.classes.full);
      }
    }

  });

  plugins.register(Fullscreen);

  return toggles.Fullscreen = Fullscreen;
});

