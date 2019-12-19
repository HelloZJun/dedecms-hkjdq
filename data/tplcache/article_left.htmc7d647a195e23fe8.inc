<?php
$z[0]=Array("field","\$ID = @me; \$sql = \"SELECT * FROM `dede_arctype` WHERE id=\$ID\";\$query = mysql_query(\$sql);\$row=mysql_fetch_array(\$query); \$relID = \"\$row[reid]\"; if(\$relID == 0) {@me = \$row[typename];}else{\$sql = \"SELECT `typename` FROM `dede_arctype` WHERE id=\$relID\";\$query = mysql_query(\$sql);\$row=mysql_fetch_array(\$query); @me = \$row[typename];}",42,426);
$z[0][4]['name']="typeid";
$z[0][4]['runphp']="yes";
$z[1]=Array("channel","\r\n  <li><a href='[field:typeurl/]'>[field:typename/]</a></li>\r\n       ",484,684);
$z[1][4]['type']="son";
$z[1][4]['currentstyle']="<li><a href='~typelink~' class='thisclass'>~typename~</a></li>";
$z[2]=Array("global","",722,754);
$z[2][4]['name']="cfg_templets_skin";

?>