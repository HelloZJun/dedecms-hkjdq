<?php
$z[0]=Array("match","<!-- ÎÄÕÂÄ£°å -->[ÄÚÈİ]<div class=\"news\">",5,71);
$z[1]=Array("trim","<a([^>]*)>(.*)</a>",76,128);
$z[1][4]['replace']="";
$z[2]=Array("trim","<img([^>]*)>",130,176);
$z[2][4]['replace']="";
$z[3]=Array("function","",181,212);

?>