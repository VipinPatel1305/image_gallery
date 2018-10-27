<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$dir = "./data/";

$imgList=array();
// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){

      if ($file != "." && $file != ".." && $file !=".DS_Store")
      {		
        array_push($imgList,$file);
  	  }
    }
    closedir($dh);
  }
}

echo json_encode($imgList);
?>