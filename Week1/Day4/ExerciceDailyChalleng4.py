class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = pageSize
        self.currentPage = 1

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self

    def nextPage(self):
        total_pages = (len(self.items) + self.pageSize - 1) // self.pageSize
        if self.currentPage < total_pages:
            self.currentPage += 1
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = (len(self.items) + self.pageSize - 1) // self.pageSize
        return self

    def goToPage(self, pageNum):
        total_pages = (len(self.items) + self.pageSize - 1) // self.pageSize
        if 1 <= pageNum <= total_pages:
            self.currentPage = pageNum
        else:
            print(f"Page {pageNum} is out of range.")
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  

p.nextPage()
print(p.getVisibleItems()) 

p.lastPage()
print(p.getVisibleItems())  
p.firstPage()
print(p.getVisibleItems())  

p.goToPage(2)
print(p.getVisibleItems()) 
p.goToPage(3)
print(p.getVisibleItems()) 




        