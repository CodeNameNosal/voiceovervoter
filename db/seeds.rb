User.create(
    username: "bob",
    email: "bob@bob.com",
    password: "bobbob"
  )

Book.create(user_id: 1, title: 'Pet the Horsie at the Zoo', author: 'Wryter McChildrens')
Book.create(user_id: 1, title: 'Gloom & Doom', author: 'Blake VonBleak')
Book.create(user_id: 1, title: 'Holistic Car Repair', author: 'Name Redacted')


MatchedVoice.create(
  user_id: 1,
  book_id: 3,
  talentid: I6V30,
  url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3",
  booking: "https://www.google.com",
  comment: "Wow, would make a great narrator for this!"
  )
MatchedVoice.create(
  user_id: 1,
  book_id: 3,
  talentid: FX42J,
  url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3",
  booking: "https://www.google.com",
  comment: "This voice is perfect for the tone of this book"
  )
MatchedVoice.create(
  user_id: 1,
  book_id: 3,
  talentid: F64GK,
  url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3",
  booking: "https://www.google.com",
  comment: "This voice would be hilarious for the narrator, but isn't a good fit."
  )
