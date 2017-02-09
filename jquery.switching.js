;(function($) {
	$.fn.switching = function(options){
		// 変数定義
		var $val = '';
		var $this = $(this);
		var $blkName = 'switchingJsBlk';
		var $target = $this.next();
		var defaults = {
			method: 'src',
			trigger: 'bp',
			url: '',
			breakPoint: 768,
			target: $target,
			source: $this,
			addSource: '',
		}
		var settings = {};
		var timer = false;
		var w = 0;
		var u = '';
		// 実行処理
		if(options !== undefined){
			if('target' in options){
				options.target = $(options.target);
			}
		}
		settings = $.extend({}, defaults, options);
		// settings.target.hide();
		$(window).on('load resize', function() {
			clearTimeout(timer);
			timer = setTimeout(function(){
				if(settings.trigger == 'ua'){
					_uaProcessing(settings);
					return;
				}
				_bpProcessing(settings);
			}, 300);
		});
		// 関数定義
		function _spView(obj){
			if(obj.method == 'ajax'){
				_ajaxSpView(obj);
				return;
			}
			obj.source.hide();
			_elmHide(obj.addSource);
			obj.target.show();
		}
		function _ajaxSpView(obj){
			$.ajax({
				cache: false,
				url: obj.url,
			})
			.done(function(data){
				obj.source.hide();
				_elmHide(obj.addSource);
				obj.source.after('<div class="'+$blkName+'">'+data+'</div>');
			})
			.fail(function(data){
				console.log('error');
			});
		}
		function _pcView(obj){
			_elmShow(obj.addSource);
			if(obj.method == 'ajax'){
				_ajaxPcView(obj);
				return;
			}
			obj.target.hide();
			obj.source.show();
		}
		function _ajaxPcView(obj){
			$('.'+$blkName).remove();
			obj.source.show();
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
		function _bpProcessing(obj){
			w = $(window).width();
			if(w < obj.breakPoint){
				_spView(obj);
				return;
			}
			_pcView(obj);
			return;
		}
		function _uaProcessing(obj){
			u = _isMobile(navigator.userAgent);
			if(u === true){
				_spView(obj);
				return;
			}
			_pcView(obj);
			return;
		}
		function _isMobile(str){
			if (str.indexOf('iPhone') > 0 || str.indexOf('iPod') > 0 || str.indexOf('Android') > 0 && str.indexOf('Mobile') > 0) {
				return true;
			}
			return false;
		}
	};
})(jQuery);