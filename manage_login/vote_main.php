<?php
/**
 * ͶƱ����
 *
 * @version        $Id: vote_main.php 1 23:54 2010��7��20��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require_once(dirname(__FILE__)."/config.php");
require_once(DEDEINC."/datalistcp.class.php");
setcookie("ENV_GOBACK_URL",$dedeNowurl,time()+3600,"/");
$sql = "SELECT aid,votename,starttime,endtime,totalcount,isenable FROM #@__vote ORDER BY aid DESC";
$dlist = new DataListCP();
$issel = isset($issel) ? $issel : 0;
$aid = isset($aid) ? $aid : 0;
if($issel == 1)
{
    $dlist->SetParameter('issel',$issel);
    $dlist->SetTemplet(DEDEADMIN."/templets/vote_select.htm");
} else {
    $dlist->SetTemplet(DEDEADMIN."/templets/vote_main.htm");
}
$dlist->SetSource($sql);
$dlist->display();