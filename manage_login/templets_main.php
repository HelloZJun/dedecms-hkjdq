<?php
/**
 * ģ���ļ�����
 *
 * @version        $Id: templets_main.php 1 23:07 2010��7��20��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require_once(dirname(__FILE__).'/config.php');
CheckPurview('plus_�ļ�������');

if(empty($acdir)) $acdir = $cfg_df_style;
$templetdir = $cfg_basedir.$cfg_templets_dir;
$templetdird = $templetdir.'/'.$acdir;
$templeturld = $cfg_templeturl.'/'.$acdir;

if(preg_match("#\.#", $acdir))
{
    ShowMsg('Not Allow dir '.$acdir.'!', '-1');
    exit();
}

//��ȡĬ���ļ�˵����Ϣ
function GetInfoArray($filename)
{
    $arrs = array();
    $dlist = file($filename);
    foreach($dlist as $d)
    {
        $d = trim($d);
        if($d!='')
        {
            list($dname, $info) = explode(',', $d);
            $arrs[$dname] = $info;
        }
    }
    return $arrs;
}

$dirlists  = GetInfoArray($templetdir.'/templet-dirlist.inc');
$filelists = GetInfoArray($templetdir.'/templet-filelist.inc');
$pluslists = GetInfoArray($templetdir.'/templet-pluslist.inc');
$fileinfos = ($acdir=='plus' ? $pluslists : $filelists);

include DedeInclude('templets/templets_default.htm');