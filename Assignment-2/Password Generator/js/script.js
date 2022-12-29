var mainDiv = document.getElementById("main");

var createH1Tag = document.createElement('H1');

var title = document.createTextNode((new String("Password Generator")));
createH1Tag.appendChild(title);

mainDiv.appendChild(createH1Tag);

var createDivForDisabledInput = document.createElement('DIV');
createDivForDisabledInput.setAttribute('class', 'input-box');
createDivForDisabledInput.setAttribute('style', 'padding:20px');

var createInputTag = document.createElement('INPUT');
createInputTag.setAttribute('type', 'text');
createInputTag.setAttribute('size', '35');
createInputTag.setAttribute('disabled', '');
createDivForDisabledInput.appendChild(createInputTag);

var createSpan = document.createElement('SPAN');
createSpan.setAttribute('class', 'copy-all');
createSpan.setAttribute('style', 'cursor: pointer;');
createDivForDisabledInput.appendChild(createSpan);

var createText = document.createTextNode((new String("Copy")));
createSpan.appendChild(createText);

mainDiv.appendChild(createDivForDisabledInput); 

var createDivForPassDisplay = document.createElement('DIV');
createDivForPassDisplay.setAttribute('class', 'pass-display');
 
var createDivForDisplay = document.createElement('DIV');
createDivForDisplay.setAttribute('class', 'details');
createDivForPassDisplay.appendChild(createDivForDisplay);

var createLabel = document.createElement('LABEL');
createLabel.setAttribute('class', 'title');
createDivForDisplay.appendChild(createLabel);

var length = document.createTextNode((new String("Length:")));
createLabel.appendChild(length);

var createSpanForPassword = document.createElement('SPAN');
createDivForDisplay.appendChild(createSpanForPassword);

var createInputSlider = document.createElement('INPUT');
createInputSlider.setAttribute('type', 'range');
createInputSlider.setAttribute('min', '1');
createInputSlider.setAttribute('max', '30');
createInputSlider.setAttribute('value', '15');
createInputSlider.setAttribute('step', '1');
createDivForPassDisplay.appendChild(createInputSlider);

mainDiv.appendChild(createDivForPassDisplay); 

var createDivForDisplayer = document.createElement('DIV');
createDivForDisplayer.setAttribute('class', 'displayer');
createDivForDisplayer.setAttribute('style', 'text-align: center;');

var createDivForPassSetting = document.createElement('DIV');
createDivForPassSetting.setAttribute('class', 'pass-settings');
createDivForDisplayer.appendChild(createDivForPassSetting);

var createLabelForDesc = document.createElement('LABEL');
createLabelForDesc.setAttribute('class', 'title');
createLabelForDesc.setAttribute('style', 'color: brown;');
createDivForPassSetting.appendChild(createLabelForDesc);


var createGuidance = document.createTextNode((new String("click to make password unique")));
createLabelForDesc.appendChild(createGuidance);

var createULTag = document.createElement('UL');
createULTag.setAttribute('class', 'options');
createDivForPassSetting.appendChild(createULTag);

var createLITag = document.createElement('LI');
createLITag.setAttribute('class', 'option');
createULTag.appendChild(createLITag);

var createInputCheckbox = document.createElement('INPUT');
createInputCheckbox.setAttribute('type', 'checkbox');
createInputCheckbox.setAttribute('id', 'lowercase');
createInputCheckbox.setAttribute('checked', '');
createLITag.appendChild(createInputCheckbox);

var createLabel1 = document.createElement('LABEL');
createLabel1.setAttribute('for', 'lowercase');
createLITag.appendChild(createLabel1);

var lowerCase = document.createTextNode((new String("Lowercase")));
createLabel1.appendChild(lowerCase);

var createLITag1 = document.createElement('LI');
createLITag1.setAttribute('class', 'option');
createULTag.appendChild(createLITag1);

var createInputCheckbox1 = document.createElement('INPUT');
createInputCheckbox1.setAttribute('type', 'checkbox');
createInputCheckbox1.setAttribute('id', 'uppercase');
createLITag1.appendChild(createInputCheckbox1);

var createLabel2 = document.createElement('LABEL');
createLabel2.setAttribute('for', 'uppercase');
createLITag1.appendChild(createLabel2);

