import sqlite3


conn = sqlite3.connect('alga.db')
cur = conn.cursor()


cur.execute('''
CREATE TABLE IF NOT EXISTS darbinieki (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vards TEXT NOT NULL,
    amats TEXT NOT NULL,
    alga INTEGER NOT NULL
)
''')


cur.execute("DELETE FROM darbinieki")  

saraksts = [
    ('Jānis Bērziņš', 'Programmētājs', 2500),
    ('Ilze Kalniņa', 'Projektu vadītāja', 3100),
    ('Andris Ozols', 'Testētājs', 2200),
    ('Zane Liepa', 'Dizainers', 2700)
]

cur.executemany("INSERT INTO darbinieki (vards, amats, alga) VALUES (?, ?, ?)", saraksts)


cur.execute("SELECT vards, amats, alga FROM darbinieki ORDER BY alga DESC LIMIT 2")
labak_apmaksatie = cur.fetchall()

print("Divi vislabāk apmaksātie darbinieki:")
for darbinieks in labak_apmaksatie:
    print(f"{darbinieks[0]}, {darbinieks[1]}, {darbinieks[2]} EUR")

conn.commit()
conn.close()