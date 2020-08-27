module.exports = function(partner_info) {
  return `
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
  `
}