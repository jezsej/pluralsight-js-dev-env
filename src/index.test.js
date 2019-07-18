import { expect } from 'chai'; //assertion library
import jsdom from 'jsdom'; //DOM testing
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });

});

describe('index.html', () => {
    it('should say hello', done => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const p = window.document.getElementsByTagName('p')[0];
            expect(p.innerHTML).to.equal("Hello world!");
            done();
            window.close();

        });
    });

});
