class Difference:
    def __init__(self, a):
        self.__elements = a
    
    # Add your code here
    def computeDifference(self):
        numbers = sorted(self.__elements);
        maximumDifference = numbers[-1] - numbers[0];      
        self.maximumDifference = maximumDifference;

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)