<?php
/**
 * ר���б�
 *
 * @version        $Id: content_s_list.php 1 14:31 2010��7��12��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require_once(dirname(__FILE__)."/config.php");
CheckPurview('spec_List');
$s_tmplets = "templets/content_s_list.htm";
$channelid = -1;
include(dirname(__FILE__)."/content_list.php");