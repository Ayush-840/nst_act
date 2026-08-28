// Insert a new document into the 'databaseTopicsCovered' collection
db.databaseTopicsCovered.insertOne({
  topic: "mongoDB_basics",                 // 🔸 Enter the name of the new topic (e.g., "mongoDB_basics")
  practice: false,                // 🔸 Enter true or false depending on whether you've practiced it
  advancedTopics: [          // 🔸 List any advanced subtopics (can leave empty if none)
    // "example_subtopic1",
    // "example_subtopic2"
    
  ]
});