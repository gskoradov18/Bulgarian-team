<?php
header('Content-Type: application/json');
define('HOSTNAME','localhost');
define('DB_USERNAME','root');
define('DB_PASSWORD','');
define('DB_NAME', 'bulgarian_team');
$con = mysqli_connect(HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_NAME) or die ("error");
// Check connection
if(mysqli_connect_errno($con))  echo "Failed to connect MySQL: " .mysqli_connect_error();
$dataForJs=array('direction'=>array(),'humidity'=>array(),'rain'=>array(),'speed'=>array(),'temperature'=>array(),'pressure'=>array(),'timestamp'=>array());
$counter=0;
$vars = [0=>'direction', 1=>'speed',2=>'rain',4=>'temperature',5=>'humidity', 6=>'pressure'];
for ($i=0;$i<1;$i++){

    foreach($vars as $key=>$var) {
        $query="SELECT * FROM $var LIMIT 6";
        if ($result = $con->query($query)){
            while ($row = $result->fetch_assoc()) {
                $dataForJs[$var]["value"][] = $row[$var];
                $dataForJs[$var]["timestamp"][] = $row['timestamp'];
                $counter++;
            }}

        $counter=0;
    }
    mysqli_free_result($result);
}
echo json_encode($dataForJs);
//        $query="SELECT * FROM humidity";
//        if ($result = $con->query($query)){
//            while ($row = $result->fetch_assoc()) {
//                if ($counter==6){
//                    break;
//                }
//                $dataForJs['humidity'][$counter]= $row['humidity'];
//            }}
//            $query="SELECT * FROM speed";
//            if ($result = $con->query($query)){
//                while ($row = $result->fetch_assoc()) {
//                    if ($counter==6){
//                        break;
//                    }
//                    $dataForJs['speed'][$counter]= $row['speed'];
//                }}
//                $query="SELECT * FROM pressure";
//                if ($result = $con->query($query)){
//                    while ($row = $result->fetch_assoc()) {
//                        if ($counter==6){
//                            break;
//                        }
//                        $dataForJs['pressure'][$counter]= $row['pressure'];
//                    }}
//                    $query="SELECT * FROM rain";
//                if ($result = $con->query($query)){
//                    while ($row = $result->fetch_assoc()) {
//                        if ($counter==6){
//                            break;
//                        }
//                        $dataForJs['rain'][$counter]= $row['rain'];
//                    }}
//                $query="SELECT * FROM temperature LIMIT 6";
//                if ($result = $con->query($query)){
//                    while ($row = $result->fetch_assoc()) {
//                        if ($counter==6){
//                            break;
//                        }
//                        $dataForJs['temperature'][]= $row['temperature'];
//                        $dataForJs['timestamp'][]= $row['timestamp'];
//                    }}
//                $counter++;
//        /* free result set */
//        sleep(5);

?>



