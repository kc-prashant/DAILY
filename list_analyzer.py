nums = list(map(int, input("Enter numbers separated by space: ").split()))


def adition(numbers):
    total =0
    for i in numbers:
        total += i
    return total
def average(numbers):
    total =adition(numbers)
    return total/len(numbers)

def largest(numbers):
    largest = nums[0]
    for i in numbers:
        if i > largest:
            largest = i 
    return largest
def smallest(numbers):
    smallest = nums[0]
    for i in nums:
        if i < smallest:
            i = smallest
    return smallest

if __name__ =="__main__":
    print(f"Total={adition(nums)}")
    print(f"average={average(nums)}")
    print(f"largest={largest(nums)}")
    print(f"smallest={smallest(nums)}")