export default function(Vue){
	Vue.directive("height",{
		inserted(el,binding){
			if(binding.value == undefined){
				$(el).height($(window).height())
			}else if(typeof binding.value == 'number'){
				$(el).height($(window).height() - binding.value)
			}
		}
	});
	Vue.directive("width",{
		inserted(el,binding){
			if(binding.value == undefined){
				$(el).width($(window).width())
			}else if(typeof binding.value == 'number'){
				$(el).width($(window).width() - binding.value)
			}
		}
	});
	Vue.directive("albumList",{
		inserted(el,binding){
			 
			$(el).height($(window).height() - $(".header").height())
			 
		}
	})
	Vue.directive("lyricHeight",{
		inserted(el,binding){
			 
			$(el).height($(".content_player").height())
			 
		}
	})
}