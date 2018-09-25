var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // bounces in the text for next 
    x[n].classList.add('animated', 'bounceIn');  
    

    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    
    // If the dropdown is selected with a value status is true, mark the step as finished:
    if (currentTab.value == "") {
        console.log('You need to make a selection');
    } else {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    // Hide the current tab:
    // fades in the text for prev 
    x[currentTab].classList.add('animated','fadeIn');
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    
    
}

