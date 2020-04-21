<?php //var_dump($url);echo "<br>FD=",F_D,"<br>lnk=",$lnk,"<br>"; //phpinfo();
$lnk2 = explode('?', $lnk);

include("_header.php");
 if($lnk=="") include("_home.php");
   elseif(file_exists(__DIR__."/".$lnk.".php"))  include($lnk.".php");
   elseif(isset($lnk2[1]) && file_exists(__DIR__."/".$lnk2[0].".php") ) include($lnk2[0].".php");
   else include("_404.php");
include("_footer.php");

$ok = isset($_GET['ok']);

//Insert this code where you wanted to show the msg
if($ok)  {
     echo '<div class="alert alert-success" role="alert">
             Password has been updated and the user needs to login again
           </div>';
}

?>
