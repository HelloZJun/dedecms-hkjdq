<?php
/**
 * �����̨����
 *
 * @version        $Id: index_top.php 1 8:48 2010��7��13��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require(dirname(__FILE__)."/config.php");
if($cuserLogin->adminStyle=='���ֿƼ�')
{
    include DedeInclude('templets/index_top1.htm');
}
else
{
    include DedeInclude('templets/index_top2.htm');
}
