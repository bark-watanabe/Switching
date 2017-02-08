;(function($) {
	$.fn.switching = function(options){
		// 変数定義
		var $val = '';
		var $this = $(this);
		var $target = $this.next();
		var defaults = {
			breakPoint: 768,
			target: $target,
			source: $this,
			addSource: '',
		}
		var settings = {};
		var timer = false;
		var w = 0;
		// 実行処理
		if(options !== undefined){
			if('target' in options){
				options.target = $(options.target);
			}
		}
		settings = $.extend({}, defaults, options);
		settings.target.hide();
		$(window).on('load resize', function() {
			clearTimeout(timer);
			timer = setTimeout(function(){
				w = $(window).width();
				if(w < settings.breakPoint){
					_spView(settings.addSource);
					return;
				}
				_pcView(settings.addSource);
				return;
			}, 300);
		});
		// 関数定義
		function _spView(elm){
			_elmHide(elm);
			settings.source.hide();
			settings.target.show();
		}
		function _pcView(elm){
			_elmShow(elm);
			settings.target.hide();
			settings.source.show();
		}
		function _elmHide(elm){
			if(_isArray(elm)){
				for($val in elm){
					$(elm[$val]).hide();
				}
				return;
			}
			$(elm).hide();
			return;
		}
		function _elmShow(elm){
			if(_isArray(elm)){
				for($val in elm){
					$(elm[$val]).show();
				}
				return;
			}
			$(elm).show();
			return;
		}
		function _isArray(obj){
			return Object.prototype.toString.call(obj) === '[object Array]';
		}
	};
})(jQuery);