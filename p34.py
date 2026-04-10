attempts = 0

while attempts < 3:
    password = input ("Enter password:");
    if(password == "999"):
        print("Access granted");
        break;
    else:
        print("Access denied");
    attempts+=1

if attempts == 3:
    print("Too many attempts. Access denied.");
