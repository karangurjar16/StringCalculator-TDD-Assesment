import { describe, it, expect } from 'vitest';
import { add } from '../stringCalculator';


describe('String Calculator', () => {

    describe('Step 1: Basic functionality', () => {

        it('should return 0 for an empty string', () => {
            expect(add('')).toBe(0);
        });

        it('should return the number itself for single number', () => {
            expect(add('1')).toBe(1);
            expect(add('5')).toBe(5);
        });

    });

});