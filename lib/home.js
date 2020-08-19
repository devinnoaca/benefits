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
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">사용 방법</a></li>
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
            <h2 class="section-heading text-uppercase">사용 방법</h2>
            <h3 class="section-subheading text-muted">42 SEOUL 베네핏 프로그램 사용 방법 안내드립니다.</h3>
          </div>
          <ul class="timeline">
            <li>
              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>#01.</h4>
                  <h4 class="subheading">원하는 베네핏 Pick!</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted text-break" style="line-height:inherit;">다양한 베네핏 중 본인이 원하는 베네핏을 골라 상세 내용을 꼼꼼히 확인합니다.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>#02.</h4>
                  <h4 class="subheading"> 선인증 & 후사용!</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted text-break" style="line-height:inherit;"> 모든 베네핏은 42 SEOUL인임을 인증한 뒤 실사용이 가능합니다. 인증 과정이나 사용에 관한 문의는 해당 파트너사의 담당자에 연락주시기 바랍니다.</p>
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
                      <p class="item-intro text-muted">본 방침은 2020년 09월 01일부터 시행됩니다.</p>
                      <p class="text-break" style="text-align: left;">
                        이노베이션 아카데미(이하 '재단')은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.<br>
                        <br><br>
                        1. 개인정보의 처리 목적 및 항목<br>
                        재단은 수집한 개인정보를 다음의 목적을 위해 처리합니다.<br>
                        <br>
						<처리 목적><br>
                        - 이노베이션 아카데미 베네핏 사이트 및 서비스 이용을 위한 접근 권한 부여<br>
                        - 이노베이션 아카데미 베네핏 사이트 및 서비스의 안전, 무단사용의 방지<br>
                        - 이노베이션 아카데미 교육생의 경우, 결제와 관련된 정보<br>
                        - 이노베이션 아카데미 베네핏의 오프라인/온라인 서비스 이용 및 운영<br>
                        - 사용자의 요청 사항에 대한 서비스 제공<br>
                        - 서비스 운영 및 이용 관련 정보 등의 안내<br>
                        - 교육 목적에 부합하는 파트너사의 마케팅 목적<br>
						<br>
						<수집 항목><br>
						- 베네핏 이용 주체, 결제와 관련된 정보, 베네핏 프로그램 이용에 관한 정보 <br>
						- 성명, 소속, 휴대전화 번호, 베네핏 선택을 위한 필수 조건 사항 <br>
						- 베네핏 프로그램 이용과 관련된 내용을 통지하기 위한 E-mail 정보 <br>
                        <br>
						<수집 방법><br>
						- 베네핏 사이트 접속, 상세페이지 내 바로가기 등 경로를 통해 제출하는 정보 및 고객센터를 통한 전화 및 온라인 상담<br>
						<br>
                        사이트 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.<br>
                        - IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량정보<br>
                        <br>
                        재단이 처리하는 이용자 정보의 목적과 항목이 변경될 경우에는 관련법령에 따라 사전에 동의를 요청합니다.<br>
						재단은 각종 행사 및 프로그램 신청양식, 이벤트 응모, 문의응대, 전화, 이메일로 개인정보를 추가적으로 수집할 수 있습니다. 이러한 경우, 관련 법령에 따라 별도의 수집 동의서 등으로 사용자의 동의를 요청합니다.<br>
						<br><br>
						2. 개인정보의 처리 및 보유기간 <br>
						재단은 이용자로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다. 재단은 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 아래 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 동의 내용 또는 법령의 규정의 내용 및 목적에 맞게 개인정보를 안전하게 보관합니다. <br>
						<br>
						- 사이트 방문 기록  : 3개월 <br>
						- 제휴 마케팅 관련 정보 : 정보 제출일로부터 1년 <br>
						<br><br>
						3. 개인정보의 제3자 제공에 관한 사항 (해당되는 경우에만 정함) <br>
						재단은 개인정보 제3자 제공이 필요할 경우에는 관련법령에 따라 사전에 동의를 요청합니다. 이용자의 요청시 재단은 즉각적으로 내부 절차에 따라 제공받는 자, 제공 목적, 항목 등 필요한 해당사항을 제공하겠습니다. <br>
						<br>
						- 재단과 제휴 계약을 체결한 임직원 및 교육생에 대하여 보다 질 높은 서비스를 제공하기 위하여 아래와 같은 정보를 제공하고 있습니다. <br><br>
						[제공 정보의 이용 목적 - 제휴 마케팅 및 베네핏 제공] <br>
						- 제공 대상 : 베네핏 파트너사 <br>
						- 제공 정보 : 이름, 이메일, 휴대전화 번호, 생년월일 <br>
						- 보유 및 이용 기간 : 제휴 계약 종료시까지 <br><br>
						[예외 사항] <br>
						- 이용자들이 사전에 동의한 경우 <br>
						- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사 기관의 요구가 있는 경우 <br>
						- 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 <br>
						- 이용 통계 작성, 학술연구, 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 <br>
						<br>
						이용자는 언제든지 재단이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 할 수 있습니다. 재단으로부터 개인정보를 제공받은 제 3자는 개인정보를 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다. 
						<br><br>
						4. 개인정보처리 위탁 <br>
						재단은 프로그램 및 재단 운영에 반드시 필요한 일부 업무에 대한 개인정보 처리를 사전 동의 후 외부 전문업체에 위탁 할 수 있습니다. 이용자의 요청 시 재단은 즉각적으로 내부 절차에 따라 제공받는 자, 제공 목적, 항목 등 필요한 해당사항을 제공하겠습니다. (요청 연락처 : qna@innovationacademy.kr) <br>
						재단은 위탁계약 체결 시 관련법령에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적, 관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리 및 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
						<br><br>
						5. 이용자의 권리와 의무 및 그 행사방법 <br>
						이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다. <br>
						- 이용자 및 법정대리인은 이용자 본인 혹은 당해 만 14세 미만자의 개인정보 관련하여, 다음과 같은 권리를 행사할 수 있습니다. <br>
						1) 이용자는 개인정보처리담당부서에 서면, 전자우편, 모사전송(FAX) 등을 통하여 개인정보에 대한 열람, 정정, 처리의 정지 및 삭제를 요구 할 수 있습니다. <br>
						- 이용자 권리 행사(열람, 정정, 처리정지, 삭제)는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출해야 합니다. <br>
						- 재단은 개인정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다. <br>
						- 이용자 및 법정대리인이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제3자에게 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하겠습니다. <br>
						- 이용자는 개인정보주체로서 다음과 같은 의무를 가집니다. <br>
						1) 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다. <br>
						2) 이용자는 자신의 개인정보에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다. <br>
						3) 타인의 개인정보를 도용하여 서비스 이용 시 자격 상실과 함께 관계법령에 의거하여 처벌될 수 있습니다. <br>
						<br>
						6. 개인정보의 파기 <br>
						재단은 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차 및 방법은 다음과 같습니다. <br>
						- 파기절차 : 이용자가 입력한 정보는 목적 달성 후 즉시 파기됩니다. <br>
						- 파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이에 출력된 개인정보는 파쇄기를 통하여 파기합니다. <br>
						<br>
						7. 개인정보 자동 수집 장치의 설치와 운영 및 거부에 관한 사항 <br>
						재단은 이용자에게 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자 PC 컴퓨터의 하드디스크에 저장되기도 합니다. <br>
						- 쿠키의 사용목적: 이용자에게 최적화된 정보 제공을 위해 사용됩니다. <br>
						1) Internet Explorer의 경우 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정 <br>
						2) Microsoft Edge의 경우 : 웹브라우저 상단 메뉴 > 설정 > 고급 설정 보기 > 쿠키 메뉴의 옵션 설정 <br>
						3) Chrome의 경우 : 웹브라우저 상단 메뉴 > 설정 > 고급 > 콘텐츠 설정 > 쿠키 메뉴의 옵션 설정 <br>
						- 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다. <br>
						<br>
						8. 개인정보보호책임자 및 담당부서 안내 <br>
						재단은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해 구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다. <br>
						<br>
						[개인정보보호 책임자] <br>
						- 성명 : 이민석 <br>
						- 직책 : 학장 <br><br>
						[개인정보보호 책임 부서] <br>
						이용자는 재단 서비스를 이용하면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보보호책임자 및 담당부서로 문의하실 수 있습니다. 재단은 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다. <br>
						- 부서명 : 교육기획운영팀 <br>
						- 연락처 : contact@innovationacademy.kr <br>
						<br>
						9. 개인정보의 안전성 확보 조치 <br>
						재단은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다. <br>
						- 개인정보 취급 직원의 최소화 및 교육<br>
						- 내부관리계획의 수립 및 시행<br>
						- 해킹 등에 대비한 기술적 대책<br>
						- 개인정보에 대한 접근 제한<br>
						<br>
						10. 개인정보처리방침 변경에 관한 사항 <br>
						이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 홈페이지 공지사항을 통하여 고지할 것입니다. <br>
						
                        <br>
                      </p>
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
