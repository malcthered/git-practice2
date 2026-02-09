list_a = [1,2, 3]
list_b  = list_a # list_b is a reference to list_a, not a copy

list_b.append(4) # This modifies the list that both list_a and list_b reference
print(list_a)