{dede:noteinfo notename="公司新闻" channelid="1" macthtype="string"
    refurl="http://www.humcore.com/article-item-417.html" sourcelang="utf-8" cosort="asc"
  isref="no" exptime="10" usemore="0" /}
{dede:listrule sourcetype="batch" rssurl="http://" regxurl="http://www.humcore.com/article-item-(*).html"
startid="1" endid="2" addv="1" urlrule="area" musthas=".html"
 nothas="" listpic="1" usemore="0"}
    {dede:addurls}{/dede:addurls}
    {dede:batchrule}{/dede:batchrule}
    {dede:regxrule}{/dede:regxrule}
    {dede:areastart}<!-- 文章模板 -->{/dede:areastart}
    {dede:areaend}<ul class="fen">{/dede:areaend}
{/dede:listrule}
