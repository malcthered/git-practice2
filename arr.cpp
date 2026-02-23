#include <iostream>

using namespace std;

int main(void) {

    int a= 1, b =2, c = 3;

    int *arr[] = {&a, &b, &c};

    arr[2] = &a;

    cout << *arr[2] << endl; // Output: 1
    cout << sizeof(arr) << endl; // 24 bytes (3 pointers, each 8 bytes on a 64-bit system)


    return 0;
}