<?php
<?php
$userdata  = new PDO('mysql:host=localhost; port=3306; dbname = ibilling', 'root', 'root');
$userdata->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
define('APP_URL', 'http://localhost/ibilling'); # Application URL.
#Please include http and do not use trailing slash after the url. For example use in this format- http://www.example.com Or http://www.example.com/finance
$_app_stage = 'Live'; # Change Live to Dev to enable Debug
