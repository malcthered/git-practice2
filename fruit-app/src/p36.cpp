#include <iostream>

using namespace std;

int main(void) {
    int arr[] = {10, 20,30};
    int *p = arr;

    cout << *(p++); 

    return 0;
}
