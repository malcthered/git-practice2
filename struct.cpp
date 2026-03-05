#include <iostream>

using namespace std;

struct Test {
    int a;
};

int main(void) {

    Test t;

    t.a = 3;

    if(t.a > 1) 
        cout << "Yes" << endl;
    else 
        cout << "No" << endl;

    return 0;
}