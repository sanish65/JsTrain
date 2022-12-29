var mainDiv = document.getElementById("mainDiv");

var newHeadTag = document.createElement('H2');
newHeadTag.setAttribute('style', 'text-align:center');

var node_2 = document.createTextNode((new String("User Profile Card")));
newHeadTag.appendChild(node_2);

mainDiv.appendChild(newHeadTag);

var newDiv = document.createElement('DIV');
newDiv.setAttribute('class', 'card');
newDiv.setAttribute('style', '.card box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);max-width: 300px;margin: auto;text-align: center;font-family: arial;');

var createImage = document.createElement('IMG');
createImage.setAttribute('src', 'img/sanish_pic.jpg');
createImage.setAttribute('alt', 'img');
createImage.setAttribute('style', 'width:100%');
newDiv.appendChild(createImage);

var createHeadTag = document.createElement('H1');
newDiv.appendChild(createHeadTag);

var textForName = document.createTextNode((new String("Sanish Maharjan")));
createHeadTag.appendChild(textForName);

var createParaTag = document.createElement('P');
createParaTag.setAttribute('class', 'title');
createParaTag.setAttribute('style', ' color: grey;font-size: 18px;');
newDiv.appendChild(createParaTag);

var position = document.createTextNode((new String("Web developer")));
createParaTag.appendChild(position);

var createSecondParaTag = document.createElement('P');
newDiv.appendChild(createSecondParaTag);

var address = document.createTextNode((new String("Outside Tech, Jhamsikhel")));
createSecondParaTag.appendChild(address);

var createSecondDiv = document.createElement('DIV');
createSecondDiv.setAttribute('style', 'margin: 24px 0; text-align: center;');
newDiv.appendChild(createSecondDiv);

var createThirdParaTag = document.createElement('P');
createSecondDiv.appendChild(createThirdParaTag);

var myAddress = document.createTextNode((new String("Address: Gongabu, Kathmandu")));
createThirdParaTag.appendChild(myAddress);

var createFourthParaTag = document.createElement('P');
createSecondDiv.appendChild(createFourthParaTag);

var phone = document.createTextNode((new String("Phone: 9812345678")));
createFourthParaTag.appendChild(phone);

var createFifthParaTag = document.createElement('P');
createSecondDiv.appendChild(createFifthParaTag);

var email = document.createTextNode((new String("Email:sanish@outside.tech")));
createFifthParaTag.appendChild(email);

var createsixthParaTag = document.createElement('P');
newDiv.appendChild(createsixthParaTag);

var createButton = document.createElement('BUTTON');
createButton.setAttribute('style', ' border: none;outline: 0;display: inline-block;padding: 8px;color: white;background-color: #000;text-align: center;cursor: pointer;width: 100%;font-size: 18px;');
createsixthParaTag.appendChild(createButton);

var sayHello = document.createTextNode((new String("Hello")));
createButton.appendChild(sayHello);

mainDiv.appendChild(newDiv);
