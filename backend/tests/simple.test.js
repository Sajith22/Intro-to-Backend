// A simple test to check if 1 + 1 equals 2
// If this fails, the Robot will scream!

const sum = (a, b) => a + b;

if (sum(1, 1) !== 2) {
  throw new Error("Math is broken! 1+1 did not equal 2.");
} else {
  console.log("Test Passed: Math works.");
}