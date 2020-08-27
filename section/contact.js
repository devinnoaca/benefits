module.exports = function() {
  return `
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
  `
}