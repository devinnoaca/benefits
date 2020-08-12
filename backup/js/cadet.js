var cadet = true;

$(document).ready(function () {
  if (cadet == true) {
    $('#likelion').click(function () {
      $('#likelion-html').load('./portfolio/likelion.html');
    });
    $('#codeit').click(function () {
      $('#codeit-html').load('./portfolio/codeit.html');
    });
    $('#collabee').click(function () {
      $('#collabee-html').load('./portfolio/collabee.html');
    });
    $('#comcom').click(function () {
      $('#comcom-html').load('./portfolio/comcom.html');
    });
    $('#goorm').click(function () {
      $('#goorm-html').load('./portfolio/goorm.html');
    });
    $('#jandi').click(function () {
      $('#jandi-html').load('./portfolio/jandi.html');
    });
    $('#junohair').click(function () {
      $('#junohair-html').load('./portfolio/junohair.html');
    });
    $('#kensington').click(function () {
      $('#kensington-html').load('./portfolio/kensington.html');
    });
    $('#lenovo').click(function () {
      $('#lenovo-html').load('./portfolio/lenovo.html');
    });
    $('#medical').click(function () {
      $('#medical-html').load('./portfolio/medical.html');
    });
    $('#megazone').click(function () {
      $('#megazone-html').load('./portfolio/megazone.html');
    });
    $('#pump').click(function () {
      $('#pump-html').load('./portfolio/pump.html');
    });
    $('#saltlux').click(function () {
      $('#saltlux-html').load('./portfolio/saltlux.html');
    });
    $('#spoons').click(function () {
      $('#spoons-html').load('./portfolio/spoons.html');
    });
    $('#example').click(function () {
      $('#example-html').load('./portfolio/example.html');
    });
  } else {
    $('#likelion, #codeit').click(function () {
      $('#likelion-html, #codeit-html').load('./portfolio/public.html');
    });
  }
});
