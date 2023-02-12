

function chooseYes() {
    document.getElementById('vd-text').remove();
    document.getElementById('buttons').remove();
    document.getElementById('nono-txt').remove();
    document.getElementById('see-you-soon-txt').style.display = 'block';
}

function chooseNo() {
    document.getElementById('no-bttn').remove();
    document.getElementById('nono-txt').style.display = 'block';
}