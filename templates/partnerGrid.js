module.exports = function (jsonfile) {
  var partner_grid = '';

  jsonfile.forEach(i => {
    if(i.ready == true) {
      partner_grid += `
        <div class="col-lg-4 col-sm-6 mb-5">
          <div class="partner-item">
            <!--a class="partner-link" data-toggle="modal" id="${i.id}" href="#portfolio-${i.id}"-->
            <a class="partner-link" data-toggle="modal" id="${i.id}" >
              <div class="partner-hover">
                <div class="partner-hover-content"><i class="fas fa-plus fa-2x"></i></div>
              </div>
              <div class="partner-thumbnail">
                <img class="img-fluid" src="assets/img/partners/${i.id}.png" alt="" />
              </div>
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
}
