<?php
/**
 * ��������
 *
 * @version        $Id: erraddsave.php 1 19:09 2010��7��12��Z tianya $
 * @package        ���ֿƼ�.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.���ֿƼ�.com/usersguide/license.html
 * @link           http://www.���ֿƼ�.com
 */
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/datalistcp.class.php');
require_once(DEDEINC.'/common.func.php');

if(empty($dopost)) $dopost ='';
if(empty($fmdo)) $fmdo = '';

function username($mid)
{
    global $dsql;
    if(!isset($mid) || empty($mid))
    {
        return "�ο�";
        exit();
    }
    else
    {
        $sql = "SELECT uname FROM `#@__member` WHERE `mid` = '$mid'";
        $row = $dsql->GetOne($sql);
        return $row['uname'];
        exit();
    }
    exit();
}

function typename($me)
{
    switch ($me)
    {
        case $me == 1:
            return $me = "������";
            break;
        case $me == 2:
            return $me = "�������ò���";
            break;
        case $me == 3:
            return $me = "רҵ����д��������";
            break;
        case $me == 4:
            return $me = "��Ʒ��ͼƬ����";
            break;
        case $me == 5:
            return $me = "��ʵ����Լ����ݴ���";
            break;
        case $me == 6:
            return $me = "��ʵ����Լ����ݴ���";
            break;
        case $me == 7:
            return $me = "��������";
            break;
        default:
            return $me = "δ֪����";
            break;
    }
}

if($dopost == "delete")
{
    if($id=='')
    {
        ShowMsg("������Ч��","-1");
        exit();
    }
    
    
    if($fmdo=='yes')
    {
        $id = explode("`", $id);
        foreach ($id as $var)
        {
            $query = "DELETE FROM `#@__erradd` WHERE `id` = '$var'";
            $dsql->ExecuteNoneQuery($query);
        }
        ShowMsg("�ɹ�ɾ��ָ�����ĵ���","erraddsave.php");
        exit();
    }  
    else
    {
        require_once(DEDEINC."/oxwindow.class.php");
        $wintitle = "ɾ��";
        $wecome_info = "<a href='erraddsave.php'>�������</a>::ɾ������";
        $win = new OxWindow();
        $win->Init("erraddsave.php","js/blank.js","POST");
        $win->AddHidden("fmdo","yes");
        $win->AddHidden("dopost",$dopost);
        $win->AddHidden("id",$id);
        $win->AddTitle("��ȷʵҪɾ���� $id ����Щ������ʾ��");
        $winform = $win->GetWindow("ok");
        $win->Display();
        exit();
    }
    exit();
}

$sql = "SELECT * FROM `#@__erradd`";
$dlist = new DataListCP();
$dlist->SetTemplet(DEDEADMIN."/templets/erradd.htm");
$dlist->SetSource($sql);
$dlist->display();