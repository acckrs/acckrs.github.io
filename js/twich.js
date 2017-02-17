<!doctype>
<html lang="en">

<head>
    <title>TwichTV</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="http://acckrs.github.io/js/acckrs.js"></script>
    <script src="http://acckrs.github.io/js/twich.js"></script>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css' rel='stylesheet' type='text/css'>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Poiret+One&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="http://acckrs.github.io/stylesheets/acckrs.css" media="screen">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Aleksandar Krstic">
</head>

<body>
    <!-- NAVBAR
    ================================================== -->
    <div class="navbar-wrapper">
        <div class="container">
            <a id="start"></a>
            <nav class="navbar navbar-inverse navbar-fixed-top ">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                        <span id="tempC" class="navbar-brand navbar-font" data-nexttemp="f">°C</span>
                        <span id="weatherDesc" class="navbar-brand navbar-font"></span><img id="weatherIcon" class="navbar-brand navbar-font" />
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right ">
                            <li class="active navbar-font"><a href="http://acckrs.github.io/#start">Home</a></li>
                            <li><a class="navbar-font" href="http://acckrs.github.io/#about">About</a></li>
                            <li><a class="navbar-font" href="http://acckrs.github.io/#contact">Contact</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle navbar-font" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Portfolio <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-header">Present and Past</li>
                                    <li><a class="navbar-font" href="http://acckrs.github.io/pentribute.html">Pen tribute</a></li>
                                    <li><a class="navbar-font" href="http://codepen.io/acckrs/">Codepen.io/acckrs</a></li>
                                    <li><a class="navbar-font" href="http://acckrs.github.io/wikipedia_viewer/wikiViewer.html">Wikipedia viewer</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li class="dropdown-header">Future </li>
                                    <li><a class="navbar-font" href="#" data-toggle="tooltip" title="To be finished...">Challenge 4</a></li>
                                    <li><a class="navbar-font" href="#" data-toggle="tooltip" title="To be finished...">Challenge 5</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="container">
        <!-- header text -->
        <div class="row text-center">
            <div class="col-xs-12">
                <h1 style="font-family:'Poiret One', cursive"> Twich TV Viewer </h1>
                <h4 class="animated fadeInDown lead-text">v1.0</h4>
                <hr>
            </div>
        </div>
        <!-- Twich content -->
        <div class="col-xs-12">
            <div class="row" id="twichResult">
                <table item-width="70%" id="twichTable" class="table">
                    <thead>
                        <tr>
                            <th>Channel logo </th>
                            <th>Channel name</th>
                            <th>Channel link</th>
                            <th>Channel status</th>
                        </tr>
                    </thead>
                    <tbody id="twichTableBody">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div id="twichLink">
                    <a href="#"></a>
                </div>
            </div>
            <div id="footer_text">
                <hr>
            </div>
            <button id="testTwich" class="btn btn-primary">
                     Test Twich (check console)
                 </button>
            <button id="onlineTwich" class="btn btn-primary">
                     Online
                 </button>
            <button id="offlineTwich" class="btn btn-primary">
                     Offline
                 </button>
        </div>
        <!-- footer -->
        <div id="footer_text">
            <hr>
        </div>
        <div class="row" id="footer">
            <div class="col-xs-12 text-center my-footer">
                <p>&copy; Aleksandar Krstić</p>
            </div>
        </div>
    </div>
</body>

</html>