#include <stdio.h>

struct Rectangle {
    int width;
    int height;
};

void readRectangles(struct Rectangle rectangles[], int n) {
    for (int i = 0; i < n; i++) {
        printf("Podaj szerokosc i wysokosc %d. prostokata: ", i + 1);
        scanf("%d %d", &rectangles[i].width, &rectangles[i].height);
    }
}

void printSquares(struct Rectangle rectangles[], int n) {
    for (int i = 0; i < n; i++) {
        if (rectangles[i].width == rectangles[i].height) {
            printf("Prostokat %d: szerokosc = %d, wysokosc = %d\n",
                   i + 1, rectangles[i].width, rectangles[i].height);
        }
    }
}

int main() {
    int n;
    printf("Podaj liczbe prostokatow: ");
    scanf("%d", &n);

    struct Rectangle rectangles[n];
    readRectangles(rectangles, n);
    printSquares(rectangles, n);

    return 0;
}
