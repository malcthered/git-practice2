#include <stdio.h>

int main(void) {

    int i = 36;

    while(i >= 1) {

        if(i % 2 == 0) {
            printf("%d\n", i);
        }
        i--;
    }
    return 0;
}