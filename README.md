# Council

## Program structure

|--app.js//server
|--routes//根據收到的request，進入不同routes
|  |--user
|  |--post
|--models//從DB中找尋資料，對資料進行後處理
|  |--db
|  |--mysql
|--views
|  |--public//layout
|  |--ejs or html
|--assets
|  |--images
|  |--css
|  |--javascripts
|--node_modules
|--package.json
|--config.json

1.	Client端發送request至server端。
2.	Server端接收到request後，交由特定的router的function所接收，並呼叫相對應的model做處理。
3.	若該request需要與DB來做撈取資料的動作，則從DB中找尋該資料，並將資料回傳至model中。若無則直接對資料進行後處理的動作。
4.	待model處理完資料的邏輯後，將資料傳給view，並由view來產生html文件，並送至server端中。
5.	Server端回覆response至client端。