import webapp2
import urllib
import urllib2
import cgi

api_url = "https://keyscores.api-us1.com/admin/api.php"
api_key = "1f92db2479bcbfed65615e4748bd24606c9fadceea77eeee994c625e38e25a1e686f9257" 

# class AccountView(webapp2.RequestHandler):
#     def get(self):
#         self.response.headers['Content-Type'] = 'text/html'
#         query_args = { 'api_key':api_key, 'api_action':'account_view', 'api_output':'json' }
#         # This urlencodes your data (that's why we need to import urllib at the top)
#         data = urllib.urlencode(query_args)
#         request = urllib2.Request(api_url,data)
#         self.response.write(urllib2.urlopen(request).read())

class EmailAdd(webapp2.RequestHandler):
    def post(self):
        self.response.headers['Content-Type'] = 'application/json'
        query_args = { 
        	'api_key':api_key, 
        	'api_action':'contact_add', 
        	'email':self.request.get('email'),
        	'api_output':'json' 
        }

        # This urlencodes your data (that's why we need to import urllib at the top)
        data = urllib.urlencode(query_args)
        request = urllib2.Request(api_url,data)

        self.response.write(urllib2.urlopen(request).read())        

application = webapp2.WSGIApplication([
    # ('/api-email/account', AccountView),
    ('/api-email/add', EmailAdd)
], debug=True)