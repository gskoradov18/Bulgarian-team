<?php
header('Content-Type: application/json');
define('HOSTNAME','localhost');
define('DB_USERNAME','root');
define('DB_PASSWORD','');
define('DB_NAME', 'bulgarian_team');
$con = mysqli_connect(HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_NAME) or die ("error");
if(mysqli_connect_errno($con))  echo "Failed to connect MySQL: " .mysqli_connect_error();
function getDataForDB(){
    $url="http://blynk-cloud.com/UWTOAploXLDZ7e8fqY81foQMNUdhkJlt/get/V5";
    $data=file_get_contents($url);
    $data=json_decode($data,true);
    return $data;
}
function pushDataToDB($con){
    $data=getDataForDB();
    $data=explode(',', $data[0]);
    $time=time();
    $dataArr=[];
    $vars = [0=>'direction', 1=>'speed',2=>'rain',4=>'temperature',5=>'humidity', 6=>'pressure'];
    foreach($vars as $key=>$var) {
        $$var = $data[$key];
    }
    foreach($vars as $var) {
        $sql="INSERT INTO {$var}({$var}) VALUES('${$var}')";
        if(!mysqli_query($con, $sql)){
            die('Error : '.mysqli_error($con));
        }
    }

}
for ($i=0;$i<6;$i++){
    pushDataToDB($con);
    sleep(5);
}
