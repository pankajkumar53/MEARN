/* 1. Declare 10 wrong and 10 right variables names with reason why those are valid and  not valid . */

    /* Valid Variable */
    var $Name = "Pankaj"; // Variable names can start with a dollar sign.
    var _Name = "Pankaj"; // Variable names can start with an underscore.
    var name123 = "Pankaj"; // Variable names can contain numbers.
    var name$ = "Pankaj"; // Variable names can contain special characters.
    var yourName = "Pankaj"; // Variable names can be written in camel case.
    var your_name = "Pankaj"; // Variable names can be contain underscore in between.
    var YOURNAME = "Pankaj"; // Variable names can be written in all Capital letter.
    var YOUR_NAME = "Pankaj"; // Variable names can be written in all Capital letter and in between _.
    var yourName1 = "Pankaj"; // Variable names can be written in camel case with no.
    var yourname = "Pankaj"; // Variable names can be written in all small letter


    /* !Valid Variable */
    /* var 1Name; // Variable names cannot start with a number.
    var name name; // Variable names cannot contain spaces.
    var name@; // Variable names cannot contain special characters.
    var your-name; // Variable names cannot contain hyphens.
    var @YOURNAME; // Variable names cannot start with Special characters.
    var -name; // Variable names cannot start with hyphens.
    var var ; // Variable names cannot start with reserved keyword
    var your*name // Variable names cannot contain special characters in middle
    var null; // Variable names cannot declare with null because it is reserved
    var true; // Variable names cannot declare with null because it is reserved */

/* 2. Take different tags of your choice and apply innerHTML to display value on your Html page . */
    document./* getElementById("name") */body.innerHTML = "This text is set using innerHTML!";

/* 3. Display all variables created in step one on  console.log(), document.write() and window.alert() */
    console.log($Name);
    console.log(_Name);
    console.log(name123);
    console.log(name$);
    console.log(yourName);
    console.log(your_name);
    console.log(YOURNAME);
    console.log(YOUR_NAME);
    console.log(yourName1);
    console.log(yourname);

    document.write("<br>" + $Name + "<br>");
    document.write(_Name + "<br>");
    document.write(name123 + "<br>");
    document.write(name$ + "<br>");
    document.write(yourName + "<br>");
    document.write(your_name + "<br>");
    document.write(YOURNAME + "<br>");
    document.write(YOUR_NAME + "<br>");
    document.write(yourName1 + "<br>");
    document.write(yourname + "<br>");

    /* window.alert($Name);
    window.alert(_Name);
    window.alert(name123);
    window.alert(name$);
    window.alert(yourName);
    window.alert(your_name);
    window.alert(YOURNAME);
    window.alert(YOUR_NAME);
    window.alert(yourName1);
    window.alert(yourname); */

/* 4. Declare and initiate 20  variables with different types of primitive and non primitive values */
   /* Primitive */
    var str = "Hello, world!";  /* String */
    var num = 42; /* number int and float */
    let bigNum = 123456789012345678901234567890n; /* large integers beyond the safe integer limit for Number */
    var bool = true; /* Boolean */
    var und = undefined; /* undefined */
    var nul = null; /* null */
    var sym = Symbol("My Symbol"); /* Symbol it is unique key */
    var bin = 0b1010; /* Binary */
    var oct = 0o12; /* Octal */
    var hex = 0xFF; /* Hexadecimal */

    /* Non-Primptive */
    var func = function() { console.log("This is a function"); }; /* Function */
    var regex = /[a-z]/; /* Regular Expression */
    var obj = {name: "John", age: 30};
    var arr = [1, 2, 3, 4, 5];
    var regex = /[a-z]/;
    var date = new Date();
    var error = new Error("This is an error");
    var set = new Set([1, 2, 3, 4, 5]);
    var map = new Map([[1, "one"], [2, "two"]]);
    var weakSet = new WeakSet([new Set([1, 2, 3]), new Set([4, 5, 6])]);

/* 5. Add a comment to your to explain program functionality */
    // single line comments
    /* multi-line comments */


/* 6. Show the use of different operators each has 1 program */
    var num1 = 10;
    var num2 = 5;

    /* Arithmetic Operators */
    var sum = num1 + num2; 
    var diff = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
    var remainder = num1 % num2;
    
    /* Comparison (Relational) Operators */
    var result = num1 > num2; // false
    var result2 = num1 < num2; // true
    var result3 = num1 == num2; // false
    var result4 = num1 === num2; // false
    var result5 = num1 != num2; // true
    var result6 = num1 !== num2; // true
    
    /* Logical Operators */
    var bool1 = true;
    var bool2 = false;
    var result7 = bool1 && bool2; // false
    var result8 = bool1 || bool2; // true
    var result9 = !bool1; // false
    
    /* Bitwise Operators */
    var result10 = num1 & num2; // 0

/* 7. If else assignment */
    /* Find a great number between two numbers */
    var num1 = 5;
    var num2 = 6;

    if (num1 > num2) {
        console.log("num1 > num2");
    } else {
        console.log("num1 <= num2");
    }

    /* Find great number from 3 numbers */
    var num1 = 5;
    var num2 = 6;
    var num3 = 7;
    
    if (num1 > num2 && num1 > num3) {
        console.log("num1 is the greatest");
    } else if (num2 > num1 && num2 > num3) {
        console.log("num2 is the greatest");
    } else {
        console.log("num3 is the greatest");
    }

    /* Check number is even */
    var num = 10;
    
    if (num % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }

    /* Check number is odd */
    var num = 10;
    
    if (num % 2 !== 0) {
        console.log("Number is odd");
    } else {
        console.log("Number is even");
    }

    /* Check number is palindrome */
    var num = 121;
    var strNum = num.toString();
    var reverseStr = strNum.split("").reverse().join("");
    
    if (strNum === reverseStr) {
        console.log("Number is palindrome");
    } else {
        console.log("Number is not palindrome");
    }

/* 8. Loops */
    /* Print counting 1 to 100 */
    for (var i = 1; i <= 100; i++) {
        console.log(i);
    }

    /* Print character of string  */
    var str = "Hello, World!";
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

    /* Print even and odd number from 1 to 10 */
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }

    /* Print leap year number */
    for (var year = 1900; year <= 2024; year++) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            console.log(year + " is a leap year");
        }
    }

    /* Print five different Star pattern */
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            console.log("* ")
        }
        console.log();
    }

    for (var i = 5; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            console.log("* ")
        }
        console.log();
    }

    for (var i = 1; i <= 5; i++) {
        for (var j = 5; j >= i; j--) {
            console.log("* ")
        }
        console.log();
    }

    for (var i = 5; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            console.log("* ")
        }
        console.log();
    }

    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5 - i; j++) {
            console.log("  ")
        }
        for (var j = 1; j <= 2 * i - 1; j++) {
            console.log("* ")
        }
        console.log();
    }

    /* Print counting in reverse */
    for (var i = 100; i >= 1; i--) {
        console.log(i);
    }

    /* Print table of given number */
    var num = 10;
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }

    /* 15. Calculate the some of 1 to 1000 */
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        sum += i;
    }
    console.log("Sum of 1 to 1000: " + sum);