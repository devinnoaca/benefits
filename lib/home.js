module.exports = function (program_info, partner_info, modal) {
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
      <!-- Navigation-->
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="assets/img/logos/42_SEOUL_BENEFITS_optimised.svg" alt="" /></a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">Menu<i class="fas fa-bars ml-1"></i></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#program">프로그램 소개</a></li>
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#partner">파트너 소개</a></li>
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">오픈 일정</a></li>
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">제안</a></li>
            </ul>
          </div>
        </div>
      </nav>
    
      <!-- Masthead-->
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">Welcome to our 42 SEOUL world!</div>
          <div class="masthead-heading text-uppercase">42 SEOUL BENEFITs</div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#partner">View Contents</a>
        </div>
      </header>
    
      <!-- program -->
      <section class="page-section" id="program">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">프로그램 소개</h2>
            <h3 class="section-subheading text-muted">42 서울인을 위한 베네핏 프로그램을 소개합니다.</h3>
          </div>
          <div class="row text-center">
            ${program_info}
          </div>
        </div>
      </section>
    
      <!-- partner Grid -->
      <section class="page-section bg-light" id="partner">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">파트너 소개</h2>
            <h3 class="section-subheading text-muted">42 서울인을 위한 베네핏 파트너를 소개합니다.</h3>
          </div>
          <div class="row">
            ${partner_info}
          </div>
        </div>
      </section>
    
      <!-- About-->
      <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">오픈 일정</h2>
            <h3 class="section-subheading text-muted">42 SEOUL 베네핏 프로그램 오픈 일정입니다.</h3>
          </div>
          <ul class="timeline">
            <li>
              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>July 2020</h4>
                  <h4 class="subheading">1차 오픈</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted text-break" style="line-height:inherit;">다양한 카테고리의 베네핏으로 프로그램을 구성하기 위해 여러 파트너사와
                    협의를 마쳤습니다.<br>42 서울인들에게 실질적으로 도움이 되는 프로그램으로 상시 업데이트해 나갈 예정입니다.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>2021</h4>
                  <h4 class="subheading">일정 미정</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted text-break" style="line-height:inherit;"> 2021년은 2020년도 프로그램 구성을 돌아보고 조금 더 나은
                    방식과 콘텐츠로 오픈할 예정입니다.<br>함께 만들어 가요!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part<br />Of Our<br />Program!</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    
      <!-- Contact-->
      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">자유 제안</h2>
            <h3 class="section-subheading text-muted">42 SEOUL 베네핏을 위한 제안을 자유롭게 해 주세요</h3>
          </div>

          <form class="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
          action="https://script.google.com/macros/s/AKfycbxgYRtRvoC7acWUDTUdy6YK7MrPbjxEqCR2ltWxQg/exec" id="contactForm" name="sentMessage" novalidate="novalidate">
          <div class="form-elements">
            <div class="row align-items-stretch mb-5">
              <div class="col-md-6">
                <fieldset class="pure-group form-group">
                  <input class="form-control" id="name" name="name" type="text" placeholder="Your Name *"
                    data-validation-required-message="Please enter your name." />
                    <p class="help-block text-danger"></p>
                </fieldset>
                <fieldset class="pure-group form-group">
                  <input class="form-control" id="email" name="email" type="email" value="" placeholder="Your Email *" data-validation-required-message="Please enter your email address." />
                  <p class="help-block text-danger"></p>
                </fieldset>
                <fieldset class="pure-group form-group mb-md-0">
                  <input class="form-control" id="phone" name="tel" type="tel" placeholder="Your Phone *"
                    data-validation-required-message="Please enter your phone number." />
                  <p class="help-block text-danger"></p>
                </fieldset>
              </div>
              <div class="col-md-6">
                <div class="pure-group form-group form-group-textarea mb-md-0">
                  <textarea class="form-control" id="message" name="message" placeholder="Your Message *"
                    data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div id="success"></div>
              <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton">Send
                Message</button>
            </div>
          </div>
            <div style="display: none; color: #fff;" class="thankyou_message">
              <br><h4 class="text-center">제안해주셔서 감사합니다!</h4>
            </div>
          </form>
        </div>
      </section>
    
      <!-- Footer-->
      <footer class="footer py-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 text-lg-left">Copyright © INNOVATION ACADEMY.KR</div>
            <div class="col-lg-4 my-3 my-lg-0">
              <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/inno.aca/">
                <i class="fab fa-instagram"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!">
                <i class="fab fa-facebook-f"></i></a>
            </div>
            <div class="col-lg-4 text-lg-right"><a class="mr-3" data-toggle="modal" href="#privacy_policy">Privacy Policy</a></div>
          </div>
        </div>
      </footer>

      <div class="portfolio-modal modal fade" id="privacy_policy" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <!-- Project Details Go Here-->
                      <h2 class="text-uppercase">개인정보취급방침</h2>
                      <p class="item-intro text-muted">abstract</p>
                      <p class="text-break" style="text-align: left;">text</p>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fas fa-undo mr-1"></i>return
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      ${modal}
    
      <!-- Bootstrap core JS-->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
      <!-- Third party plugin JS-->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      <!-- Contact form JS-->
      <script data-cfasync="false" src="form-submission-handler.js"></script>
      <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>
      <!-- Core theme JS-->
      <script src="javascripts/scripts.js"></script>
    
    </body>
    </html>
  `;
}
