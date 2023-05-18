"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("./message");
describe('messager', () => {
    test('knows how to greet', () => {
        expect((0, message_1.message)()).toBe("hello");
    });
});
