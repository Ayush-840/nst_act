from bisect import bisect_left
def maxEnvelopes(envelopes):
    n = len(envelopes)
    envelopes.sort(key = lambda x: (x[0], -x[1]))
    stack = []
    for _, h in envelopes:
        i = bisect_left(stack, h)
        if i == len(stack):
            stack.append(h)
        else:
            stack[i] = h
    return len(stack)