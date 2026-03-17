import math

a = int(input())
b = int(input())

start = int(math.ceil(a ** 0.5))
end = int(math.floor(b ** 0.5))

for i in range(start, end + 1):
    print(i * i, end=" ")