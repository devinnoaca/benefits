module.exports = function(program_info) {
  return `
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
  `
}