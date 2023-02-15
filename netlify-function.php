<?php
require_once('status.php');

header('Content-Type: application/json');

if (!isset($_GET['ip'])) {
    echo json_encode(array('error' => 'No IP address provided'));
    exit;
}

$ip = $_GET['ip'];
$status = get_status($ip);

echo json_encode($status);
?>
