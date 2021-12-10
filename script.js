var all = $('.cus-option'), casted;
function getSelected(){
  var opts = [];
  all.each(function(idx) {
    if($(this).hasClass('selected')){
      opts.push(idx);
    }
  });
  return opts;
}
function showRes(idx,perc){
  var prog = $('[for="opt-'+idx+'"] .progress'),
  prec = $('[for="opt-'+idx+'"] .percent'),
  counter = 0;
  var inv = setInterval(function() {
  prog.css('--wd', counter);
  prec.html(counter+'%');
  if (++counter>perc||counter>100) clearInterval(inv);
  }, 20);
}
$(document).on('click', '.castvote', function(){
  var sel = getSelected();
  if (sel.length) {
    $(this).attr('disabled',true);
    all.addClass('selectall');
    casted = true;
    showRes(1,100);
    showRes(2,60);
    showRes(3,50);
    showRes(4,20);
    
    console.log('User selected: ', sel);
  } else {
    alert('Please select something!');
  }
});
$(document).on('click', '.cus-option', function(e){
  if(casted) {e.preventDefault();return;}
  var t_ = $(this),
  fr = t_.attr('for'),
  typ = $('#'+fr).attr('type');
  if(t_.hasClass('selected') && typ == 'checkbox') {
    t_.removeClass('selected');
  } else {
    if(typ != 'checkbox') {
      all.removeClass('selected');
    }
    t_.addClass('selected');
  }
});
