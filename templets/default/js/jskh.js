// JavaScript Document
<!--
$(document).ready(function()
{
//��֤
$('#complain').submit(function ()
{
if($('#name').val()==""){
$('#name').focus();
alert("�û�������Ϊ�գ�");
return false;
}
if($('#tel').val()=="")
{
$('#tel').focus();
alert("��ϵ�绰����Ϊ�գ�");
return false;
}
if($('#title').val()=="")
{
$('#title').focus();
alert("���ⲻ��Ϊ�գ�");
return false;
}
if($('#text').val()=="")
{
$('#text').focus();
alert("�������ݲ���Ϊ�գ�");
return false;
}
})
});
-->