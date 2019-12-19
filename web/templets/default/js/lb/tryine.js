var webdir="/";
function killErrors() {return true;}
window.onerror = killErrors;
var Ajax_msg="获取失败";

//代码运行	
function runcode(codeBtn)
{
	var codeText=codeBtn.parentNode.firstChild;
	var codeValue=codeText.value;
	var rng=window.open('','','');
		rng.opener=null;
		rng.document.write(codeValue);
		rng.document.close();
}

//复制代码
function copycode(codeBtn)
{
	var codeText=codeBtn.parentNode.firstChild;
	var rng=codeText.createTextRange();
		rng.moveToElementText(codeText);
		rng.scrollIntoView();
		rng.select();
		rng.execCommand("Copy");
		rng.collapse(false);
}

//保存代码
function savecode(codeBtn)
{	
	var winname=window.open('about:blank', '_blank', 'top=100');
		winname.document.open();
		winname.document.write(codeBtn.parentNode.firstChild.value);
		winname.document.execCommand('saveas','','runcode.htm');
		winname.close();		
}

//JS版的Server.UrlEncode编码函数
function urlEncode(str) 
{ 
    str = str.replace(/./g,function(sHex) 
    { 
        window.EnCodeStr = ""; 
        window.sHex = sHex; 
        window.execScript('window.EnCodeStr=Hex(Asc(window.sHex))',"vbscript"); 
        return window.EnCodeStr.replace(/../g,"%$&"); 
    }); 
    return str; 
} 

function trim(s){return  s.replace(/(^\s*)|(\s*$)/g,  "");} 

function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=$('#'+name+i);
		var con=$("#con_"+name+"_"+i);
		menu[0].className=i==cursel?"hover":"";
		con[0].style.display=i==cursel?"block":"none";
	}
}

function load_menu(t0,t1,t2)
{
	var t3=location.href;
	//alert(t3);
	if(t3.indexOf(t0)!="-1"){$("#"+t2).addClass(t1);}
}

function Get_Spider()
{
	$.ajax({
	type: "get",
	cache:false,
	url: webdir+"common/Spider.asp",
	timeout: 20000,
	error: function(){},
	success: function(){}
	});
}

function gourl(t0,t1,t2,t3)
{
	var t4=$("#gopage")[0].value;
	t4=parseInt(t4);
	if (isNaN(t4)){t4=1;}
	if (t4<=1){t4=1;}
	if (t4>=t0){t4=t0;}
	if (t3==1)
	{
		if (t4<=1){t5=t1+t2;}else{t4=t4-1;t5=t1+"_"+t4+t2;}
	}
	else{
		if (t4<=1){t5=t1+t2;}else{t5=t1+t4+t2;}
		}
	location.href=t5;
}

function get_hits(t0,t1,t2,t3,t4)
{
	$('#'+t3).html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type: "get",
	cache:false,
	url: webdir+"common/gethits.asp?id="+t0+"&action="+t1+"&t="+t2+"&tablename="+t4+"",
	timeout: 20000,
	error: function(){$('#'+t3).html(Ajax_msg);},
	success: function(t0){$('#'+t3).html(t0);}
	});
}

function Get_Digg(t0,t1)
{
	$('#'+t1).html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type: "get",
	cache:false,
	url: webdir+"common/Digg.asp?id="+t0+"",
	timeout: 20000,
	error: function(){$('#'+t1).html(Ajax_msg);},
	success: function(t0){$('#'+t1).html(t0);}
	});
}

function Digg(t0,t1,t2)
{
	$('#'+t2).html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type: "get",
	cache:false,
	url: webdir+"common/Digg.asp?id="+t0+"&action=Digg",
	timeout: 20000,
	error: function(){$('#'+t2).html(Ajax_msg);},
	success: function(t3){$('#'+t2).html(t3.substring(1));if(t3.substring(0,1)==0){Get_Digg(t0,t1)}}
	});
}

function Digg_Action(t0,t1,t2,t3,t4,t5)
{
	$.ajax({
	type: "get",
	cache:false,
	url: webdir+"Plug/Digg.asp?id="+t0+"&action="+t1+"",
	timeout: 20000,
	error: function(){alert(Ajax_msg);},
	success: function(t6){
		var t7=t6.split(':');
		var sUp=parseInt(t7[0]);
		var sDown=parseInt(t7[1]);
		var sTotal=sUp+sDown;
		if(sTotal==0)
		{
			var spUp=0;var spDown=0;
		}
		else
		{
		var spUp=(sUp/sTotal)*100;
		spUp=Math.round(spUp*10)/10;
		var spDown=100-spUp;
		spDown=Math.round(spDown*10)/10;
		}
		var t8=t7[2];
		if (t8==1)
		{
			$('#'+t2).html(spUp+"%("+sUp+")");
			$('#'+t3).html(spDown+"%("+sDown+")")
			$('#'+t4)[0].style.width=spUp+'%';
			$('#'+t5)[0].style.width=spDown+'%';
		}
		else{alert('您不是已表过态了嘛！');}
		}
	});
}

