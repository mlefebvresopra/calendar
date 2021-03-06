'use strict';

// todo remove this dead code

class CookieParser {
    constructor(cookies) {
        // js singleton pattern
        if (CookieParser._instance) {
            return CookieParser._instance;
        }
        CookieParser._instance = this;
        this.cookies = CookieParser.parseCookies(cookies);
    }

    getVal(key) {
        return this.cookies[key];
    }

    static parseCookies(cookies) {
        var oCookies = {};
        cookies.split(';').forEach((cookie) => {
            const parts = /([^=]*)=(.*)/ig.exec(cookie);
            oCookies[parts[1]] = parts[2];
        });
        return oCookies;
    }

    static getVal(cookies, key) {
        var cookieParser = new CookieParser(cookies);
        return cookieParser.getVal(key);
    }
}

/////   exports    /////

module.exports = CookieParser;