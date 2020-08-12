var cadet = true;

$(document).ready(function () {
  if (cadet == true) {
    $('#likelion').click(function () {
      $('#likelion-html').load('./assets/html/likelion.html');
    });
    $('#codeit').click(function () {
      $('#codeit-html').load('./assets/html/codeit.html');
    });
    $('#collabee').click(function () {
      $('#collabee-html').load('./assets/html/collabee.html');
    });
    $('#comcom').click(function () {
      $('#comcom-html').load('./assets/html/comcom.html');
    });
    $('#goorm').click(function () {
      $('#goorm-html').load('./assets/html/goorm.html');
    });
    $('#jandi').click(function () {
      $('#jandi-html').load('./assets/html/jandi.html');
    });
    $('#junohair').click(function () {
      $('#junohair-html').load('./assets/html/junohair.html');
    });
    $('#kensington').click(function () {
      $('#kensington-html').load('./assets/html/kensington.html');
    });
    $('#lenovo').click(function () {
      $('#lenovo-html').load('./assets/html/lenovo.html');
    });
    $('#medical').click(function () {
      $('#medical-html').load('./assets/html/medical.html');
    });
    $('#megazone').click(function () {
      $('#megazone-html').load('./assets/html/megazone.html');
    });
    $('#pump').click(function () {
      $('#pump-html').load('./assets/html/pump.html');
    });
    $('#saltlux').click(function () {
      $('#saltlux-html').load('./assets/html/saltlux.html');
    });
    $('#spoons').click(function () {
      $('#spoons-html').load('./assets/html/spoons.html');
    });
    $('#example').click(function () {
      $('#example-html').load('./assets/html/example.html');
    });
  } else {
    $('#likelion, #codeit').click(function () {
      $('#likelion-html, #codeit-html').load('./assets/html/public.html');
    });
  }
});