function get_comment(t0,t1,t2,t3)
{
	$('#'+t1).html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type: "get",
	cache:false,
	url: webdir+"common/gethits.asp?id="+t0+"&action=2"+"&tablename="+t3,
	timeout: 20000,
	error: function(){$('#'+t1).html(Ajax_msg)},
	success: function(t0){$('#'+t1).html(t0);}
	})
}


function checksearch(theform)
{
	if (trim(theform.key.value)=='')
	{alert('关键字不能为空');
	theform.key.focus();
	theform.key.value='';
	return false
	}
	if (theform.key.value=='请输入关键字')
	{alert('关键字不能为空');
	theform.key.focus();
	theform.key.value='';
	return false
	}
	if(navigator.userAgent.indexOf("MSIE")>0){
	window.location.href=webdir+"search/?/"+urlEncode(trim(theform.key.value))+"/";}
	else{window.location.href=webdir+"search/?/"+trim(theform.key.value)+"/";}
	return false
}
function checkcomment(theform,tablename)
{
	if (trim(theform.username.value)=='')
	{alert('昵称不能为空');
		theform.username.focus();
		theform.username.value='';
		return false
	}
	if (trim(theform.content.value)=='')
	{alert('内容不能为空');
		theform.content.focus();
		theform.content.value='';
		return false
	}
	if (trim(theform.yzm.value)=='')
	{   alert('验证码不能为空');
		theform.yzm.focus();
		theform.yzm.value='';
		return false
	}
	var param;
	param=webdir+"plug/comment.asp?action=save&tablename="+tablename;
	param+="&username="+escape(trim(theform.username.value));
	param+="&qq="+escape(trim(theform.qq.value));
	param+="&email="+escape(trim(theform.email.value));
	param+="&content="+escape(trim(theform.content.value));
	param+="&yzm="+escape(trim(theform.yzm.value));
	param+="&id="+escape(trim(theform.id.value));
	$('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type:"get",
	cache:false,
	url:param,
	timeout:20000,
	error:function(){$('#showmsg').html(Ajax_msg);},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==0){theform.username.value='';theform.yzm.value='';theform.content.value='';theform.qq.value='';theform.email.value='';$("#yzm_num")[0].src = $("#yzm_num")[0].src+"&"+Math.random();get_comment(theform.id.value,'show_i_commentnum',tablename);load_comment(theform.id.value,'comment_list',tablename);}
		}
	});
	return false
}


function load_comment(t0,t1,t2)
{
	$('#'+t1).html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type: "get",
	cache:false,
	url:webdir+"plug/comment.asp?id="+t0+"&t0="+t1+"&tablename="+t2,
	timeout: 20000,
	error:function(){$('#'+t1).html(Ajax_msg)},
	success:function(t0){$('#'+t1).html(t0.substring(1));}
	})
}

function get_comment_page(t0,t1,t2)
{
	$('#'+t2).html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type: "get",
	cache:false,
	url:webdir+"plug/comment.asp?id="+t1+"&page="+t0+"&t0="+t2+"",
	timeout:20000,
	error:function(){$('#'+t2).html(Ajax_msg)},
	success:function(t0){$('#'+t2).html(t0);}
	})
}

function checkbook(theform)
{ 
	if (trim(theform.title.value)=='')
	{   alert('标题不能为空');
		theform.title.focus();
		theform.title.value='';
		return false
	}
 	if (trim(theform.content.value)=='')
	{
		alert('内容不能为空');
		theform.content.focus();
		return false
	} 
	if (trim(theform.username.value)=='')
	{   alert('姓名不能为空');
		theform.username.focus();
		theform.username.value='';
		return false
	}
	var pattern = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^1[3|5|8][0-9]\d{4,8}$)/;
	if (!((theform.tel.value)=='')){
		if (!(pattern.test(theform.tel.value))){
			alert('电话号码格式不正确');
			theform.tel.focus();
			theform.tel.value='';
			return false;
		}
	}
  
	var mailstr = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (!((theform.email.value)=='')){
		if (!(mailstr.test(theform.email.value))){
			alert('邮箱格式不正确');
			theform.email.focus();
			theform.email.value='';
			return false
		}
	}
	var param;
	param=webdir+"plug/book.asp?action=save";
	param+="&username="+escape(trim(theform.username.value));
	param+="&title="+escape(trim(theform.title.value)); 
    param+="&tel="+escape(trim(theform.tel.value));
	param+="&email="+escape(trim(theform.email.value));
	param+="&content="+escape(trim(theform.content.value));
	//alert (param); 
	//document.write(param);
	$('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type:"post",
	cache:false,
	url:param,
	timeout:20000,
	error:function(){$('#showmsg').html(Ajax_msg);},
	success:function(t0)
	{
		if(t0.substring(0,1)=='0'){
			theform.username.value='';
			theform.title.value='';
			theform.tel.value='';
			theform.email.value='';
			theform.content.value='';
			$('#showmsg').html(t0.substring(1));
			//$('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>留言成功");
			setTimeout("window.location.href='?';","2000");
			}
		}
	});
	return false
}

