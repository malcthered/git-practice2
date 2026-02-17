x = 5
y = 4
if x > y:
    x = 3
    y = 10
print(x * y)

strs = ["flower", "flow", "flight"]
strs.sort()
result = ""
for i in range(len(strs[0])):
    if strs[0][i] == strs[-1][i]:
        result += strs[0][i]
    else:
        break
print(result)  # Output: "fl"