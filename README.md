How to use it using npm package 

Step 1 :Install npm package

npm install show-less-more-string

Step 2 : import module 
import { ShowLessMoreStringModule} from 'show-less-more-string';
 
imports: [
    BrowserModule,
    AppRoutingModule,
    ShowLessMoreStringModule
  ]


Step 3 :How to use 

<app-show-more [_longString]='YourString' [_length]=25> </app-show-more>

