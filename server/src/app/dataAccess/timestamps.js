'use strict'

function timestamps(schema, options) {
  schema.add({
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  })

  schema.pre('save', function (next) {
    this.update_at = new Date()
    next()
  })
}

module.exports = exports = timestamps