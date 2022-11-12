# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

Answer: because the scope of line 1 is global and the scope of the function is local to that function.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

Answer:
10
undefined
reference error

10 because line 5 is accessing the variable declared on line 1 due to closure.
undefined because the f1 function isn't returning anything.
reference error because the y variable only exists in the scope of the f1 function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Answer:
9
{ x: 10 }

line 8 and 18 won't print anything because the function call is not wrapped in console.log().
line 9 prints 9 because x is accessible here within the global scope.
line 19 will print { x: 10 } because y has been copied with it's reference, not value.
