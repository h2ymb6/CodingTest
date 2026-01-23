#include <stdio.h>

void reverseArr(int* arr, int n, int m) {
    int i = n, j = m - 1;
    while (i < j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
}

int main() {
    int a, b;
    int c, d;

    scanf("%d %d", &a, &b);

    int arr[a];

    for (int i = 0; i < a; i++) {
        arr[i] = i + 1;
    }

    for (int i = 0; i < b; i++) {
        scanf("%d %d", &c, &d);
        reverseArr(arr, c - 1, d);  // 보통 입력은 1-based
    }

    for (int i = 0; i < a; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
