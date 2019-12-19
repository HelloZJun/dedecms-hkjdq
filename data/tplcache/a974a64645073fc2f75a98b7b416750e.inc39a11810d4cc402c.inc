<?php
$z[0]=Array("field","\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n            @me=is_array(\$row)?'href=\"javascript:void(0);\"':'';\r\n            ",7,289);
$z[0][4]['name']="typeid";
$z[0][4]['runphp']="yes";
$z[1]=Array("field","",296,324);
$z[1][4]['name']="typeurl";
$z[2]=Array("field","",326,355);
$z[2][4]['name']="typename";
$z[3]=Array("field","\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n            @me=is_array(\$row)?'class=\"touch-arrow-down\"':'style=\"display:none\"';\r\n            ",358,658);
$z[3][4]['name']="typeid";
$z[3][4]['runphp']="yes";
$z[4]=Array("channel","\r\n              <li><a href='[field:typeurl/]' title=\"[field:typename/]\">[field:typename/]</a></li>\r\n              ",701,869);
$z[4][4]['type']="son";
$z[4][4]['noself']="yes";

?>