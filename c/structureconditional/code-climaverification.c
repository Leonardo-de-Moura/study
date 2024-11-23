#include <stdio.h>
int main() {
    int chove, frio;
    printf("Esta chovendo?(1 para sim, 0 para não):");
    scanf("%d", &chove);
    printf("Esta frio?(1 para sim, 0 para não):");
    scanf("%d", &frio);
    if (chove == 1 && frio == 1) {
        printf("O tempo esta pessimo\n");
    } else if (chove == 1 || frio == 1) {
        if (chove == 1 && frio == 0) {
            printf("O tempo esta mais ou menos\n");
        } else if (chove == 0 && frio == 1) {
            printf("O tempo esta mais ou menos\n");
        } else {
            printf("O tempo esta ruim\n");
        }
    } else {
        printf("O tempo esta bom\n");
    }
    return 0;
}


