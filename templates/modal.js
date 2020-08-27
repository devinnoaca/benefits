module.exports = function (jsonfile) {
  var modal = '';

  jsonfile.forEach(i => {
    if(i.ready == true) {
      var joinText = '';
      i.text.forEach(j => {
        joinText += j;
        joinText += '<br>';
      })
      var makeButton = `<div class="modal-body">`;
      i.button.forEach(j => {
        makeButton += `<button class="btn btn-dark" data-dismiss="modal" type="button" onclick="window.open('${j.link}')">${j.name}</button>`
      })
      makeButton += "</div>"

      modal += `
        <div class="portfolio-modal modal fade" id="portfolio-${i.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <!-- Project Details Go Here-->
                      <h2 class="text-uppercase">${i.title}</h2>
                      <p class="item-intro text-muted">${i.abstract}</p>
                      <p class="text-break" style="text-align: left;">${joinText}${makeButton}</p>
                    </div>
                  </div>
                  <img class="img-fluid d-block mx-auto" src="assets/img/partners/${i.id}-portfolio.png" alt="" />
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
      `;
    }
  });

  return modal;
}