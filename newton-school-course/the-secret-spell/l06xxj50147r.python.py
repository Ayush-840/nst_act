// ─── 2 ───
def magic_spell(spell):
    return helper(spell,1)

def helper(spell,i):
    if i==len(spell):
        return spell[-i]
    return spell[-i] + helper(spell,i+1)

// ─── 3 ───
live on time