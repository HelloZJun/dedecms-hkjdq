/**
 * 
 * @version        $Id: diy.js 1 22:28 2010年7月20日Z tianya $
 * @package        炫乐科技.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.炫乐科技.com/usersguide/license.html
 * @link           http://www.炫乐科技.com
 */
 
 
function showHide2(objname){
    var obj = $Obj(objname);
    if(obj.style.display != 'block'){ obj.style.display = 'block' }
    else{  obj.style.display = 'none'; }
}