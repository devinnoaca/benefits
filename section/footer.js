module.exports = function(date, privacy_policy) {
  return `
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
                    <p class="item-intro text-muted">${date}</p>
                    <p class="text-break" style="text-align: left; white-space: pre-wrap;">
                      ${privacy_policy}
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
    </footer>
  `
}