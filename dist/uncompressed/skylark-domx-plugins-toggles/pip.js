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

  var Pip = plugins.Plugin.inherit({
    klassName : "Pip",

    pluginName : "domx.toggles.pip",
   
    options : {
      classes : {
        mini : "mini",
        unmini : "unmini"
      },
      selectors : {
        pipButton : null //'.pip-button'
      }
    },


    _construct: function(elm, options) {
      //this.options = options
      plugins.Plugin.prototype._construct.call(this,elm,options);

      let $el = this.$(),
          selectors = this.options.selectors,
          target = this.target = this.elmx(this.options.target);

      if (selectors.pipButton) {
        this.$pipButton = $el.find(selectors.pipButton);
      } else {
        this.$pipButton = $el;
      }


      this.listenTo(this.$pipButton,'click',this.togglePip);

      if (!('pictureInPictureEnabled' in document)) {
          this.$pipButton.hide();
      }

    },

    // togglePip toggles Picture-in-Picture mode on the video
    togglePip : function () {
      try {
        let targetEl = this.target.elm();
        if (targetEl !== noder.pictureInPicture()) {
          this.$pipButton.disabled(true);
          noder.pictureInPicture(targetEl)
        } else {
          noder.pictureInPicture(false)
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.$pipButton.disabled(false);
      }
    },

  });

  plugins.register(Pip);

  return toggles.Pip = Pip;
});

