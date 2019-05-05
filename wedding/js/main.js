function showCode(divID) {
    var targetDiv = '#' + divID + '-code'
    if ($(targetDiv).hasClass('hide')) {
        $(targetDiv).removeClass('hide')
        document.getElementById(divID).innerHTML = 'Hide code';
    } else {
        $(targetDiv).addClass('hide')
        document.getElementById(divID).innerHTML = 'Show code';
    }
}