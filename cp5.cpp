#include <iostream>

using namespace std;

int main() {

    int i, sum = 0;

    for(i = 1; i <=5; i++) {
        if(i == 4)  
            continue;
        sum += i;
    }
    cout << sum << endl;
    return 0;
}