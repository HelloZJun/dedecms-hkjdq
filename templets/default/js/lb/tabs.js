$(function(){
		$('.tabList li').click(function(){
			//var aa = $(".cur").text().replace("指数","");
			//$(".cur").children().text(aa);
			var index = $('.tabList li').index(this);
			$('.tabList li').removeClass('cur');
			$('.tabCon div').hide();
			$(this).addClass('cur');
			$('.tabCon div:eq('+index+')').show();
			//$(this).children().text($(this).text()+"指数");
			})
			
		$('#gptab1').click(function(){
			
			$('#gptab2').removeClass('gpactive');
			$(this).addClass('gpactive')
			
			})
		$('#gptab2').click(function(){
			
			$('#gptab1').removeClass('gpactive');
			$(this).addClass('gpactive')
			
			})	
		$('#gptab3').click(function(){
			$('#gptab4').removeClass('gpactive');
			$(this).addClass('gpactive');
			$("#coverage_table,#kucun_table,#coverage_more,#kucun_more").toggle();
			})
		$('#gptab4').click(function(){
			$('#gptab3').removeClass('gpactive');
			$(this).addClass('gpactive');
			$("#coverage_table,#kucun_table,#coverage_more,#kucun_more").toggle();
			
			})	
			
	});  
