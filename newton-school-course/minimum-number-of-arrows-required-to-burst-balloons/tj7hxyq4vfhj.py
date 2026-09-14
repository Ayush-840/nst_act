// ─── 2 ───
def findMinArrowShots(points):
    points.sort()
    limit=points[0][1]
    ans=1
    for i in range(1, len(points)):
        curr=points[i][0]   
        if(curr<=limit):
            if(points[i][1]<limit):
                limit = points[i][1]
        else:
            ans+=1
            limit = points[i][1]  
    return ans

// ─── 3 ───
4
10 16
2 8
1 6
7 12