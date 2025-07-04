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

        it('should return sum for two comma-separated numbers', () => {
            expect(add('1,2')).toBe(3);
            expect(add('1,5')).toBe(6);
            expect(add('10,20')).toBe(30);
        });

    });

    describe('Step 2: Handle multiple numbers', () => {

        it('should handle three numbers', () => {
            expect(add('1,2,3')).toBe(6);
        });

        it('should handle four numbers', () => {
            expect(add('1,2,3,4')).toBe(10);
        });

        it('should handle many numbers', () => {
            expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
        });

    });

    describe('Step 3: Handle new lines between numbers', () => {

        it('should handle new line as delimiter', () => {
            expect(add('1\n2,3')).toBe(6);
        });

        it('should handle multiple new lines', () => {
            expect(add('1\n2\n3')).toBe(6);
        });

        it('should handle mix of commas and new lines', () => {
            expect(add('1,2\n3,4\n5')).toBe(15);
        });

        it('should handle complex combinations', () => {
            expect(add('1\n2,3\n4,5,6')).toBe(21);
        });

    });

    describe('Step 4: Support different delimiters', () => {

        it('should support semicolon as delimiter', () => {
            expect(add('//;\n1;2')).toBe(3);
        });

        it('should support semicolon with multiple numbers', () => {
            expect(add('//;\n1;2;3')).toBe(6);
        });

        it('should support asterisk as delimiter', () => {
            expect(add('//*\n1*2*3*4')).toBe(10);
        });

        it('should support dot as delimiter', () => {
            expect(add('//.\n1.2.3')).toBe(6);
        });

    });

    describe('Step 5: Negative numbers validation', () => {

        it('should throw exception for single negative number', () => {
            expect(() => add('-1')).toThrow('negative numbers not allowed -1');
        });

        it('should throw exception for negative number with positive numbers', () => {
            expect(() => add('1,-2,3')).toThrow('negative numbers not allowed -2');
        });

        it('should throw exception for multiple negative numbers', () => {
            expect(() => add('-1,2,-3')).toThrow('negative numbers not allowed -1,-3');
        });

        it('should show all negative numbers in exception message', () => {
            expect(() => add('-1,-2,-3,4')).toThrow('negative numbers not allowed -1,-2,-3');
        });

        it('should throw exception with custom delimiter and negative numbers', () => {
            expect(() => add('//;\n1;-2;3;-4')).toThrow('negative numbers not allowed -2,-4');
        });

        it('should throw exception for negative numbers with new lines', () => {
            expect(() => add('1\n-2,3')).toThrow('negative numbers not allowed -2');
        });

        it('should handle mix of negative and positive with various delimiters', () => {
            expect(() => add('//*\n-1*2*-3*4')).toThrow('negative numbers not allowed -1,-3');
        });
        
    });

});