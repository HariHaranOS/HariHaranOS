// question1
// program to print even number between 1 to 20

for(i=1;i<=20;i=i+2)
{
    console.log("The even number 1 to 20 is : "+i)
}


// program to print add number between 1 to 20

for(i=1;i<=20;i=i+3)
{
    console.log("The odd number 1 to 20 is : "+i)
}

// question2
 //  All weekdays and weekends using switch case

let day=5;
switch (day)
{
    case 1:
        console.log("this is monday");
        break;
    case 2:
        console.log("this is tuesday");
        break;
    case 3:
        console.log("this is wednesday");
        break;
    case 4:
        console.log("this is thuesday");
        break;
    case 5:
        console.log("this is friday");
        break;
    case 6:
        console.log("this is saturday");
        break;
    case 7:
        console.log("this is sunday");
        break;
    default:
        console.log("value betwn 1 to 7")
}


// 3. write a program  to print 10 20 30 40 50 60 70 80 90 100

            let n=100;
            let i=10;
            while(i<=n)
            {
                console.log(i);
                i=i+10;
                
            }