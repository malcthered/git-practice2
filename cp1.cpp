#include <iostream>

using namespace std;

int main () {
    int a= 5, b = 3, c = 2; // Sample variables

    int result = a++ * b + --c; // Evaluate expression with side effects

    cout << "Result: " << result << endl; // Output the result
    cout << a << endl;
    return result;
}