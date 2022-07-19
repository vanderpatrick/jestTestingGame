/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close(); 
});

describe("game object contains correct keys", () => {
    test("score key exits", () => {
        expect("score" in game).toBe(true);
    });

    test("currentGame key exits", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exits", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exits", () => {
        expect("choices" in game).toBe(true);
    });

});