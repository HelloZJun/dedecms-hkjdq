<li><a {dede:field name=typeid runphp="yes"}
global $dsql;
$sql = "SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 ";
$row = $dsql->GetOne($sql);
            @me=is_array($row)?'href="javascript:void(0);"':'';
            {/dede:field} href="{dede:field name='typeurl'/}">{dede:field name='typename'/}<i {dede:field name=typeid runphp="yes"}
global $dsql;
$sql = "SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 ";
$row = $dsql->GetOne($sql);
            @me=is_array($row)?'class="touch-arrow-down"':'style="display:none"';
            {/dede:field}></i></a>
            <ul>
              {dede:channel type='son' noself='yes'}
              <li><a href='[field:typeurl/]' title="[field:typename/]">[field:typename/]</a></li>
              {/dede:channel}
            </ul>
          </li>