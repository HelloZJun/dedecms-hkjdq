<?php
/**
 * վ�����Ź���
 *
 * @version        $Id: mynews_main.php 1 15:28 2010��7��20��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require_once(dirname(__FILE__)."/config.php");
require_once(DEDEINC."/typelink.class.php");
require_once(DEDEINC."/datalistcp.class.php");
setcookie("ENV_GOBACK_URL",$dedeNowurl,time()+3600,"/");
$sql = "SELECT
 #@__mynews.aid,#@__mynews.title,#@__mynews.writer,
 #@__mynews.senddate,#@__mynews.typeid,
 #@__arctype.typename
 FROM #@__mynews
 LEFT JOIN #@__arctype ON #@__arctype.id=#@__mynews.typeid
 ORDER BY aid DESC";
$dlist = new DataListCP();
$dlist->SetTemplet(DEDEADMIN."/templets/mynews_main.htm");
$dlist->SetSource($sql);
$dlist->display();