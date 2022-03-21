
int main() {

	double s[5];
	int sum = 0;

	for (int i = 0; i < 5; i++) {
		scanf_s("%f", &s[i]);
		s[i] = ROUND(s[i], 1)
			if (s[i] < 10) {
				s[i] = 10;
			}
	}

	for (int i = 0; i < 5; i++) {
		sum += s[i];
	}

	printf("%f\n", sum / 5);

	for (int i = 0; i < 5; i++) {
		if (0 <= s[i] && s[i] <= 10) {
			printf("%f 프로그래밍 기초반", s[i]);
		}
		else if (10 < s[i] && s[i] < 45) {
			printf("%f 프로그래밍반", s[i]);
		}
		else if (45 <= s[i]) {
			printf("%f 다른 방과후 수업", s[i]);
		}
		if (i != 4) {
			printf("\n");
		}
	}

	return 0;
}