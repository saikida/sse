<?php
header("Content-Type:text/event-stream;charset=utf-8");
header("Access-Control-Allow-Origin:httpp://127.0.0.1/nodejs/sse/");

echo "data:現在北京時間是:".date('Y-m-d H:i:s')."\n\n";



?>