num = 31
i = 2
while i < num:
    if num % i == 0:
        print(num, "is not a prime number")  # never executed as num % i is aways 1
        break
  