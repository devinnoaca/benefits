module.exports = function (jsonfile) {
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
}