<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'CMS') }}</title>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
    <link rel="stylesheet" href="/frontend/stylesheets/font-awesome.css">
    <link rel="stylesheet" href="/frontend/stylesheets/themify-icons.css">
    <link rel="stylesheet" href="/frontend/stylesheets/animate.css">
    <link rel="stylesheet" href="/frontend/stylesheets/animateSlider.css">
    {{-- <link href="/frontend/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" /> --}}

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
    <div id="app">
        {{-- <div class="loading">
            <h1>Loading</h1>
        </div> --}}

        <header class="page-header">
            <div class="logo">
                <img src="frontend/images/logo.png" alt="">
            </div>
            <div class="top-nav">
              

                <div class="wrap clearfix">
                    
                    <contact-info></contact-info>   
                </div>
            </div>
            <div class="bottom-nav">
                <div class="wrap clearfix">
                    <div class="social-icons">
                        <social-icons></social-icons>   
                   </div>
                    <div class="site-menu">
                       <site-menu></site-menu>
                    </div>
                </div>
            </div>  
        </header>

        @yield('content')

        <footer class="page-footer">
            <div class="wrap">
                <div class="social-icons">
                    <social-icons></social-icons>               
                </div>
                <div class="contact-info">
                    <contact-info></contact-info>               
                </div>
                <div class="copyright">
                    <copyright></copyright>
                </div>
            </div>
        </footer>

        
    </div>

    <!-- Scripts -->
    
 <!--   <script src="/frontend/js/jquery.mixitup.js"></script>
 <script src="/frontend/js/pace.js"></script>
 <script src="/frontend/js/textillate.js"></script>
 <script src="/frontend/js/animateSlider.js"></script>
 <script src="/frontend/js/modernizr.js"></script>  -->
{{--    <script src="/frontend/js/new.js" async defer></script>
   <script src="/frontend/js/custom.js" async defer></script> --> --}}

    <script src="/js/app.js"></script> 
   {{-- <script src="/frontend/js/components.js" async defer></script> --}}
</body>
</html>
 