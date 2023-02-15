<?php
function get_status($ip) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://$ip");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode >= 200 && $httpCode < 300) {
        return array('status' => 'online', 'code' => $httpCode);
    } else {
        return array('status' => 'offline', 'code' => $httpCode);
    }
}
?>
