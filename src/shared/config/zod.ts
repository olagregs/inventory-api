import { z } from  'zod';

z.config({
  customError: (issue) => {
    const message = issue.path?.join('.');

    if(issue.input === undefined) {
      return { message: `The ${message} field is required`}
    }

    if(issue.code === 'invalid_type') {
      const type = typeof issue.input;

      return { message: `Received ${message} field as ${type}, but expected as ${issue.expected}`} 
    }
    
    return { message: issue.message ?? 'Unexpeted error'}
  }
});