#include <iostream>

using namespace std;

int main() {

    int a[3] = {1, 2, 3}; // Array of integers
    int sum = 0;

    for(int i = 0; i < 3; i++) {
        sum += a[i]; // Adding each element of the array to sum
    }

    cout << sum;
}