import { describe, it, expect } from 'vitest';
import { add } from '../stringCalculator';


describe('String Calculator', () => {

    describe('Step 1: Basic functionality', () => {

        it('should return 0 for an empty string', () => {
            expect(add('')).toBe(0);
        });

    });
    
});