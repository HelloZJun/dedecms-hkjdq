<?php
$z[0]=Array("match","<div class=\"newsshow_div\">[ÄÚÈİ]</div>",5,68);
$z[1]=Array("trim","<a([^>]*)>(.*)</a>",73,125);
$z[1][4]['replace']="";
$z[2]=Array("trim","<img([^>]*)>",127,173);
$z[2][4]['replace']="";
$z[3]=Array("function","",178,209);

?>