let Num = 0
let N = 0
let F = 0
for (let index = 0; index <= 11; index++) {
    F = index + 1
    serial.writeValue("F", F)
    for (let index2 = 0; index2 < 12; index2++) {
        N += 1
        Num = F * N
        serial.writeNumber(F)
        serial.writeString("x")
        serial.writeNumber(N)
        serial.writeString("=")
        serial.writeNumber(Num)
        serial.writeLine("")
    }
}
