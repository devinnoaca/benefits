module.exports = function (navigation, masthead, program, partner, use, contact, footer, modal) {
  return `
    <!DOCTYPE html>
    <html lang="ko-KR">
    
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrinkf-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>42 SEOUL BENEFITS</title>
      <link rel="icon" type="image/x-icon" href="assets/img/42.ico" />
      <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
      <!-- Google fonts-->
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet"
        type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
      <!-- Core theme CSS (includes Bootstrap)-->
      <link href="css/styles.css" rel="stylesheet" />
      
    </head>
    
    <body id="page-top">
      ${navigation}
      ${masthead}

      ${program}
      ${partner}
      ${use}
      ${contact}

      ${footer}
      ${modal}
    
      <!-- Bootstrap core JS-->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
      <!-- Third party plugin JS-->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      <!-- Contact form JS-->
      <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>
      <!-- Core theme JS-->
      <script src="javascripts/scripts.js"></script>
    </body>
    </html>
  `;
}
