module.exports = {
  program_info: function (jsonfile) {
    var program_grid = '';

    jsonfile.forEach(i => {
      program_grid += `
        <div class="col-md-4">
          <span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-primary"></i><i
            class="fas fa-${i.icon} fa-stack-1x fa-inverse"></i></span>
          <h4 class="my-3">${i.title}</h4>
          <p class="text-muted text-break mb-5">${i.text}</p>
        </div>
      `;
    });
    
    return program_grid;
  },
  
  partner_info: function (jsonfile) {
    var partner_grid = '';

    jsonfile.forEach(i => {
      if(i.ready == true) {
        partner_grid += `
          <div class="col-lg-4 col-sm-6 mb-5">
            <div class="partner-item">
              <a class="partner-link" data-toggle="modal" id="${i.id}" href="#portfolio-${i.id}">
                <div class="partner-hover">
                  <div class="partner-hover-content"><i class="fas fa-plus fa-2x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/partners/${i.id}.png" alt="" />
              </a>
              <div class="partner-caption">
                <div class="partner-caption-heading" style="font-weight: bold">${i.title}</div>
                <div class="partner-caption-subheading text-muted" style="font-size: 15px">${i.abstract}</div>
              </div>
            </div>
          </div>
        `;
      } else {
        partner_grid += `
          <div class="col-lg-4 col-sm-6 mb-5">
            <div class="partner-item">
              <a class="partner-link" data-toggle="modal" id="${i.id}">
                <div class="partner-hover">
                  <div class="partner-hover-content"><i class="fas fa-plus fa-2x"></i></div>
                </div>
                <img class="img-fluid" style="opacity: 0.2" src="assets/img/partners/${i.id}.png" alt="" />
              </a>
              <div class="partner-caption">
                <div class="partner-caption-heading" style="font-weight: bold">${i.title}</div>
                <div class="partner-caption-subheading text-muted" style="font-size: 15px">${i.abstract}</div>
              </div>
            </div>
          </div>
        `;
      }
    });

    return partner_grid;
  },

  modal: function (jsonfile) {
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
}