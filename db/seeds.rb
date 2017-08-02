Book.create(title: 'Pet the Horsie at the Zoo', author: 'Wryter McChildrens')
Book.create(title: 'Gloom & Doom', author: 'Blake VonBleak')
Book.create(title: 'Holistic Car Repair', author: 'Name Redacted')


# Voice.create(talentid: "ABC123", sound: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3", booking: "https://www.google.com")
#
#
# Match.create(book_id: 3, voice_id: 1, comment: "Neato keen")
# Match.create(book_id: 3, voice_id: 1, comment: ":-)  ^_^")
# Match.create(book_id: 3, voice_id: 1, comment: "Yahoo!!!!!!")


MatchedVoice.create(book_id: 3, talentid: 123456, url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3", booking: "https://www.google.com", comment: "Neato keen")
MatchedVoice.create(book_id: 3, talentid: 123456, url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3", booking: "https://www.google.com", comment: ":-)  ^_^")
MatchedVoice.create(book_id: 3, talentid: 123456, url: "https://voicebunny.s3.amazonaws.com/sample/VoiceBunny_-_ID_B8AMQ8O_-_Sample_80459.mp3", booking: "https://www.google.com", comment: "Yahoo!!!!!!")
