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
  talentid: "5FC7984",
  url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_5FC7984_-_Sample_36393.mp3",
  booking: "http://voicebunny.com/search/samples/5FC7984",
  comment: "This voice is perfect for the tone of this book",
  demographics: "youngAdultMale"
  )
MatchedVoice.create(
  user_id: 1,
  book_id: 3,
  talentid: "J69RHAK",
  url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_J69RHAK_-_Sample_106655.mp3",
  booking: "http://voicebunny.com/search/samples/J69RHAK",
  comment: "Just meh",
  demographics: "youngAdultFemale"
  )
MatchedVoice.create(
  user_id: 1,
  book_id: 3,
  talentid: "32J898K",
  url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_32J898K_-_Sample_11617.mp3",
  booking: "http://voicebunny.com/search/samples/32J898K",
  comment: "Neato keen!",
  demographics: "teenageGirl"
  )
