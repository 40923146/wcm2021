var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n', 'tags': '', 'url': 'About.html'}, {'title': 'HOME', 'text': 'github\xa0 \xa0 https://github.com/40923146/wcm2021 \n', 'tags': '', 'url': 'HOME.html'}, {'title': 'SSH', 'text': '1.首先我們需要登入github在自己的帳號中開啟設定，在設定中尋找SSH and GPG keys ，然後先按New SSHkey做準備。 \n 2.在 start_ipv6.bat (編輯器)加入 \xa0 set GIT_SSH=%Disk%:\\putty\\plink.exe。 \n 3.開啟 Putty 目錄中的 puttygen.exe,(沒有putty從a.kmol.info:88下載)，點擊Generate下載新Key(移動滑鼠進度條才會動)，最上面出現的亂碼為新鑰匙，全選後丟進剛剛在github預備的New SSHkey(記得存)，記得用SciTE 編輯儲存鑰匙(_rsa 檔)，然後用Save private key再存一次(.ppk檔)，兩個檔案存在tmp/keys裡 \n 4.開啟 putty.exe建立一個 session用於以 ssh 協定連線到 github.com(在hostname),名稱可任意但Proxy須設定學校的(筆電不用Proxy可以選None)，Auth記得選之前儲存.ppk的檔案，最後回開頭存檔 \n 5.最後則是要修改tmp/wcm2021/.git裡面config的url(之前的可在前面加#即可)，url改成git@( session的名子) :(帳號)/(倉儲名子).git(原url下面)(是origin下面的url) \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Heroku-實作', 'text': 'heroku:s40923146 \n 步驟一: \xa0 ( 建立 Heroku 帳號 ) 進入 \xa0 https://heroku.com , 利用學校配發的 @gm 登記一個 Heroku 帳號, 關鍵在於密碼設定必須要至少 8 個字元, 且字元中必須包含符號, 英文字母及數字,\xa0 並且登記後要進入 @gm 帳號進行確認後才能開通 Heroku 帳號. \n 完成帳號登記後, 必須知道目前 Heroku 只允許免費建立五個應用程式, 且每個程式的最大容量為 500MB. \n 步驟二: \xa0 ( 建立 Heroku app ) 登入 Heroku 後, 先以 s + 學號 建立第一個 app, 完成後, 將可至 https://s學號.herokuapp.com 連線取得網站最初內容. \n 步驟三: \xa0 (下載 Heroku CLI) 從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku cli 程式檔案, 解開至隨身碟 Y: 所在位置或者是 Hybrid 設定的位置. \n 步驟四: \xa0 ( 修改命令搜尋路徑 ) 修改隨身系統的啟動批次檔案, 讓 Windows 的命令視窗中可以執行 heroku.exe, 或者稱作"設法將 heroku.exe 所在目錄位置, 設為 Windows 搜尋路徑之一". \n 重新啟動已經納入可執行 heroku.exe 的隨身碟 start_ipv6.bat 或 start_ipv4.bat \n 步驟五: \xa0 ( 測試 heroku 執行 ) 測試是否能夠在修改後的命令列中執行 heroku.exe, 輸入 heroku version 若回應所使用的版本表示上述路徑設定已經成功. \n 步驟六: \xa0 ( 設定 heroku 代理主機 ) 先前我們已經知道網路的應用包含 client 與 server, 不同 client 採用不同的 proxy 設定與 server 連線, 其中 firefox 作為 WWW 網路協定的 client, 有其自己的網路 Proxy 設定, 也可以直接使用操作系統的 Proxy 設定. \n Chrome 作為 WWW 網路協定的 client, 目前 Windows 下的最新版, 只能使用操作系統的 Proxy 設定. \n 而 git 作為 git client 與 github server 連線的 Proxy 設定, 則寫在 y:\\home_ipv6 下的 .giconfig 中,\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定. \n 相同的道理 heroku cli 作為 \xa0 https://heroku.com \xa0 伺服器的 client 端, 也有其 Proxy 的設定方式, 也就是在 start_ipv6.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM  for   heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n \n \n 步驟七: \xa0 ( 設定同步倉儲 ) 針對利用 Heroku 同步 Github Pages 上的網站內容, 只需要透過 git remote add (Heroku 指令為 heroku git:remote -a heroku_倉儲_名稱, 之後只要在 heroku login 狀態下, 可以直接利用 git push) 在近端設定一個連線到 Heroku 倉儲的代號, 就能在每次更新 Github Pages 倉儲後, 再將內容同步至 Heroku. 網際內容管理課程將使用兩種 Heroku app 設定, 也就是靜態網頁與動態網頁: \n 靜態網頁 - 採用 php 方式部署, 讓 Heroku 將靜態網頁視為 PHP 程式, 利用 index.php 跳轉到 index.html \n 動態網頁 - 讓 Heroku 執行 cmsimde/wsgi.py 的方式進行雲端伺服. \n 步驟八: \xa0 ( 以 git 進行提交推送 ) 利用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku", 使用者只要使用 git push heroku 就可以將改版內容推送到對應的 Heroku app 倉儲.', 'tags': '', 'url': 'Heroku-實作.html'}]};