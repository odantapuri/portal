<?php
define("APP_NAME", "Locals");
define("APP_PATH", getcwd());
define("APP_DIR", __DIR__);
define("HTTP_HOST", "");//$_SERVER['HTTP_HOST'] == 'localhost:8080';$_SERVER['SERVER_NAME'] == 'localhost';
define("DOMAIN_NAME", "odantapuri.com");
define("F_D",0);
$url = explode('/', $_SERVER['REQUEST_URI']);
include('CONFIG/settings.php');
include('DIZ/engine.php');

// echo APP_DIR,$inc;
 ?>
