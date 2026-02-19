set1 = {1, 2, 3}
set2 = {2, 3, 4}
print(set1 & set2)  # Output: {2, 3}

set1.add(4)
print(set1)  # Output: {1, 2, 3, 4}

set1.remove(2)
print(set1)  # Output: {1, 3, 4}

set1.pop()  # Removes and returns an arbitrary element from the set
print(set1)  # Output: {3, 4} (the element removed may vary)

print(2 in set1)  # Output: False
print(3 in set1)  # Output: True

print(set1 | set2)  # Output: {1, 2, 3, 4} (union of sets)
print(set1 - set2)  # Output: {3} (elements in set1 but not in set2)

print(set1 & set2)  # Output: {3, 4} (intersection of sets)