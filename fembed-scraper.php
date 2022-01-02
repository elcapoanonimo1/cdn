<?php

$url = 'https://www.fembed.com/api/source/{id-video}';
$options = array(
    'http' => array(
        'header'  => "Content-type: application/json",
        'method'  => 'POST',
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }
 
print_r($result);

// Server de assets https://thumb.fvs.io/

// Server de redirectors https://fvs.io/ 
