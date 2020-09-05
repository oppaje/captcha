# -*- mode: python ; coding: utf-8 -*-

block_cipher = None


a = Analysis(['C:\\Users\\oppaje\\output\\captcha.py'],
             pathex=['C:\\Users\\oppaje'],
             binaries=[],
             datas=[(r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\gevent\tests\server.crt", r"harvester\server"),
  (r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\gevent\tests\server.key", r"harvester\server"),
  (r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\templates\hcaptcha.html", r"harvester\server\templates"),
  (r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\templates\recaptcha-v2.html", r"harvester\server\templates"),
  (r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\templates\recaptcha-v3.html", r"harvester\server\templates"),
(r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\templates\ga.chunk.html", r"harvester\server\templates"),
(r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\templates\domains.html", r"harvester\server\templates"),
(r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\style.css", r"harvester\server"),
(r"C:\Users\oppaje\AppData\Local\Programs\Python\Python37\Lib\site-packages\harvester\server\icon.png", r"harvester\server")],
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          [('captcha.png',r'C:\Users\oppaje\Downloads\captcha.png','DATA')],
          name='captcha.exe',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          upx_exclude=[],
          runtime_tmpdir=None,
          console=True, icon=r"C:\Users\oppaje\Downloads\captcha.ico")
