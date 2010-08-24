<?php
$q=$_GET["q"];

    //1. Create a database connection
    $connection = mysql_connect("localhost", "root", "");
    if(!$connection) {
        die("Database connection failed: " . mysql_error());
    }

    //2.  Select a database to use
    $db_select = mysql_select_db("Testingdb1", $connection);
    if(!$db_select) {
        die("Database selection failed: " . mysql_error());
    }


    //3.  Perform databasee query
    $result = mysql_query("SELECT * FROM user WHERE id=" . $q, $connection);
    if(!$result) {
        die("Databasee query failed: " . mysql_error());
    }

    //4.  Use returned data
    while ($row = mysql_fetch_array($result)){
        echo $row[1];
        }

        mysql_close($connection);
?>
