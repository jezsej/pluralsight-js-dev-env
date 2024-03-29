import { expect } from 'chai'; //assertion library
import jsdom from 'jsdom'; //DOM testing
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });

});

describe('index.html', () => {
    it('should have h1 that says users', done => {
        const index = fs.readFileSync('./src/index.html', "utf-8"); //hold index.html file in memory
        jsdom.env(index, function(err, window) { // add index.html to virtual DOM
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();

        });
    });

});
