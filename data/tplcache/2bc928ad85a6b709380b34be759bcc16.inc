<dd> 
<dl> 
<dt><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></dt> 
<dd> 
<ul> 
{dede:sql sql='Select * from `lzz_arctype` where reid=~id~ ORDER BY id'} 
<li>&middot;&nbsp;<a href="[field:typedir function="cn_substr(@me,200,9) " /]">[field:typename/]</a></li> 
{/dede:sql} 
</ul> 
</dd> 
</dl> 
</dd>