var upperCase = document.createTextNode((new String("Uppercase")));
createLabel2.appendChild(upperCase);

var createLITag2 = document.createElement('LI');
createLITag2.setAttribute('class', 'option');
createULTag.appendChild(createLITag2);

var createInputCheckbox2 = document.createElement('INPUT');
createInputCheckbox2.setAttribute('type', 'checkbox');
createInputCheckbox2.setAttribute('id', 'numbers');
createLITag2.appendChild(createInputCheckbox2);

var createLabel3 = document.createElement('LABEL');
createLabel3.setAttribute('for', 'numbers');
createLITag2.appendChild(createLabel3);

var numbers = document.createTextNode((new String("Numbers")));
createLabel3.appendChild(numbers);

var createLabel4 = document.createElement('LI')
createLabel4.setAttribute('class', 'option');
createULTag.appendChild(createLabel4);

var createInputCheckbox3 = document.createElement('INPUT')
createInputCheckbox3.setAttribute('type', 'checkbox');
createInputCheckbox3.setAttribute('id', 'symbols');
createLabel4.appendChild(createInputCheckbox3);

var createLabel5 = document.createElement('LABEL');
createLabel5.setAttribute('for', 'symbols');
createLabel4.appendChild(createLabel5);

var symbols = document.createTextNode((new String("Symbols")));
createLabel5.appendChild(symbols);

var createLITag3 = document.createElement('LI');
createLITag3.setAttribute('class', 'option');
createULTag.appendChild(createLITag3);

var createInputCheckbox4 = document.createElement('INPUT');
createInputCheckbox4.setAttribute('type', 'checkbox');
createInputCheckbox4.setAttribute('id', 'exc-duplicate');
createLITag3.appendChild(createInputCheckbox4);


var createLabel6 = document.createElement('LABEL');
createLabel6.setAttribute('for', 'exc-duplicate');
createLITag3.appendChild(createLabel6);

var noDuplicate = document.createTextNode((new String("No Duplicate")));
createLabel6.appendChild(noDuplicate);

var createLITag4 = document.createElement('LI');
createLITag4.setAttribute('class', 'option');
createULTag.appendChild(createLITag4);

var createInputCheckbox5 = document.createElement('INPUT');
createInputCheckbox5.setAttribute('type', 'checkbox');
createInputCheckbox5.setAttribute('id', 'spaces');
createLITag4.appendChild(createInputCheckbox5);

var createLabel7 = document.createElement('LABEL');
createLabel7.setAttribute('for', 'spaces');
createLITag4.appendChild(createLabel7);

var spaces = document.createTextNode((new String("Spaces")));
createLabel7.appendChild(spaces);

var show = document.createElement('DIV');
show.setAttribute('class', 'show');
createDivForDisplayer.appendChild(show);

mainDiv.appendChild(createDivForDisplayer);

var button = document.createElement('BUTTON');
button.setAttribute('class', 'generate-btn');

var buttonText = document.createTextNode((new String("Generate Password")));
button.appendChild(buttonText);

mainDiv.appendChild(button);

const sliderLength = document.querySelector(".pass-display input"),
passOptions = document.querySelectorAll(".option input"),
copy = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".show"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = sliderLength.value;
    copy.COMMENT_NODE;

    passOptions.forEach(option => {
        if(option.checked) {
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if(option.id === "spaces") {
                staticPassword += `  ${staticPassword}  `;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword;
}

const upadatePassIndicator = () => {
    if(sliderLength.value < 5){
        passIndicator.id = "error";
        passwordInput.value = 'Password is too short.';
        }
    else{
        passIndicator.id = sliderLength.value <= 8 ? "weak" : sliderLength.value <= 16 ? "medium" : "strong";
    }
}

const sliderOnChange = () => {
    document.querySelector(".pass-display span").innerText = sliderLength.value;
    generatePassword();
    upadatePassIndicator();
}

sliderOnChange();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copy.innerText = "copied";
    copy.style.color = "black";

    setTimeout(() => {
        copy.innerText = "Copy";
        copy.style.color = "#707070";
    }, 5000);
}

copy.addEventListener("click", copyPassword);
sliderLength.addEventListener("input", sliderOnChange);
generateBtn.addEventListener("click", generatePassword);