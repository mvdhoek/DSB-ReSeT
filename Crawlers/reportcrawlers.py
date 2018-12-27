##############################
#### Report crawler class ####
##############################

# create a class that collects all crawlers
# the class can be used after importing reportcrawlers.crawlers in your script.
class crawlers(object):

    # define functions to be included in the class
    import NTSB
    import AAIB
    # --> add other SIAs here

    def crawl_ntsb(self):
        return self.NTSB.crawl_reportdata()

    def crawl_aaib(self):
        return self.AAIB.crawl_reportdata()

    # --> add other SIAs using the template:
    #def crawl_<agency>(self):
    #   return self.<agency>.crawl_reportdata()

    # the class assumes that a file with the name <agency>.py exists
    # in the same directory. This file must contain a function named
    # crawl_reportdata() which returns a pandas dataframe with webdata.
