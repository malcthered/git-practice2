#include <iostream>

using namespace std;

int main(void) {
    int a = 2;
    int b = 3;

    int c = a++ + b++ + ++a;
    cout << c << " " << a << b << endl;

    return 0;

}