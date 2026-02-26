#include <iostream>

using namespace std;

void fun(int arr[]) {

    arr[1] = 100;
}

int main(void) {

    int a[] = {10, 20, 30};
    fun(a); // passing the array a to the function fun
   
   
    cout << a[1] << endl; // prints 100, because fun modifies the value of a[1]
    return 0;
}