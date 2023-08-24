// Endpoint for querying the fibonacci numbers

import { fibonacci } from "./fib"; // Use ES6 import syntax
import { Request, Response } from 'express'; // Import types for Request and Response

export default (req: Request, res: Response) => { // Add type annotations for req and res
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10)); // Parse with radix 10
  let result: string;

  if (fibN >= 0) {
    result = `fibonacci(${num}) is ${fibN}`; // Correct result
  } else {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

