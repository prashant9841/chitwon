<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> Axle Backend </title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
    <link href="/css/backend.css" media="screen, projection" rel="stylesheet" type="text/css" />

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
<div id="backend">
    {{--<div class="loading">
        <h1>Loading</h1>
    </div>--}}
    <div class="side-nav">
        <div class="logo-div">
            <img src="frontend/images/logo.png" alt="">
        </div>
        <div class="navs">
            {{--<menu-bar></menu-bar>--}}
        </div>
    </div>

    @yield('content')


</div>

<script src="/js/backend.js" async defer></script>
</body>
</html>
