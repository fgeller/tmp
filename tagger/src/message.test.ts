import { message } from "./message";

describe('messager', () => {
  test('knows how to greet', () => {
    expect(message()).toBe("hello");
  });
});

