#include <iostream>

using namespace std;

int main(void) {

    int x =2, y = 4, z = 6; // 3 variables
    int *arr[] = {&x, &y, &z}; // array of pointers to int, each element is a pointer to an int variable

    cout << *arr[0] + *arr[2] << endl; // *arr[0] is the value pointed to by arr[0], which is x (2)

    return 0;
}