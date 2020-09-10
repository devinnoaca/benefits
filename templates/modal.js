module.exports = function (jsonfile) {
  var modal = '';

  jsonfile.forEach(i => {
    if(i.ready == true) {
      var joinText = '';
      i.text.forEach(j => {
        joinText += `${j + '<br>'}`;
      })

      let howText = '';
      if (i.how.length > 0) {
        howText += `<div class="text-break" style="text-align: left"><h4 class="text-uppercase">신청 방법</h4>`;
        i.how.forEach(h => {
          howText += `${h + '<br>'}`;
        })
        howText += '</div>';
      }

      var makeButton = `<div class="modal-button">`;
      i.button.forEach(j => {
        makeButton += `<button class="col-sm-12 col-md-8 col-lg-5 col-xl-5 btn btn-dark" data-dismiss="modal" type="button" onclick="window.open('${j.link}')">${j.name}</button>`;
      })
      makeButton += "</div>";

      let image = `<img class="img-fluid d-block mx-auto modal-${i.id}" src="assets/img/partners/${i.id}-portfolio.png" usemap="#${i.id}" alt="${i.id}" /><map name="${i.id}" id="${i.id}">`;
      i.img.forEach(p => {
        image += `<area shape="rect" coords="${p[0]}, ${p[1]}, ${p[2]}, ${p[3]}" href="${p[4]}">`;
      })
      image += '</map>';

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
                      <p class="text-break" style="text-align: left;">${joinText}</p>
                      ${howText}
                    </div>
                  </div>
                  ${makeButton}
                  ${image}
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