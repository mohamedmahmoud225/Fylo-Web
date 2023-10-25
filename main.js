window.addEventListener('scroll', function() {
    var containerText = document.querySelector('.container-text');
    var containerPosition = containerText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2;

    if (containerPosition < screenPosition) {
        containerText.classList.add('in-view');
    }
});

window.addEventListener('scroll', function() {
    var contentComment = document.querySelector('.content-comment');
    var containerPosition = contentComment.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2;

    if (containerPosition < screenPosition) {
        contentComment.classList.add('ee');
    }
});

document.getElementById("submitButton").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput");
    var errorText = document.getElementById("errorText");

    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorText.style.display = "block";
    } else {
        errorText.style.display = "none";
      // يمكنك إضافة الإجراءات الأخرى هنا عندما يكون البريد الإلكتروني صحيحًا
    }
});
