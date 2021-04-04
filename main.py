Num = 0
N = 0
F = 0
for index in range(12):
    F = index + 1
    serial.write_value("F", F)
    for index2 in range(12):
        N += 1
        Num = F * N
        serial.write_number(F)
        serial.write_string("x")
        serial.write_number(N)
        serial.write_string("=")
        serial.write_number(Num)
        serial.write_line("")