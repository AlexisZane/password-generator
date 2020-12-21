# Title: Password Generator

# Description
This is an application built as a project for my coding bootcamp. The goal was to create a password generator which can store input from the user and generate a ranndom password according to the user's specification. It was also important to confirm with the user each time a choice was made. At the end of the choices, a password will display in an alert box and following this the user can exit out of the box and click "generate password" to see their password displayed in a professional looking box.

# Demo
I have included screenshots of the deployed application in the assets folder in a subdirectory entitled deployment-screenshots. For your convenience, please find the links to the images below:
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-1.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-2.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-3.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-4.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-5.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-6.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-7.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-8.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-9.png
https://github.com/AlexisZane/password-generator/blob/master/assets/deployment-screenshots/deployed-final.png

If interested, please view the application deployed through GitHub Pages here: https://alexiszane.github.io/password-generator/

# Technologies Used
-HTML
-CSS
-JavaScript

# Gotcha
This project was an interesting challenge for me because it was my first time coding in JavaScript. Towards the end of construction I found that the particular math formula I was using to generate 'random' numbers may have been refactored in order to be more efficient. That is, passWord += pwdChars.chatAt(Math.floor((Math.random() * pwdChars.length) + 1 )) could have been refactored to passWord += pwdChars.charAt(Math.ceiling((Math.random() * pwdChars.length))) which would negate the need for the extra 1. However when I attempted this it broke the code entirely. I would absolutely be interested in feedback for why this is if anybody can provide feedback.

# Acknowledgements
I would like to extend my thanks to my instructor Ed Apostal, as well as the entire instructional team at Trilogy for their continued support in this bootcamp!
