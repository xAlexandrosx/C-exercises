#include<stdio.h>

int main(){

    int intiger=-1;
    int sum=0;

    while (intiger<0){
        printf("Input a positive intiger: ");
        scanf("%d", &intiger);
        if(intiger<=0){
            printf("this is not a positive intiger\n");
        }
    }

    for(int i=0; i<intiger; i++){
        if(i%3==0 || i%5==0){
            sum=sum+i;
        }
    }

printf("The total sum: %d", sum);

return 0;
}