def not_string(s):
    if s.startswith("not"):
        return s
    else:
        return "not " + s
not_string('candy')
not_string('x')
not_string('not bad')