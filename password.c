#include <stdio.h>
#include <string.h>

int main(void) {
    char userid[100] = "user123", password[100] = "pass123";


    if(strcmp(userid, "user123") == 0 && strcmp(password, "pass123") == 0) {
        printf("Access granted\n");
    } else {
        printf("Access denied\n");
    }

    return 0;
}