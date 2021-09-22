// import {promises.promiseFn, promises.powFn, promises.promiseMe} from './index';
import promises from './index.js';
import {jest} from '@jest/globals';

describe('sample', ()=>{
    test('1+1 = 2', ()=> {
        expect(1+1).toBe(2)
    })
})

// testing promises
describe('Promises', () => {
    describe('Testing promises.promiseFn', () => {
      test('promises.promiseFn(1, 1) should return 2', () => {
        return promises.promiseFn(1, 1).then((data) => expect(data).toBe(2));
      });
      test('promises.promiseFn(1, 0) should return error "Not allowed"', () => {
        expect.assertions(1);
        return promises.promiseFn(1, 0).catch((error) => expect(error.message).toBe('Not allowed'));
      });
      
    });
    describe('testing promises.powFn', ()=> {
        test('promises.powFn should return 2', ()=>{
            return promises.powFn(2).then(data => expect(data).toBe(4))
        })
        test('promises.powFn(1,0) should return "Pow greater than 100',()=> {
            expect.assertions(1);
            return promises.powFn(11).catch(error => expect(error.message).toBe('Pow greater than 100'))
        });
    });

    // spy
    describe('Testing promiseMe', ()=> {
        test('promises.promiseMe(2, 2) should return 16', ()=> {
            const spyPromiseFn = jest.spyOn(promises, 'promiseFn');
            const spyPowFn = jest.spyOn(promises, 'powFn');
            return promises.promiseMe(2,2).then(data => {
            expect(spyPromiseFn).toHaveBeenCalledTimes(1);
            expect(spyPowFn).toHaveBeenCalledTimes(1);
            expect(data).toBe(16);
            })
            
        })
    })
})