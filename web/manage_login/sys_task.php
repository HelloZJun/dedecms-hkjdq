<?php
/**
 * 系统任务
 *
 * @version        $Id: sys_task.php 1 23:07 2010年7月20日Z tianya $
 * @package        炫乐科技.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.炫乐科技.com/usersguide/license.html
 * @link           http://www.炫乐科技.com
 */
require_once(dirname(__FILE__)."/config.php");
CheckPurview('sys_Task');
if(empty($dopost)) $dopost = '';

//删除
if($dopost=='del')
{
    $dsql->ExecuteNoneQuery("DELETE FROM `#@__sys_task` WHERE id='$id' ");
    ShowMsg("成功删除一个任务！", "sys_task.php");
    exit();
}
include DedeInclude('templets/sys_task.htm');