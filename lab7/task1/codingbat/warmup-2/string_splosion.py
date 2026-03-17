def string_splosion(s):
    result = ""
    for i in range(len(s)):
        result += s[:i+1]
    return result

string_splosion('Code')
string_splosion('abc')
string_splosion('ab')