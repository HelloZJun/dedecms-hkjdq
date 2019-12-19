<?php
$z[0]=Array("field","",20,46);
$z[0][4]['name']="currentstyle";
$z[1]=Array("field","",58,86);
$z[1][4]['name']="typeurl";
$z[2]=Array("field","",88,117);
$z[2][4]['name']="typename";
$z[3]=Array("field","",131,159);
$z[3][4]['name']="typeurl";
$z[4]=Array("field","\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->\r\n          GetOne(\$sql);\r\n          @me=is_array(\$row)?'class=\"dropdown-menu nav_small\"':'style=\"display:none\"';\r\n          ",352,667);
$z[4][4]['name']="typeid";
$z[4][4]['runphp']="yes";
$z[5]=Array("channel","\r\n          <li><a href=\"[field:typelink/]\">[field:typename/]</a></li>\r\n          ",692,827);
$z[5][4]['type']="son";
$z[5][4]['noself']="yes";

?>