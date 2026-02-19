nums = [-2, -1, 0, 1, 2]
print(list(filter(lambda x: x ,nums)))  # Output: [-2, -1, 1, 2]
print(list(filter(lambda x: x > 0,nums)))  # Output: [1, 2]