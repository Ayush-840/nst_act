// ─── 2 ───
def generateParenthesis(n):
    res=[]
    def ans(openn, close, s):
        if openn == n and close == n:
            res.append(s)
            return
        if openn < n:
            ans(openn + 1, close, s + "(")   
        if close < openn:
            ans(openn, close + 1, s + ")")
    ans(0,0,"")
    return res


// ─── 9 ───
((()))
(()())
(())()
()(())
()()()