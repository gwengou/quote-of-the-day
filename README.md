I created a web service that displays a quote based on a month/day input pair submitted by the user.  Each valid month/day combination returns a quote (as well as the author, if available).  
	
- The user can input an arbitrary pair of month/day, or click on the "your current date" button to fill the month/day automatically using the user's local time.

- The server will check the input for validity. 
-- If the month is not an integer between 1 and 12, or the day is not an integer between 1 and 31, the server will send an "Invalid Date" message to be displayed where the Quote of Day should be. 
-- If the month/day are valid integers, but 
- If the month is 2, and the day is over 28, the server will respond with a message that "This February has only 28 days."
-	If the month is 4, 6, 9 or 11, and the day is 31, the server will respond with a message that "This month has only 30 days."
--	Otherwise, the server will send a {"quoteText", "quoteAuthor"} json message to be parsed by the browser and displayed on the webpage. 
-- For additional security, the server has only one "get" function. The user cannot post, update or delete anything on the server. 

- The daily quotes in json format are copied from the list compiled by 4skinSkywalker at https://github.com/JamesFT/Database-Quotes-JSON/blob/master/quotes.json. Most of the quotes have an author, but some do not.  The quotes are saved in 12 json files in the "public" folder on the server. 
