<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//print_r($_POST);

$oN=($_POST["oldName"]);
//echo $r;

$nN=($_POST["newName"]);

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
    //Build Query
    $query = "UPDATE user SET name='" . $nN . "' WHERE name='" . $oN . "'";
    //$result = mysql_query("SELECT * FROM user WHERE id=" . $q, $connection);
    mysql_query($query, $connection);


    //4.  Use returned data

        echo $nN;

        mysql_close($connection);


//echo "Hello World!"

?>
