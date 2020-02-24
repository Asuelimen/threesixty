//get modal element 
var logmodal = document.getElementById('logsimpleModal');
//get open modal button
var logmodalBtn = document.getElementById('logmodalBtn');
//get close btn
var logcloseBtn = document.getElementsByClassName('logcloseBtn')[0];
//listen for outside click
window.addEventListener('click', logoutsideClick);
//listen for open click
logmodalBtn.addEventListener('click', logopenModal);
//listen fr close cick
logcloseBtn.addEventListener('click', logcloseModal);

// functon to open modal
function logopenModal() {
    logmodal.style.display = 'block';
}

//function for close modal
function logcloseModal() {
    logmodal.style.display = 'none';
}
//function to close modal if outside click
function logoutsideClick(e) {
    if (e.target == logmodal) {
        logmodal.style.display = 'none';
    }
}