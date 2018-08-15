<?php
    header('Content-type:application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: http://localhost:3000");

    $conn = new mysqli("localhost", "root", "", "techwizzle");
    $result = $conn->query("SELECT * FROM CARDS");
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    $myJSON = json_encode($outp);

    echo $myJSON;
