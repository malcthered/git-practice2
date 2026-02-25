#include <iostream>

using namespace std;

void fun(int *p) {

    *p = 50;
}
int main() {

    int a = 5;
    int *ptr = &a; // ptr is a pointer to an int, initialized to the address of a
    fun(ptr);

    cout << a << endl; // prints 50, because fun modifies the value of a through the pointer

    return 0;
}