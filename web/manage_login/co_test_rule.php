<?php
/**
 * �ɼ��������
 *
 * @version        $Id: co_test_rule.php 1 17:13 2010��7��12��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require_once(dirname(__FILE__)."/config.php");
require_once(DEDEINC."/dedecollection.class.php");
$nid = intval($nid);
$co = new DedeCollection();
$co->LoadNote($nid);
include DedeInclude('templets/co_test_rule.htm');
exit();