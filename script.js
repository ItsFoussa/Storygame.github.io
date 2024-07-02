document.addEventListener("DOMContentLoaded", function() {
    const storyOpening = document.querySelector('.story-opening');
    const optionOneScreen = document.querySelector('.option-one-screen');
    const optionTwoScreen = document.querySelector('.option-two-screen');
    const optionOneEnd = document.querySelector('.option-one-end');
    const optionTwoEnd = document.querySelector('.option-two-end');

    const optionOneButton = document.querySelector('.option-one');
    const optionTwoButton = document.querySelector('.option-two');
    const optionOneAButton = document.querySelector('.option-one-a');
    const optionOneBButton = document.querySelector('.option-one-b');
    const optionTwoAButton = document.querySelector('.option-two-a');
    const optionTwoBButton = document.querySelector('.option-two-b');

    const imageEasterEgg = document.querySelector('.hidden')
    function showSection(sectionToShow) {
        storyOpening.style.display = 'none';
        optionOneScreen.style.display = 'none';
        optionTwoScreen.style.display = 'none';
        optionOneEnd.style.display = 'none';
        optionTwoEnd.style.display = 'none';

        sectionToShow.style.display = 'block';
    }

    optionOneButton.addEventListener('click', function() {
        showSection(optionOneScreen);
    });

    optionTwoButton.addEventListener('click', function() {
        showSection(optionTwoScreen);
    });

    optionOneAButton.addEventListener('click', function() {
        showSection(optionOneEnd);
    });

    optionOneBButton.addEventListener('click', function() {
        showSection(storyOpening);
    });

    optionTwoAButton.addEventListener('click', function() {
        showSection(optionTwoEnd);
    });

    optionTwoBButton.addEventListener('click', function() {
        showSection(storyOpening);
    });

    // Show the opening section initially
    // showSection(storyOpening);
    // imageEasterEgg.addEventListener('click', function{
       
    // })
});
