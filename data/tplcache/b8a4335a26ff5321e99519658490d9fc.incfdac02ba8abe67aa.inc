<?php
$z[0]=Array("match","<div class=\"newsshow_div\">[����]<div class=\"sx\">",5,78);
$z[1]=Array("trim","<a([^>]*)>(.*)</a>",83,135);
$z[1][4]['replace']="";
$z[2]=Array("trim","<script([^>]*)>(.*)</script>",137,199);
$z[2][4]['replace']="";
$z[3]=Array("function","",204,235);

?>