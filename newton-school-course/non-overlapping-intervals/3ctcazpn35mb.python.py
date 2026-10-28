// ─── 2 ───
def remove_overlapping(intervals):
    intervals.sort(key=lambda x: x[1])
    cnt=0
    end = intervals[0][1]
    for i in range(1,len(intervals)):
        if intervals[i][0] < end:
            cnt+=1
        else:
            end=intervals[i][1]
    return cnt


// ─── 9 ───
1