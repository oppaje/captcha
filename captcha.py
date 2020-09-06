from harvester import Harvester, fetch
from threading import Thread
import logging
import pathlib

print("""			Captcha Harvester - Solve Captchas Without Using a Captcha Service
					     API Made By: NoahCardoza
				      This Script Has Been Made By: oppaje
""")
captchaType = input('''Select Captcha Type:
      1. RECAPTCHA V2
      2. RECAPTCHA V3
      3. hCaptcha
      > ''')

domain = input("Enter domain (follow this format: example.com): ")
sitekey = input("Enter sitekey: ")
extension = None

logging.getLogger('harvester').setLevel(logging.CRITICAL)

harvester = Harvester()

if captchaType == '1':
    enable_extension = input('Do you want to enable the Buster chrome extesnion? [y/n]: ')
    if enable_extension == 'y' or enable_extension == 'Y':
        extension = fr"{str(pathlib.Path().absolute())}\Buster-chrome-extension"
        
    tokens = harvester.intercept_recaptcha_v2(
        domain=domain,
        sitekey=sitekey)

elif captchaType == '2':
    tokens = harvester.intercept_recaptcha_v3(
        domain=domain,
        sitekey=sitekey)

elif captchaType == '3':
    tokens = harvester.intercept_hcaptcha(
        domain=domain,
        sitekey=sitekey)

else:
    print("Invalid Respond! Restart Program.")
    input()

server_thread = Thread(target=harvester.serve, daemon=True)
server_thread.start()
harvester.launch_browser(extensions=extension)

while True:
    pass
