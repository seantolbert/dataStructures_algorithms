Big O is a way to formalize fuzzy counting

It allows us to talk formally about how the run time of an algorithm
grows as the inputs grow

we only care about the trends

we say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

constant - O(1) - there is no change or reflection of the runtime no mattter what the input is. n = 50 and n = 2 would have the same basic speed

linear - O(n) - the number of operations are bound by the multiple of n. if n = 50 you would see a decrease in speed as opposed to n = 2

quadratic - O(n^2) - an operation inside of another operation. for example, a for loop, that iterates through an entire array could have another for loop nested within cousing speed degradation to compound exponentially

Depending on what we count, the numvber of operations can be as low as 2n or as high as 5n + 2

But regardless of the exact number, the number of operations grows roughly proportionally with n. If n doubles, the num,ber of operations will also roughly double

Rules of thumb:

    constants do not matter -
    O(2n) = O(n)
    O(500) = O(1)
    O(13n^2) = O(n^2)

    smaller terms do not matter - 
    O(n + 10) = O(n)
    O(1000n + 50) = O(n)
    O(n^2 + 5n + 8) = O(n^2)

Big O shorthands:

    1. Arithmetic operations are constant
    2. Variable assignment is constant
    3. Accessing elements in an array by index or object by key is constant
    4. In a loop, the time complexity is the length of the loop times the complexity of whateer happens in that loop

Space complexity: 

    how do we analize the runtime of an algorithm as the size of the inputs increase?

    we can still use big O notation to analyze space complexity:
        how much additional memory do we need to allocate in order to run the code in our algorithm

    Technically we are referring to AUXILLARY SPACE COMPLEXITY
        which refers to the space requres by the algorithm, not the including space taken up by the inputs themselves

    Rules of thumb:

        most primitives (booleans, number, undefined, null) are constant space
        strings require O(n) space, where n is the length of the string
        reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

Logarithms:

    sometimes the Big O notation is more complex than O(1), O(n), and O(n^2), most commonly logarithms

    the logarithm of a number roughly measures the number of times you cabn divide thaht number by 2 before you get a value thats less than or equal to 1

    this is only important because:
        certain searching algorithms have logarithmixc time complexity
        efficient sorting algoriths involve logs
        recursion sometimes involves log space complexity

    