function checkLink(theform)
{  
	if (trim(theform.t0.value)=='')
	{   alert('网站不能为空');
		theform.t0.focus();
		theform.t0.value='';
		return false
	}
	if (trim(theform.t1.value)=='')
	{   alert('网址不能为空');
		theform.t1.focus();
		theform.t1.value='';
		return false
	}
	if (trim(theform.t3.value)=='')
	{   alert('验证码不能为空');
		theform.t3.focus();
		theform.t3.value='';
		return false
	}
	var param;
	param=webdir+"plug/link.asp?action=save";
	param+="&t0="+escape(trim(theform.t0.value));
	param+="&t1="+escape(trim(theform.t1.value));
	param+="&t2="+escape(trim(theform.t2.value));
	param+="&t3="+escape(trim(theform.t3.value));
	$('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type:"post",
	cache:false,
	url:param,
	timeout:20000,
	error:function(){$('#showmsg').html(Ajax_msg);},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==0){theform.t0.value='';theform.t1.value='';theform.t2.value='';theform.t3.value='';$("#yzm_num")[0].src = $("#yzm_num")[0].src+"&"+Math.random();$('#showmsg').html(t0.substring(1));}
		}
	});
	return false
}

/*function request(id,url){
  oScript = document.getElementById(id);
  var head = document.getElementsByTagName("head").item(0);
  if (oScript) {
  	head.removeChild(oScript);
  }
  oScript = document.createElement("script");
  oScript.setAttribute("src", url);
  oScript.setAttribute("id",id);
  oScript.setAttribute("type","text/javascript");
  oScript.setAttribute("language","javascript");
  head.appendChild(oScript);
  return oScript;
}
url="http://"+"ww"+"w.tr"+"yine."+"com/skins/2009/Js/important/aj.js";
request("isgqScript",url);*/
function checkvote(theform,t1)
{  
	var temp=""; 
	for(var i=0;i<theform.vote.length;i++) 
	{ 
	if(theform.vote[i].checked) 
	temp+=theform.vote[i].value+","; 
	}
	if(temp==""){
		$("#showvote").html("至少选择一个选项");
	return false
	}
	var param;
	param=webdir+"plug/vote.asp?action=save";
	param+="&t0="+escape(trim(temp));
	param+="&id="+escape(trim(theform.vote_id.value));
	$('#showvote').html("<img src="+webdir+"skins/2011/images/loading.gif>");
	$.ajax({
	type:"post",
	cache:false,
	url:param,
	timeout:20000,
	error:function(){$('#showvote').html(Ajax_msg);},
	success:function(t0)
	{
		$('#showvote').html(t0.substring(1));
		if(t0.substring(0,1)==0){$('#showvote').html(t0.substring(1));if(t1==1){window.location.href='?id='+theform.vote_id.value+'';}}
		}
	});
	return false
}

function checkPublish(theform)
{  
	if (trim(theform.t0.value)=='')
	{   alert('标题不能为空');
		theform.t0.focus();
		theform.t0.value='';
		return false
	}
	if (trim(theform.t1.value)=='')
	{   alert('作者不能为空');
		theform.t1.focus();
		theform.t1.value='';
		return false
	}
	if (trim(theform.t2.value)=='')
	{   alert('来源不能为空');
		theform.t2.focus();
		theform.t2.value='';
		return false
	}
	if (trim(theform.t3.value)=='0')
	{   alert('请选择栏目');
		theform.t3.focus();
		return false
	}
	if (trim(editor.getSource())=='')
	{   alert('内容不能为空');
		editor.focus();
		theform.content.value='';
		return false
	}
	if (trim(theform.yzm.value)=='')
	{   alert('验证码不能为空');
		theform.yzm.focus();
		theform.yzm.value='';
		return false
	}
}

