#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include <string.h>

int main() {
	int n;
	int answer[1000000];
	int a[1000000];
	int b[1000000];

	scanf("%d", &n);

	for (int i = 0; i < n; i++) {
		scanf("%d %d", &a[i], &b[i]);
	}
		
	for (int i = 0; i < n; i++) {
		printf("Case %d: %d\n", i+1, a[i] + b[i]);
	}
}