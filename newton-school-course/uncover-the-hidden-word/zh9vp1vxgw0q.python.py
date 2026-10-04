def extract_hidden_word(s):
    ans=""
    for i in range(len(s)):
        if i%2==0:
            ans +=s[i]
    return ans