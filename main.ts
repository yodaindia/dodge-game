input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let points = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
player.set(LedSpriteProperty.Blink, 220)
let enemy = game.createSprite(2, 0)
loops.everyInterval(1000, function () {
    points += 1
})
basic.forever(function () {
    basic.pause(500)
    enemy.change(LedSpriteProperty.Y, 1)
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        enemy.set(LedSpriteProperty.X, randint(0, 4))
        enemy.set(LedSpriteProperty.Y, 0)
    }
    if (player.isTouching(enemy)) {
        points += -1
    }
})
