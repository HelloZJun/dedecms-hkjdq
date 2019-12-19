{dede:noteinfo notename="技术文档" channelid="1" macthtype="string"
refurl="http://" sourcelang="utf-8" cosort="asc" isref="no" exptime="10" usemore="0" /}

{dede:listrule sourcetype="batch" rssurl="http://" regxurl="http://www.humcore.com/case-1027-(*).html"
startid="1" endid="2" addv="1" urlrule="area"
 musthas=".html" nothas="" listpic="1" usemore="0"}
    {dede:addurls}{/dede:addurls}
    {dede:batchrule}{/dede:batchrule}
    {dede:regxrule}{/dede:regxrule}
    {dede:areastart}<!-- 案例 -->{/dede:areastart}
    {dede:areaend}<ul class="fen">
				<span class="page-disabled">&laquo; 首页</span><span class="page-disabled control">&#8249; 前一页</span><span class="page-num page-cur background fontcolor">1</span><a class="page-num" href="/case-1027-2.html">2</a><a class="control" href="/case-1027-2.html">下一页 &#8250;</a><a href="/case-1027-2.html">末页 &raquo;</a>
		</ul>{/dede:areaend}
{/dede:listrule}
{dede:sppage sptype='full' sptype='full' srul='1' erul='5'}{/dede:sppage}
{dede:previewurl}http://www.humcore.com/case-item-369.html{/dede:previewurl}
{dede:keywordtrim}{/dede:keywordtrim}
{dede:descriptiontrim}{/dede:descriptiontrim}
{dede:item field='title' value='' isunit='' isdown=''}
   {dede:match}<h1 class="news_t">[内容]</h1>{/dede:match}
   
   {dede:function}{/dede:function}
{/dede:item}
{dede:item field='writer' value='' isunit='' isdown=''}
   {dede:match}{/dede:match}
   
   {dede:function}{/dede:function}
{/dede:item}
{dede:item field='source' value='' isunit='' isdown=''}
   {dede:match}{/dede:match}
   
   {dede:function}{/dede:function}
{/dede:item}
{dede:item field='pubdate' value='' isunit='' isdown=''}
   {dede:match}<p class="xbt">[内容</p>{/dede:match}
   
   {dede:function}@me=GetMkTime(@me);{/dede:function}
{/dede:item}
{dede:item field='body' value='' isunit='1' isdown='1'}
   {dede:match}<div class="newsshow_div">[内容]<p class="MsoNormal" style="text-indent:2em;">{/dede:match}
   
   {dede:function}{/dede:function}
{/dede:item}
