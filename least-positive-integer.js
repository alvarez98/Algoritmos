/**
 * Write a function:
 * function solution(A);
 *
 * that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * 1 1 2 3 4 6
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000].
**/

const solution = (A) => {
    let noDuplicates = [...new Set(A)], solution 
    let positives = noDuplicates.filter(number => number > 0)
    for (i = 1; i < positives.length + 2; i++) {   
        if (!positives.includes(i)) {
            solution = i
            break
        }
    }
    return solution
}

console.log(solution([1, 3, 6, 4, 1, 2]))    // should return 5
console.log(solution([1, 2, 3]))             // should return 4
console.log(solution([-1, -3]))              // should return 1