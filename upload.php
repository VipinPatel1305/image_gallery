<form method='post' action='' enctype='multipart/form-data'>
 <input type="file" name="file[]" id="file" multiple>

 <input type='submit' name='submit' value='Upload'>
</form>

<?php 
if(isset($_POST['submit'])){
 
 // Count total files
 $countfiles = count($_FILES['file']['name']);

 // Looping all files
 for($i=0;$i<$countfiles;$i++){
  $filename = $_FILES['file']['name'][$i];
 
  $dom = new DOMDocument;
  $dom->loadHTML($html);
  // Upload file
  if(move_uploaded_file($_FILES['file']['tmp_name'][$i],'data/'.$filename))
  {
  	echo "<p> uploaded:  $filename</p>";
  }
  else
  {
  	echo "failed to upload: $filename";
  }
 
 }
} 
?>
