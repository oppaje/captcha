# What is this?
A simple script I wrote using CaptchaHarvester before converting it to an exe file so my friends who don't know python could use it!

# How to convert a CaptchaHarvester script to a .exe file?
First, you need to create a spec file using this command ```pyi-makespec --onefile yourfile.py```
Then open the spec file created, and add the path of the following things inside ```datas=[]``` 
```server.crt
server.key
hcaptcha.html
recaptcha-v2.html
recaptcha-v3.html
ga.chunk.html
domains.html
style.css
icon.png
```
I included captcha.spec so you can use that as an example.
After that, convert the spec file to a exe file using pyinstaller or something else.

# Credits
Special thanks to [@NoahCardoza](https://github.com/NoahCardoza) for making CaptchaHarvester and for helping me throughout the way.

[CaptchaHarvester](https://github.com/NoahCardoza/CaptchaHarvester) - Used for handling API calls and solving different types of captchas.

[Buster](https://github.com/dessant/buster) - Used for solving reCAPTCHA v2 using voice recognition.
