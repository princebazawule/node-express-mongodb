module.exports = (mongoose, mongoosePaginate) => {
  const TutorialSchema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
  )

  TutorialSchema.plugin(mongoosePaginate)

  const Tutorial = mongoose.model('tutorials', TutorialSchema)
  
  return Tutorial
}







// module.exports = (mongoose) => {
//   const Tutorial = mongoose.model(
//     'tutorial',
//     mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         published: Boolean,
//       },
//       { timestamps: true }
//     )
//   )

//   return Tutorial
// }




// const { Schema } = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate-v2')

// module.exports = (mongoose) => {
//   const TutorialSchema = new mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         published: Boolean,
//       },
//       { timestamps: true }
//   )

//   TutorialSchema.plugin(mongoosePaginate)

//   const Tutorial = mongoose.model('tutorials', TutorialSchema)
//   Tutorial.paginate(query, options)
//       .then()
//       .catch()
// }





// if fe uses 'id' instead

// module.exports = mongoose => {
//     var schema = mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         published: Boolean
//       },
//       { timestamps: true }
//     )
  
//     schema.method('toJSON', function() {
//       const { __v, _id, ...object } = this.toObject()
//       object.id = _id
//       return object
//     })
  
//     const Tutorial = mongoose.model('tutorial', schema)
//     return Tutorial
//   }