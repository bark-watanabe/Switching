<!DOCTYPE html>
<html lang="ja">
<head>
<title></title>
<link rel="shortcut icon" href="favicon.ico">
<meta charset="utf-8">
<meta name="keyword" content="">
<meta name="description" content="">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<style>
	#pc_header,
	#pc_footer {background: red;}
	#sp_header,
	#sp_footer {background: blue;}
</style>
</head>
<body>
	<div id="wrap">
		<div id="header">
			<div id="pc_header">PC header</div>
			<div id="sp_header">SP header</div>
		</div>
		<div id="contents">
			<div id="main">
				<div id="pc_main">PC main</div>
				<div id="pc_main2">PC main2</div>
				<div id="sp_main">SP main</div>
			</div>
			<div id="sub">
				<div id="pc_sub">PC sub</div>
				<div id="pc_sub2">PC sub2</div>
				<div id="pc_sub3">PC sub3</div>
				<div id="sp_sub">SP sub</div>
			</div>
		</div>
		<div id="footer">
			<div id="pc_footer">PC footer</div>
			<div id="sp_footer">SP footer</div>
		</div>
	</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="jquery.switching.min.js"></script>
<script>
	$('#pc_header, #pc_footer').switching();

	$('#pc_main').switching({
		'target': '#sp_main',
		'addSource': '#pc_main2',
	});

	$('#pc_sub').switching({
		'target': '#sp_sub',
		'addSource': ['#pc_sub2','#pc_sub3'],
	});
</script>
</body>
</html>