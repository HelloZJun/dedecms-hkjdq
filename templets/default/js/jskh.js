// JavaScript Document
<!--
$(document).ready(function()
{
//验证
$('#complain').submit(function ()
{
if($('#name').val()==""){
$('#name').focus();
alert("用户名不能为空！");
return false;
}
if($('#tel').val()=="")
{
$('#tel').focus();
alert("联系电话不能为空！");
return false;
}
if($('#title').val()=="")
{
$('#title').focus();
alert("标题不能为空！");
return false;
}
if($('#text').val()=="")
{
$('#text').focus();
alert("具体内容不能为空！");
return false;
}
})
});
-->