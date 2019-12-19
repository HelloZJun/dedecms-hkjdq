<div class="VieList">
			<div class="time">
				<div class="big">[field:pubdate function="MyDate('d',@me)"/]</div>
					<div class="smail">[field:pubdate function="MyDate('M',@me)"/]<br />
[field:pubdate function="MyDate('y',@me)"/]</div>
			</div>
			<div class="img"><img src="[field:litpic/]" onerror="this.src='/include/noPic.jpg'" /></div>
			<h3><a href="[field:arcurl/]">[field:title/]</a></h3>
			
			<div class="keys gatFont">∑÷¿‡£∫[field:typename/]&nbsp; | TAGS£∫<a href="tag.php?key="></a>  | VISITORS:<script src="{dede:field name='phpurl'/}/count.php?view=yes&aid={dede:field name='id'/}&mid={dede:field name='mid'/} "type='text/javascript' language="javascript"></script> </div>
			<div class="coms">
			&nbsp; &nbsp; &nbsp;[field:description function='cn_substr(@me,158)'/]			
			</div>
		</div>