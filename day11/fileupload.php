<!DOCTYPE html>
<html>
<head>
<title>A simple file upload form</title>
</head>
<body>
<form action="do_upload.php" enctype="multipart/form-data" method="POST">
<input type="hidden" name="MAX_FILE_SIZE" value="1048576" />
<p><label for="fileupload">File to Upload:</label>
<input type="file" id="fileupload" name="fileupload"/>
</p>
<button type="submit" name="submit" value="send">Upload File</button>
</form>
</body>
</html>