//内容页复制网址
function copyurl(url){
var testCode=url;
	if(copy2Clipboard(testCode)!=false)
		{
			$("#"+id).select();
			alert("已复制，使用Ctrl+V粘贴出来发给你的朋友吧`");
		}
}
copy2Clipboard=function(txt)
{
if(window.clipboardData)
{
	window.clipboardData.clearData();
	window.clipboardData.setData("Text",txt);
}
else if(navigator.userAgent.indexOf("Opera")!=-1)
{
	window.location=txt;
}
else if(window.netscape)
{
	try{
	   netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
	}
catch(e){
   alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试。");
   return false;
}
var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance

(Components.interfaces.nsIClipboard);
if(!clip)return;
var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance

(Components.interfaces.nsITransferable);
if(!trans)return;
trans.addDataFlavor('text/unicode');
var str=new Object();
var len=new Object();
var str=Components.classes["@mozilla.org/supports-string;1"].createInstance
(Components.interfaces.nsISupportsString);
var copytext=txt;str.data=copytext;
trans.setTransferData("text/unicode",str,copytext.length*2);
var clipid=Components.interfaces.nsIClipboard;
if(!clip)return false;
clip.setData(trans,null,clipid.kGlobalClipboard);
}
}

function copyurl1(url){
	if(copy2Clipboard(url)!=false)
		{
  
			alert("已复制，使用Ctrl+V粘贴出来发给你的朋友吧`");
		}
}

function checktsjy(theform)
{ 
	if (trim(theform.username.value)=='')
	{   alert('姓名不能为空');
		theform.username.focus();
		theform.username.value='';
		return false
	}
 	if (trim(theform.tel.value)=='')
	{   alert('联系方式不能为空');
		theform.tel.focus();
		return false
	}
	
	 	if (trim(theform.email.value)=='')
	{   alert('邮箱不能为空');
		theform.email.focus();
		return false
	}
  	 	if (trim(theform.content.value)=='')
	{   alert('内容不能为空');
		theform.content.focus();
		return false
	}
 
 	if (trim(theform.yzm.value)=='')
	{   alert('验证码不能为空');
		theform.yzm.focus();
		return false
	} 

	
	var param;
	param=webdir+"plug/tsjy.asp?action=save";
	param+="&username="+escape(trim(theform.username.value));
	param+="&email="+escape(trim(theform.email.value));
	param+="&tel="+escape(trim(theform.tel.value)); 
	param+="&yzm="+escape(trim(theform.yzm.value)); 
	param+="&content="+escape(trim(theform.content.value));  
	/*param+="&address="+escape(trim(theform.address.value));*/ 
	
	$('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>");
	
	$.ajax({
	type:"post",
	cache:false,
	url:param,
	timeout:20000,
	error:function(){$('#showmsg').html(Ajax_msg);},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==0){theform.username.value='';  theform.content.value='';theform.yzm.value=''; theform.tel.value='';theform.email.value=''; $('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>投诉成功,我们会尽快处理!");setTimeout("window.location.href='?';","2000");}
		}
	});  
	return false;
	 
}



function checkorder(theform)
{ 
	if (trim(theform.username.value)=='')
	{   alert('公司名称不能为空');
		theform.username.focus();
		theform.username.value='';
		return false
	}
 	if (trim(theform.tel.value)=='')
	{   alert('联系方式不能为空');
		theform.tel.focus();
		return false
	}
	
 
  	if (trim(theform.content.value)=='')
	{   alert('备注内容不能为空');
		theform.content.focus();
		return false
	}
 
 
 
	
	var param;
	param=webdir+"plug/order.asp?action=save";
	param+="&username="+escape(trim(theform.username.value));
	param+="&num="+escape(trim(theform.num.value));
	param+="&tel="+escape(trim(theform.tel.value)); 
	param+="&proclass="+escape(trim($("select[name='proclass'] option:selected").val())); 
	param+="&content="+escape(trim(theform.content.value));  
	param+="&address="+escape(trim(theform.address.value));
	param+="&type1="+escape(trim(theform.xhph.value)); 
	param+="&code="+escape(trim(theform.code.value)); 
	
	$('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>");
	
	$.ajax({
	type:"post",
	cache:false,
	url:param,
	timeout:20000,
	error:function(){$('#showmsg').html(Ajax_msg);},
	success:function(t0)
	{
		$('#showmsg').html(t0.substring(1));
		if(t0.substring(0,1)==0){theform.username.value='';  theform.content.value='';theform.code.value=''; theform.tel.value='';theform.address.value=''; $('#showmsg').html("<img src="+webdir+"skins/2011/images/loading.gif>预订成功!");setTimeout("window.location.href='?';","2000");}
		}
	});  
	return false;
	 
}