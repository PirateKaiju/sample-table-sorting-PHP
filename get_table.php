<?php

//Just for examples

require_once "Database.php";

$db1 = new Database();

header("Content-type: application/json");

echo json_encode($db1->getAllItens());


?>