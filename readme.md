JWT:- JSONWEBTOKEN :- library

payload  + Timestamp (iat (issued at)) + exp time

Header :- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. Payload:-eyJuYW1lIjoia2FydW5ha2FyIiwiaWQiOjEsImFnZSI6MzAsImlhdCI6MTc0MjM3NDU2OSwiZXhwIjoxNzQyMzc4MTY5fQ.
signature:- q3mZlPsjf1TkS0E055pPXxfg5CCp_Mf7IdaqnNzvfFA

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJuYW1lIjoia2FydW5ha2FyIiwiaWQiOjEsImFnZSI6MzAsImlhdCI6MTc0MjM3NDY5NCwiZXhwIjoxNzQyMzc4Mjk0fQ.Js4ogngzsjoRHQcl8CLMmC4W4li8ldKymFERKz3p2es 





npm install jsonwebtoken

:- It is used for | to access specific routes or kind of data exchange

const jwt = require("jsonwebtoken")

landing page
register -> login -> Home, dashboard, about, 

jwt.sign() // to create token

jwt.verify() // to verify the token

step 1:- 
1. register 
step 2:- 
1. Login :- we have generated a token
Step 3:- Home -> localstorage, session storage -> 

Authorization : Bearer <token>