#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main(){

    char input[100];
    char output[100];
    int i,j=0;
    int isPalindrome = 1;

    printf("input the string that you want me to check: ");
    fgets(input, sizeof(input), stdin);
    int len = strlen(input);
    if(input[len-1] == '\n') input[len-1] = '\0';

    for(i=0; i<len; i++){
        if(isalnum(input[i])){
            output[j++]=tolower(input[i]);
        }
    }
    output[j] = '\0';

    for(i=0; i<j; i++){
        if(output[i]!=output[j-i-1]){
            isPalindrome=0;
            break;
        }
    }

    if(isPalindrome==0){
        printf("This is not a Palindrome.\n");
    } else {
        printf("This is a Palindrome\n");
    }
return 0;
}