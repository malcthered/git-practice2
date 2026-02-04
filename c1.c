#include <stdio.h>

int main(void) {

    int a =4, b =3, c;

    c = a++ +b-- + a;

    printf("Result: %d\n", c);

    
    return 0;
}