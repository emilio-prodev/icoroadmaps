<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
	<!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('', 'ICO Roadmaps') }}</title>

	<meta charset="utf-8" />

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content="ICO, Roadmaps, ICO Roadmaps" />
	<meta name="description" content="" />

	<link rel="icon" href="../img/icon.png" type="image/gif" sizes="16x16">

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	<link rel="stylesheet" href="css/animate.css" />
	<link rel="stylesheet" href="css/bootstrap-social-gh-pages/bootstrap-social.css" />
	<link rel="stylesheet" href="css/v-classes.css" />
	<link rel="stylesheet" href="css/app.css" />
	<link rel="stylesheet" href="css/under-construction.css" />
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://use.fontawesome.com/b4b4b6cb36.js"></script>
	<script src="https://unpkg.com/vue@2.5.8/dist/vue.js"></script>
	<script src="https://rawgit.com/cristijora/vue-tabs/master/dist/vue-tabs.js"></script>
	<script src="https://unpkg.com/vuebar"></script>

	<script>
        window.Laravel = { csrfToken: '{{ csrf_token() }}' }
    </script>
</head>
<body>


@include('layouts.mainScripts')


<main id="v-main" class="main container-fluid"> <!-- Main Container -->

	@include('layouts.header')

	@yield('content')

	@include('layouts.footer')

</main> <!-- END Main Container -->


@include('layouts.scripts')

</body>
</html>