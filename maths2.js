let n1 = randint(0, 10)
let n2 = randint(0, 10)
basic.showNumber(n1)
basic.showNumber(n2)
basic.clearScreen()
if (n1 > n2) {
    basic.showNumber(n1)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showNumber(n2)
} else {
    basic.showNumber(n2)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showNumber(n1)
}
basic.forever(function () {
	
})
